(this.webpackJsonp=this.webpackJsonp||[]).push([[80],{3081:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(766),a=n(1),i=n(3335),o=n(3022),u=n(3336),c=n(3343),s=n(3337),l=n(3344),f=n(1150),d=function(e){switch(e){case"zh-CN":return l.a;case"en-US":default:return f.a}};function m(){var e=Object(r.a)().locale,t=Object(a.useCallback)((function(t,n){var r;r="string"===typeof t?Object(i.a)(t):t;try{return Object(o.a)(r,null!=n?n:"PPp",{locale:d(e)})}catch(a){return"-"}}),[e]),n=Object(a.useCallback)((function(e,n){var r,a;a="string"===typeof e?Object(i.a)(e):e;var o=(new Date).getFullYear(),u=(new Date).getMonth(),c="LLL dd yyyy, HH:mm";return(o===a.getFullYear()&&null!=n&&n.hideTheYear||null!=n&&n.hideYear)&&(c=c.replace(" yyyy","")),(u===a.getMonth()&&null!=n&&n.hideTheMonth||null!=n&&n.hideMonth)&&(c=c.replace("LLL ","")),null!=n&&n.hideTimeForever&&(c=c.replace(", HH:mm","")),null!=(r=t(a,c))?r:""}),[t]),l=Object(a.useCallback)((function(e,n){var r,a,o;return a="string"===typeof e?Object(i.a)(e):e,(new Date).getFullYear()===a.getFullYear()&&null!=n&&n.hideTheYear||null!=n&&n.hideYear?null!=(o=t(a,"MMMM"))?o:"":null!=(r=t(a,"MMMM, yyyy"))?r:""}),[t]),f=Object(a.useCallback)((function(t,n){var r;return null!=(r=Object(u.a)(t,n,{locale:d(e)}))?r:""}),[e]),m=Object(a.useCallback)((function(t){var n;return null!=(n=Object(c.a)(t,{addSuffix:!0,locale:d(e)}))?n:""}),[e]),b=Object(a.useCallback)((function(t){var n;return null!=(n=Object(s.a)(t,{locale:d(e)}))?n:""}),[e]);return Object(a.useMemo)((function(){return{format:t,formatDate:n,formatMonth:l,formatDistanceToNow:m,formatDuration:b,formatDistanceStrict:f}}),[t,n,l,m,b,f])}},3092:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(156),a=n(104);function i(e,t){Object(a.a)(2,arguments);var n=Object(r.a)(e),i=Object(r.a)(t),o=n.getTime()-i.getTime();return o<0?-1:o>0?1:o}},3107:function(e,t,n){"use strict";function r(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}n.d(t,"a",(function(){return r}))},3189:function(e,t,n){"use strict";var r=n(32),a=n(564),i=n(458),o=n(0),u=function(e){var t=e.children,n=e.footer,u=Object(i.a)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.a,{alignSelf:"stretch",flex:1,px:4,py:{base:4,sm:8},_contentContainerStyle:{w:"full",maxW:800,mx:"auto"},children:t}),n?Object(o.jsx)(r.a,{mx:4,py:4,mb:u.bottom+"px",children:n}):null]})};u.defaultProps={},t.a=u},3281:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(32),o=n(85),u=n(72),c=n(100),s=n(15),l=n.n(s),f=n(1),d=n(3081),m=n(0),b=["backupTime","numOfHDWallets","numOfImportedAccounts","numOfWatchingAccounts","numOfContacts","size"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.backupTime,n=e.numOfHDWallets,r=e.numOfImportedAccounts,a=e.numOfWatchingAccounts,s=e.numOfContacts,h=e.size,j=l()(e,b),g=Object(c.a)(),v=Object(d.a)(),p=Object(f.useMemo)((function(){return[{iconName:"WalletOutline",count:n},{iconName:"InboxArrowDownOutline",count:r},{iconName:"EyeOutline",count:a},{iconName:"BookOpenOutline",count:s}]}),[s,n,r,a]);return Object(m.jsxs)(i.a,O(O({alignItems:"heading"===h&&g?"center":void 0},j),{},{children:[Object(m.jsx)(u.a,{typography:"heading"===h?"PageHeading":"Body1Strong",children:v.format(new Date(t),"MMM d, yyyy, HH:mm")}),Object(m.jsx)(i.a,{flexDirection:"row",mt:"heading"===h?3:1,mx:-3,flexWrap:"wrap",children:p.map((function(e,t){return Object(m.jsxs)(i.a,{flexDirection:"row",mx:3,children:[Object(m.jsx)(o.a,{name:e.iconName,size:20,color:"icon-subdued"}),Object(m.jsx)(u.a,{typography:"Body2",color:"text-subdued",pl:2,children:e.count})]},t)}))})]}))}},3335:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(229),a=n(104),i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},o=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,u=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function s(e,t){Object(a.a)(1,arguments);var n=t||{},i=null==n.additionalDigits?2:Object(r.a)(n.additionalDigits);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,u=l(e);if(u.date){var c=f(u.date,i);o=d(c.restDateString,c.year)}if(isNaN(o)||!o)return new Date(NaN);var s,m=o.getTime(),h=0;if(u.time&&(h=b(u.time),isNaN(h)||null===h))return new Date(NaN);if(!u.timezone){var j=new Date(m+h),g=new Date(0);return g.setFullYear(j.getUTCFullYear(),j.getUTCMonth(),j.getUTCDate()),g.setHours(j.getUTCHours(),j.getUTCMinutes(),j.getUTCSeconds(),j.getUTCMilliseconds()),g}return s=O(u.timezone),isNaN(s)?new Date(NaN):new Date(m+h+s)}function l(e){var t,n={},r=e.split(i.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],i.timeZoneDelimiter.test(n.date)&&(n.date=e.split(i.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=i.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function f(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function d(e,t){if(null===t)return null;var n=e.match(o);if(!n)return null;var r=!!n[4],a=m(n[1]),i=m(n[2])-1,u=m(n[3]),c=m(n[4]),s=m(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,c,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,c,s):new Date(NaN);var l=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(j[t]||(g(e)?29:28))}(t,i,u)&&function(e,t){return t>=1&&t<=(g(e)?366:365)}(t,a)?(l.setUTCFullYear(t,i,Math.max(a,u)),l):new Date(NaN)}function m(e){return e?parseInt(e):1}function b(e){var t=e.match(u);if(!t)return null;var n=h(t[1]),r=h(t[2]),a=h(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?36e5*n+6e4*r+1e3*a:NaN}function h(e){return e&&parseFloat(e.replace(",","."))||0}function O(e){if("Z"===e)return 0;var t=e.match(c);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(36e5*r+6e4*a):NaN}var j=[31,null,31,30,31,30,31,31,30,31,30,31];function g(e){return e%400===0||e%4===0&&e%100}},3336:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(656),a=n(3092),i=n(156),o=n(3107),u=n(1150),c=n(104);function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(c.a)(2,arguments);var s=n.locale||u.a;if(!s.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var l=Object(a.a)(e,t);if(isNaN(l))throw new RangeError("Invalid time value");var f,d,m=Object(o.a)(n);m.addSuffix=Boolean(n.addSuffix),m.comparison=l,l>0?(f=Object(i.a)(t),d=Object(i.a)(e)):(f=Object(i.a)(e),d=Object(i.a)(t));var b,h=null==n.roundingMethod?"round":String(n.roundingMethod);if("floor"===h)b=Math.floor;else if("ceil"===h)b=Math.ceil;else{if("round"!==h)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");b=Math.round}var O,j=d.getTime()-f.getTime(),g=j/6e4,v=Object(r.a)(d)-Object(r.a)(f),p=(j-v)/6e4;if("second"===(O=null==n.unit?g<1?"second":g<60?"minute":g<1440?"hour":p<43200?"day":p<525600?"month":"year":String(n.unit))){var y=b(j/1e3);return s.formatDistance("xSeconds",y,m)}if("minute"===O){var D=b(g);return s.formatDistance("xMinutes",D,m)}if("hour"===O){var w=b(g/60);return s.formatDistance("xHours",w,m)}if("day"===O){var M=b(p/1440);return s.formatDistance("xDays",M,m)}if("month"===O){var x=b(p/43200);return 12===x&&"month"!==n.unit?s.formatDistance("xYears",1,m):s.formatDistance("xMonths",x,m)}if("year"===O){var T=b(p/525600);return s.formatDistance("xYears",T,m)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}},3337:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1150),a=["years","months","weeks","days","hours","minutes","seconds"];function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var n=(null===t||void 0===t?void 0:t.format)||a,i=(null===t||void 0===t?void 0:t.locale)||r.a,o=(null===t||void 0===t?void 0:t.zero)||!1,u=(null===t||void 0===t?void 0:t.delimiter)||" ",c=n.reduce((function(t,n){var r="x".concat(n.replace(/(^.)/,(function(e){return e.toUpperCase()})));return"number"===typeof e[n]&&(o||e[n])&&i.formatDistance?t.concat(i.formatDistance(r,e[n])):t}),[]).join(u);return c}},3343:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(3092),a=n(156),i=n(104);function o(e,t){Object(i.a)(2,arguments);var n=Object(a.a)(e),r=Object(a.a)(t),o=n.getFullYear()-r.getFullYear(),u=n.getMonth()-r.getMonth();return 12*o+u}function u(e){Object(i.a)(1,arguments);var t=Object(a.a)(e);return t.setHours(23,59,59,999),t}function c(e){Object(i.a)(1,arguments);var t=Object(a.a)(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function s(e){Object(i.a)(1,arguments);var t=Object(a.a)(e);return u(t).getTime()===c(t).getTime()}function l(e,t){Object(i.a)(2,arguments);var n,u=Object(a.a)(e),c=Object(a.a)(t),l=Object(r.a)(u,c),f=Math.abs(o(u,c));if(f<1)n=0;else{1===u.getMonth()&&u.getDate()>27&&u.setDate(30),u.setMonth(u.getMonth()-l*f);var d=Object(r.a)(u,c)===-l;s(Object(a.a)(e))&&1===f&&1===Object(r.a)(e,c)&&(d=!1),n=l*(f-Number(d))}return 0===n?0:n}function f(e,t){return Object(i.a)(2,arguments),Object(a.a)(e).getTime()-Object(a.a)(t).getTime()}var d={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function m(e){return e?d[e]:d.trunc}function b(e,t,n){Object(i.a)(2,arguments);var r=f(e,t)/1e3;return m(null===n||void 0===n?void 0:n.roundingMethod)(r)}var h=n(1150),O=n(3107),j=n(656);function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(i.a)(2,arguments);var o=n.locale||h.a;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=Object(r.a)(e,t);if(isNaN(u))throw new RangeError("Invalid time value");var c,s,f=Object(O.a)(n);f.addSuffix=Boolean(n.addSuffix),f.comparison=u,u>0?(c=Object(a.a)(t),s=Object(a.a)(e)):(c=Object(a.a)(e),s=Object(a.a)(t));var d,m=b(s,c),g=(Object(j.a)(s)-Object(j.a)(c))/1e3,v=Math.round((m-g)/60);if(v<2)return n.includeSeconds?m<5?o.formatDistance("lessThanXSeconds",5,f):m<10?o.formatDistance("lessThanXSeconds",10,f):m<20?o.formatDistance("lessThanXSeconds",20,f):m<40?o.formatDistance("halfAMinute",null,f):m<60?o.formatDistance("lessThanXMinutes",1,f):o.formatDistance("xMinutes",1,f):0===v?o.formatDistance("lessThanXMinutes",1,f):o.formatDistance("xMinutes",v,f);if(v<45)return o.formatDistance("xMinutes",v,f);if(v<90)return o.formatDistance("aboutXHours",1,f);if(v<1440){var p=Math.round(v/60);return o.formatDistance("aboutXHours",p,f)}if(v<2520)return o.formatDistance("xDays",1,f);if(v<43200){var y=Math.round(v/1440);return o.formatDistance("xDays",y,f)}if(v<86400)return d=Math.round(v/43200),o.formatDistance("aboutXMonths",d,f);if((d=l(s,c))<12){var D=Math.round(v/43200);return o.formatDistance("xMonths",D,f)}var w=d%12,M=Math.floor(d/12);return w<3?o.formatDistance("aboutXYears",M,f):w<9?o.formatDistance("overXYears",M,f):o.formatDistance("almostXYears",M+1,f)}function v(e,t){return Object(i.a)(1,arguments),g(e,Date.now(),t)}},3344:function(e,t,n){"use strict";var r={lessThanXSeconds:{one:"\u4e0d\u5230 1 \u79d2",other:"\u4e0d\u5230 {{count}} \u79d2"},xSeconds:{one:"1 \u79d2",other:"{{count}} \u79d2"},halfAMinute:"\u534a\u5206\u949f",lessThanXMinutes:{one:"\u4e0d\u5230 1 \u5206\u949f",other:"\u4e0d\u5230 {{count}} \u5206\u949f"},xMinutes:{one:"1 \u5206\u949f",other:"{{count}} \u5206\u949f"},xHours:{one:"1 \u5c0f\u65f6",other:"{{count}} \u5c0f\u65f6"},aboutXHours:{one:"\u5927\u7ea6 1 \u5c0f\u65f6",other:"\u5927\u7ea6 {{count}} \u5c0f\u65f6"},xDays:{one:"1 \u5929",other:"{{count}} \u5929"},aboutXWeeks:{one:"\u5927\u7ea6 1 \u4e2a\u661f\u671f",other:"\u5927\u7ea6 {{count}} \u4e2a\u661f\u671f"},xWeeks:{one:"1 \u4e2a\u661f\u671f",other:"{{count}} \u4e2a\u661f\u671f"},aboutXMonths:{one:"\u5927\u7ea6 1 \u4e2a\u6708",other:"\u5927\u7ea6 {{count}} \u4e2a\u6708"},xMonths:{one:"1 \u4e2a\u6708",other:"{{count}} \u4e2a\u6708"},aboutXYears:{one:"\u5927\u7ea6 1 \u5e74",other:"\u5927\u7ea6 {{count}} \u5e74"},xYears:{one:"1 \u5e74",other:"{{count}} \u5e74"},overXYears:{one:"\u8d85\u8fc7 1 \u5e74",other:"\u8d85\u8fc7 {{count}} \u5e74"},almostXYears:{one:"\u5c06\u8fd1 1 \u5e74",other:"\u5c06\u8fd1 {{count}} \u5e74"}};var a=n(771),i={date:Object(a.a)({formats:{full:"y'\u5e74'M'\u6708'd'\u65e5' EEEE",long:"y'\u5e74'M'\u6708'd'\u65e5'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},defaultWidth:"full"}),time:Object(a.a)({formats:{full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:Object(a.a)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},o=n(104),u=n(515);function c(e,t,n,r){return function(e,t,n){Object(o.a)(2,arguments);var r=Object(u.a)(e,n),a=Object(u.a)(t,n);return r.getTime()===a.getTime()}(e,t,n)?r:e.getTime()>t.getTime()?"'\u4e0b\u4e2a'"+r:"'\u4e0a\u4e2a'"+r}var s={lastWeek:c,yesterday:"'\u6628\u5929' p",today:"'\u4eca\u5929' p",tomorrow:"'\u660e\u5929' p",nextWeek:c,other:"PP p"};var l=n(570);var f={ordinalNumber:function(e,t){var n=Number(e);switch(String((t||{}).unit)){case"date":return n.toString()+"\u65e5";case"hour":return n.toString()+"\u65f6";case"minute":return n.toString()+"\u5206";case"second":return n.toString()+"\u79d2";default:return"\u7b2c "+n.toString()}},era:Object(l.a)({values:{narrow:["\u524d","\u516c\u5143"],abbreviated:["\u524d","\u516c\u5143"],wide:["\u516c\u5143\u524d","\u516c\u5143"]},defaultWidth:"wide"}),quarter:Object(l.a)({values:{narrow:["1","2","3","4"],abbreviated:["\u7b2c\u4e00\u5b63","\u7b2c\u4e8c\u5b63","\u7b2c\u4e09\u5b63","\u7b2c\u56db\u5b63"],wide:["\u7b2c\u4e00\u5b63\u5ea6","\u7b2c\u4e8c\u5b63\u5ea6","\u7b2c\u4e09\u5b63\u5ea6","\u7b2c\u56db\u5b63\u5ea6"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(l.a)({values:{narrow:["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u5341\u4e00","\u5341\u4e8c"],abbreviated:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],wide:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"]},defaultWidth:"wide"}),day:Object(l.a)({values:{narrow:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],short:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],abbreviated:["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"],wide:["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"]},defaultWidth:"wide"}),dayPeriod:Object(l.a)({values:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u51cc\u6668",noon:"\u5348",morning:"\u65e9",afternoon:"\u4e0b\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u95f4"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u95f4"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u51cc\u6668",noon:"\u5348",morning:"\u65e9",afternoon:"\u4e0b\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u95f4"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u95f4"}},defaultFormattingWidth:"wide"})},d=n(1167),m=n(571),b={code:"zh-CN",formatDistance:function(e,t,n){var a;return n=n||{},a="string"===typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?a+"\u5185":a+"\u524d":a},formatLong:i,formatRelative:function(e,t,n,r){var a=s[e];return"function"===typeof a?a(t,n,r,"eeee p"):a},localize:f,match:{ordinalNumber:Object(d.a)({matchPattern:/^(\u7b2c\s*)?\d+(\u65e5|\u65f6|\u5206|\u79d2)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(m.a)({matchPatterns:{narrow:/^(\u524d)/i,abbreviated:/^(\u524d)/i,wide:/^(\u516c\u5143\u524d|\u516c\u5143)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u524d)/i,/^(\u516c\u5143)/i]},defaultParseWidth:"any"}),quarter:Object(m.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b/i,wide:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b\u949f/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|\u4e00)/i,/(2|\u4e8c)/i,/(3|\u4e09)/i,/(4|\u56db)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(m.a)({matchPatterns:{narrow:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])/i,abbreviated:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00]|\d|1[12])\u6708/i,wide:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])\u6708/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u4e00/i,/^\u4e8c/i,/^\u4e09/i,/^\u56db/i,/^\u4e94/i,/^\u516d/i,/^\u4e03/i,/^\u516b/i,/^\u4e5d/i,/^\u5341(?!(\u4e00|\u4e8c))/i,/^\u5341\u4e00/i,/^\u5341\u4e8c/i],any:[/^\u4e00|1/i,/^\u4e8c|2/i,/^\u4e09|3/i,/^\u56db|4/i,/^\u4e94|5/i,/^\u516d|6/i,/^\u4e03|7/i,/^\u516b|8/i,/^\u4e5d|9/i,/^\u5341(?!(\u4e00|\u4e8c))|10/i,/^\u5341\u4e00|11/i,/^\u5341\u4e8c|12/i]},defaultParseWidth:"any"}),day:Object(m.a)({matchPatterns:{narrow:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,short:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,abbreviated:/^\u5468[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,wide:/^\u661f\u671f[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/\u65e5/i,/\u4e00/i,/\u4e8c/i,/\u4e09/i,/\u56db/i,/\u4e94/i,/\u516d/i]},defaultParseWidth:"any"}),dayPeriod:Object(m.a)({matchPatterns:{any:/^(\u4e0a\u5348?|\u4e0b\u5348?|\u5348\u591c|[\u4e2d\u6b63]\u5348|\u65e9\u4e0a?|\u4e0b\u5348|\u665a\u4e0a?|\u51cc\u6668|)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u4e0a\u5348?/i,pm:/^\u4e0b\u5348?/i,midnight:/^\u5348\u591c/i,noon:/^[\u4e2d\u6b63]\u5348/i,morning:/^\u65e9\u4e0a/i,afternoon:/^\u4e0b\u5348/i,evening:/^\u665a\u4e0a?/i,night:/^\u51cc\u6668/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.a=b},3549:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(72),o=n(115),u=n(289),c=n(3),s=n.n(c),l=n(10),f=n.n(l),d=n(130),m=n(32),b=n(85),h=n(1),O=n(429),j=n(24),g=n(43),v=n(178),p=n(145),y=n(3281),D=n(3189),w=n(0);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x=function(e){var t=e.backupUUID,n=e.backupTime,r=e.numOfHDWallets,a=e.numOfImportedAccounts,i=e.numOfWatchingAccounts,o=e.numOfContacts,u=Object(v.o)();return Object(w.jsxs)(d.a,{flexDirection:"row",justifyContent:"space-between",alignItems:"center",p:2,mt:2,rounded:"xl",_hover:{bgColor:"surface-hovered"},_pressed:{bgColor:"surface-pressed"},onPress:function(){u.navigate(p.a.CloudBackupDetails,{backupUUID:t,backupTime:n,numOfHDWallets:r,numOfImportedAccounts:a,numOfWatchingAccounts:i,numOfContacts:o})},children:[Object(w.jsx)(y.a,{backupTime:n,numOfHDWallets:r,numOfImportedAccounts:a,numOfWatchingAccounts:i,numOfContacts:o,size:"normal"}),Object(w.jsx)(m.a,{children:Object(w.jsx)(b.a,{name:"ChevronRightMini",color:"icon-subdued",size:20})})]})};t.default=function(){var e=Object(O.a)(),t=Object(v.o)(),n=g.a.serviceCloudBackup;Object(h.useLayoutEffect)((function(){var n=e.formatMessage({id:"content__previous_backups"});t.setOptions({title:n})}),[t,e]);var r=Object(h.useState)(!0),c=f()(r,2),l=c[0],d=c[1],p=Object(h.useState)([]),y=f()(p,2),T=y[0],P=y[1];return Object(h.useEffect)((function(){(function(){var e=s()((function*(){P(yield n.getPreviousBackups()),d(!1)}));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(w.jsx)(D.a,{children:l?Object(w.jsx)(o.a,{py:16,children:Object(w.jsx)(u.b,{size:"lg"})}):Object(w.jsx)(w.Fragment,{children:T.map((function(e,t){return Object(w.jsxs)(m.a,{children:[0!==t?Object(w.jsx)(m.a,{borderBottomWidth:j.a.hairlineWidth,borderBottomColor:"divider",my:6,bgColor:"divider"}):null,Object(w.jsxs)(m.a,{flexDirection:"row",children:[Object(w.jsx)(b.a,{name:"iPadOS"===e[0].deviceInfo.osName?"DeviceTabletOutline":"DeviceMobileOutline",size:20}),Object(w.jsx)(i.a,{typography:"Body2Strong",color:"text-subdued",ml:2,children:e[0].deviceInfo.deviceName})]}),Object(w.jsx)(m.a,{mx:-2,children:e.map((function(e){return Object(w.jsx)(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),e.backupUUID)}))})]},t)}))})})}}}]);