import{o as s,a as n,z as t}from"./vue-libs-eb153a24.js";const o={class:"van-doc-markdown-body"},l=t(`<h1>Lazyload</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Lazyload 是一个懒加载组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js">&lt;script setup&gt;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;fan-base/es/lazyload&#39;</span>;
  <span class="hljs-comment">// import { Lazyload as FanLazyload } from &#39;fan-base/es/lazyload&#39;;</span>
&lt;/script&gt;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html">window.app.use(Lazyload)

<span class="hljs-tag">&lt;<span class="hljs-name">FanImage</span> <span class="hljs-attr">lazyload</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;xxx&quot;</span> /&gt;</span>
</code></pre><blockquote><p>更多内容请参照：<a href="https://github.com/hilongjw/vue-lazyload" target="_blank">vue-lazyload 官方文档</a></p></blockquote></div>`,5),e=[l],h={__name:"README",setup(c,{expose:a}){return a({frontmatter:{}}),(p,r)=>(s(),n("div",o,e))}};export{h as default};
