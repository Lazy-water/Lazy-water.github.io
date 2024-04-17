import{o as d,a as e,z as s}from"./vue-libs-eb153a24.js";const a={class:"van-doc-markdown-body"},n=s(`<h1>Text</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Text 是一个文字组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js">&lt;script setup&gt;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Text</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;fan-base&#39;</span>;
  <span class="hljs-comment">// import { Text as FanText } from &#39;fan-base&#39;;</span>
&lt;/script&gt;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">FanText</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">FanText</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="wen-zi-yan-se-ji-zi-hao" tabindex="-1">文字颜色及字号</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">FanButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#000&quot;</span> <span class="hljs-attr">text-size</span>=<span class="hljs-string">&quot;12px&quot;</span>&gt;</span>文字<span class="hljs-tag">&lt;/<span class="hljs-name">FanButton</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>custom-style</td><td>自定义样式</td><td><em>string | object</em></td><td><code>-</code></td></tr><tr><td>inner</td><td>是否显示内层白框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>inner-radius</td><td>圆角（css样式）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>text</td><td>文字内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>text-size</td><td>字号</td><td><em>string|number</em></td><td><code>14</code></td></tr><tr><td>color</td><td>颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>bold</td><td>字重（<code>true</code> 时为 <code>500</code>）</td><td><em>string|number|boolean</em></td><td><code>false</code></td></tr><tr><td>align</td><td>对齐方式</td><td><em>left|right|center</em></td><td><code>left</code></td></tr><tr><td>line-height</td><td>行高</td><td><em>number|string</em></td><td><code>1.4</code></td></tr><tr><td>prefix-icon</td><td>前缀图标（图标名称或图片链接）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>icon-size</td><td>图标大小</td><td><em>numebr|string</em></td><td><code>-</code></td></tr><tr><td>icon-radius</td><td>图标圆角</td><td><em>string</em></td><td><code>4px</code></td></tr><tr><td>icon-color</td><td>图标颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>icon-space</td><td>图标与文字间距</td><td><em>number|string</em></td><td><code>2px</code></td></tr><tr><td>line</td><td>最多展示行数，超出显示省略号</td><td><em>1|2|3</em></td><td><code>-</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="event" tabindex="-1">Event</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td><td><em>event</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>文字内容</td></tr></tbody></table></div>`,10),c=[n],p={__name:"README",setup(o,{expose:t}){return t({frontmatter:{}}),(i,l)=>(d(),e("div",a,c))}};export{p as default};