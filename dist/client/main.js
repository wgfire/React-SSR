(()=>{"use strict";var e,t={258:(e,t,n)=>{var r=n(466),o=n(116),a=n(429),l=n(387);const c=(0,l.EN)((function(e){return r.createElement("div",null,r.createElement(a.OL,{to:"/index",style:{marginLeft:"10px"}},r.createElement("button",null,"首页")),r.createElement(a.OL,{style:{marginLeft:"10px"},to:"/list"},r.createElement("button",null,"列表页")),r.createElement(a.OL,{to:"/about",style:{marginLeft:"10px"}},r.createElement("button",null,"关于")),e.children)}));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const i=function(e){var t=e.routeList;return r.createElement(c,null,r.createElement(l.rs,null,t.map((function(e){return r.createElement(l.AW,u({exact:!0,key:e.path},e))}))))};var s=n(379),f=n.n(s),p=n(296);f()(p.Z,{insert:"head",singleton:!1});const d=p.Z.locals||{};n(188);const m=function(e){return(0,r.useEffect)((function(){console.log("执行了css",e),e.staticContext&&e.staticContext.css.push(d._getCss())}),[]),r.createElement("div",{onClick:function(){console.log("被点击了，，")}},r.createElement("span",{className:d.title},"我是首页"))},v=[{path:"/",component:m,exact:!0},{path:"/index",component:m,exact:!0},{path:"/list",component:function(){return r.createElement("div",null,r.createElement("span",null,"列表页"))},exact:!0},{path:"/about",component:function(){return r.createElement("div",null,r.createElement("span",null,"关于"))},exact:!0}];o.hydrate(r.createElement(a.VK,null,r.createElement(i,{routeList:v})),document.getElementById("root"))},296:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(705),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"._3d-6rNVeZPdSgu-daARaOD{color:#00d9ff;font-size:4vw}\n",""]),o.locals={title:"_3d-6rNVeZPdSgu-daARaOD"};const a=o}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(i=0;i<e.length;i++){for(var[n,o,a]=e[i],c=!0,u=0;u<n.length;u++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(c=!1,a<l&&(l=a));c&&(e.splice(i--,1),t=o())}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,c,u]=n,i=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var s=u(r);for(t&&t(n);i<l.length;i++)a=l[i],r.o(e,a)&&e[a]&&e[a][0](),e[l[i]]=0;return r.O(s)},n=self.webpackChunkreactssr=self.webpackChunkreactssr||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[514,736],(()=>r(159)));var o=r.O(void 0,[514,736],(()=>r(258)));o=r.O(o)})();