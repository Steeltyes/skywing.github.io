(function(){var e={1844:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(9669),s=n.n(o),r=n(7669),a=n(986);const i=s().create({baseURL:"https://skywing.site",withCredentials:!0,headers:{"Content-Type":"application/json"}});let c;i.interceptors.request.use((e=>{c=setTimeout((()=>r.Z.commit("showLoader",!0)),1e3);const t=localStorage.getItem("access");return t&&(e.headers.auth=`Bearer ${t}`),e}),(e=>(clearTimeout(c),r.Z.commit("showLoader",!1),Promise.reject(e)))),i.interceptors.response.use((e=>(clearTimeout(c),r.Z.commit("showLoader",!1),202==e?.status&&r.Z.commit("showMessage",{color:"#4da64d",icon:"done",title:"Успішно",text:e?.data?.message}),e)),(async e=>{if(clearTimeout(c),r.Z.commit("showLoader",!1),403==e.response?.status)a.Z.push("confirm");else{if(401==e.response?.status&&e.config){try{const t=localStorage.getItem("refresh");if(t){const t=await s().get("https://skywing.site/refresh",{headers:{refresh:localStorage.getItem("refresh")},withCredentials:!0});return localStorage.setItem("access",t.data?.accessToken),localStorage.setItem("refresh",t.data?.refreshToken),i.request(e.config)}r.Z.commit("showMessage",{width:"min(23em, 80%)",color:"black",text:"\n            <br/>\n            <div class=\"material-icons-outlined auth-icon\">account_circle</div>\n            <h2>Створення профіля</h2>\n            <p class='auth-text'>\n              Наразі ви переглядаєте сторінку у гостьовому режимі. Зареєструйтесь, \n              щоб відкрити повний доступ до матеріалів і статистики\n            </p>\n            <button class='button-plain auth-button' onclick=\"location.href='/reg'\">До реєстрації</button>\n            <small>Вже зареєстровані? <a href='/auth'>Увійти!</a></small><br/>\n          "})}catch(t){a.Z.push("auth")}throw e}r.Z.commit("showMessage",{color:"#ff4d4d",title:"Помилка",icon:e.response?.data?.icon||"hourglass_empty",text:e.response?.data?.message||"Немає зв'язку із сервером. Спробуйте зайти пізніше"})}return Promise.reject(e)}));var l=i,u={async reg(e,t,n){return l.post("reg",{username:e,email:t,password:n})},async login(e,t){return l.post("login",{username:e,password:t})},async logout(){l.post("logout")},async resendActivationLink(e){l.post("resend-activation-link",{email:e})},async requestPasswordRenewal(e){l.post("request-password-renewal",{email:e})},async renewPassword(e,t){l.post("renew-password",{password:e,activationLink:t})},async report(e,t){l.post("report",{topic:e,obj:t})},async getModules(){return l.get("modules")},async getLessons(e){return l.get(`lessons/${e}`)},async getTasks(e){return l.get(`tasks/${e}`)},async postAnswer(e,t,n,o,s,r,a){return l.post("answer",{moduleId:e,blockId:t,lessonId:n,taskId:o,answer:s,score:r,scoreMax:a})},async getStats(){return l.get("stats")},async getRating(){return l.get("rating")}}},3088:function(e,t,n){"use strict";var o=n(9963),s=n(6252),r=n(3577);const a={class:"modal-header"},i=["innerHTML"];function c(e,t,n,o,c,l){const u=(0,s.up)("loader"),d=(0,s.up)("modal"),m=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[e.$store.state.loaderVisible?((0,s.wg)(),(0,s.j4)(u,{key:0})):(0,s.kq)("",!0),(0,s.Wm)(d,{visible:e.$store.state.modal.visible,"onUpdate:visible":t[0]||(t[0]=t=>e.$store.state.modal.visible=t),modalWidth:e.$store.state.modal.width},{content:(0,s.w5)((()=>[e.$store.state.modal.icon?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"material-icons-outlined modal-icon",style:(0,r.j5)({color:e.$store.state.modal.color})},(0,r.zw)(e.$store.state.modal.icon),5)):(0,s.kq)("",!0),(0,s._)("div",a,(0,r.zw)(e.$store.state.modal.title),1),(0,s._)("div",{class:"modal-text",innerHTML:e.$store.state.modal.text},null,8,i)])),_:1},8,["visible","modalWidth"]),(0,s.Wm)(m)],64)}const l={class:"underlay flex"},u=(0,s._)("div",{class:"lds-ripple"},[(0,s._)("div"),(0,s._)("div")],-1),d=[u];function m(e,t){return(0,s.wg)(),(0,s.iD)("div",l,d)}var f=n(8118);const p={},h=(0,f.Z)(p,[["render",m]]);var g=h,y=n(6291);function b(e,t){return(0,s.WI)(e.$slots,"default")}const v={},w=(0,f.Z)(v,[["render",b]]);var k=w,I=n(6514),M=n(4683),Z={components:{loader:g,modal:y.Z,authLayout:I.Z,emptyLayout:k,mainLayout:M.Z},mounted(){window.addEventListener("orientationchange",(function(){var e=getComputedStyle(document.body).getPropertyValue("display");document.body.style.display="none",setTimeout((()=>document.body.style.display=e),10)}))},data(){return{modalVisible:!1}}};const A=(0,f.Z)(Z,[["render",c]]);var O=A,E=n(7669),S=n(986),T=n(5072),L=n.n(T),W={methods:{mix3(e){const t=16731469,n=14792525,o=5088845,s=e=>Array.from({length:3},((t,n)=>Math.floor(e/16**(2*n)%256))),r=(e,t,n)=>e.map(((e,o)=>Math.floor(e+(t[o]-e)*(n/100))));let[a,i,c]=e<50?[t,n,2*e]:[n,o,2*(e-50)],l=r(s(a),s(i),c),u=l.reduce(((e,t,n)=>e+t*16**(2*n)),0);return"#"+u.toString(16).padStart(6,"0")}}};const x=(0,o.ri)({extends:O});x.mixin(W),x.use(L()),x.use(S.Z).use(E.Z).mount("#app"),x.config.globalProperties.$cloudinary="https://res.cloudinary.com/skywing/image/upload/",x.config.globalProperties.$red="#ff4d4d",x.config.globalProperties.$yellow="#e1b74d",x.config.globalProperties.$green="#4da64d",x.config.globalProperties.$maxAttempts=2},5072:function(){Array.prototype.max=function(){return Math.max(...this)},Array.prototype.min=function(){return Math.min.apply(null,this)},Array.prototype.sum=function(){return this.reduce(((e,t)=>e+t))},Array.prototype.sort0=function(){return this.sort(((e,t)=>t-e))},Array.prototype.sort1=function(){return this.sort(((e,t)=>e-t))},Array.prototype.average=function(){return this.sum()/this.length||0},Array.prototype.equals=function(e){return this.length==e.length&&this.every(((t,n)=>t===e[n]))},Array.prototype.partialSums=function(){return this.reduce((([e,t],n)=>[e.concat(t+n),t+n]),[[],0])[0]},Array.prototype.bucket=function(e,t){let n=[];for(let o=0;o<Math.floor(t/e);o++)n.push([]);for(let o of this)(n[Math.floor(o/e)]??n[n.length-1]).push(o);return n}},986:function(e,t,n){"use strict";var o=n(2119),s=n(7669);const r=[{path:"/",component:()=>n.e(248).then(n.bind(n,6300))},{path:"/auth",component:()=>Promise.all([n.e(217),n.e(395)]).then(n.bind(n,3395))},{path:"/reg",component:()=>Promise.all([n.e(217),n.e(366)]).then(n.bind(n,7366))},{path:"/recall",component:()=>Promise.all([n.e(217),n.e(406)]).then(n.bind(n,9406))},{path:"/confirm",component:()=>Promise.all([n.e(217),n.e(670)]).then(n.bind(n,6083)),beforeEnter:async(e,t)=>{let n=e?.query?.access,o=e?.query?.refresh;console.log(n,o),n&&(localStorage.setItem("access",n),localStorage.setItem("refresh",o),a.push("modules"))}},{path:"/stats",component:()=>n.e(3).then(n.bind(n,9003)),beforeEnter:async(e,t)=>await s.Z.dispatch("getStats")},{path:"/rating",component:()=>n.e(781).then(n.bind(n,5781)),beforeEnter:async(e,t)=>await s.Z.dispatch("getRating")},{path:"/modules",component:()=>n.e(152).then(n.bind(n,152)),beforeEnter:async(e,t)=>await s.Z.dispatch("getModules")},{path:"/lessons",component:()=>n.e(718).then(n.bind(n,1718)),beforeEnter:async(e,t)=>await s.Z.dispatch("getLessons",localStorage.getItem("moduleName"))},{path:"/quiz",component:()=>Promise.all([n.e(217),n.e(232)]).then(n.bind(n,2232)),beforeEnter:async(e,t)=>await s.Z.dispatch("getTasks",localStorage.getItem("lessonName"))}],a=(0,o.p7)({routes:r,history:(0,o.PO)()});a.afterEach(((e,t)=>window.scrollTo(0,0))),t["Z"]=a},7669:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(3907),s=n(1844);class r{constructor(e){Object.assign(this,e),this.started=!!e.tasksCompleted,this.completed=e.tasksCompleted==e.tasksTotal,this.percentage=Math.round(e.score/e.scoreMax*100)}}n(6699);class a{constructor(e){Object.assign(this,e),this.attempts=e.attempts??0,this.completed=!!e.attempts,this.answer=e.answer??e.key.map((e=>{}))}get answered(){return!this.answer.includes(void 0)}get type(){return this.key[0].toString().match(/[А-Д]/i)?"radio":"input"}get booleans(){return this.answer.map(((e,t)=>e==this.key[t]))}get percentage(){return Math.round(this.booleans.sum()/this.booleans.length*100)}get score(){return Math.round(this.percentage*this.weight/100)}}var i=n(986),c=(0,o.MT)({state:()=>({modules:[],blocks:[],lessons:[],tasks:[],rating:[],stats:{},loaderVisible:!1,modal:{visible:!1},showTips:!0,showMetrics:!0}),mutations:{setStats(e,t){e.stats=t[0]},setRating(e,t){e.rating=t},setModules(e,t){e.modules=t},setLessons(e,t){t.forEach(((e,n)=>{t[n].lessons=e.lessons.map((e=>new r(e)))})),e.blocks=t},setTasks(e,t){e.tasks=t.map((e=>new a(e)))},showLoader(e,t){e.loaderVisible=t},showMessage(e,t){e.modal=t,e.modal.visible=!0},toggleTips(e){e.showTips=!e.showTips},toggleMetrics(e){e.showMetrics=!e.showMetrics}},actions:{async reg({commit:e},t){const{username:n,email:o,password:r}=t,a=await s.Z.reg(n,o,r);localStorage.setItem("username",n),localStorage.setItem("access",a.data.accessToken),localStorage.setItem("refresh",a.data.refreshToken),i.Z.push("confirm")},async login({commit:e},t){const{username:n,password:o}=t;localStorage.setItem("username",n);const r=await s.Z.login(n,o);localStorage.setItem("access",r.data.accessToken),localStorage.setItem("refresh",r.data.refreshToken),i.Z.push("/modules")},async getModules({commit:e}){const t=await s.Z.getModules();e("setModules",t.data)},async getLessons({commit:e},t){const n=await s.Z.getLessons(t);e("setLessons",n.data)},async getTasks({commit:e},t){const n=await s.Z.getTasks(t);e("setTasks",n.data)},async getStats({commit:e}){const t=await s.Z.getStats();e("setStats",t.data)},async getRating({commit:e}){const t=await s.Z.getRating();e("setRating",t.data)}}})},6291:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(6252),s=n(3577);const r={key:0,class:"modal-underlay flex"},a={class:"modal-content"},i={key:0},c={key:1,class:"modal-buttons"};function l(e,t,n,l,u,d){return n.visible?((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",{class:"modal-window",style:(0,s.j5)({width:n.modalWidth})},[(0,o._)("div",{class:"material-icons modal-cross",onClick:t[0]||(t[0]=t=>e.$emit("update:visible",!1))},"close"),(0,o._)("div",a,[(0,o.WI)(e.$slots,"content")]),e.$slots["buttons"]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("br",i)),e.$slots["buttons"]?((0,o.wg)(),(0,o.iD)("div",c,[(0,o.WI)(e.$slots,"buttons")])):(0,o.kq)("",!0)],4)])):(0,o.kq)("",!0)}var u={name:"modal-basic",props:{modalWidth:{type:String,required:!1,default:"19em"},visible:{type:Boolean,required:!1,default:!0},buttonColor:{type:String,required:!1,default:"#333"}},computed:{cssProps(){return{"--button-color":this.buttonColor}}}},d=n(8118);const m=(0,d.Z)(u,[["render",l]]);var f=m},7068:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(6252),s=n(3577),r=n(7334);const a=e=>((0,o.dD)("data-v-38acb6a2"),e=e(),(0,o.Cn)(),e),i={class:"wrapper"},c=a((()=>(0,o._)("img",{class:"brand-icon",src:r,alt:""},null,-1))),l=a((()=>(0,o._)("span",{class:"brand-name"},"SKY WING",-1))),u=a((()=>(0,o._)("span",{class:"material-icons-outlined"},"account_circle",-1))),d=(0,o.Uk)("Створити профіль");function m(e,t,n,r,a,m){const f=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",i,[c,l,u,a.username?((0,o.wg)(),(0,o.j4)(f,{key:0,class:"link",to:"modules"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(a.username),1)])),_:1})):((0,o.wg)(),(0,o.j4)(f,{key:1,class:"link",to:"reg"},{default:(0,o.w5)((()=>[d])),_:1}))])}var f={data(){return{username:localStorage.getItem("username")}}},p=n(8118);const h=(0,p.Z)(f,[["render",m],["__scopeId","data-v-38acb6a2"]]);var g=h},6514:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(6252);function s(e,t,n,s,r,a){return(0,o.WI)(e.$slots,"default")}var r=n(7068),a={name:"auth-layout",components:{navbar:r.Z}},i=n(8118);const c=(0,i.Z)(a,[["render",s]]);var l=c},4683:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(6252),s=n(3577);const r={class:"body-wrapper"};function a(e,t,n,a,i,c){const l=(0,o.up)("navbar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o._)("div",{class:"header-wrapper",style:(0,s.j5)({background:`linear-gradient(#0008, #0008), url(${n.backgroundImage})`,backgroundSize:"cover",backgroundPosition:`left 0 top ${n.backgroundOffset}%`})},[(0,o.WI)(e.$slots,"header",{},void 0,!0)],4),(0,o._)("div",r,[(0,o.WI)(e.$slots,"body",{},void 0,!0)])],64)}var i=n(7068),c={name:"main-layout",components:{navbar:i.Z},props:{backgroundImage:String,backgroundOffset:String}},l=n(8118);const u=(0,l.Z)(c,[["render",a],["__scopeId","data-v-00bfa7d8"]]);var d=u},7334:function(e){"use strict";e.exports="data:image/png;base64,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"}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],r=e[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{3:"e6098586",152:"eadd3065",217:"e59e215c",232:"489364dc",248:"722ddf50",366:"a6119f96",395:"6c74e0fe",406:"db60a6ab",670:"356376ef",718:"254cc559",781:"0b187a64"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{3:"a3d2bd26",152:"c29479c6",232:"63c6aadf",248:"cbf72691",366:"2bab420f",395:"0ad88a75",670:"d5f74f11",718:"2a10bf31",781:"7fca0948"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="landing:";n.l=function(o,s,r,a){if(e[o])e[o].push(s);else{var i,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[s];var m=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var s=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(r){if(s.onerror=s.onload=null,"load"===r.type)n();else{var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,s.parentNode.removeChild(s),o(c)}};return s.onerror=s.onload=r,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var s=n[o],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){s=a[o],r=s.getAttribute("data-href");if(r===e||r===t)return s}},o=function(o){return new Promise((function(s,r){var a=n.miniCssF(o),i=n.p+a;if(t(a,i))return s();e(o,i,s,r)}))},s={143:0};n.f.miniCss=function(e,t){var n={3:1,152:1,232:1,248:1,366:1,395:1,670:1,718:1,781:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=o(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)o.push(s[2]);else{var r=new Promise((function(n,o){s=e[t]=[n,o]}));o.push(s[2]=r);var a=n.p+n.u(t),i=new Error,c=function(o){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,s[1](i)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,r,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var u=c(n)}for(t&&t(o);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunklanding"]=self["webpackChunklanding"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3088)}));o=n.O(o)})();
//# sourceMappingURL=app.2547ecf2.js.map