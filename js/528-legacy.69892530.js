(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[528],{1800:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var a=n(6252),r={viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none"},s=["x","height","width","fill"],i=["to"];function o(t,e,n,o,c,l){return(0,a.wg)(),(0,a.iD)("svg",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(function(t){return(0,a.wg)(),(0,a.iD)("rect",{key:t,x:100/n.data.length*(t-1)+ +n.gap/2,height:l.percentages[t-1]||2,y:"0",width:100/n.data.length-+n.gap,fill:n.colors[t-1]},[n.isAnimated?((0,a.wg)(),(0,a.iD)("animate",{key:0,attributeName:"height",from:"0",to:l.percentages[t-1]+5,dur:"2s",fill:"freeze"},null,8,i)):(0,a.kq)("",!0)],8,s)})),128))])}n(9653),n(1249);var c={name:"histogram",props:{data:{type:Array,required:!0},colors:{type:Array,required:!0},isAnimated:{type:Boolean,required:!1,default:!1},gap:{type:Number,required:!1,default:0}},computed:{percentages:function(){var t=this;return this.data.map((function(e){return Math.ceil(e/t.data.max()*100)}))}}},l=n(8118);const u=(0,l.Z)(c,[["render",o],["__scopeId","data-v-2375c831"]]);var d=u},7925:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var a=n(6252),r=n(3577),s={class:"relative elastic"},i={viewBox:"0 0 110 110",width:"100%",height:"100%"},o={class:"centered"};function c(t,e,n,c,l,u){return(0,a.wg)(),(0,a.iD)("div",s,[((0,a.wg)(),(0,a.iD)("svg",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(function(t){return(0,a.wg)(),(0,a.iD)("g",{key:t},[n.data[n.data.length-t]?((0,a.wg)(),(0,a.iD)("circle",{key:0,style:(0,r.j5)({strokeDasharray:u.percentages[n.data.length-t]*Math.PI+" 314",strokeDashoffset:-u.partials[n.data.length-t]*Math.PI,strokeWidth:n.thickness,stroke:n.colors[n.data.length-t]}),r:"50",cx:"55",cy:"55"},null,4)):(0,a.kq)("",!0)])})),128))])),(0,a._)("div",o,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])])}var l=n(9225),u=(n(9653),n(1249),n(2222),{props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages:function(){var t=this;return this.data.map((function(e){return Math.ceil(e/t.data.sum()*100)}))},partials:function(){return[0].concat((0,l.Z)(this.percentages.partialSums()))}}}),d=n(8118);const p=(0,d.Z)(u,[["render",c],["__scopeId","data-v-09ebced2"]]);var m=p},6094:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var a=n(6252),r=n(3577),s=function(t){return(0,a.dD)("data-v-06afc76b"),t=t(),(0,a.Cn)(),t},i=s((function(){return(0,a._)("div",{class:"input-name"},"Назва уроку:",-1)})),o=s((function(){return(0,a._)("div",{class:"input-name"},"Опис помилки:",-1)}));function c(t,e,n,s,c,l){var u=(0,a.up)("input-text"),d=(0,a.up)("input-textarea"),p=(0,a.up)("modal");return(0,a.wg)(),(0,a.j4)(p,{modalWidth:"24em",buttonColor:c.colorTheme},{content:(0,a.w5)((function(){return[i,(0,a.Wm)(u,{modelValue:c.lessonName,"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.lessonName=t}),ref:"lessonName"},null,8,["modelValue"]),o,(0,a.Wm)(d,{modelValue:c.reportText,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.reportText=t}),placeholder:"Опишіть помилку тут",ref:"reportText"},null,8,["modelValue"])]})),buttons:(0,a.w5)((function(){return[(0,a._)("button",{class:"button-small",style:(0,r.j5)({background:c.colorTheme}),onClick:e[2]||(e[2]=function(t){return l.report()})},"Надіслати",4)]})),_:1},8,["buttonColor"])}var l=n(1138),u=n(3540),d=(n(1249),n(7941),n(1539),n(1844)),p=n(9284),m=n(1950),k=n(1965),g={components:{modal:p.Z,inputText:m.Z,inputTextarea:k.Z},data:function(){return{colorTheme:localStorage.getItem("colorTheme"),lessonName:localStorage.getItem("lessonName"),reportText:""}},computed:{inputs:function(){var t=this;return Object.keys(this.$refs).map((function(e){return t.$refs[e]}))}},methods:{report:function(){var t=this;return(0,u.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.inputs.map((function(t){return t.v$.$touch()})),t.inputs.some((function(t){return t.v$.$error}))){e.next=7;break}return e.next=4,d.Z.report("Повідомлення про помилку на skywing.online",{lesson:t.lessonName,message:t.reportText});case 4:t.$emit("update:visible",!1),e.next=8;break;case 7:console.log("wooooo");case 8:case"end":return e.stop()}}),e)})))()}}},f=n(8118);const h=(0,f.Z)(g,[["render",c],["__scopeId","data-v-06afc76b"]]);var w=h},6748:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var a=n(6252),r=n(3577),s=function(t){return(0,a.dD)("data-v-60343627"),t=t(),(0,a.Cn)(),t},i=s((function(){return(0,a._)("div",{class:"modal-header"},"Результат",-1)})),o={class:"chart-wrapper relative"},c={class:"chart-percentage"},l=s((function(){return(0,a._)("div",{class:"chart-label"},"правильно",-1)})),u=s((function(){return(0,a._)("br",null,null,-1)})),d={key:0,class:"modal-text"},p=(0,a.Uk)(" середній ");function m(t,e,n,s,m,k){var g=(0,a.up)("chart-doughnut"),f=(0,a.up)("modal");return(0,a.wg)(),(0,a.j4)(f,{modalWidth:"18em"},{content:(0,a.w5)((function(){return[i,(0,a._)("div",o,[(0,a.Wm)(g,{data:[n.percentage,100-n.percentage],colors:[t.mix3(n.percentage),"#00000015"],thickness:5},{default:(0,a.w5)((function(){return[(0,a._)("div",c,(0,r.zw)(n.percentage)+"%",1),l]})),_:1},8,["data","colors"]),n.percentageAvg?((0,a.wg)(),(0,a.j4)(g,{key:0,class:"chart-inset centered",data:[n.percentageAvg,100-n.percentageAvg],colors:[t.mix3(n.percentageAvg),"#00000015"],thickness:2},null,8,["data","colors"])):(0,a.kq)("",!0)]),u,n.percentageAvg?((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Uk)((0,r.zw)(n.percentage>n.percentageAvg?"Оце так!":n.percentage==n.percentageAvg?"Чудово.":"Ви були близько.")+" Ваш результат ",1),(0,a._)("span",{style:(0,r.j5)([{color:n.percentage>=n.percentageAvg?t.mix3(100):t.mix3(n.percentage)},{"font-weight":"bold"}])},(0,r.zw)(n.percentage>n.percentageAvg?"на ".concat(n.percentage-n.percentageAvg,"% вище за"):n.percentage==n.percentageAvg?"такий саме, як":"дещо нижче за"),5),p])):(0,a.kq)("",!0)]})),buttons:(0,a.w5)((function(){return[]})),_:1})}n(9653);var k=n(7925),g=n(9284),f={components:{modal:g.Z,chartDoughnut:k.Z},props:{percentage:{type:Number,required:!0},percentageAvg:{type:Number,required:!1,default:void 0}}},h=n(8118);const w=(0,h.Z)(f,[["render",m],["__scopeId","data-v-60343627"]]);var v=w},8696:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});n(6699),n(2023);var a=n(6252),r=n(9963);function s(t,e,n,s,i,o){var c=(0,a.up)("paginationItem");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.pageMax,(function(e,s){var i;return(0,a.wy)(((0,a.wg)(),(0,a.j4)(c,{key:s,ref_for:!0,ref:"paginationItems",onClick:function(e){return t.$emit("update:page",s)},label:e,wings:[0!=s,s!=n.pageMax-1],color:null!==(i=n.colors[s])&&void 0!==i?i:"gray",shape:"square",width:100/Math.min(n.pageMax,n.pageLimit+1)+"%"},null,8,["onClick","label","wings","color","width"])),[[r.F8,o.pageRange.includes(s)]])})),128)}var i=n(9225),o=(n(9653),n(1539),n(3948),n(7042),n(7327),n(3577)),c={class:"centered number"};function l(t,e,n,r,s,i){return(0,a.wg)(),(0,a.iD)("div",{class:"wrapper flex",style:(0,o.j5)({width:n.width})},[n.wings[0]?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"line centered",style:(0,o.j5)({left:"20%",background:n.color})},null,4)):(0,a.kq)("",!0),n.wings[1]?((0,a.wg)(),(0,a.iD)("span",{key:1,class:"line centered",style:(0,o.j5)({left:"80%",background:n.color})},null,4)):(0,a.kq)("",!0),(0,a._)("input",{class:(0,o.C_)(["centered",n.shape]),type:"radio",name:"radiogroup",ref:"input",style:(0,o.j5)({background:n.color})},null,6),(0,a._)("b",c,(0,o.zw)(n.label+""),1)],4)}var u={props:["label","wings","color","shape","width"],methods:{click:function(){this.$refs.input.click()}}},d=n(8118);const p=(0,d.Z)(u,[["render",l],["__scopeId","data-v-182df7ec"]]);var m=p,k={components:{paginationItem:m},props:{page:{type:Number,required:!0,default:0},pageMax:{type:Number,required:!0,default:0},pageLimit:{type:Number,required:!0,default:1},colors:{type:Array,required:!1,default:[]}},mounted:function(){this.$refs.paginationItems[0].click()},computed:{pageRange:function(){var t=this.page,e=this.pageLimit,n=this.pageMax,a=(0,i.Z)(Array(n).keys());if(n<=e)return a;var r=(e+1)/2;return t<r?a.slice(0,e+1):t>n-r-1?a.slice(n-e-1,n):a.filter((function(e){return Math.abs(e-t)<r}))}},methods:{pageGoto:function(t){this.$refs.paginationItems[t].click()}}};const g=(0,d.Z)(k,[["render",s]]);var f=g},7803:function(t,e,n){"use strict";n.d(e,{Z:function(){return dt}});n(4916),n(5306),n(2222),n(1539);var a=n(6252),r=n(3577),s=n(9963),i=(0,a._)("div",{class:"modal-text"},"Побачивши відповідь, ви вже не зможете робити нових спроб. Все одно продовжити?",-1),o={class:"task-card"},c={class:"task-info"},l={class:"task-index"},u={class:"task-stats"},d=(0,a.Uk)(" •  "),p=["innerHTML"],m={key:0},k=["innerHTML"],g={key:2},f=(0,a._)("br",null,null,-1),h=(0,a._)("span",{class:"tag1",style:{background:"orange"}},"Зверніть увагу",-1),w=(0,a.Uk)("  "),v=["innerHTML"],y=["src"],b={class:"task-section"},_=["innerHTML"],D={class:"task-content"},x={key:0,class:"task-options"},C={class:"task-letter"},q={key:0,class:"task-option"},$=["src"],A={key:1,class:"task-options"},T={class:"task-letter"},Z={key:0,class:"task-option"},M=["src"],I=["src"],H={class:"task-blank"},j={key:0,class:"bar-wrapper"},z=(0,a._)("span",{class:"input-show-correct"},"Показати правильну відповідь",-1),N=[z],S={class:"task-buttons"},V=["disabled"],L={key:0,class:"task-comment"},U=(0,a._)("b",null,"Розв'язок:",-1),W=["innerHTML"],Y=["src"];function B(t,e,n,z,B,K){var R,E,F,P,G,J,O,Q,X,tt=(0,a.up)("modal"),et=(0,a.up)("chart-column"),nt=(0,a.up)("answer-blank");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(tt,{visible:B.modalConfirmationVisible,"onUpdate:visible":e[2]||(e[2]=function(t){return B.modalConfirmationVisible=t}),modalWidth:"26em"},{content:(0,a.w5)((function(){return[i]})),buttons:(0,a.w5)((function(){return[(0,a._)("button",{class:"button-small",style:(0,r.j5)({background:B.colorTheme}),onClick:e[0]||(e[0]=function(t){return K.skip()})},"Продовжити",4),(0,a._)("button",{class:"button-small",style:(0,r.j5)({background:B.colorTheme}),onClick:e[1]||(e[1]=function(t){return B.modalConfirmationVisible=!1})},"Скасувати",4)]})),_:1},8,["visible"]),(0,a._)("div",o,[(0,a._)("div",c,[(0,a._)("i",{class:"task-status material-icons",style:(0,r.j5)({background:K.task.completed?t.mix3(K.task.percentage)+"cc":"#0004"})},(0,r.zw)(K.task.completed?100==K.task.percentage?"done":0==K.task.percentage?"close":"done":"play_arrow"),5),(0,a._)("div",null,[(0,a._)("span",l,"Завдання "+(0,r.zw)(n.taskIndex+1)+" з "+(0,r.zw)(K.lesson.length),1),(0,a._)("div",u,[(0,a._)("span",null,(0,r.zw)(K.task.attempts)+" / "+(0,r.zw)(n.maxAttempts)+" спроб",1),d,(0,a._)("span",null,(0,r.zw)(K.task.completed?K.task.score:0)+" / "+(0,r.zw)(K.task.weight)+" балів",1)])])]),null!==(R=K.task)&&void 0!==R&&R.tip?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:0,class:"task-tip",style:(0,r.j5)({background:t.lighten(B.colorTheme,92)})},[(0,a._)("div",null,[(0,a._)("div",{innerHTML:K.task.tip.text.replace("\n<ul>","\n<br><ul>").replace("\n<ol>","\n<br><ol>")},null,8,p),null!==(E=K.task.tip)&&void 0!==E&&E.formula?((0,a.wg)(),(0,a.iD)("br",m)):(0,a.kq)("",!0),null!==(F=K.task.tip)&&void 0!==F&&F.formula?((0,a.wg)(),(0,a.iD)("div",{key:1,innerHTML:"$$".concat(K.task.tip.formula,"$$")},null,8,k)):(0,a.kq)("",!0),null!==(P=K.task.tip)&&void 0!==P&&P.note?((0,a.wg)(),(0,a.iD)("div",g,[f,h,w,(0,a._)("span",{innerHTML:K.task.tip.note},null,8,v)])):(0,a.kq)("",!0)]),null!==(G=K.task.tip)&&void 0!==G&&G.image?((0,a.wg)(),(0,a.iD)("img",{key:0,src:"".concat(t.$cloudinary,"images/").concat(K.task._id,"t.png")},null,8,y)):(0,a.kq)("",!0)],4)),[[s.F8,n.showTip]]):(0,a.kq)("",!0),(0,a._)("div",b,[(0,a._)("div",{class:"task-text",innerHTML:K.task.text},null,8,_),(0,a._)("div",D,[K.task.items?((0,a.wg)(),(0,a.iD)("div",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(K.task.items,(function(e,n){return(0,a.wg)(),(0,a.iD)("div",{key:n,style:{padding:".55em 0"}},[(0,a._)("span",C,(0,r.zw)(n+1),1),"image"!==e?((0,a.wg)(),(0,a.iD)("span",q,(0,r.zw)(e),1)):((0,a.wg)(),(0,a.iD)("img",{key:1,src:"".concat(t.$cloudinary,"images/").concat(K.task._id,"-").concat(n+1,".png")},null,8,$))])})),128))])):(0,a.kq)("",!0),K.task.options?((0,a.wg)(),(0,a.iD)("div",A,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(K.task.options,(function(e,n){return(0,a.wg)(),(0,a.iD)("div",{key:n,style:{padding:".55em 0"}},[(0,a._)("span",T,(0,r.zw)(String.fromCharCode(1040+n)),1),"image"!==e?((0,a.wg)(),(0,a.iD)("span",Z,(0,r.zw)(e),1)):((0,a.wg)(),(0,a.iD)("img",{key:1,src:"".concat(t.$cloudinary,"images/").concat(K.task._id).concat(String.fromCharCode(97+n),".png")},null,8,M))])})),128))])):(0,a.kq)("",!0),K.task.image?((0,a.wg)(),(0,a.iD)("img",{key:2,class:"task-image",src:"".concat(t.$cloudinary,"images/").concat(K.task._id,".png")},null,8,I)):(0,a.kq)("",!0)]),(0,a._)("div",{class:"task-panel",style:(0,r.j5)({display:K.task.completed&&100==K.task.percentage||K.task.attempts==n.maxAttempts?"flex":"block"})},[(0,a._)("div",H,[(0,a.Wm)(nt,{ref:"answerBlank",type:K.task.type,disabled:K.task.completed,data:K.task.answer,"onUpdate:data":e[3]||(e[3]=function(t){return K.task.answer=t}),correctData:K.task.completed?K.task.key:void 0,showCorrect:K.task.attempts==n.maxAttempts},(0,a.Nv)({_:2},[(0,a.Ko)(K.task.key.length,(function(t){return{name:"label".concat(t),fn:(0,a.w5)((function(){return["radio"==K.task.type&&(K.task.completed&&100==K.task.percentage||K.task.attempts==n.maxAttempts)&&K.task.distribution[t-1].some((function(t){return t>0}))?((0,a.wg)(),(0,a.iD)("div",j,[(0,a.Wm)(et,{data:K.task.distribution[t-1],colors:K.metricsColors(t-1),gap:5},null,8,["data","colors"])])):(0,a.kq)("",!0)]}))}}))]),1032,["type","disabled","data","correctData","showCorrect"]),K.task.completed&&K.task.attempts>0&&K.task.attempts<n.maxAttempts&&K.task.percentage<100?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:e[4]||(e[4]=function(t){return B.modalConfirmationVisible=!0}),style:{"margin-top":".7em"}},N)):(0,a.kq)("",!0),null!==(J=K.task)&&void 0!==J&&J.comment&&!B.showComment&&(K.task.completed&&100==K.task.percentage||K.task.attempts==n.maxAttempts)?((0,a.wg)(),(0,a.iD)("div",{key:1,class:"show-comment",onClick:e[5]||(e[5]=function(t){return B.showComment=!0})}," Натисніть, щоб побачити розв'язок ")):(0,a.kq)("",!0)]),(0,a._)("div",S,[K.task.completed&&K.task.percentage<100&&K.task.attempts<n.maxAttempts?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"button-plain",onClick:e[6]||(e[6]=function(){K.task.completed=!1})},"Нова спроба")):(0,a.kq)("",!0),K.task.completed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"button-plain",disabled:K.answerDisabled,onClick:e[7]||(e[7]=function(t){return K.answer()})},"Відповісти",8,V)),(0,a.WI)(t.$slots,"default")])],4),null!==(O=K.task)&&void 0!==O&&O.comment?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",L,[U,(0,a._)("span",{innerHTML:null===(Q=K.task.comment)||void 0===Q?void 0:Q.text},null,8,W),null!==(X=K.task.comment)&&void 0!==X&&X.image?((0,a.wg)(),(0,a.iD)("img",{key:0,src:"".concat(t.$cloudinary,"images/").concat(K.task._id,"s.png")},null,8,Y)):(0,a.kq)("",!0)],512)),[[s.F8,B.showComment]]):(0,a.kq)("",!0)])])],64)}n(9653),n(1249),n(1844);var K=n(9284),R={class:"task-tab"},E={key:0,class:"task-answer-row"},F={key:1,class:"task-answer-title"},P={key:0,class:"task-answer-row"},G=["name","disabled","onUpdate:modelValue","value"],J={key:1},O=["disabled","onUpdate:modelValue"],Q={key:0,class:"task-correct-answer"},X=(0,a.Uk)(" Правильна відповідь: "),tt={key:0,class:"input-error-message"};function et(t,e,n,i,o,c){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",R,["radio"==n.type?((0,a.wg)(),(0,a.iD)("div",E,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(5,(function(t){return(0,a._)("span",{class:"task-answer-letter",key:t},(0,r.zw)(String.fromCharCode(1039+t)),1)})),64))])):(0,a.kq)("",!0),"input"==n.type?((0,a.wg)(),(0,a.iD)("div",F,"Відповідь:")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.data.length,(function(e){return(0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.WI)(t.$slots,"label"+e,{},void 0,!0),"radio"==n.type?((0,a.wg)(),(0,a.iD)("div",P,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(5,(function(t){return(0,a.wy)((0,a._)("input",{key:t,type:"radio",name:e,class:"task-answer-cell",disabled:n.disabled,"onUpdate:modelValue":function(t){return c.dataModel[e-1]=t},value:String.fromCharCode(1039+t),style:(0,r.j5)({borderColor:c.cellColor(e-1,t-1)})},null,12,G),[[s.G2,c.dataModel[e-1]]])})),64))])):(0,a.kq)("",!0),"input"==n.type?((0,a.wg)(),(0,a.iD)("div",J,[(0,a.wy)((0,a._)("input",{type:"text",class:"task-answer-input",disabled:n.disabled,"onUpdate:modelValue":function(t){return c.dataModel[e-1]=t},style:(0,r.j5)({borderColor:c.inputColor(e-1)})},null,12,O),[[s.nr,c.dataModel[e-1]]]),n.showCorrect?((0,a.wg)(),(0,a.iD)("div",Q,[X,(0,a._)("b",null,(0,r.zw)(n.correctData[e-1]),1)])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])})),128))]),o.v$.$invalid?((0,a.wg)(),(0,a.iD)("div",tt," Неправильний формат відповіді ")):(0,a.kq)("",!0)],64)}n(7601);var nt=n(4028),at=n(1800),rt=function(t){return t.every((function(t){return/^\-?\d{1,4}(\,\d{1,2})?$/.test(t)}))},st={components:{chartColumn:at.Z},props:{data:{type:Array,required:!0},correctData:{type:Array,required:!1},type:{type:String,required:!0,default:"radio"},disabled:{type:Boolean,required:!1,default:!1},showCorrect:{type:Boolean,required:!1,default:!1}},data:function(){return{v$:(0,nt.ZP)()}},computed:{dataModel:function(){return this.data}},validations:function(){if("radio"!==this.type&&this.data.some((function(t){return!!t})))return{dataModel:{format:rt}}},methods:{cellColor:function(t,e){return this.correctData?this.correctData[t]==String.fromCharCode(1040+e)&&this.data[t]==String.fromCharCode(1040+e)?this.$green:this.showCorrect&&this.correctData[t]==String.fromCharCode(1040+e)?this.$green+"aa":this.data[t]==String.fromCharCode(1040+e)?this.$red:"#0004":"gray"},inputColor:function(t){return this.correctData?this.correctData[t]==this.data[t]?this.$green:this.$red:"#0004"}}},it=n(8118);const ot=(0,it.Z)(st,[["render",et],["__scopeId","data-v-8c381386"]]);var ct=ot,lt={components:{modal:K.Z,answerBlank:ct,chartColumn:at.Z},props:{taskIndex:{type:Number,required:!0,default:0},maxAttempts:{type:Number,required:!1,default:2},showTip:{type:Boolean,required:!1,default:!0}},emits:["answer","skip"],data:function(){return{showComment:!1,modalConfirmationVisible:!1,colorTheme:localStorage.getItem("colorTheme")}},computed:{lesson:function(){return this.$store.state.tasks},task:function(){return this.lesson[this.taskIndex]},answerDisabled:function(){return!this.task.answered||this.$refs.answerBlank.v$.$invalid},tipText:function(){return this.task.tip.text.re}},watch:{taskIndex:function(t){this.showComment=!1,this.$nextTick((function(t){return MathJax.Hub.Queue(["Typeset",MathJax.Hub])}))}},methods:{metricsColors:function(t){var e=this;return["А","Б","В","Г","Д"].map((function(n){return n==e.task.key[t]?e.$green:n==e.task.answer[t]?e.$red:"#0004"}))},answer:function(){this.$emit("answer",{taskId:this.task._id,answer:this.task.answer,score:this.task.score,scoreMax:this.task.weight}),this.task.completed=!0,this.task.attempts++},skip:function(){this.$emit("skip",this.task._id),this.task.completed=!0,this.task.attempts++,this.modalConfirmationVisible=!1}}};const ut=(0,it.Z)(lt,[["render",B]]);var dt=ut},4964:function(t,e,n){var a=n(5112),r=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(a){}}return!1}},7850:function(t,e,n){var a=n(111),r=n(4326),s=n(5112),i=s("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},3929:function(t,e,n){var a=n(7854),r=n(7850),s=a.TypeError;t.exports=function(t){if(r(t))throw s("The method doesn't accept regular expressions");return t}},6699:function(t,e,n){"use strict";var a=n(2109),r=n(1318).includes,s=n(7293),i=n(1223),o=s((function(){return!Array(1).includes()}));a({target:"Array",proto:!0,forced:o},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},2023:function(t,e,n){"use strict";var a=n(2109),r=n(1702),s=n(3929),i=n(4488),o=n(1340),c=n(4964),l=r("".indexOf);a({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~l(o(i(this)),o(s(t)),arguments.length>1?arguments[1]:void 0)}})},9225:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var a=n(9914);function r(t){if(Array.isArray(t))return(0,a.Z)(t)}n(2526),n(1817),n(1539),n(2165),n(8783),n(3948),n(1038);function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=n(6726);n(1703);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||s(t)||(0,i.Z)(t)||o()}}}]);
//# sourceMappingURL=528-legacy.69892530.js.map