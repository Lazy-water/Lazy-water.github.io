import{_,g as A,p as M,s as B,c as D,a as u,b as E,i as F,d as j,l as O,e as w,f as z,h as x,j as q}from"./locales-2658cfbc.js";import{r as m,c as L,n as v,a as c,o as i,F as p,b as S,d as l,t as g,e as f,f as h,g as R,w as b,T as Y,h as y,i as W,j as G,v as J,p as K,k as Q,l as U,m as X,q as Z,s as ee}from"./vue-libs-eb153a24.js";const te={name:"VanDocNavLink",props:{base:String,item:Object},computed:{itemName(){const e=(this.item.title||this.item.name).split(" ");return`${e[0]} <span>${e.slice(1).join(" ")}</span>`},path(){return`${this.base}${this.item.path}`},active(){return this.$route.path===this.path?!0:this.item.path==="home"?this.$route.path===this.base:!1}},watch:{active(){this.scrollIntoView()}},mounted(){this.scrollIntoView()},methods:{scrollIntoView(){this.active&&this.$el&&this.$el.scrollIntoViewIfNeeded&&this.$el.scrollIntoViewIfNeeded()}}},ne=["href","innerHTML"],oe=["innerHTML"];function se(e,t,n,a,s,o){const r=m("router-link");return n.item.path?(i(),L(r,{key:0,class:v({active:o.active}),to:o.path,innerHTML:o.itemName},null,8,["class","to","innerHTML"])):n.item.link?(i(),c("a",{key:1,href:n.item.link,innerHTML:o.itemName},null,8,ne)):(i(),c("a",{key:2,innerHTML:o.itemName},null,8,oe))}const V=_(te,[["render",se]]);const ae={name:"VanDocNav",components:{[V.name]:V},props:{lang:String,navConfig:Array},data(){return{isFixed:!1}},computed:{base(){return this.lang?`/${this.lang}/`:"/"}},created(){window.addEventListener("scroll",this.onScroll),this.onScroll()},methods:{onScroll(){const{pageYOffset:e}=window;this.isFixed=e>64}}},ie={class:"van-doc-nav__title"};function re(e,t,n,a,s,o){const r=m("van-doc-nav-link");return i(),c("div",{class:v(["van-doc-nav",{"van-doc-nav-fixed":s.isFixed}])},[(i(!0),c(p,null,S(n.navConfig,(d,k)=>(i(),c("div",{class:"van-doc-nav__group",key:k},[l("div",ie,g(d.title),1),d.items?(i(!0),c(p,{key:0},S(d.items,($,C)=>(i(),c("div",{key:C,class:"van-doc-nav__item"},[f(r,{item:$,base:o.base},null,8,["item","base"])]))),128)):h("v-if",!0)]))),128))],2)}const ce=_(ae,[["render",re]]);const le={name:"VanDocHeader",props:{lang:String,config:Object,versions:Array,langConfigs:Array,darkModeClass:String},data(){return{currentTheme:A(),packageVersion:M,showVersionPop:!1}},computed:{langLink(){return`#${this.$route.path.replace(this.lang,this.anotherLang.lang)}`},langLabel(){return this.anotherLang.label},anotherLang(){const e=this.langConfigs.filter(t=>t.lang!==this.lang);return e.length?e[0]:{}},themeImg(){return this.currentTheme==="light"?"https://b.yzcdn.cn/vant/dark-theme.svg":"https://b.yzcdn.cn/vant/light-theme.svg"}},watch:{currentTheme:{handler(e,t){window.localStorage.setItem("vantTheme",e),document.documentElement.classList.remove(`van-doc-theme-${t}`),document.documentElement.classList.add(`van-doc-theme-${e}`),B(e)},immediate:!0}},methods:{toggleTheme(){this.currentTheme=this.currentTheme==="light"?"dark":"light"},toggleVersionPop(){const e=!this.showVersionPop,t=e?"add":"remove";document.body[`${t}EventListener`]("click",this.checkHideVersionPop),this.showVersionPop=e},checkHideVersionPop(e){this.$refs.version.contains(e.target)||(this.showVersionPop=!1)},onSwitchLang(e){this.$router.push(this.$route.path.replace(e.from,e.to))},onSwitchVersion(e){e.link&&(location.href=e.link)}}},de={class:"van-doc-header"},ue={class:"van-doc-row"},he={class:"van-doc-header__top"},me={class:"van-doc-header__logo"},_e=["src"],ge={class:"van-doc-header__title"},fe={key:0,class:"van-doc-header__subtitle"},ve={class:"van-doc-header__top-nav"},pe=["href"],ye=["src"],ke={key:1},we={key:0,class:"van-doc-header__top-nav-item"},Se=["src"],be={key:1,ref:"version",class:"van-doc-header__top-nav-item"},Te={key:0,class:"van-doc-header__version-pop"},$e=["onClick"],Ce={key:2,class:"van-doc-header__top-nav-item"},Le=["href"];function xe(e,t,n,a,s,o){return i(),c("div",de,[l("div",ue,[l("div",he,[l("a",me,[l("img",{src:n.config.logo},null,8,_e),l("span",ge,g(n.config.title),1),n.config.subtitle?(i(),c("span",fe,g(n.config.subtitle),1)):h("v-if",!0)]),l("ul",ve,[(i(!0),c(p,null,S(n.config.links,(r,d)=>(i(),c("li",{key:d,class:"van-doc-header__top-nav-item"},[l("a",{class:"van-doc-header__link",target:"_blank",href:r.url},[r.logo?(i(),c("img",{key:0,src:r.logo},null,8,ye)):r.text?(i(),c("span",ke,g(r.text),1)):h("v-if",!0)],8,pe)]))),128)),n.darkModeClass?(i(),c("li",we,[l("a",{class:"van-doc-header__link",target:"_blank",onClick:t[0]||(t[0]=(...r)=>o.toggleTheme&&o.toggleTheme(...r))},[l("img",{src:o.themeImg},null,8,Se)])])):h("v-if",!0),n.versions?(i(),c("li",be,[l("span",{class:"van-doc-header__cube van-doc-header__version",onClick:t[1]||(t[1]=(...r)=>o.toggleVersionPop&&o.toggleVersionPop(...r))},[R(g(s.packageVersion)+" ",1),f(Y,{name:"van-doc-dropdown"},{default:b(()=>[s.showVersionPop?(i(),c("div",Te,[(i(!0),c(p,null,S(n.versions,(r,d)=>(i(),c("div",{key:d,class:"van-doc-header__version-pop-item",onClick:k=>o.onSwitchVersion(r)},g(r.label),9,$e))),128))])):h("v-if",!0)]),_:1})])],512)):h("v-if",!0),o.langLabel&&o.langLink?(i(),c("li",Ce,[l("a",{class:"van-doc-header__cube",href:o.langLink},g(o.langLabel),9,Le)])):h("v-if",!0)])])])])}const Ve=_(le,[["render",xe]]);const He={name:"VanDocContent",data(){return{iframeDocument:null}},computed:{currentPage(){const{path:e}=this.$route;return e?e.split("/").slice(-1)[0]:this.$route.name}},watch:{$route(e,t){t.path!==e.path&&setTimeout(()=>{this.copyAction()})}},mounted(){this.copyAction()},methods:{onClick({target:e}){["H2","H3","H4","H5"].includes(e.tagName)&&this.scrollToAnchor(e)},scrollToAnchor(e){e.id&&(this.$router.push({name:this.$route.name,hash:"#"+e.id}),this.syncMobilePos(e.id))},syncMobilePos(e){if(!this.iframeDocument){const t=document.querySelector("iframe");this.iframeDocument=t.contentWindow.document}if(this.iframeDocument){const t=this.iframeDocument.getElementById(e);t&&t.scrollIntoView(!0)}},copyAction(){const e=document.querySelectorAll(".van-doc-card pre code");if(!(!e||!e.length))for(let t=0;t<e.length;t++){const n=e[t];let a=null;n.addEventListener("click",()=>{if(a)return;const s=n.innerText;D(s),n.classList.add("code-copy-success"),a=setTimeout(()=>{n.classList.remove("code-copy-success"),a=null},1400)})}}}};function Ne(e,t,n,a,s,o){return i(),c("div",{class:v(["van-doc-content",`van-doc-content--${o.currentPage}`]),onClick:t[0]||(t[0]=(...r)=>o.onClick&&o.onClick(...r))},[y(e.$slots,"default")],2)}const De=_(He,[["render",Ne]]);const Pe={name:"VanDocContainer",props:{hasSimulator:Boolean}};function Ie(e,t,n,a,s,o){return i(),c("div",{class:v(["van-doc-container van-doc-row",{"van-doc-container--with-simulator":n.hasSimulator}])},[y(e.$slots,"default")],2)}const Ae=_(Pe,[["render",Ie]]);const Me={name:"VanDocSimulator",props:{src:String},data(){return{scrollTop:window.scrollY,windowHeight:window.innerHeight}},computed:{isFixed(){return this.scrollTop>60},simulatorStyle(){return{height:Math.min(640,this.windowHeight-90)+"px"}}},mounted(){window.addEventListener("scroll",()=>{this.scrollTop=window.scrollY}),window.addEventListener("resize",()=>{this.windowHeight=window.innerHeight})}},Be=["src"];function Ee(e,t,n,a,s,o){return i(),c("div",{class:v(["van-doc-simulator",{"van-doc-simulator-fixed":o.isFixed}])},[l("iframe",{ref:"iframe",src:n.src,style:W(o.simulatorStyle),frameborder:"0"},null,12,Be)],2)}const Fe=_(Me,[["render",Ee]]),je={name:"VanDoc",components:{DocNav:ce,DocHeader:Ve,DocContent:De,DocContainer:Ae,DocSimulator:Fe},props:{lang:String,versions:Array,simulator:String,langConfigs:Array,hasSimulator:Boolean,darkModeClass:String,config:{type:Object,required:!0},base:{type:String,default:""}},emits:["switch-version"],watch:{$route(){this.setNav()}},created(){this.setNav(),this.keyboardHandler()},methods:{setNav(){const{nav:e}=this.config,t=e.reduce((s,o)=>s.concat(o.items),[]),n=this.$route.path.split("/").pop();let a;for(let s=0,o=t.length;s<o;s++)if(t[s].path===n){a=s;break}this.leftNav=t[a-1],this.rightNav=t[a+1]},keyboardNav(e){if(/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase()))return;const t=e==="prev"?this.leftNav:this.rightNav;t.path&&this.$router.push(this.base+t.path)},keyboardHandler(){window.addEventListener("keyup",e=>{switch(e.keyCode){case 37:this.keyboardNav("prev");break;case 39:this.keyboardNav("next");break}})}}},Oe={class:"van-doc"};function ze(e,t,n,a,s,o){const r=m("doc-header"),d=m("doc-nav"),k=m("doc-content"),$=m("doc-container"),C=m("doc-simulator");return i(),c("div",Oe,[f(r,{lang:n.lang,config:n.config,versions:n.versions,"lang-configs":n.langConfigs,"dark-mode-class":n.darkModeClass,onSwitchVersion:t[0]||(t[0]=I=>e.$emit("switch-version",I))},null,8,["lang","config","versions","lang-configs","dark-mode-class"]),f(d,{lang:n.lang,"nav-config":n.config.nav},null,8,["lang","nav-config"]),f($,{"has-simulator":n.hasSimulator},{default:b(()=>[f(k,null,{default:b(()=>[y(e.$slots,"default")]),_:3})]),_:3},8,["has-simulator"]),n.hasSimulator?(i(),L(C,{key:0,src:n.simulator},null,8,["src"])):h("v-if",!0)])}const qe=_(je,[["render",ze]]);const Re={components:{VanDoc:qe},data(){return{hasSimulator:!0,darkModeClass:u.site.darkModeClass}},computed:{simulator(){var t,n;return(t=u.site.simulator)!=null&&t.url?(n=u.site.simulator)==null?void 0:n.url:`${location.pathname.replace(/\/index(\.html)?/,"/")}mobile.html${location.hash}`},lang(){const{lang:e}=this.$route.meta;return e||""},langConfigs(){const{locales:e={}}=u.site;return Object.keys(e).map(t=>({lang:t,label:e[t].langLabel||""}))},config(){const{locales:e}=u.site;return e?e[this.lang]:u.site},versions(){return u.site.versions||null}},watch:{"$route.path"(){this.setTitleAndToggleSimulator()},lang(e){E(e),this.setTitleAndToggleSimulator()},config:{handler(e){e&&this.setTitleAndToggleSimulator()},immediate:!0}},mounted(){this.$route.hash&&this.$nextTick(()=>{const e=document.querySelector(this.$route.hash);e&&e.scrollIntoView()})},methods:{setTitleAndToggleSimulator(){let{title:e}=this.config;const n=this.config.nav.reduce((a,s)=>[...a,...s.items],[]).find(a=>a.path===this.$route.meta.name);n&&n.title?e=n.title+" - "+e:this.config.description&&(e+=` - ${this.config.description}`),document.title=e,this.hasSimulator=!(u.site.hideSimulator||this.config.hideSimulator||n&&n.hideSimulator)}}},Ye={class:"app"};function We(e,t,n,a,s,o){const r=m("router-view"),d=m("van-doc");return i(),c("div",Ye,[o.config?(i(),L(d,{key:0,lang:o.lang,config:o.config,versions:o.versions,simulator:o.simulator,"has-simulator":s.hasSimulator,"lang-configs":o.langConfigs,"dark-mode-class":s.darkModeClass},{default:b(()=>[f(r)]),_:1},8,["lang","config","versions","simulator","has-simulator","lang-configs","dark-mode-class"])):h("v-if",!0)])}const Ge=_(Re,[["render",We]]);const Je={name:"DemoPlayground",props:{originCode:String,codeSnippet:String,transform:Boolean,compact:Boolean,inline:Boolean},data(){return{showSource:!1,copyStatus:"ready"}},methods:{unescape,toggleSource(){this.showSource=!this.showSource},copySourceCode(){D(unescape(this.originCode)),this.copyStatus="copied",setTimeout(()=>{this.copyStatus="ready"},2e3)}}},Ke=e=>(K("data-v-f05dffcb"),e=e(),Q(),e),Qe={class:"demo-playground--code"},Ue={class:"demo-playground--code--actions"},Xe=Ke(()=>l("span",null,null,-1)),Ze=["data-status"],et=["innerHTML"];function tt(e,t,n,a,s,o){return i(),c("div",{class:v({"demo-playground":!n.inline,transform:n.transform})},[n.inline?y(e.$slots,"default",{key:0},void 0,!0):(i(),c(p,{key:1},[l("div",{class:v(["demo-playground--previewer",{compact:n.compact}])},[y(e.$slots,"default",{},void 0,!0)],2),l("div",Qe,[l("div",Ue,[Xe,l("button",{title:"Copy source code",class:"action-icon",role:"copy","data-status":s.copyStatus,onClick:t[0]||(t[0]=(...r)=>o.copySourceCode&&o.copySourceCode(...r))},null,8,Ze),l("button",{title:"Toggle source code panel",class:"action-icon",role:"source",onClick:t[1]||(t[1]=(...r)=>o.toggleSource&&o.toggleSource(...r))})]),G(l("div",{innerHTML:o.unescape(n.codeSnippet),class:"demo-playground--code--content"},null,8,et),[[J,s.showSource]])])],64))],2)}const H=_(Je,[["render",tt],["__scopeId","data-v-f05dffcb"]]);F&&location.replace("mobile.html"+location.hash);const{locales:P,defaultLang:nt}=u.site;j(nt);function ot(e){if(e.indexOf("_")!==-1){const t=e.split("_"),n=t.shift();return{component:`${x(n)}`,lang:t.join("-")}}return{component:`${x(e)}`,lang:""}}function st(e){const t=e.path.split("/")[1];return Object.keys(P).indexOf(t)!==-1?t:q()}function at(){const e=[],t=Object.keys(w);P?e.push({name:"notFound",path:"/:path(.*)+",redirect:a=>({name:st(a)})}):e.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"home"}});function n(a,s){e.push({name:s||"home",path:`/${s||""}`,component:a,meta:{lang:s}})}return t.forEach(a=>{const{component:s,lang:o}=ot(a);s==="home"&&n(w[a],o),o?e.push({name:`${o}/${s}`,path:`/${o}/${s}`,component:w[a],meta:{lang:o,name:s}}):e.push({name:`${s}`,path:`/${s}`,component:w[a],meta:{name:s}})}),e}const T=U({history:X(),routes:at(),scrollBehavior(e){return e.hash?{el:e.hash}:{top:0}}});T.afterEach(()=>{Z(z)});var N;((N=u.site.simulator)==null?void 0:N.syncPathFromSimulator)!==!1&&O(T);window.vueRouter=T;window.app=ee(Ge).use(T).component(H.name,H);setTimeout(()=>{window.app.mount("#app")},0);
