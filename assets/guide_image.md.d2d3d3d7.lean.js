import{V as o}from"./chunks/theme.db602564.js";import{I as r,i as D}from"./chunks/image.9520ab60.js";import"./chunks/global.3f5b834c.js";import{d as y,k as i,l as F,I as C,g as m,m as e,f as A,N as n,b as d,U as g,o as h}from"./chunks/framework.8a67824f.js";const u=g(`<h1 id="image" tabindex="-1">Image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;Image&quot;">​</a></h1><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ImageWatermark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">watermark-js-plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 引入水印插件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgDom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> watermark </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ImageWatermark</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// content: &#39;my watermark&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">contentType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">imageWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> imgDom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> imgDom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> imgDom</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rotate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">translatePlacement</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bottom-end</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 添加水印</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">watermark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">destroy</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 删除水印</span></span></code></pre></div>`,3),k=["src"],P=JSON.parse('{"title":"Image","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guide/image.md","filePath":"guide/image.md"}'),f={name:"guide/image.md"},x=y({...f,setup(_){let a=null,s=null;const l=i(!0);F(()=>{s=document.querySelector(".image"),s.addEventListener("load",()=>{l.value&&(a=new r({contentType:"image",image:"https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png",imageWidth:200,width:s.width,height:s.height,dom:s,rotate:0,translatePlacement:"bottom-end"}),l.value=!1)})});const p=()=>{a.create()},t=()=>{a.destroy()};return(v,E)=>{const c=C("el-space");return h(),m("div",null,[u,e("div",null,[e("img",{class:"image",src:A(D)},null,8,k)]),n(c,{style:{"margin-top":"10px"}},{default:d(()=>[n(o,{text:"Add Watermark",onClick:p}),n(o,{text:"Remove Watermark",onClick:t})]),_:1})])}}});export{P as __pageData,x as default};
