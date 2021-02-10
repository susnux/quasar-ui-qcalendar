import { h } from 'vue'
// Quasar
import { QBtn } from 'quasar'

// Mixins
import CalendarBase from '../mixins/calendar-base.js'

// Util
import props from '../utils/props.js'
import {
  createDayList,
  getDayIdentifier,
  createNativeLocaleFormatter
} from '../utils/Timestamp.js'
import { convertToUnit } from '../utils/helpers.js'

export default {
  name: 'QCalendarWeekly',

  mixins: [
    CalendarBase
  ],

  props: {
    ...props.weeks,
    direction: {
      type: String,
      default: 'next'
    }
  },

  mounted () {
    this.__adjustForWeekEvents()
  },

  updated () {
    this.__adjustForWeekEvents()
  },

  computed: {
    staticClass () {
      return 'q-calendar-weekly'
    },

    parsedMinWeeks () {
      return parseInt(this.minWeeks, 10)
    },

    days () {
      const minDays = this.parsedMinWeeks * this.weekdays.length
      const start = this.getStartOfWeek(this.parsedStart)
      const end = this.getEndOfWeek(this.parsedEnd)

      return createDayList(
        start,
        end,
        this.times.today,
        this.weekdaySkips,
        this.disabledBefore,
        this.disabledAfter,
        this.disabledWeekdays,
        this.disabledDays,
        Number.MAX_SAFE_INTEGER,
        minDays
      )
    },

    todayWeek () {
      const day = this.days[0]
      const start = this.getStartOfWeek(day)
      const end = this.getEndOfWeek(day)

      return createDayList(
        start,
        end,
        day,
        this.weekdaySkips,
        this.disabledBefore,
        this.disabledAfter,
        this.disabledWeekdays,
        this.disabledDays,
        this.weekdays.length,
        this.weekdays.length
      )
    },

    monthFormatter () {
      const longOptions = { timeZone: 'UTC', month: 'long' }
      const shortOptions = { timeZone: 'UTC', month: 'short' }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => short ? shortOptions : longOptions
      )
    },

    styles () {
      const style = {}
      if (this.dayPadding !== undefined) {
        style.padding = this.dayPadding
      }
      style.minWidth = this.cellWidth + '%'
      style.maxWidth = style.minWidth
      return style
    },

    cellWidth () {
      return 100 / this.weekdays.length
    },

    isMiniMode () {
      return this.miniMode === true ||
        (this.miniMode === 'auto' && this.breakpoint !== void 0 && this.$q.screen.lt[this.breakpoint])
    }
  },

  watch: {
    isMinimode (val) {
      if (this.breakpoint === 'auto') {
        this.$emit('mini-mode', val)
      }
    }
  },

  methods: {
    isOutside (day) {
      const dayIdentifier = getDayIdentifier(day)

      return dayIdentifier < getDayIdentifier(this.parsedStart) ||
             dayIdentifier > getDayIdentifier(this.parsedEnd)
    },

    isCurrentWeek (week) {
      for (let i = 0; i < week.length; ++i) {
        if (week[i].current === true) {
          return { timestamp: week[i] }
        }
      }
      return { timestamp: false }
    },

    __adjustForWeekEvents () {
      if (this.isMiniMode === true) return
      if (this.dayHeight !== 0) return
      const slotWeek = this.$slots.week()
      if (slotWeek === void 0) return

      let i = 0
      for (; i < 7; ++i) {
        const weekEvent = this.$refs['weekEvent' + i]
        if (weekEvent === void 0) return
        const wrapper = this.$refs['week' + i]
        if (wrapper === void 0) return
        // this sucks to have to do it this way
        const styles = window.getComputedStyle(weekEvent)
        const margin = parseFloat(styles.marginTop, 10) + parseFloat(styles.marginBottom, 10)
        if (weekEvent.clientHeight + margin > wrapper.clientHeight) {
          wrapper.style.height = weekEvent.clientHeight + margin + 'px'
        }
      }
    },

    __renderContainer (hh) {
      const component = h('div', {
        staticClass: 'q-calendar-weekly__container'
      }, [
        ...this.__renderWeeks(h)
      ])

      if (this.animated === true) {
        const transition = 'q-transition--' + (this.direction === 'prev' ? this.transitionPrev : this.transitionNext)
        return h('transition', {
          props: {
            name: transition,
            appear: true
          }
        }, [
          component
        ])
      }

      return component
    },

    __renderHead (hh) {
      return h('div', {
        staticClass: 'q-calendar-weekly__head'
      }, [
        h('div', {
          staticClass: 'q-calendar-weekly__head--wrapper'
        }, [
          this.showWorkWeeks === true && this.__renderWorkWeekHead(h),
          this.__renderHeadDays(h)
        ])
      ])
    },

    __renderWorkWeekHead (hh) {
      const slot = this.$slots['workweek-header']()
      const scope = {
        start: this.parsedStart,
        end: this.parsedEnd,
        miniMode: this.isMiniMode
      }

      return h('div', {
        staticClass: 'q-calendar-weekly__head-workweek',
        on: this.getDefaultMouseEventHandlers(':workweek:header2', event => {
          return { scope, event }
        })
      }, (slot ? slot({ scope }) : '#'))
    },

    __renderHeadDays (hh) {
      return h('div', {
        staticClass: 'q-calendar-weekly__head-weekdays',
        style: {
          minWidth: this.showWorkWeeks
            ? (this.isMiniMode === true
                ? 'calc(100% - var(--calendar-mini-work-week-width))'
                : 'calc(100% - var(--calendar-work-week-width))')
            : '100%'
        }
      }, [
        ...this.todayWeek.map((day, index) => this.__renderHeadDay(h, day, index))
      ])
    },

    __renderHeadDay (hh, day, index) {
      const width = this.cellWidth + '%'
      const headDaySlot = this.$slots['head-day']()
      const disabled = (this.disabledWeekdays ? this.disabledWeekdays.includes(day.weekday) : false)
      const days = this.days.filter(day2 => day2.weekday === day.weekday)
      const scope = { timestamp: day, days, index, miniMode: this.isMiniMode }

      return h('div', {
        key: day.date,
        staticClass: 'q-calendar-weekly__head-weekday' + (disabled === true ? ' q-disabled-day disabled' : ''),
        style: {
          minWidth: width,
          maxWidth: width
        },
        on: this.getDefaultMouseEventHandlers(':day:header2', event => {
          return { scope, event }
        })
      }, [
        headDaySlot === undefined && this.__renderHeadDayLabel(h, day, this.shortWeekdayLabel || this.isMiniMode),
        headDaySlot !== undefined && headDaySlot(scope)
      ])
    },

    __renderHeadDayLabel (hh, day, shortWeekdayLabel) {
      const weekdayLabel = this.weekdayFormatter(day, shortWeekdayLabel)
      return h('span', {
        staticClass: 'ellipsis'
      }, this.isMiniMode === true && this.shortWeekdayLabel === true ? weekdayLabel.charAt(0) : weekdayLabel)
    },

    __renderWeeks (hh) {
      const days = this.days
      const weekDays = this.weekdays.length
      const weeks = []
      for (let i = 0; i < days.length; i += weekDays) {
        weeks.push(this.__renderWeek(h, days.slice(i, i + weekDays), i / weekDays))
      }

      return weeks
    },

    __renderWeek (hh, week, weekNum) {
      const slotWeek = this.$slots.week()
      const weekdays = this.weekdays
      const slotData = { week, weekdays, miniMode: this.isMiniMode }
      const style = {}

      // this applies height properly, even if workweeks are displaying
      style.height = this.dayHeight > 0 ? convertToUnit(this.dayHeight) : 'auto'

      return h('div', {
        key: week[0].date,
        ref: 'week' + weekNum,
        staticClass: 'q-calendar-weekly__week--wrapper',
        style
      }, [
        this.showWorkWeeks === true && this.__renderWorkWeekGutter(h, week),
        h('div', {
          staticClass: 'q-calendar-weekly__week',
          style: {
            width: this.showWorkWeeks
              ? (this.isMiniMode === true
                  ? 'calc(100% - var(--calendar-mini-work-week-width))'
                  : 'calc(100% - var(--calendar-work-week-width))')
              : '100%'
          }
        }, [
          h('div', {
            staticClass: 'q-calendar-weekly__week-days'
          }, week.map(day => this.__renderDay(h, day))),
          this.isMiniMode !== true && slotWeek !== undefined
            ? h('div', {
              ref: 'weekEvent' + weekNum,
              staticClass: 'q-calendar-weekly__week-events'
            }, slotWeek(slotData))
            : ''
        ])
      ])
    },

    __renderWorkWeekGutter (hh, week) {
      const slot = this.$slots.workweek()
      // adjust day to account for Sunday/Monday start of week calendars
      const day = week.length > 2 ? week[2] : week[0]
      const { timestamp } = this.isCurrentWeek(week)
      const workweekLabel = Number(day.workweek).toLocaleString(this.locale)
      const scope = { workweekLabel, week, miniMode: this.isMiniMode }

      return h('div', {
        key: day.workweek,
        staticClass: 'q-calendar-weekly__workweek',
        class: this.getRelativeClasses(timestamp !== false ? timestamp : day, false),
        on: this.getDefaultMouseEventHandlers(':workweek2', event => {
          return { scope, event }
        })
      }, slot ? slot(scope) : workweekLabel)
    },

    __renderDay (hh, day) {
      const styler = this.dayStyle || this.dayStyleDefault
      const outside = this.isOutside(day)
      const activeDate = this.noActiveDate !== true && this.value === day.date
      const slot = this.$slots.day()
      const scope = { outside, timestamp: day, miniMode: this.isMiniMode, activeDate }
      const hasMonth = (outside === false && this.days.find(d => d.month === day.month).day === day.day && this.showMonthLabel === true)

      let dragOver
      const style = Object.assign({ ...this.styles }, styler(day))
      const dayClass = typeof this.dayClass === 'function' ? this.dayClass(day) : null

      return h('div', {
        key: day.date,
        staticClass: 'q-calendar-weekly__day' + (this.isMiniMode !== true ? ' column' : ''),
        class: {
          ...dayClass,
          ...this.getRelativeClasses(day, outside, this.selectedDates, this.selectedStartEndDates, this.hover),
          'q-active-date': activeDate === true,
          disabled: this.enableOutsideDays !== true && outside === true,
          'q-calendar-weekly__day--droppable': dragOver
        },
        style,
        domProps: {
          ondragover: (e) => {
            if (this.dragOverFunc !== undefined) {
              dragOver = this.dragOverFunc(e, day, 'day')
            }
          },
          ondrop: (e) => {
            if (this.dropFunc !== undefined) {
              this.dropFunc(e, day, 'day')
            }
          }
        },
        on: this.getDefaultMouseEventHandlers(':day2', event => {
          return { scope, event }
        })
      }, [
        this.__renderDayLabel(h, day),
        this.isMiniMode !== true && this.showDayOfYearLabel && !hasMonth ? this.__renderDayOfYearLabel(h, day) : '',
        this.isMiniMode !== true && hasMonth ? this.__renderDayMonth(h, day) : '',
        h('div', {
          staticClass: 'q-calendar-weekly__day--content full-width' + (this.isMiniMode === true ? ' row justify-center items-center' : '')
        }, slot ? slot(scope) : '')
      ])
    },

    __renderDayLabel (hh, day) {
      const outside = this.isOutside(day)

      // return if outside days are hidden
      if (outside === true && this.hideOutsideDays === true) {
        return
      }

      const dayLabel = this.dayFormatter(day, false)
      const dayLabelSlot = this.$slots['day-label']()
      const dayBtnSlot = this.$slots['day-btn']()

      const selectedDate = (
        // this.isMiniMode &&
        this.selectedDates &&
        this.selectedDates.length > 0 &&
        this.selectedDates.includes(day.date)
      )

      const activeDate = this.noActiveDate !== true && this.value === day.date
      const slotData = { dayLabel, timestamp: day, outside, activeDate, selectedDate, miniMode: this.isMiniMode }

      return dayBtnSlot
        ? dayBtnSlot(slotData)
        : h(QBtn, {
          staticClass: 'q-calendar-weekly__day-label',
          props: {
            size: this.isMiniMode ? 'sm' : this.monthLabelSize,
            unelevated: true,
            round: true,
            dense: true,
            noCaps: true,
            outline: day.current === true,
            disable: day.disabled === true || (this.enableOutsideDays !== true && outside === true)
          },
          style: {
            lineHeight: this.isMiniMode ? 'unset' : '1.715em'
          },
          on: this.getDefaultMouseEventHandlers(':date2', event => {
            return { scope: { timestamp: day }, event }
          })
        }, [
          dayLabelSlot ? dayLabelSlot(slotData) : dayLabel
        ])
    },

    __renderDayOfYearLabel (hh, day) {
      const outside = this.isOutside(day)

      // return if outside days are hidden
      if (outside === true && this.hideOutsideDays === true) {
        return
      }

      const slot = this.$slots['day-of-year']()
      const slotData = { timestamp: day }

      return h('div', {
        staticClass: 'q-calendar-weekly__day-month--day-of-year'
      }, slot ? slot(slotData) : day.doy)
    },

    __renderDayMonth (hh, day) {
      const outside = this.isOutside(day)

      // return if outside days are hidden
      if (outside === true && this.hideOutsideDays === true) {
        return
      }

      const slot = this.$slots['month-label']()
      const monthLabel = this.monthFormatter(day, this.shortMonthLabel)
      const slotData = { monthLabel, timestamp: day, miniMode: this.isMiniMode }

      return h('div', {
        staticClass: 'q-calendar-weekly__day-month ellipsis'
      }, [
        slot ? slot(slotData) : this.isMiniMode !== true ? monthLabel : ''
      ])
    }
  },

  render () {
    return h('div', {
      class: this.staticClass,
      on: {
        dragstart: (e) => {
          e.preventDefault()
        }
      }
    }, [
      !this.hideHeader && this.__renderHead(h),
      this.__renderContainer(h)
    ])
  }
}
