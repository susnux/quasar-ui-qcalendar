(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[120],{aed6:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row items-center",staticStyle:{"max-width":"800px",width:"100%",height:"421px"}},[a("div",{staticClass:"col-8 full-height"},[a("div",{staticClass:"row justify-center items-center",staticStyle:{height:"30px"}},[a("q-btn",{attrs:{flat:"",dense:"",label:"Prev"},on:{click:e.calendarPrev}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn",{attrs:{flat:"",dense:"",label:"Next"},on:{click:e.calendarNext}})],1),a("q-separator"),a("div",{staticStyle:{overflow:"hidden",height:"390px"}},[a("q-calendar",{ref:"calendar",attrs:{view:"day-resource",locale:"en-us","short-weekday-label":"",resources:e.resources,"resource-height":50,animated:""},on:{input:e.onModelChanged,"click:time2":e.onClickTime2,"click:resource2":e.onClickResource2,"click:interval2":e.onClickInterval2,"click:resource:header2":e.onClickResourceHeader2},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1),a("q-card",{staticClass:"events col-4 q-pa-xs full-height column justify-start items-start"},[a("q-item-section",{staticClass:"full-width"},[a("q-item-label",[e._v("Events")]),a("q-item-label",{attrs:{caption:""}},[e._v("New data appended to top")])],1),a("q-separator"),a("div",{staticClass:"scroll overflow-auto",staticStyle:{height:"360px",width:"100%"}},e._l(e.events,(function(t,s){return a("div",{key:s,staticClass:"col-12",staticStyle:{"font-size":"10px","line-height":"10px","max-height":"14px","min-height":"14px",padding:"2px 2px","white-space":"nowrap"}},[e._v("\n        "+e._s(t)+"\n      ")])})),0)],1)],1)},l=[],i={data(){return{selectedDate:"",events:[],resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}]}},methods:{calendarNext(){this.$refs.calendar.next()},calendarPrev(){this.$refs.calendar.prev()},onModelChanged(e){this.events.unshift("Model changed: "+e)},onClickResource2(e){this.events.unshift("click:resource2: "+JSON.stringify(e))},onClickInterval2(e){this.events.unshift("click:interval2: "+JSON.stringify(e))},onClickTime2(e){this.events.unshift("click:time2: "+JSON.stringify(e))},onClickResourceHeader2(e){this.events.unshift("click:resource:header2: "+JSON.stringify(e))}}},n=i,c=a("2877"),r=a("9c40"),o=a("eb85"),d=a("f09f"),h=a("4074"),u=a("0170"),v=a("eebe"),p=a.n(v),f=Object(c["a"])(n,s,l,!1,null,null,null);t["default"]=f.exports;p()(f,"components",{QBtn:r["a"],QSeparator:o["a"],QCard:d["a"],QItemSection:h["a"],QItemLabel:u["a"]})}}]);