"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[974],{7580:function(e,n,a){a.d(n,{Z:function(){return y}});var s=a(6252),r=a(3577);const t=e=>((0,s.dD)("data-v-7ab48eb6"),e=e(),(0,s.Cn)(),e),i={class:"my-info-section"},o=t((()=>(0,s._)("div",{class:"material-icons-outlined my-avatar"},"account_circle",-1))),c={class:"my-info"},u={class:"my-name"},l={class:"my-score"},d={class:"navigation-section"},m=(0,s.Uk)("Мої курси"),g=(0,s.Uk)("Статистика");function f(e,n,a,t,f,v){const _=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",i,[o,(0,s._)("div",c,[(0,s._)("div",u,(0,r.zw)(f.username??"Гість"),1),(0,s._)("div",l,(0,r.zw)(a.userinfo),1)])]),(0,s._)("div",d,[(0,s.Wm)(_,{class:"navigation-link",to:"modules"},{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(_,{class:"navigation-link",to:"stats"},{default:(0,s.w5)((()=>[g])),_:1})])],64)}var v={props:{userinfo:{type:String,required:!1}},data(){return{username:localStorage.getItem("username")}}},_=a(8118);const p=(0,_.Z)(v,[["render",f],["__scopeId","data-v-7ab48eb6"]]);var y=p},6974:function(e,n,a){a.r(n),a.d(n,{default:function(){return p}});var s=a(6252),r=a(3577);const t=e=>((0,s.dD)("data-v-977a6dc0"),e=e(),(0,s.Cn)(),e),i=t((()=>(0,s._)("div",{class:"section-name"},"Рейтинг Учасників",-1))),o=t((()=>(0,s._)("br",null,null,-1))),c={class:"rating-section"},u={class:"user-index"},l={class:"user-name"};function d(e,n,a,t,d,m){const g=(0,s.up)("personal-info-header"),f=(0,s.up)("main-layout");return(0,s.wg)(),(0,s.j4)(f,{backgroundImage:`${e.$cloudinary}main.png`,backgroundOffset:"50"},{header:(0,s.w5)((()=>[(0,s.Wm)(g,{userinfo:`${m.myPosition} / ${m.rating.length} місце у рейтингу`},null,8,["userinfo"])])),body:(0,s.w5)((()=>[i,o,(0,s._)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.rating.length,(e=>((0,s.wg)(),(0,s.iD)("div",{class:(0,r.C_)(["rating-item",{"rating-item-me":e==m.myPosition}]),key:e},[(0,s._)("span",u,(0,r.zw)(e)+".",1),(0,s._)("span",{class:"user-icon material-icons-outlined",style:(0,r.j5)({color:m.userScoreColors[e-1]})},"account_circle",4),(0,s._)("span",l,(0,r.zw)(m.rating[e-1].username),1),(0,s._)("b",null,(0,r.zw)(m.rating[e-1].score)+" балів",1)],2)))),128))])])),_:1},8,["backgroundImage"])}var m=a(7654),g=a(7580),f={components:{mainLayout:m.Z,personalInfoHeader:g.Z},data(){return{username:localStorage.getItem("username")}},computed:{rating(){return this.$store.state.rating.sort(((e,n)=>n.score-e.score)).filter((e=>"ysteeltyes"!==e.username))},userScores(){return this.rating.map((e=>e.score))},userScoreColors(){return this.userScores.map((e=>this.mix3(e/this.userScores[0]*100)))},myPosition(){return this.rating.map((e=>e.username)).indexOf(this.username)+1}}},v=a(8118);const _=(0,v.Z)(f,[["render",d],["__scopeId","data-v-977a6dc0"]]);var p=_}}]);
//# sourceMappingURL=974.841af74d.js.map