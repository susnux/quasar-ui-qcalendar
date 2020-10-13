(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[223],{"2b01":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="row justify-center" style="max-width: 800px; width: 100%; overflow: hidden;">\n    <div class="q-gutter-sm">\n      <q-checkbox v-model="mobile" label="Use Touch (set if on mobile)" />\n    </div>\n    <q-separator class="full-width" />\n    <div class="row justify-center" style="max-width: 800px; width: 100%; overflow: hidden;">\n      <q-calendar\n        v-model="selectedDate1"\n        view="month"\n        locale="en-us"\n        mini-mode\n        no-active-date\n        short-weekday-label\n        animated\n        :selected-start-end-dates="startEndDates"\n        :day-class="classDay"\n        @mousedown:day2="onMouseDownDay"\n        @mouseup:day2="onMouseUpDay"\n        @mousemove:day2="onMouseMoveDay"\n        style="max-width: 300px; min-width: auto; overflow: hidden"\n      />\n      <q-separator vertical />\n      <q-calendar\n        v-model="selectedDate2"\n        view="month"\n        locale="en-us"\n        mini-mode\n        no-active-date\n        short-weekday-label\n        animated\n        :selected-start-end-dates="startEndDates"\n        :day-class="classDay"\n        @mousedown:day2="onMouseDownDay"\n        @mouseup:day2="onMouseUpDay"\n        @mousemove:day2="onMouseMoveDay"\n        style="max-width: 300px; min-width: auto; overflow: hidden"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\n// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)\nimport QCalendar from \'ui\' // ui is aliased from \'@quasar/quasar-ui-qcalendar\'\n\nconst CURRENT_MONTH = new Date()\n\nfunction getCurrentMonth (month) {\n  const newDay = new Date(CURRENT_MONTH)\n  newDay.setMonth(month)\n  const tm = QCalendar.parseDate(newDay)\n  return tm.date\n}\n\nfunction leftClick (e) {\n  return e.button === 0\n}\n\nexport default {\n  data () {\n    return {\n      selectedDate1: \'\',\n      selectedDate2: \'\',\n      anchorTimestamp: \'\',\n      otherTimestamp: \'\',\n      mouseDown: false,\n      mobile: false\n    }\n  },\n\n  beforeMount () {\n    this.selectedDate1 = getCurrentMonth(CURRENT_MONTH.getMonth())\n    this.selectedDate2 = getCurrentMonth(CURRENT_MONTH.getMonth() + 1)\n  },\n\n  computed: {\n    startEndDates () {\n      const dates = []\n      if (this.anchorDayIdentifier !== false && this.otherDayIdentifier !== false) {\n        if (this.anchorDayIdentifier <= this.otherDayIdentifier) {\n          dates.push(this.anchorTimestamp.date, this.otherTimestamp.date)\n        }\n        else {\n          dates.push(this.otherTimestamp.date, this.anchorTimestamp.date)\n        }\n      }\n      return dates\n    },\n\n    anchorDayIdentifier () {\n      if (this.anchorTimestamp !== \'\') {\n        return QCalendar.getDayIdentifier(this.anchorTimestamp)\n      }\n      return false\n    },\n\n    otherDayIdentifier () {\n      if (this.otherTimestamp !== \'\') {\n        return QCalendar.getDayIdentifier(this.otherTimestamp)\n      }\n      return false\n    },\n\n    lowIdentifier () {\n      // returns lowest of the two values\n      return Math.min(this.anchorDayIdentifier, this.otherDayIdentifier)\n    },\n\n    highIdentifier () {\n      // returns highest of the two values\n      return Math.max(this.anchorDayIdentifier, this.otherDayIdentifier)\n    }\n  },\n\n  methods: {\n    classDay (timestamp) {\n      if (this.anchorDayIdentifier !== false && this.otherDayIdentifier !== false) {\n        return this.getBetween(timestamp)\n      }\n    },\n\n    getBetween (timestamp) {\n      const nowIdentifier = QCalendar.getDayIdentifier(timestamp)\n      return {\n        \'q-selected-day-first\': this.lowIdentifier === nowIdentifier,\n        \'q-selected-day\': this.lowIdentifier <= nowIdentifier && this.highIdentifier >= nowIdentifier,\n        \'q-selected-day-last\': this.highIdentifier === nowIdentifier\n      }\n    },\n\n    onMouseDownDay ({ scope, event }) {\n      if (leftClick(event)) {\n        if (this.mobile === true &&\n          this.anchorTimestamp !== null &&\n          this.otherTimestamp !== null &&\n          this.anchorTimestamp.date === this.otherTimestamp.date) {\n          this.otherTimestamp = scope.timestamp\n          this.mouseDown = false\n          return\n        }\n        // mouse is down, start selection and capture current\n        this.mouseDown = true\n        this.anchorTimestamp = scope.timestamp\n        this.otherTimestamp = scope.timestamp\n      }\n    },\n\n    onMouseUpDay ({ scope, event }) {\n      if (leftClick(event)) {\n        // mouse is up, capture last and cancel selection\n        this.otherTimestamp = scope.timestamp\n        this.mouseDown = false\n      }\n    },\n\n    onMouseMoveDay ({ scope, event }) {\n      if (this.mouseDown === true) {\n        this.otherTimestamp = scope.timestamp\n      }\n    }\n  }\n}\n<\/script>\n'}}]);