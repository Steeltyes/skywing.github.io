"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[152],{8925:function(e,o,l){l.d(o,{Z:function(){return m}});var a=l(6252);const s={class:"relative elastic"},t={viewBox:"0 0 100 10",preserveAspectRatio:"none"},n=["width","x","fill"],d={class:"bar-label"};function i(e,o,l,i,r,u){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",s,[((0,a.wg)(),(0,a.iD)("svg",t,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.data.length,(e=>((0,a.wg)(),(0,a.iD)("rect",{key:e,width:u.percentages[e-1],height:"10",x:u.partials[e-1],fill:l.colors[e-1]},null,8,n)))),128))]))]),(0,a._)("div",d,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])],64)}var r={props:{data:Array,colors:Array,labels:Array},computed:{percentages(){return this.data.map((e=>Math.ceil(e/this.data.sum()*100)))},partials(){return[0,...this.percentages.partialSums()]}}},u=l(8118);const c=(0,u.Z)(r,[["render",i],["__scopeId","data-v-9102e97e"]]);var m=c},7580:function(e,o,l){l.d(o,{Z:function(){return _}});var a=l(6252),s=l(3577);const t=e=>((0,a.dD)("data-v-7ab48eb6"),e=e(),(0,a.Cn)(),e),n={class:"my-info-section"},d=t((()=>(0,a._)("div",{class:"material-icons-outlined my-avatar"},"account_circle",-1))),i={class:"my-info"},r={class:"my-name"},u={class:"my-score"},c={class:"navigation-section"},m=(0,a.Uk)("Мої курси"),p=(0,a.Uk)("Статистика");function v(e,o,l,t,v,g){const w=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",n,[d,(0,a._)("div",i,[(0,a._)("div",r,(0,s.zw)(v.username??"Гість"),1),(0,a._)("div",u,(0,s.zw)(l.userinfo),1)])]),(0,a._)("div",c,[(0,a.Wm)(w,{class:"navigation-link",to:"modules"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(w,{class:"navigation-link",to:"stats"},{default:(0,a.w5)((()=>[p])),_:1})])],64)}var g={props:{userinfo:{type:String,required:!1}},data(){return{username:localStorage.getItem("username")}}},w=l(8118);const k=(0,w.Z)(g,[["render",v],["__scopeId","data-v-7ab48eb6"]]);var _=k},152:function(e,o,l){l.r(o),l.d(o,{default:function(){return P}});var a=l(6252),s=l(3577);const t=e=>((0,a.dD)("data-v-3304aff4"),e=e(),(0,a.Cn)(),e),n={class:"section-name"},d={class:"modules-section"},i=t((()=>(0,a._)("div",null,null,-1))),r=t((()=>(0,a._)("div",null,null,-1))),u=t((()=>(0,a._)("div",null,null,-1)));function c(e,o,l,t,c,m){const p=(0,a.up)("personal-info-header"),v=(0,a.up)("module-card"),g=(0,a.up)("main-layout");return(0,a.wg)(),(0,a.j4)(g,{backgroundImage:`${e.$cloudinary}main.png`,backgroundOffset:"50"},{header:(0,a.w5)((()=>[(0,a.Wm)(p,{userinfo:`${m.tasksCompleted} / ${m.tasksTotal} завдань`},null,8,["userinfo"])])),body:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(m.moduleGroups,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e._id},[(0,a._)("div",n,(0,s.zw)(e._id),1),(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.modules,(e=>((0,a.wg)(),(0,a.j4)(v,{key:e.name,module:e},null,8,["module"])))),128)),i,r,u])])))),128))])),_:1},8,["backgroundImage"])}var m=l(4683);const p=e=>((0,a.dD)("data-v-59afd9d6"),e=e(),(0,a.Cn)(),e),v={class:"module-block"},g={class:"module-name",style:{"text-align":"center"}},w={class:"modal-text"},k={key:0},_=p((()=>(0,a._)("br",null,null,-1))),b=p((()=>(0,a._)("p",{style:{"text-align":"center"}},[(0,a._)("b",null,"Теми, що входять до курсу:")],-1))),f={style:{color:"gray"}},h=(0,a.Uk)(" Перейти "),y=p((()=>(0,a._)("span",{class:"material-icons"},"arrow_forward",-1))),D=[h,y],I={class:"module-header"},z=p((()=>(0,a._)("div",null,null,-1))),C=p((()=>(0,a._)("div",{class:"module-subject line-l"},"МАТЕМАТИКА",-1))),Z={class:"module-course"},$={class:"bar-wrapper"},j={class:"module-body"},H={class:"module-name"},U={key:0,class:"module-description"},W={class:"module-info"},S={key:0},T=(0,a.Uk)(" Перейти "),x=p((()=>(0,a._)("span",{class:"material-icons"},"arrow_forward",-1))),Y=[T,x];function q(e,o,l,t,n,d){const i=(0,a.up)("modal-window"),r=(0,a.up)("bar-horizontal");return(0,a.wg)(),(0,a.iD)("div",v,[(0,a.Wm)(i,{visible:n.showDetails,"onUpdate:visible":o[1]||(o[1]=e=>n.showDetails=e),modalWidth:"26em"},(0,a.Nv)({content:(0,a.w5)((()=>[(0,a._)("div",g,(0,s.zw)(l.module.name),1),(0,a._)("div",w,(0,s.zw)(l.module.description),1),l.module.blockNames.length?((0,a.wg)(),(0,a.iD)("div",k,[_,b,(0,a._)("ul",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.module.blockNames,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e},(0,s.zw)(e),1)))),128))])])):(0,a.kq)("",!0)])),_:2},["Мої курси"==l.module.group?{name:"buttons",fn:(0,a.w5)((()=>[(0,a._)("button",{class:"button-small",style:(0,s.j5)({background:l.module.color}),onClick:o[0]||(o[0]=e=>d.gotoModule())},D,4)]))}:void 0]),1032,["visible"]),(0,a._)("div",{style:(0,s.j5)({background:`linear-gradient(#0004, #0004), url(${d.backgroundURL})`,backgroundSize:"cover",backgroundPosition:"left 0 top 10%"})},[(0,a._)("div",I,[z,C,(0,a._)("div",Z,(0,s.zw)(l.module.course),1)])],4),(0,a._)("div",$,[(0,a.Wm)(r,{data:[l.module.tasksCompleted,l.module.tasksTotal-l.module.tasksCompleted||100],colors:[l.module.color,"#0002"]},null,8,["data","colors"])]),(0,a._)("div",j,[(0,a._)("div",H,(0,s.zw)(l.module.name),1),l.module.description?((0,a.wg)(),(0,a.iD)("div",U,[(0,a.Uk)((0,s.zw)(l.module.description.slice(0,115)+"...")+"  ",1),(0,a._)("span",{class:"details",onClick:o[2]||(o[2]=e=>n.showDetails=!0)},"Детальніше")])):(0,a.kq)("",!0)]),(0,a._)("div",W,[n.isInteractable?((0,a.wg)(),(0,a.iD)("span",S,(0,s.zw)(l.module.blocksTotal)+" тем • "+(0,s.zw)(l.module.tasksTotal)+" завдань",1)):(0,a.kq)("",!0),n.isInteractable?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"button-small",style:(0,s.j5)({background:l.module.color}),onClick:o[3]||(o[3]=e=>d.gotoModule())},Y,4)):(0,a.kq)("",!0)])])}var A=l(6291),G=l(8925),K={components:{modalWindow:A.Z,barHorizontal:G.Z},props:{module:Object},data(){return{showDetails:!1,isInteractable:"Мої курси"==this.module.group||"Доступні курси"==this.module.group}},computed:{backgroundURL(){return this.$cloudinary+this.module._id+"-preview.jpg"}},methods:{gotoModule(){localStorage.setItem("colorTheme",this.module.color),localStorage.setItem("moduleName",this.module.name),localStorage.setItem("moduleId",this.module._id),this.$router.push("lessons")}}},M=l(8118);const N=(0,M.Z)(K,[["render",q],["__scopeId","data-v-59afd9d6"]]);var L=N,R=l(7580),O={components:{mainLayout:m.Z,moduleCard:L,personalInfoHeader:R.Z},computed:{moduleGroups(){return this.$store.state.modules},tasksCompleted(){return this.moduleGroups.map((e=>e.modules)).flat().map((e=>e.tasksCompleted)).sum()},tasksTotal(){return this.moduleGroups.map((e=>e.modules)).flat().map((e=>e.tasksTotal)).sum()}},mounted(){}};const B=(0,M.Z)(O,[["render",c],["__scopeId","data-v-3304aff4"]]);var P=B}}]);
//# sourceMappingURL=152.32b952bd.js.map