(function(e){function t(t){for(var n,u,i=t[0],l=t[1],s=t[2],c=0,v=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&v.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(v.length)v.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1d189588","chunk-2d0b5988":"0a9f502e","chunk-2d21d8e2":"20a68041"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[e.isActive?e._e():r("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v(" | "),r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),e.isActive?r("router-link",{attrs:{to:"/notas"}},[e._v("Notas")]):e._e(),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),e.isActive?r("a",{on:{click:function(t){return e.cerrarSesion()}}},[e._v("Cerrar Sesion")]):e._e()],1),r("router-view")],1)},a=[],u=r("5530"),i=r("2f62"),l={methods:Object(u["a"])({},Object(i["b"])(["cerrarSesion","leerToken"])),computed:Object(u["a"])({},Object(i["c"])(["isActive"])),created:function(){this.leerToken()}},s=l,c=(r("034f"),r("2877")),p=Object(c["a"])(s,o,a,!1,null,null,null),v=p.exports,f=(r("45fc"),r("d3b7"),r("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],g={name:"HelloWorld",props:{msg:String}},_=g,k=(r("7def"),Object(c["a"])(_,d,b,!1,null,"1935ec24",null)),j=k.exports,w={name:"Home",components:{HelloWorld:j}},y=w,O=Object(c["a"])(y,h,m,!1,null,null,null),x=O.exports,E=r("1232");n["a"].use(i["a"]);var S=new i["a"].Store({state:{token:"",userDB:""},mutations:{getToken:function(e,t){e.token=t,""==t?e.userDB="":(e.userDB=Object(E["a"])(t),C.push({name:"Notas"}))}},actions:{saveToken:function(e,t){var r=e.commit;localStorage.token=t,r("getToken",t)},cerrarSesion:function(e){var t=e.commit;t("getToken",""),delete localStorage.token,C.push({name:"Login"})},leerToken:function(e){var t=e.commit,r=localStorage.token;t("getToken",r||"")}},getters:{isActive:function(e){return""!=e.token}},modules:{}});n["a"].use(f["a"]);var T=[{path:"/",name:"Home",component:x},{path:"/login",name:"Login",component:function(){return r.e("about").then(r.bind(null,"a55b"))}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/notas",name:"Notas",component:function(){return r.e("about").then(r.bind(null,"c93e"))},meta:{requireAuth:!0}},{path:"/crear",name:"Crear",component:function(){return r.e("chunk-2d21d8e2").then(r.bind(null,"d297"))}},{path:"/:id",name:"Editar",component:function(){return r.e("chunk-2d0b5988").then(r.bind(null,"1a24"))}}],A=new f["a"]({mode:"history",base:"/",routes:T});A.beforeEach((function(e,t,r){var n=e.matched.some((function(e){return e.meta.requireAuth}));n&&""===S.state.token?r({name:"Login"}):r()}));var C=A,P=r("bc3a"),L=r.n(P),$=r("2106"),H=r.n($),D=r("5886");r("4413");n["a"].use(H.a,L.a),n["a"].use(D["default"]),L.a.defaults.baseURL="https://menoteapp.herokuapp.com/api",n["a"].config.productionTip=!1,new n["a"]({router:C,store:S,render:function(e){return e(v)}}).$mount("#app")},"7def":function(e,t,r){"use strict";var n=r("8e33"),o=r.n(n);o.a},"85ec":function(e,t,r){},"8e33":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.154db817.js.map