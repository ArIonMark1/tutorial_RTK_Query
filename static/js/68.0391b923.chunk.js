"use strict";(self.webpackChunktutorial_RTK_Query=self.webpackChunktutorial_RTK_Query||[]).push([[68],{68:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var o=n(439),a=n(942),r=n(413);function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=n(433),c=n(791);function l(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var u=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(o&&(o+=" "),o+=t);return o},d=["theme","type"],f=["delay","staleId"],m=function(e){return"number"==typeof e&&!isNaN(e)},p=function(e){return"string"==typeof e},v=function(e){return"function"==typeof e},h=function(e){return p(e)||v(e)?e:null},g=function(e){return(0,c.isValidElement)(e)||p(e)||v(e)||m(e)};function y(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,r=e.collapse,s=void 0===r||r,l=e.collapseDuration,u=void 0===l?300:l;return function(e){var o=e.children,r=e.position,l=e.preventExitTransition,d=e.done,f=e.nodeRef,m=e.isIn,p=a?"".concat(t,"--").concat(r):t,v=a?"".concat(n,"--").concat(r):n,h=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=f.current,n=p.split(" "),o=function e(o){var a;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,i.Z)(n)))};(e=t.classList).add.apply(e,(0,i.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,d,u):d()};m||(l?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[m]),c.createElement(c.Fragment,null,o)}}function T(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var E={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,i.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},b=function(e){var t=e.theme,n=e.type,o=s(e,d);return c.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},C={info:function(e){return c.createElement(b,(0,r.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(b,(0,r.Z)({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(b,(0,r.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(b,(0,r.Z)({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function x(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,c.useState)([]),l=(0,o.Z)(a,2),u=l[0],d=l[1],y=(0,c.useRef)(null),b=(0,c.useRef)(new Map).current,x=function(e){return-1!==u.indexOf(e)},N=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:x,getToast:function(e){return b.get(e)}}).current;function Z(e){var t=e.containerId;!N.props.limit||t&&N.containerId!==t||(N.count-=N.queue.length,N.queue=[])}function _(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function I(){var e=N.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function O(e,t){var a=t.delay,i=t.staleId,l=s(t,f);if(g(e)&&!function(e){return!y.current||N.props.enableMultiContainer&&e.containerId!==N.props.containerId||b.has(e.toastId)&&null==e.updateId}(l)){var u=l.toastId,d=l.updateId,x=l.data,Z=N.props,O=function(){return _(u)},j=null==d;j&&N.count++;var R,w,k=(0,r.Z)((0,r.Z)((0,r.Z)({},Z),{},{style:Z.toastStyle,key:N.toastKey++},Object.fromEntries(Object.entries(l).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:u,updateId:d,data:x,closeToast:O,isIn:!1,className:h(l.className||Z.toastClassName),bodyClassName:h(l.bodyClassName||Z.bodyClassName),progressClassName:h(l.progressClassName||Z.progressClassName),autoClose:!l.isLoading&&(R=l.autoClose,w=Z.autoClose,!1===R||m(R)&&R>0?R:w),deleteToast:function(){var e=T(b.get(u),"removed");b.delete(u),E.emit(4,e);var t=N.queue.length;if(N.count=null==u?N.count-N.displayedToast:N.count-1,N.count<0&&(N.count=0),t>0){var o=null==u?N.props.limit:1;if(1===t||1===o)N.displayedToast++,I();else{var a=o>t?t:o;N.displayedToast=a;for(var r=0;r<a;r++)I()}}else n()}});k.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,r=null,s={theme:t,type:n};return!1===a||(v(a)?r=a(s):(0,c.isValidElement)(a)?r=(0,c.cloneElement)(a,s):p(a)||m(a)?r=a:o?r=C.spinner():function(e){return e in C}(n)&&(r=C[n](s))),r}(k),v(l.onOpen)&&(k.onOpen=l.onOpen),v(l.onClose)&&(k.onClose=l.onClose),k.closeButton=Z.closeButton,!1===l.closeButton||g(l.closeButton)?k.closeButton=l.closeButton:!0===l.closeButton&&(k.closeButton=!g(Z.closeButton)||Z.closeButton);var P=e;(0,c.isValidElement)(e)&&!p(e.type)?P=(0,c.cloneElement)(e,{closeToast:O,toastProps:k,data:x}):v(e)&&(P=e({closeToast:O,toastProps:k,data:x})),Z.limit&&Z.limit>0&&N.count>Z.limit&&j?N.queue.push({toastContent:P,toastProps:k,staleId:i}):m(a)?setTimeout((function(){L(P,k,i)}),a):L(P,k,i)}}function L(e,t,n){var o=t.toastId;n&&b.delete(n);var a={content:e,props:t};b.set(o,a),d((function(e){return[].concat((0,i.Z)(e),[o]).filter((function(e){return e!==n}))})),E.emit(4,T(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return N.containerId=e.containerId,E.cancelEmit(3).on(0,O).on(1,(function(e){return y.current&&_(e)})).on(5,Z).emit(2,N),function(){b.clear(),E.emit(3,N)}}),[]),(0,c.useEffect)((function(){N.props=e,N.isToastActive=x,N.displayedToast=u.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(b.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:y,isToastActive:x}}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function _(e){var t=(0,c.useState)(!1),n=(0,o.Z)(t,2),a=n[0],r=n[1],s=(0,c.useState)(!1),i=(0,o.Z)(s,2),l=i[0],u=i[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,c.useRef)(e),p=e.autoClose,h=e.pauseOnHover,g=e.closeToast,y=e.onClick,T=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",I),document.addEventListener("touchmove",_),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=N(t.nativeEvent),f.y=Z(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=r&&f.x<=s&&f.y>=o&&f.y<=a?x():C()}}function C(){r(!0)}function x(){r(!1)}function _(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&x(),f.x=N(t),f.y=Z(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){m.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),v(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;v(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",C),window.addEventListener("blur",x)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",x))}}),[e.pauseOnFocusLoss]);var O={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return p&&h&&(O.onMouseEnter=x,O.onMouseLeave=C),T&&(O.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:C,pauseToast:x,isRunning:a,preventExitTransition:l,toastRef:d,eventHandlers:O}}function I(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O(e){var t=e.delay,n=e.isRunning,o=e.closeToast,s=e.type,i=void 0===s?"default":s,l=e.hide,d=e.className,f=e.style,m=e.controlledProgress,p=e.progress,h=e.rtl,g=e.isIn,y=e.theme,T=l||m&&0===p,E=(0,r.Z)((0,r.Z)({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:T?0:1});m&&(E.transform="scaleX(".concat(p,")"));var b=u("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":h}),C=v(d)?d({rtl:h,type:i,defaultClassName:b}):u(b,d);return c.createElement("div",(0,a.Z)({role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:C,style:E},m&&p>=1?"onTransitionEnd":"onAnimationEnd",m&&p<1?null:function(){g&&o()}))}var L=function(e){var t=_(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,s=t.eventHandlers,i=e.closeButton,l=e.children,d=e.autoClose,f=e.onClick,m=e.type,p=e.hideProgressBar,h=e.closeToast,g=e.transition,y=e.position,T=e.className,E=e.style,b=e.bodyClassName,C=e.bodyStyle,x=e.progressClassName,N=e.progressStyle,Z=e.updateId,L=e.role,j=e.progress,R=e.rtl,w=e.toastId,k=e.deleteToast,P=e.isIn,M=e.isLoading,A=e.iconOut,B=e.closeOnClick,D=e.theme,F=u("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(m),{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":B}),z=v(T)?T({rtl:R,position:y,type:m,defaultClassName:F}):u(F,T),S=!!j||!d,H={closeToast:h,type:m,theme:D},q=null;return!1===i||(q=v(i)?i(H):(0,c.isValidElement)(i)?(0,c.cloneElement)(i,H):I(H)),c.createElement(g,{isIn:P,done:k,position:y,preventExitTransition:o,nodeRef:a},c.createElement("div",(0,r.Z)((0,r.Z)({id:w,onClick:f,className:z},s),{},{style:E,ref:a}),c.createElement("div",(0,r.Z)((0,r.Z)({},P&&{role:L}),{},{className:v(b)?b({type:m}):u("Toastify__toast-body",b),style:C}),null!=A&&c.createElement("div",{className:u("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},A),c.createElement("div",null,l)),q,c.createElement(O,(0,r.Z)((0,r.Z)({},Z&&!S?{key:"pb-".concat(Z)}:{}),{},{rtl:R,theme:D,delay:d,isRunning:n,isIn:P,closeToast:h,hide:p,type:m,style:N,className:x,controlledProgress:S,progress:j||0}))))},j=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},R=y(j("bounce",!0)),w=(y(j("slide",!0)),y(j("zoom")),y(j("flip")),(0,c.forwardRef)((function(e,t){var n=x(e),o=n.getToastToRender,a=n.containerRef,s=n.isToastActive,i=e.className,l=e.style,d=e.rtl,f=e.containerId;function m(e){var t=u("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":d});return v(i)?i({position:e,rtl:d,defaultClassName:t}):u(t,h(i))}return(0,c.useEffect)((function(){t&&(t.current=a.current)}),[]),c.createElement("div",{ref:a,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,r.Z)({},l):(0,r.Z)((0,r.Z)({},l),{},{pointerEvents:"none"});return c.createElement("div",{className:m(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return c.createElement(L,(0,r.Z)((0,r.Z)({},a),{},{isIn:s(a.toastId),style:(0,r.Z)((0,r.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));w.displayName="ToastContainer",w.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:I,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var k,P=new Map,M=[],A=1;function B(){return""+A++}function D(e){return e&&(p(e.toastId)||m(e.toastId))?e.toastId:B()}function F(e,t){return P.size>0?E.emit(0,e,t):M.push({content:e,options:t}),t.toastId}function z(e,t){return(0,r.Z)((0,r.Z)({},t),{},{type:t&&t.type||e,toastId:D(t)})}function S(e){return function(t,n){return F(t,z(e,n))}}function H(e,t){return F(e,z("default",t))}H.loading=function(e,t){return F(e,z("default",(0,r.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},H.promise=function(e,t,n){var o,a=t.pending,s=t.error,i=t.success;a&&(o=p(a)?H.loading(a,n):H.loading(a.render,(0,r.Z)((0,r.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=function(e,t,a){if(null!=t){var s=(0,r.Z)((0,r.Z)((0,r.Z)({type:e},c),n),{},{data:a}),i=p(t)?{render:t}:t;return o?H.update(o,(0,r.Z)((0,r.Z)({},s),i)):H(i.render,(0,r.Z)((0,r.Z)({},s),i)),a}H.dismiss(o)},u=v(e)?e():e;return u.then((function(e){return l("success",i,e)})).catch((function(e){return l("error",s,e)})),u},H.success=S("success"),H.info=S("info"),H.error=S("error"),H.warning=S("warning"),H.warn=H.warning,H.dark=function(e,t){return F(e,z("default",(0,r.Z)({theme:"dark"},t)))},H.dismiss=function(e){P.size>0?E.emit(1,e):M=M.filter((function(t){return null!=e&&t.options.toastId!==e}))},H.clearWaitingQueue=function(e){return void 0===e&&(e={}),E.emit(5,e)},H.isActive=function(e){var t=!1;return P.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},H.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=P.get(n||k);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,a=n.content,s=(0,r.Z)((0,r.Z)((0,r.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:B()});s.toastId!==e&&(s.staleId=e);var i=s.render||a;delete s.render,F(i,s)}}),0)},H.done=function(e){H.update(e,{progress:1})},H.onChange=function(e){return E.on(4,e),function(){E.off(4,e)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E.on(2,(function(e){k=e.containerId||e,P.set(k,e),M.forEach((function(e){E.emit(0,e.content,e.options)})),M=[]})).on(3,(function(e){P.delete(e.containerId||e),0===P.size&&E.off(0).off(1).off(5)}));var q=n(184),Q=function(e){var t=e.contacts,n=e.deleteContact;return(0,q.jsx)("div",{children:(0,q.jsxs)("div",{className:"contactsContainer",children:[(0,q.jsx)("h2",{className:"headers",children:"Contacts"}),(0,q.jsx)("ul",{className:"contactsList",children:t.map((function(e){return(0,q.jsxs)("li",{className:"contactsList__row",children:[(0,q.jsxs)("div",{className:"container-content",children:[(0,q.jsxs)("p",{children:[(0,q.jsx)("span",{className:"titleContent",children:"Name:"}),(0,q.jsxs)("span",{className:"content",children:[" ",e.name]})]}),(0,q.jsxs)("p",{children:[(0,q.jsx)("span",{className:"titleContent",children:"Phone:"}),(0,q.jsxs)("span",{className:"content",children:[" ",e.phone]})]})]}),(0,q.jsx)("button",{className:"button",type:"button",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))})]})})},V=n(898),K=function(){var e=(0,c.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1],r=(0,c.useState)(""),s=(0,o.Z)(r,2),i=s[0],l=s[1],u=(0,V.Lr)(),d=(0,o.Z)(u,1)[0];return(0,q.jsxs)("form",{id:"form",className:"contactForm form",onSubmit:function(e){e.preventDefault(),d({name:n,phone:i}),a(""),l("")},children:[(0,q.jsxs)("label",{className:"label",htmlFor:"name",children:["Name",(0,q.jsx)("br",{}),(0,q.jsx)("input",{id:"name",className:"nameField",type:"text",name:"name",value:n,onChange:function(e){return a(e.currentTarget.value)},placeholder:"Enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,q.jsxs)("label",{className:"label",htmlFor:"phone",children:["Number",(0,q.jsx)("br",{}),(0,q.jsx)("input",{className:"nameField",id:"phone",type:"tel",name:"phone",value:i,onChange:function(e){return l(e.currentTarget.value)},placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,q.jsx)("button",{className:"button",type:"submit",children:(0,q.jsx)("span",{children:"Add contact"})})]})},G=function(){var e=(0,V.bC)({refetchOnFocus:!0,refetchOnReconnect:!0}),t=e.data,n=e.isFetching,a=e.isSuccess,r=e.isError,s=e.error,i=(0,V.Nt)(),c=(0,o.Z)(i,2),l=c[0],u=c[1].isLoading;return(0,q.jsxs)("div",{className:"container",children:[(0,q.jsx)(w,{position:"top-center",autoClose:1500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,q.jsx)("h2",{className:"headers",children:"Phone Book"}),(0,q.jsx)(K,{}),n&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("h3",{children:"Loading...."}),(0,q.jsx)("hr",{})]}),r&&(0,q.jsx)("div",{children:(0,q.jsx)("h3",{children:s})}),u&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("h3",{children:"Deleting...."}),(0,q.jsx)("hr",{})]}),a&&(0,q.jsx)(Q,{contacts:t,deleteContact:l}),(0,q.jsx)("div",{className:"contactContainer"})]})}}}]);
//# sourceMappingURL=68.0391b923.chunk.js.map