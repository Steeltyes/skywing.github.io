"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[696],{1800:function(t,a,r){r.d(a,{Z:function(){return d}});var e=r(6252),n={viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none"},i=["x","height","width","fill"],s=["to"];function c(t,a,r,c,o,u){return(0,e.wg)(),(0,e.iD)("svg",n,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.data.length,(function(t){return(0,e.wg)(),(0,e.iD)("rect",{key:t,x:100/r.data.length*(t-1)+ +r.gap/2,height:u.percentages[t-1]||2,y:"0",width:100/r.data.length-+r.gap,fill:r.colors[t-1]},[r.isAnimated?((0,e.wg)(),(0,e.iD)("animate",{key:0,attributeName:"height",from:"0",to:u.percentages[t-1]+5,dur:"2s",fill:"freeze"},null,8,s)):(0,e.kq)("",!0)],8,i)})),128))])}r(9653),r(1249);var o={name:"histogram",props:{data:{type:Array,required:!0},colors:{type:Array,required:!0},isAnimated:{type:Boolean,required:!1,default:!1},gap:{type:Number,required:!1,default:0}},computed:{percentages:function(){var t=this;return this.data.map((function(a){return Math.ceil(a/t.data.max()*100)}))}}},u=r(8118);const l=(0,u.Z)(o,[["render",c],["__scopeId","data-v-2375c831"]]);var d=l},7925:function(t,a,r){r.d(a,{Z:function(){return f}});var e=r(6252),n=r(3577),i={class:"relative elastic"},s={viewBox:"0 0 110 110",width:"100%",height:"100%"},c={class:"centered"};function o(t,a,r,o,u,l){return(0,e.wg)(),(0,e.iD)("div",i,[((0,e.wg)(),(0,e.iD)("svg",s,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.data.length,(function(t){return(0,e.wg)(),(0,e.iD)("g",{key:t},[r.data[r.data.length-t]?((0,e.wg)(),(0,e.iD)("circle",{key:0,style:(0,n.j5)({strokeDasharray:l.percentages[r.data.length-t]*Math.PI+" 314",strokeDashoffset:-l.partials[r.data.length-t]*Math.PI,strokeWidth:r.thickness,stroke:r.colors[r.data.length-t]}),r:"50",cx:"55",cy:"55"},null,4)):(0,e.kq)("",!0)])})),128))])),(0,e._)("div",c,[(0,e.WI)(t.$slots,"default",{},void 0,!0)])])}var u=r(9225),l=(r(9653),r(1249),r(2222),{props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages:function(){var t=this;return this.data.map((function(a){return Math.ceil(a/t.data.sum()*100)}))},partials:function(){return[0].concat((0,u.Z)(this.percentages.partialSums()))}}}),d=r(8118);const g=(0,d.Z)(l,[["render",o],["__scopeId","data-v-09ebced2"]]);var f=g},281:function(t,a,r){r.r(a),r.d(a,{default:function(){return et}});r(2222),r(1249);var e=r(6252),n=r(3577),i=function(t){return(0,e.dD)("data-v-0c4a5dcf"),t=t(),(0,e.Cn)(),t},s={class:"stats-section"},c={class:"stats-card",id:"card1"},o=i((function(){return(0,e._)("div",{class:"card-name"},"Загальна статистика",-1)})),u={class:"chart-wrapper"},l={class:"chart-percentage"},d=i((function(){return(0,e._)("div",{class:"chart-label"},"правильно",-1)})),g=i((function(){return(0,e._)("div",{class:"chart-percentage"},"0%",-1)})),f={key:0,class:"card-content"},h={class:"card-item"},p=i((function(){return(0,e._)("div",{class:"chart-label"},"Набрано балів:",-1)})),v={class:"chart-percentage"},m={class:"card-item"},w=i((function(){return(0,e._)("div",{class:"chart-label"},"Розпочато тем:",-1)})),y={class:"chart-percentage"},k={class:"card-item"},_=i((function(){return(0,e._)("div",{class:"chart-label"},"Вирішено завдань:",-1)})),D={class:"chart-percentage"},b={class:"card-item"},x=i((function(){return(0,e._)("div",{class:"chart-label"},"Спроб на завдання:",-1)})),z={class:"chart-percentage"},Z={key:1,class:"dummy"},I={class:"stats-card",id:"card2"},A=i((function(){return(0,e._)("div",{class:"card-name"},"Статистика за темами",-1)})),j={class:"chart-wrapper"},Y={class:"chart-percentage"},M=i((function(){return(0,e._)("div",{class:"chart-label"},"медіана",-1)})),C=i((function(){return(0,e._)("div",{class:"chart-percentage"},"0%",-1)})),q={key:0,class:"card-content"},H={key:1,class:"dummy"},N={class:"stats-card",id:"card3"},K=i((function(){return(0,e._)("div",{class:"card-name"},"Статистика за розділами",-1)})),B={class:"chart-wrapper"},S={key:0,class:"card-content"},P={key:1,class:"dummy"};function U(t,a,r,i,U,X){var W=(0,e.up)("personal-info-header"),$=(0,e.up)("chart-doughnut"),R=(0,e.up)("chart-column"),E=(0,e.up)("main-layout");return(0,e.wg)(),(0,e.j4)(E,{backgroundImage:"".concat(t.$cloudinary,"main.png"),backgroundOffset:"50"},{header:(0,e.w5)((function(){var t,a;return[(0,e.Wm)(W,{userinfo:X.hasData?"".concat(null!==(t=null===(a=X.stats.general)||void 0===a?void 0:a.score)&&void 0!==t?t:0," / ").concat(X.stats.general.scoreMax," балів"):"0 / 0 балів"},null,8,["userinfo"])]})),body:(0,e.w5)((function(){return[(0,e._)("div",s,[(0,e._)("div",c,[o,(0,e._)("div",u,[X.hasData?((0,e.wg)(),(0,e.j4)($,{key:0,data:[X.stats.general.percentage,100-X.stats.general.percentage],colors:[t.mix3(X.stats.general.percentage),"#0002"]},{default:(0,e.w5)((function(){return[(0,e._)("div",l,(0,n.zw)(X.stats.general.percentage)+"%",1),d]})),_:1},8,["data","colors"])):((0,e.wg)(),(0,e.j4)($,{key:1,data:[100],colors:["#0002"]},{default:(0,e.w5)((function(){return[g]})),_:1}))]),X.hasData?((0,e.wg)(),(0,e.iD)("div",f,[(0,e._)("div",h,[p,(0,e._)("div",v,(0,n.zw)(X.stats.general.score),1)]),(0,e._)("div",m,[w,(0,e._)("div",y,(0,n.zw)(X.stats.blocks.length),1)]),(0,e._)("div",k,[_,(0,e._)("div",D,(0,n.zw)(X.stats.general.tasksCompleted),1)]),(0,e._)("div",b,[x,(0,e._)("div",z,(0,n.zw)(X.stats.general.attemptsAvg.toPrecision(2)),1)])])):((0,e.wg)(),(0,e.iD)("div",Z,"Тут невдовзі з'явиться ваша статистика"))]),(0,e._)("div",I,[A,(0,e._)("div",j,[X.hasData?((0,e.wg)(),(0,e.j4)($,{key:0,data:X.blocksDistribution,colors:X.blocksDistribution.map((function(a,r){return t.mix3(10*r+5)}))},{default:(0,e.w5)((function(){return[(0,e._)("div",Y,(0,n.zw)(Math.round(X.stats.blocks.map((function(t){return t.percentage})).average()))+"%",1),M]})),_:1},8,["data","colors"])):((0,e.wg)(),(0,e.j4)($,{key:1,data:[100],colors:["#0002"]},{default:(0,e.w5)((function(){return[C]})),_:1}))]),X.hasData?((0,e.wg)(),(0,e.iD)("div",q,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(X.stats.blocks,(function(a,r){return(0,e.wg)(),(0,e.iD)("div",{class:"card-item",key:r},[(0,e.Uk)((0,n.zw)(r+1)+".  ",1),(0,e._)("span",{class:"tag1",style:(0,n.j5)({background:t.mix3(a.percentage)})},(0,n.zw)(a.percentage)+"%",5),(0,e.Uk)("  "+(0,n.zw)(a._id),1)])})),128))])):((0,e.wg)(),(0,e.iD)("div",H,"Тут невдовзі з'явиться ваша статистика"))]),(0,e._)("div",N,[K,(0,e._)("div",B,[X.hasData?((0,e.wg)(),(0,e.j4)(R,{key:0,data:X.topicsDistribution,colors:X.topicsDistribution.map((function(a){return t.mix3(a)})),gap:2},null,8,["data","colors"])):((0,e.wg)(),(0,e.j4)(R,{key:1,data:[10,20,30],colors:["#0002","#0002","#0002"],gap:2}))]),X.hasData?((0,e.wg)(),(0,e.iD)("div",S,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(X.stats.topics,(function(a,r){return(0,e.wg)(),(0,e.iD)("div",{class:"card-item",key:r},[(0,e.Uk)((0,n.zw)(r+1)+".  ",1),(0,e._)("span",{class:"tag1",style:(0,n.j5)({background:t.mix3(a.percentage)})},(0,n.zw)(a.percentage)+"%",5),(0,e.Uk)("  "+(0,n.zw)(a._id),1)])})),128))])):((0,e.wg)(),(0,e.iD)("div",P,"Тут невдовзі з'явиться ваша статистика"))])])]})),_:1},8,["backgroundImage"])}var X=r(721),W=r(2058),$=r(7925),R={viewBox:"0 0 210 210",width:"100%",height:"100%"},E=["points","stroke","fill"],L=["r"],O=["x2","y2"],T=["x","y"];function F(t,a,r,i,s,c){return(0,e.wg)(),(0,e.iD)("svg",R,[(0,e._)("polygon",{points:c.points,transform:"translate(105, 105)",stroke:r.color,fill:r.color+"5"},null,8,E),((0,e.wg)(),(0,e.iD)(e.HY,null,(0,e.Ko)(5,(function(t){return(0,e._)("circle",{class:"wire",key:t,cx:"105",cy:"105",r:20*t},null,8,L)})),64)),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(c.N,(function(t){return(0,e.wg)(),(0,e.iD)("g",{key:t,transform:"translate(105, 105)"},[(0,e._)("line",{class:"wire",x1:"0",y1:"0",x2:c.X[t-1],y2:c.Y[t-1]},null,8,O),(0,e._)("text",{x:c.X[t-1],y:c.Y[t-1]},(0,n.zw)(t),9,T)])})),128))])}r(7042),r(1539);var G={props:{data:Array,color:String},computed:{N:function(){return this.data.length},fi:function(){for(var t=[],a=0;a<this.N;a++)t.push(-2*Math.PI/this.N*a);return t},X:function(){return this.fi.map((function(t){return 100*Math.cos(t)}))},Y:function(){return this.fi.map((function(t){return 100*Math.sin(t)}))},x:function(){var t=this;return this.X.map((function(a,r){return a*t.data[r]/100}))},y:function(){var t=this;return this.Y.map((function(a,r){return a*t.data[r]/100}))},points:function(){var t=this;return this.x.reduce((function(a,r,e){return a+r+" "+t.y[e]+","}),"").slice(0,-1)}}},J=r(8118);const Q=(0,J.Z)(G,[["render",F],["__scopeId","data-v-74e06b58"]]);var V=Q,tt=r(1800),at={components:{mainLayout:X.Z,personalInfoHeader:W.Z,ChartDoughnut:$.Z,ChartColumn:tt.Z,ChartRadar:V},computed:{stats:function(){return this.$store.state.stats},hasData:function(){return Boolean(this.stats)},blocksDistribution:function(){var t;return null===(t=this.stats)||void 0===t?void 0:t.blocks.map((function(t){return t.percentage})).bucket(10,100).map((function(t){return t.length}))},topicsDistribution:function(){var t;return null===(t=this.stats)||void 0===t?void 0:t.topics.map((function(t){return t.percentage}))}}};const rt=(0,J.Z)(at,[["render",U],["__scopeId","data-v-0c4a5dcf"]]);var et=rt},9225:function(t,a,r){r.d(a,{Z:function(){return o}});var e=r(9914);function n(t){if(Array.isArray(t))return(0,e.Z)(t)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=r(6726);r(1703);function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return n(t)||i(t)||(0,s.Z)(t)||c()}}}]);
//# sourceMappingURL=696-legacy.c82dbbbb.js.map