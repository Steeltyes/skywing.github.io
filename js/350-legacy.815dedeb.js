"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[350],{9464:function(n,r,t){t.d(r,{Z:function(){return k}});var e=t(6252),a=t(3577),i=function(n){return(0,e.dD)("data-v-5129c04e"),n=n(),(0,e.Cn)(),n},u={class:"my-info-section"},o=i((function(){return(0,e._)("div",{class:"material-icons-outlined my-avatar"},"account_circle",-1)})),s={class:"my-info"},c={class:"my-name"},l={class:"my-score"},f={class:"navigation-section"},d=(0,e.Uk)("Мої курси"),m=(0,e.Uk)("Статистика"),g=(0,e.Uk)("Рейтинг");function v(n,r,t,i,v,_){var p=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",u,[o,(0,e._)("div",s,[(0,e._)("div",c,(0,a.zw)(v.username),1),(0,e._)("div",l,(0,a.zw)(t.userinfo),1)])]),(0,e._)("div",f,[(0,e.Wm)(p,{class:"navigation-link",to:"modules"},{default:(0,e.w5)((function(){return[d]})),_:1}),(0,e.Wm)(p,{class:"navigation-link",to:"stats"},{default:(0,e.w5)((function(){return[m]})),_:1}),(0,e.Wm)(p,{class:"navigation-link",to:"rating"},{default:(0,e.w5)((function(){return[g]})),_:1})])],64)}var _={props:{userinfo:{type:String,required:!1}},data:function(){return{username:localStorage.getItem("username")}}},p=t(8118);const w=(0,p.Z)(_,[["render",v],["__scopeId","data-v-5129c04e"]]);var k=w},6350:function(n,r,t){t.r(r),t.d(r,{default:function(){return p}});t(2222);var e=t(6252),a=t(3577),i=function(n){return(0,e.dD)("data-v-237feea6"),n=n(),(0,e.Cn)(),n},u=i((function(){return(0,e._)("div",{class:"section-name"},"Рейтинг Учасників",-1)})),o=i((function(){return(0,e._)("br",null,null,-1)})),s={class:"rating-section"},c={class:"user-index"},l={class:"user-name"};function f(n,r,t,i,f,d){var m=(0,e.up)("personal-info-header"),g=(0,e.up)("main-layout");return(0,e.wg)(),(0,e.j4)(g,{backgroundImage:"".concat(n.$cloudinary,"main.png"),backgroundOffset:"50"},{header:(0,e.w5)((function(){return[(0,e.Wm)(m,{userinfo:"".concat(d.myPosition," / ").concat(d.rating.length," місце у рейтингу")},null,8,["userinfo"])]})),body:(0,e.w5)((function(){return[u,o,(0,e._)("div",s,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(d.rating.length,(function(n){return(0,e.wg)(),(0,e.iD)("div",{class:(0,a.C_)(["rating-item",{"rating-item-me":n==d.myPosition}]),key:n},[(0,e._)("span",c,(0,a.zw)(n)+".",1),(0,e._)("span",{class:"user-icon material-icons-outlined",style:(0,a.j5)({color:d.userScoreColors[n-1]})},"account_circle",4),(0,e._)("span",l,(0,a.zw)(d.rating[n-1].username),1),(0,e._)("b",null,(0,a.zw)(d.rating[n-1].score)+" балів",1)],2)})),128))])]})),_:1},8,["backgroundImage"])}t(1249);var d=t(4683),m=t(9464),g={components:{mainLayout:d.Z,personalInfoHeader:m.Z},data:function(){return{username:localStorage.getItem("username")}},computed:{rating:function(){return this.$store.state.rating},userScores:function(){return this.rating.map((function(n){return n.score}))},userScoreColors:function(){var n=this;return this.userScores.map((function(r){return n.mix3(r/n.userScores[0]*100)}))},myPosition:function(){return this.rating.map((function(n){return n.username})).indexOf(this.username)+1}}},v=t(8118);const _=(0,v.Z)(g,[["render",f],["__scopeId","data-v-237feea6"]]);var p=_}}]);
//# sourceMappingURL=350-legacy.815dedeb.js.map