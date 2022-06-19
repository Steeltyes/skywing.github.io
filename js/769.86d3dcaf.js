"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[769],{1800:function(e,t,a){a.d(t,{Z:function(){return u}});var s=a(6252);const l={viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none"},o=["x","height","width","fill"],r=["to"];function i(e,t,a,i,n,d){return(0,s.wg)(),(0,s.iD)("svg",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data.length,(e=>((0,s.wg)(),(0,s.iD)("rect",{key:e,x:100/a.data.length*(e-1)+ +a.gap/2,height:d.percentages[e-1]||2,y:"0",width:100/a.data.length-+a.gap,fill:a.colors[e-1]},[a.isAnimated?((0,s.wg)(),(0,s.iD)("animate",{key:0,attributeName:"height",from:"0",to:d.percentages[e-1]+5,dur:"2s",fill:"freeze"},null,8,r)):(0,s.kq)("",!0)],8,o)))),128))])}var n={name:"histogram",props:{data:{type:Array,required:!0},colors:{type:Array,required:!0},isAnimated:{type:Boolean,required:!1,default:!1},gap:{type:Number,required:!1,default:0}},computed:{percentages(){return this.data.map((e=>Math.ceil(e/this.data.max()*100)))}}},d=a(8118);const c=(0,d.Z)(n,[["render",i],["__scopeId","data-v-2375c831"]]);var u=c},7925:function(e,t,a){a.d(t,{Z:function(){return p}});var s=a(6252),l=a(3577);const o={class:"relative elastic"},r={viewBox:"0 0 110 110",width:"100%",height:"100%"},i={class:"centered"};function n(e,t,a,n,d,c){return(0,s.wg)(),(0,s.iD)("div",o,[((0,s.wg)(),(0,s.iD)("svg",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data.length,(e=>((0,s.wg)(),(0,s.iD)("g",{key:e},[a.data[a.data.length-e]?((0,s.wg)(),(0,s.iD)("circle",{key:0,style:(0,l.j5)({strokeDasharray:c.percentages[a.data.length-e]*Math.PI+" 314",strokeDashoffset:-c.partials[a.data.length-e]*Math.PI,strokeWidth:a.thickness,stroke:a.colors[a.data.length-e]}),r:"50",cx:"55",cy:"55"},null,4)):(0,s.kq)("",!0)])))),128))])),(0,s._)("div",i,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])])}var d={props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages(){return this.data.map((e=>Math.ceil(e/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},c=a(8118);const u=(0,c.Z)(d,[["render",n],["__scopeId","data-v-09ebced2"]]);var p=u},4513:function(e,t,a){a.d(t,{Z:function(){return m}});var s=a(6252),l=a(3577);const o=["value","placeholder"],r={key:0,class:"input-error-message"};function i(e,t,a,i,n,d){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("input",{type:"text",class:(0,l.C_)(["input-textfield-line",{"input-textfield-invalid":n.v$.modelValue.$error}]),value:a.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value.trim())),placeholder:a.placeholder},null,42,o),n.v$.modelValue.$error?((0,s.wg)(),(0,s.iD)("div",r,"Поле має бути заповнене")):(0,s.kq)("",!0)],64)}var n=a(4028),d=a(2587),c={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data(){return{v$:(0,n.ZP)()}},validations(){return{modelValue:{required:d.C1}}}},u=a(8118);const p=(0,u.Z)(c,[["render",i]]);var m=p},1769:function(e,t,a){a.r(t),a.d(t,{default:function(){return We}});a(6699);var s=a(6252),l=a(3577),o=a(9963);const r=e=>((0,s.dD)("data-v-33501aa1"),e=e(),(0,s.Cn)(),e),i=r((()=>(0,s._)("div",{class:"modal-text"},"Побачивши відповідь, ви вже не зможете робити нових спроб. Все одно продовжити?",-1))),n=r((()=>(0,s._)("div",{class:"modal-header"},"Ваш результат",-1))),d={class:"chart-wrapper"},c={class:"chart-percentage"},u=r((()=>(0,s._)("div",{class:"chart-label"},"правильно",-1))),p={class:"header-section"},m={class:"lesson-navbar"},k=r((()=>(0,s._)("span",{class:"material-icons"},"arrow_back",-1))),g=(0,s.Uk)("  Назад до списку тем "),h={class:"lesson-name"},w={class:"tasks-block"},b={class:"task-info"},v={class:"task-index"},y=(0,s.Uk)("  "),f=r((()=>(0,s._)("label",{for:"toggleTips",class:"material-icons"},"school",-1))),_=(0,s.Uk)("  "),C=r((()=>(0,s._)("label",{for:"toggleStats",class:"material-icons"},"bar_chart",-1))),x={class:"task-stats"},D=(0,s.Uk)(" •  "),$={key:0,class:"task-tip"},I=["innerHTML"],V={key:0},q=r((()=>(0,s._)("br",null,null,-1))),M={class:"task-text"},T={class:"task-content"},Z={key:0,class:"task-items"},S={key:1,class:"task-options"},z={class:"task-option"},A=["src"],H={key:2,class:"task-image"},N=["src"],U={class:"task-blank"},W={key:0,class:"bar-wrapper"},j={key:1,class:"input-error-message"},R={class:"task-buttons"},Y=["disabled"],P=["disabled"],K=["disabled"];function L(e,t,a,r,L,B){const F=(0,s.up)("modal-report"),J=(0,s.up)("modal"),O=(0,s.up)("chart-doughnut"),Q=(0,s.up)("router-link"),G=(0,s.up)("pagination"),E=(0,s.up)("chart-column"),X=(0,s.up)("answer-blank"),ee=(0,s.up)("main-layout");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(F,{visible:L.modalFeedbackVisible,"onUpdate:visible":t[0]||(t[0]=e=>L.modalFeedbackVisible=e)},null,8,["visible"]),(0,s.Wm)(J,{visible:L.modalConfirmationVisible,"onUpdate:visible":t[3]||(t[3]=e=>L.modalConfirmationVisible=e),modalWidth:"26em"},{content:(0,s.w5)((()=>[i])),buttons:(0,s.w5)((()=>[(0,s._)("button",{class:"button-small",style:(0,l.j5)({background:L.colorTheme}),onClick:t[1]||(t[1]=e=>B.postAnswer())},"Продовжити",4),(0,s._)("button",{class:"button-small",style:(0,l.j5)({background:L.colorTheme}),onClick:t[2]||(t[2]=e=>L.modalConfirmationVisible=!1)},"Скасувати",4)])),_:1},8,["visible"]),(0,s.Wm)(J,{visible:L.modalResultVisible,"onUpdate:visible":t[4]||(t[4]=e=>L.modalResultVisible=e),modalWidth:"20em"},{content:(0,s.w5)((()=>[n,(0,s._)("div",d,[(0,s.Wm)(O,{data:[B.lessonPercentage,100-B.lessonPercentage],colors:[e.mix3(B.lessonPercentage),"#00000015"]},{default:(0,s.w5)((()=>[(0,s._)("div",c,(0,l.zw)(B.lessonPercentage)+"%",1),u])),_:1},8,["data","colors"])])])),_:1},8,["visible"]),(0,s.Wm)(ee,{backgroundImage:B.backgroundURL,backgroundOffset:"10"},{header:(0,s.w5)((()=>[(0,s._)("div",p,[(0,s._)("div",m,[(0,s.Wm)(Q,{to:"lessons",class:"link"},{default:(0,s.w5)((()=>[k,g])),_:1}),(0,s._)("span",{class:"link",onClick:t[5]||(t[5]=e=>L.modalFeedbackVisible=!0)},"Помітили помилку?")]),(0,s._)("div",h,(0,l.zw)(L.lessonName),1),(0,s._)("div",null,[(0,s.Wm)(G,{modelValue:L.taskIndex,"onUpdate:modelValue":t[6]||(t[6]=e=>L.taskIndex=e),pageMax:B.lesson.length,pageLimit:10,colors:B.paginationColors},null,8,["modelValue","pageMax","colors"])])])])),body:(0,s.w5)((()=>[(0,s._)("div",w,[(0,s._)("div",b,[(0,s._)("span",v,"Завдання "+(0,l.zw)(L.taskIndex+1)+" з "+(0,l.zw)(B.lesson.length),1),y,(0,s._)("span",{class:"tag1",style:(0,l.j5)({background:B.task.completed?e.mix3(B.task.percentage):"#0005"})},(0,l.zw)(B.task.completed?100==B.task.percentage?"Правильно":0==B.task.percentage?"Помилка":"Частково":"Без відповіді"),5),(0,s._)("input",{type:"checkbox",id:"toggleTips",onClick:t[7]||(t[7]=t=>e.$store.commit("toggleTips"))}),f,_,(0,s._)("input",{type:"checkbox",id:"toggleStats",onClick:t[8]||(t[8]=t=>e.$store.commit("toggleMetrics"))}),C]),(0,s._)("div",x,[(0,s._)("span",null,"Зроблено "+(0,l.zw)(B.task.attempts)+" / 2 спроб",1),D,(0,s._)("span",null,"Отримано "+(0,l.zw)(B.task.completed?B.task.score:0)+" / "+(0,l.zw)(B.task.weight)+" балів",1)]),B.task.tip?(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",$,[(0,s._)("div",{innerHTML:B.task.tip.text},null,8,I),B.task.tip?.formula?((0,s.wg)(),(0,s.iD)("div",V,(0,l.zw)("\\("+B.task.tip.formula+"\\)"),1)):(0,s.kq)("",!0)],512)),[[o.F8,e.$store.state.showTips]]):(0,s.kq)("",!0),q,(0,s._)("div",M,(0,l.zw)(B.task.text),1),(0,s._)("div",T,[B.task.items?((0,s.wg)(),(0,s.iD)("div",Z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(B.task.items,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"task-option",key:t},(0,l.zw)(1+t)+" "+(0,l.zw)(e),1)))),128))])):(0,s.kq)("",!0),B.task.options?((0,s.wg)(),(0,s.iD)("div",S,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(B.task.options,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("div",z,(0,l.zw)(String.fromCharCode(1040+t))+" "+(0,l.zw)(e.includes("https://")?"":e),1),e.includes("https://")?((0,s.wg)(),(0,s.iD)("img",{key:0,src:e},null,8,A)):(0,s.kq)("",!0)])))),128))])):(0,s.kq)("",!0),B.task.image?((0,s.wg)(),(0,s.iD)("div",H,[(0,s._)("img",{src:B.task.image,alt:"loading..."},null,8,N)])):(0,s.kq)("",!0)]),(0,s._)("div",{class:"task-panel",style:(0,l.j5)({display:B.task.attempts?"flex":"block"})},[(0,s._)("div",U,[(0,s.Wm)(X,{type:B.task.type,disabled:B.task.completed,data:B.task.answer,correctData:B.task.completed?B.task.key:void 0,showCorrect:B.task.attempts==e.$maxAttempts},(0,s.Nv)({_:2},[(0,s.Ko)(B.task.key.length,(t=>({name:`label${t}`,fn:(0,s.w5)((()=>["radio"==B.task.type&&(e.ефілюсщьздуеув&&100==B.task.percentage||B.task.attempts==e.$maxAttempts)&&B.task.metrics[t-1].some((e=>e>0))?(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",W,[(0,s.Wm)(E,{data:B.task.metrics[t-1],colors:B.metricsColors(t-1),gap:5},null,8,["data","colors"])],512)),[[o.F8,e.$store.state.showMetrics]]):(0,s.kq)("",!0)]))})))]),1032,["type","disabled","data","correctData","showCorrect"]),B.task.completed&&B.task.attempts>0&&B.task.attempts<e.$maxAttempts&&B.task.percentage<100?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"input-show-correct",onClick:t[9]||(t[9]=e=>L.modalConfirmationVisible=!0)},"Показати правильну відповідь")):(0,s.kq)("",!0),L.v$.$error?((0,s.wg)(),(0,s.iD)("div",j,"Неправильний формат відповіді")):(0,s.kq)("",!0)]),(0,s._)("div",R,[B.task.completed&&B.task.percentage<100&&B.task.attempts<e.$maxAttempts?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"button-plain",onClick:t[10]||(t[10]=()=>{B.task.completed=!1})},"Нова спроба")):(0,s.kq)("",!0),B.task.completed?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:1,class:"button-plain",disabled:!B.task.answered,onClick:t[11]||(t[11]=e=>B.postAnswer())},"Відповісти",8,Y)),(0,s._)("button",{id:"button-back",class:"button-plain button-next",disabled:0==L.taskIndex,onClick:t[12]||(t[12]=e=>L.taskIndex--)},"Назад",8,P),L.taskIndex!==B.lesson.length-1?((0,s.wg)(),(0,s.iD)("button",{key:2,class:"button-plain button-next",onClick:t[13]||(t[13]=e=>L.taskIndex++)},"Далі")):((0,s.wg)(),(0,s.iD)("button",{key:3,class:"button-plain",disabled:!B.lessonCompleted,onClick:t[14]||(t[14]=e=>L.modalResultVisible=!0)},"Результат",8,K))])],4)])])),_:1},8,["backgroundImage"])],64)}var B=a(4028),F=a(1844),J=a(7981);function O(e,t,a,l,o,r){const i=(0,s.up)("paginationItem");return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.pageRange,(t=>((0,s.wg)(),(0,s.j4)(i,{key:t,onClick2:a=>e.$emit("update:modelValue",t),ref_for:!0,ref:"paginationItems",label:t+1,wings:[0!=t,t!=a.pageMax-1],color:a.colors[t],shape:"square",width:100/Math.min(a.pageMax,a.pageLimit+1)+"%"},null,8,["onClick2","label","wings","color","width"])))),128)}const Q={class:"centered number"};function G(e,t,a,o,r,i){return(0,s.wg)(),(0,s.iD)("div",{class:"wrapper flex",style:(0,l.j5)({width:a.width})},[a.wings[0]?((0,s.wg)(),(0,s.iD)("span",{key:0,class:"line centered",style:(0,l.j5)({left:"20%",background:a.color})},null,4)):(0,s.kq)("",!0),a.wings[1]?((0,s.wg)(),(0,s.iD)("span",{key:1,class:"line centered",style:(0,l.j5)({left:"80%",background:a.color})},null,4)):(0,s.kq)("",!0),(0,s._)("input",{class:(0,l.C_)(["centered",a.shape]),type:"radio",name:"radiogroup",ref:"input",style:(0,l.j5)({background:a.color}),onClick:t[0]||(t[0]=t=>e.$emit("click2"))},null,6),(0,s._)("b",Q,(0,l.zw)(a.label+""),1)],4)}var E={props:["label","wings","color","shape","width"],methods:{click(){this.$refs.input.click()}}},X=a(8118);const ee=(0,X.Z)(E,[["render",G],["__scopeId","data-v-731ac643"]]);var te=ee,ae={components:{paginationItem:te},props:["modelValue","pageMax","pageLimit","colors"],mounted(){this.$refs.paginationItems[0].click()},data(){return{page:1}},computed:{pageRange(){let{page:e,pageLimit:t,pageMax:a}=this,s=(t+1)/2,l=[...Array(a).keys()];return e<s?l.slice(0,t+1):e>a-s?l.slice(a-t-1,a):l.filter((t=>Math.abs(t-e)<s))}},watch:{modelValue(e){this.$refs.paginationItems[e].click()}}};const se=(0,X.Z)(ae,[["render",O]]);var le=se;const oe={class:"task-tab"},re={key:0,class:"task-answer-row"},ie={key:1,class:"task-answer-title"},ne={key:0,class:"task-answer-row"},de=["name","disabled","onUpdate:modelValue","value"],ce={key:1},ue=["disabled","onUpdate:modelValue"],pe={key:0,class:"task-correct-answer"},me=(0,s.Uk)(" Правильна відповідь: ");function ke(e,t,a,r,i,n){return(0,s.wg)(),(0,s.iD)("div",oe,["radio"==a.type?((0,s.wg)(),(0,s.iD)("div",re,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(e=>(0,s._)("span",{class:"task-answer-letter",key:e},(0,l.zw)(String.fromCharCode(1039+e)),1))),64))])):(0,s.kq)("",!0),"input"==a.type?((0,s.wg)(),(0,s.iD)("div",ie,"Відповідь:")):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data.length,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s.WI)(e.$slots,"label"+t,{},void 0,!0),"radio"==a.type?((0,s.wg)(),(0,s.iD)("div",ne,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(e=>(0,s.wy)((0,s._)("input",{key:e,type:"radio",name:t,class:"task-answer-cell",disabled:a.disabled,"onUpdate:modelValue":e=>n.dataModel[t-1]=e,value:String.fromCharCode(1039+e),style:(0,l.j5)({borderColor:n.cellColor(t-1,e-1)})},null,12,de),[[o.G2,n.dataModel[t-1]]]))),64))])):(0,s.kq)("",!0),"input"==a.type?((0,s.wg)(),(0,s.iD)("div",ce,[(0,s.wy)((0,s._)("input",{type:"text",class:"task-answer-input",disabled:a.disabled,"onUpdate:modelValue":e=>n.dataModel[t-1]=e,style:(0,l.j5)({borderColor:n.inputColor(t-1)})},null,12,ue),[[o.nr,n.dataModel[t-1]]]),a.showCorrect?((0,s.wg)(),(0,s.iD)("div",pe,[me,(0,s._)("b",null,(0,l.zw)(a.correctData[t-1]),1)])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])))),128))])}var ge=a(1800),he={components:{chartColumn:ge.Z},props:{data:{type:Array,required:!0},correctData:{type:Array,required:!1},type:{type:String,required:!0,default:"radio"},disabled:{type:Boolean,required:!1,default:!1},showCorrect:{type:Boolean,required:!1,default:!1}},computed:{dataModel:{get(){return this.data},set(e){this.$emit("update:data",e)}}},methods:{cellColor(e,t){return this.correctData?this.correctData[e]==String.fromCharCode(1040+t)&&this.data[e]==String.fromCharCode(1040+t)?this.$green:this.showCorrect&&this.correctData[e]==String.fromCharCode(1040+t)?this.$green+"aa":this.data[e]==String.fromCharCode(1040+t)?this.$red:"#0004":"gray"},inputColor(e){return this.correctData?this.correctData[e]==this.data[e]?this.$green:this.$red:"gray"}}};const we=(0,X.Z)(he,[["render",ke],["__scopeId","data-v-46ee8068"]]);var be=we,ve=a(9287);const ye=e=>((0,s.dD)("data-v-2f5866aa"),e=e(),(0,s.Cn)(),e),fe=ye((()=>(0,s._)("div",{class:"input-name"},"Назва уроку:",-1))),_e=ye((()=>(0,s._)("div",{class:"input-name"},"Опис помилки:",-1)));function Ce(e,t,a,o,r,i){const n=(0,s.up)("input-text"),d=(0,s.up)("input-textarea"),c=(0,s.up)("modal");return(0,s.wg)(),(0,s.j4)(c,{modalWidth:"22em",buttonColor:r.colorTheme},{content:(0,s.w5)((()=>[fe,(0,s.Wm)(n,{modelValue:r.lessonName,"onUpdate:modelValue":t[0]||(t[0]=e=>r.lessonName=e),ref:"lessonName"},null,8,["modelValue"]),_e,(0,s.Wm)(d,{modelValue:r.reportText,"onUpdate:modelValue":t[1]||(t[1]=e=>r.reportText=e),placeholder:"Опишіть помилку тут",ref:"reportText"},null,8,["modelValue"])])),buttons:(0,s.w5)((()=>[(0,s._)("button",{class:"button-small",style:(0,l.j5)({background:r.colorTheme}),onClick:t[2]||(t[2]=e=>i.report())},"Надіслати",4)])),_:1},8,["buttonColor"])}var xe=a(4513);const De=["placeholder","value"],$e={key:0,class:"input-error-message"};function Ie(e,t,a,o,r,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("textarea",{rows:"7",class:(0,l.C_)(["input-textfield-line",{"input-textfield-invalid":r.v$.modelValue.$error}]),placeholder:a.placeholder,value:a.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value.trim()))},null,42,De),r.v$.modelValue.$error?((0,s.wg)(),(0,s.iD)("div",$e,"Поле має бути заповнене")):(0,s.kq)("",!0)],64)}var Ve=a(2587),qe={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data(){return{v$:(0,B.ZP)()}},validations(){return{modelValue:{required:Ve.C1}}}};const Me=(0,X.Z)(qe,[["render",Ie]]);var Te=Me,Ze={components:{modal:ve.Z,inputText:xe.Z,inputTextarea:Te},data(){return{colorTheme:localStorage.getItem("colorTheme"),lessonName:localStorage.getItem("lessonName"),reportText:""}},computed:{inputs(){return Object.keys(this.$refs).map((e=>this.$refs[e]))}},methods:{async report(){this.inputs.map((e=>e.v$.$touch())),this.inputs.some((e=>e.v$.$error))||(await F.Z.report("Повідомлення про помилку на skywing.online",{lesson:this.lessonName,message:this.reportText}),this.$emit("update:visible",!1))}}};const Se=(0,X.Z)(Ze,[["render",Ce],["__scopeId","data-v-2f5866aa"]]);var ze=Se,Ae=a(7925);const He=e=>e.every((e=>/^\-?\d{1,4}(\,\d{1,2})?$/.test(e)));var Ne={components:{mainLayout:J.Z,pagination:le,answerBlank:be,modal:ve.Z,modalReport:ze,chartColumn:ge.Z,chartDoughnut:Ae.Z},beforeMount(){this.$nextTick((e=>MathJax.Hub.Queue(["Typeset",MathJax.Hub])))},data(){return{v$:(0,B.ZP)(),taskIndex:0,showResult:!1,modalConfirmationVisible:!1,modalResultVisible:!1,modalFeedbackVisible:!1,moduleName:localStorage.getItem("moduleName"),lessonName:localStorage.getItem("lessonName"),blockName:localStorage.getItem("blockName"),moduleId:localStorage.getItem("moduleId"),lessonId:parseInt(localStorage.getItem("lessonId")),blockId:parseInt(localStorage.getItem("blockId")),colorTheme:localStorage.getItem("colorTheme")}},computed:{lesson(){return this.$store.state.tasks},task(){return this.lesson[this.taskIndex]},lessonCompleted(){return!this.lesson.map((e=>e.completed)).includes(!1)},lessonPercentage(){return Math.round(this.lesson.map((e=>e.score)).sum()/this.lesson.map((e=>e.weight)).sum()*100)},paginationColors(){return this.lesson.map((e=>e.completed?this.mix3(e.percentage):"gray"))},backgroundURL(){return this.$cloudinary+this.moduleId+".jpg"}},validations(){return{task:{answer:{format:He}}}},watch:{taskIndex:function(){this.v$.$reset(),this.$nextTick((e=>MathJax.Hub.Queue(["Typeset",MathJax.Hub])))}},methods:{metricsColors(e){return["А","Б","В","Г","Д"].map((t=>t==this.task.key[e]?this.$green:t==this.task.answer[e]?this.$red:"#0004"))},postAnswer(){"input"==this.task.type&&this.v$.$touch(),this.v$.$error||(F.Z.postAnswer(this.moduleId,this.blockId,this.lessonId,this.task._id,this.task.answer,this.task.score,this.task.weight),this.task.completed=!0,this.task.attempts++,this.modalConfirmationVisible=!1)},reportMistake(){F.Z.reportMistake()}}};const Ue=(0,X.Z)(Ne,[["render",L],["__scopeId","data-v-33501aa1"]]);var We=Ue}}]);
//# sourceMappingURL=769.86d3dcaf.js.map