import{c as _,t as d,a as $}from"./helper-1e979f21.js";import{u as B,T as N,a as P}from"./index-edf9a54a.js";import{_ as k}from"./locales-2658cfbc.js";import{B as F,C as L,y as p,u,J as V,o as S,a as y,h as w,i as x}from"./vue-libs-eb153a24.js";const X={customStyle:[String,Object],width:[Number,String],height:[Number,String],maxHeight:[Number,String],scrollY:{type:[Boolean,String],default:!1},scrollX:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!0},upperThreshold:{type:[Number,String],default:50},lowerThreshold:{type:[Number,String],default:50},scrollTop:[Number,String],scrollLeft:[Number,String],scrollWithAnimation:{type:Boolean,default:!1},enableBackToTop:{type:[Number,String],default:50},enableFlex:{type:Boolean,default:!1}},z=["scrolltoupper","scrolltolower","scroll"];const H=F({name:_("ScrollView")[0],options:{virtualHost:!0},props:X,emits:z,setup(e,r){const m=L(()=>{const{customStyle:l,width:a,height:i,maxHeight:n,scrollY:f,scrollX:c,enableFlex:T}=e;let t="";return a&&(t+=`width:${d(a)};`),i&&(t+=`height:${d(i)};`),n&&(t+=`max-height:${d(n)};`),c&&(t+="white-space:nowrap;"),t+=`overflow-x:${c?"auto":"hidden"};overflow-y:${f?"auto":"hidden"};`,T&&(t+="display:flex;"),$(l)+t}),s=p(null),o=p([0,0]),h=B(o,{delay:0,duration:290,disabled:!e.scrollWithAnimation,transition:N.linear});u(h,([l,a])=>{s.value&&(s.value.scrollLeft=l,s.value.scrollTop=a)}),u(()=>e.scrollLeft,l=>{o.value=[l,o.value[1]]}),u(()=>e.scrollTop,l=>{o.value=[o.value[0],l]}),V(()=>{o.value=[e.scrollLeft||0,e.scrollTop||0]});const{x:v,y:g,arrivedState:b}=P(s,{offset:{right:e.lowerThreshold,bottom:e.lowerThreshold,left:e.upperThreshold,top:e.upperThreshold},onScroll:()=>{r.emit("scroll",{detail:{scrollLeft:v.value,scrollTop:g.value}})}});return u(b,({left:l,right:a,top:i,bottom:n})=>{const{scrollY:f,scrollX:c}=e;f&&(n&&r.emit("scrolltolower"),i&&r.emit("scrolltoupper")),c&&(a&&r.emit("scrolltolower"),l&&r.emit("scrolltoupper"))}),{theStyle:m,el:s}}}),Y={key:0,class:"fan-scroll-view--flex"};function A(e,r,m,s,o,h){return S(),y("div",{ref:"el",class:"fan-scroll-view",style:x(e.theStyle)},[e.enableFlex&&e.scrollX&&e.scrollable?(S(),y("div",Y,[w(e.$slots,"default")])):w(e.$slots,"default",{key:1})],4)}const M=k(H,[["render",A]]);export{M as F};
