webpackJsonp([3],{"+ptz":function(t,n,e){"use strict";var s=function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"container"},[n("home")],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};n.a=i},"/TYz":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7tkk"),i=e("+ptz"),o=e("VU/8")(s.a,i.a,!1,null,null,null);o.options.__file="pages/index.vue",n.default=o.exports},"7tkk":function(t,n,e){"use strict";var s=e("8sey");n.a={components:{Home:s.a}}},"8sey":function(t,n,e){"use strict";var s=e("kmgZ"),i=e("Rrlr"),o=e("VU/8")(s.a,i.a,!1,null,null,null);o.options.__file="components/pages/home.vue",n.a=o.exports},Rrlr:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"content center"},[e("h1",[t._v(t._s(t.$t("titles.main")))]),t._v("\n  "+t._s(t.$t("home"))+"\n  "),e("p",[t._v(t._s(t.$t("content.siteDescription")))]),e("button",{staticClass:"button is-success",on:{click:t.okayGo}},[t._v(t._s(t.$t("buttons.go")))]),e("h1",[t._v("\n    "+t._s(t.ip)+"\n  ")])])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};n.a=i},kmgZ:function(t,n,e){"use strict";n.a={data:function(){return{ip:null}},mounted:function(){var t=this;this.$axios.$get("http://icanhazip.com").then(function(n){t.ip=n.trim()})},methods:{okayGo:function(){this.$router.push({path:this.localePath("babynames-recommendations")})}}}}});