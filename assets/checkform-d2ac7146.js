import{g as je,z as ye,W as qt,Q as he,R as Qe,r as C,j as E,d as k,u as Ee,C as ae,G as Xe,H as se,a1 as et,aC as Te,o as oe,c as Se,K as re,q as J,s as j,h as tt,az as rt,U as jt,i as fe,aD as be,t as Et,I as nt,k as it,J as Tt,D as St,b as $,F as Pt,E as at,Y as $t,a5 as It,aE as Mt,B as Ve,w as B,n as Rt,L as Vt,v as Ne,e as we,a0 as Le,M as Be,a as le,aF as Nt,O as Lt,a2 as Bt,f as Ct}from"./index-6283116f.js";import{f as st,S as Ce,g as ot,b as Wt,D as Dt,F as ft,w as lt,z as me,E as Ut,a as zt}from"./el-input-8da4f217.js";import{j as de,k as ut,l as Pe,q as dt,s as Gt,b as Kt,g as kt,r as Yt,t as ct,o as Jt,d as $e,u as ue,v as pt,m as Zt,e as Ht,n as Qt,p as Xt,S as er,c as tr}from"./_initCloneObject-7880eed9.js";function rr(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}function Fe(){if(!arguments.length)return[];var r=arguments[0];return st(r)?r:[r]}function nr(r,e){return r&&de(e,ut(e),r)}function ir(r,e){return r&&de(e,Pe(e),r)}function ar(r,e){return de(r,dt(r),e)}var sr=Object.getOwnPropertySymbols,or=sr?function(r){for(var e=[];r;)Kt(e,dt(r)),r=kt(r);return e}:Gt;const gt=or;function fr(r,e){return de(r,gt(r),e)}function lr(r){return Yt(r,Pe,gt)}var ur=Object.prototype,dr=ur.hasOwnProperty;function cr(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&dr.call(r,"index")&&(t.index=r.index,t.input=r.input),t}function pr(r,e){var t=e?ct(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var gr=/\w*$/;function mr(r){var e=new r.constructor(r.source,gr.exec(r));return e.lastIndex=r.lastIndex,e}var We=Ce?Ce.prototype:void 0,De=We?We.valueOf:void 0;function vr(r){return De?Object(De.call(r)):{}}var yr="[object Boolean]",hr="[object Date]",br="[object Map]",wr="[object Number]",Fr="[object RegExp]",_r="[object Set]",xr="[object String]",Ar="[object Symbol]",Or="[object ArrayBuffer]",qr="[object DataView]",jr="[object Float32Array]",Er="[object Float64Array]",Tr="[object Int8Array]",Sr="[object Int16Array]",Pr="[object Int32Array]",$r="[object Uint8Array]",Ir="[object Uint8ClampedArray]",Mr="[object Uint16Array]",Rr="[object Uint32Array]";function Vr(r,e,t){var n=r.constructor;switch(e){case Or:return ct(r);case yr:case hr:return new n(+r);case qr:return pr(r,t);case jr:case Er:case Tr:case Sr:case Pr:case $r:case Ir:case Mr:case Rr:return Jt(r,t);case br:return new n;case wr:case xr:return new n(r);case Fr:return mr(r);case _r:return new n;case Ar:return vr(r)}}var Nr="[object Map]";function Lr(r){return ot(r)&&$e(r)==Nr}var Ue=ue&&ue.isMap,Br=Ue?pt(Ue):Lr;const Cr=Br;var Wr="[object Set]";function Dr(r){return ot(r)&&$e(r)==Wr}var ze=ue&&ue.isSet,Ur=ze?pt(ze):Dr;const zr=Ur;var Gr=1,Kr=2,kr=4,mt="[object Arguments]",Yr="[object Array]",Jr="[object Boolean]",Zr="[object Date]",Hr="[object Error]",vt="[object Function]",Qr="[object GeneratorFunction]",Xr="[object Map]",en="[object Number]",yt="[object Object]",tn="[object RegExp]",rn="[object Set]",nn="[object String]",an="[object Symbol]",sn="[object WeakMap]",on="[object ArrayBuffer]",fn="[object DataView]",ln="[object Float32Array]",un="[object Float64Array]",dn="[object Int8Array]",cn="[object Int16Array]",pn="[object Int32Array]",gn="[object Uint8Array]",mn="[object Uint8ClampedArray]",vn="[object Uint16Array]",yn="[object Uint32Array]",A={};A[mt]=A[Yr]=A[on]=A[fn]=A[Jr]=A[Zr]=A[ln]=A[un]=A[dn]=A[cn]=A[pn]=A[Xr]=A[en]=A[yt]=A[tn]=A[rn]=A[nn]=A[an]=A[gn]=A[mn]=A[vn]=A[yn]=!0;A[Hr]=A[vt]=A[sn]=!1;function ne(r,e,t,n,i,s){var a,o=e&Gr,u=e&Kr,v=e&kr;if(t&&(a=i?t(r,n,i,s):t(r)),a!==void 0)return a;if(!Wt(r))return r;var f=st(r);if(f){if(a=cr(r),!o)return Zt(r,a)}else{var c=$e(r),h=c==vt||c==Qr;if(Ht(r))return Qt(r,o);if(c==yt||c==mt||h&&!i){if(a=u||h?{}:Xt(r),!o)return u?fr(r,ir(a,r)):ar(r,nr(a,r))}else{if(!A[c])return i?r:{};a=Vr(r,c,o)}}s||(s=new er);var _=s.get(r);if(_)return _;s.set(r,a),zr(r)?r.forEach(function(g){a.add(ne(g,e,t,g,r,s))}):Cr(r)&&r.forEach(function(g,l){a.set(l,ne(g,e,t,l,r,s))});var q=v?u?lr:tr:u?Pe:ut,p=f?void 0:q(r);return rr(p||r,function(g,l){p&&(l=g,g=r[l]),Dt(a,l,ne(g,e,t,l,r,s))}),a}var hn=4;function Ge(r){return ne(r,hn)}const bn=je({size:{type:String,values:ft},disabled:Boolean}),wn=je({...bn,model:Object,rules:{type:ye(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),Fn={validate:(r,e,t)=>(qt(r)||he(r))&&Qe(e)&&he(t)};function _n(){const r=C([]),e=E(()=>{if(!r.value.length)return"0";const s=Math.max(...r.value);return s?`${s}px`:""});function t(s){const a=r.value.indexOf(s);return a===-1&&e.value,a}function n(s,a){if(s&&a){const o=t(a);r.value.splice(o,1,s)}else s&&r.value.push(s)}function i(s){const a=t(s);a>-1&&r.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const ee=(r,e)=>{const t=Fe(e);return t.length>0?r.filter(n=>n.prop&&t.includes(n.prop)):r},xn="ElForm",An=k({name:xn}),On=k({...An,props:wn,emits:Fn,setup(r,{expose:e,emit:t}){const n=r,i=[],s=lt(),a=Ee("form"),o=E(()=>{const{labelPosition:y,inline:d}=n;return[a.b(),a.m(s.value||"default"),{[a.m(`label-${y}`)]:y,[a.m("inline")]:d}]}),u=y=>{i.push(y)},v=y=>{y.prop&&i.splice(i.indexOf(y),1)},f=(y=[])=>{n.model&&ee(i,y).forEach(d=>d.resetField())},c=(y=[])=>{ee(i,y).forEach(d=>d.clearValidate())},h=E(()=>!!n.model),_=y=>{if(i.length===0)return[];const d=ee(i,y);return d.length?d:[]},q=async y=>g(void 0,y),p=async(y=[])=>{if(!h.value)return!1;const d=_(y);if(d.length===0)return!0;let w={};for(const x of d)try{await x.validate("")}catch(O){w={...w,...O}}return Object.keys(w).length===0?!0:Promise.reject(w)},g=async(y=[],d)=>{const w=!rt(d);try{const x=await p(y);return x===!0&&(d==null||d(x)),x}catch(x){if(x instanceof Error)throw x;const O=x;return n.scrollToError&&l(Object.keys(O)[0]),d==null||d(!1,O),w&&Promise.reject(O)}},l=y=>{var d;const w=ee(i,y)[0];w&&((d=w.$el)==null||d.scrollIntoView(n.scrollIntoViewOptions))};return ae(()=>n.rules,()=>{n.validateOnRuleChange&&q().catch(y=>jt())},{deep:!0}),Xe(Te,se({...et(n),emit:t,resetFields:f,clearValidate:c,validateField:g,addField:u,removeField:v,..._n()})),e({validate:q,validateField:g,resetFields:f,clearValidate:c,scrollToField:l}),(y,d)=>(oe(),Se("form",{class:J(j(o))},[re(y.$slots,"default")],2))}});var qn=tt(On,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function D(){return D=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},D.apply(this,arguments)}function jn(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Q(r,e)}function _e(r){return _e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_e(r)}function Q(r,e){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Q(r,e)}function En(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ie(r,e,t){return En()?ie=Reflect.construct.bind():ie=function(i,s,a){var o=[null];o.push.apply(o,s);var u=Function.bind.apply(i,o),v=new u;return a&&Q(v,a.prototype),v},ie.apply(null,arguments)}function Tn(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function xe(r){var e=typeof Map=="function"?new Map:void 0;return xe=function(n){if(n===null||!Tn(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return ie(n,arguments,_e(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Q(i,n)},xe(r)}var Sn=/%[sdj%]/g,Pn=function(){};typeof process<"u"&&process.env;function Ae(r){if(!r||!r.length)return null;var e={};return r.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function M(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var i=0,s=t.length;if(typeof r=="function")return r.apply(null,t);if(typeof r=="string"){var a=r.replace(Sn,function(o){if(o==="%%")return"%";if(i>=s)return o;switch(o){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return o}});return a}return r}function $n(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function T(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||$n(e)&&typeof r=="string"&&!r)}function In(r,e,t){var n=[],i=0,s=r.length;function a(o){n.push.apply(n,o||[]),i++,i===s&&t(n)}r.forEach(function(o){e(o,a)})}function Ke(r,e,t){var n=0,i=r.length;function s(a){if(a&&a.length){t(a);return}var o=n;n=n+1,o<i?e(r[o],s):t([])}s([])}function Mn(r){var e=[];return Object.keys(r).forEach(function(t){e.push.apply(e,r[t]||[])}),e}var ke=function(r){jn(e,r);function e(t,n){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=t,i.fields=n,i}return e}(xe(Error));function Rn(r,e,t,n,i){if(e.first){var s=new Promise(function(h,_){var q=function(l){return n(l),l.length?_(new ke(l,Ae(l))):h(i)},p=Mn(r);Ke(p,t,q)});return s.catch(function(h){return h}),s}var a=e.firstFields===!0?Object.keys(r):e.firstFields||[],o=Object.keys(r),u=o.length,v=0,f=[],c=new Promise(function(h,_){var q=function(g){if(f.push.apply(f,g),v++,v===u)return n(f),f.length?_(new ke(f,Ae(f))):h(i)};o.length||(n(f),h(i)),o.forEach(function(p){var g=r[p];a.indexOf(p)!==-1?Ke(g,t,q):In(g,t,q)})});return c.catch(function(h){return h}),c}function Vn(r){return!!(r&&r.message!==void 0)}function Nn(r,e){for(var t=r,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function Ye(r,e){return function(t){var n;return r.fullFields?n=Nn(e,r.fullFields):n=e[t.field||r.fullField],Vn(t)?(t.field=t.field||r.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||r.fullField}}}function Je(r,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof r[t]=="object"?r[t]=D({},r[t],n):r[t]=n}}return r}var ht=function(e,t,n,i,s,a){e.required&&(!n.hasOwnProperty(e.field)||T(t,a||e.type))&&i.push(M(s.messages.required,e.fullField))},Ln=function(e,t,n,i,s){(/^\s+$/.test(t)||t==="")&&i.push(M(s.messages.whitespace,e.fullField))},te,Bn=function(){if(te)return te;var r="[a-fA-F\\d:]",e=function(w){return w&&w.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+i+"$"),u=function(w){return w&&w.exact?s:new RegExp("(?:"+e(w)+t+e(w)+")|(?:"+e(w)+i+e(w)+")","g")};u.v4=function(d){return d&&d.exact?a:new RegExp(""+e(d)+t+e(d),"g")},u.v6=function(d){return d&&d.exact?o:new RegExp(""+e(d)+i+e(d),"g")};var v="(?:(?:[a-z]+:)?//)",f="(?:\\S+(?::\\S*)?@)?",c=u.v4().source,h=u.v6().source,_="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",q="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",p="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",g="(?::\\d{2,5})?",l='(?:[/?#][^\\s"]*)?',y="(?:"+v+"|www\\.)"+f+"(?:localhost|"+c+"|"+h+"|"+_+q+p+")"+g+l;return te=new RegExp("(?:^"+y+"$)","i"),te},Ze={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Z={integer:function(e){return Z.number(e)&&parseInt(e,10)===e},float:function(e){return Z.number(e)&&!Z.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!Z.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Ze.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Bn())},hex:function(e){return typeof e=="string"&&!!e.match(Ze.hex)}},Cn=function(e,t,n,i,s){if(e.required&&t===void 0){ht(e,t,n,i,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?Z[o](t)||i.push(M(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&i.push(M(s.messages.types[o],e.fullField,e.type))},Wn=function(e,t,n,i,s){var a=typeof e.len=="number",o=typeof e.min=="number",u=typeof e.max=="number",v=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,f=t,c=null,h=typeof t=="number",_=typeof t=="string",q=Array.isArray(t);if(h?c="number":_?c="string":q&&(c="array"),!c)return!1;q&&(f=t.length),_&&(f=t.replace(v,"_").length),a?f!==e.len&&i.push(M(s.messages[c].len,e.fullField,e.len)):o&&!u&&f<e.min?i.push(M(s.messages[c].min,e.fullField,e.min)):u&&!o&&f>e.max?i.push(M(s.messages[c].max,e.fullField,e.max)):o&&u&&(f<e.min||f>e.max)&&i.push(M(s.messages[c].range,e.fullField,e.min,e.max))},K="enum",Dn=function(e,t,n,i,s){e[K]=Array.isArray(e[K])?e[K]:[],e[K].indexOf(t)===-1&&i.push(M(s.messages[K],e.fullField,e[K].join(", ")))},Un=function(e,t,n,i,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(M(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(M(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},b={required:ht,whitespace:Ln,type:Cn,range:Wn,enum:Dn,pattern:Un},zn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t,"string")&&!e.required)return n();b.required(e,t,i,a,s,"string"),T(t,"string")||(b.type(e,t,i,a,s),b.range(e,t,i,a,s),b.pattern(e,t,i,a,s),e.whitespace===!0&&b.whitespace(e,t,i,a,s))}n(a)},Gn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t)&&!e.required)return n();b.required(e,t,i,a,s),t!==void 0&&b.type(e,t,i,a,s)}n(a)},Kn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),T(t)&&!e.required)return n();b.required(e,t,i,a,s),t!==void 0&&(b.type(e,t,i,a,s),b.range(e,t,i,a,s))}n(a)},kn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t)&&!e.required)return n();b.required(e,t,i,a,s),t!==void 0&&b.type(e,t,i,a,s)}n(a)},Yn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t)&&!e.required)return n();b.required(e,t,i,a,s),T(t)||b.type(e,t,i,a,s)}n(a)},Jn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t)&&!e.required)return n();b.required(e,t,i,a,s),t!==void 0&&(b.type(e,t,i,a,s),b.range(e,t,i,a,s))}n(a)},Zn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t)&&!e.required)return n();b.required(e,t,i,a,s),t!==void 0&&(b.type(e,t,i,a,s),b.range(e,t,i,a,s))}n(a)},Hn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return n();b.required(e,t,i,a,s,"array"),t!=null&&(b.type(e,t,i,a,s),b.range(e,t,i,a,s))}n(a)},Qn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t)&&!e.required)return n();b.required(e,t,i,a,s),t!==void 0&&b.type(e,t,i,a,s)}n(a)},Xn="enum",ei=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t)&&!e.required)return n();b.required(e,t,i,a,s),t!==void 0&&b[Xn](e,t,i,a,s)}n(a)},ti=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t,"string")&&!e.required)return n();b.required(e,t,i,a,s),T(t,"string")||b.pattern(e,t,i,a,s)}n(a)},ri=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t,"date")&&!e.required)return n();if(b.required(e,t,i,a,s),!T(t,"date")){var u;t instanceof Date?u=t:u=new Date(t),b.type(e,u,i,a,s),u&&b.range(e,u.getTime(),i,a,s)}}n(a)},ni=function(e,t,n,i,s){var a=[],o=Array.isArray(t)?"array":typeof t;b.required(e,t,i,a,s,o),n(a)},ve=function(e,t,n,i,s){var a=e.type,o=[],u=e.required||!e.required&&i.hasOwnProperty(e.field);if(u){if(T(t,a)&&!e.required)return n();b.required(e,t,i,o,s,a),T(t,a)||b.type(e,t,i,o,s)}n(o)},ii=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(T(t)&&!e.required)return n();b.required(e,t,i,a,s)}n(a)},H={string:zn,method:Gn,number:Kn,boolean:kn,regexp:Yn,integer:Jn,float:Zn,array:Hn,object:Qn,enum:ei,pattern:ti,date:ri,url:ve,hex:ve,email:ve,required:ni,any:ii};function Oe(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var qe=Oe(),X=function(){function r(t){this.rules=null,this._messages=qe,this.define(t)}var e=r.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];i.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=Je(Oe(),n)),this._messages},e.validate=function(n,i,s){var a=this;i===void 0&&(i={}),s===void 0&&(s=function(){});var o=n,u=i,v=s;if(typeof u=="function"&&(v=u,u={}),!this.rules||Object.keys(this.rules).length===0)return v&&v(null,o),Promise.resolve(o);function f(p){var g=[],l={};function y(w){if(Array.isArray(w)){var x;g=(x=g).concat.apply(x,w)}else g.push(w)}for(var d=0;d<p.length;d++)y(p[d]);g.length?(l=Ae(g),v(g,l)):v(null,o)}if(u.messages){var c=this.messages();c===qe&&(c=Oe()),Je(c,u.messages),u.messages=c}else u.messages=this.messages();var h={},_=u.keys||Object.keys(this.rules);_.forEach(function(p){var g=a.rules[p],l=o[p];g.forEach(function(y){var d=y;typeof d.transform=="function"&&(o===n&&(o=D({},o)),l=o[p]=d.transform(l)),typeof d=="function"?d={validator:d}:d=D({},d),d.validator=a.getValidationMethod(d),d.validator&&(d.field=p,d.fullField=d.fullField||p,d.type=a.getType(d),h[p]=h[p]||[],h[p].push({rule:d,value:l,source:o,field:p}))})});var q={};return Rn(h,u,function(p,g){var l=p.rule,y=(l.type==="object"||l.type==="array")&&(typeof l.fields=="object"||typeof l.defaultField=="object");y=y&&(l.required||!l.required&&p.value),l.field=p.field;function d(O,V){return D({},V,{fullField:l.fullField+"."+O,fullFields:l.fullFields?[].concat(l.fullFields,[O]):[O]})}function w(O){O===void 0&&(O=[]);var V=Array.isArray(O)?O:[O];!u.suppressWarning&&V.length&&r.warning("async-validator:",V),V.length&&l.message!==void 0&&(V=[].concat(l.message));var I=V.map(Ye(l,o));if(u.first&&I.length)return q[l.field]=1,g(I);if(!y)g(I);else{if(l.required&&!p.value)return l.message!==void 0?I=[].concat(l.message).map(Ye(l,o)):u.error&&(I=[u.error(l,M(u.messages.required,l.field))]),g(I);var W={};l.defaultField&&Object.keys(p.value).map(function(N){W[N]=l.defaultField}),W=D({},W,p.rule.fields);var Y={};Object.keys(W).forEach(function(N){var R=W[N],ce=Array.isArray(R)?R:[R];Y[N]=ce.map(d.bind(null,N))});var U=new r(Y);U.messages(u.messages),p.rule.options&&(p.rule.options.messages=u.messages,p.rule.options.error=u.error),U.validate(p.value,p.rule.options||u,function(N){var R=[];I&&I.length&&R.push.apply(R,I),N&&N.length&&R.push.apply(R,N),g(R.length?R:null)})}}var x;if(l.asyncValidator)x=l.asyncValidator(l,p.value,w,p.source,u);else if(l.validator){try{x=l.validator(l,p.value,w,p.source,u)}catch(O){console.error==null||console.error(O),u.suppressValidatorError||setTimeout(function(){throw O},0),w(O.message)}x===!0?w():x===!1?w(typeof l.message=="function"?l.message(l.fullField||l.field):l.message||(l.fullField||l.field)+" fails"):x instanceof Array?w(x):x instanceof Error&&w(x.message)}x&&x.then&&x.then(function(){return w()},function(O){return w(O)})},function(p){f(p)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!H.hasOwnProperty(n.type))throw new Error(M("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),s=i.indexOf("message");return s!==-1&&i.splice(s,1),i.length===1&&i[0]==="required"?H.required:H[this.getType(n)]||void 0},r}();X.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");H[e]=t};X.warning=Pn;X.messages=qe;X.validators=H;const ai=["","error","validating","success"],si=je({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:ye([String,Array])},required:{type:Boolean,default:void 0},rules:{type:ye([Object,Array])},error:String,validateStatus:{type:String,values:ai},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:ft}}),He="ElLabelWrap";var oi=k({name:He,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(r,{slots:e}){const t=fe(Te,void 0),n=fe(be);n||Et(He,"usage: <el-form-item><label-wrap /></el-form-item>");const i=Ee("form"),s=C(),a=C(0),o=()=>{var f;if((f=s.value)!=null&&f.firstElementChild){const c=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(c))}else return 0},u=(f="update")=>{at(()=>{e.default&&r.isAutoWidth&&(f==="update"?a.value=o():f==="remove"&&(t==null||t.deregisterLabelWidth(a.value)))})},v=()=>u("update");return nt(()=>{v()}),it(()=>{u("remove")}),Tt(()=>v()),ae(a,(f,c)=>{r.updateAll&&(t==null||t.registerLabelWidth(f,c))}),St(E(()=>{var f,c;return(c=(f=s.value)==null?void 0:f.firstElementChild)!=null?c:null}),v),()=>{var f,c;if(!e)return null;const{isAutoWidth:h}=r;if(h){const _=t==null?void 0:t.autoLabelWidth,q=n==null?void 0:n.hasLabel,p={};if(q&&_&&_!=="auto"){const g=Math.max(0,Number.parseInt(_,10)-a.value),l=t.labelPosition==="left"?"marginRight":"marginLeft";g&&(p[l]=`${g}px`)}return $("div",{ref:s,class:[i.be("item","label-wrap")],style:p},[(f=e.default)==null?void 0:f.call(e)])}else return $(Pt,{ref:s},[(c=e.default)==null?void 0:c.call(e)])}}});const fi=["role","aria-labelledby"],li=k({name:"ElFormItem"}),ui=k({...li,props:si,setup(r,{expose:e}){const t=r,n=$t(),i=fe(Te,void 0),s=fe(be,void 0),a=lt(void 0,{formItem:!1}),o=Ee("form-item"),u=It().value,v=C([]),f=C(""),c=Mt(f,100),h=C(""),_=C();let q,p=!1;const g=E(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const m=Ve(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return m?{width:m}:{}}),l=E(()=>{if((i==null?void 0:i.labelPosition)==="top"||i!=null&&i.inline)return{};if(!t.label&&!t.labelWidth&&W)return{};const m=Ve(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return!t.label&&!n.label?{marginLeft:m}:{}}),y=E(()=>[o.b(),o.m(a.value),o.is("error",f.value==="error"),o.is("validating",f.value==="validating"),o.is("success",f.value==="success"),o.is("required",ce.value||t.required),o.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),(i==null?void 0:i.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[o.m("feedback")]:i==null?void 0:i.statusIcon}]),d=E(()=>Qe(t.inlineMessage)?t.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),w=E(()=>[o.e("error"),{[o.em("error","inline")]:d.value}]),x=E(()=>t.prop?he(t.prop)?t.prop:t.prop.join("."):""),O=E(()=>!!(t.label||n.label)),V=E(()=>t.for||v.value.length===1?v.value[0]:void 0),I=E(()=>!V.value&&O.value),W=!!s,Y=E(()=>{const m=i==null?void 0:i.model;if(!(!m||!t.prop))return me(m,t.prop).value}),U=E(()=>{const{required:m}=t,F=[];t.rules&&F.push(...Fe(t.rules));const P=i==null?void 0:i.rules;if(P&&t.prop){const S=me(P,t.prop).value;S&&F.push(...Fe(S))}if(m!==void 0){const S=F.map((L,G)=>[L,G]).filter(([L])=>Object.keys(L).includes("required"));if(S.length>0)for(const[L,G]of S)L.required!==m&&(F[G]={...L,required:m});else F.push({required:m})}return F}),N=E(()=>U.value.length>0),R=m=>U.value.filter(P=>!P.trigger||!m?!0:Array.isArray(P.trigger)?P.trigger.includes(m):P.trigger===m).map(({trigger:P,...S})=>S),ce=E(()=>U.value.some(m=>m.required)),wt=E(()=>{var m;return c.value==="error"&&t.showMessage&&((m=i==null?void 0:i.showMessage)!=null?m:!0)}),Ie=E(()=>`${t.label||""}${(i==null?void 0:i.labelSuffix)||""}`),z=m=>{f.value=m},Ft=m=>{var F,P;const{errors:S,fields:L}=m;(!S||!L)&&console.error(m),z("error"),h.value=S?(P=(F=S==null?void 0:S[0])==null?void 0:F.message)!=null?P:`${t.prop} is required`:"",i==null||i.emit("validate",t.prop,!1,h.value)},_t=()=>{z("success"),i==null||i.emit("validate",t.prop,!0,"")},xt=async m=>{const F=x.value;return new X({[F]:m}).validate({[F]:Y.value},{firstFields:!0}).then(()=>(_t(),!0)).catch(S=>(Ft(S),Promise.reject(S)))},Me=async(m,F)=>{if(p||!t.prop)return!1;const P=rt(F);if(!N.value)return F==null||F(!1),!1;const S=R(m);return S.length===0?(F==null||F(!0),!0):(z("validating"),xt(S).then(()=>(F==null||F(!0),!0)).catch(L=>{const{fields:G}=L;return F==null||F(!1,G),P?!1:Promise.reject(G)}))},pe=()=>{z(""),h.value="",p=!1},Re=async()=>{const m=i==null?void 0:i.model;if(!m||!t.prop)return;const F=me(m,t.prop);p=!0,F.value=Ge(q),await at(),pe(),p=!1},At=m=>{v.value.includes(m)||v.value.push(m)},Ot=m=>{v.value=v.value.filter(F=>F!==m)};ae(()=>t.error,m=>{h.value=m||"",z(m?"error":"")},{immediate:!0}),ae(()=>t.validateStatus,m=>z(m||""));const ge=se({...et(t),$el:_,size:a,validateState:f,labelId:u,inputIds:v,isGroup:I,hasLabel:O,addInputId:At,removeInputId:Ot,resetField:Re,clearValidate:pe,validate:Me});return Xe(be,ge),nt(()=>{t.prop&&(i==null||i.addField(ge),q=Ge(Y.value))}),it(()=>{i==null||i.removeField(ge)}),e({size:a,validateMessage:h,validateState:f,validate:Me,clearValidate:pe,resetField:Re}),(m,F)=>{var P;return oe(),Se("div",{ref_key:"formItemRef",ref:_,class:J(j(y)),role:j(I)?"group":void 0,"aria-labelledby":j(I)?j(u):void 0},[$(j(oi),{"is-auto-width":j(g).width==="auto","update-all":((P=j(i))==null?void 0:P.labelWidth)==="auto"},{default:B(()=>[j(O)?(oe(),Rt(Vt(j(V)?"label":"div"),{key:0,id:j(u),for:j(V),class:J(j(o).e("label")),style:Ne(j(g))},{default:B(()=>[re(m.$slots,"label",{label:j(Ie)},()=>[we(Le(j(Ie)),1)])]),_:3},8,["id","for","class","style"])):Be("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),le("div",{class:J(j(o).e("content")),style:Ne(j(l))},[re(m.$slots,"default"),$(Nt,{name:`${j(o).namespace.value}-zoom-in-top`},{default:B(()=>[j(wt)?re(m.$slots,"error",{key:0,error:h.value},()=>[le("div",{class:J(j(w))},Le(h.value),3)]):Be("v-if",!0)]),_:3},8,["name"])],6)],10,fi)}}});var bt=tt(ui,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const di=Lt(qn,{FormItem:bt}),ci=Bt(bt);const pi={class:"check-layout"},gi={class:"form-layout"},hi=k({__name:"checkform",setup(r){const e=C(),t=(v,f,c)=>{if(!f)return c(new Error("请输入年龄"));setTimeout(()=>{Number.isInteger(f)?f<18?c(new Error("您未成年")):c():c(new Error("请输入一个整数"))},1e3)},n=(v,f,c)=>{if(f==="")c(new Error("请输入密码"));else{if(s.checkPass!==""){if(!e.value)return;e.value.validateField("checkPass",()=>null)}c()}},i=(v,f,c)=>{f===""?c(new Error("请再次输入密码")):f!==s.pass?c(new Error("两次密码不相同!")):c()},s=se({pass:"",checkPass:"",age:""}),a=se({pass:[{validator:n,trigger:"blur"}],checkPass:[{validator:i,trigger:"blur"}],age:[{validator:t,trigger:"blur"}]}),o=v=>{v&&v.validate(f=>{if(f)console.log("submit!");else return console.log("error submit!"),!1})},u=v=>{v&&v.resetFields()};return(v,f)=>{const c=Ct("mymenu"),h=Ut,_=ci,q=zt,p=di;return oe(),Se("div",pi,[le("div",null,[$(c)]),le("div",gi,[$(p,{ref_key:"ruleFormRef",ref:e,model:s,"status-icon":"",rules:a,"label-width":"120px",class:"demo-ruleForm"},{default:B(()=>[$(_,{label:"Password",prop:"pass"},{default:B(()=>[$(h,{modelValue:s.pass,"onUpdate:modelValue":f[0]||(f[0]=g=>s.pass=g),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),$(_,{label:"Confirm",prop:"checkPass"},{default:B(()=>[$(h,{modelValue:s.checkPass,"onUpdate:modelValue":f[1]||(f[1]=g=>s.checkPass=g),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),$(_,{label:"Age",prop:"age"},{default:B(()=>[$(h,{modelValue:s.age,"onUpdate:modelValue":f[2]||(f[2]=g=>s.age=g),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),$(_,null,{default:B(()=>[$(q,{type:"primary",onClick:f[3]||(f[3]=g=>o(e.value))},{default:B(()=>[we("提交")]),_:1}),$(q,{onClick:f[4]||(f[4]=g=>u(e.value))},{default:B(()=>[we("Reset")]),_:1})]),_:1})]),_:1},8,["model","rules"])])])}}});export{hi as default};
