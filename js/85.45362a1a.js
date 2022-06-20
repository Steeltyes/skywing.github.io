"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[85],{5560:function(e,l,t){t.d(l,{Z:function(){return f}});var a=t(6252),i=t(3577);const r=["value"],u={key:0},n={key:0,class:"input-error-message"},s={key:1,class:"input-error-message"};function d(e,l,t,d,o,m){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("input",{type:"text",class:(0,i.C_)(["input-textfield-line",{"input-textfield-invalid":o.v$.modelValue.$error}]),value:t.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value.trim())),placeholder:"Ваш email"},null,42,r),o.v$.modelValue.$error?((0,a.wg)(),(0,a.iD)("div",u,[o.v$.modelValue.required.$invalid?((0,a.wg)(),(0,a.iD)("div",n,"Поле має бути заповнене")):(0,a.kq)("",!0),o.v$.modelValue.email.$invalid?((0,a.wg)(),(0,a.iD)("div",s,"Некоректний формат")):(0,a.kq)("",!0)])):(0,a.kq)("",!0)],64)}var o=t(4028),m=t(2587),p={props:{modelValue:{type:String,required:!1,default:""}},data(){return{v$:(0,o.ZP)()}},validations(){return{modelValue:{required:m.C1,email:m.Do}}}},c=t(8118);const v=(0,c.Z)(p,[["render",d]]);var f=v},3252:function(e,l,t){t.d(l,{Z:function(){return V}});var a=t(6252),i=t(3577);const r={class:"relative"},u=["type","value"],n={key:0},s={key:0,class:"input-error-message"},d={key:1,class:"input-error-message"};function o(e,l,t,o,m,p){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",r,[(0,a._)("input",{type:m.passwordVisible?"text":"password",class:(0,i.C_)(["input-textfield-line",{"input-textfield-invalid":m.v$.modelValue.$error}]),placeholder:"Ваш пароль",maxlength:"32",value:t.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value.trim()))},null,42,u),(0,a._)("span",{class:"material-icons-outlined centered",style:{left:"92%"},onClick:l[1]||(l[1]=e=>m.passwordVisible=!m.passwordVisible)},(0,i.zw)(m.passwordVisible?"visibility":"visibility_off"),1)]),m.v$.modelValue.$error?((0,a.wg)(),(0,a.iD)("div",n,[m.v$.modelValue.required.$invalid?((0,a.wg)(),(0,a.iD)("div",s,"Поле має бути заповнене")):(0,a.kq)("",!0),m.v$.modelValue.minLength.$invalid?((0,a.wg)(),(0,a.iD)("div",d,"Пароль має бути довшим за "+(0,i.zw)(m.v$.modelValue.minLength.$params.min)+" символів",1)):(0,a.kq)("",!0)])):(0,a.kq)("",!0)],64)}var m=t(4028),p=t(2587),c={props:{modelValue:{type:String,required:!1,default:""},minimalLength:{type:[String,Number],required:!1,default:6}},data(){return{v$:(0,m.ZP)(),passwordVisible:!1}},validations(){return{modelValue:{required:p.C1,minLength:(0,p.Ei)(this.minimalLength)}}}},v=t(8118);const f=(0,v.Z)(c,[["render",o]]);var V=f},4513:function(e,l,t){t.d(l,{Z:function(){return c}});var a=t(6252),i=t(3577);const r=["value","placeholder"],u={key:0,class:"input-error-message"};function n(e,l,t,n,s,d){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("input",{type:"text",class:(0,i.C_)(["input-textfield-line",{"input-textfield-invalid":s.v$.modelValue.$error}]),value:t.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value.trim())),placeholder:t.placeholder},null,42,r),s.v$.modelValue.$error?((0,a.wg)(),(0,a.iD)("div",u,"Поле має бути заповнене")):(0,a.kq)("",!0)],64)}var s=t(4028),d=t(2587),o={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data(){return{v$:(0,s.ZP)()}},validations(){return{modelValue:{required:d.C1}}}},m=t(8118);const p=(0,m.Z)(o,[["render",n]]);var c=p},8085:function(e,l,t){t.r(l),t.d(l,{default:function(){return y}});var a=t(6252),i=t(9963);const r=e=>((0,a.dD)("data-v-a3246c7e"),e=e(),(0,a.Cn)(),e),u=r((()=>(0,a._)("div",{class:"background"},null,-1))),n=r((()=>(0,a._)("div",{class:"filter"},null,-1))),s={class:"auth-form"},d=r((()=>(0,a._)("div",{class:"material-icons-outlined auth-icon"},"account_circle",-1))),o=r((()=>(0,a._)("h2",null,"РЕЄСТРАЦІЯ",-1))),m=r((()=>(0,a._)("button",{type:"submit",class:"button-plain"},"Створити акаунт",-1))),p=(0,a.Uk)("Вже маєте акаунт? "),c=(0,a.Uk)("Увійти!");function v(e,l,t,r,v,f){const V=(0,a.up)("input-text"),g=(0,a.up)("input-email"),$=(0,a.up)("input-password"),h=(0,a.up)("router-link"),w=(0,a.up)("auth-layout");return(0,a.wg)(),(0,a.j4)(w,null,{default:(0,a.w5)((()=>[u,n,(0,a._)("div",s,[(0,a._)("form",{onSubmit:l[3]||(l[3]=(0,i.iM)((e=>f.register()),["prevent"]))},[d,o,(0,a.Wm)(V,{modelValue:v.username,"onUpdate:modelValue":l[0]||(l[0]=e=>v.username=e),placeholder:"Ваш логін",ref:"username"},null,8,["modelValue"]),(0,a.Wm)(g,{modelValue:v.email,"onUpdate:modelValue":l[1]||(l[1]=e=>v.email=e),ref:"email"},null,8,["modelValue"]),(0,a.Wm)($,{modelValue:v.password,"onUpdate:modelValue":l[2]||(l[2]=e=>v.password=e),ref:"password"},null,8,["modelValue"]),m,(0,a._)("small",null,[p,(0,a.Wm)(h,{to:"/auth"},{default:(0,a.w5)((()=>[c])),_:1})])],32)])])),_:1})}var f=t(9478),V=t(4513),g=t(5560),$=t(3252),h={components:{authLayout:f.Z,inputText:V.Z,inputEmail:g.Z,inputPassword:$.Z},data(){return{username:"",email:"",password:""}},computed:{inputs(){return Object.keys(this.$refs).map((e=>this.$refs[e]))}},methods:{async register(){this.inputs.map((e=>e.v$.$touch())),this.inputs.some((e=>e.v$.$error))||await this.$store.dispatch("reg",{username:this.username,email:this.email,password:this.password})}}},w=t(8118);const k=(0,w.Z)(h,[["render",v],["__scopeId","data-v-a3246c7e"]]);var y=k}}]);
//# sourceMappingURL=85.45362a1a.js.map