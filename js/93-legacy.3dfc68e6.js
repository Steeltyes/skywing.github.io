"use strict";(self["webpackChunklanding"]=self["webpackChunklanding"]||[]).push([[93],{9628:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r=t(9102),i=(t(8309),t(6252)),o=t(3577),l=function(n){return(0,i.dD)("data-v-6806f769"),n=n(),(0,i.Cn)(),n},a={class:"modal-text"},u=(0,i.Uk)("Ви точно хочете видалити "),s=(0,i.Uk)("?"),c={class:"module-section"},d={class:"module-navbar"},f=l((function(){return(0,i._)("span",{class:"material-icons"},"arrow_back",-1)})),m=(0,i.Uk)("  Назад до списку курсів "),h=l((function(){return(0,i._)("span",null,null,-1)})),g=l((function(){return(0,i._)("div",{class:"module-course line-r"},"НМТ-2022",-1)})),b={class:"module-name"},v={class:"lessons-section"},p=["onClick"],k={class:"create-section"},w={key:0},_=l((function(){return(0,i._)("ul",null,[(0,i._)("li",null,"Один тест містить 20 завдань на різні теми"),(0,i._)("li",null,"Ви матимете по одній спробі на завдання"),(0,i._)("li",null,"Рекомендований час винонання – 40 хвилин")],-1)})),x=l((function(){return(0,i._)("br",null,null,-1)})),C={key:1};function I(n,e,t,l,I,y){var P=(0,i.up)("modal"),Z=(0,i.up)("router-link"),N=(0,i.up)("lesson-card"),U=(0,i.up)("main-layout");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(P,{visible:I.modalConfirmationVisible,"onUpdate:visible":e[2]||(e[2]=function(n){return I.modalConfirmationVisible=n}),modalWidth:"22em"},{content:(0,i.w5)((function(){return[(0,i._)("div",a,[u,(0,i._)("b",null,(0,o.zw)(I.prefabName),1),s])]})),buttons:(0,i.w5)((function(){return[(0,i._)("button",{class:"button-small",style:(0,o.j5)({background:I.colorTheme}),onClick:e[0]||(e[0]=function(n){return y.deletePrefab(I.prefabName)})},"Так",4),(0,i._)("button",{class:"button-small",style:(0,o.j5)({background:I.colorTheme}),onClick:e[1]||(e[1]=function(n){return I.modalConfirmationVisible=!1})},"Ні",4)]})),_:1},8,["visible"]),(0,i.Wm)(U,{backgroundImage:y.backgroundURL,backgroundOffset:"15"},{header:(0,i.w5)((function(){return[(0,i._)("div",c,[(0,i._)("div",d,[(0,i.Wm)(Z,{to:"modules",class:"link"},{default:(0,i.w5)((function(){return[f,m]})),_:1}),h]),g,(0,i._)("div",b,(0,o.zw)(I.moduleName),1)])]})),body:(0,i.w5)((function(){return[(0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(y.lessons,(function(n,e){return(0,i.wg)(),(0,i.iD)("div",{class:"relative",key:n.name},[(0,i.Wm)(N,{lesson:(0,r.Z)((0,r.Z)({},n),{},{index:e+1}),onClick:function(e){return y.launchPrefab(n.name)}},null,8,["lesson","onClick"]),(0,i._)("i",{class:"material-icons-outlined centered icon-delete",onClick:function(e){return y.showConfirmationModal(n.name)}},"delete_forever",8,p)])})),128))]),(0,i._)("div",k,[y.lessons.length<5?((0,i.wg)(),(0,i.iD)("div",w,[_,x,(0,i._)("button",{class:"button-small",style:(0,o.j5)({background:I.colorTheme}),onClick:e[3]||(e[3]=function(n){return y.createPrefab("Підсумковий тест ".concat(y.newPrefabIndex+1))})}," Створити тест ",4)])):((0,i.wg)(),(0,i.iD)("div",C,"Щоб створити новий тест, видаліть один з існуючих"))])]})),_:1},8,["backgroundImage"])],64)}var y=t(1138),P=t(3540),Z=(t(7686),t(4506),t(4916),t(3123),t(9284)),N=t(1844),U=t(1093),D=t(9159),S={components:{mainLayout:U.Z,lessonCard:D.Z,modal:Z.Z},data:function(){return{prefabName:void 0,modalConfirmationVisible:!1,moduleName:localStorage.getItem("moduleName"),moduleId:localStorage.getItem("moduleId"),colorTheme:localStorage.getItem("colorTheme")}},computed:{lessons:function(){return this.$store.state.lessons},newPrefabIndex:function(){var n;return+(null===(n=this.lessons.at(-1))||void 0===n?void 0:n.name.split(" ").at(-1))||0},backgroundURL:function(){return this.$cloudinary+this.moduleId+".jpg"}},methods:{launchPrefab:function(n,e){localStorage.setItem("lessonName",n),this.$router.push("prefab")},createPrefab:function(n){var e=this;return(0,P.Z)((0,y.Z)().mark((function t(){return(0,y.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.Z.createPrefab(n);case 2:e.$store.dispatch("getPrefabs");case 3:case"end":return t.stop()}}),t)})))()},deletePrefab:function(n){var e=this;return(0,P.Z)((0,y.Z)().mark((function t(){return(0,y.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.Z.deletePrefab(n);case 2:e.$store.dispatch("getPrefabs"),e.modalConfirmationVisible=!1;case 4:case"end":return t.stop()}}),t)})))()},showConfirmationModal:function(n){this.modalConfirmationVisible=!0,this.prefabName=n}}},T=t(8118);const V=(0,T.Z)(S,[["render",I],["__scopeId","data-v-6806f769"]]);var R=V},7686:function(n,e,t){var r=t(2109),i=t(7908),o=t(6244),l=t(9303),a=t(1223);r({target:"Array",proto:!0},{at:function(n){var e=i(this),t=o(e),r=l(n),a=r>=0?r:t+r;return a<0||a>=t?void 0:e[a]}}),a("at")},4506:function(n,e,t){var r=t(2109),i=t(1702),o=t(4488),l=t(9303),a=t(1340),u=t(7293),s=i("".charAt),c=u((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:c},{at:function(n){var e=a(o(this)),t=e.length,r=l(n),i=r>=0?r:t+r;return i<0||i>=t?void 0:s(e,i)}})},3123:function(n,e,t){var r=t(2104),i=t(6916),o=t(1702),l=t(7007),a=t(7850),u=t(9670),s=t(4488),c=t(6707),d=t(1530),f=t(7466),m=t(1340),h=t(8173),g=t(1589),b=t(7651),v=t(2261),p=t(2999),k=t(7293),w=p.UNSUPPORTED_Y,_=4294967295,x=Math.min,C=[].push,I=o(/./.exec),y=o(C),P=o("".slice),Z=!k((function(){var n=/(?:)/,e=n.exec;n.exec=function(){return e.apply(this,arguments)};var t="ab".split(n);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));l("split",(function(n,e,t){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(n,t){var o=m(s(this)),l=void 0===t?_:t>>>0;if(0===l)return[];if(void 0===n)return[o];if(!a(n))return i(e,o,n,l);var u,c,d,f=[],h=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),b=0,p=new RegExp(n.source,h+"g");while(u=i(v,p,o)){if(c=p.lastIndex,c>b&&(y(f,P(o,b,u.index)),u.length>1&&u.index<o.length&&r(C,f,g(u,1)),d=u[0].length,b=c,f.length>=l))break;p.lastIndex===u.index&&p.lastIndex++}return b===o.length?!d&&I(p,"")||y(f,""):y(f,P(o,b)),f.length>l?g(f,0,l):f}:"0".split(void 0,0).length?function(n,t){return void 0===n&&0===t?[]:i(e,this,n,t)}:e,[function(e,t){var r=s(this),l=void 0==e?void 0:h(e,n);return l?i(l,e,r,t):i(o,m(r),e,t)},function(n,r){var i=u(this),l=m(n),a=t(o,i,l,r,o!==e);if(a.done)return a.value;var s=c(i,RegExp),h=i.unicode,g=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),v=new s(w?"^(?:"+i.source+")":i,g),p=void 0===r?_:r>>>0;if(0===p)return[];if(0===l.length)return null===b(v,l)?[l]:[];var k=0,C=0,I=[];while(C<l.length){v.lastIndex=w?0:C;var Z,N=b(v,w?P(l,C):l);if(null===N||(Z=x(f(v.lastIndex+(w?C:0)),l.length))===k)C=d(l,C,h);else{if(y(I,P(l,k,C)),I.length===p)return I;for(var U=1;U<=N.length-1;U++)if(y(I,N[U]),I.length===p)return I;C=k=Z}}return y(I,P(l,k)),I}]}),!Z,w)}}]);
//# sourceMappingURL=93-legacy.3dfc68e6.js.map