import{_ as g,k as e,h as B,d as z,l as F,j,m as H,u as X}from"./locales-2658cfbc.js";import{a as u,t as L,f as C,h as O,o as _,n as S,d as h,r as T,F as k,b as N,c as w,w as A,g as Y,e as P,l as G,m as U,u as M,q,j as W,v as J,x as Q,K as Z,s as tt}from"./vue-libs-eb153a24.js";const et={name:"DemoBlock",props:{card:Boolean,title:String},data(){return{slugify:null}},computed:{slugifyTitle(){return this.slugify?this.slugify(this.title):""}},watch:{slugifyTitle(t){t&&this.$nextTick(()=>{let s="";top?s=top.location.hash.split("#").pop():s=location.hash.split("#").pop();const i=document.getElementById(t);i&&t===s&&i.scrollIntoView(!0)})}},async mounted(){const{slugify:t}=await e(()=>import("./bundle.esm.min-411ccac0.js"),[]);this.slugify=t}},ot={class:"van-doc-demo-block"},nt=["id"],it={key:1,class:"van-doc-demo-block__card"};function st(t,s,i,r,a,n){return _(),u("div",ot,[i.title?(_(),u("h2",{key:0,class:"van-doc-demo-block__title",id:n.slugifyTitle},L(i.title),9,nt)):C("v-if",!0),i.card?(_(),u("div",it,[O(t.$slots,"default")])):O(t.$slots,"default",{key:2})])}const $=g(et,[["render",st]]);const rt={name:"DemoSection",computed:{demoName(){const{meta:t}=this.$route||{};return t&&t.name?`demo-${B(t.name)}`:""}}};function ct(t,s,i,r,a,n){return _(),u("section",{class:S(["van-doc-demo-section",n.demoName])},[O(t.$slots,"default")],2)}const b=g(rt,[["render",ct]]);const at=()=>e(()=>import("./index-9d9d0436.js"),["assets/index-9d9d0436.js","assets/aspect-ratio-bf1f42f7.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/aspect-ratio-e673e836.css"]),_t=()=>e(()=>import("./index-d122b42c.js"),["assets/index-d122b42c.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css"]),lt=()=>e(()=>import("./index-6e69851a.js"),["assets/index-6e69851a.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/tag-85a0b30e.js","assets/tag-0962d8d9.css","assets/index-f3890e52.css"]),ut=()=>e(()=>import("./index-b78f207a.js"),["assets/index-b78f207a.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-afa1e6ee.css"]),pt=()=>e(()=>import("./index-d0233ffb.js"),["assets/index-d0233ffb.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/contact-panel-b6e23009.js","assets/image-8274af12.js","assets/aspect-ratio-bf1f42f7.js","assets/aspect-ratio-e673e836.css","assets/image-bcc18d75.css","assets/index-5cf139c2.js","assets/contact-panel-0a02c749.css","assets/popup-0f269fc4.js","assets/overlay-0e43632a.js","assets/overlay-d1f5992f.css","assets/popup-fa2dc8a7.css","assets/index-b3ab7f5a.js","assets/index-1954c70a.css"]),dt=()=>e(()=>import("./index-d5f78f87.js"),["assets/index-d5f78f87.js","assets/contact-panel-b6e23009.js","assets/image-8274af12.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/aspect-ratio-bf1f42f7.js","assets/aspect-ratio-e673e836.css","assets/image-bcc18d75.css","assets/index-5cf139c2.js","assets/contact-panel-0a02c749.css","assets/vue-lazyload.esm-fc48fbaf.js"]),mt=()=>e(()=>import("./index-55bd6eaf.js"),["assets/index-55bd6eaf.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css"]),ht=()=>e(()=>import("./index-004c9c78.js"),["assets/index-004c9c78.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-88a43ba4.css"]),vt=()=>e(()=>import("./index-a384d64f.js"),["assets/index-a384d64f.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-2508acc0.css"]),ft=()=>e(()=>import("./index-f221da31.js"),["assets/index-f221da31.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/picker-d505ce8d.js","assets/popup-0f269fc4.js","assets/overlay-0e43632a.js","assets/overlay-d1f5992f.css","assets/popup-fa2dc8a7.css","assets/text-3debc4c0.js","assets/text-ce3de6a9.css","assets/picker-a5511d6c.css"]),Et=()=>e(()=>import("./index-a74184e6.js"),["assets/index-a74184e6.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css"]),gt=()=>e(()=>import("./index-58764b7d.js"),["assets/index-58764b7d.js","assets/dropdown-item-3403c211.js","assets/vue-libs-eb153a24.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/scroll-view-230f7c68.js","assets/index-edf9a54a.js","assets/scroll-view-99396986.css","assets/dropdown-item-b24815d1.css"]),Tt=()=>e(()=>import("./index-24d26de5.js"),["assets/index-24d26de5.js","assets/vue-libs-eb153a24.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-7dbb04b3.js","assets/index-410638db.js","assets/index-edf9a54a.js","assets/dropdown-item-3403c211.js","assets/scroll-view-230f7c68.js","assets/scroll-view-99396986.css","assets/dropdown-item-b24815d1.css","assets/input-1caa36bc.js","assets/input-3234ec91.css","assets/index-08f10981.css"]),Lt=()=>e(()=>import("./index-c8911596.js"),["assets/index-c8911596.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/image-8274af12.js","assets/aspect-ratio-bf1f42f7.js","assets/aspect-ratio-e673e836.css","assets/image-bcc18d75.css","assets/index-967dba57.css"]),Dt=()=>e(()=>import("./index-66581cd1.js"),["assets/index-66581cd1.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css"]),yt=()=>e(()=>import("./index-bd95ef4b.js"),["assets/index-bd95ef4b.js","assets/image-8274af12.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/aspect-ratio-bf1f42f7.js","assets/aspect-ratio-e673e836.css","assets/image-bcc18d75.css","assets/vue-lazyload.esm-fc48fbaf.js"]),Pt=()=>e(()=>import("./index-d9e36353.js"),["assets/index-d9e36353.js","assets/input-1caa36bc.js","assets/vue-libs-eb153a24.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/input-3234ec91.css"]),wt=()=>e(()=>import("./index-6f2d6e62.js"),["assets/index-6f2d6e62.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-5cf139c2.js","assets/index-bbf55e34.css"]),Rt=()=>e(()=>import("./index-8c92e63d.js"),["assets/index-8c92e63d.js","assets/vue-libs-eb153a24.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-5cf139c2.js","assets/index-7d457205.css"]),It=()=>e(()=>import("./index-4ce72bc9.js"),["assets/index-4ce72bc9.js","assets/vue-lazyload.esm-fc48fbaf.js","assets/vue-libs-eb153a24.js","assets/image-8274af12.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/aspect-ratio-bf1f42f7.js","assets/aspect-ratio-e673e836.css","assets/image-bcc18d75.css"]),Ot=()=>e(()=>import("./index-3718954e.js"),["assets/index-3718954e.js","assets/link-50ff3846.js","assets/vue-libs-eb153a24.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-5cf139c2.js","assets/index-b3ab7f5a.js","assets/link-0018a103.css"]),At=()=>e(()=>import("./index-71d97c3a.js"),["assets/index-71d97c3a.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-410638db.js","assets/index-edf9a54a.js","assets/index-8a47b420.css"]),Vt=()=>e(()=>import("./index-f2cc122b.js"),["assets/index-f2cc122b.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css"]),kt=()=>e(()=>import("./index-559d0fd1.js"),["assets/index-559d0fd1.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-3bc8ead4.css"]),$t=()=>e(()=>import("./index-98e76997.js"),["assets/index-98e76997.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-5cf139c2.js","assets/index-e08fbe46.css"]),bt=()=>e(()=>import("./index-cf7d477f.js"),["assets/index-cf7d477f.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-7dbb04b3.js","assets/index-6c73770e.css"]),xt=()=>e(()=>import("./index-2869c676.js"),["assets/index-2869c676.js","assets/vue-libs-eb153a24.js","assets/overlay-0e43632a.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/overlay-d1f5992f.css","assets/index-b2c99353.css"]),Bt=()=>e(()=>import("./index-0bcd8caa.js"),["assets/index-0bcd8caa.js","assets/picker-d505ce8d.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/popup-0f269fc4.js","assets/overlay-0e43632a.js","assets/overlay-d1f5992f.css","assets/popup-fa2dc8a7.css","assets/text-3debc4c0.js","assets/text-ce3de6a9.css","assets/picker-a5511d6c.css"]),Ct=()=>e(()=>import("./index-2d62b203.js"),["assets/index-2d62b203.js","assets/popup-0f269fc4.js","assets/overlay-0e43632a.js","assets/vue-libs-eb153a24.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/overlay-d1f5992f.css","assets/popup-fa2dc8a7.css"]),St=()=>e(()=>import("./index-e5eaa0e5.js"),["assets/index-e5eaa0e5.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-7dbb04b3.js","assets/index-916b9fa0.css"]),Nt=()=>e(()=>import("./index-99d0a202.js"),["assets/index-99d0a202.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-8880a441.css"]),Mt=()=>e(()=>import("./index-083cda63.js"),["assets/index-083cda63.js","assets/vue-libs-eb153a24.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-7dbb04b3.js","assets/index-64d33c25.css"]),Kt=()=>e(()=>import("./index-0ac9b3b8.js"),["assets/index-0ac9b3b8.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-73743d45.css"]),zt=()=>e(()=>import("./index-7270d188.js"),["assets/index-7270d188.js","assets/rich-text-0d29e3b7.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/rich-text-ceb24e7f.css"]),Ft=()=>e(()=>import("./index-b4bc5fc4.js"),["assets/index-b4bc5fc4.js","assets/scroll-view-230f7c68.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-edf9a54a.js","assets/scroll-view-99396986.css"]),jt=()=>e(()=>import("./index-ad3ce8d1.js"),["assets/index-ad3ce8d1.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/input-1caa36bc.js","assets/input-3234ec91.css","assets/index-36accf94.css"]),Ht=()=>e(()=>import("./index-53a84bb3.js"),["assets/index-53a84bb3.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-7dbb04b3.js","assets/index-410638db.js","assets/index-edf9a54a.js","assets/index-d2b0a5fa.css"]),Xt=()=>e(()=>import("./index-8b51a38e.js"),["assets/index-8b51a38e.js","assets/aspect-ratio-bf1f42f7.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/aspect-ratio-e673e836.css","assets/image-8274af12.js","assets/image-bcc18d75.css","assets/link-50ff3846.js","assets/index-5cf139c2.js","assets/index-b3ab7f5a.js","assets/link-0018a103.css","assets/vue-lazyload.esm-fc48fbaf.js","assets/index-d04e64b8.css"]),Yt=()=>e(()=>import("./index-47a149d9.js"),["assets/index-47a149d9.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-42f384c7.css"]),Gt=()=>e(()=>import("./index-9f9052e3.js"),["assets/index-9f9052e3.js","assets/scroll-view-230f7c68.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-edf9a54a.js","assets/scroll-view-99396986.css","assets/index-7dbb04b3.js","assets/index-362d6b20.css"]),Ut=()=>e(()=>import("./index-2dac5467.js"),["assets/index-2dac5467.js","assets/tag-85a0b30e.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/tag-0962d8d9.css"]),qt=()=>e(()=>import("./index-3f43fbe0.js"),["assets/index-3f43fbe0.js","assets/text-3debc4c0.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/text-ce3de6a9.css"]),Wt=()=>e(()=>import("./index-fbd672dc.js"),["assets/index-fbd672dc.js","assets/vue-libs-eb153a24.js","assets/helper-1e979f21.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/index-5cf139c2.js","assets/index-534d1221.css"]),Jt=()=>e(()=>import("./index-4cf9bb95.js"),["assets/index-4cf9bb95.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/picker-d505ce8d.js","assets/popup-0f269fc4.js","assets/overlay-0e43632a.js","assets/overlay-d1f5992f.css","assets/popup-fa2dc8a7.css","assets/text-3debc4c0.js","assets/text-ce3de6a9.css","assets/picker-a5511d6c.css"]),Qt=()=>e(()=>import("./index-244ba3dd.js"),["assets/index-244ba3dd.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css"]),Zt=()=>e(()=>import("./index-a85c34df.js"),["assets/index-a85c34df.js","assets/image-8274af12.js","assets/helper-1e979f21.js","assets/vue-libs-eb153a24.js","assets/locales-2658cfbc.js","assets/helper-ecee00ef.css","assets/aspect-ratio-bf1f42f7.js","assets/aspect-ratio-e673e836.css","assets/image-bcc18d75.css","assets/rich-text-0d29e3b7.js","assets/rich-text-ceb24e7f.css","assets/vue-lazyload.esm-fc48fbaf.js","assets/index-ba66d141.css"]),I={AspectRatio:at,Button:_t,Cell:lt,Checkbox:ut,ContactButton:pt,ContactPanel:dt,CountDown:mt,CountTo:ht,DataPanel:vt,DatePicker:ft,Dialog:Et,DropdownItem:gt,DropdownMenu:Tt,Empty:Lt,Icon:Dt,Image:yt,Input:Pt,InputGrid:wt,InputNumber:Rt,Lazyload:It,Link:Ot,List:At,Loading:Vt,LoadingView:kt,NavBar:$t,NoticeBar:bt,Overlay:xt,Picker:Bt,Popup:Ct,PositionedView:St,Price:Nt,PullRefresh:Mt,Rate:Kt,RichText:zt,ScrollView:Ft,Search:jt,Sticky:Ht,Swiper:Xt,Switch:Yt,Tabs:Gt,Tag:Ut,Text:qt,Textarea:Wt,TimePicker:Jt,Toast:Qt,UserPanel:Zt},R={name:"fan-base",build:{namedExport:!0,packageManager:"npm",css:{preprocessor:"less",base:"style/base.less",removeSourceFile:!0},site:{publicPath:"/"}},site:{enableVConsole:!0,title:"fan-base",logo:"https://img.dac6.cn/fre/lib/fan.png",nav:[{title:"基础组件",items:[{path:"aspect-ratio",title:"AspectRatio 比例容器"},{path:"icon",title:"Icon 图标"},{path:"button",title:"Button 按钮"},{path:"text",title:"Text 文本"},{path:"image",title:"Image 图片"},{path:"popup",title:"Popup 弹出框"},{path:"scroll-view",title:"ScrollView 滚动区域"}]},{title:"表单组件",items:[{path:"rate",title:"Rate 评分"},{path:"input",title:"Input 输入框"},{path:"textarea",title:"Textarea 多行输入框"},{path:"switch",title:"Switch 开关"},{path:"input-number",title:"InputNumber 计数器"},{path:"input-grid",title:"InputGrid 网格输入框"},{path:"search",title:"Search 搜索"},{path:"checkbox",title:"Checkbox 复选框"},{path:"picker",title:"Picker 选择器"},{path:"time-picker",title:"TimePicker 时间选择"},{path:"date-picker",title:"DatePicker 日期选择"}]},{title:"反馈组件",items:[{path:"notice-bar",title:"NoticeBar 通知栏"},{path:"empty",title:"Empty 空状态"},{path:"loading",title:"Loading 加载"},{path:"loading-view",title:"LoadingView 区域加载"},{path:"lazyload",title:"Lazyload 懒加载"},{path:"overlay",title:"Overlay 遮罩层"},{path:"contact-panel",title:"ContactPanel 客服面板"},{path:"contact-button",title:"ContactButton 客服按钮"},{path:"toast",title:"Toast 轻提示"},{path:"dialog",title:"Dialog 弹出框"}]},{title:"导航组件",items:[{path:"dropdown-menu",title:"DropdownMenu 下拉菜单"},{path:"tabs",title:"Tabs 标签栏"},{path:"nav-bar",title:"NavBar 导航栏"},{path:"link",title:"Link 跳转链接"}]},{title:"展示组件",items:[{path:"tag",title:"Tag 标签"},{path:"cell",title:"Cell 单元格"},{path:"swiper",title:"Swiper 轮播"},{path:"rich-text",title:"RichText 富文本"},{path:"price",title:"Price 价格"},{path:"count-down",title:"CountDown 倒计时"},{path:"count-to",title:"CountTo 数字滚动"},{path:"list",title:"List 列表"},{path:"pull-refresh",title:"PullRefresh 下拉刷新"},{path:"positioned-view",title:"PositionedView 定位布局"},{path:"sticky",title:"Sticky 粘性布局"}]},{title:"业务组件",items:[{path:"data-panel",title:"DataPanel 数据面板"},{path:"user-panel",title:"UserPanel 用户信息面板"}]}]}},te={},ee={viewBox:"0 0 1024 1024"},oe=h("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"},null,-1),ne=h("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"},null,-1),ie=[oe,ne];function se(t,s){return _(),u("svg",ee,ie)}const re=g(te,[["render",se]]);const ce={components:{ArrowRight:re},props:{lang:String,group:Object},data(){return{active:[]}},computed:{base(){return this.lang?`/${this.lang}`:""}}},ae={class:"demo-home-nav"},_e={class:"demo-home-nav__title"},le={class:"demo-home-nav__group"};function ue(t,s,i,r,a,n){const d=T("arrow-right"),v=T("router-link");return _(),u("div",ae,[h("div",_e,L(i.group.title),1),h("div",le,[(_(!0),u(k,null,N(i.group.items,p=>(_(),w(v,{class:"demo-home-nav__block",key:p.path,to:`${n.base}/${p.path}`},{default:A(()=>[Y(L(p.title)+" ",1),P(d,{class:"demo-home-nav__icon"})]),_:2},1032,["to"]))),128))])])}const pe=g(ce,[["render",ue]]);const de={components:{DemoHomeNav:pe},computed:{lang(){const{lang:t}=this.$route.meta;return t},config(){const{locales:t}=R.site;return t?t[this.lang]:R.site},smallTitle(){return this.config.title.length>=8}}},me={class:"demo-home"},he=["src"],ve={key:0,class:"demo-home__desc"};function fe(t,s,i,r,a,n){const d=T("demo-home-nav");return _(),u("div",me,[h("h1",{class:S(["demo-home__title",{"demo-home__title--small":n.smallTitle}])},[h("img",{src:n.config.logo},null,8,he),h("span",null,L(n.config.title),1)],2),n.config.description?(_(),u("h2",ve,L(n.config.description),1)):C("v-if",!0),(_(!0),u(k,null,N(n.config.nav,(v,p)=>(_(),w(d,{key:p,lang:n.lang,group:v},null,8,["lang","group"]))),128))])}const x=g(de,[["render",fe]]),{locales:V,defaultLang:Ee}=R.site;z(Ee);function ge(t){const s=t.path.split("/")[1];return Object.keys(V).indexOf(s)!==-1?s:j()}function Te(){const t=[],s=Object.keys(I),i=V?Object.keys(V):[];return i.length?(t.push({name:"NotFound",path:"/:path(.*)+",redirect:r=>({name:ge(r)})}),i.forEach(r=>{t.push({name:r,path:`/${r}`,component:x,meta:{lang:r}})})):(t.push({name:"NotFound",path:"/:path(.*)+",redirect:{name:"home"}}),t.push({name:"home",path:"/",component:x})),s.forEach(r=>{const a=B(r);i.length?i.forEach(n=>{t.push({name:`${n}/${a}`,path:`/${n}/${a}`,component:I[r],meta:{name:r,lang:n}})}):t.push({name:a,path:`/${a}`,component:I[r],meta:{name:r}})}),t}const D=G({history:U(),routes:Te(),scrollBehavior:(t,s,i)=>i||{x:0,y:0}});M(D.currentRoute,()=>{D.currentRoute.value.redirectedFrom||q(H)});F(D);window.vueRouter=D;const Le={data(){return{path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}},computed:{title(){const{name:t}=this.$route.meta||{};return t?t.replace(/-/g,""):""}},methods:{onBack(){history.length>1?history.back():this.$router.replace("/")}}},De={class:"demo-nav"},ye={class:"demo-nav__title"},Pe=["d"];function we(t,s,i,r,a,n){return W((_(),u("div",De,[h("div",ye,L(n.title),1),(_(),u("svg",{class:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:s[0]||(s[0]=(...d)=>n.onBack&&n.onBack(...d))},[h("path",{fill:"#969799","fill-rule":"evenodd",d:a.path},null,8,Pe)]))],512)),[[J,n.title]])}const Re=g(Le,[["render",we]]);const Ie={components:{DemoNav:Re},setup(){const t=X();M(t,(s,i)=>{document.documentElement.classList.remove(`van-doc-theme-${i}`),document.documentElement.classList.add(`van-doc-theme-${s}`);const{darkModeClass:r,lightModeClass:a}=R.site;r&&document.documentElement.classList.toggle(r,s==="dark"),a&&document.documentElement.classList.toggle(a,s==="light")},{immediate:!0})}};function Oe(t,s,i,r,a,n){const d=T("demo-nav"),v=T("demo-section"),p=T("router-view");return _(),u(k,null,[P(d),P(p,null,{default:A(({Component:y})=>[P(v,null,{default:A(()=>[(_(),w(Z,null,[(_(),w(Q(y)))],1024))]),_:2},1024)]),_:1})],64)}const Ae=g(Ie,[["render",Oe]]);(function(){if(typeof window>"u")return;var t,s="ontouchstart"in window;document.createTouch||(document.createTouch=function(c,o,l,m,f,E,K){return new i(o,l,{pageX:m,pageY:f,screenX:E,screenY:K,clientX:m-window.pageXOffset,clientY:f-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var c=r(),o=0;o<arguments.length;o++)c[o]=arguments[o];return c.length=arguments.length,c}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(c){var o=this;do{if(o.matches(c))return o;o=o.parentElement||o.parentNode}while(o!==null&&o.nodeType===1);return null});var i=function(o,l,m,f,E){f=f||0,E=E||0,this.identifier=l,this.target=o,this.clientX=m.clientX+f,this.clientY=m.clientY+E,this.screenX=m.screenX+f,this.screenY=m.screenY+E,this.pageX=m.pageX+f,this.pageY=m.pageY+E};function r(){var c=[];return c.item=function(o){return this[o]||null},c.identifiedTouch=function(o){return this[o+1]||null},c}var a=!1;function n(c){return function(o){o.type==="mousedown"&&(a=!0),o.type==="mouseup"&&(a=!1),!(o.type==="mousemove"&&!a)&&((o.type==="mousedown"||!t||t&&!t.dispatchEvent)&&(t=o.target),t.closest("[data-no-touch-simulate]")==null&&d(c,o),o.type==="mouseup"&&(t=null))}}function d(c,o){var l=document.createEvent("Event");l.initEvent(c,!0,!0),l.altKey=o.altKey,l.ctrlKey=o.ctrlKey,l.metaKey=o.metaKey,l.shiftKey=o.shiftKey,l.touches=p(o),l.targetTouches=p(o),l.changedTouches=v(o),t.dispatchEvent(l)}function v(c){var o=r();return o.push(new i(t,1,c,0,0)),o}function p(c){return c.type==="mouseup"?r():v(c)}function y(){window.addEventListener("mousedown",n("touchstart"),!0),window.addEventListener("mousemove",n("touchmove"),!0),window.addEventListener("mouseup",n("touchend"),!0)}y.multiTouchOffset=75,s||new y})();window.app=tt(Ae).use(D).component($.name,$).component(b.name,b);setTimeout(()=>{window.app.mount("#app")},0);document.addEventListener("touchstart",()=>{},{passive:!0});
