!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){"use strict";function r(){store.set("playerCiv",x),console.log(store.get("playerCiv"))}function o(n,t){var e=document.querySelector(n);e.insertAdjacentHTML("afterend",t)}function i(n,t,e){var r=document.querySelector(n);r.addEventListener(t,function(n){return console.log(e),e()})}function a(n,t){return void 0===t&&(t=!1),0==t?document.querySelector(n):document.querySelectorAll(n)}function u(){if(void 0!==store.get("playerCiv")){var n=store.get("playerCiv");x=new m(n.civName,n.leaderName,n.location),c()}else s(),x=new m("","","")}function c(){console.debug("Loading Saved Game..."),o("body",w.createStartScreen(x,S)),i(".load-btn","click",function(){f()}),i(".current-btn","click",function(){f()})}function s(){console.debug("Starting New Game..."),o("body",w.settingsScreen),i(".begin-btn","click",function(){l(),f()}),document.querySelector("#trait").addEventListener("change",function(){p(0)})}function l(){var n=document.querySelector("#civName"),t=document.querySelector("#leaderName"),e=document.querySelector("#location");x.civName=n.value,x.leaderName=t.value,x.location=e.value,r()}function p(n){var t=document.querySelector("#trait"),e=t.value;x.leaderTraits[n]=e,console.log(t.value,x.leaderTraits),r()}function f(){var n=document.querySelector(".clickopolis-intro"),t=document.createElement("section");t.innerHTML="",t.setAttribute("class","clickopolis"),t.setAttribute("id","clickopolis"),v(t),void 0!=n?n.remove():console.log("intro not defined"),document.body.appendChild(t),i(".food-btn","click",function(){var n=document.querySelector(".r-food-total");N[0].total>=N[0].max?N[0].total=N[0].max:N[0].total+=N[0].perClick,n.innerHTML=N[0].total.toString()+" total",console.log(this)})}function v(n){n.innerHTML=w.createScreenHeader(x,S)+w.createResourcesScreen(x,N)+w.createCivilizationScreen(x)+w.createCitizenScreen(x)}function d(){u()}var h=e(1),g=e(2),m=e(3),y=e(4),b=e(5);console.log(h.random(0,100));var x,S=new g(0),w=new b,k=new y("food",1,0,200,0,"food","Food."),j=new y("prod",1,0,200,0,"prod","Prod."),_=new y("stone",0,0,-1,0,"stone","Stone"),A=new y("fish",0,0,-1,0,"fish","Fishies"),N=[k,j,_,A];S.era="ancient",console.log(N[0],N[1]),setInterval(function(){N[0].total>=N[0].max?N[0].total=N[0].max:N[0].total+=N[0].perSecond,a(".r-food-total").textContent=N[0].total.toString()+" total"},1e3),d()},function(n,t,e){var r,o;(function(){function e(n){function t(t,e,r,o,i,a){for(;i>=0&&a>i;i+=n){var u=o?o[i]:i;r=e(r,t[u],u,t)}return r}return function(e,r,o,i){r=k(r,i,4);var a=!z(e)&&w.keys(e),u=(a||e).length,c=n>0?0:u-1;return arguments.length<3&&(o=e[a?a[c]:c],c+=n),t(e,r,o,a,c,u)}}function i(n){return function(t,e,r){e=j(e,r);for(var o=C(t),i=n>0?0:o-1;i>=0&&o>i;i+=n)if(e(t[i],i,t))return i;return-1}}function a(n,t,e){return function(r,o,i){var a=0,u=C(r);if("number"==typeof i)n>0?a=i>=0?i:Math.max(i+u,a):u=i>=0?Math.min(i+1,u):i+u+1;else if(e&&i&&u)return i=e(r,o),r[i]===o?i:-1;if(o!==o)return i=t(d.call(r,a,u),w.isNaN),i>=0?i+a:-1;for(i=n>0?a:u-1;i>=0&&u>i;i+=n)if(r[i]===o)return i;return-1}}function u(n,t){var e=q.length,r=n.constructor,o=w.isFunction(r)&&r.prototype||p,i="constructor";for(w.has(n,i)&&!w.contains(t,i)&&t.push(i);e--;)i=q[e],i in n&&n[i]!==o[i]&&!w.contains(t,i)&&t.push(i)}var c=this,s=c._,l=Array.prototype,p=Object.prototype,f=Function.prototype,v=l.push,d=l.slice,h=p.toString,g=p.hasOwnProperty,m=Array.isArray,y=Object.keys,b=f.bind,x=Object.create,S=function(){},w=function(n){return n instanceof w?n:this instanceof w?void(this._wrapped=n):new w(n)};"undefined"!=typeof n&&n.exports&&(t=n.exports=w),t._=w,w.VERSION="1.8.3";var k=function(n,t,e){if(void 0===t)return n;switch(null==e?3:e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)};case 4:return function(e,r,o,i){return n.call(t,e,r,o,i)}}return function(){return n.apply(t,arguments)}},j=function(n,t,e){return null==n?w.identity:w.isFunction(n)?k(n,t,e):w.isObject(n)?w.matcher(n):w.property(n)};w.iteratee=function(n,t){return j(n,t,1/0)};var _=function(n,t){return function(e){var r=arguments.length;if(2>r||null==e)return e;for(var o=1;r>o;o++)for(var i=arguments[o],a=n(i),u=a.length,c=0;u>c;c++){var s=a[c];t&&void 0!==e[s]||(e[s]=i[s])}return e}},A=function(n){if(!w.isObject(n))return{};if(x)return x(n);S.prototype=n;var t=new S;return S.prototype=null,t},N=function(n){return function(t){return null==t?void 0:t[n]}},O=Math.pow(2,53)-1,C=N("length"),z=function(n){var t=C(n);return"number"==typeof t&&t>=0&&O>=t};w.each=w.forEach=function(n,t,e){t=k(t,e);var r,o;if(z(n))for(r=0,o=n.length;o>r;r++)t(n[r],r,n);else{var i=w.keys(n);for(r=0,o=i.length;o>r;r++)t(n[i[r]],i[r],n)}return n},w.map=w.collect=function(n,t,e){t=j(t,e);for(var r=!z(n)&&w.keys(n),o=(r||n).length,i=Array(o),a=0;o>a;a++){var u=r?r[a]:a;i[a]=t(n[u],u,n)}return i},w.reduce=w.foldl=w.inject=e(1),w.reduceRight=w.foldr=e(-1),w.find=w.detect=function(n,t,e){var r;return r=z(n)?w.findIndex(n,t,e):w.findKey(n,t,e),void 0!==r&&-1!==r?n[r]:void 0},w.filter=w.select=function(n,t,e){var r=[];return t=j(t,e),w.each(n,function(n,e,o){t(n,e,o)&&r.push(n)}),r},w.reject=function(n,t,e){return w.filter(n,w.negate(j(t)),e)},w.every=w.all=function(n,t,e){t=j(t,e);for(var r=!z(n)&&w.keys(n),o=(r||n).length,i=0;o>i;i++){var a=r?r[i]:i;if(!t(n[a],a,n))return!1}return!0},w.some=w.any=function(n,t,e){t=j(t,e);for(var r=!z(n)&&w.keys(n),o=(r||n).length,i=0;o>i;i++){var a=r?r[i]:i;if(t(n[a],a,n))return!0}return!1},w.contains=w.includes=w.include=function(n,t,e,r){return z(n)||(n=w.values(n)),("number"!=typeof e||r)&&(e=0),w.indexOf(n,t,e)>=0},w.invoke=function(n,t){var e=d.call(arguments,2),r=w.isFunction(t);return w.map(n,function(n){var o=r?t:n[t];return null==o?o:o.apply(n,e)})},w.pluck=function(n,t){return w.map(n,w.property(t))},w.where=function(n,t){return w.filter(n,w.matcher(t))},w.findWhere=function(n,t){return w.find(n,w.matcher(t))},w.max=function(n,t,e){var r,o,i=-(1/0),a=-(1/0);if(null==t&&null!=n){n=z(n)?n:w.values(n);for(var u=0,c=n.length;c>u;u++)r=n[u],r>i&&(i=r)}else t=j(t,e),w.each(n,function(n,e,r){o=t(n,e,r),(o>a||o===-(1/0)&&i===-(1/0))&&(i=n,a=o)});return i},w.min=function(n,t,e){var r,o,i=1/0,a=1/0;if(null==t&&null!=n){n=z(n)?n:w.values(n);for(var u=0,c=n.length;c>u;u++)r=n[u],i>r&&(i=r)}else t=j(t,e),w.each(n,function(n,e,r){o=t(n,e,r),(a>o||o===1/0&&i===1/0)&&(i=n,a=o)});return i},w.shuffle=function(n){for(var t,e=z(n)?n:w.values(n),r=e.length,o=Array(r),i=0;r>i;i++)t=w.random(0,i),t!==i&&(o[i]=o[t]),o[t]=e[i];return o},w.sample=function(n,t,e){return null==t||e?(z(n)||(n=w.values(n)),n[w.random(n.length-1)]):w.shuffle(n).slice(0,Math.max(0,t))},w.sortBy=function(n,t,e){return t=j(t,e),w.pluck(w.map(n,function(n,e,r){return{value:n,index:e,criteria:t(n,e,r)}}).sort(function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(r>e||void 0===r)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,e,r){var o={};return e=j(e,r),w.each(t,function(r,i){var a=e(r,i,t);n(o,r,a)}),o}};w.groupBy=F(function(n,t,e){w.has(n,e)?n[e].push(t):n[e]=[t]}),w.indexBy=F(function(n,t,e){n[e]=t}),w.countBy=F(function(n,t,e){w.has(n,e)?n[e]++:n[e]=1}),w.toArray=function(n){return n?w.isArray(n)?d.call(n):z(n)?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:z(n)?n.length:w.keys(n).length},w.partition=function(n,t,e){t=j(t,e);var r=[],o=[];return w.each(n,function(n,e,i){(t(n,e,i)?r:o).push(n)}),[r,o]},w.first=w.head=w.take=function(n,t,e){return null!=n?null==t||e?n[0]:w.initial(n,n.length-t):void 0},w.initial=function(n,t,e){return d.call(n,0,Math.max(0,n.length-(null==t||e?1:t)))},w.last=function(n,t,e){return null!=n?null==t||e?n[n.length-1]:w.rest(n,Math.max(0,n.length-t)):void 0},w.rest=w.tail=w.drop=function(n,t,e){return d.call(n,null==t||e?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var M=function(n,t,e,r){for(var o=[],i=0,a=r||0,u=C(n);u>a;a++){var c=n[a];if(z(c)&&(w.isArray(c)||w.isArguments(c))){t||(c=M(c,t,e));var s=0,l=c.length;for(o.length+=l;l>s;)o[i++]=c[s++]}else e||(o[i++]=c)}return o};w.flatten=function(n,t){return M(n,t,!1)},w.without=function(n){return w.difference(n,d.call(arguments,1))},w.uniq=w.unique=function(n,t,e,r){w.isBoolean(t)||(r=e,e=t,t=!1),null!=e&&(e=j(e,r));for(var o=[],i=[],a=0,u=C(n);u>a;a++){var c=n[a],s=e?e(c,a,n):c;t?(a&&i===s||o.push(c),i=s):e?w.contains(i,s)||(i.push(s),o.push(c)):w.contains(o,c)||o.push(c)}return o},w.union=function(){return w.uniq(M(arguments,!0,!0))},w.intersection=function(n){for(var t=[],e=arguments.length,r=0,o=C(n);o>r;r++){var i=n[r];if(!w.contains(t,i)){for(var a=1;e>a&&w.contains(arguments[a],i);a++);a===e&&t.push(i)}}return t},w.difference=function(n){var t=M(arguments,!0,!0,1);return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){return w.unzip(arguments)},w.unzip=function(n){for(var t=n&&w.max(n,C).length||0,e=Array(t),r=0;t>r;r++)e[r]=w.pluck(n,r);return e},w.object=function(n,t){for(var e={},r=0,o=C(n);o>r;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e},w.findIndex=i(1),w.findLastIndex=i(-1),w.sortedIndex=function(n,t,e,r){e=j(e,r,1);for(var o=e(t),i=0,a=C(n);a>i;){var u=Math.floor((i+a)/2);e(n[u])<o?i=u+1:a=u}return i},w.indexOf=a(1,w.findIndex,w.sortedIndex),w.lastIndexOf=a(-1,w.findLastIndex),w.range=function(n,t,e){null==t&&(t=n||0,n=0),e=e||1;for(var r=Math.max(Math.ceil((t-n)/e),0),o=Array(r),i=0;r>i;i++,n+=e)o[i]=n;return o};var E=function(n,t,e,r,o){if(!(r instanceof t))return n.apply(e,o);var i=A(n.prototype),a=n.apply(i,o);return w.isObject(a)?a:i};w.bind=function(n,t){if(b&&n.bind===b)return b.apply(n,d.call(arguments,1));if(!w.isFunction(n))throw new TypeError("Bind must be called on a function");var e=d.call(arguments,2),r=function(){return E(n,r,t,this,e.concat(d.call(arguments)))};return r},w.partial=function(n){var t=d.call(arguments,1),e=function(){for(var r=0,o=t.length,i=Array(o),a=0;o>a;a++)i[a]=t[a]===w?arguments[r++]:t[a];for(;r<arguments.length;)i.push(arguments[r++]);return E(n,e,this,this,i)};return e},w.bindAll=function(n){var t,e,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)e=arguments[t],n[e]=w.bind(n[e],n);return n},w.memoize=function(n,t){var e=function(r){var o=e.cache,i=""+(t?t.apply(this,arguments):r);return w.has(o,i)||(o[i]=n.apply(this,arguments)),o[i]};return e.cache={},e},w.delay=function(n,t){var e=d.call(arguments,2);return setTimeout(function(){return n.apply(null,e)},t)},w.defer=w.partial(w.delay,w,1),w.throttle=function(n,t,e){var r,o,i,a=null,u=0;e||(e={});var c=function(){u=e.leading===!1?0:w.now(),a=null,i=n.apply(r,o),a||(r=o=null)};return function(){var s=w.now();u||e.leading!==!1||(u=s);var l=t-(s-u);return r=this,o=arguments,0>=l||l>t?(a&&(clearTimeout(a),a=null),u=s,i=n.apply(r,o),a||(r=o=null)):a||e.trailing===!1||(a=setTimeout(c,l)),i}},w.debounce=function(n,t,e){var r,o,i,a,u,c=function(){var s=w.now()-a;t>s&&s>=0?r=setTimeout(c,t-s):(r=null,e||(u=n.apply(i,o),r||(i=o=null)))};return function(){i=this,o=arguments,a=w.now();var s=e&&!r;return r||(r=setTimeout(c,t)),s&&(u=n.apply(i,o),i=o=null),u}},w.wrap=function(n,t){return w.partial(t,n)},w.negate=function(n){return function(){return!n.apply(this,arguments)}},w.compose=function(){var n=arguments,t=n.length-1;return function(){for(var e=t,r=n[t].apply(this,arguments);e--;)r=n[e].call(this,r);return r}},w.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},w.before=function(n,t){var e;return function(){return--n>0&&(e=t.apply(this,arguments)),1>=n&&(t=null),e}},w.once=w.partial(w.before,2);var T=!{toString:null}.propertyIsEnumerable("toString"),q=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];w.keys=function(n){if(!w.isObject(n))return[];if(y)return y(n);var t=[];for(var e in n)w.has(n,e)&&t.push(e);return T&&u(n,t),t},w.allKeys=function(n){if(!w.isObject(n))return[];var t=[];for(var e in n)t.push(e);return T&&u(n,t),t},w.values=function(n){for(var t=w.keys(n),e=t.length,r=Array(e),o=0;e>o;o++)r[o]=n[t[o]];return r},w.mapObject=function(n,t,e){t=j(t,e);for(var r,o=w.keys(n),i=o.length,a={},u=0;i>u;u++)r=o[u],a[r]=t(n[r],r,n);return a},w.pairs=function(n){for(var t=w.keys(n),e=t.length,r=Array(e),o=0;e>o;o++)r[o]=[t[o],n[t[o]]];return r},w.invert=function(n){for(var t={},e=w.keys(n),r=0,o=e.length;o>r;r++)t[n[e[r]]]=e[r];return t},w.functions=w.methods=function(n){var t=[];for(var e in n)w.isFunction(n[e])&&t.push(e);return t.sort()},w.extend=_(w.allKeys),w.extendOwn=w.assign=_(w.keys),w.findKey=function(n,t,e){t=j(t,e);for(var r,o=w.keys(n),i=0,a=o.length;a>i;i++)if(r=o[i],t(n[r],r,n))return r},w.pick=function(n,t,e){var r,o,i={},a=n;if(null==a)return i;w.isFunction(t)?(o=w.allKeys(a),r=k(t,e)):(o=M(arguments,!1,!1,1),r=function(n,t,e){return t in e},a=Object(a));for(var u=0,c=o.length;c>u;u++){var s=o[u],l=a[s];r(l,s,a)&&(i[s]=l)}return i},w.omit=function(n,t,e){if(w.isFunction(t))t=w.negate(t);else{var r=w.map(M(arguments,!1,!1,1),String);t=function(n,t){return!w.contains(r,t)}}return w.pick(n,t,e)},w.defaults=_(w.allKeys,!0),w.create=function(n,t){var e=A(n);return t&&w.extendOwn(e,t),e},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n},w.isMatch=function(n,t){var e=w.keys(t),r=e.length;if(null==n)return!r;for(var o=Object(n),i=0;r>i;i++){var a=e[i];if(t[a]!==o[a]||!(a in o))return!1}return!0};var I=function(n,t,e,r){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var o=h.call(n);if(o!==h.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===o;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var a=n.constructor,u=t.constructor;if(a!==u&&!(w.isFunction(a)&&a instanceof a&&w.isFunction(u)&&u instanceof u)&&"constructor"in n&&"constructor"in t)return!1}e=e||[],r=r||[];for(var c=e.length;c--;)if(e[c]===n)return r[c]===t;if(e.push(n),r.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!I(n[c],t[c],e,r))return!1}else{var s,l=w.keys(n);if(c=l.length,w.keys(t).length!==c)return!1;for(;c--;)if(s=l[c],!w.has(t,s)||!I(n[s],t[s],e,r))return!1}return e.pop(),r.pop(),!0};w.isEqual=function(n,t){return I(n,t)},w.isEmpty=function(n){return null==n?!0:z(n)&&(w.isArray(n)||w.isString(n)||w.isArguments(n))?0===n.length:0===w.keys(n).length},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=m||function(n){return"[object Array]"===h.call(n)},w.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},w.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){w["is"+n]=function(t){return h.call(t)==="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return w.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(w.isFunction=function(n){return"function"==typeof n||!1}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!==+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===h.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return void 0===n},w.has=function(n,t){return null!=n&&g.call(n,t)},w.noConflict=function(){return c._=s,this},w.identity=function(n){return n},w.constant=function(n){return function(){return n}},w.noop=function(){},w.property=N,w.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},w.matcher=w.matches=function(n){return n=w.extendOwn({},n),function(t){return w.isMatch(t,n)}},w.times=function(n,t,e){var r=Array(Math.max(0,n));t=k(t,e,1);for(var o=0;n>o;o++)r[o]=t(o);return r},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},w.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=w.invert(L),B=function(n){var t=function(t){return n[t]},e="(?:"+w.keys(n).join("|")+")",r=RegExp(e),o=RegExp(e,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(o,t):n}};w.escape=B(L),w.unescape=B(P),w.result=function(n,t,e){var r=null==n?void 0:n[t];return void 0===r&&(r=e),w.isFunction(r)?r.call(n):r};var R=0;w.uniqueId=function(n){var t=++R+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var G=/(.)^/,K={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},H=/\\|'|\r|\n|\u2028|\u2029/g,D=function(n){return"\\"+K[n]};w.template=function(n,t,e){!t&&e&&(t=e),t=w.defaults({},t,w.templateSettings);var r=RegExp([(t.escape||G).source,(t.interpolate||G).source,(t.evaluate||G).source].join("|")+"|$","g"),o=0,i="__p+='";n.replace(r,function(t,e,r,a,u){return i+=n.slice(o,u).replace(H,D),o=u+t.length,e?i+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?i+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(u){throw u.source=i,u}var c=function(n){return a.call(this,n,w)},s=t.variable||"obj";return c.source="function("+s+"){\n"+i+"}",c},w.chain=function(n){var t=w(n);return t._chain=!0,t};var J=function(n,t){return n._chain?w(t).chain():t};w.mixin=function(n){w.each(w.functions(n),function(t){var e=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return v.apply(n,arguments),J(this,e.apply(w,n))}})},w.mixin(w),w.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=l[n];w.prototype[n]=function(){var e=this._wrapped;return t.apply(e,arguments),"shift"!==n&&"splice"!==n||0!==e.length||delete e[0],J(this,e)}}),w.each(["concat","join","slice"],function(n){var t=l[n];w.prototype[n]=function(){return J(this,t.apply(this._wrapped,arguments))}}),w.prototype.value=function(){return this._wrapped},w.prototype.valueOf=w.prototype.toJSON=w.prototype.value,w.prototype.toString=function(){return""+this._wrapped},r=[],o=function(){return w}.apply(t,r),!(void 0!==o&&(n.exports=o))}).call(this)},function(n,t){"use strict";var e=function(){function n(n){this.introStep=n}return n}();n.exports=e},function(n,t){"use strict";var e=function(){function n(n,t,e){this.civName=n,this.leaderName=t,this.location=e,this.leaderTraits=[],this.leaderTraitsMax=3,this.happiness=0,this.anger=0,this.influence=0,this.legacy=0,this.achievements=0}return n}();n.exports=e},function(n,t){"use strict";var e=function(){function n(n,t,e,r,o,i,a){this.name=n,this.perClick=t,this.perSecond=e,this.max=r,this.total=o,this.image=i,this.description=a}return n}();n.exports=e},function(n,t){"use strict";var e=function(){function n(){this.settingsScreen='\n    <section class=\'clickopolis-intro\'>\n      <img class=\'clickopolis-logo custom-size-img\' src=\'img/clickopolis-logo.png\'>\n      <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle\n        <select id="location">\n          <option value="none">select an option!</option>\n          <option value="coast">by the Coast</option>\n          <option value="oasis">in an Oasis</option>\n          <option value="forest">in a Forest</option>\n          <option value="tundra">in a Tundra</option>\n          <option value="iceberg">on an Iceberg</option>\n        </select>\n      </p>\n      <p>Your name is <input type="text" id="leaderName" maxlength="10" size="10" placeholder="Jake"> of <input type="text" id="civName" placeholder="Jaketopia" maxlength="20"></p>\n      <p>You are a(n)\n        <select id="trait">\n          <option value="aggressive">aggressive</option>\n          <option value="cosmpolitan">cosmpolitan</option>\n          <option value="daring">daring</option>\n          <option value="expansionist">expansionist</option>\n          <option value="industrious">industrious</option>\n          <option value="isolationist">isolationist</option>\n          <option value="pacifistic">pacifistic</option>\n          <option value="persuasive">persuasive</option>\n        </select>\n       leader.</p>\n\n       <button class=\'begin-btn\'>Begin Game!</button>\n\n    </section>\n  '}return n.prototype.createStartScreen=function(n,t){var e='\n      <section class=\'clickopolis-intro\'>\n        <h1><img class=\'clickopolis-logo custom-size-img\' alt=\'Clickopolis\' src=\'img/clickopolis-logo.png\'></h1>\n        <div class="start-options">\n          <button class="large-btn start-btn load-btn">Load Game...</button>\n          <button class="large-btn start-btn new-btn">New Game</button>\n          <button class="large-btn start-btn current-btn">\n            <p class="current-game-heading">Current Game: '+n.leaderName+" of "+n.civName+"</p>\n            <p>"+t.era+'</p>\n            <p>\n              <span>\n                <img src="img/achievements.png"> 5\n              </span>\n              <span>\n                <img src="img/strength.png"> 33\n              </span>\n              <span>\n                <img src="img/defense.png"> 44\n              </span>\n              <span>\n                <img src="img/legacy.png"> 2\n              </span>\n              <span>\n                <img src="img/coin.png"> 1K\n              </span>\n              <span>\n                <img src="img/wonder.png"> 1\n              </span>\n            </p>\n          </button>\n        </div>\n        <!-- <button class=\'next-btn\'>Next &rarr;</button> -->\n      </section>\n    ';return e},n.prototype.createResourcesScreen=function(n,t){var e="\n      <section class='screen resources-screen'>\n        <h2><img src='img/resources.png'> Resources</h2>\n        <section class='resources-screen-inner'>\n          <div class='panel food-panel'>\n            <button class='food-btn'><img src='img/food-alt.png'> Grow Food</button>\n            <span class='resource-info r-food-pc'>"+t[0].perClick+" PC</span>\n            <span class='resource-info r-food-ps'>"+t[0].perSecond+" PS</span>\n            <span class='resource-info r-food-max'>"+t[0].max+" max</span>\n            <span class='resource-info r-food-total'>"+t[0].total+" total</span>\n          </div>\n          <div class='panel prod-panel'>\n            <button class='prod-btn'><img src='img/prod.png'> Create Production</button>\n            <span class='resource-info'>"+t[1].perClick+" PC</span>\n            <span class='resource-info'>"+t[1].perSecond+" PS</span>\n            <span class='resource-info'>"+t[1].max+" max</span>\n            <span class='resource-info'>"+t[1].total+" total</span>\n          </div>\n\n          <div class='panel resources-panel'>\n            <span class='resource' data-resource='stone'>\n              <img src='img/stone.png'> <span>25</span>\n            </span>\n\n            <span class='resource' data-resource='fish'>\n              <img src='img/fish.png'> <span>33</span>\n            </span>\n\n            <span class='resource' data-resource='banana'>\n              <img src='img/banana.png'> <span>22</span>\n            </span>\n\n            <span class='resource' data-resource='gold'>\n              <img src='img/gold.png'> <span>0</span>\n            </span>\n\n            <span class='resource' data-resource='gems'>\n              <img src='img/gems.png'> <span>34</span>\n            </span>\n\n            <span class='resource' data-resource='iron'>\n              <img src='img/iron.png'> <span>22</span>\n            </span>\n\n            <span class='resource' data-resource='oil'>\n              <img src='img/oil.png'> <span>22</span>\n            </span>\n\n            <span class='resource' data-resource='uranium'>\n              <img src='img/uranium.png'> <span>22</span>\n            </span>\n          </div>\n\n\n\n        </section>\n      </section>\n    ";return e},n.prototype.createScreenHeader=function(n,t){var e="\n      <header class='screen-header'>\n        <h1>Clickopolis</h1>\n        <h2>"+n.leaderName+" of "+n.civName+" &mdash; "+t.era+"</h2>\n      </header>\n    ";return e},n.prototype.createCitizenScreen=function(n){var t="\n      <section class='screen citizens-screen'>\n        <h2><img src='img/citizens.png'> Citizens</h2>\n        <section class='citizens-screen-inner'>\n          <div class='row citizen-farmer'>\n            "+n.civName+"\n            "+n.leaderName+"\n            "+n.leaderTraits[0]+"\n          </div>\n        </section>\n      </section>\n    ";return t},n.prototype.createCivilizationScreen=function(n){var t="\n      <section class='screen civilization-screen'>\n        <h2><img src='img/empire.png'> Civilization</h2>\n        <section class='civilization-screen-inner'>\n          <div class='panel population-panel'>\n            <button class='pop-btn'>Grow Population (+1)</button>\n            <span>Growth Cost: <img src='img/food.png'> 10</span>\n            <span>Population: <img src='img/citizen.png'> 33</span>\n          </div>\n        </section>\n      </section>\n    ";return t},n}();n.exports=e}]);
//# sourceMappingURL=bundle.js.map