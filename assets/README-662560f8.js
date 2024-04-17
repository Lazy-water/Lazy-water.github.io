import{o as s,a as t,z as n}from"./vue-libs-eb153a24.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>DataPanel</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>DataPanel 是一个数据面板组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js">&lt;script setup&gt;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">DataPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;fan-base&#39;</span>;
  <span class="hljs-comment">// import { DataPanel as FanDataPanel } from &#39;fan-base&#39;;</span>
&lt;/script&gt;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> data2 = [
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;今日预估收益&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;可提现金额&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0.45</span> },
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;累计收益&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0.45</span> },
]
&lt;<span class="hljs-title class_">FanDataPanel</span> :data=<span class="hljs-string">&quot;data2&quot;</span>&gt;&lt;/<span class="hljs-title class_">FanDataPanel</span>&gt;
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>custom-style</td><td>自定义样式</td><td><em>string|object</em></td><td><code>-</code></td></tr><tr><td>data</td><td>数据（<code>[{ label, value }]</code>）</td><td><em>array</em></td><td><code>[]</code></td></tr><tr><td>column</td><td>一行显示几个</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table></div>`,7),d=[l],i={__name:"README",setup(c,{expose:a}){return a({frontmatter:{}}),(p,r)=>(s(),t("div",e,d))}};export{i as default};
