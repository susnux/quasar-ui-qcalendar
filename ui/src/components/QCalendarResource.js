import { h } from 'vue'

// Quasar
import { QIcon } from 'quasar'

// Mixins
import CalendarIntervals from '../mixins/calendar-intervals.js'

// Util
import props from '../utils/props'
import { convertToUnit } from '../utils/helpers.js'

// Icons
const mdiMenuRight = 'M10,17L15,12L10,7V17Z'
const mdiMenuDown = 'M7,10L12,15L17,10H7Z'

/* @vue/component */
export default {
  name: 'QCalendarResource',

  mixins: [
    CalendarIntervals
  ],

  props: {
    ...props.intervals,
    ...props.resource,
    direction: {
      type: String,
      default: 'next'
    }
  },

  data () {
    return {
      minWidth: '100px'
    }
  },

  created () {
    this.mdiMenuRight = mdiMenuRight
    this.mdiMenuDown = mdiMenuDown
  },

  computed: {
    parsedResourceHeight () {
      const height = parseFloat(this.resourceHeight)
      if (height === 0) {
        return 'auto'
      }
      return height
    },

    parsedResourceWidth () {
      return parseFloat(this.resourceWidth)
    },

    parsedIntervalHeight () {
      const height = parseFloat(this.intervalHeight)
      if (height === 0) {
        return 'auto'
      }
      return height
    }
  },

  methods: {
    __renderHeadIntervals (h) {
      return h('div', {
        staticClass: 'q-calendar-resource__head-intervals'
      }, [
        this.intervals.map(intervals => intervals.map((interval, index) => this.__renderHeadInterval(h, interval, index)))
      ])
    },

    __renderHeadInterval (hh, interval, index) {
      const width = convertToUnit(this.parsedIntervalWidth)
      const height = convertToUnit(this.parsedIntervalHeight)
      const slot = this.$slots['interval-label']()
      const short = this.shortIntervalLabel
      const label = this.intervalFormatter(interval, short)
      const scope = {
        interval,
        index,
        label
      }
      let dragOver

      return slot
        ? slot(scope)
        : h('div', {
          staticClass: 'q-calendar-resource__head-label',
          class: {
            'q-calendar-resource__head-label--droppable': dragOver
          },
          style: {
            maxWidth: width,
            minWidth: width,
            height
          },
          domProps: {
            ondragover: (e) => {
              if (this.dragOverFunc !== undefined) {
                dragOver = this.dragOverFunc(e, interval, 'interval', index)
              }
            },
            ondrop: (e) => {
              if (this.dropFunc !== undefined) {
                this.dropFunc(e, interval, 'interval', index)
              }
            }
          },
          on: this.getDefaultMouseEventHandlers(':interval2', (event, eventName) => {
            return { scope: { timestamp: interval, index, label }, event }
          })
        }, label)
    },

    __renderBody (hh) {
      return h('div', {
        staticClass: 'q-calendar-resource__body'
      }, [
        this.__renderScrollArea(h)
      ])
    },

    __renderScrollArea (hh) {
      return h('div', {
        ref: 'scrollArea',
        staticClass: 'q-calendar-resource__scroll-area'
      }, [
        this.__renderDayContainer(h)
      ])
    },

    __renderHead (hh) {
      return h('div', {
        staticClass: 'q-calendar-resource__head' + (this.sticky === true ? ' q-calendar__sticky' : '')
      }, [
        this.__renderHeadResource(h),
        this.__renderHeadIntervals(h)
      ])
    },

    __renderHeadResource (hh) {
      const slot = this.$slots['resource-header']()
      const width = convertToUnit(this.parsedResourceWidth)
      const height = convertToUnit(this.parsedIntervalHeight)

      const scope = {
        timestamp: this.days[0],
        resources: this.resources,
        intervals: this.intervals[0]
      }
      const intervals = this.intervals

      return h('div', {
        staticClass: 'q-calendar-resource__resource-head' + (this.sticky === true ? ' q-calendar__sticky' : ''),
        style: {
          maxWidth: width,
          minWidth: width,
          height
        },
        on: this.getDefaultMouseEventHandlers(':resource:header2', event => {
          return { scope, event }
        })
      }, [
        slot && slot({ date: this.value, intervals })
      ])
    },

    __renderDayContainer (hh) {
      const component = h('div', {
        staticClass: 'q-calendar-resource__day-container'
      }, [
        this.__renderHead(h),
        this.resources === undefined && this.__renderResourcesError(h),
        this.resources !== undefined && this.__renderBodyResources(h)
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

    __renderBodyResources (hh) {
      const data = {
        staticClass: 'q-calendar-resource__resources-body'
      }

      return h('div', data, this.__renderResources(h))
    },

    __renderResources (hh, resources = undefined, indentLevel = 0) {
      if (resources === undefined) {
        resources = this.resources
      }
      return resources.map((resource, idx) => {
        return this.__renderResourceRow(h, resource, idx, indentLevel)
      })
    },

    __renderResourceRow (hh, resource, idx, indentLevel = 0) {
      const slot = this.$slots['resource-row']()
      const resourceRow = h('div', {
        staticClass: 'q-calendar-resource__resource-row'
      }, [
        this.__renderResourceLabel(h, resource, idx, indentLevel),
        this.__renderResourceIntervals(h, resource, idx),
        slot && slot({ resource, index: idx })
      ])
      if (resource.expanded === true) {
        return [resourceRow, ...this.__renderResources(h, resource.children, indentLevel + 1)]
      }

      return [resourceRow]
    },

    __renderResourceLabel (hh, resource, idx, indentLevel = 0) {
      const slot = this.$slots['resource-label']()
      const scope = {
        resource: resource,
        index: idx
      }
      const width = convertToUnit(this.parsedResourceWidth)
      const height = resource.height !== void 0 ? convertToUnit(resource.height) : convertToUnit(this.parsedResourceHeight)

      return h('div', {
        key: resource[this.resourceKey] + '-' + idx,
        staticClass: 'q-calendar-resource__resource' + (this.sticky === true ? ' q-calendar__sticky' : ''),
        style: {
          maxWidth: width,
          minWidth: width,
          height
        },
        on: this.getDefaultMouseEventHandlers(':resource2', (event, eventName) => {
          return { scope: { resource, index: idx, intervals: this.intervals }, event }
        })
      }, [
        slot ? slot(scope) : this.__renderResourceText(h, resource, idx, indentLevel)
      ])
    },

    __renderResourceText (hh, resource, idx, indentLevel = 0) {
      const label = resource[this.resourceKey]
      if (label === undefined) {
        /* eslint-disable-next-line */
        console.warn('QCalendarResource: resource object requires "resource-key" property to contain resource object key')
      }

      return h('div', {
        staticClass: 'q-calendar-resource__resource-text',
        style: {
          paddingLeft: (10 * indentLevel) + 'px'
        }
      }, [
        resource.children && resource.children.length > 0 && h(QIcon, {
          props: {
            name: (resource.expanded === true ? this.mdiMenuDown : this.mdiMenuRight),
            size: 'md'
          },
          on: {
            click: (e) => {
              resource.expanded = !resource.expanded
              e.stopPropagation()
              this.$emit('expanded', resource)
            }
          }
        }),
        label
      ])
    },

    __renderResourceIntervals (hh, resource, idx) {
      const slot = this.$slots['resource-intervals']()
      const timeStartPosX = this.timeStartPosX,
        timeDurationWidth = this.timeDurationWidth,
        intervals = this.intervals
      return h('div', {
        staticClass: 'q-calendar-resource__resource-intervals'
      }, [
        this.intervals.map(intervals => intervals.map(interval => this.__renderResourceInterval(h, resource, interval, idx))),
        slot && slot({ resource, intervals, timeStartPosX, timeDurationWidth })
      ])
    },

    // interval related to resource
    __renderResourceInterval (hh, resource, interval, idx) {
      // called for each interval
      const slot = this.$slots['resource-interval']()
      const slotData = { resource, interval }
      const width = convertToUnit(this.parsedIntervalWidth)
      const height = resource.height !== void 0 ? convertToUnit(resource.height) : convertToUnit(this.parsedResourceHeight)
      let dragOver

      return h('div', {
        staticClass: 'q-calendar-resource__resource-interval',
        class: {
          'q-calendar-resource__resource-interval--droppable': dragOver
        },
        style: {
          maxWidth: width,
          minWidth: width,
          height
        },
        domProps: {
          ondragover: (e) => {
            if (this.dragOverFunc !== undefined) {
              dragOver = this.dragOverFunc(e, interval, 'resource', resource)
            }
          },
          ondrop: (e) => {
            if (this.dropFunc !== undefined) {
              this.dropFunc(e, interval, 'resource', resource)
            }
          }
        },
        on: this.getDefaultMouseEventHandlers(':time2', (event, eventName) => {
          const scope = this.getScopeForSlotX(this.getTimestampAtEventX(event, interval, this.timeClicksClamped))
          scope.resource = resource
          scope.index = idx
          return { scope, event }
        })
      }, [
        slot && slot(slotData)
      ])
    },

    __renderResourcesError (hh) {
      return h('div', {}, 'No resources have been defined')
    }
  },

  render () {
    return h('div', {
      class: 'q-calendar-resource'
    }, [
      this.__renderBody(h)
    ])
  }
}
