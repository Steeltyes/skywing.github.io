"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[465],{8640:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var o=t(6252),a=t(3577),s=function(n){return(0,o.dD)("data-v-2404fd9e"),n=n(),(0,o.Cn)(),n},i={class:"header-section"},r={class:"lesson-navbar"},u=s((function(){return(0,o._)("span",{class:"material-icons"},"arrow_back",-1)})),l=(0,o.Uk)("  Назад до списку тестів "),c={class:"lesson-name"},d=["disabled"],p=["disabled"];function m(n,e,t,s,m,f){var b=(0,o.up)("modal-report"),g=(0,o.up)("modal-result"),k=(0,o.up)("router-link"),h=(0,o.up)("pagination"),w=(0,o.up)("task-content"),v=(0,o.up)("main-layout");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(b,{visible:m.modalFeedbackVisible,"onUpdate:visible":e[0]||(e[0]=function(n){return m.modalFeedbackVisible=n})},null,8,["visible"]),(0,o.Wm)(g,{visible:m.modalResultVisible,"onUpdate:visible":e[1]||(e[1]=function(n){return m.modalResultVisible=n}),percentage:f.lessonPercentage},null,8,["visible","percentage"]),(0,o.Wm)(v,{backgroundImage:f.backgroundURL,backgroundOffset:"15"},{header:(0,o.w5)((function(){return[(0,o._)("div",i,[(0,o._)("div",r,[(0,o.Wm)(k,{to:"prefabs",class:"link"},{default:(0,o.w5)((function(){return[u,l]})),_:1}),(0,o._)("span",{class:"link",onClick:e[2]||(e[2]=function(n){return m.showTip=!m.showTip})},(0,a.zw)(m.showTip?"Приховати теорію":"Показати теорію"),1)]),(0,o._)("div",c,(0,a.zw)(m.prefabName),1),(0,o._)("div",null,[(0,o.Wm)(h,{page:m.taskIndex,"onUpdate:page":e[3]||(e[3]=function(n){return m.taskIndex=n}),pageMax:f.lesson.length,pageLimit:10,colors:f.paginationColors,ref:"pagination"},null,8,["page","pageMax","colors"])])])]})),body:(0,o.w5)((function(){return[(0,o.Wm)(w,(0,o.dG)({taskIndex:m.taskIndex,showTip:m.showTip,maxAttempts:1},{onAnswer:f.postAnswer}),{default:(0,o.w5)((function(){return[(0,o._)("button",{id:"button-back",class:"button-plain button-next",disabled:0==m.taskIndex,onClick:e[4]||(e[4]=function(n){return f.taskGoto(m.taskIndex-1)})},"Назад",8,d),m.taskIndex!==f.lesson.length-1?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"button-plain button-next",onClick:e[5]||(e[5]=function(n){return f.taskGoto(m.taskIndex+1)})},"Далі")):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"button-plain",disabled:!f.lessonCompleted,onClick:e[6]||(e[6]=function(n){return m.modalResultVisible=!0})},"Результат",8,p))]})),_:1},16,["onAnswer"])]})),_:1},8,["backgroundImage"])],64)}t(6699),t(2023),t(1249);var f=t(1844),b=t(721),g=t(4425),k=t(3282),h=t(6094),w=t(6748),v={components:{mainLayout:b.Z,taskContent:g.Z,pagination:k.Z,modalReport:h.Z,modalResult:w.Z},beforeMount:function(){this.$nextTick((function(n){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])}))},data:function(){return{taskIndex:0,showTip:!1,showResult:!1,modalResultVisible:!1,modalFeedbackVisible:!1,moduleId:localStorage.getItem("moduleId"),prefabName:localStorage.getItem("lessonName"),colorTheme:localStorage.getItem("colorTheme")}},computed:{lesson:function(){return this.$store.state.tasks},lessonCompleted:function(){return!this.lesson.map((function(n){return n.completed})).includes(!1)},lessonPercentage:function(){return Math.round(this.lesson.map((function(n){return n.score})).sum()/this.lesson.map((function(n){return n.weight})).sum()*100)},lessonAvgPercentage:function(){return Math.round(this.lesson.map((function(n){return"radio"==n.type?n.correctAnswersTotal/(n.answersTotal||1)*100:0})).average())},paginationColors:function(){var n=this;return this.lesson.map((function(e){return e.completed?n.mix3(e.percentage):"gray"}))},backgroundURL:function(){return this.$cloudinary+this.moduleId+".jpg"}},methods:{taskGoto:function(n){this.$refs.pagination.pageGoto(n)},postAnswer:function(n){f.Z.postPrefabAnswer(this.prefabName,n)}}},x=t(8118);const I=(0,x.Z)(v,[["render",m],["__scopeId","data-v-2404fd9e"]]);var _=I}}]);
//# sourceMappingURL=465-legacy.422faa84.js.map