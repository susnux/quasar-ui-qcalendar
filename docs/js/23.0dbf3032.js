(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"658e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-markdown"},[a("q-markdown"),a("example-title",{attrs:{title:"Month View"}}),a("example-viewer",{attrs:{title:"Basic",file:"MonthViewBasic","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Dark",file:"MonthViewDark","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Color",file:"MonthViewColor","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"First Day Monday",file:"MonthViewMondayFirstDay","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"5 Day Work Week",file:"MonthViewFiveDayWorkWeek","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Hide Header",file:"MonthViewHideHeader","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Now",file:"MonthViewNow","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe `show-work-weeks` property is available only for month view.\n    ")]),a("example-viewer",{attrs:{title:"Work Weeks",file:"MonthViewWorkWeekNumbers","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Short Weekday Label",file:"MonthViewShortWeekdayLabel","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Short Month Label",file:"MonthViewShortMonthLabel","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe `show-day-of-year-label` property is available only for month view.\n    ")]),a("example-viewer",{attrs:{title:"Show Day of Year Label",file:"MonthViewShowDayOfYearLabel","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe `day-height` property is available only for month view.\n\nThe example below is setting the `day-height` to `100`, the default is `0`, which tells the calendar component to figure out it's own height.\n    ")]),a("example-viewer",{attrs:{title:"Day Height",file:"MonthViewDayHeight","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Outside Days"}}),a("q-markdown",[e._v("\nOutside days, in month view, are those days before and after the currently displayed month. By default, these days are disable to avoid navigation issues when getting selected days from the User. Using the `enable-outside-days` property enables these days.\n    ")]),a("example-viewer",{attrs:{title:"Enable Outside Days",file:"MonthViewEnableOutsideDays","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Hide Outside Days",file:"MonthViewHideOutsideDays","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Disabled"}}),a("q-markdown",[e._v("\nWhen the property `disabled-days` has an array of disabled days, you can hook into the `day-style` property to change the background color of the disabled day.\n    ")]),a("example-viewer",{attrs:{title:"Disabled Days",file:"MonthViewDisabledDays","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nIn this next example, the `disabled-before` is set to the last day of the previous month and the `disabled-after` is set to the first day of the next month. Essentially, this disables all dates but the current month.\n    ")]),a("example-viewer",{attrs:{title:"Disabled Before/After",file:"MonthViewDisabledBeforeAfter","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nIn this next example, the `disabled-weekdays` is set to disable the weekends.\n    ")]),a("example-viewer",{attrs:{title:"Disabled Weekdays",file:"MonthViewDisabledWeekdays","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Navigation"}}),a("example-viewer",{attrs:{title:"Prev/Next",file:"MonthViewPrevNext","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Swipe",file:"MonthViewSwipe","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Selection"}}),a("q-markdown",[e._v("\nIn the next example, click on dates to toggled selected on/off.\n    ")]),a("example-viewer",{attrs:{title:"Selected Dates",file:"MonthViewSelectedDates","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below shows how to use the QCalendar to create a multi-day selector. The critical aspect of this is the `selected-start-end-dates` property. This takes an array of two dates (the first should be less or equal to the last). This property really doesn't do much, except to keep the calendar reactive, so that the `day-style` property can be used to style the selected days.\n\nFor the example below, click a day, and while holding the mouse down, move to a different day. Keep in mind, this is just one way of handling multi-day selection. if you needed swipe navigation on a mobile, you could modify the code to have independent click on start and end days.\n\nKeep in mind that the functionality below won't work with swipe actions.\n    ")]),a("example-viewer",{attrs:{title:"Multi-Day Selection (contiguous)",file:"MonthViewSelection","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Events"}}),a("q-markdown",[e._v('\n::: tip\nThe events below won\'t show up unless there is a listener for it. Therefore, if using `Vue Dev Tools`, you won\'t see it unless you add it.\n:::\n\nYou can add a listener for the following events. An event is comprised of an `event + suffix`. By adding the event with the suffix, you get the completed listener name.\n\n| Event       | `:day2`            | `:workweek2`        | `:workweek:header2` | `:day:header2`     | `:date2`           |\n| ----------- | :----------------: | :----------------: | :-----------------: | :----------------: | :----------------: |\n| click       | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |\n| contextmenu | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |\n| mousedown   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mousemove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mouseup     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mouseenter  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mouseleave  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| touchstart  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| touchmove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| touchend    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n\n::: warning\nDo NOT combine suffixes. Only one suffix per event. A different suffix will give you a different event.\n:::\n\n| Suffix | Description | Data |\n| ------ | ----------- | ---- |\n| `:day2` | The day area | `{ scope: { timestamp: { "..." }, outside, miniMode }, event: { "..." } } |\n| `:workweek2` | A workweek area | `{ scope: { workweekLabel, week: [ "..." ], miniMode }, event: { "..." } } |\n| `:workweek:header2` | The area above the workweeks | `{ scope: { start: { "..." }, end: { "..." }, miniMode }, event: { "..." } } |\n| `:day:header2` | The header area that includes weekday | `{ scope: { timestamp: { "..." }, days: [ "..." ], index, miniMode }, event: { "..." } } |\n| `:date2` | The date button | Date in format YYYY-MM-DD |\n\n::: tip\n`:workweek:header2` and  `:day:header2` are new since v2.4.0\n:::\n\n::: warning\nThe events `:day`, `:workweek` and `:date` still exist, but have been marked as deprecated starting with v2.4.0\n:::\n\nThe example below is only showing `click` events as well as the `input` event.\n    ')]),a("example-viewer",{attrs:{title:"Events",file:"MonthViewEvents","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Slots"}}),a("q-markdown",[e._v("\nThe `#day` slot allows you to write anything into the body of the day. To avoid writing on top of the `day-label` add the css class `.q-event` to your item which adds a top margin (and also works for mini-mode).\n\nFor slots that return `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-MM-DD\n  time: '',       // 00:00:00 (optional)\n  year: 0,        // YYYY\n  month: 0,       // mm (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false,  // if timestamp is in the future (based on `now` property)\n  disabled: false // if timestamp is disabled\n}\n```\nThe example below uses the `#day` slot. This constrains your slotted output to that specific day. For a less-constrained slot, look into the `#week` slot further below.\n\n::: tip\nWhen adding events to the `#day` slot, use the css class `q-day-event` to have your slotted output line up properly under the day button. If you make adjustments to the `month-label-size`, other than the default, you may have to override the appropriate css to get your desired results.\n:::\n    ")]),a("example-viewer",{attrs:{title:"Slot (day)",file:"MonthViewSlots","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below uses the **#week** slot (v1.3.2). It's a bit more difficult to work with than the **#day** slot, but allows you to have your devland events displayed in a contiguous manner. Check out the sources to see how it is accomplished.\n\n::: warning\nDo not mix `#day` and `#week` slots or you will have overlapping results.\n:::\n\n::: tip\nWhen adding events to the `#week` slot, use the css class `q-row-event` to have your slotted data line up properly under the day button.\n:::\n\n    ")]),a("example-viewer",{attrs:{title:"Slot (week)",file:"MonthViewWeekSlot","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Slot (head-day)",file:"MonthViewSlotHeadDay","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Themes"}}),a("example-viewer",{attrs:{title:"Theme",file:"MonthViewTheme","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Locale Support"}}),a("example-viewer",{attrs:{title:"Locale",file:"MonthViewLocale","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Custom Toolbar"}}),a("q-markdown",[e._v("\nQCalendar does not come with a navigation toolbar out-of-the-box because we believe developers/designers should be able to make their own custom controls that are visually appealing to their audience. This keeps QCalendar less opinionated of how you want your calendar to look.\n\nThis example is only one of many ways you can style your own QCalendar.\n    ")]),a("example-viewer",{attrs:{title:"Toolbar",file:"MonthViewToolbar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}})],1)},o=[],i=a("fe7d"),n=a("8669"),l=a("384e"),h={name:"MonthView",components:{ExampleTitle:i["a"]},data(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qcalendar/tree/dev/demo/src/examples/",jsPaths:[`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@${l["b"]}/dist/index.umd.min.js`],cssPaths:[`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@${l["b"]}/dist/index.min.css`,"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted(){this.toc=[],this.tempToc=[],this.addToToc("Month View"),this.addToToc("Basic",2),this.addToToc("Dark",2),this.addToToc("Color",2),this.addToToc("First Day Monday",2),this.addToToc("5 Day Work Week",2),this.addToToc("Hide Header",2),this.addToToc("Now",2),this.addToToc("Work Weeks",2),this.addToToc("Short Weekday Label",2),this.addToToc("Short Month Label",2),this.addToToc("Show Day of Year Label",2),this.addToToc("Day Height",2),this.addToToc("Outside Days"),this.addToToc("Enable Outside Days",2),this.addToToc("Hide Outside Days",2),this.addToToc("Disabled"),this.addToToc("Disabled Days",2),this.addToToc("Disabled Before/After",2),this.addToToc("Disabled Weekdays",2),this.addToToc("Navigation"),this.addToToc("Prev/Next",2),this.addToToc("Swipe",2),this.addToToc("Selection"),this.addToToc("Selected Dates",2),this.addToToc("Multi-Day Selection (contiguous)",2),this.addToToc("Events"),this.addToToc("Events",2),this.addToToc("Slots"),this.addToToc("Slot (day)",2),this.addToToc("Slot (week)",2),this.addToToc("Slot (head-day)",2),this.addToToc("Themes"),this.addToToc("Theme",2),this.addToToc("Locale Support"),this.addToToc("Locale",2),this.addToToc("Custom Toolbar"),this.addToToc("Toolbar",2),this.toc=this.tempToc},computed:{toc:{get(){return this.$store.state.common.toc},set(e){this.$store.commit("common/toc",e)}}},methods:{addToToc(e,t=1){let a=e;a=1===t?"title-"+a:"example-"+a;const s=Object(n["b"])(a);this.tempToc.push({children:[],id:s,label:e,level:t})}}},r=h,c=a("2877"),d=Object(c["a"])(r,s,o,!1,null,null,null);t["default"]=d.exports},8669:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i}));a("5319"),a("498a");function s(e){var t=document.createElement("textarea");t.className="fixed-top",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function o(e){const t=window.location.origin+window.location.pathname+"#"+e,a=document.getElementById(e);a&&(a.id=""),window.location.hash="#"+e,a&&setTimeout((()=>{a.id=e}),300),s(t),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function i(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},fe7d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},o=[],i=a("8669"),n={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle(){return Object(i["b"])("title-"+this.title)}},methods:{copyHeading:i["a"]}},l=n,h=a("2877"),r=Object(h["a"])(l,s,o,!1,null,null,null);t["a"]=r.exports}}]);