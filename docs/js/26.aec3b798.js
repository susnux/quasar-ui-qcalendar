(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"1ea7":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-markdown"},[a("q-markdown",[e._v("\n::: tip\nTo use the scheduler, you need to use the `resources` property, which is an array of objects, containing a key as defined by the `resource-key` (default `label`). It's this key that will be displayed in your scheduler.\n```js\nconst rooms = [\n  { id: 1, label: 'Room 1' /* any other keys you want associated with the data */ },\n  { id: 2, label: 'Room 2' },\n  { id: 3, label: 'Room 3' },\n  ...\n]\n```\n:::\n    ")]),a("example-title",{attrs:{title:"Scheduler View"}}),a("example-viewer",{attrs:{title:"Basic",file:"SchedulerViewBasic","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Dark",file:"SchedulerViewDark","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Disabled"}}),a("q-markdown",[e._v("\nWhen the property `disabled-days` has an array of disabled days, you can hook into the `resource-style` property to change the background color of the disabled day.\n    ")]),a("example-viewer",{attrs:{title:"Disabled Days",file:"SchedulerViewDisabledDays","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nIn this example, the `disabled-before` is set to the monday of this week and the `disabled-after` is set to the friday of this week.\n    ")]),a("example-viewer",{attrs:{title:"Disabled Before/After",file:"SchedulerViewDisabledBeforeAfter","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nIn this example, the `disabled-weekdays` is set to disable the weekends.\n    ")]),a("example-viewer",{attrs:{title:"Disabled Weekdays",file:"SchedulerViewDisabledWeekdays","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Navigation"}}),a("example-viewer",{attrs:{title:"Prev/Next",file:"SchedulerViewPrevNext","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Swipe",file:"SchedulerViewSwipe","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Hierarchy"}}),a("q-markdown",[e._v("\nThe example below uses the keys `children` and `expanded`, in the `resources` object, to show a tree hierarchy.\n    ")]),a("example-viewer",{attrs:{title:"Children",file:"SchedulerViewChildren","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Events"}}),a("q-markdown",[e._v('\n::: tip\nThe events below won\'t show up unless there is a listener for it. Therefore, if using `Vue Dev Tools`, you won\'t see it unless you add it.\n:::\n\nYou can add a listener for the following events. An event is comprised of an `event + suffix`. By adding the event with the suffix, you get the completed listener name.\n\n| Event       | `:day:header2`     | `:resource2`       | `:resource:header2` | `resource:day2`    | `:date2`           |\n| ----------- | :----------------: | :----------------: | :-----------------: | :----------------: | :----------------: |\n| click       | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |\n| contextmenu | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |\n| mousedown   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mousemove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mouseup     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mouseenter  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mouseleave  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| touchstart  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| touchmove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| touchend    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n\n::: warning\nDo NOT combine suffixes. Only one suffix per event. A different suffix will give you a different event.\n:::\n\n| Suffix | Description | Data |\n| ------ | ----------- | ---- |\n| `:day:header2` | The header day area | `{ scope: { timestamp: { "..." } }, event: { "..." } } |\n| `:resource2` | A resource | `{ scope: { resource: { "..."}, index, days: [ "..." ] }, event: { "..." } } |\n| `:resource:day2` | The day associated with a resource | `{ scope: { timestamp: { "..." }, index, resource: { "..."} }, event: { "..." } } |\n| `:resource:header2` | The header area above the resources | `{ scope: { days: [ "..." ] }, event: { "..." } } |\n| `:date2` | The date button | Date in format YYYY-MM-DD |\n\n::: tip\n`:resource:header2` is new since v2.4.0\n:::\n\n::: warning\nThe events `:day` (now `:day:header2`), `:resource`, `:resource:day` and `:date` still exist, but have been marked as deprecated starting with v2.4.0\n:::\n\nThe example below is only showing `click` events as well as the `input` event.\n    ')]),a("example-viewer",{attrs:{title:"Events",file:"SchedulerViewEvents","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Slots"}}),a("q-markdown",[e._v("\nFor slots that return `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-MM-DD\n  time: '',       // 00:00:00 (optional)\n  year: 0,        // YYYY\n  month: 0,       // mm (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false,  // if timestamp is in the future (based on `now` property)\n  disabled: false // if timestamp is disabled\n}\n```\n\nBelow, the slot receives an array of `timestamp`s for the days that are being displayed.\n    ")]),a("example-viewer",{attrs:{title:"Slot (scheduler-resources-header)",file:"SchedulerViewSlotResourcesHeader","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Slot (head-day)",file:"SchedulerViewSlotHeadDay","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nBelow, the slot receives the `timestamp` for the day being displayed.\n    ")]),a("example-viewer",{attrs:{title:"Slot (scheduler-day-header)",file:"SchedulerViewSlotDayHeader","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nBelow, the slot receives the `timestamp` for the day being displayed, an index, and the resource.\n    ")]),a("example-viewer",{attrs:{title:"Slot (scheduler-resource-day)",file:"SchedulerViewSlotResourceDay","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nBelow, the slot receives the `resource` to be displayed. In this case, an avatar (or icon) is being displayed along with the resource name.\n    ")]),a("example-viewer",{attrs:{title:"Slot (scheduler-resource)",file:"SchedulerViewSlotResource","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Theme"}}),a("example-viewer",{attrs:{title:"Theme",file:"SchedulerViewTheme","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Locale Support"}}),a("example-viewer",{attrs:{title:"Locale",file:"SchedulerViewLocale","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}})],1)},o=[],i=a("fe7d"),r=a("8669"),c=a("384e"),n={name:"SchedulerView",components:{ExampleTitle:i["a"]},data(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qcalendar/tree/dev/demo/src/examples/",jsPaths:[`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@${c["b"]}/dist/index.umd.min.js`],cssPaths:[`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@${c["b"]}/dist/index.min.css`,"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted(){this.toc=[],this.tempToc=[],this.addToToc("Scheduler View"),this.addToToc("Basic",2),this.addToToc("Dark",2),this.addToToc("Disabled"),this.addToToc("Disabled Days",2),this.addToToc("Disabled Before/After",2),this.addToToc("Disabled Weekdays",2),this.addToToc("Navigation"),this.addToToc("Prev/Next",2),this.addToToc("Swipe",2),this.addToToc("Hierarchy"),this.addToToc("Children",2),this.addToToc("Events"),this.addToToc("Events",2),this.addToToc("Slots"),this.addToToc("Slot (scheduler-resources-header)",2),this.addToToc("Slot (head-day)",2),this.addToToc("Slot (scheduler-day-header)",2),this.addToToc("Slot (scheduler-resource-day)",2),this.addToToc("Slot (scheduler-resource)",2),this.addToToc("Theme"),this.addToToc("Theme",2),this.addToToc("Locale Support"),this.addToToc("Locale",2),this.toc=this.tempToc},computed:{toc:{get(){return this.$store.state.common.toc},set(e){this.$store.commit("common/toc",e)}}},methods:{addToToc(e,t=1){let a=e;a=1===t?"title-"+a:"example-"+a;const s=Object(r["b"])(a);this.tempToc.push({children:[],id:s,label:e,level:t})}}},h=n,l=a("2877"),d=Object(l["a"])(h,s,o,!1,null,null,null);t["default"]=d.exports},8669:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i}));a("5319"),a("498a");function s(e){var t=document.createElement("textarea");t.className="fixed-top",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function o(e){const t=window.location.origin+window.location.pathname+"#"+e,a=document.getElementById(e);a&&(a.id=""),window.location.hash="#"+e,a&&setTimeout((()=>{a.id=e}),300),s(t),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function i(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},fe7d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},o=[],i=a("8669"),r={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle(){return Object(i["b"])("title-"+this.title)}},methods:{copyHeading:i["a"]}},c=r,n=a("2877"),h=Object(n["a"])(c,s,o,!1,null,null,null);t["a"]=h.exports}}]);