(this.webpackJsonp=this.webpackJsonp||[]).push([[89],{134:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n,a,i=r(38),c=r(1),o=r(429);!function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"}(n||(n={})),function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"}(a||(a={}));var u=function(t){var e=Object(o.a)(),r=t.value,n=t.children,a=Object(i.i)(t,["value","children"]);return n(e.formatNumberToParts(r,a))};u.displayName="FormattedNumberParts";function s(t){var e=function(e){var r=Object(o.a)(),n=e.value,a=e.children,c=Object(i.i)(e,["value","children"]),u="string"===typeof n?new Date(n||0):n;return a("formatDate"===t?r.formatDateToParts(u,c):r.formatTimeToParts(u,c))};return e.displayName=a[t],e}function l(t){var e=function(e){var r=Object(o.a)(),n=e.value,a=e.children,u=Object(i.i)(e,["value","children"]),s=r[t](n,u);if("function"===typeof a)return a(s);var l=r.textComponent||c.Fragment;return c.createElement(l,null,s)};return e.displayName=n[t],e}u.displayName="FormattedNumberParts";l("formatDate"),l("formatTime");var f=l("formatNumber");l("formatList"),l("formatDisplayName"),s("formatDate"),s("formatTime")},3172:function(t,e,r){var n=r(957),a=r(1168),i=r(1169),c=r(951),o=r(767),u=r(958),s=Math.min;t.exports=function(t,e,r){for(var l=r?i:a,f=t[0].length,m=t.length,b=m,d=Array(m),j=1/0,v=[];b--;){var O=t[b];b&&e&&(O=c(O,o(e))),j=s(O.length,j),d[b]=!r&&(e||f>=120&&O.length>=120)?new n(b&&O):void 0}O=t[0];var p=-1,y=d[0];t:for(;++p<f&&v.length<j;){var h=O[p],g=e?e(h):h;if(h=r||0!==h?h:0,!(y?u(y,g):l(v,g,r))){for(b=m;--b;){var x=d[b];if(!(x?u(x,g):l(t[b],g,r)))continue t}y&&y.push(g),v.push(h)}}return v}},3173:function(t,e,r){var n=r(1164);t.exports=function(t){return n(t)?t:[]}},3175:function(t,e,r){"use strict";r.d(e,"c",(function(){return h})),r.d(e,"b",(function(){return g})),r.d(e,"d",(function(){return x})),r.d(e,"a",(function(){return P}));var n=r(2),a=r.n(n),i=r(3),c=r.n(i),o=r(10),u=r.n(o),s=r(1),l=r(1156),f=r(184),m=r(163),b=r(76),d=r(11),j=r(43),v=r(39);function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y=function(t){return[m.a,m.c,m.d,m.e].includes(t)},h=function(){var t=j.a.engine,e=Object(s.useState)([]),r=u()(e,2),n=r[0],a=r[1],i=Object(v.k)().wallets,o=Object(s.useCallback)(c()((function*(){var e=yield Promise.all(i.map(function(){var e=c()((function*(e){var r,n=yield t.getAccounts(e.accounts);return p(p({},e),{},{accounts:null!=(r=null==n?void 0:n.filter((function(t){if(!t)return!1;var e=t||{},r=e.address,n=e.coinType;return!y(r)&&!!Object(f.i)(n,d.I)})))?r:[]})}));return function(t){return e.apply(this,arguments)}}()));return a(e),e})),[t,i]);return Object(s.useEffect)((function(){o()}),[o]),{wallets:n,getWalletsAndAccounts:o}},g=function(){var t=Object(s.useState)(!1),e=u()(t,2),r=e[0],n=e[1],a=j.a.serviceNotification,i=h(),o=i.wallets,l=i.getWalletsAndAccounts,f=Object(s.useState)([]),m=u()(f,2),b=m[0],d=m[1],v=Object(s.useCallback)(c()((function*(){var t=yield a.queryAccountDynamic();d(t)})),[a]),O=Object(s.useCallback)(c()((function*(){n(!0);try{yield v(),yield l()}finally{n(!1)}})),[v,l]);return Object(s.useEffect)((function(){O()}),[O]),{loading:r,wallets:o,enabledAccounts:b,refresh:O}},x=function(){var t=j.a.serviceNotification,e=Object(s.useState)(!1),r=u()(e,2),n=r[0],a=r[1],i=Object(s.useState)([]),o=u()(i,2),l=o[0],f=o[1],m=Object(s.useCallback)(c()((function*(){a(!0);try{var e=yield t.queryPriceAlertList();f(e||[])}catch(r){}a(!1)})),[t]);return Object(s.useEffect)((function(){m()}),[m]),{alerts:l,loading:n,fetchPriceAlerts:m}},w=function(){var t=c()((function*(t,e){if(!t)return!1;var r=t||{},n=r.address,a=r.coinType;return!y(n)&&(!!Object(f.i)(a,d.I)&&!(yield Object(b.j)({asyncFunc:function(){var t=c()((function*(){return j.a.validator.isContractAddress(e,n)}));return function(){return t.apply(this,arguments)}}(),timeout:6e3,timeoutResult:!1})))}));return function(e,r){return t.apply(this,arguments)}}(),P=function(t,e){var r=Object(l.a)(c()((function*(){return w(t,e)})),[t]).result;return null!=r&&r}},3188:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return b}));var n=r(16),a=r.n(n),i=r(3215),c=r.n(i),o=r(1),u=r(178),s=["usd","eur","gbp","jpy","cny","hkd"],l=["btc","eth","sats","bits"],f=function(t){var e=Object(u.h)((function(t){return t.fiatMoney.map}));return Object(o.useMemo)((function(){var r;return null!=(r=e[t])?r:{}}),[e,t])},m=function(){var t=Object(u.h)((function(t){return t.fiatMoney.symbolList})),e=Object(u.h)((function(t){return t.fiatMoney.map})),r=c()(s,t),n=c()(l,t);return{popularList:r,ratesSectionList:[{title:"crypto",data:a()(n)},{title:"fiat",data:t.filter((function(t){var r,n;return null==(r=e[t])||null==(n=r.type)?void 0:n.includes("fiat")}))}]}},b=function(t){var e=f(t).unit;return Object(o.useMemo)((function(){return null!=e?e:"$"}),[e])}},3215:function(t,e,r){var n=r(951),a=r(3172),i=r(1165),c=r(3173),o=i((function(t){var e=n(t,c);return e.length&&e[0]===t[0]?a(e):[]}));t.exports=o},3338:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(755),a=r(115),i=r(289),c=r(429),o=r(0),u=function(t){var e=t.isLoading,r=t.symbol,u=t.desc,s=Object(c.a)();if(e)return Object(o.jsx)(a.a,{w:"full",h:"20",children:Object(o.jsx)(i.b,{size:"lg"})});var l=r?s.formatMessage({id:"title__no_alert_desc"},{0:r}):"";return Object(o.jsx)(a.a,{w:"full",h:"full",children:Object(o.jsx)(n.a,{emoji:"\ud83d\udd14",title:s.formatMessage({id:"title__no_alert"}),subTitle:u||l})})}},3547:function(t,e,r){"use strict";var n=r(32),a=r(199),i=r(289),c=r(72),o=r(754),u=r(442),s=r.n(u),l=r(3),f=r.n(l),m=r(10),b=r.n(m),d=r(15),j=r.n(d),v=r(1),O=r(134),p=r(20),y=r(43),h=r(952),g=r(3188),x=r(0),w=["divider","alert"];function P(t){var e=t.value,r=t.onlyNumber,n=t.unit;return"number"!==typeof e?null:"sats"===n.toLowerCase()?Object(x.jsxs)(x.Fragment,{children:[e<.01?""+Object(h.a)(e):Object(x.jsx)(O.a,{value:null!=e?e:0,style:"decimal",minimumFractionDigits:2,maximumFractionDigits:10})," "+(r?"":n)]}):Object(x.jsxs)(x.Fragment,{children:[""+(r?"":n),e<.01?""+Object(h.a)(e):Object(x.jsx)(O.a,{value:null!=e?e:0,style:"decimal",minimumFractionDigits:2,maximumFractionDigits:10})]})}e.a=function(t){var e=t.divider,r=t.alert,u=j()(t,w),l=r.price,m=r.currency,d=Object(g.c)(m),O=Object(v.useState)(!1),h=b()(O,2),D=h[0],N=h[1],F=Object(v.useCallback)(f()((function*(){N(!0);try{yield y.a.serviceNotification.removePriceAlertConfig(s()(r,"price","currency","coingeckoId"))}catch(t){p.a.common.error("remove PriceAlert",t instanceof Error?null==t?void 0:t.message:t)}setTimeout((function(){N(!1),null==u||u.onRemove(r.price)}),200)})),[u,r]);return Object(x.jsx)(n.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",py:4,px:{base:4,md:6},borderBottomWidth:e?"1 ":void 0,borderBottomColor:"divider",borderBottomRadius:e?void 0:"12px",children:Object(x.jsxs)(n.a,{flex:"1",flexDirection:"row",alignItems:"center",children:[Object(x.jsx)(o.c,{size:8,token:r,showNetworkIcon:!0}),Object(x.jsxs)(c.a,{typography:"Body1Strong",numberOfLines:1,ml:3,flex:"1",children:["1 "+r.symbol+" = ",Object(x.jsx)(P,{value:+(l||0),unit:d})]}),Object(x.jsx)(n.a,{w:"8",h:"8",alignItems:"center",justifyContent:"center",children:D?Object(x.jsx)(i.b,{size:"sm"}):Object(x.jsx)(a.a,{name:"TrashMini",type:"plain",circle:!0,onPress:F})})]})})}},4071:function(t,e,r){"use strict";r.r(e);var n=r(564),a=r(32),i=r(756),c=r(1),o=r(429),u=r(178),s=r(3338),l=r(3175),f=r(3547),m=r(0),b=function(t){var e=t.alerts,r=t.onRemove,n=e.length,o=Object(i.a)().themeVariant,u=Object(c.useCallback)((function(t){null==r||r(e.find((function(e){return e.price===t})))}),[r,e]);return Object(m.jsx)(a.a,{w:"full",mt:"2",mb:6,borderRadius:"12",bg:"surface-default",borderWidth:"light"===o?1:void 0,borderColor:"border-subdued",children:e.map((function(t,e){return Object(m.jsx)(f.a,{alert:t,divider:e!==n-1,onRemove:u},t.price+"-"+t.currency)}))})};e.default=function(){var t=Object(o.a)(),e=Object(u.o)(),r=Object(l.d)(),a=r.alerts,i=r.loading,f=r.fetchPriceAlerts;return Object(c.useLayoutEffect)((function(){var r=t.formatMessage({id:"title__manage_price_alert"});e.setOptions({title:r})}),[e,t]),a.length?Object(m.jsx)(n.a,{w:"full",h:"full",bg:"background-default",p:"4",maxW:768,mx:"auto",children:Object(m.jsx)(b,{alerts:a,onRemove:f})}):Object(m.jsx)(s.a,{isLoading:i,symbol:"token"})}}}]);