(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[485],{8925:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(6252),s={class:"relative elastic"},o={viewBox:"0 0 100 10",preserveAspectRatio:"none"},a=["width","x","fill"],i={class:"bar-label"};function l(e,t,n,l,c,u){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",s,[((0,r.wg)(),(0,r.iD)("svg",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.data.length,(function(e){return(0,r.wg)(),(0,r.iD)("rect",{key:e,width:u.percentages[e-1],height:"10",x:u.partials[e-1],fill:n.colors[e-1]},null,8,a)})),128))]))]),(0,r._)("div",i,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])],64)}var c=n(9225),u=(n(1249),n(2222),{props:{data:Array,colors:Array,labels:Array},computed:{percentages:function(){var e=this;return this.data.map((function(t){return Math.ceil(t/e.data.sum()*100)}))},partials:function(){return[0].concat((0,c.Z)(this.percentages.partialSums()))}}}),d=n(8118);const f=(0,d.Z)(u,[["render",l],["__scopeId","data-v-9102e97e"]]);var p=f},7925:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(6252),s=n(3577),o={class:"relative elastic"},a={viewBox:"0 0 110 110",width:"100%",height:"100%"},i={class:"centered"};function l(e,t,n,l,c,u){return(0,r.wg)(),(0,r.iD)("div",o,[((0,r.wg)(),(0,r.iD)("svg",a,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.data.length,(function(e){return(0,r.wg)(),(0,r.iD)("g",{key:e},[n.data[n.data.length-e]?((0,r.wg)(),(0,r.iD)("circle",{key:0,style:(0,s.j5)({strokeDasharray:u.percentages[n.data.length-e]*Math.PI+" 314",strokeDashoffset:-u.partials[n.data.length-e]*Math.PI,strokeWidth:n.thickness,stroke:n.colors[n.data.length-e]}),r:"50",cx:"55",cy:"55"},null,4)):(0,r.kq)("",!0)])})),128))])),(0,r._)("div",i,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])}var c=n(9225),u=(n(9653),n(1249),n(2222),{props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages:function(){var e=this;return this.data.map((function(t){return Math.ceil(t/e.data.sum()*100)}))},partials:function(){return[0].concat((0,c.Z)(this.percentages.partialSums()))}}}),d=n(8118);const f=(0,d.Z)(u,[["render",l],["__scopeId","data-v-09ebced2"]]);var p=f},5485:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(1249),n(8309);var a=n(6252),i=n(3577),l=function(e){return(0,a.dD)("data-v-6f2dc122"),e=e(),(0,a.Cn)(),e},c={class:"module-section"},u={class:"module-navbar"},d=l((function(){return(0,a._)("span",{class:"material-icons"},"arrow_back",-1)})),f=(0,a.Uk)("  Назад до списку курсів "),p={class:"material-icons"},m=l((function(){return(0,a._)("div",{class:"module-course line-r"},"НМТ-2022",-1)})),g={class:"module-name"},b={class:"bar-wrapper"},v=["onClick"],h={class:"block-name"},k={class:"material-icons"},w={key:0,class:"block-line"},y={key:1,class:"block-lesson"};function _(e,t,n,r,s,l){var _=(0,a.up)("router-link"),I=(0,a.up)("bar-horizontal"),z=(0,a.up)("lesson-card"),D=(0,a.up)("main-layout");return(0,a.wg)(),(0,a.j4)(D,{backgroundImage:l.backgroundURL,backgroundOffset:"10"},{header:(0,a.w5)((function(){return[(0,a._)("div",c,[(0,a._)("div",u,[(0,a.Wm)(_,{to:"modules",class:"link"},{default:(0,a.w5)((function(){return[d,f]})),_:1}),(0,a._)("span",{class:"link",onClick:t[0]||(t[0]=function(e){return s.isMinimized=s.isMinimized.map((function(e){return!!l.allMinimized}))})},[(0,a.Uk)((0,i.zw)(l.allMinimized?"Розгорнути все":"Згорнути все")+"  ",1),(0,a._)("span",p,(0,i.zw)(l.allMinimized?"expand_more":"expand_less"),1)])]),m,(0,a._)("div",g,(0,i.zw)(s.moduleName),1),(0,a._)("div",b,[(0,a.Wm)(I,{data:[l.totalScore,l.totalScoreMax-l.totalScore],colors:["#fffa","#fff4"]},null,8,["data"])])])]})),body:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.blocks,(function(e,t){return(0,a.wg)(),(0,a.iD)("div",{class:"block-section",key:e.name},[(0,a._)("div",{class:"block-title",onClick:function(e){return s.isMinimized[t]=!s.isMinimized[t]}},[(0,a._)("span",h,"ТЕМА "+(0,i.zw)(t+1)+". "+(0,i.zw)(e.name),1),(0,a._)("span",k,(0,i.zw)(s.isMinimized[t]?"expand_less":"expand_more"),1)],8,v),s.isMinimized[t]?((0,a.wg)(),(0,a.iD)("div",w)):(0,a.kq)("",!0),s.isMinimized[t]?((0,a.wg)(),(0,a.iD)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.lessons,(function(n,r){return(0,a.wg)(),(0,a.j4)(z,{key:n.name,lesson:o(o({},n),{},{index:r+1,blockIndex:t+1}),onClick:function(t){return l.launchQuiz(e.name,e._id,n.name,n._id)}},null,8,["lesson","onClick"])})),128))])):(0,a.kq)("",!0)])})),128))]})),_:1},8,["backgroundImage"])}n(6699),n(2023),n(2222);var I=n(4683),z=function(e){return(0,a.dD)("data-v-0f227f18"),e=e(),(0,a.Cn)(),e},D={class:"lesson-block"},x={class:"lesson-header"},O=z((function(){return(0,a._)("div",{class:"lesson-type"},"Урок",-1)})),M={class:"lesson-index"},N={class:"bar-wrapper"},S={class:"lesson-block-body"},j={class:""},A={key:1,class:"material-icons-outlined mobile",style:{color:"#0004"}},E={key:2,class:"material-icons-outlined mobile",style:{color:"#0002"}},C={key:0,class:"material-icons-outlined"},P=(0,a.Uk)(" Пройдено "),Z={key:0,class:"material-icons-outlined"},T={class:"lesson-name"},q={class:"lesson-info"},U={style:{color:"#0008"}};function H(e,t,n,r,s,o){var l=(0,a.up)("bar-horizontal");return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",x,[O,(0,a._)("div",M,(0,i.zw)(n.lesson.blockIndex+"."+n.lesson.index),1),(0,a._)("div",N,[(0,a.Wm)(l,{data:[n.lesson.score,n.lesson.scoreMax-n.lesson.score,n.lesson.scoreTotal-n.lesson.scoreMax],colors:[e.mix3(100),e.mix3(0),"#0002"]},null,8,["data","colors"])])]),(0,a._)("div",S,[(0,a._)("div",j,[n.lesson.completed?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"material-icons-outlined mobile",style:(0,i.j5)({color:s.tagBackground})},(0,i.zw)("done"),4)):(0,a.kq)("",!0),n.lesson.started&&!n.lesson.completed?((0,a.wg)(),(0,a.iD)("span",A,(0,i.zw)("schedule"))):(0,a.kq)("",!0),n.lesson.started?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",E,(0,i.zw)("play_circle"))),n.lesson.completed?((0,a.wg)(),(0,a.iD)("span",{key:3,class:"tag1",style:(0,i.j5)({background:s.tagBackground})},[n.lesson.started?((0,a.wg)(),(0,a.iD)("span",C,(0,i.zw)("done"))):(0,a.kq)("",!0),P],4)):((0,a.wg)(),(0,a.iD)("span",{key:4,class:(0,i.C_)(["tag1",n.lesson.started?"lesson-started":"lesson-not-started"])},[n.lesson.started?((0,a.wg)(),(0,a.iD)("span",Z,(0,i.zw)("schedule"))):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,i.zw)(n.lesson.started?"У процесі":"Не розпочато"),1)],2)),(0,a._)("span",T," "+(0,i.zw)(n.lesson.name),1)]),(0,a._)("div",q,[(0,a._)("span",U,(0,i.zw)(n.lesson.tasksCompleted)+" / "+(0,i.zw)(n.lesson.tasksTotal)+" завдань •  "+(0,i.zw)(n.lesson.score)+" / "+(0,i.zw)(n.lesson.scoreTotal)+" балів",1)])])])}n(3689);var R=n(7925),Y=n(8925),$={components:{chartDoughnut:R.Z,barHorizontal:Y.Z},props:{lesson:Object},data:function(){return{tagBackground:this.lesson.tasksCompleted?this.mix3(10*Math.trunc(this.lesson.percentage/10)):"#0005",tagIconColor:this.lesson.started?"#0004":"transparent"}}},F=n(8118);const L=(0,F.Z)($,[["render",H],["__scopeId","data-v-0f227f18"]]);var W=L,B={components:{mainLayout:I.Z,lessonCard:W,barHorizontal:Y.Z},data:function(){return{isMinimized:this.$store.state.blocks.map((function(e){return!0})),moduleName:localStorage.getItem("moduleName"),moduleId:localStorage.getItem("moduleId")}},computed:{backgroundURL:function(){return this.$cloudinary+this.moduleId+".jpg"},allMinimized:function(){return!this.isMinimized.includes(!0)},blocks:function(){return this.$store.state.blocks},totalScore:function(){return this.blocks.map((function(e){return e.lessons.map((function(e){return e.score})).sum()})).sum()},totalScoreMax:function(){return this.blocks.map((function(e){return e.lessons.map((function(e){return e.scoreTotal})).sum()})).sum()},mixedColors:function(){for(var e=[],t=0;t<10;t++)e.push(this.mix3(10*t));return[].concat(e,["#0002"])}},methods:{launchQuiz:function(e,t,n,r){localStorage.setItem("blockName",e),localStorage.setItem("lessonName",n),localStorage.setItem("blockId",t),localStorage.setItem("lessonId",r),this.$router.push("quiz")}}};const K=(0,F.Z)(B,[["render",_],["__scopeId","data-v-6f2dc122"]]);var V=K},3111:function(e,t,n){var r=n(1702),s=n(4488),o=n(1340),a=n(1361),i=r("".replace),l="["+a+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),d=function(e){return function(t){var n=o(s(t));return 1&e&&(n=i(n,c,"")),2&e&&(n=i(n,u,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},863:function(e,t,n){var r=n(1702);e.exports=r(1..valueOf)},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7327:function(e,t,n){"use strict";var r=n(2109),s=n(2092).filter,o=n(1194),a=o("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},3689:function(e,t,n){var r=n(2109),s=n(4758);r({target:"Math",stat:!0},{trunc:s})},9653:function(e,t,n){"use strict";var r=n(9781),s=n(7854),o=n(1702),a=n(4705),i=n(8052),l=n(2597),c=n(9587),u=n(7976),d=n(2190),f=n(7593),p=n(7293),m=n(8006).f,g=n(1236).f,b=n(3070).f,v=n(863),h=n(3111).trim,k="Number",w=s[k],y=w.prototype,_=s.TypeError,I=o("".slice),z=o("".charCodeAt),D=function(e){var t=f(e,"number");return"bigint"==typeof t?t:x(t)},x=function(e){var t,n,r,s,o,a,i,l,c=f(e,"number");if(d(c))throw _("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=h(c),t=z(c,0),43===t||45===t){if(n=z(c,2),88===n||120===n)return NaN}else if(48===t){switch(z(c,1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+c}for(o=I(c,2),a=o.length,i=0;i<a;i++)if(l=z(o,i),l<48||l>s)return NaN;return parseInt(o,r)}return+c};if(a(k,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var O,M=function(e){var t=arguments.length<1?0:w(D(e)),n=this;return u(y,n)&&p((function(){v(n)}))?c(Object(t),n,M):t},N=r?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;N.length>S;S++)l(w,O=N[S])&&!l(M,O)&&b(M,O,g(w,O));M.prototype=y,y.constructor=M,i(s,k,M,{constructor:!0})}},5003:function(e,t,n){var r=n(2109),s=n(7293),o=n(5656),a=n(1236).f,i=n(9781),l=s((function(){a(1)})),c=!i||l;r({target:"Object",stat:!0,forced:c,sham:!i},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},9337:function(e,t,n){var r=n(2109),s=n(9781),o=n(3887),a=n(5656),i=n(1236),l=n(6135);r({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(e){var t,n,r=a(e),s=i.f,c=o(r),u={},d=0;while(c.length>d)n=s(r,t=c[d++]),void 0!==n&&l(u,t,n);return u}})},7941:function(e,t,n){var r=n(2109),s=n(7908),o=n(1956),a=n(7293),i=a((function(){o(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(e){return o(s(e))}})},9225:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(9914);function s(e){if(Array.isArray(e))return(0,r.Z)(e)}n(2526),n(1817),n(1539),n(2165),n(8783),n(3948),n(1038);function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var a=n(6726);n(1703);function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return s(e)||o(e)||(0,a.Z)(e)||i()}}}]);
//# sourceMappingURL=485-legacy.1797680c.js.map