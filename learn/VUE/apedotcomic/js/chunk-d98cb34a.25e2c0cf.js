(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d98cb34a"],{"6a53":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"qdao"},[a("van-nav-bar",{attrs:{title:"每日签到","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),a("div",{staticClass:"qdimg"}),a("van-button",{staticClass:"btn",attrs:{type:"info",round:""},on:{click:t.ann}},[t._v("每日签到")]),a("van-calendar",{attrs:{"min-date":t.minDate,color:t.col,type:"multiple"},on:{confirm:t.confirm,select:t.select},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}}),a("div",{staticClass:"img-box"})],1)},c=[],s={data:function(){return{show:!1,minDate:new Date,maxDate:new Date(2020,12,31),col:"#99f1ce"}},methods:{back:function(){this.$router.go(-1)},ann:function(){this.show=!0},confirm:function(){this.show=!1},select:function(){this.$toast.success("签到成功"),this.col="#49dda1"}}},o=s,i=(a("f3f8"),a("2877")),l=Object(i["a"])(o,e,c,!1,null,"54d832ce",null);n["default"]=l.exports},f3f8:function(t,n,a){"use strict";var e=a("fd62"),c=a.n(e);c.a},fd62:function(t,n,a){}}]);
//# sourceMappingURL=chunk-d98cb34a.25e2c0cf.js.map