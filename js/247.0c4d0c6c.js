"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[247],{8925:function(s,e,a){a.d(e,{Z:function(){return m}});var l=a(6252);const o={class:"relative elastic"},t={viewBox:"0 0 100 10",preserveAspectRatio:"none"},n=["width","x","fill"],i={class:"bar-label"};function r(s,e,a,r,c,d){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",o,[((0,l.wg)(),(0,l.iD)("svg",t,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.data.length,(s=>((0,l.wg)(),(0,l.iD)("rect",{key:s,width:d.percentages[s-1],height:"10",x:d.partials[s-1],fill:a.colors[s-1]},null,8,n)))),128))]))]),(0,l._)("div",i,[(0,l.WI)(s.$slots,"default",{},void 0,!0)])],64)}var c={props:{data:Array,colors:Array,labels:Array},computed:{percentages(){return this.data.map((s=>Math.ceil(s/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},d=a(8118);const u=(0,d.Z)(c,[["render",r],["__scopeId","data-v-9102e97e"]]);var m=u},7925:function(s,e,a){a.d(e,{Z:function(){return m}});var l=a(6252),o=a(3577);const t={class:"relative elastic"},n={viewBox:"0 0 110 110",width:"100%",height:"100%"},i={class:"centered"};function r(s,e,a,r,c,d){return(0,l.wg)(),(0,l.iD)("div",t,[((0,l.wg)(),(0,l.iD)("svg",n,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.data.length,(s=>((0,l.wg)(),(0,l.iD)("g",{key:s},[a.data[a.data.length-s]?((0,l.wg)(),(0,l.iD)("circle",{key:0,style:(0,o.j5)({strokeDasharray:d.percentages[a.data.length-s]*Math.PI+" 314",strokeDashoffset:-d.partials[a.data.length-s]*Math.PI,strokeWidth:a.thickness,stroke:a.colors[a.data.length-s]}),r:"50",cx:"55",cy:"55"},null,4)):(0,l.kq)("",!0)])))),128))])),(0,l._)("div",i,[(0,l.WI)(s.$slots,"default",{},void 0,!0)])])}var c={props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages(){return this.data.map((s=>Math.ceil(s/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},d=a(8118);const u=(0,d.Z)(c,[["render",r],["__scopeId","data-v-09ebced2"]]);var m=u},9247:function(s,e,a){a.r(e),a.d(e,{default:function(){return O}});var l=a(6252),o=a(3577);const t=s=>((0,l.dD)("data-v-b903c6d8"),s=s(),(0,l.Cn)(),s),n={class:"module-section"},i={class:"module-navbar"},r=t((()=>(0,l._)("span",{class:"material-icons"},"arrow_back",-1))),c=(0,l.Uk)("  Назад до списку курсів "),d={class:"material-icons"},u=t((()=>(0,l._)("div",{class:"module-course line-r"},"НМТ-2022",-1))),m={class:"module-name"},k={class:"bar-wrapper"},p=["onClick"],g={class:"block-name"},h={class:"block-info"},w={class:"material-icons"},b={key:0,class:"block-line"},v={key:1,class:"block-lesson"};function _(s,e,a,t,_,z){const f=(0,l.up)("router-link"),y=(0,l.up)("bar-horizontal"),D=(0,l.up)("lesson-card"),x=(0,l.up)("main-layout");return(0,l.wg)(),(0,l.j4)(x,{backgroundImage:z.backgroundURL,backgroundOffset:"10"},{header:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l._)("div",i,[(0,l.Wm)(f,{to:"modules",class:"link"},{default:(0,l.w5)((()=>[r,c])),_:1}),(0,l._)("span",{class:"link",onClick:e[0]||(e[0]=s=>_.isMinimized=_.isMinimized.map((s=>!!z.allMinimized)))},[(0,l.Uk)((0,o.zw)(z.allMinimized?"Розгорнути все":"Згорнути все")+"  ",1),(0,l._)("span",d,(0,o.zw)(z.allMinimized?"expand_more":"expand_less"),1)])]),u,(0,l._)("div",m,(0,o.zw)(_.moduleName),1),(0,l._)("div",k,[(0,l.Wm)(y,{data:[z.totalScore,z.totalScoreMax-z.totalScore],colors:["#fffa","#fff4"]},null,8,["data"])])])])),body:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(z.blocks,((s,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"block-section",key:s.name},[(0,l._)("div",{class:"block-title",onClick:s=>_.isMinimized[e]=!_.isMinimized[e]},[(0,l._)("div",null,[(0,l._)("div",g,"ТЕМА "+(0,o.zw)(e+1)+". "+(0,o.zw)(s.name),1),(0,l._)("div",h,(0,o.zw)(z.blockTasksCompleted[e])+" / "+(0,o.zw)(z.blockTasksTotal[e])+" завдань • "+(0,o.zw)(z.blockScore[e])+" / "+(0,o.zw)(z.blockScoreMax[e])+" балів",1)]),(0,l._)("span",w,(0,o.zw)(_.isMinimized[e]?"expand_less":"expand_more"),1)],8,p),_.isMinimized[e]?((0,l.wg)(),(0,l.iD)("div",b)):(0,l.kq)("",!0),_.isMinimized[e]?((0,l.wg)(),(0,l.iD)("div",v,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.lessons,((a,o)=>((0,l.wg)(),(0,l.j4)(D,{key:a.name,lesson:{...a,index:o+1,blockIndex:e+1},onClick:e=>z.launchQuiz(s.name,s._id,a.name,a._id)},null,8,["lesson","onClick"])))),128))])):(0,l.kq)("",!0)])))),128))])),_:1},8,["backgroundImage"])}a(6699);var z=a(1886);const f=s=>((0,l.dD)("data-v-d16f4628"),s=s(),(0,l.Cn)(),s),y={class:"lesson-block"},D={class:"lesson-header"},x=f((()=>(0,l._)("div",{class:"lesson-type"},"Урок",-1))),I={class:"lesson-index"},M={class:"bar-wrapper"},S={class:""},C={key:1,class:"material-icons-outlined icon-mobile",style:{color:"#0005"}},T={key:2,class:"material-icons-outlined icon-mobile",style:{color:"#0002"}},q={key:0,class:"material-icons-outlined"},Z=(0,l.Uk)("  Пройдено "),j={key:0,class:"material-icons-outlined"},H={class:"lesson-name"},A={class:"lesson-info"};function N(s,e,a,t,n,i){const r=(0,l.up)("bar-horizontal");return(0,l.wg)(),(0,l.iD)("div",y,[(0,l._)("div",D,[x,(0,l._)("div",I,(0,o.zw)(a.lesson.blockIndex+"."+a.lesson.index),1),(0,l._)("div",M,[(0,l.Wm)(r,{data:[a.lesson.score,a.lesson.scoreMax-a.lesson.score,a.lesson.scoreTotal-a.lesson.scoreMax],colors:[s.mix3(100),s.mix3(0),"#00000015"]},null,8,["data","colors"])])]),(0,l._)("div",null,[(0,l._)("div",S,[a.lesson.completed?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"material-icons-outlined icon-mobile",style:(0,o.j5)({color:n.tagBackground})},(0,o.zw)("done_all"),4)):(0,l.kq)("",!0),a.lesson.started&&!a.lesson.completed?((0,l.wg)(),(0,l.iD)("span",C,(0,o.zw)("schedule"))):(0,l.kq)("",!0),a.lesson.started?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",T,(0,o.zw)("play_circle"))),a.lesson.completed?((0,l.wg)(),(0,l.iD)("span",{key:3,class:"tag1",style:(0,o.j5)({background:n.tagBackground})},[a.lesson.started?((0,l.wg)(),(0,l.iD)("span",q,(0,o.zw)("done"))):(0,l.kq)("",!0),Z],4)):((0,l.wg)(),(0,l.iD)("span",{key:4,class:(0,o.C_)(["tag1",a.lesson.started?"lesson-started":"lesson-not-started"])},[a.lesson.started?((0,l.wg)(),(0,l.iD)("span",j,(0,o.zw)("schedule"))):(0,l.kq)("",!0),(0,l.Uk)(" "+(0,o.zw)(a.lesson.started?"У процесі":"Не розпочато"),1)],2)),(0,l._)("span",H,(0,o.zw)(a.lesson.name),1)]),(0,l._)("div",A,(0,o.zw)(a.lesson.tasksCompleted)+" / "+(0,o.zw)(a.lesson.tasksTotal)+" завдань  •  "+(0,o.zw)(a.lesson.score)+" / "+(0,o.zw)(a.lesson.scoreTotal)+" балів ",1)])])}var U=a(7925),W=a(8925),$={components:{chartDoughnut:U.Z,barHorizontal:W.Z},props:{lesson:Object},data(){return{tagBackground:this.lesson.tasksCompleted?this.mix3(this.lesson.percentage):"#0005",tagIconColor:this.lesson.started?"#0004":"transparent"}}},B=a(8118);const Y=(0,B.Z)($,[["render",N],["__scopeId","data-v-d16f4628"]]);var K=Y,L={components:{mainLayout:z.Z,lessonCard:K,barHorizontal:W.Z},data(){return{isMinimized:this.$store.state.blocks.map((s=>!0)),moduleName:localStorage.getItem("moduleName"),moduleId:localStorage.getItem("moduleId")}},computed:{blocks(){return this.$store.state.blocks},blockTasksCompleted(){return this.blocks.map((s=>s.lessons.map((s=>s.tasksCompleted)).sum()))},blockTasksTotal(){return this.blocks.map((s=>s.lessons.map((s=>s.tasksTotal)).sum()))},blockScore(){return this.blocks.map((s=>s.lessons.map((s=>s.score)).sum()))},blockScoreMax(){return this.blocks.map((s=>s.lessons.map((s=>s.scoreTotal)).sum()))},totalScore(){return this.blockScore.sum()},totalScoreMax(){return this.blockScoreMax.sum()},mixedColors(){let s=[];for(let e=0;e<10;e++)s.push(this.mix3(10*e));return[...s,"#0002"]},backgroundURL(){return this.$cloudinary+this.moduleId+".jpg"},allMinimized(){return!this.isMinimized.includes(!0)}},methods:{launchQuiz(s,e,a,l){localStorage.setItem("blockName",s),localStorage.setItem("lessonName",a),localStorage.setItem("blockId",e),localStorage.setItem("lessonId",l),this.$router.push("quiz")}}};const R=(0,B.Z)(L,[["render",_],["__scopeId","data-v-b903c6d8"]]);var O=R}}]);
//# sourceMappingURL=247.0c4d0c6c.js.map