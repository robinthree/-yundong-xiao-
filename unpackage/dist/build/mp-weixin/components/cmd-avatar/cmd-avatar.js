(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cmd-avatar/cmd-avatar"],{"5d8f":function(t,n,e){"use strict";var i=e("81a8"),c=e.n(i);c.a},7804:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"cmd-avatar",components:{cmdIcon:function(){e.e("components/cmd-icon/cmd-icon").then(function(){return resolve(e("b9f7"))}.bind(null,e)).catch(e.oe)}},props:{size:{validator:function(t){return"number"===typeof t||["sm","lg","md"].includes(t)},default:"md"},shape:{validator:function(t){return["circle","square"].includes(t)},default:"circle"},make:{type:Object,default:function(){return{color:""}}},src:{type:String,default:""},icon:{type:String,default:""},text:{type:[String,Number],default:""}},computed:{setShapeSizeClass:function(){var t=[];return["circle","square"].includes(this.shape)&&t.push("cmd-avatar-".concat(this.shape)),["sm","lg","md"].includes(this.size)&&t.push("cmd-avatar-".concat(this.size)),t},setNumSizeStyle:function(){return"number"===typeof this.size?"width:".concat(this.size,"px;")+"height:".concat(this.size,"px;")+"font-size:".concat(this.size/2,"px;")+"line-height:".concat(this.size,"px;"):""},setIconTextStyle:function(){var t="";for(var n in this.make)t+="".concat(n,":").concat(this.make[n],";");return t},setIconSize:function(){return"number"===typeof this.size?this.size/2:"sm"===this.size?t.upx2px(64)/2:"lg"===this.size?t.upx2px(128)/2:t.upx2px(96)/2}},methods:{$_imageLoad:function(t){this.$emit("load",t)},$_imageError:function(t){this.$emit("error",t)},$_click:function(t){this.$emit("click",t)}}};n.default=i}).call(this,e("543d")["default"])},"81a8":function(t,n,e){},bc98:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={cmdIcon:function(){return e.e("components/cmd-icon/cmd-icon").then(e.bind(null,"b9f7"))}},c=function(){var t=this.$createElement;this._self._c},u=[]},f701:function(t,n,e){"use strict";e.r(n);var i=e("bc98"),c=e("f9db");for(var u in c)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return c[t]}))}(u);e("5d8f");var a=e("f0c5"),r=Object(a["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=r.exports},f9db:function(t,n,e){"use strict";e.r(n);var i=e("7804"),c=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cmd-avatar/cmd-avatar-create-component',
    {
        'components/cmd-avatar/cmd-avatar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f701"))
        })
    },
    [['components/cmd-avatar/cmd-avatar-create-component']]
]);