(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/paihang/paihang"],{"0304":function(n,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return e}));var e={zetankRank:function(){return a.e("uni_modules/zetank-rank/components/zetank-rank/zetank-rank").then(a.bind(null,"9980"))}},u=function(){var n=this.$createElement;this._self._c},r=[]},4048:function(n,t,a){"use strict";a.r(t);var e=a("0304"),u=a("cafe");for(var r in u)["default"].indexOf(r)<0&&function(n){a.d(t,n,(function(){return u[n]}))}(r);var c=a("f0c5"),o=Object(c["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);t["default"]=o.exports},"508e":function(n,t,a){"use strict";(function(n){var t=a("4ea4");a("af02"),a("a9ff");t(a("66fd"));var e=t(a("4048"));wx.__webpack_require_UNI_MP_PLUGIN__=a,n(e.default)}).call(this,a("543d")["createPage"])},"730c":function(n,t,a){"use strict";var e=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=e(a("3ba7")),r={data:function(){return{da:null,rankData:[]}},onShow:function(){this.getInfo()},methods:{getInfo:function(){var n=this;u.default.call({name:"getalluserinfo",data:{},success:function(t){n.rankData=t.result,console.log(n.rankData)}})}}};t.default=r},cafe:function(n,t,a){"use strict";a.r(t);var e=a("730c"),u=a.n(e);for(var r in e)["default"].indexOf(r)<0&&function(n){a.d(t,n,(function(){return e[n]}))}(r);t["default"]=u.a}},[["508e","common/runtime","common/vendor"]]]);