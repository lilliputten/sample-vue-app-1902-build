(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],d=0,f=[];d<c.length;d++)a=c[d],o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4e8d":function(e,t,n){"use strict";var r=n("9f59"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("774e"),o=n.n(r),i=(n("c5f6"),n("14b9"),n("6b54"),n("aef6"),n("f559"),n("6762"),n("2fdb"),n("0a0d")),a=n.n(i),c=n("5176"),s=n.n(c),u=n("2d1f"),l=n.n(u),d=n("a4bb"),f=n.n(d),p=n("db0c"),m=n.n(p);Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(e){var t,n=this,r=String(e);return r in n&&(t=n.__proto__||n.constructor.prototype,r in t===!1||n[r]!==t[r])}),m.a||(Object.values=function(e){return f()(e).reduce(function(t,n){return t.concat("string"===typeof n&&(!e.hasOwnProperty||e.hasOwnProperty(n)?[e[n]]:[]))},[])}),l.a||(Object.entries=function(e){return f()(e).reduce(function(t,n){return t.concat("string"===typeof n&&e.hasOwnProperty(n)?[[n,e[n]]]:[])},[])}),"function"!==typeof s.a&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n}),a.a||(Date.now=function(){return(new Date).getTime()}),String.prototype.includes||Object.defineProperty(String.prototype,"includes",{value:function(e,t){return"number"!==typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){return t=t||0,this.substr(t,e.length)===e}}),String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{value:function(e,t){var n=this.toString();("number"!==typeof t||!isFinite(t)||Math.floor(t)!==t||t>n.length)&&(t=n.length),t-=e.length;var r=n.indexOf(e,t);return-1!==r&&r===t}}),String.prototype.repeat||(String.prototype.repeat=function(e){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e&&"number"===typeof e||(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e===1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0===t.length||0===e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");for(var n="";;){if(1===(1&e)&&(n+=t),e>>>=1,0===e)break;t+=t}return n}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null===this||void 0===this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=Number(n.length);if(!r)return!1;var o=t||0,i=Math.max(o>=0?o:r-Math.abs(o),0);function a(e,t){return e===t||"number"===typeof e&&"number"===typeof t&&isNaN(e)&&isNaN(t)}while(i<r){if(a(n[i],e))return!0;i++}return!1}}),Array.prototype.reduce||Object.defineProperty(Array.prototype,"reduce",{value:function(e){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof e)throw new TypeError(e+" is not a function");var t,n=Object(this),r=Number(n.length),o=0;if(arguments.length>=2)t=arguments[1];else{while(o<r&&!(o in n))o++;if(o>=r)throw new TypeError("Reduce of empty array with no initial value");t=n[o++]}while(o<r)o in n&&(t=e(t,n[o],o,n)),o++;return t}}),o.a||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"===typeof t||"[object Function]"===e.call(t)},n=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,o=function(e){var t=n(e);return Math.min(Math.max(t,0),r)};return function(e){var n=this,r=Object(e);if(null===e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,a=arguments.length>1?arguments[1]:void 0;if("undefined"!==typeof a){if(!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}var c,s=o(r.length),u=t(n)?Object(new n(s)):new Array(s),l=0;while(l<s)c=r[l],u[l]=a?"undefined"===typeof i?a(c,l):a.call(i,c,l):c,l+=1;return u.length=s,u}}());var h=n("2b0e"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("md-app",[n("md-app-content",[n("Timezone")],1)],1)],1)},b=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ShowTimezone"},[n("form",{staticClass:"md-layout",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("md-card",{staticClass:"md-layout-item"},[n("md-card-header",[n("div",{staticClass:"md-title"},[e._v("City Timezones Vue Example")])]),n("md-card-content",[n("div",{staticClass:"md-layout md-gutter"},[n("div",{staticClass:"md-layout-item source-city-item md-size-100"},[n("md-field",{class:e.getValidationClass("city")},[n("label",{attrs:{for:"city"}},[e._v("City:")]),n("md-select",{attrs:{name:"city",id:"city",placeholder:"Select source city here...",disabled:e.sending},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}},e._l(e.stubCities,function(t){return n("md-option",{key:t,attrs:{value:t.toLowerCase()}},[e._v("\n                  "+e._s(t)+"\n                ")])}),1),n("span",{staticClass:"md-error"},[e._v("The city is required")])],1)],1),n("div",{staticClass:"md-layout-item timezone-item md-size-100"},[n("md-field",[n("label",{attrs:{for:"timezone"}},[e._v("City timezone:")]),n("md-input",{attrs:{name:"timezone",id:"timezone",placeholder:"Target timezone will be displayed here...",disabled:""},model:{value:e.form.timezone,callback:function(t){e.$set(e.form,"timezone",t)},expression:"form.timezone"}})],1)],1)])]),e.sending?n("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),n("md-card-actions",[n("md-button",{staticClass:"md-primary",attrs:{type:"submit",disabled:e.sending}},[e._v("Fetch timezone")])],1)],1),n("md-snackbar",{attrs:{"md-duration":1e4,"md-active":e.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(t){e.showSnackbar=t},"update:md-active":function(t){e.showSnackbar=t}}},[n("span",{domProps:{innerHTML:e._s(e.snackbarContent)}}),n("md-button",{staticClass:"md-accent",on:{click:function(t){e.showSnackbar=!1}}},[e._v("Dismiss")])],1)],1)])},g=[],w=(n("7f7f"),n("96cf"),n("3b8d")),j=n("1dce"),O=n("b5ae"),T="--UNDEFINED--",z=!0,C={stubCities:["Moscow","New York"],getCoordsRealUrl:function(e){var t=e.city;return"https://geocode-maps.yandex.ru/1.x/?geocode=".concat(t,"&format=json&results=1")},getCoordsStubUrl:function(e){var t=e.city;return"/api-samples/yandex-".concat(t,".json")},getTimezoneRealUrl:function(e){e.city;var t=e.lat,n=e.lon,r=e.timestamp;return"https://maps.googleapis.com/maps/api/timezone/json?location=".concat(t,",").concat(n,"&timestamp=").concat(r,"&key=").concat(T)},getTimezoneStubUrl:function(e){var t=e.city;return"/api-samples/google-".concat(t,".json")}};C.getCoordsUrl=z?C.getCoordsStubUrl:C.getCoordsRealUrl,C.getTimezoneUrl=z?C.getTimezoneStubUrl:C.getTimezoneRealUrl;var k=C,x=n("768b"),S=n("a745"),_=n.n(S),P=(n("28a5"),n("795b")),M=n.n(P),E=n("7618"),U=n("d225"),A=n("b0b4"),N=n("308d"),R=n("6bb5"),$=n("4e2b"),F=function(){function e(){Object(U["a"])(this,e)}return Object(A["a"])(e,[{key:"fetchUrl",value:function(e){return new M.a(function(t,n){try{return fetch(e).then(function(e){if(!e||200!==e.status)return console.error("App:fetchUrl error (invalid response status)",e),n(e);t(e)}).catch(n)}catch(r){return console.error("App:fetchUrl error (catch)",r),n(r)}})}},{key:"loadJson",value:function(e){var t=this;return new M.a(function(n,r){t.fetchUrl(e).then(function(e){e.json().then(n).catch(r)}).catch(r)})}},{key:"loadJsonObject",value:function(e){var t=this;return new M.a(function(n,r){t.loadJson(e).then(function(e){if(!e||"object"!==Object(E["a"])(e)){var t="DataLoader:loadJsonObject invalid response json returned (object expected)";return console.error(t,e),r(t)}if(e.error){var o="DataLoader:loadJsonObject error returned";return console.error(o,e.error),r([o,e.error])}n(e.result)}).catch(r)})}}]),e}(),J=F,D=function(e){function t(){return Object(U["a"])(this,t),Object(N["a"])(this,Object(R["a"])(t).apply(this,arguments))}return Object($["a"])(t,e),Object(A["a"])(t,[{key:"getErrorText",value:function(e,t){var n;return"object"!==Object(E["a"])(t)?n=String(t):t.errorMessage&&(n=t.errorMessage,t.status&&(n+=" (".concat(t.status,")"))),e&&n&&(n="".concat(e,": ").concat(n)),n||e}},{key:"getCoords",value:function(e){var t=this;return new M.a(function(n,r){var o=k.getCoordsUrl;"function"===typeof o&&(o=o(e)),t.loadJson(o).then(function(e){var o,i,a,c,s,u,l=null===e||void 0===e?void 0:null===(o=e.response)||void 0===o?void 0:null===(i=o.GeoObjectCollection)||void 0===i?void 0:null===(a=i.featureMember)||void 0===a?void 0:null===(c=a[0])||void 0===c?void 0:null===(s=c.GeoObject)||void 0===s?void 0:null===(u=s.Point)||void 0===u?void 0:u.pos,d=l&&"string"===typeof l&&l.trim().split(" ").map(function(e){return Number(e)});if(_()(d)&&2===d.length){var f=Object(x["a"])(d,2),p=f[0],m=f[1],h={lat:m,lon:p};return n(h)}var v="TimezoneLoader:getCoords invalid coordinates (Yandex API) data returned",b=t.getErrorText(v,e);return console.error(v,e),r(b)}).catch(r)})}},{key:"getTimezone",value:function(e){var t=this;return new M.a(function(n,r){if(!e.timestamp){var o=Math.round(a()()/1e3);e=s()({timestamp:o},e)}var i=k.getTimezoneUrl;"function"===typeof i&&(i=i(e)),t.loadJson(i).then(function(e){if("object"===Object(E["a"])(e)&&e.timeZoneId){var o=e.timeZoneId,i=e.timeZoneName,a={id:o.trim(),name:i.trim()};return n(a)}var c="TimezoneLoader:getCoords invalid timezone (Google API) data returned",s=t.getErrorText(c,e);return console.error(c,e),r(s)}).catch(r)})}},{key:"loadTimezone",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getCoords(t);case 2:return n=e.sent,r=s()({},n,t),e.next=6,this.getTimezone(r);case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(J),L=D,I=k.stubCities,q=new L,W=null,G={name:"ShowTimezone",mixins:[j["validationMixin"]],data:function(){return{stubCities:I,form:{city:W,timezone:null},showSnackbar:!1,snackbarContent:null,cityFetched:!1,sending:!1}},validations:{form:{city:{required:O["required"]}}},methods:{getValidationClass:function(e){var t=this.$v.form[e];if(t)return{"md-invalid":t.$invalid&&t.$dirty}},fetchTimezone:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){var t,n,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.sending=!0,t=this.form.city,e.prev=2,e.next=5,q.loadTimezone({city:t});case 5:n=e.sent,r=n.id,o=n.name,this.form.timezone="".concat(o," (").concat(r,")"),this.cityFetched=!0,e.next=19;break;case 12:e.prev=12,e.t0=e["catch"](2),console.error(e.t0),this.snackbarContent=e.t0,this.showSnackbar=!0,this.cityFetched=!1;case 19:return e.prev=19,this.sending=!1,e.finish(19);case 22:case"end":return e.stop()}},e,this,[[2,12,19,22]])}));function t(){return e.apply(this,arguments)}return t}(),submitForm:function(){this.$v.$touch(),this.$v.$invalid?(this.snackbarContent="Please select city!",this.showSnackbar=!0):this.fetchTimezone()}}},V=G,Z=(n("4e8d"),n("2877")),Y=Object(Z["a"])(V,y,g,!1,null,"48219954",null),H=Y.exports,B={name:"app",components:{Timezone:H}},K=B,Q=(n("5c0b"),Object(Z["a"])(K,v,b,!1,null,null,null)),X=Q.exports,ee=n("43f9"),te=n.n(ee);n("51de"),n("e094");h["default"].use(te.a),h["default"].config.productionTip=!1,new h["default"]({render:function(e){return e(X)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"9f59":function(e,t,n){}});
//# sourceMappingURL=app.c38f25b2.js.map