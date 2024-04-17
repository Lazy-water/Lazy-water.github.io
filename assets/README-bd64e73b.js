import{o as s,a as d,z as a}from"./vue-libs-eb153a24.js";const e={class:"van-doc-markdown-body"},n=a(`<h1>Swiper</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Swiper 是一个轮播组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js">&lt;script setup&gt;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Swiper</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;fan-base&#39;</span>;
  <span class="hljs-comment">// import { Swiper as FanSwiper } from &#39;fan-base&#39;;</span>
&lt;/script&gt;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> list = [
  { <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://img.dac6.cn/fre/others/elejh1.11.png&#39;</span> },
  { <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://img.yzcdn.cn/vant/logo.png&#39;</span> },
  { <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://img.dac6.cn/fre/others/elejh1.11.png&#39;</span> }
]

&lt;<span class="hljs-title class_">FanSwiper</span> :custom-style=<span class="hljs-string">&quot;{ padding: &#39;10px&#39; }&quot;</span> :type=<span class="hljs-string">&quot;testType&quot;</span> inner-radius=<span class="hljs-string">&quot;8px&quot;</span> :list=<span class="hljs-string">&quot;list&quot;</span>&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">:aspect-ratio</span>=<span class="hljs-string">&quot;2.7&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;item.cover&quot;</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;scaleToFill&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
&lt;/<span class="hljs-title class_">FanSwiper</span>&gt;
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>custom-style</td><td>自定义样式</td><td><em>string|object</em></td><td><code>-</code></td></tr><tr><td>v-model:current</td><td>选中的项的索引</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>duration</td><td>切换时间</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td>aspect-ratio</td><td>宽高比</td><td><em>string|number</em></td><td><code>2.7</code></td></tr><tr><td>list</td><td>内容列表</td><td><em>array</em></td><td><code>[]</code></td></tr><tr><td>loop</td><td>是否循环播放</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>autoplay</td><td>停留时间</td><td><em>number</em></td><td><code>3500</code></td></tr><tr><td>type</td><td>风格</td><td><em>1|2</em></td><td><code>1</code></td></tr><tr><td>show-menu-by-longpress</td><td>图片是否可以长按识别</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>indicator</td><td>是否显示指示器</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>inner-radius</td><td>指示器圆角</td><td><em>string|number</em></td><td><code>-</code></td></tr><tr><td>indicator-active-color</td><td>选中指示器颜色</td><td><em>string</em></td><td><code>var(--fan-primary-color)</code></td></tr><tr><td>auto-height</td><td>是否自适应高度</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>vertical</td><td>开启纵向滑动</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="event" tabindex="-1">Event</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td><em>（item, index）</em></td></tr><tr><td>change</td><td>切换时触发</td><td><em>index</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>内容</td><td><em>{item, index, active: boolean}</em></td></tr></tbody></table></div>`,9),r=[n],h={__name:"README",setup(o,{expose:t}){return t({frontmatter:{}}),(l,p)=>(s(),d("div",e,r))}};export{h as default};
