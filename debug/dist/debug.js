var n=require("preact"),e={};function t(e){return e.type===n.Fragment?"Wrapper":"function"==typeof e.type?"Composite":"string"==typeof e.type?"Native":"Text"}function r(e){return e.type===n.Fragment?"Fragment":"function"==typeof e.type?e.type.displayName||e.type.name:"string"==typeof e.type?e.type:"#text"}function o(n,e,t){var r=e.pop(),o=e.reduce(function(n,e){return n?n[e]:null},n);o&&(o[r]=t)}function i(e){var i=e.__c,u=null;null!=i&&i instanceof n.Component&&(u={setState:i.setState.bind(i),forceUpdate:i.forceUpdate.bind(i),setInState:function(n,e){i.setState(function(t){return o(t,n,e),t})},setInProps:function(n,t){o(e.props,n,t),i.setState({})},setInContext:function(n,e){o(i.context,n,e),i.setState({})}});var s=a(e),l=e.endTime-e.startTime;return{nodeType:t(e),type:e.type,name:r(e),ref:e.ref||null,key:e.key||null,updater:u,text:null===e.type?e.props:null,state:null!=i&&i instanceof n.Component?i.state:null,props:e.props,children:null!==e.type?null!=s&&1==s.length&&null===s[0].type?s[0].props:s:null,publicInstance:c(e),memoizedInteractions:[],actualDuration:l,actualStartTime:e.startTime,treeBaseDuration:l}}function a(n){return null==n.__c?null!=n.__k?n.__k.filter(Boolean):[]:null!=n.__k?n.__k.filter(Boolean):null}function u(e){return e.type===n.Fragment&&null===e.__p}function c(e){return u(e)?e.__k.length>0&&null!=e.__k[0]&&null!=e.__k[0].__e?e.__k[0].__e.parentNode:e:null!=e.__c?e.__c:e.type===n.Fragment?e.props:e.__e}function s(n,e,t){if(null==n||null==e)return!1;for(var r in n)if((!t||"children"!=r||null==e[r])&&n[r]!==e[r])return!1;return Object.keys(n).length===Object.keys(e).length}function l(n){var e=n.props,t=r(n),o="";if(e)for(var i in e)if(e.hasOwnProperty(i)&&"children"!==i){var a=e[i];"function"==typeof a&&(a="function "+(a.displayName||a.name)+"() {}"),a=Object(a)!==a||a.toString?a+"":Object.prototype.toString.call(a),o+=" "+i+"="+JSON.stringify(a)}var u=e.children;return"<"+t+o+(u&&u.length?">..</"+t+">":" />")}var f=function(n,e){this.rid=e,this.hook=n,this.pending=[],this.inst2vnode=new WeakMap,this.connected=!1};function d(n){return function(e){try{return n(e)}catch(n){console.error("The react devtools encountered an error"),console.error(n)}}}f.prototype.markConnected=function(){this.connected=!0,this.flushPendingEvents()},f.prototype.flushPendingEvents=function(){if(this.connected){var n=this.pending;this.pending=[];for(var e=0;e<n.length;e++){var t=n[e];this.hook.emit(t.type,t)}}},f.prototype.mount=function(n){this.inst2vnode.set(c(n),n);var e=i(n),t=[{internalInstance:n,data:e,renderer:this.rid,type:"mount"}];if(Array.isArray(e.children))for(var r,o=e.children.slice();null!=(r=o.pop());){var s=a(r);o.push.apply(o,s),this.inst2vnode.set(c(r),r);var l=i(r);t.push({internalInstance:r,data:l,renderer:this.rid,type:"mount"})}for(var f=t.length;--f>=0;)this.pending.push(t[f]);u(n)&&this.pending.push({internalInstance:n,data:e,renderer:this.rid,type:"root"})},f.prototype.update=function(n){var e=i(n);if(Array.isArray(e.children))for(var t=0;t<e.children.length;t++){var r=e.children[t],o=c(r);null==this.inst2vnode.get(o)?this.mount(r):this.update(r),e.children[t]=this.inst2vnode.get(o)}var a=this.inst2vnode.get(e.publicInstance);!function(n,e){return n.props!==e.props&&!s(n.props,e.props,!0)||null!=n.__c&&!s(e.__c.__u,e.__c.state)||n.__e!==e.__e||n.ref!==e.ref}(a,n)?this.pending.push({internalInstance:a,data:e,renderer:this.rid,type:"updateProfileTimes"}):this.pending.push({internalInstance:a,data:e,renderer:this.rid,type:"update"})},f.prototype.handleCommitFiberRoot=function(n){var e=c(n);this.inst2vnode.has(e)?this.update(n):this.mount(n);var t=null;if(u(n))n.treeBaseDuration=0,t=n;else for(t=n;null!=t.__p;)t=t.__p;return this.pending.push({internalInstance:t,renderer:this.rid,data:i(t),type:"rootCommitted"}),this.flushPendingEvents(),n},f.prototype.handleCommitFiberUnmount=function(n){var e=c(n);this.inst2vnode.delete(e),this.pending.push({internalInstance:n,renderer:this.rid,type:"unmount"})},f.prototype.getNativeFromReactElement=function(n){return n.__e},f.prototype.getReactElementFromNative=function(n){return this.inst2vnode.get(n)||null},f.prototype.walkTree=function(){},f.prototype.cleanup=function(){};var h=function(){},p=Date.now;try{p=performance.now.bind(performance)}catch(n){}"development"===process.env.NODE_ENV&&(function(){var t=n.options.__b,o=n.options.diffed,i=n.options.vnode,a={useEffect:{},useLayoutEffect:{},lazyPropTypes:{}};n.options.__e=function(n,e){var t=e&&e.__c;t&&"function"==typeof n.then&&(n=new Error("Missing Suspense. The throwing component was: "+(t.displayName||t.name)))},n.options.__p=function(n,e){if(!e)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var t;switch(e.nodeType){case 1:case 11:case 9:t=!0;break;default:t=!1}if(!t)throw new Error("\n\t\t\tExpected a valid HTML node as a second argument to render.\n\t\t\tReceived "+e+" instead: render(<"+(n.type.name||n.type)+" />, "+e+");\n\t\t")},n.options.__b=function(n){if(null!=n){var o,i,u,c,s=n.type;if(void 0===s)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+l(n));if(null!=s&&"object"==typeof s){if(void 0!==s.t&&void 0!==s.__e){var f="Did you accidentally pass a JSX literal as JSX twice?\n\n  let My"+r(s)+" = "+l(s)+";\n  let vnode = <My"+r(s)+" />;\n\nThis usually happens when you export a JSX literal and not the component.";throw new Error("Invalid type passed to createElement(): "+s+"\n\n"+f+"\n")}throw new Error("Invalid type passed to createElement(): "+(Array.isArray(s)?"array":s))}if(void 0!==n.ref&&"function"!=typeof n.ref&&"object"!=typeof n.ref&&!("$$typeof"in n))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof n.ref+"] instead\n"+l(n));if("string"==typeof n.type)for(var d in n.props)if("o"===d[0]&&"n"===d[1]&&"function"!=typeof n.props[d]&&null!=n.props[d])throw new Error("Component's \""+d+'" property should be a function, but got ['+typeof n.props[d]+"] instead\n"+l(n));if("function"==typeof n.type&&n.type.propTypes){if("Lazy"===n.type.displayName&&!a.lazyPropTypes[n.type]){var h="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var p=n.type();a.lazyPropTypes[n.type]=!0,console.warn(h+"Component wrapped in lazy() is "+(p.type.displayName||p.type.name))}catch(n){console.warn(h+"We will log the wrapped component's name once it is loaded.")}}o=n.type.propTypes,i=n.props,u=r(n),c=l(n),Object.keys(o).forEach(function(n){var t;try{t=o[n](i,n,c,u,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(n){t=n}!t||t.message in e||(e[t.message]=!0,console.error("Failed "+u+" type: "+t.message))})}t&&t(n)}},n.options.__h=function(n){if(!n)throw new Error("Hook can only be invoked from render methods.")};var u=function(n,e){return{get:function(){throw new Error("getting vnode."+n+" is deprecated, "+e)},set:function(){throw new Error("setting vnode."+n+" is not allowed, "+e)}}},c={nodeName:u("nodeName","use vnode.type"),attributes:u("attributes","use vnode.props"),children:u("children","use vnode.props.children")};n.options.vnode=function(n){var e,t;n.props&&n.props.o&&(e=n.props.o,delete n.props.o),n.props&&n.props.i&&(t=n.props.i,delete n.props.i),n.i=t,n.o=e,Object.defineProperties(n,c),i&&i(n)},n.options.diffed=function(n){if(null!=n){if(n.__c&&n.__c.u){var e=n.__c.u;e.s.forEach(function(e){!e.l||e.h&&Array.isArray(e.h)||console.warn("In "+(n.type.name||n.type)+" you are calling useMemo/useCallback without passing arguments.\nThis is a noop since it will not be able to memoize, it will execute it every render.")}),e.p.length>0&&e.p.forEach(function(e){e.h&&Array.isArray(e.h)||a.useEffect[n.type]||(a.useEffect[n.type]=!0,console.warn('You should provide an array of arguments as the second argument to the "useEffect" hook.\n\nNot doing so will invoke this effect on every render.\n\nThis effect can be found in the render of '+(n.type.name||n.type)+"."))}),e.v.length>0&&e.v.forEach(function(e){e.h&&Array.isArray(e.h)||a.useLayoutEffect[n.type]||(a.useLayoutEffect[n.type]=!0,console.warn('You should provide an array of arguments as the second argument to the "useLayoutEffect" hook.\n\nNot doing so will invoke this effect on every render.\n\nThis effect can be found in the render of '+(n.type.name||n.type)+"."))})}if(null!=n.__k)for(var t=[],r=0;r<n.__k.length;r++){var i=n.__k[r];if(i&&null!=i.key){var u=i.key;if(-1!==t.indexOf(u)){console.error('Following component has two or more children with the same key attribute: "'+u+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+l(n));break}t.push(u)}}o&&o(n)}}}(),function(){var e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(null!=e){var t=h,r=h,o=Math.random().toString(16).slice(2),i=new f(e,o);d(function(){var a=!1;try{a="production"!==process.env.NODE_ENV}catch(n){}window.parent.postMessage({source:"react-devtools-detector",reactBuildType:a?"development":"production"},"*");var u={bundleType:a?1:0,version:"16.5.2",rendererPackageName:"preact",findHostInstanceByFiber:function(n){return n.__e},findFiberByHostInstance:function(n){return i.inst2vnode.get(n)||null}};e._renderers[o]=u,Object.defineProperty(e.helpers,o,{get:function(){return i},set:function(){i.connected||c.markConnected()}});var c=e.helpers[o];e.emit("renderer-attached",{id:o,renderer:u,helpers:c}),t=d(function(t){if(t.type!==n.Fragment||0!=t.__k.length){var r=e.getFiberRoots(o);t=c.handleCommitFiberRoot(t),r.has(t)||r.add(t)}}),r=d(function(n){e.onCommitFiberUnmount(o,n)})})();var a=n.options.vnode,u=n.options.__c,c=n.options.unmount,s=n.options.__b,l=n.options.diffed;n.options.vnode=function(n){n.startTime=NaN,n.endTime=NaN,n.startTime=0,n.endTime=-1,a&&a(n)},n.options.__b=function(n){n.startTime=p(),null!=s&&s(n)},n.options.diffed=function(n){n.endTime=p(),null!=l&&l(n)},n.options.__c=d(function(n){null!=u&&u(n),null!=n&&t(n)}),n.options.unmount=d(function(n){null!=c&&c(n),r(n)});var v=n.Component.prototype.setState;n.Component.prototype.setState=function(n,e){var t=this.__s!==this.state&&this.__s||(this.__s=Object.assign({},this.state));return this.__u=Object.assign({},t),v.call(this,n,e)}}}());
//# sourceMappingURL=debug.js.map
