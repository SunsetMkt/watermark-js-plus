import{V as p}from"./chunks/theme.hRU01rQy.js";import{w as _,p as C}from"./chunks/index.yRtYIChM.js";import{u as z,B as v}from"./chunks/app.sALceO84.js";import"./chunks/global.Qo6jmeRt.js";import{d as K,u as $,k as A,m as J,F as l,g as H,K as s,p as n,b as a,e as o,R as t,o as h,f as u,a as D,j as x,a3 as O}from"./chunks/framework.V9Xktqrn.js";import"./chunks/pinia.dXsbNHkF.js";const U=n("h1",{id:"blind-watermark",tabindex:"-1"},[o("Blind watermark "),n("a",{class:"header-anchor",href:"#blind-watermark","aria-label":'Permalink to "Blind watermark"'},"​")],-1),G=n("h2",{id:"text-blind-watermark",tabindex:"-1"},[o("Text Blind Watermark "),n("a",{class:"header-anchor",href:"#text-blind-watermark","aria-label":'Permalink to "Text Blind Watermark"'},"​")],-1),Q={class:"text-blind-watermark"},X=t(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BlindWatermark } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;watermark-js-plus&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">watermark</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BlindWatermark</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  content: </span><span style="color:#9ECBFF;">&#39;hello my watermark&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onSuccess</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// remove watermark</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { BlindWatermark } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;watermark-js-plus&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">watermark</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BlindWatermark</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  content: </span><span style="color:#032F62;">&#39;hello my watermark&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onSuccess</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// remove watermark</span></span></code></pre></div><p>👉 Add parameters for dark background：<code>fontColor: &#39;#fff&#39;</code></p>`,2),Y=n("h2",{id:"multiline-text-blind-watermark",tabindex:"-1"},[o("Multiline Text Blind Watermark "),n("a",{class:"header-anchor",href:"#multiline-text-blind-watermark","aria-label":'Permalink to "Multiline Text Blind Watermark"'},"​")],-1),Z={class:"multiline-text-blind-watermark"},ss=t(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BlindWatermark } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;watermark-js-plus&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">watermark</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BlindWatermark</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contentType: </span><span style="color:#9ECBFF;">&#39;multi-line-text&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  content: </span><span style="color:#9ECBFF;">&#39;hello my multiline blind watermark&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  fontSize: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onSuccess</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// remove watermark</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { BlindWatermark } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;watermark-js-plus&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">watermark</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BlindWatermark</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contentType: </span><span style="color:#032F62;">&#39;multi-line-text&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  content: </span><span style="color:#032F62;">&#39;hello my multiline blind watermark&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  fontSize: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onSuccess</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// remove watermark</span></span></code></pre></div><p>👉 Add parameters for dark background：<code>fontColor: &#39;#fff&#39;</code></p>`,2),as=n("h2",{id:"image-blind-watermark",tabindex:"-1"},[o("Image Blind Watermark "),n("a",{class:"header-anchor",href:"#image-blind-watermark","aria-label":'Permalink to "Image Blind Watermark"'},"​")],-1),ns={class:"image-blind-watermark"},ls=t(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BlindWatermark } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;watermark-js-plus&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">watermark</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BlindWatermark</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contentType: </span><span style="color:#9ECBFF;">&#39;image&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  content: </span><span style="color:#9ECBFF;">&#39;http://upic-service.test.upcdn.net/uPic/github-JxMIKf.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  imageWidth: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// image width</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// imageHeight: 20, // image height</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onSuccess</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// remove watermark</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { BlindWatermark } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;watermark-js-plus&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">watermark</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BlindWatermark</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contentType: </span><span style="color:#032F62;">&#39;image&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  content: </span><span style="color:#032F62;">&#39;http://upic-service.test.upcdn.net/uPic/github-JxMIKf.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  imageWidth: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// image width</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// imageHeight: 20, // image height</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onSuccess</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// remove watermark</span></span></code></pre></div>`,1),es=n("h2",{id:"rich-text-blind-watermark",tabindex:"-1"},[o("Rich Text Blind Watermark "),n("a",{class:"header-anchor",href:"#rich-text-blind-watermark","aria-label":'Permalink to "Rich Text Blind Watermark"'},"​")],-1),ps={class:"rich-text-blind-watermark"},os=t(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BlindWatermark } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;watermark-js-plus&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">watermark</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BlindWatermark</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contentType: </span><span style="color:#9ECBFF;">&#39;rich-text&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  content: </span><span style="color:#9ECBFF;">&#39;&lt;div&gt;&lt;span style=&quot;color: #f00&quot;&gt;good&lt;/span&gt; watermark&lt;/div&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onSuccess</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// remove watermark</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { BlindWatermark } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;watermark-js-plus&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">watermark</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BlindWatermark</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contentType: </span><span style="color:#032F62;">&#39;rich-text&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  content: </span><span style="color:#032F62;">&#39;&lt;div&gt;&lt;span style=&quot;color: #f00&quot;&gt;good&lt;/span&gt; watermark&lt;/div&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onSuccess</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// remove watermark</span></span></code></pre></div>`,1),ts=t(`<h2 id="decode-blind-watermark" tabindex="-1">Decode Blind Watermark <a class="header-anchor" href="#decode-blind-watermark" aria-label="Permalink to &quot;Decode Blind Watermark&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { BlindWatermark } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;watermark-js-plus&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">BlindWatermark.</span><span style="color:#B392F0;">decode</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: uploadFile.url, </span><span style="color:#6A737D;">// image url</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onSuccess</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">imageBase64</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { BlindWatermark } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;watermark-js-plus&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">BlindWatermark.</span><span style="color:#6F42C1;">decode</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  url: uploadFile.url, </span><span style="color:#6A737D;">// image url</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onSuccess</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">imageBase64</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// success callback</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,2),us=JSON.parse('{"title":"Blind watermark","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guide/blind-watermark.md","filePath":"guide/blind-watermark.md"}'),rs={name:"guide/blind-watermark.md"},hs=K({...rs,setup(cs){const e=z(),{isDark:g}=$(),r=O(),c=A(""),i=A("");J(()=>{});const W=()=>{e.createWatermark({content:"hello my watermark",fontColor:g.value?"#fff":"#000",width:200,height:200,onSuccess:()=>{r.appContext.config.globalProperties.$message({appendTo:"#app",message:"The text blind watermark added successfully!",type:"success"})}},"blind")},T=()=>{e.removeWatermark()},S=()=>{e.createWatermark({contentType:"multi-line-text",content:"hello my multiline blind watermark",fontColor:g.value?"#fff":"#000",fontSize:30,width:200,height:200,onSuccess:()=>{r.appContext.config.globalProperties.$message({appendTo:"#app",message:"The multiline text blind watermark added successfully!",type:"success"})}},"blind")},j=()=>{e.removeWatermark()},P=()=>{e.createWatermark({contentType:"image",image:"https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png",imageWidth:200,width:300,height:300,onSuccess:()=>{r.appContext.config.globalProperties.$message({appendTo:"#app",message:"The image blind watermark added successfully!",type:"success"})}},"blind")},R=()=>{e.removeWatermark()},I=()=>{e.createWatermark({contentType:"rich-text",content:'<div><span style="color: #f00">good</span> watermark</div>',width:300,height:300,onSuccess:()=>{r.appContext.config.globalProperties.$message({appendTo:"#app",message:"The rich text blind watermark added successfully!",type:"success"})}},"blind")},M=()=>{e.removeWatermark()},V=E=>{v.decode({url:E.url,compositeTimes:3,onSuccess:y=>{c.value=y}})},q=E=>{v.decode({compositeOperation:"overlay",fillColor:"#fff",url:E.url,compositeTimes:3,onSuccess:y=>{i.value=y}})};return(E,y)=>{const N=l("el-backtop"),d=l("el-space"),m=l("el-affix"),k=l("el-icon"),w=l("el-link"),F=l("el-tooltip"),f=l("el-upload"),B=l("el-image"),b=l("el-col"),L=l("el-row");return h(),H("div",null,[U,s(N),G,n("div",Q,[X,s(m,{target:".text-blind-watermark",position:"bottom",offset:0},{default:a(()=>[s(d,{class:"block-operation"},{default:a(()=>[s(p,{text:"Add Text Blind Watermark",onClick:W}),s(p,{text:"Remove Text Blind Watermark",onClick:T})]),_:1})]),_:1})]),Y,n("div",Z,[ss,s(m,{target:".multiline-text-blind-watermark",position:"bottom",offset:0},{default:a(()=>[s(d,{class:"block-operation"},{default:a(()=>[s(p,{text:"Add Multiline Text Blind Watermark",onClick:S}),s(p,{text:"Remove Multiline Text Blind Watermark",onClick:j})]),_:1})]),_:1})]),as,n("div",ns,[ls,s(m,{target:".image-blind-watermark",position:"bottom",offset:0},{default:a(()=>[s(d,{class:"block-operation"},{default:a(()=>[s(p,{text:"Add Image Blind Watermark",onClick:P}),s(p,{text:"Remove Image Blind Watermark",onClick:R})]),_:1})]),_:1})]),es,n("div",ps,[os,s(m,{target:".rich-text-blind-watermark",position:"bottom",offset:0},{default:a(()=>[s(d,{class:"block-operation"},{default:a(()=>[s(p,{text:"Add RichText Blind Watermark",onClick:I}),s(p,{text:"Remove Rich Text Blind Watermark",onClick:M})]),_:1})]),_:1})]),ts,s(L,{gutter:20},{default:a(()=>[s(b,{span:12},{default:a(()=>[s(F,{content:"Use a light background image",placement:"right"},{default:a(()=>[s(w,{underline:!1},{default:a(()=>[o(" Light Background"),s(k,{class:"el-icon--right"},{default:a(()=>[s(u(_))]),_:1})]),_:1})]),_:1}),n("div",null,[s(f,{"list-type":"picture-card",accept:"image/*","auto-upload":!1,"show-file-list":!1,"on-change":V},{default:a(()=>[s(k,null,{default:a(()=>[s(u(C))]),_:1})]),_:1}),c.value?(h(),D(B,{key:0,style:{width:"400px",height:"400px","margin-top":"20px"},src:c.value,"preview-src-list":[c.value],fit:"cover"},null,8,["src","preview-src-list"])):x("",!0)])]),_:1}),s(b,{span:12},{default:a(()=>[s(F,{content:"Use with dark background image",placement:"right"},{default:a(()=>[s(w,{underline:!1},{default:a(()=>[o(" Dark Background"),s(k,{class:"el-icon--right"},{default:a(()=>[s(u(_))]),_:1})]),_:1})]),_:1}),n("div",null,[s(f,{"list-type":"picture-card",accept:"image/*","auto-upload":!1,"show-file-list":!1,"on-change":q},{default:a(()=>[s(k,null,{default:a(()=>[s(u(C))]),_:1})]),_:1}),i.value?(h(),D(B,{key:0,style:{width:"400px",height:"400px","margin-top":"20px"},src:i.value,"preview-src-list":[i.value],fit:"cover"},null,8,["src","preview-src-list"])):x("",!0)])]),_:1})]),_:1})])}}});export{us as __pageData,hs as default};