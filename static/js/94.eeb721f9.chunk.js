(this.webpackJsonp=this.webpackJsonp||[]).push([[94],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n,a,o=r(38),i=r(1),c=r(429);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(a||(a={}));var l=function(e){var t=Object(c.a)(),r=e.value,n=e.children,a=Object(o.i)(e,["value","children"]);return n(t.formatNumberToParts(r,a))};l.displayName="FormattedNumberParts";function u(e){var t=function(t){var r=Object(c.a)(),n=t.value,a=t.children,i=Object(o.i)(t,["value","children"]),l="string"===typeof n?new Date(n||0):n;return a("formatDate"===e?r.formatDateToParts(l,i):r.formatTimeToParts(l,i))};return t.displayName=a[e],t}function s(e){var t=function(t){var r=Object(c.a)(),n=t.value,a=t.children,l=Object(o.i)(t,["value","children"]),u=r[e](n,l);if("function"===typeof a)return a(u);var s=r.textComponent||i.Fragment;return i.createElement(s,null,u)};return t.displayName=n[e],t}l.displayName="FormattedNumberParts";s("formatDate"),s("formatTime");var f=s("formatNumber");s("formatList"),s("formatDisplayName"),u("formatDate"),u("formatTime")},3172:function(e,t,r){var n=r(957),a=r(1168),o=r(1169),i=r(951),c=r(767),l=r(958),u=Math.min;e.exports=function(e,t,r){for(var s=r?o:a,f=e[0].length,p=e.length,m=p,d=Array(p),b=1/0,h=[];m--;){var O=e[m];m&&t&&(O=i(O,c(t))),b=u(O.length,b),d[m]=!r&&(t||f>=120&&O.length>=120)?new n(m&&O):void 0}O=e[0];var v=-1,y=d[0];e:for(;++v<f&&h.length<b;){var g=O[v],j=t?t(g):g;if(g=r||0!==g?g:0,!(y?l(y,j):s(h,j,r))){for(m=p;--m;){var w=d[m];if(!(w?l(w,j):s(e[m],j,r)))continue e}y&&y.push(j),h.push(g)}}return h}},3173:function(e,t,r){var n=r(1164);e.exports=function(e){return n(e)?e:[]}},3215:function(e,t,r){var n=r(951),a=r(3172),o=r(1165),i=r(3173),c=o((function(e){var t=n(e,i);return t.length&&t[0]===e[0]?a(t):[]}));e.exports=c},3415:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var n=r(2),a=r.n(n),o=r(15),i=r.n(o),c=r(10),l=r.n(c),u=r(1),s=r.n(u),f=r(768),p=r(24),m=r(27),d=r(1959),b=r(63),h=r(46),O=["children","style"],v=["height","width","arrowProps","actualPlacement","style","borderColor","backgroundColor"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var w=function(e,t){return Math.pow(e*e+t*t,.5)},P=Object(d.a)("PopperContext"),C=l()(P,2),E=C[0],D=C[1],x=function(e){return s.a.createElement(E,e,e.children)},R=s.a.forwardRef((function(e,t){var r=e.children,n=e.style,a=i()(e,O),o=D("PopperContent"),c=o.triggerRef,l=o.shouldFlip,u=o.crossOffset,d=o.offset,v=o.placement,y=o.onClose,w=o.shouldOverlapWithTrigger,P=o.setOverlayRef,C=s.a.useRef(null),E=Object(f.c)({targetRef:c,overlayRef:C,shouldFlip:l,crossOffset:u,isOpen:a.isOpen,offset:d,placement:v,containerPadding:0,onClose:y,shouldOverlapWithTrigger:w}),x=E.overlayProps,R=E.rendered,k=E.arrowProps,S=E.placement,M=[],F=null;s.a.useEffect((function(){P&&P(C)}),[C,P]),s.a.Children.forEach(r,(function(e){s.a.isValidElement(e)&&"PopperArrow"===e.type.displayName?F=s.a.cloneElement(e,{arrowProps:k,actualPlacement:S}):M.push(e)}));var T=0,A=0;F&&(T=15,A=15,F.props.height&&(T=F.props.height),F.props.width&&(A=F.props.width));var _=s.a.useMemo((function(){return N({placement:S,arrowHeight:T,arrowWidth:A})}),[T,A,S]),W=s.a.useMemo((function(){return p.a.create({overlay:g(g({},x.style),{},{opacity:R?1:0,position:"absolute"})})}),[R,x.style]);return Object(h.a)(a)?null:s.a.createElement(m.a,{ref:C,collapsable:!1,style:W.overlay},F,s.a.createElement(b.a,j({style:p.a.flatten([_,n])},a,{ref:t}),M))})),k=s.a.forwardRef((function(e,t){var r=e.height,n=void 0===r?15:r,a=e.width,o=void 0===a?15:a,c=e.arrowProps,l=e.actualPlacement,u=e.style,f=e.borderColor,p=void 0===f?"#52525b":f,m=e.backgroundColor,d=void 0===m?"black":m,h=i()(e,v),O=s.a.useMemo((function(){return S({placement:l,height:n,width:o})}),[l,n,o]),y=s.a.useMemo((function(){return{position:"absolute",width:o,height:n}}),[o,n]),g=s.a.useMemo((function(){return[c.style,y,O,u]}),[y,O,c.style,u]);return s.a.createElement(b.a,j({ref:t,style:g,borderColor:p,backgroundColor:d,zIndex:1},h))})),S=function(e){var t={transform:[]},r=w(15,15);return"top"===e.placement&&e.width&&(t.transform.push({translateX:-e.width/2}),t.transform.push({rotate:"45deg"}),t.bottom=Math.ceil((r-15)/2),t.borderBottomWidth=1,t.borderRightWidth=1),"bottom"===e.placement&&e.width&&(t.transform.push({translateX:-e.width/2}),t.transform.push({rotate:"45deg"}),t.top=Math.ceil((r-15)/2),t.borderTopWidth=1,t.borderLeftWidth=1),"left"===e.placement&&e.height&&(t.transform.push({translateY:-e.height/2}),t.transform.push({rotate:"45deg"}),t.right=Math.ceil((r-15)/2),t.borderTopWidth=1,t.borderRightWidth=1),"right"===e.placement&&e.height&&(t.transform.push({translateY:-e.height/2}),t.transform.push({rotate:"45deg"}),t.left=Math.ceil((r-15)/2),t.borderBottomWidth=1,t.borderLeftWidth=1),t},N=function(e){var t=e.placement,r=e.arrowHeight,n=w(r,r)/2;return"top"===t?{marginBottom:n}:"bottom"===t?{marginTop:n}:"left"===t?{marginRight:n}:"right"===t?{marginLeft:n}:{}};k.displayName="PopperArrow",x.Content=R,x.Arrow=k},3777:function(e,t,r){"use strict";r.d(t,"a",(function(){return he}));var n=r(2),a=r.n(n),o=r(10),i=r.n(o),c=r(15),l=r.n(c),u=r(1),s=r.n(u),f=r(63),p=r(251),m=r(3415),d=r(775),b=r(314),h=r(3052),O=r(1171),v=r.n(O),y=r(16),g=r.n(y),j=r(340),w=(r(780),r(148));r(222),r(52);var P=s.a.createContext(null);new Set;var C=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];C.join(",");C.push('[tabindex]:not([tabindex="-1"])');C.join(':not([tabindex="-1"]),');var E=s.a.createContext(null);s.a.forwardRef((function(e,t){var r=e.children,n=Object(j.a)(e,["children"]),a=Object(w.a)({},n,{ref:t});return s.a.createElement(E.Provider,{value:a},r)}));var D=r(246),x=r(23),R=r(396),k=function(){var e=Object(u.useContext)(P);return{onKeyDown:function(t){switch(t.key){case"ArrowDown":t.preventDefault(),e.focusNext({wrap:!0});break;case"ArrowUp":t.preventDefault(),e.focusPrevious({wrap:!0})}},accessibilityRole:"menu"}},S="data-nativebase-menu-item",N=function(e){var t;return null!==(t=e.getAttribute(S))&&void 0!==t?t:""},M=r(1193),F=r(721),T=r(315),A=s.a.createContext({closeOnSelect:!0,onClose:function(){}}),_=r(3053),W=r(46),I=["trigger","closeOnSelect","children","onOpen","onClose","isOpen","defaultIsOpen","placement"],L=["_overlay","_presenceTransition","_backdrop","useRNModal"],K=["menuRef","children"];function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var G=function(e){var t=e.menuRef,r=e.children,n=l()(e,K),a=k(),o=function(e){return{onKeyDown:function(t){if(e.onKeyDown&&e.onKeyDown(t),1===t.key.length&&!(t.ctrlKey||t.altKey||t.metaKey)){var r=t.currentTarget,n=Array.from(r.querySelectorAll("[".concat(S,"]"))).map(N),a=t.key,o=n.find((function(e){return e.toLowerCase().startsWith(a)})),i=r.querySelector("[".concat(S,'="').concat(o,'"]'));i&&setTimeout((function(){return i.focus()}))}}}}(a);return s.a.createElement(f.a,B({},n,a,o,{ref:t}),s.a.createElement(b.a,null,r))},H=Object(u.memo)(Object(u.forwardRef)((function(e,t){var r=e.trigger,n=e.closeOnSelect,a=void 0===n||n,o=e.children,c=e.onOpen,u=e.onClose,f=e.isOpen,b=e.defaultIsOpen,O=e.placement,y=void 0===O?"bottom left":O,g=l()(e,I),j=s.a.useRef(null),w=Object(h.a)({value:f,defaultValue:b,onChange:function(e){e?c&&c():u&&u()}}),P=i()(w,2),C=P[0],E=P[1],x=Object(p.a)("Menu",g),k=x._overlay,S=x._presenceTransition,N=x._backdrop,K=x.useRNModal,V=l()(x,L),H=s.a.useCallback((function(){E(!0)}),[E]),J=s.a.useCallback((function(){E(!1)}),[E]),U=function(e){var t=e.handleOpen,r=e.isOpen,n=v()();return s.a.useContext(R.a).disableCSSMediaQueries||(n=Object(D.e)()),{onKeyDownCapture:function(e){[" ","Enter","ArrowUp","ArrowDown"].includes(e.key)&&(e.preventDefault(),t())},"aria-haspopup":"menu","aria-expanded":!!r||void 0,nativeID:n}}({handleOpen:H,isOpen:C});return s.a.useEffect((function(){C&&d.a.announceForAccessibility("Popup window")}),[C]),Object(W.a)(V)?null:s.a.createElement(s.a.Fragment,null,r(q(q({},U),{},{ref:j,onPress:H}),{open:C}),s.a.createElement(_.a,B({isOpen:C,onRequestClose:J,useRNModalOnAndroid:!0,useRNModal:K},k,{unmountOnExit:!0}),s.a.createElement(F.a,B({visible:C},S),s.a.createElement(m.a,B({triggerRef:j,onClose:J,placement:y},V),s.a.createElement(M.a,B({onPress:J},N)),s.a.createElement(m.a.Content,{isOpen:C},s.a.createElement(A.Provider,{value:{closeOnSelect:a,onClose:J}},s.a.createElement(T.a,{contain:!0,restoreFocus:!0,autoFocus:!0},s.a.createElement(G,B({menuRef:t},V),o))))))))}))),J=r(137),U=["title","children"],X=["_title"];function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Z=Object(u.memo)(Object(u.forwardRef)((function(e,t){var r=e.title,n=e.children,a=l()(e,U),o=Object(p.a)("MenuGroup",a),i=o._title,c=l()(o,X);return Object(W.a)(z(z({},a),{},{title:r}))?null:s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,Q({},c,{ref:t}),s.a.createElement(J.a,i,r)),n)}))),$=r(362),ee=r(365),te=r(554),re=["children","isDisabled","onPress","textValue"],ne=["_text","_stack"];function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var oe=Object(u.memo)(Object(u.forwardRef)((function(e,t){var r=e.children,n=e.isDisabled,a=e.onPress,o=e.textValue,c=l()(e,re),u=s.a.useContext(A),f=u.closeOnSelect,m=u.onClose,d=s.a.useRef(null),b=Object(ee.b)([d,t]),h=Object(p.a)("MenuItem",c,{isDisabled:n},{cascadePseudoProps:!0}),O=h._text,v=h._stack,y=l()(h,ne),g=s.a.useState(""),j=i()(g,2),w=j[0],P=j[1];s.a.useEffect((function(){var e,t=d.current;t&&P((null!==(e=t.textContent)&&void 0!==e?e:"").trim())}),[r]);var C=function(e){var t=e.textValue,r=e.ref;return{accessibilityRole:"menuitem",dataSet:{nativebaseMenuItem:t},onHoverIn:function(){r.current&&"web"===x.a.OS&&r.current.focus()}}}({textValue:null!==o&&void 0!==o?o:w,ref:d});return Object(W.a)(c)?null:s.a.createElement($.a,ae({},C,y,{ref:b,disabled:n,accessibilityState:{disabled:n},onPress:function(e){n||(a&&a(e),f&&m&&m())}}),s.a.createElement(te.a,v,s.a.Children.map(r,(function(e,t){return"string"===typeof e||"number"===typeof e?s.a.createElement(J.a,ae({key:"menu-item-".concat(t)},O),e):e}))))}))),ie=r(3056),ce=["type","defaultValue","value","onChange"];function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var ue=s.a.createContext({values:[],onChange:function(e){},type:"checkbox"}),se=Object(u.memo)(Object(u.forwardRef)((function(e,t){var r=e.type,n=e.defaultValue,a=e.value,o=e.onChange,c=l()(e,ce),u=n?Array.isArray(n)?n:[n]:[],f=s.a.useState(u),p=i()(f,2),m=p[0],d=p[1];return Object(W.a)(c)?null:s.a.createElement(ue.Provider,{value:{values:a?Array.isArray(a)?a:[a]:m,onChange:function(e){if("checkbox"===r){var t=g()(m);m.includes(e)?(t.splice(t.indexOf(e),1),d(t)):(t.push(e),d(t)),o&&o(t)}else"radio"===r&&(d([e]),o&&o(e))},type:r}},s.a.createElement(Z,le({},c,{ref:t})))}))),fe=["value"],pe=["children","onPress","_icon","_text"];function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var de=Object(u.memo)(Object(u.forwardRef)((function(e,t){var r=e.value,n=l()(e,fe),a=Object(u.useContext)(ue),o=a.values,i=a.onChange,c=a.type,f=o.includes(r),m=function(e){var t=e.isChecked,r=e.type;return{accessibilityRole:"menuitem"+("web"===x.a.OS?r:""),accessibilityState:{checked:t},accessibilityChecked:t}}({isChecked:f,type:c}),d=Object(p.a)("MenuItem",n,{isChecked:f}),b=d.children,h=d.onPress,O=d._icon,v=d._text,y=l()(d,pe);return Object(W.a)(n)?null:s.a.createElement(oe,me({},y,m,{accessibilityRole:"button",onPress:function(e){i(r),h&&h(e)},ref:t}),s.a.createElement(ie.a,O),s.a.Children.map(b,(function(e,t){return"string"===typeof e||"number"===typeof e?s.a.createElement(J.a,me({key:"menu-item-option-".concat(t)},v),e):e})))}))),be=H;be.Item=oe,be.Group=Z,be.ItemOption=de,be.OptionGroup=se;var he=be}}]);