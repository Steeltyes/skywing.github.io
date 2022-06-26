"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[358],{5560:function(e,t,l){l.d(t,{Z:function(){return g}});var a=l(6252),r=l(3577);const i=["value"],n={key:0},u={key:0,class:"input-error-message"},s={key:1,class:"input-error-message"};function d(e,t,l,d,o,m){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("input",{type:"text",class:(0,r.C_)(["input-textfield-line",{"input-textfield-invalid":o.v$.modelValue.$error}]),value:l.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value.trim())),placeholder:"Ваш email"},null,42,i),o.v$.modelValue.$error?((0,a.wg)(),(0,a.iD)("div",n,[o.v$.modelValue.required.$invalid?((0,a.wg)(),(0,a.iD)("div",u,"Поле має бути заповнене")):(0,a.kq)("",!0),o.v$.modelValue.email.$invalid?((0,a.wg)(),(0,a.iD)("div",s,"Некоректний формат")):(0,a.kq)("",!0)])):(0,a.kq)("",!0)],64)}var o=l(4028),m=l(2587),p={props:{modelValue:{type:String,required:!1,default:""}},data(){return{v$:(0,o.ZP)()}},validations(){return{modelValue:{required:m.C1,email:m.Do}}}},v=l(8118);const c=(0,v.Z)(p,[["render",d]]);var g=c},3252:function(e,t,l){l.d(t,{Z:function(){return f}});var a=l(6252),r=l(3577);const i={class:"relative"},n=["type","value"],u={key:0},s={key:0,class:"input-error-message"},d={key:1,class:"input-error-message"};function o(e,t,l,o,m,p){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",i,[(0,a._)("input",{type:m.passwordVisible?"text":"password",class:(0,r.C_)(["input-textfield-line",{"input-textfield-invalid":m.v$.modelValue.$error}]),placeholder:"Ваш пароль",maxlength:"32",value:l.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value.trim()))},null,42,n),(0,a._)("span",{class:"material-icons-outlined centered",style:{left:"92%"},onClick:t[1]||(t[1]=e=>m.passwordVisible=!m.passwordVisible)},(0,r.zw)(m.passwordVisible?"visibility":"visibility_off"),1)]),m.v$.modelValue.$error?((0,a.wg)(),(0,a.iD)("div",u,[m.v$.modelValue.required.$invalid?((0,a.wg)(),(0,a.iD)("div",s,"Поле має бути заповнене")):(0,a.kq)("",!0),m.v$.modelValue.minLength.$invalid?((0,a.wg)(),(0,a.iD)("div",d,"Пароль має бути довшим за "+(0,r.zw)(m.v$.modelValue.minLength.$params.min)+" символів",1)):(0,a.kq)("",!0)])):(0,a.kq)("",!0)],64)}var m=l(4028),p=l(2587),v={props:{modelValue:{type:String,required:!1,default:""},minimalLength:{type:[String,Number],required:!1,default:6}},data(){return{v$:(0,m.ZP)(),passwordVisible:!1}},validations(){return{modelValue:{required:p.C1,minLength:(0,p.Ei)(this.minimalLength)}}}},c=l(8118);const g=(0,c.Z)(v,[["render",o]]);var f=g},4513:function(e,t,l){l.d(t,{Z:function(){return v}});var a=l(6252),r=l(3577);const i=["value","placeholder"],n={key:0,class:"input-error-message"};function u(e,t,l,u,s,d){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("input",{type:"text",class:(0,r.C_)(["input-textfield-line",{"input-textfield-invalid":s.v$.modelValue.$error}]),value:l.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value.trim())),placeholder:l.placeholder},null,42,i),s.v$.modelValue.$error?((0,a.wg)(),(0,a.iD)("div",n,"Поле має бути заповнене")):(0,a.kq)("",!0)],64)}var s=l(4028),d=l(2587),o={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data(){return{v$:(0,s.ZP)()}},validations(){return{modelValue:{required:d.C1}}}},m=l(8118);const p=(0,m.Z)(o,[["render",u]]);var v=p},358:function(e,t,l){l.r(t),l.d(t,{default:function(){return y}});var a=l(6252),r=l(9963);const i=e=>((0,a.dD)("data-v-709d6706"),e=e(),(0,a.Cn)(),e),n=i((()=>(0,a._)("div",{class:"background"},null,-1))),u={class:"auth-form"},s=i((()=>(0,a._)("div",{class:"material-icons-outlined auth-icon"},"account_circle",-1))),d=i((()=>(0,a._)("h2",null,"РЕЄСТРАЦІЯ",-1))),o=i((()=>(0,a._)("button",{type:"submit",class:"button-plain auth-button"},"Створити акаунт",-1))),m=(0,a.Uk)("Вже маєте акаунт? "),p=(0,a.Uk)("Увійти!");function v(e,t,l,i,v,c){const g=(0,a.up)("input-text"),f=(0,a.up)("input-email"),V=(0,a.up)("input-password"),h=(0,a.up)("router-link"),$=(0,a.up)("auth-layout");return(0,a.wg)(),(0,a.j4)($,null,{default:(0,a.w5)((()=>[n,(0,a._)("div",u,[(0,a._)("form",{onSubmit:t[3]||(t[3]=(0,r.iM)((e=>c.register()),["prevent"]))},[s,d,(0,a.Wm)(g,{modelValue:v.username,"onUpdate:modelValue":t[0]||(t[0]=e=>v.username=e),placeholder:"Ваш логін",ref:"username"},null,8,["modelValue"]),(0,a.Wm)(f,{modelValue:v.email,"onUpdate:modelValue":t[1]||(t[1]=e=>v.email=e),ref:"email"},null,8,["modelValue"]),(0,a.Wm)(V,{modelValue:v.password,"onUpdate:modelValue":t[2]||(t[2]=e=>v.password=e),ref:"password"},null,8,["modelValue"]),o,(0,a._)("small",null,[m,(0,a.Wm)(h,{to:"/auth"},{default:(0,a.w5)((()=>[p])),_:1})])],32)])])),_:1})}var c=l(6514),g=l(4513),f=l(5560),V=l(3252),h={components:{authLayout:c.Z,inputText:g.Z,inputEmail:f.Z,inputPassword:V.Z},data(){return{username:"",email:"",password:""}},computed:{inputs(){return Object.keys(this.$refs).map((e=>this.$refs[e]))}},methods:{async register(){this.inputs.map((e=>e.v$.$touch())),this.inputs.some((e=>e.v$.$error))||(await this.$store.dispatch("reg",{username:this.username,email:this.email,password:this.password}),this.$gtag.event("reg",{event_category:"conversion",event_label:"New registration",value:1}))}}},$=l(8118);const w=(0,$.Z)(h,[["render",v],["__scopeId","data-v-709d6706"]]);var y=w}}]);
//# sourceMappingURL=358.c3748f47.js.map