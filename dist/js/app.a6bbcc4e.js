(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)n=o[u],r[n]&&p.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1dde":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component"},[a("q-stepper",{ref:"stepper"},[a("q-step",{attrs:{default:"",title:"Design"}},[a("h6",[t._v("Design")]),a("p",[t._v("The first step we will need to take is to create a detailed list of the requirements for this project. This will include inputs, supported systems, desired outputs, and various calculations used in the processing of data.")])]),a("q-step",{attrs:{title:"Build"}},[a("h6",[t._v("Application Build")]),a("p",[t._v("Once we have a complete understanding of the specifications of your project we will begin building the application to those specs. During this time we will provide you with updates, when available, to give you an idea of where your project is at and potential decision-points for changes or improvements. We will make up to five total changes during this phase. This limit is in place to ensure that we do not sidetrack from the creation of the entire project and therefore miss the timeline that we are trying to reach. ")])]),a("q-step",{attrs:{title:"Test"}},[a("h6",[t._v("Testing")]),a("p",[t._v("Once our developers have finished their work integrating the GUI with the desired workflow, they will get to work testing your application's performance and reliability in real-world situations. We’ll use various industry-standard tools to benchmark your application for loading, accuracy, and speed, while also ensuring that it works reliably on all supported systems required.")])]),a("q-step",{attrs:{title:"Deploy"}},[a("h6",[t._v("Deployment")]),a("p",[t._v("Once we’re sure that your application is ready to be put to use, we’ll build and install a final release version. This will include a phase of beta-testing by end users..")])]),a("q-stepper-navigation",[a("q-btn",{attrs:{flat:"",label:"Back"},on:{click:function(e){return t.$refs.stepper.previous()}}}),a("q-btn",{attrs:{label:"Next",color:"primary"},on:{click:function(e){return t.$refs.stepper.next()}}})],1)],1)],1)},r=[],i={name:"Process"},n=i,o=a("2877"),l=Object(o["a"])(n,s,r,!1,null,null,null);e["default"]=l.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{id:"q-app",view:"lHh Lpr lFf"}},[s("q-layout-header",[s("q-toolbar",{attrs:{color:"primary",glossy:"mat"===t.$q.theme,inverted:"ios"===t.$q.theme}},[s("q-toolbar-title",{staticClass:"text-center text-tertiary text-weight-bolder uppercase"},[t._v("\n        SRS Bassoon GUI Interface Proposal\n      ")])],1)],1),s("div",{staticClass:"row items-stretch"},[s("div",{staticClass:"col-xs-12 col-md-3 parent-col"},[s("q-card",{staticClass:"text-black q-ma-md text-center",attrs:{color:"white"}},[s("q-card-title",{staticClass:"bg-primary text-white"},[t._v("Pitch")]),s("q-card-separator"),s("q-card-main",[s("img",{staticClass:"img-embed",attrs:{src:a("7f30"),alt:"Shows pitch"}})])],1),s("q-card",{staticClass:"text-black q-ma-md text-center",attrs:{color:"white"}},[s("q-card-title",{staticClass:"bg-primary text-white"},[t._v("Fingering Chart")]),s("q-card-separator"),s("q-card-main",[s("img",{staticClass:"img-embed",attrs:{src:a("e50c"),alt:"Detailed bassoon fingering chart "}})])],1),s("div",{staticClass:"text-center"},[s("q-btn-toggle",{attrs:{"toggle-color":"primary",options:[{label:"Pro",value:"Pro"},{label:"Practical",value:"Practical"}]},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}})],1)],1),s("div",{staticClass:"col-xs-12 col-md-6 parent-col"},[s("q-card",{staticClass:"text-black q-ma-md",attrs:{color:"white"}},[s("q-card-title",{staticClass:"text-center bg-primary text-white"},[t._v("Note In Finger Chart")]),s("q-card-separator"),s("q-card-main",{staticClass:"text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-4"},[s("q-btn",{staticClass:"full-width",attrs:{label:"Preceeding Note",disable:""}})],1),s("div",{staticClass:"col-xs-4"},[s("q-btn",{staticClass:"full-width",attrs:{label:"Current Note",color:"primary",disable:""}})],1),s("div",{staticClass:"col-xs-4"},[s("q-btn",{staticClass:"full-width",attrs:{label:"Next Note",disable:""}})],1),s("div",{staticClass:"col-xs-12"},[s("br"),s("br")]),s("div",{staticClass:"col-xs-4 text-right"},[s("router-link",{attrs:{to:"/process"}},[s("span",{staticClass:"linkButtons"},[t._v("Process")]),s("q-btn",{staticClass:"linkIcons",attrs:{round:"",color:"primary",icon:"code"}})],1),s("br"),s("router-link",{attrs:{to:"/timeline"}},[s("span",{staticClass:"linkButtons"},[t._v("Timeline")]),s("q-btn",{staticClass:"linkIcons",attrs:{round:"",color:"primary",icon:"alarm"}})],1)],1),s("div",{staticClass:"col-xs-4"},[s("br"),s("img",{staticClass:"img-embed",attrs:{src:a("83b9"),to:"/",alt:"Swan-Tech"}})]),s("div",{staticClass:"col-xs-4 text-left"},[s("router-link",{attrs:{to:"/pricing"}},[s("q-btn",{staticClass:"linkIcons",attrs:{round:"",color:"primary",icon:"attach_money"}}),s("span",{staticClass:"linkButtons"},[t._v("Pricing")])],1),s("br"),s("router-link",{attrs:{to:"/terms"}},[s("q-btn",{staticClass:"linkIcons",attrs:{round:"",color:"primary",icon:"info"}}),s("span",{staticClass:"linkButtons"},[t._v("Terms")])],1)],1)])])],1),s("q-card",{staticClass:"text-black q-ma-md",attrs:{color:"white"}},[s("q-card-title",{staticClass:"text-center bg-primary text-white"},[t._v(t._s(this.$route.name.toUpperCase()))]),s("q-card-separator"),s("q-card-main",[s("router-view")],1)],1)],1),s("div",{staticClass:"col-xs-12 col-md-3 parent-col"},[s("q-card",{staticClass:"text-center text-black q-ma-md",attrs:{color:"white"}},[s("q-card-title",{staticClass:"bg-primary text-white"},[t._v("Breath")]),s("q-card-separator"),s("q-card-main",[s("q-knob",{attrs:{min:0,max:10,color:"primary"},model:{value:t.breath,callback:function(e){t.breath=e},expression:"breath"}}),s("p",[t._v("This can be calculated however needed - based on notes, time, etc.")])],1)],1),s("q-card",{staticClass:"text-center text-black q-ma-md",attrs:{color:"white"}},[s("q-card-title",{staticClass:"bg-primary text-white"},[t._v("Difficulty")]),s("q-card-separator"),s("q-card-main",[s("q-knob",{attrs:{min:1,max:10,color:"red"},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}}),s("p",[t._v("Preset or based on some calculation, this can stay updated whenever needed.")]),s("q-slider",{attrs:{min:0,max:10,step:1,label:"",snap:"",color:"red"},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}})],1)],1),s("q-card",{staticClass:"text-center text-black q-ma-md",attrs:{color:"white"}},[s("q-card-title",{staticClass:"bg-primary text-white"},[t._v("Tempo")]),s("q-card-separator"),s("q-card-main",[s("q-knob",{attrs:{min:1,max:10,color:"secondary"},model:{value:t.tempo,callback:function(e){t.tempo=e},expression:"tempo"}}),s("q-slider",{attrs:{min:0,max:10,step:1,label:"",snap:"",color:"secondary"},model:{value:t.tempo,callback:function(e){t.tempo=e},expression:"tempo"}})],1)],1)],1)])],1)},i=[],n=a("e083"),o={name:"LayoutDefault",data:function(){return{mode:"Practical",breath:10,difficulty:6,tempo:5,defaultPrimary:""}},methods:{openURL:n["c"]},watch:{mode:function(t){"Pro"===t?(this.defaultPrimary=n["a"].getBrand("primary"),n["a"].setBrand("primary","#333")):"Practical"===t&&n["a"].setBrand("primary",this.defaultPrimary)}}},l=o,c=(a("7faf"),a("2877")),d=Object(c["a"])(l,r,i,!1,null,null,null),u=d.exports,p=(a("a4ac"),a("7e57"),a("38aa"),a("8c4f")),m=(a("8aff"),a("1dde"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6"},[a("router-link",{attrs:{to:"/process"}},[a("q-btn",{staticClass:"linkIcons",attrs:{round:"",color:"primary",icon:"code"}}),a("span",{staticClass:"linkButtons"},[t._v("Process")])],1)],1),t._m(0),a("div",{staticClass:"col-xs-6"},[a("router-link",{attrs:{to:"/timeline"}},[a("q-btn",{staticClass:"linkIcons",attrs:{round:"",color:"primary",icon:"alarm"}}),a("span",{staticClass:"linkButtons"},[t._v("Timeline")])],1)],1),t._m(1),a("div",{staticClass:"col-xs-6"},[a("router-link",{attrs:{to:"/pricing"}},[a("q-btn",{staticClass:"linkIcons",attrs:{round:"",color:"primary",icon:"attach_money"}}),a("span",{staticClass:"linkButtons"},[t._v("Pricing")])],1)],1),t._m(2),a("div",{staticClass:"col-xs-6"},[a("router-link",{attrs:{to:"/terms"}},[a("q-btn",{staticClass:"linkIcons",attrs:{round:"",color:"primary",icon:"info"}}),a("span",{staticClass:"linkButtons"},[t._v("Terms")])],1)],1),t._m(3)])])}),f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-6"},[a("p",[t._v("Summary of the development process and how it will integrate with you, your team, and your end users.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-6"},[a("p",[t._v("Projected timeline for development through the various stages of this project.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-6"},[a("p",[t._v("Explanation of pricing for the various stages of this project.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-6"},[a("p",[t._v("Project terms outline the contract and agreement between Swan-Tech, LLC and client. ")])])}],h={name:"Proposal"},b=h,v=Object(c["a"])(b,m,f,!1,null,null,null),y=v.exports;a("d5d2"),a("da9e");s["a"].use(p["a"]);var g=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"proposal",component:y},{path:"/pricing",name:"pricing",component:function(){return Promise.resolve().then(a.bind(null,"8aff"))}},{path:"/process",name:"process",component:function(){return Promise.resolve().then(a.bind(null,"1dde"))}},{path:"/terms",name:"terms",component:function(){return Promise.resolve().then(a.bind(null,"d5d2"))}},{path:"/timeline",name:"timeline",component:function(){return Promise.resolve().then(a.bind(null,"da9e"))}}]});s["a"].use(n["b"],{config:{}}),s["a"].config.productionTip=!1,new s["a"]({router:g,render:function(t){return t(u)}}).$mount("#app")},"7f30":function(t,e,a){t.exports=a.p+"img/sheet-music.33502bd2.gif"},"7faf":function(t,e,a){"use strict";var s=a("8fba"),r=a.n(s);r.a},"83b9":function(t,e,a){t.exports=a.p+"img/swantech.44320e7d.png"},"8aff":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component"},[a("q-table",{attrs:{data:t.timelineTableData,columns:t.timelineTableColumns,"row-key":"name","hide-bottom":""}})],1)},r=[],i={name:"Pricing",data:function(){return{timelineTableColumns:[{name:"phase",label:"Project Phase",required:!0,align:"left",field:"name"},{name:"cost",label:"Phase Cost",required:!0,align:"right",field:"cost"}],timelineTableData:[{name:"Phase 1 - Design",cost:"$3,000"},{name:"Phase 2 - Build",cost:"$9,000"},{name:"Phase 3 - Test",cost:"$4,000"},{name:"Phase 4 - Deploy",cost:"$2,000"}]}}},n=i,o=a("2877"),l=Object(o["a"])(n,s,r,!1,null,null,null);e["default"]=l.exports},"8fba":function(t,e,a){},a4ac:function(t,e,a){},d5d2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component"},[a("p",[t._v("Swan-Tech, LLC will design, build, test, and deploy this project's application according to the description laid out in this proposal. Any additional features, design changes, or changes to project scope and requirements may affect the timeline and costs laid out in the tables above. Invoices will be generated on the timelines listed in the pricing table above, and are due within 15 days of receipt by client. Payment may be made by check, wire transfer or credit card. Credit card payments are subject to an additional 3% convenience fee. Payments made past an invoice’s due timeline are subject to a $25 late fee.")]),a("p",[t._v("All works produced as a result of the above described project will become the sole intellectual property of client. Swan-Tech, LLC reserves the right to use visual representations of the final product as part of project portfolio.")])])}],i={name:"Terms"},n=i,o=a("2877"),l=Object(o["a"])(n,s,r,!1,null,null,null);e["default"]=l.exports},da9e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component"},[a("q-table",{attrs:{data:t.timelineTableData,columns:t.timelineTableColumns,"row-key":"name","hide-bottom":""}})],1)},r=[],i={name:"Timeline",data:function(){return{timelineTableColumns:[{name:"phase",label:"Project Phase",required:!0,align:"left",field:"name"},{name:"date",label:"Projected Timeline",required:!0,align:"right",field:"date"}],timelineTableData:[{name:"Phase 1 - Design",date:"15 Days"},{name:"Phase 2 - Build",date:"45 Days"},{name:"Phase 3 - Test",date:"20 Days"},{name:"Phase 4 - Deploy",date:"10 Days"}]}}},n=i,o=a("2877"),l=Object(o["a"])(n,s,r,!1,null,null,null);e["default"]=l.exports},e50c:function(t,e,a){t.exports=a.p+"img/fingering-chart.0331eccf.jpg"}});
//# sourceMappingURL=app.a6bbcc4e.js.map