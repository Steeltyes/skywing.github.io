(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[628],{8925:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(6252);const s={class:"relative elastic"},o={viewBox:"0 0 100 10",preserveAspectRatio:"none"},r=["width","x","fill"],l={class:"bar-label"};function i(e,t,n,i,c,u){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",s,[((0,a.wg)(),(0,a.iD)("svg",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(e=>((0,a.wg)(),(0,a.iD)("rect",{key:e,width:u.percentages[e-1],height:"10",x:u.partials[e-1],fill:n.colors[e-1]},null,8,r)))),128))]))]),(0,a._)("div",l,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])],64)}var c={props:{data:Array,colors:Array,labels:Array},computed:{percentages(){return this.data.map((e=>Math.ceil(e/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},u=n(8118);const d=(0,u.Z)(c,[["render",i],["__scopeId","data-v-9102e97e"]]);var m=d},7857:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(6252),s=n(3577);const o={class:"lesson-block"},r={class:"lesson-header"},l={class:"chart-wrapper relative"},i={key:1,style:{color:"#0004"},class:"material-icons"},c={key:2,style:{color:"#0002"},class:"material-icons-outlined"},u=(0,a.Uk)("   "),d={class:"lesson-name"},m={class:"lesson-info"};function f(e,t,n,f,p,g){const v=(0,a.up)("chart-doughnut");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",r,[(0,a._)("div",l,[(0,a.Wm)(v,{data:[n.lesson.score,n.lesson.scoreMax-n.lesson.score,n.lesson.scoreTotal-n.lesson.scoreMax],colors:[e.mix3(100),e.mix3(0),"#00000015"],thickness:4},{default:(0,a.w5)((()=>[n.lesson.completed?((0,a.wg)(),(0,a.iD)("i",{key:0,style:(0,s.j5)({color:e.$green}),class:"material-icons"},"done",4)):(0,a.kq)("",!0),n.lesson.started&&!n.lesson.completed?((0,a.wg)(),(0,a.iD)("i",i,"schedule")):(0,a.kq)("",!0),n.lesson.started?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("i",c,"play_circle"))])),_:1},8,["data","colors"]),n.lesson.completed?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"lesson-percentage",style:(0,s.j5)({background:p.tagBackground})},(0,s.zw)(n.lesson.percentage/10),5)):(0,a.kq)("",!0)])]),(0,a._)("div",null,[(0,a._)("div",null,[(0,a._)("b",null,(0,s.zw)(n.lesson.index),1),u,(0,a._)("span",d,(0,s.zw)(n.lesson.name),1)]),(0,a._)("div",m,(0,s.zw)(n.lesson.tasksCompleted)+" / "+(0,s.zw)(n.lesson.tasksTotal)+" завдань  •  "+(0,s.zw)(n.lesson.score)+" / "+(0,s.zw)(n.lesson.scoreTotal)+" балів ",1)])])}var p=n(7925),g=n(8925),v={components:{chartDoughnut:p.Z,barHorizontal:g.Z},props:{lesson:Object},data(){return{tagBackground:this.lesson.tasksCompleted?this.mix3(this.lesson.percentage):"#0005",tagIconColor:this.lesson.started?"#0004":"transparent"}}},h=n(8118);const b=(0,h.Z)(v,[["render",f],["__scopeId","data-v-38801195"]]);var w=b},7925:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(6252),s=n(3577);const o={class:"relative elastic"},r={viewBox:"0 0 110 110",width:"100%",height:"100%"},l={class:"centered"};function i(e,t,n,i,c,u){return(0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(),(0,a.iD)("svg",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(e=>((0,a.wg)(),(0,a.iD)("g",{key:e},[n.data[n.data.length-e]?((0,a.wg)(),(0,a.iD)("circle",{key:0,style:(0,s.j5)({strokeDasharray:u.percentages[n.data.length-e]*Math.PI+" 314",strokeDashoffset:-u.partials[n.data.length-e]*Math.PI,strokeWidth:n.thickness,stroke:n.colors[n.data.length-e]}),r:"50",cx:"55",cy:"55"},null,4)):(0,a.kq)("",!0)])))),128))])),(0,a._)("div",l,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])}var c={props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages(){return this.data.map((e=>Math.ceil(e/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},u=n(8118);const d=(0,u.Z)(c,[["render",i],["__scopeId","data-v-09ebced2"]]);var m=d},9628:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var a=n(6252),s=n(3577);const o=e=>((0,a.dD)("data-v-6806f769"),e=e(),(0,a.Cn)(),e),r={class:"modal-text"},l=(0,a.Uk)("Ви точно хочете видалити "),i=(0,a.Uk)("?"),c={class:"module-section"},u={class:"module-navbar"},d=o((()=>(0,a._)("span",{class:"material-icons"},"arrow_back",-1))),m=(0,a.Uk)("  Назад до списку курсів "),f=o((()=>(0,a._)("span",null,null,-1))),p=o((()=>(0,a._)("div",{class:"module-course line-r"},"НМТ-2022",-1))),g={class:"module-name"},v={class:"lessons-section"},h=["onClick"],b={class:"create-section"},w={key:0},k=o((()=>(0,a._)("ul",null,[(0,a._)("li",null,"Один тест містить 20 завдань на різні теми"),(0,a._)("li",null,"Ви матимете по одній спробі на завдання"),(0,a._)("li",null,"Рекомендований час винонання – 40 хвилин")],-1))),y=o((()=>(0,a._)("br",null,null,-1))),_={key:1};function C(e,t,n,o,C,D){const x=(0,a.up)("modal"),I=(0,a.up)("router-link"),j=(0,a.up)("lesson-card"),P=(0,a.up)("main-layout");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(x,{visible:C.modalConfirmationVisible,"onUpdate:visible":t[2]||(t[2]=e=>C.modalConfirmationVisible=e),modalWidth:"22em"},{content:(0,a.w5)((()=>[(0,a._)("div",r,[l,(0,a._)("b",null,(0,s.zw)(C.prefabName),1),i])])),buttons:(0,a.w5)((()=>[(0,a._)("button",{class:"button-small",style:(0,s.j5)({background:C.colorTheme}),onClick:t[0]||(t[0]=e=>D.deletePrefab(C.prefabName))},"Так",4),(0,a._)("button",{class:"button-small",style:(0,s.j5)({background:C.colorTheme}),onClick:t[1]||(t[1]=e=>C.modalConfirmationVisible=!1)},"Ні",4)])),_:1},8,["visible"]),(0,a.Wm)(P,{backgroundImage:D.backgroundURL,backgroundOffset:"15"},{header:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a._)("div",u,[(0,a.Wm)(I,{to:"modules",class:"link"},{default:(0,a.w5)((()=>[d,m])),_:1}),f]),p,(0,a._)("div",g,(0,s.zw)(C.moduleName),1)])])),body:(0,a.w5)((()=>[(0,a._)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(D.lessons,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"relative",key:e.name},[(0,a.Wm)(j,{lesson:{...e,index:t+1},onClick:t=>D.launchPrefab(e.name)},null,8,["lesson","onClick"]),(0,a._)("i",{class:"material-icons-outlined centered icon-delete",onClick:t=>D.showConfirmationModal(e.name)},"delete_forever",8,h)])))),128))]),(0,a._)("div",b,[D.lessons.length<5?((0,a.wg)(),(0,a.iD)("div",w,[k,y,(0,a._)("button",{class:"button-small",style:(0,s.j5)({background:C.colorTheme}),onClick:t[3]||(t[3]=e=>D.createPrefab(`Підсумковий тест ${D.newPrefabIndex+1}`))}," Створити тест ",4)])):((0,a.wg)(),(0,a.iD)("div",_,"Щоб створити новий тест, видаліть один з існуючих"))])])),_:1},8,["backgroundImage"])],64)}n(7686),n(4506);var D=n(9284),x=n(1844),I=n(721),j=n(7857),P={components:{mainLayout:I.Z,lessonCard:j.Z,modal:D.Z},data(){return{prefabName:void 0,modalConfirmationVisible:!1,moduleName:localStorage.getItem("moduleName"),moduleId:localStorage.getItem("moduleId"),colorTheme:localStorage.getItem("colorTheme")}},computed:{lessons(){return this.$store.state.lessons},newPrefabIndex(){return+this.lessons.at(-1)?.name.split(" ").at(-1)||0},backgroundURL(){return this.$cloudinary+this.moduleId+".jpg"}},methods:{launchPrefab(e,t){localStorage.setItem("lessonName",e),this.$router.push("prefab")},async createPrefab(e){await x.Z.createPrefab(e),this.$store.dispatch("getPrefabs")},async deletePrefab(e){await x.Z.deletePrefab(e),this.$store.dispatch("getPrefabs"),this.modalConfirmationVisible=!1},showConfirmationModal(e){this.modalConfirmationVisible=!0,this.prefabName=e}}},S=n(8118);const Z=(0,S.Z)(P,[["render",C],["__scopeId","data-v-6806f769"]]);var z=Z},1223:function(e,t,n){var a=n(5112),s=n(30),o=n(3070).f,r=a("unscopables"),l=Array.prototype;void 0==l[r]&&o(l,r,{configurable:!0,value:s(null)}),e.exports=function(e){l[r][e]=!0}},648:function(e,t,n){var a=n(7854),s=n(1694),o=n(614),r=n(4326),l=n(5112),i=l("toStringTag"),c=a.Object,u="Arguments"==r(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(n){}};e.exports=s?r:function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=d(t=c(e),i))?n:u?r(t):"Object"==(a=r(t))&&o(t.callee)?"Arguments":a}},490:function(e,t,n){var a=n(5005);e.exports=a("document","documentElement")},30:function(e,t,n){var a,s=n(9670),o=n(6048),r=n(748),l=n(3501),i=n(490),c=n(317),u=n(6200),d=">",m="<",f="prototype",p="script",g=u("IE_PROTO"),v=function(){},h=function(e){return m+p+d+e+m+"/"+p+d},b=function(e){e.write(h("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=c("iframe"),n="java"+p+":";return t.style.display="none",i.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(h("document.F=Object")),e.close(),e.F},k=function(){try{a=new ActiveXObject("htmlfile")}catch(t){}k="undefined"!=typeof document?document.domain&&a?b(a):w():b(a);var e=r.length;while(e--)delete k[f][r[e]];return k()};l[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[f]=s(e),n=new v,v[f]=null,n[g]=e):n=k(),void 0===t?n:o.f(n,t)}},6048:function(e,t,n){var a=n(9781),s=n(3353),o=n(3070),r=n(9670),l=n(5656),i=n(1956);t.f=a&&!s?Object.defineProperties:function(e,t){r(e);var n,a=l(t),s=i(t),c=s.length,u=0;while(c>u)o.f(e,n=s[u++],a[n]);return e}},1956:function(e,t,n){var a=n(6324),s=n(748);e.exports=Object.keys||function(e){return a(e,s)}},1694:function(e,t,n){var a=n(5112),s=a("toStringTag"),o={};o[s]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var a=n(7854),s=n(648),o=a.String;e.exports=function(e){if("Symbol"===s(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},7686:function(e,t,n){"use strict";var a=n(2109),s=n(7908),o=n(6244),r=n(9303),l=n(1223);a({target:"Array",proto:!0},{at:function(e){var t=s(this),n=o(t),a=r(e),l=a>=0?a:n+a;return l<0||l>=n?void 0:t[l]}}),l("at")},4506:function(e,t,n){"use strict";var a=n(2109),s=n(1702),o=n(4488),r=n(9303),l=n(1340),i=n(7293),c=s("".charAt),u=i((function(){return"\ud842"!=="𠮷".at(-2)}));a({target:"String",proto:!0,forced:u},{at:function(e){var t=l(o(this)),n=t.length,a=r(e),s=a>=0?a:n+a;return s<0||s>=n?void 0:c(t,s)}})}}]);
//# sourceMappingURL=628.8598778f.js.map