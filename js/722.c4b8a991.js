(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[722],{6434:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var r=t(6252),a=t(3577);const s=n=>((0,r.dD)("data-v-4026eefe"),n=n(),(0,r.Cn)(),n),i={class:"my-info-section"},o=s((()=>(0,r._)("div",{class:"material-icons-outlined my-avatar"},"account_circle",-1))),u={class:"my-info"},c={class:"my-name"},l={class:"my-score"},d={class:"navigation-section"},m=(0,r.Uk)("Мої курси"),g=(0,r.Uk)("Статистика"),f=(0,r.Uk)("Рейтинг");function v(n,e,t,s,v,y){const p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",i,[o,(0,r._)("div",u,[(0,r._)("div",c,(0,a.zw)(v.username??"Гість"),1),(0,r._)("div",l,(0,a.zw)(t.userinfo),1)])]),(0,r._)("div",d,[(0,r.Wm)(p,{class:"navigation-link",to:"modules"},{default:(0,r.w5)((()=>[m])),_:1}),(0,r.Wm)(p,{class:"navigation-link",to:"stats"},{default:(0,r.w5)((()=>[g])),_:1}),v.username?((0,r.wg)(),(0,r.j4)(p,{key:0,class:"navigation-link",to:"rating"},{default:(0,r.w5)((()=>[f])),_:1})):(0,r.kq)("",!0)])],64)}var y={props:{userinfo:{type:String,required:!1}},data(){return{username:localStorage.getItem("username")}}},p=t(8118);const _=(0,p.Z)(y,[["render",v],["__scopeId","data-v-4026eefe"]]);var k=_},8722:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});t(7686),t(4506);var r=t(6252),a=t(3577);const s=n=>((0,r.dD)("data-v-c341512e"),n=n(),(0,r.Cn)(),n),i=s((()=>(0,r._)("div",{class:"section-name"},"Рейтинг Учасників",-1))),o=s((()=>(0,r._)("br",null,null,-1))),u={class:"rating-section"},c={key:0},l={class:"user-index"},d={class:"user-info"},m={class:"user-name"},g={key:1};function f(n,e,t,s,f,v){const y=(0,r.up)("personal-info-header"),p=(0,r.up)("main-layout");return(0,r.wg)(),(0,r.j4)(p,{backgroundImage:`${n.$cloudinary}main.png`,backgroundOffset:"50"},{header:(0,r.w5)((()=>[(0,r.Wm)(y,{userinfo:`${v.myPosition+1?v.myPosition+1:"--"} / ${v.rating.at(-1).index+1} місце у рейтингу`},null,8,["userinfo"])])),body:(0,r.w5)((()=>[i,o,(0,r._)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.rating,((n,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e},[e!==n.index?((0,r.wg)(),(0,r.iD)("br",c)):(0,r.kq)("",!0),(0,r._)("div",{class:(0,a.C_)(["rating-item",{"rating-item-me":n.index==v.myPosition}])},[(0,r._)("span",l,(0,a.zw)(n.index+1)+".",1),(0,r._)("span",{class:"user-icon material-icons-outlined",style:(0,a.j5)({color:v.userColors[e]})},"account_circle",4),(0,r._)("div",d,[(0,r._)("div",m,(0,a.zw)(n.username),1),(0,r._)("div",null,[e<3?((0,r.wg)(),(0,r.iD)("span",{key:0,class:"user-medal material-icons",style:(0,a.j5)({color:f.medalColors[e]})},"star ",4)):(0,r.kq)("",!0),(0,r._)("b",null,(0,a.zw)(n.score)+" балів",1)])])],2),e!==n.index?((0,r.wg)(),(0,r.iD)("br",g)):(0,r.kq)("",!0)])))),128))])])),_:1},8,["backgroundImage"])}var v=t(5762),y=t(6434),p={components:{mainLayout:v.Z,personalInfoHeader:y.Z},data(){return{username:localStorage.getItem("username"),medalColors:["#c9b037","#b4b4b4","#ad8a56"]}},computed:{rating(){let n=this.$store.state.rating.filter((n=>"ysteeltyes"!==n.username));n[0].score;return n.sort(((n,e)=>e.score-n.score)).forEach(((e,t)=>n[t]={...e,index:t})),n.filter(((e,t)=>t<10||t==n.length-1||e.username==this.username))},userScores(){return this.rating.map((n=>n.score))},userColors(){return this.userScores.map((n=>this.mix3(n/this.userScores[3]*100)))},myPosition(){return this.rating.find((n=>n.username==this.username))?.index}}},_=t(8118);const k=(0,_.Z)(p,[["render",f],["__scopeId","data-v-c341512e"]]);var h=k},648:function(n,e,t){var r=t(7854),a=t(1694),s=t(614),i=t(4326),o=t(5112),u=o("toStringTag"),c=r.Object,l="Arguments"==i(function(){return arguments}()),d=function(n,e){try{return n[e]}catch(t){}};n.exports=a?i:function(n){var e,t,r;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(t=d(e=c(n),u))?t:l?i(e):"Object"==(r=i(e))&&s(e.callee)?"Arguments":r}},1694:function(n,e,t){var r=t(5112),a=r("toStringTag"),s={};s[a]="z",n.exports="[object z]"===String(s)},1340:function(n,e,t){var r=t(7854),a=t(648),s=r.String;n.exports=function(n){if("Symbol"===a(n))throw TypeError("Cannot convert a Symbol value to a string");return s(n)}},7686:function(n,e,t){"use strict";var r=t(2109),a=t(7908),s=t(6244),i=t(9303),o=t(1223);r({target:"Array",proto:!0},{at:function(n){var e=a(this),t=s(e),r=i(n),o=r>=0?r:t+r;return o<0||o>=t?void 0:e[o]}}),o("at")},4506:function(n,e,t){"use strict";var r=t(2109),a=t(1702),s=t(4488),i=t(9303),o=t(1340),u=t(7293),c=a("".charAt),l=u((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(n){var e=o(s(this)),t=e.length,r=i(n),a=r>=0?r:t+r;return a<0||a>=t?void 0:c(e,a)}})}}]);
//# sourceMappingURL=722.c4b8a991.js.map