import{F as C}from"./overlay-0e43632a.js";import{c as B,F as w,t as b,a as m}from"./helper-1e979f21.js";import{_ as F}from"./locales-2658cfbc.js";import{B as O,y as s,u as z,C as N,r as v,o as i,a as f,e as $,n as S,i as I,t as _,f as d,h as j,c as T,F as A}from"./vue-libs-eb153a24.js";const P=O({name:B("Popup")[0],components:{FanOverlay:C,FanButton:w},options:{virtualHost:!0},props:{show:{type:Boolean,default:!1,required:!0},customStyle:[String,Object],position:{type:String,validator(e){return["center","top","bottom","right","left"].includes(e)},default:"center"},round:{type:[Boolean,Number,String],default:"12px"},zIndex:{type:[String,Number],default:1e3},duration:{type:[String,Number],default:.3},title:String,titleAlign:{type:String,default:"center",validator:e=>["left","center","right"].includes(e)},overlayStyle:{type:[Object,String]},closeOnClickOverlay:{type:Boolean,default:!0},closeable:{type:Boolean,default:!1},closeIcon:{type:String,default:"close"},closeIconColor:{type:String,default:"#c8c9cc"},lockScroll:{type:Boolean,default:!0},safeBottom:{type:Boolean,default:!0}},emits:["update:show","clickOverlay","closed"],setup(e,{emit:a}){const u=s(e.show),n=s(e.show),c=s(null),o=s(""),p=()=>{n.value=!0,o.value=`fan-popup-${e.position}-enter-from`,setTimeout(()=>{o.value=""},0)},t=()=>{o.value=`fan-popup-${e.position}-leave-active`,c.value=setTimeout(()=>{o.value="",n.value=!1,a("update:show",!1),a("closed")},e.duration*1e3)};z(()=>e.show,r=>{o.value||(u.value=r,clearTimeout(c.value),r?p():t())});const h=N(()=>{const{customStyle:r,round:l,zIndex:k,duration:g}=e,y={zIndex:k,"--fan-popup-time":`${g}s`};return l!==!1&&Number(l)!==0&&(y["--fan-popup-radius"]=b(l===!0||!Number(l)?"12px":l)),m(r)+m(y)});return{overlayShow:u,innerShow:n,theStyle:h,className:o,leave:t,overlayClick:()=>{a("clickOverlay"),e.closeOnClickOverlay&&t()}}}});function V(e,a,u,n,c,o){const p=v("FanOverlay"),t=v("FanButton");return i(),f(A,null,[$(p,{"custom-style":e.overlayStyle,show:e.overlayShow,"z-index":e.zIndex,duration:e.duration,"lock-scroll":e.lockScroll,onClick:e.overlayClick},null,8,["custom-style","show","z-index","duration","lock-scroll","onClick"]),e.innerShow?(i(),f("div",{key:0,class:S(["fan-popup","fan-popup--"+e.position,{safe:e.safeBottom},e.className]),style:I(e.theStyle)},[e.title?(i(),f("div",{key:0,class:S(["fan-popup__title","fan-popup__title--"+e.titleAlign])},_(e.title),3)):d("v-if",!0),j(e.$slots,"default"),e.closeable?(i(),T(t,{key:1,"custom-style":"position:absolute;top:0;right:2px;","icon-size":"16",padding:"0",width:"40px",icon:e.closeIcon,color:e.closeIconColor,border:!1,plain:!0,onClick:e.leave},null,8,["icon","color","onClick"])):d("v-if",!0)],6)):d("v-if",!0)],64)}const J=F(P,[["render",V]]);export{J as F};
