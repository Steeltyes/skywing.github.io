(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[522],{5560:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});t(3210);var r=t(6252),u=t(3577),i=["value"],a={key:0},l={key:0,class:"input-error-message"},o={key:1,class:"input-error-message"};function c(n,e,t,c,s,d){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("input",{type:"text",class:(0,u.C_)(["input-textfield-line",{"input-textfield-invalid":s.v$.modelValue.$error}]),value:t.modelValue,onInput:e[0]||(e[0]=function(e){return n.$emit("update:modelValue",e.target.value.trim())}),placeholder:"Ваш email"},null,42,i),s.v$.modelValue.$error?((0,r.wg)(),(0,r.iD)("div",a,[s.v$.modelValue.required.$invalid?((0,r.wg)(),(0,r.iD)("div",l,"Поле має бути заповнене")):(0,r.kq)("",!0),s.v$.modelValue.email.$invalid?((0,r.wg)(),(0,r.iD)("div",o,"Некоректний формат")):(0,r.kq)("",!0)])):(0,r.kq)("",!0)],64)}var s=t(4028),d=t(2587),f={props:{modelValue:{type:String,required:!1,default:""}},data:function(){return{v$:(0,s.ZP)()}},validations:function(){return{modelValue:{required:d.C1,email:d.Do}}}},m=t(8118);const v=(0,m.Z)(f,[["render",c]]);var p=v},4522:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return V}});var r=t(6252),u=function(n){return(0,r.dD)("data-v-dac31252"),n=n(),(0,r.Cn)(),n},i=u((function(){return(0,r._)("div",{class:"background"},null,-1)})),a={class:"auth-form"},l=u((function(){return(0,r._)("div",{class:"material-icons-outlined auth-icon"},"mark_email_unread",-1)})),o=u((function(){return(0,r._)("h2",null,"Підтвердження пошти",-1)})),c=u((function(){return(0,r._)("p",null,"На ваш email було відправлено лист з посиланням. Перейдіть за посиланням з листа, аби завершити активацію",-1)})),s={key:0},d=(0,r.Uk)("Лист не надійшов? "),f=u((function(){return(0,r._)("span",{class:"link2"},"Надіслати повторно",-1)})),m=[d,f],v={key:1};function p(n,e,t,u,d,f){var p=(0,r.up)("input-email"),k=(0,r.up)("auth-layout");return(0,r.wg)(),(0,r.j4)(k,null,{default:(0,r.w5)((function(){return[i,(0,r._)("div",a,[l,o,c,d.showRetry?((0,r.wg)(),(0,r.iD)("div",v,[(0,r.Wm)(p,{modelValue:d.email,"onUpdate:modelValue":e[2]||(e[2]=function(n){return d.email=n}),ref:"email"},null,8,["modelValue"]),(0,r._)("button",{type:"submit",class:"button-plain",onClick:e[3]||(e[3]=function(n){return f.confirm()})},"Надіслати повторно")])):((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("button",{class:"button-plain",onClick:e[0]||(e[0]=function(e){return n.$router.push("/")})},"На головну"),(0,r._)("small",{onClick:e[1]||(e[1]=function(n){return d.showRetry=!0})},m)]))])]})),_:1})}var k=t(1138),h=t(3540),g=t(1844),$=t(9157),w=t(5560),_={components:{authLayout:$.Z,inputEmail:w.Z},data:function(){return{showRetry:!1,email:""}},methods:{confirm:function(){var n=this;return(0,h.Z)((0,k.Z)().mark((function e(){return(0,k.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.$refs.email.v$.$touch(),n.$refs.email.v$.$error){e.next=4;break}return e.next=4,g.Z.resendActivationLink(n.email);case 4:case"end":return e.stop()}}),e)})))()}}},y=t(8118);const x=(0,y.Z)(_,[["render",p],["__scopeId","data-v-dac31252"]]);var V=x},6091:function(n,e,t){var r=t(6530).PROPER,u=t(7293),i=t(1361),a="​᠎";n.exports=function(n){return u((function(){return!!i[n]()||a[n]()!==a||r&&i[n].name!==n}))}},3111:function(n,e,t){var r=t(1702),u=t(4488),i=t(1340),a=t(1361),l=r("".replace),o="["+a+"]",c=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),d=function(n){return function(e){var t=i(u(e));return 1&n&&(t=l(t,c,"")),2&n&&(t=l(t,s,"")),t}};n.exports={start:d(1),end:d(2),trim:d(3)}},1361:function(n){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},3210:function(n,e,t){"use strict";var r=t(2109),u=t(3111).trim,i=t(6091);r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return u(this)}})}}]);
//# sourceMappingURL=522-legacy.6ba652a5.js.map