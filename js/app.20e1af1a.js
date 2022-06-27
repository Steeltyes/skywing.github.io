(function(){var e={1844:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(9669),a=n.n(o),r=n(7669),s=n(986);const i=a().create({baseURL:"https://skywing.site",withCredentials:!0,headers:{"Content-Type":"application/json"}});let l;i.interceptors.request.use((e=>{l=setTimeout((()=>r.Z.commit("showLoader",!0)),1e3);const t=localStorage.getItem("access");return t&&(e.headers.auth=`Bearer ${t}`),e}),(e=>(clearTimeout(l),r.Z.commit("showLoader",!1),Promise.reject(e)))),i.interceptors.response.use((e=>(clearTimeout(l),r.Z.commit("showLoader",!1),202==e?.status&&r.Z.commit("showMessage",{width:"min(20em, 80%)",color:"#4da64d",icon:"done",title:"Успішно",text:e?.data?.message}),e)),(async e=>{if(clearTimeout(l),r.Z.commit("showLoader",!1),403==e.response?.status)s.Z.push("confirm");else{if(401==e.response?.status&&e.config){try{const t=localStorage.getItem("refresh");if(t){const t=await a().get("https://skywing.site/refresh",{headers:{refresh:localStorage.getItem("refresh")},withCredentials:!0});return localStorage.setItem("access",t.data?.accessToken),localStorage.setItem("refresh",t.data?.refreshToken),i.request(e.config)}r.Z.commit("showMessage",{width:"min(23em, 80%)",color:"black",text:"\n            <br/>\n            <div class=\"material-icons-outlined auth-icon\">account_circle</div>\n            <h2>Створення профіля</h2>\n            <p class='auth-text'>\n              Наразі ви переглядаєте сторінку у гостьовому режимі. Зареєструйтесь, \n              щоб відкрити повний доступ до сайту\n            </p>\n            <button class='button-plain auth-button' onclick=\"location.href='/reg'\">Реєстрація</button>\n            <small>Вже зареєстровані? <a href='/auth'>Увійти!</a></small>\n            <br/>\n          "})}catch(t){s.Z.push("auth")}throw e}r.Z.commit("showMessage",{color:"#ff4d4d",title:"Помилка",icon:e.response?.data?.icon||"hourglass_empty",text:e.response?.data?.message||"Немає зв'язку із сервером. Спробуйте зайти пізніше"})}return Promise.reject(e)}));var u=i,c={async reg(e,t,n){return u.post("reg",{username:e,email:t,password:n})},async login(e,t){return u.post("login",{username:e,password:t})},async logout(){u.post("logout")},async resendActivationLink(e){u.post("resend-activation-link",{email:e})},async requestPasswordRenewal(e){u.post("request-password-renewal",{email:e})},async renewPassword(e,t){u.post("renew-password",{password:e,activationLink:t})},async report(e,t){u.post("report",{topic:e,obj:t})},async getModules(){return u.get("modules")},async getLessons(e){return u.get(`lessons/${e}`)},async getTasks(e){return u.get(`tasks/${e}`)},async postAnswer(e,t,n,o,a,r,s){return u.post("answer",{moduleId:e,blockId:t,lessonId:n,taskId:o,answer:a,score:r,scoreMax:s})},async getStats(){return u.get("stats")},async getRating(){return u.get("rating")}}},2:function(e,t,n){"use strict";var o=n(9963),a=n(6252),r=n(3577);const s={class:"modal-header"},i=["innerHTML"];function l(e,t,n,o,l,u){const c=(0,a.up)("loader"),d=(0,a.up)("modal"),m=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e.$store.state.loaderVisible?((0,a.wg)(),(0,a.j4)(c,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(d,{visible:e.$store.state.modal.visible,"onUpdate:visible":t[0]||(t[0]=t=>e.$store.state.modal.visible=t),modalWidth:e.$store.state.modal.width},{content:(0,a.w5)((()=>[e.$store.state.modal.icon?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"material-icons-outlined modal-icon",style:(0,r.j5)({color:e.$store.state.modal.color})},(0,r.zw)(e.$store.state.modal.icon),5)):(0,a.kq)("",!0),(0,a._)("div",s,(0,r.zw)(e.$store.state.modal.title),1),(0,a._)("div",{class:"modal-text",innerHTML:e.$store.state.modal.text},null,8,i)])),_:1},8,["visible","modalWidth"]),(0,a.Wm)(m)],64)}const u={class:"underlay flex"},c=(0,a._)("div",{class:"lds-ripple"},[(0,a._)("div"),(0,a._)("div")],-1),d=[c];function m(e,t){return(0,a.wg)(),(0,a.iD)("div",u,d)}var p=n(8118);const g={},f=(0,p.Z)(g,[["render",m]]);var h=f,v=n(4902);function b(e,t){return(0,a.WI)(e.$slots,"default")}const y={},w=(0,p.Z)(y,[["render",b]]);var k=w,A=n(1104),Z=n(7654),T={components:{loader:h,modal:v.Z,authLayout:A.Z,emptyLayout:k,mainLayout:Z.Z},mounted(){window.addEventListener("orientationchange",(function(){var e=getComputedStyle(document.body).getPropertyValue("display");document.body.style.display="none",setTimeout((()=>document.body.style.display=e),10)}))},data(){return{modalVisible:!1}}};const S=(0,p.Z)(T,[["render",l]]);var C=S,I=n(7669),M=n(986),V=n(7398),$=n(5072),x=n.n($),E={methods:{mix3(e){const t=16731469,n=14792525,o=5088845,a=e=>Array.from({length:3},((t,n)=>Math.floor(e/16**(2*n)%256))),r=(e,t,n)=>e.map(((e,o)=>Math.floor(e+(t[o]-e)*(n/100))));let[s,i,l]=e<50?[t,n,2*e]:[n,o,2*(e-50)],u=r(a(s),a(i),l),c=u.reduce(((e,t,n)=>e+t*16**(2*n)),0);return"#"+c.toString(16).padStart(6,"0")}}};const _=(0,o.ri)(C);_.use(M.Z),_.use(I.Z),_.use(V.ZP,{config:{id:"G-H6NME2KP25"}}),_.use(x()),_.mixin(E),_.mount("#app"),_.config.globalProperties.$cloudinary="https://res.cloudinary.com/skywing/image/upload/",_.config.globalProperties.$red="#ff4d4d",_.config.globalProperties.$yellow="#e1b74d",_.config.globalProperties.$green="#4da64d",_.config.globalProperties.$maxAttempts=2},5072:function(){Array.prototype.max=function(){return Math.max(...this)},Array.prototype.min=function(){return Math.min.apply(null,this)},Array.prototype.sum=function(){return this.reduce(((e,t)=>e+t))},Array.prototype.sort0=function(){return this.sort(((e,t)=>t-e))},Array.prototype.sort1=function(){return this.sort(((e,t)=>e-t))},Array.prototype.average=function(){return this.sum()/this.length||0},Array.prototype.equals=function(e){return this.length==e.length&&this.every(((t,n)=>t===e[n]))},Array.prototype.partialSums=function(){return this.reduce((([e,t],n)=>[e.concat(t+n),t+n]),[[],0])[0]},Array.prototype.bucket=function(e,t){let n=[];for(let o=0;o<Math.floor(t/e);o++)n.push([]);for(let o of this)(n[Math.floor(o/e)]??n[n.length-1]).push(o);return n}},986:function(e,t,n){"use strict";var o=n(2119),a=n(7669),r=n(6245);const s=[{path:"/",component:()=>n.e(541).then(n.bind(n,392))},{path:"/auth",component:()=>n.e(395).then(n.bind(n,3395)),beforeEnter:async(e,t)=>{let n=e?.query?.access,o=e?.query?.refresh;n&&(localStorage.setItem("username",(0,r.Z)(n).username),localStorage.setItem("access",n),localStorage.setItem("refresh",o),i.push("modules"))}},{path:"/reg",component:()=>n.e(744).then(n.bind(n,3744))},{path:"/recall",component:()=>n.e(406).then(n.bind(n,9406))},{path:"/confirm",component:()=>n.e(386).then(n.bind(n,4386))},{path:"/stats",component:()=>n.e(3).then(n.bind(n,9003)),beforeEnter:async(e,t)=>await a.Z.dispatch("getStats")},{path:"/rating",component:()=>n.e(974).then(n.bind(n,6974)),beforeEnter:async(e,t)=>await a.Z.dispatch("getRating")},{path:"/modules",component:()=>n.e(743).then(n.bind(n,743)),beforeEnter:async(e,t)=>await a.Z.dispatch("getModules")},{path:"/lessons",component:()=>n.e(718).then(n.bind(n,1718)),beforeEnter:async(e,t)=>await a.Z.dispatch("getLessons",localStorage.getItem("moduleName"))},{path:"/quiz",component:()=>n.e(159).then(n.bind(n,1159)),beforeEnter:async(e,t)=>await a.Z.dispatch("getTasks",localStorage.getItem("lessonName"))}],i=(0,o.p7)({routes:s,history:(0,o.PO)()});i.afterEach(((e,t)=>window.scrollTo(0,0))),t["Z"]=i},7669:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(3907),a=n(1844);class r{constructor(e){Object.assign(this,e),this.started=!!e.tasksCompleted,this.completed=e.tasksCompleted==e.tasksTotal,this.percentage=Math.round(e.score/e.scoreMax*100)}}n(6699);class s{constructor(e){Object.assign(this,e),this.attempts=e.attempts??0,this.completed=!!e.attempts,this.answer=e.answer??e.key.map((e=>{}))}get answered(){return!this.answer.includes(void 0)}get type(){return this.key[0].toString().match(/[А-Д]/i)?"radio":"input"}get booleans(){return this.answer.map(((e,t)=>e==this.key[t]))}get percentage(){return Math.round(this.booleans.sum()/this.booleans.length*100)}get score(){return Math.round(this.percentage*this.weight/100)}}var i=n(986),l=(0,o.MT)({state:()=>({modules:[],blocks:[],lessons:[],tasks:[],rating:[],stats:{},loaderVisible:!1,modal:{visible:!1},showTips:!0,showMetrics:!0}),mutations:{setStats(e,t){e.stats=t[0]},setRating(e,t){e.rating=t},setModules(e,t){e.modules=t},setLessons(e,t){t.forEach(((e,n)=>{t[n].lessons=e.lessons.map((e=>new r(e)))})),e.blocks=t},setTasks(e,t){e.tasks=t.map((e=>new s(e)))},showLoader(e,t){e.loaderVisible=t},showMessage(e,t){e.modal=t,e.modal.visible=!0},toggleTips(e){e.showTips=!e.showTips},toggleMetrics(e){e.showMetrics=!e.showMetrics}},actions:{async reg(e,t){const{username:n,email:o,password:r}=t;await a.Z.reg(n,o,r);i.Z.push("confirm")},async login(e,t){const{username:n,password:o}=t,r=await a.Z.login(n,o);localStorage.setItem("username",n),localStorage.setItem("access",r.data.accessToken),localStorage.setItem("refresh",r.data.refreshToken),i.Z.push("/modules")},async getModules({commit:e}){const t=await a.Z.getModules();e("setModules",t.data)},async getLessons({commit:e},t){const n=await a.Z.getLessons(t);e("setLessons",n.data)},async getTasks({commit:e},t){const n=await a.Z.getTasks(t);e("setTasks",n.data)},async getStats({commit:e}){const t=await a.Z.getStats();e("setStats",t.data)},async getRating({commit:e}){const t=await a.Z.getRating();e("setRating",t.data)}}})},5560:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(6252),a=n(3577);const r=["value"],s={key:0},i={key:0,class:"input-error-message"},l={key:1,class:"input-error-message"};function u(e,t,n,u,c,d){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("input",{type:"text",class:(0,a.C_)(["input-textfield-line",{"input-textfield-invalid":c.v$.modelValue.$error}]),value:n.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value.trim())),placeholder:"Ваш email"},null,42,r),c.v$.modelValue.$error?((0,o.wg)(),(0,o.iD)("div",s,[c.v$.modelValue.required.$invalid?((0,o.wg)(),(0,o.iD)("div",i,"Поле має бути заповнене")):(0,o.kq)("",!0),c.v$.modelValue.email.$invalid?((0,o.wg)(),(0,o.iD)("div",l,"Некоректний формат")):(0,o.kq)("",!0)])):(0,o.kq)("",!0)],64)}var c=n(4028),d=n(2587),m={props:{modelValue:{type:String,required:!1,default:""}},data(){return{v$:(0,c.ZP)()}},validations(){return{modelValue:{required:d.C1,email:d.Do}}}},p=n(8118);const g=(0,p.Z)(m,[["render",u]]);var f=g},4513:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(6252),a=n(3577);const r=["value","placeholder"],s={key:0,class:"input-error-message"};function i(e,t,n,i,l,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("input",{type:"text",class:(0,a.C_)(["input-textfield-line",{"input-textfield-invalid":l.v$.modelValue.$error}]),value:n.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value.trim())),placeholder:n.placeholder},null,42,r),l.v$.modelValue.$error?((0,o.wg)(),(0,o.iD)("div",s,"Поле має бути заповнене")):(0,o.kq)("",!0)],64)}var l=n(4028),u=n(2587),c={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data(){return{v$:(0,l.ZP)()}},validations(){return{modelValue:{required:u.C1}}}},d=n(8118);const m=(0,d.Z)(c,[["render",i]]);var p=m},3660:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(6252),a=n(3577);const r=["placeholder","value"],s={key:0,class:"input-error-message"};function i(e,t,n,i,l,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("textarea",{rows:"7",class:(0,a.C_)(["input-textfield-line",{"input-textfield-invalid":l.v$.modelValue.$error}]),placeholder:n.placeholder,value:n.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value.trim()))},null,42,r),l.v$.modelValue.$error?((0,o.wg)(),(0,o.iD)("div",s,"Поле має бути заповнене")):(0,o.kq)("",!0)],64)}var l=n(4028),u=n(2587),c={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data(){return{v$:(0,l.ZP)()}},validations(){return{modelValue:{required:u.C1}}}},d=n(8118);const m=(0,d.Z)(c,[["render",i]]);var p=m},4902:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(6252),a=n(3577);const r={key:0,class:"modal-underlay flex"},s={class:"modal-content"},i={key:0},l={key:1,class:"modal-buttons"};function u(e,t,n,u,c,d){return n.visible?((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",{class:"modal-window",style:(0,a.j5)({width:n.modalWidth})},[(0,o._)("div",{class:"material-icons modal-cross",onClick:t[0]||(t[0]=t=>e.$emit("update:visible",!1))},"close"),(0,o._)("div",s,[(0,o.WI)(e.$slots,"content")]),e.$slots["buttons"]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("br",i)),e.$slots["buttons"]?((0,o.wg)(),(0,o.iD)("div",l,[(0,o.WI)(e.$slots,"buttons")])):(0,o.kq)("",!0)],4)])):(0,o.kq)("",!0)}var c={name:"modal-basic",props:{modalWidth:{type:String,required:!1,default:"19em"},visible:{type:Boolean,required:!1,default:!0}}},d=n(8118);const m=(0,d.Z)(c,[["render",u]]);var p=m},3958:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var o=n(6252),a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsEAAA7BAbiRa+0AAAQnSURBVFhHrZZdbBRVFMfPuTOzW7a0EJbyoRJjCD60RRMSY0AEE6OGDfIAhkggGBM/oDXyYkCIT2IboiZAKBTQEElAH0gDiVAK8lCoccHEB6VINPqCH1GwgKWF7e7Mvf5n566l7J1ZFuaXTO89/9nu/c89555ZJgP2zpu1ZDuXidSvpOgYee4XbmvqB307VswG9rrTMfwZREUUKfkNSdkmrl3pyW+aobR+3wg9VoKJxVNk2d0yPTVrd+ae1/p9YzZQyA/hoQs6GguLJ2Gkx96TP4JUPazVe8aYAh8scAqLPavDENQgeXI9Dw9+UninQWqxKsJT4MnN/t8gCIPrybJ2q7oJh5wdN+q1WBWhBtyWmtMkvQ2YVi44FktVouasvevWLK3cNaEpKGF3jqzCU+7D1AmUCJT6HUc247aMO6+VioTugOzn6fnzluOuTR7Al87BETwEOXo3mB/yT0o1OxFqgFkddIR3UV7gdbeerv3NXZNYjtPhG9mP2+YT4hOYOO50DE3SSiTGFKgLRWN/4JpWFIgGFHEnxmNM6pzTO/wIWc4mEmI1NHNqlOwW1/9ZnN/wQOSuhe2Ahev2qk5j4fdwZWHkzMjC8dOwI69hRxqx0FH9mbGwyMj69Os6CsVogJuKW3wpiMYCE/MFq6+Rmi4YIXHt8hLUyMsowCv6I6MI0Y7jOVFHRkJrAHyrRxMMI0sFy+9zi2dsHJ4//jB2YzZ244S+H8CcVk7ibR0ZCTUgFe/CUKkHpFCsbY5ws7ln6qbw0GAGRfoh9NH/Y9HqbL2a0FEZoQasZnUO+f5Mh5GgkudYLM/mXmhY/VLy03fRwFogB62ZeYqqSS0qzg1EpYAKnt0CE+YiKyeF2th38InWLTfm1e2BiY1a93fhOT0rI9JA8rFCzlNimVL8AcKbgRoJw8T6hChsP9M492Ok4/NApbnF0UDFVlzC6xcNyPcaFN+bCB8M1HBQQ1tre69vdp3URYQJpGKy+4Zd9sa8awMl3H4rIUi+CDPvI2wMVCMKJl5J9uUcvEs6EE+EgXxwa5TIFJiwm728aFZdksTjqI8VkLK4TKfFT8e2o02ZHvQIY0/xqXoHTHj9PA+NoR3pWail/4HJtkRf7isSVl8sKQgDJvzvWomn3o2xtigG/ILrUXRXY0+pOgUm0JY7sHwGveMATs0CSAPBnSIzXZo0Wc/LiMUAOInt/1LBiGD+EcW3Clrpidmiq1P1vIxYDCiyujH8hVkrk9fFLHqRe/8HjM8I+kj5i0oTiwGryXXxoKd0mGGSO5WijzDHwNuRmr+DW+XElQKfPj0C9SpqYhwWzyId7Vo0EpsBJPwnPfXxj8RbnhRL7Gb5r9aMxLgDfGeX+86Z7d1+GozEaECVfsLlYGadx0m/BioSWyPCEfQXTCPvW0ST/DlQK0H0H2sRajipWEjKAAAAAElFTkSuQmCC";const r=e=>((0,o.dD)("data-v-16ac1a98"),e=e(),(0,o.Cn)(),e),s={class:"wrapper"},i=r((()=>(0,o._)("span",null,[(0,o._)("img",{class:"brand-icon",src:a,alt:""}),(0,o.Uk)("  "),(0,o._)("span",{class:"brand-name"},"SKY WING")],-1)));function l(e,t,n,a,r,l){return(0,o.wg)(),(0,o.iD)("div",s,[i,(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var u={},c=n(8118);const d=(0,c.Z)(u,[["render",l],["__scopeId","data-v-16ac1a98"]]);var m=d},1104:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(6252);const a=(0,o._)("div",{class:"auth-background"},null,-1);function r(e,t,n,r,s,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o.WI)(e.$slots,"default")],64)}var s=n(3958),i={name:"auth-layout",components:{navbar:s.Z}},l=n(8118);const u=(0,l.Z)(i,[["render",r]]);var c=u},7654:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var o=n(6252),a=n(3577);const r=e=>((0,o.dD)("data-v-4a188626"),e=e(),(0,o.Cn)(),e),s=r((()=>(0,o._)("span",{class:"material-icons-outlined"},"account_circle",-1))),i=(0,o.Uk)("  "),l={class:"link"},u=(0,o.Uk)("Увійти"),c={class:"body-wrapper"};function d(e,t,n,r,d,m){const p=(0,o.up)("sidebar"),g=(0,o.up)("router-link"),f=(0,o.up)("navbar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[s,i,d.username?((0,o.wg)(),(0,o.j4)(p,{key:0},{default:(0,o.w5)((()=>[(0,o._)("span",l,(0,a.zw)(d.username),1)])),_:1})):((0,o.wg)(),(0,o.j4)(g,{key:1,class:"link",to:"auth"},{default:(0,o.w5)((()=>[u])),_:1}))])),_:1}),(0,o._)("div",{class:"header-wrapper",style:(0,a.j5)({background:`linear-gradient(#0008, #0008), url(${n.backgroundImage})`,backgroundSize:"cover",backgroundPosition:`left 0 top ${n.backgroundOffset}%`})},[(0,o.WI)(e.$slots,"header",{},void 0,!0)],4),(0,o._)("div",c,[(0,o.WI)(e.$slots,"body",{},void 0,!0)])],64)}var m=n(3958);const p={for:"toggle-menu"},g={type:"checkbox",id:"toggle-menu",ref:"checkbox"},f={class:"side-menu"},h=["onClick"],v={class:"material-icons-outlined menu-entry-icon"},b={class:"menu-entry-label"};function y(e,t,n,r,s,i){const l=(0,o.up)("modal-feedback");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{visible:s.modalFeedbackVisible,"onUpdate:visible":t[0]||(t[0]=e=>s.modalFeedbackVisible=e)},null,8,["visible"]),(0,o._)("label",p,[(0,o.WI)(e.$slots,"default")]),(0,o._)("input",g,null,512),(0,o._)("div",{class:"underlay",onClick:t[1]||(t[1]=t=>e.$refs.checkbox.click())}),(0,o._)("div",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.menuEntries,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"menu-entry",onClick:n=>{t.action(),e.$refs.checkbox.click()}},[(0,o._)("div",v,(0,a.zw)(t.icon),1),(0,o._)("div",b,(0,a.zw)(t.label),1)],8,h)))),256))])],64)}const w=(0,o._)("h3",{style:{"text-align":"center"}},"Форма зворотного зв'язку",-1),k=(0,o._)("div",{class:"modal-text"},"Надішліть питання за допомогою цієї форми, і ми відповімо вам протягом доби",-1),A=(0,o._)("br",null,null,-1);function Z(e,t,n,r,s,i){const l=(0,o.up)("input-text"),u=(0,o.up)("input-email"),c=(0,o.up)("input-textarea"),d=(0,o.up)("modal");return(0,o.wg)(),(0,o.j4)(d,{modalWidth:"min(25em,90%)",buttonColor:s.colorTheme},{content:(0,o.w5)((()=>[w,k,A,(0,o.Wm)(l,{modelValue:s.reportData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.reportData.name=e),ref:"inputName",placeholder:"Ваше ім'я"},null,8,["modelValue"]),(0,o.Wm)(u,{modelValue:s.reportData.email,"onUpdate:modelValue":t[1]||(t[1]=e=>s.reportData.email=e),ref:"inputEmail"},null,8,["modelValue"]),(0,o.Wm)(c,{modelValue:s.reportData.text,"onUpdate:modelValue":t[2]||(t[2]=e=>s.reportData.text=e),placeholder:"Питання чи опис проблеми",ref:"inputText"},null,8,["modelValue"])])),buttons:(0,o.w5)((()=>[(0,o._)("button",{class:"button-small",style:(0,a.j5)({background:s.colorTheme}),onClick:t[3]||(t[3]=e=>i.report())},"Надіслати",4)])),_:1},8,["buttonColor"])}var T=n(1844),S=n(4513),C=n(5560),I=n(3660),M=n(4902),V={components:{inputText:S.Z,inputEmail:C.Z,inputTextarea:I.Z,modal:M.Z},data(){return{colorTheme:localStorage.getItem("colorTheme"),reportData:{name:"",email:"",text:""}}},computed:{inputs(){return Object.keys(this.$refs).map((e=>this.$refs[e]))}},methods:{async report(){this.inputs.map((e=>e.v$.$touch())),this.inputs.some((e=>e.v$.$error))||(await T.Z.report("Нове звернення на skywing.online",this.reportData),this.$emit("update:visible",!1))}}},$=n(8118);const x=(0,$.Z)(V,[["render",Z]]);var E=x,_={components:{modalFeedback:E},data(){return{modalFeedbackVisible:!1,menuEntries:[{icon:"bookmark_border",label:"Мої модулі",action:this.gotoModules},{icon:"signal_cellular_alt",label:"Статистика",action:this.gotoStats},{icon:"support_agent",label:"Техпідтримка",action:this.showFeedbackModal},{icon:"logout",label:"Вийти з акаунта",action:this.logout}]}},methods:{showFeedbackModal(){this.modalFeedbackVisible=!0},gotoModules(){this.$router.push("modules")},gotoStats(){this.$router.push("stats")},logout(){localStorage.removeItem("access"),localStorage.removeItem("refresh"),localStorage.removeItem("username"),this.$router.push("/")}}};const q=(0,$.Z)(_,[["render",y]]);var D=q,j={name:"main-layout",components:{navbar:m.Z,sidebar:D},props:{backgroundImage:String,backgroundOffset:String},data(){return{username:localStorage.getItem("username")}}};const O=(0,$.Z)(j,[["render",d],["__scopeId","data-v-4a188626"]]);var W=O}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{3:"40792be4",159:"d3e6e88f",386:"cffbcaef",395:"9ad9a35a",406:"2f6d626f",541:"8a95085a",718:"62eb1ccc",743:"9da7cd0b",744:"09920c72",974:"841af74d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{3:"1cf39744",159:"ea1f36f5",386:"b2efbadf",395:"0ad88a75",541:"cbf72691",718:"2a10bf31",743:"54eb7a97",974:"da3f26fc"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="landing:";n.l=function(o,a,r,s){if(e[o])e[o].push(a);else{var i,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[a];var m=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){a=s[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var s=n.miniCssF(o),i=n.p+s;if(t(s,i))return a();e(o,i,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={3:1,159:1,386:1,395:1,541:1,718:1,743:1,974:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var s=n.p+n.u(t),i=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,a[1](i)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,s=o[0],i=o[1],l=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var c=l(n)}for(t&&t(o);u<s.length;u++)r=s[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunklanding"]=self["webpackChunklanding"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2)}));o=n.O(o)})();
//# sourceMappingURL=app.20e1af1a.js.map