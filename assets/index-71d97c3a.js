import{c as v,j as z,a as M,t as b}from"./helper-1e979f21.js";import{u as $}from"./index-410638db.js";import{_ as B}from"./locales-2658cfbc.js";import{B as E,C as s,r as C,o as i,a as g,h as F,i as S,c as T,f as h,d as _,t as w,e as r,w as l,A as f,F as N}from"./vue-libs-eb153a24.js";import"./index-edf9a54a.js";const n={hasMore:"hasMore",loading:"loading",noMore:"noMore",error:"error"};const j=E({name:v("List")[0],options:{virtualHost:!0},components:{FanLoading:z},props:{customStyle:[Object,String],hidden:{type:Boolean,default:!1},status:{type:String,default:"loading",validator:e=>["loading","hasMore","noMore","error"].includes(e)},loadingColor:String,loadingSize:{type:Number,default:22},loadingText:{type:String,default:""},textColor:{type:String,default:"#999"},noMoreText:{type:String,default:"没有更多了"},errorText:{type:String,default:"加载失败"}},emits:["load","errorClick"],setup(e,t){const a=s(()=>M(e.customStyle)),d=s(()=>{const{loadingText:k,noMoreText:x,errorText:L,status:y}=e;return y===n.noMore?x:y===n.error?L:k}),c=s(()=>`calc(${b(e.loadingSize)} * 0.64)`),o=s(()=>e.status===n.loading||e.status===n.hasMore),{onPageReachBottom:u}=$();return u(()=>{!e.hidden&&t.emit("load")}),{theStyle:a,text:d,textSize:c,showLoading:o,onErrorClick:()=>{e.status===n.error&&t.emit("errorClick")}}}}),V={class:"fan-list__loadt"};function P(e,t,a,d,c,o){const u=C("FanLoading");return i(),g("div",{style:S(e.theStyle),class:"fan-list"},[F(e.$slots,"default"),e.showLoading||e.text?(i(),g("div",{key:0,onClick:t[0]||(t[0]=(...p)=>e.onErrorClick&&e.onErrorClick(...p)),class:"fan-flex fan-align-center fan-justify-center fan-list__load",style:S({fontSize:e.textSize,color:e.textColor})},[e.showLoading?(i(),T(u,{key:0,size:e.loadingSize,color:e.loadingColor},null,8,["size","color"])):h("v-if",!0),_("span",V,w(e.text),1)],4)):h("v-if",!0)],4)}const m=B(j,[["render",P]]),A={ref:"bbb"},D=_("div",{style:{height:"1000px",background:"blue",color:"#fff"}}," 滑呀滑 滑倒外婆家 ",-1),I={__name:"index",setup(e){const t=()=>{alert("出错了？")},a=()=>alert("触底了呀");return(d,c)=>{const o=C("demo-block");return i(),g(N,null,[r(o,{title:"基础用法"},{default:l(()=>[_("div",A,[r(f(m),{style:{"margin-left":"15px"},onLoad:a},{default:l(()=>[D]),_:1})],512)]),_:1}),r(o,{title:"基础用法"},{default:l(()=>[r(f(m),{style:{"margin-left":"15px"},status:"noMore"})]),_:1}),r(o,{title:"基础用法"},{default:l(()=>[r(f(m),{style:{"margin-left":"15px"},status:"error",onErrorClick:t})]),_:1})],64)}}};export{I as default};
