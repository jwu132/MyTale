(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],d=0,m=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={about:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/MyTale/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([8,"chunk-vendors","chunk-common"]),a()})({"399b":function(e,t,a){e.exports=a.p+"img/Richard.75689fb1.jpg"},"407b":function(e,t,a){e.exports=a.p+"img/Grace.2c5e5486.jpg"},"54c4":function(e,t,a){e.exports=a.p+"img/Lynne.2b1d07db.jpg"},"561a":function(e,t,a){e.exports=a.p+"img/David.abe1748b.jpg"},"7e66":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("NavBar"),a("v-main",{staticClass:"blue-grey lighten-5"},[a("h1",{staticClass:"font-weight-light mt-6 mb-3 text-center"},[e._v("Project Information")]),a("v-card",{staticClass:"section",attrs:{flat:""}},[a("v-card-text",{staticClass:"textContent black--text"},[a("strong",[e._v("MyTale")]),e._v(" is part of Duke's "),a("a",{attrs:{href:"https://www.cs.duke.edu/undergrad/summer_research"}},[e._v("CS+ Program")]),e._v(". CS+ is a ten week summer program for Duke undergraduates to get involved in computer science research projects with faculty in a fast-paced but supportive community environment."),a("br"),e._v(" MyTale is led by Professor Robert Duvall and graduate student Xiangcheng Shen. The team members are Grace Tian, Vatsal Varma, Lynne Wang, Justin Wu, and David Wu. You can find their contact information down below. ")])],1),a("h1",{staticClass:"font-weight-light mt-6 mb-3 text-center"},[e._v("Project Members")]),a("v-card",{staticClass:"section",attrs:{flat:""}},[a("v-list",{attrs:{"three-line":""}},[a("v-row",e._l(e.members,(function(t,n){var r=t.icon,i=t.name,o=t.team,c=t.email;return a("v-col",{key:n,attrs:{cols:"12",md:"4"}},[a("v-list-item",[a("v-list-item-avatar",{attrs:{size:"60"}},[a("v-img",{attrs:{src:r}})],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(i))]),a("v-list-item-subtitle",[e._v(e._s(o))]),a("v-list-item-subtitle",[a("a",{attrs:{href:"mailto:"+c}},[e._v(e._s(c))])])],1)],1)],1)})),1)],1)],1),a("div",{staticClass:"py-10"})],1)],1)},i=[],o=a("35e0"),c={title:"MyTale - Make Your Own Social Stories",components:{NavBar:o["a"]},data:function(){return{members:[{icon:a("d6df"),name:"Robert Duvall",team:"Faculty Lead",email:"rcd@cs.duke.edu"},{icon:a("399b"),name:"Xiangcheng Shen",team:"Project Manager",email:"xiangcheng.shen@duke.edu"},{icon:a("c96a3"),name:"Vatsal Varma",team:"Editor Team",email:"vatsal.varma@duke.edu"},{icon:a("407b"),name:"Grace Tian",team:"Editor Team",email:"grace.tian@duke.edu"},{icon:a("9e55"),name:"Justin Wu",team:"Search Team",email:"justin.wu@duke.edu"},{icon:a("54c4"),name:"Lynne Wang",team:"Search Team",email:"lynne.wang@duke.edu"},{icon:a("561a"),name:"David Wu",team:"Fontend/UI Design",email:"ruoyu.wu@duke.edu"}]}}},s=c,u=(a("a54c"),a("2877")),l=a("6544"),d=a.n(l),m=a("7496"),p=a("b0af"),f=a("99d9"),v=a("62ad"),b=a("adda"),g=a("8860"),h=a("da13"),y=a("8270"),w=a("5d23"),_=a("f6c4"),j=a("0fd9"),x=Object(u["a"])(s,r,i,!1,null,"094b6966",null),k=x.exports;d()(x,{VApp:m["a"],VCard:p["a"],VCardText:f["c"],VCol:v["a"],VImg:b["a"],VList:g["a"],VListItem:h["a"],VListItemAvatar:y["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VMain:_["a"],VRow:j["a"]});var V,T=a("402c"),C=a("4360"),S=a("b84b"),O=a("8aa5"),M=a.n(O);a("1543");n["a"].mixin(S["a"]),n["a"].config.productionTip=!1,M.a.auth().onAuthStateChanged((function(){V||(V=new n["a"]({vuetify:T["a"],store:C["a"],render:function(e){return e(k)}}).$mount("#app"))}))},8:function(e,t,a){e.exports=a("7e66")},"9e55":function(e,t,a){e.exports=a.p+"img/Justin.e2d27d64.jpg"},a54c:function(e,t,a){"use strict";var n=a("c4d1"),r=a.n(n);r.a},c4d1:function(e,t,a){},c96a3:function(e,t,a){e.exports=a.p+"img/Vatsal.7779dbf4.jpg"},d6df:function(e,t,a){e.exports=a.p+"img/rcd.0b0a4bdb.jpg"}});
//# sourceMappingURL=about.20df0ed9.js.map