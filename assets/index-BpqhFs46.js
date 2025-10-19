function Ng(s,r){for(var h=0;h<r.length;h++){const u=r[h];if(typeof u!="string"&&!Array.isArray(u)){for(const p in u)if(p!=="default"&&!(p in s)){const A=Object.getOwnPropertyDescriptor(u,p);A&&Object.defineProperty(s,p,A.get?A:{enumerable:!0,get:()=>u[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const A of p)if(A.type==="childList")for(const M of A.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&u(M)}).observe(document,{childList:!0,subtree:!0});function h(p){const A={};return p.integrity&&(A.integrity=p.integrity),p.referrerPolicy&&(A.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?A.credentials="include":p.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function u(p){if(p.ep)return;p.ep=!0;const A=h(p);fetch(p.href,A)}})();function Yd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var mc={exports:{}},Ti={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Og(){if(xd)return Ti;xd=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function h(u,p,A){var M=null;if(A!==void 0&&(M=""+A),p.key!==void 0&&(M=""+p.key),"key"in p){A={};for(var C in p)C!=="key"&&(A[C]=p[C])}else A=p;return p=A.ref,{$$typeof:s,type:u,key:M,ref:p!==void 0?p:null,props:A}}return Ti.Fragment=r,Ti.jsx=h,Ti.jsxs=h,Ti}var Sd;function jg(){return Sd||(Sd=1,mc.exports=Og()),mc.exports}var f=jg(),gc={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function _g(){if(Ed)return J;Ed=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),M=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),w=Symbol.iterator;function Y(m){return m===null||typeof m!="object"?null:(m=w&&m[w]||m["@@iterator"],typeof m=="function"?m:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,te={};function L(m,z,B){this.props=m,this.context=z,this.refs=te,this.updater=B||ae}L.prototype.isReactComponent={},L.prototype.setState=function(m,z){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,z,"setState")},L.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ge(){}ge.prototype=L.prototype;function ve(m,z,B){this.props=m,this.context=z,this.refs=te,this.updater=B||ae}var le=ve.prototype=new ge;le.constructor=ve,ee(le,L.prototype),le.isPureReactComponent=!0;var Te=Array.isArray,W={H:null,A:null,T:null,S:null,V:null},We=Object.prototype.hasOwnProperty;function Fe(m,z,B,U,V,ne){return B=ne.ref,{$$typeof:s,type:m,key:z,ref:B!==void 0?B:null,props:ne}}function $e(m,z){return Fe(m.type,z,void 0,void 0,void 0,m.props)}function xt(m){return typeof m=="object"&&m!==null&&m.$$typeof===s}function Ll(m){var z={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(B){return z[B]})}var Ot=/\/+/g;function qe(m,z){return typeof m=="object"&&m!==null&&m.key!=null?Ll(""+m.key):z.toString(36)}function yl(){}function bl(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(yl,yl):(m.status="pending",m.then(function(z){m.status==="pending"&&(m.status="fulfilled",m.value=z)},function(z){m.status==="pending"&&(m.status="rejected",m.reason=z)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Le(m,z,B,U,V){var ne=typeof m;(ne==="undefined"||ne==="boolean")&&(m=null);var k=!1;if(m===null)k=!0;else switch(ne){case"bigint":case"string":case"number":k=!0;break;case"object":switch(m.$$typeof){case s:case r:k=!0;break;case R:return k=m._init,Le(k(m._payload),z,B,U,V)}}if(k)return V=V(m),k=U===""?"."+qe(m,0):U,Te(V)?(B="",k!=null&&(B=k.replace(Ot,"$&/")+"/"),Le(V,z,B,"",function(Xt){return Xt})):V!=null&&(xt(V)&&(V=$e(V,B+(V.key==null||m&&m.key===V.key?"":(""+V.key).replace(Ot,"$&/")+"/")+k)),z.push(V)),1;k=0;var Pe=U===""?".":U+":";if(Te(m))for(var ye=0;ye<m.length;ye++)U=m[ye],ne=Pe+qe(U,ye),k+=Le(U,z,B,ne,V);else if(ye=Y(m),typeof ye=="function")for(m=ye.call(m),ye=0;!(U=m.next()).done;)U=U.value,ne=Pe+qe(U,ye++),k+=Le(U,z,B,ne,V);else if(ne==="object"){if(typeof m.then=="function")return Le(bl(m),z,B,U,V);throw z=String(m),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return k}function O(m,z,B){if(m==null)return m;var U=[],V=0;return Le(m,U,"","",function(ne){return z.call(B,ne,V++)}),U}function H(m){if(m._status===-1){var z=m._result;z=z(),z.then(function(B){(m._status===0||m._status===-1)&&(m._status=1,m._result=B)},function(B){(m._status===0||m._status===-1)&&(m._status=2,m._result=B)}),m._status===-1&&(m._status=0,m._result=z)}if(m._status===1)return m._result.default;throw m._result}var Z=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function he(){}return J.Children={map:O,forEach:function(m,z,B){O(m,function(){z.apply(this,arguments)},B)},count:function(m){var z=0;return O(m,function(){z++}),z},toArray:function(m){return O(m,function(z){return z})||[]},only:function(m){if(!xt(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},J.Component=L,J.Fragment=h,J.Profiler=p,J.PureComponent=ve,J.StrictMode=u,J.Suspense=T,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,J.__COMPILER_RUNTIME={__proto__:null,c:function(m){return W.H.useMemoCache(m)}},J.cache=function(m){return function(){return m.apply(null,arguments)}},J.cloneElement=function(m,z,B){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var U=ee({},m.props),V=m.key,ne=void 0;if(z!=null)for(k in z.ref!==void 0&&(ne=void 0),z.key!==void 0&&(V=""+z.key),z)!We.call(z,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&z.ref===void 0||(U[k]=z[k]);var k=arguments.length-2;if(k===1)U.children=B;else if(1<k){for(var Pe=Array(k),ye=0;ye<k;ye++)Pe[ye]=arguments[ye+2];U.children=Pe}return Fe(m.type,V,void 0,void 0,ne,U)},J.createContext=function(m){return m={$$typeof:M,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:A,_context:m},m},J.createElement=function(m,z,B){var U,V={},ne=null;if(z!=null)for(U in z.key!==void 0&&(ne=""+z.key),z)We.call(z,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(V[U]=z[U]);var k=arguments.length-2;if(k===1)V.children=B;else if(1<k){for(var Pe=Array(k),ye=0;ye<k;ye++)Pe[ye]=arguments[ye+2];V.children=Pe}if(m&&m.defaultProps)for(U in k=m.defaultProps,k)V[U]===void 0&&(V[U]=k[U]);return Fe(m,ne,void 0,void 0,null,V)},J.createRef=function(){return{current:null}},J.forwardRef=function(m){return{$$typeof:C,render:m}},J.isValidElement=xt,J.lazy=function(m){return{$$typeof:R,_payload:{_status:-1,_result:m},_init:H}},J.memo=function(m,z){return{$$typeof:y,type:m,compare:z===void 0?null:z}},J.startTransition=function(m){var z=W.T,B={};W.T=B;try{var U=m(),V=W.S;V!==null&&V(B,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(he,Z)}catch(ne){Z(ne)}finally{W.T=z}},J.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},J.use=function(m){return W.H.use(m)},J.useActionState=function(m,z,B){return W.H.useActionState(m,z,B)},J.useCallback=function(m,z){return W.H.useCallback(m,z)},J.useContext=function(m){return W.H.useContext(m)},J.useDebugValue=function(){},J.useDeferredValue=function(m,z){return W.H.useDeferredValue(m,z)},J.useEffect=function(m,z,B){var U=W.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(m,z)},J.useId=function(){return W.H.useId()},J.useImperativeHandle=function(m,z,B){return W.H.useImperativeHandle(m,z,B)},J.useInsertionEffect=function(m,z){return W.H.useInsertionEffect(m,z)},J.useLayoutEffect=function(m,z){return W.H.useLayoutEffect(m,z)},J.useMemo=function(m,z){return W.H.useMemo(m,z)},J.useOptimistic=function(m,z){return W.H.useOptimistic(m,z)},J.useReducer=function(m,z,B){return W.H.useReducer(m,z,B)},J.useRef=function(m){return W.H.useRef(m)},J.useState=function(m){return W.H.useState(m)},J.useSyncExternalStore=function(m,z,B){return W.H.useSyncExternalStore(m,z,B)},J.useTransition=function(){return W.H.useTransition()},J.version="19.1.1",J}var Td;function Ac(){return Td||(Td=1,gc.exports=_g()),gc.exports}var D=Ac();const Qt=Yd(D),Rg=Ng({__proto__:null,default:Qt},[D]);var pc={exports:{}},Ai={},vc={exports:{}},yc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function zg(){return Ad||(Ad=1,(function(s){function r(O,H){var Z=O.length;O.push(H);e:for(;0<Z;){var he=Z-1>>>1,m=O[he];if(0<p(m,H))O[he]=H,O[Z]=m,Z=he;else break e}}function h(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var H=O[0],Z=O.pop();if(Z!==H){O[0]=Z;e:for(var he=0,m=O.length,z=m>>>1;he<z;){var B=2*(he+1)-1,U=O[B],V=B+1,ne=O[V];if(0>p(U,Z))V<m&&0>p(ne,U)?(O[he]=ne,O[V]=Z,he=V):(O[he]=U,O[B]=Z,he=B);else if(V<m&&0>p(ne,Z))O[he]=ne,O[V]=Z,he=V;else break e}}return H}function p(O,H){var Z=O.sortIndex-H.sortIndex;return Z!==0?Z:O.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;s.unstable_now=function(){return A.now()}}else{var M=Date,C=M.now();s.unstable_now=function(){return M.now()-C}}var T=[],y=[],R=1,w=null,Y=3,ae=!1,ee=!1,te=!1,L=!1,ge=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function Te(O){for(var H=h(y);H!==null;){if(H.callback===null)u(y);else if(H.startTime<=O)u(y),H.sortIndex=H.expirationTime,r(T,H);else break;H=h(y)}}function W(O){if(te=!1,Te(O),!ee)if(h(T)!==null)ee=!0,We||(We=!0,qe());else{var H=h(y);H!==null&&Le(W,H.startTime-O)}}var We=!1,Fe=-1,$e=5,xt=-1;function Ll(){return L?!0:!(s.unstable_now()-xt<$e)}function Ot(){if(L=!1,We){var O=s.unstable_now();xt=O;var H=!0;try{e:{ee=!1,te&&(te=!1,ve(Fe),Fe=-1),ae=!0;var Z=Y;try{t:{for(Te(O),w=h(T);w!==null&&!(w.expirationTime>O&&Ll());){var he=w.callback;if(typeof he=="function"){w.callback=null,Y=w.priorityLevel;var m=he(w.expirationTime<=O);if(O=s.unstable_now(),typeof m=="function"){w.callback=m,Te(O),H=!0;break t}w===h(T)&&u(T),Te(O)}else u(T);w=h(T)}if(w!==null)H=!0;else{var z=h(y);z!==null&&Le(W,z.startTime-O),H=!1}}break e}finally{w=null,Y=Z,ae=!1}H=void 0}}finally{H?qe():We=!1}}}var qe;if(typeof le=="function")qe=function(){le(Ot)};else if(typeof MessageChannel<"u"){var yl=new MessageChannel,bl=yl.port2;yl.port1.onmessage=Ot,qe=function(){bl.postMessage(null)}}else qe=function(){ge(Ot,0)};function Le(O,H){Fe=ge(function(){O(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return Y},s.unstable_next=function(O){switch(Y){case 1:case 2:case 3:var H=3;break;default:H=Y}var Z=Y;Y=H;try{return O()}finally{Y=Z}},s.unstable_requestPaint=function(){L=!0},s.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=Y;Y=O;try{return H()}finally{Y=Z}},s.unstable_scheduleCallback=function(O,H,Z){var he=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?he+Z:he):Z=he,O){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=Z+m,O={id:R++,callback:H,priorityLevel:O,startTime:Z,expirationTime:m,sortIndex:-1},Z>he?(O.sortIndex=Z,r(y,O),h(T)===null&&O===h(y)&&(te?(ve(Fe),Fe=-1):te=!0,Le(W,Z-he))):(O.sortIndex=m,r(T,O),ee||ae||(ee=!0,We||(We=!0,qe()))),O},s.unstable_shouldYield=Ll,s.unstable_wrapCallback=function(O){var H=Y;return function(){var Z=Y;Y=H;try{return O.apply(this,arguments)}finally{Y=Z}}}})(yc)),yc}var Md;function Cg(){return Md||(Md=1,vc.exports=zg()),vc.exports}var bc={exports:{}},Ve={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function wg(){if(Nd)return Ve;Nd=1;var s=Ac();function r(T){var y="https://react.dev/errors/"+T;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)y+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+T+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var u={d:{f:h,r:function(){throw Error(r(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},p=Symbol.for("react.portal");function A(T,y,R){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:w==null?null:""+w,children:T,containerInfo:y,implementation:R}}var M=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(T,y){if(T==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ve.createPortal=function(T,y){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return A(T,y,null,R)},Ve.flushSync=function(T){var y=M.T,R=u.p;try{if(M.T=null,u.p=2,T)return T()}finally{M.T=y,u.p=R,u.d.f()}},Ve.preconnect=function(T,y){typeof T=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,u.d.C(T,y))},Ve.prefetchDNS=function(T){typeof T=="string"&&u.d.D(T)},Ve.preinit=function(T,y){if(typeof T=="string"&&y&&typeof y.as=="string"){var R=y.as,w=C(R,y.crossOrigin),Y=typeof y.integrity=="string"?y.integrity:void 0,ae=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;R==="style"?u.d.S(T,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:Y,fetchPriority:ae}):R==="script"&&u.d.X(T,{crossOrigin:w,integrity:Y,fetchPriority:ae,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ve.preinitModule=function(T,y){if(typeof T=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var R=C(y.as,y.crossOrigin);u.d.M(T,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&u.d.M(T)},Ve.preload=function(T,y){if(typeof T=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var R=y.as,w=C(R,y.crossOrigin);u.d.L(T,R,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ve.preloadModule=function(T,y){if(typeof T=="string")if(y){var R=C(y.as,y.crossOrigin);u.d.m(T,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else u.d.m(T)},Ve.requestFormReset=function(T){u.d.r(T)},Ve.unstable_batchedUpdates=function(T,y){return T(y)},Ve.useFormState=function(T,y,R){return M.H.useFormState(T,y,R)},Ve.useFormStatus=function(){return M.H.useHostTransitionStatus()},Ve.version="19.1.1",Ve}var Od;function Vd(){if(Od)return bc.exports;Od=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),bc.exports=wg(),bc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function Dg(){if(jd)return Ai;jd=1;var s=Cg(),r=Ac(),h=Vd();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function M(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(A(e)!==e)throw Error(u(188))}function T(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(u(188));return t!==e?null:e}for(var l=e,a=t;;){var i=l.return;if(i===null)break;var n=i.alternate;if(n===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===l)return C(i),e;if(n===a)return C(i),t;n=n.sibling}throw Error(u(188))}if(l.return!==a.return)l=i,a=n;else{for(var o=!1,c=i.child;c;){if(c===l){o=!0,l=i,a=n;break}if(c===a){o=!0,a=i,l=n;break}c=c.sibling}if(!o){for(c=n.child;c;){if(c===l){o=!0,l=n,a=i;break}if(c===a){o=!0,a=n,l=i;break}c=c.sibling}if(!o)throw Error(u(189))}}if(l.alternate!==a)throw Error(u(190))}if(l.tag!==3)throw Error(u(188));return l.stateNode.current===l?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,w=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),ae=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),ve=Symbol.for("react.consumer"),le=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),Fe=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),xt=Symbol.for("react.activity"),Ll=Symbol.for("react.memo_cache_sentinel"),Ot=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=Ot&&e[Ot]||e["@@iterator"],typeof e=="function"?e:null)}var yl=Symbol.for("react.client.reference");function bl(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case L:return"Profiler";case te:return"StrictMode";case W:return"Suspense";case We:return"SuspenseList";case xt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ae:return"Portal";case le:return(e.displayName||"Context")+".Provider";case ve:return(e._context.displayName||"Context")+".Consumer";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fe:return t=e.displayName||null,t!==null?t:bl(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return bl(e(t))}catch{}}return null}var Le=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},he=[],m=-1;function z(e){return{current:e}}function B(e){0>m||(e.current=he[m],he[m]=null,m--)}function U(e,t){m++,he[m]=e.current,e.current=t}var V=z(null),ne=z(null),k=z(null),Pe=z(null);function ye(e,t){switch(U(k,t),U(ne,e),U(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jf(t),e=Wf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(V),U(V,e)}function Xt(){B(V),B(ne),B(k)}function Pn(e){e.memoizedState!==null&&U(Pe,e);var t=V.current,l=Wf(t,e.type);t!==l&&(U(ne,e),U(V,l))}function Ri(e){ne.current===e&&(B(V),B(ne)),Pe.current===e&&(B(Pe),yi._currentValue=Z)}var In=Object.prototype.hasOwnProperty,eo=s.unstable_scheduleCallback,to=s.unstable_cancelCallback,ih=s.unstable_shouldYield,nh=s.unstable_requestPaint,St=s.unstable_now,oh=s.unstable_getCurrentPriorityLevel,Oc=s.unstable_ImmediatePriority,jc=s.unstable_UserBlockingPriority,zi=s.unstable_NormalPriority,sh=s.unstable_LowPriority,_c=s.unstable_IdlePriority,ch=s.log,uh=s.unstable_setDisableYieldValue,Na=null,Ie=null;function Zt(e){if(typeof ch=="function"&&uh(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(Na,e)}catch{}}var et=Math.clz32?Math.clz32:dh,rh=Math.log,fh=Math.LN2;function dh(e){return e>>>=0,e===0?32:31-(rh(e)/fh|0)|0}var Ci=256,wi=4194304;function xl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var i=0,n=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?i=xl(a):(o&=c,o!==0?i=xl(o):l||(l=c&~e,l!==0&&(i=xl(l))))):(c=a&~n,c!==0?i=xl(c):o!==0?i=xl(o):l||(l=a&~e,l!==0&&(i=xl(l)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,l=t&-t,n>=l||n===32&&(l&4194048)!==0)?t:i}function Oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rc(){var e=Ci;return Ci<<=1,(Ci&4194048)===0&&(Ci=256),e}function zc(){var e=wi;return wi<<=1,(wi&62914560)===0&&(wi=4194304),e}function lo(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function ja(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mh(e,t,l,a,i,n){var o=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,x=e.hiddenUpdates;for(l=o&~l;0<l;){var N=31-et(l),_=1<<N;c[N]=0,d[N]=-1;var S=x[N];if(S!==null)for(x[N]=null,N=0;N<S.length;N++){var E=S[N];E!==null&&(E.lane&=-536870913)}l&=~_}a!==0&&Cc(e,a,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(o&~t))}function Cc(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-et(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&4194090}function wc(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-et(l),i=1<<a;i&t|e[a]&t&&(e[a]|=t),l&=~i}}function ao(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function io(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Dc(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:md(e.type))}function gh(e,t){var l=H.p;try{return H.p=e,t()}finally{H.p=l}}var Kt=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Kt,Xe="__reactProps$"+Kt,Gl="__reactContainer$"+Kt,no="__reactEvents$"+Kt,ph="__reactListeners$"+Kt,vh="__reactHandles$"+Kt,Uc="__reactResources$"+Kt,_a="__reactMarker$"+Kt;function oo(e){delete e[Ge],delete e[Xe],delete e[no],delete e[ph],delete e[vh]}function Yl(e){var t=e[Ge];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Gl]||l[Ge]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=If(e);e!==null;){if(l=e[Ge])return l;e=If(e)}return t}e=l,l=e.parentNode}return null}function Vl(e){if(e=e[Ge]||e[Gl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ra(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ql(e){var t=e[Uc];return t||(t=e[Uc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ze(e){e[_a]=!0}var Hc=new Set,Bc={};function Sl(e,t){Xl(e,t),Xl(e+"Capture",t)}function Xl(e,t){for(Bc[e]=t,e=0;e<t.length;e++)Hc.add(t[e])}var yh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},Lc={};function bh(e){return In.call(Lc,e)?!0:In.call(qc,e)?!1:yh.test(e)?Lc[e]=!0:(qc[e]=!0,!1)}function Ui(e,t,l){if(bh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Hi(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function jt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}var so,Gc;function Zl(e){if(so===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);so=t&&t[1]||"",Gc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+so+e+Gc}var co=!1;function uo(e,t){if(!e||co)return"";co=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(E){var S=E}Reflect.construct(e,[],_)}else{try{_.call()}catch(E){S=E}e.call(_.prototype)}}else{try{throw Error()}catch(E){S=E}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(E){if(E&&S&&typeof E.stack=="string")return[E.stack,S.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),o=n[0],c=n[1];if(o&&c){var d=o.split(`
`),x=c.split(`
`);for(i=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;if(a===d.length||i===x.length)for(a=d.length-1,i=x.length-1;1<=a&&0<=i&&d[a]!==x[i];)i--;for(;1<=a&&0<=i;a--,i--)if(d[a]!==x[i]){if(a!==1||i!==1)do if(a--,i--,0>i||d[a]!==x[i]){var N=`
`+d[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=i);break}}}finally{co=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Zl(l):""}function xh(e){switch(e.tag){case 26:case 27:case 5:return Zl(e.type);case 16:return Zl("Lazy");case 13:return Zl("Suspense");case 19:return Zl("SuspenseList");case 0:case 15:return uo(e.type,!1);case 11:return uo(e.type.render,!1);case 1:return uo(e.type,!0);case 31:return Zl("Activity");default:return""}}function Yc(e){try{var t="";do t+=xh(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sh(e){var t=Vc(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,n.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bi(e){e._valueTracker||(e._valueTracker=Sh(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Vc(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Eh=/[\n"\\]/g;function ut(e){return e.replace(Eh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ro(e,t,l,a,i,n,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?fo(e,o,ct(t)):l!=null?fo(e,o,ct(l)):a!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ct(c):e.removeAttribute("name")}function Xc(e,t,l,a,i,n,o,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||t!=null))return;l=l!=null?""+ct(l):"",t=t!=null?""+ct(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function fo(e,t,l){t==="number"&&qi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Kl(e,t,l,a){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ct(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zc(e,t,l){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ct(l):""}function Kc(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(u(92));if(Le(a)){if(1<a.length)throw Error(u(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ct(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a)}function kl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Th=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kc(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Th.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Jc(e,t,l){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&l[i]!==a&&kc(e,i,a)}else for(var n in t)t.hasOwnProperty(n)&&kc(e,n,t[n])}function ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Li(e){return Mh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var mo=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,Wl=null;function Wc(e){var t=Vl(e);if(t&&(e=t.stateNode)){var l=e[Xe]||null;e:switch(e=t.stateNode,t.type){case"input":if(ro(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var i=a[Xe]||null;if(!i)throw Error(u(90));ro(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Qc(a)}break e;case"textarea":Zc(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Kl(e,!!l.multiple,t,!1)}}}var po=!1;function Fc(e,t,l){if(po)return e(t,l);po=!0;try{var a=e(t);return a}finally{if(po=!1,(Jl!==null||Wl!==null)&&(Mn(),Jl&&(t=Jl,e=Wl,Wl=Jl=null,Wc(t),e)))for(t=0;t<e.length;t++)Wc(e[t])}}function za(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Xe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(u(231,t,typeof l));return l}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vo=!1;if(_t)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){vo=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{vo=!1}var kt=null,yo=null,Gi=null;function $c(){if(Gi)return Gi;var e,t=yo,l=t.length,a,i="value"in kt?kt.value:kt.textContent,n=i.length;for(e=0;e<l&&t[e]===i[e];e++);var o=l-e;for(a=1;a<=o&&t[l-a]===i[n-a];a++);return Gi=i.slice(e,1<a?1-a:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Pc(){return!1}function Ze(e){function t(l,a,i,n,o){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Vi:Pc,this.isPropagationStopped=Pc,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var El={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=Ze(El),wa=R({},El,{view:0,detail:0}),Nh=Ze(wa),bo,xo,Da,Xi=R({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Da&&(Da&&e.type==="mousemove"?(bo=e.screenX-Da.screenX,xo=e.screenY-Da.screenY):xo=bo=0,Da=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:xo}}),Ic=Ze(Xi),Oh=R({},Xi,{dataTransfer:0}),jh=Ze(Oh),_h=R({},wa,{relatedTarget:0}),So=Ze(_h),Rh=R({},El,{animationName:0,elapsedTime:0,pseudoElement:0}),zh=Ze(Rh),Ch=R({},El,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wh=Ze(Ch),Dh=R({},El,{data:0}),eu=Ze(Dh),Uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bh[e])?!!t[e]:!1}function Eo(){return qh}var Lh=R({},wa,{key:function(e){if(e.key){var t=Uh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eo,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=Ze(Lh),Yh=R({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=Ze(Yh),Vh=R({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eo}),Qh=Ze(Vh),Xh=R({},El,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zh=Ze(Xh),Kh=R({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kh=Ze(Kh),Jh=R({},El,{newState:0,oldState:0}),Wh=Ze(Jh),Fh=[9,13,27,32],To=_t&&"CompositionEvent"in window,Ua=null;_t&&"documentMode"in document&&(Ua=document.documentMode);var $h=_t&&"TextEvent"in window&&!Ua,lu=_t&&(!To||Ua&&8<Ua&&11>=Ua),au=" ",iu=!1;function nu(e,t){switch(e){case"keyup":return Fh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ou(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fl=!1;function Ph(e,t){switch(e){case"compositionend":return ou(t);case"keypress":return t.which!==32?null:(iu=!0,au);case"textInput":return e=t.data,e===au&&iu?null:e;default:return null}}function Ih(e,t){if(Fl)return e==="compositionend"||!To&&nu(e,t)?(e=$c(),Gi=yo=kt=null,Fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lu&&t.locale!=="ko"?null:t.data;default:return null}}var em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!em[e.type]:t==="textarea"}function cu(e,t,l,a){Jl?Wl?Wl.push(a):Wl=[a]:Jl=a,t=zn(t,"onChange"),0<t.length&&(l=new Qi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ha=null,Ba=null;function tm(e){Qf(e,0)}function Zi(e){var t=Ra(e);if(Qc(t))return e}function uu(e,t){if(e==="change")return t}var ru=!1;if(_t){var Ao;if(_t){var Mo="oninput"in document;if(!Mo){var fu=document.createElement("div");fu.setAttribute("oninput","return;"),Mo=typeof fu.oninput=="function"}Ao=Mo}else Ao=!1;ru=Ao&&(!document.documentMode||9<document.documentMode)}function du(){Ha&&(Ha.detachEvent("onpropertychange",hu),Ba=Ha=null)}function hu(e){if(e.propertyName==="value"&&Zi(Ba)){var t=[];cu(t,Ba,e,go(e)),Fc(tm,t)}}function lm(e,t,l){e==="focusin"?(du(),Ha=t,Ba=l,Ha.attachEvent("onpropertychange",hu)):e==="focusout"&&du()}function am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(Ba)}function im(e,t){if(e==="click")return Zi(t)}function nm(e,t){if(e==="input"||e==="change")return Zi(t)}function om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:om;function qa(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!In.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gu(e,t){var l=mu(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=mu(l)}}function pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qi(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=qi(e.document)}return t}function No(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var sm=_t&&"documentMode"in document&&11>=document.documentMode,$l=null,Oo=null,La=null,jo=!1;function yu(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;jo||$l==null||$l!==qi(a)||(a=$l,"selectionStart"in a&&No(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&qa(La,a)||(La=a,a=zn(Oo,"onSelect"),0<a.length&&(t=new Qi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=$l)))}function Tl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Pl={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionrun:Tl("Transition","TransitionRun"),transitionstart:Tl("Transition","TransitionStart"),transitioncancel:Tl("Transition","TransitionCancel"),transitionend:Tl("Transition","TransitionEnd")},_o={},bu={};_t&&(bu=document.createElement("div").style,"AnimationEvent"in window||(delete Pl.animationend.animation,delete Pl.animationiteration.animation,delete Pl.animationstart.animation),"TransitionEvent"in window||delete Pl.transitionend.transition);function Al(e){if(_o[e])return _o[e];if(!Pl[e])return e;var t=Pl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in bu)return _o[e]=t[l];return e}var xu=Al("animationend"),Su=Al("animationiteration"),Eu=Al("animationstart"),cm=Al("transitionrun"),um=Al("transitionstart"),rm=Al("transitioncancel"),Tu=Al("transitionend"),Au=new Map,Ro="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ro.push("scrollEnd");function vt(e,t){Au.set(e,t),Sl(t,[e])}var Mu=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var l=Mu.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Yc(t)},Mu.set(e,t),t)}return{value:e,source:t,stack:Yc(t)}}var ft=[],Il=0,zo=0;function Ki(){for(var e=Il,t=zo=Il=0;t<e;){var l=ft[t];ft[t++]=null;var a=ft[t];ft[t++]=null;var i=ft[t];ft[t++]=null;var n=ft[t];if(ft[t++]=null,a!==null&&i!==null){var o=a.pending;o===null?i.next=i:(i.next=o.next,o.next=i),a.pending=i}n!==0&&Nu(l,i,n)}}function ki(e,t,l,a){ft[Il++]=e,ft[Il++]=t,ft[Il++]=l,ft[Il++]=a,zo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Co(e,t,l,a){return ki(e,t,l,a),Ji(e)}function ea(e,t){return ki(e,null,null,t),Ji(e)}function Nu(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var i=!1,n=e.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-et(l),e=n.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=l|536870912),n):null}function Ji(e){if(50<ri)throw ri=0,qs=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ta={};function fm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,l,a){return new fm(e,t,l,a)}function wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rt(e,t){var l=e.alternate;return l===null?(l=lt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Ou(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wi(e,t,l,a,i,n){var o=0;if(a=e,typeof e=="function")wo(e)&&(o=1);else if(typeof e=="string")o=hg(e,l,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xt:return e=lt(31,l,t,i),e.elementType=xt,e.lanes=n,e;case ee:return Ml(l.children,i,n,t);case te:o=8,i|=24;break;case L:return e=lt(12,l,t,i|2),e.elementType=L,e.lanes=n,e;case W:return e=lt(13,l,t,i),e.elementType=W,e.lanes=n,e;case We:return e=lt(19,l,t,i),e.elementType=We,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:case le:o=10;break e;case ve:o=9;break e;case Te:o=11;break e;case Fe:o=14;break e;case $e:o=16,a=null;break e}o=29,l=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=lt(o,l,t,i),t.elementType=e,t.type=a,t.lanes=n,t}function Ml(e,t,l,a){return e=lt(7,e,a,t),e.lanes=l,e}function Do(e,t,l){return e=lt(6,e,null,t),e.lanes=l,e}function Uo(e,t,l){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var la=[],aa=0,Fi=null,$i=0,dt=[],ht=0,Nl=null,zt=1,Ct="";function Ol(e,t){la[aa++]=$i,la[aa++]=Fi,Fi=e,$i=t}function ju(e,t,l){dt[ht++]=zt,dt[ht++]=Ct,dt[ht++]=Nl,Nl=e;var a=zt;e=Ct;var i=32-et(a)-1;a&=~(1<<i),l+=1;var n=32-et(t)+i;if(30<n){var o=i-i%5;n=(a&(1<<o)-1).toString(32),a>>=o,i-=o,zt=1<<32-et(t)+i|l<<i|a,Ct=n+e}else zt=1<<n|l<<i|a,Ct=e}function Ho(e){e.return!==null&&(Ol(e,1),ju(e,1,0))}function Bo(e){for(;e===Fi;)Fi=la[--aa],la[aa]=null,$i=la[--aa],la[aa]=null;for(;e===Nl;)Nl=dt[--ht],dt[ht]=null,Ct=dt[--ht],dt[ht]=null,zt=dt[--ht],dt[ht]=null}var Qe=null,Se=null,se=!1,jl=null,Et=!1,qo=Error(u(519));function _l(e){var t=Error(u(418,""));throw Va(rt(t,e)),qo}function _u(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ge]=e,t[Xe]=a,l){case"dialog":I("cancel",t),I("close",t);break;case"iframe":case"object":case"embed":I("load",t);break;case"video":case"audio":for(l=0;l<di.length;l++)I(di[l],t);break;case"source":I("error",t);break;case"img":case"image":case"link":I("error",t),I("load",t);break;case"details":I("toggle",t);break;case"input":I("invalid",t),Xc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Bi(t);break;case"select":I("invalid",t);break;case"textarea":I("invalid",t),Kc(t,a.value,a.defaultValue,a.children),Bi(t)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||kf(t.textContent,l)?(a.popover!=null&&(I("beforetoggle",t),I("toggle",t)),a.onScroll!=null&&I("scroll",t),a.onScrollEnd!=null&&I("scrollend",t),a.onClick!=null&&(t.onclick=Cn),t=!0):t=!1,t||_l(e)}function Ru(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Qe=Qe.return}}function Ga(e){if(e!==Qe)return!1;if(!se)return Ru(e),se=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ec(e.type,e.memoizedProps)),l=!l),l&&Se&&_l(e),Ru(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){Se=bt(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}Se=null}}else t===27?(t=Se,ul(e.type)?(e=ic,ic=null,Se=e):Se=t):Se=Qe?bt(e.stateNode.nextSibling):null;return!0}function Ya(){Se=Qe=null,se=!1}function zu(){var e=jl;return e!==null&&(Je===null?Je=e:Je.push.apply(Je,e),jl=null),e}function Va(e){jl===null?jl=[e]:jl.push(e)}var Lo=z(null),Rl=null,wt=null;function Jt(e,t,l){U(Lo,t._currentValue),t._currentValue=l}function Dt(e){e._currentValue=Lo.current,B(Lo)}function Go(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Yo(e,t,l,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;e:for(;n!==null;){var c=n;n=i;for(var d=0;d<t.length;d++)if(c.context===t[d]){n.lanes|=l,c=n.alternate,c!==null&&(c.lanes|=l),Go(n.return,l,e),a||(o=null);break e}n=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(u(341));o.lanes|=l,n=o.alternate,n!==null&&(n.lanes|=l),Go(o,l,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Qa(e,t,l,a){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var c=i.type;tt(i.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(i===Pe.current){if(o=i.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(yi):e=[yi])}i=i.return}e!==null&&Yo(t,e,l,a),t.flags|=262144}function Pi(e){for(e=e.firstContext;e!==null;){if(!tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zl(e){Rl=e,wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ye(e){return Cu(Rl,e)}function Ii(e,t){return Rl===null&&zl(e),Cu(e,t)}function Cu(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},wt===null){if(e===null)throw Error(u(308));wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wt=wt.next=t;return l}var dm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},hm=s.unstable_scheduleCallback,mm=s.unstable_NormalPriority,_e={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vo(){return{controller:new dm,data:new Map,refCount:0}}function Xa(e){e.refCount--,e.refCount===0&&hm(mm,function(){e.controller.abort()})}var Za=null,Qo=0,ia=0,na=null;function gm(e,t){if(Za===null){var l=Za=[];Qo=0,ia=Zs(),na={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Qo++,t.then(wu,wu),t}function wu(){if(--Qo===0&&Za!==null){na!==null&&(na.status="fulfilled");var e=Za;Za=null,ia=0,na=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Du=O.S;O.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&gm(e,t),Du!==null&&Du(e,t)};var Cl=z(null);function Xo(){var e=Cl.current;return e!==null?e:pe.pooledCache}function en(e,t){t===null?U(Cl,Cl.current):U(Cl,t.pool)}function Uu(){var e=Xo();return e===null?null:{parent:_e._currentValue,pool:e}}var Ka=Error(u(460)),Hu=Error(u(474)),tn=Error(u(542)),Zo={then:function(){}};function Bu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ln(){}function qu(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(ln,ln),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gu(e),e;default:if(typeof t.status=="string")t.then(ln,ln);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gu(e),e}throw ka=t,Ka}}var ka=null;function Lu(){if(ka===null)throw Error(u(459));var e=ka;return ka=null,e}function Gu(e){if(e===Ka||e===tn)throw Error(u(483))}var Wt=!1;function Ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ft(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $t(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ce&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Ji(e),Nu(e,null,l),t}return ki(e,a,t,l),Ji(e)}function Ja(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,wc(e,l)}}function Jo(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var o={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,l=l.next}while(l!==null);n===null?i=n=t:n=n.next=t}else i=n=t;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Wo=!1;function Wa(){if(Wo){var e=na;if(e!==null)throw e}}function Fa(e,t,l,a){Wo=!1;var i=e.updateQueue;Wt=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,x=d.next;d.next=null,o===null?n=x:o.next=x,o=d;var N=e.alternate;N!==null&&(N=N.updateQueue,c=N.lastBaseUpdate,c!==o&&(c===null?N.firstBaseUpdate=x:c.next=x,N.lastBaseUpdate=d))}if(n!==null){var _=i.baseState;o=0,N=x=d=null,c=n;do{var S=c.lane&-536870913,E=S!==c.lane;if(E?(ie&S)===S:(a&S)===S){S!==0&&S===ia&&(Wo=!0),N!==null&&(N=N.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var K=e,Q=c;S=t;var de=l;switch(Q.tag){case 1:if(K=Q.payload,typeof K=="function"){_=K.call(de,_,S);break e}_=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=Q.payload,S=typeof K=="function"?K.call(de,_,S):K,S==null)break e;_=R({},_,S);break e;case 2:Wt=!0}}S=c.callback,S!==null&&(e.flags|=64,E&&(e.flags|=8192),E=i.callbacks,E===null?i.callbacks=[S]:E.push(S))}else E={lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},N===null?(x=N=E,d=_):N=N.next=E,o|=S;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;E=c,c=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);N===null&&(d=_),i.baseState=d,i.firstBaseUpdate=x,i.lastBaseUpdate=N,n===null&&(i.shared.lanes=0),nl|=o,e.lanes=o,e.memoizedState=_}}function Yu(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Vu(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Yu(l[e],t)}var oa=z(null),an=z(0);function Qu(e,t){e=Yt,U(an,e),U(oa,t),Yt=e|t.baseLanes}function Fo(){U(an,Yt),U(oa,oa.current)}function $o(){Yt=an.current,B(oa),B(an)}var Pt=0,F=null,re=null,Ne=null,nn=!1,sa=!1,wl=!1,on=0,$a=0,ca=null,vm=0;function Ae(){throw Error(u(321))}function Po(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!tt(e[l],t[l]))return!1;return!0}function Io(e,t,l,a,i,n){return Pt=n,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Nr:Or,wl=!1,n=l(a,i),wl=!1,sa&&(n=Zu(t,l,a,i)),Xu(e),n}function Xu(e){O.H=dn;var t=re!==null&&re.next!==null;if(Pt=0,Ne=re=F=null,nn=!1,$a=0,ca=null,t)throw Error(u(300));e===null||Ce||(e=e.dependencies,e!==null&&Pi(e)&&(Ce=!0))}function Zu(e,t,l,a){F=e;var i=0;do{if(sa&&(ca=null),$a=0,sa=!1,25<=i)throw Error(u(301));if(i+=1,Ne=re=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}O.H=Am,n=t(l,a)}while(sa);return n}function ym(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Pa(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(F.flags|=1024),t}function es(){var e=on!==0;return on=0,e}function ts(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function ls(e){if(nn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}nn=!1}Pt=0,Ne=re=F=null,sa=!1,$a=on=0,ca=null}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?F.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Oe(){if(re===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Ne===null?F.memoizedState:Ne.next;if(t!==null)Ne=t,re=e;else{if(e===null)throw F.alternate===null?Error(u(467)):Error(u(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Ne===null?F.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function as(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(e){var t=$a;return $a+=1,ca===null&&(ca=[]),e=qu(ca,e,t),t=F,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Nr:Or),e}function sn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pa(e);if(e.$$typeof===le)return Ye(e)}throw Error(u(438,String(e)))}function is(e){var t=null,l=F.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=F.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=as(),F.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Ll;return t.index++,l}function Ut(e,t){return typeof t=="function"?t(e):t}function cn(e){var t=Oe();return ns(t,re,e)}function ns(e,t,l){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=l;var i=e.baseQueue,n=a.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}t.baseQueue=i=n,a.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var c=o=null,d=null,x=t,N=!1;do{var _=x.lane&-536870913;if(_!==x.lane?(ie&_)===_:(Pt&_)===_){var S=x.revertLane;if(S===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),_===ia&&(N=!0);else if((Pt&S)===S){x=x.next,S===ia&&(N=!0);continue}else _={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(c=d=_,o=n):d=d.next=_,F.lanes|=S,nl|=S;_=x.action,wl&&l(n,_),n=x.hasEagerState?x.eagerState:l(n,_)}else S={lane:_,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(c=d=S,o=n):d=d.next=S,F.lanes|=_,nl|=_;x=x.next}while(x!==null&&x!==t);if(d===null?o=n:d.next=c,!tt(n,e.memoizedState)&&(Ce=!0,N&&(l=na,l!==null)))throw l;e.memoizedState=n,e.baseState=o,e.baseQueue=d,a.lastRenderedState=n}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function os(e){var t=Oe(),l=t.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=e;var a=l.dispatch,i=l.pending,n=t.memoizedState;if(i!==null){l.pending=null;var o=i=i.next;do n=e(n,o.action),o=o.next;while(o!==i);tt(n,t.memoizedState)||(Ce=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),l.lastRenderedState=n}return[n,a]}function Ku(e,t,l){var a=F,i=Oe(),n=se;if(n){if(l===void 0)throw Error(u(407));l=l()}else l=t();var o=!tt((re||i).memoizedState,l);o&&(i.memoizedState=l,Ce=!0),i=i.queue;var c=Wu.bind(null,a,i,e);if(Ia(2048,8,c,[e]),i.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(a.flags|=2048,ua(9,un(),Ju.bind(null,a,i,l,t),null),pe===null)throw Error(u(349));n||(Pt&124)!==0||ku(a,t,l)}return l}function ku(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=F.updateQueue,t===null?(t=as(),F.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Ju(e,t,l,a){t.value=l,t.getSnapshot=a,Fu(t)&&$u(e)}function Wu(e,t,l){return l(function(){Fu(t)&&$u(e)})}function Fu(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!tt(e,l)}catch{return!0}}function $u(e){var t=ea(e,2);t!==null&&st(t,e,2)}function ss(e){var t=Ke();if(typeof e=="function"){var l=e;if(e=l(),wl){Zt(!0);try{l()}finally{Zt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:e},t}function Pu(e,t,l,a){return e.baseState=l,ns(e,re,typeof a=="function"?a:Ut)}function bm(e,t,l,a,i){if(fn(e))throw Error(u(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};O.T!==null?l(!0):n.isTransition=!1,a(n),l=t.pending,l===null?(n.next=t.pending=n,Iu(t,n)):(n.next=l.next,t.pending=l.next=n)}}function Iu(e,t){var l=t.action,a=t.payload,i=e.state;if(t.isTransition){var n=O.T,o={};O.T=o;try{var c=l(i,a),d=O.S;d!==null&&d(o,c),er(e,t,c)}catch(x){cs(e,t,x)}finally{O.T=n}}else try{n=l(i,a),er(e,t,n)}catch(x){cs(e,t,x)}}function er(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){tr(e,t,a)},function(a){return cs(e,t,a)}):tr(e,t,l)}function tr(e,t,l){t.status="fulfilled",t.value=l,lr(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Iu(e,l)))}function cs(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,lr(t),t=t.next;while(t!==a)}e.action=null}function lr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ar(e,t){return t}function ir(e,t){if(se){var l=pe.formState;if(l!==null){e:{var a=F;if(se){if(Se){t:{for(var i=Se,n=Et;i.nodeType!==8;){if(!n){i=null;break t}if(i=bt(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){Se=bt(i.nextSibling),a=i.data==="F!";break e}}_l(a)}a=!1}a&&(t=l[0])}}return l=Ke(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:t},l.queue=a,l=Tr.bind(null,F,a),a.dispatch=l,a=ss(!1),n=hs.bind(null,F,!1,a.queue),a=Ke(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,l=bm.bind(null,F,i,n,l),i.dispatch=l,a.memoizedState=e,[t,l,!1]}function nr(e){var t=Oe();return or(t,re,e)}function or(e,t,l){if(t=ns(e,t,ar)[0],e=cn(Ut)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(o){throw o===Ka?tn:o}else a=t;t=Oe();var i=t.queue,n=i.dispatch;return l!==t.memoizedState&&(F.flags|=2048,ua(9,un(),xm.bind(null,i,l),null)),[a,n,e]}function xm(e,t){e.action=t}function sr(e){var t=Oe(),l=re;if(l!==null)return or(t,l,e);Oe(),t=t.memoizedState,l=Oe();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ua(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=F.updateQueue,t===null&&(t=as(),F.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function un(){return{destroy:void 0,resource:void 0}}function cr(){return Oe().memoizedState}function rn(e,t,l,a){var i=Ke();a=a===void 0?null:a,F.flags|=e,i.memoizedState=ua(1|t,un(),l,a)}function Ia(e,t,l,a){var i=Oe();a=a===void 0?null:a;var n=i.memoizedState.inst;re!==null&&a!==null&&Po(a,re.memoizedState.deps)?i.memoizedState=ua(t,n,l,a):(F.flags|=e,i.memoizedState=ua(1|t,n,l,a))}function ur(e,t){rn(8390656,8,e,t)}function rr(e,t){Ia(2048,8,e,t)}function fr(e,t){return Ia(4,2,e,t)}function dr(e,t){return Ia(4,4,e,t)}function hr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mr(e,t,l){l=l!=null?l.concat([e]):null,Ia(4,4,hr.bind(null,t,e),l)}function us(){}function gr(e,t){var l=Oe();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Po(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function pr(e,t){var l=Oe();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Po(t,a[1]))return a[0];if(a=e(),wl){Zt(!0);try{e()}finally{Zt(!1)}}return l.memoizedState=[a,t],a}function rs(e,t,l){return l===void 0||(Pt&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=xf(),F.lanes|=e,nl|=e,l)}function vr(e,t,l,a){return tt(l,t)?l:oa.current!==null?(e=rs(e,l,a),tt(e,t)||(Ce=!0),e):(Pt&42)===0?(Ce=!0,e.memoizedState=l):(e=xf(),F.lanes|=e,nl|=e,t)}function yr(e,t,l,a,i){var n=H.p;H.p=n!==0&&8>n?n:8;var o=O.T,c={};O.T=c,hs(e,!1,t,l);try{var d=i(),x=O.S;if(x!==null&&x(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var N=pm(d,a);ei(e,t,N,ot(e))}else ei(e,t,a,ot(e))}catch(_){ei(e,t,{then:function(){},status:"rejected",reason:_},ot())}finally{H.p=n,O.T=o}}function Sm(){}function fs(e,t,l,a){if(e.tag!==5)throw Error(u(476));var i=br(e).queue;yr(e,i,t,Z,l===null?Sm:function(){return xr(e),l(a)})}function br(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:Z},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xr(e){var t=br(e).next.queue;ei(e,t,{},ot())}function ds(){return Ye(yi)}function Sr(){return Oe().memoizedState}function Er(){return Oe().memoizedState}function Em(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ot();e=Ft(l);var a=$t(t,e,l);a!==null&&(st(a,t,l),Ja(a,t,l)),t={cache:Vo()},e.payload=t;return}t=t.return}}function Tm(e,t,l){var a=ot();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},fn(e)?Ar(t,l):(l=Co(e,t,l,a),l!==null&&(st(l,e,a),Mr(l,t,a)))}function Tr(e,t,l){var a=ot();ei(e,t,l,a)}function ei(e,t,l,a){var i={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(fn(e))Ar(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var o=t.lastRenderedState,c=n(o,l);if(i.hasEagerState=!0,i.eagerState=c,tt(c,o))return ki(e,t,i,0),pe===null&&Ki(),!1}catch{}finally{}if(l=Co(e,t,i,a),l!==null)return st(l,e,a),Mr(l,t,a),!0}return!1}function hs(e,t,l,a){if(a={lane:2,revertLane:Zs(),action:a,hasEagerState:!1,eagerState:null,next:null},fn(e)){if(t)throw Error(u(479))}else t=Co(e,l,a,2),t!==null&&st(t,e,2)}function fn(e){var t=e.alternate;return e===F||t!==null&&t===F}function Ar(e,t){sa=nn=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Mr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,wc(e,l)}}var dn={readContext:Ye,use:sn,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae},Nr={readContext:Ye,use:sn,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:ur,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,rn(4194308,4,hr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return rn(4194308,4,e,t)},useInsertionEffect:function(e,t){rn(4,2,e,t)},useMemo:function(e,t){var l=Ke();t=t===void 0?null:t;var a=e();if(wl){Zt(!0);try{e()}finally{Zt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ke();if(l!==void 0){var i=l(t);if(wl){Zt(!0);try{l(t)}finally{Zt(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Tm.bind(null,F,e),[a.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:function(e){e=ss(e);var t=e.queue,l=Tr.bind(null,F,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:us,useDeferredValue:function(e,t){var l=Ke();return rs(l,e,t)},useTransition:function(){var e=ss(!1);return e=yr.bind(null,F,e.queue,!0,!1),Ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=F,i=Ke();if(se){if(l===void 0)throw Error(u(407));l=l()}else{if(l=t(),pe===null)throw Error(u(349));(ie&124)!==0||ku(a,t,l)}i.memoizedState=l;var n={value:l,getSnapshot:t};return i.queue=n,ur(Wu.bind(null,a,n,e),[e]),a.flags|=2048,ua(9,un(),Ju.bind(null,a,n,l,t),null),l},useId:function(){var e=Ke(),t=pe.identifierPrefix;if(se){var l=Ct,a=zt;l=(a&~(1<<32-et(a)-1)).toString(32)+l,t="«"+t+"R"+l,l=on++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=vm++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ds,useFormState:ir,useActionState:ir,useOptimistic:function(e){var t=Ke();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=hs.bind(null,F,!0,l),l.dispatch=t,[e,t]},useMemoCache:is,useCacheRefresh:function(){return Ke().memoizedState=Em.bind(null,F)}},Or={readContext:Ye,use:sn,useCallback:gr,useContext:Ye,useEffect:rr,useImperativeHandle:mr,useInsertionEffect:fr,useLayoutEffect:dr,useMemo:pr,useReducer:cn,useRef:cr,useState:function(){return cn(Ut)},useDebugValue:us,useDeferredValue:function(e,t){var l=Oe();return vr(l,re.memoizedState,e,t)},useTransition:function(){var e=cn(Ut)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:Ku,useId:Sr,useHostTransitionStatus:ds,useFormState:nr,useActionState:nr,useOptimistic:function(e,t){var l=Oe();return Pu(l,re,e,t)},useMemoCache:is,useCacheRefresh:Er},Am={readContext:Ye,use:sn,useCallback:gr,useContext:Ye,useEffect:rr,useImperativeHandle:mr,useInsertionEffect:fr,useLayoutEffect:dr,useMemo:pr,useReducer:os,useRef:cr,useState:function(){return os(Ut)},useDebugValue:us,useDeferredValue:function(e,t){var l=Oe();return re===null?rs(l,e,t):vr(l,re.memoizedState,e,t)},useTransition:function(){var e=os(Ut)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:Ku,useId:Sr,useHostTransitionStatus:ds,useFormState:sr,useActionState:sr,useOptimistic:function(e,t){var l=Oe();return re!==null?Pu(l,re,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:is,useCacheRefresh:Er},ra=null,ti=0;function hn(e){var t=ti;return ti+=1,ra===null&&(ra=[]),qu(ra,e,t)}function li(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mn(e,t){throw t.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jr(e){var t=e._init;return t(e._payload)}function _r(e){function t(v,g){if(e){var b=v.deletions;b===null?(v.deletions=[g],v.flags|=16):b.push(g)}}function l(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function a(v){for(var g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(v,g){return v=Rt(v,g),v.index=0,v.sibling=null,v}function n(v,g,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<g?(v.flags|=67108866,g):b):(v.flags|=67108866,g)):(v.flags|=1048576,g)}function o(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function c(v,g,b,j){return g===null||g.tag!==6?(g=Do(b,v.mode,j),g.return=v,g):(g=i(g,b),g.return=v,g)}function d(v,g,b,j){var q=b.type;return q===ee?N(v,g,b.props.children,j,b.key):g!==null&&(g.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===$e&&jr(q)===g.type)?(g=i(g,b.props),li(g,b),g.return=v,g):(g=Wi(b.type,b.key,b.props,null,v.mode,j),li(g,b),g.return=v,g)}function x(v,g,b,j){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=Uo(b,v.mode,j),g.return=v,g):(g=i(g,b.children||[]),g.return=v,g)}function N(v,g,b,j,q){return g===null||g.tag!==7?(g=Ml(b,v.mode,j,q),g.return=v,g):(g=i(g,b),g.return=v,g)}function _(v,g,b){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Do(""+g,v.mode,b),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Y:return b=Wi(g.type,g.key,g.props,null,v.mode,b),li(b,g),b.return=v,b;case ae:return g=Uo(g,v.mode,b),g.return=v,g;case $e:var j=g._init;return g=j(g._payload),_(v,g,b)}if(Le(g)||qe(g))return g=Ml(g,v.mode,b,null),g.return=v,g;if(typeof g.then=="function")return _(v,hn(g),b);if(g.$$typeof===le)return _(v,Ii(v,g),b);mn(v,g)}return null}function S(v,g,b,j){var q=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return q!==null?null:c(v,g,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Y:return b.key===q?d(v,g,b,j):null;case ae:return b.key===q?x(v,g,b,j):null;case $e:return q=b._init,b=q(b._payload),S(v,g,b,j)}if(Le(b)||qe(b))return q!==null?null:N(v,g,b,j,null);if(typeof b.then=="function")return S(v,g,hn(b),j);if(b.$$typeof===le)return S(v,g,Ii(v,b),j);mn(v,b)}return null}function E(v,g,b,j,q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return v=v.get(b)||null,c(g,v,""+j,q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Y:return v=v.get(j.key===null?b:j.key)||null,d(g,v,j,q);case ae:return v=v.get(j.key===null?b:j.key)||null,x(g,v,j,q);case $e:var $=j._init;return j=$(j._payload),E(v,g,b,j,q)}if(Le(j)||qe(j))return v=v.get(b)||null,N(g,v,j,q,null);if(typeof j.then=="function")return E(v,g,b,hn(j),q);if(j.$$typeof===le)return E(v,g,b,Ii(g,j),q);mn(g,j)}return null}function K(v,g,b,j){for(var q=null,$=null,G=g,X=g=0,De=null;G!==null&&X<b.length;X++){G.index>X?(De=G,G=null):De=G.sibling;var oe=S(v,G,b[X],j);if(oe===null){G===null&&(G=De);break}e&&G&&oe.alternate===null&&t(v,G),g=n(oe,g,X),$===null?q=oe:$.sibling=oe,$=oe,G=De}if(X===b.length)return l(v,G),se&&Ol(v,X),q;if(G===null){for(;X<b.length;X++)G=_(v,b[X],j),G!==null&&(g=n(G,g,X),$===null?q=G:$.sibling=G,$=G);return se&&Ol(v,X),q}for(G=a(G);X<b.length;X++)De=E(G,v,X,b[X],j),De!==null&&(e&&De.alternate!==null&&G.delete(De.key===null?X:De.key),g=n(De,g,X),$===null?q=De:$.sibling=De,$=De);return e&&G.forEach(function(ml){return t(v,ml)}),se&&Ol(v,X),q}function Q(v,g,b,j){if(b==null)throw Error(u(151));for(var q=null,$=null,G=g,X=g=0,De=null,oe=b.next();G!==null&&!oe.done;X++,oe=b.next()){G.index>X?(De=G,G=null):De=G.sibling;var ml=S(v,G,oe.value,j);if(ml===null){G===null&&(G=De);break}e&&G&&ml.alternate===null&&t(v,G),g=n(ml,g,X),$===null?q=ml:$.sibling=ml,$=ml,G=De}if(oe.done)return l(v,G),se&&Ol(v,X),q;if(G===null){for(;!oe.done;X++,oe=b.next())oe=_(v,oe.value,j),oe!==null&&(g=n(oe,g,X),$===null?q=oe:$.sibling=oe,$=oe);return se&&Ol(v,X),q}for(G=a(G);!oe.done;X++,oe=b.next())oe=E(G,v,X,oe.value,j),oe!==null&&(e&&oe.alternate!==null&&G.delete(oe.key===null?X:oe.key),g=n(oe,g,X),$===null?q=oe:$.sibling=oe,$=oe);return e&&G.forEach(function(Mg){return t(v,Mg)}),se&&Ol(v,X),q}function de(v,g,b,j){if(typeof b=="object"&&b!==null&&b.type===ee&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Y:e:{for(var q=b.key;g!==null;){if(g.key===q){if(q=b.type,q===ee){if(g.tag===7){l(v,g.sibling),j=i(g,b.props.children),j.return=v,v=j;break e}}else if(g.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===$e&&jr(q)===g.type){l(v,g.sibling),j=i(g,b.props),li(j,b),j.return=v,v=j;break e}l(v,g);break}else t(v,g);g=g.sibling}b.type===ee?(j=Ml(b.props.children,v.mode,j,b.key),j.return=v,v=j):(j=Wi(b.type,b.key,b.props,null,v.mode,j),li(j,b),j.return=v,v=j)}return o(v);case ae:e:{for(q=b.key;g!==null;){if(g.key===q)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){l(v,g.sibling),j=i(g,b.children||[]),j.return=v,v=j;break e}else{l(v,g);break}else t(v,g);g=g.sibling}j=Uo(b,v.mode,j),j.return=v,v=j}return o(v);case $e:return q=b._init,b=q(b._payload),de(v,g,b,j)}if(Le(b))return K(v,g,b,j);if(qe(b)){if(q=qe(b),typeof q!="function")throw Error(u(150));return b=q.call(b),Q(v,g,b,j)}if(typeof b.then=="function")return de(v,g,hn(b),j);if(b.$$typeof===le)return de(v,g,Ii(v,b),j);mn(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,g!==null&&g.tag===6?(l(v,g.sibling),j=i(g,b),j.return=v,v=j):(l(v,g),j=Do(b,v.mode,j),j.return=v,v=j),o(v)):l(v,g)}return function(v,g,b,j){try{ti=0;var q=de(v,g,b,j);return ra=null,q}catch(G){if(G===Ka||G===tn)throw G;var $=lt(29,G,null,v.mode);return $.lanes=j,$.return=v,$}finally{}}}var fa=_r(!0),Rr=_r(!1),mt=z(null),Tt=null;function It(e){var t=e.alternate;U(Re,Re.current&1),U(mt,e),Tt===null&&(t===null||oa.current!==null||t.memoizedState!==null)&&(Tt=e)}function zr(e){if(e.tag===22){if(U(Re,Re.current),U(mt,e),Tt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tt=e)}}else el()}function el(){U(Re,Re.current),U(mt,mt.current)}function Ht(e){B(mt),Tt===e&&(Tt=null),B(Re)}var Re=z(0);function gn(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||ac(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ms(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:R({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var gs={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ot(),i=Ft(a);i.payload=t,l!=null&&(i.callback=l),t=$t(e,i,a),t!==null&&(st(t,e,a),Ja(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ot(),i=Ft(a);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=$t(e,i,a),t!==null&&(st(t,e,a),Ja(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ot(),a=Ft(l);a.tag=2,t!=null&&(a.callback=t),t=$t(e,a,l),t!==null&&(st(t,e,l),Ja(t,e,l))}};function Cr(e,t,l,a,i,n,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,n,o):t.prototype&&t.prototype.isPureReactComponent?!qa(l,a)||!qa(i,n):!0}function wr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&gs.enqueueReplaceState(t,t.state,null)}function Dl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=R({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}var pn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Dr(e){pn(e)}function Ur(e){console.error(e)}function Hr(e){pn(e)}function vn(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Br(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ps(e,t,l){return l=Ft(l),l.tag=3,l.payload={element:null},l.callback=function(){vn(e,t)},l}function qr(e){return e=Ft(e),e.tag=3,e}function Lr(e,t,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var n=a.value;e.payload=function(){return i(n)},e.callback=function(){Br(t,l,a)}}var o=l.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Br(t,l,a),typeof i!="function"&&(ol===null?ol=new Set([this]):ol.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Mm(e,t,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Qa(t,l,i,!0),l=mt.current,l!==null){switch(l.tag){case 13:return Tt===null?Gs():l.alternate===null&&Ee===0&&(Ee=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===Zo?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Vs(e,a,i)),!1;case 22:return l.flags|=65536,a===Zo?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Vs(e,a,i)),!1}throw Error(u(435,l.tag))}return Vs(e,a,i),Gs(),!1}if(se)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==qo&&(e=Error(u(422),{cause:a}),Va(rt(e,l)))):(a!==qo&&(t=Error(u(423),{cause:a}),Va(rt(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=rt(a,l),i=ps(e.stateNode,a,i),Jo(e,i),Ee!==4&&(Ee=2)),!1;var n=Error(u(520),{cause:a});if(n=rt(n,l),ui===null?ui=[n]:ui.push(n),Ee!==4&&(Ee=2),t===null)return!0;a=rt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=ps(l.stateNode,a,e),Jo(l,e),!1;case 1:if(t=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(ol===null||!ol.has(n))))return l.flags|=65536,i&=-i,l.lanes|=i,i=qr(i),Lr(i,e,l,a),Jo(l,i),!1}l=l.return}while(l!==null);return!1}var Gr=Error(u(461)),Ce=!1;function Ue(e,t,l,a){t.child=e===null?Rr(t,null,l,a):fa(t,e.child,l,a)}function Yr(e,t,l,a,i){l=l.render;var n=t.ref;if("ref"in a){var o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}else o=a;return zl(t),a=Io(e,t,l,o,n,i),c=es(),e!==null&&!Ce?(ts(e,t,i),Bt(e,t,i)):(se&&c&&Ho(t),t.flags|=1,Ue(e,t,a,i),t.child)}function Vr(e,t,l,a,i){if(e===null){var n=l.type;return typeof n=="function"&&!wo(n)&&n.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=n,Qr(e,t,n,a,i)):(e=Wi(l.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!As(e,i)){var o=n.memoizedProps;if(l=l.compare,l=l!==null?l:qa,l(o,a)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=Rt(n,a),e.ref=t.ref,e.return=t,t.child=e}function Qr(e,t,l,a,i){if(e!==null){var n=e.memoizedProps;if(qa(n,a)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=a=n,As(e,i))(e.flags&131072)!==0&&(Ce=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return vs(e,t,l,a,i)}function Xr(e,t,l){var a=t.pendingProps,i=a.children,n=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=n!==null?n.baseLanes|l:l,e!==null){for(i=t.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;t.childLanes=n&~a}else t.childLanes=0,t.child=null;return Zr(e,t,a,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&en(t,n!==null?n.cachePool:null),n!==null?Qu(t,n):Fo(),zr(t);else return t.lanes=t.childLanes=536870912,Zr(e,t,n!==null?n.baseLanes|l:l,l)}else n!==null?(en(t,n.cachePool),Qu(t,n),el(),t.memoizedState=null):(e!==null&&en(t,null),Fo(),el());return Ue(e,t,i,l),t.child}function Zr(e,t,l,a){var i=Xo();return i=i===null?null:{parent:_e._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&en(t,null),Fo(),zr(t),e!==null&&Qa(e,t,a,!0),null}function yn(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(u(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function vs(e,t,l,a,i){return zl(t),l=Io(e,t,l,a,void 0,i),a=es(),e!==null&&!Ce?(ts(e,t,i),Bt(e,t,i)):(se&&a&&Ho(t),t.flags|=1,Ue(e,t,l,i),t.child)}function Kr(e,t,l,a,i,n){return zl(t),t.updateQueue=null,l=Zu(t,a,l,i),Xu(e),a=es(),e!==null&&!Ce?(ts(e,t,n),Bt(e,t,n)):(se&&a&&Ho(t),t.flags|=1,Ue(e,t,l,n),t.child)}function kr(e,t,l,a,i){if(zl(t),t.stateNode===null){var n=ta,o=l.contextType;typeof o=="object"&&o!==null&&(n=Ye(o)),n=new l(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=gs,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},Ko(t),o=l.contextType,n.context=typeof o=="object"&&o!==null?Ye(o):ta,n.state=t.memoizedState,o=l.getDerivedStateFromProps,typeof o=="function"&&(ms(t,l,o,a),n.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&gs.enqueueReplaceState(n,n.state,null),Fa(t,a,n,i),Wa(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){n=t.stateNode;var c=t.memoizedProps,d=Dl(l,c);n.props=d;var x=n.context,N=l.contextType;o=ta,typeof N=="object"&&N!==null&&(o=Ye(N));var _=l.getDerivedStateFromProps;N=typeof _=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,N||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||x!==o)&&wr(t,n,a,o),Wt=!1;var S=t.memoizedState;n.state=S,Fa(t,a,n,i),Wa(),x=t.memoizedState,c||S!==x||Wt?(typeof _=="function"&&(ms(t,l,_,a),x=t.memoizedState),(d=Wt||Cr(t,l,d,a,S,x,o))?(N||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),n.props=a,n.state=x,n.context=o,a=d):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,ko(e,t),o=t.memoizedProps,N=Dl(l,o),n.props=N,_=t.pendingProps,S=n.context,x=l.contextType,d=ta,typeof x=="object"&&x!==null&&(d=Ye(x)),c=l.getDerivedStateFromProps,(x=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==_||S!==d)&&wr(t,n,a,d),Wt=!1,S=t.memoizedState,n.state=S,Fa(t,a,n,i),Wa();var E=t.memoizedState;o!==_||S!==E||Wt||e!==null&&e.dependencies!==null&&Pi(e.dependencies)?(typeof c=="function"&&(ms(t,l,c,a),E=t.memoizedState),(N=Wt||Cr(t,l,N,a,S,E,d)||e!==null&&e.dependencies!==null&&Pi(e.dependencies))?(x||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,E,d),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,E,d)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=E),n.props=a,n.state=E,n.context=d,a=N):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),a=!1)}return n=a,yn(e,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&a?(t.child=fa(t,e.child,null,i),t.child=fa(t,null,l,i)):Ue(e,t,l,i),t.memoizedState=n.state,e=t.child):e=Bt(e,t,i),e}function Jr(e,t,l,a){return Ya(),t.flags|=256,Ue(e,t,l,a),t.child}var ys={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bs(e){return{baseLanes:e,cachePool:Uu()}}function xs(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=gt),e}function Wr(e,t,l){var a=t.pendingProps,i=!1,n=(t.flags&128)!==0,o;if((o=n)||(o=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(i?It(t):el(),se){var c=Se,d;if(d=c){e:{for(d=c,c=Et;d.nodeType!==8;){if(!c){c=null;break e}if(d=bt(d.nextSibling),d===null){c=null;break e}}c=d}c!==null?(t.memoizedState={dehydrated:c,treeContext:Nl!==null?{id:zt,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},d=lt(18,null,null,0),d.stateNode=c,d.return=t,t.child=d,Qe=t,Se=null,d=!0):d=!1}d||_l(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return ac(c)?t.lanes=32:t.lanes=536870912,null;Ht(t)}return c=a.children,a=a.fallback,i?(el(),i=t.mode,c=bn({mode:"hidden",children:c},i),a=Ml(a,i,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,i=t.child,i.memoizedState=bs(l),i.childLanes=xs(e,o,l),t.memoizedState=ys,a):(It(t),Ss(t,c))}if(d=e.memoizedState,d!==null&&(c=d.dehydrated,c!==null)){if(n)t.flags&256?(It(t),t.flags&=-257,t=Es(e,t,l)):t.memoizedState!==null?(el(),t.child=e.child,t.flags|=128,t=null):(el(),i=a.fallback,c=t.mode,a=bn({mode:"visible",children:a.children},c),i=Ml(i,c,l,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,fa(t,e.child,null,l),a=t.child,a.memoizedState=bs(l),a.childLanes=xs(e,o,l),t.memoizedState=ys,t=i);else if(It(t),ac(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var x=o.dgst;o=x,a=Error(u(419)),a.stack="",a.digest=o,Va({value:a,source:null,stack:null}),t=Es(e,t,l)}else if(Ce||Qa(e,t,l,!1),o=(l&e.childLanes)!==0,Ce||o){if(o=pe,o!==null&&(a=l&-l,a=(a&42)!==0?1:ao(a),a=(a&(o.suspendedLanes|l))!==0?0:a,a!==0&&a!==d.retryLane))throw d.retryLane=a,ea(e,a),st(o,e,a),Gr;c.data==="$?"||Gs(),t=Es(e,t,l)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Se=bt(c.nextSibling),Qe=t,se=!0,jl=null,Et=!1,e!==null&&(dt[ht++]=zt,dt[ht++]=Ct,dt[ht++]=Nl,zt=e.id,Ct=e.overflow,Nl=t),t=Ss(t,a.children),t.flags|=4096);return t}return i?(el(),i=a.fallback,c=t.mode,d=e.child,x=d.sibling,a=Rt(d,{mode:"hidden",children:a.children}),a.subtreeFlags=d.subtreeFlags&65011712,x!==null?i=Rt(x,i):(i=Ml(i,c,l,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,c=e.child.memoizedState,c===null?c=bs(l):(d=c.cachePool,d!==null?(x=_e._currentValue,d=d.parent!==x?{parent:x,pool:x}:d):d=Uu(),c={baseLanes:c.baseLanes|l,cachePool:d}),i.memoizedState=c,i.childLanes=xs(e,o,l),t.memoizedState=ys,a):(It(t),l=e.child,e=l.sibling,l=Rt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=l,t.memoizedState=null,l)}function Ss(e,t){return t=bn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bn(e,t){return e=lt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Es(e,t,l){return fa(t,e.child,null,l),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fr(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Go(e.return,t,l)}function Ts(e,t,l,a,i){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=a,n.tail=l,n.tailMode=i)}function $r(e,t,l){var a=t.pendingProps,i=a.revealOrder,n=a.tail;if(Ue(e,t,a.children,l),a=Re.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fr(e,l,t);else if(e.tag===19)Fr(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(U(Re,a),i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&gn(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),Ts(t,!1,i,l,n);break;case"backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&gn(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}Ts(t,!0,l,null,n);break;case"together":Ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),nl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Qa(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,l=Rt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Rt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function As(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pi(e)))}function Nm(e,t,l){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Jt(t,_e,e.memoizedState.cache),Ya();break;case 27:case 5:Pn(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Jt(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(It(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Wr(e,t,l):(It(t),e=Bt(e,t,l),e!==null?e.sibling:null);It(t);break;case 19:var i=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Qa(e,t,l,!1),a=(l&t.childLanes)!==0),i){if(a)return $r(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Re,Re.current),a)break;return null;case 22:case 23:return t.lanes=0,Xr(e,t,l);case 24:Jt(t,_e,e.memoizedState.cache)}return Bt(e,t,l)}function Pr(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ce=!0;else{if(!As(e,l)&&(t.flags&128)===0)return Ce=!1,Nm(e,t,l);Ce=(e.flags&131072)!==0}else Ce=!1,se&&(t.flags&1048576)!==0&&ju(t,$i,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")wo(a)?(e=Dl(a,e),t.tag=1,t=kr(null,t,a,e,l)):(t.tag=0,t=vs(null,t,a,e,l));else{if(a!=null){if(i=a.$$typeof,i===Te){t.tag=11,t=Yr(null,t,a,e,l);break e}else if(i===Fe){t.tag=14,t=Vr(null,t,a,e,l);break e}}throw t=bl(a)||a,Error(u(306,t,""))}}return t;case 0:return vs(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,i=Dl(a,t.pendingProps),kr(e,t,a,i,l);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var n=t.memoizedState;i=n.element,ko(e,t),Fa(t,a,null,l);var o=t.memoizedState;if(a=o.cache,Jt(t,_e,a),a!==n.cache&&Yo(t,[_e],l,!0),Wa(),a=o.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Jr(e,t,a,l);break e}else if(a!==i){i=rt(Error(u(424)),t),Va(i),t=Jr(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=bt(e.firstChild),Qe=t,se=!0,jl=null,Et=!0,l=Rr(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ya(),a===i){t=Bt(e,t,l);break e}Ue(e,t,a,l)}t=t.child}return t;case 26:return yn(e,t),e===null?(l=ad(t.type,null,t.pendingProps,null))?t.memoizedState=l:se||(l=t.type,e=t.pendingProps,a=wn(k.current).createElement(l),a[Ge]=t,a[Xe]=e,Be(a,l,e),ze(a),t.stateNode=a):t.memoizedState=ad(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pn(t),e===null&&se&&(a=t.stateNode=ed(t.type,t.pendingProps,k.current),Qe=t,Et=!0,i=Se,ul(t.type)?(ic=i,Se=bt(a.firstChild)):Se=i),Ue(e,t,t.pendingProps.children,l),yn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((i=a=Se)&&(a=eg(a,t.type,t.pendingProps,Et),a!==null?(t.stateNode=a,Qe=t,Se=bt(a.firstChild),Et=!1,i=!0):i=!1),i||_l(t)),Pn(t),i=t.type,n=t.pendingProps,o=e!==null?e.memoizedProps:null,a=n.children,ec(i,n)?a=null:o!==null&&ec(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Io(e,t,ym,null,null,l),yi._currentValue=i),yn(e,t),Ue(e,t,a,l),t.child;case 6:return e===null&&se&&((e=l=Se)&&(l=tg(l,t.pendingProps,Et),l!==null?(t.stateNode=l,Qe=t,Se=null,e=!0):e=!1),e||_l(t)),null;case 13:return Wr(e,t,l);case 4:return ye(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=fa(t,null,a,l):Ue(e,t,a,l),t.child;case 11:return Yr(e,t,t.type,t.pendingProps,l);case 7:return Ue(e,t,t.pendingProps,l),t.child;case 8:return Ue(e,t,t.pendingProps.children,l),t.child;case 12:return Ue(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Jt(t,t.type,a.value),Ue(e,t,a.children,l),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,zl(t),i=Ye(i),a=a(i),t.flags|=1,Ue(e,t,a,l),t.child;case 14:return Vr(e,t,t.type,t.pendingProps,l);case 15:return Qr(e,t,t.type,t.pendingProps,l);case 19:return $r(e,t,l);case 31:return a=t.pendingProps,l=t.mode,a={mode:a.mode,children:a.children},e===null?(l=bn(a,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Rt(e.child,a),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return Xr(e,t,l);case 24:return zl(t),a=Ye(_e),e===null?(i=Xo(),i===null&&(i=pe,n=Vo(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=l),i=n),t.memoizedState={parent:a,cache:i},Ko(t),Jt(t,_e,i)):((e.lanes&l)!==0&&(ko(e,t),Fa(t,null,null,l),Wa()),i=e.memoizedState,n=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Jt(t,_e,a)):(a=n.cache,Jt(t,_e,a),a!==i.cache&&Yo(t,[_e],l,!0))),Ue(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function qt(e){e.flags|=4}function Ir(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cd(t)){if(t=mt.current,t!==null&&((ie&4194048)===ie?Tt!==null:(ie&62914560)!==ie&&(ie&536870912)===0||t!==Tt))throw ka=Zo,Hu;e.flags|=8192}}function xn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zc():536870912,e.lanes|=t,ga|=t)}function ai(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Om(e,t,l){var a=t.pendingProps;switch(Bo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return xe(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Dt(_e),Xt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ga(t)?qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zu())),xe(t),null;case 26:return l=t.memoizedState,e===null?(qt(t),l!==null?(xe(t),Ir(t,l)):(xe(t),t.flags&=-16777217)):l?l!==e.memoizedState?(qt(t),xe(t),Ir(t,l)):(xe(t),t.flags&=-16777217):(e.memoizedProps!==a&&qt(t),xe(t),t.flags&=-16777217),null;case 27:Ri(t),l=k.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&qt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return xe(t),null}e=V.current,Ga(t)?_u(t):(e=ed(i,a,l),t.stateNode=e,qt(t))}return xe(t),null;case 5:if(Ri(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&qt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return xe(t),null}if(e=V.current,Ga(t))_u(t);else{switch(i=wn(k.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(l,{is:a.is}):i.createElement(l)}}e[Ge]=t,e[Xe]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Be(e,l,a),l){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&qt(t)}}return xe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&qt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=k.current,Ga(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,i=Qe,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||kf(e.nodeValue,l)),e||_l(t)}else e=wn(e).createTextNode(a),e[Ge]=t,t.stateNode=e}return xe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ga(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Ge]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else i=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Ht(t),t):(Ht(t),null)}if(Ht(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=a!==null,e=e!==null&&e.memoizedState!==null,l){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var n=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==i&&(a.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),xn(t,t.updateQueue),xe(t),null;case 4:return Xt(),e===null&&Ws(t.stateNode.containerInfo),xe(t),null;case 10:return Dt(t.type),xe(t),null;case 19:if(B(Re),i=t.memoizedState,i===null)return xe(t),null;if(a=(t.flags&128)!==0,n=i.rendering,n===null)if(a)ai(i,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=gn(e),n!==null){for(t.flags|=128,ai(i,!1),e=n.updateQueue,t.updateQueue=e,xn(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Ou(l,e),l=l.sibling;return U(Re,Re.current&1|2),t.child}e=e.sibling}i.tail!==null&&St()>Tn&&(t.flags|=128,a=!0,ai(i,!1),t.lanes=4194304)}else{if(!a)if(e=gn(n),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,xn(t,e),ai(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!se)return xe(t),null}else 2*St()-i.renderingStartTime>Tn&&l!==536870912&&(t.flags|=128,a=!0,ai(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(e=i.last,e!==null?e.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=St(),t.sibling=null,e=Re.current,U(Re,a?e&1|2:e&1),t):(xe(t),null);case 22:case 23:return Ht(t),$o(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),l=t.updateQueue,l!==null&&xn(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&B(Cl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Dt(_e),xe(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function jm(e,t){switch(Bo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dt(_e),Xt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ri(t),null;case 13:if(Ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Re),null;case 4:return Xt(),null;case 10:return Dt(t.type),null;case 22:case 23:return Ht(t),$o(),e!==null&&B(Cl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dt(_e),null;case 25:return null;default:return null}}function ef(e,t){switch(Bo(t),t.tag){case 3:Dt(_e),Xt();break;case 26:case 27:case 5:Ri(t);break;case 4:Xt();break;case 13:Ht(t);break;case 19:B(Re);break;case 10:Dt(t.type);break;case 22:case 23:Ht(t),$o(),e!==null&&B(Cl);break;case 24:Dt(_e)}}function ii(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){a=void 0;var n=l.create,o=l.inst;a=n(),o.destroy=a}l=l.next}while(l!==i)}}catch(c){me(t,t.return,c)}}function tl(e,t,l){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){var o=a.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,i=t;var d=l,x=c;try{x()}catch(N){me(i,d,N)}}}a=a.next}while(a!==n)}}catch(N){me(t,t.return,N)}}function tf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Vu(t,l)}catch(a){me(e,e.return,a)}}}function lf(e,t,l){l.props=Dl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){me(e,t,a)}}function ni(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(i){me(e,t,i)}}function At(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){me(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){me(e,t,i)}else l.current=null}function af(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){me(e,e.return,i)}}function Ms(e,t,l){try{var a=e.stateNode;Wm(a,e.type,l,t),a[Xe]=t}catch(i){me(e,e.return,i)}}function nf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ul(e.type)||e.tag===4}function Ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ul(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Cn));else if(a!==4&&(a===27&&ul(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Os(e,t,l),e=e.sibling;e!==null;)Os(e,t,l),e=e.sibling}function Sn(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&ul(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Sn(e,t,l),e=e.sibling;e!==null;)Sn(e,t,l),e=e.sibling}function of(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Be(t,a,l),t[Ge]=e,t[Xe]=l}catch(n){me(e,e.return,n)}}var Lt=!1,Me=!1,js=!1,sf=typeof WeakSet=="function"?WeakSet:Set,we=null;function _m(e,t){if(e=e.containerInfo,Ps=Ln,e=vu(e),No(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break e}var o=0,c=-1,d=-1,x=0,N=0,_=e,S=null;t:for(;;){for(var E;_!==l||i!==0&&_.nodeType!==3||(c=o+i),_!==n||a!==0&&_.nodeType!==3||(d=o+a),_.nodeType===3&&(o+=_.nodeValue.length),(E=_.firstChild)!==null;)S=_,_=E;for(;;){if(_===e)break t;if(S===l&&++x===i&&(c=o),S===n&&++N===a&&(d=o),(E=_.nextSibling)!==null)break;_=S,S=_.parentNode}_=E}l=c===-1||d===-1?null:{start:c,end:d}}else l=null}l=l||{start:0,end:0}}else l=null;for(Is={focusedElem:e,selectionRange:l},Ln=!1,we=t;we!==null;)if(t=we,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,we=e;else for(;we!==null;){switch(t=we,n=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,l=t,i=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var K=Dl(l.type,i,l.elementType===l.type);e=a.getSnapshotBeforeUpdate(K,n),a.__reactInternalSnapshotBeforeUpdate=e}catch(Q){me(l,l.return,Q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)lc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,we=e;break}we=t.return}}function cf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ll(e,l),a&4&&ii(5,l);break;case 1:if(ll(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(o){me(l,l.return,o)}else{var i=Dl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){me(l,l.return,o)}}a&64&&tf(l),a&512&&ni(l,l.return);break;case 3:if(ll(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Vu(e,t)}catch(o){me(l,l.return,o)}}break;case 27:t===null&&a&4&&of(l);case 26:case 5:ll(e,l),t===null&&a&4&&af(l),a&512&&ni(l,l.return);break;case 12:ll(e,l);break;case 13:ll(e,l),a&4&&ff(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=qm.bind(null,l),lg(e,l))));break;case 22:if(a=l.memoizedState!==null||Lt,!a){t=t!==null&&t.memoizedState!==null||Me,i=Lt;var n=Me;Lt=a,(Me=t)&&!n?al(e,l,(l.subtreeFlags&8772)!==0):ll(e,l),Lt=i,Me=n}break;case 30:break;default:ll(e,l)}}function uf(e){var t=e.alternate;t!==null&&(e.alternate=null,uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&oo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,ke=!1;function Gt(e,t,l){for(l=l.child;l!==null;)rf(e,t,l),l=l.sibling}function rf(e,t,l){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Na,l)}catch{}switch(l.tag){case 26:Me||At(l,t),Gt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Me||At(l,t);var a=be,i=ke;ul(l.type)&&(be=l.stateNode,ke=!1),Gt(e,t,l),mi(l.stateNode),be=a,ke=i;break;case 5:Me||At(l,t);case 6:if(a=be,i=ke,be=null,Gt(e,t,l),be=a,ke=i,be!==null)if(ke)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(l.stateNode)}catch(n){me(l,t,n)}else try{be.removeChild(l.stateNode)}catch(n){me(l,t,n)}break;case 18:be!==null&&(ke?(e=be,Pf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ei(e)):Pf(be,l.stateNode));break;case 4:a=be,i=ke,be=l.stateNode.containerInfo,ke=!0,Gt(e,t,l),be=a,ke=i;break;case 0:case 11:case 14:case 15:Me||tl(2,l,t),Me||tl(4,l,t),Gt(e,t,l);break;case 1:Me||(At(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&lf(l,t,a)),Gt(e,t,l);break;case 21:Gt(e,t,l);break;case 22:Me=(a=Me)||l.memoizedState!==null,Gt(e,t,l),Me=a;break;default:Gt(e,t,l)}}function ff(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ei(e)}catch(l){me(t,t.return,l)}}function Rm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sf),t;default:throw Error(u(435,e.tag))}}function _s(e,t){var l=Rm(e);t.forEach(function(a){var i=Lm.bind(null,e,a);l.has(a)||(l.add(a),a.then(i,i))})}function at(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],n=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(ul(c.type)){be=c.stateNode,ke=!1;break e}break;case 5:be=c.stateNode,ke=!1;break e;case 3:case 4:be=c.stateNode.containerInfo,ke=!0;break e}c=c.return}if(be===null)throw Error(u(160));rf(n,o,i),be=null,ke=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)df(t,e),t=t.sibling}var yt=null;function df(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),it(e),a&4&&(tl(3,e,e.return),ii(3,e),tl(5,e,e.return));break;case 1:at(t,e),it(e),a&512&&(Me||l===null||At(l,l.return)),a&64&&Lt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=yt;if(at(t,e),it(e),a&512&&(Me||l===null||At(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":n=i.getElementsByTagName("title")[0],(!n||n[_a]||n[Ge]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(a),i.head.insertBefore(n,i.querySelector("head > title"))),Be(n,a,l),n[Ge]=e,ze(n),a=n;break e;case"link":var o=od("link","href",i).get(a+(l.href||""));if(o){for(var c=0;c<o.length;c++)if(n=o[c],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){o.splice(c,1);break t}}n=i.createElement(a),Be(n,a,l),i.head.appendChild(n);break;case"meta":if(o=od("meta","content",i).get(a+(l.content||""))){for(c=0;c<o.length;c++)if(n=o[c],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){o.splice(c,1);break t}}n=i.createElement(a),Be(n,a,l),i.head.appendChild(n);break;default:throw Error(u(468,a))}n[Ge]=e,ze(n),a=n}e.stateNode=a}else sd(i,e.type,e.stateNode);else e.stateNode=nd(i,a,e.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?sd(i,e.type,e.stateNode):nd(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ms(e,e.memoizedProps,l.memoizedProps)}break;case 27:at(t,e),it(e),a&512&&(Me||l===null||At(l,l.return)),l!==null&&a&4&&Ms(e,e.memoizedProps,l.memoizedProps);break;case 5:if(at(t,e),it(e),a&512&&(Me||l===null||At(l,l.return)),e.flags&32){i=e.stateNode;try{kl(i,"")}catch(E){me(e,e.return,E)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Ms(e,i,l!==null?l.memoizedProps:i)),a&1024&&(js=!0);break;case 6:if(at(t,e),it(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(E){me(e,e.return,E)}}break;case 3:if(Hn=null,i=yt,yt=Dn(t.containerInfo),at(t,e),yt=i,it(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(E){me(e,e.return,E)}js&&(js=!1,hf(e));break;case 4:a=yt,yt=Dn(e.stateNode.containerInfo),at(t,e),it(e),yt=a;break;case 12:at(t,e),it(e);break;case 13:at(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Us=St()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_s(e,a)));break;case 22:i=e.memoizedState!==null;var d=l!==null&&l.memoizedState!==null,x=Lt,N=Me;if(Lt=x||i,Me=N||d,at(t,e),Me=N,Lt=x,it(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||d||Lt||Me||Ul(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){d=l=t;try{if(n=d.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=d.stateNode;var _=d.memoizedProps.style,S=_!=null&&_.hasOwnProperty("display")?_.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(E){me(d,d.return,E)}}}else if(t.tag===6){if(l===null){d=t;try{d.stateNode.nodeValue=i?"":d.memoizedProps}catch(E){me(d,d.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,_s(e,l))));break;case 19:at(t,e),it(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_s(e,a)));break;case 30:break;case 21:break;default:at(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(nf(a)){l=a;break}a=a.return}if(l==null)throw Error(u(160));switch(l.tag){case 27:var i=l.stateNode,n=Ns(e);Sn(e,n,i);break;case 5:var o=l.stateNode;l.flags&32&&(kl(o,""),l.flags&=-33);var c=Ns(e);Sn(e,c,o);break;case 3:case 4:var d=l.stateNode.containerInfo,x=Ns(e);Os(e,x,d);break;default:throw Error(u(161))}}catch(N){me(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ll(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cf(e,t.alternate,t),t=t.sibling}function Ul(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:tl(4,t,t.return),Ul(t);break;case 1:At(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&lf(t,t.return,l),Ul(t);break;case 27:mi(t.stateNode);case 26:case 5:At(t,t.return),Ul(t);break;case 22:t.memoizedState===null&&Ul(t);break;case 30:Ul(t);break;default:Ul(t)}e=e.sibling}}function al(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,n=t,o=n.flags;switch(n.tag){case 0:case 11:case 15:al(i,n,l),ii(4,n);break;case 1:if(al(i,n,l),a=n,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(x){me(a,a.return,x)}if(a=n,i=a.updateQueue,i!==null){var c=a.stateNode;try{var d=i.shared.hiddenCallbacks;if(d!==null)for(i.shared.hiddenCallbacks=null,i=0;i<d.length;i++)Yu(d[i],c)}catch(x){me(a,a.return,x)}}l&&o&64&&tf(n),ni(n,n.return);break;case 27:of(n);case 26:case 5:al(i,n,l),l&&a===null&&o&4&&af(n),ni(n,n.return);break;case 12:al(i,n,l);break;case 13:al(i,n,l),l&&o&4&&ff(i,n);break;case 22:n.memoizedState===null&&al(i,n,l),ni(n,n.return);break;case 30:break;default:al(i,n,l)}t=t.sibling}}function Rs(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Xa(l))}function zs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xa(e))}function Mt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mf(e,t,l,a),t=t.sibling}function mf(e,t,l,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,l,a),i&2048&&ii(9,t);break;case 1:Mt(e,t,l,a);break;case 3:Mt(e,t,l,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xa(e)));break;case 12:if(i&2048){Mt(e,t,l,a),e=t.stateNode;try{var n=t.memoizedProps,o=n.id,c=n.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){me(t,t.return,d)}}else Mt(e,t,l,a);break;case 13:Mt(e,t,l,a);break;case 23:break;case 22:n=t.stateNode,o=t.alternate,t.memoizedState!==null?n._visibility&2?Mt(e,t,l,a):oi(e,t):n._visibility&2?Mt(e,t,l,a):(n._visibility|=2,da(e,t,l,a,(t.subtreeFlags&10256)!==0)),i&2048&&Rs(o,t);break;case 24:Mt(e,t,l,a),i&2048&&zs(t.alternate,t);break;default:Mt(e,t,l,a)}}function da(e,t,l,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var n=e,o=t,c=l,d=a,x=o.flags;switch(o.tag){case 0:case 11:case 15:da(n,o,c,d,i),ii(8,o);break;case 23:break;case 22:var N=o.stateNode;o.memoizedState!==null?N._visibility&2?da(n,o,c,d,i):oi(n,o):(N._visibility|=2,da(n,o,c,d,i)),i&&x&2048&&Rs(o.alternate,o);break;case 24:da(n,o,c,d,i),i&&x&2048&&zs(o.alternate,o);break;default:da(n,o,c,d,i)}t=t.sibling}}function oi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,i=a.flags;switch(a.tag){case 22:oi(l,a),i&2048&&Rs(a.alternate,a);break;case 24:oi(l,a),i&2048&&zs(a.alternate,a);break;default:oi(l,a)}t=t.sibling}}var si=8192;function ha(e){if(e.subtreeFlags&si)for(e=e.child;e!==null;)gf(e),e=e.sibling}function gf(e){switch(e.tag){case 26:ha(e),e.flags&si&&e.memoizedState!==null&&gg(yt,e.memoizedState,e.memoizedProps);break;case 5:ha(e);break;case 3:case 4:var t=yt;yt=Dn(e.stateNode.containerInfo),ha(e),yt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=si,si=16777216,ha(e),si=t):ha(e));break;default:ha(e)}}function pf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];we=a,yf(a,e)}pf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vf(e),e=e.sibling}function vf(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&tl(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,En(e)):ci(e);break;default:ci(e)}}function En(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];we=a,yf(a,e)}pf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:tl(8,t,t.return),En(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,En(t));break;default:En(t)}e=e.sibling}}function yf(e,t){for(;we!==null;){var l=we;switch(l.tag){case 0:case 11:case 15:tl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Xa(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,we=a;else e:for(l=e;we!==null;){a=we;var i=a.sibling,n=a.return;if(uf(a),a===l){we=null;break e}if(i!==null){i.return=n,we=i;break e}we=n}}}var zm={getCacheForType:function(e){var t=Ye(_e),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},Cm=typeof WeakMap=="function"?WeakMap:Map,ce=0,pe=null,P=null,ie=0,ue=0,nt=null,il=!1,ma=!1,Cs=!1,Yt=0,Ee=0,nl=0,Hl=0,ws=0,gt=0,ga=0,ui=null,Je=null,Ds=!1,Us=0,Tn=1/0,An=null,ol=null,He=0,sl=null,pa=null,va=0,Hs=0,Bs=null,bf=null,ri=0,qs=null;function ot(){if((ce&2)!==0&&ie!==0)return ie&-ie;if(O.T!==null){var e=ia;return e!==0?e:Zs()}return Dc()}function xf(){gt===0&&(gt=(ie&536870912)===0||se?Rc():536870912);var e=mt.current;return e!==null&&(e.flags|=32),gt}function st(e,t,l){(e===pe&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(ya(e,0),cl(e,ie,gt,!1)),ja(e,l),((ce&2)===0||e!==pe)&&(e===pe&&((ce&2)===0&&(Hl|=l),Ee===4&&cl(e,ie,gt,!1)),Nt(e))}function Sf(e,t,l){if((ce&6)!==0)throw Error(u(327));var a=!l&&(t&124)===0&&(t&e.expiredLanes)===0||Oa(e,t),i=a?Um(e,t):Ys(e,t,!0),n=a;do{if(i===0){ma&&!a&&cl(e,t,0,!1);break}else{if(l=e.current.alternate,n&&!wm(l)){i=Ys(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;i=ui;var d=c.current.memoizedState.isDehydrated;if(d&&(ya(c,o).flags|=256),o=Ys(c,o,!1),o!==2){if(Cs&&!d){c.errorRecoveryDisabledLanes|=n,Hl|=n,i=4;break e}n=Je,Je=i,n!==null&&(Je===null?Je=n:Je.push.apply(Je,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){ya(e,0),cl(e,t,0,!0);break}e:{switch(a=e,n=i,n){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:cl(a,t,gt,!il);break e;case 2:Je=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Us+300-St(),10<i)){if(cl(a,t,gt,!il),Di(a,0,!0)!==0)break e;a.timeoutHandle=Ff(Ef.bind(null,a,l,Je,An,Ds,t,gt,Hl,ga,il,n,2,-0,0),i);break e}Ef(a,l,Je,An,Ds,t,gt,Hl,ga,il,n,0,-0,0)}}break}while(!0);Nt(e)}function Ef(e,t,l,a,i,n,o,c,d,x,N,_,S,E){if(e.timeoutHandle=-1,_=t.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(vi={stylesheets:null,count:0,unsuspend:mg},gf(t),_=pg(),_!==null)){e.cancelPendingCommit=_(_f.bind(null,e,t,n,l,a,i,o,c,d,N,1,S,E)),cl(e,n,o,!x);return}_f(e,t,n,l,a,i,o,c,d)}function wm(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],n=i.getSnapshot;i=i.value;try{if(!tt(n(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cl(e,t,l,a){t&=~ws,t&=~Hl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var n=31-et(i),o=1<<n;a[n]=-1,i&=~o}l!==0&&Cc(e,l,t)}function Mn(){return(ce&6)===0?(fi(0),!1):!0}function Ls(){if(P!==null){if(ue===0)var e=P.return;else e=P,wt=Rl=null,ls(e),ra=null,ti=0,e=P;for(;e!==null;)ef(e.alternate,e),e=e.return;P=null}}function ya(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,$m(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Ls(),pe=e,P=l=Rt(e.current,null),ie=t,ue=0,nt=null,il=!1,ma=Oa(e,t),Cs=!1,ga=gt=ws=Hl=nl=Ee=0,Je=ui=null,Ds=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-et(a),n=1<<i;t|=e[i],a&=~n}return Yt=t,Ki(),l}function Tf(e,t){F=null,O.H=dn,t===Ka||t===tn?(t=Lu(),ue=3):t===Hu?(t=Lu(),ue=4):ue=t===Gr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,P===null&&(Ee=1,vn(e,rt(t,e.current)))}function Af(){var e=O.H;return O.H=dn,e===null?dn:e}function Mf(){var e=O.A;return O.A=zm,e}function Gs(){Ee=4,il||(ie&4194048)!==ie&&mt.current!==null||(ma=!0),(nl&134217727)===0&&(Hl&134217727)===0||pe===null||cl(pe,ie,gt,!1)}function Ys(e,t,l){var a=ce;ce|=2;var i=Af(),n=Mf();(pe!==e||ie!==t)&&(An=null,ya(e,t)),t=!1;var o=Ee;e:do try{if(ue!==0&&P!==null){var c=P,d=nt;switch(ue){case 8:Ls(),o=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var x=ue;if(ue=0,nt=null,ba(e,c,d,x),l&&ma){o=0;break e}break;default:x=ue,ue=0,nt=null,ba(e,c,d,x)}}Dm(),o=Ee;break}catch(N){Tf(e,N)}while(!0);return t&&e.shellSuspendCounter++,wt=Rl=null,ce=a,O.H=i,O.A=n,P===null&&(pe=null,ie=0,Ki()),o}function Dm(){for(;P!==null;)Nf(P)}function Um(e,t){var l=ce;ce|=2;var a=Af(),i=Mf();pe!==e||ie!==t?(An=null,Tn=St()+500,ya(e,t)):ma=Oa(e,t);e:do try{if(ue!==0&&P!==null){t=P;var n=nt;t:switch(ue){case 1:ue=0,nt=null,ba(e,t,n,1);break;case 2:case 9:if(Bu(n)){ue=0,nt=null,Of(t);break}t=function(){ue!==2&&ue!==9||pe!==e||(ue=7),Nt(e)},n.then(t,t);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:Bu(n)?(ue=0,nt=null,Of(t)):(ue=0,nt=null,ba(e,t,n,7));break;case 5:var o=null;switch(P.tag){case 26:o=P.memoizedState;case 5:case 27:var c=P;if(!o||cd(o)){ue=0,nt=null;var d=c.sibling;if(d!==null)P=d;else{var x=c.return;x!==null?(P=x,Nn(x)):P=null}break t}}ue=0,nt=null,ba(e,t,n,5);break;case 6:ue=0,nt=null,ba(e,t,n,6);break;case 8:Ls(),Ee=6;break e;default:throw Error(u(462))}}Hm();break}catch(N){Tf(e,N)}while(!0);return wt=Rl=null,O.H=a,O.A=i,ce=l,P!==null?0:(pe=null,ie=0,Ki(),Ee)}function Hm(){for(;P!==null&&!ih();)Nf(P)}function Nf(e){var t=Pr(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?Nn(e):P=t}function Of(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Kr(l,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Kr(l,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:ls(t);default:ef(l,t),t=P=Ou(t,Yt),t=Pr(l,t,Yt)}e.memoizedProps=e.pendingProps,t===null?Nn(e):P=t}function ba(e,t,l,a){wt=Rl=null,ls(t),ra=null,ti=0;var i=t.return;try{if(Mm(e,i,t,l,ie)){Ee=1,vn(e,rt(l,e.current)),P=null;return}}catch(n){if(i!==null)throw P=i,n;Ee=1,vn(e,rt(l,e.current)),P=null;return}t.flags&32768?(se||a===1?e=!0:ma||(ie&536870912)!==0?e=!1:(il=e=!0,(a===2||a===9||a===3||a===6)&&(a=mt.current,a!==null&&a.tag===13&&(a.flags|=16384))),jf(t,e)):Nn(t)}function Nn(e){var t=e;do{if((t.flags&32768)!==0){jf(t,il);return}e=t.return;var l=Om(t.alternate,t,Yt);if(l!==null){P=l;return}if(t=t.sibling,t!==null){P=t;return}P=t=e}while(t!==null);Ee===0&&(Ee=5)}function jf(e,t){do{var l=jm(e.alternate,e);if(l!==null){l.flags&=32767,P=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){P=e;return}P=e=l}while(e!==null);Ee=6,P=null}function _f(e,t,l,a,i,n,o,c,d){e.cancelPendingCommit=null;do On();while(He!==0);if((ce&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(n=t.lanes|t.childLanes,n|=zo,mh(e,l,n,o,c,d),e===pe&&(P=pe=null,ie=0),pa=t,sl=e,va=l,Hs=n,Bs=i,bf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gm(zi,function(){return Df(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,i=H.p,H.p=2,o=ce,ce|=4;try{_m(e,t,l)}finally{ce=o,H.p=i,O.T=a}}He=1,Rf(),zf(),Cf()}}function Rf(){if(He===1){He=0;var e=sl,t=pa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=O.T,O.T=null;var a=H.p;H.p=2;var i=ce;ce|=4;try{df(t,e);var n=Is,o=vu(e.containerInfo),c=n.focusedElem,d=n.selectionRange;if(o!==c&&c&&c.ownerDocument&&pu(c.ownerDocument.documentElement,c)){if(d!==null&&No(c)){var x=d.start,N=d.end;if(N===void 0&&(N=x),"selectionStart"in c)c.selectionStart=x,c.selectionEnd=Math.min(N,c.value.length);else{var _=c.ownerDocument||document,S=_&&_.defaultView||window;if(S.getSelection){var E=S.getSelection(),K=c.textContent.length,Q=Math.min(d.start,K),de=d.end===void 0?Q:Math.min(d.end,K);!E.extend&&Q>de&&(o=de,de=Q,Q=o);var v=gu(c,Q),g=gu(c,de);if(v&&g&&(E.rangeCount!==1||E.anchorNode!==v.node||E.anchorOffset!==v.offset||E.focusNode!==g.node||E.focusOffset!==g.offset)){var b=_.createRange();b.setStart(v.node,v.offset),E.removeAllRanges(),Q>de?(E.addRange(b),E.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),E.addRange(b))}}}}for(_=[],E=c;E=E.parentNode;)E.nodeType===1&&_.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<_.length;c++){var j=_[c];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Ln=!!Ps,Is=Ps=null}finally{ce=i,H.p=a,O.T=l}}e.current=t,He=2}}function zf(){if(He===2){He=0;var e=sl,t=pa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=O.T,O.T=null;var a=H.p;H.p=2;var i=ce;ce|=4;try{cf(e,t.alternate,t)}finally{ce=i,H.p=a,O.T=l}}He=3}}function Cf(){if(He===4||He===3){He=0,nh();var e=sl,t=pa,l=va,a=bf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?He=5:(He=0,pa=sl=null,wf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ol=null),io(l),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Na,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=O.T,i=H.p,H.p=2,O.T=null;try{for(var n=e.onRecoverableError,o=0;o<a.length;o++){var c=a[o];n(c.value,{componentStack:c.stack})}}finally{O.T=t,H.p=i}}(va&3)!==0&&On(),Nt(e),i=e.pendingLanes,(l&4194090)!==0&&(i&42)!==0?e===qs?ri++:(ri=0,qs=e):ri=0,fi(0)}}function wf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xa(t)))}function On(e){return Rf(),zf(),Cf(),Df()}function Df(){if(He!==5)return!1;var e=sl,t=Hs;Hs=0;var l=io(va),a=O.T,i=H.p;try{H.p=32>l?32:l,O.T=null,l=Bs,Bs=null;var n=sl,o=va;if(He=0,pa=sl=null,va=0,(ce&6)!==0)throw Error(u(331));var c=ce;if(ce|=4,vf(n.current),mf(n,n.current,o,l),ce=c,fi(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Na,n)}catch{}return!0}finally{H.p=i,O.T=a,wf(e,t)}}function Uf(e,t,l){t=rt(l,t),t=ps(e.stateNode,t,2),e=$t(e,t,2),e!==null&&(ja(e,2),Nt(e))}function me(e,t,l){if(e.tag===3)Uf(e,e,l);else for(;t!==null;){if(t.tag===3){Uf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ol===null||!ol.has(a))){e=rt(l,e),l=qr(2),a=$t(t,l,2),a!==null&&(Lr(l,a,t,e),ja(a,2),Nt(a));break}}t=t.return}}function Vs(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Cm;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(l)||(Cs=!0,i.add(l),e=Bm.bind(null,e,t,l),t.then(e,e))}function Bm(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,pe===e&&(ie&l)===l&&(Ee===4||Ee===3&&(ie&62914560)===ie&&300>St()-Us?(ce&2)===0&&ya(e,0):ws|=l,ga===ie&&(ga=0)),Nt(e)}function Hf(e,t){t===0&&(t=zc()),e=ea(e,t),e!==null&&(ja(e,t),Nt(e))}function qm(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Hf(e,l)}function Lm(e,t){var l=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Hf(e,l)}function Gm(e,t){return eo(e,t)}var jn=null,xa=null,Qs=!1,_n=!1,Xs=!1,Bl=0;function Nt(e){e!==xa&&e.next===null&&(xa===null?jn=xa=e:xa=xa.next=e),_n=!0,Qs||(Qs=!0,Vm())}function fi(e,t){if(!Xs&&_n){Xs=!0;do for(var l=!1,a=jn;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var n=0;else{var o=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-et(42|e)+1)-1,n&=i&~(o&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,Gf(a,n))}else n=ie,n=Di(a,a===pe?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Oa(a,n)||(l=!0,Gf(a,n));a=a.next}while(l);Xs=!1}}function Ym(){Bf()}function Bf(){_n=Qs=!1;var e=0;Bl!==0&&(Fm()&&(e=Bl),Bl=0);for(var t=St(),l=null,a=jn;a!==null;){var i=a.next,n=qf(a,t);n===0?(a.next=null,l===null?jn=i:l.next=i,i===null&&(xa=l)):(l=a,(e!==0||(n&3)!==0)&&(_n=!0)),a=i}fi(e)}function qf(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var o=31-et(n),c=1<<o,d=i[o];d===-1?((c&l)===0||(c&a)!==0)&&(i[o]=hh(c,t)):d<=t&&(e.expiredLanes|=c),n&=~c}if(t=pe,l=ie,l=Di(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&to(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Oa(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&to(a),io(l)){case 2:case 8:l=jc;break;case 32:l=zi;break;case 268435456:l=_c;break;default:l=zi}return a=Lf.bind(null,e),l=eo(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&to(a),e.callbackPriority=2,e.callbackNode=null,2}function Lf(e,t){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(On()&&e.callbackNode!==l)return null;var a=ie;return a=Di(e,e===pe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Sf(e,a,t),qf(e,St()),e.callbackNode!=null&&e.callbackNode===l?Lf.bind(null,e):null)}function Gf(e,t){if(On())return null;Sf(e,t,!0)}function Vm(){Pm(function(){(ce&6)!==0?eo(Oc,Ym):Bf()})}function Zs(){return Bl===0&&(Bl=Rc()),Bl}function Yf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Li(""+e)}function Vf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Qm(e,t,l,a,i){if(t==="submit"&&l&&l.stateNode===i){var n=Yf((i[Xe]||null).action),o=a.submitter;o&&(t=(t=o[Xe]||null)?Yf(t.formAction):o.getAttribute("formAction"),t!==null&&(n=t,o=null));var c=new Qi("action","action",null,a,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Bl!==0){var d=o?Vf(i,o):new FormData(i);fs(l,{pending:!0,data:d,method:i.method,action:n},null,d)}}else typeof n=="function"&&(c.preventDefault(),d=o?Vf(i,o):new FormData(i),fs(l,{pending:!0,data:d,method:i.method,action:n},n,d))},currentTarget:i}]})}}for(var Ks=0;Ks<Ro.length;Ks++){var ks=Ro[Ks],Xm=ks.toLowerCase(),Zm=ks[0].toUpperCase()+ks.slice(1);vt(Xm,"on"+Zm)}vt(xu,"onAnimationEnd"),vt(Su,"onAnimationIteration"),vt(Eu,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(cm,"onTransitionRun"),vt(um,"onTransitionStart"),vt(rm,"onTransitionCancel"),vt(Tu,"onTransitionEnd"),Xl("onMouseEnter",["mouseout","mouseover"]),Xl("onMouseLeave",["mouseout","mouseover"]),Xl("onPointerEnter",["pointerout","pointerover"]),Xl("onPointerLeave",["pointerout","pointerover"]),Sl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di));function Qf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],i=a.event;a=a.listeners;e:{var n=void 0;if(t)for(var o=a.length-1;0<=o;o--){var c=a[o],d=c.instance,x=c.currentTarget;if(c=c.listener,d!==n&&i.isPropagationStopped())break e;n=c,i.currentTarget=x;try{n(i)}catch(N){pn(N)}i.currentTarget=null,n=d}else for(o=0;o<a.length;o++){if(c=a[o],d=c.instance,x=c.currentTarget,c=c.listener,d!==n&&i.isPropagationStopped())break e;n=c,i.currentTarget=x;try{n(i)}catch(N){pn(N)}i.currentTarget=null,n=d}}}}function I(e,t){var l=t[no];l===void 0&&(l=t[no]=new Set);var a=e+"__bubble";l.has(a)||(Xf(t,e,2,!1),l.add(a))}function Js(e,t,l){var a=0;t&&(a|=4),Xf(l,e,a,t)}var Rn="_reactListening"+Math.random().toString(36).slice(2);function Ws(e){if(!e[Rn]){e[Rn]=!0,Hc.forEach(function(l){l!=="selectionchange"&&(Km.has(l)||Js(l,!1,e),Js(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rn]||(t[Rn]=!0,Js("selectionchange",!1,t))}}function Xf(e,t,l,a){switch(md(t)){case 2:var i=bg;break;case 8:i=xg;break;default:i=uc}l=i.bind(null,t,l,e),i=void 0,!vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function Fs(e,t,l,a,i){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=a.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=Yl(c),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){a=n=o;continue e}c=c.parentNode}}a=a.return}Fc(function(){var x=n,N=go(l),_=[];e:{var S=Au.get(e);if(S!==void 0){var E=Qi,K=e;switch(e){case"keypress":if(Yi(l)===0)break e;case"keydown":case"keyup":E=Gh;break;case"focusin":K="focus",E=So;break;case"focusout":K="blur",E=So;break;case"beforeblur":case"afterblur":E=So;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Qh;break;case xu:case Su:case Eu:E=zh;break;case Tu:E=Zh;break;case"scroll":case"scrollend":E=Nh;break;case"wheel":E=kh;break;case"copy":case"cut":case"paste":E=wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=tu;break;case"toggle":case"beforetoggle":E=Wh}var Q=(t&4)!==0,de=!Q&&(e==="scroll"||e==="scrollend"),v=Q?S!==null?S+"Capture":null:S;Q=[];for(var g=x,b;g!==null;){var j=g;if(b=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||b===null||v===null||(j=za(g,v),j!=null&&Q.push(hi(g,j,b))),de)break;g=g.return}0<Q.length&&(S=new E(S,K,null,l,N),_.push({event:S,listeners:Q}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",S&&l!==mo&&(K=l.relatedTarget||l.fromElement)&&(Yl(K)||K[Gl]))break e;if((E||S)&&(S=N.window===N?N:(S=N.ownerDocument)?S.defaultView||S.parentWindow:window,E?(K=l.relatedTarget||l.toElement,E=x,K=K?Yl(K):null,K!==null&&(de=A(K),Q=K.tag,K!==de||Q!==5&&Q!==27&&Q!==6)&&(K=null)):(E=null,K=x),E!==K)){if(Q=Ic,j="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(Q=tu,j="onPointerLeave",v="onPointerEnter",g="pointer"),de=E==null?S:Ra(E),b=K==null?S:Ra(K),S=new Q(j,g+"leave",E,l,N),S.target=de,S.relatedTarget=b,j=null,Yl(N)===x&&(Q=new Q(v,g+"enter",K,l,N),Q.target=b,Q.relatedTarget=de,j=Q),de=j,E&&K)t:{for(Q=E,v=K,g=0,b=Q;b;b=Sa(b))g++;for(b=0,j=v;j;j=Sa(j))b++;for(;0<g-b;)Q=Sa(Q),g--;for(;0<b-g;)v=Sa(v),b--;for(;g--;){if(Q===v||v!==null&&Q===v.alternate)break t;Q=Sa(Q),v=Sa(v)}Q=null}else Q=null;E!==null&&Zf(_,S,E,Q,!1),K!==null&&de!==null&&Zf(_,de,K,Q,!0)}}e:{if(S=x?Ra(x):window,E=S.nodeName&&S.nodeName.toLowerCase(),E==="select"||E==="input"&&S.type==="file")var q=uu;else if(su(S))if(ru)q=nm;else{q=am;var $=lm}else E=S.nodeName,!E||E.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?x&&ho(x.elementType)&&(q=uu):q=im;if(q&&(q=q(e,x))){cu(_,q,l,N);break e}$&&$(e,S,x),e==="focusout"&&x&&S.type==="number"&&x.memoizedProps.value!=null&&fo(S,"number",S.value)}switch($=x?Ra(x):window,e){case"focusin":(su($)||$.contentEditable==="true")&&($l=$,Oo=x,La=null);break;case"focusout":La=Oo=$l=null;break;case"mousedown":jo=!0;break;case"contextmenu":case"mouseup":case"dragend":jo=!1,yu(_,l,N);break;case"selectionchange":if(sm)break;case"keydown":case"keyup":yu(_,l,N)}var G;if(To)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Fl?nu(e,l)&&(X="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(X="onCompositionStart");X&&(lu&&l.locale!=="ko"&&(Fl||X!=="onCompositionStart"?X==="onCompositionEnd"&&Fl&&(G=$c()):(kt=N,yo="value"in kt?kt.value:kt.textContent,Fl=!0)),$=zn(x,X),0<$.length&&(X=new eu(X,e,null,l,N),_.push({event:X,listeners:$}),G?X.data=G:(G=ou(l),G!==null&&(X.data=G)))),(G=$h?Ph(e,l):Ih(e,l))&&(X=zn(x,"onBeforeInput"),0<X.length&&($=new eu("onBeforeInput","beforeinput",null,l,N),_.push({event:$,listeners:X}),$.data=G)),Qm(_,e,x,l,N)}Qf(_,t)})}function hi(e,t,l){return{instance:e,listener:t,currentTarget:l}}function zn(e,t){for(var l=t+"Capture",a=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=za(e,l),i!=null&&a.unshift(hi(e,i,n)),i=za(e,t),i!=null&&a.push(hi(e,i,n))),e.tag===3)return a;e=e.return}return[]}function Sa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zf(e,t,l,a,i){for(var n=t._reactName,o=[];l!==null&&l!==a;){var c=l,d=c.alternate,x=c.stateNode;if(c=c.tag,d!==null&&d===a)break;c!==5&&c!==26&&c!==27||x===null||(d=x,i?(x=za(l,n),x!=null&&o.unshift(hi(l,x,d))):i||(x=za(l,n),x!=null&&o.push(hi(l,x,d)))),l=l.return}o.length!==0&&e.push({event:t,listeners:o})}var km=/\r\n?/g,Jm=/\u0000|\uFFFD/g;function Kf(e){return(typeof e=="string"?e:""+e).replace(km,`
`).replace(Jm,"")}function kf(e,t){return t=Kf(t),Kf(e)===t}function Cn(){}function fe(e,t,l,a,i,n){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||kl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&kl(e,""+a);break;case"className":Hi(e,"class",a);break;case"tabIndex":Hi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Hi(e,l,a);break;case"style":Jc(e,a,n);break;case"data":if(t!=="object"){Hi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Li(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(t!=="input"&&fe(e,t,"name",i.name,i,null),fe(e,t,"formEncType",i.formEncType,i,null),fe(e,t,"formMethod",i.formMethod,i,null),fe(e,t,"formTarget",i.formTarget,i,null)):(fe(e,t,"encType",i.encType,i,null),fe(e,t,"method",i.method,i,null),fe(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Li(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Cn);break;case"onScroll":a!=null&&I("scroll",e);break;case"onScrollEnd":a!=null&&I("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Li(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":I("beforetoggle",e),I("toggle",e),Ui(e,"popover",a);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ui(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Ah.get(l)||l,Ui(e,l,a))}}function $s(e,t,l,a,i,n){switch(l){case"style":Jc(e,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"children":typeof a=="string"?kl(e,a):(typeof a=="number"||typeof a=="bigint")&&kl(e,""+a);break;case"onScroll":a!=null&&I("scroll",e);break;case"onScrollEnd":a!=null&&I("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Cn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bc.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),n=e[Xe]||null,n=n!=null?n[l]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,i);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Ui(e,l,a)}}}function Be(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":I("error",e),I("load",e);var a=!1,i=!1,n;for(n in l)if(l.hasOwnProperty(n)){var o=l[n];if(o!=null)switch(n){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:fe(e,t,n,o,l,null)}}i&&fe(e,t,"srcSet",l.srcSet,l,null),a&&fe(e,t,"src",l.src,l,null);return;case"input":I("invalid",e);var c=n=o=i=null,d=null,x=null;for(a in l)if(l.hasOwnProperty(a)){var N=l[a];if(N!=null)switch(a){case"name":i=N;break;case"type":o=N;break;case"checked":d=N;break;case"defaultChecked":x=N;break;case"value":n=N;break;case"defaultValue":c=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:fe(e,t,a,N,l,null)}}Xc(e,n,c,d,x,o,i,!1),Bi(e);return;case"select":I("invalid",e),a=o=n=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":o=c;break;case"multiple":a=c;default:fe(e,t,i,c,l,null)}t=n,l=o,e.multiple=!!a,t!=null?Kl(e,!!a,t,!1):l!=null&&Kl(e,!!a,l,!0);return;case"textarea":I("invalid",e),n=i=a=null;for(o in l)if(l.hasOwnProperty(o)&&(c=l[o],c!=null))switch(o){case"value":a=c;break;case"defaultValue":i=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:fe(e,t,o,c,l,null)}Kc(e,a,i,n),Bi(e);return;case"option":for(d in l)if(l.hasOwnProperty(d)&&(a=l[d],a!=null))switch(d){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:fe(e,t,d,a,l,null)}return;case"dialog":I("beforetoggle",e),I("toggle",e),I("cancel",e),I("close",e);break;case"iframe":case"object":I("load",e);break;case"video":case"audio":for(a=0;a<di.length;a++)I(di[a],e);break;case"image":I("error",e),I("load",e);break;case"details":I("toggle",e);break;case"embed":case"source":case"link":I("error",e),I("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in l)if(l.hasOwnProperty(x)&&(a=l[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:fe(e,t,x,a,l,null)}return;default:if(ho(t)){for(N in l)l.hasOwnProperty(N)&&(a=l[N],a!==void 0&&$s(e,t,N,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&fe(e,t,c,a,l,null))}function Wm(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,c=null,d=null,x=null,N=null;for(E in l){var _=l[E];if(l.hasOwnProperty(E)&&_!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":d=_;default:a.hasOwnProperty(E)||fe(e,t,E,null,a,_)}}for(var S in a){var E=a[S];if(_=l[S],a.hasOwnProperty(S)&&(E!=null||_!=null))switch(S){case"type":n=E;break;case"name":i=E;break;case"checked":x=E;break;case"defaultChecked":N=E;break;case"value":o=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:E!==_&&fe(e,t,S,E,a,_)}}ro(e,o,c,d,x,N,n,i);return;case"select":E=o=c=S=null;for(n in l)if(d=l[n],l.hasOwnProperty(n)&&d!=null)switch(n){case"value":break;case"multiple":E=d;default:a.hasOwnProperty(n)||fe(e,t,n,null,a,d)}for(i in a)if(n=a[i],d=l[i],a.hasOwnProperty(i)&&(n!=null||d!=null))switch(i){case"value":S=n;break;case"defaultValue":c=n;break;case"multiple":o=n;default:n!==d&&fe(e,t,i,n,a,d)}t=c,l=o,a=E,S!=null?Kl(e,!!l,S,!1):!!a!=!!l&&(t!=null?Kl(e,!!l,t,!0):Kl(e,!!l,l?[]:"",!1));return;case"textarea":E=S=null;for(c in l)if(i=l[c],l.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:fe(e,t,c,null,a,i)}for(o in a)if(i=a[o],n=l[o],a.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":S=i;break;case"defaultValue":E=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==n&&fe(e,t,o,i,a,n)}Zc(e,S,E);return;case"option":for(var K in l)if(S=l[K],l.hasOwnProperty(K)&&S!=null&&!a.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:fe(e,t,K,null,a,S)}for(d in a)if(S=a[d],E=l[d],a.hasOwnProperty(d)&&S!==E&&(S!=null||E!=null))switch(d){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:fe(e,t,d,S,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in l)S=l[Q],l.hasOwnProperty(Q)&&S!=null&&!a.hasOwnProperty(Q)&&fe(e,t,Q,null,a,S);for(x in a)if(S=a[x],E=l[x],a.hasOwnProperty(x)&&S!==E&&(S!=null||E!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(137,t));break;default:fe(e,t,x,S,a,E)}return;default:if(ho(t)){for(var de in l)S=l[de],l.hasOwnProperty(de)&&S!==void 0&&!a.hasOwnProperty(de)&&$s(e,t,de,void 0,a,S);for(N in a)S=a[N],E=l[N],!a.hasOwnProperty(N)||S===E||S===void 0&&E===void 0||$s(e,t,N,S,a,E);return}}for(var v in l)S=l[v],l.hasOwnProperty(v)&&S!=null&&!a.hasOwnProperty(v)&&fe(e,t,v,null,a,S);for(_ in a)S=a[_],E=l[_],!a.hasOwnProperty(_)||S===E||S==null&&E==null||fe(e,t,_,S,a,E)}var Ps=null,Is=null;function wn(e){return e.nodeType===9?e:e.ownerDocument}function Jf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tc=null;function Fm(){var e=window.event;return e&&e.type==="popstate"?e===tc?!1:(tc=e,!0):(tc=null,!1)}var Ff=typeof setTimeout=="function"?setTimeout:void 0,$m=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,Pm=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(e){return $f.resolve(null).then(e).catch(Im)}:Ff;function Im(e){setTimeout(function(){throw e})}function ul(e){return e==="head"}function Pf(e,t){var l=t,a=0,i=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(0<a&&8>a){l=a;var o=e.ownerDocument;if(l&1&&mi(o.documentElement),l&2&&mi(o.body),l&4)for(l=o.head,mi(l),o=l.firstChild;o;){var c=o.nextSibling,d=o.nodeName;o[_a]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&o.rel.toLowerCase()==="stylesheet"||l.removeChild(o),o=c}}if(i===0){e.removeChild(n),Ei(t);return}i--}else l==="$"||l==="$?"||l==="$!"?i++:a=l.charCodeAt(0)-48;else a=0;l=n}while(l);Ei(t)}function lc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":lc(l),oo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function eg(e,t,l,a){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function tg(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=bt(e.nextSibling),e===null))return null;return e}function ac(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function lg(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ic=null;function If(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function ed(e,t,l){switch(t=wn(l),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);oo(e)}var pt=new Map,td=new Set;function Dn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vt=H.d;H.d={f:ag,r:ig,D:ng,C:og,L:sg,m:cg,X:rg,S:ug,M:fg};function ag(){var e=Vt.f(),t=Mn();return e||t}function ig(e){var t=Vl(e);t!==null&&t.tag===5&&t.type==="form"?xr(t):Vt.r(e)}var Ea=typeof document>"u"?null:document;function ld(e,t,l){var a=Ea;if(a&&typeof t=="string"&&t){var i=ut(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),td.has(i)||(td.add(i),e={rel:e,crossOrigin:l,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Be(t,"link",e),ze(t),a.head.appendChild(t)))}}function ng(e){Vt.D(e),ld("dns-prefetch",e,null)}function og(e,t){Vt.C(e,t),ld("preconnect",e,t)}function sg(e,t,l){Vt.L(e,t,l);var a=Ea;if(a&&e&&t){var i='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+ut(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+ut(l.imageSizes)+'"]')):i+='[href="'+ut(e)+'"]';var n=i;switch(t){case"style":n=Ta(e);break;case"script":n=Aa(e)}pt.has(n)||(e=R({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),pt.set(n,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(gi(n))||t==="script"&&a.querySelector(pi(n))||(t=a.createElement("link"),Be(t,"link",e),ze(t),a.head.appendChild(t)))}}function cg(e,t){Vt.m(e,t);var l=Ea;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ut(a)+'"][href="'+ut(e)+'"]',n=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Aa(e)}if(!pt.has(n)&&(e=R({rel:"modulepreload",href:e},t),pt.set(n,e),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(pi(n)))return}a=l.createElement("link"),Be(a,"link",e),ze(a),l.head.appendChild(a)}}}function ug(e,t,l){Vt.S(e,t,l);var a=Ea;if(a&&e){var i=Ql(a).hoistableStyles,n=Ta(e);t=t||"default";var o=i.get(n);if(!o){var c={loading:0,preload:null};if(o=a.querySelector(gi(n)))c.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},l),(l=pt.get(n))&&nc(e,l);var d=o=a.createElement("link");ze(d),Be(d,"link",e),d._p=new Promise(function(x,N){d.onload=x,d.onerror=N}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Un(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:c},i.set(n,o)}}}function rg(e,t){Vt.X(e,t);var l=Ea;if(l&&e){var a=Ql(l).hoistableScripts,i=Aa(e),n=a.get(i);n||(n=l.querySelector(pi(i)),n||(e=R({src:e,async:!0},t),(t=pt.get(i))&&oc(e,t),n=l.createElement("script"),ze(n),Be(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function fg(e,t){Vt.M(e,t);var l=Ea;if(l&&e){var a=Ql(l).hoistableScripts,i=Aa(e),n=a.get(i);n||(n=l.querySelector(pi(i)),n||(e=R({src:e,async:!0,type:"module"},t),(t=pt.get(i))&&oc(e,t),n=l.createElement("script"),ze(n),Be(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function ad(e,t,l,a){var i=(i=k.current)?Dn(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ta(l.href),l=Ql(i).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ta(l.href);var n=Ql(i).hoistableStyles,o=n.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,o),(n=i.querySelector(gi(e)))&&!n._p&&(o.instance=n,o.state.loading=5),pt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},pt.set(e,l),n||dg(i,e,l,o.state))),t&&a===null)throw Error(u(528,""));return o}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Aa(l),l=Ql(i).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ta(e){return'href="'+ut(e)+'"'}function gi(e){return'link[rel="stylesheet"]['+e+"]"}function id(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function dg(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Be(t,"link",l),ze(t),e.head.appendChild(t))}function Aa(e){return'[src="'+ut(e)+'"]'}function pi(e){return"script[async]"+e}function nd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ut(l.href)+'"]');if(a)return t.instance=a,ze(a),a;var i=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ze(a),Be(a,"style",i),Un(a,l.precedence,e),t.instance=a;case"stylesheet":i=Ta(l.href);var n=e.querySelector(gi(i));if(n)return t.state.loading|=4,t.instance=n,ze(n),n;a=id(l),(i=pt.get(i))&&nc(a,i),n=(e.ownerDocument||e).createElement("link"),ze(n);var o=n;return o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),Be(n,"link",a),t.state.loading|=4,Un(n,l.precedence,e),t.instance=n;case"script":return n=Aa(l.src),(i=e.querySelector(pi(n)))?(t.instance=i,ze(i),i):(a=l,(i=pt.get(n))&&(a=R({},l),oc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),ze(i),Be(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Un(a,l.precedence,e));return t.instance}function Un(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,n=i,o=0;o<a.length;o++){var c=a[o];if(c.dataset.precedence===t)n=c;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hn=null;function od(e,t,l){if(Hn===null){var a=new Map,i=Hn=new Map;i.set(l,a)}else i=Hn,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var n=l[i];if(!(n[_a]||n[Ge]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(t)||"";o=e+o;var c=a.get(o);c?c.push(n):a.set(o,[n])}}return a}function sd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function hg(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vi=null;function mg(){}function gg(e,t,l){if(vi===null)throw Error(u(475));var a=vi;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ta(l.href),n=e.querySelector(gi(i));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Bn.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=n,ze(n);return}n=e.ownerDocument||e,l=id(l),(i=pt.get(i))&&nc(l,i),n=n.createElement("link"),ze(n);var o=n;o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),Be(n,"link",l),t.instance=n}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Bn.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function pg(){if(vi===null)throw Error(u(475));var e=vi;return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Bn(){if(this.count--,this.count===0){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qn=null;function sc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qn=new Map,t.forEach(vg,e),qn=null,Bn.call(e))}function vg(e,t){if(!(t.state.loading&4)){var l=qn.get(e);if(l)var a=l.get(null);else{l=new Map,qn.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(l.set(o.dataset.precedence,o),a=o)}a&&l.set(null,a)}i=t.instance,o=i.getAttribute("data-precedence"),n=l.get(o)||a,n===a&&l.set(null,i),l.set(o,i),this.count++,a=Bn.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var yi={$$typeof:le,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function yg(e,t,l,a,i,n,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.hiddenUpdates=lo(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ud(e,t,l,a,i,n,o,c,d,x,N,_){return e=new yg(e,t,l,o,c,d,x,_),t=1,n===!0&&(t|=24),n=lt(3,null,null,t),e.current=n,n.stateNode=e,t=Vo(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:t},Ko(n),e}function rd(e){return e?(e=ta,e):ta}function fd(e,t,l,a,i,n){i=rd(i),a.context===null?a.context=i:a.pendingContext=i,a=Ft(t),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=$t(e,a,t),l!==null&&(st(l,e,t),Ja(l,e,t))}function dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function cc(e,t){dd(e,t),(e=e.alternate)&&dd(e,t)}function hd(e){if(e.tag===13){var t=ea(e,67108864);t!==null&&st(t,e,67108864),cc(e,67108864)}}var Ln=!0;function bg(e,t,l,a){var i=O.T;O.T=null;var n=H.p;try{H.p=2,uc(e,t,l,a)}finally{H.p=n,O.T=i}}function xg(e,t,l,a){var i=O.T;O.T=null;var n=H.p;try{H.p=8,uc(e,t,l,a)}finally{H.p=n,O.T=i}}function uc(e,t,l,a){if(Ln){var i=rc(a);if(i===null)Fs(e,t,a,Gn,l),gd(e,a);else if(Eg(i,e,t,l,a))a.stopPropagation();else if(gd(e,a),t&4&&-1<Sg.indexOf(e)){for(;i!==null;){var n=Vl(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=xl(n.pendingLanes);if(o!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var d=1<<31-et(o);c.entanglements[1]|=d,o&=~d}Nt(n),(ce&6)===0&&(Tn=St()+500,fi(0))}}break;case 13:c=ea(n,2),c!==null&&st(c,n,2),Mn(),cc(n,2)}if(n=rc(a),n===null&&Fs(e,t,a,Gn,l),n===i)break;i=n}i!==null&&a.stopPropagation()}else Fs(e,t,a,null,l)}}function rc(e){return e=go(e),fc(e)}var Gn=null;function fc(e){if(Gn=null,e=Yl(e),e!==null){var t=A(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=M(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gn=e,null}function md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oh()){case Oc:return 2;case jc:return 8;case zi:case sh:return 32;case _c:return 268435456;default:return 32}default:return 32}}var dc=!1,rl=null,fl=null,dl=null,bi=new Map,xi=new Map,hl=[],Sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gd(e,t){switch(e){case"focusin":case"focusout":rl=null;break;case"dragenter":case"dragleave":fl=null;break;case"mouseover":case"mouseout":dl=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function Si(e,t,l,a,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[i]},t!==null&&(t=Vl(t),t!==null&&hd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Eg(e,t,l,a,i){switch(t){case"focusin":return rl=Si(rl,e,t,l,a,i),!0;case"dragenter":return fl=Si(fl,e,t,l,a,i),!0;case"mouseover":return dl=Si(dl,e,t,l,a,i),!0;case"pointerover":var n=i.pointerId;return bi.set(n,Si(bi.get(n)||null,e,t,l,a,i)),!0;case"gotpointercapture":return n=i.pointerId,xi.set(n,Si(xi.get(n)||null,e,t,l,a,i)),!0}return!1}function pd(e){var t=Yl(e.target);if(t!==null){var l=A(t);if(l!==null){if(t=l.tag,t===13){if(t=M(l),t!==null){e.blockedOn=t,gh(e.priority,function(){if(l.tag===13){var a=ot();a=ao(a);var i=ea(l,a);i!==null&&st(i,l,a),cc(l,a)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=rc(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);mo=a,l.target.dispatchEvent(a),mo=null}else return t=Vl(l),t!==null&&hd(t),e.blockedOn=l,!1;t.shift()}return!0}function vd(e,t,l){Yn(e)&&l.delete(t)}function Tg(){dc=!1,rl!==null&&Yn(rl)&&(rl=null),fl!==null&&Yn(fl)&&(fl=null),dl!==null&&Yn(dl)&&(dl=null),bi.forEach(vd),xi.forEach(vd)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,dc||(dc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Tg)))}var Qn=null;function yd(e){Qn!==e&&(Qn=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Qn===e&&(Qn=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(fc(a||l)===null)continue;break}var n=Vl(l);n!==null&&(e.splice(t,3),t-=3,fs(n,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Ei(e){function t(d){return Vn(d,e)}rl!==null&&Vn(rl,e),fl!==null&&Vn(fl,e),dl!==null&&Vn(dl,e),bi.forEach(t),xi.forEach(t);for(var l=0;l<hl.length;l++){var a=hl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<hl.length&&(l=hl[0],l.blockedOn===null);)pd(l),l.blockedOn===null&&hl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],n=l[a+1],o=i[Xe]||null;if(typeof n=="function")o||yd(l);else if(o){var c=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[Xe]||null)c=o.formAction;else if(fc(i)!==null)continue}else c=o.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),yd(l)}}}function hc(e){this._internalRoot=e}Xn.prototype.render=hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var l=t.current,a=ot();fd(l,a,e,t,null,null)},Xn.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fd(e.current,2,null,e,null,null),Mn(),t[Gl]=null}};function Xn(e){this._internalRoot=e}Xn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dc();e={blockedOn:null,target:e,priority:t};for(var l=0;l<hl.length&&t!==0&&t<hl[l].priority;l++);hl.splice(l,0,e),l===0&&pd(e)}};var bd=r.version;if(bd!=="19.1.1")throw Error(u(527,bd,"19.1.1"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=T(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Ag={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zn.isDisabled&&Zn.supportsFiber)try{Na=Zn.inject(Ag),Ie=Zn}catch{}}return Ai.createRoot=function(e,t){if(!p(e))throw Error(u(299));var l=!1,a="",i=Dr,n=Ur,o=Hr,c=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=ud(e,1,!1,null,null,l,a,i,n,o,c,null),e[Gl]=t.current,Ws(e),new hc(t)},Ai.hydrateRoot=function(e,t,l){if(!p(e))throw Error(u(299));var a=!1,i="",n=Dr,o=Ur,c=Hr,d=null,x=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(o=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(d=l.unstable_transitionCallbacks),l.formState!==void 0&&(x=l.formState)),t=ud(e,1,!0,t,l??null,a,i,n,o,c,d,x),t.context=rd(null),l=t.current,a=ot(),a=ao(a),i=Ft(a),i.callback=null,$t(l,i,a),l=a,t.current.lanes=l,ja(t,l),Nt(t),e[Gl]=t.current,Ws(e),new Xn(t)},Ai.version="19.1.1",Ai}var _d;function Ug(){if(_d)return pc.exports;_d=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),pc.exports=Dg(),pc.exports}var Hg=Ug();const Bg=Yd(Hg);Vd();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ni(){return Ni=Object.assign?Object.assign.bind():function(s){for(var r=1;r<arguments.length;r++){var h=arguments[r];for(var u in h)Object.prototype.hasOwnProperty.call(h,u)&&(s[u]=h[u])}return s},Ni.apply(this,arguments)}var gl;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(gl||(gl={}));const Rd="popstate";function qg(s){s===void 0&&(s={});function r(u,p){let{pathname:A,search:M,hash:C}=u.location;return Sc("",{pathname:A,search:M,hash:C},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function h(u,p){return typeof p=="string"?p:kn(p)}return Gg(r,h,null,s)}function je(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function Qd(s,r){if(!s){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Lg(){return Math.random().toString(36).substr(2,8)}function zd(s,r){return{usr:s.state,key:s.key,idx:r}}function Sc(s,r,h,u){return h===void 0&&(h=null),Ni({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof r=="string"?Ma(r):r,{state:h,key:r&&r.key||u||Lg()})}function kn(s){let{pathname:r="/",search:h="",hash:u=""}=s;return h&&h!=="?"&&(r+=h.charAt(0)==="?"?h:"?"+h),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function Ma(s){let r={};if(s){let h=s.indexOf("#");h>=0&&(r.hash=s.substr(h),s=s.substr(0,h));let u=s.indexOf("?");u>=0&&(r.search=s.substr(u),s=s.substr(0,u)),s&&(r.pathname=s)}return r}function Gg(s,r,h,u){u===void 0&&(u={});let{window:p=document.defaultView,v5Compat:A=!1}=u,M=p.history,C=gl.Pop,T=null,y=R();y==null&&(y=0,M.replaceState(Ni({},M.state,{idx:y}),""));function R(){return(M.state||{idx:null}).idx}function w(){C=gl.Pop;let L=R(),ge=L==null?null:L-y;y=L,T&&T({action:C,location:te.location,delta:ge})}function Y(L,ge){C=gl.Push;let ve=Sc(te.location,L,ge);y=R()+1;let le=zd(ve,y),Te=te.createHref(ve);try{M.pushState(le,"",Te)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;p.location.assign(Te)}A&&T&&T({action:C,location:te.location,delta:1})}function ae(L,ge){C=gl.Replace;let ve=Sc(te.location,L,ge);y=R();let le=zd(ve,y),Te=te.createHref(ve);M.replaceState(le,"",Te),A&&T&&T({action:C,location:te.location,delta:0})}function ee(L){let ge=p.location.origin!=="null"?p.location.origin:p.location.href,ve=typeof L=="string"?L:kn(L);return ve=ve.replace(/ $/,"%20"),je(ge,"No window.location.(origin|href) available to create URL for href: "+ve),new URL(ve,ge)}let te={get action(){return C},get location(){return s(p,M)},listen(L){if(T)throw new Error("A history only accepts one active listener");return p.addEventListener(Rd,w),T=L,()=>{p.removeEventListener(Rd,w),T=null}},createHref(L){return r(p,L)},createURL:ee,encodeLocation(L){let ge=ee(L);return{pathname:ge.pathname,search:ge.search,hash:ge.hash}},push:Y,replace:ae,go(L){return M.go(L)}};return te}var Cd;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Cd||(Cd={}));function Yg(s,r,h){return h===void 0&&(h="/"),Vg(s,r,h)}function Vg(s,r,h,u){let p=typeof r=="string"?Ma(r):r,A=Mc(p.pathname||"/",h);if(A==null)return null;let M=Xd(s);Qg(M);let C=null;for(let T=0;C==null&&T<M.length;++T){let y=tp(A);C=Pg(M[T],y)}return C}function Xd(s,r,h,u){r===void 0&&(r=[]),h===void 0&&(h=[]),u===void 0&&(u="");let p=(A,M,C)=>{let T={relativePath:C===void 0?A.path||"":C,caseSensitive:A.caseSensitive===!0,childrenIndex:M,route:A};T.relativePath.startsWith("/")&&(je(T.relativePath.startsWith(u),'Absolute route path "'+T.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),T.relativePath=T.relativePath.slice(u.length));let y=pl([u,T.relativePath]),R=h.concat(T);A.children&&A.children.length>0&&(je(A.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Xd(A.children,r,R,y)),!(A.path==null&&!A.index)&&r.push({path:y,score:Fg(y,A.index),routesMeta:R})};return s.forEach((A,M)=>{var C;if(A.path===""||!((C=A.path)!=null&&C.includes("?")))p(A,M);else for(let T of Zd(A.path))p(A,M,T)}),r}function Zd(s){let r=s.split("/");if(r.length===0)return[];let[h,...u]=r,p=h.endsWith("?"),A=h.replace(/\?$/,"");if(u.length===0)return p?[A,""]:[A];let M=Zd(u.join("/")),C=[];return C.push(...M.map(T=>T===""?A:[A,T].join("/"))),p&&C.push(...M),C.map(T=>s.startsWith("/")&&T===""?"/":T)}function Qg(s){s.sort((r,h)=>r.score!==h.score?h.score-r.score:$g(r.routesMeta.map(u=>u.childrenIndex),h.routesMeta.map(u=>u.childrenIndex)))}const Xg=/^:[\w-]+$/,Zg=3,Kg=2,kg=1,Jg=10,Wg=-2,wd=s=>s==="*";function Fg(s,r){let h=s.split("/"),u=h.length;return h.some(wd)&&(u+=Wg),r&&(u+=Kg),h.filter(p=>!wd(p)).reduce((p,A)=>p+(Xg.test(A)?Zg:A===""?kg:Jg),u)}function $g(s,r){return s.length===r.length&&s.slice(0,-1).every((u,p)=>u===r[p])?s[s.length-1]-r[r.length-1]:0}function Pg(s,r,h){let{routesMeta:u}=s,p={},A="/",M=[];for(let C=0;C<u.length;++C){let T=u[C],y=C===u.length-1,R=A==="/"?r:r.slice(A.length)||"/",w=Ig({path:T.relativePath,caseSensitive:T.caseSensitive,end:y},R),Y=T.route;if(!w)return null;Object.assign(p,w.params),M.push({params:p,pathname:pl([A,w.pathname]),pathnameBase:np(pl([A,w.pathnameBase])),route:Y}),w.pathnameBase!=="/"&&(A=pl([A,w.pathnameBase]))}return M}function Ig(s,r){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[h,u]=ep(s.path,s.caseSensitive,s.end),p=r.match(h);if(!p)return null;let A=p[0],M=A.replace(/(.)\/+$/,"$1"),C=p.slice(1);return{params:u.reduce((y,R,w)=>{let{paramName:Y,isOptional:ae}=R;if(Y==="*"){let te=C[w]||"";M=A.slice(0,A.length-te.length).replace(/(.)\/+$/,"$1")}const ee=C[w];return ae&&!ee?y[Y]=void 0:y[Y]=(ee||"").replace(/%2F/g,"/"),y},{}),pathname:A,pathnameBase:M,pattern:s}}function ep(s,r,h){r===void 0&&(r=!1),h===void 0&&(h=!0),Qd(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let u=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(M,C,T)=>(u.push({paramName:C,isOptional:T!=null}),T?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(u.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):h?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,r?void 0:"i"),u]}function tp(s){try{return s.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Qd(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),s}}function Mc(s,r){if(r==="/")return s;if(!s.toLowerCase().startsWith(r.toLowerCase()))return null;let h=r.endsWith("/")?r.length-1:r.length,u=s.charAt(h);return u&&u!=="/"?null:s.slice(h)||"/"}function lp(s,r){r===void 0&&(r="/");let{pathname:h,search:u="",hash:p=""}=typeof s=="string"?Ma(s):s;return{pathname:h?h.startsWith("/")?h:ap(h,r):r,search:op(u),hash:sp(p)}}function ap(s,r){let h=r.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?h.length>1&&h.pop():p!=="."&&h.push(p)}),h.length>1?h.join("/"):"/"}function xc(s,r,h,u){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+h+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ip(s){return s.filter((r,h)=>h===0||r.route.path&&r.route.path.length>0)}function Kd(s,r){let h=ip(s);return r?h.map((u,p)=>p===h.length-1?u.pathname:u.pathnameBase):h.map(u=>u.pathnameBase)}function kd(s,r,h,u){u===void 0&&(u=!1);let p;typeof s=="string"?p=Ma(s):(p=Ni({},s),je(!p.pathname||!p.pathname.includes("?"),xc("?","pathname","search",p)),je(!p.pathname||!p.pathname.includes("#"),xc("#","pathname","hash",p)),je(!p.search||!p.search.includes("#"),xc("#","search","hash",p)));let A=s===""||p.pathname==="",M=A?"/":p.pathname,C;if(M==null)C=h;else{let w=r.length-1;if(!u&&M.startsWith("..")){let Y=M.split("/");for(;Y[0]==="..";)Y.shift(),w-=1;p.pathname=Y.join("/")}C=w>=0?r[w]:"/"}let T=lp(p,C),y=M&&M!=="/"&&M.endsWith("/"),R=(A||M===".")&&h.endsWith("/");return!T.pathname.endsWith("/")&&(y||R)&&(T.pathname+="/"),T}const pl=s=>s.join("/").replace(/\/\/+/g,"/"),np=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),op=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,sp=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function cp(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Jd=["post","put","patch","delete"];new Set(Jd);const up=["get",...Jd];new Set(up);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(s){for(var r=1;r<arguments.length;r++){var h=arguments[r];for(var u in h)Object.prototype.hasOwnProperty.call(h,u)&&(s[u]=h[u])}return s},Oi.apply(this,arguments)}const Nc=D.createContext(null),rp=D.createContext(null),ql=D.createContext(null),Fn=D.createContext(null),vl=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Wd=D.createContext(null);function fp(s,r){let{relative:h}=r===void 0?{}:r;ji()||je(!1);let{basename:u,navigator:p}=D.useContext(ql),{hash:A,pathname:M,search:C}=Pd(s,{relative:h}),T=M;return u!=="/"&&(T=M==="/"?u:pl([u,M])),p.createHref({pathname:T,search:C,hash:A})}function ji(){return D.useContext(Fn)!=null}function $n(){return ji()||je(!1),D.useContext(Fn).location}function Fd(s){D.useContext(ql).static||D.useLayoutEffect(s)}function $d(){let{isDataRoute:s}=D.useContext(vl);return s?Mp():dp()}function dp(){ji()||je(!1);let s=D.useContext(Nc),{basename:r,future:h,navigator:u}=D.useContext(ql),{matches:p}=D.useContext(vl),{pathname:A}=$n(),M=JSON.stringify(Kd(p,h.v7_relativeSplatPath)),C=D.useRef(!1);return Fd(()=>{C.current=!0}),D.useCallback(function(y,R){if(R===void 0&&(R={}),!C.current)return;if(typeof y=="number"){u.go(y);return}let w=kd(y,JSON.parse(M),A,R.relative==="path");s==null&&r!=="/"&&(w.pathname=w.pathname==="/"?r:pl([r,w.pathname])),(R.replace?u.replace:u.push)(w,R.state,R)},[r,u,M,A,s])}function hp(){let{matches:s}=D.useContext(vl),r=s[s.length-1];return r?r.params:{}}function Pd(s,r){let{relative:h}=r===void 0?{}:r,{future:u}=D.useContext(ql),{matches:p}=D.useContext(vl),{pathname:A}=$n(),M=JSON.stringify(Kd(p,u.v7_relativeSplatPath));return D.useMemo(()=>kd(s,JSON.parse(M),A,h==="path"),[s,M,A,h])}function mp(s,r){return gp(s,r)}function gp(s,r,h,u){ji()||je(!1);let{navigator:p}=D.useContext(ql),{matches:A}=D.useContext(vl),M=A[A.length-1],C=M?M.params:{};M&&M.pathname;let T=M?M.pathnameBase:"/";M&&M.route;let y=$n(),R;if(r){var w;let L=typeof r=="string"?Ma(r):r;T==="/"||(w=L.pathname)!=null&&w.startsWith(T)||je(!1),R=L}else R=y;let Y=R.pathname||"/",ae=Y;if(T!=="/"){let L=T.replace(/^\//,"").split("/");ae="/"+Y.replace(/^\//,"").split("/").slice(L.length).join("/")}let ee=Yg(s,{pathname:ae}),te=xp(ee&&ee.map(L=>Object.assign({},L,{params:Object.assign({},C,L.params),pathname:pl([T,p.encodeLocation?p.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?T:pl([T,p.encodeLocation?p.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),A,h,u);return r&&te?D.createElement(Fn.Provider,{value:{location:Oi({pathname:"/",search:"",hash:"",state:null,key:"default"},R),navigationType:gl.Pop}},te):te}function pp(){let s=Ap(),r=cp(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),h=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},r),h?D.createElement("pre",{style:p},h):null,null)}const vp=D.createElement(pp,null);class yp extends D.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,h){return h.location!==r.location||h.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:h.error,location:h.location,revalidation:r.revalidation||h.revalidation}}componentDidCatch(r,h){console.error("React Router caught the following error during render",r,h)}render(){return this.state.error!==void 0?D.createElement(vl.Provider,{value:this.props.routeContext},D.createElement(Wd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bp(s){let{routeContext:r,match:h,children:u}=s,p=D.useContext(Nc);return p&&p.static&&p.staticContext&&(h.route.errorElement||h.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=h.route.id),D.createElement(vl.Provider,{value:r},u)}function xp(s,r,h,u){var p;if(r===void 0&&(r=[]),h===void 0&&(h=null),u===void 0&&(u=null),s==null){var A;if(!h)return null;if(h.errors)s=h.matches;else if((A=u)!=null&&A.v7_partialHydration&&r.length===0&&!h.initialized&&h.matches.length>0)s=h.matches;else return null}let M=s,C=(p=h)==null?void 0:p.errors;if(C!=null){let R=M.findIndex(w=>w.route.id&&C?.[w.route.id]!==void 0);R>=0||je(!1),M=M.slice(0,Math.min(M.length,R+1))}let T=!1,y=-1;if(h&&u&&u.v7_partialHydration)for(let R=0;R<M.length;R++){let w=M[R];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=R),w.route.id){let{loaderData:Y,errors:ae}=h,ee=w.route.loader&&Y[w.route.id]===void 0&&(!ae||ae[w.route.id]===void 0);if(w.route.lazy||ee){T=!0,y>=0?M=M.slice(0,y+1):M=[M[0]];break}}}return M.reduceRight((R,w,Y)=>{let ae,ee=!1,te=null,L=null;h&&(ae=C&&w.route.id?C[w.route.id]:void 0,te=w.route.errorElement||vp,T&&(y<0&&Y===0?(Np("route-fallback"),ee=!0,L=null):y===Y&&(ee=!0,L=w.route.hydrateFallbackElement||null)));let ge=r.concat(M.slice(0,Y+1)),ve=()=>{let le;return ae?le=te:ee?le=L:w.route.Component?le=D.createElement(w.route.Component,null):w.route.element?le=w.route.element:le=R,D.createElement(bp,{match:w,routeContext:{outlet:R,matches:ge,isDataRoute:h!=null},children:le})};return h&&(w.route.ErrorBoundary||w.route.errorElement||Y===0)?D.createElement(yp,{location:h.location,revalidation:h.revalidation,component:te,error:ae,children:ve(),routeContext:{outlet:null,matches:ge,isDataRoute:!0}}):ve()},null)}var Id=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Id||{}),eh=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(eh||{});function Sp(s){let r=D.useContext(Nc);return r||je(!1),r}function Ep(s){let r=D.useContext(rp);return r||je(!1),r}function Tp(s){let r=D.useContext(vl);return r||je(!1),r}function th(s){let r=Tp(),h=r.matches[r.matches.length-1];return h.route.id||je(!1),h.route.id}function Ap(){var s;let r=D.useContext(Wd),h=Ep(),u=th();return r!==void 0?r:(s=h.errors)==null?void 0:s[u]}function Mp(){let{router:s}=Sp(Id.UseNavigateStable),r=th(eh.UseNavigateStable),h=D.useRef(!1);return Fd(()=>{h.current=!0}),D.useCallback(function(p,A){A===void 0&&(A={}),h.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,Oi({fromRouteId:r},A)))},[s,r])}const Dd={};function Np(s,r,h){Dd[s]||(Dd[s]=!0)}function Op(s,r){s?.v7_startTransition,s?.v7_relativeSplatPath}function Mi(s){je(!1)}function jp(s){let{basename:r="/",children:h=null,location:u,navigationType:p=gl.Pop,navigator:A,static:M=!1,future:C}=s;ji()&&je(!1);let T=r.replace(/^\/*/,"/"),y=D.useMemo(()=>({basename:T,navigator:A,static:M,future:Oi({v7_relativeSplatPath:!1},C)}),[T,C,A,M]);typeof u=="string"&&(u=Ma(u));let{pathname:R="/",search:w="",hash:Y="",state:ae=null,key:ee="default"}=u,te=D.useMemo(()=>{let L=Mc(R,T);return L==null?null:{location:{pathname:L,search:w,hash:Y,state:ae,key:ee},navigationType:p}},[T,R,w,Y,ae,ee,p]);return te==null?null:D.createElement(ql.Provider,{value:y},D.createElement(Fn.Provider,{children:h,value:te}))}function _p(s){let{children:r,location:h}=s;return mp(Ec(r),h)}new Promise(()=>{});function Ec(s,r){r===void 0&&(r=[]);let h=[];return D.Children.forEach(s,(u,p)=>{if(!D.isValidElement(u))return;let A=[...r,p];if(u.type===D.Fragment){h.push.apply(h,Ec(u.props.children,A));return}u.type!==Mi&&je(!1),!u.props.index||!u.props.children||je(!1);let M={id:u.props.id||A.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(M.children=Ec(u.props.children,A)),h.push(M)}),h}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tc(){return Tc=Object.assign?Object.assign.bind():function(s){for(var r=1;r<arguments.length;r++){var h=arguments[r];for(var u in h)Object.prototype.hasOwnProperty.call(h,u)&&(s[u]=h[u])}return s},Tc.apply(this,arguments)}function Rp(s,r){if(s==null)return{};var h={},u=Object.keys(s),p,A;for(A=0;A<u.length;A++)p=u[A],!(r.indexOf(p)>=0)&&(h[p]=s[p]);return h}function zp(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Cp(s,r){return s.button===0&&(!r||r==="_self")&&!zp(s)}const wp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dp="6";try{window.__reactRouterVersion=Dp}catch{}const Up="startTransition",Ud=Rg[Up];function Hp(s){let{basename:r,children:h,future:u,window:p}=s,A=D.useRef();A.current==null&&(A.current=qg({window:p,v5Compat:!0}));let M=A.current,[C,T]=D.useState({action:M.action,location:M.location}),{v7_startTransition:y}=u||{},R=D.useCallback(w=>{y&&Ud?Ud(()=>T(w)):T(w)},[T,y]);return D.useLayoutEffect(()=>M.listen(R),[M,R]),D.useEffect(()=>Op(u),[u]),D.createElement(jp,{basename:r,children:h,location:C.location,navigationType:C.action,navigator:M,future:u})}const Bp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lp=D.forwardRef(function(r,h){let{onClick:u,relative:p,reloadDocument:A,replace:M,state:C,target:T,to:y,preventScrollReset:R,viewTransition:w}=r,Y=Rp(r,wp),{basename:ae}=D.useContext(ql),ee,te=!1;if(typeof y=="string"&&qp.test(y)&&(ee=y,Bp))try{let le=new URL(window.location.href),Te=y.startsWith("//")?new URL(le.protocol+y):new URL(y),W=Mc(Te.pathname,ae);Te.origin===le.origin&&W!=null?y=W+Te.search+Te.hash:te=!0}catch{}let L=fp(y,{relative:p}),ge=Gp(y,{replace:M,state:C,target:T,preventScrollReset:R,relative:p,viewTransition:w});function ve(le){u&&u(le),le.defaultPrevented||ge(le)}return D.createElement("a",Tc({},Y,{href:ee||L,onClick:te||A?u:ve,ref:h,target:T}))});var Hd;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Hd||(Hd={}));var Bd;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Bd||(Bd={}));function Gp(s,r){let{target:h,replace:u,state:p,preventScrollReset:A,relative:M,viewTransition:C}=r===void 0?{}:r,T=$d(),y=$n(),R=Pd(s,{relative:M});return D.useCallback(w=>{if(Cp(w,h)){w.preventDefault();let Y=u!==void 0?u:kn(y)===kn(R);T(s,{replace:Y,state:p,preventScrollReset:A,relative:M,viewTransition:C})}},[y,T,R,u,p,h,s,A,M,C])}const Yp=()=>{const[s,r]=D.useState(!1),[h,u]=D.useState(null),[,p]=D.useState(window.innerWidth<=768),A=$d();D.useEffect(()=>{const T=()=>p(window.innerWidth<=768);return window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);const M=(T,y=!1)=>{if(y)A(T);else{const R=document.getElementById(T);R&&R.scrollIntoView({behavior:"smooth"})}r(!1),u(null)},C=T=>{u(h===T?null:T)};return f.jsx("header",{className:"site-nav",children:f.jsxs("div",{className:"nav-container",children:[f.jsx("div",{className:"brand",children:"BiologyLover"}),f.jsxs("div",{className:`hamburger ${s?"open":""}`,onClick:()=>r(!s),children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),f.jsx("nav",{className:`nav-menu ${s?"show":""}`,children:f.jsxs("ul",{children:[f.jsx("li",{onClick:()=>M("/",!0),children:"Home"}),f.jsxs("li",{className:"dropdown",onClick:()=>C("courses"),children:["Courses ▾",f.jsxs("ul",{className:`dropdown-menu ${h==="courses"?"show":""}`,children:[f.jsx("li",{onClick:()=>M("physics"),children:"Physics"}),f.jsx("li",{onClick:()=>M("chemistry"),children:"Chemistry"}),f.jsx("li",{onClick:()=>M("math"),children:"Math"}),f.jsx("li",{onClick:()=>M("biology"),children:"Biology"}),f.jsx("li",{onClick:()=>M("jee"),children:"JEE"}),f.jsx("li",{onClick:()=>M("neet"),children:"NEET"}),f.jsx("li",{onClick:()=>M("school"),children:"School"}),f.jsx("li",{onClick:()=>M("combo"),children:"Combo Packages"})]})]}),f.jsx("li",{onClick:()=>M("/blogs",!0),children:"Blogs"}),f.jsxs("li",{className:"dropdown",onClick:()=>C("more"),children:["More ▾",f.jsxs("ul",{className:`dropdown-menu ${h==="more"?"show":""}`,children:[f.jsx("li",{onClick:()=>M("faq"),children:"FAQs"}),f.jsx("li",{onClick:()=>M("resources"),children:"Resources"}),f.jsx("li",{onClick:()=>M("help"),children:"Help & Support"}),f.jsx("li",{onClick:()=>M("policies"),children:"Policies"})]})]}),f.jsx("li",{onClick:()=>M("/about",!0),children:"About Us"}),f.jsx("li",{onClick:()=>M("contact"),children:"Contact"})]})})]})})},Vp=""+new URL("video-C3W3n9fY.mp4",import.meta.url).href,Qp=()=>f.jsxs("section",{id:"home",className:"landing-section",children:[f.jsx("video",{className:"bg-video",src:Vp,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),f.jsx("div",{className:"overlay"}),f.jsxs("div",{className:"landing-content",children:[f.jsx("h1",{className:"title",children:"BiologyLover"}),f.jsx("p",{className:"tagline",children:"Unlock the secrets of life — Learn, Explore & Achieve with us."}),f.jsxs("div",{className:"cta-buttons",children:[f.jsx("a",{href:"#courses",className:"btn-primary",children:"Start Learning"}),f.jsx("a",{href:"https://t.me/biology_lover_02",target:"_blank",className:"btn-secondary",children:"Join Community"})]})]})]}),Xp=()=>f.jsxs("section",{id:"courses",className:"courses-section",children:[f.jsx("h2",{children:"Our Courses"}),f.jsx("div",{className:"coming-soon-wrap",children:f.jsx("div",{className:"marquee",children:f.jsx("span",{children:"COMING SOON   COMING SOON   COMING SOON   COMING SOON   COMING SOON   COMING SOON   COMING SOON  COMING SOON  COMING SOON   COMING SOON  "})})})]});var lh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qd=Qt.createContext&&Qt.createContext(lh),Zp=["attr","size","title"];function Kp(s,r){if(s==null)return{};var h=kp(s,r),u,p;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(s);for(p=0;p<A.length;p++)u=A[p],!(r.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(h[u]=s[u])}return h}function kp(s,r){if(s==null)return{};var h={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(r.indexOf(u)>=0)continue;h[u]=s[u]}return h}function Jn(){return Jn=Object.assign?Object.assign.bind():function(s){for(var r=1;r<arguments.length;r++){var h=arguments[r];for(var u in h)Object.prototype.hasOwnProperty.call(h,u)&&(s[u]=h[u])}return s},Jn.apply(this,arguments)}function Ld(s,r){var h=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);r&&(u=u.filter(function(p){return Object.getOwnPropertyDescriptor(s,p).enumerable})),h.push.apply(h,u)}return h}function Wn(s){for(var r=1;r<arguments.length;r++){var h=arguments[r]!=null?arguments[r]:{};r%2?Ld(Object(h),!0).forEach(function(u){Jp(s,u,h[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(h)):Ld(Object(h)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(h,u))})}return s}function Jp(s,r,h){return r=Wp(r),r in s?Object.defineProperty(s,r,{value:h,enumerable:!0,configurable:!0,writable:!0}):s[r]=h,s}function Wp(s){var r=Fp(s,"string");return typeof r=="symbol"?r:r+""}function Fp(s,r){if(typeof s!="object"||!s)return s;var h=s[Symbol.toPrimitive];if(h!==void 0){var u=h.call(s,r);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(s)}function ah(s){return s&&s.map((r,h)=>Qt.createElement(r.tag,Wn({key:h},r.attr),ah(r.child)))}function _i(s){return r=>Qt.createElement($p,Jn({attr:Wn({},s.attr)},r),ah(s.child))}function $p(s){var r=h=>{var{attr:u,size:p,title:A}=s,M=Kp(s,Zp),C=p||h.size||"1em",T;return h.className&&(T=h.className),s.className&&(T=(T?T+" ":"")+s.className),Qt.createElement("svg",Jn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},h.attr,u,M,{className:T,style:Wn(Wn({color:s.color||h.color},h.style),s.style),height:C,width:C,xmlns:"http://www.w3.org/2000/svg"}),A&&Qt.createElement("title",null,A),s.children)};return qd!==void 0?Qt.createElement(qd.Consumer,null,h=>r(h)):r(lh)}function Pp(s){return _i({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(s)}function Ip(s){return _i({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(s)}function ev(s){return _i({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(s)}function tv(s){return _i({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"},child:[]}]})(s)}function lv(s){return _i({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(s)}const av="🔬 Biologylover",iv=()=>f.jsx("footer",{className:"hostbooks-footer",children:f.jsxs("div",{className:"footer-columns-container",children:[f.jsxs("div",{className:"footer-col footer-col-info",children:[f.jsxs("div",{className:"logo-section",children:[f.jsx("div",{className:"footer-logo",children:av}),f.jsx("p",{className:"logo-tagline",children:"Learning the Language of Life"})]}),f.jsx("p",{className:"company-description",children:"@biologylover provides comprehensive resources for students passionate about science. We offer engaging video lessons, detailed notes, and practice tests for NEET, JEE, and school syllabus."}),f.jsxs("div",{className:"location-flag",children:[f.jsx("span",{className:"flag-icon flag-icon-in"})," INDIA"]}),f.jsxs("div",{className:"contact-item",children:[f.jsx("span",{className:"icon-map",children:"📍"}),f.jsx("p",{children:"Virtual Office, Educating Minds Globally."})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx("span",{className:"icon-mail",children:"✉️"}),f.jsx("a",{href:"mailto:biologylover02@gmail.com",children:"biologylover02@gmail.com"})]}),f.jsxs("div",{className:"contact-item",children:[f.jsx("span",{className:"icon-phone",children:"📞"}),f.jsx("a",{href:"tel:+911234567890",children:"+91 12345 67890"})]}),f.jsxs("div",{className:"footer-social-icons",children:[f.jsx("a",{href:"https://www.youtube.com/@biology_lover_02",target:"_blank",rel:"noopener noreferrer",children:f.jsx(lv,{})}),f.jsx("a",{href:"https://www.instagram.com/biology_lover_02/#",target:"_blank",rel:"noopener noreferrer",children:f.jsx(Ip,{})}),f.jsx("a",{href:"https://facebook.com/",target:"_blank",rel:"noopener noreferrer",children:f.jsx(Pp,{})}),f.jsx("a",{href:"https://linkedin.com/",target:"_blank",rel:"noopener noreferrer",children:f.jsx(ev,{})}),f.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:f.jsx(tv,{})})]})]}),f.jsxs("div",{className:"footer-col footer-col-links",children:[f.jsx("h3",{children:"Our Courses"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#neet",children:"NEET Preparation"})}),f.jsx("li",{children:f.jsx("a",{href:"#jee",children:"JEE Main (Physics & Chemistry)"})}),f.jsx("li",{children:f.jsx("a",{href:"#class10",children:"Class 10th Science"})}),f.jsx("li",{children:f.jsx("a",{href:"#class12",children:"Class 12th Biology"})}),f.jsx("li",{children:f.jsx("a",{href:"#zoology",children:"Advanced Zoology"})}),f.jsx("li",{children:f.jsx("a",{href:"#botany",children:"Advanced Botany"})}),f.jsx("li",{children:f.jsx("a",{href:"#microbiology",children:"Microbiology Basics"})}),f.jsx("li",{children:f.jsx("a",{href:"#human-physio",children:"Human Physiology"})})]})]}),f.jsxs("div",{className:"footer-col footer-col-links",children:[f.jsx("h3",{children:"Study Resources"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#about",children:"About Our Mentors"})}),f.jsx("li",{children:f.jsx("a",{href:"#blog",children:"Study Notes & Blog"})}),f.jsx("li",{children:f.jsx("a",{href:"#tests",children:"Online Practice Tests"})}),f.jsx("li",{children:f.jsx("a",{href:"#faqs",children:"FAQs & Support"})}),f.jsx("li",{children:f.jsx("a",{href:"#downloads",children:"Free Downloads"})}),f.jsx("li",{children:f.jsx("a",{href:"#contact-us",children:"Contact Us"})})]})]}),f.jsxs("div",{className:"footer-col footer-col-links",children:[f.jsx("h3",{children:"Legal & Connect"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#terms",children:"Terms of Service"})}),f.jsx("li",{children:f.jsx("a",{href:"#privacy",children:"Privacy Policy"})}),f.jsx("li",{children:f.jsx("a",{href:"#disclaimer",children:"Disclaimer"})}),f.jsx("li",{children:f.jsx("a",{href:"#careers",children:"Join Our Team"})}),f.jsx("li",{children:f.jsx("a",{href:"#sitemap",children:"Website Map"})})]})]})]})}),nv=()=>f.jsx("footer",{className:"site-footer",children:f.jsx("div",{children:"© 2025 Your Website. All rights reserved."})}),ov=()=>{const[s,r]=D.useState(!0);D.useEffect(()=>{const u=()=>r(window.scrollY<50);return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const h=()=>{const u=s?"courses":"home",p=document.getElementById(u);p&&p.scrollIntoView({behavior:"smooth"})};return f.jsxs("div",{className:"scroll-container",children:[f.jsx("button",{className:`scroll-btn ${s?"down":"up"}`,onClick:h,"aria-label":"scroll"}),f.jsx("div",{className:"scroll-label",children:s?"Scroll Down":"Scroll Up"})]})},sv=""+new URL("yogesh-qC4SvRit.jpeg",import.meta.url).href,cv=""+new URL("pooja-CqiWx7Hy.jpeg",import.meta.url).href,uv=""+new URL("jyoti-COMu4RF-.jpeg",import.meta.url).href,rv=""+new URL("abhishek-BCZQh7rd.jpeg",import.meta.url).href,fv=[{name:"Yogesh Nayak",role:"Business & Learning Strategist",img:sv,intro:"Handles business operations, sponsorships, and social media while also contributing to teaching and content creation. Passionate about building engaging learning experiences for students.",socials:{instagram:"https://www.instagram.com/yn_yogesh_02",facebook:"#",linkedin:"#"}},{name:"Pooja Nayak",role:"Biology Educator",img:cv,intro:"Passionate educator simplifying complex concepts and guiding students to achieve academic excellence. Specializes in creating engaging video lectures and interactive learning experiences.",socials:{instagram:"https://www.instagram.com/biology_lover_02",facebook:"#",linkedin:"#"}},{name:"Jyoti Nayak",role:"Educator & Content Creator",img:uv,intro:"Creative educator sharing engaging biology posts and short tricks videos to make learning fun and easy for students. Passionate about simplifying complex concepts and helping students excel in their studies.",socials:{instagram:"https://www.instagram.com/biology_lover_02",facebook:"#",linkedin:"#"}},{name:"Abhishek Nayak",role:"Video Editor & Social Media Manager",img:rv,intro:"Skilled video editor managing YouTube and Instagram content. Passionate about creating engaging and high-quality videos that enhance learning and audience experience.",socials:{instagram:"https://www.instagram.com/biology_lover_02",facebook:"#",linkedin:"#"}}],dv=()=>f.jsxs("section",{id:"team",className:"team-section",children:[f.jsx("h2",{className:"team-title",children:"Our Team"}),f.jsx("div",{className:"team-container",children:fv.map((s,r)=>f.jsx("div",{className:"team-card",children:f.jsxs("div",{className:"card-inner",children:[f.jsxs("div",{className:"card-front",children:[f.jsx("img",{src:s.img,alt:s.name}),f.jsx("h3",{children:s.name}),f.jsx("p",{children:s.role})]}),f.jsxs("div",{className:"card-back",children:[f.jsx("p",{children:s.intro}),f.jsxs("div",{className:"social-icons",children:[f.jsx("a",{href:s.socials.instagram,target:"_blank",rel:"noreferrer",children:f.jsx("i",{className:"fab fa-instagram"})}),f.jsx("a",{href:s.socials.facebook,target:"_blank",rel:"noreferrer",children:f.jsx("i",{className:"fab fa-facebook"})}),f.jsx("a",{href:s.socials.linkedin,target:"_blank",rel:"noreferrer",children:f.jsx("i",{className:"fab fa-linkedin"})})]})]})]})},r))})]}),hv=""+new URL("biology-CaqzG-jE.png",import.meta.url).href,mv=""+new URL("physics-Cm1Ehwvo.png",import.meta.url).href,gv=""+new URL("Chemistry.-C3FNyH9g.png",import.meta.url).href,pv=""+new URL("math-Bq0yjqpo.png",import.meta.url).href,vv=""+new URL("backgg-cuWC63So.mp4",import.meta.url).href,Kn=[{id:1,title:"Biology Mastery",company:"AI Coach",image:hv,button:"Start Practice"},{id:2,title:"Physics Crash Test",company:"AI Mentor",image:mv,button:"Start Practice"},{id:3,title:"Chemistry Challenge",company:"AI Tutor",image:gv,button:"Start Practice"},{id:4,title:"Math Challenge",company:"AI Tutor",image:pv,button:"Start Practice"}];function yv(){const[s,r]=D.useState(0),h=()=>r(p=>(p+1)%Kn.length),u=()=>r(p=>(p-1+Kn.length)%Kn.length);return f.jsxs("section",{className:"ai-prep-section",children:[f.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,className:"bg-video",children:[f.jsx("source",{src:vv,type:"video/mp4"}),"Your browser does not support the video tag."]}),f.jsxs("div",{className:"ai-prep-content",children:[f.jsxs("div",{className:"ai-prep-header",children:[f.jsx("h2",{children:"Entrance Exam Prep with AI"}),f.jsx("p",{children:"Practice, analyze, and improve your performance with smart AI Tutor."})]}),f.jsxs("div",{className:"ai-prep-carousel",children:[f.jsx("button",{className:"arrow left",onClick:u,children:"❮"}),f.jsx("div",{className:"card-container",children:Kn.map((p,A)=>f.jsx("div",{className:`ai-card ${A===s?"active":""}`,style:{backgroundImage:`url(${p.image})`},children:f.jsx("div",{className:"overlay",children:f.jsx("button",{children:p.button})})},p.id))}),f.jsx("button",{className:"arrow right",onClick:h,children:"❯"})]})]})]})}const bv=()=>f.jsxs("div",{className:"aboutus-container",children:[f.jsxs("div",{className:"hero-section",children:[f.jsx("h1",{children:"About Us"}),f.jsx("div",{className:"hero-decoration"})]}),f.jsxs("div",{className:"content-section",children:[f.jsxs("p",{children:["Welcome to ",f.jsx("span",{className:"highlight",children:"BiologyLover"}),"! We are a passionate team dedicated to revolutionizing how students learn biology and other sciences. Through our high-quality study materials, interactive flashcards, engaging quizzes, and comprehensive video tutorials, we empower learners to achieve academic excellence with confidence and curiosity."]}),f.jsx("p",{children:"Our mission is to make science education fun, accessible, and effective for students of all levels—from high school enthusiasts to aspiring professionals preparing for competitive exams like JEE and NEET. Whether you're diving into cellular biology, exploring ecosystems, or mastering genetics, our resources are designed to spark joy in learning and build a strong foundation for your future."}),f.jsxs("div",{className:"mission-vision",children:[f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Our Vision"}),f.jsx("p",{children:"To inspire a global community of lifelong science lovers who innovate and solve the world's challenges through biological sciences."})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Our Journey"}),f.jsx("p",{children:"Founded by educators and science enthusiasts, we've grown from a small study group to a thriving platform serving millions worldwide."})]})]}),f.jsxs("div",{className:"social-section",children:[f.jsx("h3",{children:"Join Our Community"}),f.jsxs("p",{children:["Follow us on social media for daily tips, live sessions, and exclusive content! Our Instagram ",f.jsx("span",{className:"highlight",children:"@biology_lover_02"})," boasts over 1 million followers, where we share bite-sized biology facts, memes, and study hacks. On YouTube, our channel delivers in-depth tutorials, experiment walkthroughs, and exam prep strategies to help you ace your classes."]}),f.jsxs("div",{className:"social-links",children:[f.jsx("a",{href:"https://www.instagram.com/biology_lover_02/",target:"_blank",rel:"noopener noreferrer",className:"social-link instagram",children:"Instagram (1M+)"}),f.jsx("a",{href:"https://www.youtube.com/@biology_lover_02",target:"_blank",rel:"noopener noreferrer",className:"social-link youtube",children:"YouTube"})]})]})]})]}),xv=()=>{const s=[{id:"physics",title:"Physics",icon:"⚛️",gradient:"linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"},{id:"chemistry",title:"Chemistry",icon:"🧪",gradient:"linear-gradient(135deg, #f7971e 0%, #ffd200 100%)"},{id:"math",title:"Mathematics",icon:"📐",gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"},{id:"biology",title:"Biology",icon:"🧬",gradient:"linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)"}];return f.jsxs("div",{className:"blogs-container",children:[f.jsx("h1",{className:"blogs-title",children:"Explore PCMB Blogs"}),f.jsx("p",{className:"blogs-subtitle",children:"Discover detailed notes, tips, and guides for Physics, Chemistry, Maths & Biology."}),f.jsx("div",{className:"flash-cards-grid",children:s.map(r=>f.jsxs(Lp,{to:`/blog/${r.id}`,className:"flash-card",children:[f.jsx("div",{className:"card-icon",style:{background:r.gradient},children:r.icon}),f.jsx("h2",{className:"card-title",children:r.title}),f.jsx("p",{className:"card-desc",children:"Dive into fascinating concepts & ideas."})]},r.id))})]})},Sv=""+new URL("Displacement–Time Graph-Ct5XMKdu.png",import.meta.url).href,Ev=""+new URL("Velocity–Time Graph-C3YDP2KW.png",import.meta.url).href,Tv=""+new URL("Velocity vs Time graph-BJ2s8uoT.png",import.meta.url).href,Av=""+new URL("p1-CbD5WHcl.png",import.meta.url).href,Mv=""+new URL("p2-CRWNgIVD.png",import.meta.url).href,Nv=""+new URL("Force vs Accelerationf-BReJIwf2.png",import.meta.url).href,Ov=""+new URL("Newton's Third Law-Cg5QyaYR.png",import.meta.url).href,jv=""+new URL("Work-Energy Graph-B3ObyRRM.png",import.meta.url).href,_v=""+new URL("Power-Time Graph-DaGFpnQ-.png",import.meta.url).href,Rv=""+new URL("Momentum vs. Time-B5EpqBzd.png",import.meta.url).href,zv=""+new URL("Elastic and Inelastic Collisions-bE79j4fn.png",import.meta.url).href,Cv=""+new URL("Gravitation-Btlk7V9G.png",import.meta.url).href,Gd=""+new URL("Circular Motion Diagram-2TuyyAuW.png",import.meta.url).href,wv=""+new URL("Musical Instrument Waves-DMk7XyDC.png",import.meta.url).href,Dv=""+new URL("simple harmonic motion-DU9GI3OW.png",import.meta.url).href,Uv=""+new URL("ReflectionLight-Co0AcEbd.png",import.meta.url).href,Hv=""+new URL("Refractionlight-wKpWt1oT.png",import.meta.url).href,Bv=""+new URL("Thomson Plum-MQdrpL9v.png",import.meta.url).href,qv=""+new URL("Rutherford-C7ZHMvq5.png",import.meta.url).href,Lv=""+new URL("BohrModel-DwU3Xx9-.png",import.meta.url).href,Gv=""+new URL("Quantum Mechanical Model-Bfmr6T2x.png",import.meta.url).href,Yv=""+new URL("Atomic Spectra-DeN9sKt4.png",import.meta.url).href,Vv=""+new URL("humanrespiratorysystem-B2lfVx2N.jpg",import.meta.url).href,Qv=""+new URL("Human Digestive System-DMdYxTJJ.jpg",import.meta.url).href,Xv=""+new URL("Cell-2v2VNqSg.png",import.meta.url).href,Zv=()=>{const{subject:s}=hp(),[r,h]=D.useState(null),[u,p]=D.useState(""),[A,M]=D.useState(!0),C={physics:{title:"Physics",subtopics:[{id:"kinematics-theory",title:"Kinematics Theory",content:`
    <div class="content-section">
      <h2>📘 Introduction to Kinematics</h2>
      <p><strong>Kinematics</strong> is the branch of physics that deals with the <em>description of motion</em> without considering the forces that cause it. 
      It tells us <strong>how</strong> an object moves — its displacement, speed, velocity, and acceleration — but not <strong>why</strong> it moves.</p>

      <p>Kinematics is a fundamental part of <strong>mechanics</strong> and serves as the foundation for understanding dynamics, motion in one dimension, and projectile motion.</p>

      <hr />

      <h2>🧩 Key Concepts of Kinematics</h2>
      <div class="concept-card">
        <ul>
          <li><strong>Rest:</strong> An object is at rest if its position does not change with respect to its surroundings.</li>
          <li><strong>Motion:</strong> An object is said to be in motion if it changes its position with time relative to a reference point.</li>
          <li><strong>Reference Point:</strong> A fixed point with respect to which the position of an object is described.</li>
        </ul>
      </div>

      <div class="concept-card">
        <h3>Scalar and Vector Quantities</h3>
        <table class="table">
          <thead>
            <tr><th>Quantity</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>Distance</td><td>Scalar</td><td>Total path length covered by an object.</td></tr>
            <tr><td>Displacement</td><td>Vector</td><td>Shortest straight-line distance from initial to final position.</td></tr>
            <tr><td>Speed</td><td>Scalar</td><td>Rate of change of distance.</td></tr>
            <tr><td>Velocity</td><td>Vector</td><td>Rate of change of displacement.</td></tr>
            <tr><td>Acceleration</td><td>Vector</td><td>Rate of change of velocity with time.</td></tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>📊 Motion Along a Straight Line (1D Motion)</h2>
      <p>When an object moves in a straight path, all quantities can be represented along a single axis (usually the x-axis).</p>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A car moves from 0 m to 100 m east in 10 seconds.</p>
        <ul>
          <li><strong>Distance:</strong> 100 m</li>
          <li><strong>Displacement:</strong> 100 m (as motion is in a straight line)</li>
          <li><strong>Average Speed:</strong> 100 / 10 = 10 m/s</li>
          <li><strong>Average Velocity:</strong> 100 / 10 = 10 m/s east</li>
        </ul>
      </div>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>A person walks 3 m east and then 4 m north.</p>
        <p>Here, the motion is not in a straight line.</p>
        <p><strong>Distance</strong> = 3 + 4 = <strong>7 m</strong></p>
        <p><strong>Displacement</strong> = √(3² + 4²) = <strong>5 m</strong> (towards northeast)</p>
      </div>

      <hr />

      <h2>⚙️ Instantaneous & Average Quantities</h2>
      <ul>
        <li><strong>Average Velocity (v̄)</strong> = Total Displacement / Total Time</li>
        <li><strong>Instantaneous Velocity</strong> = Velocity of the object at a particular instant of time.</li>
        <li><strong>Average Acceleration</strong> = Change in velocity / Time interval</li>
        <li><strong>Instantaneous Acceleration</strong> = Acceleration at a specific instant.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Note:</strong> Acceleration can be <span class="highlight">positive</span> (speeding up) or <span class="highlight red">negative</span> (slowing down, also called retardation).</p>
      </div>

      <hr />

      <h2>📐 Graphical Representation of Motion</h2>
      <p>Motion can be represented graphically to easily interpret speed, velocity, and acceleration relationships.</p>

      <div class="image-container">
        <img src="${Sv}" alt="Displacement-Time Graph" />
        <p class="image-caption">Displacement-Time Graph showing uniform and non-uniform motion</p>
      </div>

      <h3>1️⃣ Distance-Time Graph</h3>
      <ul>
        <li>A straight line indicates <strong>uniform motion</strong>.</li>
        <li>A curved line indicates <strong>non-uniform motion</strong>.</li>
      </ul>

      <h3>2️⃣ Velocity-Time Graph</h3>
      <ul>
        <li>The slope of this graph gives <strong>acceleration</strong>.</li>
        <li>The area under the graph gives <strong>displacement</strong>.</li>
      </ul>

      <h3>3️⃣ Acceleration-Time Graph</h3>
      <ul>
        <li>The area under the acceleration-time graph gives <strong>change in velocity</strong>.</li>
      </ul>

      <div class="image-container">
        <img src="${Ev}" alt="Velocity-Time Graph" />
        <p class="image-caption">Velocity-Time graph showing acceleration and retardation phases</p>
      </div>

      <hr />

      <h2>📘 Equations of Motion (for Uniform Acceleration)</h2>
      <p>For an object moving with uniform acceleration, three important equations relate displacement (s), initial velocity (u), final velocity (v), acceleration (a), and time (t):</p>

      <div class="formula-section">
        <div class="formula-grid">
          <div class="formula-card">
            <code>v = u + at</code>
            <p>Final velocity after time t</p>
          </div>
          <div class="formula-card">
            <code>s = ut + ½at²</code>
            <p>Displacement after time t</p>
          </div>
          <div class="formula-card">
            <code>v² = u² + 2as</code>
            <p>Relates displacement, velocity, and acceleration</p>
          </div>
        </div>
      </div>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>A car starts from rest and accelerates at 2 m/s² for 5 seconds.</p>
        <ul>
          <li>Given: u = 0, a = 2 m/s², t = 5 s</li>
          <li><strong>v = u + at = 0 + (2×5) = 10 m/s</strong></li>
          <li><strong>s = ut + ½at² = 0 + ½(2×25) = 25 m</strong></li>
        </ul>
        <p><strong>Result:</strong> Final velocity = 10 m/s, Displacement = 25 m</p>
      </div>

      <hr />

      <h2>🎯 Real-Life Applications of Kinematics</h2>
      <ul>
        <li>Designing safe road curves and vehicle braking systems.</li>
        <li>Tracking projectiles in sports (football, cricket, basketball).</li>
        <li>Analyzing motion of satellites and planets.</li>
        <li>In robotics — for path and trajectory control.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Summary:</strong> Kinematics gives us the language and tools to describe all types of motion. 
        Whether it’s a car accelerating, a ball thrown in the air, or a planet orbiting — every motion follows these basic kinematic principles.</p>
      </div>
    </div>
  `},{id:"kinematics-formula",title:"Kinematics Formulas",content:`
    <div class="formula-page">
      <h2>📘 Kinematics Formulas Cheat Sheet</h2>
      
      <p>Kinematics is all about <strong>describing motion mathematically</strong>. These formulas help solve problems related to displacement, velocity, acceleration, and time for objects in motion. Understanding them deeply is essential for mastering physics.</p>
      
      <hr />

      <div class="formula-category">
        <h3>1️⃣ Basic Definitions</h3>
        <ul>
          <li>
            <strong>Average Velocity (v̄):</strong> 
            The ratio of total displacement to total time. 
            <code>v̄ = Δx / Δt</code>
            <div class="example-box">
              <p><strong>Example:</strong> A car moves 120 m east in 10 s. Find average velocity.</p>
              <p><strong>Solution:</strong> v̄ = Δx / Δt = 120 / 10 = <strong>12 m/s east</strong></p>
            </div>
          </li>
          <li>
            <strong>Instantaneous Velocity (v):</strong> 
            Velocity at a specific instant of time. 
            <code>v = dx/dt</code>
            <div class="example-box">
              <p><strong>Example:</strong> If x(t) = 5t², find instantaneous velocity at t = 3 s.</p>
              <p><strong>Solution:</strong> v = dx/dt = d(5t²)/dt = 10t → v(3) = 10×3 = <strong>30 m/s</strong></p>
            </div>
          </li>
          <li>
            <strong>Average Acceleration (ā):</strong> 
            Change in velocity over time interval. 
            <code>ā = Δv / Δt</code>
            <div class="example-box">
              <p><strong>Example:</strong> Velocity changes from 5 m/s to 25 m/s in 4 s. Find average acceleration.</p>
              <p><strong>Solution:</strong> ā = (25 - 5) / 4 = <strong>5 m/s²</strong></p>
            </div>
          </li>
          <li>
            <strong>Instantaneous Acceleration (a):</strong> 
            Acceleration at a specific instant. 
            <code>a = dv/dt</code>
            <div class="example-box">
              <p><strong>Example:</strong> If v(t) = 4t², find instantaneous acceleration at t = 2 s.</p>
              <p><strong>Solution:</strong> a = dv/dt = d(4t²)/dt = 8t → a(2) = 8×2 = <strong>16 m/s²</strong></p>
            </div>
          </li>
        </ul>
      </div>

      <hr />

      <div class="formula-category">
        <h3>2️⃣ Equations of Motion (Uniform Acceleration)</h3>
        <p>For objects moving with constant acceleration, the following equations connect <strong>displacement (s)</strong>, <strong>initial velocity (u)</strong>, <strong>final velocity (v)</strong>, <strong>acceleration (a)</strong>, and <strong>time (t)</strong>.</p>
        
        <div class="formula-list">
          <div class="formula-item">
            <code>v = u + at</code>
            <span>First equation: final velocity after time t</span>
            <div class="example-box">
              <p><strong>Example:</strong> A car starts from rest and accelerates at 3 m/s² for 5 s. Find final velocity.</p>
              <p><strong>Solution:</strong> v = u + at = 0 + 3×5 = <strong>15 m/s</strong></p>
            </div>
          </div>

          <div class="formula-item">
            <code>s = ut + ½at²</code>
            <span>Second equation: displacement after time t</span>
            <div class="example-box">
              <p><strong>Example:</strong> Using same car, find displacement after 5 s.</p>
              <p><strong>Solution:</strong> s = ut + ½at² = 0 + ½×3×25 = <strong>37.5 m</strong></p>
            </div>
          </div>

          <div class="formula-item">
            <code>v² = u² + 2as</code>
            <span>Third equation: relates displacement, velocity, and acceleration</span>
            <div class="example-box">
              <p><strong>Example:</strong> Check the final velocity using displacement s = 37.5 m.</p>
              <p><strong>Solution:</strong> v² = u² + 2as = 0 + 2×3×37.5 = 225 → v = <strong>15 m/s</strong></p>
            </div>
          </div>

          <div class="formula-item">
            <code>s = ½(u + v)t</code>
            <span>Displacement using average velocity</span>
            <div class="example-box">
              <p><strong>Example:</strong> Find displacement using u = 0, v = 15 m/s, t = 5 s.</p>
              <p><strong>Solution:</strong> s = ½(0 + 15)×5 = <strong>37.5 m</strong></p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div class="formula-category">
        <h3>3️⃣ Special Cases</h3>
        <ul>
          <li><strong>Free Fall:</strong> a = g, u = 0 (if dropped), s = ½gt²</li>
          <li><strong>Vertically Upward Motion:</strong> v = u - gt, s = ut - ½gt²</li>
        </ul>
        <div class="example-box">
          <p><strong>Example:</strong> A ball dropped from 20 m. Find time to hit ground.</p>
          <p><strong>Solution:</strong> s = ½gt² → 20 = 0.5×9.8×t² → t² ≈ 4.08 → t ≈ 2.02 s</p>
        </div>
      </div>

      <hr />

      <div class="formula-category">
        <h3>4️⃣ Graphical Analysis</h3>
        <p>Graphs provide a visual understanding of motion:</p>
        <ul>
          <li><strong>Distance-Time Graph:</strong> Slope = speed/velocity</li>
          <li><strong>Velocity-Time Graph:</strong> Slope = acceleration, Area = displacement</li>
          <li><strong>Acceleration-Time Graph:</strong> Area = change in velocity</li>
        </ul>
        <div class="image-container">
          <img src="${Tv}" alt="Velocity-Time Graph" />
          <p class="image-caption">Velocity-Time graph showing constant acceleration</p>
        </div>
      </div>

      <hr />

      <div class="formula-category">
        <h3>5️⃣ Step-by-Step Problem Solving Strategy</h3>
        <ol>
          <li>Identify known quantities: u, v, a, s, t</li>
          <li>Choose the appropriate formula based on what you need to find</li>
          <li>Substitute values carefully</li>
          <li>Check units for consistency</li>
          <li>Calculate step by step</li>
        </ol>

        <div class="example-box">
          <p><strong>Example:</strong> A car accelerates from 10 m/s to 25 m/s in 5 s. Find acceleration and distance traveled.</p>
          <p><strong>Step 1:</strong> Known: u=10, v=25, t=5, a=? s=?</p>
          <p><strong>Step 2:</strong> a = (v-u)/t = (25-10)/5 = 3 m/s²</p>
          <p><strong>Step 3:</strong> s = ut + ½at² = 10×5 + 0.5×3×25 = 50 + 37.5 = <strong>87.5 m</strong></p>
        </div>
      </div>

      <hr />

      <div class="formula-category">
        <h3>6️⃣ Common Mistakes to Avoid</h3>
        <ul>
          <li>Confusing displacement and distance</li>
          <li>Not keeping track of vector directions</li>
          <li>Using formulas for non-uniform acceleration</li>
          <li>Ignoring units (meters vs km, seconds vs hours)</li>
        </ul>
      </div>

      <hr />

      <div class="formula-category">
        <h3>7️⃣ Summary Table</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Formula</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Displacement</td><td>s = ut + ½at²</td><td>m</td></tr>
            <tr><td>Final Velocity</td><td>v = u + at</td><td>m/s</td></tr>
            <tr><td>Velocity²</td><td>v² = u² + 2as</td><td>m²/s²</td></tr>
            <tr><td>Average Velocity</td><td>v_avg = Δx/Δt</td><td>m/s</td></tr>
            <tr><td>Acceleration</td><td>a = Δv/Δt</td><td>m/s²</td></tr>
          </tbody>
        </table>
      </div>

      <hr />

      <div class="note-box">
        <p><strong>⚠️ Note:</strong> These formulas are only valid under <span class="highlight">constant acceleration</span>. For variable acceleration, calculus must be used.</p>
      </div>
    </div>
  `},{id:"projectile-theory",title:"Projectile Motion",content:`
    <div class="content-section">
      <h2>📘 Projectile Motion</h2>
      <p><strong>Projectile motion</strong> is the motion of an object thrown into the air at an angle, following a <strong>parabolic path</strong> under the influence of gravity. It combines <strong>uniform horizontal motion</strong> and <strong>uniformly accelerated vertical motion</strong>.</p>
      
      <hr />

      <h3>🧩 Key Characteristics</h3>
      <ul>
        <li>The horizontal velocity (<strong>u_x</strong>) remains constant.</li>
        <li>The vertical velocity (<strong>u_y</strong>) changes due to gravity (<strong>g</strong>).</li>
        <li>The trajectory of a projectile is always a <strong>parabola</strong>.</li>
        <li>Air resistance is neglected for ideal projectile motion.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1: Understanding Motion</h4>
        <p>A ball is thrown at 20 m/s at an angle of 30° above horizontal. Determine horizontal and vertical components of velocity.</p>
        <ul>
          <li>Horizontal velocity: u_x = u cosθ = 20 × cos30° ≈ 17.32 m/s</li>
          <li>Vertical velocity: u_y = u sinθ = 20 × sin30° = 10 m/s</li>
        </ul>
      </div>

      <hr />

      <h3>📐 Formulas for Projectile Motion</h3>
      <ul>
        <li><strong>Time of Flight (T):</strong> Total time projectile is in the air  
          <code>T = (2 u sinθ) / g</code>
          <div class="example-box">
            <p>Example: u = 20 m/s, θ = 30° → T = (2×20×0.5)/9.8 ≈ 2.04 s</p>
          </div>
        </li>
        <li><strong>Maximum Height (H):</strong> Highest vertical position  
          <code>H = (u² sin²θ) / (2g)</code>
          <div class="example-box">
            <p>Example: H = (20² × 0.5²) / (2×9.8) = 100 / 19.6 ≈ 5.1 m</p>
          </div>
        </li>
        <li><strong>Horizontal Range (R):</strong> Total horizontal distance  
          <code>R = (u² sin2θ) / g</code>
          <div class="example-box">
            <p>Example: R = (20² × sin60°)/9.8 ≈ (400 × 0.866)/9.8 ≈ 35.3 m</p>
          </div>
        </li>
        <li><strong>Horizontal Velocity:</strong> <code>v_x = u cosθ</code></li>
        <li><strong>Vertical Velocity:</strong> <code>v_y = u sinθ - g t</code></li>
      </ul>

      <hr />

      <h3>🔹 Step-by-Step Problem Solving</h3>
      <ol>
        <li>Resolve initial velocity into horizontal (u cosθ) and vertical (u sinθ) components.</li>
        <li>Use vertical motion formulas to find time of flight, max height, vertical velocity at any time.</li>
        <li>Use horizontal motion formula for range: R = u_x × T</li>
        <li>Combine results to get trajectory, velocity at any point, or position.</li>
      </ol>

      <div class="example-box">
        <h4>Example 2: Complete Motion Analysis</h4>
        <p>A projectile is fired with u = 15 m/s at θ = 45°.</p>
        <ul>
          <li>u_x = 15 × cos45° ≈ 10.61 m/s</li>
          <li>u_y = 15 × sin45° ≈ 10.61 m/s</li>
          <li>Time of Flight: T = 2 u_y / g = 2×10.61 / 9.8 ≈ 2.17 s</li>
          <li>Maximum Height: H = u_y² / 2g = 10.61² / 19.6 ≈ 5.74 m</li>
          <li>Horizontal Range: R = u_x × T ≈ 10.61 × 2.17 ≈ 23 m</li>
        </ul>
      </div>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <p>Projectile motion can be visualized using <strong>displacement-time</strong>, <strong>velocity-time</strong>, and <strong>trajectory graphs</strong>.</p>

      <div className="image-container">
  <img 
    src="${Av}" 
    alt="Projectile Trajectory Graph" 
    className="blog-image"
  />
  <p className="image-caption">Parabolic path of a projectile showing maximum height and range</p>
</div>

<div className="image-container">
  <img 
    src="${Mv}" 
    alt="Velocity-Time Graph" 
    className="blog-image"
  />
  <p className="image-caption">Vertical velocity-time graph showing upward and downward motion</p>
</div>


      <hr />

      <h3>⚙️ Key Points to Remember</h3>
      <ul>
        <li>Horizontal motion is uniform (no acceleration).</li>
        <li>Vertical motion is accelerated (g = 9.8 m/s² downward).</li>
        <li>Time to rise = Time to fall = u_y / g</li>
        <li>Total time of flight = 2 × time to rise</li>
        <li>Maximum height occurs at t = T/2</li>
        <li>Velocity at highest point: v_y = 0, v_x remains constant</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Note:</strong> The range is maximum at θ = 45° for a given speed in ideal conditions.</p>
      </div>

      <hr />

      <h3>📚 Real-Life Applications</h3>
      <ul>
        <li>Sports: Football, cricket, basketball throws follow projectile motion.</li>
        <li>Engineering: Designing water fountains, artillery, or missile trajectories.</li>
        <li>Space Science: Satellite launches and planetary probe trajectories.</li>
        <li>Everyday Life: Jumping from ramps, throwing objects, etc.</li>
      </ul>

      <hr />

      <h3>🔹 Practice Example</h3>
      <p>Problem: A stone is thrown with 10 m/s at 60°. Find:</p>
      <ol>
        <li>Horizontal and vertical velocity components</li>
        <li>Time of flight</li>
        <li>Maximum height</li>
        <li>Horizontal range</li>
      </ol>
      <div class="solution-box">
        <ul>
          <li>u_x = 10 × cos60° = 5 m/s</li>
          <li>u_y = 10 × sin60° ≈ 8.66 m/s</li>
          <li>Time of Flight: T = 2 u_y / g ≈ 1.77 s</li>
          <li>Maximum Height: H = u_y² / 2g ≈ 3.82 m</li>
          <li>Horizontal Range: R = u_x × T ≈ 5 × 1.77 ≈ 8.85 m</li>
        </ul>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Projectile motion combines uniform horizontal motion and uniformly accelerated vertical motion. By breaking velocities into components and applying kinematic equations, we can calculate time, height, range, and velocities at any point. It is fundamental for understanding real-life motions and sports, as well as for engineering applications.</p>
      </div>
    </div>
  `},{id:"laws-of-motion",title:"Laws of Motion",content:`
    <div class="content-section">
      <h2>📘 Newton's Laws of Motion</h2>
      <p><strong>Newton’s Laws of Motion</strong> describe the fundamental relationship between forces and motion of objects. 
      These laws form the foundation of classical mechanics.</p>
      
      <hr />

      <h3>1️⃣ First Law of Motion (Law of Inertia)</h3>
      <p>This law states: <strong>"An object remains at rest or continues to move with uniform velocity in a straight line unless acted upon by an external net force."</strong></p>
      <p><strong>Key Points:</strong></p>
      <ul>
        <li>Inertia is the tendency of an object to resist changes in motion.</li>
        <li>Objects with larger mass have greater inertia.</li>
        <li>Force is required to change the velocity (speed or direction) of an object.</li>
      </ul>
      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A book on a table remains stationary until someone pushes it.</p>
        <p><strong>Observation:</strong> Without an external force, the object does not move.</p>
      </div>
      <div class="real-life-applications">
        <p><strong>Applications:</strong> Car seatbelts, helmets, stationery objects staying put.</p>
      </div>
      
      <hr />

      <h3>2️⃣ Second Law of Motion (F = ma)</h3>
      <p>This law states: <strong>"The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass."</strong></p>
      <code>F = m × a</code>
      <ul>
        <li>F = Net Force (N)</li>
        <li>m = Mass of the object (kg)</li>
        <li>a = Acceleration produced (m/s²)</li>
      </ul>
      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>Pushing a light box (5 kg) and a heavy box (20 kg) with same force:</p>
        <ul>
          <li>Light box acceleration: a = F/m → larger</li>
          <li>Heavy box acceleration: a = F/m → smaller</li>
        </ul>
        <p><strong>Observation:</strong> More massive objects require more force to achieve the same acceleration.</p>
      </div>
      <div class="formula-application">
        <h4>🔹 Sample Calculation:</h4>
        <p>Force applied = 50 N, mass = 10 kg</p>
        <p>Acceleration: a = F/m = 50 / 10 = 5 m/s²</p>
      </div>
      <div class="real-life-applications">
        <p><strong>Applications:</strong> Vehicle acceleration, lifting objects, rocket propulsion.</p>
      </div>

      <hr />

      <h3>3️⃣ Third Law of Motion (Action-Reaction)</h3>
      <p>This law states: <strong>"For every action, there is an equal and opposite reaction."</strong></p>
      <ul>
        <li>The forces are equal in magnitude and opposite in direction.</li>
        <li>They act on two different bodies.</li>
      </ul>
      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Jumping: You push the ground down → the ground pushes you upward with equal force.</p>
      </div>
      <div class="real-life-applications">
        <p><strong>Applications:</strong> Walking (feet push ground back, body moves forward), swimming, rocket launch.</p>
      </div>

      <hr />

      <h3>⚙️ Additional Concepts</h3>
      <ul>
        <li><strong>Weight vs Mass:</strong> Weight is a force due to gravity (W = mg).</li>
        <li><strong>Friction:</strong> Opposes motion; acts along surface of contact.</li>
        <li><strong>Tension:</strong> Force in a stretched string/rope.</li>
        <li><strong>Normal Force:</strong> Perpendicular reaction force from surface.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4: Force Analysis</h4>
        <p>A block of mass 10 kg rests on a surface with friction μ = 0.2. Find force to start moving it.</p>
        <ul>
          <li>Weight: W = mg = 10 × 9.8 = 98 N</li>
          <li>Friction: f = μ × N = 0.2 × 98 ≈ 19.6 N</li>
          <li>Force applied > 19.6 N to start motion</li>
        </ul>
      </div>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <p>Force vs Acceleration graph (from F = ma) is linear:</p>
      <div class="image-container">
        <img src="${Nv}" alt="Force vs Acceleration Graph" />
        <p class="image-caption">Linear relationship between force and acceleration</p>
      </div>

      <div class="image-container">
        <img src="${Ov}" alt="Action-Reaction Illustration" />
        <p class="image-caption">Illustration of Newton’s Third Law: Action-Reaction pair</p>
      </div>

      <hr />

      <h3>🔹 Practice Problems</h3>
      <ol>
        <li>A 15 kg block is pushed with 30 N force. Find its acceleration.</li>
        <li>Explain why passengers lurch forward when a car stops suddenly.</li>
        <li>A swimmer pushes water backwards. What is the reaction force that moves the swimmer forward?</li>
      </ol>
      <div class="solution-box">
        <p>1️⃣ a = F/m = 30 / 15 = 2 m/s²</p>
        <p>2️⃣ Law of Inertia: Passengers tend to continue motion; seatbelt exerts force to stop them.</p>
        <p>3️⃣ Action-Reaction: Water pushes swimmer forward.</p>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Newton’s Laws explain how forces affect motion. First law describes inertia, second law quantifies force and acceleration, and third law explains action-reaction. These concepts are fundamental in mechanics, engineering, and everyday life.</p>
      </div>
    </div>
  `},{id:"work-energy",title:"Work, Energy, and Power",content:`
    <div class="content-section">
      <h2>📘 Work, Energy, and Power</h2>
      <p>These are fundamental concepts in physics that describe how forces affect motion and how energy is transferred.</p>

      <hr />

      <h3>1️⃣ Work</h3>
      <p><strong>Definition:</strong> Work is done when a force is applied to an object and it moves in the direction of the force.</p>
      <code>W = F × d × cosθ</code>
      <ul>
        <li>W = Work done (Joules, J)</li>
        <li>F = Applied force (Newtons, N)</li>
        <li>d = Displacement of the object (meters, m)</li>
        <li>θ = Angle between force and displacement direction</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>Lifting a 10 kg box vertically by 2 m. Force = weight = mg = 10 × 9.8 = 98 N</p>
        <p>Work done: W = F × d = 98 × 2 = <strong>196 J</strong></p>
      </div>

      <div class="example-box">
        <h4>🔹 Example 2 (Force at angle):</h4>
        <p>A force of 50 N is applied at 30° to move a box 3 m horizontally.</p>
        <p>W = F × d × cosθ = 50 × 3 × cos30° ≈ 50 × 3 × 0.866 ≈ <strong>129.9 J</strong></p>
      </div>

      <hr />

      <h3>2️⃣ Energy</h3>
      <p><strong>Energy</strong> is the capacity to do work.</p>

      <h4>🔹 Kinetic Energy (KE)</h4>
      <p>Energy due to motion: <code>KE = ½ mv²</code></p>
      <div class="example-box">
        <p>A 2 kg ball moving at 5 m/s:</p>
        <p>KE = ½ × 2 × 5² = 25 J</p>
      </div>

      <h4>🔹 Potential Energy (PE)</h4>
      <p>Energy due to position: <code>PE = mgh</code></p>
      <div class="example-box">
        <p>A 5 kg object at 10 m height:</p>
        <p>PE = 5 × 9.8 × 10 = <strong>490 J</strong></p>
      </div>

      <h4>🔹 Work-Energy Theorem</h4>
      <p>The work done on an object is equal to the change in its kinetic energy:</p>
      <code>W = ΔKE = KE_final - KE_initial</code>
      <div class="example-box">
        <p>A car accelerates from 0 to 20 m/s, mass = 1000 kg:</p>
        <p>ΔKE = ½ × 1000 × 20² - 0 = 200,000 J</p>
        <p>Work done by engine = 200 kJ</p>
      </div>

      <hr />

      <h3>3️⃣ Power</h3>
      <p><strong>Definition:</strong> Power is the rate at which work is done or energy is transferred.</p>
      <code>P = W/t</code>
      <ul>
        <li>P = Power (Watts, W)</li>
        <li>W = Work done (Joules, J)</li>
        <li>t = Time taken (seconds, s)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Work done = 196 J, Time = 4 s</p>
        <p>P = W/t = 196 / 4 = <strong>49 W</strong></p>
      </div>

      <hr />

      <h3>4️⃣ Mechanical Energy</h3>
      <p>Total mechanical energy = Kinetic Energy + Potential Energy</p>
      <code>ME = KE + PE</code>
      <div class="example-box">
        <p>A pendulum of mass 2 kg at 5 m height moving at 4 m/s at bottom:</p>
        <p>PE = mgh = 2 × 9.8 × 5 = 98 J</p>
        <p>KE = ½ mv² = ½ × 2 × 4² = 16 J</p>
        <p>Total ME = 98 + 16 = <strong>114 J</strong></p>
      </div>

      <hr />

      <h3>5️⃣ Conservation of Energy</h3>
      <p>In the absence of non-conservative forces (like friction), total mechanical energy remains constant:</p>
      <code>KE_initial + PE_initial = KE_final + PE_final</code>
      <div class="example-box">
        <p>A ball of mass 1 kg dropped from 10 m height:</p>
        <ul>
          <li>PE_top = mgh = 1 × 9.8 × 10 = 98 J</li>
          <li>KE_top = 0 (at rest)</li>
          <li>At bottom: PE_bottom = 0, KE_bottom = 98 J</li>
        </ul>
      </div>

      <hr />

      <h3>6️⃣ Real-Life Applications</h3>
      <ul>
        <li>Calculating work done by machines.</li>
        <li>Designing roller coasters using potential and kinetic energy.</li>
        <li>Power rating of engines and motors.</li>
        <li>Sports: Work done by athletes and energy transfer.</li>
      </ul>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <div class="image-container">
        <img src="${jv}" alt="Work-Energy Graph" />
        <p class="image-caption">Graph of work done vs displacement or energy changes</p>
      </div>

      <div class="image-container">
        <img src="${_v}" alt="Power-Time Graph" />
        <p class="image-caption">Graph showing power delivered over time</p>
      </div>

      <hr />

      <h3>🔹 Practice Problems</h3>
      <ol>
        <li>A force of 100 N moves a block 5 m. Work done?</li>
        <li>A 2 kg ball moving at 3 m/s. Find kinetic energy.</li>
        <li>Lifting 20 kg box 2 m in 5 s. Power developed?</li>
        <li>Ball dropped from 15 m. Find speed just before hitting ground (ignore air resistance).</li>
      </ol>
      <div class="solution-box">
        <p>1️⃣ W = F × d = 100 × 5 = 500 J</p>
        <p>2️⃣ KE = ½ mv² = ½ × 2 × 3² = 9 J</p>
        <p>3️⃣ W = mgh = 20 × 9.8 × 2 = 392 J → P = 392 / 5 ≈ 78.4 W</p>
        <p>4️⃣ PE_top = mgh = 2 × 9.8 × 15 = 294 J → KE_bottom = 294 J → v = √(2KE/m) = √(294) ≈ 12.14 m/s</p>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Work, energy, and power are interrelated concepts that allow us to analyze forces, motion, and energy transfer in physical systems. Understanding them is key in mechanics, engineering, and daily life applications.</p>
      </div>
    </div>
  `},{id:"momentum-collisions",title:"Momentum and Collisions",content:`
    <div class="content-section">
      <h2>📘 Momentum and Collisions</h2>
      <p><strong>Momentum</strong> is a measure of motion of a body and depends on its mass and velocity.</p>
      <code>p = m × v</code>
      <ul>
        <li>p = momentum (kg·m/s)</li>
        <li>m = mass (kg)</li>
        <li>v = velocity (m/s)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A 2 kg ball moving at 3 m/s. Find momentum.</p>
        <p>p = m × v = 2 × 3 = <strong>6 kg·m/s</strong></p>
      </div>

      <hr />

      <h3>1️⃣ Law of Conservation of Momentum</h3>
      <p>In a closed system, the total momentum before an event (like a collision) is equal to the total momentum after the event, provided no external forces act.</p>
      <code>Σp_before = Σp_after</code>

      <div class="example-box">
        <h4>🔹 Example 2 (Two-Body Collision):</h4>
        <p>Two ice skaters, mass 50 kg and 70 kg, push each other. Skater A moves at 1 m/s. Find Skater B's velocity.</p>
        <p>Let v = velocity of Skater B:</p>
        <p>Initial total momentum = 0 (both at rest)</p>
        <p>After push: 50×1 + 70×v = 0 → v = -50/70 ≈ -0.714 m/s</p>
        <p><strong>Direction:</strong> opposite to Skater A</p>
      </div>

      <hr />

      <h3>2️⃣ Types of Collisions</h3>

      <h4>🔹 Elastic Collisions</h4>
      <p>Both <strong>momentum</strong> and <strong>kinetic energy</strong> are conserved.</p>
      <code>p_initial = p_final</code><br/>
      <code>KE_initial = KE_final</code>
      <div class="example-box">
        <p>Example: Two billiard balls collide and bounce off without losing speed.</p>
      </div>

      <h4>🔹 Inelastic Collisions</h4>
      <p>Momentum is conserved, but kinetic energy is not conserved (some energy converted to heat, sound, deformation).</p>
      <div class="example-box">
        <p>Example: A car crash where cars stick together after collision.</p>
      </div>

      <h4>🔹 Perfectly Inelastic Collisions</h4>
      <p>Special case of inelastic collision where colliding bodies stick together.</p>
      <div class="example-box">
        <p>Example: Clay balls colliding and sticking together.</p>
      </div>

      <hr />

      <h3>3️⃣ Momentum in One Dimension</h3>
      <p>For objects moving along a straight line:</p>
      <code>m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</code>
      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Car A (1000 kg) moving at 10 m/s collides with car B (1500 kg) at rest. Find velocities after perfectly inelastic collision (stick together).</p>
        <p>Total momentum before = 1000×10 + 1500×0 = 10,000 kg·m/s</p>
        <p>Total mass after = 1000 + 1500 = 2500 kg</p>
        <p>v = total momentum / total mass = 10,000 / 2500 = <strong>4 m/s</strong></p>
      </div>

      <hr />

      <h3>4️⃣ Momentum in Two Dimensions</h3>
      <p>Conservation applies separately in x and y directions:</p>
      <code>Σp_x_before = Σp_x_after</code><br/>
      <code>Σp_y_before = Σp_y_after</code>
      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Two balls collide at right angles. Momentum conservation applied in each axis to find final velocities.</p>
      </div>

      <hr />

      <h3>5️⃣ Impulse</h3>
      <p>Impulse is the change in momentum of an object when a force acts over time.</p>
      <code>J = Δp = F × Δt</code>
      <ul>
        <li>J = Impulse (N·s)</li>
        <li>Δp = Change in momentum (kg·m/s)</li>
        <li>F = Force (N)</li>
        <li>Δt = Time duration of force (s)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>A 0.5 kg ball initially at rest is hit by a bat with average force 100 N for 0.02 s. Find change in momentum.</p>
        <p>J = F × Δt = 100 × 0.02 = <strong>2 N·s</strong></p>
        <p>Δp = 2 kg·m/s → final velocity = Δp/m = 2/0.5 = <strong>4 m/s</strong></p>
      </div>

      <hr />

      <h3>6️⃣ Real-Life Applications</h3>
      <ul>
        <li>Vehicle safety: Seat belts increase collision time, reducing force (impulse concept).</li>
        <li>Sports: Kicking, throwing, hitting balls.</li>
        <li>Rocket propulsion: Momentum change via expelled gas.</li>
        <li>Recoil of guns: Action-reaction principle with momentum conservation.</li>
      </ul>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <div class="image-container">
        <img src="${Rv}" alt="Momentum Graph" />
        <p class="image-caption">Momentum vs Time or Impulse illustration</p>
      </div>

      <div class="image-container">
        <img src="${zv}" alt="Collision Diagram" />
        <p class="image-caption">Elastic and inelastic collision diagram</p>
      </div>

      <hr />

      <h3>🔹 Practice Problems</h3>
      <ol>
        <li>Two cars (1000 kg and 1500 kg) moving at 10 m/s and 5 m/s collide inelastically. Find final velocity.</li>
        <li>A 0.2 kg ball at rest is hit by 50 N force for 0.1 s. Find final velocity.</li>
        <li>Two ice skaters, 60 kg and 40 kg, push each other. Skater A moves at 2 m/s. Find Skater B's velocity.</li>
        <li>Elastic collision: 2 kg ball at 5 m/s collides with 3 kg ball at rest. Find velocities after collision.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ Total momentum = 1000×10 + 1500×5 = 17,500 kg·m/s, total mass = 1000+1500=2500 → v = 17,500/2500 = 7 m/s</p>
        <p>2️⃣ J = FΔt = 50 × 0.1 = 5 N·s → v = Δp/m = 5/0.2 = 25 m/s</p>
        <p>3️⃣ Momentum conservation: 60×2 + 40×v = 0 → v = -3 m/s</p>
        <p>4️⃣ Use conservation of momentum & KE equations → v1 ≈ 1 m/s, v2 ≈ 4 m/s</p>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Momentum and collisions allow us to analyze interactions of objects in motion, predict post-collision velocities, and understand impulse effects in practical applications like sports, vehicle safety, and rockets.</p>
      </div>
    </div>
  `},{id:"circular-motion",title:"Circular Motion",content:`
    <div class="content-section">
      <h2>📘 Circular Motion</h2>
      <p><strong>Circular motion</strong> occurs when an object moves along a circular path. Even if its speed is constant, its velocity changes continuously due to the change in direction, resulting in <strong>centripetal acceleration</strong>.</p>

      <div class="formula-section">
        <h3>🔹 Centripetal Acceleration and Force</h3>
        <ul>
          <li>Centripetal Acceleration: <code>a_c = v²/r</code></li>
          <li>Centripetal Force: <code>F_c = m × a_c = mv²/r</code></li>
          <li>r = radius of circular path</li>
          <li>v = tangential speed</li>
          <li>m = mass of the object</li>
        </ul>
      </div>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A car of mass 1000 kg moves along a circular track of radius 50 m at a speed of 20 m/s. Find centripetal force.</p>
        <p>F_c = mv²/r = 1000 × (20)² / 50 = 1000 × 400 / 50 = 8000 N</p>
      </div>

      <hr />

      <h3>1️⃣ Uniform Circular Motion</h3>
      <p>If the speed of an object is constant but the direction changes, the motion is called <strong>uniform circular motion (UCM)</strong>.</p>
      <ul>
        <li>The velocity vector is always tangent to the circle.</li>
        <li>The acceleration vector always points toward the center (centripetal acceleration).</li>
      </ul>

      <div class="example-box">
        <p>Example: A satellite moving around the Earth at constant speed.</p>
      </div>

      <hr />

      <h3>2️⃣ Angular Quantities</h3>
      <ul>
        <li><strong>Angular Displacement:</strong> θ = s/r (radians)</li>
        <li><strong>Angular Velocity:</strong> ω = dθ/dt</li>
        <li><strong>Angular Acceleration:</strong> α = dω/dt</li>
      </ul>

      <div class="formula-section">
        <h4>🔹 Relationship Between Linear and Angular Quantities</h4>
        <ul>
          <li>v = r × ω</li>
          <li>a_c = v² / r = r × ω²</li>
          <li>a_t (tangential acceleration) = r × α</li>
        </ul>
      </div>

      <hr />

      <h3>3️⃣ Non-Uniform Circular Motion</h3>
      <p>If the speed changes along the circular path, there is <strong>tangential acceleration</strong> in addition to centripetal acceleration.</p>
      <ul>
        <li>Radial (centripetal) acceleration: a_r = v²/r</li>
        <li>Tangential acceleration: a_t = dv/dt</li>
        <li>Total acceleration: a = √(a_r² + a_t²)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>A car speeds up from 10 m/s to 20 m/s along a circular track of radius 25 m in 5 s. Find radial and tangential accelerations at v = 20 m/s.</p>
        <ul>
          <li>a_r = v²/r = 20²/25 = 16 m/s²</li>
          <li>a_t = Δv/Δt = (20-10)/5 = 2 m/s²</li>
          <li>Total acceleration a = √(16² + 2²) ≈ 16.12 m/s²</li>
        </ul>
      </div>

      <hr />

      <h3>4️⃣ Banking of Roads</h3>
      <p>To reduce skidding, curved roads are banked at an angle θ so that part of the normal force provides the centripetal force.</p>
      <ul>
        <li>tanθ = v²/(r × g)</li>
        <li>v = √(r × g × tanθ)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>A car travels on a banked curve of radius 100 m with no friction at 20 m/s. Find the banking angle.</p>
        <p>tanθ = v²/(r × g) = 400 / (100 × 9.8) ≈ 0.408 → θ ≈ 22.3°</p>
      </div>

      <hr />

      <h3>5️⃣ Vertical Circular Motion</h3>
      <p>Motion along a vertical circle (like a roller coaster or pendulum) involves:</p>
      <ul>
        <li>Gravity acting downward</li>
        <li>Centripetal force provided by tension or normal reaction</li>
      </ul>

      <div class="formula-section">
        <h4>🔹 Minimum Speed at Top of Vertical Circle</h4>
        <p>v_min = √(g × r)</p>
        <p>This ensures the object does not fall off the circular path.</p>
      </div>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>A ball of mass 0.5 kg swings in a vertical circle of radius 2 m. Minimum speed at the top:</p>
        <p>v_min = √(g × r) = √(9.8 × 2) ≈ 4.43 m/s</p>
      </div>

      <hr />

      <h3>6️⃣ Real-Life Applications of Circular Motion</h3>
      <ul>
        <li>Cars taking a turn along a curve</li>
        <li>Satellites revolving around planets</li>
        <li>Roller coasters and ferris wheels</li>
        <li>Earth’s rotation about its axis</li>
        <li>Electron motion in circular orbits in atoms (classical model)</li>
      </ul>

      <hr />

      <h3>7️⃣ Practice Problems</h3>
      <ol>
        <li>A 1000 kg car moves around a 50 m radius curve at 20 m/s. Find centripetal acceleration and force.</li>
        <li>A ball swings in a vertical circle of radius 1.5 m. Find minimum speed at the top.</li>
        <li>A road is banked for a speed of 30 m/s with radius 150 m. Find banking angle.</li>
        <li>Car accelerates from 10 to 25 m/s along a circular track of radius 40 m. Find radial, tangential, and total acceleration.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ a_c = v²/r = 400/50 = 8 m/s², F_c = m × a_c = 1000 × 8 = 8000 N</p>
        <p>2️⃣ v_min = √(g × r) = √(9.8 × 1.5) ≈ 3.83 m/s</p>
        <p>3️⃣ tanθ = v²/(r × g) = 900/(150 × 9.8) ≈ 0.612 → θ ≈ 31.6°</p>
        <p>4️⃣ a_r = v²/r = 625/40 = 15.625 m/s², a_t = Δv/Δt = (25-10)/?, a_total = √(a_r² + a_t²)</p>
      </div>

      <hr />

      <h3>📊 Graphical Representation</h3>
      <div class="image-container">
        <img src="${Gd}" alt="Circular Motion Diagram" />
        <p class="image-caption">Centripetal and tangential acceleration vectors</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Circular motion is everywhere — from cars on curved roads, satellites in orbit, to electrons in atoms. Understanding centripetal and tangential accelerations, forces, and banking of curves allows predicting motion and designing safe systems.</p>
      </div>
    </div>
  `},{id:"gravitation",title:"Gravitation",content:`
    <div class="content-section">
      <h2>🌍 Gravitation</h2>
      <p><strong>Gravitation</strong> is the force of attraction between any two masses. It is a fundamental force that governs the motion of planets, satellites, and falling objects.</p>

      <div class="formula-section">
        <h3>🔹 Newton's Law of Gravitation</h3>
        <p>Every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them:</p>
        <code>F = G × (m₁ × m₂) / r²</code>
        <ul>
          <li>F = gravitational force</li>
          <li>m₁, m₂ = masses of the two objects</li>
          <li>r = distance between the centers of the two masses</li>
          <li>G = universal gravitational constant = 6.674 × 10⁻¹¹ N·m²/kg²</li>
        </ul>
      </div>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>Two 5 kg objects are 2 m apart. Find the gravitational force between them.</p>
        <p>F = G × (m₁ × m₂) / r² = 6.674×10⁻¹¹ × (5×5)/4 ≈ 4.17 × 10⁻¹⁰ N</p>
      </div>

      <hr />

      <h3>1️⃣ Acceleration due to Gravity (g)</h3>
      <p>Near the Earth's surface, all objects experience an acceleration due to gravity:</p>
      <code>g = 9.8 m/s²</code>
      <p>The weight of an object is the gravitational force it experiences due to Earth:</p>
      <code>W = m × g</code>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>A 10 kg object on Earth:</p>
        <p>W = m × g = 10 × 9.8 = 98 N</p>
      </div>

      <hr />

      <h3>2️⃣ Variation of g with Height and Depth</h3>
      <ul>
        <li>At height h above Earth’s surface: g_h = g × (1 - 2h/R)</li>
        <li>At depth d below Earth’s surface: g_d = g × (1 - d/R)</li>
        <li>R = radius of Earth (~6.371 × 10⁶ m)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Find g at 1000 m above Earth’s surface:</p>
        <p>g_h = 9.8 × (1 - 2×1000/6.371×10⁶) ≈ 9.7969 m/s²</p>
      </div>

      <hr />

      <h3>3️⃣ Gravitational Potential Energy (U)</h3>
      <p>The work done in bringing a mass m from infinity to a distance r from another mass M:</p>
      <code>U = -G × (M × m) / r</code>
      <p>Near Earth’s surface, for small heights:</p>
      <code>U = m × g × h</code>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Potential energy of a 2 kg object at 5 m height:</p>
        <p>U = m × g × h = 2 × 9.8 × 5 = 98 J</p>
      </div>

      <hr />

      <h3>4️⃣ Escape Velocity</h3>
      <p>The minimum velocity required to escape the gravitational pull of a planet:</p>
      <code>v_esc = √(2GM/R)</code>
      <p>For Earth: v_esc ≈ 11.2 km/s</p>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>For a planet of mass 5×10²⁴ kg and radius 6.371×10⁶ m:</p>
        <p>v_esc = √(2 × 6.674×10⁻¹¹ × 5×10²⁴ / 6.371×10⁶) ≈ 11.2 km/s</p>
      </div>

      <hr />

      <h3>5️⃣ Orbital Motion</h3>
      <p>Satellites move in circular orbits due to the balance of gravitational force and centripetal force:</p>
      <code>F_gravity = F_centripetal → G(Mm)/r² = mv²/r</code>
      <p>Orbital velocity: v = √(GM/r)</p>
      <p>Time period of satellite: T = 2πr / v = 2π √(r³/GM)</p>

      <div class="example-box">
        <h4>🔹 Example 6:</h4>
        <p>Satellite of radius 7000 km around Earth:</p>
        <p>v = √(6.674×10⁻¹¹ × 5.97×10²⁴ / 7×10⁶) ≈ 7.54 km/s</p>
      </div>

      <hr />

      <h3>6️⃣ Weightlessness</h3>
      <p>An object appears weightless when it is in free fall or in a spacecraft moving along a gravitational orbit, because there is no normal force acting on it.</p>

      <div class="example-box">
        <h4>🔹 Example 7:</h4>
        <p>A satellite in orbit experiences weightlessness because it is in continuous free fall around the Earth.</p>
      </div>

      <hr />

      <h3>7️⃣ Real-Life Applications</h3>
      <ul>
        <li>Calculating satellite orbits and space missions</li>
        <li>Predicting tides caused by Moon and Sun</li>
        <li>Designing structures with weight and load calculations</li>
        <li>Understanding planetary and stellar motion in astrophysics</li>
      </ul>

      <hr />

      <h3>8️⃣ Practice Problems</h3>
      <ol>
        <li>Calculate gravitational force between Earth and Moon (M_E = 5.97×10²⁴ kg, M_M = 7.35×10²² kg, r = 3.84×10⁸ m)</li>
        <li>Find g at 10 km height above Earth’s surface.</li>
        <li>Determine escape velocity from Mars (M = 6.42×10²³ kg, R = 3.39×10⁶ m).</li>
        <li>Find orbital velocity of a satellite 300 km above Earth.</li>
        <li>Calculate weight of a 50 kg astronaut on the Moon (g = 1.62 m/s²)</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ F = G × (M_E × M_M)/r² ≈ 1.98 × 10²⁰ N</p>
        <p>2️⃣ g_h ≈ 9.797 m/s²</p>
        <p>3️⃣ v_esc ≈ 5.03 km/s</p>
        <p>4️⃣ v_orb ≈ 7.73 km/s</p>
        <p>5️⃣ W = m × g = 50 × 1.62 = 81 N</p>
      </div>

      <hr />

      <div class="image-container">
        <img src="${Cv}" alt="Gravitation Diagram" />
        <p class="image-caption">Gravitational force vectors and orbital motion</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Gravitation governs motion of planets, satellites, and everyday objects. Newton’s law of gravitation, acceleration due to gravity, escape velocity, orbital motion, and weightlessness are key concepts to understand forces in nature and space.</p>
      </div>
    </div>
  `},{id:"oscillations",title:"Oscillations and Simple Harmonic Motion",content:`
    <div class="content-section">
      <h2>🌟 Oscillations and Simple Harmonic Motion (SHM)</h2>
      <p><strong>Oscillatory motion</strong> is a motion that repeats itself after a fixed interval of time. Examples include a pendulum, a vibrating spring, or a tuning fork.</p>

      <hr />

      <h3>1️⃣ Simple Harmonic Motion (SHM)</h3>
      <p>SHM is a type of oscillation in which the restoring force is directly proportional to the displacement from the equilibrium position and acts toward it.</p>
      <code>F = -kx</code>
      <p>where k is the force constant, x is displacement.</p>

      <p>Displacement as a function of time:</p>
      <code>x(t) = A cos(ωt + φ)</code>
      <ul>
        <li>A = Amplitude (maximum displacement)</li>
        <li>ω = Angular frequency (rad/s)</li>
        <li>φ = Phase constant (depends on initial conditions)</li>
        <li>t = Time</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A mass attached to a spring of k = 100 N/m and mass m = 2 kg. Find angular frequency and period.</p>
        <p>ω = √(k/m) = √(100/2) = √50 ≈ 7.07 rad/s</p>
        <p>Period T = 2π/ω ≈ 0.888 s</p>
      </div>

      <hr />

      <h3>2️⃣ Key Parameters in SHM</h3>
      <ul>
        <li><strong>Amplitude (A):</strong> Maximum displacement from equilibrium.</li>
        <li><strong>Period (T):</strong> Time for one complete oscillation.</li>
        <li><strong>Frequency (f):</strong> Number of oscillations per second <code>f = 1/T</code>.</li>
        <li><strong>Angular frequency (ω):</strong> <code>ω = 2πf = 2π/T</code>.</li>
        <li><strong>Phase (φ):</strong> Determines the initial position of the oscillating body.</li>
      </ul>

      <hr />

      <h3>3️⃣ Velocity and Acceleration in SHM</h3>
      <p>Velocity of a particle:</p>
      <code>v(t) = dx/dt = -Aω sin(ωt + φ)</code>
      <p>Maximum velocity: <code>v_max = Aω</code></p>

      <p>Acceleration of a particle:</p>
      <code>a(t) = dv/dt = -Aω² cos(ωt + φ) = -ω² x(t)</code>
      <p>Maximum acceleration: <code>a_max = Aω²</code></p>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>A pendulum of amplitude 0.1 m and angular frequency 5 rad/s. Find maximum velocity and acceleration.</p>
        <p>v_max = Aω = 0.1 × 5 = 0.5 m/s</p>
        <p>a_max = Aω² = 0.1 × 25 = 2.5 m/s²</p>
      </div>

      <hr />

      <h3>4️⃣ Energy in SHM</h3>
      <p>Total mechanical energy (E) is conserved and is the sum of kinetic and potential energies:</p>
      <ul>
        <li>Kinetic Energy: <code>KE = ½ m v² = ½ m ω² (A² - x²)</code></li>
        <li>Potential Energy: <code>PE = ½ k x² = ½ m ω² x²</code></li>
        <li>Total Energy: <code>E = KE + PE = ½ k A² = constant</code></li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>A mass-spring system with m = 0.5 kg, k = 50 N/m, amplitude A = 0.2 m.</p>
        <p>Total energy: E = ½ k A² = 0.5 × 50 × 0.04 = 1 J</p>
        <p>At x = 0.1 m, KE = ½ m ω² (A² - x²) = 0.5 × 100 × (0.04 - 0.01) = 1.5 J ??? → Check: Actually, ω² = k/m = 50/0.5 = 100, KE = 0.5 × 0.5 × 100 × 0.03 = 0.75 J, PE = 0.25 J, Total = 1 J ✔</p>
      </div>

      <hr />

      <h3>5️⃣ Examples of SHM</h3>
      <ul>
        <li>Simple pendulum: <code>T = 2π√(L/g)</code></li>
        <li>Mass-spring system: <code>T = 2π√(m/k)</code></li>
        <li>Torsional pendulum: <code>T = 2π√(I/k)</code></li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Simple pendulum of length 1 m. Find period:</p>
        <p>T = 2π√(L/g) = 2π√(1/9.8) ≈ 2.006 s</p>
      </div>

      <hr />

      <h3>6️⃣ Phase Difference</h3>
      <p>Two SHMs may differ in phase:</p>
      <ul>
        <li><strong>In phase:</strong> φ = 0 → maxima occur together</li>
        <li><strong>Out of phase:</strong> φ = π → maxima of one coincides with minima of other</li>
      </ul>

      <hr />

      <h3>7️⃣ Damped and Forced Oscillations</h3>
      <p><strong>Damped Oscillation:</strong> Amplitude decreases over time due to friction or resistance.</p>
      <p><strong>Forced Oscillation:</strong> External periodic force applied. Can lead to resonance when forcing frequency equals natural frequency.</p>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>A swing slows down if not pushed regularly → damped oscillation.</p>
        <p>Pushing at correct intervals → forced oscillation → resonance.</p>
      </div>

      <hr />

      <h3>8️⃣ Applications of SHM</h3>
      <ul>
        <li>Clocks using pendulums</li>
        <li>Vibrating strings in musical instruments</li>
        <li>Seismographs to detect earthquakes</li>
        <li>Oscillatory circuits in electronics</li>
      </ul>

      <hr />

      <div class="image-container">
        <img src="${Dv}" alt="SHM Graph" />
        <p class="image-caption">Displacement, velocity, and acceleration in simple harmonic motion</p>
      </div>

      <hr />

      <h3>9️⃣ Practice Problems</h3>
      <ol>
        <li>A mass of 0.2 kg attached to a spring (k = 80 N/m) oscillates with amplitude 0.1 m. Find T, ω, v_max, a_max.</li>
        <li>A pendulum of length 0.5 m completes 10 oscillations in 14 s. Find f and T.</li>
        <li>Calculate total energy of mass-spring system with m = 1 kg, k = 100 N/m, A = 0.2 m.</li>
        <li>Amplitude decreases to half in 5 oscillations. Identify type of damping.</li>
        <li>Find velocity of a particle at displacement x = 0.05 m for amplitude A = 0.1 m and ω = 10 rad/s.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ ω = √(k/m) = 20 rad/s, T = 2π/ω ≈ 0.314 s, v_max = Aω = 2 m/s, a_max = Aω² = 4 m/s²</p>
        <p>2️⃣ T = 14/10 = 1.4 s, f = 1/T ≈ 0.714 Hz</p>
        <p>3️⃣ E = ½ k A² = ½ × 100 × 0.04 = 2 J</p>
        <p>4️⃣ Light damping</p>
        <p>5️⃣ v = ω√(A² - x²) = 10√(0.01 - 0.0025) = 10√0.0075 ≈ 0.866 m/s</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> SHM is a fundamental type of oscillatory motion. Concepts include displacement, velocity, acceleration, energy, period, frequency, damping, and resonance. Applications range from clocks to seismographs and musical instruments.</p>
      </div>
    </div>
  `},{id:"waves",title:"Waves and Sound",content:`
    <div class="content-section">
      <h2>🌊 Waves and Sound</h2>
      <p><strong>Waves</strong> are disturbances that transfer energy from one point to another without the transfer of matter.</p>

      <hr />

      <h3>1️⃣ Types of Waves</h3>
      <ul>
        <li><strong>Mechanical Waves:</strong> Require a medium (solid, liquid, or gas) to propagate. Examples: Sound, water waves.</li>
        <li><strong>Electromagnetic Waves:</strong> Do not require a medium. Examples: Light, radio waves.</li>
        <li><strong>Transverse Waves:</strong> Particle motion is perpendicular to wave propagation. Example: Water waves.</li>
        <li><strong>Longitudinal Waves:</strong> Particle motion is parallel to wave propagation. Example: Sound waves.</li>
      </ul>

      <hr />

      <h3>2️⃣ Wave Parameters</h3>
      <ul>
        <li><strong>Wavelength (λ):</strong> Distance between two consecutive crests or troughs.</li>
        <li><strong>Frequency (f):</strong> Number of oscillations per second (Hz).</li>
        <li><strong>Amplitude (A):</strong> Maximum displacement of a particle from equilibrium.</li>
        <li><strong>Velocity (v):</strong> Speed at which the wave propagates <code>v = f λ</code></li>
        <li><strong>Period (T):</strong> Time for one complete wave <code>T = 1/f</code></li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A sound wave has frequency f = 171.5 Hz and wavelength λ = 2 m. Find wave speed.</p>
        <p>v = f λ = 171.5 × 2 = 343 m/s</p>
      </div>

      <hr />

      <h3>3️⃣ Speed of Sound</h3>
      <ul>
        <li>In air (20°C): v ≈ 343 m/s</li>
        <li>In water: v ≈ 1480 m/s</li>
        <li>In steel: v ≈ 5100 m/s</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>If a steel rod has a longitudinal wave with λ = 2 m and frequency f = 2550 Hz, speed of wave:</p>
        <p>v = f λ = 2550 × 2 = 5100 m/s</p>
      </div>

      <hr />

      <h3>4️⃣ Wave Equation</h3>
      <p>General wave equation for a sinusoidal wave:</p>
      <code>y(x, t) = A sin(kx - ωt + φ)</code>
      <ul>
        <li>k = wave number = 2π/λ</li>
        <li>ω = angular frequency = 2πf</li>
        <li>φ = phase constant</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>A wave with amplitude A = 0.05 m, λ = 2 m, f = 5 Hz:</p>
        <p>k = 2π/λ = π rad/m</p>
        <p>ω = 2πf = 10π rad/s</p>
        <p>Wave equation: y(x,t) = 0.05 sin(π x - 10π t)</p>
      </div>

      <hr />

      <h3>5️⃣ Sound Waves</h3>
      <p>Sound waves are longitudinal mechanical waves caused by vibrations of particles in a medium.</p>
      <ul>
        <li>Longitudinal waves consist of compressions and rarefactions.</li>
        <li>Sound requires a medium (cannot travel in vacuum).</li>
        <li>Speed depends on medium density and elasticity.</li>
      </ul>

      <div class="image-container">
        <img src="${Gd}" alt="Sound Wave Graph" />
        <p class="image-caption">Longitudinal sound wave showing compressions and rarefactions</p>
      </div>

      <hr />

      <h3>6️⃣ Intensity and Loudness</h3>
      <ul>
        <li>Intensity (I) = Power per unit area <code>I = P/A</code></li>
        <li>Loudness is perceived by human ear (related to intensity)</li>
        <li>Decibel scale: <code>β = 10 log10(I/I0)</code>, where I0 = 10⁻¹² W/m² (threshold of hearing)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Intensity of sound I = 10⁻⁶ W/m², find sound level in dB.</p>
        <p>β = 10 log10(10⁻⁶ / 10⁻¹²) = 10 × 6 = 60 dB</p>
      </div>

      <hr />

      <h3>7️⃣ Doppler Effect</h3>
      <p>The apparent change in frequency when the source or observer is moving:</p>
      <code>f' = f (v ± vo)/(v ∓ vs)</code>
      <ul>
        <li>f' = observed frequency</li>
        <li>f = actual frequency</li>
        <li>v = speed of sound</li>
        <li>vo = observer speed toward source (+) or away (-)</li>
        <li>vs = source speed toward observer (-) or away (+)</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>Ambulance approaches at 30 m/s with siren f = 700 Hz. Find apparent frequency for observer at rest (v = 343 m/s).</p>
        <p>f' = 700 × (343 / (343 - 30)) ≈ 761 Hz</p>
      </div>

      <hr />

      <h3>8️⃣ Musical Notes</h3>
      <ul>
        <li>Sound pitch depends on frequency.</li>
        <li>Human hearing range: 20 Hz – 20 kHz.</li>
        <li>Musical instruments produce standing waves.</li>
      </ul>

      <div class="image-container">
        <img src="${wv}" alt="Musical Instrument Waves" />
        <p class="image-caption">Standing waves in a stringed instrument</p>
      </div>

      <hr />

      <h3>9️⃣ Applications of Waves and Sound</h3>
      <ul>
        <li>Sonar: Underwater navigation using sound waves.</li>
        <li>Ultrasound: Medical imaging and diagnostics.</li>
        <li>Musical instruments and acoustics.</li>
        <li>Communication: Radio, telephone, and audio signals.</li>
      </ul>

      <hr />

      <h3>🔟 Practice Problems</h3>
      <ol>
        <li>A wave has λ = 0.5 m, f = 100 Hz. Find velocity.</li>
        <li>Sound intensity = 10⁻⁴ W/m². Find decibel level.</li>
        <li>A source emits f = 500 Hz moving toward stationary observer at 20 m/s. Find observed frequency.</li>
        <li>Calculate wavelength of sound in water (v = 1480 m/s) for f = 1000 Hz.</li>
        <li>A string has fundamental frequency 440 Hz. Find wavelength if v = 330 m/s.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ v = f λ = 100 × 0.5 = 50 m/s</p>
        <p>2️⃣ β = 10 log10(10⁻⁴ / 10⁻¹²) = 80 dB</p>
        <p>3️⃣ f' = 500 × (343 / (343 - 20)) ≈ 530 Hz</p>
        <p>4️⃣ λ = v / f = 1480 / 1000 = 1.48 m</p>
        <p>5️⃣ λ = v / f = 330 / 440 ≈ 0.75 m</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Waves transfer energy without matter. Sound is a longitudinal wave. Key concepts include wave parameters, Doppler effect, intensity, musical notes, and applications in sonar, medicine, and communication.</p>
      </div>
    </div>
  `},{id:"optics",title:"Optics and Light",content:`
    <div class="content-section">
      <h2>💡 Optics and Light</h2>
      <p><strong>Optics</strong> is the branch of physics that studies the behavior and properties of light, including reflection, refraction, lenses, mirrors, and optical instruments.</p>

      <hr />

      <h3>1️⃣ Nature of Light</h3>
      <ul>
        <li>Light is an electromagnetic wave.</li>
        <li>Travels in straight lines in a homogeneous medium.</li>
        <li>Speed of light in vacuum: c ≈ 3 × 10⁸ m/s.</li>
        <li>Can behave as a particle (photons) and a wave (wave theory).</li>
      </ul>

      <hr />

      <h3>2️⃣ Reflection of Light</h3>
      <p>When light bounces off a surface, it follows the <strong>law of reflection</strong>:</p>
      <ul>
        <li>Angle of incidence (i) = Angle of reflection (r)</li>
        <li>Incident ray, reflected ray, and normal lie in the same plane.</li>
      </ul>

      <div class="image-container">
        <img src="${Uv}" alt="Reflection Diagram" />
        <p class="image-caption">Law of reflection showing incident and reflected rays</p>
      </div>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>A ray strikes a plane mirror at 30° with the normal. Find angle of reflection.</p>
        <p><strong>Solution:</strong> Angle of reflection r = i = 30°</p>
      </div>

      <hr />

      <h3>3️⃣ Refraction of Light</h3>
      <p>Refraction occurs when light passes from one medium to another and changes speed, bending at the interface.</p>
      <ul>
        <li>Snell's Law: <code>n1 sin θ1 = n2 sin θ2</code></li>
        <li>n1, n2 = refractive indices of two media</li>
        <li>θ1 = angle of incidence, θ2 = angle of refraction</li>
      </ul>

      <div class="image-container">
        <img src="${Hv}" alt="Refraction Diagram" />
        <p class="image-caption">Refraction of light at a boundary between two media</p>
      </div>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>Light passes from air (n = 1) into glass (n = 1.5) at 30° incidence. Find refraction angle θ2.</p>
        <p><strong>Solution:</strong> sin θ2 = n1/n2 × sin θ1 = 1/1.5 × sin30° = 0.333 → θ2 ≈ 19.5°</p>
      </div>

      <hr />

      <h3>4️⃣ Lenses</h3>
      <p>Lenses are transparent media that refract light to form images.</p>
      <ul>
        <li><strong>Convex Lens:</strong> Converging lens, forms real or virtual images.</li>
        <li><strong>Concave Lens:</strong> Diverging lens, forms virtual images.</li>
      </ul>

      <h4>Lens Formula:</h4>
      <code>1/f = 1/v - 1/u</code>
      <ul>
        <li>f = focal length</li>
        <li>v = image distance</li>
        <li>u = object distance</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Convex lens of f = 20 cm forms an image at v = 30 cm. Find object distance u.</p>
        <p><strong>Solution:</strong> 1/u = 1/v - 1/f = 1/30 - 1/20 = (2-3)/60 = -1/60 → u = -60 cm</p>
        <p>Negative sign indicates the object is on the opposite side of the lens.</p>
      </div>

      <hr />

      <h3>5️⃣ Mirrors</h3>
      <ul>
        <li>Concave mirror: Converging mirror, forms real or virtual images.</li>
        <li>Convex mirror: Diverging mirror, forms virtual images.</li>
      </ul>

      <h4>Mirror Formula:</h4>
      <code>1/f = 1/v + 1/u</code>
      <ul>
        <li>f = focal length</li>
        <li>v = image distance</li>
        <li>u = object distance</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>A concave mirror forms an image 15 cm from the mirror of an object 10 cm away. Find focal length.</p>
        <p><strong>Solution:</strong> 1/f = 1/v + 1/u = 1/15 + 1/10 = (2+3)/30 = 5/30 → f = 6 cm</p>
      </div>

      <hr />

      <h3>6️⃣ Magnification</h3>
      <p>Magnification M = Image height / Object height = - v/u</p>
      <ul>
        <li>Negative magnification → image is inverted</li>
        <li>Positive magnification → image is upright</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>Concave mirror, object distance u = 10 cm, image distance v = 15 cm. Find magnification.</p>
        <p>M = -v/u = -15/10 = -1.5 → Image is 1.5× larger and inverted</p>
      </div>

      <hr />

      <h3>7️⃣ Applications of Optics</h3>
      <ul>
        <li>Corrective lenses: Glasses for myopia or hypermetropia.</li>
        <li>Microscopes, telescopes, and cameras.</li>
        <li>Periscopes and optical instruments in submarines.</li>
        <li>Laser optics for communication and medical applications.</li>
      </ul>

      <hr />

      <h3>8️⃣ Practice Problems</h3>
      <ol>
        <li>Convex lens f = 25 cm, object at 50 cm. Find image distance and magnification.</li>
        <li>Concave mirror f = 10 cm, object at 15 cm. Find image distance and magnification.</li>
        <li>Light passes from water (n = 1.33) to air at 45° incidence. Find angle of refraction.</li>
        <li>Plane mirror, object at 20 cm. Find image distance.</li>
        <li>Convex lens f = 30 cm, image at 60 cm. Find object distance.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ 1/v = 1/f + 1/u = 1/25 + 1/50 = 3/50 → v ≈ 16.67 cm, M = -v/u = -16.67/50 ≈ -0.33</p>
        <p>2️⃣ 1/v = 1/f - 1/u = 1/10 - 1/15 = 1/30 → v = 30 cm, M = -v/u = -30/15 = -2</p>
        <p>3️⃣ sin θ2 = n1/n2 × sin θ1 = 1.33/1 × sin45° ≈ 0.94 → θ2 ≈ 70°</p>
        <p>4️⃣ Plane mirror: Image distance = object distance = 20 cm</p>
        <p>5️⃣ 1/u = 1/v - 1/f = 1/60 - 1/30 = -1/60 → u = -60 cm</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Optics deals with reflection, refraction, lenses, mirrors, and light behavior. Lens and mirror formulas, magnification, and refractive index are key concepts with real-life applications in glasses, cameras, and optical instruments.</p>
      </div>
    </div>
  `}]},chemistry:{title:"Chemistry",subtopics:[{id:"atomic-theory",title:"Atomic Structure",content:`
    <div class="content-section">
      <h2>📘 Atomic Structure</h2>
      <p><strong>Atomic structure</strong> explains the composition and arrangement of atoms — the fundamental building blocks of matter. 
      From early atomic theories to modern quantum models, scientists have progressively refined our understanding of atoms.</p>

      <hr />

      <h3>1️⃣ Dalton's Atomic Theory</h3>
      <p>John Dalton (1803) proposed the first scientific model of the atom:</p>
      <ul>
        <li>All matter is made of indivisible atoms.</li>
        <li>Atoms of the same element are identical in mass and properties.</li>
        <li>Atoms combine in simple ratios to form compounds.</li>
        <li>Chemical reactions involve rearrangement of atoms, not their creation or destruction.</li>
      </ul>
      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Water (H₂O) forms from 2 hydrogen atoms and 1 oxygen atom, illustrating the combination of atoms in fixed ratios.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Dalton's model explained chemical reactions but could not explain subatomic structure or isotopes.</p>
      </div>

      <hr />

      <h3>2️⃣ Thomson's Plum Pudding Model</h3>
      <p>J.J. Thomson (1897) discovered the electron and proposed a new model:</p>
      <ul>
        <li>Atoms are spheres of positive charge.</li>
        <li>Electrons are embedded within the positive “pudding.”</li>
        <li>Electrons balance the positive charge of the atom.</li>
      </ul>
      <div class="image-container">
        <img src="${Bv}" alt="Thomson Plum Pudding Model" />
        <p class="image-caption">Thomson's model showing electrons embedded in a positive sphere</p>
      </div>
      <div class="example-box">
        <p>Example: Cathode ray experiments led to discovery of electrons → negative particles inside atom.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Thomson's model introduced subatomic particles but could not explain nucleus or electron arrangement.</p>
      </div>

      <hr />

      <h3>3️⃣ Rutherford’s Nuclear Model</h3>
      <p>Ernest Rutherford (1911) performed the gold foil experiment, discovering the atomic nucleus:</p>
      <ul>
        <li>Atom mostly empty space.</li>
        <li>All positive charge and most mass concentrated in a small nucleus.</li>
        <li>Electrons orbit the nucleus.</li>
      </ul>
      <div class="image-container">
        <img src="${qv}" alt="Rutherford Atomic Model" />
        <p class="image-caption">Rutherford model with electrons orbiting dense nucleus</p>
      </div>
      <div class="example-box">
        <p>Example: Alpha particles mostly pass through gold foil, but few are deflected → dense positive nucleus.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Rutherford's model introduced the nucleus but could not explain electron stability or energy levels.</p>
      </div>

      <hr />

      <h3>4️⃣ Bohr's Model of the Atom</h3>
      <p>Niels Bohr (1913) proposed a planetary model of the atom:</p>
      <ul>
        <li>Electrons orbit the nucleus in fixed energy levels (shells).</li>
        <li>Electrons do not radiate energy while in stable orbits.</li>
        <li>Energy is absorbed or emitted when electrons jump between levels (quantized energy).</li>
      </ul>
      <div class="image-container">
        <img src="${Lv}" alt="Bohr Atomic Model" />
        <p class="image-caption">Bohr model showing electrons in quantized orbits around nucleus</p>
      </div>
      <div class="example-box">
        <p>Example: Hydrogen atom spectrum explained by electron transitions between energy levels.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Bohr model explained spectral lines but could not explain multi-electron atoms accurately.</p>
      </div>

      <hr />

      <h3>5️⃣ Quantum Mechanical Model</h3>
      <p>The modern atomic theory, based on quantum mechanics, describes electrons as wavefunctions:</p>
      <ul>
        <li>Electrons exist in <strong>probability clouds (orbitals)</strong>, not fixed orbits.</li>
        <li>Each orbital has a specific energy and shape (s, p, d, f).</li>
        <li>Heisenberg’s Uncertainty Principle: Cannot know exact position and momentum simultaneously.</li>
        <li>Schrödinger equation describes allowed energies and spatial distributions.</li>
      </ul>
      <div class="image-container">
        <img src="${Gv}" alt="Quantum Atomic Model" />
        <p class="image-caption">Electron cloud model showing probability density of electrons</p>
      </div>
      <div class="example-box">
        <p>Example: In hydrogen atom, electron is more likely to be found close to nucleus → 1s orbital.</p>
      </div>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Quantum model explains multi-electron atoms, chemical bonding, and spectroscopy accurately.</p>
      </div>

      <hr />

      <h3>6️⃣ Atomic Particles</h3>
      <ul>
        <li><strong>Protons (p⁺):</strong> Positive charge, mass ≈ 1 u, found in nucleus.</li>
        <li><strong>Neutrons (n⁰):</strong> Neutral, mass ≈ 1 u, in nucleus, contribute to isotopes.</li>
        <li><strong>Electrons (e⁻):</strong> Negative charge, negligible mass, orbit nucleus.</li>
      </ul>
      <div class="highlight-box">
        <p><strong>Highlight:</strong> Number of protons = atomic number, determines element identity. Electrons = protons in neutral atom. Neutrons affect atomic mass and isotopes.</p>
      </div>

      <hr />

      <h3>7️⃣ Isotopes, Isobars, and Isotones</h3>
      <ul>
        <li><strong>Isotopes:</strong> Same atomic number, different mass number (e.g., C-12, C-14).</li>
        <li><strong>Isobars:</strong> Same mass number, different atomic number.</li>
        <li><strong>Isotones:</strong> Same number of neutrons, different atomic number.</li>
      </ul>

      <hr />

      <h3>8️⃣ Atomic Spectra</h3>
      <p>When electrons move between energy levels, they emit or absorb light, producing atomic spectra:</p>
      <ul>
        <li><strong>Emission Spectrum:</strong> Bright lines on dark background.</li>
        <li><strong>Absorption Spectrum:</strong> Dark lines on bright background.</li>
      </ul>
      <div class="image-container">
        <img src="${Yv}" alt="Atomic Spectra" />
        <p class="image-caption">Emission and absorption spectra of hydrogen</p>
      </div>

      <hr />

      <h3>9️⃣ Examples & Real-Life Applications</h3>
      <ul>
        <li>Lasers → electron transitions in atoms.</li>
        <li>Nuclear power → fission of atomic nuclei.</li>
        <li>Medical imaging → isotopes in diagnostics.</li>
        <li>Chemical bonding → determined by electron arrangement.</li>
        <li>Spectroscopy → identifying elements in stars and materials.</li>
      </ul>

      <hr />

      <h3>🔹 Practice Problems</h3>
      <ol>
        <li>Draw the Bohr model for lithium (Z=3) and indicate electron shells.</li>
        <li>Calculate the number of neutrons in C-14.</li>
        <li>Explain why isotopes have similar chemical properties but different masses.</li>
        <li>Identify s, p, d orbitals and their shapes.</li>
        <li>Explain the difference between emission and absorption spectra.</li>
      </ol>

      <div class="solution-box">
        <p>1️⃣ Lithium: 2 electrons in 1st shell, 1 in 2nd shell.</p>
        <p>2️⃣ Neutrons in C-14: 14-6 = 8 neutrons.</p>
        <p>3️⃣ Isotopes same protons → same chemistry, different mass affects stability.</p>
        <p>4️⃣ s = spherical, p = dumbbell-shaped, d = cloverleaf, f = complex.</p>
        <p>5️⃣ Emission = light emitted, absorption = light absorbed by electrons.</p>
      </div>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> Atomic structure evolved from Dalton’s indivisible atom to quantum mechanical models. Understanding subatomic particles, energy levels, isotopes, and atomic spectra is essential in chemistry, physics, and modern technology.</p>
      </div>
    </div>
  `},{id:"mole-concept",title:"Mole Concept",content:`
    <div class="content-section">
      <h2>📘 Mole Concept</h2>
      <p>The <strong>mole</strong> is the SI unit used to measure the <em>amount of substance</em>. It connects the microscopic world of atoms, molecules, and ions to macroscopic quantities that we can measure in the laboratory.</p>

      <div class="highlight-box">
        <p><strong>Definition:</strong> 1 mole contains exactly <strong>6.022 × 10²³ particles</strong> (Avogadro's number, Nₐ).</p>
      </div>

      <hr />

      <h3>1️⃣ Fundamental Terms</h3>
      <ul>
        <li><strong>Mole (n):</strong> Amount of substance containing Nₐ particles.</li>
        <li><strong>Molar Mass (M):</strong> Mass of 1 mole of a substance in grams.</li>
        <li><strong>Number of Particles (N):</strong> Total atoms, molecules, ions, or electrons in a sample.</li>
        <li><strong>Molarity (M):</strong> Number of moles of solute per liter of solution.</li>
      </ul>

      <hr />

      <h3>2️⃣ Key Formulas</h3>
      <ul>
        <li><strong>Number of moles:</strong> <code>n = mass / M</code></li>
        <li><strong>Molarity:</strong> <code>M = n / V (L)</code></li>
        <li><strong>Number of particles:</strong> <code>N = n × Nₐ</code></li>
      </ul>

      <div class="highlight-box">
        <p><strong>Tip:</strong> Always keep units consistent: mass in grams, volume in liters, Nₐ = 6.022 × 10²³.</p>
      </div>

      <hr />

      <h3>3️⃣ Relationship Between Mass, Moles, and Particles</h3>
      <p>The mole allows us to count particles by weighing substances:</p>
      <ul>
        <li>If you have 12 g of carbon, n = 12 / 12 = 1 mole.</li>
        <li>Number of carbon atoms: N = 1 × 6.022 × 10²³ = 6.022 × 10²³ atoms.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 1:</h4>
        <p>Calculate the number of moles in 18 g of water (H₂O).</p>
        <ul>
          <li>Molar mass: M = 2×1 + 16 = 18 g/mol</li>
          <li>n = mass / M = 18 / 18 = 1 mole</li>
          <li>Number of molecules: N = n × Nₐ = 6.022 × 10²³ molecules</li>
        </ul>
      </div>

      <hr />

      <h3>4️⃣ Avogadro’s Number (Nₐ)</h3>
      <p>Avogadro’s number defines the number of particles in 1 mole of any substance. It allows chemists to bridge the microscopic and macroscopic worlds.</p>
      <ul>
        <li>1 mole of H atoms = 6.022 × 10²³ atoms</li>
        <li>1 mole of NaCl = 6.022 × 10²³ formula units</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Fact:</strong> Nₐ is constant for all substances, whether atoms, molecules, ions, or electrons.</p>
      </div>

      <hr />

      <h3>5️⃣ Molar Mass and Mass Relationship</h3>
      <p>The <strong>molar mass</strong> is obtained from the periodic table:</p>
      <ul>
        <li>H = 1 g/mol, O = 16 g/mol</li>
        <li>H₂O = 2×1 + 16 = 18 g/mol</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 2:</h4>
        <p>Find the mass of 0.5 moles of NaCl (M = 58.5 g/mol).</p>
        <p>Mass = n × M = 0.5 × 58.5 = 29.25 g</p>
      </div>

      <hr />

      <h3>6️⃣ Molarity and Solution Concentration</h3>
      <p>Molarity measures the number of moles of solute per liter of solution. It's widely used in chemical reactions, titrations, and stoichiometry.</p>
      <ul>
        <li>M = n / V, V in liters</li>
        <li>Used to calculate the exact amount of solute needed</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 3:</h4>
        <p>Find molarity of 2 moles of NaOH in 0.5 L water.</p>
        <p>M = 2 / 0.5 = 4 M</p>
      </div>

      <hr />

      <h3>7️⃣ Number of Particles</h3>
      <p>Once the number of moles is known, we can find the total number of particles:</p>
      <ul>
        <li>N = n × Nₐ</li>
        <li>Essential for calculating molecules, atoms, or ions in reactions.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 4:</h4>
        <p>Number of molecules in 0.25 moles of CO₂:</p>
        <p>N = 0.25 × 6.022 × 10²³ ≈ 1.505 × 10²³ molecules</p>
      </div>

      <hr />

      <h3>8️⃣ Gas Volume at STP</h3>
      <p>At standard temperature and pressure (STP, 0°C & 1 atm):</p>
      <ul>
        <li>1 mole of any ideal gas occupies 22.4 L</li>
        <li>V = n × 22.4 L</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 5:</h4>
        <p>Volume of 0.5 moles of O₂ at STP:</p>
        <p>V = 0.5 × 22.4 = 11.2 L</p>
      </div>

      <hr />

      <h3>9️⃣ Percent Composition</h3>
      <p>Using moles, we can calculate % composition of elements in a compound:</p>
      <ul>
        <li>% element = (n × atomic mass of element / molar mass of compound) × 100</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example 6:</h4>
        <p>% of H and O in H₂O:</p>
        <ul>
          <li>% H = (2×1 / 18) ×100 ≈ 11.11%</li>
          <li>% O = (16 / 18) ×100 ≈ 88.89%</li>
        </ul>
      </div>

      <hr />

      <h3>🔟 Practice Problems</h3>
      <ol>
        <li>Calculate moles in 50 g of Na₂CO₃.</li>
        <li>Find number of particles in 0.1 mole of Al.</li>
        <li>Determine molarity of 3 moles of HCl in 1.5 L solution.</li>
        <li>Calculate volume of 2 moles of N₂ at STP.</li>
        <li>Find % composition of C, H in CH₄.</li>
      </ol>

      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> The mole concept connects mass, moles, and number of particles. It is fundamental in stoichiometry, solutions, gas laws, and analytical chemistry. Mastery of this concept allows precise calculation and understanding of chemical reactions and quantities.</p>
      </div>

      <hr />

      <h3>🔹 Diagram Prompts for AI Generation</h3>
      <ul>
        <li>"Diagram showing the relationship between mass, moles, and number of particles, with arrows connecting mass → moles → molecules/atoms, labeled Nₐ, M, and n, clean educational style."</li>
        <li>"Illustration of mole concept with a balance showing mass of substance, pile of molecules, and Avogadro's number, colorful and clear for chemistry textbook."</li>
        <li>"Flowchart showing conversions: mass ↔ moles ↔ number of particles, including molarity and gas volume at STP, suitable for educational use."</li>
      </ul>
    </div>
  `}]},math:{title:"Mathematics",subtopics:[{id:"calculus-basics",title:"Calculus Basics",content:`
            <div class="content-section">
              <h2>Introduction to Calculus</h2>
              <p>Calculus is the mathematics of change and motion, divided into differential and integral calculus.</p>
              
              <div class="formula-section">
                <h3>Basic Derivatives</h3>
                <div class="formula-grid">
                  <div class="formula-card">
                    <code>d/dx(xⁿ) = nxⁿ⁻¹</code>
                    <p>Power Rule</p>
                  </div>
                  <div class="formula-card">
                    <code>d/dx(sin x) = cos x</code>
                    <p>Trigonometric</p>
                  </div>
                  <div class="formula-card">
                    <code>d/dx(eˣ) = eˣ</code>
                    <p>Exponential</p>
                  </div>
                </div>
              </div>
            </div>
          `}]},biology:{title:"Biology",subtopics:[{id:"cell-biology",title:"Cell Biology",content:`
    <div class="content-section">
      <h2>📘 Cell Biology: The Unit of Life</h2>
      <p>The <strong>cell</strong> is the basic structural, functional, and biological unit of all living organisms. It carries out life processes and acts as the building block of tissues and organs.</p>

      <div class="highlight-box">
        <p><strong>Key Concept:</strong> "All living organisms are made of cells, and all cells arise from pre-existing cells."</p>
      </div>

      <hr />

      <h3>1️⃣ History and Discovery of Cells</h3>
      <ul>
        <li>1665: Robert Hooke discovered cells in cork slices and coined the term <em>"cell"</em> because they reminded him of small rooms.</li>
        <li>1674: Antonie van Leeuwenhoek observed living microorganisms using simple microscopes.</li>
        <li>1838-1839: Schleiden and Schwann formulated the <strong>Cell Theory</strong> — all plants and animals are made of cells.</li>
        <li>1855: Rudolf Virchow stated that all cells come from pre-existing cells (<em>Omnis cellula e cellula</em>).</li>
      </ul>

      <hr />

      <h3>2️⃣ Classification of Cells</h3>
      <p>Cells are classified into:</p>
      <ul>
        <li><strong>Prokaryotic Cells:</strong> No true nucleus, DNA in nucleoid, no membrane-bound organelles. Examples: bacteria, cyanobacteria.</li>
        <li><strong>Eukaryotic Cells:</strong> True nucleus, membrane-bound organelles. Examples: plant cells, animal cells, fungi, protists.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Bacteria are prokaryotic; human liver cells are eukaryotic. Plant cells have chloroplasts, while animal cells do not.</p>
      </div>

      <hr />

      <h3>3️⃣ Cell Structure and Organelles</h3>
      <p>Cells contain specialized structures called <strong>organelles</strong>:</p>
      <ul>
        <li><strong>Cell Membrane:</strong> Semi-permeable barrier regulating entry and exit.</li>
        <li><strong>Cytoplasm:</strong> Gel-like fluid housing organelles; site of biochemical reactions.</li>
        <li><strong>Nucleus:</strong> Contains DNA; controls cellular functions.</li>
        <li><strong>Mitochondria:</strong> Powerhouse producing ATP via cellular respiration.</li>
        <li><strong>Ribosomes:</strong> Protein synthesis; can be free or ER-bound.</li>
        <li><strong>Endoplasmic Reticulum (ER):</strong> Rough ER (protein synthesis), Smooth ER (lipid synthesis and detoxification).</li>
        <li><strong>Golgi Apparatus:</strong> Modifies, packages, and transports proteins and lipids.</li>
        <li><strong>Lysosomes:</strong> Digestive enzymes for waste breakdown.</li>
        <li><strong>Chloroplasts:</strong> Present in plant cells; site of photosynthesis.</li>
        <li><strong>Vacuoles:</strong> Storage for water, nutrients, and waste.</li>
        <li><strong>Cytoskeleton:</strong> Provides structural support and aids in intracellular transport.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Note:</strong> Prokaryotic cells lack most membrane-bound organelles. Eukaryotic cells have specialized organelles performing distinct functions.</p>
      </div>

      <hr />

      <h3>4️⃣ Cell Membrane and Transport</h3>
      <p>The cell membrane controls substance movement:</p>
      <ul>
        <li><strong>Passive Transport:</strong> Diffusion, osmosis, facilitated diffusion — no energy required.</li>
        <li><strong>Active Transport:</strong> Movement against concentration gradient using ATP.</li>
        <li><strong>Endocytosis:</strong> Engulfing large molecules into the cell.</li>
        <li><strong>Exocytosis:</strong> Expelling molecules out of the cell.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Oxygen enters red blood cells by diffusion (passive transport). Glucose may require active transport.</p>
      </div>

      <hr />

      <h3>5️⃣ Nucleus and Genetic Material</h3>
      <ul>
        <li>Contains DNA organized into chromosomes.</li>
        <li>Genes regulate protein synthesis and inheritance.</li>
        <li>Nuclear membrane controls RNA/protein transport.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Tip:</strong> The nucleolus synthesizes rRNA and assembles ribosome subunits.</p>
      </div>

      <hr />

      <h3>6️⃣ Mitochondria: Energy Production</h3>
      <ul>
        <li>Cellular respiration: <code>Glucose + O₂ → CO₂ + H₂O + ATP</code></li>
        <li>ATP fuels cell processes like active transport, growth, and division.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Muscle cells contain many mitochondria to meet high energy needs.</p>
      </div>

      <hr />

      <h3>7️⃣ Ribosomes and Protein Synthesis</h3>
      <p>Ribosomes read mRNA to synthesize proteins essential for enzymes, hormones, and structural components.</p>

      <div class="highlight-box">
        <p><strong>Key Point:</strong> Proteins are critical for cell function and signaling.</p>
      </div>

      <hr />

      <h3>8️⃣ Plant vs Animal Cells</h3>
      <table class="table">
        <thead>
          <tr><th>Feature</th><th>Plant Cell</th><th>Animal Cell</th></tr>
        </thead>
        <tbody>
          <tr><td>Cell Wall</td><td>Present (cellulose)</td><td>Absent</td></tr>
          <tr><td>Chloroplasts</td><td>Present</td><td>Absent</td></tr>
          <tr><td>Vacuole</td><td>Large central vacuole</td><td>Small or absent</td></tr>
          <tr><td>Shape</td><td>Regular, rectangular</td><td>Irregular, round</td></tr>
        </tbody>
      </table>

      <hr />

      <h3>9️⃣ Cell Division</h3>
      <ul>
        <li><strong>Mitosis:</strong> Produces 2 identical daughter cells, growth and repair.</li>
        <li><strong>Meiosis:</strong> Produces 4 non-identical gametes, genetic variation.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Skin cells divide by mitosis. Sperm and eggs form via meiosis.</p>
      </div>

      <hr />

      <h3>🔟 Specialised Cells</h3>
      <ul>
        <li>Neurons – nerve impulse transmission.</li>
        <li>Red blood cells – oxygen transport.</li>
        <li>Muscle cells – contraction and movement.</li>
        <li>Guard cells – control stomatal openings in plants.</li>
      </ul>

      <hr />

      <h3>1️⃣1️⃣ Cell Communication</h3>
      <p>Cells communicate using chemical signals, receptors, and junctions. Vital for multicellular coordination.</p>

      <hr />

      <h3>1️⃣2️⃣ Cell Organelles Summary</h3>
      <ul>
        <li>Cell membrane – protection & transport</li>
        <li>Cytoplasm – site of reactions</li>
        <li>Nucleus – control & genetic info</li>
        <li>Mitochondria – energy</li>
        <li>Ribosomes – protein synthesis</li>
        <li>ER – protein/lipid processing</li>
        <li>Golgi – packaging & transport</li>
        <li>Lysosomes – digestion</li>
        <li>Chloroplasts – photosynthesis (plants)</li>
        <li>Vacuole – storage</li>
      </ul>

      <hr />

      <h3>🔹 Practice Questions</h3>
      <ol>
        <li>List differences between prokaryotic and eukaryotic cells.</li>
        <li>Explain the role of mitochondria in energy production.</li>
        <li>Compare plant and animal cells.</li>
        <li>Describe mitosis and meiosis processes.</li>
        <li>Identify organelles responsible for protein synthesis.</li>
      </ol>

      <hr />

      <h3>🔹 Diagram</h3>
      <div class="image-container">
        <img src="${Xv}" alt="Detailed diagram of plant and animal cells with labeled organelles" />
        <p class="image-caption">Labeled diagram showing both plant and animal cell organelles</p>
      </div>

      <div class="summary-box">
        <p><strong>Summary:</strong> Cells are the fundamental units of life. Understanding their structure, types, organelles, and functions forms the foundation for studying genetics, physiology, and microbiology. Transport, communication, and division are critical cellular processes.</p>
      </div>
    </div>
  `},{id:"digestive-system",title:"Human Digestive System",content:`
    <div class="content-section">
      <h2>🌟 Human Digestive System</h2>
      <p>The digestive system is responsible for breaking down food into nutrients, which are absorbed and used by the body for energy, growth, and repair.</p>

      <div class="highlight-box">
        <p><strong>Key Concept:</strong> Digestion involves mechanical and chemical processes to convert complex food into simpler forms.</p>
      </div>

      <hr />

      <h3>1️⃣ Main Parts of Digestive System</h3>
      <ul>
        <li>Mouth – mechanical digestion via chewing and chemical digestion via salivary amylase.</li>
        <li>Esophagus – transports food to the stomach via peristalsis.</li>
        <li>Stomach – protein digestion via pepsin, acidic environment (HCl).</li>
        <li>Small intestine – site of majority absorption; enzymes from pancreas aid digestion.</li>
        <li>Large intestine – water absorption, formation of feces.</li>
        <li>Liver – produces bile to emulsify fats.</li>
        <li>Pancreas – secretes digestive enzymes and bicarbonates.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>Carbohydrates like starch are broken down to glucose by amylase enzymes in mouth and small intestine.</p>
      </div>

      <hr />

      <h3>2️⃣ Digestive Processes</h3>
      <ul>
        <li><strong>Ingestion:</strong> Intake of food.</li>
        <li><strong>Propulsion:</strong> Swallowing and peristalsis.</li>
        <li><strong>Mechanical digestion:</strong> Chewing and churning.</li>
        <li><strong>Chemical digestion:</strong> Enzymatic breakdown of macromolecules.</li>
        <li><strong>Absorption:</strong> Nutrients absorbed in small intestine.</li>
        <li><strong>Defecation:</strong> Removal of undigested waste as feces.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Tip:</strong> Digestive enzymes are specific: amylase for carbohydrates, proteases for proteins, lipases for fats.</p>
      </div>

      <hr />

      <h3>3️⃣ Common Digestive Disorders</h3>
      <ul>
        <li>Acidity and heartburn – excess HCl.</li>
        <li>Constipation – water not absorbed properly.</li>
        <li>Jaundice – liver disease, bilirubin accumulation.</li>
        <li>Diarrhea – infection or poor absorption.</li>
      </ul>

      <hr />

      <h3>🔹 Human Digestive System</h3>
      <div class="image-container">
     <img src="${Qv}" alt="Human Respiratory System" />
     <p class="image-caption">Complete human respiratory system showing nose, pharynx, larynx, trachea, bronchi, lungs with alveoli, and diaphragm</p>
     </div>

    </div>
  `},{id:"respiratory-system",title:"Human Respiratory System",content:`
    <div class="content-section">
      <h2>🌬️ Human Respiratory System</h2>
      <p>The respiratory system is responsible for the intake of oxygen and the removal of carbon dioxide, essential for cellular respiration and maintaining homeostasis.</p>

      <div class="highlight-box">
        <p><strong>Key Concept:</strong> Oxygen from inhaled air diffuses into blood, while carbon dioxide produced in cells is expelled from the body through exhalation.</p>
      </div>

      <hr />

      <h3>1️⃣ Structure and Main Organs</h3>
      <ul>
        <li><strong>Nose and Nasal Cavity:</strong> Filters dust and microbes, warms and moistens air, and detects smell.</li>
        <li><strong>Pharynx (Throat):</strong> Common passage for air and food, connects nasal cavity to larynx.</li>
        <li><strong>Larynx (Voice Box):</strong> Contains vocal cords, responsible for sound production, prevents food from entering trachea.</li>
        <li><strong>Trachea (Windpipe):</strong> Tube with cartilage rings providing structural support, transports air to bronchi.</li>
        <li><strong>Bronchi and Bronchioles:</strong> Bronchi branch into smaller bronchioles inside the lungs, distributing air to alveoli.</li>
        <li><strong>Lungs:</strong> Main organs for gas exchange, contain millions of alveoli.</li>
        <li><strong>Alveoli:</strong> Tiny air sacs with thin walls surrounded by capillaries, site of oxygen and carbon dioxide exchange.</li>
        <li><strong>Diaphragm:</strong> Dome-shaped muscle at the base of the lungs; contraction expands thoracic cavity, aiding inhalation.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>When you inhale, oxygen enters alveoli and diffuses into the blood. Hemoglobin binds oxygen and carries it to tissues.</p>
      </div>

      <hr />

      <h3>2️⃣ Mechanism of Breathing</h3>
      <ul>
        <li><strong>Inhalation:</strong> Diaphragm contracts, rib cage expands, lung volume increases, air rushes in due to negative pressure.</li>
        <li><strong>Exhalation:</strong> Diaphragm relaxes, rib cage moves inward, lung volume decreases, air expelled due to positive pressure.</li>
        <li><strong>Gas Exchange:</strong> Oxygen diffuses from alveoli to capillaries; carbon dioxide diffuses from blood to alveoli.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Key Point:</strong> The rate and depth of breathing are controlled by the medulla oblongata in response to CO2 concentration in blood.</p>
      </div>

      <hr />

      <h3>3️⃣ Transport of Gases in Blood</h3>
      <ul>
        <li>Oxygen transport: Mostly bound to hemoglobin as oxyhemoglobin; a small amount dissolves in plasma.</li>
        <li>Carbon dioxide transport: Dissolved in plasma, as bicarbonate ions, and bound to hemoglobin as carbaminohemoglobin.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>During exercise, muscles produce more CO2, increasing respiratory rate to expel excess CO2 and supply more O2.</p>
      </div>

      <hr />

      <h3>4️⃣ Control of Breathing</h3>
      <ul>
        <li>Breathing is involuntary but can be voluntarily controlled to some extent.</li>
        <li>Medulla oblongata regulates rhythm and depth.</li>
        <li>Chemoreceptors detect CO2 levels in blood and adjust breathing rate.</li>
      </ul>

      <div class="highlight-box">
        <p><strong>Note:</strong> High CO2 concentration stimulates faster breathing, low CO2 slows it down. Oxygen levels have less influence under normal conditions.</p>
      </div>

      <hr />

      <h3>5️⃣ Respiratory Volumes and Capacities</h3>
      <ul>
        <li><strong>Tidal Volume (TV):</strong> Air inhaled/exhaled during normal breathing (~500 mL).</li>
        <li><strong>Inspiratory Reserve Volume (IRV):</strong> Additional air inhaled after normal inspiration.</li>
        <li><strong>Expiratory Reserve Volume (ERV):</strong> Additional air exhaled after normal expiration.</li>
        <li><strong>Vital Capacity (VC):</strong> Maximum air exhaled after maximum inhalation.</li>
        <li><strong>Residual Volume (RV):</strong> Air remaining in lungs after forced exhalation.</li>
      </ul>

      <hr />

      <h3>6️⃣ Common Respiratory Disorders</h3>
      <ul>
        <li><strong>Asthma:</strong> Inflammation and narrowing of airways; difficulty breathing.</li>
        <li><strong>Bronchitis:</strong> Infection and inflammation of bronchi.</li>
        <li><strong>Pneumonia:</strong> Lung infection causing fluid in alveoli, reducing gas exchange.</li>
        <li><strong>Emphysema:</strong> Alveolar wall damage, often due to smoking; reduces lung elasticity.</li>
        <li><strong>COVID-19:</strong> Viral infection affecting lungs; may cause pneumonia and reduced oxygen absorption.</li>
      </ul>

      <hr />

      <h3>7️⃣ Role in Homeostasis</h3>
      <ul>
        <li>Maintains blood pH by regulating CO2 concentration.</li>
        <li>Supports cellular respiration by providing O2 for ATP production.</li>
        <li>Removes metabolic waste (CO2) efficiently.</li>
      </ul>

      <div class="example-box">
        <h4>🔹 Example:</h4>
        <p>During high-altitude exposure, respiratory rate increases to compensate for lower oxygen availability, maintaining homeostasis.</p>
      </div>

      <hr />

      <h3>8️⃣ Human Respiratory System</h3>
     <div class="image-container">
     <img src="${Vv}" alt="Human Respiratory System" />
     <p class="image-caption">Complete human respiratory system showing nose, pharynx, larynx, trachea, bronchi, lungs with alveoli, and diaphragm</p>
     </div>


      <hr />

      <div class="summary-box">
        <p><strong>Summary:</strong> The respiratory system is crucial for oxygen supply, CO2 removal, and maintaining homeostasis. Key processes include ventilation, gas exchange, and transport of gases. Proper lung function is essential for health, and disorders like asthma, bronchitis, and emphysema impair respiratory efficiency.</p>
      </div>
    </div>
  `}]}};if(D.useEffect(()=>{const y=setTimeout(()=>{const R=C[s||""];R?(h(R),p(R.subtopics[0]?.id||"")):(h({title:"Subject Not Found",subtopics:[{id:"notfound",title:"Not Found",content:'<div class="error-message"><p>🚫 The requested subject is not available. Please check the URL or navigate to Physics, Chemistry, Math, or Biology.</p></div>'}]}),p("notfound")),M(!1)},500);return()=>clearTimeout(y)},[s]),A)return f.jsxs("div",{className:"loading-container",children:[f.jsx("div",{className:"loading-spinner"}),f.jsxs("p",{children:["Loading ",s," content..."]})]});if(!r)return f.jsxs("div",{className:"error-container",children:[f.jsx("h2",{children:"Content Not Available"}),f.jsx("p",{children:"Unable to load the requested subject."})]});const T=r.subtopics.find(y=>y.id===u);return f.jsxs("div",{className:"blog-detail-container",children:[f.jsxs("nav",{className:"blog-left",children:[f.jsxs("div",{className:"sidebar-header",children:[f.jsxs("h3",{children:[r.title," Topics"]}),f.jsxs("span",{className:"topics-count",children:[r.subtopics.length," topics"]})]}),f.jsx("ul",{className:"subtopics-list",children:r.subtopics.map(y=>f.jsxs("li",{className:`subtopic-item ${u===y.id?"active":""}`,onClick:()=>p(y.id),children:[f.jsx("span",{className:"subtopic-number"}),f.jsx("span",{className:"subtopic-title",children:y.title}),u===y.id&&f.jsx("span",{className:"active-indicator"})]},y.id))})]}),f.jsxs("main",{className:"blog-right",children:[f.jsxs("header",{className:"blog-header",children:[f.jsxs("div",{className:"breadcrumb",children:[f.jsx("span",{children:"Education"}),f.jsx("span",{className:"separator",children:"/"}),f.jsx("span",{children:r.title}),f.jsx("span",{className:"separator",children:"/"}),f.jsx("span",{className:"current-topic",children:T?.title||"Select a Topic"})]}),f.jsx("h1",{className:"blog-title",children:r.title}),f.jsxs("p",{className:"blog-meta",children:["📚 Educational Content | 🕐 Updated:"," ",new Date().toLocaleDateString()," | 📖 ",r.subtopics.length," ","Topics"]})]}),f.jsx("article",{className:"blog-content",children:T?f.jsx("section",{className:"content-display",dangerouslySetInnerHTML:{__html:T.content}}):f.jsxs("div",{className:"no-content",children:[f.jsxs("h3",{children:["Welcome to ",r.title,"!"]}),f.jsx("p",{children:"Select a topic from the sidebar to start learning."})]})}),f.jsx("footer",{className:"content-footer",children:f.jsx("div",{className:"navigation-help",children:f.jsxs("p",{children:["💡 ",f.jsx("strong",{children:"Tip:"})," Use the sidebar to navigate between different topics"]})})})]})]})};function Kv(){return f.jsxs("div",{children:[f.jsx(Yp,{}),f.jsxs(_p,{children:[f.jsx(Mi,{path:"/",element:f.jsx(f.Fragment,{children:f.jsxs("main",{children:[f.jsx(Qp,{}),f.jsx(dv,{}),f.jsx(yv,{}),f.jsx(Xp,{}),f.jsx(iv,{})]})})}),f.jsx(Mi,{path:"/about",element:f.jsx(bv,{})}),f.jsx(Mi,{path:"/blogs",element:f.jsx(xv,{})}),f.jsx(Mi,{path:"/blog/:subject",element:f.jsx(Zv,{})})]}),f.jsx(nv,{}),f.jsx(ov,{})]})}Bg.createRoot(document.getElementById("root")).render(f.jsx(Qt.StrictMode,{children:f.jsx(Hp,{children:f.jsx(Kv,{})})}));
