"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[646],{8663:function(e,s,t){t.r(s),t.d(s,{default:function(){return A}});var a=t(6252),o=t(3577);const n=e=>((0,a.dD)("data-v-2632cf9a"),e=e(),(0,a.Cn)(),e),l={class:"header-section"},i={class:"lesson-navbar"},r=n((()=>(0,a._)("span",{class:"material-icons"},"arrow_back",-1))),d=(0,a.Uk)("  Назад до списку тем "),c={class:"lesson-name"},u=["disabled"],m=["disabled"];function p(e,s,t,n,p,g){const k=(0,a.up)("modal-report"),b=(0,a.up)("modal-result"),I=(0,a.up)("router-link"),h=(0,a.up)("pagination"),w=(0,a.up)("task-content"),v=(0,a.up)("main-layout");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(k,{visible:p.modalFeedbackVisible,"onUpdate:visible":s[0]||(s[0]=e=>p.modalFeedbackVisible=e)},null,8,["visible"]),(0,a.Wm)(b,{visible:p.modalResultVisible,"onUpdate:visible":s[1]||(s[1]=e=>p.modalResultVisible=e),percentage:g.lessonPercentage,percentageAvg:g.lessonAvgPercentage},null,8,["visible","percentage","percentageAvg"]),(0,a.Wm)(v,{backgroundImage:g.backgroundURL,backgroundOffset:"10"},{header:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",i,[(0,a.Wm)(I,{to:"lessons",class:"link"},{default:(0,a.w5)((()=>[r,d])),_:1}),(0,a._)("span",{class:"link",onClick:s[2]||(s[2]=e=>p.modalFeedbackVisible=!0)},"Помітили помилку?")]),(0,a._)("div",c,(0,o.zw)(p.lessonName),1),(0,a._)("div",null,[(0,a.Wm)(h,{page:p.taskIndex,"onUpdate:page":s[3]||(s[3]=e=>p.taskIndex=e),pageMax:g.lesson.length,pageLimit:9,colors:g.paginationColors,ref:"pagination"},null,8,["page","pageMax","colors"])])])])),body:(0,a.w5)((()=>[(0,a.Wm)(w,{taskIndex:p.taskIndex,onAnswer:g.postAnswer,onSkip:g.skipAnswer},{default:(0,a.w5)((()=>[(0,a._)("button",{id:"button-back",class:"button-plain button-next",disabled:0==p.taskIndex,onClick:s[4]||(s[4]=e=>g.taskGoto(p.taskIndex-1))},"Назад",8,u),p.taskIndex!==g.lesson.length-1?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"button-plain button-next",onClick:s[5]||(s[5]=e=>g.taskGoto(p.taskIndex+1))},"Далі")):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"button-plain",disabled:!g.lessonCompleted,onClick:s[6]||(s[6]=e=>p.modalResultVisible=!0)},"Результат",8,m))])),_:1},8,["taskIndex","onAnswer","onSkip"])])),_:1},8,["backgroundImage"])],64)}t(6699);var g=t(1844),k=t(721),b=t(8802),I=t(3282),h=t(6748),w=t(6094),v={components:{mainLayout:k.Z,taskContent:b.Z,pagination:I.Z,modalResult:h.Z,modalReport:w.Z},beforeMount(){this.$nextTick((e=>MathJax.Hub.Queue(["Typeset",MathJax.Hub])))},data(){return{taskIndex:0,showResult:!1,modalConfirmationVisible:!1,modalResultVisible:!1,modalFeedbackVisible:!1,moduleName:localStorage.getItem("moduleName"),lessonName:localStorage.getItem("lessonName"),blockName:localStorage.getItem("blockName"),moduleId:localStorage.getItem("moduleId"),lessonId:parseInt(localStorage.getItem("lessonId")),blockId:parseInt(localStorage.getItem("blockId")),colorTheme:localStorage.getItem("colorTheme")}},computed:{lesson(){return this.$store.state.tasks},lessonCompleted(){return!this.lesson.map((e=>e.completed)).includes(!1)},lessonPercentage(){return Math.round(this.lesson.map((e=>e.score)).sum()/this.lesson.map((e=>e.weight)).sum()*100)},lessonAvgPercentage(){return Math.round(this.lesson.map((e=>"radio"==e.type?e.correctAnswersTotal/(e.answersTotal||1)*100:0)).average())},paginationColors(){return this.lesson.map((e=>e.completed?this.mix3(e.percentage):"gray"))},backgroundURL(){return this.$cloudinary+this.moduleId+".jpg"}},methods:{postAnswer(e){g.Z.postAnswer(this.moduleId,this.blockId,this.lessonId,e)},skipAnswer(e){g.Z.skipAnswer(e)},taskGoto(e){this.$refs.pagination.pageGoto(e)},reportMistake(){g.Z.reportMistake()}}},x=t(8118);const f=(0,x.Z)(v,[["render",p],["__scopeId","data-v-2632cf9a"]]);var A=f}}]);
//# sourceMappingURL=646.2464a9fc.js.map