import{W as l,C as d,D as i,c as u,i as g}from"./watermark.b4a1e88a.js";class b extends l{constructor(o={}){o.globalAlpha=.005,o.mode=d.blind,super(o)}static decode(o){const e=Object.assign({url:"",fillColor:"#000",compositeOperation:"color-burn",mode:i.canvas},o);if(!!e.url&&e.mode===i.canvas){const a=new Image;a.src=e.url,a.onload=()=>{var s;const{width:r,height:n}=a,c=l.createCanvas(r,n),t=c.getContext("2d");if(t===null)throw new Error("get context error");t.drawImage(a,0,0,r,n),t.globalCompositeOperation=e.compositeOperation,t.fillStyle=e.fillColor,t.fillRect(0,0,r,n);const m=u(c);e.onSuccess&&g(e.onSuccess)&&((s=e.onSuccess)==null||s.call(e,m))}}}}export{b as B};