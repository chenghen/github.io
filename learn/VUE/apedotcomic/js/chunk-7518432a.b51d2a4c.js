(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7518432a"],{"1dde":function(t,i,s){var a=s("d039"),n=s("b622"),r=s("2d00"),o=n("species");t.exports=function(t){return r>=51||!a((function(){var i=[],s=i.constructor={};return s[o]=function(){return{foo:1}},1!==i[t](Boolean).foo}))}},"4ec3":function(t,i,s){"use strict";s.d(i,"a",(function(){return o})),s.d(i,"d",(function(){return e})),s.d(i,"e",(function(){return c})),s.d(i,"c",(function(){return A})),s.d(i,"b",(function(){return u}));s("99af"),s("d3b7");var a=s("bc3a"),n=s.n(a);function r(t){return new Promise((function(i,s){n.a.get(t).then((function(t){i(t)})).catch((function(t){s(t)}))}))}n.a.defaults.baseURL="http://47.114.147.221/",n.a.defaults.timeout=6e3;var o=function(){return r("?name=1")},e=function(t){return r("?mhname=".concat(t))},c=function(t,i){return r("?mhlb=".concat(t,"-").concat(i))},A=function(t){return r("?mhurl1=".concat(t))},u=function(t){return r("?mhurl2=".concat(t))}},8418:function(t,i,s){"use strict";var a=s("c04e"),n=s("9bf2"),r=s("5c6c");t.exports=function(t,i,s){var o=a(i);o in t?n.f(t,o,r(0,s)):t[o]=s}},"85e7":function(t,i,s){},"8ab4":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"about"},[a("div",{staticClass:"back",on:{click:t.back}},[a("img",{staticClass:"auto-img",attrs:{src:s("f7bb"),alt:""}})]),a("div",{staticClass:"img_box"},[a("img",{staticClass:"img",attrs:{src:t.data.cover},on:{error:t.imgErr}})]),a("div",{staticClass:"item_box"},[a("van-row",{staticClass:"positionR"},[a("van-col",{staticClass:"about_img",attrs:{span:"7"}},[a("img",{attrs:{src:t.data.cover}})]),a("van-col",{attrs:{span:"17"}},[a("div",{staticClass:"tit_box"},[a("h3",{staticClass:"title textOverflow"},[t._v(t._s(t.data.name))]),a("p",{staticClass:"txt"},[a("van-icon",{attrs:{name:"user-o"}}),t._v(" "+t._s(t.data.author)+" ")],1),a("p",{staticClass:"txt"},[a("van-icon",{attrs:{name:"underway-o"}}),t._v(" "+t._s(t.data.time)+" ")],1)]),a("div",{staticClass:"btn_box"},[a("div",{staticClass:"favorite",on:{click:t.likeAndNotLike}},[a("span",{staticClass:"icon-favorite",class:{active:t.isLike}}),a("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])]),a("van-button",{attrs:{round:"",color:"#49dda1",type:"info"},on:{click:t.start}},[t._v("观看"+t._s(t.startJson.name))])],1)])],1)],1),a("div",{class:["tips tips_box",t.isAllShowTips?"":"isShow"]},[a("span",{staticClass:"jianjie",on:{click:function(i){t.isAllShowTips=!t.isAllShowTips}}},[t._v("查看简介")]),t._v(t._s(t.data.introduce)),a("br"),a("div",{staticClass:"tag"},[t._v(t._s(t.data.tag))])]),a("div",{staticClass:"zj_box"},[a("van-row",[a("van-col",{attrs:{span:"12"}},[a("div",{staticClass:"sort",staticStyle:{float:"left"}},[t._v(" 全部章节("+t._s(t.list.length)+") ")])]),a("van-col",{attrs:{span:"12"}},[a("div",{staticClass:"sort",on:{click:t.sortFn}},[t._v(" "+t._s(t.sort?"升序":"降序")+" "),a("van-icon",{staticClass:"sortTop",attrs:{size:"20px",name:"exchange"}})],1),a("div",{staticClass:"sort",staticStyle:{margin:"0 2px"},on:{click:t.chListFn}},[a("van-icon",{staticClass:"sortTop",attrs:{size:"20px",name:"apps-o"}})],1)])],1)],1),a("div",{staticClass:"list_box"},[a("van-row",t._l(t.list,(function(i,s){return a("van-col",{key:s,attrs:{span:t.listSize}},[a("div",{staticClass:"list_item"},[a("router-link",{staticClass:"span",attrs:{to:{name:"Detail",query:{url:i.url,num:i.num}}}},[t._v(t._s(i.tit))])],1)])})),1)],1)])},n=[],r=(s("d81d"),s("b0c0"),s("85e7"),s("4ec3")),o={name:"AboutIndex",data:function(){return{data:{introduce:""},list:[],sort:!0,startJson:{name:"",url:""},isAllShowTips:!1,backUrl:null,listSize:8,isLike:!1}},methods:{back:function(){this.$router.push({path:this.backUrl||"/"})},init:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var i=this.$route.query.url;window.sessionStorage.setItem("parentUrl",i),Object(r["c"])(i).then((function(i){var s=i.data,a=s.data,n=s.list,r=s.code;0===r&&(n.map((function(t){t.tit=t.num.substring(0,11)})),t.startJson={name:n[0].tit,url:n[0].url},window.sessionStorage.setItem("mhList",JSON.stringify(n)),t.data=a,t.list=n),t.$toast.clear()}))},sortFn:function(){this.sort=!this.sort;var t=this.list;this.list=[],this.list=t.reverse()},chListFn:function(){8==this.listSize?this.listSize=12:this.listSize=8},start:function(){var t=this.startJson.url;this.$router.push({path:"/detail",query:{url:t}})},likeAndNotLike:function(){this.isLike=!this.isLike;var t=localStorage.getItem("CSTK");if(!t)return this.$router.push({name:"Login"});if(this.isLike?this.$toast("加入书架"):this.$toast("取消加入"),this.isLike){var i=this.data;localStorage.setItem("shoucan",JSON.stringify(i));var s=JSON.parse(localStorage.getItem("itemsArray"))||[],a=this.data;s.push(a),localStorage.setItem("itemsArray",JSON.stringify(s))}},imgErr:function(){var t=document.querySelector(".img_box .img");t.style.background="#fb7299b5"}},created:function(){this.init()},computed:{isHouse:function(){return!1},favoriteText:function(){return this.isLike?"已进书架":"加入书架"}},beforeRouteEnter:function(t,i,s){s((function(t){"home"!==i.name&&"list"!==i.name||(t.backUrl=i.path)}))}},e=o,c=s("2877"),A=Object(c["a"])(e,a,n,!1,null,null,null);i["default"]=A.exports},"99af":function(t,i,s){"use strict";var a=s("23e7"),n=s("d039"),r=s("e8b5"),o=s("861d"),e=s("7b0b"),c=s("50c4"),A=s("8418"),u=s("65f0"),l=s("1dde"),d=s("b622"),f=s("2d00"),v=d("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",p=f>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=l("concat"),g=function(t){if(!o(t))return!1;var i=t[v];return void 0!==i?!!i:r(t)},C=!p||!b;a({target:"Array",proto:!0,forced:C},{concat:function(t){var i,s,a,n,r,o=e(this),l=u(o,0),d=0;for(i=-1,a=arguments.length;i<a;i++)if(r=-1===i?o:arguments[i],g(r)){if(n=c(r.length),d+n>h)throw TypeError(m);for(s=0;s<n;s++,d++)s in r&&A(l,d,r[s])}else{if(d>=h)throw TypeError(m);A(l,d++,r)}return l.length=d,l}})},b0c0:function(t,i,s){var a=s("83ab"),n=s("9bf2").f,r=Function.prototype,o=r.toString,e=/^\s*function ([^ (]*)/,c="name";a&&!(c in r)&&n(r,c,{configurable:!0,get:function(){try{return o.call(this).match(e)[1]}catch(t){return""}}})},d81d:function(t,i,s){"use strict";var a=s("23e7"),n=s("b727").map,r=s("1dde"),o=s("ae40"),e=r("map"),c=o("map");a({target:"Array",proto:!0,forced:!e||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},f7bb:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAolBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBQUXFxcvLy98fHyLi4ufn5/W1tbW1tbb29vb29vd3d3d3d3i4uLk5OT6+vr7+/v7+/v9/f39/f3+/v7///8IR0mQAAAANXRSTlMAAQMEBQYMDQ4PERYXGR0eISIjJCYnKCkqLC0uLzAxMjM0NzxUWmWam6KjpaawtOru8fb3+sxPMBcAAAGXSURBVEjHrZfZdoIwEIaHreCCokBUWsyotbu1ts37v1ovrKcVmUxI/C8ZvsNh9gFolZ+kmaiWiMtKZGnig7GiYSnxTLIcRkZonDfIXz6/4dESSZWxFg0z1CoLabZfI6O6T6DeCA008lqjU6CRipa4BTM01Cy4+K4xizhrfNsrsIOK8/8eYyeNz2KEHfUvYlHdFa7/smWKnTU9sQla6JTnpQ1cHtkbtNKxQnM7OAcACKX+pfvnh9bnMgCAgZ7dHtTnptUyYN21PSi1X1Mu8yXHHrbtNulDz5ZFTCC1ZjGFiTWLGQhrFgXcWrNYwdKaxRoIw3rPsohAhHnzrdQ7l95wRxjelFIvTDuBirCsdixd0aHiaaFJEpbOdOnJ0am2MBi6py9JLS19phmsdkqpJ7p/DpGjP5BsQ0wDXL1+PdIN0Kn1QuzS9J3Gjd2gS64xYm2Ge3SdtcJtoQGvk8cbqxQEc3N2frEChg7ro9viCuAZeW3sXX9ZdzwT3A6U42lE1G9seJSJ5lEmDI+y0zk4EYtaynohJuQ5+AMX1Waa1j0YiAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-7518432a.b51d2a4c.js.map