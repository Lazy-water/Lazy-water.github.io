import{D as C,U as E,E as $,V as M,B as P,W as A,y as z,C as x,u as W,r as T,o as y,a as b,i as w,n as k,I,h as _,F as U,b as q,d as O,t as j,c as L,f as H,e as d,w as v,A as V,g as G}from"./vue-libs-eb153a24.js";import{c as J,b as K,t as Q,a as R,F as X}from"./helper-1e979f21.js";import{g as Y}from"./index-7dbb04b3.js";import{u as Z}from"./index-410638db.js";import{_ as ee}from"./locales-2658cfbc.js";import{D as g}from"./dropdown-item-3403c211.js";import{F as te}from"./input-1caa36bc.js";import"./index-edf9a54a.js";import"./scroll-view-230f7c68.js";function oe(o){const l=[],i=t=>{Array.isArray(t)&&t.forEach(r=>{var s;M(r)&&(l.push(r),(s=r.component)!=null&&s.subTree&&(l.push(r.component.subTree),i(r.component.subTree.children)),r.children&&i(r.children))})};return i(o),l}function ne(o,l,i){const t=oe(o.subTree.children);i.sort((s,m)=>t.indexOf(s.vnode)-t.indexOf(m.vnode));const r=i.map(s=>s.proxy);l.sort((s,m)=>{const e=r.indexOf(s),a=r.indexOf(m);return e-a})}function le(o){const l=C([]),i=C([]),t=$();return{children:l,linkChildren:s=>{E(o,Object.assign({link:a=>{a.proxy&&(i.push(a),l.push(a.proxy),ne(t,l,i))},unlink:a=>{const n=i.indexOf(a);l.splice(n,1),i.splice(n,1)},children:l,internalChildren:i},s))}}}const re=P({name:J("DropdownMenu")[0],options:{virtualHost:!0},components:{FanIcon:K},props:{customStyle:[Object,String],border:Boolean,offset:{type:Number,default:0},zIndex:Number,height:[String,Number],color:String,activeColor:String},emits:["toggle"],setup(o,{emit:l}){const i=A(),t=$(),r=z(0),s=x(()=>{const{customStyle:p,height:u,color:c}=o;let f="";return c&&(f+=`color:${c};`),u&&(f+=`height:${Q(u)};`),R(p)+f}),m=x(()=>{const{activeColor:p,zIndex:u}=o;let c="";return p&&(c+=`--fan-dropdown-active-color:${p};`),u&&(c+=`--fan-dropdown-menu-zindex:${u};`),c}),{children:e,linkChildren:a}=le("fanDropdownMenu"),n=x(()=>e.some(p=>{var u;return(u=p.state)==null?void 0:u.showWrapper}));let S="";W(n,p=>{const u=document.body.style;p?(S=u.overflow,u.setProperty("overflow","hidden","important")):u.setProperty("overflow",S),l("toggle",{opened:p})}),a({props:o,offset:r});const{pageScrollTo:B,onPageScroll:N}=Z();let F=0;return N(p=>{F=p.scrollTop}),{barStyle:s,containerStyle:m,children:e,opened:n,itemClick:async p=>{const u=e[p],c=n.value;!u.showWrapper&&c&&e.forEach(D=>D.toggle(!1));const f=await Y({selector:".fan-dropdown-menu__bar",scope:t});o.offset===null?r.value=(f==null?void 0:f.bottom)||0:(B({scrollTop:F+((f==null?void 0:f.top)||0)-o.offset,duration:0}),r.value=(o.offset||0)+((f==null?void 0:f.height)||0)),u.toggle(void 0,{immediateBg:c})},emptyFunc:()=>null,slots:i}}}),ie=["onClick"],ae={class:"fan-ellipsis"};function se(o,l,i,t,r,s){const m=T("FanIcon");return y(),b("div",{style:w(o.containerStyle),class:"fan-dropdown-menu"},[o.slots.title?(y(),b("div",{key:0,style:w(o.barStyle),class:k(["fan-dropdown-menu__bar",{"fan-hairline--bottom":o.border,"fan-dropdown-menu__bar--opened":o.opened}]),onTouchmove:l[0]||(l[0]=I((...e)=>o.emptyFunc&&o.emptyFunc(...e),["stop","prevent"]))},[_(o.$slots,"title")],38)):(y(),b("div",{key:1,style:w(o.barStyle),class:k(["fan-dropdown-menu__bar",{"fan-hairline--bottom":o.border,"fan-dropdown-menu__bar--opened":o.opened}]),onTouchmove:l[1]||(l[1]=I((...e)=>o.emptyFunc&&o.emptyFunc(...e),["stop","prevent"]))},[(y(!0),b(U,null,q(o.children,(e,a)=>(y(),b("div",{key:a,class:k(["fan-dropdown-menu__item",{"fan-dropdown-menu--active":e.active||e.showWrapper}]),onClick:n=>o.itemClick(a)},[O("div",ae,j(e.title),1),e.theIcon.name?(y(),L(m,{key:0,name:e.theIcon.name,size:e.iconSize,color:e.theIcon.color,"custom-style":"margin:1px 0 0 3px;"},null,8,["name","size","color"])):H("v-if",!0)],10,ie))),128))],38)),_(o.$slots,"default")],4)}const h=ee(re,[["render",se]]),ue={class:"fan-flex fan-align-center"},ke={__name:"index",setup(o){const l=[{title:"全部",value:0},{title:"美食",value:1},{title:"美发",value:2},{title:"美发3",value:3},{title:"美发4",value:4},{title:"美发5",value:5},{title:"美发6",value:6}],i=[{text:"附近",value:0,children:[{text:"附近",value:0},{text:"100m",value:100},{text:"500m",value:500},{text:"2km",value:2e3}]},{text:"上城区",value:1,children:[{text:"全部上城区",value:1.1},{text:"吴山广场",value:1.2},{text:"城站",value:1.3},{text:"万象城",value:1.4}]}],t=C({category:{title:"全部",value:0},region:{title:"附近",value:0},filterInput:""}),r=z(null),s=m=>{console.log(m)};return(m,e)=>{const a=T("demo-block");return y(),b(U,null,[d(a,{title:"基础用法",style:{padding:"100px 0 0"}},{default:v(()=>[d(V(h),{"z-index":90,onToggle:s},{default:v(()=>[d(g,{title:"固定",icon:!1}),d(g,{title:t.category.title,"onUpdate:title":e[0]||(e[0]=n=>t.category.title=n),modelValue:t.category.value,"onUpdate:modelValue":e[1]||(e[1]=n=>t.category.value=n),options:l,"title-prop":"title"},null,8,["title","modelValue"]),d(g,{title:t.region.title,"onUpdate:title":e[2]||(e[2]=n=>t.region.title=n),modelValue:t.region.value,"onUpdate:modelValue":e[3]||(e[3]=n=>t.region.value=n),options:i},null,8,["title","modelValue"])]),_:1})]),_:1}),d(a,{title:"顶部距离+选项高度固定可滚动"},{default:v(()=>[d(V(h),{offset:0},{default:v(()=>[d(g,{title:t.category.title,"onUpdate:title":e[4]||(e[4]=n=>t.category.title=n),modelValue:t.category.value,"onUpdate:modelValue":e[5]||(e[5]=n=>t.category.value=n),scroll:"","scroll-height":"20vh",options:l,"title-prop":"title"},null,8,["title","modelValue"]),d(g,{title:t.region.title,"onUpdate:title":e[6]||(e[6]=n=>t.region.title=n),modelValue:t.region.value,"onUpdate:modelValue":e[7]||(e[7]=n=>t.region.value=n),scroll:"","scroll-height":"20vh",options:i},null,8,["title","modelValue"])]),_:1})]),_:1}),d(a,{title:"自定义"},{default:v(()=>[d(V(h),{key:"qqq","z-index":70},{default:v(()=>[d(g,{title:t.category.title,"onUpdate:title":e[8]||(e[8]=n=>t.category.title=n),modelValue:t.category.value,"onUpdate:modelValue":e[9]||(e[9]=n=>t.category.value=n),options:l.slice(0,2),"title-prop":"title","value-prop":"value","content-style":"border-radius:0 0 10px 10px;"},null,8,["title","modelValue","options"]),d(g,{ref_key:"refFilter",ref:r,title:"筛选",active:!!t.filterInput,icon:"filter","icon-size":"14px","content-style":"padding:12px;border-radius:0 0 10px 10px;"},{default:v(()=>[O("div",ue,[d(te,{modelValue:t.filterInput,"onUpdate:modelValue":e[10]||(e[10]=n=>t.filterInput=n),placeholder:"一个输入框",border:""},null,8,["modelValue"])]),d(X,{block:"",margin:"12px 0 0",round:"",onClick:e[11]||(e[11]=n=>r.value.toggle())},{default:v(()=>[G("一个按钮")]),_:1})]),_:1},8,["active"])]),_:1})]),_:1})],64)}}};export{ke as default};