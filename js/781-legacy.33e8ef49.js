"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[781],{9464:function(n,t,r){r.d(t,{Z:function(){return w}});var e=r(6252),a=r(3577),i=function(n){return(0,e.dD)("data-v-5129c04e"),n=n(),(0,e.Cn)(),n},o={class:"my-info-section"},u=i((function(){return(0,e._)("div",{class:"material-icons-outlined my-avatar"},"account_circle",-1)})),s={class:"my-info"},c={class:"my-name"},l={class:"my-score"},f={class:"navigation-section"},d=(0,e.Uk)("Мої курси"),m=(0,e.Uk)("Статистика"),g=(0,e.Uk)("Рейтинг");function v(n,t,r,i,v,_){var p=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",o,[u,(0,e._)("div",s,[(0,e._)("div",c,(0,a.zw)(v.username),1),(0,e._)("div",l,(0,a.zw)(r.userinfo),1)])]),(0,e._)("div",f,[(0,e.Wm)(p,{class:"navigation-link",to:"modules"},{default:(0,e.w5)((function(){return[d]})),_:1}),(0,e.Wm)(p,{class:"navigation-link",to:"stats"},{default:(0,e.w5)((function(){return[m]})),_:1}),(0,e.Wm)(p,{class:"navigation-link",to:"rating"},{default:(0,e.w5)((function(){return[g]})),_:1})])],64)}var _={props:{userinfo:{type:String,required:!1}},data:function(){return{username:localStorage.getItem("username")}}},p=r(8118);const y=(0,p.Z)(_,[["render",v],["__scopeId","data-v-5129c04e"]]);var w=y},5781:function(n,t,r){r.r(t),r.d(t,{default:function(){return p}});r(2222);var e=r(6252),a=r(3577),i=function(n){return(0,e.dD)("data-v-d3288f50"),n=n(),(0,e.Cn)(),n},o=i((function(){return(0,e._)("div",{class:"section-name"},"Рейтинг Учасників",-1)})),u=i((function(){return(0,e._)("br",null,null,-1)})),s={class:"rating-section"},c={class:"user-index"},l={class:"user-name"};function f(n,t,r,i,f,d){var m=(0,e.up)("personal-info-header"),g=(0,e.up)("main-layout");return(0,e.wg)(),(0,e.j4)(g,{backgroundImage:"".concat(n.$cloudinary,"main.png"),backgroundOffset:"50"},{header:(0,e.w5)((function(){return[(0,e.Wm)(m,{userinfo:"".concat(d.myPosition," / ").concat(d.rating.length," місце у рейтингу")},null,8,["userinfo"])]})),body:(0,e.w5)((function(){return[o,u,(0,e._)("div",s,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(d.rating.length,(function(n){return(0,e.wg)(),(0,e.iD)("div",{class:(0,a.C_)(["rating-item",{"rating-item-me":n==d.myPosition}]),key:n},[(0,e._)("span",c,(0,a.zw)(n)+".",1),(0,e._)("span",{class:"user-icon material-icons-outlined",style:(0,a.j5)({color:d.userScoreColors[n-1]})},"account_circle",4),(0,e._)("span",l,(0,a.zw)(d.rating[n-1].username),1),(0,e._)("b",null,(0,a.zw)(d.rating[n-1].score)+" балів",1)],2)})),128))])]})),_:1},8,["backgroundImage"])}r(7327),r(1539),r(1249);var d=r(4683),m=r(9464),g={components:{mainLayout:d.Z,personalInfoHeader:m.Z},data:function(){return{username:localStorage.getItem("username")}},computed:{rating:function(){return this.$store.state.rating.filter((function(n){return"ysteeltyes"!==n}))},userScores:function(){return this.rating.map((function(n){return n.score}))},userScoreColors:function(){var n=this;return this.userScores.map((function(t){return n.mix3(t/n.userScores[0]*100)}))},myPosition:function(){return this.rating.map((function(n){return n.username})).indexOf(this.username)+1}}},v=r(8118);const _=(0,v.Z)(g,[["render",f],["__scopeId","data-v-d3288f50"]]);var p=_},7327:function(n,t,r){var e=r(2109),a=r(2092).filter,i=r(1194),o=i("filter");e({target:"Array",proto:!0,forced:!o},{filter:function(n){return a(this,n,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=781-legacy.33e8ef49.js.map