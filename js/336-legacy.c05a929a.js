"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[336],{9137:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var o=t(6252),a=t(3577),s=function(e){return(0,o.dD)("data-v-08887dac"),e=e(),(0,o.Cn)(),e},l={class:"header-section"},i={class:"lesson-navbar"},r=s((function(){return(0,o._)("span",{class:"material-icons"},"arrow_back",-1)})),u=(0,o.Uk)("  Назад до списку тем "),c={class:"lesson-name"},d=["disabled"],m=["disabled"];function p(e,n,t,s,p,g){var k=(0,o.up)("modal-report"),b=(0,o.up)("modal-result"),f=(0,o.up)("router-link"),I=(0,o.up)("pagination"),h=(0,o.up)("task-content"),v=(0,o.up)("main-layout");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(k,{visible:p.modalFeedbackVisible,"onUpdate:visible":n[0]||(n[0]=function(e){return p.modalFeedbackVisible=e})},null,8,["visible"]),(0,o.Wm)(b,{visible:p.modalResultVisible,"onUpdate:visible":n[1]||(n[1]=function(e){return p.modalResultVisible=e}),percentage:g.lessonPercentage,percentageAvg:g.lessonAvgPercentage},null,8,["visible","percentage","percentageAvg"]),(0,o.Wm)(v,{backgroundImage:g.backgroundURL,backgroundOffset:"10"},{header:(0,o.w5)((function(){return[(0,o._)("div",l,[(0,o._)("div",i,[(0,o.Wm)(f,{to:"lessons",class:"link"},{default:(0,o.w5)((function(){return[r,u]})),_:1}),(0,o._)("span",{class:"link",onClick:n[2]||(n[2]=function(e){return p.modalFeedbackVisible=!0})},"Помітили помилку?")]),(0,o._)("div",c,(0,a.zw)(p.lessonName),1),(0,o._)("div",null,[(0,o.Wm)(I,{page:p.taskIndex,"onUpdate:page":n[3]||(n[3]=function(e){return p.taskIndex=e}),pageMax:g.lesson.length,pageLimit:9,colors:g.paginationColors,ref:"pagination"},null,8,["page","pageMax","colors"])])])]})),body:(0,o.w5)((function(){return[(0,o.Wm)(h,{taskIndex:p.taskIndex,onAnswer:g.postAnswer,onSkip:g.skipAnswer},{default:(0,o.w5)((function(){return[(0,o._)("button",{id:"button-back",class:"button-plain button-next",disabled:0==p.taskIndex,onClick:n[4]||(n[4]=function(e){return g.taskGoto(p.taskIndex-1)})},"Назад",8,d),p.taskIndex!==g.lesson.length-1?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"button-plain button-next",onClick:n[5]||(n[5]=function(e){return g.taskGoto(p.taskIndex+1)})},"Далі")):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"button-plain",disabled:!g.lessonCompleted,onClick:n[6]||(n[6]=function(e){return p.modalResultVisible=!0})},"Результат",8,m))]})),_:1},8,["taskIndex","onAnswer","onSkip"])]})),_:1},8,["backgroundImage"])],64)}t(6699),t(2023),t(1249);var g=t(1844),k=t(5762),b=t(2364),f=t(3282),I=t(7132),h=t(2516),v={components:{mainLayout:k.Z,taskContent:b.Z,pagination:f.Z,modalResult:I.Z,modalReport:h.Z},beforeMount:function(){this.$nextTick((function(e){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])}))},data:function(){return{taskIndex:0,showResult:!1,modalConfirmationVisible:!1,modalResultVisible:!1,modalFeedbackVisible:!1,moduleName:localStorage.getItem("moduleName"),lessonName:localStorage.getItem("lessonName"),blockName:localStorage.getItem("blockName"),moduleId:localStorage.getItem("moduleId"),lessonId:parseInt(localStorage.getItem("lessonId")),blockId:parseInt(localStorage.getItem("blockId")),colorTheme:localStorage.getItem("colorTheme")}},computed:{lesson:function(){return this.$store.state.tasks},lessonCompleted:function(){return!this.lesson.map((function(e){return e.completed})).includes(!1)},lessonPercentage:function(){return Math.round(this.lesson.map((function(e){return e.score})).sum()/this.lesson.map((function(e){return e.weight})).sum()*100)},lessonAvgPercentage:function(){return Math.round(this.lesson.map((function(e){return"radio"==e.type?e.correctAnswersTotal/(e.answersTotal||1)*100:0})).average())},paginationColors:function(){var e=this;return this.lesson.map((function(n){return n.completed?e.mix3(n.percentage):"gray"}))},backgroundURL:function(){return this.$cloudinary+this.moduleId+".jpg"}},methods:{postAnswer:function(e){g.Z.postAnswer(this.moduleId,this.blockId,this.lessonId,e)},skipAnswer:function(e){g.Z.skipAnswer(e)},taskGoto:function(e){this.$refs.pagination.pageGoto(e)},reportMistake:function(){g.Z.reportMistake()}}},w=t(8118);const x=(0,w.Z)(v,[["render",p],["__scopeId","data-v-08887dac"]]);var A=x}}]);
//# sourceMappingURL=336-legacy.c05a929a.js.map