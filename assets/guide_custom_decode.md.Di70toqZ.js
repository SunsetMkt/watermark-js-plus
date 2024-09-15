import{p as j}from"./chunks/theme.C_uCbxvq.js";import"./chunks/index.E5uUK3Fu.js";import{B as L}from"./chunks/blind.Cws0_8IT.js";import{d as A,l as n,K as E,h as C,a5 as e,j as s,e as J,b as a,as as l,o as f,g as K,a as M,a4 as R,V as W,aj as q,_ as z}from"./chunks/framework.D04L8mUS.js";const ee=JSON.parse('{"title":"Decode Configs","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guide/custom/decode.md","filePath":"guide/custom/decode.md"}'),G={name:"guide/custom/decode.md"},H=A({...G,setup(Q){const i=n(""),_=n("light"),r=n("overlay"),u=n(4),d=n("#000"),v=n(""),b=["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"];E(()=>{});const V=p=>{i.value=p.url,c()},y=()=>{_.value==="light"?(r.value="overlay",u.value=4,d.value="#000"):(r.value="overlay",u.value=3,d.value="#fff"),c()},k=()=>{c()},x=()=>{c()},w=()=>{c()},c=()=>{L.decode({fillColor:d.value,compositeTimes:u.value,compositeOperation:r.value,url:i.value,onSuccess:p=>{v.value=p}})};return(p,o)=>{const T=l("el-backtop"),B=l("el-icon"),D=l("el-upload"),g=l("el-image"),O=l("el-space"),h=l("el-radio-button"),U=l("el-radio-group"),m=l("el-descriptions-item"),N=l("el-option"),I=l("el-select"),F=l("el-input-number"),P=l("el-color-picker"),S=l("el-descriptions");return f(),C("div",null,[e(T),o[7]||(o[7]=s("h1",{id:"decode-configs",tabindex:"-1"},[J("Decode Configs "),s("a",{class:"header-anchor",href:"#decode-configs","aria-label":'Permalink to "Decode Configs"'},"​")],-1)),s("div",null,[o[4]||(o[4]=s("div",{class:"title"},"Image",-1)),e(O,null,{default:a(()=>[e(D,{style:{display:"inline-block"},"list-type":"picture-card",accept:"image/*","auto-upload":!1,"show-file-list":!1,"on-change":V},{default:a(()=>[e(B,null,{default:a(()=>[e(K(j))]),_:1})]),_:1}),i.value?(f(),M(g,{key:0,style:{width:"148px",height:"148px"},src:i.value,"preview-src-list":[i.value]},null,8,["src","preview-src-list"])):R("",!0)]),_:1}),o[5]||(o[5]=s("div",{class:"title"},"Arguments",-1)),e(S,{column:1,border:""},{default:a(()=>[e(m,{label:"Theme"},{default:a(()=>[e(U,{modelValue:_.value,"onUpdate:modelValue":o[0]||(o[0]=t=>_.value=t),onChange:y},{default:a(()=>[e(h,{label:"Light",value:"light"}),e(h,{label:"Dark",value:"dark"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"CompositeOperation"},{default:a(()=>[e(I,{style:{width:"400px"},modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=t=>r.value=t),filterable:"",placeholder:"please input composite operation",onChange:k},{default:a(()=>[(f(),C(W,null,q(b,t=>e(N,{key:t,label:t,value:t},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"CompositeTimes"},{default:a(()=>[e(F,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=t=>u.value=t),onChange:x},null,8,["modelValue"])]),_:1}),e(m,{label:"FillColor"},{default:a(()=>[e(P,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=t=>d.value=t),onChange:w},null,8,["modelValue"])]),_:1})]),_:1}),o[6]||(o[6]=s("div",{class:"title"},"Result",-1)),e(g,{style:{width:"400px",height:"400px"},src:v.value,"preview-src-list":[v.value],fit:"cover"},null,8,["src","preview-src-list"])])])}}}),oe=z(H,[["__scopeId","data-v-b9deef4a"]]);export{ee as __pageData,oe as default};
