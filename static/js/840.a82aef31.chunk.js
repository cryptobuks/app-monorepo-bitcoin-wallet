(this.webpackJsonp=this.webpackJsonp||[]).push([[840],{5674:function(t,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return k}));var e=n(6),c=n.n(e),o=n(9),u=n.n(o),f=n(12),i=n.n(f),a=n(5),s=n.n(a),l=n(3382),p=n(11);function h(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=s()(t);if(r){var c=s()(this).constructor;n=Reflect.construct(e,arguments,c)}else n=e.apply(this,arguments);return i()(this,n)}}var y=function(t){u()(n,t);var r=h(n);function n(){return r.apply(this,arguments)}return c()(n)}(n(3385).a);function d(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=s()(t);if(r){var c=s()(this).constructor;n=Reflect.construct(e,arguments,c)}else n=e.apply(this,arguments);return i()(this,n)}}var v=function(t){u()(n,t);var r=d(n);function n(){return r.apply(this,arguments)}return c()(n)}(n(3386).a);function R(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=s()(t);if(r){var c=s()(this).constructor;n=Reflect.construct(e,arguments,c)}else n=e.apply(this,arguments);return i()(this,n)}}var g=function(t){u()(n,t);var r=R(n);function n(){return r.apply(this,arguments)}return c()(n)}(n(3387).a);function B(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=s()(t);if(r){var c=s()(this).constructor;n=Reflect.construct(e,arguments,c)}else n=e.apply(this,arguments);return i()(this,n)}}var w=function(t){u()(n,t);var r=B(n);function n(){return r.apply(this,arguments)}return c()(n)}(n(3388).a),m=n(4331),A=n(4335);function x(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=s()(t);if(r){var c=s()(this).constructor;n=Reflect.construct(e,arguments,c)}else n=e.apply(this,arguments);return i()(this,n)}}var C=function(t){u()(n,t);var r=x(n);function n(){return r.apply(this,arguments)}var e=n.prototype;return e.decodeAddress=function(t){if(!m.isValidAddress(t)||m.isCashAddress(t)&&!t.startsWith("bitcoincash:"))throw new Error("Invalid address: "+t);return m.isCashAddress(t)?m.toLegacyAddress(t):t},e.encodeAddress=function(t){if(!m.isValidAddress(t))throw new Error("Invalid address: "+t);return m.isCashAddress(t)?t:m.toCashAddress(t)},e.getPsbt=function(){return new A.Psbt({network:this.network,forkCoin:"bch"})},c()(n)}(n(3454).a),P=n(2105);function b(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,e=s()(t);if(r){var c=s()(this).constructor;n=Reflect.construct(e,arguments,c)}else n=e.apply(this,arguments);return i()(this,n)}}var k=function(t){u()(n,t);var r=b(n);function n(){for(var t,n=arguments.length,e=new Array(n),c=0;c<n;c++)e[c]=arguments[c];return(t=r.call.apply(r,[this].concat(e))).providerClass=C,t.keyringMap={hd:v,hw:y,imported:g,watching:w,external:w},t.settings=P.default,t}var e=n.prototype;return e.getDefaultPurpose=function(){return 44},e.getCoinName=function(){return"BCH"},e.getCoinType=function(){return p.g},e.getXprvReg=function(){return/^([x]prv)/},e.getXpubReg=function(){return/^([x]pub)/},e.getDefaultBlockNums=function(){return[5,2,1]},e.getDefaultBlockTime=function(){return 600},c()(n)}(l.a)}}]);