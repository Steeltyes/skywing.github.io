"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[1],{1800:function(e,t,a){a.d(t,{Z:function(){return m}});var s=a(6252);const o={viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none"},n=["x","height","width","fill"],l=["to"];function i(e,t,a,i,r,d){return(0,s.wg)(),(0,s.iD)("svg",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data.length,(e=>((0,s.wg)(),(0,s.iD)("rect",{key:e,x:100/a.data.length*(e-1)+ +a.gap/2,height:d.percentages[e-1]||2,y:"0",width:100/a.data.length-+a.gap,fill:a.colors[e-1]},[a.isAnimated?((0,s.wg)(),(0,s.iD)("animate",{key:0,attributeName:"height",from:"0",to:d.percentages[e-1]+5,dur:"2s",fill:"freeze"},null,8,l)):(0,s.kq)("",!0)],8,n)))),128))])}var r={name:"histogram",props:{data:{type:Array,required:!0},colors:{type:Array,required:!0},isAnimated:{type:Boolean,required:!1,default:!1},gap:{type:Number,required:!1,default:0}},computed:{percentages(){return this.data.map((e=>Math.ceil(e/this.data.max()*100)))}}},d=a(8118);const c=(0,d.Z)(r,[["render",i],["__scopeId","data-v-2375c831"]]);var m=c},7925:function(e,t,a){a.d(t,{Z:function(){return p}});var s=a(6252),o=a(3577);const n={class:"relative elastic"},l={viewBox:"0 0 110 110",width:"100%",height:"100%"},i={class:"centered"};function r(e,t,a,r,d,c){return(0,s.wg)(),(0,s.iD)("div",n,[((0,s.wg)(),(0,s.iD)("svg",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data.length,(e=>((0,s.wg)(),(0,s.iD)("g",{key:e},[a.data[a.data.length-e]?((0,s.wg)(),(0,s.iD)("circle",{key:0,style:(0,o.j5)({strokeDasharray:c.percentages[a.data.length-e]*Math.PI+" 314",strokeDashoffset:-c.partials[a.data.length-e]*Math.PI,strokeWidth:a.thickness,stroke:a.colors[a.data.length-e]}),r:"50",cx:"55",cy:"55"},null,4)):(0,s.kq)("",!0)])))),128))])),(0,s._)("div",i,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])])}var d={props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages(){return this.data.map((e=>Math.ceil(e/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},c=a(8118);const m=(0,c.Z)(d,[["render",r],["__scopeId","data-v-09ebced2"]]);var p=m},7001:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ke}});var s=a(6252),o=a(3577),n=a(9963);const l=e=>((0,s.dD)("data-v-61126b88"),e=e(),(0,s.Cn)(),e),i=l((()=>(0,s._)("div",{class:"modal-text"},"Побачивши відповідь, ви вже не зможете робити нових спроб. Все одно продовжити?",-1))),r=l((()=>(0,s._)("div",{class:"modal-header"},"Результат",-1))),d={class:"chart-wrapper relative"},c={class:"chart-percentage"},m=l((()=>(0,s._)("div",{class:"chart-label"},"правильно",-1))),p=l((()=>(0,s._)("br",null,null,-1))),u={class:"modal-text"},k=(0,s.Uk)(" середній "),g={class:"header-section"},h={class:"lesson-navbar"},w=l((()=>(0,s._)("span",{class:"material-icons"},"arrow_back",-1))),b=(0,s.Uk)("  Назад до списку тем "),y={class:"link"},v=(0,s.Uk)("  "),_={class:"lesson-name"},f={class:"task-section"},C={class:"task-info"},$={class:"task-index"},D={class:"task-stats"},x=(0,s.Uk)(" •  "),I=["innerHTML"],M=["innerHTML"],q={key:1},T=l((()=>(0,s._)("br",null,null,-1))),A=l((()=>(0,s._)("span",{class:"tag1",style:{background:"orange"}},"Зверніть увагу",-1))),V=(0,s.Uk)("  "),P=["src"],H=["innerHTML"],Z={class:"task-content"},z={key:0,class:"task-options"},U={class:"task-letter"},j={key:0,class:"task-option"},S=["src"],W={key:1,class:"task-options"},N={class:"task-letter"},L={key:0,class:"task-option"},R=["src"],K=["src"],Y={class:"task-blank"},F={key:0,class:"bar-wrapper"},B={key:1,class:"input-error-message"},J={class:"task-buttons"},O=["disabled"],Q=["disabled"],G=["disabled"],E={key:1,class:"task-comment"},X=l((()=>(0,s._)("b",null,"Розв'язок:",-1))),ee=(0,s.Uk)("  "),te=["innerHTML"];function ae(e,t,a,l,ae,se){const oe=(0,s.up)("modal-report"),ne=(0,s.up)("modal"),le=(0,s.up)("chart-doughnut"),ie=(0,s.up)("router-link"),re=(0,s.up)("pagination"),de=(0,s.up)("chart-column"),ce=(0,s.up)("answer-blank"),me=(0,s.up)("main-layout");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(oe,{visible:ae.modalFeedbackVisible,"onUpdate:visible":t[0]||(t[0]=e=>ae.modalFeedbackVisible=e)},null,8,["visible"]),(0,s.Wm)(ne,{visible:ae.modalConfirmationVisible,"onUpdate:visible":t[3]||(t[3]=e=>ae.modalConfirmationVisible=e),modalWidth:"26em"},{content:(0,s.w5)((()=>[i])),buttons:(0,s.w5)((()=>[(0,s._)("button",{class:"button-small",style:(0,o.j5)({background:ae.colorTheme}),onClick:t[1]||(t[1]=e=>se.postAnswer())},"Продовжити",4),(0,s._)("button",{class:"button-small",style:(0,o.j5)({background:ae.colorTheme}),onClick:t[2]||(t[2]=e=>ae.modalConfirmationVisible=!1)},"Скасувати",4)])),_:1},8,["visible"]),(0,s.Wm)(ne,{visible:ae.modalResultVisible,"onUpdate:visible":t[4]||(t[4]=e=>ae.modalResultVisible=e),modalWidth:"22em"},{content:(0,s.w5)((()=>[r,(0,s._)("div",d,[(0,s.Wm)(le,{data:[se.lessonPercentage,100-se.lessonPercentage],colors:[e.mix3(se.lessonPercentage),"#00000015"],thickness:5},{default:(0,s.w5)((()=>[(0,s._)("div",c,(0,o.zw)(se.lessonPercentage)+"%",1),m])),_:1},8,["data","colors"]),(0,s.Wm)(le,{class:"chart-inset centered",data:[se.lessonAvgPercentage,100-se.lessonAvgPercentage],colors:[e.mix3(se.lessonAvgPercentage),"#00000015"],thickness:2},null,8,["data","colors"])]),p,(0,s._)("div",u,[(0,s.Uk)((0,o.zw)(se.lessonPercentage>se.lessonAvgPercentage?"Оце так!":se.lessonPercentage=se.lessonAvgPercentage?"Чудово.":"Ви були близько.")+" Ваш результат ",1),(0,s._)("span",{style:(0,o.j5)([{color:se.lessonPercentage>=se.lessonAvgPercentage?e.mix3(100):e.mix3(0)},{"font-weight":"bold"}])},(0,o.zw)(se.lessonPercentage>se.lessonAvgPercentage?`на ${se.lessonPercentage-se.lessonAvgPercentage}% вище за`:se.lessonPercentage=se.lessonAvgPercentage?"такий саме, як":"дещо нижче за"),5),k])])),buttons:(0,s.w5)((()=>[])),_:1},8,["visible"]),(0,s.Wm)(me,{backgroundImage:se.backgroundURL,backgroundOffset:"10"},{header:(0,s.w5)((()=>[(0,s._)("div",g,[(0,s._)("div",h,[(0,s.Wm)(ie,{to:"lessons",class:"link"},{default:(0,s.w5)((()=>[w,b])),_:1}),(0,s._)("span",y,[(0,s._)("span",{onClick:t[5]||(t[5]=e=>ae.modalFeedbackVisible=!0)},"Помітили помилку?"),v])]),(0,s._)("div",_,(0,o.zw)(ae.lessonName),1),(0,s._)("div",null,[(0,s.Wm)(re,{modelValue:ae.taskIndex,"onUpdate:modelValue":t[6]||(t[6]=e=>ae.taskIndex=e),pageMax:se.lesson.length,pageLimit:10,colors:se.paginationColors},null,8,["modelValue","pageMax","colors"])])])])),body:(0,s.w5)((()=>[(0,s._)("div",f,[(0,s._)("div",C,[(0,s._)("span",{class:"material-icons-outlined tablet",style:(0,o.j5)({color:se.task.completed?e.mix3(se.task.percentage):"#0005"})},(0,o.zw)(se.task.completed?100==se.task.percentage?"done":0==se.task.percentage?"close":"done":"not_started"),5),(0,s._)("span",$," Завдання "+(0,o.zw)(ae.taskIndex+1)+" з "+(0,o.zw)(se.lesson.length)+"  ",1),(0,s._)("span",{class:"tag1 desktop",style:(0,o.j5)({background:se.task.completed?e.mix3(se.task.percentage):"#0005"})},(0,o.zw)(se.task.completed?100==se.task.percentage?"Правильно":0==se.task.percentage?"Помилка":"Частково":"Без відповіді"),5)]),(0,s._)("div",D,[(0,s._)("span",null,"Зроблено "+(0,o.zw)(se.task.attempts)+" / 2 спроб",1),x,(0,s._)("span",null,"Отримано "+(0,o.zw)(se.task.completed?se.task.score:0)+" / "+(0,o.zw)(se.task.weight)+" балів",1)]),se.task?.tip?(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{key:0,class:"task-tip",style:(0,o.j5)({background:ae.colorTheme+"15"})},[(0,s._)("div",null,[(0,s._)("div",{innerHTML:se.task.tip.text},null,8,I),se.task.tip?.formula?((0,s.wg)(),(0,s.iD)("div",{key:0,innerHTML:"<br/>$$"+se.task.tip.formula+"$$"},null,8,M)):(0,s.kq)("",!0),se.task.tip?.note?((0,s.wg)(),(0,s.iD)("div",q,[T,A,V,(0,s._)("span",null,(0,o.zw)(se.task.tip.note),1)])):(0,s.kq)("",!0)]),se.task.tip?.image?((0,s.wg)(),(0,s.iD)("img",{key:0,src:`${e.$cloudinary}images/${se.task._id}t.png`},null,8,P)):(0,s.kq)("",!0)],4)),[[n.F8,e.$store.state.showTips]]):(0,s.kq)("",!0),(0,s._)("div",{class:"task-text",innerHTML:se.task.text},null,8,H),(0,s._)("div",Z,[se.task.items?((0,s.wg)(),(0,s.iD)("div",z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(se.task.items,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a,style:{padding:".55em 0"}},[(0,s._)("span",U,(0,o.zw)(a+1),1),"image"!==t?((0,s.wg)(),(0,s.iD)("span",j,(0,o.zw)(t),1)):((0,s.wg)(),(0,s.iD)("img",{key:1,src:`${e.$cloudinary}images/${se.task._id}-${a+1}.png`},null,8,S))])))),128))])):(0,s.kq)("",!0),se.task.options?((0,s.wg)(),(0,s.iD)("div",W,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(se.task.options,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a,style:{padding:".55em 0"}},[(0,s._)("span",N,(0,o.zw)(String.fromCharCode(1040+a)),1),"image"!==t?((0,s.wg)(),(0,s.iD)("span",L,(0,o.zw)(t),1)):((0,s.wg)(),(0,s.iD)("img",{key:1,src:`${e.$cloudinary}images/${se.task._id}${String.fromCharCode(97+a)}.png`},null,8,R))])))),128))])):(0,s.kq)("",!0),se.task.image?((0,s.wg)(),(0,s.iD)("img",{key:2,class:"task-image",src:`${e.$cloudinary}images/${se.task._id}.png`},null,8,K)):(0,s.kq)("",!0)]),(0,s._)("div",{class:"task-panel",style:(0,o.j5)({display:se.task.completed&&100==se.task.percentage||se.task.attempts==e.$maxAttempts?"flex":"block"})},[(0,s._)("div",Y,[(0,s.Wm)(ce,{type:se.task.type,disabled:se.task.completed,data:se.task.answer,correctData:se.task.completed?se.task.key:void 0,showCorrect:se.task.attempts==e.$maxAttempts},(0,s.Nv)({_:2},[(0,s.Ko)(se.task.key.length,(t=>({name:`label${t}`,fn:(0,s.w5)((()=>["radio"==se.task.type&&(se.task.completed&&100==se.task.percentage||se.task.attempts==e.$maxAttempts)&&se.task.metrics[t-1].some((e=>e>0))?(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",F,[(0,s.Wm)(de,{data:se.task.metrics[t-1],colors:se.metricsColors(t-1),gap:5},null,8,["data","colors"])],512)),[[n.F8,e.$store.state.showMetrics]]):(0,s.kq)("",!0)]))})))]),1032,["type","disabled","data","correctData","showCorrect"]),se.task.completed&&se.task.attempts>0&&se.task.attempts<e.$maxAttempts&&se.task.percentage<100?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"input-show-correct",onClick:t[7]||(t[7]=e=>ae.modalConfirmationVisible=!0)},"Показати правильну відповідь")):(0,s.kq)("",!0),ae.v$.$error?((0,s.wg)(),(0,s.iD)("div",B,"Неправильний формат відповіді")):(0,s.kq)("",!0),se.task.finished&&se.task?.comment&&!ae.showComment?((0,s.wg)(),(0,s.iD)("div",{key:2,class:"show-comment",onClick:t[8]||(t[8]=e=>ae.showComment=!0)},"Натисніть, щоб побачити розв'язок")):(0,s.kq)("",!0)]),(0,s._)("div",J,[se.task.completed&&se.task.percentage<100&&se.task.attempts<e.$maxAttempts?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"button-plain",onClick:t[9]||(t[9]=()=>{se.task.completed=!1})},"Нова спроба")):(0,s.kq)("",!0),se.task.completed?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:1,class:"button-plain",disabled:!se.task.answered,onClick:t[10]||(t[10]=e=>se.postAnswer())},"Відповісти",8,O)),(0,s._)("button",{id:"button-back",class:"button-plain button-next",disabled:0==ae.taskIndex,onClick:t[11]||(t[11]=e=>ae.taskIndex--)},"Назад",8,Q),ae.taskIndex!==se.lesson.length-1?((0,s.wg)(),(0,s.iD)("button",{key:2,class:"button-plain button-next",onClick:t[12]||(t[12]=e=>ae.taskIndex++)},"Далі")):((0,s.wg)(),(0,s.iD)("button",{key:3,class:"button-plain",disabled:!se.lessonCompleted,onClick:t[13]||(t[13]=e=>ae.modalResultVisible=!0)},"Результат",8,G))])],4),se.task?.comment?(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("div",null,[X,ee,(0,s._)("span",{innerHTML:se.task.comment},null,8,te)])],512)),[[n.F8,ae.showComment]]):(0,s.kq)("",!0)])])),_:1},8,["backgroundImage"])],64)}a(6699);var se=a(4028),oe=a(1844),ne=a(1886);function le(e,t,a,o,n,l){const i=(0,s.up)("paginationItem");return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.pageRange,(t=>((0,s.wg)(),(0,s.j4)(i,{key:t,onClick2:a=>e.$emit("update:modelValue",t),ref_for:!0,ref:"paginationItems",label:t+1,wings:[0!=t,t!=a.pageMax-1],color:a.colors[t],shape:"square",width:100/Math.min(a.pageMax,a.pageLimit+1)+"%"},null,8,["onClick2","label","wings","color","width"])))),128)}const ie={class:"centered number"};function re(e,t,a,n,l,i){return(0,s.wg)(),(0,s.iD)("div",{class:"wrapper flex",style:(0,o.j5)({width:a.width})},[a.wings[0]?((0,s.wg)(),(0,s.iD)("span",{key:0,class:"line centered",style:(0,o.j5)({left:"20%",background:a.color})},null,4)):(0,s.kq)("",!0),a.wings[1]?((0,s.wg)(),(0,s.iD)("span",{key:1,class:"line centered",style:(0,o.j5)({left:"80%",background:a.color})},null,4)):(0,s.kq)("",!0),(0,s._)("input",{class:(0,o.C_)(["centered",a.shape]),type:"radio",name:"radiogroup",ref:"input",style:(0,o.j5)({background:a.color}),onClick:t[0]||(t[0]=t=>e.$emit("click2"))},null,6),(0,s._)("b",ie,(0,o.zw)(a.label+""),1)],4)}var de={props:["label","wings","color","shape","width"],methods:{click(){this.$refs.input.click()}}},ce=a(8118);const me=(0,ce.Z)(de,[["render",re],["__scopeId","data-v-731ac643"]]);var pe=me,ue={components:{paginationItem:pe},props:["modelValue","pageMax","pageLimit","colors"],mounted(){this.$refs.paginationItems[0].click()},data(){return{page:1}},computed:{pageRange(){let{page:e,pageLimit:t,pageMax:a}=this,s=(t+1)/2,o=[...Array(a).keys()];return e<s?o.slice(0,t+1):e>a-s?o.slice(a-t-1,a):o.filter((t=>Math.abs(t-e)<s))}},watch:{modelValue(e){this.$refs.paginationItems[e].click()}}};const ke=(0,ce.Z)(ue,[["render",le]]);var ge=ke;const he={class:"task-tab"},we={key:0,class:"task-answer-row"},be={key:1,class:"task-answer-title"},ye={key:0,class:"task-answer-row"},ve=["name","disabled","onUpdate:modelValue","value"],_e={key:1},fe=["disabled","onUpdate:modelValue"],Ce={key:0,class:"task-correct-answer"},$e=(0,s.Uk)(" Правильна відповідь: ");function De(e,t,a,l,i,r){return(0,s.wg)(),(0,s.iD)("div",he,["radio"==a.type?((0,s.wg)(),(0,s.iD)("div",we,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(e=>(0,s._)("span",{class:"task-answer-letter",key:e},(0,o.zw)(String.fromCharCode(1039+e)),1))),64))])):(0,s.kq)("",!0),"input"==a.type?((0,s.wg)(),(0,s.iD)("div",be,"Відповідь:")):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data.length,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s.WI)(e.$slots,"label"+t,{},void 0,!0),"radio"==a.type?((0,s.wg)(),(0,s.iD)("div",ye,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(e=>(0,s.wy)((0,s._)("input",{key:e,type:"radio",name:t,class:"task-answer-cell",disabled:a.disabled,"onUpdate:modelValue":e=>r.dataModel[t-1]=e,value:String.fromCharCode(1039+e),style:(0,o.j5)({borderColor:r.cellColor(t-1,e-1)})},null,12,ve),[[n.G2,r.dataModel[t-1]]]))),64))])):(0,s.kq)("",!0),"input"==a.type?((0,s.wg)(),(0,s.iD)("div",_e,[(0,s.wy)((0,s._)("input",{type:"text",class:"task-answer-input",disabled:a.disabled,"onUpdate:modelValue":e=>r.dataModel[t-1]=e,style:(0,o.j5)({borderColor:r.inputColor(t-1)})},null,12,fe),[[n.nr,r.dataModel[t-1]]]),a.showCorrect?((0,s.wg)(),(0,s.iD)("div",Ce,[$e,(0,s._)("b",null,(0,o.zw)(a.correctData[t-1]),1)])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])))),128))])}var xe=a(1800),Ie={components:{chartColumn:xe.Z},props:{data:{type:Array,required:!0},correctData:{type:Array,required:!1},type:{type:String,required:!0,default:"radio"},disabled:{type:Boolean,required:!1,default:!1},showCorrect:{type:Boolean,required:!1,default:!1}},computed:{dataModel:{get(){return this.data},set(e){this.$emit("update:data",e)}}},methods:{cellColor(e,t){return this.correctData?this.correctData[e]==String.fromCharCode(1040+t)&&this.data[e]==String.fromCharCode(1040+t)?this.$green:this.showCorrect&&this.correctData[e]==String.fromCharCode(1040+t)?this.$green+"aa":this.data[e]==String.fromCharCode(1040+t)?this.$red:"#0004":"gray"},inputColor(e){return this.correctData?this.correctData[e]==this.data[e]?this.$green:this.$red:"#0004"}}};const Me=(0,ce.Z)(Ie,[["render",De],["__scopeId","data-v-247ff495"]]);var qe=Me,Te=a(3675);const Ae=e=>((0,s.dD)("data-v-f4b6cd30"),e=e(),(0,s.Cn)(),e),Ve=Ae((()=>(0,s._)("div",{class:"input-name"},"Назва уроку:",-1))),Pe=Ae((()=>(0,s._)("div",{class:"input-name"},"Опис помилки:",-1)));function He(e,t,a,n,l,i){const r=(0,s.up)("input-text"),d=(0,s.up)("input-textarea"),c=(0,s.up)("modal");return(0,s.wg)(),(0,s.j4)(c,{modalWidth:"24em",buttonColor:l.colorTheme},{content:(0,s.w5)((()=>[Ve,(0,s.Wm)(r,{modelValue:l.lessonName,"onUpdate:modelValue":t[0]||(t[0]=e=>l.lessonName=e),ref:"lessonName"},null,8,["modelValue"]),Pe,(0,s.Wm)(d,{modelValue:l.reportText,"onUpdate:modelValue":t[1]||(t[1]=e=>l.reportText=e),placeholder:"Опишіть помилку тут",ref:"reportText"},null,8,["modelValue"])])),buttons:(0,s.w5)((()=>[(0,s._)("button",{class:"button-small",style:(0,o.j5)({background:l.colorTheme}),onClick:t[2]||(t[2]=e=>i.report())},"Надіслати",4)])),_:1},8,["buttonColor"])}var Ze=a(4513),ze=a(3660),Ue={components:{modal:Te.Z,inputText:Ze.Z,inputTextarea:ze.Z},data(){return{colorTheme:localStorage.getItem("colorTheme"),lessonName:localStorage.getItem("lessonName"),reportText:""}},computed:{inputs(){return Object.keys(this.$refs).map((e=>this.$refs[e]))}},methods:{async report(){this.inputs.map((e=>e.v$.$touch())),this.inputs.some((e=>e.v$.$error))||(await oe.Z.report("Повідомлення про помилку на skywing.online",{lesson:this.lessonName,message:this.reportText}),this.$emit("update:visible",!1))}}};const je=(0,ce.Z)(Ue,[["render",He],["__scopeId","data-v-f4b6cd30"]]);var Se=je,We=a(7925);const Ne=e=>e.every((e=>/^\-?\d{1,4}(\,\d{1,2})?$/.test(e)));var Le={components:{mainLayout:ne.Z,pagination:ge,answerBlank:qe,modal:Te.Z,modalReport:Se,chartColumn:xe.Z,chartDoughnut:We.Z},beforeMount(){this.$nextTick((e=>MathJax.Hub.Queue(["Typeset",MathJax.Hub])))},data(){return{v$:(0,se.ZP)(),taskIndex:0,showResult:!1,showComment:!1,modalConfirmationVisible:!1,modalResultVisible:!1,modalFeedbackVisible:!1,moduleName:localStorage.getItem("moduleName"),lessonName:localStorage.getItem("lessonName"),blockName:localStorage.getItem("blockName"),moduleId:localStorage.getItem("moduleId"),lessonId:parseInt(localStorage.getItem("lessonId")),blockId:parseInt(localStorage.getItem("blockId")),colorTheme:localStorage.getItem("colorTheme")}},computed:{lesson(){return this.$store.state.tasks},task(){return this.lesson[this.taskIndex]},lessonCompleted(){return!this.lesson.map((e=>e.completed)).includes(!1)},lessonPercentage(){return Math.round(this.lesson.map((e=>e.score)).sum()/this.lesson.map((e=>e.weight)).sum()*100)},lessonAvgPercentage(){return Math.round(this.lesson.map((e=>"radio"==e.type?e.correctAnswersTotal/(e.answersTotal||1)*100:0)).average())},paginationColors(){return this.lesson.map((e=>e.completed?this.mix3(e.percentage):"gray"))},backgroundURL(){return this.$cloudinary+this.moduleId+".jpg"}},validations(){return{task:{answer:{format:Ne}}}},watch:{taskIndex:function(e){this.v$.$reset(),this.showComment=!1,this.$nextTick((e=>MathJax.Hub.Queue(["Typeset",MathJax.Hub])))}},methods:{metricsColors(e){return["А","Б","В","Г","Д"].map((t=>t==this.task.key[e]?this.$green:t==this.task.answer[e]?this.$red:"#0004"))},postAnswer(){"input"==this.task.type&&this.v$.$touch(),this.v$.$error||(oe.Z.postAnswer(this.moduleId,this.blockId,this.lessonId,this.task._id,this.task.answer,this.task.score,this.task.weight),this.task.completed=!0,this.task.attempts++,this.modalConfirmationVisible=!1)},reportMistake(){oe.Z.reportMistake()}}};const Re=(0,ce.Z)(Le,[["render",ae],["__scopeId","data-v-61126b88"]]);var Ke=Re}}]);
//# sourceMappingURL=1.e6b2c107.js.map