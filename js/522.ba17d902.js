"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[522],{5560:function(e,a,l){l.d(a,{Z:function(){return k}});var t=l(6252),i=l(3577);const n=["value"],u={key:0},r={key:0,class:"input-error-message"},o={key:1,class:"input-error-message"};function d(e,a,l,d,s,c){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("input",{type:"text",class:(0,i.C_)(["input-textfield-line",{"input-textfield-invalid":s.v$.modelValue.$error}]),value:l.modelValue,onInput:a[0]||(a[0]=a=>e.$emit("update:modelValue",a.target.value.trim())),placeholder:"Ваш email"},null,42,n),s.v$.modelValue.$error?((0,t.wg)(),(0,t.iD)("div",u,[s.v$.modelValue.required.$invalid?((0,t.wg)(),(0,t.iD)("div",r,"Поле має бути заповнене")):(0,t.kq)("",!0),s.v$.modelValue.email.$invalid?((0,t.wg)(),(0,t.iD)("div",o,"Некоректний формат")):(0,t.kq)("",!0)])):(0,t.kq)("",!0)],64)}var s=l(4028),c=l(2587),m={props:{modelValue:{type:String,required:!1,default:""}},data(){return{v$:(0,s.ZP)()}},validations(){return{modelValue:{required:c.C1,email:c.Do}}}},v=l(8118);const p=(0,v.Z)(m,[["render",d]]);var k=p},4522:function(e,a,l){l.r(a),l.d(a,{default:function(){return y}});var t=l(6252);const i=e=>((0,t.dD)("data-v-dac31252"),e=e(),(0,t.Cn)(),e),n=i((()=>(0,t._)("div",{class:"background"},null,-1))),u={class:"auth-form"},r=i((()=>(0,t._)("div",{class:"material-icons-outlined auth-icon"},"mark_email_unread",-1))),o=i((()=>(0,t._)("h2",null,"Підтвердження пошти",-1))),d=i((()=>(0,t._)("p",null,"На ваш email було відправлено лист з посиланням. Перейдіть за посиланням з листа, аби завершити активацію",-1))),s={key:0},c=(0,t.Uk)("Лист не надійшов? "),m=i((()=>(0,t._)("span",{class:"link2"},"Надіслати повторно",-1))),v=[c,m],p={key:1};function k(e,a,l,i,c,m){const k=(0,t.up)("input-email"),f=(0,t.up)("auth-layout");return(0,t.wg)(),(0,t.j4)(f,null,{default:(0,t.w5)((()=>[n,(0,t._)("div",u,[r,o,d,c.showRetry?((0,t.wg)(),(0,t.iD)("div",p,[(0,t.Wm)(k,{modelValue:c.email,"onUpdate:modelValue":a[2]||(a[2]=e=>c.email=e),ref:"email"},null,8,["modelValue"]),(0,t._)("button",{type:"submit",class:"button-plain",onClick:a[3]||(a[3]=e=>m.confirm())},"Надіслати повторно")])):((0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("button",{class:"button-plain",onClick:a[0]||(a[0]=a=>e.$router.push("/"))},"На головну"),(0,t._)("small",{onClick:a[1]||(a[1]=e=>c.showRetry=!0)},v)]))])])),_:1})}var f=l(1844),h=l(8263),$=l(5560),_={components:{authLayout:h.Z,inputEmail:$.Z},data(){return{showRetry:!1,email:""}},methods:{async confirm(){this.$refs.email.v$.$touch(),this.$refs.email.v$.$error||await f.Z.resendActivationLink(this.email)}}},g=l(8118);const w=(0,g.Z)(_,[["render",k],["__scopeId","data-v-dac31252"]]);var y=w}}]);
//# sourceMappingURL=522.ba17d902.js.map