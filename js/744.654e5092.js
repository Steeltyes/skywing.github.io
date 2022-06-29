"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[744],{3252:function(e,t,a){a.d(t,{Z:function(){return w}});var i=a(6252),l=a(3577);const n={class:"relative"},r=["type","value"],s={key:0},u={key:0,class:"input-error-message"},o={key:1,class:"input-error-message"};function d(e,t,a,d,m,p){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",n,[(0,i._)("input",{type:m.passwordVisible?"text":"password",class:(0,l.C_)(["input-textfield-line",{"input-textfield-invalid":m.v$.modelValue.$error}]),placeholder:"Ваш пароль",maxlength:"32",value:a.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value.trim()))},null,42,r),(0,i._)("span",{class:"material-icons-outlined centered",style:{left:"92%"},onClick:t[1]||(t[1]=e=>m.passwordVisible=!m.passwordVisible)},(0,l.zw)(m.passwordVisible?"visibility":"visibility_off"),1)]),m.v$.modelValue.$error?((0,i.wg)(),(0,i.iD)("div",s,[m.v$.modelValue.required.$invalid?((0,i.wg)(),(0,i.iD)("div",u,"Поле має бути заповнене")):(0,i.kq)("",!0),m.v$.modelValue.minLength.$invalid?((0,i.wg)(),(0,i.iD)("div",o,"Пароль має бути довшим за "+(0,l.zw)(m.v$.modelValue.minLength.$params.min)+" символів",1)):(0,i.kq)("",!0)])):(0,i.kq)("",!0)],64)}var m=a(4028),p=a(2587),c={props:{modelValue:{type:String,required:!1,default:""},minimalLength:{type:[String,Number],required:!1,default:6}},data(){return{v$:(0,m.ZP)(),passwordVisible:!1}},validations(){return{modelValue:{required:p.C1,minLength:(0,p.Ei)(this.minimalLength)}}}},v=a(8118);const h=(0,v.Z)(c,[["render",d]]);var w=h},3744:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var i=a(6252),l=a(9963);const n={class:"auth-form"},r=(0,i._)("div",{class:"material-icons-outlined auth-icon"},"account_circle",-1),s=(0,i._)("h2",null,"РЕЄСТРАЦІЯ",-1),u=(0,i._)("button",{type:"submit",class:"button-plain auth-button"},"Створити акаунт",-1),o=(0,i.Uk)("Вже маєте акаунт? "),d=(0,i.Uk)("Увійти!");function m(e,t,a,m,p,c){const v=(0,i.up)("input-text"),h=(0,i.up)("input-email"),w=(0,i.up)("input-password"),g=(0,i.up)("router-link"),f=(0,i.up)("auth-layout");return(0,i.wg)(),(0,i.j4)(f,null,{default:(0,i.w5)((()=>[(0,i._)("div",n,[(0,i._)("form",{onSubmit:t[3]||(t[3]=(0,l.iM)((e=>c.register()),["prevent"]))},[r,s,(0,i.Wm)(v,{modelValue:p.username,"onUpdate:modelValue":t[0]||(t[0]=e=>p.username=e),placeholder:"Ваш логін",ref:"username"},null,8,["modelValue"]),(0,i.Wm)(h,{modelValue:p.email,"onUpdate:modelValue":t[1]||(t[1]=e=>p.email=e),ref:"email"},null,8,["modelValue"]),(0,i.Wm)(w,{modelValue:p.password,"onUpdate:modelValue":t[2]||(t[2]=e=>p.password=e),ref:"password"},null,8,["modelValue"]),u,(0,i._)("small",null,[o,(0,i.Wm)(g,{to:"/auth"},{default:(0,i.w5)((()=>[d])),_:1})])],32)])])),_:1})}var p=a(5468),c=a(4513),v=a(5560),h=a(3252),w={components:{authLayout:p.Z,inputText:c.Z,inputEmail:v.Z,inputPassword:h.Z},data(){return{username:"",email:"",password:""}},computed:{inputs(){return Object.keys(this.$refs).map((e=>this.$refs[e]))}},methods:{async register(){this.inputs.map((e=>e.v$.$touch())),this.inputs.some((e=>e.v$.$error))||(await this.$store.dispatch("reg",{username:this.username,email:this.email,password:this.password}),this.$gtag.event("reg",{event_category:"conversion",event_label:"New registration",value:1}))}}},g=a(8118);const f=(0,g.Z)(w,[["render",m]]);var V=f}}]);
//# sourceMappingURL=744.654e5092.js.map