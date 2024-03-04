import{c as ee,M as ae,a as y,h,b as G,e as _e,N as Ie,O as De,g as te,P as Pe,R as Te,u as oe,S as Ae,U as Be,V as le,W as de,X as he,s as fe,Y as ve,r as R,w as Z,T as xe,n as Qe,Z as Ne,$ as Ee,o as qe,d as ge,a0 as ye,a1 as Re,a2 as ze,a3 as Fe,_ as P,z as m,A as F,B as f,C as i,m as Le,x as ue,y as g,a4 as C,a5 as V,a6 as H,D as b,a7 as q,K as B,L as Q,E as k}from"./index-6inWYk72.js";import{g as je,v as Ve,u as we,a as ke,c as j,d as ce,b as He,Q as Oe,e as Me,f as Ue}from"./use-dark-CCrGgUqI.js";const We=ee({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:r}}=te(),s=_e(Ie,ae);if(s===ae)return console.error("QPage needs to be a deep child of QLayout"),ae;if(_e(De,ae)===ae)return console.error("QPage needs to be child of QPageContainer"),ae;const n=y(()=>{const c=(s.header.space===!0?s.header.size:0)+(s.footer.space===!0?s.footer.size:0);if(typeof e.styleFn=="function"){const v=s.isContainer.value===!0?s.containerHeight.value:r.screen.height;return e.styleFn(c,v)}return{minHeight:s.isContainer.value===!0?s.containerHeight.value-c+"px":r.screen.height===0?c!==0?`calc(100vh - ${c}px)`:"100vh":r.screen.height-c+"px"}}),o=y(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:o.value,style:n.value},G(t.default))}}),me={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ge=Object.keys(me);me.all=!0;function Se(e){const t={};for(const r of Ge)e[r]===!0&&(t[r]=!0);return Object.keys(t).length===0?me:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Ke=["INPUT","TEXTAREA"];function $e(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Ke.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Xe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Pe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Ye(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,s)=>{const l=parseFloat(r);l&&(t[s]=l)}),t}const Je=Te({name:"touch-swipe",beforeMount(e,{value:t,arg:r,modifiers:s}){if(s.mouse!==!0&&oe.has.touch!==!0)return;const l=s.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:Ye(r),direction:Se(s),noop:Ae,mouseStart(o){$e(o,n)&&Be(o)&&(le(n,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(o,!0))},touchStart(o){if($e(o,n)){const c=o.target;le(n,"temp",[[c,"touchmove","move","notPassiveCapture"],[c,"touchcancel","end","notPassiveCapture"],[c,"touchend","end","notPassiveCapture"]]),n.start(o)}},start(o,c){oe.is.firefox===!0&&de(e,!0);const v=he(o);n.event={x:v.left,y:v.top,time:Date.now(),mouse:c===!0,dir:!1}},move(o){if(n.event===void 0)return;if(n.event.dir!==!1){fe(o);return}const c=Date.now()-n.event.time;if(c===0)return;const v=he(o),u=v.left-n.event.x,d=Math.abs(u),p=v.top-n.event.y,S=Math.abs(p);if(n.event.mouse!==!0){if(d<n.sensitivity[1]&&S<n.sensitivity[1]){n.end(o);return}}else if(window.getSelection().toString()!==""){n.end(o);return}else if(d<n.sensitivity[2]&&S<n.sensitivity[2])return;const $=d/c,I=S/c;n.direction.vertical===!0&&d<S&&d<100&&I>n.sensitivity[0]&&(n.event.dir=p<0?"up":"down"),n.direction.horizontal===!0&&d>S&&S<100&&$>n.sensitivity[0]&&(n.event.dir=u<0?"left":"right"),n.direction.up===!0&&d<S&&p<0&&d<100&&I>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&d<S&&p>0&&d<100&&I>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&d>S&&u<0&&S<100&&$>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&d>S&&u>0&&S<100&&$>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(fe(o),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Xe(),n.styleCleanup=N=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const D=()=>{document.body.classList.remove("no-pointer-events--children")};N===!0?setTimeout(D,50):D()}),n.handler({evt:o,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:c,distance:{x:d,y:S}})):n.end(o)},end(o){n.event!==void 0&&(ve(n,"temp"),oe.is.firefox===!0&&de(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),o!==void 0&&n.event.dir!==!1&&fe(o),n.event=void 0)}};if(e.__qtouchswipe=n,s.mouse===!0){const o=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";le(n,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}oe.has.touch===!0&&le(n,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const r=e.__qtouchswipe;r!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&r.end(),r.handler=t.value),r.direction=Se(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(ve(t,"main"),ve(t,"temp"),oe.is.firefox===!0&&de(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Ze(){const e=new Map;return{getCache:function(t,r){return e[t]===void 0?e[t]=r:e[t]},getCacheWithFn:function(t,r){return e[t]===void 0?e[t]=r():e[t]}}}const et={name:{required:!0},disable:Boolean},Ce={setup(e,{slots:t}){return()=>h("div",{class:"q-panel scroll",role:"tabpanel"},G(t.default))}},tt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},nt=["update:modelValue","beforeTransition","transition"];function at(){const{props:e,emit:t,proxy:r}=te(),{getCacheWithFn:s}=Ze();let l,n;const o=R(null),c=R(null);function v(a){const _=e.vertical===!0?"up":"left";A((r.$q.lang.rtl===!0?-1:1)*(a.direction===_?1:-1))}const u=y(()=>[[Je,v,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),d=y(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=y(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),S=y(()=>`--q-transition-duration: ${e.transitionDuration}ms`),$=y(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),I=y(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),N=y(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Z(()=>e.modelValue,(a,_)=>{const w=T(a)===!0?M(a):-1;n!==!0&&L(w===-1?0:w<M(_)?-1:1),o.value!==w&&(o.value=w,t("beforeTransition",a,_),Qe(()=>{t("transition",a,_)}))});function D(){A(1)}function O(){A(-1)}function X(a){t("update:modelValue",a)}function T(a){return a!=null&&a!==""}function M(a){return l.findIndex(_=>_.props.name===a&&_.props.disable!==""&&_.props.disable!==!0)}function U(){return l.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function L(a){const _=a!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(a===-1?d.value:p.value):null;c.value!==_&&(c.value=_)}function A(a,_=o.value){let w=_+a;for(;w!==-1&&w<l.length;){const J=l[w];if(J!==void 0&&J.props.disable!==""&&J.props.disable!==!0){L(a),n=!0,t("update:modelValue",J.props.name),setTimeout(()=>{n=!1});return}w+=a}e.infinite===!0&&l.length!==0&&_!==-1&&_!==l.length&&A(a,a===-1?l.length:-1)}function W(){const a=M(e.modelValue);return o.value!==a&&(o.value=a),!0}function ne(){const a=T(e.modelValue)===!0&&W()&&l[o.value];return e.keepAlive===!0?[h(Ne,I.value,[h(N.value===!0?s($.value,()=>({...Ce,name:$.value})):Ce,{key:$.value,style:S.value},()=>a)])]:[h("div",{class:"q-panel scroll",style:S.value,key:$.value,role:"tabpanel"},[a])]}function x(){if(l.length!==0)return e.animated===!0?[h(xe,{name:c.value},ne)]:ne()}function E(a){return l=je(G(a.default,[])).filter(_=>_.props!==null&&_.props.slot===void 0&&T(_.props.name)===!0),l.length}function Y(){return l}return Object.assign(r,{next:D,previous:O,goTo:X}),{panelIndex:o,panelDirectives:u,updatePanelsList:E,updatePanelIndex:W,getPanelContent:x,getEnabledPanels:U,getPanels:Y,isValidPanelName:T,keepAliveProps:I,needsUniqueKeepAliveWrapper:N,goToPanelByOffset:A,goToPanel:X,nextPanel:D,previousPanel:O}}const se=ee({name:"QCarouselSlide",props:{...et,imgSrc:String},setup(e,{slots:t}){const r=y(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>h("div",{class:"q-carousel__slide",style:r.value},G(t.default))}});let ie=0;const ot={fullscreen:Boolean,noRouteFullscreenExit:Boolean},it=["update:fullscreen","fullscreen"];function rt(){const e=te(),{props:t,emit:r,proxy:s}=e;let l,n,o;const c=R(!1);Ve(e)===!0&&Z(()=>s.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&d()}),Z(()=>t.fullscreen,p=>{c.value!==p&&v()}),Z(c,p=>{r("update:fullscreen",p),r("fullscreen",p)});function v(){c.value===!0?d():u()}function u(){c.value!==!0&&(c.value=!0,o=s.$el.parentNode,o.replaceChild(n,s.$el),document.body.appendChild(s.$el),ie++,ie===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:d},ye.add(l))}function d(){c.value===!0&&(l!==void 0&&(ye.remove(l),l=void 0),o.replaceChild(s.$el,n),c.value=!1,ie=Math.max(0,ie-1),ie===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return Ee(()=>{n=document.createElement("span")}),qe(()=>{t.fullscreen===!0&&u()}),ge(d),Object.assign(s,{toggleFullscreen:v,setFullscreen:u,exitFullscreen:d}),{inFullscreen:c,toggleFullscreen:v}}const lt=["top","right","bottom","left"],st=["regular","flat","outline","push","unelevated"],ct=ee({name:"QCarousel",props:{...we,...tt,...ot,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>st.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>lt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...it,...nt],setup(e,{slots:t}){const{proxy:{$q:r}}=te(),s=ke(e,r);let l=null,n;const{updatePanelsList:o,getPanelContent:c,panelDirectives:v,goToPanel:u,previousPanel:d,nextPanel:p,getEnabledPanels:S,panelIndex:$}=at(),{inFullscreen:I}=rt(),N=y(()=>I.value!==!0&&e.height!==void 0?{height:e.height}:{}),D=y(()=>e.vertical===!0?"vertical":"horizontal"),O=y(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(I.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${D.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${U.value}`:"")),X=y(()=>{const x=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?x.reverse():x}),T=y(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),M=y(()=>e.navigationActiveIcon||T.value),U=y(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),L=y(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Z(()=>e.modelValue,()=>{e.autoplay&&A()}),Z(()=>e.autoplay,x=>{x?A():l!==null&&(clearTimeout(l),l=null)});function A(){const x=ze(e.autoplay)===!0?Math.abs(e.autoplay):5e3;l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,x>=0?p():d()},x)}qe(()=>{e.autoplay&&A()}),ge(()=>{l!==null&&clearTimeout(l)});function W(x,E){return h("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${x} q-carousel__navigation--${U.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[h("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},S().map(E))])}function ne(){const x=[];if(e.navigation===!0){const E=t["navigation-icon"]!==void 0?t["navigation-icon"]:a=>h(j,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),Y=n-1;x.push(W("buttons",(a,_)=>{const w=a.props.name,J=$.value===_;return E({index:_,maxIndex:Y,name:w,active:J,btnProps:{icon:J===!0?M.value:T.value,size:"sm",...L.value},onClick:()=>{u(w)}})}))}else if(e.thumbnails===!0){const E=e.controlColor!==void 0?` text-${e.controlColor}`:"";x.push(W("thumbnails",Y=>{const a=Y.props;return h("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+E,src:a.imgSrc||a["img-src"],onClick:()=>{u(a.name)}})}))}return e.arrows===!0&&$.value>=0&&((e.infinite===!0||$.value>0)&&x.push(h("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${D.value} absolute flex flex-center`},[h(j,{icon:X.value[0],...L.value,onClick:d})])),(e.infinite===!0||$.value<n-1)&&x.push(h("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${D.value} absolute flex flex-center`},[h(j,{icon:X.value[1],...L.value,onClick:p})]))),Fe(t.control,x)}return()=>(n=o(t),h("div",{class:O.value,style:N.value},[Re("div",{class:"q-carousel__slides-container"},c(),"sl-cont",e.swipeable,()=>v.value)].concat(ne())))}}),ut={setup(){return{slide:R(2)}}};function dt(e,t,r,s,l,n){return m(),F(ct,{class:"hcarous",swipeable:"",animated:"",modelValue:s.slide,"onUpdate:modelValue":t[0]||(t[0]=o=>s.slide=o),thumbnails:"",infinite:""},{default:f(()=>[i(se,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}),i(se,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),i(se,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),i(se,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})]),_:1},8,["modelValue"])}const ft=P(ut,[["render",dt],["__scopeId","data-v-cf84d043"],["__file","AppCarousel.vue"]]),vt={ratio:[String,Number]};function gt(e,t){return y(()=>{const r=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}function be(){let e=null;const t=te();function r(){e!==null&&(clearTimeout(e),e=null)}return Le(r),ge(r),{removeTimeout:r,registerTimeout(s,l){r(),ce(t)===!1&&(e=setTimeout(s,l))}}}const mt=16/9,re=ee({name:"QImg",props:{...vt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:mt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:r}){const s=R(e.initialRatio),l=gt(e,s),n=te(),{registerTimeout:o,removeTimeout:c}=be(),{registerTimeout:v,removeTimeout:u}=be(),d=[R(null),R(U())],p=R(0),S=R(!1),$=R(!1),I=y(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),N=y(()=>({width:e.width,height:e.height})),D=y(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),O=y(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));Z(()=>M(),L);function X(){if(u(),e.loadingShowDelay===0){S.value=!0;return}v(()=>{S.value=!0},e.loadingShowDelay)}function T(){u(),S.value=!1}function M(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function U(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function L(a){c(),$.value=!1,a===null?(T(),d[p.value^1].value=U()):X(),d[p.value].value=a}function A({target:a}){ce(n)===!1&&(c(),s.value=a.naturalHeight===0?.5:a.naturalWidth/a.naturalHeight,W(a,1))}function W(a,_){_===1e3||ce(n)===!0||(a.complete===!0?ne(a):o(()=>{W(a,_+1)},50))}function ne(a){ce(n)!==!0&&(p.value=p.value^1,d[p.value].value=null,T(),$.value=!1,r("load",a.currentSrc||a.src))}function x(a){c(),T(),$.value=!0,d[p.value].value=null,d[p.value^1].value=U(),r("error",a)}function E(a){const _=d[a].value,w={key:"img_"+a,class:D.value,style:O.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,..._};return p.value===a?(w.class+=" q-img__image--waiting",Object.assign(w,{onLoad:A,onError:x})):w.class+=" q-img__image--loaded",h("div",{class:"q-img__container absolute-full",key:"img"+a},h("img",w))}function Y(){return S.value===!1?h("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},G(t[$.value===!0?"error":"default"])):h("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[h(He,{color:e.spinnerColor,size:e.spinnerSize})])}return L(M()),()=>{const a=[];return l.value!==null&&a.push(h("div",{key:"filler",style:l.value})),$.value!==!0&&(d[0].value!==null&&a.push(E(0)),d[1].value!==null&&a.push(E(1))),a.push(h(xe,{name:"q-transition--fade"},Y)),h("div",{class:I.value,style:N.value,role:"img","aria-label":e.alt},a)}}}),z=ee({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const r=y(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>h(e.tag,{class:r.value},G(t.default))}}),K=ee({name:"QCard",props:{...we,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=te(),s=ke(e,r),l=y(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>h(e.tag,{class:l.value},G(t.default))}}),pt=ue({name:"LocalDestinations",data(){return{localDestinations:[{title:"Destination 1",image:"t1.jpg",alt:"Destination 1",description:"Description of destination 1."},{title:"Destination 2",image:"t2.jpg",alt:"Destination 2",description:"Description of destination 2."},{title:"Destination 3",image:"t3.jpg",alt:"Destination 3",description:"Description of destination 3."}]}}}),_t=e=>(B("data-v-964d644a"),e=e(),Q(),e),ht=_t(()=>k("h2",null,"Local Destinations",-1));function yt(e,t,r,s,l,n){const o=g("q-card-title"),c=g("q-card-text"),v=g("q-card-group");return m(),C("div",null,[ht,i(v,{class:"q-mb-md",style:{display:"flex","flex-wrap":"wrap"}},{default:f(()=>[(m(!0),C(V,null,H(e.localDestinations,(u,d)=>(m(),F(K,{key:d,class:"destination-card"},{default:f(()=>[i(re,{src:`/images/${u.image}`,alt:u.alt},null,8,["src","alt"]),i(z,null,{default:f(()=>[i(o,null,{default:f(()=>[b(q(u.title),1)]),_:2},1024),i(c,null,{default:f(()=>[b(q(u.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])}const St=P(pt,[["render",yt],["__scopeId","data-v-964d644a"],["__file","LocalSections.vue"]]),$t=ue({name:"InterNsections",data(){return{localDestinations:[{title:"Destination 1",image:"t1.jpg",alt:"Destination 1",description:"Description of destination 1."},{title:"Destination 2",image:"t2.jpg",alt:"Destination 2",description:"Description of destination 2."},{title:"Destination 3",image:"t3.jpg",alt:"Destination 3",description:"Description of destination 3."}]}}}),Ct=e=>(B("data-v-ee4068d3"),e=e(),Q(),e),bt=Ct(()=>k("h2",null,"International Destinations",-1));function xt(e,t,r,s,l,n){const o=g("q-card-title"),c=g("q-card-text"),v=g("q-card-group");return m(),C("div",null,[bt,i(v,{class:"q-mb-md",style:{display:"flex","flex-wrap":"wrap"}},{default:f(()=>[(m(!0),C(V,null,H(e.localDestinations,(u,d)=>(m(),F(K,{key:d,class:"destination-card"},{default:f(()=>[i(re,{src:`/images/${u.image}`,alt:u.alt},null,8,["src","alt"]),i(z,null,{default:f(()=>[i(o,null,{default:f(()=>[b(q(u.title),1)]),_:2},1024),i(c,null,{default:f(()=>[b(q(u.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])}const qt=P($t,[["render",xt],["__scopeId","data-v-ee4068d3"],["__file","InterNSections.vue"]]),wt=ue({name:"AppFeatures",data(){return{features:[{icon:"flight_takeoff",title:"Worldwide Destinations",description:"Explore destinations across the globe and plan your dream vacation."},{icon:"hotel",title:"Accommodation",description:"Discover a variety of accommodation options including hotels, resorts, and more."},{icon:"directions_car",title:"Transportation",description:"Find convenient transportation options for your travel needs."}]}}}),kt=e=>(B("data-v-b5749f6d"),e=e(),Q(),e),It={class:"features"},Dt=kt(()=>k("h2",null,"Our Services",-1)),Pt={class:"feature-list"},Tt={class:"feature-title"},At={class:"feature-description"};function Bt(e,t,r,s,l,n){return m(),C("div",It,[Dt,k("div",Pt,[(m(!0),C(V,null,H(e.features,(o,c)=>(m(),C("div",{key:c,class:"feature"},[i(Oe,{name:o.icon,size:"50px",class:"feature-icon"},null,8,["name"]),k("h3",Tt,q(o.title),1),k("p",At,q(o.description),1)]))),128))])])}const Qt=P(wt,[["render",Bt],["__scopeId","data-v-b5749f6d"],["__file","AppFeatures.vue"]]),Nt=ue({name:"HighlightTours",data(){return{tourHighlights:[{title:"Safari Adventure",image:"/images/t1.jpg",description:"Experience the thrill of a safari adventure in the heart of Africa."},{title:"Beach Paradise",image:"/images/t2.jpg",description:"Relax and unwind on pristine beaches with crystal-clear waters."}]}}}),Et=e=>(B("data-v-ad79bb22"),e=e(),Q(),e),Rt={class:"highlightr"},zt=Et(()=>k("h2",{class:"highlight-heading"},"Highlight Tours",-1));function Ft(e,t,r,s,l,n){const o=g("q-card-title"),c=g("q-card-text"),v=g("q-card-group");return m(),C("div",Rt,[zt,i(v,{style:{display:"flex","flex-wrap":"wrap"}},{default:f(()=>[(m(!0),C(V,null,H(e.tourHighlights,(u,d)=>(m(),F(K,{key:d,class:"tour-card q-mb-md"},{default:f(()=>[i(re,{src:u.image,alt:u.title,class:"tour-image"},null,8,["src","alt"]),i(z,null,{default:f(()=>[i(o,null,{default:f(()=>[b(q(u.title),1)]),_:2},1024),i(c,null,{default:f(()=>[b(q(u.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])}const Lt=P(Nt,[["render",Ft],["__scopeId","data-v-ad79bb22"],["__file","HighlightTours.vue"]]),jt={name:"TravelStories",data(){return{stories:[{title:"Adventure in the Amazon Rainforest",image:"/images/amazon.jpg",description:"Embark on a journey deep into the heart of the Amazon Rainforest..."},{title:"Exploring Ancient Ruins in Machu Picchu",image:"/images/machu-picchu.jpg",description:"Discover the mysteries of the ancient Inca civilization amidst the breathtaking ruins of Machu Picchu..."}]}},methods:{readMore(e){console.log("Read more about:",e.title)}}},Vt=e=>(B("data-v-04ac7d99"),e=e(),Q(),e),Ht={class:"travel-stories"},Ot=Vt(()=>k("h1",null,"Travel Stories",-1));function Mt(e,t,r,s,l,n){const o=g("q-card-title"),c=g("q-card-text");return m(),C("div",Ht,[Ot,(m(!0),C(V,null,H(l.stories,(v,u)=>(m(),F(K,{key:u,class:"story-card"},{default:f(()=>[i(z,null,{default:f(()=>[i(re,{src:v.image,alt:v.title,class:"story-image"},null,8,["src","alt"])]),_:2},1024),i(z,null,{default:f(()=>[i(o,null,{default:f(()=>[b(q(v.title),1)]),_:2},1024),i(c,null,{default:f(()=>[b(q(v.description),1)]),_:2},1024),i(j,{label:"Read More",onClick:d=>n.readMore(v)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))])}const Ut=P(jt,[["render",Mt],["__scopeId","data-v-04ac7d99"],["__file","TravelStories.vue"]]),Wt={name:"UpComingEvents",data(){return{events:[{title:"Adventure Trek in the Himalayas",image:"/images/himalayas.jpg",description:"Join us for an exciting trekking adventure in the majestic Himalayan mountains...",date:"Date: April 15, 2024"},{title:"Cultural Festival in Tokyo",image:"/images/tokyo-festival.jpg",description:"Experience the vibrant culture and traditions of Japan at the annual Tokyo Cultural Festival...",date:"Date: May 20, 2024"}]}},methods:{register(e){console.log("Registering for event:",e.title)}}},Gt=e=>(B("data-v-6caae944"),e=e(),Q(),e),Kt={class:"upcoming-events"},Xt=Gt(()=>k("h2",null,"Up Coming Events",-1));function Yt(e,t,r,s,l,n){const o=g("q-card-title"),c=g("q-card-text");return m(),C("div",Kt,[Xt,(m(!0),C(V,null,H(l.events,(v,u)=>(m(),F(K,{key:u,class:"event-card"},{default:f(()=>[i(z,null,{default:f(()=>[i(re,{src:v.image,alt:v.title,class:"event-image"},null,8,["src","alt"])]),_:2},1024),i(z,null,{default:f(()=>[i(o,null,{default:f(()=>[b(q(v.title),1)]),_:2},1024),i(c,null,{default:f(()=>[b(q(v.description),1)]),_:2},1024),i(c,{class:"event-date"},{default:f(()=>[b(q(v.date),1)]),_:2},1024),i(j,{label:"Register Now",onClick:d=>n.register(v)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))])}const Jt=P(Wt,[["render",Yt],["__scopeId","data-v-6caae944"],["__file","UpComingEvents.vue"]]),Zt={name:"IntroSection"},en=e=>(B("data-v-602f9fb9"),e=e(),Q(),e),tn={class:"intro-section q-pa-lg"},nn=en(()=>k("h2",null,"Welcome to Instincts of Kenya",-1));function an(e,t,r,s,l,n){const o=g("q-paragraph");return m(),C("div",tn,[nn,i(o,{class:"q-mt-md"},{default:f(()=>[b(" At Instincts of Kenya, we are passionate about showcasing the breathtaking beauty and rich cultural heritage of Kenya. With our carefully curated tours and personalized travel experiences, we aim to provide you with unforgettable adventures that immerse you in the heart and soul of this enchanting destination. ")]),_:1}),i(o,{class:"q-mt-md"},{default:f(()=>[b(" Whether you're seeking thrilling wildlife safaris, serene beach getaways, or authentic cultural encounters, our team of expert guides and travel specialists are dedicated to ensuring that every aspect of your journey exceeds your expectations. ")]),_:1}),i(o,{class:"q-mt-md"},{default:f(()=>[b(" Join us on an extraordinary voyage of discovery and let Instincts of Kenya be your trusted companion as you embark on a once-in-a-lifetime exploration of the wonders that Kenya has to offer. ")]),_:1})])}const on=P(Zt,[["render",an],["__scopeId","data-v-602f9fb9"],["__file","IntroSection.vue"]]),rn={name:"BookWithUsSection",methods:{handleBookNowClick(){console.log("Redirecting to booking page...")}}},ln=e=>(B("data-v-a5d6a165"),e=e(),Q(),e),sn={class:"book-with-us-section q-pa-lg"},cn=ln(()=>k("h2",null,"Book with Us",-1));function un(e,t,r,s,l,n){return m(),C("div",sn,[cn,i(j,{class:"book-now-btn q-mt-lg",color:"primary",label:"Book Now",onClick:n.handleBookNowClick},null,8,["onClick"])])}const dn=P(rn,[["render",un],["__scopeId","data-v-a5d6a165"],["__file","BookWithUsSection.vue"]]),pe=ee({name:"QCardActions",props:{...Me,vertical:Boolean},setup(e,{slots:t}){const r=Ue(e),s=y(()=>`q-card__actions ${r.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>h("div",{class:s.value},G(t.default))}}),fn={name:"HotDealsSection",data(){return{hotDeals:[{title:"Deal 1",description:"Description of deal 1."},{title:"Deal 2",description:"Description of deal 2."}]}},methods:{handleViewDealClick(e){console.log("Viewing deal:",e.title)}}},vn=e=>(B("data-v-b5ae9d57"),e=e(),Q(),e),gn={class:"hot-deals-section q-pa-lg"},mn=vn(()=>k("h2",null,"Hot Deals",-1));function pn(e,t,r,s,l,n){const o=g("q-card-title"),c=g("q-card-text"),v=g("q-card-group");return m(),C("div",gn,[mn,i(v,{class:"cardsec q-mb-md",style:{display:"flex","flex-wrap":"wrap"}},{default:f(()=>[(m(!0),C(V,null,H(l.hotDeals,(u,d)=>(m(),F(K,{key:d,class:"hot-deal-card q-mb-md"},{default:f(()=>[i(z,null,{default:f(()=>[i(o,null,{default:f(()=>[b(q(u.title),1)]),_:2},1024),i(c,null,{default:f(()=>[b(q(u.description),1)]),_:2},1024)]),_:2},1024),i(pe,null,{default:f(()=>[i(j,{color:"primary",label:"View Deal",onClick:p=>n.handleViewDealClick(u)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])}const _n=P(fn,[["render",pn],["__scopeId","data-v-b5ae9d57"],["__file","HotDealsSection.vue"]]),hn={name:"OurOffersSection",data(){return{offers:[{title:"Offer 1",description:"Description of offer 1."},{title:"Offer 2",description:"Description of offer 2."}]}},methods:{handleViewOfferClick(e){console.log("Viewing offer:",e.title)}}},yn=e=>(B("data-v-4507a3bd"),e=e(),Q(),e),Sn={class:"our-offers-section q-pa-lg"},$n=yn(()=>k("h2",null,"Our Offers",-1));function Cn(e,t,r,s,l,n){const o=g("q-card-title"),c=g("q-card-text"),v=g("q-card-group");return m(),C("div",Sn,[$n,i(v,{class:"q-mb-md",style:{display:"flex","flex-wrap":"wrap"}},{default:f(()=>[(m(!0),C(V,null,H(l.offers,(u,d)=>(m(),F(K,{key:d,class:"offer-card q-mb-md"},{default:f(()=>[i(z,null,{default:f(()=>[i(o,null,{default:f(()=>[b(q(u.title),1)]),_:2},1024),i(c,null,{default:f(()=>[b(q(u.description),1)]),_:2},1024)]),_:2},1024),i(pe,null,{default:f(()=>[i(j,{color:"primary",label:"View Offer",onClick:p=>n.handleViewOfferClick(u)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])}const bn=P(hn,[["render",Cn],["__scopeId","data-v-4507a3bd"],["__file","OurPackagesSection.vue"]]),xn={name:"TravelGuidesSection",data(){return{guides:[{title:"Guide 1",description:"Description of guide 1."},{title:"Guide 2",description:"Description of guide 2."}]}},methods:{handleReadGuideClick(e){console.log("Reading guide:",e.title)}}},qn=e=>(B("data-v-a53a7d71"),e=e(),Q(),e),wn={class:"travel-guides-section q-pa-lg"},kn=qn(()=>k("h2",null,"Travel Guides",-1));function In(e,t,r,s,l,n){const o=g("q-card-title"),c=g("q-card-text"),v=g("q-card-group");return m(),C("div",wn,[kn,i(v,{class:"q-mb-md",style:{display:"flex","flex-wrap":"wrap"}},{default:f(()=>[(m(!0),C(V,null,H(l.guides,(u,d)=>(m(),F(K,{key:d,class:"guide-card q-mb-md"},{default:f(()=>[i(z,null,{default:f(()=>[i(o,null,{default:f(()=>[b(q(u.title),1)]),_:2},1024),i(c,null,{default:f(()=>[b(q(u.description),1)]),_:2},1024)]),_:2},1024),i(pe,null,{default:f(()=>[i(j,{color:"primary",label:"Read Guide",onClick:p=>n.handleReadGuideClick(u)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])}const Dn=P(xn,[["render",In],["__scopeId","data-v-a53a7d71"],["__file","TravelGuidesSection.vue"]]),Pn={name:"HomePage",layout:"MainLayout",components:{AppCarousel:ft,HighlightTours:Lt,AppFeatures:Qt,LocalSections:St,InterNSections:qt,TravelStories:Ut,IntroSection:on,BookWithUsSection:dn,UpComingEvents:Jt,OurPackagesSection:bn,HotDealsSection:_n,TravelGuidesSection:Dn}},Tn={class:"content"};function An(e,t,r,s,l,n){const o=g("AppCarousel"),c=g("HighlightTours"),v=g("HotDealsSection"),u=g("IntroSection"),d=g("AppFeatures"),p=g("LocalSections"),S=g("InterNSections"),$=g("TravelStories"),I=g("UpComingEvents"),N=g("OurPackagesSection"),D=g("TravelGuidesSection"),O=g("BookWithUsSection");return m(),F(We,{class:"home-page",id:"app"},{default:f(()=>[i(o),k("div",Tn,[i(c),i(v),i(u),i(d),i(p),i(S),i($),i(I),i(N),i(D),i(O)])]),_:1})}const Nn=P(Pn,[["render",An],["__scopeId","data-v-1ed6bee4"],["__file","HomePage.vue"]]);export{Nn as default};
