(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6379a32"],{"1dde":function(t,e,n){var o=n("d039"),r=n("b622"),a=n("2d00"),i=r("species");t.exports=function(t){return a>=51||!o((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2f14":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("99af"),n("fb6a");var o=n("d4ec"),r=n("bee2"),a=function(){function t(){Object(o["a"])(this,t)}return Object(r["a"])(t,[{key:"queryString",value:function(t){var e="";for(var n in t)e+="".concat(n,"=").concat(t[n],"&");return e.slice(0,-1)}}]),t}(),i=new a},4054:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"secure"},[n("van-nav-bar",{attrs:{title:"安全中心","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),n("div",{staticClass:"secure-bg"}),n("div",{staticClass:"secure-box"},[n("div",[n("van-cell",{attrs:{title:"修改密码",isLink:""},on:{click:t.openPasswordPopup}}),n("van-cell",{attrs:{title:"注销账号",isLink:""},on:{click:t.destroyAccount}})],1)]),n("div",{staticClass:"btn-box"},[n("van-button",{attrs:{round:"",block:"",color:" linear-gradient(to bottom, #49dda1 0%,#01c6fa 100%)"},on:{click:t.logout}},[t._v("退出登录")])],1),n("van-popup",{staticClass:"popup-box",attrs:{closeable:"",position:"bottom"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("div",{staticClass:"popup-item"},[n("div",{staticClass:"password-text"},[t._v("修改密码")]),n("van-form",[t._l(t.passwords,(function(e,o){return n("van-field",{key:o,attrs:{type:e.isPassword?"password":"text",label:e.title,placeholder:"6-16位密码且以字母开头","right-icon":e.isPassword?"closed-eye":"eye-o"},on:{"click-right-icon":function(n){return t.viewPassword(e)}},model:{value:e.password,callback:function(n){t.$set(e,"password",n)},expression:"item.password"}})})),n("div",{staticClass:"login-btn"},[n("van-button",{attrs:{round:"",block:"",color:" linear-gradient(to bottom, #49dda1 0%,#01c6fa 100%)","native-type":"submit"},on:{click:t.confirmPassword}},[t._v("确认修改")])],1)],2)],1)])],1)},r=[],a=(n("aec0"),n("2f14")),i=n("e3a8"),s={data:function(){return{isOpen:!1,passwords:{old:{password:"",isPassword:!0,title:"旧密码"},new:{password:"",isPassword:!0,title:"新密码"}}}},methods:{back:function(){this.$router.go(-1)},viewPassword:function(t){t.isPassword=!t.isPassword},logout:function(){var t=this;this.$dialog.confirm({title:"退出登录",message:"是否确认退出登录！",confirmButtonColor:"#0C34BA"}).then((function(){t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),localStorage.removeItem("CSTK"),setTimeout((function(){t.$toast.clear(),t.$router.push({name:"Login"})}),1e3)}))},openPasswordPopup:function(){this.isOpen=!0},confirmPassword:function(){var t=this,e=localStorage.getItem("CSTK");if(!e)return this.$router.push({name:"Login"});var n={oldPassword:{value:this.passwords.old.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"旧密码支持字母数字_组合"},password:{value:this.passwords.new.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"新密码支持字母数字_组合"}};if(i["a"].valid(n)){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var o=a["a"].queryString({appkey:this.appkey,tokenString:e,oldPassword:this.passwords.old.password,password:this.passwords.new.password});this.axios({method:"POST",url:"/updatePassword",data:o}).then((function(e){t.$toast.clear(),"E001"==e.data.code?(localStorage.removeItem("CSTK"),t.$router.push({name:"Login"})):t.$notify({type:"warning",message:e.data.msg})})),this.$toast.clear()}},destroyAccount:function(){var t=this;this.$dialog.confirm({title:"注销账号",message:"是否确认注销号，一旦确认无法恢复！",confirmButtonColor:"#49dda1"}).then((function(){var e=localStorage.getItem("CSTK");if(!e)return t.$router.push({name:"Login"});t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var n=a["a"].queryString({appkey:t.appkey,tokenString:e});t.axios({method:"POST",url:"/destroyAccount",data:n}).then((function(e){t.$toast.clear(),t.$toast(e.data.msg),"G001"==e.data.code&&(localStorage.removeItem("CSTK"),setTimeout((function(){t.$router.push({name:"Login"})}),600))})),t.$toast.clear()})).catch((function(){}))}}},c=s,u=n("2877"),l=Object(u["a"])(c,o,r,!1,null,null,null);e["default"]=l.exports},8418:function(t,e,n){"use strict";var o=n("c04e"),r=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var i=o(e);i in t?r.f(t,i,a(0,n)):t[i]=n}},"872c":function(t,e,n){},"99af":function(t,e,n){"use strict";var o=n("23e7"),r=n("d039"),a=n("e8b5"),i=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),v=f("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",m=p>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=d("concat"),h=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)},y=!m||!w;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,o,r,a,i=s(this),d=l(i,0),f=0;for(e=-1,o=arguments.length;e<o;e++)if(a=-1===e?i:arguments[e],h(a)){if(r=c(a.length),f+r>g)throw TypeError(b);for(n=0;n<r;n++,f++)n in a&&u(d,f,a[n])}else{if(f>=g)throw TypeError(b);u(d,f++,a)}return d.length=f,d}})},aec0:function(t,e,n){},bee2:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},d4ec:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},e3a8:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var o=n("d4ec"),r=n("bee2"),a=(n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("872c"),n("c31d")),i=n("2b0e"),s=n("2638"),c=n.n(s),u=n("d282"),l=n("ba31"),d=n("6605"),f=n("e41f"),p=Object(u["a"])("notify"),v=p[0],g=p[1];function b(t,e,n,o){var r={color:e.color,background:e.background};return t(f["a"],c()([{attrs:{value:e.value,position:"top",overlay:!1,duration:.2,lockScroll:!1},style:r,class:[g([e.type]),e.className]},Object(l["b"])(o,!0)]),[(null==n.default?void 0:n.default())||e.message])}b.props=Object(a["a"])({},d["b"],{color:String,message:[Number,String],duration:[Number,String],className:null,background:String,getContainer:[String,Function],type:{type:String,default:"danger"}});var m,w,h=v(b),y=n("a142");function k(t){return Object(y["e"])(t)?t:{message:t}}function C(t){if(!y["g"])return w||(w=Object(l["c"])(h,{on:{click:function(t){w.onClick&&w.onClick(t)},close:function(){w.onClose&&w.onClose()},opened:function(){w.onOpened&&w.onOpened()}}})),t=Object(a["a"])({},C.currentOptions,k(t)),Object(a["a"])(w,t),clearTimeout(m),t.duration&&t.duration>0&&(m=setTimeout(C.clear,t.duration)),w}function O(){return{type:"danger",value:!0,message:"",color:void 0,background:void 0,duration:3e3,className:"",onClose:null,onClick:null,onOpened:null}}C.clear=function(){w&&(w.value=!1)},C.currentOptions=O(),C.setDefaultOptions=function(t){Object(a["a"])(C.currentOptions,t)},C.resetDefaultOptions=function(){C.currentOptions=O()},C.install=function(){i["a"].use(h)},C.Component=h,i["a"].prototype.$notify=C;var S=C;i["a"].use(S);var $=function(){function t(){Object(o["a"])(this,t)}return Object(r["a"])(t,[{key:"valid",value:function(t){for(var e in t)if(!t[e].reg.test(t[e].value))return S({type:"warning",message:t[e].errorMsg}),!1;return!0}}]),t}(),P=new $},fb6a:function(t,e,n){"use strict";var o=n("23e7"),r=n("861d"),a=n("e8b5"),i=n("23cb"),s=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=n("ae40"),p=d("slice"),v=f("slice",{ACCESSORS:!0,0:0,1:2}),g=l("species"),b=[].slice,m=Math.max;o({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var n,o,l,d=c(this),f=s(d.length),p=i(t,f),v=i(void 0===e?f:e,f);if(a(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(d,p,v);for(o=new(void 0===n?Array:n)(m(v-p,0)),l=0;p<v;p++,l++)p in d&&u(o,l,d[p]);return o.length=l,o}})}}]);
//# sourceMappingURL=chunk-a6379a32.194c7378.js.map