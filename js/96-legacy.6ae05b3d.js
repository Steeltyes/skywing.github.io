(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[96],{1800:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var a=n(6252),r={viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none"},o=["x","height","width","fill"],i=["to"];function s(t,e,n,s,l,u){return(0,a.wg)(),(0,a.iD)("svg",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(function(t){return(0,a.wg)(),(0,a.iD)("rect",{key:t,x:100/n.data.length*(t-1)+ +n.gap/2,height:u.percentages[t-1]||2,y:"0",width:100/n.data.length-+n.gap,fill:n.colors[t-1]},[n.isAnimated?((0,a.wg)(),(0,a.iD)("animate",{key:0,attributeName:"height",from:"0",to:u.percentages[t-1]+5,dur:"2s",fill:"freeze"},null,8,i)):(0,a.kq)("",!0)],8,o)})),128))])}n(9653),n(1249);var l={name:"histogram",props:{data:{type:Array,required:!0},colors:{type:Array,required:!0},isAnimated:{type:Boolean,required:!1,default:!1},gap:{type:Number,required:!1,default:0}},computed:{percentages:function(){var t=this;return this.data.map((function(e){return Math.ceil(e/t.data.max()*100)}))}}},u=n(8118);const c=(0,u.Z)(l,[["render",s],["__scopeId","data-v-2375c831"]]);var d=c},7925:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var a=n(6252),r=n(3577),o={class:"relative elastic"},i={viewBox:"0 0 110 110",width:"100%",height:"100%"},s={class:"centered"};function l(t,e,n,l,u,c){return(0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(),(0,a.iD)("svg",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(function(t){return(0,a.wg)(),(0,a.iD)("g",{key:t},[n.data[n.data.length-t]?((0,a.wg)(),(0,a.iD)("circle",{key:0,style:(0,r.j5)({strokeDasharray:c.percentages[n.data.length-t]*Math.PI+" 314",strokeDashoffset:-c.partials[n.data.length-t]*Math.PI,strokeWidth:n.thickness,stroke:n.colors[n.data.length-t]}),r:"50",cx:"55",cy:"55"},null,4)):(0,a.kq)("",!0)])})),128))])),(0,a._)("div",s,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])])}var u=n(9225),c=(n(9653),n(1249),n(2222),{props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages:function(){var t=this;return this.data.map((function(e){return Math.ceil(e/t.data.sum()*100)}))},partials:function(){return[0].concat((0,u.Z)(this.percentages.partialSums()))}}}),d=n(8118);const p=(0,d.Z)(c,[["render",l],["__scopeId","data-v-09ebced2"]]);var m=p},4513:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});n(3210);var a=n(6252),r=n(3577),o=["value","placeholder"],i={key:0,class:"input-error-message"};function s(t,e,n,s,l,u){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("input",{type:"text",class:(0,r.C_)(["input-textfield-line",{"input-textfield-invalid":l.v$.modelValue.$error}]),value:n.modelValue,onInput:e[0]||(e[0]=function(e){return t.$emit("update:modelValue",e.target.value.trim())}),placeholder:n.placeholder},null,42,o),l.v$.modelValue.$error?((0,a.wg)(),(0,a.iD)("div",i,"Поле має бути заповнене")):(0,a.kq)("",!0)],64)}var l=n(4028),u=n(2587),c={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data:function(){return{v$:(0,l.ZP)()}},validations:function(){return{modelValue:{required:u.C1}}}},d=n(8118);const p=(0,d.Z)(c,[["render",s]]);var m=p},5096:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Ot}});n(2222),n(1539);var a=n(6252),r=n(3577),o=n(9963),i=function(t){return(0,a.dD)("data-v-2869eb50"),t=t(),(0,a.Cn)(),t},s=i((function(){return(0,a._)("div",{class:"modal-text"},"Побачивши відповідь, ви вже не зможете робити нових спроб. Все одно продовжити?",-1)})),l=i((function(){return(0,a._)("div",{class:"modal-header"},"Ваш результат",-1)})),u={class:"chart-wrapper"},c={class:"chart-percentage"},d=i((function(){return(0,a._)("div",{class:"chart-label"},"правильно",-1)})),p={class:"header-section"},m={class:"lesson-navbar"},f=i((function(){return(0,a._)("span",{class:"material-icons"},"arrow_back",-1)})),g=(0,a.Uk)("  Назад до списку тем "),k={class:"lesson-name"},h={class:"task-section"},v={class:"task-info"},b={class:"task-index"},w=(0,a.Uk)("  "),y=i((function(){return(0,a._)("label",{for:"toggleTips",class:"material-icons"},"school",-1)})),_=(0,a.Uk)("  "),x=i((function(){return(0,a._)("label",{for:"toggleStats",class:"material-icons"},"bar_chart",-1)})),I={class:"task-stats"},C=(0,a.Uk)(" •  "),$=["innerHTML"],D={key:0},V=i((function(){return(0,a._)("br",null,null,-1)})),q={key:1},N=i((function(){return(0,a._)("br",null,null,-1)})),S=i((function(){return(0,a._)("span",{class:"tag1",style:{background:"orange"}},"Зверніть увагу",-1)})),T=["src"],M={class:"task-text"},Z={class:"task-content"},A={key:0,class:"task-options"},U={class:"task-letter"},j={key:0,class:"task-option"},z=["src"],E={key:1,class:"task-options"},H={class:"task-letter"},R={key:0,class:"task-option"},W=["src"],P=["src"],Y={class:"task-blank"},F={key:0,class:"bar-wrapper"},L={key:1,class:"input-error-message"},K={class:"task-buttons"},O=["disabled"],B=["disabled"],G=["disabled"];function J(t,e,n,i,J,Q){var X=(0,a.up)("modal-report"),tt=(0,a.up)("modal"),et=(0,a.up)("chart-doughnut"),nt=(0,a.up)("router-link"),at=(0,a.up)("pagination"),rt=(0,a.up)("chart-column"),ot=(0,a.up)("answer-blank"),it=(0,a.up)("main-layout");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(X,{visible:J.modalFeedbackVisible,"onUpdate:visible":e[0]||(e[0]=function(t){return J.modalFeedbackVisible=t})},null,8,["visible"]),(0,a.Wm)(tt,{visible:J.modalConfirmationVisible,"onUpdate:visible":e[3]||(e[3]=function(t){return J.modalConfirmationVisible=t}),modalWidth:"26em"},{content:(0,a.w5)((function(){return[s]})),buttons:(0,a.w5)((function(){return[(0,a._)("button",{class:"button-small",style:(0,r.j5)({background:J.colorTheme}),onClick:e[1]||(e[1]=function(t){return Q.postAnswer()})},"Продовжити",4),(0,a._)("button",{class:"button-small",style:(0,r.j5)({background:J.colorTheme}),onClick:e[2]||(e[2]=function(t){return J.modalConfirmationVisible=!1})},"Скасувати",4)]})),_:1},8,["visible"]),(0,a.Wm)(tt,{visible:J.modalResultVisible,"onUpdate:visible":e[4]||(e[4]=function(t){return J.modalResultVisible=t}),modalWidth:"20em"},{content:(0,a.w5)((function(){return[l,(0,a._)("div",u,[(0,a.Wm)(et,{data:[Q.lessonPercentage,100-Q.lessonPercentage],colors:[t.mix3(Q.lessonPercentage),"#00000015"]},{default:(0,a.w5)((function(){return[(0,a._)("div",c,(0,r.zw)(Q.lessonPercentage)+"%",1),d]})),_:1},8,["data","colors"])])]})),_:1},8,["visible"]),(0,a.Wm)(it,{backgroundImage:Q.backgroundURL,backgroundOffset:"10"},{header:(0,a.w5)((function(){return[(0,a._)("div",p,[(0,a._)("div",m,[(0,a.Wm)(nt,{to:"lessons",class:"link"},{default:(0,a.w5)((function(){return[f,g]})),_:1}),(0,a._)("span",{class:"link",onClick:e[5]||(e[5]=function(t){return J.modalFeedbackVisible=!0})},"Помітили помилку?")]),(0,a._)("div",k,(0,r.zw)(J.lessonName),1),(0,a._)("div",null,[(0,a.Wm)(at,{modelValue:J.taskIndex,"onUpdate:modelValue":e[6]||(e[6]=function(t){return J.taskIndex=t}),pageMax:Q.lesson.length,pageLimit:10,colors:Q.paginationColors},null,8,["modelValue","pageMax","colors"])])])]})),body:(0,a.w5)((function(){var n,i,s;return[(0,a._)("div",h,[(0,a._)("div",v,[(0,a._)("span",b,"Завдання "+(0,r.zw)(J.taskIndex+1)+" з "+(0,r.zw)(Q.lesson.length),1),w,(0,a._)("span",{class:"tag1",style:(0,r.j5)({background:Q.task.completed?t.mix3(Q.task.percentage):"#0005"})},(0,r.zw)(Q.task.completed?100==Q.task.percentage?"Правильно":0==Q.task.percentage?"Помилка":"Частково":"Без відповіді"),5),(0,a._)("input",{type:"checkbox",id:"toggleTips",onClick:e[7]||(e[7]=function(e){return t.$store.commit("toggleTips")})}),y,_,(0,a._)("input",{type:"checkbox",id:"toggleStats",onClick:e[8]||(e[8]=function(e){return t.$store.commit("toggleMetrics")})}),x]),(0,a._)("div",I,[(0,a._)("span",null,"Зроблено "+(0,r.zw)(Q.task.attempts)+" / 2 спроб",1),C,(0,a._)("span",null,"Отримано "+(0,r.zw)(Q.task.completed?Q.task.score:0)+" / "+(0,r.zw)(Q.task.weight)+" балів",1)]),Q.task.tip?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:0,class:"task-tip",style:(0,r.j5)({background:J.colorTheme+"15"})},[(0,a._)("div",null,[(0,a._)("div",{innerHTML:Q.task.tip.text},null,8,$),null!==(n=Q.task.tip)&&void 0!==n&&n.formula?((0,a.wg)(),(0,a.iD)("div",D,[V,(0,a.Uk)((0,r.zw)("$$"+Q.task.tip.formula+"$$"),1)])):(0,a.kq)("",!0),null!==(i=Q.task.tip)&&void 0!==i&&i.note?((0,a.wg)(),(0,a.iD)("div",q,[N,S,(0,a.Uk)("  "+(0,r.zw)(Q.task.tip.note),1)])):(0,a.kq)("",!0)]),null!==(s=Q.task.tip)&&void 0!==s&&s.image?((0,a.wg)(),(0,a.iD)("img",{key:0,src:"".concat(t.$cloudinary,"images/").concat(Q.task._id,"t.png")},null,8,T)):(0,a.kq)("",!0)],4)),[[o.F8,t.$store.state.showTips]]):(0,a.kq)("",!0),(0,a._)("div",M,(0,r.zw)(Q.task.text),1),(0,a._)("div",Z,[Q.task.items?((0,a.wg)(),(0,a.iD)("div",A,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Q.task.items,(function(e,n){return(0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a._)("span",U,(0,r.zw)(n+1),1),"image"!==e?((0,a.wg)(),(0,a.iD)("span",j,(0,r.zw)(e),1)):((0,a.wg)(),(0,a.iD)("img",{key:1,src:"".concat(t.$cloudinary,"images/").concat(Q.task._id,"-").concat(n+1,".png")},null,8,z))])})),128))])):(0,a.kq)("",!0),Q.task.options?((0,a.wg)(),(0,a.iD)("div",E,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Q.task.options,(function(e,n){return(0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a._)("span",H,(0,r.zw)(String.fromCharCode(1040+n)),1),"image"!==e?((0,a.wg)(),(0,a.iD)("span",R,(0,r.zw)(e),1)):((0,a.wg)(),(0,a.iD)("img",{key:1,src:"".concat(t.$cloudinary,"images/").concat(Q.task._id).concat(String.fromCharCode(97+n),".png")},null,8,W))])})),128))])):(0,a.kq)("",!0),Q.task.image?((0,a.wg)(),(0,a.iD)("img",{key:2,class:"task-image",src:"".concat(t.$cloudinary,"images/").concat(Q.task._id,".png")},null,8,P)):(0,a.kq)("",!0)]),(0,a._)("div",{class:"task-panel",style:(0,r.j5)({display:Q.task.completed&&100==Q.task.percentage||Q.task.attempts==t.$maxAttempts?"flex":"block"})},[(0,a._)("div",Y,[(0,a.Wm)(ot,{type:Q.task.type,disabled:Q.task.completed,data:Q.task.answer,correctData:Q.task.completed?Q.task.key:void 0,showCorrect:Q.task.attempts==t.$maxAttempts},(0,a.Nv)({_:2},[(0,a.Ko)(Q.task.key.length,(function(e){return{name:"label".concat(e),fn:(0,a.w5)((function(){return["radio"==Q.task.type&&(Q.task.completed&&100==Q.task.percentage||Q.task.attempts==t.$maxAttempts)&&Q.task.metrics[e-1].some((function(t){return t>0}))?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",F,[(0,a.Wm)(rt,{data:Q.task.metrics[e-1],colors:Q.metricsColors(e-1),gap:5},null,8,["data","colors"])],512)),[[o.F8,t.$store.state.showMetrics]]):(0,a.kq)("",!0)]}))}}))]),1032,["type","disabled","data","correctData","showCorrect"]),Q.task.completed&&Q.task.attempts>0&&Q.task.attempts<t.$maxAttempts&&Q.task.percentage<100?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"input-show-correct",onClick:e[9]||(e[9]=function(t){return J.modalConfirmationVisible=!0})},"Показати правильну відповідь")):(0,a.kq)("",!0),J.v$.$error?((0,a.wg)(),(0,a.iD)("div",L,"Неправильний формат відповіді")):(0,a.kq)("",!0)]),(0,a._)("div",K,[Q.task.completed&&Q.task.percentage<100&&Q.task.attempts<t.$maxAttempts?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"button-plain",onClick:e[10]||(e[10]=function(){Q.task.completed=!1})},"Нова спроба")):(0,a.kq)("",!0),Q.task.completed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"button-plain",disabled:!Q.task.answered,onClick:e[11]||(e[11]=function(t){return Q.postAnswer()})},"Відповісти",8,O)),(0,a._)("button",{id:"button-back",class:"button-plain button-next",disabled:0==J.taskIndex,onClick:e[12]||(e[12]=function(t){return J.taskIndex--})},"Назад",8,B),J.taskIndex!==Q.lesson.length-1?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"button-plain button-next",onClick:e[13]||(e[13]=function(t){return J.taskIndex++})},"Далі")):((0,a.wg)(),(0,a.iD)("button",{key:3,class:"button-plain",disabled:!Q.lessonCompleted,onClick:e[14]||(e[14]=function(t){return J.modalResultVisible=!0})},"Результат",8,G))])],4)])]})),_:1},8,["backgroundImage"])],64)}n(4916),n(7601),n(6699),n(2023),n(1249);var Q=n(4028),X=n(1844),tt=n(4683);function et(t,e,n,r,o,i){var s=(0,a.up)("paginationItem");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.pageRange,(function(e){return(0,a.wg)(),(0,a.j4)(s,{key:e,onClick2:function(n){return t.$emit("update:modelValue",e)},ref_for:!0,ref:"paginationItems",label:e+1,wings:[0!=e,e!=n.pageMax-1],color:n.colors[e],shape:"square",width:100/Math.min(n.pageMax,n.pageLimit+1)+"%"},null,8,["onClick2","label","wings","color","width"])})),128)}var nt=n(9225),at=(n(3948),n(7042),n(7327),{class:"centered number"});function rt(t,e,n,o,i,s){return(0,a.wg)(),(0,a.iD)("div",{class:"wrapper flex",style:(0,r.j5)({width:n.width})},[n.wings[0]?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"line centered",style:(0,r.j5)({left:"20%",background:n.color})},null,4)):(0,a.kq)("",!0),n.wings[1]?((0,a.wg)(),(0,a.iD)("span",{key:1,class:"line centered",style:(0,r.j5)({left:"80%",background:n.color})},null,4)):(0,a.kq)("",!0),(0,a._)("input",{class:(0,r.C_)(["centered",n.shape]),type:"radio",name:"radiogroup",ref:"input",style:(0,r.j5)({background:n.color}),onClick:e[0]||(e[0]=function(e){return t.$emit("click2")})},null,6),(0,a._)("b",at,(0,r.zw)(n.label+""),1)],4)}var ot={props:["label","wings","color","shape","width"],methods:{click:function(){this.$refs.input.click()}}},it=n(8118);const st=(0,it.Z)(ot,[["render",rt],["__scopeId","data-v-731ac643"]]);var lt=st,ut={components:{paginationItem:lt},props:["modelValue","pageMax","pageLimit","colors"],mounted:function(){this.$refs.paginationItems[0].click()},data:function(){return{page:1}},computed:{pageRange:function(){var t=this.page,e=this.pageLimit,n=this.pageMax,a=(e+1)/2,r=(0,nt.Z)(Array(n).keys());return t<a?r.slice(0,e+1):t>n-a?r.slice(n-e-1,n):r.filter((function(e){return Math.abs(e-t)<a}))}},watch:{modelValue:function(t){this.$refs.paginationItems[t].click()}}};const ct=(0,it.Z)(ut,[["render",et]]);var dt=ct,pt={class:"task-tab"},mt={key:0,class:"task-answer-row"},ft={key:1,class:"task-answer-title"},gt={key:0,class:"task-answer-row"},kt=["name","disabled","onUpdate:modelValue","value"],ht={key:1},vt=["disabled","onUpdate:modelValue"],bt={key:0,class:"task-correct-answer"},wt=(0,a.Uk)(" Правильна відповідь: ");function yt(t,e,n,i,s,l){return(0,a.wg)(),(0,a.iD)("div",pt,["radio"==n.type?((0,a.wg)(),(0,a.iD)("div",mt,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(5,(function(t){return(0,a._)("span",{class:"task-answer-letter",key:t},(0,r.zw)(String.fromCharCode(1039+t)),1)})),64))])):(0,a.kq)("",!0),"input"==n.type?((0,a.wg)(),(0,a.iD)("div",ft,"Відповідь:")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(function(e){return(0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.WI)(t.$slots,"label"+e,{},void 0,!0),"radio"==n.type?((0,a.wg)(),(0,a.iD)("div",gt,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(5,(function(t){return(0,a.wy)((0,a._)("input",{key:t,type:"radio",name:e,class:"task-answer-cell",disabled:n.disabled,"onUpdate:modelValue":function(t){return l.dataModel[e-1]=t},value:String.fromCharCode(1039+t),style:(0,r.j5)({borderColor:l.cellColor(e-1,t-1)})},null,12,kt),[[o.G2,l.dataModel[e-1]]])})),64))])):(0,a.kq)("",!0),"input"==n.type?((0,a.wg)(),(0,a.iD)("div",ht,[(0,a.wy)((0,a._)("input",{type:"text",class:"task-answer-input",disabled:n.disabled,"onUpdate:modelValue":function(t){return l.dataModel[e-1]=t},style:(0,r.j5)({borderColor:l.inputColor(e-1)})},null,12,vt),[[o.nr,l.dataModel[e-1]]]),n.showCorrect?((0,a.wg)(),(0,a.iD)("div",bt,[wt,(0,a._)("b",null,(0,r.zw)(n.correctData[e-1]),1)])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])})),128))])}var _t=n(1800),xt={components:{chartColumn:_t.Z},props:{data:{type:Array,required:!0},correctData:{type:Array,required:!1},type:{type:String,required:!0,default:"radio"},disabled:{type:Boolean,required:!1,default:!1},showCorrect:{type:Boolean,required:!1,default:!1}},computed:{dataModel:{get:function(){return this.data},set:function(t){this.$emit("update:data",t)}}},methods:{cellColor:function(t,e){return this.correctData?this.correctData[t]==String.fromCharCode(1040+e)&&this.data[t]==String.fromCharCode(1040+e)?this.$green:this.showCorrect&&this.correctData[t]==String.fromCharCode(1040+e)?this.$green+"aa":this.data[t]==String.fromCharCode(1040+e)?this.$red:"#0004":"gray"},inputColor:function(t){return this.correctData?this.correctData[t]==this.data[t]?this.$green:this.$red:"gray"}}};const It=(0,it.Z)(xt,[["render",yt],["__scopeId","data-v-769a4fbb"]]);var Ct=It,$t=n(9287),Dt=function(t){return(0,a.dD)("data-v-2f5866aa"),t=t(),(0,a.Cn)(),t},Vt=Dt((function(){return(0,a._)("div",{class:"input-name"},"Назва уроку:",-1)})),qt=Dt((function(){return(0,a._)("div",{class:"input-name"},"Опис помилки:",-1)}));function Nt(t,e,n,o,i,s){var l=(0,a.up)("input-text"),u=(0,a.up)("input-textarea"),c=(0,a.up)("modal");return(0,a.wg)(),(0,a.j4)(c,{modalWidth:"22em",buttonColor:i.colorTheme},{content:(0,a.w5)((function(){return[Vt,(0,a.Wm)(l,{modelValue:i.lessonName,"onUpdate:modelValue":e[0]||(e[0]=function(t){return i.lessonName=t}),ref:"lessonName"},null,8,["modelValue"]),qt,(0,a.Wm)(u,{modelValue:i.reportText,"onUpdate:modelValue":e[1]||(e[1]=function(t){return i.reportText=t}),placeholder:"Опишіть помилку тут",ref:"reportText"},null,8,["modelValue"])]})),buttons:(0,a.w5)((function(){return[(0,a._)("button",{class:"button-small",style:(0,r.j5)({background:i.colorTheme}),onClick:e[2]||(e[2]=function(t){return s.report()})},"Надіслати",4)]})),_:1},8,["buttonColor"])}var St=n(1138),Tt=n(3540),Mt=(n(7941),n(4513)),Zt=(n(3210),["placeholder","value"]),At={key:0,class:"input-error-message"};function Ut(t,e,n,o,i,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("textarea",{rows:"7",class:(0,r.C_)(["input-textfield-line",{"input-textfield-invalid":i.v$.modelValue.$error}]),placeholder:n.placeholder,value:n.modelValue,onInput:e[0]||(e[0]=function(e){return t.$emit("update:modelValue",e.target.value.trim())})},null,42,Zt),i.v$.modelValue.$error?((0,a.wg)(),(0,a.iD)("div",At,"Поле має бути заповнене")):(0,a.kq)("",!0)],64)}var jt=n(2587),zt={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data:function(){return{v$:(0,Q.ZP)()}},validations:function(){return{modelValue:{required:jt.C1}}}};const Et=(0,it.Z)(zt,[["render",Ut]]);var Ht=Et,Rt={components:{modal:$t.Z,inputText:Mt.Z,inputTextarea:Ht},data:function(){return{colorTheme:localStorage.getItem("colorTheme"),lessonName:localStorage.getItem("lessonName"),reportText:""}},computed:{inputs:function(){var t=this;return Object.keys(this.$refs).map((function(e){return t.$refs[e]}))}},methods:{report:function(){var t=this;return(0,Tt.Z)((0,St.Z)().mark((function e(){return(0,St.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.inputs.map((function(t){return t.v$.$touch()})),t.inputs.some((function(t){return t.v$.$error}))){e.next=5;break}return e.next=4,X.Z.report("Повідомлення про помилку на skywing.online",{lesson:t.lessonName,message:t.reportText});case 4:t.$emit("update:visible",!1);case 5:case"end":return e.stop()}}),e)})))()}}};const Wt=(0,it.Z)(Rt,[["render",Nt],["__scopeId","data-v-2f5866aa"]]);var Pt=Wt,Yt=n(7925),Ft=function(t){return t.every((function(t){return/^\-?\d{1,4}(\,\d{1,2})?$/.test(t)}))},Lt={components:{mainLayout:tt.Z,pagination:dt,answerBlank:Ct,modal:$t.Z,modalReport:Pt,chartColumn:_t.Z,chartDoughnut:Yt.Z},beforeMount:function(){this.$nextTick((function(t){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])}))},data:function(){return{v$:(0,Q.ZP)(),taskIndex:0,showResult:!1,modalConfirmationVisible:!1,modalResultVisible:!1,modalFeedbackVisible:!1,moduleName:localStorage.getItem("moduleName"),lessonName:localStorage.getItem("lessonName"),blockName:localStorage.getItem("blockName"),moduleId:localStorage.getItem("moduleId"),lessonId:parseInt(localStorage.getItem("lessonId")),blockId:parseInt(localStorage.getItem("blockId")),colorTheme:localStorage.getItem("colorTheme")}},computed:{lesson:function(){return this.$store.state.tasks},task:function(){return this.lesson[this.taskIndex]},lessonCompleted:function(){return!this.lesson.map((function(t){return t.completed})).includes(!1)},lessonPercentage:function(){return Math.round(this.lesson.map((function(t){return t.score})).sum()/this.lesson.map((function(t){return t.weight})).sum()*100)},paginationColors:function(){var t=this;return this.lesson.map((function(e){return e.completed?t.mix3(e.percentage):"gray"}))},backgroundURL:function(){return this.$cloudinary+this.moduleId+".jpg"}},validations:function(){return{task:{answer:{format:Ft}}}},watch:{taskIndex:function(){this.v$.$reset(),this.$nextTick((function(t){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])}))}},methods:{metricsColors:function(t){var e=this;return["А","Б","В","Г","Д"].map((function(n){return n==e.task.key[t]?e.$green:n==e.task.answer[t]?e.$red:"#0004"}))},postAnswer:function(){"input"==this.task.type&&this.v$.$touch(),this.v$.$error||(X.Z.postAnswer(this.moduleId,this.blockId,this.lessonId,this.task._id,this.task.answer,this.task.score,this.task.weight),this.task.completed=!0,this.task.attempts++,this.modalConfirmationVisible=!1)},reportMistake:function(){X.Z.reportMistake()}}};const Kt=(0,it.Z)(Lt,[["render",J],["__scopeId","data-v-2869eb50"]]);var Ot=Kt},6091:function(t,e,n){var a=n(6530).PROPER,r=n(7293),o=n(1361),i="​᠎";t.exports=function(t){return r((function(){return!!o[t]()||i[t]()!==i||a&&o[t].name!==t}))}},3111:function(t,e,n){var a=n(1702),r=n(4488),o=n(1340),i=n(1361),s=a("".replace),l="["+i+"]",u=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=o(r(e));return 1&t&&(n=s(n,u,"")),2&t&&(n=s(n,c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},863:function(t,e,n){var a=n(1702);t.exports=a(1..valueOf)},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7327:function(t,e,n){"use strict";var a=n(2109),r=n(2092).filter,o=n(1194),i=o("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},9653:function(t,e,n){"use strict";var a=n(9781),r=n(7854),o=n(1702),i=n(4705),s=n(8052),l=n(2597),u=n(9587),c=n(7976),d=n(2190),p=n(7593),m=n(7293),f=n(8006).f,g=n(1236).f,k=n(3070).f,h=n(863),v=n(3111).trim,b="Number",w=r[b],y=w.prototype,_=r.TypeError,x=o("".slice),I=o("".charCodeAt),C=function(t){var e=p(t,"number");return"bigint"==typeof e?e:$(e)},$=function(t){var e,n,a,r,o,i,s,l,u=p(t,"number");if(d(u))throw _("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=v(u),e=I(u,0),43===e||45===e){if(n=I(u,2),88===n||120===n)return NaN}else if(48===e){switch(I(u,1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(o=x(u,2),i=o.length,s=0;s<i;s++)if(l=I(o,s),l<48||l>r)return NaN;return parseInt(o,a)}return+u};if(i(b,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var D,V=function(t){var e=arguments.length<1?0:w(C(t)),n=this;return c(y,n)&&m((function(){h(n)}))?u(Object(e),n,V):e},q=a?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),N=0;q.length>N;N++)l(w,D=q[N])&&!l(V,D)&&k(V,D,g(w,D));V.prototype=y,y.constructor=V,s(r,b,V,{constructor:!0})}},7941:function(t,e,n){var a=n(2109),r=n(7908),o=n(1956),i=n(7293),s=i((function(){o(1)}));a({target:"Object",stat:!0,forced:s},{keys:function(t){return o(r(t))}})},3210:function(t,e,n){"use strict";var a=n(2109),r=n(3111).trim,o=n(6091);a({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},9225:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var a=n(9914);function r(t){if(Array.isArray(t))return(0,a.Z)(t)}n(2526),n(1817),n(1539),n(2165),n(8783),n(3948),n(1038);function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=n(6726);n(1703);function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return r(t)||o(t)||(0,i.Z)(t)||s()}}}]);
//# sourceMappingURL=96-legacy.6ae05b3d.js.map