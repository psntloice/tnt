import{resolveComponent as c,mergeProps as i,useSSRContext as m}from"vue";import{ssrRenderAttrs as p,ssrRenderStyle as s,ssrRenderComponent as u}from"vue/server-renderer";import{_ as f}from"../server-entry.js";import"quasar";import"quasar/wrappers/index.mjs";import"vue-router";const o={};function a(r,e,t,d){const l=c("q-btn");e(`<div${p(i({class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},d))}><div><div style="${s({"font-size":"30vh"})}"> 404 </div><div class="text-h2" style="${s({opacity:".4"})}"> Oops. Nothing here... </div>`),e(u(l,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""},null,t)),e("</div></div>")}const n=o.setup;o.setup=(r,e)=>{const t=m();return(t.modules||(t.modules=new Set)).add("src/pages/ErrorNotFound.vue"),n?n(r,e):void 0};const h=f(o,[["ssrRender",a],["__file","ErrorNotFound.vue"]]);export{h as default};
