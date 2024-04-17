import{c as w,j as C,b as F,F as b,a as B}from"./helper-1e979f21.js";import{_ as I}from"./locales-2658cfbc.js";import{B as L,C as g,y as V,u as $,r as i,o as n,a as r,c as p,f as d,F as k,e as a,t as y,w as f,g as z,n as N,i as _,h as j,A as s}from"./vue-libs-eb153a24.js";const O=L({name:w("LoadingView")[0],options:{virtualHost:!0},components:{FanLoading:C,FanIcon:F,FanButton:b},emits:["buttonClick"],props:{customStyle:[String,Object],loading:Boolean,error:[String,Object],color:String,type:{type:String,default:"circle2"},full:{type:Boolean,default:!1}},setup(e,c){const u=g(()=>B(e.customStyle)),t=V(!1),m=g(()=>{const{error:o}=e;return o?typeof o=="string"?{message:o}:o:null});return $(()=>e.loading,o=>{if(!o){t.value=!1;return}setTimeout(()=>{e.loading&&(t.value=!0)},300)},{immediate:!0}),{theStyle:u,showLoading:t,errorInfo:m,onClick:o=>{c.emit("buttonClick",o)}}}}),T={key:0},A={key:0,class:"fan-loading-view__t"};function D(e,c,u,t,m,v){const o=i("FanLoading"),S=i("FanIcon"),h=i("FanButton");return e.loading?(n(),r("div",{key:0,class:N(["fan-loading-view",{"fan-loading-view--full":e.full}]),style:_(e.theStyle)},[e.errorInfo?(n(),r(k,{key:1},[a(S,{name:"warning-circle-fill",size:34,color:"var(--fan-danger-color)"}),e.errorInfo.message?(n(),r("div",A,y(e.errorInfo.message),1)):d("v-if",!0),e.errorInfo.button?(n(),p(h,{key:1,round:"",bold:"",radius:"20px","custom-style":"min-width: 100px;",onClick:e.onClick},{default:f(()=>[z(y(e.errorInfo.button),1)]),_:1},8,["onClick"])):d("v-if",!0)],64)):(n(),r("div",T,[e.showLoading?(n(),p(o,{key:0,color:e.color,type:e.type},null,8,["color","type"])):d("v-if",!0)]))],6)):(n(),r("div",{key:1,style:_(e.theStyle)},[j(e.$slots,"default")],4))}const l=I(O,[["render",D]]),G={__name:"index",setup(e){return(c,u)=>{const t=i("demo-block");return n(),r(k,null,[a(t,{title:"基础用法"},{default:f(()=>[a(s(l),{loading:""})]),_:1}),a(t,{title:"进阶用法"},{default:f(()=>[a(s(l),{loading:"",color:"var(--fan-primary-color)"}),a(s(l),{style:{margin:"20px 0"},loading:"",error:{message:"出错了"}}),a(s(l),{loading:"",error:{title:"错误",message:"出错了",button:"再试一次"}})]),_:1})],64)}}};export{G as default};
