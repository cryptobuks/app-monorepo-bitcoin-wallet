(this.webpackJsonp=this.webpackJsonp||[]).push([[101],{3161:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return O})),n.d(t,"a",(function(){return _})),n.d(t,"e",(function(){return w})),n.d(t,"b",(function(){return g}));var r=n(460),o=n(3),a=n.n(o),i=n(10),c=n.n(i),u=n(1),s=n(57),l=n(1156),d=n(220),f=n(291),p=n(163),h=n(73),m=n(43),b=n(178),v=n(31),y=n(763),j=function(e,t,n){var r,o,i,c,s=Object(l.a)(a()((function*(){return m.a.serviceRevoke.fetchTokenAllowance(e,t,n,!1)})),[e,t,n]),f=s.result,p=s.loading,h=s.error,b=s.execute;return Object(u.useEffect)((function(){return d.a.addListener("Revoke:refresh",b),function(){d.a.removeAllListeners()}}),[b]),h?{address:"",prices:{},allowances:[],loading:!1,isFromRpc:!1}:{address:null!=(r=null==f?void 0:f.address)?r:"",prices:null!=(o=null==f?void 0:f.prices)?o:{},allowances:null!=(i=null==f?void 0:f.allowance)?i:[],isFromRpc:null!=(c=null==f?void 0:f.isFromRpc)&&c,loading:p,error:h}},O=function(e,t){var n=Object(u.useState)(""),r=c()(n,2),o=r[0],i=r[1],s=Object(u.useCallback)(a()((function*(){var n=yield m.a.serviceRevoke.getSpenderName(e,t);i(n)})),[t,e]);return Object(u.useEffect)((function(){s()}),[s]),o||Object(f.b)(t)},_=function(e){var t=Object(b.f)(),n=t.account,r=t.wallet;return Object(u.useMemo)((function(){return n&&n.id&&(null==n?void 0:n.address.toLowerCase())===e.toLowerCase()&&(null==r?void 0:r.type)!==h.e}),[n,e,null==r?void 0:r.type])},w=function(e){var t=e.networkId,n=e.spender,r=e.contract,o=Object(s.u)(),i=Object(b.f)(),c=i.accountId,l=i.accountAddress;return Object(u.useCallback)(function(){var e=a()((function*(e){var a,i=e.amount,u=e.tokenId,s=e.assetType;a=s===y.a.tokens?yield m.a.engine.buildEncodedTxFromApprove({amount:i,networkId:t,spender:n,accountId:c,token:r}):"undefined"!==typeof u?yield m.a.serviceRevoke.buildEncodedTxsFromApprove({from:l,to:null!=r?r:"",approve:p.a,tokenId:u}):yield m.a.serviceRevoke.buildEncodedTxsFromSetApprovalForAll({from:l,to:null!=r?r:"",approved:!1,spender:n}),o.navigate(v.h.Modal,{screen:v.e.Send,params:{screen:v.i.SendConfirm,params:{accountId:c,networkId:t,feeInfoEditable:!0,feeInfoUseFeeInTx:!1,encodedTx:a,onSuccess:function(){null==d.a||d.a.emit("Revoke:refresh",s)}}}})}));return function(t){return e.apply(this,arguments)}}(),[c,r,o,t,n,l])},g=function(){var e=Object(r.a)().size;return Object(u.useMemo)((function(){return["SMALL","NORMAL"].includes(e)}),[e])}},3230:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return P}));var r=n(6),o=n.n(r),a=n(21),i=n.n(a),c=n(9),u=n.n(c),s=n(12),l=n.n(s),d=n(5),f=n.n(d),p=n(2),h=n.n(p),m=n(1),b=n(27),v=n(226),y=n(23),j=n(93),O=n(0);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var o=f()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l()(this,n)}}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=v.a.RNViewShot,C=new Promise((function(){})),x=["png","jpg"].concat("android"===y.a.OS?["webm","raw"]:[]),M=["tmpfile","base64","data-uri"].concat("android"===y.a.OS?["zip-base64"]:[]),R={format:"png",quality:1,result:"tmpfile",snapshotContentContainer:!1,handleGLSurfaceViewOnAndroid:!1};function A(e){var t=g(g({},R),e),n=[];return"width"in t&&("number"!==typeof t.width||t.width<=0)&&(n.push("option width should be a positive number"),delete t.width),"height"in t&&("number"!==typeof t.height||t.height<=0)&&(n.push("option height should be a positive number"),delete t.height),("number"!==typeof t.quality||t.quality<0||t.quality>1)&&(n.push("option quality should be a number between 0.0 and 1.0"),t.quality=R.quality),"boolean"!==typeof t.snapshotContentContainer&&n.push("option snapshotContentContainer should be a boolean"),"boolean"!==typeof t.handleGLSurfaceViewOnAndroid&&n.push("option handleGLSurfaceViewOnAndroid should be a boolean"),-1===x.indexOf(t.format)&&(t.format=R.format,n.push("option format '"+t.format+"' is not in valid formats: "+x.join(" | "))),-1===M.indexOf(t.result)&&(t.result=R.result,n.push("option result '"+t.result+"' is not in valid formats: "+M.join(" | "))),{options:t,errors:n}}function I(){if(!k)throw new Error("react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.")}function S(e,t){if(I(),e&&"object"===typeof e&&"current"in e&&e.current&&!(e=e.current))return Promise.reject(new Error("ref.current is null"));if("number"!==typeof e){var n=Object(j.a)(e);if(!n)return Promise.reject(new Error("findNodeHandle failed to resolve view="+String(e)));e=n}var r=A(t),o=r.options;r.errors;return k.captureRef(e,o)}function L(e){"string"!==typeof e||k.releaseCapture(e)}var P=function(e){u()(n,e);var t=_(n);function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).firstLayoutPromise=new Promise((function(t){e.resolveFirstLayout=t})),e.capture=function(){return e.firstLayoutPromise.then((function(){var t=i()(e).root;return t?S(t,e.props.options):C})).then((function(t){return e.onCapture(t),t}),(function(t){throw e.onCaptureFailure(t),t}))},e.onCapture=function(t){if(e.root){e.lastCapturedURI&&setTimeout(L,500,e.lastCapturedURI),e.lastCapturedURI=t;var n=e.props.onCapture;n&&n(t)}},e.onCaptureFailure=function(t){if(e.root){var n=e.props.onCaptureFailure;n&&n(t)}},e.syncCaptureLoop=function(t){if(cancelAnimationFrame(e._raf),"continuous"===t){var n="-";e._raf=requestAnimationFrame((function t(){e._raf=requestAnimationFrame(t),n!==e.lastCapturedURI&&(n=e.lastCapturedURI,e.capture())}))}},e.onRef=function(t){e.root=t},e.onLayout=function(t){var n=e.props.onLayout;e.resolveFirstLayout(t.nativeEvent.layout),n&&n(t)},e}var r=n.prototype;return r.componentDidMount=function(){"mount"===this.props.captureMode?this.capture():this.syncCaptureLoop(this.props.captureMode)},r.componentDidUpdate=function(e){void 0!==this.props.captureMode&&this.props.captureMode!==e.captureMode&&this.syncCaptureLoop(this.props.captureMode),"update"===this.props.captureMode&&this.capture()},r.componentWillUnmount=function(){this.syncCaptureLoop(null)},r.render=function(){var e=this.props.children;return Object(O.jsx)(b.a,{ref:this.onRef,collapsable:!1,onLayout:this.onLayout,style:this.props.style,children:e})},o()(n)}(m.Component);P.captureRef=S,P.releaseCapture=L},3247:function(e,t,n){"use strict";n.r(t),n.d(t,"RevokeRoutes",(function(){return h.b}));var r=n(100),o=n(252),a=n(427),i=n(41),c=n(162),u=n(754),s=n(652),l=n(1),d=n(57),f=n(429),p=n(3161),h=n(763),m=n(0),b=n(240),v=n(199),y=n(72),j=n(179),O=n(10),_=n.n(O),w=n(3),g=n.n(w),k=n(3230),C=n(1144),x=n(20),M=n(14),R=function(){var e=g()((function*(){return M.a.isNative?(yield n.e(12).then(n.bind(null,5673))).default:null}));return function(){return e.apply(this,arguments)}}(),A=n(456),I=Object(A.a)(),S=[{name:h.b.ShareModal,component:function(){var e=Object(f.a)(),t=Object(l.useRef)(null),n=Object(l.useState)(0),r=_()(n,2),c=r[0],u=r[1],s=Object(l.useMemo)((function(){return[e.formatMessage({id:"content__share_revoke_1"}),e.formatMessage({id:"content__share_revoke_2"}),e.formatMessage({id:"content__share_revoke_3"}),e.formatMessage({id:"content__share_revoke_4"})][c]}),[e,c]),d=Object(l.useCallback)((function(t){var n=t.close;Object(C.a)(s),j.a.show({title:e.formatMessage({id:"msg__copied"})}),null==n||n()}),[s,e]),p=Object(l.useCallback)(function(){var e=g()((function*(e){var n,r=e.close;if(yield null==(n=t.current)||null==n.capture?void 0:n.capture()){var o=yield R(),a={type:"text/plain",title:"Share",message:s};if(!o)return;yield o.open(a).catch((function(e){x.a.common.error("share revoke error",e),d({close:r})})).finally((function(){null==r||r()}))}}));return function(t){return e.apply(this,arguments)}}(),[s,d]);return Object(m.jsx)(o.b,{header:e.formatMessage({id:"title__share"}),height:"560px",hidePrimaryAction:!M.a.isNative,onPrimaryActionPress:p,onSecondaryActionPress:d,primaryActionTranslationId:"action__share",secondaryActionTranslationId:"action__copy",children:Object(m.jsx)(a.a,{pt:"6",children:Object(m.jsxs)(k.b,{ref:t,children:[Object(m.jsx)(i.h.DisplayLarge,{textAlign:"center",mb:"1",children:e.formatMessage({id:"title__share_with_your_friends"})}),Object(m.jsx)(i.h.Body2,{textAlign:"center",mb:"6",children:e.formatMessage({id:"title__share_with_your_friends_desc"})}),Object(m.jsxs)(b.a,{alignItems:"center",borderWidth:"1",borderRadius:12,borderColor:"border-default",bg:"action-secondary-default",p:3,children:[Object(m.jsx)(y.a,{flex:"1",children:s}),Object(m.jsx)(v.a,{name:"ArrowPathMini",type:"plain",onPress:function(){return u(c>=3?0:c+1)}})]})]})})})}},{name:h.b.ChangeAllowance,component:function(){var e=Object(f.a)(),t=Object(d.x)().params,n=t.dapp,r=t.balance,b=t.token,v=t.networkId,y=t.allowance,j=Object(p.e)({networkId:v,spender:n.spender,contract:b.tokenIdOnNetwork}),O=Object(s.a)({mode:"onChange",defaultValues:{allowance:"unlimited"===y?"0":y,isUnlimited:"unlimited"===y}}),_=O.control,w=O.handleSubmit,g=O.watch,k=r+" "+b.symbol,C=g("isUnlimited"),x=Object(l.useCallback)((function(e){j({amount:e,assetType:h.a.tokens})}),[j]),M=Object(l.useCallback)((function(e){e.isUnlimited?x("unlimited"):x(String(e.allowance))}),[x]);return Object(m.jsx)(o.b,{header:e.formatMessage({id:"action__change_allowance"}),hideSecondaryAction:!0,onPrimaryActionPress:function(e){var t=e.close;null==t||t(),setTimeout((function(){w((function(e){return M(e)}))()}),600)},primaryActionTranslationId:"action__change",children:Object(m.jsxs)(a.a,{children:[Object(m.jsx)(u.c,{token:n,size:5,showInfo:!0}),Object(m.jsxs)(c.a,{mt:"3",children:[Object(m.jsx)(c.a.Item,{name:"isUnlimited",control:_,children:Object(m.jsx)(c.a.Switch,{isFullMode:!0,label:e.formatMessage({id:"form__unlimited_allowance"})})}),C?null:Object(m.jsx)(c.a.Item,{name:"allowance",label:e.formatMessage({id:"form__allowance"}),control:_,rules:{pattern:{value:/^\d+(\.\d+)?$/g,message:e.formatMessage({id:"form__enter_a_number_greater_than_or_equal_to_0"})},required:{value:!0,message:e.formatMessage({id:"form__field_is_required"})}},children:Object(m.jsx)(c.a.Input,{type:"string"})})]}),Object(m.jsx)(i.h.Body2,{mt:"2",children:""+e.formatMessage({id:"content__balance_str"},{0:k})})]})})}}];t.default=function(){var e=Object(r.a)();return Object(m.jsx)(I.Navigator,{screenOptions:{headerShown:!1,animationEnabled:!!e},children:S.map((function(e){return Object(m.jsx)(I.Screen,{name:e.name,component:e.component},e.name)}))})}}}]);