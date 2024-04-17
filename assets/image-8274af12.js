import{c as f,t as y,a as S}from"./helper-1e979f21.js";import{F as v}from"./aspect-ratio-bf1f42f7.js";import{_ as k}from"./locales-2658cfbc.js";import{B as F,C as n,r as L,H as w,o as l,c as $,w as C,a as c,i as d,n as b,j as z,h as B}from"./vue-libs-eb153a24.js";const N={customStyle:[Object,String],src:String,width:[Number,String],height:[Number,String],aspectRatio:[Number,String],mode:{type:String,default:"",validator:e=>["","scaleToFill","aspectFit","aspectFill","widthFix"].includes(e)},radius:[Number,String],lazyLoad:{type:Boolean,default:!1},placeholderLight:{type:Boolean,default:!1},showMenuByLongpress:{type:Boolean,default:!1}};const R=F({name:f("Image")[0],components:{FanAspectRatio:v},emits:["click","load"],props:N,setup(e,a){const o=n(()=>e.radius?`border-radius:${y(e.radius)};`:""),m=n(()=>`overflow:hidden;position:relative;${S(e.customStyle)}${o.value}`),r=n(()=>e.mode==="widthFix"?0:e.aspectRatio),u=n(()=>{const{height:t,mode:i}=e,s=r.value;let g=s||t?"100%":y(t);return s||g?`height:${g};object-fit:${i==="aspectFill"?"cover":i==="aspectFit"?"contain":""};${o.value}`:`${o.value}`});return{radiusStyle:o,theStyle:m,imgStyle:u,aspectRatioNum:r,onClick:t=>a.emit("click",t),onLoad:t=>{const{naturalWidth:i,naturalHeight:s}=t.target;a.emit("load",{detail:{width:i,height:s}})}}}}),j=["src"];function A(e,a,o,m,r,u){const h=L("FanAspectRatio"),p=w("lazy");return l(),$(h,{"custom-style":e.theStyle,"aspect-ratio":e.aspectRatioNum,width:e.width,height:e.height,onClick:e.onClick},{default:C(()=>[e.src?e.lazyLoad?z((l(),c("img",{key:1,onLoad:a[0]||(a[0]=(...t)=>e.onLoad&&e.onLoad(...t)),style:d(e.imgStyle),class:"fan-img",alt:""},null,36)),[[p,e.src]]):(l(),c("img",{key:2,onLoad:a[1]||(a[1]=(...t)=>e.onLoad&&e.onLoad(...t)),style:d(e.imgStyle),class:"fan-img",src:e.src,alt:""},null,44,j)):(l(),c("div",{key:0,style:d("height:100%;"+e.radiusStyle),class:b(["fan-img--empty",{light:e.placeholderLight}])},null,6)),B(e.$slots,"default")]),_:3},8,["custom-style","aspect-ratio","width","height","onClick"])}const M=k(R,[["render",A]]);export{M as F};
