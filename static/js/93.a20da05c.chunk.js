(this.webpackJsonp=this.webpackJsonp||[]).push([[93],{3105:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"c",(function(){return h})),t.d(n,"b",(function(){return x}));var r=t(3),o=t.n(r),c=t(1),i=t(14),a=t(43),l=t(145),s=t(159),u=t(263),d=t(47),b=t(953),j=t(39),f=(t(172),t(1174)),m=t(1192);function O(){var e;i.a.isExtensionUiStandaloneWindow&&(null==(e=window)||null==e.close||e.close())}var h=function(e){var n=Object(f.a)(),t=Object(j.e)((function(e){return e.status.boardingCompleted})),r=Object(j.e)((function(e){return e.data.homePageCheckBoarding}));Object(c.useEffect)((function(){t||(!e||e&&!r)&&(e&&a.a.dispatch(Object(s.g)()),n.replace(l.c.Onboarding,{screen:b.a.Welcome,params:{disableAnimation:!!e}}))}),[])};function x(){var e=Object(m.a)(),n=e.closeWalletSelector,t=e.openRootHome;return Object(c.useCallback)(o()((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.delay,o=void 0===r?150:r,c=e.showOnBoardingLoading;c&&(a.a.dispatch(Object(u.c)(!0)),yield Object(d.g)(100)),n(),yield Object(d.g)(o),t(),yield Object(d.g)(o),O(),c&&(yield Object(d.g)(600),a.a.dispatch(Object(u.c)(!1)))})),[n,t])}},3170:function(e,n,t){"use strict";var r=t(3),o=t.n(r),c=t(10),i=t.n(c),a=t(1),l=t(55),s=t(14),u=t(668),d=t(43);n.a=function(e){var n=e.id,t=e.getResolveData,r=e.closeOnError,c=e.closeWindowAfterResolved,b=s.a.isExtensionUiStandaloneWindow,j=Object(a.useState)(null),f=i()(j,2),m=f[0],O=f[1],h=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.close,r=e.error;r=r||m||l.b.provider.userRejectedRequest(),d.a.servicePromise.rejectCallback({id:n,error:Object(u.a)(r)}),b?setTimeout((function(){null==t||t(),window.close()}),0):null==t||t()}),[n,b,m]),x=Object(a.useCallback)(o()((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.close,o=e.result;try{O(null);var i=null!=o?o:yield null==t?void 0:t();d.a.servicePromise.resolveCallback({id:n,data:i}),null==r||r(),b&&c&&setTimeout((function(){window.close()}),0)}catch(a){throw O(a),a}})),[t,n,b,c]);return Object(a.useEffect)((function(){m&&r&&h()}),[r,h,m]),Object(a.useEffect)((function(){var e=b;return e&&window.addEventListener("beforeunload",(function(){return h()})),function(){e&&window.removeEventListener("beforeunload",(function(){return h()}))}}),[b,h]),{reject:h,resolve:x}}},3177:function(e,n,t){"use strict";t.r(n),t.d(n,"DappConnectionModalRoutes",(function(){return Z.a}));var r=t(100),o=t(252),c=t(3),i=t.n(c),a=t(179),l=t(10),s=t.n(l),u=t(427),d=t(41),b=t(240),j=t(85),f=t(115),m=t(32),O=t(72),h=t(289),x=t(755),p=t(1),g=t(57),v=t(1139),_=t(429),y=t(762),w=t(3745),C=t.n(w),k=t(20),M=t(14),I=t(43),S=t(573),z=t(178),E=t(3170),B=t(3226),W=t(3184),P=t(594),A=t(3539),R=t(290),T=t(103),D=t(469),L=t(734),N=t(0),U=function(e){var n=e.visible,t=e.onCancel,o=e.onConfirm,c=Object(_.a)(),i=Object(r.a)(),a=Object(p.useState)(!1),l=s()(a,2),u=l[0],d=l[1];return Object(N.jsxs)(R.a,{visible:n,onClose:t,children:[Object(N.jsxs)(L.a,{w:"100%",alignItems:"center",mb:4,children:[Object(N.jsx)(f.a,{mb:5,borderRadius:"999",size:"48px",backgroundColor:"surface-neutral-default",children:Object(N.jsx)(j.a,{name:"ExclamationTriangleOutline",size:24})}),Object(N.jsx)(O.a,{typography:{sm:"Heading",md:"DisplayMedium"},color:"text-default",mb:2,children:c.formatMessage({id:"modal__rug_warning"})}),Object(N.jsx)(O.a,{typography:{sm:"Body2",md:"Body1"},color:"text-subdued",textAlign:"center",children:c.formatMessage({id:"modal__rug_warning_desc"})}),Object(N.jsx)(D.a,{mt:5,alignItems:"center",onChange:function(e){return d(e)},isChecked:u,children:Object(N.jsx)(O.a,{color:"text-subdued",ml:2,typography:{sm:"Body1Strong",md:"Body2Strong"},children:c.formatMessage({id:"content__i_am_aware_of_the_above_risks"})})})]}),Object(N.jsxs)(m.a,{flexDirection:"row",w:"100%",mt:2,children:[Object(N.jsx)(T.a,{flex:"1",onPress:t,size:i?"lg":"base",children:c.formatMessage({id:"action__cancel"})}),Object(N.jsx)(m.a,{w:4}),Object(N.jsx)(T.a,{flex:1,type:"primary",size:i?"lg":"base",onPress:function(){u&&(null==o||o())},isDisabled:!u,children:c.formatMessage({id:"action__confirm"})})]})]})},q={permissions:[{text:"content__view_the_address_of_your_permitted_accounts_required",icon:"EyeOutline"},{text:"content__send_transactions_and_signature_request",icon:"CheckOutline"}]};function H(e){var n,t,r,o=e.isWalletConnectPreloading,c=e.walletConnectError,i=e.getWalletConnectBridge,a=e.account,l=e.origin,s=e.hostname,p=e.network,g=Object(_.a)();return o?Object(N.jsx)(f.a,{flex:1,minH:"300px",children:c?Object(N.jsx)(x.a,{emoji:"\ud83d\ude35",title:c,subTitle:g.formatMessage({id:"empty__connection_failed_desc"})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(h.b,{size:"lg"}),M.a.isDev?Object(N.jsx)(m.a,{mt:4,children:Object(N.jsx)(O.a,{children:i()})}):null]})}):null!=a&&a.id?Object(N.jsxs)(u.a,{flex:"1",space:"20px",bg:"surface-default",p:"4",borderRadius:"12px",children:[Object(N.jsxs)(b.a,{alignItems:"center",children:[Object(N.jsxs)(b.a,{alignItems:"center",children:[Object(N.jsx)(m.a,{size:"32px",borderWidth:2,borderColor:"surface-subdued",mr:"-8px",zIndex:1,rounded:"full",children:Object(N.jsx)(v.a,{w:"full",h:"full",borderRadius:"full",zIndex:100,source:C.a})}),Object(N.jsx)(m.a,{size:"32px",overflow:"hidden",rounded:"full",borderWidth:2,zIndex:2,borderColor:"surface-subdued",bg:"surface-subdued",children:Object(N.jsx)(v.a,{w:"full",h:"full",source:{uri:l+"/favicon.ico"},fallbackElement:Object(N.jsx)(f.a,{width:"full",height:"full",borderRadius:"full",bg:"background-selected",children:Object(N.jsx)(j.a,{name:"QuestionMarkOutline"})})})})]}),Object(N.jsx)(d.h.Body1Strong,{ml:"2",children:g.formatMessage({id:"title__connect_to_website"})})]}),Object(N.jsx)(u.a,{pt:"4",borderTopColor:"divider",borderTopWidth:"1px",children:q.permissions.map((function(e,n){return Object(N.jsxs)(b.a,{mb:"4",children:[Object(N.jsx)(m.a,{borderRadius:"full",bg:"rgba(2, 190, 50, .1)",size:"9",alignItems:"center",justifyContent:"center",children:Object(N.jsx)(j.a,{size:24,name:e.icon,color:"icon-success"})}),Object(N.jsx)(d.h.Body1,{ml:"12px",alignSelf:"center",flex:1,children:g.formatMessage({id:e.text})})]},n)}))}),Object(N.jsx)(u.a,{borderBottomWidth:"1px",borderBottomColor:"divider",pb:"4",children:Object(N.jsxs)(b.a,{alignItems:"center",children:[Object(N.jsx)(d.h.Body2Strong,{color:"text-subdued",flex:1,children:g.formatMessage({id:"form__account"})}),Object(N.jsx)(b.a,{alignItems:"center",children:Object(N.jsxs)(d.h.Body2Strong,{ml:"12px",children:[null==a?void 0:a.name,"(",null!=(n=null==a||null==(t=a.address)?void 0:t.slice(-4))?n:"",")"]})})]})}),Object(N.jsx)(A.a,{origin:l,hostname:s,networkId:null!=(r=null==p?void 0:p.id)?r:""})]}):Object(N.jsx)(f.a,{flex:1,minH:"300px",children:Object(N.jsx)(x.a,{emoji:"\ud83d\udcb3",title:g.formatMessage({id:"empty__no_account_title"})})})}var F=Object.freeze({}),J=function(){var e,n,t,r,c=I.a.dispatch,l=Object(z.h)((function(e){return e.refresher.closeDappConnectionPreloadingTs})),u=Object(p.useState)(!1),d=s()(u,2),b=d[0],j=d[1],f=Object(_.a)(),m=Object(z.f)(),O=m.networkImpl,h=m.network,x=m.accountAddress,v=m.account,w=Object(B.a)().sourceInfo,C=null!=w?w:F,A=C.origin,R=C.scope,T=C.id,D=Object(p.useMemo)((function(){return e=A,[].some((function(n){return n.includes(e.toLowerCase())}));var e}),[A]),L=Object(p.useMemo)((function(){try{return new URL(A).hostname}catch(n){var e;return(null==A||null==(e=A.split("://"))?void 0:e[1])||A}}),[A]),q=Object(g.x)(),J=null==q||null==(e=q.params)?void 0:e.walletConnectUri,Q=null==q||null==(n=q.params)?void 0:n.isDeepLink,V=null==q||null==(t=q.params)?void 0:t.refreshKey,K=Boolean(J),G=Object(p.useState)(""),X=s()(G,2),Y=X[0],Z=X[1],$=Object(y.a)(),ee=Object(p.useRef)(!1);Object(W.a)((function(){ee.current||M.a.isExtensionUi&&K&&l&&(ee.current=!0,$())}),[l,$,c,K]),Object(p.useEffect)((function(){return function(){ee.current=!0}}),[]);var ne=Object(p.useMemo)((function(){return J?S.a.getWalletConnectUriInfo({uri:J}):null}),[J]),te=Object(p.useCallback)((function(){var e,n;return(null==ne?void 0:ne.v1)&&(null==ne||null==(e=ne.v1)?void 0:e.bridge)||(null==ne?void 0:ne.v2)&&"relay-protocol="+(null==ne||null==(n=ne.v2)?void 0:n.relayProtocol)||""}),[ne]);Object(p.useEffect)((function(){J&&(null!=ne&&ne.v2&&a.a.show({title:"WalletConnect V2 not supported yet."}),V&&Z(""),I.a.walletConnect.connect({uri:J||"",isDeepLink:Q}).then((function(){c(Object(P.d)())})).catch((function(e){k.a.common.error(e),Z(f.formatMessage({id:"modal__failed_to_connect"}))})))}),[V,$,c,f,Q,J,null==ne?void 0:ne.v2]);var re=Object(p.useCallback)((function(){if(!O||!x)throw new Error("Wallet or account not selected, you should create or import one.");var e=x,n=[e].filter(Boolean);return"ethereum"===R&&(n=[e].filter(Boolean)),"near"===R&&(n={accounts:[e].filter(Boolean)}),"solana"===R&&(n=e),I.a.serviceDapp.saveConnectedAccounts({site:{origin:A},networkImpl:O,address:e}),n}),[x,O,A,R]),oe=Object(E.a)({id:T,closeOnError:!0});return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(U,{visible:b,onCancel:function(){return j(!1)},onConfirm:function(){return j(!1)}}),Object(N.jsx)(o.b,{header:K?f.formatMessage({id:"content__connecting"}):f.formatMessage({id:"title__dapp_connection"}),headerDescription:K?"WalletConnect":null!=(r=null==h?void 0:h.shortName)?r:"",hidePrimaryAction:K||!(null!=v&&v.id),hideSecondaryAction:!0,primaryActionTranslationId:"action__confirm",secondaryActionTranslationId:"action__cancel",onPrimaryActionPress:function(){var e=i()((function*(e){var n=e.close;if(!D){var t=re();return oe.resolve({close:n,result:t})}j(!0)}));return function(n){return e.apply(this,arguments)}}(),onSecondaryActionPress:function(e){var n=e.close;oe.reject(),n()},onModalClose:oe.reject,scrollViewProps:{contentContainerStyle:{flex:1},children:Object(N.jsx)(H,{walletConnectError:Y,isWalletConnectPreloading:K,getWalletConnectBridge:te,network:h,account:v,hostname:L,origin:A})}})]})},Q=t(754),V=t(76),K=t(394),G=t(47),X=function(){var e=Object(_.a)(),n=Object(B.a)().sourceInfo,t=(null!=n?n:{}).id,r=Object(z.p)().openNetworkSelector,c=Object(y.a)(),a=Object(z.f)().network,l=Object(E.a)({id:t,closeOnError:!0});return Object(N.jsxs)(o.b,{footer:null,primaryActionTranslationId:"action__confirm",primaryActionProps:{isDisabled:!0},hidePrimaryAction:!0,secondaryActionTranslationId:"action__cancel",onSecondaryActionPress:function(e){var n=e.close;l.reject(),n()},onModalClose:l.reject,children:[Object(N.jsx)(f.a,{flex:1,children:Object(N.jsxs)(u.a,{alignItems:"center",mb:4,children:[Object(N.jsxs)(b.a,{alignItems:"center",children:[Object(N.jsx)(m.a,{size:"64px",borderWidth:2,borderColor:"surface-subdued",mr:"-16px",zIndex:1,rounded:"full",children:Object(N.jsx)(v.a,{w:"full",h:"full",source:{uri:((null==n?void 0:n.origin)||"")+"/favicon.ico"},fallbackElement:Object(N.jsx)(f.a,{width:"full",height:"full",borderRadius:"full",bg:"background-selected",children:Object(N.jsx)(j.a,{name:"QuestionMarkOutline"})})})}),Object(N.jsx)(m.a,{size:"64px",overflow:"hidden",borderWidth:2,zIndex:2,rounded:"full",borderColor:"surface-subdued",bg:"surface-subdued",position:"relative",children:Object(N.jsx)(Q.c,{size:"64px",token:{logoURI:null==a?void 0:a.logoURI,name:null==a?void 0:a.shortName}})}),Object(N.jsx)(m.a,{size:"20px",rounded:"full",bg:"surface-subdued",position:"absolute",right:0,bottom:0,zIndex:200,children:Object(N.jsx)(j.a,{size:20,name:"ExclamationCircleSolid",color:"icon-critical"})})]}),Object(N.jsx)(d.h.DisplayLarge,{mt:4,mb:2,children:e.formatMessage({id:"title__network_mismatch"})}),Object(N.jsx)(d.h.Body1,{color:"text-subdued",children:(null==n?void 0:n.hostname)||""}),Object(N.jsx)(d.h.Body1,{color:"text-subdued",textAlign:"center",my:4,children:e.formatMessage({id:"title__network_mismatch_desc"})})]})}),Object(N.jsx)(T.a,{type:"primary",size:"xl",onPress:i()((function*(){c(),yield Object(G.g)(350);var e=null!=n&&n.scope?Object(V.h)(null==n?void 0:n.scope):"";r({mode:K.a.Wallet,networkImpl:e})})),children:e.formatMessage({id:"action__switch"})})]})},Y=t(3105),Z=t(407),$=t(456),ee=Object($.a)(),ne=[{name:Z.a.ConnectionModal,component:J},{name:Z.a.NetworkNotMatchModal,component:X}];n.default=function(){Object(Y.c)();var e=Object(r.a)();return Object(N.jsx)(ee.Navigator,{screenOptions:{headerShown:!1,animationEnabled:!!e},children:ne.map((function(e){return Object(N.jsx)(ee.Screen,{name:e.name,component:e.component},e.name)}))})}},3184:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(1);function o(e,n){var t=Object(r.useRef)(!0);return Object(r.useEffect)((function(){t.current?t.current=!1:e()}),n)}},3226:function(e,n,t){"use strict";var r=t(57),o=t(20);n.a=function(){var e,n,t=null!=(e=null==(n=Object(r.x)().params)?void 0:n.query)?e:"",c={};try{t&&(c=JSON.parse(t)),o.a.sendTx.info("useDappParams:",c)}catch(i){o.a.sendTx.info("useDappParams:",t)}return c}},3539:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t(32),o=t(240),c=t(427),i=t(41),a=t(85),l=t(10),s=t.n(l),u=t(1),d=t(429),b=t(43),j=t(0),f={is_open_source:"badge__not_open_source",malicious_contract:"badge__malicious_contract",malicious_creator:"badge__malicious_contract_creator",phishing_site:"badge__phishing_site"},m=function(e){var n,t,l,m=e.hostname,O=e.origin,h=e.networkId,x=Object(d.a)(),p=Object(u.useState)(),g=s()(p,2),v=g[0],_=g[1],y=Object(u.useCallback)((function(){b.a.serviceToken.getSiteSecurityInfo(O,h).then((function(e){return _(e)}))}),[O,h]);Object(u.useEffect)((function(){y()}),[y]);var w=Object(u.useMemo)((function(){return"undefined"===typeof v?Object(j.jsx)(a.a,{name:"QuestionMarkCircleMini",size:32}):0===(null==v?void 0:v.length)?Object(j.jsx)(a.a,{name:"BadgeCheckMini",size:32,color:"icon-success"}):Object(j.jsx)(a.a,{name:"ShieldExclamationMini",size:32,color:"icon-critical"})}),[v]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(o.a,{alignItems:"center",mt:"-2",w:"full",children:[w,Object(j.jsxs)(c.a,{ml:"3",flex:"1",children:[Object(j.jsx)(i.h.Body1Strong,{textTransform:"capitalize",children:null!=(n=null==m||null==(t=m.split("."))||null==t.reverse||null==(l=t.reverse())?void 0:l[1])?n:"N/A"}),Object(j.jsx)(i.h.Body2,{isTruncated:!0,maxW:"300px",children:m})]})]}),v&&(null==v?void 0:v.length)>0?Object(j.jsx)(o.a,{borderTopWidth:"1px",borderTopColor:"divider",alignItems:"center",flexWrap:"wrap",pt:"4",children:null==v?void 0:v.map((function(e){var n;return Object(j.jsx)(r.a,{bg:"surface-critical-subdued",py:"2px",px:"2",mr:"2",mb:"2",borderRadius:"6px",children:Object(j.jsx)(i.h.Body2Strong,{color:"text-critical",children:x.formatMessage({id:null!=(n=f[e])?n:""})})})}))}):null]})}},3745:function(e,n,t){e.exports=t.p+"static/media/logo_round.5d03617b.png"}}]);