import{V as a}from"./chunks/theme.db602564.js";import{W as p}from"./chunks/watermark.cc489ee9.js";import"./chunks/global.3f5b834c.js";import{d as x,u as W,k as E,l as v,I as b,g as T,N as s,b as o,U as e,m as _,C as R,o as j}from"./chunks/framework.8a67824f.js";import{d as q}from"./chunks/dayjs.min.0814b3fd.js";import"./chunks/commonjsHelpers.725317a4.js";const P=e(`<h1 id="watermark" tabindex="-1">Watermark <a class="header-anchor" href="#watermark" aria-label="Permalink to &quot;Watermark&quot;">​</a></h1><h2 id="text-watermark" tabindex="-1">Text Watermark <a class="header-anchor" href="#text-watermark" aria-label="Permalink to &quot;Text Watermark&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Watermark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">watermark-js-plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> watermark </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Watermark</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello my watermark</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rotate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">grid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">gridLayoutOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cols</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">gap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">matrix</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">onSuccess</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// success callback</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">destroy</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// remove watermark</span></span></code></pre></div>`,3),S=e(`<h2 id="multiline-text-watermark" tabindex="-1">Multiline Text Watermark <a class="header-anchor" href="#multiline-text-watermark" aria-label="Permalink to &quot;Multiline Text Watermark&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Watermark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">watermark-js-plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> watermark </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Watermark</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">contentType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multi-line-text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello my watermark watermark</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fontSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">onSuccess</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// success callback</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">destroy</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// remove watermark</span></span></code></pre></div>`,2),I=e(`<h2 id="image-watermark" tabindex="-1">Image Watermark <a class="header-anchor" href="#image-watermark" aria-label="Permalink to &quot;Image Watermark&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Watermark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">watermark-js-plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> watermark </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Watermark</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">contentType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">imageWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// image width</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// imageHeight: 20, // image height</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">grayscale(100%)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// graylevel</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">onSuccess</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// success callback</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">destroy</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// remove watermark</span></span></code></pre></div>`,2),L=e(`<h2 id="rich-text-watermark" tabindex="-1">Rich Text Watermark <a class="header-anchor" href="#rich-text-watermark" aria-label="Permalink to &quot;Rich Text Watermark&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Watermark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">watermark-js-plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> watermark </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Watermark</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">contentType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rich-text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;div style=&quot;background: #ccc;&quot;&gt;Rich text watermark is so &lt;span style=&quot;color: #f00&quot;&gt;nice&lt;/span&gt;&lt;/div&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">onSuccess</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// success callback</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">destroy</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// remove watermark</span></span></code></pre></div>`,2),M=e(`<h2 id="child-element-watermark" tabindex="-1">Child Element Watermark <a class="header-anchor" href="#child-element-watermark" aria-label="Permalink to &quot;Child Element Watermark&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Watermark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">watermark-js-plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> watermark </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Watermark</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.parent-element</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">backgroundRepeat</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">no-repeat</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">destroy</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// remove watermark</span></span></code></pre></div>`,2),B=_("div",{class:"parent-element",style:{width:"400px",height:"400px",border:"1px solid #333","margin-top":"10px",position:"relative"}},null,-1),Q=JSON.parse('{"title":"Watermark","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guide/watermark.md","filePath":"guide/watermark.md"}'),N={name:"guide/watermark.md"},X=x({...N,setup(O){const{isDark:c}=W();E("");const t=R();let n=null,r=null,y=null,D=null,F=null;v(()=>{n=new p({content:"hello my text watermark",width:200,height:200,rotate:22,layout:"grid",gridLayoutOptions:{rows:2,cols:2,gap:[0,0],matrix:[[1,0],[0,1]]},onSuccess:()=>{t.appContext.config.globalProperties.$message({appendTo:"#app",message:"The text watermark added successfully!",type:"success"})}}),r=new p({contentType:"multi-line-text",content:"hello my multi text watermark",fontSize:"30px",width:200,height:200,onSuccess:()=>{t.appContext.config.globalProperties.$message({appendTo:"#app",message:"The multi text watermark added successfully!",type:"success"})}}),y=new p({contentType:"image",image:"https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png",imageWidth:200,width:300,height:300,filter:"grayscale(100%)",onSuccess:()=>{t.appContext.config.globalProperties.$message({appendTo:"#app",message:"The image watermark added successfully!",type:"success"})}}),D=new p({contentType:"rich-text",content:'<div style="background: #ccc;">The watermark is so <span style="color: #f00">nice</span>.</div>',width:300,height:300,onSuccess:()=>{t.appContext.config.globalProperties.$message({appendTo:"#app",message:"The rich text watermark added successfully！",type:"success"})}}),F=new p({parent:".parent-element",width:400,height:400,backgroundRepeat:"no-repeat"})});const C=()=>{n.changeOptions({content:"hello my text watermark",fontColor:c.value?"#fff":"#000"},"append",!1),n.create()},i=()=>{n.changeOptions({content:"update my text watermark at "+q().format("HH:mm:ss"),fontColor:c.value?"#fff":"#000"},"append")},A=()=>{n.destroy()},m=()=>{c.value&&(r.options.fontColor="#fff"),r.create()},d=()=>{r.destroy()},k=()=>{y.create()},h=()=>{y.destroy()},u=()=>{D.create()},g=()=>{D.destroy()},f=()=>{F.create()},w=()=>{F.destroy()};return(V,z)=>{const l=b("el-space");return j(),T("div",null,[P,s(l,null,{default:o(()=>[s(a,{text:"Add Text Watermark",onClick:C}),s(a,{text:"Update Text Watermark",onClick:i}),s(a,{text:"Remove Text Watermark",onClick:A})]),_:1}),S,s(l,null,{default:o(()=>[s(a,{text:"Add MultiLine Text Watermark",onClick:m}),s(a,{text:"Remove MultiLine Text Watermark",onClick:d})]),_:1}),I,s(l,null,{default:o(()=>[s(a,{text:"Add Image Watermark",onClick:k}),s(a,{text:"Remove Image Watermark",onClick:h})]),_:1}),L,s(l,null,{default:o(()=>[s(a,{text:"Add Rich Text Watermark",onClick:u}),s(a,{text:"Remove Rich Text Watermark",onClick:g})]),_:1}),M,s(l,null,{default:o(()=>[s(a,{text:"Add Child Element Watermark",onClick:f}),s(a,{text:"Remove Child Element Watermark",onClick:w})]),_:1}),B])}}});export{Q as __pageData,X as default};