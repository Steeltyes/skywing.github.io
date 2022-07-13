(function(){var e={1844:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r,a=n(1138),o=n(3540),i=(n(2222),n(1539),n(9669)),u=n.n(i),s=n(7669),c=n(986),l=u().create({baseURL:"https://skywing.site",withCredentials:!0,headers:{"Content-Type":"application/json"}});l.interceptors.request.use((function(e){r=setTimeout((function(){return s.Z.commit("showLoader",!0)}),1e3);var t=localStorage.getItem("access");return t&&(e.headers.auth="Bearer ".concat(t)),e}),(function(e){return clearTimeout(r),s.Z.commit("showLoader",!1),Promise.reject(e)})),l.interceptors.response.use((function(e){var t;return clearTimeout(r),s.Z.commit("showLoader",!1),202==(null===e||void 0===e?void 0:e.status)&&s.Z.commit("showMessage",{width:"min(20em, 80%)",color:"#4da64d",icon:"done",title:"Успішно",text:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message}),e}),function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n,o,i,d,f,p,m,h,v,g;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(clearTimeout(r),s.Z.commit("showLoader",!1),403!=(null===(n=t.response)||void 0===n?void 0:n.status)){e.next=6;break}c.Z.push("confirm"),e.next=28;break;case 6:if(401!=(null===(o=t.response)||void 0===o?void 0:o.status)||!t.config){e.next=27;break}if(e.prev=7,m=localStorage.getItem("refresh"),!m){e.next=18;break}return e.next=12,u().get("https://skywing.site/refresh",{headers:{refresh:localStorage.getItem("refresh")},withCredentials:!0});case 12:return g=e.sent,localStorage.setItem("access",null===(h=g.data)||void 0===h?void 0:h.accessToken),localStorage.setItem("refresh",null===(v=g.data)||void 0===v?void 0:v.refreshToken),e.abrupt("return",l.request(t.config));case 18:s.Z.commit("showMessage",{width:"min(24em, 80%)",color:"black",text:"\n              <br/>\n              <div class=\"material-icons-outlined auth-icon\">account_circle</div>\n              <h2>Створення профіля</h2>\n              <p class='auth-text'>\n                Наразі ви переглядаєте сторінку у гостьовому режимі. Зареєструйтесь, \n                щоб відкрити повний доступ до сайту\n              </p><br>\n              <button class='button-plain auth-button' onclick=\"location.href='/reg'\">Реєстрація</button>\n              <small>Вже зареєстровані? <a href='/auth'>Увійти!</a></small>\n              <br/>\n            "});case 19:e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](7),c.Z.push("auth");case 24:throw t;case 27:s.Z.commit("showMessage",{color:"#ff4d4d",title:"Помилка",icon:(null===(i=t.response)||void 0===i||null===(d=i.data)||void 0===d?void 0:d.icon)||"hourglass_empty",text:(null===(f=t.response)||void 0===f||null===(p=f.data)||void 0===p?void 0:p.message)||"Немає зв'язку із сервером. Спробуйте зайти пізніше"});case 28:return e.abrupt("return",Promise.reject(t));case 29:case"end":return e.stop()}}),e,null,[[7,21]])})));return function(t){return e.apply(this,arguments)}}());var d=l,f={reg:function(e,t,n){return(0,o.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",d.post("reg",{username:e,email:t,password:n}));case 1:case"end":return r.stop()}}),r)})))()},login:function(e,t){return(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",d.post("login",{username:e,password:t}));case 1:case"end":return n.stop()}}),n)})))()},logout:function(){return(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:d.post("logout");case 1:case"end":return e.stop()}}),e)})))()},resendActivationLink:function(e){return(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:d.post("resend-activation-link",{email:e});case 1:case"end":return t.stop()}}),t)})))()},requestPasswordRenewal:function(e){return(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:d.post("request-password-renewal",{email:e});case 1:case"end":return t.stop()}}),t)})))()},renewPassword:function(e,t){return(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:d.post("renew-password",{password:e,activationLink:t});case 1:case"end":return n.stop()}}),n)})))()},report:function(e,t){return(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:d.post("report",{topic:e,obj:t});case 1:case"end":return n.stop()}}),n)})))()},getModules:function(){return(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d.get("modules"));case 1:case"end":return e.stop()}}),e)})))()},getLessons:function(e){return(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d.get("lessons/".concat(e)));case 1:case"end":return t.stop()}}),t)})))()},getTasks:function(e,t){return(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",d.get("tasks/?name=".concat(e,"&id=").concat(t)));case 1:case"end":return n.stop()}}),n)})))()},skipAnswer:function(e){return(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d.post("skip",{taskId:e}));case 1:case"end":return t.stop()}}),t)})))()},postAnswer:function(e,t,n,r){return(0,o.Z)((0,a.Z)().mark((function o(){return(0,a.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.abrupt("return",d.post("answer",{moduleId:e,blockId:t,lessonId:n,taskData:r}));case 1:case"end":return a.stop()}}),o)})))()},getPrefabs:function(){return(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d.get("prefabs"));case 1:case"end":return e.stop()}}),e)})))()},getPrefab:function(e){return(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d.get("prefab/".concat(e)));case 1:case"end":return t.stop()}}),t)})))()},createPrefab:function(e){return(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d.get("prefab/create/".concat(e)));case 1:case"end":return t.stop()}}),t)})))()},deletePrefab:function(e){return(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d.get("prefab/delete/".concat(e)));case 1:case"end":return t.stop()}}),t)})))()},postPrefabAnswer:function(e,t){return(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",d.post("prefab/answer",{prefabName:e,taskData:t}));case 1:case"end":return n.stop()}}),n)})))()},getStats:function(){return(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d.get("stats"));case 1:case"end":return e.stop()}}),e)})))()},getRating:function(e){return(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d.get("rating/".concat(e)));case 1:case"end":return t.stop()}}),t)})))()}}},6680:function(e,t,n){"use strict";n(6992),n(8674),n(9601),n(7727);var r=n(9963),a=n(6252),o=n(3577),i={class:"modal-header"},u=["innerHTML"];function s(e,t,n,r,s,c){var l=(0,a.up)("loader"),d=(0,a.up)("modal"),f=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e.$store.state.loaderVisible?((0,a.wg)(),(0,a.j4)(l,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(d,{visible:e.$store.state.modal.visible,"onUpdate:visible":t[0]||(t[0]=function(t){return e.$store.state.modal.visible=t}),modalWidth:e.$store.state.modal.width},{content:(0,a.w5)((function(){return[e.$store.state.modal.icon?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"material-icons-outlined modal-icon",style:(0,o.j5)({color:e.$store.state.modal.color})},(0,o.zw)(e.$store.state.modal.icon),5)):(0,a.kq)("",!0),(0,a._)("div",i,(0,o.zw)(e.$store.state.modal.title),1),(0,a._)("div",{class:"modal-text",innerHTML:e.$store.state.modal.text},null,8,u)]})),_:1},8,["visible","modalWidth"]),(0,a.Wm)(f)],64)}var c={class:"underlay flex"},l=(0,a._)("div",{class:"lds-ripple"},[(0,a._)("div"),(0,a._)("div")],-1),d=[l];function f(e,t){return(0,a.wg)(),(0,a.iD)("div",c,d)}var p=n(8118);const m={},h=(0,p.Z)(m,[["render",f]]);var v=h,g=n(9284);function w(e,t){return(0,a.WI)(e.$slots,"default")}const b={},Z=(0,p.Z)(b,[["render",w]]);var k=Z,y=n(5468),x=n(721),A={components:{loader:v,modal:g.Z,authLayout:y.Z,emptyLayout:k,mainLayout:x.Z},mounted:function(){window.addEventListener("orientationchange",(function(){var e=getComputedStyle(document.body).getPropertyValue("display");document.body.style.display="none",setTimeout((function(){return document.body.style.display=e}),10)}))},data:function(){return{modalVisible:!1}}};const I=(0,p.Z)(A,[["render",s]]);var S=I,T=n(7669),C=n(986),M=n(7398),P=n(5072),$=n.n(P),_=n(6388),q=(n(1038),n(8783),n(1249),n(1539),n(3112),n(9714),{methods:{mix3:function(e){var t=16731469,n=14792525,r=5088845,a=function(e){return Array.from({length:3},(function(t,n){return Math.floor(e/Math.pow(16,2*n)%Math.pow(16,2))}))},o=function(e,t,n){return e.map((function(e,r){return Math.floor(e+(t[r]-e)*(n/100))}))},i=Math.max(0,Math.min(e,100)),u=i<50?[t,n,2*i]:[n,r,2*(i-50)],s=(0,_.Z)(u,3),c=s[0],l=s[1],d=s[2],f=o(a(c),a(l),d),p=f.reduce((function(e,t,n){return e+t*Math.pow(16,2*n)}),0);return"#"+p.toString(16).padStart(6,"0")}}}),V=(0,r.ri)(S);V.use(C.Z),V.use(T.Z),V.use(M.ZP,{config:{id:"G-H6NME2KP25"}}),V.use($()),V.mixin(q),V.mount("#app"),V.config.globalProperties.$cloudinary="https://res.cloudinary.com/skywing/image/upload/",V.config.globalProperties.$red="#ff4d4d",V.config.globalProperties.$yellow="#e1b74d",V.config.globalProperties.$green="#4da64d",V.config.globalProperties.$maxAttempts=2},5072:function(e,t,n){var r=n(6082)["default"],a=n(7246)["default"],o=n(5455)["default"];n(1539),n(2707),n(2222),Array.prototype.max=function(){return Math.max.apply(Math,o(this))},Array.prototype.min=function(){return Math.min.apply(null,this)},Array.prototype.sum=function(){return this.reduce((function(e,t){return e+t}))},Array.prototype.sort0=function(){return this.sort((function(e,t){return t-e}))},Array.prototype.sort1=function(){return this.sort((function(e,t){return e-t}))},Array.prototype.average=function(){return this.sum()/this.length||0},Array.prototype.equals=function(e){return this.length==e.length&&this.every((function(t,n){return t===e[n]}))},Array.prototype.partialSums=function(){return this.reduce((function(e,t){var n=a(e,2),r=n[0],o=n[1];return[r.concat(o+t),o+t]}),[[],0])[0]},Array.prototype.bucket=function(e,t){for(var n=[],a=0;a<Math.floor(t/e);a++)n.push([]);var o,i=r(this);try{for(i.s();!(o=i.n()).done;){var u,s=o.value;(null!==(u=n[Math.floor(s/e)])&&void 0!==u?u:n[n.length-1]).push(s)}}catch(c){i.e(c)}finally{i.f()}return n}},986:function(e,t,n){"use strict";var r=n(1138),a=n(3540),o=(n(1539),n(8783),n(3948),n(2119)),i=n(7669),u=n(6245),s=[{path:"/",component:function(){return n.e(654).then(n.bind(n,9560))}},{path:"/auth",component:function(){return n.e(377).then(n.bind(n,4377))},beforeEnter:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,o,i,s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=null===t||void 0===t||null===(a=t.query)||void 0===a?void 0:a.access,s=null===t||void 0===t||null===(o=t.query)||void 0===o?void 0:o.refresh,i&&(localStorage.setItem("username",(0,u.Z)(i).username),localStorage.setItem("access",i),localStorage.setItem("refresh",s),c.push("modules"));case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/reg",component:function(){return n.e(712).then(n.bind(n,3712))}},{path:"/recall",component:function(){return n.e(406).then(n.bind(n,9406))}},{path:"/confirm",component:function(){return n.e(908).then(n.bind(n,5908))}},{path:"/stats",component:function(){return Promise.all([n.e(695),n.e(517)]).then(n.bind(n,281))},beforeEnter:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.Z.dispatch("getStats");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/rating",component:function(){return Promise.all([n.e(695),n.e(682)]).then(n.bind(n,8124))},beforeEnter:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.Z.dispatch("getRating",(null===t||void 0===t||null===(a=t.query)||void 0===a?void 0:a.limit)||10);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/modules",component:function(){return Promise.all([n.e(695),n.e(486)]).then(n.bind(n,8117))},beforeEnter:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.Z.dispatch("getModules");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/lessons",component:function(){return Promise.all([n.e(861),n.e(860)]).then(n.bind(n,3352))},beforeEnter:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.Z.dispatch("getLessons",localStorage.getItem("moduleName"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/prefabs",component:function(){return Promise.all([n.e(861),n.e(402)]).then(n.bind(n,3138))},beforeEnter:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.Z.dispatch("getPrefabs",localStorage.getItem("moduleName"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/quiz",component:function(){return Promise.all([n.e(546),n.e(257)]).then(n.bind(n,8663))},beforeEnter:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.Z.dispatch("getTasks",{lessonName:localStorage.getItem("lessonName"),lessonId:localStorage.getItem("lessonId")});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{path:"/prefab",component:function(){return Promise.all([n.e(546),n.e(587)]).then(n.bind(n,8640))},beforeEnter:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.Z.dispatch("getPrefab",localStorage.getItem("lessonName"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}],c=(0,o.p7)({routes:s,history:(0,o.PO)()});c.afterEach((function(e,t){return window.scrollTo(0,0)})),t["Z"]=c},7669:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(1138),a=n(3540),o=(n(1539),n(4747),n(1249),n(3907)),i=n(6245),u=n(1844),s=n(7348),c=n(9105),l=(0,s.Z)((function e(t){(0,c.Z)(this,e),Object.assign(this,t),this.started=!!t.tasksCompleted,this.completed=t.tasksCompleted==t.tasksTotal,this.percentage=Math.round(t.score/t.scoreMax*100)})),d=(n(4916),n(4723),n(9714),n(4944),n(3792),n(7327),function(){function e(t){var n,r;(0,c.Z)(this,e),Object.assign(this,t),this.attempts=null!==(n=t.attempts)&&void 0!==n?n:0,this.completed=!!t.attempts,this.answer=null!==(r=t.answer)&&void 0!==r?r:t.key.map((function(e){}))}return(0,s.Z)(e,[{key:"type",get:function(){return this.key[0].toString().match(/[А-Д]/i)?"radio":"input"}},{key:"answered",get:function(){return this.answer.every((function(e){return!!e}))}},{key:"booleans",get:function(){var e=this;return this.answer.map((function(t,n){return t==e.key[n]}))}},{key:"percentage",get:function(){return Math.round(this.booleans.sum()/this.booleans.length*100)}},{key:"score",get:function(){return Math.round(this.percentage*this.weight/100)}},{key:"answersTotal",get:function(){return this.distribution.flat().sum()}},{key:"correctAnswersTotal",get:function(){var e=this;return this.distribution.map((function(t,n){return t.filter((function(t,r){return e.key[n]==String.fromCharCode(1040+r)}))})).flat().sum()}},{key:"complexity",get:function(){return Math.max(1,10-Math.round(this.correctAnswersTotal/this.answersTotal*10))}}]),e}()),f=n(986),p=(0,o.MT)({state:function(){return{modules:[],blocks:[],lessons:[],tasks:[],rating:[],stats:{},loaderVisible:!1,modal:{visible:!1},showTips:!0,showMetrics:!0}},mutations:{setStats:function(e,t){e.stats=t[0]},setRating:function(e,t){e.rating=t},setModules:function(e,t){e.modules=t},setLessons:function(e,t){t.forEach((function(e,n){t[n].lessons=e.lessons.map((function(e){return new l(e)}))})),e.blocks=t},setPrefabs:function(e,t){e.lessons=t.map((function(e){return new l(e)}))},setTasks:function(e,t){e.tasks=t.map((function(e){return new d(e)}))},showLoader:function(e,t){e.loaderVisible=t},showMessage:function(e,t){e.modal=t,e.modal.visible=!0},toggleTips:function(e){e.showTips=!e.showTips},toggleMetrics:function(e){e.showMetrics=!e.showMetrics}},actions:{reg:function(e,t){return(0,a.Z)((0,r.Z)().mark((function e(){var n,a,o;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.username,a=t.email,o=t.password,e.next=3,u.Z.reg(n,a,o);case 3:e.sent,f.Z.push("confirm");case 5:case"end":return e.stop()}}),e)})))()},login:function(e,t){return(0,a.Z)((0,r.Z)().mark((function e(){var n,a,o;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.next=3,u.Z.login(n,a);case 3:o=e.sent,localStorage.setItem("access",o.data.accessToken),localStorage.setItem("refresh",o.data.refreshToken),o.data.avatar&&localStorage.setItem("avatar",o.data.avatar),localStorage.setItem("username",(0,i.Z)(o.data.accessToken).username),f.Z.push("/modules");case 9:case"end":return e.stop()}}),e)})))()},getModules:function(e){return(0,a.Z)((0,r.Z)().mark((function t(){var n,a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,u.Z.getModules();case 3:a=t.sent,n("setModules",a.data);case 5:case"end":return t.stop()}}),t)})))()},getLessons:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,o;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,u.Z.getLessons(t);case 3:o=n.sent,a("setLessons",o.data);case 5:case"end":return n.stop()}}),n)})))()},getPrefabs:function(e){return(0,a.Z)((0,r.Z)().mark((function t(){var n,a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,u.Z.getPrefabs();case 3:a=t.sent,n("setPrefabs",a.data);case 5:case"end":return t.stop()}}),t)})))()},getTasks:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,o;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,u.Z.getTasks(t.lessonName,t.lessonId);case 3:o=n.sent,a("setTasks",o.data);case 5:case"end":return n.stop()}}),n)})))()},getPrefab:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,o;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,u.Z.getPrefab(t);case 3:o=n.sent,a("setTasks",o.data);case 5:case"end":return n.stop()}}),n)})))()},getStats:function(e){return(0,a.Z)((0,r.Z)().mark((function t(){var n,a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,u.Z.getStats();case 3:a=t.sent,n("setStats",a.data);case 5:case"end":return t.stop()}}),t)})))()},getRating:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,o;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,u.Z.getRating(t);case 3:o=n.sent,a("setRating",o.data);case 5:case"end":return n.stop()}}),n)})))()}}})},2432:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});n(3210);var r=n(6252),a=n(3577),o=["value"],i={key:0},u={key:0,class:"input-error-message"},s={key:1,class:"input-error-message"};function c(e,t,n,c,l,d){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("input",{type:"text",class:(0,a.C_)(["input-textfield-line",{"input-textfield-invalid":l.v$.modelValue.$error}]),value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value.trim())}),placeholder:"Ваш email"},null,42,o),l.v$.modelValue.$error?((0,r.wg)(),(0,r.iD)("div",i,[l.v$.modelValue.required.$invalid?((0,r.wg)(),(0,r.iD)("div",u,"Поле має бути заповнене")):(0,r.kq)("",!0),l.v$.modelValue.email.$invalid?((0,r.wg)(),(0,r.iD)("div",s,"Некоректний формат")):(0,r.kq)("",!0)])):(0,r.kq)("",!0)],64)}var l=n(4028),d=n(2587),f={props:{modelValue:{type:String,required:!1,default:""}},data:function(){return{v$:(0,l.ZP)()}},validations:function(){return{modelValue:{required:d.C1,email:d.Do}}}},p=n(8118);const m=(0,p.Z)(f,[["render",c]]);var h=m},1950:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});n(3210);var r=n(6252),a=n(3577),o=["value","placeholder"],i={key:0},u={key:0,class:"input-error-message"},s={key:1,class:"input-error-message"},c={key:2,class:"input-error-message"};function l(e,t,n,l,d,f){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("input",{type:"text",class:(0,a.C_)(["input-textfield-line",{"input-textfield-invalid":d.v$.modelValue.$error}]),value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value.trim())}),placeholder:n.placeholder},null,42,o),d.v$.modelValue.$error?((0,r.wg)(),(0,r.iD)("div",i,[d.v$.modelValue.required.$invalid?((0,r.wg)(),(0,r.iD)("div",u,"Поле має бути заповнене")):(0,r.kq)("",!0),d.v$.modelValue.minLength.$invalid?((0,r.wg)(),(0,r.iD)("div",s,"Поле має містите більше "+(0,a.zw)(n.min)+" символів",1)):(0,r.kq)("",!0),d.v$.modelValue.alphaNum.$invalid?((0,r.wg)(),(0,r.iD)("div",c,"Поле може містити лише латинські літери і цифри")):(0,r.kq)("",!0)])):(0,r.kq)("",!0)],64)}n(9653);var d=n(4028),f=n(2587),p={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},min:{type:[String,Number],required:!1,default:3},isRequired:{type:Boolean,required:!1,default:!0},isAlphanumeric:{type:Boolean,required:!1,default:!1}},data:function(){return{v$:(0,d.ZP)()}},validations:function(){return{modelValue:{required:f.C1,minLength:(0,f.Ei)(3),alphaNum:!this.isAlphanumeric||f.Pf}}}},m=n(8118);const h=(0,m.Z)(p,[["render",l]]);var v=h},1965:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});n(3210);var r=n(6252),a=n(3577),o=["placeholder","value"],i={key:0,class:"input-error-message"};function u(e,t,n,u,s,c){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("textarea",{rows:"7",class:(0,a.C_)(["input-textfield-line",{"input-textfield-invalid":s.v$.modelValue.$error}]),placeholder:n.placeholder,value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value.trim())})},null,42,o),s.v$.modelValue.$error?((0,r.wg)(),(0,r.iD)("div",i,"Поле має бути заповнене")):(0,r.kq)("",!0)],64)}var s=n(4028),c=n(2587),l={props:{modelValue:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""}},data:function(){return{v$:(0,s.ZP)()}},validations:function(){return{modelValue:{required:c.C1}}}},d=n(8118);const f=(0,d.Z)(l,[["render",u]]);var p=f},9284:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(6252),a=n(3577),o={key:0,class:"modal-underlay"},i={class:"modal-content"},u={key:0},s={key:1,class:"modal-buttons"};function c(e,t,n,c,l,d){return n.visible?((0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",{class:"modal-window",style:(0,a.j5)({width:n.modalWidth})},[(0,r._)("div",{class:"material-icons modal-cross",onClick:t[0]||(t[0]=function(e){return d.close()})},"close"),(0,r._)("div",i,[(0,r.WI)(e.$slots,"content")]),e.$slots["buttons"]?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("br",u)),e.$slots["buttons"]?((0,r.wg)(),(0,r.iD)("div",s,[(0,r.WI)(e.$slots,"buttons")])):(0,r.kq)("",!0)],4)])):(0,r.kq)("",!0)}var l={props:{modalWidth:{type:String,required:!1,default:"19em"},visible:{type:Boolean,required:!1,default:!0}},watch:{visible:function(e){document.body.style.overflowY=e?"hidden":"auto"}},methods:{close:function(){this.$emit("update:visible",!1)}}},d=n(8118);const f=(0,d.Z)(l,[["render",c]]);var p=f},3958:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(6252),a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsEAAA7BAbiRa+0AAAQnSURBVFhHrZZdbBRVFMfPuTOzW7a0EJbyoRJjCD60RRMSY0AEE6OGDfIAhkggGBM/oDXyYkCIT2IboiZAKBTQEElAH0gDiVAK8lCoccHEB6VINPqCH1GwgKWF7e7Mvf5n566l7J1ZFuaXTO89/9nu/c89555ZJgP2zpu1ZDuXidSvpOgYee4XbmvqB307VswG9rrTMfwZREUUKfkNSdkmrl3pyW+aobR+3wg9VoKJxVNk2d0yPTVrd+ae1/p9YzZQyA/hoQs6GguLJ2Gkx96TP4JUPazVe8aYAh8scAqLPavDENQgeXI9Dw9+UninQWqxKsJT4MnN/t8gCIPrybJ2q7oJh5wdN+q1WBWhBtyWmtMkvQ2YVi44FktVouasvevWLK3cNaEpKGF3jqzCU+7D1AmUCJT6HUc247aMO6+VioTugOzn6fnzluOuTR7Al87BETwEOXo3mB/yT0o1OxFqgFkddIR3UV7gdbeerv3NXZNYjtPhG9mP2+YT4hOYOO50DE3SSiTGFKgLRWN/4JpWFIgGFHEnxmNM6pzTO/wIWc4mEmI1NHNqlOwW1/9ZnN/wQOSuhe2Ahev2qk5j4fdwZWHkzMjC8dOwI69hRxqx0FH9mbGwyMj69Os6CsVogJuKW3wpiMYCE/MFq6+Rmi4YIXHt8hLUyMsowCv6I6MI0Y7jOVFHRkJrAHyrRxMMI0sFy+9zi2dsHJ4//jB2YzZ244S+H8CcVk7ibR0ZCTUgFe/CUKkHpFCsbY5ws7ln6qbw0GAGRfoh9NH/Y9HqbL2a0FEZoQasZnUO+f5Mh5GgkudYLM/mXmhY/VLy03fRwFogB62ZeYqqSS0qzg1EpYAKnt0CE+YiKyeF2th38InWLTfm1e2BiY1a93fhOT0rI9JA8rFCzlNimVL8AcKbgRoJw8T6hChsP9M492Ok4/NApbnF0UDFVlzC6xcNyPcaFN+bCB8M1HBQQ1tre69vdp3URYQJpGKy+4Zd9sa8awMl3H4rIUi+CDPvI2wMVCMKJl5J9uUcvEs6EE+EgXxwa5TIFJiwm728aFZdksTjqI8VkLK4TKfFT8e2o02ZHvQIY0/xqXoHTHj9PA+NoR3pWail/4HJtkRf7isSVl8sKQgDJvzvWomn3o2xtigG/ILrUXRXY0+pOgUm0JY7sHwGveMATs0CSAPBnSIzXZo0Wc/LiMUAOInt/1LBiGD+EcW3Clrpidmiq1P1vIxYDCiyujH8hVkrk9fFLHqRe/8HjM8I+kj5i0oTiwGryXXxoKd0mGGSO5WijzDHwNuRmr+DW+XElQKfPj0C9SpqYhwWzyId7Vo0EpsBJPwnPfXxj8RbnhRL7Gb5r9aMxLgDfGeX+86Z7d1+GozEaECVfsLlYGadx0m/BioSWyPCEfQXTCPvW0ST/DlQK0H0H2sRajipWEjKAAAAAElFTkSuQmCC",o=function(e){return(0,r.dD)("data-v-16ac1a98"),e=e(),(0,r.Cn)(),e},i={class:"wrapper"},u=o((function(){return(0,r._)("span",null,[(0,r._)("img",{class:"brand-icon",src:a,alt:""}),(0,r.Uk)("  "),(0,r._)("span",{class:"brand-name"},"SKY WING")],-1)}));function s(e,t,n,a,o,s){return(0,r.wg)(),(0,r.iD)("div",i,[u,(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var c={},l=n(8118);const d=(0,l.Z)(c,[["render",s],["__scopeId","data-v-16ac1a98"]]);var f=d},5468:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(6252),a={class:"auth-background"};function o(e,t,n,o,i,u){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.WI)(e.$slots,"default")])}var i=n(3958),u={name:"auth-layout",components:{navbar:i.Z}},s=n(8118);const c=(0,s.Z)(u,[["render",o]]);var l=c},721:function(e,t,n){"use strict";n.d(t,{Z:function(){return U}});var r=n(6252),a=n(3577),o=function(e){return(0,r.dD)("data-v-4a188626"),e=e(),(0,r.Cn)(),e},i=o((function(){return(0,r._)("span",{class:"material-icons-outlined"},"account_circle",-1)})),u=(0,r.Uk)("  "),s={class:"link"},c=(0,r.Uk)("Увійти"),l={class:"body-wrapper"};function d(e,t,n,o,d,f){var p=(0,r.up)("sidebar"),m=(0,r.up)("router-link"),h=(0,r.up)("navbar");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(h,null,{default:(0,r.w5)((function(){return[i,u,d.username?((0,r.wg)(),(0,r.j4)(p,{key:0},{default:(0,r.w5)((function(){return[(0,r._)("span",s,(0,a.zw)(d.username),1)]})),_:1})):((0,r.wg)(),(0,r.j4)(m,{key:1,class:"link",to:"auth"},{default:(0,r.w5)((function(){return[c]})),_:1}))]})),_:1}),(0,r._)("div",{class:"header-wrapper",style:(0,a.j5)({background:"linear-gradient(#0008, #0008), url(".concat(n.backgroundImage,")"),backgroundSize:"cover",backgroundPosition:"left 0 top ".concat(n.backgroundOffset,"%")})},[(0,r.WI)(e.$slots,"header",{},void 0,!0)],4),(0,r._)("div",l,[(0,r.WI)(e.$slots,"body",{},void 0,!0)])],64)}var f=n(3958),p={for:"toggle-menu"},m={type:"checkbox",id:"toggle-menu",ref:"checkbox"},h={class:"side-menu"},v=["onClick"],g={class:"material-icons-outlined menu-entry-icon"},w={class:"menu-entry-label"};function b(e,t,n,o,i,u){var s=(0,r.up)("modal-feedback");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s,{visible:i.modalFeedbackVisible,"onUpdate:visible":t[0]||(t[0]=function(e){return i.modalFeedbackVisible=e})},null,8,["visible"]),(0,r._)("label",p,[(0,r.WI)(e.$slots,"default")]),(0,r._)("input",m,null,512),(0,r._)("div",{class:"underlay",onClick:t[1]||(t[1]=function(t){return e.$refs.checkbox.click()})}),(0,r._)("div",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.menuEntries,(function(t){return(0,r.wg)(),(0,r.iD)("div",{class:"menu-entry",onClick:function(n){t.action(),e.$refs.checkbox.click()}},[(0,r._)("div",g,(0,a.zw)(t.icon),1),(0,r._)("div",w,(0,a.zw)(t.label),1)],8,v)})),256))])],64)}var Z=n.p+"img/icon-telegram.40065390.png",k=n.p+"img/icon-viber.6c21f081.png",y=function(e){return(0,r.dD)("data-v-d25a835a"),e=e(),(0,r.Cn)(),e},x=y((function(){return(0,r._)("br",null,null,-1)})),A=y((function(){return(0,r._)("h3",{style:{"text-align":"center"}},"Маєте питання?",-1)})),I=y((function(){return(0,r._)("div",{class:"modal-text"},"Напишіть нам у месенджері:",-1)})),S=y((function(){return(0,r._)("div",{class:"display: flex"},[(0,r._)("a",{class:"icon-social",href:"https://telegram.me/sky_wing",target:"_blank",rel:"noopener noreferrer"},[(0,r._)("img",{src:Z})]),(0,r._)("a",{class:"icon-social",href:"viber://chat?number=%2B380665299228",target:"_blank",rel:"noopener noreferrer"},[(0,r._)("img",{src:k})])],-1)})),T=y((function(){return(0,r._)("div",{class:"modal-separator"},"або",-1)})),C=y((function(){return(0,r._)("div",{class:"modal-text"},"Скористайтесь цією формою і отримайте відповідь на електронну пошту:",-1)}));function M(e,t,n,o,i,u){var s=(0,r.up)("input-textarea"),c=(0,r.up)("modal");return(0,r.wg)(),(0,r.j4)(c,{modalWidth:"min(26em,90%)",buttonColor:i.colorTheme},{content:(0,r.w5)((function(){return[x,A,I,S,T,C,(0,r.Wm)(s,{modelValue:i.reportData.text,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.reportData.text=e}),placeholder:"Питання чи опис проблеми",ref:"inputText"},null,8,["modelValue"])]})),buttons:(0,r.w5)((function(){return[(0,r._)("button",{class:"button-small",style:(0,a.j5)({background:i.colorTheme}),onClick:t[1]||(t[1]=function(e){return u.report()})},"Надіслати",4)]})),_:1},8,["buttonColor"])}var P=n(1138),$=n(3540),_=(n(1249),n(7941),n(1539),n(1844)),q=n(1950),V=n(2432),E=n(1965),D=n(9284),j={components:{inputText:q.Z,inputEmail:V.Z,inputTextarea:E.Z,modal:D.Z},data:function(){return{colorTheme:localStorage.getItem("colorTheme"),reportData:{text:""}}},computed:{inputs:function(){var e=this;return Object.keys(this.$refs).map((function(t){return e.$refs[t]}))}},methods:{report:function(){var e=this;return(0,$.Z)((0,P.Z)().mark((function t(){return(0,P.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.inputs.map((function(e){return e.v$.$touch()})),e.inputs.some((function(e){return e.v$.$error}))){t.next=5;break}return t.next=4,_.Z.report("Нове звернення на skywing.online",e.reportData);case 4:e.$emit("update:visible",!1);case 5:case"end":return t.stop()}}),t)})))()}}},O=n(8118);const L=(0,O.Z)(j,[["render",M],["__scopeId","data-v-d25a835a"]]);var W=L,N={components:{modalFeedback:W},data:function(){return{modalFeedbackVisible:!1,menuEntries:[{icon:"bookmark_border",label:"Мої модулі",action:this.gotoModules},{icon:"bar_chart",label:"Статистика",action:this.gotoStats},{icon:"grade",label:"Рейтинг",action:this.gotoRating},{icon:"edit",label:"Написати експерту",action:this.showFeedbackModal},{icon:"logout",label:"Вийти з акаунта",action:this.logout}]}},methods:{showFeedbackModal:function(){this.modalFeedbackVisible=!0},gotoModules:function(){this.$router.push("modules")},gotoStats:function(){this.$router.push("stats")},gotoRating:function(){this.$router.push("rating")},logout:function(){localStorage.removeItem("access"),localStorage.removeItem("refresh"),localStorage.removeItem("username"),localStorage.removeItem("avatar"),this.$router.push("/")}}};const R=(0,O.Z)(N,[["render",b]]);var H=R,F={name:"main-layout",components:{navbar:f.Z,sidebar:H},props:{backgroundImage:String,backgroundOffset:String},data:function(){return{username:localStorage.getItem("username")}}};const Y=(0,O.Z)(F,[["render",d],["__scopeId","data-v-4a188626"]]);var U=Y}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{257:"e44d43d9",377:"5ccfe8a9",402:"16ef8af5",406:"31247f7b",486:"c1632769",517:"e7e94be9",546:"85e8d062",587:"fef9223e",654:"16c7e6b2",682:"5df137f6",695:"f921a7f6",712:"5d50ee7e",860:"0b1349d1",861:"89cc27e3",908:"f46d50ea"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{257:"70d61908",377:"89f276e4",402:"b65869c1",486:"edd5fd23",517:"2570c37a",587:"47e97f90",654:"81d2f03a",682:"77ecf916",860:"9162faa2",908:"4260ab38"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="landing:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var u,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[a];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return a();e(r,u,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={257:1,377:1,402:1,486:1,517:1,587:1,654:1,682:1,860:1,908:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var l=s(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunklanding"]=self["webpackChunklanding"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6680)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.2b6a2219.js.map