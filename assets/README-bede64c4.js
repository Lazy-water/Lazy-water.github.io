import{o as d,a as e,z as a}from"./vue-libs-eb153a24.js";const s={class:"van-doc-markdown-body"},o=a(`<h1>CountDown</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>CountDown 是一个倒计时组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js">&lt;script setup&gt;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">CountDown</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;fan-base&#39;</span>;
  <span class="hljs-comment">// import { CountDown as FanCountDown } from &#39;fan-base&#39;;</span>
&lt;/script&gt;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">FanCountDown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;6000000&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>custom-style</td><td>自定义样式</td><td><em>string|object</em></td><td><code>-</code></td></tr><tr><td>time</td><td>毫秒时间戳</td><td><em>number</em></td><td><code>-</code></td></tr><tr><td>auto-start</td><td>是否自动开启</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>separator</td><td>分隔符</td><td><em>string</em></td><td><code>2.7</code></td></tr><tr><td>separator-style</td><td>分隔符样式</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>block-style</td><td>内容样式</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>day</td><td>是否显示天</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>hour</td><td>是否显示小时</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>minute</td><td>是否显示秒</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>millisecond</td><td>是否显示毫秒</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>double-digit-mill</td><td>毫秒前是否加零</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="event" tabindex="-1">Event</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>finish</td><td>倒计时结束时触发</td><td>-</td></tr></tbody></table></div>`,8),n=[o],m={__name:"README",setup(r,{expose:t}){return t({frontmatter:{}}),(l,i)=>(d(),e("div",s,n))}};export{m as default};