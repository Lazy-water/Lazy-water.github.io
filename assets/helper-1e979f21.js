import{s as Pe,D as xe,E as ce,B as U,C as O,o as _,a as T,i as x,n as I,d as A,F as re,b as ie,f as $,h as le,y as ue,u as q,r as Z,c as P,w as ne,t as F,T as fe,e as de,G as pe,g as Ie}from"./vue-libs-eb153a24.js";import{_ as H}from"./locales-2658cfbc.js";const Me=(e,r=2,i)=>{const u=Number(e);if(isNaN(u))return 0;const{floor:l}=i||{},n=Math.pow(10,r+1),o=Math.pow(10,r);return(l?Math.floor(u*n/10):Math.round(u*n/10))/o};function $t(){if(typeof window>"u")return{};const e=navigator.userAgent,r=/macintosh|mac os x/i.test(e);return{devicePixelRatio:window.devicePixelRatio,language:navigator.language,windowHeight:window.innerHeight,windowWidth:window.innerWidth,isMac:r,isIos:/(iPhone|iPad|iPod|iOS)/i.test(e)||r,isWeixin:/micromessenger/.test(e.toLowerCase()),isAlipay:/alipay/.test(e.toLowerCase())}}function Fe(e,r=!1){const i=e.replace(/-(\w)/g,(u,l)=>l.toUpperCase());return r?`${i[0].toUpperCase()}${i.substring(1)}`:i}function Le(e){return e.replace(/[A-Z]/g,r=>"-"+r.toLowerCase())}function M(e,r=2,i){const{right:u,sign:l="0"}=i||{},n=String(e);let o="";const t=r-n.length;if(t>0)for(let a=0;a<t;a++)o+=l;return u?`${n}${o}`:`${o}${n}`}const Be=(e,r=!0)=>{e=e||0;let o="00",t="00";r?(o=M(Math.floor(e/864e5)),t=M(Math.floor(e%864e5/36e5))):t=M(Math.floor(e/36e5));const a=M(Math.floor(e%36e5/6e4)),d=M(Math.floor(e%6e4/1e3)),g=Math.floor(Math.floor(e%1e3)/100);return{days:o,hours:t,minutes:a,seconds:d,milliseconds:g}},je=typeof window<"u";var Re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function De(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ye={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(e,r){(function(u,l){e.exports=l()})(Re,function(){return function(){var i={686:function(n,o,t){t.d(o,{default:function(){return ze}});var a=t(279),d=t.n(a),g=t(370),h=t.n(g),w=t(817),k=t.n(w);function b(y){try{return document.execCommand(y)}catch{return!1}}var S=function(c){var s=k()(c);return b("cut"),s},v=S;function C(y){var c=document.documentElement.getAttribute("dir")==="rtl",s=document.createElement("textarea");s.style.fontSize="12pt",s.style.border="0",s.style.padding="0",s.style.margin="0",s.style.position="absolute",s.style[c?"right":"left"]="-9999px";var f=window.pageYOffset||document.documentElement.scrollTop;return s.style.top="".concat(f,"px"),s.setAttribute("readonly",""),s.value=y,s}var B=function(c,s){var f=C(c);s.container.appendChild(f);var p=k()(f);return b("copy"),f.remove(),p},W=function(c){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},f="";return typeof c=="string"?f=B(c,s):c instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(c==null?void 0:c.type)?f=B(c.value,s):(f=k()(c),b("copy")),f},N=W;function Y(y){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Y=function(s){return typeof s}:Y=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Y(y)}var we=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=c.action,f=s===void 0?"copy":s,p=c.container,m=c.target,E=c.text;if(f!=="copy"&&f!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(m!==void 0)if(m&&Y(m)==="object"&&m.nodeType===1){if(f==="copy"&&m.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(f==="cut"&&(m.hasAttribute("readonly")||m.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return N(E,{container:p});if(m)return f==="cut"?v(m):N(m,{container:p})},Ce=we;function j(y){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?j=function(s){return typeof s}:j=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},j(y)}function _e(y,c){if(!(y instanceof c))throw new TypeError("Cannot call a class as a function")}function oe(y,c){for(var s=0;s<c.length;s++){var f=c[s];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(y,f.key,f)}}function ke(y,c,s){return c&&oe(y.prototype,c),s&&oe(y,s),y}function Te(y,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(c&&c.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),c&&Q(y,c)}function Q(y,c){return Q=Object.setPrototypeOf||function(f,p){return f.__proto__=p,f},Q(y,c)}function $e(y){var c=Oe();return function(){var f=G(y),p;if(c){var m=G(this).constructor;p=Reflect.construct(f,arguments,m)}else p=f.apply(this,arguments);return Ee(this,p)}}function Ee(y,c){return c&&(j(c)==="object"||typeof c=="function")?c:Ne(y)}function Ne(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function Oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function G(y){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},G(y)}function ee(y,c){var s="data-clipboard-".concat(y);if(c.hasAttribute(s))return c.getAttribute(s)}var Ae=function(y){Te(s,y);var c=$e(s);function s(f,p){var m;return _e(this,s),m=c.call(this),m.resolveOptions(p),m.listenClick(f),m}return ke(s,[{key:"resolveOptions",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof p.action=="function"?p.action:this.defaultAction,this.target=typeof p.target=="function"?p.target:this.defaultTarget,this.text=typeof p.text=="function"?p.text:this.defaultText,this.container=j(p.container)==="object"?p.container:document.body}},{key:"listenClick",value:function(p){var m=this;this.listener=h()(p,"click",function(E){return m.onClick(E)})}},{key:"onClick",value:function(p){var m=p.delegateTarget||p.currentTarget,E=this.action(m)||"copy",X=Ce({action:E,container:this.container,target:this.target(m),text:this.text(m)});this.emit(X?"success":"error",{action:E,text:X,trigger:m,clearSelection:function(){m&&m.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(p){return ee("action",p)}},{key:"defaultTarget",value:function(p){var m=ee("target",p);if(m)return document.querySelector(m)}},{key:"defaultText",value:function(p){return ee("text",p)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(p){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return N(p,m)}},{key:"cut",value:function(p){return v(p)}},{key:"isSupported",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],m=typeof p=="string"?[p]:p,E=!!document.queryCommandSupported;return m.forEach(function(X){E=E&&!!document.queryCommandSupported(X)}),E}}]),s}(d()),ze=Ae},828:function(n){var o=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(d,g){for(;d&&d.nodeType!==o;){if(typeof d.matches=="function"&&d.matches(g))return d;d=d.parentNode}}n.exports=a},438:function(n,o,t){var a=t(828);function d(w,k,b,S,v){var C=h.apply(this,arguments);return w.addEventListener(b,C,v),{destroy:function(){w.removeEventListener(b,C,v)}}}function g(w,k,b,S,v){return typeof w.addEventListener=="function"?d.apply(null,arguments):typeof b=="function"?d.bind(null,document).apply(null,arguments):(typeof w=="string"&&(w=document.querySelectorAll(w)),Array.prototype.map.call(w,function(C){return d(C,k,b,S,v)}))}function h(w,k,b,S){return function(v){v.delegateTarget=a(v.target,k),v.delegateTarget&&S.call(w,v)}}n.exports=g},879:function(n,o){o.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},o.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||o.node(t[0]))},o.string=function(t){return typeof t=="string"||t instanceof String},o.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(n,o,t){var a=t(879),d=t(438);function g(b,S,v){if(!b&&!S&&!v)throw new Error("Missing required arguments");if(!a.string(S))throw new TypeError("Second argument must be a String");if(!a.fn(v))throw new TypeError("Third argument must be a Function");if(a.node(b))return h(b,S,v);if(a.nodeList(b))return w(b,S,v);if(a.string(b))return k(b,S,v);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(b,S,v){return b.addEventListener(S,v),{destroy:function(){b.removeEventListener(S,v)}}}function w(b,S,v){return Array.prototype.forEach.call(b,function(C){C.addEventListener(S,v)}),{destroy:function(){Array.prototype.forEach.call(b,function(C){C.removeEventListener(S,v)})}}}function k(b,S,v){return d(document.body,b,S,v)}n.exports=g},817:function(n){function o(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var d=t.hasAttribute("readonly");d||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),d||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var g=window.getSelection(),h=document.createRange();h.selectNodeContents(t),g.removeAllRanges(),g.addRange(h),a=g.toString()}return a}n.exports=o},279:function(n){function o(){}o.prototype={on:function(t,a,d){var g=this.e||(this.e={});return(g[t]||(g[t]=[])).push({fn:a,ctx:d}),this},once:function(t,a,d){var g=this;function h(){g.off(t,h),a.apply(d,arguments)}return h._=a,this.on(t,h,d)},emit:function(t){var a=[].slice.call(arguments,1),d=((this.e||(this.e={}))[t]||[]).slice(),g=0,h=d.length;for(g;g<h;g++)d[g].fn.apply(d[g].ctx,a);return this},off:function(t,a){var d=this.e||(this.e={}),g=d[t],h=[];if(g&&a)for(var w=0,k=g.length;w<k;w++)g[w].fn!==a&&g[w].fn._!==a&&h.push(g[w]);return h.length?d[t]=h:delete d[t],this}},n.exports=o,n.exports.TinyEmitter=o}},u={};function l(n){if(u[n])return u[n].exports;var o=u[n]={exports:{}};return i[n](o,o.exports,l),o.exports}return function(){l.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(o,{a:o}),o}}(),function(){l.d=function(n,o){for(var t in o)l.o(o,t)&&!l.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})}}(),function(){l.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),l(686)}().default})})(ye);var Ue=De(ye.exports),He=e=>{const r=(e==null?void 0:e.appendToBody)===void 0?!0:e.appendToBody;return{toClipboard(i,u){return new Promise((l,n)=>{const o=document.createElement("button"),t=new Ue(o,{text:()=>i,action:()=>"copy",container:u!==void 0?u:document.body});t.on("success",a=>{t.destroy(),l(a)}),t.on("error",a=>{t.destroy(),n(a)}),r&&document.body.appendChild(o),o.click(),r&&document.body.removeChild(o)})}}};He();const Ve={configData:null},We=()=>{if(!je)return;const e=navigator.userAgent,r=/macintosh|mac os x/i.test(e);Object.assign(Ve,{isIos:/(iPhone|iPad|iPod|iOS)/i.test(e)||r,isWeixin:/micromessenger/.test(e.toLowerCase()),launchedUrl:location.href})};We();const Et=Be,Ye=Fe,Ge=Le,Nt=Me,Ot=M;function V(e){const r=`fan-${e}`;return[Ye(r,!0)]}function At(e){return""+((e==null?void 0:e.prefix)||"")+Math.floor(Math.random()*1e6).toString(36)}function zt(e){if(typeof e=="string"){if(e.includes("/")||e.includes(":")){const[r,i]=e.replace("/",":").split(":");return Number(r)/Number(i)}return Number(e)}return e}const Pt=(e=0)=>new Promise(r=>{setTimeout(()=>r(!0),e)}),z={runEnv:"h5",mpPlugin:!1,uniapp:!1},xt=z;function ge(e){return/(em|%|vw|vh|calc|rem|rpx)/.test(String(e))}function Xe(e){return typeof e=="string"?parseFloat(e.replace(/-[^0-9.]/g,"")):e}function R(e){if(!e)return e;const r=String(e);if(ge(r)||r.includes("PX")||r.includes("Px"))return r;const i=Xe(r);if(!i)return r;if(z.rem&&i>=z.rem.minPixelValue){const u=String(i/z.rem.rootValue),[l,n]=u.split(".");if(n&&n.length>z.rem.unitPrecision){const o=n.substring(0,z.rem.unitPrecision).replace(/0*$/,"");return`${l}${o?"."+o:""}rem`}return u+"rem"}return z.rpx?i*2+"rpx":i+"px"}function D(e){if(!e)return"";let r={},i=!1;if(typeof e=="string")e.includes("://")&&(i=!0,e=e.replace("://","{{colon//}}")),e.split(";").forEach(n=>{if(!n.trim())return;const[o,t]=n.split(":");r[o.trim()]=t.trim()});else if(typeof e=="object")r=e;else return"";let u="";for(let l in r){let n=r[l];typeof n=="string"&&(n.includes("px")&&(n=n.replace(/[0-9.]+px/g,o=>R(o))),i&&(n=n.replace("{{colon//}}","://"))),u+=`${Ge(l)}:${n};`}return u}const ae=Object.assign;function me(){const e=xe({show:!1}),r=n=>{e.show=n},i=n=>{ae(e,n),r(!0)},u=()=>r(!1),l=ce();return l&&ae(l.proxy,{open:i,close:u,toggle:r}),{open:i,close:u,state:e,toggle:r}}function he(e){const r=Pe(e),i=document.createElement("div");return document.body.appendChild(i),{instance:r.mount(i),unmount(){r.unmount(),document.body.removeChild(i)}}}const qe=U({name:V("Icon")[0],options:{virtualHost:!0},emits:["click"],props:{customStyle:[String,Object],name:String,size:{type:[String,Number],default:"inherit"},verticalAlign:String,color:{type:String,default:"inherit"}},setup(e,r){const i=O(()=>{var n;return(n=e.name)==null?void 0:n.includes("/")}),u=O(()=>{const{name:n,color:o,size:t,customStyle:a,verticalAlign:d}=e,g=R(t==="inherit"?"14px":t);let h="";return d&&(h+=`--fan-icon-align-v:${d};`),i.value?(h+=`width:${g};height:${g};`,o&&o!=="inherit"?h+=`-webkit-mask-image:url(${n});mask-image:url(${n});
						-webkit-mask-size:cover;mask-size:cover;
						background:${o};`:h+=`background:url(${n}) center / cover no-repeat;`):(h+=`font-size:${g};`,o!=null&&o.includes("-gradient")?h+=`color:transparent;background-image:${o};`:h+=`color:${o};`),D(a)+h});return{imgIcon:i,theStyle:u,onClick:n=>{r.emit("click",n)}}}});function Ze(e,r,i,u,l,n){return e.imgIcon?(_(),T("div",{key:0,style:x(e.theStyle),class:"fan-icon--img",onClick:r[0]||(r[0]=(...o)=>e.onClick&&e.onClick(...o))},null,4)):(_(),T("div",{key:1,style:x(e.theStyle),class:I(["fan-icon","icon-"+e.name]),onClick:r[1]||(r[1]=(...o)=>e.onClick&&e.onClick(...o))},null,6))}const ve=H(qe,[["render",Ze]]);const Je=U({name:V("Loading")[0],options:{virtualHost:!0},emits:["click"],props:{customStyle:[String,Object],inline:{type:Boolean,default:!1},color:{type:String,default:"#c9c9c9"},type:{type:String,validator:e=>["circle","circle2","spinner","line"].includes(e),default:"circle2"},size:{type:[String,Number],default:"30px"},textSize:{type:[String,Number],default:"14px"},textColor:String,vertical:Boolean},setup(e){const r=Array.from({length:12}),i=Array.from({length:3}),u=O(()=>{const{color:n,textSize:o,textColor:t,customStyle:a}=e;return D(a)+D({color:t||n,fontSize:o})}),l=O(()=>{const{size:n,color:o}=e,t=R(n);return`width:${t};height:${t};color:${o};`});return{array12:r,array3:i,theStyle:u,iconStyle:l}}}),Ke={class:"fan-loading__t"};function Qe(e,r,i,u,l,n){return _(),T("div",{class:I(["fan-loading",{"fan-loading--inline":e.inline,"fan-loading--vertical":e.vertical}]),style:x(e.theStyle),onClick:r[0]||(r[0]=o=>e.$emit("click",o))},[A("div",{class:I(["fan-loading__i","fan-loading__i--"+e.type]),style:x(e.iconStyle)},[e.type==="spinner"?(_(!0),T(re,{key:0},ie(e.array12,(o,t)=>(_(),T("div",{key:t,class:"fan-loading__dot"}))),128)):$("v-if",!0),e.type==="line"?(_(!0),T(re,{key:1},ie(e.array3,(o,t)=>(_(),T("div",{key:t,class:"fan-loading__ldot"}))),128)):$("v-if",!0)],6),A("div",Ke,[le(e.$slots,"default")])],6)}const be=H(Je,[["render",Qe]]);const et=U({name:V("Toast")[0],components:{FanIcon:ve,FanLoading:be},emits:["update:show"],props:{show:{type:Boolean,default:!1},message:String,icon:{type:String,default:"none",validator:e=>["none","success","error","loading"].includes(e)},duration:{type:Number,default:2e3},delay:{type:Number,default:0}},setup(e,{emit:r}){const i=ue(e.show),u=O(()=>{const{icon:n}=e;return n==="none"?"none":n==="loading"?"loading":"icon"});let l;return q(()=>e.show,n=>{l&&clearTimeout(l),n&&e.delay?l=setTimeout(()=>{i.value=n},e.delay):i.value=n}),q(i,n=>{r("update:show",n),n&&e.duration>0&&setTimeout(()=>i.value=!1,e.duration)}),{showIconType:u,innerShow:i}}}),tt={class:"fan-toast__text"};function nt(e,r,i,u,l,n){const o=Z("FanIcon"),t=Z("FanLoading");return _(),P(fe,{name:"fan"},{default:ne(()=>[e.innerShow?(_(),T("div",{key:0,class:I(["fan-toast fan-flex-center fan-flex-col",e.icon==="none"?"fan-toast--text":"fan-toast--icon"])},[e.showIconType==="icon"?(_(),P(o,{key:0,name:e.icon==="success"?"check":"exclamation",size:"36",color:"#fff"},null,8,["name"])):e.showIconType==="loading"?(_(),P(t,{key:1,color:"#fff",size:"36"})):$("v-if",!0),A("div",tt,F(e.message),1)],2)):$("v-if",!0)]),_:1})}const ot=H(et,[["render",nt]]),rt={message:"",icon:"none",duration:2e3,delay:0};let L;function it(e){return typeof e=="object"?e:{message:e?String(e):""}}function at(){const{instance:e}=he({setup(){const{open:r,state:i,close:u,toggle:l}=me(),n=()=>de(ot,pe(i,{"onUpdate:show":l}),null);return ce().render=n,{open:r,close:u}}});return e}function st(){return L||(L=at()),L}const J=(e,r={icon:"none"})=>{const i=st(),u=it(e);return i.open({...rt,...u,...r}),i},K=e=>J(e);K.success=e=>J(e,{icon:"success"});K.error=e=>J(e,{icon:"error"});K.loading=e=>J(e,{icon:"loading",duration:0});K.clear=()=>{L&&(L.close(),L=null)};const ct=U({name:V("Button")[0],options:{virtualHost:!0},components:{FanLoading:be,FanIcon:ve},emits:["click"],props:{customStyle:[String,Object],color:String,bg:String,width:String,height:String,margin:String,padding:String,flex1:{type:Boolean,default:!1},textSize:{type:[String,Number]},textColor:String,bold:[Boolean,Number,String],icon:String,iconSize:[String,Number],iconPosition:{type:String,validator:e=>["left","right"].includes(e),default:"left"},iconPad:[String,Number],block:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},round:{type:Boolean,default:!1},radius:[String,Number],disabled:{type:Boolean,default:!1},hairline:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingText:String,loadingType:{type:String,default:"circle2"},openType:String},setup(e,r){const i=O(()=>{const{customStyle:t,color:a,bg:d,plain:g,textSize:h,textColor:w,bold:k,round:b,radius:S,iconPad:v}=e,C={};["width","height","padding","margin"].forEach(N=>e[N]&&(C[N]=e[N]));const B=d||(g?"transparent":a);B&&(C["--fan-btn-bg"]=B);const W=w||(g?a||"var(--fan-primary-color)":a?"white":"");if(W&&(C["--fan-btn-text-color"]=W),!ge(h)&&/(Chrome|Safari)/.test(window==null?void 0:window.navigator.userAgent)){let N=parseFloat(h,10)/12;N<1&&(C.zoom=N)}return h&&(C.fontSize=R(h)),v&&(C["--fan-btn-icon-pad"]=R(v)),(typeof k=="number"||typeof k=="string")&&Number(k)>=100&&(C.fontWeight=k),g&&a&&(C["--fan-btn-border-color"]=a),S||S===0?C["--fan-btn-border-radius"]=S:b&&(C["--fan-btn-border-radius"]="var(--fan-radius-max)"),D(t)+D(C)}),u=O(()=>e.iconSize||e.textSize),l=O(()=>{const{icon:t,iconPosition:a,loading:d}=e;return d?"left":t?a:"none"}),n=O(()=>{const{loading:t,loadingText:a}=e;return r.slots.default&&(!t||!a)});return{theStyle:i,theIconSize:u,theIconPosition:l,showText:n,onClick:t=>{r.emit("click",t)}}}}),lt=["disabled","open-type"],ut={key:0,class:"fan-btn__hairline"};function ft(e,r,i,u,l,n){const o=Z("FanLoading"),t=Z("FanIcon");return _(),T("button",{class:I(["fan-btn",{"fan-btn--f1":e.flex1,"fan-btn--block":e.block,"fan-btn--disabled":e.disabled,"fan-btn--noborder":!e.border,"fan-btn--hairline":e.hairline,"fan-btn--plain":e.plain,"fan-btn--bold":e.bold}]),"hover-class":"none",style:x(e.theStyle),disabled:e.disabled,"open-type":e.openType,onClick:r[0]||(r[0]=(...a)=>e.onClick&&e.onClick(...a))},[$(" fix：uniapp-App-伪元素超不出100% "),e.hairline?(_(),T("div",ut)):$("v-if",!0),e.loading?(_(),P(o,{key:1,color:"currentColor",type:e.loadingType,size:e.theIconSize,"text-size":e.textSize,"text-color":"inherit"},{default:ne(()=>[Ie(F(e.loadingText),1)]),_:1},8,["type","size","text-size"])):$("v-if",!0),e.theIconPosition==="left"?(_(),P(t,{key:2,name:e.icon,color:"currentColor",size:e.theIconSize},null,8,["name","size"])):$("v-if",!0),e.showText?(_(),T("div",{key:3,class:I(["fan-btn__in",[`fan-btn--i${e.theIconPosition}`]])},[le(e.$slots,"default")],2)):$("v-if",!0),e.theIconPosition==="right"?(_(),P(t,{key:4,name:e.icon,color:"currentColor",size:e.theIconSize},null,8,["name","size"])):$("v-if",!0)],14,lt)}const dt=H(ct,[["render",ft]]);const pt=U({name:V("Dialog")[0],components:{FanButton:dt},emits:["update:show","confirm","cancel"],props:{show:{type:Boolean,default:!1},title:String,message:String,cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:"#84878F"},showCancel:{type:Boolean,default:!1},confirmText:{type:String,default:"确定"},confirmColor:{type:String,default:"#F7931E"},callback:{type:Function,default:()=>{}}},setup(e,{emit:r}){const i=ue(e.show);q(()=>e.show,o=>{(e.message||e.title)&&(i.value=o)}),q(i,o=>r("update:show",o));const u=o=>{var t;r(o),i.value=!1,(t=e.callback)==null||t.call(e,o)};return{innerShow:i,onCancel:()=>u("cancel"),onConfirm:()=>u("confirm")}}}),yt={key:0,class:"fan-dialog__o"},gt={class:"fan-dialog"},mt={class:"fan-dialog__inner"},ht={key:0,class:"fan-dialog__t"},vt={class:"fan-flex fan-hairline--top"};function bt(e,r,i,u,l,n){return _(),P(fe,{name:"fan"},{default:ne(()=>[e.innerShow?(_(),T("div",yt,[A("div",gt,[A("div",mt,[e.title?(_(),T("div",ht,F(e.title),1)):$("v-if",!0),A("div",{class:I(["fan-dialog__c",{"fan-dialog__his_title":!e.title}])},F(e.message),3)]),A("div",vt,[e.showCancel?(_(),T("div",{key:0,class:"fan-dialog__btn fan-flex-center fan-hairline--right fan-dialog__cancel",style:x({"--dialog-cancel":e.cancelColor}),onClick:r[0]||(r[0]=(...o)=>e.onCancel&&e.onCancel(...o))},F(e.cancelText),5)):$("v-if",!0),A("div",{class:"fan-dialog__btn fan-flex-center",style:x({"--dialog-confirm":e.confirmColor}),onClick:r[1]||(r[1]=(...o)=>e.onConfirm&&e.onConfirm(...o))},F(e.confirmText),5)])])])):$("v-if",!0)]),_:1})}const St=H(pt,[["render",bt]]),wt={title:"",message:"",cancelText:"取消",cancelColor:"#84878F",showCancel:!1,confirmText:"确定",confirmColor:"#F7931E",callback:null};let te;function Se(e){return typeof e=="object"?e:{message:e?String(e):""}}const Ct=()=>{({instance:te}=he({setup(){const{state:r,toggle:i}=me();return()=>de(St,pe(r,{"onUpdate:show":i}),null)}}))},se=e=>new Promise((r,i)=>{te||Ct();const u=Se(e);te.open({...wt,...u,callback:l=>{console.log(l),(l==="confirm"?r:i)(l)}})});se.confirm=e=>{const r=Se(e);return se({...r,showCancel:!0})};export{xt as C,dt as F,D as a,ve as b,V as c,se as d,$t as e,Ot as f,Xe as g,Pt as h,ge as i,be as j,At as k,zt as l,K as m,Et as p,Nt as r,R as t};