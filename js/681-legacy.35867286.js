"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[681],{6165:function(n,r,e){e.d(r,{Z:function(){return b}});var t=e(6252),a=e(3577),u=function(n){return(0,t.dD)("data-v-4a3580e4"),n=n(),(0,t.Cn)(),n},i={class:"wrapper"},s={class:"my-info-section"},o=u((function(){return(0,t._)("div",{class:"material-icons-outlined my-avatar"},"account_circle",-1)})),c={class:"my-info"},l={class:"my-name"},d=u((function(){return(0,t._)("div",{class:"my-score"},"1048 балів",-1)})),f={class:"navigation-section"},m=(0,t.Uk)("Мої курси"),g=(0,t.Uk)("Статистика"),v=(0,t.Uk)("Рейтинг");function _(n,r,e,u,_,p){var w=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("div",s,[o,(0,t._)("div",c,[(0,t._)("div",l,(0,a.zw)(_.username),1),d])]),(0,t._)("div",f,[(0,t.Wm)(w,{class:"navigation-link",to:"modules"},{default:(0,t.w5)((function(){return[m]})),_:1}),(0,t.Wm)(w,{class:"navigation-link",to:"stats"},{default:(0,t.w5)((function(){return[g]})),_:1}),(0,t.Wm)(w,{class:"navigation-link",to:"rating"},{default:(0,t.w5)((function(){return[v]})),_:1})])])}var p={data:function(){return{username:localStorage.getItem("username")}}},w=e(8118);const k=(0,w.Z)(p,[["render",_],["__scopeId","data-v-4a3580e4"]]);var b=k},4681:function(n,r,e){e.r(r),e.d(r,{default:function(){return p}});var t=e(6252),a=e(3577),u=function(n){return(0,t.dD)("data-v-6ba476db"),n=n(),(0,t.Cn)(),n},i=u((function(){return(0,t._)("div",{class:"section-name"},"Рейтинг Учасників",-1)})),s=u((function(){return(0,t._)("br",null,null,-1)})),o={class:"rating-section"},c={class:"user-index"},l={class:"user-name"};function d(n,r,e,u,d,f){var m=(0,t.up)("personal-info-header"),g=(0,t.up)("main-layout");return(0,t.wg)(),(0,t.j4)(g,{backgroundImage:"".concat(n.$cloudinary,"books.webp"),backgroundOffset:"50"},{header:(0,t.w5)((function(){return[(0,t.Wm)(m)]})),body:(0,t.w5)((function(){return[i,s,(0,t._)("div",o,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(f.rating.length,(function(n){return(0,t.wg)(),(0,t.iD)("div",{class:(0,a.C_)(["rating-item",{"rating-item-me":f.rating[n-1].username==d.username}]),key:n},[(0,t._)("span",c,(0,a.zw)(n)+".",1),(0,t._)("span",{class:"user-icon material-icons-outlined",style:(0,a.j5)({color:f.userScoreColors[n-1]})},"account_circle",4),(0,t._)("span",l,(0,a.zw)(f.rating[n-1].username),1),(0,t._)("b",null,(0,a.zw)(f.rating[n-1].score)+" балів",1)],2)})),128))])]})),_:1},8,["backgroundImage"])}e(1249);var f=e(7981),m=e(6165),g={components:{mainLayout:f.Z,personalInfoHeader:m.Z},data:function(){return{username:localStorage.getItem("username")}},computed:{rating:function(){return this.$store.state.rating},userScores:function(){return this.rating.map((function(n){return n.score}))},userScoreColors:function(){var n=this;return this.userScores.map((function(r){return n.mix3(r/n.userScores[0]*100)}))}}},v=e(8118);const _=(0,v.Z)(g,[["render",d],["__scopeId","data-v-6ba476db"]]);var p=_}}]);
//# sourceMappingURL=681-legacy.35867286.js.map