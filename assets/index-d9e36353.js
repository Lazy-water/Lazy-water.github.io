import{F as l}from"./input-1caa36bc.js";import{y as f,r as p,o as m,a as i,e,w as r,A as a,F as b}from"./vue-libs-eb153a24.js";import"./helper-1e979f21.js";import"./locales-2658cfbc.js";const x={__name:"index",setup(_){const u=f(""),n=f(""),s=c=>{console.log(n.value)};return(c,o)=>{const t=p("demo-block");return m(),i(b,null,[e(t,{title:"基础用法"},{default:r(()=>[e(a(l),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=d=>n.value=d),placeholder:"请输入文本",border:"",style:{background:"#fff"},onChange:s},null,8,["modelValue"]),e(a(l),{style:{background:"#fff"},label:"文本",placeholder:"请输入文本"})]),_:1}),e(t,{title:"图标"},{default:r(()=>[e(a(l),{style:{background:"#fff"},placeholder:"请输入文本","prefix-icon":"search"})]),_:1}),e(t,{title:"图标一起"},{default:r(()=>[e(a(l),{disabled:"",style:{background:"#fff"},placeholder:"请输入文本","prefix-icon":"search",label:"搜索"})]),_:1}),e(t,{title:"清除"},{default:r(()=>[e(a(l),{style:{background:"#fff"},placeholder:"请输入文本",modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=d=>u.value=d),"prefix-icon":"search",clearable:""},null,8,["modelValue"])]),_:1})],64)}}};export{x as default};