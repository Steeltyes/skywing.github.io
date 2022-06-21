"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[108],{1800:function(a,t,e){e.d(t,{Z:function(){return u}});var s=e(6252);const r={viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none"},i=["x","height","width","fill"],c=["to"];function n(a,t,e,n,l,o){return(0,s.wg)(),(0,s.iD)("svg",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.data.length,(a=>((0,s.wg)(),(0,s.iD)("rect",{key:a,x:100/e.data.length*(a-1)+ +e.gap/2,height:o.percentages[a-1]||2,y:"0",width:100/e.data.length-+e.gap,fill:e.colors[a-1]},[e.isAnimated?((0,s.wg)(),(0,s.iD)("animate",{key:0,attributeName:"height",from:"0",to:o.percentages[a-1]+5,dur:"2s",fill:"freeze"},null,8,c)):(0,s.kq)("",!0)],8,i)))),128))])}var l={name:"histogram",props:{data:{type:Array,required:!0},colors:{type:Array,required:!0},isAnimated:{type:Boolean,required:!1,default:!1},gap:{type:Number,required:!1,default:0}},computed:{percentages(){return this.data.map((a=>Math.ceil(a/this.data.max()*100)))}}},o=e(8118);const d=(0,o.Z)(l,[["render",n],["__scopeId","data-v-2375c831"]]);var u=d},7925:function(a,t,e){e.d(t,{Z:function(){return g}});var s=e(6252),r=e(3577);const i={class:"relative elastic"},c={viewBox:"0 0 110 110",width:"100%",height:"100%"},n={class:"centered"};function l(a,t,e,l,o,d){return(0,s.wg)(),(0,s.iD)("div",i,[((0,s.wg)(),(0,s.iD)("svg",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.data.length,(a=>((0,s.wg)(),(0,s.iD)("g",{key:a},[e.data[e.data.length-a]?((0,s.wg)(),(0,s.iD)("circle",{key:0,style:(0,r.j5)({strokeDasharray:d.percentages[e.data.length-a]*Math.PI+" 314",strokeDashoffset:-d.partials[e.data.length-a]*Math.PI,strokeWidth:e.thickness,stroke:e.colors[e.data.length-a]}),r:"50",cx:"55",cy:"55"},null,4)):(0,s.kq)("",!0)])))),128))])),(0,s._)("div",n,[(0,s.WI)(a.$slots,"default",{},void 0,!0)])])}var o={props:{data:Array,colors:Array,thickness:{type:Number,required:!1,default:6}},computed:{percentages(){return this.data.map((a=>Math.ceil(a/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},d=e(8118);const u=(0,d.Z)(o,[["render",l],["__scopeId","data-v-09ebced2"]]);var g=u},9208:function(a,t,e){e.d(t,{Z:function(){return k}});var s=e(6252),r=e(3577);const i=a=>((0,s.dD)("data-v-42cedcbc"),a=a(),(0,s.Cn)(),a),c={class:"my-info-section"},n=i((()=>(0,s._)("div",{class:"material-icons-outlined my-avatar"},"account_circle",-1))),l={class:"my-info"},o={class:"my-name"},d={class:"my-score"},u={class:"navigation-section"},g=(0,s.Uk)("Мої курси"),p=(0,s.Uk)("Статистика"),h=(0,s.Uk)("Рейтинг");function v(a,t,e,i,v,m){const w=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[n,(0,s._)("div",l,[(0,s._)("div",o,(0,r.zw)(v.username),1),(0,s._)("div",d,(0,r.zw)(e.userinfo),1)])]),(0,s._)("div",u,[(0,s.Wm)(w,{class:"navigation-link",to:"modules"},{default:(0,s.w5)((()=>[g])),_:1}),(0,s.Wm)(w,{class:"navigation-link",to:"stats"},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(w,{class:"navigation-link",to:"rating"},{default:(0,s.w5)((()=>[h])),_:1})])],64)}var m={props:{userinfo:{type:String,required:!1}},data(){return{username:localStorage.getItem("username")}}},w=e(8118);const _=(0,w.Z)(m,[["render",v],["__scopeId","data-v-42cedcbc"]]);var k=_},5108:function(a,t,e){e.r(t),e.d(t,{default:function(){return ra}});var s=e(6252),r=e(3577);const i=a=>((0,s.dD)("data-v-3a0caaca"),a=a(),(0,s.Cn)(),a),c={class:"stats-section"},n={class:"stats-card",id:"card1"},l=i((()=>(0,s._)("div",{class:"card-name"},"Загальна статистика",-1))),o={class:"chart-wrapper"},d={class:"chart-percentage"},u=i((()=>(0,s._)("div",{class:"chart-label"},"правильно",-1))),g=i((()=>(0,s._)("div",{class:"chart-percentage"},"0%",-1))),p={key:0,class:"card-content"},h={class:"card-item"},v=i((()=>(0,s._)("div",{class:"chart-label"},"Набрано балів:",-1))),m={class:"chart-percentage"},w={class:"card-item"},_=i((()=>(0,s._)("div",{class:"chart-label"},"Розпочато тем:",-1))),k={class:"chart-percentage"},y={class:"card-item"},f=i((()=>(0,s._)("div",{class:"chart-label"},"Вирішено завдань:",-1))),D={class:"chart-percentage"},b={class:"card-item"},x=i((()=>(0,s._)("div",{class:"chart-label"},"Спроб на завдання:",-1))),z={class:"chart-percentage"},I={key:1,class:"dummy"},Z={class:"stats-card",id:"card2"},Y=i((()=>(0,s._)("div",{class:"card-name"},"Статистика за темами",-1))),j={class:"chart-wrapper"},A={class:"chart-percentage"},C=i((()=>(0,s._)("div",{class:"chart-label"},"медіана",-1))),M=i((()=>(0,s._)("div",{class:"chart-percentage"},"0%",-1))),q={key:0,class:"card-content"},H={key:1,class:"dummy"},N={class:"stats-card",id:"card3"},U=i((()=>(0,s._)("div",{class:"card-name"},"Статистика за розділами",-1))),K={class:"chart-wrapper"},W={key:0,class:"card-content"},$={key:1,class:"dummy"},B=i((()=>(0,s._)("div",null,null,-1)));function P(a,t,e,i,P,S){const X=(0,s.up)("personal-info-header"),R=(0,s.up)("chart-doughnut"),L=(0,s.up)("chart-column"),O=(0,s.up)("main-layout");return(0,s.wg)(),(0,s.j4)(O,{backgroundImage:`${a.$cloudinary}books.webp`,backgroundOffset:"50"},{header:(0,s.w5)((()=>[(0,s.Wm)(X,{userinfo:`${S.stats.general.score} / ${S.stats.general.scoreMax} балів`},null,8,["userinfo"])])),body:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",n,[l,(0,s._)("div",o,[S.hasData?((0,s.wg)(),(0,s.j4)(R,{key:0,data:[S.stats.general.percentage,100-S.stats.general.percentage],colors:[a.mix3(S.stats.general.percentage),"#0002"]},{default:(0,s.w5)((()=>[(0,s._)("div",d,(0,r.zw)(S.stats.general.percentage)+"%",1),u])),_:1},8,["data","colors"])):((0,s.wg)(),(0,s.j4)(R,{key:1,data:[100],colors:["#0002"]},{default:(0,s.w5)((()=>[g])),_:1}))]),S.hasData?((0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("div",h,[v,(0,s._)("div",m,(0,r.zw)(S.stats.general.score),1)]),(0,s._)("div",w,[_,(0,s._)("div",k,(0,r.zw)(S.stats.blocks.length),1)]),(0,s._)("div",y,[f,(0,s._)("div",D,(0,r.zw)(S.stats.general.tasksCompleted),1)]),(0,s._)("div",b,[x,(0,s._)("div",z,(0,r.zw)(S.stats.general.attemptsAvg.toPrecision(2)),1)])])):((0,s.wg)(),(0,s.iD)("div",I,"Тут невдовзі з'явиться ваша статистика"))]),(0,s._)("div",Z,[Y,(0,s._)("div",j,[S.hasData?((0,s.wg)(),(0,s.j4)(R,{key:0,data:S.blocksDistribution,colors:S.blocksDistribution.map(((t,e)=>a.mix3(10*e+5)))},{default:(0,s.w5)((()=>[(0,s._)("div",A,(0,r.zw)(Math.round(S.stats.blocks.map((a=>a.percentage)).average()))+"%",1),C])),_:1},8,["data","colors"])):((0,s.wg)(),(0,s.j4)(R,{key:1,data:[100],colors:["#0002"]},{default:(0,s.w5)((()=>[M])),_:1}))]),S.hasData?((0,s.wg)(),(0,s.iD)("div",q,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(S.stats.blocks,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"card-item",key:e},[(0,s.Uk)((0,r.zw)(e+1)+".  ",1),(0,s._)("span",{class:"tag1",style:(0,r.j5)({background:a.mix3(t.percentage)})},(0,r.zw)(t.percentage)+"%",5),(0,s.Uk)("  "+(0,r.zw)(t._id),1)])))),128))])):((0,s.wg)(),(0,s.iD)("div",H,"Тут невдовзі з'явиться ваша статистика"))]),(0,s._)("div",N,[U,(0,s._)("div",K,[S.hasData?((0,s.wg)(),(0,s.j4)(L,{key:0,data:S.topicsDistribution,colors:S.topicsDistribution.map((t=>a.mix3(t))),gap:2},null,8,["data","colors"])):((0,s.wg)(),(0,s.j4)(L,{key:1,data:[10,20,30],colors:["#0002","#0002","#0002"],gap:2}))]),S.hasData?((0,s.wg)(),(0,s.iD)("div",W,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(S.stats.topics,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"card-item",key:e},[(0,s.Uk)((0,r.zw)(e+1)+".  ",1),(0,s._)("span",{class:"tag1",style:(0,r.j5)({background:a.mix3(t.percentage)})},(0,r.zw)(t.percentage)+"%",5),(0,s.Uk)("  "+(0,r.zw)(t._id),1)])))),128))])):((0,s.wg)(),(0,s.iD)("div",$,"Тут невдовзі з'явиться ваша статистика"))]),B])])),_:1},8,["backgroundImage"])}var S=e(4683),X=e(9208),R=e(7925);const L={viewBox:"0 0 210 210",width:"100%",height:"100%"},O=["points","stroke","fill"],E=["r"],F=["x2","y2"],G=["x","y"];function J(a,t,e,i,c,n){return(0,s.wg)(),(0,s.iD)("svg",L,[(0,s._)("polygon",{points:n.points,transform:"translate(105, 105)",stroke:e.color,fill:e.color+"5"},null,8,O),((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(a=>(0,s._)("circle",{class:"wire",key:a,cx:"105",cy:"105",r:20*a},null,8,E))),64)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.N,(a=>((0,s.wg)(),(0,s.iD)("g",{key:a,transform:"translate(105, 105)"},[(0,s._)("line",{class:"wire",x1:"0",y1:"0",x2:n.X[a-1],y2:n.Y[a-1]},null,8,F),(0,s._)("text",{x:n.X[a-1],y:n.Y[a-1]},(0,r.zw)(a),9,G)])))),128))])}var Q={props:{data:Array,color:String},computed:{N(){return this.data.length},fi(){let a=[];for(let t=0;t<this.N;t++)a.push(-2*Math.PI/this.N*t);return a},X(){return this.fi.map((a=>100*Math.cos(a)))},Y(){return this.fi.map((a=>100*Math.sin(a)))},x(){return this.X.map(((a,t)=>a*this.data[t]/100))},y(){return this.Y.map(((a,t)=>a*this.data[t]/100))},points(){return this.x.reduce(((a,t,e)=>a+t+" "+this.y[e]+","),"").slice(0,-1)}}},T=e(8118);const V=(0,T.Z)(Q,[["render",J],["__scopeId","data-v-74e06b58"]]);var aa=V,ta=e(1800),ea={components:{mainLayout:S.Z,personalInfoHeader:X.Z,ChartDoughnut:R.Z,ChartColumn:ta.Z,ChartRadar:aa},computed:{stats(){return this.$store.state.stats},hasData(){return Boolean(this.stats)},blocksDistribution(){return this.stats?.blocks.map((a=>a.percentage)).bucket(10,100).map((a=>a.length))},topicsDistribution(){return this.stats?.topics.map((a=>a.percentage))}}};const sa=(0,T.Z)(ea,[["render",P],["__scopeId","data-v-3a0caaca"]]);var ra=sa}}]);
//# sourceMappingURL=108.757b3a9a.js.map