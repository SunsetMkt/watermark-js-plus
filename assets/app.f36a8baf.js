import{L as r,d as u,M as o,a5 as c,u as d,y as l,v as f,a6 as m,a7 as h,a8 as A,a9 as v,aa as _,ab as g,ac as P,ad as y,ae as w,af as C,ag as E,ah as R,ai as D}from"./chunks/framework.33d0ee6e.js";import{t as b}from"./chunks/theme.be3bb610.js";const T={...b,enhanceApp:async({app:e,router:a,siteData:t,isServer:n})=>{r(()=>import("./chunks/index.a7d1c1f1.js"),["assets/chunks/index.a7d1c1f1.js","assets/chunks/framework.33d0ee6e.js","assets/chunks/upload.5cd05022.js","assets/chunks/index.b5e79f09.js"]).then(p=>{e.use(p)})}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),L=u({name:"VitePressApp",setup(){const{site:e}=d();return l(()=>{f(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),m(),h(),A(),s.setup&&s.setup(),()=>v(s.Layout)}});async function O(){const e=V(),a=S();a.provide(_,e);const t=g(e.route);return a.provide(P,t),a.component("Content",y),a.component("ClientOnly",w),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:C}),{app:a,router:e,data:t}}function S(){return E(L)}function V(){let e=o,a;return R(t=>{let n=D(t);return e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),r(()=>import(n),[])},s.NotFound)}o&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{c(a.route,t.site),e.mount("#app")})});export{O as createApp};
