(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[3],{1800:function(t,a,r){"use strict";r.d(a,{Z:function(){return d}});var e=r(6252),n={viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none"},i=["x","height","width","fill"],s=["to"];function c(t,a,r,c,o,u){return(0,e.wg)(),(0,e.iD)("svg",n,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.data.length,(function(t){return(0,e.wg)(),(0,e.iD)("rect",{key:t,x:100/r.data.length*(t-1)+ +r.gap/2,height:u.percentages[t-1]||2,y:"0",width:100/r.data.length-+r.gap,fill:r.colors[t-1]},[r.isAnimated?((0,e.wg)(),(0,e.iD)("animate",{key:0,attributeName:"height",from:"0",to:u.percentages[t-1]+5,dur:"2s",fill:"freeze"},null,8,s)):(0,e.kq)("",!0)],8,i)})),128))])}r(9653),r(1249);var o={name:"histogram",props:{data:{type:Array,required:!0},colors:{type:Array,required:!0},isAnimated:{type:Boolean,required:!1,default:!1},gap:{type:Number,required:!1,default:0}},computed:{percentages:function(){var t=this;return this.data.map((function(a){return Math.ceil(a/t.data.max()*100)}))}}},u=r(8118);const l=(0,u.Z)(o,[["render",c],["__scopeId","data-v-2375c831"]]);var d=l},7925:function(t,a,r){"use strict";r.d(a,{Z:function(){return g}});var e=r(6252),n=r(3577),i={class:"relative elastic"},s={viewBox:"0 0 110 110",width:"100%",height:"100%"},c={class:"centered"};function o(t,a,r,o,u,l){return(0,e.wg)(),(0,e.iD)("div",i,[((0,e.wg)(),(0,e.iD)("svg",s,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.data.length,(function(t){return(0,e.wg)(),(0,e.iD)("g",{key:t},[r.data[r.data.length-t]?((0,e.wg)(),(0,e.iD)("circle",{key:0,style:(0,n.j5)({strokeDasharray:l.percentages[r.data.length-t]*Math.PI+" 314",strokeDashoffset:-l.partials[r.data.length-t]*Math.PI,strokeWidth:r.thickness,stroke:r.colors[r.data.length-t]}),r:"50",cx:"55",cy:"55"},null,4)):(0,e.kq)("",!0)])})),128))])),(0,e._)("div",c,[(0,e.WI)(t.$slots,"default",{},void 0,!0)])])}var u=r(9225),l=(r(9653),r(1249),r(2222),{props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages:function(){var t=this;return this.data.map((function(a){return Math.ceil(a/t.data.sum()*100)}))},partials:function(){return[0].concat((0,u.Z)(this.percentages.partialSums()))}}}),d=r(8118);const f=(0,d.Z)(l,[["render",o],["__scopeId","data-v-09ebced2"]]);var g=f},7580:function(t,a,r){"use strict";r.d(a,{Z:function(){return w}});var e=r(6252),n=r(3577),i=function(t){return(0,e.dD)("data-v-7ab48eb6"),t=t(),(0,e.Cn)(),t},s={class:"my-info-section"},c=i((function(){return(0,e._)("div",{class:"material-icons-outlined my-avatar"},"account_circle",-1)})),o={class:"my-info"},u={class:"my-name"},l={class:"my-score"},d={class:"navigation-section"},f=(0,e.Uk)("Мої курси"),g=(0,e.Uk)("Статистика");function p(t,a,r,i,p,v){var h,m=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",s,[c,(0,e._)("div",o,[(0,e._)("div",u,(0,n.zw)(null!==(h=p.username)&&void 0!==h?h:"Гість"),1),(0,e._)("div",l,(0,n.zw)(r.userinfo),1)])]),(0,e._)("div",d,[(0,e.Wm)(m,{class:"navigation-link",to:"modules"},{default:(0,e.w5)((function(){return[f]})),_:1}),(0,e.Wm)(m,{class:"navigation-link",to:"stats"},{default:(0,e.w5)((function(){return[g]})),_:1})])],64)}var v={props:{userinfo:{type:String,required:!1}},data:function(){return{username:localStorage.getItem("username")}}},h=r(8118);const m=(0,h.Z)(v,[["render",p],["__scopeId","data-v-7ab48eb6"]]);var w=m},9003:function(t,a,r){"use strict";r.r(a),r.d(a,{default:function(){return et}});r(2222),r(1249);var e=r(6252),n=r(3577),i=function(t){return(0,e.dD)("data-v-0caa8b76"),t=t(),(0,e.Cn)(),t},s={class:"stats-section"},c={class:"stats-card",id:"card1"},o=i((function(){return(0,e._)("div",{class:"card-name"},"Загальна статистика",-1)})),u={class:"chart-wrapper"},l={class:"chart-percentage"},d=i((function(){return(0,e._)("div",{class:"chart-label"},"правильно",-1)})),f=i((function(){return(0,e._)("div",{class:"chart-percentage"},"0%",-1)})),g={key:0,class:"card-content"},p={class:"card-item"},v=i((function(){return(0,e._)("div",{class:"chart-label"},"Набрано балів:",-1)})),h={class:"chart-percentage"},m={class:"card-item"},w=i((function(){return(0,e._)("div",{class:"chart-label"},"Розпочато тем:",-1)})),y={class:"chart-percentage"},_={class:"card-item"},k=i((function(){return(0,e._)("div",{class:"chart-label"},"Вирішено завдань:",-1)})),b={class:"chart-percentage"},D={class:"card-item"},I=i((function(){return(0,e._)("div",{class:"chart-label"},"Спроб на завдання:",-1)})),N={class:"chart-percentage"},x={key:1,class:"dummy"},A={class:"stats-card",id:"card2"},z=i((function(){return(0,e._)("div",{class:"card-name"},"Статистика за темами",-1)})),Z={class:"chart-wrapper"},E={class:"chart-percentage"},S=i((function(){return(0,e._)("div",{class:"chart-label"},"медіана",-1)})),M=i((function(){return(0,e._)("div",{class:"chart-percentage"},"0%",-1)})),Y={key:0,class:"card-content"},j={key:1,class:"dummy"},C={class:"stats-card",id:"card3"},q=i((function(){return(0,e._)("div",{class:"card-name"},"Статистика за розділами",-1)})),H={class:"chart-wrapper"},T={key:0,class:"card-content"},U={key:1,class:"dummy"};function F(t,a,r,i,F,K){var P=(0,e.up)("personal-info-header"),X=(0,e.up)("chart-doughnut"),B=(0,e.up)("chart-column"),O=(0,e.up)("main-layout");return(0,e.wg)(),(0,e.j4)(O,{backgroundImage:"".concat(t.$cloudinary,"main.png"),backgroundOffset:"50"},{header:(0,e.w5)((function(){var t,a;return[(0,e.Wm)(P,{userinfo:K.hasData?"".concat(null!==(t=null===(a=K.stats.general)||void 0===a?void 0:a.score)&&void 0!==t?t:0," / ").concat(K.stats.general.scoreMax," балів"):"0 / 0 балів"},null,8,["userinfo"])]})),body:(0,e.w5)((function(){return[(0,e._)("div",s,[(0,e._)("div",c,[o,(0,e._)("div",u,[K.hasData?((0,e.wg)(),(0,e.j4)(X,{key:0,data:[K.stats.general.percentage,100-K.stats.general.percentage],colors:[t.mix3(K.stats.general.percentage),"#0002"]},{default:(0,e.w5)((function(){return[(0,e._)("div",l,(0,n.zw)(K.stats.general.percentage)+"%",1),d]})),_:1},8,["data","colors"])):((0,e.wg)(),(0,e.j4)(X,{key:1,data:[100],colors:["#0002"]},{default:(0,e.w5)((function(){return[f]})),_:1}))]),K.hasData?((0,e.wg)(),(0,e.iD)("div",g,[(0,e._)("div",p,[v,(0,e._)("div",h,(0,n.zw)(K.stats.general.score),1)]),(0,e._)("div",m,[w,(0,e._)("div",y,(0,n.zw)(K.stats.blocks.length),1)]),(0,e._)("div",_,[k,(0,e._)("div",b,(0,n.zw)(K.stats.general.tasksCompleted),1)]),(0,e._)("div",D,[I,(0,e._)("div",N,(0,n.zw)(K.stats.general.attemptsAvg.toPrecision(2)),1)])])):((0,e.wg)(),(0,e.iD)("div",x,"Тут невдовзі з'явиться ваша статистика"))]),(0,e._)("div",A,[z,(0,e._)("div",Z,[K.hasData?((0,e.wg)(),(0,e.j4)(X,{key:0,data:K.blocksDistribution,colors:K.blocksDistribution.map((function(a,r){return t.mix3(10*r+5)}))},{default:(0,e.w5)((function(){return[(0,e._)("div",E,(0,n.zw)(Math.round(K.stats.blocks.map((function(t){return t.percentage})).average()))+"%",1),S]})),_:1},8,["data","colors"])):((0,e.wg)(),(0,e.j4)(X,{key:1,data:[100],colors:["#0002"]},{default:(0,e.w5)((function(){return[M]})),_:1}))]),K.hasData?((0,e.wg)(),(0,e.iD)("div",Y,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(K.stats.blocks,(function(a,r){return(0,e.wg)(),(0,e.iD)("div",{class:"card-item",key:r},[(0,e.Uk)((0,n.zw)(r+1)+".  ",1),(0,e._)("span",{class:"tag1",style:(0,n.j5)({background:t.mix3(a.percentage)})},(0,n.zw)(a.percentage)+"%",5),(0,e.Uk)("  "+(0,n.zw)(a._id),1)])})),128))])):((0,e.wg)(),(0,e.iD)("div",j,"Тут невдовзі з'явиться ваша статистика"))]),(0,e._)("div",C,[q,(0,e._)("div",H,[K.hasData?((0,e.wg)(),(0,e.j4)(B,{key:0,data:K.topicsDistribution,colors:K.topicsDistribution.map((function(a){return t.mix3(a)})),gap:2},null,8,["data","colors"])):((0,e.wg)(),(0,e.j4)(B,{key:1,data:[10,20,30],colors:["#0002","#0002","#0002"],gap:2}))]),K.hasData?((0,e.wg)(),(0,e.iD)("div",T,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(K.stats.topics,(function(a,r){return(0,e.wg)(),(0,e.iD)("div",{class:"card-item",key:r},[(0,e.Uk)((0,n.zw)(r+1)+".  ",1),(0,e._)("span",{class:"tag1",style:(0,n.j5)({background:t.mix3(a.percentage)})},(0,n.zw)(a.percentage)+"%",5),(0,e.Uk)("  "+(0,n.zw)(a._id),1)])})),128))])):((0,e.wg)(),(0,e.iD)("div",U,"Тут невдовзі з'явиться ваша статистика"))])])]})),_:1},8,["backgroundImage"])}var K=r(7654),P=r(7580),X=r(7925),B={viewBox:"0 0 210 210",width:"100%",height:"100%"},O=["points","stroke","fill"],W=["r"],L=["x2","y2"],R=["x","y"];function V(t,a,r,i,s,c){return(0,e.wg)(),(0,e.iD)("svg",B,[(0,e._)("polygon",{points:c.points,transform:"translate(105, 105)",stroke:r.color,fill:r.color+"5"},null,8,O),((0,e.wg)(),(0,e.iD)(e.HY,null,(0,e.Ko)(5,(function(t){return(0,e._)("circle",{class:"wire",key:t,cx:"105",cy:"105",r:20*t},null,8,W)})),64)),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(c.N,(function(t){return(0,e.wg)(),(0,e.iD)("g",{key:t,transform:"translate(105, 105)"},[(0,e._)("line",{class:"wire",x1:"0",y1:"0",x2:c.X[t-1],y2:c.Y[t-1]},null,8,L),(0,e._)("text",{x:c.X[t-1],y:c.Y[t-1]},(0,n.zw)(t),9,R)])})),128))])}r(7042),r(1539);var G={props:{data:Array,color:String},computed:{N:function(){return this.data.length},fi:function(){for(var t=[],a=0;a<this.N;a++)t.push(-2*Math.PI/this.N*a);return t},X:function(){return this.fi.map((function(t){return 100*Math.cos(t)}))},Y:function(){return this.fi.map((function(t){return 100*Math.sin(t)}))},x:function(){var t=this;return this.X.map((function(a,r){return a*t.data[r]/100}))},y:function(){var t=this;return this.Y.map((function(a,r){return a*t.data[r]/100}))},points:function(){var t=this;return this.x.reduce((function(a,r,e){return a+r+" "+t.y[e]+","}),"").slice(0,-1)}}},$=r(8118);const J=(0,$.Z)(G,[["render",V],["__scopeId","data-v-74e06b58"]]);var Q=J,tt=r(1800),at={components:{mainLayout:K.Z,personalInfoHeader:P.Z,ChartDoughnut:X.Z,ChartColumn:tt.Z,ChartRadar:Q},computed:{stats:function(){return this.$store.state.stats},hasData:function(){return Boolean(this.stats)},blocksDistribution:function(){var t;return null===(t=this.stats)||void 0===t?void 0:t.blocks.map((function(t){return t.percentage})).bucket(10,100).map((function(t){return t.length}))},topicsDistribution:function(){var t;return null===(t=this.stats)||void 0===t?void 0:t.topics.map((function(t){return t.percentage}))}}};const rt=(0,$.Z)(at,[["render",F],["__scopeId","data-v-0caa8b76"]]);var et=rt},863:function(t,a,r){var e=r(1702);t.exports=e(1..valueOf)},9653:function(t,a,r){"use strict";var e=r(9781),n=r(7854),i=r(1702),s=r(4705),c=r(8052),o=r(2597),u=r(9587),l=r(7976),d=r(2190),f=r(7593),g=r(7293),p=r(8006).f,v=r(1236).f,h=r(3070).f,m=r(863),w=r(3111).trim,y="Number",_=n[y],k=_.prototype,b=n.TypeError,D=i("".slice),I=i("".charCodeAt),N=function(t){var a=f(t,"number");return"bigint"==typeof a?a:x(a)},x=function(t){var a,r,e,n,i,s,c,o,u=f(t,"number");if(d(u))throw b("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=w(u),a=I(u,0),43===a||45===a){if(r=I(u,2),88===r||120===r)return NaN}else if(48===a){switch(I(u,1)){case 66:case 98:e=2,n=49;break;case 79:case 111:e=8,n=55;break;default:return+u}for(i=D(u,2),s=i.length,c=0;c<s;c++)if(o=I(i,c),o<48||o>n)return NaN;return parseInt(i,e)}return+u};if(s(y,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var A,z=function(t){var a=arguments.length<1?0:_(N(t)),r=this;return l(k,r)&&g((function(){m(r)}))?u(Object(a),r,z):a},Z=e?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;Z.length>E;E++)o(_,A=Z[E])&&!o(z,A)&&h(z,A,v(_,A));z.prototype=k,k.constructor=z,c(n,y,z,{constructor:!0})}},9225:function(t,a,r){"use strict";r.d(a,{Z:function(){return o}});var e=r(9914);function n(t){if(Array.isArray(t))return(0,e.Z)(t)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=r(6726);r(1703);function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return n(t)||i(t)||(0,s.Z)(t)||c()}}}]);
//# sourceMappingURL=3-legacy.a4a92410.js.map