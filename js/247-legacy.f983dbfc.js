(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[247],{8925:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(6252),s={class:"relative elastic"},o={viewBox:"0 0 100 10",preserveAspectRatio:"none"},a=["width","x","fill"],i={class:"bar-label"};function l(e,t,n,l,c,u){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",s,[((0,r.wg)(),(0,r.iD)("svg",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.data.length,(function(e){return(0,r.wg)(),(0,r.iD)("rect",{key:e,width:u.percentages[e-1],height:"10",x:u.partials[e-1],fill:n.colors[e-1]},null,8,a)})),128))]))]),(0,r._)("div",i,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])],64)}var c=n(9225),u=(n(1249),n(2222),{props:{data:Array,colors:Array,labels:Array},computed:{percentages:function(){var e=this;return this.data.map((function(t){return Math.ceil(t/e.data.sum()*100)}))},partials:function(){return[0].concat((0,c.Z)(this.percentages.partialSums()))}}}),d=n(8118);const f=(0,d.Z)(u,[["render",l],["__scopeId","data-v-9102e97e"]]);var m=f},7925:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(6252),s=n(3577),o={class:"relative elastic"},a={viewBox:"0 0 110 110",width:"100%",height:"100%"},i={class:"centered"};function l(e,t,n,l,c,u){return(0,r.wg)(),(0,r.iD)("div",o,[((0,r.wg)(),(0,r.iD)("svg",a,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.data.length,(function(e){return(0,r.wg)(),(0,r.iD)("g",{key:e},[n.data[n.data.length-e]?((0,r.wg)(),(0,r.iD)("circle",{key:0,style:(0,s.j5)({strokeDasharray:u.percentages[n.data.length-e]*Math.PI+" 314",strokeDashoffset:-u.partials[n.data.length-e]*Math.PI,strokeWidth:n.thickness,stroke:n.colors[n.data.length-e]}),r:"50",cx:"55",cy:"55"},null,4)):(0,r.kq)("",!0)])})),128))])),(0,r._)("div",i,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])}var c=n(9225),u=(n(9653),n(1249),n(2222),{props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages:function(){var e=this;return this.data.map((function(t){return Math.ceil(t/e.data.sum()*100)}))},partials:function(){return[0].concat((0,c.Z)(this.percentages.partialSums()))}}}),d=n(8118);const f=(0,d.Z)(u,[["render",l],["__scopeId","data-v-09ebced2"]]);var m=f},9247:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(9102),s=(n(1249),n(8309),n(6252)),o=n(3577),a=function(e){return(0,s.dD)("data-v-b903c6d8"),e=e(),(0,s.Cn)(),e},i={class:"module-section"},l={class:"module-navbar"},c=a((function(){return(0,s._)("span",{class:"material-icons"},"arrow_back",-1)})),u=(0,s.Uk)("  Назад до списку курсів "),d={class:"material-icons"},f=a((function(){return(0,s._)("div",{class:"module-course line-r"},"НМТ-2022",-1)})),m={class:"module-name"},p={class:"bar-wrapper"},k=["onClick"],b={class:"block-name"},g={class:"block-info"},h={class:"material-icons"},v={key:0,class:"block-line"},w={key:1,class:"block-lesson"};function y(e,t,n,a,y,_){var I=(0,s.up)("router-link"),z=(0,s.up)("bar-horizontal"),D=(0,s.up)("lesson-card"),S=(0,s.up)("main-layout");return(0,s.wg)(),(0,s.j4)(S,{backgroundImage:_.backgroundURL,backgroundOffset:"10"},{header:(0,s.w5)((function(){return[(0,s._)("div",i,[(0,s._)("div",l,[(0,s.Wm)(I,{to:"modules",class:"link"},{default:(0,s.w5)((function(){return[c,u]})),_:1}),(0,s._)("span",{class:"link",onClick:t[0]||(t[0]=function(e){return y.isMinimized=y.isMinimized.map((function(e){return!!_.allMinimized}))})},[(0,s.Uk)((0,o.zw)(_.allMinimized?"Розгорнути все":"Згорнути все")+"  ",1),(0,s._)("span",d,(0,o.zw)(_.allMinimized?"expand_more":"expand_less"),1)])]),f,(0,s._)("div",m,(0,o.zw)(y.moduleName),1),(0,s._)("div",p,[(0,s.Wm)(z,{data:[_.totalScore,_.totalScoreMax-_.totalScore],colors:["#fffa","#fff4"]},null,8,["data"])])])]})),body:(0,s.w5)((function(){return[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.blocks,(function(e,t){return(0,s.wg)(),(0,s.iD)("div",{class:"block-section",key:e.name},[(0,s._)("div",{class:"block-title",onClick:function(e){return y.isMinimized[t]=!y.isMinimized[t]}},[(0,s._)("div",null,[(0,s._)("div",b,"ТЕМА "+(0,o.zw)(t+1)+". "+(0,o.zw)(e.name),1),(0,s._)("div",g,(0,o.zw)(_.blockTasksCompleted[t])+" / "+(0,o.zw)(_.blockTasksTotal[t])+" завдань • "+(0,o.zw)(_.blockScore[t])+" / "+(0,o.zw)(_.blockScoreMax[t])+" балів",1)]),(0,s._)("span",h,(0,o.zw)(y.isMinimized[t]?"expand_less":"expand_more"),1)],8,k),y.isMinimized[t]?((0,s.wg)(),(0,s.iD)("div",v)):(0,s.kq)("",!0),y.isMinimized[t]?((0,s.wg)(),(0,s.iD)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.lessons,(function(n,o){return(0,s.wg)(),(0,s.j4)(D,{key:n.name,lesson:(0,r.Z)((0,r.Z)({},n),{},{index:o+1,blockIndex:t+1}),onClick:function(t){return _.launchQuiz(e.name,e._id,n.name,n._id)}},null,8,["lesson","onClick"])})),128))])):(0,s.kq)("",!0)])})),128))]})),_:1},8,["backgroundImage"])}n(2222),n(6699),n(2023);var _=n(7654),I=function(e){return(0,s.dD)("data-v-d16f4628"),e=e(),(0,s.Cn)(),e},z={class:"lesson-block"},D={class:"lesson-header"},S=I((function(){return(0,s._)("div",{class:"lesson-type"},"Урок",-1)})),x={class:"lesson-index"},M={class:"bar-wrapper"},O={class:""},N={key:1,class:"material-icons-outlined icon-mobile",style:{color:"#0005"}},j={key:2,class:"material-icons-outlined icon-mobile",style:{color:"#0002"}},C={key:0,class:"material-icons-outlined"},T=(0,s.Uk)("  Пройдено "),Z={key:0,class:"material-icons-outlined"},A={class:"lesson-name"},E={class:"lesson-info"};function P(e,t,n,r,a,i){var l=(0,s.up)("bar-horizontal");return(0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("div",D,[S,(0,s._)("div",x,(0,o.zw)(n.lesson.blockIndex+"."+n.lesson.index),1),(0,s._)("div",M,[(0,s.Wm)(l,{data:[n.lesson.score,n.lesson.scoreMax-n.lesson.score,n.lesson.scoreTotal-n.lesson.scoreMax],colors:[e.mix3(100),e.mix3(0),"#00000015"]},null,8,["data","colors"])])]),(0,s._)("div",null,[(0,s._)("div",O,[n.lesson.completed?((0,s.wg)(),(0,s.iD)("span",{key:0,class:"material-icons-outlined icon-mobile",style:(0,o.j5)({color:a.tagBackground})},(0,o.zw)("done_all"),4)):(0,s.kq)("",!0),n.lesson.started&&!n.lesson.completed?((0,s.wg)(),(0,s.iD)("span",N,(0,o.zw)("schedule"))):(0,s.kq)("",!0),n.lesson.started?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",j,(0,o.zw)("play_circle"))),n.lesson.completed?((0,s.wg)(),(0,s.iD)("span",{key:3,class:"tag1",style:(0,o.j5)({background:a.tagBackground})},[n.lesson.started?((0,s.wg)(),(0,s.iD)("span",C,(0,o.zw)("done"))):(0,s.kq)("",!0),T],4)):((0,s.wg)(),(0,s.iD)("span",{key:4,class:(0,o.C_)(["tag1",n.lesson.started?"lesson-started":"lesson-not-started"])},[n.lesson.started?((0,s.wg)(),(0,s.iD)("span",Z,(0,o.zw)("schedule"))):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,o.zw)(n.lesson.started?"У процесі":"Не розпочато"),1)],2)),(0,s._)("span",A,(0,o.zw)(n.lesson.name),1)]),(0,s._)("div",E,(0,o.zw)(n.lesson.tasksCompleted)+" / "+(0,o.zw)(n.lesson.tasksTotal)+" завдань  •  "+(0,o.zw)(n.lesson.score)+" / "+(0,o.zw)(n.lesson.scoreTotal)+" балів ",1)])])}var q=n(7925),U=n(8925),H={components:{chartDoughnut:q.Z,barHorizontal:U.Z},props:{lesson:Object},data:function(){return{tagBackground:this.lesson.tasksCompleted?this.mix3(this.lesson.percentage):"#0005",tagIconColor:this.lesson.started?"#0004":"transparent"}}},Y=n(8118);const F=(0,Y.Z)(H,[["render",P],["__scopeId","data-v-d16f4628"]]);var L=F,W={components:{mainLayout:_.Z,lessonCard:L,barHorizontal:U.Z},data:function(){return{isMinimized:this.$store.state.blocks.map((function(e){return!0})),moduleName:localStorage.getItem("moduleName"),moduleId:localStorage.getItem("moduleId")}},computed:{blocks:function(){return this.$store.state.blocks},blockTasksCompleted:function(){return this.blocks.map((function(e){return e.lessons.map((function(e){return e.tasksCompleted})).sum()}))},blockTasksTotal:function(){return this.blocks.map((function(e){return e.lessons.map((function(e){return e.tasksTotal})).sum()}))},blockScore:function(){return this.blocks.map((function(e){return e.lessons.map((function(e){return e.score})).sum()}))},blockScoreMax:function(){return this.blocks.map((function(e){return e.lessons.map((function(e){return e.scoreTotal})).sum()}))},totalScore:function(){return this.blockScore.sum()},totalScoreMax:function(){return this.blockScoreMax.sum()},mixedColors:function(){for(var e=[],t=0;t<10;t++)e.push(this.mix3(10*t));return[].concat(e,["#0002"])},backgroundURL:function(){return this.$cloudinary+this.moduleId+".jpg"},allMinimized:function(){return!this.isMinimized.includes(!0)}},methods:{launchQuiz:function(e,t,n,r){localStorage.setItem("blockName",e),localStorage.setItem("lessonName",n),localStorage.setItem("blockId",t),localStorage.setItem("lessonId",r),this.$router.push("quiz")}}};const $=(0,Y.Z)(W,[["render",y],["__scopeId","data-v-b903c6d8"]]);var B=$},863:function(e,t,n){var r=n(1702);e.exports=r(1..valueOf)},9653:function(e,t,n){"use strict";var r=n(9781),s=n(7854),o=n(1702),a=n(4705),i=n(8052),l=n(2597),c=n(9587),u=n(7976),d=n(2190),f=n(7593),m=n(7293),p=n(8006).f,k=n(1236).f,b=n(3070).f,g=n(863),h=n(3111).trim,v="Number",w=s[v],y=w.prototype,_=s.TypeError,I=o("".slice),z=o("".charCodeAt),D=function(e){var t=f(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,n,r,s,o,a,i,l,c=f(e,"number");if(d(c))throw _("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=h(c),t=z(c,0),43===t||45===t){if(n=z(c,2),88===n||120===n)return NaN}else if(48===t){switch(z(c,1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+c}for(o=I(c,2),a=o.length,i=0;i<a;i++)if(l=z(o,i),l<48||l>s)return NaN;return parseInt(o,r)}return+c};if(a(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var x,M=function(e){var t=arguments.length<1?0:w(D(e)),n=this;return u(y,n)&&m((function(){g(n)}))?c(Object(t),n,M):t},O=r?p(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),N=0;O.length>N;N++)l(w,x=O[N])&&!l(M,x)&&b(M,x,k(w,x));M.prototype=y,y.constructor=M,i(s,v,M,{constructor:!0})}},5003:function(e,t,n){var r=n(2109),s=n(7293),o=n(5656),a=n(1236).f,i=n(9781),l=s((function(){a(1)})),c=!i||l;r({target:"Object",stat:!0,forced:c,sham:!i},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},9337:function(e,t,n){var r=n(2109),s=n(9781),o=n(3887),a=n(5656),i=n(1236),l=n(6135);r({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(e){var t,n,r=a(e),s=i.f,c=o(r),u={},d=0;while(c.length>d)n=s(r,t=c[d++]),void 0!==n&&l(u,t,n);return u}})},9102:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},9225:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(9914);function s(e){if(Array.isArray(e))return(0,r.Z)(e)}n(2526),n(1817),n(1539),n(2165),n(8783),n(3948),n(1038);function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var a=n(6726);n(1703);function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return s(e)||o(e)||(0,a.Z)(e)||i()}}}]);
//# sourceMappingURL=247-legacy.f983dbfc.js.map