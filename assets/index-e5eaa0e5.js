import{c as k,k as N,t as l,a as z}from"./helper-1e979f21.js";import{g as C}from"./index-7dbb04b3.js";import{_ as V}from"./locales-2658cfbc.js";import{B as I,y as w,C as b,J as q,u as E,o as h,a as S,d as B,h as H,n as P,i as v,f as T,E as j,r as A,c as F,w as $,e as J,A as M}from"./vue-libs-eb153a24.js";const O=I({name:k("PositionedView")[0],options:{virtualHost:!0},props:{customStyle:[Object,String],type:{type:String,default:"fixed",validator(e){return["fixed","absolute","relative","static"].includes(e)}},position:{type:String,validator:e=>["bottom","top"].includes(e)},zIndex:{type:[Number,String],default:99},top:[String,Number],bottom:[String,Number],left:[String,Number],right:[String,Number],bg:String,safeBottom:{type:Boolean,default:!1},placeholder:{type:Boolean,default:!1}},expose:["calcHeight","height"],setup(e){const s=N({prefix:"fanPositionedView"}),i=w(0),c=b(()=>{const{customStyle:t,type:r,left:u,right:f,top:p,bottom:m,zIndex:x,position:_,bg:y}=e;let o=`position:${r};z-index:${x};`;return!u&&!f&&!p&&!m?(_==="bottom"&&(o+="bottom:0;left:0;right:0;"),_==="top"&&(o+="top:0;left:0;right:0;")):(u&&(o+=`left:${l(u)};`),f&&(o+=`right:${l(f)};`),p&&(o+=`top:${l(p)};`),m&&(o+=`bottom:${l(m)};`)),y&&(o+=`background:${y};`),z(t)+o}),n=b(()=>{const{position:t,safeBottom:r}=e;return r===!1?!1:r||t==="bottom"}),g=j();let d=0;const a=async()=>{if(!e.placeholder){i.value=0;return}const t=await C({selector:"#"+s,scope:g});if(d++,!(t!=null&&t.height)&&d<3){setTimeout(a,100);return}console.log(d,t),i.value=(t==null?void 0:t.height)||0};return q(()=>{setTimeout(a,0)}),E(()=>e.placeholder,a),{uniqueId:s,height:i,theStyle:c,useSafeBottom:n,calcHeight:a}}}),U={class:"fan-positioned-view"},D=["id"];function G(e,s,i,c,n,g){return h(),S("div",U,[B("div",{id:e.uniqueId,class:P(["fan-positioned-view__in",{"fan-positioned-view--safe":e.useSafeBottom}]),style:v(e.theStyle)},[H(e.$slots,"default")],14,D),e.height?(h(),S("div",{key:0,class:"fan-positioned-view__place",style:v({height:e.height+"px"})},null,4)):T("v-if",!0)])}const K=V(O,[["render",G]]),L=B("div",{style:{padding:"10px",color:"#fff"}},"底部操作栏",-1),Y={__name:"index",setup(e){const s=w(null);return setTimeout(()=>{console.log("ref:",s.value)},1e3),(i,c)=>{const n=A("demo-block");return h(),F(n,{title:"基础用法"},{default:$(()=>[J(M(K),{ref_key:"rr",ref:s,position:"bottom",placeholder:"",bg:"#f00"},{default:$(()=>[L]),_:1},512)]),_:1})}}};export{Y as default};