(this.webpackJsonp=this.webpackJsonp||[]).push([[9,83,84],{3029:function(e,t,n){"use strict";n.r(t),n.d(t,"stackScreenList",(function(){return ge})),n.d(t,"StackNavigator",(function(){return ye}));var r=n(32),c=n(260),o=n(2),a=n.n(o),i=n(15),l=n.n(i),u=n(124),s=n(10),d=n.n(s),f=n(100),b=n(1),O=n(3570),j=n(292),p=n(3164),h=n(2076),m=n(43),v=n(343),g=n(466),y=n(14),S=n(3),w=n.n(S),k=n(202),x=n(20),P=n(3184),C=n(394),E=n(3223),T=C.b.actions,D=T.updateIsLoading,A=T.updatePreloadingCreateAccount,B=T.updateSelectedWalletId,L=T.updateSelectedNetworkId;function I(){return function(){var e=Object(E.a)(),t=e.isOpenDelay,n=(e.isCloseFromOpen,e.preloadingCreateAccount),r=e.activeWallet,c=(e.activeNetwork,e.activeAccount,e.activeWalletRef),o=e.activeNetworkRef,a=e.isOpen,i=m.a.serviceAccountSelector,l=m.a.dispatch;Object(b.useRef)().current=t&&a,Object(b.useRef)(n).current=n;var u=Object(b.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.runAfterInteractions;return t?k.a.runAfterInteractions((function(){return i.setSelectedWalletToActive()})):i.setSelectedWalletToActive()}),[i]);Object(b.useEffect)((function(){return x.a.accountSelector.info("useAccountSelectorEffects mount"),function(){x.a.accountSelector.info("useAccountSelectorEffects unmounted")}}),[]),Object(b.useEffect)((function(){r&&u({runAfterInteractions:!0})}),[r,u]),Object(P.a)((function(){(function(){var e=w()((function*(){if(!t){var e,n,r=null==(e=c.current)?void 0:e.id,a=null==(n=o.current)?void 0:n.id;l(D(!1),A(void 0),B(r),L(a)),x.a.accountSelector.info("Reset selected walletId & networkId after close",{networkId:a,walletId:r})}}));return function(){return e.apply(this,arguments)}})()()}),[t])}(),null}var R=n(125),M=n(3185);function N(){return function(){var e=Object(M.a)(),t=e.visible,n=e.existsHardwareWallet;Object(b.useEffect)((function(){return x.a.accountSelector.info("WalletSelectorTrigger mount"),function(){x.a.accountSelector.info("WalletSelectorTrigger unmounted")}}),[]),Object(b.useEffect)((function(){x.a.accountSelector.info("WalletSelector visible="+t.toString()),t&&n&&R.a.syncDeviceConnectStatus()}),[n,t])}(),null}var W=n(463),F=n(145),H=n(0),G=["name","component"];function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=Object(W.a)((function(){return n.e(87).then(n.bind(null,3551))})),V=Object(W.a)((function(){return n.e(56).then(n.bind(null,3437))})),J=Object(W.a)((function(){return n.e(91).then(n.bind(null,3562))})),q=Object(W.a)((function(){return Promise.all([n.e(3),n.e(46)]).then(n.bind(null,4064))})),K=Object(W.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(8),n.e(3),n.e(6),n.e(4),n.e(7),n.e(109)]).then(n.bind(null,4065))})),Q=Object(W.a)((function(){return Promise.all([n.e(13),n.e(38)]).then(n.bind(null,4100))})),X=Object(W.a)((function(){return n.e(847).then(n.bind(null,4066))})),Y=Object(W.a)((function(){return n.e(79).then(n.bind(null,4067))})),Z=Object(W.a)((function(){return Promise.all([n.e(1),n.e(49)]).then(n.bind(null,3428))})),$=Object(W.a)((function(){return n.e(80).then(n.bind(null,3549))})),ee=Object(W.a)((function(){return n.e(97).then(n.bind(null,4068))})),te=Object(W.a)((function(){return n.e(112).then(n.bind(null,4069))})),ne=Object(W.a)((function(){return n.e(85).then(n.bind(null,4070))})),re=Object(W.a)((function(){return n.e(89).then(n.bind(null,4071))})),ce=Object(W.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(8),n.e(3),n.e(6),n.e(4),n.e(7),n.e(106)]).then(n.bind(null,4097))})),oe=Object(W.a)((function(){return n.e(849).then(n.bind(null,4072))})),ae=Object(W.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(8),n.e(13),n.e(3),n.e(6),n.e(4),n.e(7),n.e(69)]).then(n.bind(null,4101))})),ie=Object(W.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(8),n.e(3),n.e(6),n.e(4),n.e(7),n.e(110)]).then(n.bind(null,5686))})),le=Object(W.a)((function(){return n.e(850).then(n.bind(null,5667))})),ue=Object(W.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(8),n.e(3),n.e(6),n.e(4),n.e(7),n.e(95)]).then(n.bind(null,4102))})),se=Object(W.a)((function(){return Promise.all([n.e(0),n.e(52)]).then(n.bind(null,4073))})),de=Object(W.a)((function(){return Promise.all([n.e(0),n.e(59)]).then(n.bind(null,4074))})),fe=Object(W.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(8),n.e(3),n.e(6),n.e(4),n.e(7),n.e(14)]).then(n.bind(null,3038))})),be=Object(W.a)((function(){return n.e(68).then(n.bind(null,4110))})),Oe=Object(W.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(8),n.e(13),n.e(17),n.e(44),n.e(3),n.e(6),n.e(4),n.e(7),n.e(15),n.e(31)]).then(n.bind(null,5670))})),je=Object(W.a)((function(){return n.e(111).then(n.bind(null,4117))})),pe=Object(W.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(8),n.e(3),n.e(6),n.e(4),n.e(7),n.e(90)]).then(n.bind(null,4108))})),he=Object(W.a)((function(){return Promise.all([n.e(0),n.e(58)]).then(n.bind(null,4087))})),me=Object(W.a)((function(){return n.e(70).then(n.bind(null,4106))})),ve=Object(W.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(8),n.e(17),n.e(3),n.e(6),n.e(4),n.e(7),n.e(108)]).then(n.bind(null,4098))})),ge=[{name:F.a.FullTokenListScreen,component:q,i18nTitle:"asset__tokens"},{name:F.a.ScreenTokenDetail,component:ae,alwaysShowBackButton:!0},{name:F.a.ScreenOnekeyLiteDetail,component:K},{name:F.a.ExploreScreen,component:V},{name:F.a.DAppListScreen,component:U},{name:F.a.MyDAppListScreen,component:J},{name:F.a.TransactionHistoryScreen,component:ie},{name:F.a.Protected,component:ee},{name:F.a.AddressBook,component:je,i18nTitle:"title__address_book"},{name:F.a.SwapHistory,component:be},{name:F.a.VolumeHaptic,component:X},{name:F.a.CloudBackup,component:Y},{name:F.a.CloudBackupPreviousBackups,component:$},{name:F.a.CloudBackupDetails,component:Z},{name:F.a.PushNotification,component:te},{name:F.a.PushNotificationManagePriceAlert,component:re},{name:F.a.PushNotificationManageAccountDynamic,component:ne},{name:F.a.MarketDetail,component:Q,alwaysShowBackButton:!0},{name:F.a.Revoke,component:ce,alwaysShowBackButton:!0},{name:F.a.NFTMarketStatsList,component:de},{name:F.a.NFTMarketLiveMintingList,component:se},{name:F.a.NFTMarketCollectionScreen,component:ue},{name:F.a.RevokeRedirect,component:oe},{name:F.a.NFTPNLScreen,component:pe},{name:F.a.OverviewDefiListScreen,component:he},{name:F.a.WalletSwitch,component:me},{name:F.a.BulkSender,component:ve,alwaysShowBackButton:!0}],ye=Object(O.a)(),Se=Object(b.memo)((function(){var e=Object(f.a)(),t=Object(u.a)(["background-default","border-subdued"]),n=d()(t,2),r=n[0],c=n[1],o=Object(b.useMemo)((function(){return e?ge.map((function(e){var t=e.name,n=e.component,o=l()(e,G);return Object(H.jsx)(ye.Screen,{name:t,component:n,options:{animation:y.a.isNativeAndroid?"none":"default",header:function(e){return Object(H.jsx)(p.a,_(_({style:{backgroundColor:r,borderBottomWidth:0,shadowColor:c}},e),o))}}},t)})):null}),[r,c,e]);return Object(H.jsxs)(ye.Navigator,{children:[Object(H.jsxs)(ye.Group,{screenOptions:{headerShown:!1},children:[Object(H.jsx)(ye.Screen,{name:F.a.InitialTab,component:Oe}),!1,Object(H.jsx)(ye.Screen,{name:F.a.HomeOnboarding,component:fe})]}),Object(H.jsx)(ye.Group,{children:o})]})}));Se.displayName="Dashboard";t.default=function(){var e=m.a.dispatch,t=Object(c.b)().reduxReady;return Object(b.useEffect)((function(){var n;t&&(g.a.addUpdaterListener(),null==(n=g.a.checkUpdate())||n.then((function(t){t&&e(Object(v.f)(),Object(v.a)(t))})).catch())}),[e,t]),Object(H.jsx)(j.a,{children:Object(H.jsxs)(r.a,{ref:h.setMainScreenDom,w:"full",h:"full",children:[Object(H.jsx)(Se,{}),Object(H.jsx)(I,{}),Object(H.jsx)(N,{}),Object(H.jsx)(le,{})]})})}},3148:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),c=n.n(r),o=n(10),a=n.n(o),i=n(1),l=n(47),u=n(765);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.loadingDelay,o=void 0===r?0:r,s=n.checkIsMounted,d=Object(i.useState)(),f=a()(d,2),b=f[0],O=f[1],j=Object(i.useState)(!1),p=a()(j,2),h=p[0],m=p[1],v=Object(i.useRef)(),g=Object(u.a)();return v.current=e,Object(i.useEffect)((function(){c()((function*(){var e=function(){return s&&g.current||!s};try{if(e()){m(!0);var t=yield null==v||null==v.current?void 0:v.current();e()&&O(t)}}finally{yield Object(l.g)(o),e()&&m(!1)}}))()}),t),{result:b,isLoading:h}}},3164:function(e,t,n){"use strict";var r=n(2),c=n.n(r),o=n(124),a=n(100),i=n(15),l=n.n(i),u=n(1),s=n(24),d=n(27),f=n(1138),b=n(32),O=n(199),j=n(172),p=n(0),h=function(e){var t=e.navigation,n=void 0===t?Object(j.b)():t,r=Object(a.a)();return Object(p.jsx)(O.a,{type:"plain",size:"lg",name:r?"ArrowLeftOutline":"ArrowSmallLeftOutline",onPress:function(){return null==n?void 0:n.goBack()},circle:!0})},m=n(10),v=n.n(m),g=n(429),y=n(72),S=function(e){var t=e.title,n=e.subtitle,r=e.i18nTitle,c=e.i18nSubtitle,o=e.inCenter,i=void 0===o||o,l=e.children,d=Object(a.a)(),f=Object(g.a)(),O=Object(u.useMemo)((function(){return[r?f.formatMessage({id:r}):t,c?f.formatMessage({id:c}):n]}),[r,f,t,c,n]),j=v()(O,2),h=j[0],m=j[1],S=Object(u.useMemo)((function(){return Object(p.jsxs)(b.a,{flex:1,justifyContent:"center",alignItems:i?"center":"flex-start",style:s.a.absoluteFill,zIndex:-1,children:[l,!!h&&Object(p.jsx)(y.a,{typography:i?"Heading":"PageHeading",children:h}),!!m&&Object(p.jsx)(y.a,{typography:"Caption",color:"text-subdued",children:m})]})}),[l,i,m,h]),w=Object(u.useMemo)((function(){return Object(p.jsxs)(b.a,{flex:1,flexDirection:"row",alignItems:"baseline",children:[l,!!h&&Object(p.jsx)(y.a,{typography:"Heading",children:h}),!!m&&Object(p.jsx)(y.a,{typography:"Body2",ml:"12px",color:"text-subdued",children:m})]})}),[l,m,h]);return d?S:w},w=["headerLeft","headerRight","headerTitle","safeTop","alwaysShowBackButton","style","navigation","options","route","back"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=s.a.create({content:{flex:1,flexDirection:"row",alignItems:"center"},left:{justifyContent:"center",alignItems:"flex-start"},right:{justifyContent:"center",alignItems:"flex-end"},expand:{flexGrow:1,flexBasis:0}});t.a=function(e){var t=e.headerLeft,n=e.headerRight,r=e.headerTitle,c=e.safeTop,i=e.alwaysShowBackButton,O=e.style,j=e.navigation,m=e.options,v=void 0===m?{}:m,g=(e.route,e.back),y=l()(e,w),k=Object(f.d)(),C=Object(a.a)(),E=Object(o.a)("background-default"),T=C?56:64,D=Boolean(g||i||t),A=Object(u.useMemo)((function(){if(r)return Object(p.jsx)(S,{inCenter:D,children:r()});if("function"===typeof v.headerTitle)return Object(p.jsx)(S,{inCenter:D,children:v.headerTitle()});var e=v,t=x({title:e.title,i18nTitle:e.i18nTitle,subtitle:e.subtitle,i18nSubtitle:e.i18nSubtitle},y);return Object(p.jsx)(S,x({inCenter:D},t))}),[D,r,y,v]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{pointerEvents:"box-none",style:[s.a.absoluteFill,{zIndex:0,backgroundColor:E}]}),Object(p.jsx)(d.a,{pointerEvents:"box-none",style:[{height:T,marginTop:null!=c?c:k.top,backgroundColor:E},O],children:Object(p.jsxs)(d.a,{pointerEvents:"box-none",style:[P.content,{marginHorizontal:C?16:32}],children:[Object(p.jsxs)(d.a,{pointerEvents:"box-none",style:[P.left,{marginStart:k.left}],children:[(!!g||i)&&Object(p.jsx)(b.a,{ml:"-6px",mr:"8px",children:Object(p.jsx)(h,{navigation:j})}),t?t():null==v.headerLeft?void 0:v.headerLeft()]}),A,Object(p.jsx)(d.a,{pointerEvents:"box-none",style:[P.right,P.expand,{marginEnd:k.right}],children:n?n():null==v.headerRight?void 0:v.headerRight()})]})})]})}},3184:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1);function c(e,t){var n=Object(r.useRef)(!0);return Object(r.useEffect)((function(){n.current?n.current=!1:e()}),t)}},3185:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(100),c=n(1),o=n(73),a=n(178),i=n(39);function l(){var e=Object(r.a)(),t=Object(a.h)((function(e){return e.accountSelector})),n=t.isDesktopWalletSelectorVisible,l=t.isMobileWalletSelectorDrawerOpen,u=Object(i.l)().wallets,s=Object(c.useMemo)((function(){return u.some((function(e){return e.type===o.c}))}),[u]),d=e?l:n;return{visible:d,isOpenFromClose:!Object(a.t)(d)&&d,existsHardwareWallet:s}}},3207:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(3),c=n.n(r),o=n(10),a=n.n(o),i=n(1),l=n(20),u=n(43),s=n(39);function d(){var e=Object(s.l)().hardwareWallets,t=Object(s.m)().deviceUpdates,n=Object(s.e)((function(e){return e.hardware.connected})),r=Object(i.useState)(),o=a()(r,2),d=o[0],f=o[1],b=Object(i.useCallback)((function(e){var r,c;if(e)return{isConnected:n.includes(e),hasUpgrade:!(null==t||null==(r=t[e])||!r.ble)||!(null==t||null==(c=t[e])||!c.firmware)}}),[n,t]);return Object(i.useEffect)((function(){l.a.accountSelector.info("useEffect hardwareWallets changed >>> useDeviceStatusOfHardwareWallet"),c()((function*(){var t=(yield u.a.engine.getHWDevices()).reduce((function(e,t){return e[t.id]=t,e}),{});f(e.reduce((function(e,n){if(!n.associatedDevice)return e;var r=t[n.associatedDevice];return r&&(e[n.associatedDevice]=b(r.mac)),e}),{}))}))()}),[b,e]),{devicesStatus:d}}},3223:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(100),c=n(1),o=n(43),a=n(178),i=n(39),l=n(3148),u=n(1157),s=n(3207);function d(){var e=o.a.engine,t=Object(r.a)(),n=Object(a.h)((function(e){return e.accountSelector})),d=n.networkId,f=n.walletId,b=n.accountsGroup,O=n.isLoading,j=n.preloadingCreateAccount,p=n.isOpenDelay,h=n.isOpen,m=n.accountSelectorMode,v=Object(a.i)(h,t?u.g:u.e+100),g=Object(a.t)(h),y=!g&&h,S=g&&!h,w=Object(i.l)().wallets,k=Object(a.m)().enabledNetworks,x=Object(s.a)().devicesStatus,P=Object(a.f)(),C=P.account,E=P.wallet,T=P.network,D=Object(c.useRef)(C);D.current=C;var A=Object(c.useRef)(E);A.current=E;var B=Object(c.useRef)(T);B.current=T;var L=Object(a.h)((function(e){return e.refresher.refreshAccountSelectorTs})),I=d,R=f,M=Object(c.useCallback)((function(){}),[]),N=Object(l.a)((function(){return f?e.getWalletSafe(f):Promise.resolve(null)}),[f,w]).result,W=Object(l.a)((function(){return d?e.getNetworkSafe(d):Promise.resolve(null)}),[d,k]).result,F=Object(c.useMemo)((function(){if(null==b||!b.length)return!0;var e=0;return b.forEach((function(t){var n;return e+=(null==t||null==(n=t.data)?void 0:n.length)||0})),e<=0}),[b]);return Object(c.useMemo)((function(){return{wallets:w,refreshAccountSelectorTs:L,devicesStatus:x,isOpenFromClose:y,isCloseFromOpen:S,isOpenDelay:p,isOpenDelayForShow:v,isOpen:h,selectedNetwork:W,selectedNetworkId:I,selectedWallet:N,selectedWalletId:R,accountsGroup:b,isLoading:O,isAccountsGroupEmpty:F,preloadingCreateAccount:j,refreshAccounts:M,activeAccount:C,activeWallet:E,activeNetwork:T,activeAccountRef:D,activeNetworkRef:B,activeWalletRef:A,accountSelectorMode:m}}),[w,L,x,y,S,p,v,h,W,I,N,R,b,O,F,j,M,C,E,T,m])}},3528:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(10),c=n.n(r),o=n(57),a=n(1),i=n(24),l=n(27),u=n(1138),s=n(3031),d=n(1185),f=n(3032),b=n(1184);function O(e){var t=Object(u.c)(),n=Object(u.d)(),r=a.useContext(b.a),i=a.useContext(f.a),O=e.focused,p=e.modal,h=void 0!==p&&p,m=e.header,v=e.headerShown,g=void 0===v||v,y=e.headerTransparent,S=e.headerStatusBarHeight,w=void 0===S?r?0:n.top:S,k=e.navigation,x=e.route,P=e.children,C=e.style,E=a.useState((function(){return Object(d.a)(t,h,w)})),T=c()(E,2),D=T[0],A=T[1];return a.createElement(s.a,{accessibilityElementsHidden:!O,importantForAccessibility:O?"auto":"no-hide-descendants",style:[j.container,C]},a.createElement(l.a,{style:j.content},a.createElement(b.a.Provider,{value:r||!1!==g},a.createElement(f.a.Provider,{value:g?D:null!=i?i:0},P))),g?a.createElement(o.f.Provider,{value:k},a.createElement(o.h.Provider,{value:x},a.createElement(l.a,{onLayout:function(e){var t=e.nativeEvent.layout.height;A(t)},style:y?j.absolute:null},m))):null)}var j=i.a.create({container:{flex:1,flexDirection:"column-reverse"},content:{flex:1},absolute:{position:"absolute",top:0,left:0,right:0}})},3570:function(e,t,n){"use strict";var r=n(2),c=n.n(r),o=n(15),a=n.n(o),i=n(57),l=n(1),u=n(3059),s=n(3528),d=n(3058),f=n(3067),b=n(3066),O=n(153),j=n(24),p=n(27);function h(e){var t=e.state,n=e.descriptors;return l.createElement(u.a,null,l.createElement(p.a,{style:m.container},t.routes.map((function(e,r){var c,o=t.index===r,a=0!==r,i=null===(c=t.routes[r-1])||void 0===c?void 0:c.key,u=i?n[i]:void 0,h=n[e.key],v=h.options,g=h.navigation,y=h.render,S=v.header,w=v.headerShown,k=v.headerTintColor,x=v.headerBackImageSource,P=v.headerLeft,C=v.headerRight,E=v.headerTitle,T=v.headerTitleAlign,D=v.headerTitleStyle,A=v.headerStyle,B=v.headerShadowVisible,L=v.headerTransparent,I=v.contentStyle,R=v.headerBackTitle;return l.createElement(s.a,{key:e.key,focused:o,route:e,navigation:g,headerShown:w,headerTransparent:L,header:void 0!==S?S({back:u?{title:Object(d.a)(u.options,u.route.name)}:void 0,options:v,route:e,navigation:g}):l.createElement(f.a,{title:Object(d.a)(v,e.name),headerTintColor:k,headerLeft:"function"===typeof P?function(e){var t=e.tintColor;return P({tintColor:t,canGoBack:a,label:R})}:void 0===P&&a?function(e){var t=e.tintColor;return l.createElement(b.a,{tintColor:t,backImage:void 0!==x?function(){return l.createElement(O.a,{source:x,style:[m.backImage,{tintColor:t}]})}:void 0,onPress:g.goBack,canGoBack:a})}:P,headerRight:"function"===typeof C?function(e){var t=e.tintColor;return C({tintColor:t})}:C,headerTitle:"function"===typeof E?function(e){var t=e.children,n=e.tintColor;return E({children:t,tintColor:n})}:E,headerTitleAlign:T,headerTitleStyle:D,headerStyle:[L?{position:"absolute",backgroundColor:"transparent"}:null,A,!1===B?{shadowOpacity:0,borderBottomWidth:0}:null]}),style:[j.a.absoluteFill,{display:o?"flex":"none"}]},l.createElement(p.a,{style:[m.contentContainer,I]},y()))}))))}var m=j.a.create({container:{flex:1},contentContainer:{flex:1},backImage:{height:24,width:24,margin:3,resizeMode:"contain"}}),v=["initialRouteName","children","screenListeners","screenOptions"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=Object(i.m)((function(e){var t=e.initialRouteName,n=e.children,r=e.screenListeners,c=e.screenOptions,o=a()(e,v),u=Object(i.v)(i.j,{initialRouteName:t,children:n,screenListeners:r,screenOptions:c}),s=u.state,d=u.descriptors,f=u.navigation;return l.useEffect((function(){var e;return null===f||void 0===f||null===(e=f.addListener)||void 0===e?void 0:e.call(f,"tabPress",(function(e){var t=f.isFocused();requestAnimationFrame((function(){s.index>0&&t&&!e.defaultPrevented&&f.dispatch(y(y({},i.i.popToTop()),{},{target:s.key}))}))}))}),[f,s.index,s.key]),l.createElement(h,S({},o,{state:s,navigation:f,descriptors:d}))}))}}]);