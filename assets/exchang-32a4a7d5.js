import{g as V,d,u as b,j as M,o as v,n as T,w as a,K as N,q as F,s as I,L as q,h as D,O as K,r as i,c as P,b as t,a as m,F as $,e as n,a0 as p,f as j}from"./index-cdfb13cb.js";import{J,B as L,E as O,a as U}from"./el-input-1d9b5350.js";const A=V({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:J,default:""},truncated:{type:Boolean},tag:{type:String,default:"span"}}),G=d({name:"ElText"}),H=d({...G,props:A,setup(f){const o=f,l=L(),s=b("text"),r=M(()=>[s.b(),s.m(o.type),s.m(l.value),s.is("truncated",o.truncated)]);return(u,_)=>(v(),T(q(u.tag),{class:F(I(r))},{default:a(()=>[N(u.$slots,"default")]),_:3},8,["class"]))}});var Q=D(H,[["__file","/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]);const R=K(Q);const W={class:"exchang_input"},X={class:"exchang_submit"},Y={class:"money"},te=d({__name:"exchang",setup(f){const o=i(""),l=i(0),s=i(0),r=i(0),u=i(0),_=i(0),h=()=>{let e=parseInt(o.value);y(e)},y=e=>{l.value=0,e/50>=1&&(l.value=Math.floor(e/50),e=e%50),g(e)},g=e=>{s.value=0,e/20>=1&&(s.value=Math.floor(e/20),e=e%20),k(e)},k=e=>{r.value=0,e/10>=1&&(r.value=Math.floor(e/10),e=e%10),w(e)},w=e=>{u.value=0,e/5>=1&&(u.value=Math.floor(e/5),e=e%5),z(e)},z=e=>{_.value=0,e/1>=1&&(_.value=Math.floor(e/1),e=e%1)};return(e,x)=>{const S=j("mymenu"),c=R,B=O,C=U;return v(),P($,null,[t(S),m("div",null,[t(c,{class:"mx-1"},{default:a(()=>[n("找零系统")]),_:1}),m("div",W,[t(B,{modelValue:o.value,"onUpdate:modelValue":x[0]||(x[0]=E=>o.value=E),size:"large",style:{width:"500px"},placeholder:"请输入找零金额"},null,8,["modelValue"])]),m("div",X,[t(C,{type:"success",style:{width:"100px",height:"50px","font-size":"30px"},onClick:h},{default:a(()=>[n("计算")]),_:1})]),m("div",Y,[t(c,{class:"wushi",style:{"font-size":"30px",margin:"10px"}},{default:a(()=>[n("五十："+p(l.value)+"张",1)]),_:1}),t(c,{class:"ershi",style:{"font-size":"30px",margin:"10px"}},{default:a(()=>[n("二十："+p(s.value)+"张",1)]),_:1}),t(c,{class:"shi",style:{"font-size":"30px",margin:"10px"}},{default:a(()=>[n("十块："+p(r.value)+"张",1)]),_:1}),t(c,{class:"wukuai",style:{"font-size":"30px",margin:"10px"}},{default:a(()=>[n("五块："+p(u.value)+"张",1)]),_:1}),t(c,{class:"yikuai",style:{"font-size":"30px",margin:"10px"}},{default:a(()=>[n("一块："+p(_.value)+"张",1)]),_:1})])])],64)}}});export{te as default};
