(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[159],{1800:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var a=n(6252),r={viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none"},o=["x","height","width","fill"],s=["to"];function i(t,e,n,i,l,c){return(0,a.wg)(),(0,a.iD)("svg",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(function(t){return(0,a.wg)(),(0,a.iD)("rect",{key:t,x:100/n.data.length*(t-1)+ +n.gap/2,height:c.percentages[t-1]||2,y:"0",width:100/n.data.length-+n.gap,fill:n.colors[t-1]},[n.isAnimated?((0,a.wg)(),(0,a.iD)("animate",{key:0,attributeName:"height",from:"0",to:c.percentages[t-1]+5,dur:"2s",fill:"freeze"},null,8,s)):(0,a.kq)("",!0)],8,o)})),128))])}n(9653),n(1249);var l={name:"histogram",props:{data:{type:Array,required:!0},colors:{type:Array,required:!0},isAnimated:{type:Boolean,required:!1,default:!1},gap:{type:Number,required:!1,default:0}},computed:{percentages:function(){var t=this;return this.data.map((function(e){return Math.ceil(e/t.data.max()*100)}))}}},c=n(8118);const u=(0,c.Z)(l,[["render",i],["__scopeId","data-v-2375c831"]]);var d=u},7925:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var a=n(6252),r=n(3577),o={class:"relative elastic"},s={viewBox:"0 0 110 110",width:"100%",height:"100%"},i={class:"centered"};function l(t,e,n,l,c,u){return(0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(),(0,a.iD)("svg",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(function(t){return(0,a.wg)(),(0,a.iD)("g",{key:t},[n.data[n.data.length-t]?((0,a.wg)(),(0,a.iD)("circle",{key:0,style:(0,r.j5)({strokeDasharray:u.percentages[n.data.length-t]*Math.PI+" 314",strokeDashoffset:-u.partials[n.data.length-t]*Math.PI,strokeWidth:n.thickness,stroke:n.colors[n.data.length-t]}),r:"50",cx:"55",cy:"55"},null,4)):(0,a.kq)("",!0)])})),128))])),(0,a._)("div",i,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])])}var c=n(9225),u=(n(9653),n(1249),n(2222),{props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages:function(){var t=this;return this.data.map((function(e){return Math.ceil(e/t.data.sum()*100)}))},partials:function(){return[0].concat((0,c.Z)(this.percentages.partialSums()))}}}),d=n(8118);const p=(0,d.Z)(u,[["render",l],["__scopeId","data-v-09ebced2"]]);var m=p},1159:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Lt}});n(2222),n(1539);var a=n(6252),r=n(3577),o=n(9963),s=function(t){return(0,a.dD)("data-v-1ef8f1d5"),t=t(),(0,a.Cn)(),t},i=s((function(){return(0,a._)("div",{class:"modal-text"},"Побачивши відповідь, ви вже не зможете робити нових спроб. Все одно продовжити?",-1)})),l=s((function(){return(0,a._)("div",{class:"modal-header"},"Ваш результат",-1)})),c={class:"chart-wrapper"},u={class:"chart-percentage"},d=s((function(){return(0,a._)("div",{class:"chart-label"},"правильно",-1)})),p={class:"header-section"},m={class:"lesson-navbar"},k=s((function(){return(0,a._)("span",{class:"material-icons"},"arrow_back",-1)})),g=(0,a.Uk)("  Назад до списку тем "),f={class:"lesson-name"},h={class:"task-section"},b={class:"task-info"},w={class:"task-index"},v=(0,a.Uk)("  "),y=s((function(){return(0,a._)("label",{for:"toggleTips",class:"material-icons"},"school",-1)})),_=(0,a.Uk)("  "),I=s((function(){return(0,a._)("label",{for:"toggleStats",class:"material-icons"},"bar_chart",-1)})),C={class:"task-stats"},x=(0,a.Uk)(" •  "),D=["innerHTML"],$=["innerHTML"],T={key:1},M=s((function(){return(0,a._)("br",null,null,-1)})),N=s((function(){return(0,a._)("span",{class:"tag1",style:{background:"orange"}},"Зверніть увагу",-1)})),V=["src"],q=["innerHTML"],A={class:"task-content"},S={key:0,class:"task-options"},Z={class:"task-letter"},U={key:0,class:"task-option"},j=["src"],H={key:1,class:"task-options"},z={class:"task-letter"},W={key:0,class:"task-option"},L=["src"],E=["src"],R={class:"task-blank"},F={key:0,class:"bar-wrapper"},Y={key:1,class:"input-error-message"},P={class:"task-buttons"},K=["disabled"],B=["disabled"],O=["disabled"];function G(t,e,n,s,G,J){var Q=(0,a.up)("modal-report"),X=(0,a.up)("modal"),tt=(0,a.up)("chart-doughnut"),et=(0,a.up)("router-link"),nt=(0,a.up)("pagination"),at=(0,a.up)("chart-column"),rt=(0,a.up)("answer-blank"),ot=(0,a.up)("main-layout");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(Q,{visible:G.modalFeedbackVisible,"onUpdate:visible":e[0]||(e[0]=function(t){return G.modalFeedbackVisible=t})},null,8,["visible"]),(0,a.Wm)(X,{visible:G.modalConfirmationVisible,"onUpdate:visible":e[3]||(e[3]=function(t){return G.modalConfirmationVisible=t}),modalWidth:"26em"},{content:(0,a.w5)((function(){return[i]})),buttons:(0,a.w5)((function(){return[(0,a._)("button",{class:"button-small",style:(0,r.j5)({background:G.colorTheme}),onClick:e[1]||(e[1]=function(t){return J.postAnswer()})},"Продовжити",4),(0,a._)("button",{class:"button-small",style:(0,r.j5)({background:G.colorTheme}),onClick:e[2]||(e[2]=function(t){return G.modalConfirmationVisible=!1})},"Скасувати",4)]})),_:1},8,["visible"]),(0,a.Wm)(X,{visible:G.modalResultVisible,"onUpdate:visible":e[4]||(e[4]=function(t){return G.modalResultVisible=t}),modalWidth:"20em"},{content:(0,a.w5)((function(){return[l,(0,a._)("div",c,[(0,a.Wm)(tt,{data:[J.lessonPercentage,100-J.lessonPercentage],colors:[t.mix3(J.lessonPercentage),"#00000015"]},{default:(0,a.w5)((function(){return[(0,a._)("div",u,(0,r.zw)(J.lessonPercentage)+"%",1),d]})),_:1},8,["data","colors"])])]})),_:1},8,["visible"]),(0,a.Wm)(ot,{backgroundImage:J.backgroundURL,backgroundOffset:"10"},{header:(0,a.w5)((function(){return[(0,a._)("div",p,[(0,a._)("div",m,[(0,a.Wm)(et,{to:"lessons",class:"link"},{default:(0,a.w5)((function(){return[k,g]})),_:1}),(0,a._)("span",{class:"link",onClick:e[5]||(e[5]=function(t){return G.modalFeedbackVisible=!0})},"Помітили помилку?")]),(0,a._)("div",f,(0,r.zw)(G.lessonName),1),(0,a._)("div",null,[(0,a.Wm)(nt,{modelValue:G.taskIndex,"onUpdate:modelValue":e[6]||(e[6]=function(t){return G.taskIndex=t}),pageMax:J.lesson.length,pageLimit:10,colors:J.paginationColors},null,8,["modelValue","pageMax","colors"])])])]})),body:(0,a.w5)((function(){var n,s,i,l;return[(0,a._)("div",h,[(0,a._)("div",b,[(0,a._)("span",w,"Завдання "+(0,r.zw)(G.taskIndex+1)+" з "+(0,r.zw)(J.lesson.length),1),v,(0,a._)("span",{class:"tag1",style:(0,r.j5)({background:G.task.completed?t.mix3(G.task.percentage):"#0005"})},(0,r.zw)(G.task.completed?100==G.task.percentage?"Правильно":0==G.task.percentage?"Помилка":"Частково":"Без відповіді"),5),(0,a._)("input",{type:"checkbox",id:"toggleTips",onClick:e[7]||(e[7]=function(e){return t.$store.commit("toggleTips")})}),y,_,(0,a._)("input",{type:"checkbox",id:"toggleStats",onClick:e[8]||(e[8]=function(e){return t.$store.commit("toggleMetrics")})}),I]),(0,a._)("div",C,[(0,a._)("span",null,"Зроблено "+(0,r.zw)(G.task.attempts)+" / 2 спроб",1),x,(0,a._)("span",null,"Отримано "+(0,r.zw)(G.task.completed?G.task.score:0)+" / "+(0,r.zw)(G.task.weight)+" балів",1)]),null!==(n=G.task)&&void 0!==n&&n.tip?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:0,class:"task-tip",style:(0,r.j5)({background:G.colorTheme+"15"})},[(0,a._)("div",null,[(0,a._)("div",{innerHTML:G.task.tip.text},null,8,D),null!==(s=G.task.tip)&&void 0!==s&&s.formula?((0,a.wg)(),(0,a.iD)("div",{key:0,innerHTML:"<br/>$$"+G.task.tip.formula+"$$"},null,8,$)):(0,a.kq)("",!0),null!==(i=G.task.tip)&&void 0!==i&&i.note?((0,a.wg)(),(0,a.iD)("div",T,[M,N,(0,a.Uk)("  "+(0,r.zw)(G.task.tip.note),1)])):(0,a.kq)("",!0)]),null!==(l=G.task.tip)&&void 0!==l&&l.image?((0,a.wg)(),(0,a.iD)("img",{key:0,src:"".concat(t.$cloudinary,"images/").concat(G.task._id,"t.png")},null,8,V)):(0,a.kq)("",!0)],4)),[[o.F8,t.$store.state.showTips]]):(0,a.kq)("",!0),(0,a._)("div",{class:"task-text",innerHTML:G.task.text},null,8,q),(0,a._)("div",A,[G.task.items?((0,a.wg)(),(0,a.iD)("div",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(G.task.items,(function(e,n){return(0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a._)("span",Z,(0,r.zw)(n+1),1),"image"!==e?((0,a.wg)(),(0,a.iD)("span",U,(0,r.zw)(e),1)):((0,a.wg)(),(0,a.iD)("img",{key:1,src:"".concat(t.$cloudinary,"images/").concat(G.task._id,"-").concat(n+1,".png")},null,8,j))])})),128))])):(0,a.kq)("",!0),G.task.options?((0,a.wg)(),(0,a.iD)("div",H,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(G.task.options,(function(e,n){return(0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a._)("span",z,(0,r.zw)(String.fromCharCode(1040+n)),1),"image"!==e?((0,a.wg)(),(0,a.iD)("span",W,(0,r.zw)(e),1)):((0,a.wg)(),(0,a.iD)("img",{key:1,src:"".concat(t.$cloudinary,"images/").concat(G.task._id).concat(String.fromCharCode(97+n),".png")},null,8,L))])})),128))])):(0,a.kq)("",!0),G.task.image?((0,a.wg)(),(0,a.iD)("img",{key:2,class:"task-image",src:"".concat(t.$cloudinary,"images/").concat(G.task._id,".png")},null,8,E)):(0,a.kq)("",!0)]),(0,a._)("div",{class:"task-panel",style:(0,r.j5)({display:G.task.completed&&100==G.task.percentage||G.task.attempts==t.$maxAttempts?"flex":"block"})},[(0,a._)("div",R,[(0,a.Wm)(rt,{type:G.task.type,disabled:G.task.completed,data:G.task.answer,correctData:G.task.completed?G.task.key:void 0,showCorrect:G.task.attempts==t.$maxAttempts},(0,a.Nv)({_:2},[(0,a.Ko)(G.task.key.length,(function(e){return{name:"label".concat(e),fn:(0,a.w5)((function(){return["radio"==G.task.type&&(G.task.completed&&100==G.task.percentage||G.task.attempts==t.$maxAttempts)&&G.task.metrics[e-1].some((function(t){return t>0}))?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",F,[(0,a.Wm)(at,{data:G.task.metrics[e-1],colors:J.metricsColors(e-1),gap:5},null,8,["data","colors"])],512)),[[o.F8,t.$store.state.showMetrics]]):(0,a.kq)("",!0)]}))}}))]),1032,["type","disabled","data","correctData","showCorrect"]),G.task.completed&&G.task.attempts>0&&G.task.attempts<t.$maxAttempts&&G.task.percentage<100?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"input-show-correct",onClick:e[9]||(e[9]=function(t){return G.modalConfirmationVisible=!0})},"Показати правильну відповідь")):(0,a.kq)("",!0),G.v$.$error?((0,a.wg)(),(0,a.iD)("div",Y,"Неправильний формат відповіді")):(0,a.kq)("",!0)]),(0,a._)("div",P,[G.task.completed&&G.task.percentage<100&&G.task.attempts<t.$maxAttempts?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"button-plain",onClick:e[10]||(e[10]=function(){G.task.completed=!1})},"Нова спроба")):(0,a.kq)("",!0),G.task.completed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"button-plain",disabled:!G.task.answered,onClick:e[11]||(e[11]=function(t){return J.postAnswer()})},"Відповісти",8,K)),(0,a._)("button",{id:"button-back",class:"button-plain button-next",disabled:0==G.taskIndex,onClick:e[12]||(e[12]=function(t){return G.taskIndex--})},"Назад",8,B),G.taskIndex!==J.lesson.length-1?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"button-plain button-next",onClick:e[13]||(e[13]=function(t){return G.taskIndex++})},"Далі")):((0,a.wg)(),(0,a.iD)("button",{key:3,class:"button-plain",disabled:!J.lessonCompleted,onClick:e[14]||(e[14]=function(t){return G.modalResultVisible=!0})},"Результат",8,O))])],4)])]})),_:1},8,["backgroundImage"])],64)}n(4916),n(7601),n(6699),n(2023),n(1249);var J=n(4028),Q=n(1844),X=n(7654);function tt(t,e,n,r,o,s){var i=(0,a.up)("paginationItem");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.pageRange,(function(e){return(0,a.wg)(),(0,a.j4)(i,{key:e,onClick2:function(n){return t.$emit("update:modelValue",e)},ref_for:!0,ref:"paginationItems",label:e+1,wings:[0!=e,e!=n.pageMax-1],color:n.colors[e],shape:"square",width:100/Math.min(n.pageMax,n.pageLimit+1)+"%"},null,8,["onClick2","label","wings","color","width"])})),128)}var et=n(9225),nt=(n(3948),n(7042),n(7327),{class:"centered number"});function at(t,e,n,o,s,i){return(0,a.wg)(),(0,a.iD)("div",{class:"wrapper flex",style:(0,r.j5)({width:n.width})},[n.wings[0]?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"line centered",style:(0,r.j5)({left:"20%",background:n.color})},null,4)):(0,a.kq)("",!0),n.wings[1]?((0,a.wg)(),(0,a.iD)("span",{key:1,class:"line centered",style:(0,r.j5)({left:"80%",background:n.color})},null,4)):(0,a.kq)("",!0),(0,a._)("input",{class:(0,r.C_)(["centered",n.shape]),type:"radio",name:"radiogroup",ref:"input",style:(0,r.j5)({background:n.color}),onClick:e[0]||(e[0]=function(e){return t.$emit("click2")})},null,6),(0,a._)("b",nt,(0,r.zw)(n.label+""),1)],4)}var rt={props:["label","wings","color","shape","width"],methods:{click:function(){this.$refs.input.click()}}},ot=n(8118);const st=(0,ot.Z)(rt,[["render",at],["__scopeId","data-v-731ac643"]]);var it=st,lt={components:{paginationItem:it},props:["modelValue","pageMax","pageLimit","colors"],mounted:function(){this.$refs.paginationItems[0].click()},data:function(){return{page:1}},computed:{pageRange:function(){var t=this.page,e=this.pageLimit,n=this.pageMax,a=(e+1)/2,r=(0,et.Z)(Array(n).keys());return t<a?r.slice(0,e+1):t>n-a?r.slice(n-e-1,n):r.filter((function(e){return Math.abs(e-t)<a}))}},watch:{modelValue:function(t){this.$refs.paginationItems[t].click()}}};const ct=(0,ot.Z)(lt,[["render",tt]]);var ut=ct,dt={class:"task-tab"},pt={key:0,class:"task-answer-row"},mt={key:1,class:"task-answer-title"},kt={key:0,class:"task-answer-row"},gt=["name","disabled","onUpdate:modelValue","value"],ft={key:1},ht=["disabled","onUpdate:modelValue"],bt={key:0,class:"task-correct-answer"},wt=(0,a.Uk)(" Правильна відповідь: ");function vt(t,e,n,s,i,l){return(0,a.wg)(),(0,a.iD)("div",dt,["radio"==n.type?((0,a.wg)(),(0,a.iD)("div",pt,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(5,(function(t){return(0,a._)("span",{class:"task-answer-letter",key:t},(0,r.zw)(String.fromCharCode(1039+t)),1)})),64))])):(0,a.kq)("",!0),"input"==n.type?((0,a.wg)(),(0,a.iD)("div",mt,"Відповідь:")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(function(e){return(0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.WI)(t.$slots,"label"+e,{},void 0,!0),"radio"==n.type?((0,a.wg)(),(0,a.iD)("div",kt,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(5,(function(t){return(0,a.wy)((0,a._)("input",{key:t,type:"radio",name:e,class:"task-answer-cell",disabled:n.disabled,"onUpdate:modelValue":function(t){return l.dataModel[e-1]=t},value:String.fromCharCode(1039+t),style:(0,r.j5)({borderColor:l.cellColor(e-1,t-1)})},null,12,gt),[[o.G2,l.dataModel[e-1]]])})),64))])):(0,a.kq)("",!0),"input"==n.type?((0,a.wg)(),(0,a.iD)("div",ft,[(0,a.wy)((0,a._)("input",{type:"text",class:"task-answer-input",disabled:n.disabled,"onUpdate:modelValue":function(t){return l.dataModel[e-1]=t},style:(0,r.j5)({borderColor:l.inputColor(e-1)})},null,12,ht),[[o.nr,l.dataModel[e-1]]]),n.showCorrect?((0,a.wg)(),(0,a.iD)("div",bt,[wt,(0,a._)("b",null,(0,r.zw)(n.correctData[e-1]),1)])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])})),128))])}var yt=n(1800),_t={components:{chartColumn:yt.Z},props:{data:{type:Array,required:!0},correctData:{type:Array,required:!1},type:{type:String,required:!0,default:"radio"},disabled:{type:Boolean,required:!1,default:!1},showCorrect:{type:Boolean,required:!1,default:!1}},computed:{dataModel:{get:function(){return this.data},set:function(t){this.$emit("update:data",t)}}},methods:{cellColor:function(t,e){return this.correctData?this.correctData[t]==String.fromCharCode(1040+e)&&this.data[t]==String.fromCharCode(1040+e)?this.$green:this.showCorrect&&this.correctData[t]==String.fromCharCode(1040+e)?this.$green+"aa":this.data[t]==String.fromCharCode(1040+e)?this.$red:"#0004":"gray"},inputColor:function(t){return this.correctData?this.correctData[t]==this.data[t]?this.$green:this.$red:"#0004"}}};const It=(0,ot.Z)(_t,[["render",vt],["__scopeId","data-v-84651e8e"]]);var Ct=It,xt=n(4902),Dt=function(t){return(0,a.dD)("data-v-2f5866aa"),t=t(),(0,a.Cn)(),t},$t=Dt((function(){return(0,a._)("div",{class:"input-name"},"Назва уроку:",-1)})),Tt=Dt((function(){return(0,a._)("div",{class:"input-name"},"Опис помилки:",-1)}));function Mt(t,e,n,o,s,i){var l=(0,a.up)("input-text"),c=(0,a.up)("input-textarea"),u=(0,a.up)("modal");return(0,a.wg)(),(0,a.j4)(u,{modalWidth:"22em",buttonColor:s.colorTheme},{content:(0,a.w5)((function(){return[$t,(0,a.Wm)(l,{modelValue:s.lessonName,"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.lessonName=t}),ref:"lessonName"},null,8,["modelValue"]),Tt,(0,a.Wm)(c,{modelValue:s.reportText,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.reportText=t}),placeholder:"Опишіть помилку тут",ref:"reportText"},null,8,["modelValue"])]})),buttons:(0,a.w5)((function(){return[(0,a._)("button",{class:"button-small",style:(0,r.j5)({background:s.colorTheme}),onClick:e[2]||(e[2]=function(t){return i.report()})},"Надіслати",4)]})),_:1},8,["buttonColor"])}var Nt=n(1138),Vt=n(3540),qt=(n(7941),n(4513)),At=n(3660),St={components:{modal:xt.Z,inputText:qt.Z,inputTextarea:At.Z},data:function(){return{colorTheme:localStorage.getItem("colorTheme"),lessonName:localStorage.getItem("lessonName"),reportText:""}},computed:{inputs:function(){var t=this;return Object.keys(this.$refs).map((function(e){return t.$refs[e]}))}},methods:{report:function(){var t=this;return(0,Vt.Z)((0,Nt.Z)().mark((function e(){return(0,Nt.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.inputs.map((function(t){return t.v$.$touch()})),t.inputs.some((function(t){return t.v$.$error}))){e.next=5;break}return e.next=4,Q.Z.report("Повідомлення про помилку на skywing.online",{lesson:t.lessonName,message:t.reportText});case 4:t.$emit("update:visible",!1);case 5:case"end":return e.stop()}}),e)})))()}}};const Zt=(0,ot.Z)(St,[["render",Mt],["__scopeId","data-v-2f5866aa"]]);var Ut=Zt,jt=n(7925),Ht=function(t){return t.every((function(t){return/^\-?\d{1,4}(\,\d{1,2})?$/.test(t)}))},zt={components:{mainLayout:X.Z,pagination:ut,answerBlank:Ct,modal:xt.Z,modalReport:Ut,chartColumn:yt.Z,chartDoughnut:jt.Z},beforeMount:function(){this.$nextTick((function(t){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])}))},data:function(){return{v$:(0,J.ZP)(),taskIndex:0,task:this.$store.state.tasks[0],showResult:!1,modalConfirmationVisible:!1,modalResultVisible:!1,modalFeedbackVisible:!1,moduleName:localStorage.getItem("moduleName"),lessonName:localStorage.getItem("lessonName"),blockName:localStorage.getItem("blockName"),moduleId:localStorage.getItem("moduleId"),lessonId:parseInt(localStorage.getItem("lessonId")),blockId:parseInt(localStorage.getItem("blockId")),colorTheme:localStorage.getItem("colorTheme")}},computed:{lesson:function(){return this.$store.state.tasks},lessonCompleted:function(){return!this.lesson.map((function(t){return t.completed})).includes(!1)},lessonPercentage:function(){return Math.round(this.lesson.map((function(t){return t.score})).sum()/this.lesson.map((function(t){return t.weight})).sum()*100)},paginationColors:function(){var t=this;return this.lesson.map((function(e){return e.completed?t.mix3(e.percentage):"gray"}))},backgroundURL:function(){return this.$cloudinary+this.moduleId+".jpg"}},validations:function(){return{task:{answer:{format:Ht}}}},watch:{taskIndex:function(t){this.task=this.lesson[t],this.$nextTick((function(t){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])}))}},methods:{metricsColors:function(t){var e=this;return["А","Б","В","Г","Д"].map((function(n){return n==e.task.key[t]?e.$green:n==e.task.answer[t]?e.$red:"#0004"}))},postAnswer:function(){"input"==this.task.type&&this.v$.$touch(),this.v$.$error||(Q.Z.postAnswer(this.moduleId,this.blockId,this.lessonId,this.task._id,this.task.answer,this.task.score,this.task.weight),this.task.completed=!0,this.task.attempts++,this.modalConfirmationVisible=!1)},reportMistake:function(){Q.Z.reportMistake()}}};const Wt=(0,ot.Z)(zt,[["render",G],["__scopeId","data-v-1ef8f1d5"]]);var Lt=Wt},863:function(t,e,n){var a=n(1702);t.exports=a(1..valueOf)},7327:function(t,e,n){"use strict";var a=n(2109),r=n(2092).filter,o=n(1194),s=o("filter");a({target:"Array",proto:!0,forced:!s},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},9653:function(t,e,n){"use strict";var a=n(9781),r=n(7854),o=n(1702),s=n(4705),i=n(8052),l=n(2597),c=n(9587),u=n(7976),d=n(2190),p=n(7593),m=n(7293),k=n(8006).f,g=n(1236).f,f=n(3070).f,h=n(863),b=n(3111).trim,w="Number",v=r[w],y=v.prototype,_=r.TypeError,I=o("".slice),C=o("".charCodeAt),x=function(t){var e=p(t,"number");return"bigint"==typeof e?e:D(e)},D=function(t){var e,n,a,r,o,s,i,l,c=p(t,"number");if(d(c))throw _("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=b(c),e=C(c,0),43===e||45===e){if(n=C(c,2),88===n||120===n)return NaN}else if(48===e){switch(C(c,1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+c}for(o=I(c,2),s=o.length,i=0;i<s;i++)if(l=C(o,i),l<48||l>r)return NaN;return parseInt(o,a)}return+c};if(s(w,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var $,T=function(t){var e=arguments.length<1?0:v(x(t)),n=this;return u(y,n)&&m((function(){h(n)}))?c(Object(e),n,T):e},M=a?k(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),N=0;M.length>N;N++)l(v,$=M[N])&&!l(T,$)&&f(T,$,g(v,$));T.prototype=y,y.constructor=T,i(r,w,T,{constructor:!0})}},9225:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var a=n(9914);function r(t){if(Array.isArray(t))return(0,a.Z)(t)}n(2526),n(1817),n(1539),n(2165),n(8783),n(3948),n(1038);function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=n(6726);n(1703);function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return r(t)||o(t)||(0,s.Z)(t)||i()}}}]);
//# sourceMappingURL=159-legacy.13a2d18c.js.map