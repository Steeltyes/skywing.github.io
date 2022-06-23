(function(){var e={1844:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r,o=n(1138),s=n(3540),a=(n(1539),n(9669)),i=n.n(a),u=n(7669),c=n(986),l=i().create({baseURL:"https://skywing.site",withCredentials:!0,headers:{"Content-Type":"application/json"}});l.interceptors.request.use((function(e){return r=setTimeout((function(){return u.Z.commit("showLoader",!0)}),1e3),e.headers.auth="Bearer ".concat(localStorage.getItem("access")),e}),(function(e){return clearTimeout(r),u.Z.commit("showLoader",!1),Promise.reject(e)})),l.interceptors.response.use((function(e){var t;return clearTimeout(r),u.Z.commit("showLoader",!1),202==(null===e||void 0===e?void 0:e.status)&&u.Z.commit("showMessage",{color:"#4da64d",icon:"done",title:"Успішно",text:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message}),e}),function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n,s,a,d,f,p,m,h,v;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(clearTimeout(r),u.Z.commit("showLoader",!1),403!=(null===(n=t.response)||void 0===n?void 0:n.status)){e.next=6;break}c.Z.push("confirm"),e.next=23;break;case 6:if(401!=(null===(s=t.response)||void 0===s?void 0:s.status)||!t.config){e.next=22;break}return e.prev=7,e.next=10,i().get("https://skywing.site/refresh",{headers:{refresh:localStorage.getItem("refresh")},withCredentials:!0});case 10:return v=e.sent,localStorage.setItem("access",null===(m=v.data)||void 0===m?void 0:m.accessToken),localStorage.setItem("refresh",null===(h=v.data)||void 0===h?void 0:h.refreshToken),e.abrupt("return",l.request(t.config));case 16:e.prev=16,e.t0=e["catch"](7),c.Z.push("/auth");case 19:throw t;case 22:u.Z.commit("showMessage",{color:"#ff4d4d",title:"Помилка",icon:(null===(a=t.response)||void 0===a||null===(d=a.data)||void 0===d?void 0:d.icon)||"hourglass_empty",text:(null===(f=t.response)||void 0===f||null===(p=f.data)||void 0===p?void 0:p.message)||"Немає зв'язку із сервером. Спробуйте зайти пізніше"});case 23:return e.abrupt("return",Promise.reject(t));case 24:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}());var d=l,f={reg:function(e,t,n){return(0,s.Z)((0,o.Z)().mark((function r(){return(0,o.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",d.post("reg",{username:e,email:t,password:n}));case 1:case"end":return r.stop()}}),r)})))()},login:function(e,t){return(0,s.Z)((0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",d.post("login",{username:e,password:t}));case 1:case"end":return n.stop()}}),n)})))()},logout:function(){return(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:d.post("logout");case 1:case"end":return e.stop()}}),e)})))()},resendActivationLink:function(e){return(0,s.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:d.post("resend-activation-link",{email:e});case 1:case"end":return t.stop()}}),t)})))()},requestPasswordRenewal:function(e){return(0,s.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:d.post("request-password-renewal",{email:e});case 1:case"end":return t.stop()}}),t)})))()},renewPassword:function(e,t){return(0,s.Z)((0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:d.post("renew-password",{password:e,activationLink:t});case 1:case"end":return n.stop()}}),n)})))()},report:function(e,t){return(0,s.Z)((0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:d.post("report",{topic:e,obj:t});case 1:case"end":return n.stop()}}),n)})))()},getModules:function(){return(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d.get("modules"));case 1:case"end":return e.stop()}}),e)})))()},getLessons:function(e){return(0,s.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d.get("lessons/".concat(e)));case 1:case"end":return t.stop()}}),t)})))()},getTasks:function(e){return(0,s.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d.get("tasks/".concat(e)));case 1:case"end":return t.stop()}}),t)})))()},postAnswer:function(e,t,n,r,a,i,u){return(0,s.Z)((0,o.Z)().mark((function s(){return(0,o.Z)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.abrupt("return",d.post("answer",{moduleId:e,blockId:t,lessonId:n,taskId:r,answer:a,score:i,scoreMax:u}));case 1:case"end":return o.stop()}}),s)})))()},getStats:function(){return(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d.get("stats"));case 1:case"end":return e.stop()}}),e)})))()},getRating:function(){return(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d.get("rating"));case 1:case"end":return e.stop()}}),e)})))()}}},4496:function(e,t,n){"use strict";n(6992),n(8674),n(9601),n(7727);var r=n(9963),o=n(6252),s=n(3577),a={class:"modal-header"},i={class:"modal-text"};function u(e,t,n,r,u,c){var l=(0,o.up)("loader"),d=(0,o.up)("modal"),f=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.$store.state.loaderVisible?((0,o.wg)(),(0,o.j4)(l,{key:0})):(0,o.kq)("",!0),(0,o.Wm)(d,{visible:e.$store.state.modalVisible,"onUpdate:visible":t[0]||(t[0]=function(t){return e.$store.state.modalVisible=t}),buttonColor:e.$store.state.modalColor},{content:(0,o.w5)((function(){return[e.$store.state.modalIcon?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"material-icons-outlined modal-icon",style:(0,s.j5)({color:e.$store.state.modalColor})},(0,s.zw)(e.$store.state.modalIcon),5)):(0,o.kq)("",!0),(0,o._)("div",a,(0,s.zw)(e.$store.state.modalTitle),1),(0,o._)("div",i,(0,s.zw)(e.$store.state.modalText),1)]})),_:1},8,["visible","buttonColor"]),(0,o.Wm)(f)],64)}var c={class:"underlay flex"},l=(0,o._)("div",{class:"lds-ripple"},[(0,o._)("div"),(0,o._)("div")],-1),d=[l];function f(e,t){return(0,o.wg)(),(0,o.iD)("div",c,d)}var p=n(8118);const m={},h=(0,p.Z)(m,[["render",f]]);var v=h,g=n(9287);function w(e,t){return(0,o.WI)(e.$slots,"default")}const Z={},b=(0,p.Z)(Z,[["render",w]]);var y=b,k=n(9157),I=n(4683),x={components:{loader:v,modal:g.Z,authLayout:k.Z,emptyLayout:y,mainLayout:I.Z},mounted:function(){window.addEventListener("orientationchange",(function(){var e=getComputedStyle(document.body).getPropertyValue("display");document.body.style.display="none",setTimeout((function(){return document.body.style.display=e}),10)}))},data:function(){return{modalVisible:!1}}};const M=(0,p.Z)(x,[["render",u]]);var A=M,O=n(7669),E=n(986),S=n(5072),T=n.n(S),C=n(6388),L=(n(1038),n(8783),n(1249),n(1539),n(3112),n(9714),{methods:{mix3:function(e){var t=16731469,n=14792525,r=5088845,o=function(e){return Array.from({length:3},(function(t,n){return Math.floor(e/Math.pow(16,2*n)%Math.pow(16,2))}))},s=function(e,t,n){return e.map((function(e,r){return Math.floor(e+(t[r]-e)*(n/100))}))},a=e<50?[t,n,2*e]:[n,r,2*(e-50)],i=(0,C.Z)(a,3),u=i[0],c=i[1],l=i[2],d=s(o(u),o(c),l),f=d.reduce((function(e,t,n){return e+t*Math.pow(16,2*n)}),0);return"#"+f.toString(16).padStart(6,"0")}}}),W=(0,r.ri)({extends:A});W.mixin(L),W.use(T()),W.use(E.Z).use(O.Z).mount("#app"),W.config.globalProperties.$cloudinary="https://res.cloudinary.com/skywing/image/upload/",W.config.globalProperties.$red="#ff4d4d",W.config.globalProperties.$yellow="#e1b74d",W.config.globalProperties.$green="#4da64d",W.config.globalProperties.$maxAttempts=2},5072:function(e,t,n){var r=n(6082)["default"],o=n(7246)["default"],s=n(5455)["default"];n(1539),n(2707),n(2222),Array.prototype.max=function(){return Math.max.apply(Math,s(this))},Array.prototype.min=function(){return Math.min.apply(null,this)},Array.prototype.sum=function(){return this.reduce((function(e,t){return e+t}))},Array.prototype.sort0=function(){return this.sort((function(e,t){return t-e}))},Array.prototype.sort1=function(){return this.sort((function(e,t){return e-t}))},Array.prototype.average=function(){return this.sum()/this.length||0},Array.prototype.equals=function(e){return this.length==e.length&&this.every((function(t,n){return t===e[n]}))},Array.prototype.partialSums=function(){return this.reduce((function(e,t){var n=o(e,2),r=n[0],s=n[1];return[r.concat(s+t),s+t]}),[[],0])[0]},Array.prototype.bucket=function(e,t){for(var n=[],o=0;o<Math.floor(t/e);o++)n.push([]);var s,a=r(this);try{for(a.s();!(s=a.n()).done;){var i,u=s.value;(null!==(i=n[Math.floor(u/e)])&&void 0!==i?i:n[n.length-1]).push(u)}}catch(c){a.e(c)}finally{a.f()}return n}},986:function(e,t,n){"use strict";var r=n(1138),o=n(3540),s=(n(1539),n(8783),n(3948),n(2119)),a=n(7669),i=[{path:"/",component:function(){return n.e(836).then(n.bind(n,3567))}},{path:"/auth",component:function(){return Promise.all([n.e(217),n.e(114)]).then(n.bind(n,8114))}},{path:"/reg",component:function(){return Promise.all([n.e(217),n.e(838)]).then(n.bind(n,8838))}},{path:"/recall",component:function(){return Promise.all([n.e(217),n.e(502)]).then(n.bind(n,4502))}},{path:"/confirm",component:function(){return Promise.all([n.e(217),n.e(522)]).then(n.bind(n,4522))},beforeEnter:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o,s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=null===t||void 0===t||null===(o=t.query)||void 0===o?void 0:o.access,s&&(localStorage.setItem("access",access),localStorage.setItem("refresh",refresh),u.push("modules"));case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/stats",component:function(){return n.e(3).then(n.bind(n,9003))},beforeEnter:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.Z.dispatch("getStats");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/rating",component:function(){return n.e(781).then(n.bind(n,5781))},beforeEnter:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.Z.dispatch("getRating");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/modules",component:function(){return n.e(273).then(n.bind(n,6273))},beforeEnter:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.Z.dispatch("getModules");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/lessons",component:function(){return n.e(988).then(n.bind(n,3988))},beforeEnter:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.Z.dispatch("getLessons",localStorage.getItem("moduleName"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/quiz",component:function(){return Promise.all([n.e(217),n.e(96)]).then(n.bind(n,5096))},beforeEnter:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.Z.dispatch("getTasks",localStorage.getItem("lessonName"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}],u=(0,s.p7)({routes:i,history:(0,s.PO)()});u.afterEach((function(e,t){return window.scrollTo(0,0)})),t["Z"]=u},7669:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(1138),o=n(3540),s=(n(1539),n(4747),n(1249),n(3907)),a=n(1844),i=n(7348),u=n(9105),c=(0,i.Z)((function e(t){(0,u.Z)(this,e),Object.assign(this,t),this.started=!!t.tasksCompleted,this.completed=t.tasksCompleted==t.tasksTotal,this.percentage=Math.round(t.score/t.scoreMax*100)})),l=(n(6699),n(2023),n(4916),n(4723),n(9714),function(){function e(t){var n,r;(0,u.Z)(this,e),Object.assign(this,t),this.attempts=null!==(n=t.attempts)&&void 0!==n?n:0,this.completed=!!t.attempts,this.answer=null!==(r=t.answer)&&void 0!==r?r:t.key.map((function(e){}))}return(0,i.Z)(e,[{key:"answered",get:function(){return!this.answer.includes(void 0)}},{key:"type",get:function(){return this.key[0].toString().match(/[А-Д]/i)?"radio":"input"}},{key:"booleans",get:function(){var e=this;return this.answer.map((function(t,n){return t==e.key[n]}))}},{key:"percentage",get:function(){return Math.round(this.booleans.sum()/this.booleans.length*100)}},{key:"score",get:function(){return Math.round(this.percentage*this.weight/100)}}]),e}()),d=n(986),f=(0,s.MT)({state:function(){return{modules:[],blocks:[],lessons:[],tasks:[],rating:[],stats:{},loaderVisible:!1,modalVisible:!1,modalColor:void 0,modalIcon:void 0,modalTitle:void 0,modalText:void 0,showTips:!0,showMetrics:!0,server_url:"http://localhost:6506"}},mutations:{setStats:function(e,t){e.stats=t[0]},setRating:function(e,t){e.rating=t},setModules:function(e,t){e.modules=t},setLessons:function(e,t){t.forEach((function(e,n){t[n].lessons=e.lessons.map((function(e){return new c(e)}))})),e.blocks=t},setTasks:function(e,t){e.tasks=t.map((function(e){return new l(e)}))},showLoader:function(e,t){e.loaderVisible=t},showMessage:function(e,t){e.modalVisible=!0,e.modalColor=t.color,e.modalIcon=t.icon,e.modalTitle=t.title,e.modalText=t.text},toggleTips:function(e){e.showTips=!e.showTips},toggleMetrics:function(e){e.showMetrics=!e.showMetrics}},actions:{reg:function(e,t){return(0,o.Z)((0,r.Z)().mark((function n(){var o,s,i,u;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,o=t.username,s=t.email,i=t.password,n.next=4,a.Z.reg(o,s,i);case 4:u=n.sent,localStorage.setItem("username",o),localStorage.setItem("access",u.data.accessToken),localStorage.setItem("refresh",u.data.refreshToken),d.Z.push("confirm");case 9:case"end":return n.stop()}}),n)})))()},login:function(e,t){return(0,o.Z)((0,r.Z)().mark((function n(){var o,s,i;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,o=t.username,s=t.password,localStorage.setItem("username",o),n.next=5,a.Z.login(o,s);case 5:i=n.sent,localStorage.setItem("access",i.data.accessToken),localStorage.setItem("refresh",i.data.refreshToken),d.Z.push("/modules");case 9:case"end":return n.stop()}}),n)})))()},getModules:function(e){return(0,o.Z)((0,r.Z)().mark((function t(){var n,o;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,a.Z.getModules();case 3:o=t.sent,n("setModules",o.data);case 5:case"end":return t.stop()}}),t)})))()},getLessons:function(e,t){return(0,o.Z)((0,r.Z)().mark((function n(){var o,s;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,a.Z.getLessons(t);case 3:s=n.sent,o("setLessons",s.data);case 5:case"end":return n.stop()}}),n)})))()},getTasks:function(e,t){return(0,o.Z)((0,r.Z)().mark((function n(){var o,s;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,a.Z.getTasks(t);case 3:s=n.sent,o("setTasks",s.data);case 5:case"end":return n.stop()}}),n)})))()},getStats:function(e){return(0,o.Z)((0,r.Z)().mark((function t(){var n,o;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,a.Z.getStats();case 3:o=t.sent,n("setStats",o.data);case 5:case"end":return t.stop()}}),t)})))()},getRating:function(e){return(0,o.Z)((0,r.Z)().mark((function t(){var n,o;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,a.Z.getRating();case 3:o=t.sent,n("setRating",o.data);case 5:case"end":return t.stop()}}),t)})))()}}})},9287:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(6252),o=n(3577),s={key:0,class:"modal-underlay flex"},a={class:"modal-content"},i={key:0},u={key:1,class:"modal-buttons"};function c(e,t,n,c,l,d){return n.visible?((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",{class:"modal-window",style:(0,o.j5)({width:n.modalWidth})},[(0,r._)("div",{class:"material-icons modal-cross",onClick:t[0]||(t[0]=function(t){return e.$emit("update:visible",!1)})},"close"),(0,r._)("div",a,[(0,r.WI)(e.$slots,"content")]),e.$slots["buttons"]?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("br",i)),e.$slots["buttons"]?((0,r.wg)(),(0,r.iD)("div",u,[(0,r.WI)(e.$slots,"buttons")])):(0,r.kq)("",!0)],4)])):(0,r.kq)("",!0)}var l={name:"modal-basic",props:{modalWidth:{type:String,required:!1,default:"19em"},visible:{type:Boolean,required:!1,default:!0},buttonColor:{type:String,required:!1,default:"#333"}},computed:{cssProps:function(){return{"--button-color":this.buttonColor}}}},d=n(8118);const f=(0,d.Z)(l,[["render",c]]);var p=f},2429:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(6252),o=n(3577),s=n(7334),a=function(e){return(0,r.dD)("data-v-18097e16"),e=e(),(0,r.Cn)(),e},i={class:"wrapper"},u=a((function(){return(0,r._)("img",{class:"brand-icon",src:s,alt:""},null,-1)})),c=a((function(){return(0,r._)("span",{class:"brand-name"},"SKY WING",-1)})),l=a((function(){return(0,r._)("span",{class:"material-icons-outlined"},"account_circle",-1)}));function d(e,t,n,s,a,d){var f=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",i,[u,c,l,(0,r.Wm)(f,{class:"link",to:"modules"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,o.zw)(a.username),1)]})),_:1})])}var f={data:function(){return{username:localStorage.getItem("username")}}},p=n(8118);const m=(0,p.Z)(f,[["render",d],["__scopeId","data-v-18097e16"]]);var h=m},9157:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(6252);function o(e,t,n,o,s,a){return(0,r.WI)(e.$slots,"default")}var s=n(2429),a={name:"auth-layout",components:{navbar:s.Z}},i=n(8118);const u=(0,i.Z)(a,[["render",o]]);var c=u},4683:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(6252),o=n(3577),s={class:"body-wrapper"};function a(e,t,n,a,i,u){var c=(0,r.up)("navbar");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r._)("div",{class:"header-wrapper",style:(0,o.j5)({background:"linear-gradient(#0008, #0008), url(".concat(n.backgroundImage,")"),backgroundSize:"cover",backgroundPosition:"left 0 top ".concat(n.backgroundOffset,"%")})},[(0,r.WI)(e.$slots,"header",{},void 0,!0)],4),(0,r._)("div",s,[(0,r.WI)(e.$slots,"body",{},void 0,!0)])],64)}var i=n(2429),u={name:"main-layout",components:{navbar:i.Z},props:{backgroundImage:String,backgroundOffset:String}},c=n(8118);const l=(0,c.Z)(u,[["render",a],["__scopeId","data-v-00bfa7d8"]]);var d=l},7334:function(e){"use strict";e.exports="data:image/png;base64,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"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],s=e[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(i=!1,s<a&&(a=s));if(i){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{3:"1c0fac14",96:"6ae05b3d",114:"7cba9696",217:"e59e215c",273:"99f7bf59",502:"29559dcf",522:"6ba652a5",781:"33e8ef49",836:"bf3e6ea9",838:"d8938e79",988:"9b1b60cc"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{3:"1d9eaaf9",96:"95e35b20",114:"0e52bb1e",273:"055600e9",522:"15eb429c",781:"7cfc5bd4",836:"45007522",838:"9bae1773",988:"56bb4346"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="landing:";n.l=function(r,o,s,a){if(e[r])e[r].push(o);else{var i,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[o];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(s){if(o.onerror=o.onload=null,"load"===s.type)n();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=s,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],s=o.getAttribute("data-href");if(s===e||s===t)return o}},r=function(r){return new Promise((function(o,s){var a=n.miniCssF(r),i=n.p+a;if(t(a,i))return o();e(r,i,o,s)}))},o={143:0};n.f.miniCss=function(e,t){var n={3:1,96:1,114:1,273:1,522:1,781:1,836:1,838:1,988:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=s);var a=n.p+n.u(t),i=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,o[1](i)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,a=r[0],i=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var l=u(n)}for(t&&t(r);c<a.length;c++)s=a[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},r=self["webpackChunklanding"]=self["webpackChunklanding"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4496)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.6106e1c6.js.map