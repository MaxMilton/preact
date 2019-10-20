!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("preact")):"function"==typeof define&&define.amd?define(["preact"],n):n(e.preact)}(this,function(e){var n={};function t(n){return n.type===e.Fragment?"Wrapper":"function"==typeof n.type?"Composite":"string"==typeof n.type?"Native":"Text"}function o(n){return n.type===e.Fragment?"Fragment":"function"==typeof n.type?n.type.displayName||n.type.name:"string"==typeof n.type?n.type:"#text"}function r(e,n,t){var o=n.pop(),r=n.reduce(function(e,n){return e?e[n]:null},e);r&&(r[o]=t)}function i(n){var i=n.__c,s=null;null!=i&&i instanceof e.Component&&(s={setState:i.setState.bind(i),forceUpdate:i.forceUpdate.bind(i),setInState:function(e,n){i.setState(function(t){return r(t,e,n),t})},setInProps:function(e,t){r(n.props,e,t),i.setState({})},setInContext:function(e,n){r(i.context,e,n),i.setState({})}});var c=a(n),l=n.endTime-n.startTime;return{nodeType:t(n),type:n.type,name:o(n),ref:n.ref||null,key:n.key||null,updater:s,text:null===n.type?n.props:null,state:null!=i&&i instanceof e.Component?i.state:null,props:n.props,children:null!==n.type?null!=c&&1==c.length&&null===c[0].type?c[0].props:c:null,publicInstance:u(n),memoizedInteractions:[],actualDuration:l,actualStartTime:n.startTime,treeBaseDuration:l}}function a(e){return null==e.__c?null!=e.__k?e.__k.filter(Boolean):[]:null!=e.__k?e.__k.filter(Boolean):null}function s(n){return n.type===e.Fragment&&null===n.__p}function u(n){return s(n)?n.__k.length>0&&null!=n.__k[0]&&null!=n.__k[0].__e?n.__k[0].__e.parentNode:n:null!=n.__c?n.__c:n.type===e.Fragment?n.props:n.__e}function c(e,n,t){if(null==e||null==n)return!1;for(var o in e)if((!t||"children"!=o||null==n[o])&&e[o]!==n[o])return!1;return Object.keys(e).length===Object.keys(n).length}var l=e.Component.prototype.setState;function f(e){var n=e.props,t=o(e),r="";for(var i in n)if(n.hasOwnProperty(i)&&"children"!==i){var a=n[i];"function"==typeof a&&(a="function "+(a.displayName||a.name)+"() {}"),a=Object(a)!==a||a.toString?a+"":Object.prototype.toString.call(a),r+=" "+i+"="+JSON.stringify(a)}var s=n.children;return"<"+t+r+(s&&s.length?">..</"+t+">":" />")}e.Component.prototype.setState=function(e,n){return null==this.__v&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.'),l.call(this,e,n)};var d=function(e,n){this.rid=n,this.hook=e,this.pending=[],this.inst2vnode=new WeakMap,this.connected=!1};function h(e){return function(n){try{return e(n)}catch(e){console.error("The react devtools encountered an error"),console.error(e)}}}d.prototype.markConnected=function(){this.connected=!0,this.flushPendingEvents()},d.prototype.flushPendingEvents=function(){if(this.connected){var e=this.pending;this.pending=[];for(var n=0;n<e.length;n++){var t=e[n];this.hook.emit(t.type,t)}}},d.prototype.mount=function(e){this.inst2vnode.set(u(e),e);var n=i(e),t=[{internalInstance:e,data:n,renderer:this.rid,type:"mount"}];if(Array.isArray(n.children))for(var o,r=n.children.slice();null!=(o=r.pop());){var c=a(o);r.push.apply(r,c),this.inst2vnode.set(u(o),o);var l=i(o);t.push({internalInstance:o,data:l,renderer:this.rid,type:"mount"})}for(var f=t.length;--f>=0;)this.pending.push(t[f]);s(e)&&this.pending.push({internalInstance:e,data:n,renderer:this.rid,type:"root"})},d.prototype.update=function(e){var n=i(e);if(Array.isArray(n.children))for(var t=0;t<n.children.length;t++){var o=n.children[t],r=u(o);null==this.inst2vnode.get(r)?this.mount(o):this.update(o),n.children[t]=this.inst2vnode.get(r)}var a=this.inst2vnode.get(n.publicInstance);!function(e,n){return e.props!==n.props&&!c(e.props,n.props,!0)||null!=e.__c&&!c(n.__c.__u,n.__c.state)||e.__e!==n.__e||e.ref!==n.ref}(a,e)?this.pending.push({internalInstance:a,data:n,renderer:this.rid,type:"updateProfileTimes"}):this.pending.push({internalInstance:a,data:n,renderer:this.rid,type:"update"})},d.prototype.handleCommitFiberRoot=function(e){var n=u(e);this.inst2vnode.has(n)?this.update(e):this.mount(e);var t=null;if(s(e))e.treeBaseDuration=0,t=e;else for(t=e;null!=t.__p;)t=t.__p;return this.pending.push({internalInstance:t,renderer:this.rid,data:i(t),type:"rootCommitted"}),this.flushPendingEvents(),e},d.prototype.handleCommitFiberUnmount=function(e){var n=u(e);this.inst2vnode.delete(n),this.pending.push({internalInstance:e,renderer:this.rid,type:"unmount"})},d.prototype.getNativeFromReactElement=function(e){return e.__e},d.prototype.getReactElementFromNative=function(e){return this.inst2vnode.get(e)||null},d.prototype.walkTree=function(){},d.prototype.cleanup=function(){};var p=function(){},v=Date.now;try{v=performance.now.bind(performance)}catch(e){}"development"===process.env.NODE_ENV&&(function(){var t=e.options.__b,r=e.options.diffed,i=e.options.vnode,a=e.options.__e,s={useEffect:{},useLayoutEffect:{},lazyPropTypes:{}};e.options.__e=function(e,n,t){if(n&&n.__c&&"function"==typeof e.then){var r=e;e=new Error("Missing Suspense. The throwing component was: "+o(n));for(var i=n;i;i=i.__p)if(i.__c&&i.__c.t){e=r;break}if(e instanceof Error)throw e}a(e,n,t)},e.options.__p=function(e,n){if(!n)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var t;switch(n.nodeType){case 1:case 11:case 9:t=!0;break;default:t=!1}if(!t)throw new Error("\n\t\t\tExpected a valid HTML node as a second argument to render.\n\t\t\tReceived "+n+" instead: render(<"+(e.type.name||e.type)+" />, "+n+");\n\t\t")},e.options.__b=function(e){var r,i,a,u,c=e.type,l=function e(n){return n?"function"==typeof n.type?e(n.__p):n:{}}(e.__p);if(void 0===c)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+f(e));if(null!=c&&"object"==typeof c){if(void 0!==c.o&&void 0!==c.__e){var d="Did you accidentally pass a JSX literal as JSX twice?\n\n  let My"+o(c)+" = "+f(c)+";\n  let vnode = <My"+o(c)+" />;\n\nThis usually happens when you export a JSX literal and not the component.";throw new Error("Invalid type passed to createElement(): "+c+"\n\n"+d+"\n")}throw new Error("Invalid type passed to createElement(): "+(Array.isArray(c)?"array":c))}if("thead"!==c&&"tfoot"!==c&&"tbody"!==c||"table"===l.type?"tr"===c&&"thead"!==l.type&&"tfoot"!==l.type&&"tbody"!==l.type&&"table"!==l.type?console.error("Improper nesting of table.Your <tr> should have a <thead/tbody/tfoot/table> parent."+f(e)):"td"===c&&"tr"!==l.type?console.error("Improper nesting of table.Your <td> should have a <tr> parent."+f(e)):"th"===c&&"tr"!==l.type&&console.error("Improper nesting of table.Your <th> should have a <tr>."+f(e)):console.error("Improper nesting of table.Your <thead/tbody/tfoot> should have a <table> parent."+f(e)),void 0!==e.ref&&"function"!=typeof e.ref&&"object"!=typeof e.ref&&!("$$typeof"in e))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof e.ref+"] instead\n"+f(e));if("string"==typeof e.type)for(var h in e.props)if("o"===h[0]&&"n"===h[1]&&"function"!=typeof e.props[h]&&null!=e.props[h])throw new Error("Component's \""+h+'" property should be a function, but got ['+typeof e.props[h]+"] instead\n"+f(e));if("function"==typeof e.type&&e.type.propTypes){if("Lazy"===e.type.displayName&&!s.lazyPropTypes[e.type]){var p="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var v=e.type();s.lazyPropTypes[e.type]=!0,console.warn(p+"Component wrapped in lazy() is "+(v.type.displayName||v.type.name))}catch(e){console.warn(p+"We will log the wrapped component's name once it is loaded.")}}r=e.type.propTypes,i=e.props,a=o(e),u=f(e),Object.keys(r).forEach(function(e){var t;try{t=r[e](i,e,u,a,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){t=e}!t||t.message in n||(n[t.message]=!0,console.error("Failed "+a+" type: "+t.message))})}t&&t(e)},e.options.__h=function(e){if(!e)throw new Error("Hook can only be invoked from render methods.")};var u=function(e,n){return{get:function(){throw new Error("getting vnode."+e+" is deprecated, "+n)},set:function(){throw new Error("setting vnode."+e+" is not allowed, "+n)}}},c={nodeName:u("nodeName","use vnode.type"),attributes:u("attributes","use vnode.props"),children:u("children","use vnode.props.children")};e.options.vnode=function(e){var n,t;e.props&&e.props.__source&&(n=e.props.__source,delete e.props.__source),e.props&&e.props.__self&&(t=e.props.__self,delete e.props.__self),e.__self=t,e.__source=n,Object.defineProperties(e,c),i&&i(e)},e.options.diffed=function(e){if(e.__k&&e.__k.forEach(function(e){if(e&&void 0===e.type){delete e.__p,delete e.__b;var n=Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+n+"}.")}}),r&&r(e),e.__c&&e.__c.i){var n=e.__c.i;(n.s||[]).forEach(function(n){!n.u||n.l&&Array.isArray(n.l)||console.warn("In "+(e.type.name||e.type)+" you are calling useMemo/useCallback without passing arguments.\nThis is a noop since it will not be able to memoize, it will execute it every render.")}),n.h&&Array.isArray(n.h)&&n.h.forEach(function(n){n.l&&Array.isArray(n.l)||s.useEffect[e.type]||(s.useEffect[e.type]=!0,console.warn('You should provide an array of arguments as the second argument to the "useEffect" hook.\n\nNot doing so will invoke this effect on every render.\n\nThis effect can be found in the render of '+(e.type.name||e.type)+"."))}),n.p&&Array.isArray(n.p)&&n.p.forEach(function(n){n.l&&Array.isArray(n.l)||s.useLayoutEffect[e.type]||(s.useLayoutEffect[e.type]=!0,console.warn('You should provide an array of arguments as the second argument to the "useLayoutEffect" hook.\n\nNot doing so will invoke this effect on every render.\n\nThis effect can be found in the render of '+(e.type.name||e.type)+"."))})}if(null!=e.__k)for(var t=[],o=0;o<e.__k.length;o++){var i=e.__k[o];if(i&&null!=i.key){var a=i.key;if(-1!==t.indexOf(a)){console.error('Following component has two or more children with the same key attribute: "'+a+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+f(e));break}t.push(a)}}}}(),function(){var n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(null!=n){var t=p,o=p,r=Math.random().toString(16).slice(2),i=new d(n,r);h(function(){var a=!1;try{a="production"!==process.env.NODE_ENV}catch(e){}window.parent.postMessage({source:"react-devtools-detector",reactBuildType:a?"development":"production"},"*");var s={bundleType:a?1:0,version:"16.5.2",rendererPackageName:"preact",findHostInstanceByFiber:function(e){return e.__e},findFiberByHostInstance:function(e){return i.inst2vnode.get(e)||null}};if(n._renderers){n._renderers[r]=s,Object.defineProperty(n.helpers,r,{get:function(){return i},set:function(){i.connected||u.markConnected()}});var u=n.helpers[r];n.emit("renderer-attached",{id:r,renderer:s,helpers:u}),t=h(function(t){if(t.type!==e.Fragment||0!=t.__k.length){var o=n.getFiberRoots(r);t=u.handleCommitFiberRoot(t),o.has(t)||o.add(t)}}),o=h(function(e){n.onCommitFiberUnmount(r,e)})}else console.info("Preact is not compatible with your version of react-devtools. We will address this in future releases.")})();var a=e.options.vnode,s=e.options.__c,u=e.options.unmount,c=e.options.__b,l=e.options.diffed;e.options.vnode=function(e){e.startTime=NaN,e.endTime=NaN,e.startTime=0,e.endTime=-1,a&&a(e)},e.options.__b=function(e){e.startTime=v(),null!=c&&c(e)},e.options.diffed=function(e){e.endTime=v(),null!=l&&l(e)},e.options.__c=h(function(e){null!=s&&s(e),null!=e&&t(e)}),e.options.unmount=h(function(e){null!=u&&u(e),o(e)});var f=e.Component.prototype.setState;e.Component.prototype.setState=function(e,n){var t=this.__s!==this.state&&this.__s||(this.__s=Object.assign({},this.state));return this.__u=Object.assign({},t),f.call(this,e,n)}}}())});
//# sourceMappingURL=debug.umd.js.map
