"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[397],{8925:function(s,e,a){a.d(e,{Z:function(){return m}});var l=a(6252);const t={class:"relative elastic"},o={viewBox:"0 0 100 10",preserveAspectRatio:"none"},n=["width","x","fill"],i={class:"bar-label"};function r(s,e,a,r,c,d){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",t,[((0,l.wg)(),(0,l.iD)("svg",o,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.data.length,(s=>((0,l.wg)(),(0,l.iD)("rect",{key:s,width:d.percentages[s-1],height:"10",x:d.partials[s-1],fill:a.colors[s-1]},null,8,n)))),128))]))]),(0,l._)("div",i,[(0,l.WI)(s.$slots,"default",{},void 0,!0)])],64)}var c={props:{data:Array,colors:Array,labels:Array},computed:{percentages(){return this.data.map((s=>Math.ceil(s/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},d=a(8118);const u=(0,d.Z)(c,[["render",r],["__scopeId","data-v-9102e97e"]]);var m=u},7925:function(s,e,a){a.d(e,{Z:function(){return m}});var l=a(6252),t=a(3577);const o={class:"relative elastic"},n={viewBox:"0 0 110 110",width:"100%",height:"100%"},i={class:"centered"};function r(s,e,a,r,c,d){return(0,l.wg)(),(0,l.iD)("div",o,[((0,l.wg)(),(0,l.iD)("svg",n,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.data.length,(s=>((0,l.wg)(),(0,l.iD)("g",{key:s},[a.data[a.data.length-s]?((0,l.wg)(),(0,l.iD)("circle",{key:0,style:(0,t.j5)({strokeDasharray:d.percentages[a.data.length-s]*Math.PI+" 314",strokeDashoffset:-d.partials[a.data.length-s]*Math.PI,strokeWidth:a.thickness,stroke:a.colors[a.data.length-s]}),r:"50",cx:"55",cy:"55"},null,4)):(0,l.kq)("",!0)])))),128))])),(0,l._)("div",i,[(0,l.WI)(s.$slots,"default",{},void 0,!0)])])}var c={props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages(){return this.data.map((s=>Math.ceil(s/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},d=a(8118);const u=(0,d.Z)(c,[["render",r],["__scopeId","data-v-09ebced2"]]);var m=u},4397:function(s,e,a){a.r(e),a.d(e,{default:function(){return P}});var l=a(6252),t=a(3577);const o=s=>((0,l.dD)("data-v-6f2dc122"),s=s(),(0,l.Cn)(),s),n={class:"module-section"},i={class:"module-navbar"},r=o((()=>(0,l._)("span",{class:"material-icons"},"arrow_back",-1))),c=(0,l.Uk)("  Назад до списку курсів "),d={class:"material-icons"},u=o((()=>(0,l._)("div",{class:"module-course line-r"},"НМТ-2022",-1))),m={class:"module-name"},p={class:"bar-wrapper"},k=["onClick"],g={class:"block-name"},h={class:"material-icons"},w={key:0,class:"block-line"},v={key:1,class:"block-lesson"};function b(s,e,a,o,b,_){const z=(0,l.up)("router-link"),f=(0,l.up)("bar-horizontal"),y=(0,l.up)("lesson-card"),D=(0,l.up)("main-layout");return(0,l.wg)(),(0,l.j4)(D,{backgroundImage:_.backgroundURL,backgroundOffset:"10"},{header:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l._)("div",i,[(0,l.Wm)(z,{to:"modules",class:"link"},{default:(0,l.w5)((()=>[r,c])),_:1}),(0,l._)("span",{class:"link",onClick:e[0]||(e[0]=s=>b.isMinimized=b.isMinimized.map((s=>!!_.allMinimized)))},[(0,l.Uk)((0,t.zw)(_.allMinimized?"Розгорнути все":"Згорнути все")+"  ",1),(0,l._)("span",d,(0,t.zw)(_.allMinimized?"expand_more":"expand_less"),1)])]),u,(0,l._)("div",m,(0,t.zw)(b.moduleName),1),(0,l._)("div",p,[(0,l.Wm)(f,{data:[_.totalScore,_.totalScoreMax-_.totalScore],colors:["#fffa","#fff4"]},null,8,["data"])])])])),body:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.blocks,((s,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"block-section",key:s.name},[(0,l._)("div",{class:"block-title",onClick:s=>b.isMinimized[e]=!b.isMinimized[e]},[(0,l._)("span",g,"ТЕМА "+(0,t.zw)(e+1)+". "+(0,t.zw)(s.name),1),(0,l._)("span",h,(0,t.zw)(b.isMinimized[e]?"expand_less":"expand_more"),1)],8,k),b.isMinimized[e]?((0,l.wg)(),(0,l.iD)("div",w)):(0,l.kq)("",!0),b.isMinimized[e]?((0,l.wg)(),(0,l.iD)("div",v,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.lessons,((a,t)=>((0,l.wg)(),(0,l.j4)(y,{key:a.name,lesson:{...a,index:t+1,blockIndex:e+1},onClick:e=>_.launchQuiz(s.name,s._id,a.name,a._id)},null,8,["lesson","onClick"])))),128))])):(0,l.kq)("",!0)])))),128))])),_:1},8,["backgroundImage"])}a(6699);var _=a(4683);const z=s=>((0,l.dD)("data-v-0f227f18"),s=s(),(0,l.Cn)(),s),f={class:"lesson-block"},y={class:"lesson-header"},D=z((()=>(0,l._)("div",{class:"lesson-type"},"Урок",-1))),I={class:"lesson-index"},x={class:"bar-wrapper"},M={class:"lesson-block-body"},C={class:""},S={key:1,class:"material-icons-outlined mobile",style:{color:"#0004"}},q={key:2,class:"material-icons-outlined mobile",style:{color:"#0002"}},Z={key:0,class:"material-icons-outlined"},j=(0,l.Uk)(" Пройдено "),H={key:0,class:"material-icons-outlined"},A={class:"lesson-name"},N={class:"lesson-info"},U={style:{color:"#0008"}};function W(s,e,a,o,n,i){const r=(0,l.up)("bar-horizontal");return(0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("div",y,[D,(0,l._)("div",I,(0,t.zw)(a.lesson.blockIndex+"."+a.lesson.index),1),(0,l._)("div",x,[(0,l.Wm)(r,{data:[a.lesson.score,a.lesson.scoreMax-a.lesson.score,a.lesson.scoreTotal-a.lesson.scoreMax],colors:[s.mix3(100),s.mix3(0),"#0002"]},null,8,["data","colors"])])]),(0,l._)("div",M,[(0,l._)("div",C,[a.lesson.completed?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"material-icons-outlined mobile",style:(0,t.j5)({color:n.tagBackground})},(0,t.zw)("done"),4)):(0,l.kq)("",!0),a.lesson.started&&!a.lesson.completed?((0,l.wg)(),(0,l.iD)("span",S,(0,t.zw)("schedule"))):(0,l.kq)("",!0),a.lesson.started?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",q,(0,t.zw)("play_circle"))),a.lesson.completed?((0,l.wg)(),(0,l.iD)("span",{key:3,class:"tag1",style:(0,t.j5)({background:n.tagBackground})},[a.lesson.started?((0,l.wg)(),(0,l.iD)("span",Z,(0,t.zw)("done"))):(0,l.kq)("",!0),j],4)):((0,l.wg)(),(0,l.iD)("span",{key:4,class:(0,t.C_)(["tag1",a.lesson.started?"lesson-started":"lesson-not-started"])},[a.lesson.started?((0,l.wg)(),(0,l.iD)("span",H,(0,t.zw)("schedule"))):(0,l.kq)("",!0),(0,l.Uk)(" "+(0,t.zw)(a.lesson.started?"У процесі":"Не розпочато"),1)],2)),(0,l._)("span",A," "+(0,t.zw)(a.lesson.name),1)]),(0,l._)("div",N,[(0,l._)("span",U,(0,t.zw)(a.lesson.tasksCompleted)+" / "+(0,t.zw)(a.lesson.tasksTotal)+" завдань •  "+(0,t.zw)(a.lesson.score)+" / "+(0,t.zw)(a.lesson.scoreTotal)+" балів",1)])])])}var $=a(7925),B=a(8925),Y={components:{chartDoughnut:$.Z,barHorizontal:B.Z},props:{lesson:Object},data(){return{tagBackground:this.lesson.tasksCompleted?this.mix3(10*Math.trunc(this.lesson.percentage/10)):"#0005",tagIconColor:this.lesson.started?"#0004":"transparent"}}},K=a(8118);const T=(0,K.Z)(Y,[["render",W],["__scopeId","data-v-0f227f18"]]);var L=T,R={components:{mainLayout:_.Z,lessonCard:L,barHorizontal:B.Z},data(){return{isMinimized:this.$store.state.blocks.map((s=>!0)),moduleName:localStorage.getItem("moduleName"),moduleId:localStorage.getItem("moduleId")}},computed:{backgroundURL(){return this.$cloudinary+this.moduleId+".jpg"},allMinimized(){return!this.isMinimized.includes(!0)},blocks(){return this.$store.state.blocks},totalScore(){return this.blocks.map((s=>s.lessons.map((s=>s.score)).sum())).sum()},totalScoreMax(){return this.blocks.map((s=>s.lessons.map((s=>s.scoreTotal)).sum())).sum()},mixedColors(){let s=[];for(let e=0;e<10;e++)s.push(this.mix3(10*e));return[...s,"#0002"]}},methods:{launchQuiz(s,e,a,l){localStorage.setItem("blockName",s),localStorage.setItem("lessonName",a),localStorage.setItem("blockId",e),localStorage.setItem("lessonId",l),this.$router.push("quiz")}}};const O=(0,K.Z)(R,[["render",b],["__scopeId","data-v-6f2dc122"]]);var P=O}}]);
//# sourceMappingURL=397.1be8efa0.js.map