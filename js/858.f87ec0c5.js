(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[858],{8925:function(e,s,t){"use strict";t.d(s,{Z:function(){return m}});var a=t(6252);const n={class:"relative elastic"},o={viewBox:"0 0 100 10",preserveAspectRatio:"none"},l=["width","x","fill"],r={class:"bar-label"};function i(e,s,t,i,c,d){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",n,[((0,a.wg)(),(0,a.iD)("svg",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.data.length,(e=>((0,a.wg)(),(0,a.iD)("rect",{key:e,width:d.percentages[e-1],height:"10",x:d.partials[e-1],fill:t.colors[e-1]},null,8,l)))),128))]))]),(0,a._)("div",r,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])],64)}var c={props:{data:Array,colors:Array,labels:Array},computed:{percentages(){return this.data.map((e=>Math.ceil(e/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},d=t(8118);const u=(0,d.Z)(c,[["render",i],["__scopeId","data-v-9102e97e"]]);var m=u},7857:function(e,s,t){"use strict";t.d(s,{Z:function(){return b}});var a=t(6252),n=t(3577);const o={class:"lesson-block"},l={class:"lesson-header"},r={class:"chart-wrapper relative"},i={key:1,style:{color:"#0004"},class:"material-icons"},c={key:2,style:{color:"#0002"},class:"material-icons-outlined"},d=(0,a.Uk)("   "),u={class:"lesson-name"},m={class:"lesson-info"};function p(e,s,t,p,k,g){const h=(0,a.up)("chart-doughnut");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",l,[(0,a._)("div",r,[(0,a.Wm)(h,{data:[t.lesson.score,t.lesson.scoreMax-t.lesson.score,t.lesson.scoreTotal-t.lesson.scoreMax],colors:[e.mix3(100),e.mix3(0),"#00000015"],thickness:4},{default:(0,a.w5)((()=>[t.lesson.completed?((0,a.wg)(),(0,a.iD)("i",{key:0,style:(0,n.j5)({color:e.$green}),class:"material-icons"},"done",4)):(0,a.kq)("",!0),t.lesson.started&&!t.lesson.completed?((0,a.wg)(),(0,a.iD)("i",i,"schedule")):(0,a.kq)("",!0),t.lesson.started?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("i",c,"play_circle"))])),_:1},8,["data","colors"]),t.lesson.completed?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"lesson-percentage",style:(0,n.j5)({background:k.tagBackground})},(0,n.zw)(t.lesson.percentage/10),5)):(0,a.kq)("",!0)])]),(0,a._)("div",null,[(0,a._)("div",null,[(0,a._)("b",null,(0,n.zw)(t.lesson.index),1),d,(0,a._)("span",u,(0,n.zw)(t.lesson.name),1)]),(0,a._)("div",m,(0,n.zw)(t.lesson.tasksCompleted)+" / "+(0,n.zw)(t.lesson.tasksTotal)+" завдань  •  "+(0,n.zw)(t.lesson.score)+" / "+(0,n.zw)(t.lesson.scoreTotal)+" балів ",1)])])}var k=t(7925),g=t(8925),h={components:{chartDoughnut:k.Z,barHorizontal:g.Z},props:{lesson:Object},data(){return{tagBackground:this.lesson.tasksCompleted?this.mix3(this.lesson.percentage):"#0005",tagIconColor:this.lesson.started?"#0004":"transparent"}}},v=t(8118);const f=(0,v.Z)(h,[["render",p],["__scopeId","data-v-38801195"]]);var b=f},7925:function(e,s,t){"use strict";t.d(s,{Z:function(){return m}});var a=t(6252),n=t(3577);const o={class:"relative elastic"},l={viewBox:"0 0 110 110",width:"100%",height:"100%"},r={class:"centered"};function i(e,s,t,i,c,d){return(0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(),(0,a.iD)("svg",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.data.length,(e=>((0,a.wg)(),(0,a.iD)("g",{key:e},[t.data[t.data.length-e]?((0,a.wg)(),(0,a.iD)("circle",{key:0,style:(0,n.j5)({strokeDasharray:d.percentages[t.data.length-e]*Math.PI+" 314",strokeDashoffset:-d.partials[t.data.length-e]*Math.PI,strokeWidth:t.thickness,stroke:t.colors[t.data.length-e]}),r:"50",cx:"55",cy:"55"},null,4)):(0,a.kq)("",!0)])))),128))])),(0,a._)("div",r,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])}var c={props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages(){return this.data.map((e=>Math.ceil(e/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},d=t(8118);const u=(0,d.Z)(c,[["render",i],["__scopeId","data-v-09ebced2"]]);var m=u},8858:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return C}});var a=t(6252),n=t(3577);const o=e=>((0,a.dD)("data-v-4cdf1256"),e=e(),(0,a.Cn)(),e),l={class:"module-section"},r={class:"module-navbar"},i=o((()=>(0,a._)("span",{class:"material-icons"},"arrow_back",-1))),c=(0,a.Uk)("  "),d=o((()=>(0,a._)("span",null,"Назад до списку курсів",-1))),u=(0,a.Uk)("  "),m={class:"material-icons"},p=o((()=>(0,a._)("div",{class:"module-course line-r"},"НМТ-2022",-1))),k={class:"module-name"},g={class:"bar-wrapper"},h=["onClick"],v={class:"block-name"},f={class:"block-info"},b={class:"material-icons block-minimize"},w={key:0,class:"block-line"},_={key:1,class:"block-lesson"};function y(e,s,t,o,y,z){const x=(0,a.up)("router-link"),D=(0,a.up)("bar-horizontal"),I=(0,a.up)("lesson-card"),M=(0,a.up)("main-layout");return(0,a.wg)(),(0,a.j4)(M,{backgroundImage:z.backgroundURL,backgroundOffset:"10"},{header:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",r,[(0,a.Wm)(x,{to:"modules",class:"link"},{default:(0,a.w5)((()=>[i,c,d])),_:1}),(0,a._)("span",{class:"link",onClick:s[0]||(s[0]=e=>y.isMinimized=y.isMinimized.map((e=>!!z.allMinimized)))},[(0,a._)("span",null,(0,n.zw)(z.allMinimized?"Розгорнути все":"Згорнути все"),1),u,(0,a._)("span",m,(0,n.zw)(z.allMinimized?"expand_more":"expand_less"),1)])]),p,(0,a._)("div",k,(0,n.zw)(y.moduleName),1),(0,a._)("div",g,[(0,a.Wm)(D,{data:[z.moduleTasksCompleted,z.moduleTasksTotal-z.moduleTasksCompleted],colors:["#fffa","#fff4"]},null,8,["data"])])])])),body:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(z.blocks,((e,s)=>((0,a.wg)(),(0,a.iD)("div",{class:"block-section",key:e.name},[(0,a._)("div",{class:"block-title",onClick:e=>y.isMinimized[s]=!y.isMinimized[s]},[(0,a._)("div",null,[(0,a._)("div",v,"ТЕМА "+(0,n.zw)(s+1)+". "+(0,n.zw)(e.name),1),(0,a._)("div",f,(0,n.zw)(z.blockTasksCompleted[s])+" / "+(0,n.zw)(z.blockTasksTotal[s])+" завдань • "+(0,n.zw)(z.blockScore[s])+" / "+(0,n.zw)(z.blockScoreMax[s])+" балів",1)]),(0,a._)("i",b,(0,n.zw)(y.isMinimized[s]?"expand_less":"expand_more"),1)],8,h),y.isMinimized[s]?((0,a.wg)(),(0,a.iD)("div",w)):(0,a.kq)("",!0),y.isMinimized[s]?((0,a.wg)(),(0,a.iD)("div",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.lessons,((t,n)=>((0,a.wg)(),(0,a.j4)(I,{key:t.name,lesson:{...t,index:`${s+1}.${n+1}`},onClick:s=>z.launchQuiz(e.name,e._id,t.name,t._id)},null,8,["lesson","onClick"])))),128))])):(0,a.kq)("",!0)])))),128))])),_:1},8,["backgroundImage"])}t(6699);var z=t(721),x=t(7857),D=t(8925),I={components:{mainLayout:z.Z,lessonCard:x.Z,barHorizontal:D.Z},data(){return{isMinimized:this.$store.state.blocks.map((e=>!0)),moduleName:localStorage.getItem("moduleName"),moduleId:localStorage.getItem("moduleId")}},computed:{blocks(){return this.$store.state.blocks},blockTasksCompleted(){return this.blocks.map((e=>e.lessons.map((e=>e.tasksCompleted)).sum()))},blockTasksTotal(){return this.blocks.map((e=>e.lessons.map((e=>e.tasksTotal)).sum()))},blockScore(){return this.blocks.map((e=>e.lessons.map((e=>e.score)).sum()))},blockScoreMax(){return this.blocks.map((e=>e.lessons.map((e=>e.scoreTotal)).sum()))},blockPercentage(){return this.blockScore.map(((e,s)=>Math.round(e/this.blockScoreMax[s]*100)))},moduleTasksCompleted(){return this.blockTasksCompleted.sum()},moduleTasksTotal(){return this.blockTasksTotal.sum()},backgroundURL(){return this.$cloudinary+this.moduleId+".jpg"},allMinimized(){return!this.isMinimized.includes(!0)}},methods:{launchQuiz(e,s,t,a){localStorage.setItem("blockName",e),localStorage.setItem("lessonName",t),localStorage.setItem("blockId",s),localStorage.setItem("lessonId",a),this.$router.push("quiz")}}},M=t(8118);const T=(0,M.Z)(I,[["render",y],["__scopeId","data-v-4cdf1256"]]);var C=T},1223:function(e,s,t){var a=t(5112),n=t(30),o=t(3070).f,l=a("unscopables"),r=Array.prototype;void 0==r[l]&&o(r,l,{configurable:!0,value:n(null)}),e.exports=function(e){r[l][e]=!0}},490:function(e,s,t){var a=t(5005);e.exports=a("document","documentElement")},30:function(e,s,t){var a,n=t(9670),o=t(6048),l=t(748),r=t(3501),i=t(490),c=t(317),d=t(6200),u=">",m="<",p="prototype",k="script",g=d("IE_PROTO"),h=function(){},v=function(e){return m+k+u+e+m+"/"+k+u},f=function(e){e.write(v("")),e.close();var s=e.parentWindow.Object;return e=null,s},b=function(){var e,s=c("iframe"),t="java"+k+":";return s.style.display="none",i.appendChild(s),s.src=String(t),e=s.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{a=new ActiveXObject("htmlfile")}catch(s){}w="undefined"!=typeof document?document.domain&&a?f(a):b():f(a);var e=l.length;while(e--)delete w[p][l[e]];return w()};r[g]=!0,e.exports=Object.create||function(e,s){var t;return null!==e?(h[p]=n(e),t=new h,h[p]=null,t[g]=e):t=w(),void 0===s?t:o.f(t,s)}},6048:function(e,s,t){var a=t(9781),n=t(3353),o=t(3070),l=t(9670),r=t(5656),i=t(1956);s.f=a&&!n?Object.defineProperties:function(e,s){l(e);var t,a=r(s),n=i(s),c=n.length,d=0;while(c>d)o.f(e,t=n[d++],a[t]);return e}},1956:function(e,s,t){var a=t(6324),n=t(748);e.exports=Object.keys||function(e){return a(e,n)}},6699:function(e,s,t){"use strict";var a=t(2109),n=t(1318).includes,o=t(7293),l=t(1223),r=o((function(){return!Array(1).includes()}));a({target:"Array",proto:!0,forced:r},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),l("includes")}}]);
//# sourceMappingURL=858.f87ec0c5.js.map