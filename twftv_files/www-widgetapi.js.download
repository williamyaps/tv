(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var p=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function q(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&p(c,a,{configurable:!0,writable:!0,value:b})}}
q("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(h||"")+"_"+e++,h)}
function c(h,l){this.g=h;p(this,"description",{configurable:!0,writable:!0,value:l})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ca[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});
function da(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
var ea=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},u;
if(typeof Object.setPrototypeOf=="function")u=Object.setPrototypeOf;else{var v;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;v=ha.a;break a}catch(a){}v=!1}u=v?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=u;
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
q("Object.assign",function(a){return a||ja});
q("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
q("WeakMap",function(a){function b(f){this.g=(g+=Math.random()+1).toString();if(f){f=t(f);for(var k;!(k=f.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(f){var k=typeof f;return k==="object"&&f!==null||k==="function"}
function e(f){if(!w(f,l)){var k=new c;p(f,l,{value:k})}}
function h(f){var k=Object[f];k&&(Object[f]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var f=Object.seal({}),k=Object.seal({}),m=new a([[f,2],[k,3]]);if(m.get(f)!=2||m.get(k)!=3)return!1;m.delete(f);m.set(k,4);return!m.has(f)&&m.get(k)==4}catch(r){return!1}}())return a;
var l="$jscomp_hidden_"+Math.random();h("freeze");h("preventExtensions");h("seal");var g=0;b.prototype.set=function(f,k){if(!d(f))throw Error("Invalid WeakMap key");e(f);if(!w(f,l))throw Error("WeakMap key fail: "+f);f[l][this.g]=k;return this};
b.prototype.get=function(f){return d(f)&&w(f,l)?f[l][this.g]:void 0};
b.prototype.has=function(f){return d(f)&&w(f,l)&&w(f[l],this.g)};
b.prototype.delete=function(f){return d(f)&&w(f,l)&&w(f[l],this.g)?delete f[l][this.g]:!1};
return b});
q("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,f){var k=g[1];return da(function(){if(k){for(;k.head!=g[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:f(k)};k=null}return{done:!0,value:void 0}})}
function d(g,f){var k=f&&typeof f;k=="object"||k=="function"?h.has(f)?k=h.get(f):(k=""+ ++l,h.set(f,k)):k="p_"+f;var m=g[0][k];if(m&&w(g[0],k))for(g=0;g<m.length;g++){var r=m[g];if(f!==f&&r.key!==r.key||f===r.key)return{id:k,list:m,index:g,i:r}}return{id:k,list:m,index:-1,i:void 0}}
function e(g){this[0]={};this[1]=b();this.size=0;if(g){g=t(g);for(var f;!(f=g.next()).done;)f=f.value,this.set(f[0],f[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var g=Object.seal({x:4}),f=new a(t([[g,"s"]]));if(f.get(g)!="s"||f.size!=1||f.get({x:4})||f.set({x:4},"t")!=f||f.size!=2)return!1;var k=f.entries(),m=k.next();if(m.done||m.value[0]!=g||m.value[1]!="s")return!1;m=k.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!k.next().done?!1:!0}catch(r){return!1}}())return a;
var h=new WeakMap;e.prototype.set=function(g,f){g=g===0?0:g;var k=d(this,g);k.list||(k.list=this[0][k.id]=[]);k.i?k.i.value=f:(k.i={next:this[1],previous:this[1].previous,head:this[1],key:g,value:f},k.list.push(k.i),this[1].previous.next=k.i,this[1].previous=k.i,this.size++);return this};
e.prototype.delete=function(g){g=d(this,g);return g.i&&g.list?(g.list.splice(g.index,1),g.list.length||delete this[0][g.id],g.i.previous.next=g.i.next,g.i.next.previous=g.i.previous,g.i.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).i};
e.prototype.get=function(g){return(g=d(this,g).i)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,f){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,g.call(f,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var l=0;return e});
q("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,h=0;h<e;h++){var l=d[h];if(b.call(c,l,h,d)){b=l;break a}}b=void 0}return b}});
q("Set",function(a){function b(c){this.g=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),h=e.next();if(h.done||h.value[0]!=c||h.value[1]!=c)return!1;h=e.next();return h.done||h.value[0]==c||h.value[0].x!=4||h.value[1]!=h.value[0]?!1:e.next().done}catch(l){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(h){return c.call(d,h,h,e)})};
return b});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var x=this||self;function z(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function ka(a){return Object.prototype.hasOwnProperty.call(a,A)&&a[A]||(a[A]=++la)}
var A="closure_uid_"+(Math.random()*1E9>>>0),la=0;function ma(a,b,c){return a.call.apply(a.bind,arguments)}
function na(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function B(a,b,c){B=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ma:na;return B.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=x;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function oa(a,b){function c(){}
c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.O=function(d,e,h){for(var l=Array(arguments.length-2),g=2;g<arguments.length;g++)l[g-2]=arguments[g];return b.prototype[e].apply(d,l)}}
;var pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=typeof a==="string"?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
function qa(a,b){b=pa(a,b);b>=0&&Array.prototype.splice.call(a,b,1)}
function ra(a){return Array.prototype.concat.apply([],arguments)}
function sa(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function ta(a,b){this.j=a;this.l=b;this.h=0;this.g=null}
ta.prototype.get=function(){if(this.h>0){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.j();return a};var ua=/&/g,va=/</g,wa=/>/g,xa=/"/g,ya=/'/g,za=/\x00/g,Aa=/[\x00&<>"']/;function Ba(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function E(a){this.g=a}
E.prototype.toString=function(){return this.g};
var Ca=new E("about:invalid#zClosurez");function F(a){this.J=a}
function G(a){return new F(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Da=[G("data"),G("http"),G("https"),G("mailto"),G("ftp"),new F(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Ea(a){var b=b===void 0?Da:b;a:if(b=b===void 0?Da:b,!(a instanceof E)){for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof F&&d.J(a)){a=new E(a);break a}}a=void 0}return a||Ca}
var Fa=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;var Ga={N:0,L:1,M:2,0:"FORMATTED_HTML_CONTENT",1:"EMBEDDED_INTERNAL_CONTENT",2:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function H(a,b){b=Error.call(this,a+" cannot be used with intent "+Ga[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
var I=Error;H.prototype=ea(I.prototype);H.prototype.constructor=H;if(ia)ia(H,I);else for(var J in I)if(J!="prototype")if(Object.defineProperties){var Ha=Object.getOwnPropertyDescriptor(I,J);Ha&&Object.defineProperty(H,J,Ha)}else H[J]=I[J];H.G=I.prototype;
function Ia(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof E)if(b instanceof E)b=b.g;else throw Error("");else b=Fa.test(b)?b:void 0;b!==void 0&&(a.src=b)}
;function Ja(a){Aa.test(a)&&(a.indexOf("&")!=-1&&(a=a.replace(ua,"&amp;")),a.indexOf("<")!=-1&&(a=a.replace(va,"&lt;")),a.indexOf(">")!=-1&&(a=a.replace(wa,"&gt;")),a.indexOf('"')!=-1&&(a=a.replace(xa,"&quot;")),a.indexOf("'")!=-1&&(a=a.replace(ya,"&#39;")),a.indexOf("\x00")!=-1&&(a=a.replace(za,"&#0;")));return a}
;function Ka(){var a=document;var b="IFRAME";a.contentType==="application/xhtml+xml"&&(b=b.toLowerCase());return a.createElement(b)}
;var K;function La(){var a=x.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&Ba().indexOf("Presto")==-1&&(a=function(){var e=Ka();e.style.display="none";document.documentElement.appendChild(e);var h=e.contentWindow;e=h.document;e.open();e.close();var l="callImmediate"+Math.random(),g=h.location.protocol=="file:"?"*":h.location.protocol+"//"+h.location.host;e=B(function(f){if((g=="*"||f.origin==g)&&f.data==l)this.port1.onmessage()},this);
h.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){h.postMessage(l,g)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.C;c.C=null;e()}};
return function(e){d.next={C:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Ma(a){x.setTimeout(function(){throw a;},0)}
;function L(){this.h=this.g=null}
L.prototype.add=function(a,b){var c=Na.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
L.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Na=new ta(function(){return new M},function(a){return a.reset()});
function M(){this.next=this.scope=this.g=null}
M.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
M.prototype.reset=function(){this.next=this.scope=this.g=null};var N,O=!1,Oa=new L;function Pa(a){N||Qa();O||(N(),O=!0);Oa.add(a,void 0)}
function Qa(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);N=function(){a.then(Ra)}}else N=function(){var b=Ra;
typeof x.setImmediate!=="function"||x.Window&&x.Window.prototype&&x.Window.prototype.setImmediate==x.setImmediate?(K||(K=La()),K(b)):x.setImmediate(b)}}
function Ra(){for(var a;a=Oa.remove();){try{a.g.call(a.scope)}catch(c){Ma(c)}var b=Na;b.l(a);b.h<100&&(b.h++,a.next=b.g,b.g=a)}O=!1}
;function P(){this.j=this.j;this.l=this.l}
P.prototype.j=!1;P.prototype.dispose=function(){this.j||(this.j=!0,this.A())};
P.prototype.addOnDisposeCallback=function(a,b){this.j?b!==void 0?a.call(b):a():(this.l||(this.l=[]),this.l.push(b!==void 0?B(a,b):a))};
P.prototype.A=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Q(a){P.call(this);this.u=1;this.o=[];this.s=0;this.g=[];this.h={};this.v=!!a}
oa(Q,P);n=Q.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.u;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.u=e+3;d.push(e);return e};
function Sa(a,b,c){var d=R;if(a=d.h[a]){var e=d.g;(a=a.find(function(h){return e[h+1]==b&&e[h+2]==c}))&&d.B(a)}}
n.B=function(a){var b=this.g[a];if(b){var c=this.h[b];this.s!=0?(this.o.push(a),this.g[a+1]=function(){}):(c&&qa(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.F=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var l=c[e];Ta(this.g[l+1],this.g[l+2],d)}else{this.s++;try{for(e=0,h=c.length;e<h&&!this.j;e++)l=c[e],this.g[l+1].apply(this.g[l+2],d)}finally{if(this.s--,this.o.length>0&&this.s==0)for(;c=this.o.pop();)this.B(c)}}return e!=0}return!1};
function Ta(a,b,c){Pa(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.B,this),delete this.h[a])}else this.g.length=0,this.h={}};
n.A=function(){Q.G.A.call(this);this.clear();this.o.length=0};var Ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Va(a){var b=a.match(Ua);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Wa(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Wa(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Xa(a){var b=[],c;for(c in a)Wa(c,a[c],b);return b.join("&")}
var Ya=/#|$/;var S={},Za=[],R=new Q,T={};function $a(){for(var a=t(Za),b=a.next();!b.done;b=a.next())b=b.value,b()}
function U(a,b){return a.tagName.toLowerCase().substring(0,3)==="yt:"?a.getAttribute(b):a.dataset?a.dataset[b]:a.getAttribute("data-"+b)}
function ab(a){R.F.apply(R,arguments)}
;function bb(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function V(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(d!==void 0)return d}return null}
function cb(a,b,c){W||(W={},X=new Set,db.addEventListener("message",function(d){a:if(X.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var h=W[e.id];if(h&&d.origin===h.I)switch(d=h.K,d.u=!0,d.u&&(D(d.s,d.sendMessage,d),d.s.length=0),h=e.event,e=e.info,h){case "apiInfoDelivery":if(z(e))for(var l in e)e.hasOwnProperty(l)&&(d.m[l]=e[l]);break;case "infoDelivery":eb(d,e);break;case "initialDelivery":z(e)&&(clearInterval(d.j),d.playerInfo={},d.m={},fb(d,e.apiInterface),eb(d,e));break;default:d.l.j||
(l={target:d,data:e},d.l.F(h,l),ab("player."+h,l))}}}));
a=String(V(a,"host"));W[c]={K:b,I:a};X.add(a)}
var W=null,X=null,db=window;function gb(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function hb(a){return a.search("get")===0||a.search("is")===0}
;var ib=window;
function Y(a,b){this.m={};this.playerInfo={};this.videoTitle="";this.o=this.g=this.h=null;this.j=0;this.u=!1;this.s=[];this.l=null;this.H={};if(!a)throw Error("YouTube player element ID required.");this.id=ka(this);b=Object.assign({title:"video player",videoId:"",width:640,height:360},b||{});var c=document;if(a=typeof a==="string"?c.getElementById(a):a)if(c=a.tagName.toLowerCase()==="iframe",b.host||(b.host=c?Va(a.src):"https://www.youtube.com"),this.h=new bb(b),c||(b=jb(this,a),this.o=a,(c=a.parentNode)&&
c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+ka(this.g)),S[this.g.id]=this,window.postMessage){this.l=new Q;kb(this);b=V(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in T)T.hasOwnProperty(e)&&lb(this,e)}}
n=Y.prototype;n.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
n.getIframe=function(){return this.g};
n.addEventListener=function(a,b){var c=b;typeof b==="string"&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);mb(this,a);return this};
function lb(a,b){b=b.split(".");if(b.length===2){var c=b[1];"player"===b[0]&&mb(a,c)}}
n.destroy=function(){this.g&&this.g.id&&(S[this.g.id]=null);var a=this.l;a&&typeof a.dispose=="function"&&a.dispose();if(this.o){a=this.o;var b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);W&&(W[this.id]=null);this.h=null;this.g&&this.v&&this.g.removeEventListener("load",this.v);this.o=this.g=null};
function Z(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.s.push(b)}
function jb(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var h=b[d].value;h!=null&&h!==""&&h!=="null"&&c.setAttribute(b[d].name,h)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("referrerPolicy","strict-origin-when-cross-origin");c.setAttribute("title","YouTube "+V(a.h,"title"));(b=V(a.h,"width"))&&
c.setAttribute("width",b.toString());(b=V(a.h,"height"))&&c.setAttribute("height",b.toString());var l=nb(a);l.enablejsapi=window.postMessage?1:0;window.location.host&&(l.origin=window.location.protocol+"//"+window.location.host);l.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(g){var f=window.location.href;var k=f.search(Ya);b:{var m=0;for(var r=g.length;(m=f.indexOf(g,m))>=0&&m<k;){var y=f.charCodeAt(m-1);if(y==38||y==63)if(y=f.charCodeAt(m+r),!y||y==61||y==38||y==35)break b;
m+=r+1}m=-1}if(m<0)f=null;else{r=f.indexOf("&",m);if(r<0||r>k)r=k;m+=g.length+1;f=decodeURIComponent(f.slice(m,r!==-1?r:0).replace(/\+/g," "))}f!==null&&(l[g]=f)});
a=""+V(a.h,"host")+("/embed/"+V(a.h,"videoId"))+"?"+Xa(l);ib.yt_embedsEnableIframeSrcWithIntent?(Ia(c,Ea(a)),c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=a;return c}
n.D=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):clearInterval(this.j)};
function kb(a){cb(a.h,a,a.id);a.j=setInterval(a.D.bind(a),250);a.g&&(a.v=function(){clearInterval(a.j);a.j=setInterval(a.D.bind(a),250)},a.g.addEventListener("load",a.v))}
function mb(a,b){a.H[b]||(a.H[b]=!0,Z(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";a=JSON.stringify(a);var b=[Va(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var c=0;c<b.length;c++)try{this.g.contentWindow.postMessage(a,b[c])}catch(d){if(d.name&&d.name==="SyntaxError")d.message&&d.message.indexOf("target origin ''")>0||console&&console.warn&&console.warn(d);else throw d;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};
function nb(a){var b=V(a.h,"playerVars");if(b){var c={},d;for(d in b)c[d]=b[d];b=c}else b={};window!==window.top&&document.referrer&&(b.widget_referrer=document.referrer.substring(0,256));if(a=V(a.h,"embedConfig")){if(z(a))try{a=JSON.stringify(a)}catch(e){console.error("Invalid embed config JSON",e)}b.embed_config=a}return b}
function eb(a,b){if(z(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+V(a.h,"title"))))}}
function fb(a,b){D(b,function(c){this[c]||(c==="getCurrentTime"?this[c]=function(){var d=this.playerInfo.currentTime;if(this.playerInfo.playerState===1){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;e>0&&(d+=Math.min(e,1))}return d}:gb(c)?this[c]=function(){this.playerInfo={};
this.m={};Z(this,c,arguments);return this}:hb(c)?this[c]=function(){var d=0;
c.search("get")===0?d=3:c.search("is")===0&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Z(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=V(this.h,"host")+("/embed/"+V(this.h,"videoId")),b=Number(V(this.h,"width")),c=Number(V(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Ja(a);d=Ja(d!=null?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.m.namespaces?a?this.m[a]?this.m[a].options||[]:[]:this.m.namespaces||[]:[]};
n.getOption=function(a,b){if(this.m.namespaces&&a&&b&&this.m[a])return this.m[a][b]};
function ob(a){if(a.tagName.toLowerCase()!=="iframe"){var b=U(a,"videoid");b&&(b={videoId:b,width:U(a,"width"),height:U(a,"height")},new Y(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return S[a]});
C("YT.scan",$a);C("YT.subscribe",function(a,b,c){R.subscribe(a,b,c);T[a]=!0;for(var d in S)S.hasOwnProperty(d)&&lb(S[d],a)});
C("YT.unsubscribe",function(a,b,c){Sa(a,b,c)});
C("YT.Player",Y);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.getIframe;Y.prototype.addEventListener=Y.prototype.addEventListener;Y.prototype.getVideoEmbedCode=Y.prototype.getVideoEmbedCode;Y.prototype.getOptions=Y.prototype.getOptions;Y.prototype.getOption=Y.prototype.getOption;
Za.push(function(a){var b=a;b||(b=document);a=sa(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var h={};for(c=d=0;b=e[c];c++){var l=b.className,g;if(g=typeof l.split=="function")g=pa(l.split(/\s+/),
"yt-player")>=0;g&&(h[d++]=b)}h.length=d;b=h}}b=sa(b);D(ra(a,b),ob)});
typeof YTConfig!=="undefined"&&YTConfig.parsetags&&YTConfig.parsetags!=="onload"||$a();var pb=x.onYTReady;pb&&pb();var qb=x.onYouTubeIframeAPIReady;qb&&qb();var rb=x.onYouTubePlayerAPIReady;rb&&rb();}).call(this);
