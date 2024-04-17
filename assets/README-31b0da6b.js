import{o as t,a,z as n}from"./vue-libs-eb153a24.js";const e={class:"van-doc-markdown-body"},d=n(`<h1>DatePicker</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>DatePicker 是一个**组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js">&lt;script setup&gt;
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;fan&#39;</span>;
  <span class="hljs-comment">// import { DatePicker as FanDatePicker } from &#39;fan&#39;;</span>
&lt;/script&gt;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>)

<span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">val</span>) =&gt; {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(val)
}

<span class="hljs-keyword">const</span> <span class="hljs-title function_">onFilter</span> = (<span class="hljs-params">list</span>) =&gt; {
  list.<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
    <span class="hljs-keyword">if</span> (item.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;year&#39;</span>) item.<span class="hljs-property">text</span> = <span class="hljs-string">\`<span class="hljs-subst">\${item.text}</span>年\`</span>
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (item.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;month&#39;</span>) item.<span class="hljs-property">text</span> = <span class="hljs-string">\`<span class="hljs-subst">\${item.text}</span>月\`</span>
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (item.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;day&#39;</span>) item.<span class="hljs-property">text</span> = <span class="hljs-string">\`<span class="hljs-subst">\${item.text}</span>日\`</span>
    <span class="hljs-keyword">if</span> (item.<span class="hljs-property">children</span>.<span class="hljs-property">length</span>) <span class="hljs-title function_">onFilter</span>(item.<span class="hljs-property">children</span>)
  })
  <span class="hljs-keyword">return</span> list
}

&lt;<span class="hljs-title class_">FanDatePicker</span> v-<span class="hljs-attr">model</span>:show=<span class="hljs-string">&quot;show&quot;</span> :min-date=<span class="hljs-string">&quot;new Date()&quot;</span> :max-date=<span class="hljs-string">&quot;new Date()&quot;</span> @confirm=<span class="hljs-string">&quot;onConfirm&quot;</span>
      :filter=<span class="hljs-string">&quot;onFilter&quot;</span> /&gt;
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前输入的值</td><td><em>array</em></td><td><code>-</code></td></tr><tr><td>v-model:show</td><td>控制显隐</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td>title</td><td>标题</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td>cancel-text</td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>confirm-text</td><td>确定按钮的文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td>filter</td><td>格式化显示文字</td><td><em>function</em></td><td><code>-</code></td></tr><tr><td>min-date</td><td>最小时间</td><td><em>Date</em></td><td><code>十年前</code></td></tr><tr><td>max-date</td><td>最大时间</td><td><em>Date</em></td><td><code>十年后</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="event" tabindex="-1">Event</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确定时触发</td><td><em>value: 选中的值</em></td></tr><tr><td>cancel</td><td>点击取消时触发</td><td><em>-</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>header</td><td>头部内容</td></tr></tbody></table></div>`,9),l=[d],h={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(r,o)=>(t(),a("div",e,l))}};export{h as default};
