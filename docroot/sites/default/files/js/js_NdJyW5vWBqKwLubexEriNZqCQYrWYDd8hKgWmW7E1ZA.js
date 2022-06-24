/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){return null!=n&&i.call(n,r)},x=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},_=Math.pow(2,53)-1,A=b("length"),w=function(n){var r=A(n);return"number"==typeof r&&0<=r&&r<=_};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var O=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!w(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(n,r,t){var e=(w(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return w(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=x(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return w(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=w(n)?h.clone(n):h.values(n),u=A(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var k=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=k(function(n,r,t){j(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=k(function(n,r,t){n[t]=r}),h.countBy=k(function(n,r,t){j(n,t)?n[t]++:n[t]=1});var S=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(S):w(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:w(n)?n.length:h.keys(n).length},h.partition=k(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var M=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(w(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else M(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return M(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(M(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=M(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,A).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=A(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var F=function(i){return function(n,r,t){r=d(r,t);for(var e=A(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=F(1),h.findLastIndex=F(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var E=function(i,o,a){return function(n,r,t){var e=0,u=A(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=E(1,h.findIndex,h.sortedIndex),h.lastIndexOf=E(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return N(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return N(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=M(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return j(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var I=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(n,r){var t=T.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(j(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=T[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)j(n,t)&&r.push(t);return I&&B(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return I&&B(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var R=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=R(h.allKeys),h.extendOwn=h.assign=R(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var q,K,z=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=z,r=M(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(M(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=R(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},q=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&K(n,r,t,e)},K=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!q(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!j(r,l)||!q(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return q(n,r)},h.isEmpty=function(n){return null==n||(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return j(n,"callee")});var D=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return j(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return x(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?x(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=h.invert(L),W=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=W(L),h.unescape=W(P),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var C=0;h.uniqueId=function(n){var r=++C+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,$=function(n){return"\\"+U[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(V,$),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var G=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),G(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],G(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return G(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,n,r){e.Backbone=t(e,r,i,n)})}else if(typeof exports!=="undefined"){var i=require("underscore"),n;try{n=require("jquery")}catch(r){}t(e,exports,i,n)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,n){var r=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.4.0";e.$=n;e.noConflict=function(){t.Backbone=r;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=e.Events={};var o=/\s+/;var h;var u=function(t,e,n,r,s){var a=0,h;if(n&&typeof n==="object"){if(r!==void 0&&"context"in s&&s.context===void 0)s.context=r;for(h=i.keys(n);a<h.length;a++){e=u(t,e,h[a],n[h[a]],s)}}else if(n&&o.test(n)){for(h=n.split(o);a<h.length;a++){e=t(e,h[a],r,s)}}else{e=t(e,n,r,s)}return e};a.on=function(t,e,i){this._events=u(l,this._events||{},t,e,{context:i,ctx:this,listening:h});if(h){var n=this._listeners||(this._listeners={});n[h.id]=h;h.interop=false}return this};a.listenTo=function(t,e,n){if(!t)return this;var r=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=h=s[r];if(!a){this._listenId||(this._listenId=i.uniqueId("l"));a=h=s[r]=new g(this,t)}var o=c(t,e,n,this);h=void 0;if(o)throw o;if(a.interop)a.on(e,n);return this};var l=function(t,e,i,n){if(i){var r=t[e]||(t[e]=[]);var s=n.context,a=n.ctx,o=n.listening;if(o)o.count++;r.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,n){try{t.on(e,i,n)}catch(r){return r}};a.off=function(t,e,i){if(!this._events)return this;this._events=u(f,this._events,t,e,{context:i,listeners:this._listeners});return this};a.stopListening=function(t,e,n){var r=this._listeningTo;if(!r)return this;var s=t?[t._listenId]:i.keys(r);for(var a=0;a<s.length;a++){var o=r[s[a]];if(!o)break;o.obj.off(e,n,this);if(o.interop)o.off(e,n)}if(i.isEmpty(r))this._listeningTo=void 0;return this};var f=function(t,e,n,r){if(!t)return;var s=r.context,a=r.listeners;var o=0,h;if(!e&&!s&&!n){for(h=i.keys(a);o<h.length;o++){a[h[o]].cleanup()}return}h=e?[e]:i.keys(t);for(;o<h.length;o++){e=h[o];var u=t[e];if(!u)break;var l=[];for(var c=0;c<u.length;c++){var f=u[c];if(n&&n!==f.callback&&n!==f.callback._callback||s&&s!==f.context){l.push(f)}else{var d=f.listening;if(d)d.off(e,n)}}if(l.length){t[e]=l}else{delete t[e]}}return t};a.once=function(t,e,i){var n=u(d,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(n,e,i)};a.listenToOnce=function(t,e,i){var n=u(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,n)};var d=function(t,e,n,r){if(n){var s=t[e]=i.once(function(){r(e,s);n.apply(this,arguments)});s._callback=n}return t};a.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var n=0;n<e;n++)i[n]=arguments[n+1];u(v,this._events,t,void 0,i);return this};var v=function(t,e,i,n){if(t){var r=t[e];var s=t.all;if(r&&s)s=s.slice();if(r)p(r,n);if(s)p(s,[e].concat(n))}return t};var p=function(t,e){var i,n=-1,r=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++n<r)(i=t[n]).callback.call(i.ctx);return;case 1:while(++n<r)(i=t[n]).callback.call(i.ctx,s);return;case 2:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a);return;case 3:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a,o);return;default:while(++n<r)(i=t[n]).callback.apply(i.ctx,e);return}};var g=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};g.prototype.on=a.on;g.prototype.off=function(t,e){var i;if(this.interop){this._events=u(f,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};a.bind=a.on;a.unbind=a.off;i.extend(e,a);var m=e.Model=function(t,e){var n=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)n=this.parse(n,e)||{};var r=i.result(this,"defaults");n=i.defaults(i.extend({},r,n),r);this.set(n,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(m.prototype,a,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(t==null)return this;var r;if(typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n||(n={});if(!this._validate(r,n))return false;var s=n.unset;var a=n.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in r){e=r[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}if(this.idAttribute in r)this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=n;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],n)}}if(h)return this;if(!a){while(this._pending){n=this._pending;this._pending=false;this.trigger("change",this,n)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var n={};var r;for(var s in t){var a=t[s];if(i.isEqual(e[s],a))continue;n[s]=a;r=true}return r?n:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var n=t.success;t.success=function(i){var r=t.parse?e.parse(i,t):i;if(!e.set(r,t))return false;if(n)n.call(t.context,e,i,t);e.trigger("sync",e,i,t)};G(this,t);return this.sync("read",this,t)},save:function(t,e,n){var r;if(t==null||typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n=i.extend({validate:true,parse:true},n);var s=n.wait;if(r&&!s){if(!this.set(r,n))return false}else if(!this._validate(r,n)){return false}var a=this;var o=n.success;var h=this.attributes;n.success=function(t){a.attributes=h;var e=n.parse?a.parse(t,n):t;if(s)e=i.extend({},r,e);if(e&&!a.set(e,n))return false;if(o)o.call(n.context,a,t,n);a.trigger("sync",a,t,n)};G(this,n);if(r&&s)this.attributes=i.extend({},h,r);var u=this.isNew()?"create":n.patch?"patch":"update";if(u==="patch"&&!n.attrs)n.attrs=r;var l=this.sync(u,this,n);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var n=t.success;var r=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(r)s();if(n)n.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{G(this,t);a=this.sync("delete",this,t)}if(!r)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;if(!n)return true;this.trigger("invalid",this,n,i.extend(e,{validationError:n}));return false}});var _=e.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var y={add:true,remove:true,merge:true};var b={add:true,remove:false};var x=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var n=Array(t.length-i);var r=e.length;var s;for(s=0;s<n.length;s++)n[s]=t[s+i];for(s=0;s<r;s++)t[s+i]=e[s];for(s=0;s<n.length;s++)t[s+r+i]=n[s]};i.extend(_.prototype,a,{model:m,preinitialize:function(){},initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,b))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return n?r[0]:r},set:function(t,e){if(t==null)return;e=i.extend({},y,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var n=!i.isArray(t);t=n?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var s=[];var a=[];var o=[];var h=[];var u={};var l=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&r==null&&e.sort!==false;var p=i.isString(this.comparator)?this.comparator:null;var g,m;for(m=0;m<t.length;m++){g=t[m];var _=this.get(g);if(_){if(c&&g!==_){var b=this._isModel(g)?g.attributes:g;if(e.parse)b=_.parse(b,e);_.set(b,e);o.push(_);if(v&&!d)d=_.hasChanged(p)}if(!u[_.cid]){u[_.cid]=true;s.push(_)}t[m]=_}else if(l){g=t[m]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);u[g.cid]=true;s.push(g)}}}if(f){for(m=0;m<this.length;m++){g=this.models[m];if(!u[g.cid])h.push(g)}if(h.length)this._removeModels(h,e)}var w=false;var E=!v&&l&&f;if(s.length&&E){w=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;x(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;x(this.models,a,r==null?this.length:r);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(r!=null)e.index=r+m;g=a[m];g.trigger("add",g,this,e)}if(d||w)this.trigger("sort",this,e);if(a.length||h.length||o.length){e.changes={added:a,removed:h,merged:o};this.trigger("update",this,e)}}return n?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++){this._removeReference(this.models[n],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var n=e.length;if(i.isFunction(e))e=e.bind(this);if(n===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var n=this;t.success=function(i){var r=t.reset?"reset":"set";n[r](i,t);if(e)e.call(t.context,n,i,t);n.trigger("sync",n,i,t)};G(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!n)this.add(t,e);var r=this;var s=e.success;e.success=function(t,e,i){if(n)r.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,k)},keys:function(){return new E(this,I)},entries:function(){return new E(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var n=new this.model(t,e);if(!n.validationError)return n;this.trigger("invalid",this,n.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var n=0;n<t.length;n++){var r=this.get(t[n]);if(!r)continue;var s=this.indexOf(r);this.models.splice(s,1);this.length--;delete this._byId[r.cid];var a=this.modelId(r.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;r.trigger("remove",r,this,e)}i.push(r);this._removeReference(r,e)}return i},_isModel:function(t){return t instanceof m},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,n);if(t==="change"){var r=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(r!==s){if(r!=null)delete this._byId[r];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var w=typeof Symbol==="function"&&Symbol.iterator;if(w){_.prototype[w]=_.prototype.values}var E=function(t,e){this._collection=t;this._kind=e;this._index=0};var k=1;var I=2;var S=3;if(w){E.prototype[w]=function(){return this}}E.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===k){e=t}else{var i=this._collection.modelId(t.attributes);if(this._kind===I){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var T=e.View=function(t){this.cid=i.uniqueId("view");this.preinitialize.apply(this,arguments);i.extend(this,i.pick(t,H));this._ensureElement();this.initialize.apply(this,arguments)};var P=/^(\S+)\s*(.*)$/;var H=["model","collection","el","id","attributes","className","tagName","events"];i.extend(T.prototype,a,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(!i.isFunction(n))n=this[n];if(!n)continue;var r=e.match(P);this.delegate(r[1],r[2],n.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var $=function(t,e,i,n){switch(e){case 1:return function(){return t[i](this[n])};case 2:return function(e){return t[i](this[n],e)};case 3:return function(e,r){return t[i](this[n],C(e,this),r)};case 4:return function(e,r,s){return t[i](this[n],C(e,this),r,s)};default:return function(){var e=s.call(arguments);e.unshift(this[n]);return t[i].apply(t,e)}}};var A=function(t,e,n,r){i.each(n,function(i,n){if(e[n])t.prototype[n]=$(e,i,n,r)})};var C=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return R(t);if(i.isString(t))return function(e){return e.get(t)};return t};var R=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};i.each([[_,M,"models"],[m,N,"attributes"]],function(t){var e=t[0],n=t[1],r=t[2];e.mixin=function(t){var n=i.reduce(i.functions(t),function(t,e){t[e]=0;return t},{});A(e,t,n,r)};A(e,i,n,r)});e.sync=function(t,n,r){var s=j[t];i.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!r.url){a.url=i.result(n,"url")||V()}if(r.data==null&&n&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(r.attrs||n.toJSON(r))}if(r.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(r.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(r.emulateJSON)a.data._method=s;var o=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!r.emulateJSON){a.processData=false}var h=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(h)h.call(r.context,t,e,i)};var u=r.xhr=e.ajax(i.extend(a,r));n.trigger("request",n,u,r);return u};var j={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var O=e.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(O.prototype,a,{preinitialize:function(){},initialize:function(){},route:function(t,n,r){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(n)){r=n;n=""}if(!r)r=this[n];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(r,a,n)!==false){s.trigger.apply(s,["route:"+n].concat(a));s.trigger("route",n,a);e.history.trigger("route",s,n,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){if(e===n.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=e.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;i.extend(B.prototype,a,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var n=document.body;var r=n.insertBefore(this.iframe,n.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var n=i+t;t=t.replace(W,"");var r=this.decodeFragment(t);if(this.fragment===r)return;this.fragment=r;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(n)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else{t.hash="#"+e}}});e.history=new B;var D=function(t,e){var n=this;var r;if(t&&i.has(t,"constructor")){r=t.constructor}else{r=function(){return n.apply(this,arguments)}}i.extend(r,n,e);r.prototype=i.create(n.prototype,t);r.prototype.constructor=r;r.__super__=n.prototype;return r};m.extend=_.extend=O.extend=T.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(t,e){var i=e.error;e.error=function(n){if(i)i.call(e.context,t,n,e);t.trigger("error",t,n,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return a.ui=a.ui||{},a.ui.version="1.12.1"});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(b){return b.replace(a,"\\$1")}}()});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}return a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}}),a.ui.focusable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeActiveElement=function(a){var b;try{b=a.activeElement}catch(c){b=a.body}return b||(b=a.body),b.nodeName||(b=a.body),b}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeBlur=function(b){b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0];b=b.split(".")[1];var j=i+"-"+b;return d||(d=c,c=a.Widget),a.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr[":"][j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),g=new c,g.options=a.widget.extend({},g.options),a.each(d,function(b,d){return a.isFunction(d)?void(h[b]=function(){function a(){return c.prototype[b].apply(this,arguments)}function e(a){return c.prototype[b].apply(this,a)}return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(h[b]=d)}),f.prototype=a.widget.extend(g,{widgetEventPrefix:e?g.widgetEventPrefix||b:b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.length||"instance"!==f?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):i=void 0:(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(d=a(e.get()),this._removeClass(e,c),d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){var g,h;for(h=0;h<c.length;h++)g=e.classesElementLookup[c[h]]||a(),g=a(b.add?a.unique(g.get().concat(b.element.get())):g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return b=a.extend({element:this.element,classes:this.options.classes||{}},b),this._on(b.element,{remove:"_untrackClassesElement"}),b.keys&&c(b.keys.match(/\S+/g)||[],!0),b.extra&&c(b.extra.match(/\S+/g)||[]),d.join(" ")},_untrackClassesElement:function(b){var c=this;a.each(c.classesElementLookup,function(d,e){a.inArray(b.target,e)!==-1&&(c.classesElementLookup[d]=a(e.not(b.target).get()))})},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"==typeof d?d:c;var e="string"==typeof a||null===a,f={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};return f.element.toggleClass(this._classes(f),d),this},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.on(j,k,h):c.on(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.off(c).off(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){this._addClass(a(b.currentTarget),null,"ui-state-hover")},mouseleave:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){this._addClass(a(b.currentTarget),null,"ui-state-focus")},focusout:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });

  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);

      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');

      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      $nestedContextual.css({ top: $nestedContextual.position().top + height });
    }
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;

    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));

    var destination = 'destination=' + Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({ el: $contextual, model: model }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({ el: $region, model: model }, options)));

    contextual.collection.add(model);

    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });

    adjustIfNestedAndOverlapping($contextual);
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);

      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');
      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });

      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem('Drupal.contextual.' + contextualID.id);
        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find('[data-contextual-id="' + contextualID.id + '"]:empty').eq(0), html);
          });
          return;
        }
        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: { 'ids[]': uncachedIDs, 'tokens[]': uncachedTokens },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem('Drupal.contextual.' + contextualID, html);

              if (html.length > 0) {
                $placeholders = $context.find('[data-contextual-id="' + contextualID + '"]');

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };

  Drupal.contextual = {
    views: [],

    regionViews: []
  };

  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',

      regionIsHovered: false,

      hasFocus: false,

      isOpen: false,

      isLocked: false
    },

    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);

      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      this.$el.find('.contextual-links').prop('hidden', !isOpen);

      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;

      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

;(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
				loading  : '<div id="fancybox-loading"><div></div></div>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : $('<div/>').text( element.data('fancybox-title') || element.attr('title') || '' ).html(),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (coming && false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (!coming) {
				return;
			}

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.originalEvent && e.originalEvent.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $(F.opts.tpl.loading).click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}

			F.trigger('onLoading');
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked && locked.length) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (obj) {
				if ($.isFunction( obj[event] )) {
					ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
				}

				if (ret === false) {
					return false;
				}

				if (obj.helpers) {
					$.each(obj.helpers, function (helper, opts) {
						if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
							F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
						}
					});
				}
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace(/\{href\}/g, href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {

				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play(true);
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			var parent;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			parent = F.coming ? F.coming.parent : opts.parent;

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( parent && parent.length ? parent : 'body' );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				this.el.removeClass('fancybox-lock');

				W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			if (obj.locked && !this.el.hasClass('fancybox-lock')) {
				if (this.fixPosition !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');
				}

				this.el.addClass('fancybox-margin');

				this.scrollV = W.scrollTop();
				this.scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));

/**
 * @license
 * Video.js 7.0.3 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.videojs=e()}(this,function(){var d="7.0.3",t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var i,g="undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{},r={},n=Object.freeze({default:r}),s=n&&r||n,a="undefined"!=typeof t?t:"undefined"!=typeof window?window:{};"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=s);var p=i,o=void 0,u="info",l=[],c=function(t,e){var i=o.levels[u],r=new RegExp("^("+i+")$");if("log"!==t&&e.unshift(t.toUpperCase()+":"),l&&l.push([].concat(e)),e.unshift("VIDEOJS:"),g.console){var n=g.console[t];n||"debug"!==t||(n=g.console.info||g.console.log),n&&i&&r.test(t)&&n[Array.isArray(e)?"apply":"call"](g.console,e)}};(o=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];c("log",e)}).levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:u},o.level=function(t){if("string"==typeof t){if(!o.levels.hasOwnProperty(t))throw new Error('"'+t+'" in not a valid log level');u=t}return u},o.history=function(){return l?[].concat(l):[]},o.history.clear=function(){l&&(l.length=0)},o.history.disable=function(){null!==l&&(l.length=0,l=null)},o.history.enable=function(){null===l&&(l=[])},o.error=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("error",e)},o.warn=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("warn",e)},o.debug=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("debug",e)};var f=o;var m=function(t){for(var e="",i=0;i<arguments.length;i++)e+=t[i].replace(/\n\r?\s*/g,"")+(arguments[i+1]||"");return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},_=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},b=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t,e){return t.raw=e,t},T=Object.prototype.toString,S=function(t){return E(t)?Object.keys(t):[]};function k(e,i){S(e).forEach(function(t){return i(e[t],t)})}function C(i){for(var t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return Object.assign?Object.assign.apply(Object,[i].concat(e)):(e.forEach(function(t){t&&k(t,function(t,e){i[e]=t})}),i)}function E(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))}function w(t){return E(t)&&"[object Object]"===T.call(t)&&t.constructor===Object}function A(t,e){if(!t||!e)return"";if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(t);return i?i[e]:""}return""}var L=h(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]);function P(t){return"string"==typeof t&&/\S/.test(t)}function O(t){if(/\s/.test(t))throw new Error("class has illegal whitespace characters")}function x(){return p===g.document}function I(t){return E(t)&&1===t.nodeType}function D(){try{return g.parent!==g.self}catch(t){return!0}}function R(r){return function(t,e){if(!P(t))return p[r](null);P(e)&&(e=p.querySelector(e));var i=I(e)?e:p;return i[r]&&i[r](t)}}function M(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],n=p.createElement(t);return Object.getOwnPropertyNames(i).forEach(function(t){var e=i[t];-1!==t.indexOf("aria-")||"role"===t||"type"===t?(f.warn(m(L,t,e)),n.setAttribute(t,e)):"textContent"===t?U(n,e):n[t]=e}),Object.getOwnPropertyNames(e).forEach(function(t){n.setAttribute(t,e[t])}),r&&et(n,r),n}function U(t,e){return"undefined"==typeof t.textContent?t.innerText=e:t.textContent=e,t}function N(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}function B(t,e){return O(e),t.classList?t.classList.contains(e):(i=e,new RegExp("(^|\\s)"+i+"($|\\s)")).test(t.className);var i}function j(t,e){return t.classList?t.classList.add(e):B(t,e)||(t.className=(t.className+" "+e).trim()),t}function F(t,e){return t.classList?t.classList.remove(e):(O(e),t.className=t.className.split(/\s+/).filter(function(t){return t!==e}).join(" ")),t}function H(t,e,i){var r=B(t,e);if("function"==typeof i&&(i=i(t,e)),"boolean"!=typeof i&&(i=!r),i!==r)return i?j(t,e):F(t,e),t}function V(i,r){Object.getOwnPropertyNames(r).forEach(function(t){var e=r[t];null===e||"undefined"==typeof e||!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})}function q(t){var e={},i=",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";if(t&&t.attributes&&0<t.attributes.length)for(var r=t.attributes,n=r.length-1;0<=n;n--){var s=r[n].name,a=r[n].value;"boolean"!=typeof t[s]&&-1===i.indexOf(","+s+",")||(a=null!==a),e[s]=a}return e}function W(t,e){return t.getAttribute(e)}function z(t,e,i){t.setAttribute(e,i)}function G(t,e){t.removeAttribute(e)}function X(){p.body.focus(),p.onselectstart=function(){return!1}}function Y(){p.onselectstart=function(){return!0}}function $(t){if(t&&t.getBoundingClientRect&&t.parentNode){var e=t.getBoundingClientRect(),i={};return["bottom","height","left","right","top","width"].forEach(function(t){void 0!==e[t]&&(i[t]=e[t])}),i.height||(i.height=parseFloat(A(t,"height"))),i.width||(i.width=parseFloat(A(t,"width"))),i}}function K(t){var e=void 0;if(t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),!e)return{left:0,top:0};var i=p.documentElement,r=p.body,n=i.clientLeft||r.clientLeft||0,s=g.pageXOffset||r.scrollLeft,a=e.left+s-n,o=i.clientTop||r.clientTop||0,u=g.pageYOffset||r.scrollTop,l=e.top+u-o;return{left:Math.round(a),top:Math.round(l)}}function Q(t,e){var i={},r=K(t),n=t.offsetWidth,s=t.offsetHeight,a=r.top,o=r.left,u=e.pageY,l=e.pageX;return e.changedTouches&&(l=e.changedTouches[0].pageX,u=e.changedTouches[0].pageY),i.y=Math.max(0,Math.min(1,(a-u+s)/s)),i.x=Math.max(0,Math.min(1,(l-o)/n)),i}function J(t){return E(t)&&3===t.nodeType}function Z(t){for(;t.firstChild;)t.removeChild(t.firstChild);return t}function tt(t){return"function"==typeof t&&(t=t()),(Array.isArray(t)?t:[t]).map(function(t){return"function"==typeof t&&(t=t()),I(t)||J(t)?t:"string"==typeof t&&/\S/.test(t)?p.createTextNode(t):void 0}).filter(function(t){return t})}function et(e,t){return tt(t).forEach(function(t){return e.appendChild(t)}),e}function it(t,e){return et(Z(t),e)}function rt(t){return void 0===t.button&&void 0===t.buttons||(0===t.button&&void 0===t.buttons||0===t.button&&1===t.buttons)}var nt=R("querySelector"),st=R("querySelectorAll"),at=Object.freeze({isReal:x,isEl:I,isInFrame:D,createEl:M,textContent:U,prependTo:N,hasClass:B,addClass:j,removeClass:F,toggleClass:H,setAttributes:V,getAttributes:q,getAttribute:W,setAttribute:z,removeAttribute:G,blockTextSelection:X,unblockTextSelection:Y,getBoundingClientRect:$,findPosition:K,getPointerPosition:Q,isTextNode:J,emptyEl:Z,normalizeContent:tt,appendContent:et,insertContent:it,isSingleLeftClick:rt,$:nt,$$:st}),ot=1;function ut(){return ot++}var lt={},ct="vdata"+(new Date).getTime();function ht(t){var e=t[ct];return e||(e=t[ct]=ut()),lt[e]||(lt[e]={}),lt[e]}function dt(t){var e=t[ct];return!!e&&!!Object.getOwnPropertyNames(lt[e]).length}function pt(e){var t=e[ct];if(t){delete lt[t];try{delete e[ct]}catch(t){e.removeAttribute?e.removeAttribute(ct):e[ct]=null}}}function ft(t,e){var i=ht(t);0===i.handlers[e].length&&(delete i.handlers[e],t.removeEventListener?t.removeEventListener(e,i.dispatcher,!1):t.detachEvent&&t.detachEvent("on"+e,i.dispatcher)),Object.getOwnPropertyNames(i.handlers).length<=0&&(delete i.handlers,delete i.dispatcher,delete i.disabled),0===Object.getOwnPropertyNames(i).length&&pt(t)}function mt(e,i,t,r){t.forEach(function(t){e(i,t,r)})}function gt(t){function e(){return!0}function i(){return!1}if(!t||!t.isPropagationStopped){var r=t||g.event;for(var n in t={},r)"layerX"!==n&&"layerY"!==n&&"keyLocation"!==n&&"webkitMovementX"!==n&&"webkitMovementY"!==n&&("returnValue"===n&&r.preventDefault||(t[n]=r[n]));if(t.target||(t.target=t.srcElement||p),t.relatedTarget||(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t.preventDefault=function(){r.preventDefault&&r.preventDefault(),t.returnValue=!1,r.returnValue=!1,t.defaultPrevented=!0},t.defaultPrevented=!1,t.stopPropagation=function(){r.stopPropagation&&r.stopPropagation(),t.cancelBubble=!0,r.cancelBubble=!0,t.isPropagationStopped=e},t.isPropagationStopped=i,t.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation(),t.isImmediatePropagationStopped=e,t.stopPropagation()},t.isImmediatePropagationStopped=i,null!==t.clientX&&void 0!==t.clientX){var s=p.documentElement,a=p.body;t.pageX=t.clientX+(s&&s.scrollLeft||a&&a.scrollLeft||0)-(s&&s.clientLeft||a&&a.clientLeft||0),t.pageY=t.clientY+(s&&s.scrollTop||a&&a.scrollTop||0)-(s&&s.clientTop||a&&a.clientTop||0)}t.which=t.charCode||t.keyCode,null!==t.button&&void 0!==t.button&&(t.button=1&t.button?0:4&t.button?1:2&t.button?2:0)}return t}var yt=!1;!function(){try{var t=Object.defineProperty({},"passive",{get:function(){yt=!0}});g.addEventListener("test",null,t),g.removeEventListener("test",null,t)}catch(t){}}();var vt=["touchstart","touchmove"];function _t(a,t,e){if(Array.isArray(t))return mt(_t,a,t,e);var o=ht(a);if(o.handlers||(o.handlers={}),o.handlers[t]||(o.handlers[t]=[]),e.guid||(e.guid=ut()),o.handlers[t].push(e),o.dispatcher||(o.disabled=!1,o.dispatcher=function(t,e){if(!o.disabled){t=gt(t);var i=o.handlers[t.type];if(i)for(var r=i.slice(0),n=0,s=r.length;n<s&&!t.isImmediatePropagationStopped();n++)try{r[n].call(a,t,e)}catch(t){f.error(t)}}}),1===o.handlers[t].length)if(a.addEventListener){var i=!1;yt&&-1<vt.indexOf(t)&&(i={passive:!0}),a.addEventListener(t,o.dispatcher,i)}else a.attachEvent&&a.attachEvent("on"+t,o.dispatcher)}function bt(t,e,i){if(dt(t)){var r=ht(t);if(r.handlers){if(Array.isArray(e))return mt(bt,t,e,i);var n=function(t,e){r.handlers[e]=[],ft(t,e)};if(void 0!==e){var s=r.handlers[e];if(s)if(i){if(i.guid)for(var a=0;a<s.length;a++)s[a].guid===i.guid&&s.splice(a--,1);ft(t,e)}else n(t,e)}else for(var o in r.handlers)Object.prototype.hasOwnProperty.call(r.handlers||{},o)&&n(t,o)}}}function Tt(t,e,i){var r=dt(t)?ht(t):{},n=t.parentNode||t.ownerDocument;if("string"==typeof e?e={type:e,target:t}:e.target||(e.target=t),e=gt(e),r.dispatcher&&r.dispatcher.call(t,e,i),n&&!e.isPropagationStopped()&&!0===e.bubbles)Tt.call(null,n,e,i);else if(!n&&!e.defaultPrevented){var s=ht(e.target);e.target[e.type]&&(s.disabled=!0,"function"==typeof e.target[e.type]&&e.target[e.type](),s.disabled=!1)}return!e.defaultPrevented}function St(e,i,r){if(Array.isArray(i))return mt(St,e,i,r);var t=function t(){bt(e,i,t),r.apply(this,arguments)};t.guid=r.guid=r.guid||ut(),_t(e,i,t)}var kt=Object.freeze({fixEvent:gt,on:_t,off:bt,trigger:Tt,one:St}),Ct=!1,Et=void 0,wt=function(){if(x()&&!1!==Et.options.autoSetup){var t=Array.prototype.slice.call(p.getElementsByTagName("video")),e=Array.prototype.slice.call(p.getElementsByTagName("audio")),i=Array.prototype.slice.call(p.getElementsByTagName("video-js")),r=t.concat(e,i);if(r&&0<r.length)for(var n=0,s=r.length;n<s;n++){var a=r[n];if(!a||!a.getAttribute){At(1);break}void 0===a.player&&null!==a.getAttribute("data-setup")&&Et(a)}else Ct||At(1)}};function At(t,e){e&&(Et=e),g.setTimeout(wt,t)}x()&&"complete"===p.readyState?Ct=!0:St(g,"load",function(){Ct=!0});var Lt=function(t){var e=p.createElement("style");return e.className=t,e},Pt=function(t,e){t.styleSheet?t.styleSheet.cssText=e:t.textContent=e},Ot=function(t,e,i){e.guid||(e.guid=ut());var r=function(){return e.apply(t,arguments)};return r.guid=i?i+"_"+e.guid:e.guid,r},xt=function(e,i){var r=Date.now();return function(){var t=Date.now();i<=t-r&&(e.apply(void 0,arguments),r=t)}},It=function(r,n,s){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:g,o=void 0;return function(){var t=this,e=arguments,i=function(){i=o=null,s||r.apply(t,e)};!o&&s&&r.apply(t,e),a.clearTimeout(o),o=a.setTimeout(i,n)}},Dt=function(){};Dt.prototype.allowedEvents_={},Dt.prototype.addEventListener=Dt.prototype.on=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},_t(this,t,e),this.addEventListener=i},Dt.prototype.removeEventListener=Dt.prototype.off=function(t,e){bt(this,t,e)},Dt.prototype.one=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},St(this,t,e),this.addEventListener=i},Dt.prototype.dispatchEvent=Dt.prototype.trigger=function(t){var e=t.type||t;"string"==typeof t&&(t={type:e}),t=gt(t),this.allowedEvents_[e]&&this["on"+e]&&this["on"+e](t),Tt(this,t)};var Rt=function(e){return e instanceof Dt||!!e.eventBusEl_&&["on","one","off","trigger"].every(function(t){return"function"==typeof e[t]})},Mt=function(t){return"string"==typeof t&&/\S/.test(t)||Array.isArray(t)&&!!t.length},Ut=function(t){if(!t.nodeName&&!Rt(t))throw new Error("Invalid target; must be a DOM node or evented object.")},Nt=function(t){if(!Mt(t))throw new Error("Invalid event type; must be a non-empty string or array.")},Bt=function(t){if("function"!=typeof t)throw new Error("Invalid listener; must be a function.")},jt=function(t,e){var i=e.length<3||e[0]===t||e[0]===t.eventBusEl_,r=void 0,n=void 0,s=void 0;return i?(r=t.eventBusEl_,3<=e.length&&e.shift(),n=e[0],s=e[1]):(r=e[0],n=e[1],s=e[2]),Ut(r),Nt(n),Bt(s),{isTargetingSelf:i,target:r,type:n,listener:s=Ot(t,s)}},Ft=function(t,e,i,r){Ut(t),t.nodeName?kt[e](t,i,r):t[e](i,r)},Ht={on:function(){for(var t=this,e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];var n=jt(this,i),s=n.isTargetingSelf,a=n.target,o=n.type,u=n.listener;if(Ft(a,"on",o,u),!s){var l=function(){return t.off(a,o,u)};l.guid=u.guid;var c=function(){return t.off("dispose",l)};c.guid=u.guid,Ft(this,"on","dispose",l),Ft(a,"on","dispose",c)}},one:function(){for(var n=this,t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=jt(this,e),s=r.isTargetingSelf,a=r.target,o=r.type,u=r.listener;if(s)Ft(a,"one",o,u);else{var l=function t(){for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];n.off(a,o,t),u.apply(null,i)};l.guid=u.guid,Ft(a,"one",o,l)}},off:function(t,e,i){if(!t||Mt(t))bt(this.eventBusEl_,t,e);else{var r=t,n=e;Ut(r),Nt(n),Bt(i),i=Ot(this,i),this.off("dispose",i),r.nodeName?(bt(r,n,i),bt(r,"dispose",i)):Rt(r)&&(r.off(n,i),r.off("dispose",i))}},trigger:function(t,e){return Tt(this.eventBusEl_,t,e)}};function Vt(t){var e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).eventBusKey;if(e){if(!t[e].nodeName)throw new Error('The eventBusKey "'+e+'" does not refer to an element.');t.eventBusEl_=t[e]}else t.eventBusEl_=M("span",{className:"vjs-event-bus"});return C(t,Ht),t.on("dispose",function(){t.off(),g.setTimeout(function(){t.eventBusEl_=null},0)}),t}var qt={state:{},setState:function(t){var i=this;"function"==typeof t&&(t=t());var r=void 0;return k(t,function(t,e){i.state[e]!==t&&((r=r||{})[e]={from:i.state[e],to:t}),i.state[e]=t}),r&&Rt(this)&&this.trigger({changes:r,type:"statechanged"}),r}};function Wt(t,e){return C(t,qt),t.state=C({},t.state,e),"function"==typeof t.handleStateChanged&&Rt(t)&&t.on("statechanged",t.handleStateChanged),t}function zt(t){return"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function Gt(){for(var i={},t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.forEach(function(t){t&&k(t,function(t,e){w(t)?(w(i[e])||(i[e]={}),i[e]=Gt(i[e],t)):i[e]=t})}),i}var Xt=function(){function l(t,e,i){if(y(this,l),!t&&this.play?this.player_=t=this:this.player_=t,this.options_=Gt({},this.options_),e=this.options_=Gt(this.options_,e),this.id_=e.id||e.el&&e.el.id,!this.id_){var r=t&&t.id&&t.id()||"no_player";this.id_=r+"_component_"+ut()}this.name_=e.name||null,e.el?this.el_=e.el:!1!==e.createEl&&(this.el_=this.createEl()),!1!==e.evented&&Vt(this,{eventBusKey:this.el_?"el_":null}),Wt(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},!(this.childNameIndex_={})!==e.initChildren&&this.initChildren(),this.ready(i),!1!==e.reportTouchActivity&&this.enableTouchActivity()}return l.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var t=this.children_.length-1;0<=t;t--)this.children_[t].dispose&&this.children_[t].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),pt(this.el_),this.el_=null),this.player_=null},l.prototype.player=function(){return this.player_},l.prototype.options=function(t){return f.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),t&&(this.options_=Gt(this.options_,t)),this.options_},l.prototype.el=function(){return this.el_},l.prototype.createEl=function(t,e,i){return M(t,e,i)},l.prototype.localize=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:t,i=this.player_.language&&this.player_.language(),r=this.player_.languages&&this.player_.languages(),s=r&&r[i],a=i&&i.split("-")[0],o=r&&r[a],u=e;return s&&s[t]?u=s[t]:o&&o[t]&&(u=o[t]),n&&(u=u.replace(/\{(\d+)\}/g,function(t,e){var i=n[e-1],r=i;return"undefined"==typeof i&&(r=t),r})),u},l.prototype.contentEl=function(){return this.contentEl_||this.el_},l.prototype.id=function(){return this.id_},l.prototype.name=function(){return this.name_},l.prototype.children=function(){return this.children_},l.prototype.getChildById=function(t){return this.childIndex_[t]},l.prototype.getChild=function(t){if(t)return t=zt(t),this.childNameIndex_[t]},l.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.children_.length,r=void 0,n=void 0;if("string"==typeof t){n=zt(t);var s=e.componentClass||n;e.name=n;var a=l.getComponent(s);if(!a)throw new Error("Component "+s+" does not exist");if("function"!=typeof a)return null;r=new a(this.player_||this,e)}else r=t;if(this.children_.splice(i,0,r),"function"==typeof r.id&&(this.childIndex_[r.id()]=r),(n=n||r.name&&zt(r.name()))&&(this.childNameIndex_[n]=r),"function"==typeof r.el&&r.el()){var o=this.contentEl().children[i]||null;this.contentEl().insertBefore(r.el(),o)}return r},l.prototype.removeChild=function(t){if("string"==typeof t&&(t=this.getChild(t)),t&&this.children_){for(var e=!1,i=this.children_.length-1;0<=i;i--)if(this.children_[i]===t){e=!0,this.children_.splice(i,1);break}if(e){this.childIndex_[t.id()]=null,this.childNameIndex_[t.name()]=null;var r=t.el();r&&r.parentNode===this.contentEl()&&this.contentEl().removeChild(t.el())}}},l.prototype.initChildren=function(){var n=this,r=this.options_.children;if(r){var s=this.options_,t=void 0,i=l.getComponent("Tech");(t=Array.isArray(r)?r:Object.keys(r)).concat(Object.keys(this.options_).filter(function(e){return!t.some(function(t){return"string"==typeof t?e===t:e===t.name})})).map(function(t){var e=void 0,i=void 0;return"string"==typeof t?i=r[e=t]||n.options_[e]||{}:(e=t.name,i=t),{name:e,opts:i}}).filter(function(t){var e=l.getComponent(t.opts.componentClass||zt(t.name));return e&&!i.isTech(e)}).forEach(function(t){var e=t.name,i=t.opts;if(void 0!==s[e]&&(i=s[e]),!1!==i){!0===i&&(i={}),i.playerOptions=n.options_.playerOptions;var r=n.addChild(e,i);r&&(n[e]=r)}})}},l.prototype.buildCSSClass=function(){return""},l.prototype.ready=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(t)return this.isReady_?void(e?t.call(this):this.setTimeout(t,1)):(this.readyQueue_=this.readyQueue_||[],void this.readyQueue_.push(t))},l.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var t=this.readyQueue_;this.readyQueue_=[],t&&0<t.length&&t.forEach(function(t){t.call(this)},this),this.trigger("ready")},1)},l.prototype.$=function(t,e){return nt(t,e||this.contentEl())},l.prototype.$$=function(t,e){return st(t,e||this.contentEl())},l.prototype.hasClass=function(t){return B(this.el_,t)},l.prototype.addClass=function(t){j(this.el_,t)},l.prototype.removeClass=function(t){F(this.el_,t)},l.prototype.toggleClass=function(t,e){H(this.el_,t,e)},l.prototype.show=function(){this.removeClass("vjs-hidden")},l.prototype.hide=function(){this.addClass("vjs-hidden")},l.prototype.lockShowing=function(){this.addClass("vjs-lock-showing")},l.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing")},l.prototype.getAttribute=function(t){return W(this.el_,t)},l.prototype.setAttribute=function(t,e){z(this.el_,t,e)},l.prototype.removeAttribute=function(t){G(this.el_,t)},l.prototype.width=function(t,e){return this.dimension("width",t,e)},l.prototype.height=function(t,e){return this.dimension("height",t,e)},l.prototype.dimensions=function(t,e){this.width(t,!0),this.height(e)},l.prototype.dimension=function(t,e,i){if(void 0!==e)return null!==e&&e==e||(e=0),-1!==(""+e).indexOf("%")||-1!==(""+e).indexOf("px")?this.el_.style[t]=e:this.el_.style[t]="auto"===e?"":e+"px",void(i||this.trigger("componentresize"));if(!this.el_)return 0;var r=this.el_.style[t],n=r.indexOf("px");return-1!==n?parseInt(r.slice(0,n),10):parseInt(this.el_["offset"+zt(t)],10)},l.prototype.currentDimension=function(t){var e=0;if("width"!==t&&"height"!==t)throw new Error("currentDimension only accepts width or height value");if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(this.el_);e=i.getPropertyValue(t)||i[t]}if(0===(e=parseFloat(e))){var r="offset"+zt(t);e=this.el_[r]}return e},l.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},l.prototype.currentWidth=function(){return this.currentDimension("width")},l.prototype.currentHeight=function(){return this.currentDimension("height")},l.prototype.focus=function(){this.el_.focus()},l.prototype.blur=function(){this.el_.blur()},l.prototype.emitTapEvents=function(){var e=0,r=null,n=void 0;this.on("touchstart",function(t){1===t.touches.length&&(r={pageX:t.touches[0].pageX,pageY:t.touches[0].pageY},e=(new Date).getTime(),n=!0)}),this.on("touchmove",function(t){if(1<t.touches.length)n=!1;else if(r){var e=t.touches[0].pageX-r.pageX,i=t.touches[0].pageY-r.pageY;10<Math.sqrt(e*e+i*i)&&(n=!1)}});var t=function(){n=!1};this.on("touchleave",t),this.on("touchcancel",t),this.on("touchend",function(t){!(r=null)===n&&((new Date).getTime()-e<200&&(t.preventDefault(),this.trigger("tap")))})},l.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var e=Ot(this.player(),this.player().reportUserActivity),i=void 0;this.on("touchstart",function(){e(),this.clearInterval(i),i=this.setInterval(e,250)});var t=function(t){e(),this.clearInterval(i)};this.on("touchmove",e),this.on("touchend",t),this.on("touchcancel",t)}},l.prototype.setTimeout=function(t,e){var i=this;t=Ot(this,t);var r=g.setTimeout(t,e),n=function(){return i.clearTimeout(r)};return n.guid="vjs-timeout-"+r,this.on("dispose",n),r},l.prototype.clearTimeout=function(t){g.clearTimeout(t);var e=function(){};return e.guid="vjs-timeout-"+t,this.off("dispose",e),t},l.prototype.setInterval=function(t,e){var i=this;t=Ot(this,t);var r=g.setInterval(t,e),n=function(){return i.clearInterval(r)};return n.guid="vjs-interval-"+r,this.on("dispose",n),r},l.prototype.clearInterval=function(t){g.clearInterval(t);var e=function(){};return e.guid="vjs-interval-"+t,this.off("dispose",e),t},l.prototype.requestAnimationFrame=function(t){var e=this;if(this.supportsRaf_){t=Ot(this,t);var i=g.requestAnimationFrame(t),r=function(){return e.cancelAnimationFrame(i)};return r.guid="vjs-raf-"+i,this.on("dispose",r),i}return this.setTimeout(t,1e3/60)},l.prototype.cancelAnimationFrame=function(t){if(this.supportsRaf_){g.cancelAnimationFrame(t);var e=function(){};return e.guid="vjs-raf-"+t,this.off("dispose",e),t}return this.clearTimeout(t)},l.registerComponent=function(t,e){if("string"!=typeof t||!t)throw new Error('Illegal component name, "'+t+'"; must be a non-empty string.');var i=l.getComponent("Tech"),r=i&&i.isTech(e),n=l===e||l.prototype.isPrototypeOf(e.prototype);if(r||!n){var s=void 0;throw s=r?"techs must be registered using Tech.registerTech()":"must be a Component subclass",new Error('Illegal component, "'+t+'"; '+s+".")}t=zt(t),l.components_||(l.components_={});var a=l.getComponent("Player");if("Player"===t&&a&&a.players){var o=a.players,u=Object.keys(o);if(o&&0<u.length&&u.map(function(t){return o[t]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return l.components_[t]=e},l.getComponent=function(t){if(t)return t=zt(t),l.components_&&l.components_[t]?l.components_[t]:void 0},l}();Xt.prototype.supportsRaf_="function"==typeof g.requestAnimationFrame&&"function"==typeof g.cancelAnimationFrame,Xt.registerComponent("Component",Xt);var Yt,$t,Kt,Qt,Jt=g.navigator&&g.navigator.userAgent||"",Zt=/AppleWebKit\/([\d.]+)/i.exec(Jt),te=Zt?parseFloat(Zt.pop()):null,ee=/iPad/i.test(Jt),ie=/iPhone/i.test(Jt)&&!ee,re=/iPod/i.test(Jt),ne=ie||ee||re,se=(Yt=Jt.match(/OS (\d+)_/i))&&Yt[1]?Yt[1]:null,ae=/Android/i.test(Jt),oe=function(){var t=Jt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!t)return null;var e=t[1]&&parseFloat(t[1]),i=t[2]&&parseFloat(t[2]);return e&&i?parseFloat(t[1]+"."+t[2]):e||null}(),ue=ae&&oe<5&&te<537,le=/Firefox/i.test(Jt),ce=/Edge/i.test(Jt),he=!ce&&/Chrome/i.test(Jt),de=($t=Jt.match(/Chrome\/(\d+)/))&&$t[1]?parseFloat($t[1]):null,pe=(Kt=/MSIE\s(\d+)\.\d/.exec(Jt),!(Qt=Kt&&parseFloat(Kt[1]))&&/Trident\/7.0/i.test(Jt)&&/rv:11.0/.test(Jt)&&(Qt=11),Qt),fe=/Safari/i.test(Jt)&&!he&&!ae&&!ce,me=fe||ne,ge=x()&&("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch),ye=Object.freeze({IS_IPAD:ee,IS_IPHONE:ie,IS_IPOD:re,IS_IOS:ne,IOS_VERSION:se,IS_ANDROID:ae,ANDROID_VERSION:oe,IS_NATIVE_ANDROID:ue,IS_FIREFOX:le,IS_EDGE:ce,IS_CHROME:he,CHROME_VERSION:de,IE_VERSION:pe,IS_SAFARI:fe,IS_ANY_SAFARI:me,TOUCH_ENABLED:ge});function ve(t,e,i,r){return function(t,e,i){if("number"!=typeof e||e<0||i<e)throw new Error("Failed to execute '"+t+"' on 'TimeRanges': The index provided ("+e+") is non-numeric or out of bounds (0-"+i+").")}(t,r,i.length-1),i[r][e]}function _e(t){return void 0===t||0===t.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:t.length,start:ve.bind(null,"start",0,t),end:ve.bind(null,"end",1,t)}}function be(t,e){return Array.isArray(t)?_e(t):void 0===t||void 0===e?_e():_e([[t,e]])}function Te(t,e){var i=0,r=void 0,n=void 0;if(!e)return 0;t&&t.length||(t=be(0,0));for(var s=0;s<t.length;s++)r=t.start(s),e<(n=t.end(s))&&(n=e),i+=n-r;return i/e}for(var Se={},ke=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Ce=ke[0],Ee=void 0,we=0;we<ke.length;we++)if(ke[we][1]in p){Ee=ke[we];break}if(Ee)for(var Ae=0;Ae<Ee.length;Ae++)Se[Ce[Ae]]=Ee[Ae];function Le(t){if(t instanceof Le)return t;"number"==typeof t?this.code=t:"string"==typeof t?this.message=t:E(t)&&("number"==typeof t.code&&(this.code=t.code),C(this,t)),this.message||(this.message=Le.defaultMessages[this.code]||"")}Le.prototype.code=0,Le.prototype.message="",Le.prototype.status=null,Le.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],Le.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var Pe=0;Pe<Le.errorTypes.length;Pe++)Le[Le.errorTypes[Pe]]=Pe,Le.prototype[Le.errorTypes[Pe]]=Pe;var Oe=function(t,e){var i,r=null;try{i=JSON.parse(t,e)}catch(t){r=t}return[r,i]};function xe(t){return null!=t&&"function"==typeof t.then}function Ie(t){xe(t)&&t.then(null,function(t){})}var De=function(r){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(t,e,i){return r[e]&&(t[e]=r[e]),t},{cues:r.cues&&Array.prototype.map.call(r.cues,function(t){return{startTime:t.startTime,endTime:t.endTime,text:t.text,id:t.id}})})},Re=function(t){var e=t.$$("track"),i=Array.prototype.map.call(e,function(t){return t.track});return Array.prototype.map.call(e,function(t){var e=De(t.track);return t.src&&(e.src=t.src),e}).concat(Array.prototype.filter.call(t.textTracks(),function(t){return-1===i.indexOf(t)}).map(De))},Me=function(t,i){return t.forEach(function(t){var e=i.addRemoteTextTrack(t).track;!t.src&&t.cues&&t.cues.forEach(function(t){return e.addCue(t)})}),i.textTracks()},Ue="vjs-modal-dialog",Ne=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.opened_=i.hasBeenOpened_=i.hasBeenFilled_=!1,i.closeable(!i.options_.uncloseable),i.content(i.options_.content),i.contentEl_=M("div",{className:Ue+"-content"},{role:"document"}),i.descEl_=M("p",{className:Ue+"-description vjs-control-text",id:i.el().getAttribute("aria-describedby")}),U(i.descEl_,i.description()),i.el_.appendChild(i.descEl_),i.el_.appendChild(i.contentEl_),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},n.prototype.dispose=function(){this.contentEl_=null,this.descEl_=null,this.previouslyActiveEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return Ue+" vjs-hidden "+r.prototype.buildCSSClass.call(this)},n.prototype.handleKeyPress=function(t){27===t.which&&this.closeable()&&this.close()},n.prototype.label=function(){return this.localize(this.options_.label||"Modal Window")},n.prototype.description=function(){var t=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(t+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),t},n.prototype.open=function(){if(!this.opened_){var t=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!t.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&t.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_=t.controls(),t.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},n.prototype.opened=function(t){return"boolean"==typeof t&&this[t?"open":"close"](),this.opened_},n.prototype.close=function(){if(this.opened_){var t=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&t.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_&&t.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},n.prototype.closeable=function(t){if("boolean"==typeof t){var e=this.closeable_=!!t,i=this.getChild("closeButton");if(e&&!i){var r=this.contentEl_;this.contentEl_=this.el_,i=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=r,this.on(i,"close",this.close)}!e&&i&&(this.off(i,"close",this.close),this.removeChild(i),i.dispose())}return this.closeable_},n.prototype.fill=function(){this.fillWith(this.content())},n.prototype.fillWith=function(t){var e=this.contentEl(),i=e.parentNode,r=e.nextSibling;this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,i.removeChild(e),this.empty(),it(e,t),this.trigger("modalfill"),r?i.insertBefore(e,r):i.appendChild(e);var n=this.getChild("closeButton");n&&i.appendChild(n.el_)},n.prototype.empty=function(){this.trigger("beforemodalempty"),Z(this.contentEl()),this.trigger("modalempty")},n.prototype.content=function(t){return"undefined"!=typeof t&&(this.content_=t),this.content_},n.prototype.conditionalFocus_=function(){var t=p.activeElement,e=this.player_.el_;this.previouslyActiveEl_=null,(e.contains(t)||e===t)&&(this.previouslyActiveEl_=t,this.focus(),this.on(p,"keydown",this.handleKeyDown))},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null),this.off(p,"keydown",this.handleKeyDown)},n.prototype.handleKeyDown=function(t){if(9===t.which){for(var e=this.focusableEls_(),i=this.el_.querySelector(":focus"),r=void 0,n=0;n<e.length;n++)if(i===e[n]){r=n;break}p.activeElement===this.el_&&(r=0),t.shiftKey&&0===r?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||r!==e.length-1||(e[0].focus(),t.preventDefault())}},n.prototype.focusableEls_=function(){var t=this.el_.querySelectorAll("*");return Array.prototype.filter.call(t,function(t){return(t instanceof g.HTMLAnchorElement||t instanceof g.HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof g.HTMLInputElement||t instanceof g.HTMLSelectElement||t instanceof g.HTMLTextAreaElement||t instanceof g.HTMLButtonElement)&&!t.hasAttribute("disabled")||t instanceof g.HTMLIFrameElement||t instanceof g.HTMLObjectElement||t instanceof g.HTMLEmbedElement||t.hasAttribute("tabindex")&&-1!==t.getAttribute("tabindex")||t.hasAttribute("contenteditable")})},n}(Xt);Ne.prototype.options_={pauseOnOpen:!0,temporary:!0},Xt.registerComponent("ModalDialog",Ne);var Be=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);var e=b(this,r.call(this));e.tracks_=[],Object.defineProperty(e,"length",{get:function(){return this.tracks_.length}});for(var i=0;i<t.length;i++)e.addTrack(t[i]);return e}return _(n,r),n.prototype.addTrack=function(t){var e=this.tracks_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.tracks_[e]}}),-1===this.tracks_.indexOf(t)&&(this.tracks_.push(t),this.trigger({track:t,type:"addtrack"}))},n.prototype.removeTrack=function(t){for(var e=void 0,i=0,r=this.length;i<r;i++)if(this[i]===t){(e=this[i]).off&&e.off(),this.tracks_.splice(i,1);break}e&&this.trigger({track:e,type:"removetrack"})},n.prototype.getTrackById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},n}(Dt);for(var je in Be.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"},Be.prototype.allowedEvents_)Be.prototype["on"+je]=null;var Fe=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].enabled=!1)},He=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].enabled){Fe(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.enabled&&Fe(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("enabledchange",function(){e.changing_||(e.changing_=!0,Fe(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),Ve=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].selected=!1)},qe=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].selected){Ve(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,Object.defineProperty(i,"selectedIndex",{get:function(){for(var t=0;t<this.length;t++)if(this[t].selected)return t;return-1},set:function(){}}),i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.selected&&Ve(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("selectedchange",function(){e.changing_||(e.changing_=!0,Ve(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),We=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.addTrack=function(t){e.prototype.addTrack.call(this,t),t.addEventListener("modechange",Ot(this,function(){this.trigger("change")}));-1===["metadata","chapters"].indexOf(t.kind)&&t.addEventListener("modechange",Ot(this,function(){this.trigger("selectedlanguagechange")}))},t}(Be),ze=function(){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,r),this.trackElements_=[],Object.defineProperty(this,"length",{get:function(){return this.trackElements_.length}});for(var e=0,i=t.length;e<i;e++)this.addTrackElement_(t[e])}return r.prototype.addTrackElement_=function(t){var e=this.trackElements_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.trackElements_[e]}}),-1===this.trackElements_.indexOf(t)&&this.trackElements_.push(t)},r.prototype.getTrackElementByTrack_=function(t){for(var e=void 0,i=0,r=this.trackElements_.length;i<r;i++)if(t===this.trackElements_[i].track){e=this.trackElements_[i];break}return e},r.prototype.removeTrackElement_=function(t){for(var e=0,i=this.trackElements_.length;e<i;e++)if(t===this.trackElements_[e]){this.trackElements_.splice(e,1);break}},r}(),Ge=function(){function e(t){y(this,e),e.prototype.setCues_.call(this,t),Object.defineProperty(this,"length",{get:function(){return this.length_}})}return e.prototype.setCues_=function(t){var e=this.length||0,i=0,r=t.length;this.cues_=t,this.length_=t.length;var n=function(t){""+t in this||Object.defineProperty(this,""+t,{get:function(){return this.cues_[t]}})};if(e<r)for(i=e;i<r;i++)n.call(this,i)},e.prototype.getCueById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},e}(),Xe={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},Ye={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},$e={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Ke={disabled:"disabled",hidden:"hidden",showing:"showing"},Qe=function(s){function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,a);var e=b(this,s.call(this)),i={id:t.id||"vjs_track_"+ut(),kind:t.kind||"",label:t.label||"",language:t.language||""},r=function(t){Object.defineProperty(e,t,{get:function(){return i[t]},set:function(){}})};for(var n in i)r(n);return e}return _(a,s),a}(Dt),Je=function(t){var e=["protocol","hostname","port","pathname","search","hash","host"],i=p.createElement("a");i.href=t;var r=""===i.host&&"file:"!==i.protocol,n=void 0;r&&((n=p.createElement("div")).innerHTML='<a href="'+t+'"></a>',i=n.firstChild,n.setAttribute("style","display:none; position:absolute;"),p.body.appendChild(n));for(var s={},a=0;a<e.length;a++)s[e[a]]=i[e[a]];return"http:"===s.protocol&&(s.host=s.host.replace(/:80$/,"")),"https:"===s.protocol&&(s.host=s.host.replace(/:443$/,"")),s.protocol||(s.protocol=g.location.protocol),r&&p.body.removeChild(n),s},Ze=function(t){if(!t.match(/^https?:\/\//)){var e=p.createElement("div");e.innerHTML='<a href="'+t+'">x</a>',t=e.firstChild.href}return t},ti=function(t){if("string"==typeof t){var e=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(t);if(e)return e.pop().toLowerCase()}return""},ei=function(t){var e=g.location,i=Je(t);return(":"===i.protocol?e.protocol:i.protocol)+i.host!==e.protocol+e.host},ii=Object.freeze({parseUrl:Je,getAbsoluteURL:Ze,getFileExtension:ti,isCrossOrigin:ei}),ri=function(t){var e=ni.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)},ni=Object.prototype.toString;var si=Object.freeze({default:ri,__moduleExports:ri}),ai=e(function(t,e){(e=t.exports=function(t){return t.replace(/^\s*|\s*$/g,"")}).left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}}),oi=ai.left,ui=ai.right,li=Object.freeze({default:ai,__moduleExports:ai,left:oi,right:ui}),ci=si&&ri||si,hi=function(t,e,i){if(!ci(e))throw new TypeError("iterator must be a function");arguments.length<3&&(i=this);"[object Array]"===di.call(t)?function(t,e,i){for(var r=0,n=t.length;r<n;r++)pi.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i):"string"==typeof t?function(t,e,i){for(var r=0,n=t.length;r<n;r++)e.call(i,t.charAt(r),r,t)}(t,e,i):function(t,e,i){for(var r in t)pi.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i)},di=Object.prototype.toString,pi=Object.prototype.hasOwnProperty;var fi=Object.freeze({default:hi,__moduleExports:hi}),mi=li&&ai||li,gi=fi&&hi||fi,yi=function(t){if(!t)return{};var s={};return gi(mi(t).split("\n"),function(t){var e,i=t.indexOf(":"),r=mi(t.slice(0,i)).toLowerCase(),n=mi(t.slice(i+1));"undefined"==typeof s[r]?s[r]=n:(e=s[r],"[object Array]"===Object.prototype.toString.call(e)?s[r].push(n):s[r]=[s[r],n])}),s},vi=Object.freeze({default:yi,__moduleExports:yi}),_i=function(){for(var t={},e=0;e<arguments.length;e++){var i=arguments[e];for(var r in i)bi.call(i,r)&&(t[r]=i[r])}return t},bi=Object.prototype.hasOwnProperty;var Ti=Object.freeze({default:_i,__moduleExports:_i}),Si=vi&&yi||vi,ki=Ti&&_i||Ti,Ci=wi;function Ei(t,e,i){var r=t;return ci(e)?(i=e,"string"==typeof t&&(r={uri:t})):r=ki(e,{uri:t}),r.callback=i,r}function wi(t,e,i){return Ai(e=Ei(t,e,i))}function Ai(r){if("undefined"==typeof r.callback)throw new Error("callback argument missing");var n=!1,s=function(t,e,i){n||(n=!0,r.callback(t,e,i))};function e(t){return clearTimeout(u),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,s(t,m)}function t(){if(!a){var t;clearTimeout(u),t=r.useXDR&&void 0===o.status?200:1223===o.status?204:o.status;var e=m,i=null;return 0!==t?(e={body:function(){var t=void 0;if(t=o.response?o.response:o.responseText||function(t){if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;return""!==t.responseType||e?null:t.responseXML}(o),f)try{t=JSON.parse(t)}catch(t){}return t}(),statusCode:t,method:c,headers:{},url:l,rawRequest:o},o.getAllResponseHeaders&&(e.headers=Si(o.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),s(i,e,e.body)}}var i,a,o=r.xhr||null;o||(o=r.cors||r.useXDR?new wi.XDomainRequest:new wi.XMLHttpRequest);var u,l=o.url=r.uri||r.url,c=o.method=r.method||"GET",h=r.body||r.data,d=o.headers=r.headers||{},p=!!r.sync,f=!1,m={body:void 0,headers:{},statusCode:0,method:c,url:l,rawRequest:o};if("json"in r&&!1!==r.json&&(f=!0,d.accept||d.Accept||(d.Accept="application/json"),"GET"!==c&&"HEAD"!==c&&(d["content-type"]||d["Content-Type"]||(d["Content-Type"]="application/json"),h=JSON.stringify(!0===r.json?h:r.json))),o.onreadystatechange=function(){4===o.readyState&&setTimeout(t,0)},o.onload=t,o.onerror=e,o.onprogress=function(){},o.onabort=function(){a=!0},o.ontimeout=e,o.open(c,l,!p,r.username,r.password),p||(o.withCredentials=!!r.withCredentials),!p&&0<r.timeout&&(u=setTimeout(function(){if(!a){a=!0,o.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",e(t)}},r.timeout)),o.setRequestHeader)for(i in d)d.hasOwnProperty(i)&&o.setRequestHeader(i,d[i]);else if(r.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(r.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in r&&(o.responseType=r.responseType),"beforeSend"in r&&"function"==typeof r.beforeSend&&r.beforeSend(o),o.send(h||null),o}wi.XMLHttpRequest=g.XMLHttpRequest||function(){},wi.XDomainRequest="withCredentials"in new wi.XMLHttpRequest?wi.XMLHttpRequest:g.XDomainRequest,function(t,e){for(var i=0;i<t.length;i++)e(t[i])}(["get","put","post","patch","head","delete"],function(r){wi["delete"===r?"del":r]=function(t,e,i){return(e=Ei(t,e,i)).method=r.toUpperCase(),Ai(e)}});var Li=function(t,e){var i=new g.WebVTT.Parser(g,g.vttjs,g.WebVTT.StringDecoder()),r=[];i.oncue=function(t){e.addCue(t)},i.onparsingerror=function(t){r.push(t)},i.onflush=function(){e.trigger({type:"loadeddata",target:e})},i.parse(t),0<r.length&&(g.console&&g.console.groupCollapsed&&g.console.groupCollapsed("Text Track parsing errors for "+e.src),r.forEach(function(t){return f.error(t)}),g.console&&g.console.groupEnd&&g.console.groupEnd()),i.flush()},Pi=function(t,n){var e={uri:t},i=ei(t);i&&(e.cors=i),Ci(e,Ot(this,function(t,e,i){if(t)return f.error(t,e);if(n.loaded_=!0,"function"!=typeof g.WebVTT){if(n.tech_){var r=function(){return Li(i,n)};n.tech_.on("vttjsloaded",r),n.tech_.on("vttjserror",function(){f.error("vttjs failed to load, stopping trying to process "+n.src),n.tech_.off("vttjsloaded",r)})}}else Li(i,n)}))},Oi=function(l){function c(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(y(this,c),!t.tech)throw new Error("A tech was not provided.");var e=Gt(t,{kind:$e[t.kind]||"subtitles",language:t.language||t.srclang||""}),i=Ke[e.mode]||"disabled",r=e.default;"metadata"!==e.kind&&"chapters"!==e.kind||(i="hidden");var n=b(this,l.call(this,e));n.tech_=e.tech,n.cues_=[],n.activeCues_=[];var s=new Ge(n.cues_),a=new Ge(n.activeCues_),o=!1,u=Ot(n,function(){this.activeCues,o&&(this.trigger("cuechange"),o=!1)});return"disabled"!==i&&n.tech_.ready(function(){n.tech_.on("timeupdate",u)},!0),Object.defineProperties(n,{default:{get:function(){return r},set:function(){}},mode:{get:function(){return i},set:function(t){var e=this;Ke[t]&&("showing"===(i=t)&&this.tech_.ready(function(){e.tech_.on("timeupdate",u)},!0),this.trigger("modechange"))}},cues:{get:function(){return this.loaded_?s:null},set:function(){}},activeCues:{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return a;for(var t=this.tech_.currentTime(),e=[],i=0,r=this.cues.length;i<r;i++){var n=this.cues[i];n.startTime<=t&&n.endTime>=t?e.push(n):n.startTime===n.endTime&&n.startTime<=t&&n.startTime+.5>=t&&e.push(n)}if(o=!1,e.length!==this.activeCues_.length)o=!0;else for(var s=0;s<e.length;s++)-1===this.activeCues_.indexOf(e[s])&&(o=!0);return this.activeCues_=e,a.setCues_(this.activeCues_),a},set:function(){}}}),e.src?(n.src=e.src,Pi(e.src,n)):n.loaded_=!0,n}return _(c,l),c.prototype.addCue=function(t){var e=t;if(g.vttjs&&!(t instanceof g.vttjs.VTTCue)){for(var i in e=new g.vttjs.VTTCue(t.startTime,t.endTime,t.text),t)i in e||(e[i]=t[i]);e.id=t.id,e.originalCue_=t}for(var r=this.tech_.textTracks(),n=0;n<r.length;n++)r[n]!==this&&r[n].removeCue(e);this.cues_.push(e),this.cues.setCues_(this.cues_)},c.prototype.removeCue=function(t){for(var e=this.cues_.length;e--;){var i=this.cues_[e];if(i===t||i.originalCue_&&i.originalCue_===t){this.cues_.splice(e,1),this.cues.setCues_(this.cues_);break}}},c}(Qe);Oi.prototype.allowedEvents_={cuechange:"cuechange"};var xi=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Ye[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"enabled",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("enabledchange"))}}),e.enabled&&(i.enabled=e.enabled),i.loaded_=!0,i}return _(s,n),s}(Qe),Ii=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Xe[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"selected",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("selectedchange"))}}),e.selected&&(i.selected=e.selected),i}return _(s,n),s}(Qe),Di=0,Ri=2,Mi=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=b(this,n.call(this)),i=void 0,r=new Oi(t);return e.kind=r.kind,e.src=r.src,e.srclang=r.language,e.label=r.label,e.default=r.default,Object.defineProperties(e,{readyState:{get:function(){return i}},track:{get:function(){return r}}}),i=Di,r.addEventListener("loadeddata",function(){i=Ri,e.trigger({type:"load",target:e})}),e}return _(s,n),s}(Dt);Mi.prototype.allowedEvents_={load:"load"},Mi.NONE=Di,Mi.LOADING=1,Mi.LOADED=Ri,Mi.ERROR=3;var Ui={audio:{ListClass:He,TrackClass:xi,capitalName:"Audio"},video:{ListClass:qe,TrackClass:Ii,capitalName:"Video"},text:{ListClass:We,TrackClass:Oi,capitalName:"Text"}};Object.keys(Ui).forEach(function(t){Ui[t].getterName=t+"Tracks",Ui[t].privateName=t+"Tracks_"});var Ni={remoteText:{ListClass:We,TrackClass:Oi,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:ze,TrackClass:Mi,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},Bi=Gt(Ui,Ni);Ni.names=Object.keys(Ni),Ui.names=Object.keys(Ui),Bi.names=[].concat(Ni.names).concat(Ui.names);var ji=Object.create||function(){function e(){}return function(t){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function Fi(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function Hi(t){function e(t,e,i,r){return 3600*(0|t)+60*(0|e)+(0|i)+(0|r)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):59<i[1]?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}function Vi(){this.values=ji(null)}function qi(t,e,i,r){var n=r?t.split(r):[t];for(var s in n)if("string"==typeof n[s]){var a=n[s].split(i);if(2===a.length)e(a[0],a[1])}}function Wi(e,t,s){var i,r,a,n=e;function o(){var t=Hi(e);if(null===t)throw new Fi(Fi.Errors.BadTimeStamp,"Malformed timestamp: "+n);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function u(){e=e.replace(/^\s+/,"")}if(u(),t.startTime=o(),u(),"--\x3e"!==e.substr(0,3))throw new Fi(Fi.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+n);e=e.substr(3),u(),t.endTime=o(),u(),i=e,r=t,a=new Vi,qi(i,function(t,e){switch(t){case"region":for(var i=s.length-1;0<=i;i--)if(s[i].id===e){a.set(t,s[i].region);break}break;case"vertical":a.alt(t,e,["rl","lr"]);break;case"line":var r=e.split(","),n=r[0];a.integer(t,n),a.percent(t,n)&&a.set("snapToLines",!1),a.alt(t,n,["auto"]),2===r.length&&a.alt("lineAlign",r[1],["start","middle","end"]);break;case"position":r=e.split(","),a.percent(t,r[0]),2===r.length&&a.alt("positionAlign",r[1],["start","middle","end"]);break;case"size":a.percent(t,e);break;case"align":a.alt(t,e,["start","middle","end","left","right"])}},/:/,/\s/),r.region=a.get("region",null),r.vertical=a.get("vertical",""),r.line=a.get("line","auto"),r.lineAlign=a.get("lineAlign","start"),r.snapToLines=a.get("snapToLines",!0),r.size=a.get("size",100),r.align=a.get("align","middle"),r.position=a.get("position",{start:0,left:0,middle:50,end:100,right:100},r.align),r.positionAlign=a.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},r.align)}((Fi.prototype=ji(Error.prototype)).constructor=Fi).Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},Vi.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,i){return i?this.has(t)?this.values[t]:e[i]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,i){for(var r=0;r<i.length;++r)if(e===i[r]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&0<=(e=parseFloat(e))&&e<=100)&&(this.set(t,e),!0)}};var zi={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},Gi={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Xi={v:"title",lang:"lang"},Yi={rt:"ruby"};function $i(s,i){function t(){if(!i)return null;var t,e=i.match(/^([^<]*)(<[^>]*>?)?/);return t=e[1]?e[1]:e[2],i=i.substr(t.length),t}function e(t){return zi[t]}function r(t){for(;f=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(f[0],e);return t}function n(t,e){var i=Gi[t];if(!i)return null;var r=s.document.createElement(i);r.localName=i;var n=Xi[t];return n&&e&&(r[n]=e.trim()),r}for(var a,o,u,l=s.document.createElement("div"),c=l,h=[];null!==(a=t());)if("<"!==a[0])c.appendChild(s.document.createTextNode(r(a)));else{if("/"===a[1]){h.length&&h[h.length-1]===a.substr(2).replace(">","")&&(h.pop(),c=c.parentNode);continue}var d,p=Hi(a.substr(1,a.length-2));if(p){d=s.document.createProcessingInstruction("timestamp",p),c.appendChild(d);continue}var f=a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!f)continue;if(!(d=n(f[1],f[3])))continue;if(o=c,Yi[(u=d).localName]&&Yi[u.localName]!==o.localName)continue;f[2]&&(d.className=f[2].substr(1).replace("."," ")),h.push(f[1]),c.appendChild(d),c=d}return l}var Ki=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function Qi(t){for(var e=0;e<Ki.length;e++){var i=Ki[e];if(t>=i[0]&&t<=i[1])return!0}return!1}function Ji(){}function Zi(t,e,i){Ji.call(this),this.cue=e,this.cueDiv=$i(t,e.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=t.document.createElement("div"),r={direction:function(t){var e=[],i="";if(!t||!t.childNodes)return"ltr";function n(t,e){for(var i=e.childNodes.length-1;0<=i;i--)t.push(e.childNodes[i])}function s(t){if(!t||!t.length)return null;var e=t.pop(),i=e.textContent||e.innerText;if(i){var r=i.match(/^.*(\n|\r)/);return r?r[t.length=0]:i}return"ruby"===e.tagName?s(t):e.childNodes?(n(t,e),s(t)):void 0}for(n(e,t);i=s(e);)for(var r=0;r<i.length;r++)if(Qi(i.charCodeAt(r)))return"rtl";return"ltr"}(this.cueDiv),writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:"middle"===e.align?"center":e.align,font:i.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var n=0;switch(e.positionAlign){case"start":n=e.position;break;case"middle":n=e.position-e.size/2;break;case"end":n=e.position-e.size}""===e.vertical?this.applyStyles({left:this.formatStyle(n,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(n,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:this.formatStyle(t.height,"px"),width:this.formatStyle(t.width,"px")})}}function tr(t){var e,i,r,n;if(t.div){i=t.div.offsetHeight,r=t.div.offsetWidth,n=t.div.offsetTop;var s=(s=t.div.childNodes)&&(s=s[0])&&s.getClientRects&&s.getClientRects();t=t.div.getBoundingClientRect(),e=s?Math.max(s[0]&&s[0].height||0,t.height/s.length):0}this.left=t.left,this.right=t.right,this.top=t.top||n,this.height=t.height||i,this.bottom=t.bottom||n+(t.height||i),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight}function er(t,e,o,u){var i=new tr(e),r=e.cue,n=function(t){if("number"==typeof t.line&&(t.snapToLines||0<=t.line&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,i=e.textTrackList,r=0,n=0;n<i.length&&i[n]!==e;n++)"showing"===i[n].mode&&r++;return-1*++r}(r),s=[];if(r.snapToLines){var a;switch(r.vertical){case"":s=["+y","-y"],a="height";break;case"rl":s=["+x","-x"],a="width";break;case"lr":s=["-x","+x"],a="width"}var l=i.lineHeight,c=l*Math.round(n),h=o[a]+l,d=s[0];Math.abs(c)>h&&(c=c<0?-1:1,c*=Math.ceil(h/l)*l),n<0&&(c+=""===r.vertical?o.height:o.width,s=s.reverse()),i.move(d,c)}else{var p=i.lineHeight/o.height*100;switch(r.lineAlign){case"middle":n-=p/2;break;case"end":n-=p}switch(r.vertical){case"":e.applyStyles({top:e.formatStyle(n,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(n,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(n,"%")})}s=["+y","-x","+x","-y"],i=new tr(e)}var f=function(t,e){for(var i,r=new tr(t),n=1,s=0;s<e.length;s++){for(;t.overlapsOppositeAxis(o,e[s])||t.within(o)&&t.overlapsAny(u);)t.move(e[s]);if(t.within(o))return t;var a=t.intersectPercentage(o);a<n&&(i=new tr(t),n=a),t=new tr(r)}return i||r}(i,s);e.move(f.toCSSCompatValues(o))}function ir(){}Ji.prototype.applyStyles=function(t,e){for(var i in e=e||this.div,t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},Ji.prototype.formatStyle=function(t,e){return 0===t?0:t+e},(Zi.prototype=ji(Ji.prototype)).constructor=Zi,tr.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},tr.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},tr.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},tr.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},tr.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},tr.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},tr.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},tr.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;return{left:(t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t).left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||i}},ir.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},ir.convertCueToDOMTree=function(t,e){return t&&e?$i(t,e):null};ir.processCues=function(r,n,t){if(!r||!n||!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);var s=r.document.createElement("div");if(s.style.position="absolute",s.style.left="0",s.style.right="0",s.style.top="0",s.style.bottom="0",s.style.margin="1.5%",t.appendChild(s),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}(n)){var a=[],o=tr.getSimpleBoxPosition(s),u={font:Math.round(.05*o.height*100)/100+"px sans-serif"};!function(){for(var t,e,i=0;i<n.length;i++)e=n[i],t=new Zi(r,e,u),s.appendChild(t.div),er(0,t,o,a),e.displayState=t.div,a.push(tr.getSimpleBoxPosition(t))}()}else for(var e=0;e<n.length;e++)s.appendChild(n[e].displayState)},(ir.Parser=function(t,e,i){i||(i=e,e={}),e||(e={}),this.window=t,this.vttjs=e,this.state="INITIAL",this.buffer="",this.decoder=i||new TextDecoder("utf8"),this.regionList=[]}).prototype={reportOrThrowError:function(t){if(!(t instanceof Fi))throw t;this.onparsingerror&&this.onparsingerror(t)},parse:function(t){var s=this;function e(){for(var t=s.buffer,e=0;e<t.length&&"\r"!==t[e]&&"\n"!==t[e];)++e;var i=t.substr(0,e);return"\r"===t[e]&&++e,"\n"===t[e]&&++e,s.buffer=t.substr(e),i}function i(t){t.match(/X-TIMESTAMP-MAP/)?qi(t,function(t,e){switch(t){case"X-TIMESTAMP-MAP":i=e,r=new Vi,qi(i,function(t,e){switch(t){case"MPEGT":r.integer(t+"S",e);break;case"LOCA":r.set(t+"L",Hi(e))}},/[^\d]:/,/,/),s.ontimestampmap&&s.ontimestampmap({MPEGTS:r.get("MPEGTS"),LOCAL:r.get("LOCAL")})}var i,r},/=/):qi(t,function(t,e){switch(t){case"Region":!function(t){var n=new Vi;if(qi(t,function(t,e){switch(t){case"id":n.set(t,e);break;case"width":n.percent(t,e);break;case"lines":n.integer(t,e);break;case"regionanchor":case"viewportanchor":var i=e.split(",");if(2!==i.length)break;var r=new Vi;if(r.percent("x",i[0]),r.percent("y",i[1]),!r.has("x")||!r.has("y"))break;n.set(t+"X",r.get("x")),n.set(t+"Y",r.get("y"));break;case"scroll":n.alt(t,e,["up"])}},/=/,/\s/),n.has("id")){var e=new(s.vttjs.VTTRegion||s.window.VTTRegion);e.width=n.get("width",100),e.lines=n.get("lines",3),e.regionAnchorX=n.get("regionanchorX",0),e.regionAnchorY=n.get("regionanchorY",100),e.viewportAnchorX=n.get("viewportanchorX",0),e.viewportAnchorY=n.get("viewportanchorY",100),e.scroll=n.get("scroll",""),s.onregion&&s.onregion(e),s.regionList.push({id:n.get("id"),region:e})}}(e)}},/:/)}t&&(s.buffer+=s.decoder.decode(t,{stream:!0}));try{var r;if("INITIAL"===s.state){if(!/\r\n|\n/.test(s.buffer))return this;var n=(r=e()).match(/^WEBVTT([ \t].*)?$/);if(!n||!n[0])throw new Fi(Fi.Errors.BadSignature);s.state="HEADER"}for(var a=!1;s.buffer;){if(!/\r\n|\n/.test(s.buffer))return this;switch(a?a=!1:r=e(),s.state){case"HEADER":/:/.test(r)?i(r):r||(s.state="ID");continue;case"NOTE":r||(s.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){s.state="NOTE";break}if(!r)continue;if(s.cue=new(s.vttjs.VTTCue||s.window.VTTCue)(0,0,""),s.state="CUE",-1===r.indexOf("--\x3e")){s.cue.id=r;continue}case"CUE":try{Wi(r,s.cue,s.regionList)}catch(t){s.reportOrThrowError(t),s.cue=null,s.state="BADCUE";continue}s.state="CUETEXT";continue;case"CUETEXT":var o=-1!==r.indexOf("--\x3e");if(!r||o&&(a=!0)){s.oncue&&s.oncue(s.cue),s.cue=null,s.state="ID";continue}s.cue.text&&(s.cue.text+="\n"),s.cue.text+=r;continue;case"BADCUE":r||(s.state="ID");continue}}}catch(t){s.reportOrThrowError(t),"CUETEXT"===s.state&&s.cue&&s.oncue&&s.oncue(s.cue),s.cue=null,s.state="INITIAL"===s.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse()),"INITIAL"===e.state)throw new Fi(Fi.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var rr=ir,nr=Object.freeze({default:rr,__moduleExports:rr}),sr="auto",ar={"":1,lr:1,rl:1},or={start:1,middle:1,end:1,left:1,right:1};function ur(t){return"string"==typeof t&&(!!or[t.toLowerCase()]&&t.toLowerCase())}function lr(t,e,i){this.hasBeenReset=!1;var r="",n=!1,s=t,a=e,o=i,u=null,l="",c=!0,h="auto",d="start",p=50,f="middle",m=50,g="middle";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(t){r=""+t}},pauseOnExit:{enumerable:!0,get:function(){return n},set:function(t){n=!!t}},startTime:{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");s=t,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");a=t,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return o},set:function(t){o=""+t,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return u},set:function(t){u=t,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return l},set:function(t){var e,i="string"==typeof(e=t)&&!!ar[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");l=i,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return c},set:function(t){c=!!t,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return h},set:function(t){if("number"!=typeof t&&t!==sr)throw new SyntaxError("An invalid number or illegal string was specified.");h=t,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return d},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");d=e,this.hasBeenReset=!0}},position:{enumerable:!0,get:function(){return p},set:function(t){if(t<0||100<t)throw new Error("Position must be between 0 and 100.");p=t,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return f},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");f=e,this.hasBeenReset=!0}},size:{enumerable:!0,get:function(){return m},set:function(t){if(t<0||100<t)throw new Error("Size must be between 0 and 100.");m=t,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return g},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");g=e,this.hasBeenReset=!0}}}),this.displayState=void 0}lr.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var cr=lr,hr=Object.freeze({default:cr,__moduleExports:cr}),dr={"":!0,up:!0};function pr(t){return"number"==typeof t&&0<=t&&t<=100}var fr=function(){var e=100,i=3,r=0,n=100,s=0,a=100,o="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(t){if(!pr(t))throw new Error("Width must be between 0 and 100.");e=t}},lines:{enumerable:!0,get:function(){return i},set:function(t){if("number"!=typeof t)throw new TypeError("Lines must be set to a number.");i=t}},regionAnchorY:{enumerable:!0,get:function(){return n},set:function(t){if(!pr(t))throw new Error("RegionAnchorX must be between 0 and 100.");n=t}},regionAnchorX:{enumerable:!0,get:function(){return r},set:function(t){if(!pr(t))throw new Error("RegionAnchorY must be between 0 and 100.");r=t}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(t){if(!pr(t))throw new Error("ViewportAnchorY must be between 0 and 100.");a=t}},viewportAnchorX:{enumerable:!0,get:function(){return s},set:function(t){if(!pr(t))throw new Error("ViewportAnchorX must be between 0 and 100.");s=t}},scroll:{enumerable:!0,get:function(){return o},set:function(t){var e,i="string"==typeof(e=t)&&!!dr[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");o=i}}})},mr=Object.freeze({default:fr,__moduleExports:fr}),gr=nr&&rr||nr,yr=hr&&cr||hr,vr=mr&&fr||mr,_r=e(function(t){var e=t.exports={WebVTT:gr,VTTCue:yr,VTTRegion:vr};g.vttjs=e,g.WebVTT=e.WebVTT;var i=e.VTTCue,r=e.VTTRegion,n=g.VTTCue,s=g.VTTRegion;e.shim=function(){g.VTTCue=i,g.VTTRegion=r},e.restore=function(){g.VTTCue=n,g.VTTRegion=s},g.VTTCue||e.shim()});_r.WebVTT,_r.VTTCue,_r.VTTRegion;var br=function(e){function n(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};y(this,n),i.reportTouchActivity=!1;var r=b(this,e.call(this,null,i,t));return r.hasStarted_=!1,r.on("playing",function(){this.hasStarted_=!0}),r.on("loadstart",function(){this.hasStarted_=!1}),Bi.names.forEach(function(t){var e=Bi[t];i&&i[e.getterName]&&(r[e.privateName]=i[e.getterName])}),r.featuresProgressEvents||r.manualProgressOn(),r.featuresTimeupdateEvents||r.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(t){!1===i["native"+t+"Tracks"]&&(r["featuresNative"+t+"Tracks"]=!1)}),!1===i.nativeCaptions||!1===i.nativeTextTracks?r.featuresNativeTextTracks=!1:!0!==i.nativeCaptions&&!0!==i.nativeTextTracks||(r.featuresNativeTextTracks=!0),r.featuresNativeTextTracks||r.emulateTextTracks(),r.autoRemoteTextTracks_=new Bi.text.ListClass,r.initTrackListeners(),i.nativeControlsForTouch||r.emitTapEvents(),r.constructor&&(r.name_=r.constructor.name||"Unknown Tech"),r}return _(n,e),n.prototype.triggerSourceset=function(t){var e=this;this.isReady_||this.one("ready",function(){return e.setTimeout(function(){return e.triggerSourceset(t)},1)}),this.trigger({src:t,type:"sourceset"})},n.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},n.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},n.prototype.trackProgress=function(t){this.stopTrackingProgress(),this.progressInterval=this.setInterval(Ot(this,function(){var t=this.bufferedPercent();this.bufferedPercent_!==t&&this.trigger("progress"),1===(this.bufferedPercent_=t)&&this.stopTrackingProgress()}),500)},n.prototype.onDurationChange=function(t){this.duration_=this.duration()},n.prototype.buffered=function(){return be(0,0)},n.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration_)},n.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},n.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},n.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},n.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},n.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.dispose=function(){this.clearTracks(Ui.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),e.prototype.dispose.call(this)},n.prototype.clearTracks=function(t){var n=this;(t=[].concat(t)).forEach(function(t){for(var e=n[t+"Tracks"]()||[],i=e.length;i--;){var r=e[i];"text"===t&&n.removeRemoteTextTrack(r),e.removeTrack(r)}})},n.prototype.cleanupAutoTextTracks=function(){for(var t=this.autoRemoteTextTracks_||[],e=t.length;e--;){var i=t[e];this.removeRemoteTextTrack(i)}},n.prototype.reset=function(){},n.prototype.error=function(t){return void 0!==t&&(this.error_=new Le(t),this.trigger("error")),this.error_},n.prototype.played=function(){return this.hasStarted_?be(0,0):be()},n.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.initTrackListeners=function(){var n=this;Ui.names.forEach(function(t){var e=Ui[t],i=function(){n.trigger(t+"trackchange")},r=n[e.getterName]();r.addEventListener("removetrack",i),r.addEventListener("addtrack",i),n.on("dispose",function(){r.removeEventListener("removetrack",i),r.removeEventListener("addtrack",i)})})},n.prototype.addWebVttScript_=function(){var t=this;if(!g.WebVTT)if(p.body.contains(this.el())){if(!this.options_["vtt.js"]&&w(_r)&&0<Object.keys(_r).length)return void this.trigger("vttjsloaded");var e=p.createElement("script");e.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",e.onload=function(){t.trigger("vttjsloaded")},e.onerror=function(){t.trigger("vttjserror")},this.on("dispose",function(){e.onload=null,e.onerror=null}),g.WebVTT=!0,this.el().parentNode.appendChild(e)}else this.ready(this.addWebVttScript_)},n.prototype.emulateTextTracks=function(){var t=this,i=this.textTracks(),e=this.remoteTextTracks(),r=function(t){return i.addTrack(t.track)},n=function(t){return i.removeTrack(t.track)};e.on("addtrack",r),e.on("removetrack",n),this.addWebVttScript_();var s=function(){return t.trigger("texttrackchange")},a=function(){s();for(var t=0;t<i.length;t++){var e=i[t];e.removeEventListener("cuechange",s),"showing"===e.mode&&e.addEventListener("cuechange",s)}};a(),i.addEventListener("change",a),i.addEventListener("addtrack",a),i.addEventListener("removetrack",a),this.on("dispose",function(){e.off("addtrack",r),e.off("removetrack",n),i.removeEventListener("change",a),i.removeEventListener("addtrack",a),i.removeEventListener("removetrack",a);for(var t=0;t<i.length;t++){i[t].removeEventListener("cuechange",s)}})},n.prototype.addTextTrack=function(t,e,i){if(!t)throw new Error("TextTrack kind is required but was not provided");return function(t,e,i,r){var n=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},s=t.textTracks();n.kind=e,i&&(n.label=i),r&&(n.language=r),n.tech=t;var a=new Bi.text.TrackClass(n);return s.addTrack(a),a}(this,t,e,i)},n.prototype.createRemoteTextTrack=function(t){var e=Gt(t,{tech:this});return new Ni.remoteTextEl.TrackClass(e)},n.prototype.addRemoteTextTrack=function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=this.createRemoteTextTrack(e);return!0!==i&&!1!==i&&(f.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),i=!0),this.remoteTextTrackEls().addTrackElement_(r),this.remoteTextTracks().addTrack(r.track),!0!==i&&this.ready(function(){return t.autoRemoteTextTracks_.addTrack(r.track)}),r},n.prototype.removeRemoteTextTrack=function(t){var e=this.remoteTextTrackEls().getTrackElementByTrack_(t);this.remoteTextTrackEls().removeTrackElement_(e),this.remoteTextTracks().removeTrack(t),this.autoRemoteTextTracks_.removeTrack(t)},n.prototype.getVideoPlaybackQuality=function(){return{}},n.prototype.setPoster=function(){},n.prototype.playsinline=function(){},n.prototype.setPlaysinline=function(){},n.prototype.overrideNativeAudioTracks=function(){},n.prototype.overrideNativeVideoTracks=function(){},n.prototype.canPlayType=function(){return""},n.canPlayType=function(){return""},n.canPlaySource=function(t,e){return n.canPlayType(t.type)},n.isTech=function(t){return t.prototype instanceof n||t instanceof n||t===n},n.registerTech=function(t,e){if(n.techs_||(n.techs_={}),!n.isTech(e))throw new Error("Tech "+t+" must be a Tech");if(!n.canPlayType)throw new Error("Techs must have a static canPlayType method on them");if(!n.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");return t=zt(t),n.techs_[t]=e,"Tech"!==t&&n.defaultTechOrder_.push(t),e},n.getTech=function(t){if(t)return t=zt(t),n.techs_&&n.techs_[t]?n.techs_[t]:g&&g.videojs&&g.videojs[t]?(f.warn("The "+t+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),g.videojs[t]):void 0},n}(Xt);Bi.names.forEach(function(t){var e=Bi[t];br.prototype[e.getterName]=function(){return this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName]}}),br.prototype.featuresVolumeControl=!0,br.prototype.featuresFullscreenResize=!1,br.prototype.featuresPlaybackRate=!1,br.prototype.featuresProgressEvents=!1,br.prototype.featuresSourceset=!1,br.prototype.featuresTimeupdateEvents=!1,br.prototype.featuresNativeTextTracks=!1,br.withSourceHandlers=function(n){n.registerSourceHandler=function(t,e){var i=n.sourceHandlers;i||(i=n.sourceHandlers=[]),void 0===e&&(e=i.length),i.splice(e,0,t)},n.canPlayType=function(t){for(var e=n.sourceHandlers||[],i=void 0,r=0;r<e.length;r++)if(i=e[r].canPlayType(t))return i;return""},n.selectSourceHandler=function(t,e){for(var i=n.sourceHandlers||[],r=0;r<i.length;r++)if(i[r].canHandleSource(t,e))return i[r];return null},n.canPlaySource=function(t,e){var i=n.selectSourceHandler(t,e);return i?i.canHandleSource(t,e):""};["seekable","seeking","duration"].forEach(function(t){var e=this[t];"function"==typeof e&&(this[t]=function(){return this.sourceHandler_&&this.sourceHandler_[t]?this.sourceHandler_[t].apply(this.sourceHandler_,arguments):e.apply(this,arguments)})},n.prototype),n.prototype.setSource=function(t){var e=n.selectSourceHandler(t,this.options_);e||(n.nativeSourceHandler?e=n.nativeSourceHandler:f.error("No source handler found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),e!==n.nativeSourceHandler&&(this.currentSource_=t),this.sourceHandler_=e.handleSource(t,this,this.options_),this.on("dispose",this.disposeSourceHandler)},n.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},Xt.registerComponent("Tech",br),br.registerTech("Tech",br),br.defaultTechOrder_=[];var Tr={},Sr={},kr={};function Cr(t,e,i){t.setTimeout(function(){return function i(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];var n=arguments[2];var s=arguments[3];var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:[];var o=5<arguments.length&&void 0!==arguments[5]&&arguments[5];var e=t[0],u=t.slice(1);if("string"==typeof e)i(r,Tr[e],n,s,a,o);else if(e){var l=function(t,e){var i=Sr[t.id()],r=null;if(null==i)return r=e(t),Sr[t.id()]=[[e,r]],r;for(var n=0;n<i.length;n++){var s=i[n],a=s[0],o=s[1];a===e&&(r=o)}null===r&&(r=e(t),i.push([e,r]));return r}(s,e);l.setSource(C({},r),function(t,e){if(t)return i(r,u,n,s,a,o);a.push(l),i(e,r.type===e.type?u:Tr[e.type],n,s,a,o)})}else u.length?i(r,u,n,s,a,o):o?n(r,a):i(r,Tr["*"],n,s,a,!0)}(e,Tr[e.type],i,t)},1)}function Er(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,n="call"+zt(i),s=t.reduce(Pr(n),r),a=s===kr,o=a?null:e[i](s);return function(t,e,i,r){for(var n=t.length-1;0<=n;n--){var s=t[n];s[e]&&s[e](r,i)}}(t,i,o,a),o}var wr={buffered:1,currentTime:1,duration:1,seekable:1,played:1,paused:1},Ar={setCurrentTime:1},Lr={play:1,pause:1};function Pr(i){return function(t,e){return t===kr?kr:e[i]?e[i](t):t}}var Or={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",mp3:"audio/mpeg",aac:"audio/aac",oga:"audio/ogg",m3u8:"application/x-mpegURL"},xr=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=ti(t);return Or[e.toLowerCase()]||""};function Ir(t){var e=xr(t.src);return!t.type&&e&&(t.type=e),t}var Dr=function(l){function c(t,e,i){y(this,c);var r=Gt({createEl:!1},e),n=b(this,l.call(this,t,r,i));if(e.playerOptions.sources&&0!==e.playerOptions.sources.length)t.src(e.playerOptions.sources);else for(var s=0,a=e.playerOptions.techOrder;s<a.length;s++){var o=zt(a[s]),u=br.getTech(o);if(o||(u=Xt.getComponent(o)),u&&u.isSupported()){t.loadTech_(o);break}}return n}return _(c,l),c}(Xt);Xt.registerComponent("MediaLoader",Dr);var Rr=function(n){function r(t,e){y(this,r);var i=b(this,n.call(this,t,e));return i.emitTapEvents(),i.enable(),i}return _(r,n),r.prototype.createEl=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},e),"button"===t&&f.error("Creating a ClickableComponent with an HTML element of "+t+" is not supported; use a Button instead."),i=C({role:"button"},i),this.tabIndex_=e.tabIndex;var r=n.prototype.createEl.call(this,t,e,i);return this.createControlTextEl(r),r},r.prototype.dispose=function(){this.controlTextEl_=null,n.prototype.dispose.call(this)},r.prototype.createControlTextEl=function(t){return this.controlTextEl_=M("span",{className:"vjs-control-text"},{"aria-live":"polite"}),t&&t.appendChild(this.controlTextEl_),this.controlText(this.controlText_,t),this.controlTextEl_},r.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.el();if(void 0===t)return this.controlText_||"Need Text";var i=this.localize(t);this.controlText_=t,U(this.controlTextEl_,i),this.nonIconControl||e.setAttribute("title",i)},r.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+n.prototype.buildCSSClass.call(this)},r.prototype.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),"undefined"!=typeof this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur))},r.prototype.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),"undefined"!=typeof this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off(["tap","click"],this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur)},r.prototype.handleClick=function(t){},r.prototype.handleFocus=function(t){_t(p,"keydown",Ot(this,this.handleKeyPress))},r.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.trigger("click")):n.prototype.handleKeyPress&&n.prototype.handleKeyPress.call(this,t)},r.prototype.handleBlur=function(t){bt(p,"keydown",Ot(this,this.handleKeyPress))},r}(Xt);Xt.registerComponent("ClickableComponent",Rr);var Mr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update(),t.on("posterchange",Ot(i,i.update)),i}return _(n,r),n.prototype.dispose=function(){this.player().off("posterchange",this.update),r.prototype.dispose.call(this)},n.prototype.createEl=function(){return M("div",{className:"vjs-poster",tabIndex:-1})},n.prototype.update=function(t){var e=this.player().poster();this.setSrc(e),e?this.show():this.hide()},n.prototype.setSrc=function(t){var e="";t&&(e='url("'+t+'")'),this.el_.style.backgroundImage=e},n.prototype.handleClick=function(t){this.player_.controls()&&(this.player_.paused()?this.player_.play():this.player_.pause())},n}(Rr);Xt.registerComponent("PosterImage",Mr);var Ur="#222",Nr={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'};function Br(t,e){return"rgba("+parseInt(t[1]+t[1],16)+","+parseInt(t[2]+t[2],16)+","+parseInt(t[3]+t[3],16)+","+e+")"}function jr(t,e,i){try{t.style[e]=i}catch(t){return}}var Fr=function(n){function s(i,t,e){y(this,s);var r=b(this,n.call(this,i,t,e));return i.on("loadstart",Ot(r,r.toggleDisplay)),i.on("texttrackchange",Ot(r,r.updateDisplay)),i.on("loadstart",Ot(r,r.preselectTrack)),i.ready(Ot(r,function(){if(i.tech_&&i.tech_.featuresNativeTextTracks)this.hide();else{i.on("fullscreenchange",Ot(this,this.updateDisplay));for(var t=this.options_.playerOptions.tracks||[],e=0;e<t.length;e++)this.player_.addRemoteTextTrack(t[e],!0);this.preselectTrack()}})),r}return _(s,n),s.prototype.preselectTrack=function(){for(var t={captions:1,subtitles:1},e=this.player_.textTracks(),i=this.player_.cache_.selectedLanguage,r=void 0,n=void 0,s=void 0,a=0;a<e.length;a++){var o=e[a];i&&i.enabled&&i.language===o.language?o.kind===i.kind?s=o:s||(s=o):i&&!i.enabled?n=r=s=null:o.default&&("descriptions"!==o.kind||r?o.kind in t&&!n&&(n=o):r=o)}s?s.mode="showing":n?n.mode="showing":r&&(r.mode="showing")},s.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},s.prototype.clearDisplay=function(){"function"==typeof g.WebVTT&&g.WebVTT.processCues(g,[],this.el_)},s.prototype.updateDisplay=function(){var t=this.player_.textTracks();this.clearDisplay();for(var e=null,i=null,r=t.length;r--;){var n=t[r];"showing"===n.mode&&("descriptions"===n.kind?e=n:i=n)}i?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(i)):e&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(e))},s.prototype.updateForTrack=function(t){if("function"==typeof g.WebVTT&&t.activeCues){for(var e=[],i=0;i<t.activeCues.length;i++)e.push(t.activeCues[i]);if(g.WebVTT.processCues(g,e,this.el_),this.player_.textTrackSettings)for(var r=this.player_.textTrackSettings.getValues(),n=e.length;n--;){var s=e[n];if(s){var a=s.displayState;if(r.color&&(a.firstChild.style.color=r.color),r.textOpacity&&jr(a.firstChild,"color",Br(r.color||"#fff",r.textOpacity)),r.backgroundColor&&(a.firstChild.style.backgroundColor=r.backgroundColor),r.backgroundOpacity&&jr(a.firstChild,"backgroundColor",Br(r.backgroundColor||"#000",r.backgroundOpacity)),r.windowColor&&(r.windowOpacity?jr(a,"backgroundColor",Br(r.windowColor,r.windowOpacity)):a.style.backgroundColor=r.windowColor),r.edgeStyle&&("dropshadow"===r.edgeStyle?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px "+Ur:"raised"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px "+Ur:"depressed"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px "+Ur:"uniform"===r.edgeStyle&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px "+Ur)),r.fontPercent&&1!==r.fontPercent){var o=g.parseFloat(a.style.fontSize);a.style.fontSize=o*r.fontPercent+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px"}r.fontFamily&&"default"!==r.fontFamily&&("small-caps"===r.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=Nr[r.fontFamily])}}}},s}(Xt);Xt.registerComponent("TextTrackDisplay",Fr);var Hr=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(){var t=this.player_.isAudio(),e=this.localize(t?"Audio Player":"Video Player"),i=M("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[e])}),r=n.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"});return r.appendChild(i),r},t}(Xt);Xt.registerComponent("LoadingSpinner",Hr);var Vr=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},e),i=C({type:"button"},i);var r=Xt.prototype.createEl.call(this,"button",e,i);return this.createControlTextEl(r),r},t.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=this.constructor.name;return f.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead."),Xt.prototype.addChild.call(this,t,e)},t.prototype.enable=function(){e.prototype.enable.call(this),this.el_.removeAttribute("disabled")},t.prototype.disable=function(){e.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},t.prototype.handleKeyPress=function(t){32!==t.which&&13!==t.which&&e.prototype.handleKeyPress.call(this,t)},t}(Rr);Xt.registerComponent("Button",Vr);var qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.mouseused_=!1,i.on("mousedown",i.handleMouseDown),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-big-play-button"},n.prototype.handleClick=function(t){var e=this.player_.play();if(!(this.mouseused_&&t.clientX&&t.clientY)){var i=this.player_.getChild("controlBar"),r=i&&i.getChild("playToggle");if(r){var n=function(){return r.focus()};xe(e)?e.then(n,function(){}):this.setTimeout(n,1)}else this.player_.focus()}},n.prototype.handleKeyPress=function(t){this.mouseused_=!1,r.prototype.handleKeyPress.call(this,t)},n.prototype.handleMouseDown=function(t){this.mouseused_=!0},n}(Vr);qr.prototype.controlText_="Play Video",Xt.registerComponent("BigPlayButton",qr);var Wr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.controlText(e&&e.controlText||i.localize("Close")),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-close-button "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.trigger({type:"close",bubbles:!1})},n}(Vr);Xt.registerComponent("CloseButton",Wr);var zr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"play",i.handlePlay),i.on(t,"pause",i.handlePause),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-play-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleSeeked=function(t){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(t):this.handlePlay(t)},n.prototype.handlePlay=function(t){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},n.prototype.handlePause=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},n.prototype.handleEnded=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",this.handleSeeked)},n}(Vr);zr.prototype.controlText_="Play",Xt.registerComponent("PlayToggle",zr);var Gr=function(t,e){t=t<0?0:t;var i=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600),s=Math.floor(e/60%60),a=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=i="-"),(n=0<n||0<a?n+":":"")+(r=((n||10<=s)&&r<10?"0"+r:r)+":")+(i=i<10?"0"+i:i)},Xr=Gr;function Yr(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t;return Xr(t,e)}var $r=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.throttledUpdateContent=xt(Ot(i,i.updateContent),25),i.on(t,"timeupdate",i.throttledUpdateContent),i}return _(n,r),n.prototype.createEl=function(t){var e=this.buildCSSClass(),i=r.prototype.createEl.call(this,"div",{className:e+" vjs-time-control vjs-control",innerHTML:'<span class="vjs-control-text">'+this.localize(this.labelText_)+" </span>"});return this.contentEl_=M("span",{className:e+"-display"},{"aria-live":"off"}),this.updateTextNode_(),i.appendChild(this.contentEl_),i},n.prototype.dispose=function(){this.contentEl_=null,this.textNode_=null,r.prototype.dispose.call(this)},n.prototype.updateTextNode_=function(){if(this.contentEl_){for(;this.contentEl_.firstChild;)this.contentEl_.removeChild(this.contentEl_.firstChild);this.textNode_=p.createTextNode(this.formattedTime_||this.formatTime_(0)),this.contentEl_.appendChild(this.textNode_)}},n.prototype.formatTime_=function(t){return Yr(t)},n.prototype.updateFormattedTime_=function(t){var e=this.formatTime_(t);e!==this.formattedTime_&&(this.formattedTime_=e,this.requestAnimationFrame(this.updateTextNode_))},n.prototype.updateContent=function(t){},n}(Xt);$r.prototype.labelText_="Time",$r.prototype.controlText_="Time",Xt.registerComponent("TimeDisplay",$r);var Kr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-current-time"},n.prototype.updateContent=function(t){var e=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.updateFormattedTime_(e)},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(this.player_.duration())},n}($r);Kr.prototype.labelText_="Current Time",Kr.prototype.controlText_="Current Time",Xt.registerComponent("CurrentTimeDisplay",Kr);var Qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.updateContent),i.on(t,"loadedmetadata",i.throttledUpdateContent),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-duration"},n.prototype.updateContent=function(t){var e=this.player_.duration();e&&this.duration_!==e&&(this.duration_=e,this.updateFormattedTime_(e))},n}($r);Qr.prototype.labelText_="Duration",Qr.prototype.controlText_="Duration",Xt.registerComponent("DurationDisplay",Qr);var Jr=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},e}(Xt);Xt.registerComponent("TimeDivider",Jr);var Zr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.throttledUpdateContent),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-remaining-time"},n.prototype.formatTime_=function(t){return"-"+r.prototype.formatTime_.call(this,t)},n.prototype.updateContent=function(t){this.player_.duration()&&(this.player_.remainingTimeDisplay?this.updateFormattedTime_(this.player_.remainingTimeDisplay()):this.updateFormattedTime_(this.player_.remainingTime()))},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(0)},n}($r);Zr.prototype.labelText_="Remaining Time",Zr.prototype.controlText_="Remaining Time",Xt.registerComponent("RemainingTimeDisplay",Zr);var tn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateShowing(),i.on(i.player(),"durationchange",i.updateShowing),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=M("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+" </span>"+this.localize("LIVE")},{"aria-live":"off"}),t.appendChild(this.contentEl_),t},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.updateShowing=function(t){this.player().duration()===1/0?this.show():this.hide()},n}(Xt);Xt.registerComponent("LiveDisplay",tn);var en=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.bar=i.getChild(i.options_.barName),i.vertical(!!i.options_.vertical),i.enable(),i}return _(n,r),n.prototype.enabled=function(){return this.enabled_},n.prototype.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown),this.on("touchstart",this.handleMouseDown),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this.on("click",this.handleClick),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},n.prototype.disable=function(){if(this.enabled()){var t=this.bar.el_.ownerDocument;this.off("mousedown",this.handleMouseDown),this.off("touchstart",this.handleMouseDown),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this.off("click",this.handleClick),this.off(this.player_,"controlsvisible",this.update),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},n.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return e.className=e.className+" vjs-slider",e=C({tabIndex:0},e),i=C({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},i),r.prototype.createEl.call(this,t,e,i)},n.prototype.handleMouseDown=function(t){var e=this.bar.el_.ownerDocument;t.preventDefault(),X(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(e,"mousemove",this.handleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchmove",this.handleMouseMove),this.on(e,"touchend",this.handleMouseUp),this.handleMouseMove(t)},n.prototype.handleMouseMove=function(t){},n.prototype.handleMouseUp=function(){var t=this.bar.el_.ownerDocument;Y(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.update()},n.prototype.update=function(){if(this.el_){var t=this.getPercent(),e=this.bar;if(e){("number"!=typeof t||t!=t||t<0||t===1/0)&&(t=0);var i=(100*t).toFixed(2)+"%",r=e.el().style;return this.vertical()?r.height=i:r.width=i,t}}},n.prototype.calculateDistance=function(t){var e=Q(this.el_,t);return this.vertical()?e.y:e.x},n.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepBack()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepForward())},n.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleClick=function(t){t.stopImmediatePropagation(),t.preventDefault()},n.prototype.vertical=function(t){if(void 0===t)return this.vertical_||!1;this.vertical_=!!t,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},n}(Xt);Xt.registerComponent("Slider",en);var rn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.partEls_=[],i.on(t,"progress",i.update),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},n.prototype.dispose=function(){this.partEls_=null,r.prototype.dispose.call(this)},n.prototype.update=function(t){var e=this.player_.buffered(),i=this.player_.duration(),r=this.player_.bufferedEnd(),n=this.partEls_,s=function(t,e){var i=t/e||0;return 100*(1<=i?1:i)+"%"};this.el_.style.width=s(r,i);for(var a=0;a<e.length;a++){var o=e.start(a),u=e.end(a),l=n[a];l||(l=this.el_.appendChild(M()),n[a]=l),l.style.left=s(o,r),l.style.width=s(u-o,r)}for(var c=n.length;c>e.length;c--)this.el_.removeChild(n[c-1]);n.length=e.length},n}(Xt);Xt.registerComponent("LoadProgressBar",rn);var nn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})},e.prototype.update=function(t,e,i){var r=$(this.el_),n=$(this.player_.el()),s=t.width*e;if(n&&r){var a=t.left-n.left+s,o=t.width-s+(n.right-t.right),u=r.width/2;a<u?u+=u-a:o<u&&(u=o),u<0?u=0:u>r.width&&(u=r.width),this.el_.style.right="-"+u+"px",U(this.el_,i)}},e}(Xt);Xt.registerComponent("TimeTooltip",nn);var sn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},e.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=Yr(n.player_.scrubbing()?n.player_.getCache().currentTime:n.player_.currentTime(),n.player_.duration()),e=n.getChild("timeTooltip");e&&e.update(i,r,t)})},e}(Xt);sn.prototype.options_={children:[]},ne||ae||sn.prototype.options_.children.push("timeTooltip"),Xt.registerComponent("PlayProgressBar",sn);var an=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update=xt(Ot(i,i.update),25),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},n.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=n.player_.duration(),e=Yr(r*t,t);n.el_.style.left=i.width*r+"px",n.getChild("timeTooltip").update(i,r,e)})},n}(Xt);an.prototype.options_={children:["timeTooltip"]},Xt.registerComponent("MouseTimeDisplay",an);var on=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.setEventHandlers_(),i}return _(n,r),n.prototype.setEventHandlers_=function(){var t=this;this.update=xt(Ot(this,this.update),30),this.on(this.player_,"timeupdate",this.update),this.on(this.player_,"ended",this.handleEnded),this.updateInterval=null,this.on(this.player_,["playing"],function(){t.clearInterval(t.updateInterval),t.updateInterval=t.setInterval(function(){t.requestAnimationFrame(function(){t.update()})},30)}),this.on(this.player_,["ended","pause","waiting"],function(){t.clearInterval(t.updateInterval)}),this.on(this.player_,["timeupdate","ended"],this.update)},n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},n.prototype.update_=function(t,e){var i=this.player_.duration();this.el_.setAttribute("aria-valuenow",(100*e).toFixed(2)),this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[Yr(t,i),Yr(i,i)],"{1} of {2}")),this.bar.update($(this.el_),e)},n.prototype.update=function(t){var e=r.prototype.update.call(this);return this.update_(this.getCurrentTime_(),e),e},n.prototype.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},n.prototype.handleEnded=function(t){this.update_(this.player_.duration(),1)},n.prototype.getPercent=function(){var t=this.getCurrentTime_()/this.player_.duration();return 1<=t?1:t||0},n.prototype.handleMouseDown=function(t){rt(t)&&(t.stopPropagation(),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),r.prototype.handleMouseDown.call(this,t))},n.prototype.handleMouseMove=function(t){if(rt(t)){var e=this.calculateDistance(t)*this.player_.duration();e===this.player_.duration()&&(e-=.1),this.player_.currentTime(e)}},n.prototype.enable=function(){r.prototype.enable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.show()},n.prototype.disable=function(){r.prototype.disable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.hide()},n.prototype.handleMouseUp=function(t){r.prototype.handleMouseUp.call(this,t),t&&t.stopPropagation(),this.player_.scrubbing(!1),this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0}),this.videoWasPlaying&&Ie(this.player_.play())},n.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},n.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},n.prototype.handleAction=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.handleAction(t)):r.prototype.handleKeyPress&&r.prototype.handleKeyPress.call(this,t)},n}(en);on.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},ne||ae||on.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),on.prototype.playerEvent="timeupdate",Xt.registerComponent("SeekBar",on);var un=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.handleMouseMove=xt(Ot(i,i.handleMouseMove),25),i.throttledHandleMouseSeek=xt(Ot(i,i.handleMouseSeek),25),i.enable(),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},n.prototype.handleMouseMove=function(t){var e=this.getChild("seekBar");if(e){var i=e.getChild("mouseTimeDisplay"),r=e.el(),n=$(r),s=Q(r,t).x;1<s?s=1:s<0&&(s=0),i&&i.update(n,s)}},n.prototype.handleMouseSeek=function(t){var e=this.getChild("seekBar");e&&e.handleMouseMove(t)},n.prototype.enabled=function(){return this.enabled_},n.prototype.disable=function(){this.children().forEach(function(t){return t.disable&&t.disable()}),this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDown),this.off(this.el_,"mousemove",this.handleMouseMove),this.handleMouseUp(),this.addClass("disabled"),this.enabled_=!1)},n.prototype.enable=function(){this.children().forEach(function(t){return t.enable&&t.enable()}),this.enabled()||(this.on(["mousedown","touchstart"],this.handleMouseDown),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseDown(t),this.on(e,"mousemove",this.throttledHandleMouseSeek),this.on(e,"touchmove",this.throttledHandleMouseSeek),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseUp(t),this.off(e,"mousemove",this.throttledHandleMouseSeek),this.off(e,"touchmove",this.throttledHandleMouseSeek),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n}(Xt);un.prototype.options_={children:["seekBar"]},Xt.registerComponent("ProgressControl",un);var ln=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"fullscreenchange",i.handleFullscreenChange),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleFullscreenChange=function(t){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},n.prototype.handleClick=function(t){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},n}(Vr);ln.prototype.controlText_="Fullscreen",Xt.registerComponent("FullscreenToggle",ln);var cn=function(t,e){e.tech_&&!e.tech_.featuresVolumeControl&&t.addClass("vjs-hidden"),t.on(e,"loadstart",function(){e.tech_.featuresVolumeControl?t.removeClass("vjs-hidden"):t.addClass("vjs-hidden")})},hn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},e}(Xt);Xt.registerComponent("VolumeLevel",hn);var dn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on("slideractive",i.updateLastVolume_),i.on(t,"volumechange",i.updateARIAAttributes),t.ready(function(){return i.updateARIAAttributes()}),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},n.prototype.handleMouseDown=function(t){rt(t)&&r.prototype.handleMouseDown.call(this,t)},n.prototype.handleMouseMove=function(t){rt(t)&&(this.checkMuted(),this.player_.volume(this.calculateDistance(t)))},n.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},n.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},n.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},n.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},n.prototype.updateARIAAttributes=function(t){var e=this.player_.muted()?0:this.volumeAsPercentage_();this.el_.setAttribute("aria-valuenow",e),this.el_.setAttribute("aria-valuetext",e+"%")},n.prototype.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())},n.prototype.updateLastVolume_=function(){var t=this,e=this.player_.volume();this.one("sliderinactive",function(){0===t.player_.volume()&&t.player_.lastVolume_(e)})},n}(en);dn.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},dn.prototype.playerEvent="volumechange",Xt.registerComponent("VolumeBar",dn);var pn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),e.vertical=e.vertical||!1,("undefined"==typeof e.volumeBar||w(e.volumeBar))&&(e.volumeBar=e.volumeBar||{},e.volumeBar.vertical=e.vertical);var i=b(this,r.call(this,t,e));return cn(i,t),i.throttledHandleMouseMove=xt(Ot(i,i.handleMouseMove),25),i.on("mousedown",i.handleMouseDown),i.on("touchstart",i.handleMouseDown),i.on(i.volumeBar,["focus","slideractive"],function(){i.volumeBar.addClass("vjs-slider-active"),i.addClass("vjs-slider-active"),i.trigger("slideractive")}),i.on(i.volumeBar,["blur","sliderinactive"],function(){i.volumeBar.removeClass("vjs-slider-active"),i.removeClass("vjs-slider-active"),i.trigger("sliderinactive")}),i}return _(n,r),n.prototype.createEl=function(){var t="vjs-volume-horizontal";return this.options_.vertical&&(t="vjs-volume-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+t})},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument;this.on(e,"mousemove",this.throttledHandleMouseMove),this.on(e,"touchmove",this.throttledHandleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument;this.off(e,"mousemove",this.throttledHandleMouseMove),this.off(e,"touchmove",this.throttledHandleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseMove=function(t){this.volumeBar.handleMouseMove(t)},n}(Xt);pn.prototype.options_={children:["volumeBar"]},Xt.registerComponent("VolumeControl",pn);var fn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return cn(i,t),i.on(t,["loadstart","volumechange"],i.update),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-mute-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){var e=this.player_.volume(),i=this.player_.lastVolume_();if(0===e){var r=i<.1?.1:i;this.player_.volume(r),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},n.prototype.update=function(t){this.updateIcon_(),this.updateControlText_()},n.prototype.updateIcon_=function(){var t=this.player_.volume(),e=3;0===t||this.player_.muted()?e=0:t<.33?e=1:t<.67&&(e=2);for(var i=0;i<4;i++)F(this.el_,"vjs-vol-"+i);j(this.el_,"vjs-vol-"+e)},n.prototype.updateControlText_=function(){var t=this.player_.muted()||0===this.player_.volume()?"Unmute":"Mute";this.controlText()!==t&&this.controlText(t)},n}(Vr);fn.prototype.controlText_="Mute",Xt.registerComponent("MuteToggle",fn);var mn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),"undefined"!=typeof e.inline?e.inline=e.inline:e.inline=!0,("undefined"==typeof e.volumeControl||w(e.volumeControl))&&(e.volumeControl=e.volumeControl||{},e.volumeControl.vertical=!e.inline);var i=b(this,r.call(this,t,e));return cn(i,t),i.on(i.volumeControl,["slideractive"],i.sliderActive_),i.on(i.volumeControl,["sliderinactive"],i.sliderInactive_),i}return _(n,r),n.prototype.sliderActive_=function(){this.addClass("vjs-slider-active")},n.prototype.sliderInactive_=function(){this.removeClass("vjs-slider-active")},n.prototype.createEl=function(){var t="vjs-volume-panel-horizontal";return this.options_.inline||(t="vjs-volume-panel-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+t})},n}(Xt);mn.prototype.options_={children:["muteToggle","volumeControl"]},Xt.registerComponent("VolumePanel",mn);var gn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return e&&(i.menuButton_=e.menuButton),i.focusedChild_=-1,i.on("keydown",i.handleKeyPress),i}return _(n,r),n.prototype.addItem=function(e){this.addChild(e),e.on("click",Ot(this,function(t){this.menuButton_&&(this.menuButton_.unpressButton(),"CaptionSettingsMenuItem"!==e.name()&&this.menuButton_.focus())}))},n.prototype.createEl=function(){var t=this.options_.contentElType||"ul";this.contentEl_=M(t,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var e=r.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return e.appendChild(this.contentEl_),_t(e,"click",function(t){t.preventDefault(),t.stopImmediatePropagation()}),e},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepForward()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepBack())},n.prototype.stepForward=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_+1),this.focus(t)},n.prototype.stepBack=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_-1),this.focus(t)},n.prototype.focus=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=this.children().slice();e.length&&e[0].className&&/vjs-menu-title/.test(e[0].className)&&e.shift(),0<e.length&&(t<0?t=0:t>=e.length&&(t=e.length-1),e[this.focusedChild_=t].el_.focus())},n}(Xt);Xt.registerComponent("Menu",gn);var yn=function(n){function s(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,s);var i=b(this,n.call(this,t,e));i.menuButton_=new Vr(t,e),i.menuButton_.controlText(i.controlText_),i.menuButton_.el_.setAttribute("aria-haspopup","true");var r=Vr.prototype.buildCSSClass();return i.menuButton_.el_.className=i.buildCSSClass()+" "+r,i.menuButton_.removeClass("vjs-control"),i.addChild(i.menuButton_),i.update(),i.enabled_=!0,i.on(i.menuButton_,"tap",i.handleClick),i.on(i.menuButton_,"click",i.handleClick),i.on(i.menuButton_,"focus",i.handleFocus),i.on(i.menuButton_,"blur",i.handleBlur),i.on("keydown",i.handleSubmenuKeyPress),i}return _(s,n),s.prototype.update=function(){var t=this.createMenu();this.menu&&(this.menu.dispose(),this.removeChild(this.menu)),this.menu=t,this.addChild(t),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},s.prototype.createMenu=function(){var t=new gn(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var e=M("li",{className:"vjs-menu-title",innerHTML:zt(this.options_.title),tabIndex:-1});this.hideThreshold_+=1,t.children_.unshift(e),N(e,t.contentEl())}if(this.items=this.createItems(),this.items)for(var i=0;i<this.items.length;i++)t.addItem(this.items[i]);return t},s.prototype.createItems=function(){},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},s.prototype.buildWrapperCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+Vr.prototype.buildCSSClass()+" "+n.prototype.buildCSSClass.call(this)},s.prototype.buildCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+n.prototype.buildCSSClass.call(this)},s.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.menuButton_.el();return this.menuButton_.controlText(t,e)},s.prototype.handleClick=function(t){this.one(this.menu.contentEl(),"mouseleave",Ot(this,function(t){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},s.prototype.focus=function(){this.menuButton_.focus()},s.prototype.blur=function(){this.menuButton_.blur()},s.prototype.handleFocus=function(){_t(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleBlur=function(){bt(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleKeyPress=function(t){27===t.which||9===t.which?(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus())):38!==t.which&&40!==t.which||this.buttonPressed_||(this.pressButton(),t.preventDefault())},s.prototype.handleSubmenuKeyPress=function(t){27!==t.which&&9!==t.which||(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus()))},s.prototype.pressButton=function(){if(this.enabled_){if(this.buttonPressed_=!0,this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),ne&&D())return;this.menu.focus()}},s.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},s.prototype.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},s.prototype.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},s}(Xt);Xt.registerComponent("MenuButton",yn);var vn=function(s){function a(t,e){y(this,a);var i=e.tracks,r=b(this,s.call(this,t,e));if(r.items.length<=1&&r.hide(),!i)return b(r);var n=Ot(r,r.update);return i.addEventListener("removetrack",n),i.addEventListener("addtrack",n),r.player_.on("ready",n),r.player_.on("dispose",function(){i.removeEventListener("removetrack",n),i.removeEventListener("addtrack",n)}),r}return _(a,s),a}(yn);Xt.registerComponent("TrackButton",vn);var _n=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.selectable=e.selectable,i.isSelected_=e.selected||!1,i.selected(i.isSelected_),i.selectable?i.el_.setAttribute("role","menuitemcheckbox"):i.el_.setAttribute("role","menuitem"),i}return _(n,r),n.prototype.createEl=function(t,e,i){return this.nonIconControl=!0,r.prototype.createEl.call(this,"li",C({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},e),i)},n.prototype.handleClick=function(t){this.selected(!0)},n.prototype.selected=function(t){this.selectable&&(t?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected"),this.isSelected_=!0):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(""),this.isSelected_=!1))},n}(Rr);Xt.registerComponent("MenuItem",_n);var bn=function(u){function l(t,e){y(this,l);var i=e.track,r=t.textTracks();e.label=i.label||i.language||"Unknown",e.selected="showing"===i.mode;var n=b(this,u.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)},a=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleSelectedLanguageChange.apply(n,e)};if(t.on(["loadstart","texttrackchange"],s),r.addEventListener("change",s),r.addEventListener("selectedlanguagechange",a),n.on("dispose",function(){t.off(["loadstart","texttrackchange"],s),r.removeEventListener("change",s),r.removeEventListener("selectedlanguagechange",a)}),void 0===r.onchange){var o=void 0;n.on(["tap","click"],function(){if("object"!==v(g.Event))try{o=new g.Event("change")}catch(t){}o||(o=p.createEvent("Event")).initEvent("change",!0,!0),r.dispatchEvent(o)})}return n.handleTracksChange(),n}return _(l,u),l.prototype.handleClick=function(t){var e=this.track.kind,i=this.track.kinds,r=this.player_.textTracks();if(i||(i=[e]),u.prototype.handleClick.call(this,t),r)for(var n=0;n<r.length;n++){var s=r[n];s===this.track&&-1<i.indexOf(s.kind)?"showing"!==s.mode&&(s.mode="showing"):"disabled"!==s.mode&&(s.mode="disabled")}},l.prototype.handleTracksChange=function(t){var e="showing"===this.track.mode;e!==this.isSelected_&&this.selected(e)},l.prototype.handleSelectedLanguageChange=function(t){if("showing"===this.track.mode){var e=this.player_.cache_.selectedLanguage;if(e&&e.enabled&&e.language===this.track.language&&e.kind!==this.track.kind)return;this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},l.prototype.dispose=function(){this.track=null,u.prototype.dispose.call(this)},l}(_n);Xt.registerComponent("TextTrackMenuItem",bn);var Tn=function(i){function r(t,e){return y(this,r),e.track={player:t,kind:e.kind,kinds:e.kinds,default:!1,mode:"disabled"},e.kinds||(e.kinds=[e.kind]),e.label?e.track.label=e.label:e.track.label=e.kinds.join(" and ")+" off",e.selectable=!0,b(this,i.call(this,t,e))}return _(r,i),r.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<this.options_.kinds.indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i!==this.isSelected_&&this.selected(i)},r.prototype.handleSelectedLanguageChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<["captions","descriptions","subtitles"].indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i&&(this.player_.cache_.selectedLanguage={enabled:!1})},r}(bn);Xt.registerComponent("OffTextTrackMenuItem",Tn);var Sn=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.textTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:bn,i=void 0;this.label_&&(i=this.label_+" off"),t.push(new Tn(this.player_,{kinds:this.kinds_,kind:this.kind_,label:i})),this.hideThreshold_+=1;var r=this.player_.textTracks();Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);for(var n=0;n<r.length;n++){var s=r[n];if(-1<this.kinds_.indexOf(s.kind)){var a=new e(this.player_,{track:s,selectable:!0});a.addClass("vjs-"+s.kind+"-menu-item"),t.push(a)}}return t},r}(vn);Xt.registerComponent("TextTrackButton",Sn);var kn=function(a){function o(t,e){y(this,o);var i=e.track,r=e.cue,n=t.currentTime();e.selectable=!0,e.label=r.text,e.selected=r.startTime<=n&&n<r.endTime;var s=b(this,a.call(this,t,e));return s.track=i,s.cue=r,i.addEventListener("cuechange",Ot(s,s.update)),s}return _(o,a),o.prototype.handleClick=function(t){a.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},o.prototype.update=function(t){var e=this.cue,i=this.player_.currentTime();this.selected(e.startTime<=i&&i<e.endTime)},o}(_n);Xt.registerComponent("ChaptersTrackMenuItem",kn);var Cn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.update=function(t){this.track_&&(!t||"addtrack"!==t.type&&"removetrack"!==t.type)||this.setTrack(this.findChaptersTrack()),r.prototype.update.call(this)},n.prototype.setTrack=function(t){if(this.track_!==t){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var e=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);e&&e.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=t,this.track_){this.track_.mode="hidden";var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);i&&i.addEventListener("load",this.updateHandler_)}}},n.prototype.findChaptersTrack=function(){for(var t=this.player_.textTracks()||[],e=t.length-1;0<=e;e--){var i=t[e];if(i.kind===this.kind_)return i}},n.prototype.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(zt(this.kind_))},n.prototype.createMenu=function(){return this.options_.title=this.getMenuCaption(),r.prototype.createMenu.call(this)},n.prototype.createItems=function(){var t=[];if(!this.track_)return t;var e=this.track_.cues;if(!e)return t;for(var i=0,r=e.length;i<r;i++){var n=e[i],s=new kn(this.player_,{track:this.track_,cue:n});t.push(s)}return t},n}(Sn);Cn.prototype.kind_="chapters",Cn.prototype.controlText_="Chapters",Xt.registerComponent("ChaptersButton",Cn);var En=function(a){function o(t,e,i){y(this,o);var r=b(this,a.call(this,t,e,i)),n=t.textTracks(),s=Ot(r,r.handleTracksChange);return n.addEventListener("change",s),r.on("dispose",function(){n.removeEventListener("change",s)}),r}return _(o,a),o.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!1,r=0,n=e.length;r<n;r++){var s=e[r];if(s.kind!==this.kind_&&"showing"===s.mode){i=!0;break}}i?this.disable():this.enable()},o.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildCSSClass.call(this)},o.prototype.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildWrapperCSSClass.call(this)},o}(Sn);En.prototype.kind_="descriptions",En.prototype.controlText_="Descriptions",Xt.registerComponent("DescriptionsButton",En);var wn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildWrapperCSSClass.call(this)},n}(Sn);wn.prototype.kind_="subtitles",wn.prototype.controlText_="Subtitles",Xt.registerComponent("SubtitlesButton",wn);var An=function(r){function n(t,e){y(this,n),e.track={player:t,kind:e.kind,label:e.kind+" settings",selectable:!1,default:!1,mode:"disabled"},e.selectable=!1,e.name="CaptionSettingsMenuItem";var i=b(this,r.call(this,t,e));return i.addClass("vjs-texttrack-settings"),i.controlText(", opens "+e.kind+" settings dialog"),i}return _(n,r),n.prototype.handleClick=function(t){this.player().getChild("textTrackSettings").open()},n}(bn);Xt.registerComponent("CaptionSettingsMenuItem",An);var Ln=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-captions-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-captions-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new An(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),r.prototype.createItems.call(this,t)},n}(Sn);Ln.prototype.kind_="captions",Ln.prototype.controlText_="Captions",Xt.registerComponent("CaptionsButton",Ln);var Pn=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(t,e,i){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);return"captions"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "),r+="</span>",n.prototype.createEl.call(this,t,C({innerHTML:r},e),i)},t}(bn);Xt.registerComponent("SubsCapsMenuItem",Pn);var On=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.label_="subtitles",-1<["en","en-us","en-ca","fr-ca"].indexOf(i.player_.language_)&&(i.label_="captions"),i.menuButton_.controlText(zt(i.label_)),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new An(this.player_,{kind:this.label_})),this.hideThreshold_+=1),t=r.prototype.createItems.call(this,t,Pn)},n}(Sn);On.prototype.kinds_=["captions","subtitles"],On.prototype.controlText_="Subtitles",Xt.registerComponent("SubsCapsButton",On);var xn=function(a){function o(t,e){y(this,o);var i=e.track,r=t.audioTracks();e.label=i.label||i.language||"Unknown",e.selected=i.enabled;var n=b(this,a.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)};return r.addEventListener("change",s),n.on("dispose",function(){r.removeEventListener("change",s)}),n}return _(o,a),o.prototype.handleClick=function(t){var e=this.player_.audioTracks();a.prototype.handleClick.call(this,t);for(var i=0;i<e.length;i++){var r=e[i];r.enabled=r===this.track}},o.prototype.handleTracksChange=function(t){this.selected(this.track.enabled)},o}(_n);Xt.registerComponent("AudioTrackMenuItem",xn);var In=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.audioTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.buildCSSClass=function(){return"vjs-audio-button "+i.prototype.buildCSSClass.call(this)},r.prototype.buildWrapperCSSClass=function(){return"vjs-audio-button "+i.prototype.buildWrapperCSSClass.call(this)},r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];this.hideThreshold_=1;for(var e=this.player_.audioTracks(),i=0;i<e.length;i++){var r=e[i];t.push(new xn(this.player_,{track:r,selectable:!0}))}return t},r}(vn);In.prototype.controlText_="Audio Track",Xt.registerComponent("AudioTrackButton",In);var Dn=function(s){function a(t,e){y(this,a);var i=e.rate,r=parseFloat(i,10);e.label=i,e.selected=1===r,e.selectable=!0;var n=b(this,s.call(this,t,e));return n.label=i,n.rate=r,n.on(t,"ratechange",n.update),n}return _(a,s),a.prototype.handleClick=function(t){s.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},a.prototype.update=function(t){this.selected(this.player().playbackRate()===this.rate)},a}(_n);Dn.prototype.contentElType="button",Xt.registerComponent("PlaybackRateMenuItem",Dn);var Rn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateVisibility(),i.updateLabel(),i.on(t,"loadstart",i.updateVisibility),i.on(t,"ratechange",i.updateLabel),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this);return this.labelEl_=M("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),t.appendChild(this.labelEl_),t},n.prototype.dispose=function(){this.labelEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createMenu=function(){var t=new gn(this.player()),e=this.playbackRates();if(e)for(var i=e.length-1;0<=i;i--)t.addChild(new Dn(this.player(),{rate:e[i]+"x"}));return t},n.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},n.prototype.handleClick=function(t){for(var e=this.player().playbackRate(),i=this.playbackRates(),r=i[0],n=0;n<i.length;n++)if(i[n]>e){r=i[n];break}this.player().playbackRate(r)},n.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},n.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&0<this.playbackRates().length},n.prototype.updateVisibility=function(t){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},n.prototype.updateLabel=function(t){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},n}(yn);Rn.prototype.controlText_="Playback Rate",Xt.registerComponent("PlaybackRateMenuButton",Rn);var Mn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.buildCSSClass=function(){return"vjs-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},e}(Xt);Xt.registerComponent("Spacer",Mn);var Un=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+e.prototype.buildCSSClass.call(this)},t.prototype.createEl=function(){var t=e.prototype.createEl.call(this,{className:this.buildCSSClass()});return t.innerHTML=" ",t},t}(Mn);Xt.registerComponent("CustomControlSpacer",Un);var Nn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})},e}(Xt);Nn.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},Xt.registerComponent("ControlBar",Nn);var Bn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"error",i.open),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-error-display "+r.prototype.buildCSSClass.call(this)},n.prototype.content=function(){var t=this.player().error();return t?this.localize(t.message):""},n}(Ne);Bn.prototype.options_=Gt(Ne.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),Xt.registerComponent("ErrorDisplay",Bn);var jn="vjs-text-track-settings",Fn=["#000","Black"],Hn=["#00F","Blue"],Vn=["#0FF","Cyan"],qn=["#0F0","Green"],Wn=["#F0F","Magenta"],zn=["#F00","Red"],Gn=["#FFF","White"],Xn=["#FF0","Yellow"],Yn=["1","Opaque"],$n=["0.5","Semi-Transparent"],Kn=["0","Transparent"],Qn={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[Fn,Gn,zn,qn,Hn,Xn,Wn,Vn]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[Yn,$n,Kn]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Gn,Fn,zn,qn,Hn,Xn,Wn,Vn]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(t){return"1.00"===t?null:Number(t)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[Yn,$n]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[Kn,$n,Yn]}};function Jn(t,e){if(e&&(t=e(t)),t&&"none"!==t)return t}Qn.windowColor.options=Qn.backgroundColor.options;var Zn=function(r){function n(t,e){y(this,n),e.temporary=!1;var i=b(this,r.call(this,t,e));return i.updateDisplay=Ot(i,i.updateDisplay),i.fill(),i.hasBeenOpened_=i.hasBeenFilled_=!0,i.endDialog=M("p",{className:"vjs-control-text",textContent:i.localize("End of dialog window.")}),i.el().appendChild(i.endDialog),i.setDefaults(),void 0===e.persistTextTrackSettings&&(i.options_.persistTextTrackSettings=i.options_.playerOptions.persistTextTrackSettings),i.on(i.$(".vjs-done-button"),"click",function(){i.saveSettings(),i.close()}),i.on(i.$(".vjs-default-button"),"click",function(){i.setDefaults(),i.updateDisplay()}),k(Qn,function(t){i.on(i.$(t.selector),"change",i.updateDisplay)}),i.options_.persistTextTrackSettings&&i.restoreSettings(),i}return _(n,r),n.prototype.dispose=function(){this.endDialog=null,r.prototype.dispose.call(this)},n.prototype.createElSelect_=function(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"label",n=Qn[t],s=n.id.replace("%s",this.id_),a=[e,s].join(" ").trim();return["<"+r+' id="'+s+'" class="'+("label"===r?"vjs-label":"")+'">',this.localize(n.label),"</"+r+">",'<select aria-labelledby="'+a+'">'].concat(n.options.map(function(t){var e=s+"-"+t[1].replace(/\W+/g,"");return['<option id="'+e+'" value="'+t[0]+'" ','aria-labelledby="'+a+" "+e+'">',i.localize(t[1]),"</option>"].join("")})).concat("</select>").join("")},n.prototype.createElFgColor_=function(){var t="captions-text-legend-"+this.id_;return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",t),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElBgColor_=function(){var t="captions-background-"+this.id_;return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",t),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElWinColor_=function(){var t="captions-window-"+this.id_;return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",t),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElColors_=function(){return M("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},n.prototype.createElFont_=function(){return M("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},n.prototype.createElControls_=function(){var t=this.localize("restore all settings to the default values");return M("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+t+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+t+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},n.prototype.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},n.prototype.label=function(){return this.localize("Caption Settings Dialog")},n.prototype.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},n.prototype.buildCSSClass=function(){return r.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},n.prototype.getValues=function(){var a=this;return function(i,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return S(i).reduce(function(t,e){return r(t,i[e],e)},t)}(Qn,function(t,e,i){var r,n,s=(r=a.$(e.selector),n=e.parser,Jn(r.options[r.options.selectedIndex].value,n));return void 0!==s&&(t[i]=s),t},{})},n.prototype.setValues=function(i){var r=this;k(Qn,function(t,e){!function(t,e,i){if(e)for(var r=0;r<t.options.length;r++)if(Jn(t.options[r].value,i)===e){t.selectedIndex=r;break}}(r.$(t.selector),i[e],t.parser)})},n.prototype.setDefaults=function(){var i=this;k(Qn,function(t){var e=t.hasOwnProperty("default")?t.default:0;i.$(t.selector).selectedIndex=e})},n.prototype.restoreSettings=function(){var t=void 0;try{t=JSON.parse(g.localStorage.getItem(jn))}catch(t){f.warn(t)}t&&this.setValues(t)},n.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var t=this.getValues();try{Object.keys(t).length?g.localStorage.setItem(jn,JSON.stringify(t)):g.localStorage.removeItem(jn)}catch(t){f.warn(t)}}},n.prototype.updateDisplay=function(){var t=this.player_.getChild("textTrackDisplay");t&&t.updateDisplay()},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_=null,this.off(p,"keydown",this.handleKeyDown);var t=this.player_.controlBar,e=t&&t.subsCapsButton,i=t&&t.captionsButton;e?e.focus():i&&i.focus()},n}(Ne);Xt.registerComponent("TextTrackSettings",Zn);var ts=function(s){function a(t,e){y(this,a);var i=e.ResizeObserver||g.ResizeObserver;null===e.ResizeObserver&&(i=!1);var r=Gt({createEl:!i},e),n=b(this,s.call(this,t,r));return n.ResizeObserver=e.ResizeObserver||g.ResizeObserver,n.loadListener_=null,n.resizeObserver_=null,n.debouncedHandler_=It(function(){n.resizeHandler()},100,!1,t),i?(n.resizeObserver_=new n.ResizeObserver(n.debouncedHandler_),n.resizeObserver_.observe(t.el())):(n.loadListener_=function(){n.el_.contentWindow&&_t(n.el_.contentWindow,"resize",n.debouncedHandler_),n.off("load",n.loadListener_)},n.on("load",n.loadListener_)),n}return _(a,s),a.prototype.createEl=function(){return s.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager"})},a.prototype.resizeHandler=function(){this.player_.trigger("playerresize")},a.prototype.dispose=function(){this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()),this.resizeObserver_.disconnect()),this.el_&&this.el_.contentWindow&&bt(this.el_.contentWindow,"resize",this.debouncedHandler_),this.loadListener_&&this.off("load",this.loadListener_),this.ResizeObserver=null,this.resizeObserver=null,this.debouncedHandler_=null,this.loadListener_=null},a}(Xt);Xt.registerComponent("ResizeManager",ts);var es=function(t){var e=t.el();if(e.hasAttribute("src"))return t.triggerSourceset(e.src),!0;var i=t.$$("source"),r=[],n="";if(!i.length)return!1;for(var s=0;s<i.length;s++){var a=i[s].src;a&&-1===r.indexOf(a)&&r.push(a)}return!!r.length&&(1===r.length&&(n=r[0]),t.triggerSourceset(n),!0)},is=Object.defineProperty({},"innerHTML",{get:function(){return this.cloneNode(!0).innerHTML},set:function(t){var e=p.createElement(this.nodeName.toLowerCase());e.innerHTML=t;for(var i=p.createDocumentFragment();e.childNodes.length;)i.appendChild(e.childNodes[0]);return this.innerText="",g.Element.prototype.appendChild.call(this,i),this.innerHTML}}),rs=function(t,e){for(var i={},r=0;r<t.length&&!((i=Object.getOwnPropertyDescriptor(t[r],e))&&i.set&&i.get);r++);return i.enumerable=!0,i.configurable=!0,i},ns=function(s){var a=s.el();if(!a.resetSourceWatch_){var e={},t=rs([s.el(),g.HTMLMediaElement.prototype,g.Element.prototype,is],"innerHTML"),i=function(n){return function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=n.apply(a,e);return es(s),r}};["append","appendChild","insertAdjacentHTML"].forEach(function(t){a[t]&&(e[t]=a[t],a[t]=i(e[t]))}),Object.defineProperty(a,"innerHTML",Gt(t,{set:i(t.set)})),a.resetSourceWatch_=function(){a.resetSourceWatch_=null,Object.keys(e).forEach(function(t){a[t]=e[t]}),Object.defineProperty(a,"innerHTML",t)},s.one("sourceset",a.resetSourceWatch_)}},ss=Object.defineProperty({},"src",{get:function(){return this.hasAttribute("src")?Ze(g.Element.prototype.getAttribute.call(this,"src")):""},set:function(t){return g.Element.prototype.setAttribute.call(this,"src",t),t}}),as=function(r){if(r.featuresSourceset){var n=r.el();if(!n.resetSourceset_){var i=rs([r.el(),g.HTMLMediaElement.prototype,ss],"src"),s=n.setAttribute,e=n.load;Object.defineProperty(n,"src",Gt(i,{set:function(t){var e=i.set.call(n,t);return r.triggerSourceset(n.src),e}})),n.setAttribute=function(t,e){var i=s.call(n,t,e);return/src/i.test(t)&&r.triggerSourceset(n.src),i},n.load=function(){var t=e.call(n);return es(r)||(r.triggerSourceset(""),ns(r)),t},n.currentSrc?r.triggerSourceset(n.currentSrc):es(r)||ns(r),n.resetSourceset_=function(){n.resetSourceset_=null,n.load=e,n.setAttribute=s,Object.defineProperty(n,"src",i),n.resetSourceWatch_&&n.resetSourceWatch_()}}}},os=h(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),us=function(c){function h(t,e){y(this,h);var i=b(this,c.call(this,t,e)),r=t.source,n=!1;if(r&&(i.el_.currentSrc!==r.src||t.tag&&3===t.tag.initNetworkState_)?i.setSource(r):i.handleLateInit_(i.el_),t.enableSourceset&&i.setupSourcesetHandling_(),i.el_.hasChildNodes()){for(var s=i.el_.childNodes,a=s.length,o=[];a--;){var u=s[a];"track"===u.nodeName.toLowerCase()&&(i.featuresNativeTextTracks?(i.remoteTextTrackEls().addTrackElement_(u),i.remoteTextTracks().addTrack(u.track),i.textTracks().addTrack(u.track),n||i.el_.hasAttribute("crossorigin")||!ei(u.src)||(n=!0)):o.push(u))}for(var l=0;l<o.length;l++)i.el_.removeChild(o[l])}return i.proxyNativeTracks_(),i.featuresNativeTextTracks&&n&&f.warn(m(os)),i.restoreMetadataTracksInIOSNativePlayer_(),(ge||ie||ue)&&!0===t.nativeControlsForTouch&&i.setControls(!0),i.proxyWebkitFullscreen_(),i.triggerReady(),i}return _(h,c),h.prototype.dispose=function(){this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(),h.disposeMediaElement(this.el_),this.options_=null,c.prototype.dispose.call(this)},h.prototype.setupSourcesetHandling_=function(){as(this)},h.prototype.restoreMetadataTracksInIOSNativePlayer_=function(){var r=this.textTracks(),n=void 0,t=function(){n=[];for(var t=0;t<r.length;t++){var e=r[t];"metadata"===e.kind&&n.push({track:e,storedMode:e.mode})}};t(),r.addEventListener("change",t),this.on("dispose",function(){return r.removeEventListener("change",t)});var e=function t(){for(var e=0;e<n.length;e++){var i=n[e];"disabled"===i.track.mode&&i.track.mode!==i.storedMode&&(i.track.mode=i.storedMode)}r.removeEventListener("change",t)};this.on("webkitbeginfullscreen",function(){r.removeEventListener("change",t),r.removeEventListener("change",e),r.addEventListener("change",e)}),this.on("webkitendfullscreen",function(){r.removeEventListener("change",t),r.addEventListener("change",t),r.removeEventListener("change",e)})},h.prototype.overrideNative_=function(t,e){var i=this;if(e===this["featuresNative"+t+"Tracks"]){var r=t.toLowerCase();this[r+"TracksListeners_"]&&Object.keys(this[r+"TracksListeners_"]).forEach(function(t){i.el()[r+"Tracks"].removeEventListener(t,i[r+"TracksListeners_"][t])}),this["featuresNative"+t+"Tracks"]=!e,this[r+"TracksListeners_"]=null,this.proxyNativeTracksForType_(r)}},h.prototype.overrideNativeAudioTracks=function(t){this.overrideNative_("Audio",t)},h.prototype.overrideNativeVideoTracks=function(t){this.overrideNative_("Video",t)},h.prototype.proxyNativeTracksForType_=function(t){var r=this,e=Ui[t],n=this.el()[e.getterName],s=this[e.getterName]();if(this["featuresNative"+e.capitalName+"Tracks"]&&n&&n.addEventListener){var a={change:function(t){s.trigger({type:"change",target:s,currentTarget:s,srcElement:s})},addtrack:function(t){s.addTrack(t.track)},removetrack:function(t){s.removeTrack(t.track)}},i=function(){for(var t=[],e=0;e<s.length;e++){for(var i=!1,r=0;r<n.length;r++)if(n[r]===s[e]){i=!0;break}i||t.push(s[e])}for(;t.length;)s.removeTrack(t.shift())};this[e.getterName+"Listeners_"]=a,Object.keys(a).forEach(function(e){var i=a[e];n.addEventListener(e,i),r.on("dispose",function(t){return n.removeEventListener(e,i)})}),this.on("loadstart",i),this.on("dispose",function(t){return r.off("loadstart",i)})}},h.prototype.proxyNativeTracks_=function(){var e=this;Ui.names.forEach(function(t){e.proxyNativeTracksForType_(t)})},h.prototype.createEl=function(){var t=this.options_.tag;if(!t||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(t){var e=t.cloneNode(!0);t.parentNode&&t.parentNode.insertBefore(e,t),h.disposeMediaElement(t),t=e}else{t=p.createElement("video");var i=Gt({},this.options_.tag&&q(this.options_.tag));ge&&!0===this.options_.nativeControlsForTouch||delete i.controls,V(t,C(i,{id:this.options_.techId,class:"vjs-tech"}))}t.playerId=this.options_.playerId}"undefined"!=typeof this.options_.preload&&z(t,"preload",this.options_.preload);for(var r=["loop","muted","playsinline","autoplay"],n=0;n<r.length;n++){var s=r[n],a=this.options_[s];"undefined"!=typeof a&&(a?z(t,s,s):G(t,s),t[s]=a)}return t},h.prototype.handleLateInit_=function(t){if(0!==t.networkState&&3!==t.networkState){if(0===t.readyState){var e=!1,i=function(){e=!0};this.on("loadstart",i);var r=function(){e||this.trigger("loadstart")};return this.on("loadedmetadata",r),void this.ready(function(){this.off("loadstart",i),this.off("loadedmetadata",r),e||this.trigger("loadstart")})}var n=["loadstart"];n.push("loadedmetadata"),2<=t.readyState&&n.push("loadeddata"),3<=t.readyState&&n.push("canplay"),4<=t.readyState&&n.push("canplaythrough"),this.ready(function(){n.forEach(function(t){this.trigger(t)},this)})}},h.prototype.setCurrentTime=function(t){try{this.el_.currentTime=t}catch(t){f(t,"Video is not ready. (Video.js)")}},h.prototype.duration=function(){var e=this;if(this.el_.duration===1/0&&ae&&he&&0===this.el_.currentTime){return this.on("timeupdate",function t(){0<e.el_.currentTime&&(e.el_.duration===1/0&&e.trigger("durationchange"),e.off("timeupdate",t))}),NaN}return this.el_.duration||NaN},h.prototype.width=function(){return this.el_.offsetWidth},h.prototype.height=function(){return this.el_.offsetHeight},h.prototype.proxyWebkitFullscreen_=function(){var t=this;if("webkitDisplayingFullscreen"in this.el_){var e=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},i=function(){"webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen",e),this.trigger("fullscreenchange",{isFullscreen:!0}))};this.on("webkitbeginfullscreen",i),this.on("dispose",function(){t.off("webkitbeginfullscreen",i),t.off("webkitendfullscreen",e)})}},h.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var t=g.navigator&&g.navigator.userAgent||"";if(/Android/.test(t)||!/Chrome|Mac OS X 10.5/.test(t))return!0}return!1},h.prototype.enterFullScreen=function(){var t=this.el_;t.paused&&t.networkState<=t.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){t.pause(),t.webkitEnterFullScreen()},0)):t.webkitEnterFullScreen()},h.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},h.prototype.src=function(t){if(void 0===t)return this.el_.src;this.setSrc(t)},h.prototype.reset=function(){h.resetMediaElement(this.el_)},h.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},h.prototype.setControls=function(t){this.el_.controls=!!t},h.prototype.addTextTrack=function(t,e,i){return this.featuresNativeTextTracks?this.el_.addTextTrack(t,e,i):c.prototype.addTextTrack.call(this,t,e,i)},h.prototype.createRemoteTextTrack=function(t){if(!this.featuresNativeTextTracks)return c.prototype.createRemoteTextTrack.call(this,t);var e=p.createElement("track");return t.kind&&(e.kind=t.kind),t.label&&(e.label=t.label),(t.language||t.srclang)&&(e.srclang=t.language||t.srclang),t.default&&(e.default=t.default),t.id&&(e.id=t.id),t.src&&(e.src=t.src),e},h.prototype.addRemoteTextTrack=function(t,e){var i=c.prototype.addRemoteTextTrack.call(this,t,e);return this.featuresNativeTextTracks&&this.el().appendChild(i),i},h.prototype.removeRemoteTextTrack=function(t){if(c.prototype.removeRemoteTextTrack.call(this,t),this.featuresNativeTextTracks)for(var e=this.$$("track"),i=e.length;i--;)t!==e[i]&&t!==e[i].track||this.el().removeChild(e[i])},h.prototype.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality();var t={};return"undefined"!=typeof this.el().webkitDroppedFrameCount&&"undefined"!=typeof this.el().webkitDecodedFrameCount&&(t.droppedVideoFrames=this.el().webkitDroppedFrameCount,t.totalVideoFrames=this.el().webkitDecodedFrameCount),g.performance&&"function"==typeof g.performance.now?t.creationTime=g.performance.now():g.performance&&g.performance.timing&&"number"==typeof g.performance.timing.navigationStart&&(t.creationTime=g.Date.now()-g.performance.timing.navigationStart),t},h}(br);if(x()){us.TEST_VID=p.createElement("video");var ls=p.createElement("track");ls.kind="captions",ls.srclang="en",ls.label="English",us.TEST_VID.appendChild(ls)}us.isSupported=function(){try{us.TEST_VID.volume=.5}catch(t){return!1}return!(!us.TEST_VID||!us.TEST_VID.canPlayType)},us.canPlayType=function(t){return us.TEST_VID.canPlayType(t)},us.canPlaySource=function(t,e){return us.canPlayType(t.type)},us.canControlVolume=function(){try{var t=us.TEST_VID.volume;return us.TEST_VID.volume=t/2+.1,t!==us.TEST_VID.volume}catch(t){return!1}},us.canControlPlaybackRate=function(){if(ae&&he&&de<58)return!1;try{var t=us.TEST_VID.playbackRate;return us.TEST_VID.playbackRate=t/2+.1,t!==us.TEST_VID.playbackRate}catch(t){return!1}},us.canOverrideAttributes=function(){try{var t=function(){};Object.defineProperty(p.createElement("video"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("video"),"innerHTML",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"innerHTML",{get:t,set:t})}catch(t){return!1}return!0},us.supportsNativeTextTracks=function(){return me},us.supportsNativeVideoTracks=function(){return!(!us.TEST_VID||!us.TEST_VID.videoTracks)},us.supportsNativeAudioTracks=function(){return!(!us.TEST_VID||!us.TEST_VID.audioTracks)},us.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],us.prototype.featuresVolumeControl=us.canControlVolume(),us.prototype.featuresPlaybackRate=us.canControlPlaybackRate(),us.prototype.featuresSourceset=us.canOverrideAttributes(),us.prototype.movingMediaElementInDOM=!ne,us.prototype.featuresFullscreenResize=!0,us.prototype.featuresProgressEvents=!0,us.prototype.featuresTimeupdateEvents=!0,us.prototype.featuresNativeTextTracks=us.supportsNativeTextTracks(),us.prototype.featuresNativeVideoTracks=us.supportsNativeVideoTracks(),us.prototype.featuresNativeAudioTracks=us.supportsNativeAudioTracks();var cs=us.TEST_VID&&us.TEST_VID.constructor.prototype.canPlayType,hs=/^application\/(?:x-|vnd\.apple\.)mpegurl/i;us.patchCanPlayType=function(){4<=oe&&!le&&!he&&(us.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&hs.test(t)?"maybe":cs.call(this,t)})},us.unpatchCanPlayType=function(){var t=us.TEST_VID.constructor.prototype.canPlayType;return us.TEST_VID.constructor.prototype.canPlayType=cs,t},us.patchCanPlayType(),us.disposeMediaElement=function(t){if(t){for(t.parentNode&&t.parentNode.removeChild(t);t.hasChildNodes();)t.removeChild(t.firstChild);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},us.resetMediaElement=function(t){if(t){for(var e=t.querySelectorAll("source"),i=e.length;i--;)t.removeChild(e[i]);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]||this.el_.hasAttribute(t)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(e){us.prototype["set"+zt(e)]=function(t){(this.el_[e]=t)?this.el_.setAttribute(e,e):this.el_.removeAttribute(e)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(e){us.prototype["set"+zt(e)]=function(t){this.el_[e]=t}}),["pause","load","play"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]()}}),br.withSourceHandlers(us),us.nativeSourceHandler={},us.nativeSourceHandler.canPlayType=function(t){try{return us.TEST_VID.canPlayType(t)}catch(t){return""}},us.nativeSourceHandler.canHandleSource=function(t,e){if(t.type)return us.nativeSourceHandler.canPlayType(t.type);if(t.src){var i=ti(t.src);return us.nativeSourceHandler.canPlayType("video/"+i)}return""},us.nativeSourceHandler.handleSource=function(t,e,i){e.setSrc(t.src)},us.nativeSourceHandler.dispose=function(){},us.registerSourceHandler(us.nativeSourceHandler),br.registerTech("Html5",us);var ds=h(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),ps=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],fs={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},ms=function(c){function h(t,e,i){if(y(this,h),t.id=t.id||e.id||"vjs_video_"+ut(),(e=C(h.getTagSettings(t),e)).initChildren=!1,e.createEl=!1,e.evented=!1,e.reportTouchActivity=!1,!e.language)if("function"==typeof t.closest){var r=t.closest("[lang]");r&&r.getAttribute&&(e.language=r.getAttribute("lang"))}else for(var n=t;n&&1===n.nodeType;){if(q(n).hasOwnProperty("lang")){e.language=n.getAttribute("lang");break}n=n.parentNode}var s=b(this,c.call(this,null,e,i));if(s.isPosterFromTech_=!1,s.queuedCallbacks_=[],s.isReady_=!1,s.hasStarted_=!1,s.userActive_=!1,!s.options_||!s.options_.techOrder||!s.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");if(s.tag=t,s.tagAttributes=t&&q(t),s.language(s.options_.language),e.languages){var a={};Object.getOwnPropertyNames(e.languages).forEach(function(t){a[t.toLowerCase()]=e.languages[t]}),s.languages_=a}else s.languages_=h.prototype.options_.languages;s.cache_={},s.poster_=e.poster||"",s.controls_=!!e.controls,s.cache_.lastVolume=1,t.controls=!1,t.removeAttribute("controls"),s.scrubbing_=!1,s.el_=s.createEl(),s.cache_.lastPlaybackRate=s.defaultPlaybackRate(),Vt(s,{eventBusKey:"el_"});var o=Gt(s.options_);if(e.plugins){var u=e.plugins;Object.keys(u).forEach(function(t){if("function"!=typeof this[t])throw new Error('plugin "'+t+'" does not exist');this[t](u[t])},s)}s.options_.playerOptions=o,s.middleware_=[],s.initChildren(),s.isAudio("audio"===t.nodeName.toLowerCase()),s.controls()?s.addClass("vjs-controls-enabled"):s.addClass("vjs-controls-disabled"),s.el_.setAttribute("role","region"),s.isAudio()?s.el_.setAttribute("aria-label",s.localize("Audio Player")):s.el_.setAttribute("aria-label",s.localize("Video Player")),s.isAudio()&&s.addClass("vjs-audio"),s.flexNotSupported_()&&s.addClass("vjs-no-flex"),ne||s.addClass("vjs-workinghover"),h.players[s.id_]=s;var l=d.split(".")[0];return s.addClass("vjs-v"+l),s.userActive(!0),s.reportUserActivity(),s.one("play",s.listenForUserActivity_),s.on("fullscreenchange",s.handleFullscreenChange_),s.on("stageclick",s.handleStageClick_),s.changingSrc_=!1,s.playWaitingForReady_=!1,s.playOnLoadstart_=null,s}return _(h,c),h.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_),this.styleEl_=null),h.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&(this.tech_.dispose(),this.isPosterFromTech_=!1,this.poster_=""),this.playerElIngest_&&(this.playerElIngest_=null),this.tag&&(this.tag=null),Sr[this.id()]=null,c.prototype.dispose.call(this)},h.prototype.createEl=function(){var e=this.tag,i=void 0,t=this.playerElIngest_=e.parentNode&&e.parentNode.hasAttribute&&e.parentNode.hasAttribute("data-vjs-player"),r="video-js"===this.tag.tagName.toLowerCase();t?i=this.el_=e.parentNode:r||(i=this.el_=c.prototype.createEl.call(this,"div"));var n=q(e);if(r){for(i=this.el_=e,e=this.tag=p.createElement("video");i.children.length;)e.appendChild(i.firstChild);B(i,"video-js")||j(i,"video-js"),i.appendChild(e),t=this.playerElIngest_=i,Object.keys(i).forEach(function(t){e[t]=i[t]})}if(e.setAttribute("tabindex","-1"),e.removeAttribute("width"),e.removeAttribute("height"),Object.getOwnPropertyNames(n).forEach(function(t){r&&"class"===t||i.setAttribute(t,n[t]),r&&e.setAttribute(t,n[t])}),e.playerId=e.id,e.id+="_html5_api",e.className="vjs-tech",e.player=i.player=this,this.addClass("vjs-paused"),!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=Lt("vjs-styles-dimensions");var s=nt(".vjs-styles-defaults"),a=nt("head");a.insertBefore(this.styleEl_,s?s.nextSibling:a.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var o=e.getElementsByTagName("a"),u=0;u<o.length;u++){var l=o.item(u);j(l,"vjs-hidden"),l.setAttribute("hidden","hidden")}return e.initNetworkState_=e.networkState,e.parentNode&&!t&&e.parentNode.insertBefore(i,e),N(e,i),this.children_.unshift(e),this.el_.setAttribute("lang",this.language_),this.el_=i},h.prototype.width=function(t){return this.dimension("width",t)},h.prototype.height=function(t){return this.dimension("height",t)},h.prototype.dimension=function(t,e){var i=t+"_";if(void 0===e)return this[i]||0;if(""===e)return this[i]=void 0,void this.updateStyleEl_();var r=parseFloat(e);isNaN(r)?f.error('Improper value "'+e+'" supplied for for '+t):(this[i]=r,this.updateStyleEl_())},h.prototype.fluid=function(t){if(void 0===t)return!!this.fluid_;this.fluid_=!!t,t?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),this.updateStyleEl_()},h.prototype.aspectRatio=function(t){if(void 0===t)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(t))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=t,this.fluid(!0),this.updateStyleEl_()},h.prototype.updateStyleEl_=function(){if(!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){var t=void 0,e=void 0,i=void 0,r=(void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:0<this.videoWidth()?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"),n=r[1]/r[0];t=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/n:this.videoWidth()||300,e=void 0!==this.height_?this.height_:t*n,i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(i),Pt(this.styleEl_,"\n      ."+i+" {\n        width: "+t+"px;\n        height: "+e+"px;\n      }\n\n      ."+i+".vjs-fluid {\n        padding-top: "+100*n+"%;\n      }\n    ")}else{var s="number"==typeof this.width_?this.width_:this.options_.width,a="number"==typeof this.height_?this.height_:this.options_.height,o=this.tech_&&this.tech_.el();o&&(0<=s&&(o.width=s),0<=a&&(o.height=a))}},h.prototype.loadTech_=function(t,e){var i=this;this.tech_&&this.unloadTech_();var r=zt(t),n=t.charAt(0).toLowerCase()+t.slice(1);"Html5"!==r&&this.tag&&(br.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=r,this.isReady_=!1;var s={source:e,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+r+"_api",autoplay:this.options_.autoplay,playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset};Bi.names.forEach(function(t){var e=Bi[t];s[e.getterName]=i[e.privateName]}),C(s,this.options_[r]),C(s,this.options_[n]),C(s,this.options_[t.toLowerCase()]),this.tag&&(s.tag=this.tag),e&&e.src===this.cache_.src&&0<this.cache_.currentTime&&(s.startTime=this.cache_.currentTime);var a=br.getTech(t);if(!a)throw new Error("No Tech named '"+r+"' exists! '"+r+"' should be registered using videojs.registerTech()'");this.tech_=new a(s),this.tech_.ready(Ot(this,this.handleTechReady_),!0),Me(this.textTracksJson_||[],this.tech_),ps.forEach(function(t){i.on(i.tech_,t,i["handleTech"+zt(t)+"_"])}),Object.keys(fs).forEach(function(e){i.on(i.tech_,e,function(t){0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push({callback:i["handleTech"+fs[e]+"_"].bind(i),event:t}):i["handleTech"+fs[e]+"_"](t)})}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"sourceset",this.handleTechSourceset_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.on(this.tech_,"ratechange",this.handleTechRateChange_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===r&&this.tag||N(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},h.prototype.unloadTech_=function(){var i=this;Bi.names.forEach(function(t){var e=Bi[t];i[e.privateName]=i[e.getterName]()}),this.textTracksJson_=Re(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1,this.isPosterFromTech_&&(this.poster_="",this.trigger("posterchange")),this.isPosterFromTech_=!1},h.prototype.tech=function(t){return void 0===t&&f.warn(m(ds)),this.tech_},h.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},h.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_)},h.prototype.handleTechReady_=function(){if(this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_(),(this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused())try{delete this.tag.poster}catch(t){f("deleting tag.poster throws in some browsers",t)}},h.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay"))},h.prototype.updateSourceCaches_=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=t,i="";"string"!=typeof e&&(e=t.src,i=t.type),this.cache_.source=this.cache_.source||{},this.cache_.sources=this.cache_.sources||[],e&&!i&&(i=function(t,e){if(!e)return"";if(t.cache_.source.src===e&&t.cache_.source.type)return t.cache_.source.type;var i=t.cache_.sources.filter(function(t){return t.src===e});if(i.length)return i[0].type;for(var r=t.$$("source"),n=0;n<r.length;n++){var s=r[n];if(s.type&&s.src&&s.src===e)return s.type}return xr(e)}(this,e)),this.cache_.source={src:e,type:i};for(var r=this.cache_.sources.filter(function(t){return t.src&&t.src===e}),n=[],s=this.$$("source"),a=[],o=0;o<s.length;o++){var u=q(s[o]);n.push(u),u.src&&u.src===e&&a.push(u.src)}a.length&&!r.length?this.cache_.sources=n:r.length||(this.cache_.sources=[this.cache_.source]),this.cache_.src=e},h.prototype.handleTechSourceset_=function(t){var i=this;if(!this.changingSrc_&&(this.updateSourceCaches_(t.src),!t.src)){this.tech_.one(["sourceset","loadstart"],function t(e){"sourceset"!==e.type&&i.updateSourceCaches_(i.techGet_("currentSrc")),i.tech_.off(["sourceset","loadstart"],t)})}this.trigger({src:t.src,type:"sourceset"})},h.prototype.hasStarted=function(t){if(void 0===t)return this.hasStarted_;t!==this.hasStarted_&&(this.hasStarted_=t,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},h.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},h.prototype.handleTechRateChange_=function(){0<this.tech_.playbackRate()&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach(function(t){return t.callback(t.event)}),this.queuedCallbacks_=[]),this.cache_.lastPlaybackRate=this.tech_.playbackRate(),this.trigger("ratechange")},h.prototype.handleTechWaiting_=function(){var t=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return t.removeClass("vjs-waiting")})},h.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},h.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},h.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},h.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},h.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},h.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&(f.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},h.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},h.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},h.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},h.prototype.handleTechClick_=function(t){rt(t)&&this.controls_&&(this.paused()?this.play():this.pause())},h.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},h.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},h.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},h.prototype.handleTechTouchEnd_=function(t){t.preventDefault()},h.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},h.prototype.handleStageClick_=function(){this.reportUserActivity()},h.prototype.handleTechFullscreenChange_=function(t,e){e&&this.isFullscreen(e.isFullscreen),this.trigger("fullscreenchange")},h.prototype.handleTechError_=function(){var t=this.tech_.error();this.error(t)},h.prototype.handleTechTextData_=function(){var t=null;1<arguments.length&&(t=arguments[1]),this.trigger("textdata",t)},h.prototype.getCache=function(){return this.cache_},h.prototype.techCall_=function(n,s){this.ready(function(){if(n in Ar)return t=this.middleware_,e=this.tech_,r=s,e[i=n](t.reduce(Pr(i),r));if(n in Lr)return Er(this.middleware_,this.tech_,n,s);var t,e,i,r;try{this.tech_&&this.tech_[n](s)}catch(t){throw f(t),t}},!0)},h.prototype.techGet_=function(e){if(this.tech_&&this.tech_.isReady_){if(e in wr)return t=this.middleware_,i=this.tech_,r=e,t.reduceRight(Pr(r),i[r]());if(e in Lr)return Er(this.middleware_,this.tech_,e);var t,i,r;try{return this.tech_[e]()}catch(t){if(void 0===this.tech_[e])throw f("Video.js: "+e+" method not defined for "+this.techName_+" playback technology.",t),t;if("TypeError"===t.name)throw f("Video.js: "+e+" unavailable on "+this.techName_+" playback technology element.",t),this.tech_.isReady_=!1,t;throw f(t),t}}},h.prototype.play=function(){var t=this;if(this.playOnLoadstart_&&this.off("loadstart",this.playOnLoadstart_),this.isReady_){if(!this.changingSrc_&&(this.src()||this.currentSrc()))return this.techGet_("play");this.playOnLoadstart_=function(){t.playOnLoadstart_=null,Ie(t.play())},this.one("loadstart",this.playOnLoadstart_)}else{if(this.playWaitingForReady_)return;this.playWaitingForReady_=!0,this.ready(function(){t.playWaitingForReady_=!1,Ie(t.play())})}},h.prototype.pause=function(){this.techCall_("pause")},h.prototype.paused=function(){return!1!==this.techGet_("paused")},h.prototype.played=function(){return this.techGet_("played")||be(0,0)},h.prototype.scrubbing=function(t){if("undefined"==typeof t)return this.scrubbing_;this.scrubbing_=!!t,t?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},h.prototype.currentTime=function(t){return"undefined"!=typeof t?(t<0&&(t=0),void this.techCall_("setCurrentTime",t)):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},h.prototype.duration=function(t){if(void 0===t)return void 0!==this.cache_.duration?this.cache_.duration:NaN;(t=parseFloat(t))<0&&(t=1/0),t!==this.cache_.duration&&((this.cache_.duration=t)===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange"))},h.prototype.remainingTime=function(){return this.duration()-this.currentTime()},h.prototype.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},h.prototype.buffered=function(){var t=this.techGet_("buffered");return t&&t.length||(t=be(0,0)),t},h.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration())},h.prototype.bufferedEnd=function(){var t=this.buffered(),e=this.duration(),i=t.end(t.length-1);return e<i&&(i=e),i},h.prototype.volume=function(t){var e=void 0;return void 0!==t?(e=Math.max(0,Math.min(1,parseFloat(t))),this.cache_.volume=e,this.techCall_("setVolume",e),void(0<e&&this.lastVolume_(e))):(e=parseFloat(this.techGet_("volume")),isNaN(e)?1:e)},h.prototype.muted=function(t){if(void 0===t)return this.techGet_("muted")||!1;this.techCall_("setMuted",t)},h.prototype.defaultMuted=function(t){return void 0!==t?this.techCall_("setDefaultMuted",t):this.techGet_("defaultMuted")||!1},h.prototype.lastVolume_=function(t){if(void 0===t||0===t)return this.cache_.lastVolume;this.cache_.lastVolume=t},h.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},h.prototype.isFullscreen=function(t){if(void 0===t)return!!this.isFullscreen_;this.isFullscreen_=!!t},h.prototype.requestFullscreen=function(){var i=Se;this.isFullscreen(!0),i.requestFullscreen?(_t(p,i.fullscreenchange,Ot(this,function t(e){this.isFullscreen(p[i.fullscreenElement]),!1===this.isFullscreen()&&bt(p,i.fullscreenchange,t),this.trigger("fullscreenchange")})),this.el_[i.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange"))},h.prototype.exitFullscreen=function(){var t=Se;this.isFullscreen(!1),t.requestFullscreen?p[t.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange"))},h.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=p.documentElement.style.overflow,_t(p,"keydown",Ot(this,this.fullWindowOnEscKey)),p.documentElement.style.overflow="hidden",j(p.body,"vjs-full-window"),this.trigger("enterFullWindow")},h.prototype.fullWindowOnEscKey=function(t){27===t.keyCode&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())},h.prototype.exitFullWindow=function(){this.isFullWindow=!1,bt(p,"keydown",this.fullWindowOnEscKey),p.documentElement.style.overflow=this.docOrigOverflow,F(p.body,"vjs-full-window"),this.trigger("exitFullWindow")},h.prototype.canPlayType=function(t){for(var e=void 0,i=0,r=this.options_.techOrder;i<r.length;i++){var n=r[i],s=br.getTech(n);if(s||(s=Xt.getComponent(n)),s){if(s.isSupported()&&(e=s.canPlayType(t)))return e}else f.error('The "'+n+'" tech is undefined. Skipped browser support check for that tech.')}return""},h.prototype.selectSource=function(t){var i,r=this,e=this.options_.techOrder.map(function(t){return[t,br.getTech(t)]}).filter(function(t){var e=t[0],i=t[1];return i?i.isSupported():(f.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),n=function(t,i,r){var n=void 0;return t.some(function(e){return i.some(function(t){if(n=r(e,t))return!0})}),n},s=function(t,e){var i=t[0];if(t[1].canPlaySource(e,r.options_[i.toLowerCase()]))return{source:e,tech:i}};return(this.options_.sourceOrder?n(t,e,(i=s,function(t,e){return i(e,t)})):n(e,t,s))||!1},h.prototype.src=function(t){var n=this;if("undefined"==typeof t)return this.cache_.src||"";var s=function e(t){if(Array.isArray(t)){var i=[];t.forEach(function(t){t=e(t),Array.isArray(t)?i=i.concat(t):E(t)&&i.push(t)}),t=i}else t="string"==typeof t&&t.trim()?[Ir({src:t})]:E(t)&&"string"==typeof t.src&&t.src&&t.src.trim()?[Ir(t)]:[];return t}(t);s.length?(this.changingSrc_=!0,this.cache_.sources=s,this.updateSourceCaches_(s[0]),Cr(this,s[0],function(t,e){var i,r;if(n.middleware_=e,n.cache_.sources=s,n.updateSourceCaches_(t),n.src_(t))return 1<s.length?n.src(s.slice(1)):(n.changingSrc_=!1,n.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),void n.triggerReady());i=e,r=n.tech_,i.forEach(function(t){return t.setTech&&t.setTech(r)})})):this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0)},h.prototype.src_=function(t){var e,i,r=this,n=this.selectSource([t]);return!n||(e=n.tech,i=this.techName_,zt(e)!==zt(i)?(this.changingSrc_=!0,this.loadTech_(n.tech,n.source),this.tech_.ready(function(){r.changingSrc_=!1})):this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",t):this.techCall_("src",t.src),this.changingSrc_=!1},!0),!1)},h.prototype.load=function(){this.techCall_("load")},h.prototype.reset=function(){this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset")},h.prototype.currentSources=function(){var t=this.currentSource(),e=[];return 0!==Object.keys(t).length&&e.push(t),this.cache_.sources||e},h.prototype.currentSource=function(){return this.cache_.source||{}},h.prototype.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},h.prototype.currentType=function(){return this.currentSource()&&this.currentSource().type||""},h.prototype.preload=function(t){return void 0!==t?(this.techCall_("setPreload",t),void(this.options_.preload=t)):this.techGet_("preload")},h.prototype.autoplay=function(t){return void 0!==t?(this.techCall_("setAutoplay",t),void(this.options_.autoplay=t)):this.techGet_("autoplay",t)},h.prototype.playsinline=function(t){return void 0!==t?(this.techCall_("setPlaysinline",t),this.options_.playsinline=t,this):this.techGet_("playsinline")},h.prototype.loop=function(t){return void 0!==t?(this.techCall_("setLoop",t),void(this.options_.loop=t)):this.techGet_("loop")},h.prototype.poster=function(t){if(void 0===t)return this.poster_;t||(t=""),t!==this.poster_&&(this.poster_=t,this.techCall_("setPoster",t),this.isPosterFromTech_=!1,this.trigger("posterchange"))},h.prototype.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var t=this.tech_.poster()||"";t!==this.poster_&&(this.poster_=t,this.isPosterFromTech_=!0,this.trigger("posterchange"))}},h.prototype.controls=function(t){if(void 0===t)return!!this.controls_;t=!!t,this.controls_!==t&&(this.controls_=t,this.usingNativeControls()&&this.techCall_("setControls",t),this.controls_?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_()))},h.prototype.usingNativeControls=function(t){if(void 0===t)return!!this.usingNativeControls_;t=!!t,this.usingNativeControls_!==t&&(this.usingNativeControls_=t,this.usingNativeControls_?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols")))},h.prototype.error=function(t){return void 0===t?this.error_||null:null===t?(this.error_=t,this.removeClass("vjs-error"),void(this.errorDisplay&&this.errorDisplay.close())):(this.error_=new Le(t),this.addClass("vjs-error"),f.error("(CODE:"+this.error_.code+" "+Le.errorTypes[this.error_.code]+")",this.error_.message,this.error_),void this.trigger("error"))},h.prototype.reportUserActivity=function(t){this.userActivity_=!0},h.prototype.userActive=function(t){if(void 0===t)return this.userActive_;if((t=!!t)!==this.userActive_){if(this.userActive_=t,this.userActive_)return this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),void this.trigger("useractive");this.tech_&&this.tech_.one("mousemove",function(t){t.stopPropagation(),t.preventDefault()}),this.userActivity_=!1,this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")}},h.prototype.listenForUserActivity_=function(){var e=void 0,i=void 0,r=void 0,n=Ot(this,this.reportUserActivity);this.on("mousedown",function(){n(),this.clearInterval(e),e=this.setInterval(n,250)}),this.on("mousemove",function(t){t.screenX===i&&t.screenY===r||(i=t.screenX,r=t.screenY,n())}),this.on("mouseup",function(t){n(),this.clearInterval(e)}),this.on("keydown",n),this.on("keyup",n);var s=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(s);var t=this.options_.inactivityTimeout;t<=0||(s=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},t))}},250)},h.prototype.playbackRate=function(t){if(void 0===t)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1;this.techCall_("setPlaybackRate",t)},h.prototype.defaultPlaybackRate=function(t){return void 0!==t?this.techCall_("setDefaultPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},h.prototype.isAudio=function(t){if(void 0===t)return!!this.isAudio_;this.isAudio_=!!t},h.prototype.addTextTrack=function(t,e,i){if(this.tech_)return this.tech_.addTextTrack(t,e,i)},h.prototype.addRemoteTextTrack=function(t,e){if(this.tech_)return this.tech_.addRemoteTextTrack(t,e)},h.prototype.removeRemoteTextTrack=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).track,e=void 0===t?arguments[0]:t;if(this.tech_)return this.tech_.removeRemoteTextTrack(e)},h.prototype.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},h.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},h.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},h.prototype.language=function(t){if(void 0===t)return this.language_;this.language_=String(t).toLowerCase()},h.prototype.languages=function(){return Gt(h.prototype.options_.languages,this.languages_)},h.prototype.toJSON=function(){var t=Gt(this.options_),e=t.tracks;t.tracks=[];for(var i=0;i<e.length;i++){var r=e[i];(r=Gt(r)).player=void 0,t.tracks[i]=r}return t},h.prototype.createModal=function(t,e){var i=this;(e=e||{}).content=t||"";var r=new Ne(this,e);return this.addChild(r),r.on("dispose",function(){i.removeChild(r)}),r.open(),r},h.getTagSettings=function(t){var e={sources:[],tracks:[]},i=q(t),r=i["data-setup"];if(B(t,"vjs-fluid")&&(i.fluid=!0),null!==r){var n=Oe(r||"{}"),s=n[0],a=n[1];s&&f.error(s),C(i,a)}if(C(e,i),t.hasChildNodes())for(var o=t.childNodes,u=0,l=o.length;u<l;u++){var c=o[u],h=c.nodeName.toLowerCase();"source"===h?e.sources.push(q(c)):"track"===h&&e.tracks.push(q(c))}return e},h.prototype.flexNotSupported_=function(){var t=p.createElement("i");return!("flexBasis"in t.style||"webkitFlexBasis"in t.style||"mozFlexBasis"in t.style||"msFlexBasis"in t.style||"msFlexOrder"in t.style)},h}(Xt);Bi.names.forEach(function(t){var e=Bi[t];ms.prototype[e.getterName]=function(){return this.tech_?this.tech_[e.getterName]():(this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName])}}),ms.players={};var gs=g.navigator;ms.prototype.options_={techOrder:br.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:gs&&(gs.languages&&gs.languages[0]||gs.userLanguage||gs.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(t){ms.prototype[t]=function(){return this.techGet_(t)}}),ps.forEach(function(t){ms.prototype["handleTech"+zt(t)+"_"]=function(){return this.trigger(t)}}),Xt.registerComponent("Player",ms);var ys="plugin",vs="activePlugins_",_s={},bs=function(t){return _s.hasOwnProperty(t)},Ts=function(t){return bs(t)?_s[t]:void 0},Ss=function(t,e){t[vs]=t[vs]||{},t[vs][e]=!0},ks=function(t,e,i){var r=(i?"before":"")+"pluginsetup";t.trigger(r,e),t.trigger(r+":"+e.name,e)},Cs=function(n,s){return s.prototype.name=n,function(){ks(this,{name:n,plugin:s,instance:null},!0);for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=new(Function.prototype.bind.apply(s,[null].concat([this].concat(e))));return this[n]=function(){return r},ks(this,r.getEventHash()),r}},Es=function(){function s(t){if(y(this,s),this.constructor===s)throw new Error("Plugin must be sub-classed; not directly instantiated.");this.player=t,Vt(this),delete this.trigger,Wt(this,this.constructor.defaultState),Ss(t,this.name),this.dispose=Ot(this,this.dispose),t.on("dispose",this.dispose)}return s.prototype.version=function(){return this.constructor.VERSION},s.prototype.getEventHash=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t.name=this.name,t.plugin=this.constructor,t.instance=this,t},s.prototype.trigger=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Tt(this.eventBusEl_,t,this.getEventHash(e))},s.prototype.handleStateChanged=function(t){},s.prototype.dispose=function(){var t=this.name,e=this.player;this.trigger("dispose"),this.off(),e.off("dispose",this.dispose),e[vs][t]=!1,this.player=this.state=null,e[t]=Cs(t,_s[t])},s.isBasic=function(t){var e="string"==typeof t?Ts(t):t;return"function"==typeof e&&!s.prototype.isPrototypeOf(e.prototype)},s.registerPlugin=function(t,e){if("string"!=typeof t)throw new Error('Illegal plugin name, "'+t+'", must be a string, was '+("undefined"==typeof t?"undefined":v(t))+".");if(bs(t))f.warn('A plugin named "'+t+'" already exists. You may want to avoid re-registering plugins!');else if(ms.prototype.hasOwnProperty(t))throw new Error('Illegal plugin name, "'+t+'", cannot share a name with an existing player method!');if("function"!=typeof e)throw new Error('Illegal plugin for "'+t+'", must be a function, was '+("undefined"==typeof e?"undefined":v(e))+".");var i,r,n;return _s[t]=e,t!==ys&&(s.isBasic(e)?ms.prototype[t]=(i=t,r=e,n=function(){ks(this,{name:i,plugin:r,instance:null},!0);var t=r.apply(this,arguments);return Ss(this,i),ks(this,{name:i,plugin:r,instance:t}),t},Object.keys(r).forEach(function(t){n[t]=r[t]}),n):ms.prototype[t]=Cs(t,e)),e},s.deregisterPlugin=function(t){if(t===ys)throw new Error("Cannot de-register base plugin.");bs(t)&&(delete _s[t],delete ms.prototype[t])},s.getPlugins=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Object.keys(_s),i=void 0;return t.forEach(function(t){var e=Ts(t);e&&((i=i||{})[t]=e)}),i},s.getPluginVersion=function(t){var e=Ts(t);return e&&e.VERSION||""},s}();Es.getPlugin=Ts,Es.BASE_PLUGIN_NAME=ys,Es.registerPlugin(ys,Es),ms.prototype.usingPlugin=function(t){return!!this[vs]&&!0===this[vs][t]},ms.prototype.hasPlugin=function(t){return!!bs(t)};var ws=function(t){return 0===t.indexOf("#")?t.slice(1):t};function As(t,i,e){var r=As.getPlayer(t);if(r)return i&&f.warn('Player "'+t+'" is already initialised. Options will not be applied.'),e&&r.ready(e),r;var n="string"==typeof t?nt("#"+ws(t)):t;if(!I(n))throw new TypeError("The element or ID supplied is not valid. (videojs)");p.body.contains(n)||f.warn("The element supplied is not included in the DOM"),i=i||{},As.hooks("beforesetup").forEach(function(t){var e=t(n,Gt(i));E(e)&&!Array.isArray(e)?i=Gt(i,e):f.error("please return an object in beforesetup hooks")});var s=Xt.getComponent("Player");return r=new s(n,i,e),As.hooks("setup").forEach(function(t){return t(r)}),r}if(As.hooks_={},As.hooks=function(t,e){return As.hooks_[t]=As.hooks_[t]||[],e&&(As.hooks_[t]=As.hooks_[t].concat(e)),As.hooks_[t]},As.hook=function(t,e){As.hooks(t,e)},As.hookOnce=function(i,t){As.hooks(i,[].concat(t).map(function(e){return function t(){return As.removeHook(i,t),e.apply(void 0,arguments)}}))},As.removeHook=function(t,e){var i=As.hooks(t).indexOf(e);return!(i<=-1)&&(As.hooks_[t]=As.hooks_[t].slice(),As.hooks_[t].splice(i,1),!0)},!0!==g.VIDEOJS_NO_DYNAMIC_STYLE&&x()){var Ls=nt(".vjs-styles-defaults");if(!Ls){Ls=Lt("vjs-styles-defaults");var Ps=nt("head");Ps&&Ps.insertBefore(Ls,Ps.firstChild),Pt(Ls,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}At(1,As),As.VERSION=d,As.options=ms.prototype.options_,As.getPlayers=function(){return ms.players},As.getPlayer=function(t){var e=ms.players,i=void 0;if("string"==typeof t){var r=ws(t),n=e[r];if(n)return n;i=nt("#"+r)}else i=t;if(I(i)){var s=i,a=s.player,o=s.playerId;if(a||e[o])return a||e[o]}},As.getAllPlayers=function(){return Object.keys(ms.players).map(function(t){return ms.players[t]}).filter(Boolean)},As.players=ms.players,As.getComponent=Xt.getComponent,As.registerComponent=function(t,e){br.isTech(e)&&f.warn("The "+t+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),Xt.registerComponent.call(Xt,t,e)},As.getTech=br.getTech,As.registerTech=br.registerTech,As.use=function(t,e){Tr[t]=Tr[t]||[],Tr[t].push(e)},Object.defineProperty(As,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(As.middleware,"TERMINATOR",{value:kr,writeable:!1,enumerable:!0}),As.browser=ye,As.TOUCH_ENABLED=ge,As.extend=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=function(){t.apply(this,arguments)},r={};for(var n in"object"===("undefined"==typeof e?"undefined":v(e))?(e.constructor!==Object.prototype.constructor&&(i=e.constructor),r=e):"function"==typeof e&&(i=e),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.super_=e)}(i,t),r)r.hasOwnProperty(n)&&(i.prototype[n]=r[n]);return i},As.mergeOptions=Gt,As.bind=Ot,As.registerPlugin=Es.registerPlugin,As.plugin=function(t,e){return f.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),Es.registerPlugin(t,e)},As.getPlugins=Es.getPlugins,As.getPlugin=Es.getPlugin,As.getPluginVersion=Es.getPluginVersion,As.addLanguage=function(t,e){var i;return t=(""+t).toLowerCase(),As.options.languages=Gt(As.options.languages,((i={})[t]=e,i)),As.options.languages[t]},As.log=f,As.createTimeRange=As.createTimeRanges=be,As.formatTime=Yr,As.setFormatTime=function(t){Xr=t},As.resetFormatTime=function(){Xr=Gr},As.parseUrl=Je,As.isCrossOrigin=ei,As.EventTarget=Dt,As.on=_t,As.one=St,As.off=bt,As.trigger=Tt,As.xhr=Ci,As.TextTrack=Oi,As.AudioTrack=xi,As.VideoTrack=Ii,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(t){As[t]=function(){return f.warn("videojs."+t+"() is deprecated; use videojs.dom."+t+"() instead"),at[t].apply(null,arguments)}}),As.computedStyle=A,As.dom=at,As.url=ii;var Os=e(function(t,e){var i,c,r,n,h;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,c=/^([^\/;?#]*)(.*)$/,r=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,h={buildAbsoluteURL:function(t,e,i){if(i=i||{},t=t.trim(),!(e=e.trim())){if(!i.alwaysNormalize)return t;var r=h.parseURL(t);if(!r)throw new Error("Error trying to parse base URL.");return r.path=h.normalizePath(r.path),h.buildURLFromParts(r)}var n=h.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return i.alwaysNormalize?(n.path=h.normalizePath(n.path),h.buildURLFromParts(n)):e;var s=h.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var a=c.exec(s.path);s.netLoc=a[1],s.path=a[2]}s.netLoc&&!s.path&&(s.path="/");var o={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(o.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var u=s.path,l=u.substring(0,u.lastIndexOf("/")+1)+n.path;o.path=h.normalizePath(l)}else o.path=s.path,n.params||(o.params=s.params,n.query||(o.query=s.query));return null===o.path&&(o.path=i.alwaysNormalize?h.normalizePath(n.path):n.path),h.buildURLFromParts(o)},parseURL:function(t){var e=i.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(r,"");t.length!==(t=t.replace(n,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}},t.exports=h}),xs=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Is=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Ds=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Rs=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},Ms=function(){function t(){xs(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t],i=void 0,r=void 0,n=void 0;if(e)if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else for(n=Array.prototype.slice.call(arguments,1),r=e.length,i=0;i<r;++i)e[i].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Us=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));return t.buffer="",t}return Ds(i,e),i.prototype.push=function(t){var e=void 0;for(this.buffer+=t,e=this.buffer.indexOf("\n");-1<e;e=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)},i}(Ms),Ns=function(t){for(var e=t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),i={},r=e.length,n=void 0;r--;)""!==e[r]&&((n=/([^=]*)=(.*)/.exec(e[r]).slice(1))[0]=n[0].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^['"](.*)['"]$/g,"$1"),i[n[0]]=n[1]);return i},Bs=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));return t.customParsers=[],t}return Ds(i,e),i.prototype.push=function(t){var e=void 0,i=void 0;if(0!==(t=t.replace(/^[\u0000\s]+|[\u0000\s]+$/g,"")).length)if("#"===t[0]){for(var r=0;r<this.customParsers.length;r++)if(this.customParsers[r].call(this,t))return;if(0===t.indexOf("#EXT"))if(t=t.replace("\r",""),e=/^#EXTM3U/.exec(t))this.trigger("data",{type:"tag",tagType:"m3u"});else{if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))return i={type:"tag",tagType:"inf"},e[1]&&(i.duration=parseFloat(e[1])),e[2]&&(i.title=e[2]),void this.trigger("data",i);if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"targetduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"totalduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"version"},e[1]&&(i.version=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"media-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))return i={type:"tag",tagType:"playlist-type"},e[1]&&(i.playlistType=e[1]),void this.trigger("data",i);if(e=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"byterange"},e[1]&&(i.length=parseInt(e[1],10)),e[2]&&(i.offset=parseInt(e[2],10)),void this.trigger("data",i);if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))return i={type:"tag",tagType:"allow-cache"},e[1]&&(i.allowed=!/NO/.test(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-MAP:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"map"},e[1]){var n=Ns(e[1]);if(n.URI&&(i.uri=n.URI),n.BYTERANGE){var s=n.BYTERANGE.split("@"),a=s[0],o=s[1];i.byterange={},a&&(i.byterange.length=parseInt(a,10)),o&&(i.byterange.offset=parseInt(o,10))}}this.trigger("data",i)}else if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"stream-inf"},e[1]){if(i.attributes=Ns(e[1]),i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION.split("x"),l={};u[0]&&(l.width=parseInt(u[0],10)),u[1]&&(l.height=parseInt(u[1],10)),i.attributes.RESOLUTION=l}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}this.trigger("data",i)}else{if(e=/^#EXT-X-MEDIA:?(.*)$/.exec(t))return i={type:"tag",tagType:"media"},e[1]&&(i.attributes=Ns(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-ENDLIST/.exec(t))this.trigger("data",{type:"tag",tagType:"endlist"});else if(e=/^#EXT-X-DISCONTINUITY/.exec(t))this.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t))return i={type:"tag",tagType:"program-date-time"},e[1]&&(i.dateTimeString=e[1],i.dateTimeObject=new Date(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-KEY:?(.*)$/.exec(t))return i={type:"tag",tagType:"key"},e[1]&&(i.attributes=Ns(e[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void this.trigger("data",i);if(e=/^#EXT-X-START:?(.*)$/.exec(t))return i={type:"tag",tagType:"start"},e[1]&&(i.attributes=Ns(e[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out-cont"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-IN:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-in"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);this.trigger("data",{type:"tag",data:t.slice(4)})}}}else this.trigger("data",{type:"comment",text:t.slice(1)})}else this.trigger("data",{type:"uri",uri:t})},i.prototype.addParser=function(t){var e=this,i=t.expression,r=t.customType,n=t.dataParser,s=t.segment;"function"!=typeof n&&(n=function(t){return t}),this.customParsers.push(function(t){if(i.exec(t))return e.trigger("data",{type:"custom",data:n(t),customType:r,segment:s}),!0})},i}(Ms),js=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));t.lineStream=new Us,t.parseStream=new Bs,t.lineStream.pipe(t.parseStream);var n=t,s=[],a={},o=void 0,u=void 0,l={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},c=0;return t.manifest={allowCache:!0,discontinuityStarts:[],segments:[]},t.parseStream.on("data",function(e){var i=void 0,r=void 0;({tag:function(){({"allow-cache":function(){this.manifest.allowCache=e.allowed,"allowed"in e||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var t={};"length"in e&&((a.byterange=t).length=e.length,"offset"in e||(this.trigger("info",{message:"defaulting offset to zero"}),e.offset=0)),"offset"in e&&((a.byterange=t).offset=e.offset)},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),0<e.duration&&(a.duration=e.duration),0===e.duration&&(a.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=s},key:function(){e.attributes?"NONE"!==e.attributes.METHOD?e.attributes.URI?(e.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),u={method:e.attributes.METHOD||"AES-128",uri:e.attributes.URI},"undefined"!=typeof e.attributes.IV&&(u.iv=e.attributes.IV)):this.trigger("warn",{message:"ignoring key declaration without URI"}):u=null:this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(e.number)?this.manifest.mediaSequence=e.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+e.number})},"discontinuity-sequence":function(){isFinite(e.number)?(this.manifest.discontinuitySequence=e.number,c=e.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+e.number})},"playlist-type":function(){/VOD|EVENT/.test(e.playlistType)?this.manifest.playlistType=e.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+e.playlist})},map:function(){o={},e.uri&&(o.uri=e.uri),e.byterange&&(o.byterange=e.byterange)},"stream-inf":function(){this.manifest.playlists=s,this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes?(a.attributes||(a.attributes={}),Is(a.attributes,e.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes&&e.attributes.TYPE&&e.attributes["GROUP-ID"]&&e.attributes.NAME){var t=this.manifest.mediaGroups[e.attributes.TYPE];t[e.attributes["GROUP-ID"]]=t[e.attributes["GROUP-ID"]]||{},i=t[e.attributes["GROUP-ID"]],(r={default:/yes/i.test(e.attributes.DEFAULT)}).default?r.autoselect=!0:r.autoselect=/yes/i.test(e.attributes.AUTOSELECT),e.attributes.LANGUAGE&&(r.language=e.attributes.LANGUAGE),e.attributes.URI&&(r.uri=e.attributes.URI),e.attributes["INSTREAM-ID"]&&(r.instreamId=e.attributes["INSTREAM-ID"]),e.attributes.CHARACTERISTICS&&(r.characteristics=e.attributes.CHARACTERISTICS),e.attributes.FORCED&&(r.forced=/yes/i.test(e.attributes.FORCED)),i[e.attributes.NAME]=r}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){c+=1,a.discontinuity=!0,this.manifest.discontinuityStarts.push(s.length)},"program-date-time":function(){"undefined"==typeof this.manifest.dateTimeString&&(this.manifest.dateTimeString=e.dateTimeString,this.manifest.dateTimeObject=e.dateTimeObject),a.dateTimeString=e.dateTimeString,a.dateTimeObject=e.dateTimeObject},targetduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+e.duration}):this.manifest.targetDuration=e.duration},totalduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid total duration: "+e.duration}):this.manifest.totalDuration=e.duration},start:function(){e.attributes&&!isNaN(e.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:e.attributes["TIME-OFFSET"],precise:e.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){a.cueOut=e.data},"cue-out-cont":function(){a.cueOutCont=e.data},"cue-in":function(){a.cueIn=e.data}}[e.tagType]||function(){}).call(n)},uri:function(){a.uri=e.uri,s.push(a),!this.manifest.targetDuration||"duration"in a||(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),a.duration=this.manifest.targetDuration),u&&(a.key=u),a.timeline=c,o&&(a.map=o),a={}},comment:function(){},custom:function(){e.segment?(a.custom=a.custom||{},a.custom[e.customType]=e.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[e.customType]=e.data)}})[e.type].call(n)}),t}return Ds(i,e),i.prototype.push=function(t){this.lineStream.push(t)},i.prototype.end=function(){this.lineStream.push("\n")},i.prototype.addParser=function(t){this.parseStream.addParser(t)},i}(Ms),Fs=function(t){var e,i=t.attributes,r=t.segments,n={attributes:(e={NAME:i.id,AUDIO:"audio",SUBTITLES:"subs",RESOLUTION:{width:i.width,height:i.height},CODECS:i.codecs,BANDWIDTH:i.bandwidth},e["PROGRAM-ID"]=1,e),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:r,mediaSequence:r.length?r[0].number:1};return i.contentProtection&&(n.contentProtection=i.contentProtection),n},Hs=function(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))},Vs=function r(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.reduce(function(e,i){return Object.keys(i).forEach(function(t){Array.isArray(e[t])&&Array.isArray(i[t])?e[t]=e[t].concat(i[t]):Hs(e[t])&&Hs(i[t])?e[t]=r(e[t],i[t]):e[t]=i[t]}),e},{})},qs=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Os.buildAbsoluteURL(g.location.href,t)),Os.buildAbsoluteURL(t,e))},Ws=function(t){var e=t.baseUrl,i=void 0===e?"":e,r=t.source,n=void 0===r?"":r,s=t.range,a=void 0===s?"":s,o={uri:n,resolvedUri:qs(i||"",n)};if(a){var u=a.split("-"),l=parseInt(u[0],10),c=parseInt(u[1],10);o.byterange={length:c-l,offset:l}}return o},zs=function(t,e){for(var i,r,n,s,a,o,u,l,c,h,d,p,f=t.type,m=void 0===f?"static":f,g=t.minimumUpdatePeriod,y=void 0===g?0:g,v=t.media,_=void 0===v?"":v,b=t.sourceDuration,T=t.timescale,S=void 0===T?1:T,k=t.startNumber,C=void 0===k?1:k,E=t.periodIndex,w=[],A=-1,L=0;L<e.length;L++){var P=e[L],O=P.d,x=P.r||0,I=P.t||0;A<0&&(A=I),I&&A<I&&(A=I);var D=void 0;if(x<0){var R=L+1;R===e.length?"dynamic"===m&&0<y&&0<_.indexOf("$Number$")?(r=A,n=O,void 0,s=(i=t).NOW,a=i.clientOffset,o=i.availabilityStartTime,u=i.timescale,l=void 0===u?1:u,c=i.start,h=void 0===c?0:c,d=i.minimumUpdatePeriod,p=(s+a)/1e3+(void 0===d?0:d)-(o+h),D=Math.ceil((p*l-r)/n)):D=(b*S-A)/O:D=(e[R].t-A)/O}else D=x+1;for(var M=C+w.length+D,U=C+w.length;U<M;)w.push({number:U,duration:O/S,time:A,timeline:E}),A+=O,U++}return w},Gs=function(t){return t.reduce(function(t,e){return t.concat(e)},[])},Xs=function(t){if(!t.length)return[];for(var e=[],i=0;i<t.length;i++)e.push(t[i]);return e},Ys={static:function(t){var e=t.duration,i=t.timescale,r=void 0===i?1:i,n=t.sourceDuration;return{start:0,end:Math.ceil(n/(e/r))}},dynamic:function(t){var e=t.NOW,i=t.clientOffset,r=t.availabilityStartTime,n=t.timescale,s=void 0===n?1:n,a=t.duration,o=t.start,u=void 0===o?0:o,l=t.minimumUpdatePeriod,c=void 0===l?0:l,h=t.timeShiftBufferDepth,d=void 0===h?1/0:h,p=(e+i)/1e3,f=r+u,m=p+c-f,g=Math.ceil(m*s/a),y=Math.floor((p-f-d)*s/a),v=Math.floor((p-f)*s/a);return{start:Math.max(0,y),end:Math.min(g,v)}}},$s=function(t){var o,e=t.type,i=void 0===e?"static":e,r=t.duration,n=t.timescale,s=void 0===n?1:n,a=t.sourceDuration,u=Ys[i](t),l=function(t,e){for(var i=[],r=t;r<e;r++)i.push(r);return i}(u.start,u.end).map((o=t,function(t,e){var i=o.duration,r=o.timescale,n=void 0===r?1:r,s=o.periodIndex,a=o.startNumber;return{number:(void 0===a?1:a)+t,duration:i/n,timeline:s,time:e*i}}));if("static"===i){var c=l.length-1;l[c].duration=a-r/s*c}return l},Ks=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,Qs=function(t,e){return t.replace(Ks,(s=e,function(t,e,i,r){if("$$"===t)return"$";if("undefined"==typeof s[e])return t;var n=""+s[e];return"RepresentationID"===e?n:(r=i?parseInt(r,10):1)<=n.length?n:""+new Array(r-n.length+1).join("0")+n}));var s},Js=function(i,t){var e,r,n={RepresentationID:i.id,Bandwidth:i.bandwidth||0},s=i.initialization,a=void 0===s?{sourceURL:"",range:""}:s,o=Ws({baseUrl:i.baseUrl,source:Qs(a.sourceURL,n),range:a.range});return(r=t,(e=i).duration||r?e.duration?$s(e):zs(e,r):[{number:e.startNumber||1,duration:e.sourceDuration,time:0,timeline:e.periodIndex}]).map(function(t){n.Number=t.number,n.Time=t.time;var e=Qs(i.media||"",n);return{uri:e,timeline:t.timeline,duration:t.duration,resolvedUri:qs(i.baseUrl||"",e),map:o,number:t.number}})},Zs="INVALID_NUMBER_OF_PERIOD",ta="DASH_EMPTY_MANIFEST",ea="DASH_INVALID_XML",ia="NO_BASE_URL",ra="SEGMENT_TIME_UNSPECIFIED",na="UNSUPPORTED_UTC_TIMING_SCHEME",sa=function(u,t){var e=u.duration,i=u.segmentUrls,r=void 0===i?[]:i;if(!e&&!t||e&&t)throw new Error(ra);var n=r.map(function(t){return i=t,r=(e=u).baseUrl,n=e.initialization,a=Ws({baseUrl:r,source:(s=void 0===n?{}:n).sourceURL,range:s.range}),(o=Ws({baseUrl:r,source:i.media,range:i.mediaRange})).map=a,o;var e,i,r,n,s,a,o}),s=void 0;return e&&(s=$s(u)),t&&(s=zs(u,t)),s.map(function(t,e){if(n[e]){var i=n[e];return i.timeline=t.timeline,i.duration=t.duration,i.number=t.number,i}}).filter(function(t){return t})},aa=function(t){var e=t.baseUrl,i=t.initialization,r=void 0===i?{}:i,n=t.sourceDuration,s=t.timescale,a=void 0===s?1:s,o=t.indexRange,u=void 0===o?"":o,l=t.duration;if(!e)throw new Error(ia);var c=Ws({baseUrl:e,source:r.sourceURL,range:r.range}),h=Ws({baseUrl:e,source:e,range:u});if(h.map=c,l){var d=$s(t);d.length&&(h.duration=d[0].duration,h.timeline=d[0].timeline)}else n&&(h.duration=n/a,h.timeline=0);return h.number=0,[h]},oa=function(t){var e=t.attributes,i=t.segmentInfo,r=void 0,n=void 0;if(i.template?(n=Js,r=Vs(e,i.template)):i.base?(n=aa,r=Vs(e,i.base)):i.list&&(n=sa,r=Vs(e,i.list)),!n)return{attributes:e};var s=n(r,i.timeline);if(r.duration){var a=r,o=a.duration,u=a.timescale,l=void 0===u?1:u;r.duration=o/l}else s.length?r.duration=s.reduce(function(t,e){return Math.max(t,Math.ceil(e.duration))},0):r.duration=0;return{attributes:r,segments:s}},ua=function(t,e){return Xs(t.childNodes).filter(function(t){return t.tagName===e})},la=function(t){return t.textContent.trim()},ca=function(t){var e=/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);if(!e)return 0;var i=e.slice(1),r=i[0],n=i[1],s=i[2],a=i[3],o=i[4],u=i[5];return 31536e3*parseFloat(r||0)+2592e3*parseFloat(n||0)+86400*parseFloat(s||0)+3600*parseFloat(a||0)+60*parseFloat(o||0)+parseFloat(u||0)},ha={mediaPresentationDuration:function(t){return ca(t)},availabilityStartTime:function(t){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e=t)&&(e+="Z"),Date.parse(e)/1e3;var e},minimumUpdatePeriod:function(t){return ca(t)},timeShiftBufferDepth:function(t){return ca(t)},start:function(t){return ca(t)},width:function(t){return parseInt(t,10)},height:function(t){return parseInt(t,10)},bandwidth:function(t){return parseInt(t,10)},startNumber:function(t){return parseInt(t,10)},timescale:function(t){return parseInt(t,10)},duration:function(t){var e=parseInt(t,10);return isNaN(e)?ca(t):e},d:function(t){return parseInt(t,10)},t:function(t){return parseInt(t,10)},r:function(t){return parseInt(t,10)},DEFAULT:function(t){return t}},da=function(t){return t&&t.attributes?Xs(t.attributes).reduce(function(t,e){var i=ha[e.name]||ha.DEFAULT;return t[e.name]=i(e.value),t},{}):{}};var pa,fa,ma={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},ga=function(t,i){return i.length?Gs(t.map(function(e){return i.map(function(t){return qs(e,la(t))})})):t},ya=function(t){var e=ua(t,"SegmentTemplate")[0],i=ua(t,"SegmentList")[0],r=i&&ua(i,"SegmentURL").map(function(t){return Vs({tag:"SegmentURL"},da(t))}),n=ua(t,"SegmentBase")[0],s=i||e,a=s&&ua(s,"SegmentTimeline")[0],o=i||n||e,u=o&&ua(o,"Initialization")[0],l=e&&da(e);l&&u?l.initialization=u&&da(u):l&&l.initialization&&(l.initialization={sourceURL:l.initialization});var c={template:l,timeline:a&&ua(a,"S").map(function(t){return da(t)}),list:i&&Vs(da(i),{segmentUrls:r,initialization:da(u)}),base:n&&Vs(da(n),{initialization:da(u)})};return Object.keys(c).forEach(function(t){c[t]||delete c[t]}),c},va=function(t){return t.reduce(function(t,e){var i=da(e),r=ma[i.schemeIdUri];if(r){t[r]={attributes:i};var n=ua(e,"cenc:pssh")[0];if(n){var s=la(n),a=s&&function(t){for(var e=g.atob(t),i=new Uint8Array(e.length),r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(s);t[r].pssh=a}}return t},{})},_a=function(p,f,m){return function(t){var e=da(t),i=ga(f,ua(t,"BaseURL")),r=ua(t,"Role")[0],n={role:da(r)},s=Vs(p,e,n),a=va(ua(t,"ContentProtection"));Object.keys(a).length&&(s=Vs(s,{contentProtection:a}));var o,u,l,c=ya(t),h=ua(t,"Representation"),d=Vs(m,c);return Gs(h.map((o=s,u=i,l=d,function(t){var e=ua(t,"BaseURL"),i=ga(u,e),r=Vs(o,da(t)),n=ya(t);return i.map(function(t){return{segmentInfo:Vs(l,n),attributes:Vs(r,{baseUrl:t})}})})))}},ba=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=e.manifestUri,r=void 0===i?"":i,n=e.NOW,s=void 0===n?Date.now():n,a=e.clientOffset,o=void 0===a?0:a,u=ua(t,"Period");if(1!==u.length)throw new Error(Zs);var l,c,h=da(t),d=ga([r],ua(t,"BaseURL"));return h.sourceDuration=h.mediaPresentationDuration||0,h.NOW=s,h.clientOffset=o,Gs(u.map((l=h,c=d,function(t,e){var i=ga(c,ua(t,"BaseURL")),r=da(t),n=Vs(l,r,{periodIndex:e}),s=ua(t,"AdaptationSet"),a=ya(t);return Gs(s.map(_a(n,i,a)))})))},Ta=function(t){if(""===t)throw new Error(ta);var e=(new g.DOMParser).parseFromString(t,"application/xml"),i=e&&"MPD"===e.documentElement.tagName?e.documentElement:null;if(!i||i&&0<i.getElementsByTagName("parsererror").length)throw new Error(ea);return i},Sa=function(t,e){return function(t){var e;if(!t.length)return{};var i=t[0].attributes,r=i.sourceDuration,n=i.minimumUpdatePeriod,s=void 0===n?0:n,a=t.filter(function(t){var e=t.attributes;return"video/mp4"===e.mimeType||"video"===e.contentType}).map(Fs),o=t.filter(function(t){var e=t.attributes;return"audio/mp4"===e.mimeType||"audio"===e.contentType}),u=t.filter(function(t){var e=t.attributes;return"text/vtt"===e.mimeType||"text"===e.contentType}),l={allowCache:!0,discontinuityStarts:[],segments:[],endList:!0,mediaGroups:(e={AUDIO:{},VIDEO:{}},e["CLOSED-CAPTIONS"]={},e.SUBTITLES={},e),uri:"",duration:r,playlists:a,minimumUpdatePeriod:1e3*s};return o.length&&(l.mediaGroups.AUDIO.audio=o.reduce(function(t,e){var i,r,n,s,a,o=e.attributes.role&&e.attributes.role.value||"main",u=e.attributes.lang||"",l="main";return u&&(l=e.attributes.lang+" ("+o+")"),t[l]&&t[l].playlists[0].attributes.BANDWIDTH>e.attributes.bandwidth||(t[l]={language:u,autoselect:!0,default:"main"===o,playlists:[(i=e,n=i.attributes,s=i.segments,a={attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth,CODECS:n.codecs},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1},n.contentProtection&&(a.contentProtection=n.contentProtection),a)],uri:""}),t},{})),u.length&&(l.mediaGroups.SUBTITLES.subs=u.reduce(function(t,e){var i,r,n,s,a=e.attributes.lang||"text";return t[a]||(t[a]={language:a,default:!1,autoselect:!1,playlists:[(i=e,n=i.attributes,s=i.segments,"undefined"==typeof s&&(s=[{uri:n.baseUrl,timeline:n.periodIndex,resolvedUri:n.baseUrl||"",duration:n.sourceDuration,number:0}],n.duration=n.sourceDuration),{attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:n.baseUrl||"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1})],uri:""}),t},{})),l}(ba(Ta(t),e).map(oa))},ka=function(t){return function(t){var e=ua(t,"UTCTiming")[0];if(!e)return null;var i=da(e);switch(i.schemeIdUri){case"urn:mpeg:dash:utc:http-head:2014":case"urn:mpeg:dash:utc:http-head:2012":i.method="HEAD";break;case"urn:mpeg:dash:utc:http-xsdate:2014":case"urn:mpeg:dash:utc:http-iso:2014":case"urn:mpeg:dash:utc:http-xsdate:2012":case"urn:mpeg:dash:utc:http-iso:2012":i.method="GET";break;case"urn:mpeg:dash:utc:direct:2014":case"urn:mpeg:dash:utc:direct:2012":i.method="DIRECT",i.value=Date.parse(i.value);break;case"urn:mpeg:dash:utc:http-ntp:2014":case"urn:mpeg:dash:utc:ntp:2014":case"urn:mpeg:dash:utc:sntp:2014":default:throw new Error(na)}return i}(Ta(t))},Ca={toUnsigned:function(t){return t>>>0}},Ea=Ca.toUnsigned,wa=Object.freeze({default:Ca,__moduleExports:Ca,toUnsigned:Ea}),Aa=(wa&&Ca||wa).toUnsigned;pa=function(t,e){var i,r,n,s,a,o=[];if(!e.length)return null;for(i=0;i<t.byteLength;)r=Aa(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3]),n=fa(t.subarray(i+4,i+8)),s=1<r?i+r:t.byteLength,n===e[0]&&(1===e.length?o.push(t.subarray(i+8,s)):(a=pa(t.subarray(i+8,s),e.slice(1))).length&&(o=o.concat(a))),i=s;return o};fa=function(t){var e="";return e+=String.fromCharCode(t[0]),e+=String.fromCharCode(t[1]),e+=String.fromCharCode(t[2]),e+=String.fromCharCode(t[3])};var La=function(t){return pa(t,["moov","trak"]).reduce(function(t,e){var i,r,n,s,a;return(i=pa(e,["tkhd"])[0])?(r=i[0],s=Aa(i[n=0===r?12:20]<<24|i[n+1]<<16|i[n+2]<<8|i[n+3]),(a=pa(e,["mdia","mdhd"])[0])?(n=0===(r=a[0])?12:20,t[s]=Aa(a[n]<<24|a[n+1]<<16|a[n+2]<<8|a[n+3]),t):null):null},{})},Pa=function(n,t){var e,i,r;return e=pa(t,["moof","traf"]),i=[].concat.apply([],e.map(function(r){return pa(r,["tfhd"]).map(function(t){var e,i;return e=Aa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),i=n[e]||9e4,(pa(r,["tfdt"]).map(function(t){var e,i;return e=t[0],i=Aa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),1===e&&(i*=Math.pow(2,32),i+=Aa(t[8]<<24|t[9]<<16|t[10]<<8|t[11])),i})[0]||1/0)/i})})),r=Math.min.apply(null,i),isFinite(r)?r:0},Oa={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},xa=Oa.H264_STREAM_TYPE,Ia=Oa.ADTS_STREAM_TYPE,Da=Oa.METADATA_STREAM_TYPE,Ra=Object.freeze({default:Oa,__moduleExports:Oa,H264_STREAM_TYPE:xa,ADTS_STREAM_TYPE:Ia,METADATA_STREAM_TYPE:Da}),Ma=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};Ma.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},Ma.prototype.push=function(t){this.trigger("data",t)},Ma.prototype.flush=function(t){this.trigger("done",t)};var Ua=Ma,Na=Object.freeze({default:Ua,__moduleExports:Ua}),Ba=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},ja=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=Ba(t.dts,r),t.pts=Ba(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};ja.prototype=new(Na&&Ua||Na);var Fa={TimestampRolloverStream:ja,handleRollover:Ba},Ha=Fa.TimestampRolloverStream,Va=Fa.handleRollover,qa=Object.freeze({default:Fa,__moduleExports:Fa,TimestampRolloverStream:Ha,handleRollover:Va}),Wa=Ra&&Oa||Ra,za=function(t){var e=31&t[1];return e<<=8,e|=t[2]},Ga=function(t){return!!(64&t[1])},Xa=function(t){var e=0;return 1<(48&t[3])>>>4&&(e+=t[4]+1),e},Ya=function(t){switch(t){case 5:return"slice_layer_without_partitioning_rbsp_idr";case 6:return"sei_rbsp";case 7:return"seq_parameter_set_rbsp";case 8:return"pic_parameter_set_rbsp";case 9:return"access_unit_delimiter_rbsp";default:return null}},$a={parseType:function(t,e){var i=za(t);return 0===i?"pat":i===e?"pmt":e?"pes":null},parsePat:function(t){var e=Ga(t),i=4+Xa(t);return e&&(i+=t[i]+1),(31&t[i+10])<<8|t[i+11]},parsePmt:function(t){var e={},i=Ga(t),r=4+Xa(t);if(i&&(r+=t[r]+1),1&t[r+5]){var n;n=3+((15&t[r+1])<<8|t[r+2])-4;for(var s=12+((15&t[r+10])<<8|t[r+11]);s<n;){var a=r+s;e[(31&t[a+1])<<8|t[a+2]]=t[a],s+=5+((15&t[a+3])<<8|t[a+4])}return e}},parsePayloadUnitStartIndicator:Ga,parsePesType:function(t,e){switch(e[za(t)]){case Wa.H264_STREAM_TYPE:return"video";case Wa.ADTS_STREAM_TYPE:return"audio";case Wa.METADATA_STREAM_TYPE:return"timed-metadata";default:return null}},parsePesTime:function(t){if(!Ga(t))return null;var e=4+Xa(t);if(e>=t.byteLength)return null;var i,r=null;return 192&(i=t[e+7])&&((r={}).pts=(14&t[e+9])<<27|(255&t[e+10])<<20|(254&t[e+11])<<12|(255&t[e+12])<<5|(254&t[e+13])>>>3,r.pts*=4,r.pts+=(6&t[e+13])>>>1,r.dts=r.pts,64&i&&(r.dts=(14&t[e+14])<<27|(255&t[e+15])<<20|(254&t[e+16])<<12|(255&t[e+17])<<5|(254&t[e+18])>>>3,r.dts*=4,r.dts+=(6&t[e+18])>>>1)),r},videoPacketContainsKeyFrame:function(t){for(var e=4+Xa(t),i=t.subarray(e),r=0,n=0,s=!1;n<i.byteLength-3;n++)if(1===i[n+2]){r=n+5;break}for(;r<i.byteLength;)switch(i[r]){case 0:if(0!==i[r-1]){r+=2;break}if(0!==i[r-2]){r++;break}for(n+3!==r-2&&"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0);1!==i[++r]&&r<i.length;);n=r-2,r+=3;break;case 1:if(0!==i[r-1]||0!==i[r-2]){r+=3;break}"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0),n=r-2,r+=3;break;default:r+=3}return i=i.subarray(n),r-=n,n=0,i&&3<i.byteLength&&"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0),s}},Ka=$a.parseType,Qa=$a.parsePat,Ja=$a.parsePmt,Za=$a.parsePayloadUnitStartIndicator,to=$a.parsePesType,eo=$a.parsePesTime,io=$a.videoPacketContainsKeyFrame,ro=Object.freeze({default:$a,__moduleExports:$a,parseType:Ka,parsePat:Qa,parsePmt:Ja,parsePayloadUnitStartIndicator:Za,parsePesType:to,parsePesTime:eo,videoPacketContainsKeyFrame:io}),no=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],so=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ao={parseId3TagSize:function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},parseAdtsSize:function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},parseType:function(t,e){return t[e]==="I".charCodeAt(0)&&t[e+1]==="D".charCodeAt(0)&&t[e+2]==="3".charCodeAt(0)?"timed-metadata":!0&t[e]&&240==(240&t[e+1])?"audio":null},parseSampleRate:function(t){for(var e=0;e+5<t.length;){if(255===t[e]&&240==(246&t[e+1]))return no[(60&t[e+2])>>>2];e++}return null},parseAacTimestamp:function(t){var e,i,r;e=10,64&t[5]&&(e+=4,e+=so(t.subarray(10,14)));do{if((i=so(t.subarray(e+4,e+8)))<1)return null;if("PRIV"===String.fromCharCode(t[e],t[e+1],t[e+2],t[e+3])){r=t.subarray(e+10,e+i+10);for(var n=0;n<r.byteLength;n++)if(0===r[n]){if("com.apple.streaming.transportStreamTimestamp"===unescape(function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n}(r,0,n))){var s=r.subarray(n+1),a=(1&s[3])<<30|s[4]<<22|s[5]<<14|s[6]<<6|s[7]>>>2;return a*=4,a+=3&s[7]}break}}e+=10,e+=i}while(e<t.byteLength);return null}},oo=ao.parseId3TagSize,uo=ao.parseAdtsSize,lo=ao.parseType,co=ao.parseSampleRate,ho=ao.parseAacTimestamp,po=Object.freeze({default:ao,__moduleExports:ao,parseId3TagSize:oo,parseAdtsSize:uo,parseType:lo,parseSampleRate:co,parseAacTimestamp:ho}),fo=ro&&$a||ro,mo=po&&ao||po,go=(qa&&Fa||qa).handleRollover,yo={};yo.ts=fo,yo.aac=mo;var vo=188,_o=function(t,e,i){for(var r,n,s,a,o=0,u=vo,l=!1;u<t.byteLength;)if(71!==t[o]||71!==t[u])o++,u++;else{switch(r=t.subarray(o,u),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o+=vo,u+=vo}for(o=(u=t.byteLength)-vo,l=!1;0<=o;)if(71!==t[o]||71!==t[u])o--,u--;else{switch(r=t.subarray(o,u),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o-=vo,u-=vo}},bo=function(t,e,i){for(var r,n,s,a,o,u,l,c=0,h=vo,d=!1,p={data:[],size:0};h<t.byteLength;)if(71!==t[c]||71!==t[h])c++,h++;else{switch(r=t.subarray(c,h),yo.ts.parseType(r,e.pid)){case"pes":if(n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"video"===n&&(s&&!d&&(a=yo.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0),!i.firstKeyFrame)){if(s&&0!==p.size){for(o=new Uint8Array(p.size),u=0;p.data.length;)l=p.data.shift(),o.set(l,u),u+=l.byteLength;yo.ts.videoPacketContainsKeyFrame(o)&&(i.firstKeyFrame=yo.ts.parsePesTime(o),i.firstKeyFrame.type="video"),p.size=0}p.data.push(r),p.size+=r.byteLength}}if(d&&i.firstKeyFrame)break;c+=vo,h+=vo}for(c=(h=t.byteLength)-vo,d=!1;0<=c;)if(71!==t[c]||71!==t[h])c--,h--;else{switch(r=t.subarray(c,h),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"video"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0)}if(d)break;c-=vo,h-=vo}},To=function(t){var e={pid:null,table:null},i={};for(var r in function(t,e){for(var i,r=0,n=vo;n<t.byteLength;)if(71!==t[r]||71!==t[n])r++,n++;else{switch(i=t.subarray(r,n),yo.ts.parseType(i,e.pid)){case"pat":e.pid||(e.pid=yo.ts.parsePat(i));break;case"pmt":e.table||(e.table=yo.ts.parsePmt(i))}if(e.pid&&e.table)return;r+=vo,n+=vo}}(t,e),e.table){if(e.table.hasOwnProperty(r))switch(e.table[r]){case Wa.H264_STREAM_TYPE:i.video=[],bo(t,e,i),0===i.video.length&&delete i.video;break;case Wa.ADTS_STREAM_TYPE:i.audio=[],_o(t,e,i),0===i.audio.length&&delete i.audio}}return i},So=function(t,e){var i,r;return(r=(i=t)[0]==="I".charCodeAt(0)&&i[1]==="D".charCodeAt(0)&&i[2]==="3".charCodeAt(0)?function(t){for(var e,i=!1,r=0,n=null,s=null,a=0,o=0;3<=t.length-o;){switch(yo.aac.parseType(t,o)){case"timed-metadata":if(t.length-o<10){i=!0;break}if((a=yo.aac.parseId3TagSize(t,o))>t.length){i=!0;break}null===s&&(e=t.subarray(o,o+a),s=yo.aac.parseAacTimestamp(e)),o+=a;break;case"audio":if(t.length-o<7){i=!0;break}if((a=yo.aac.parseAdtsSize(t,o))>t.length){i=!0;break}null===n&&(e=t.subarray(o,o+a),n=yo.aac.parseSampleRate(e)),r++,o+=a;break;default:o++}if(i)return null}if(null===n||null===s)return null;var u=9e4/n;return{audio:[{type:"audio",dts:s,pts:s},{type:"audio",dts:s+1024*r*u,pts:s+1024*r*u}]}}(t):To(t))&&(r.audio||r.video)?(function(t,e){if(t.audio&&t.audio.length){var i=e;"undefined"==typeof i&&(i=t.audio[0].dts),t.audio.forEach(function(t){t.dts=go(t.dts,i),t.pts=go(t.pts,i),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4})}if(t.video&&t.video.length){var r=e;if("undefined"==typeof r&&(r=t.video[0].dts),t.video.forEach(function(t){t.dts=go(t.dts,r),t.pts=go(t.pts,r),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4}),t.firstKeyFrame){var n=t.firstKeyFrame;n.dts=go(n.dts,r),n.pts=go(n.pts,r),n.dtsTime=n.dts/9e4,n.ptsTime=n.dts/9e4}}}(r,e),r):null};var ko=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Co=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),Eo=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},wo=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},Ao=null,Lo=function(){function c(t){ko(this,c),Ao||(Ao=wo()),this._tables=[[Ao[0][0].slice(),Ao[0][1].slice(),Ao[0][2].slice(),Ao[0][3].slice(),Ao[0][4].slice()],[Ao[1][0].slice(),Ao[1][1].slice(),Ao[1][2].slice(),Ao[1][3].slice(),Ao[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),Po=function(){function t(){ko(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Oo=function(e){function i(){ko(this,i);var t=Eo(this,e.call(this,Po));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(Po),xo=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},Io=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new Lo(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=xo(r[m]),d=xo(r[m+1]),p=xo(r[m+2]),f=xo(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=xo(a[m]^o),a[m+1]=xo(a[m+1]^u),a[m+2]=xo(a[m+2]^l),a[m+3]=xo(a[m+3]^c),o=h,u=d,l=p,c=f;return s},Do=function(){function u(t,e,i,r){ko(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new Oo,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([xo(s[o-4]),xo(s[o-3]),xo(s[o-2]),xo(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=Io(e,i,r);n.set(t,e.byteOffset)}},Co(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),Ro=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Os.buildAbsoluteURL(g.location.href,t)),Os.buildAbsoluteURL(t,e))},Mo=As.mergeOptions,Uo=As.log,No=function(n,s){["AUDIO","SUBTITLES"].forEach(function(t){for(var e in n.mediaGroups[t])for(var i in n.mediaGroups[t][e]){var r=n.mediaGroups[t][e][i];s(r,t,e,i)}})},Bo=function(t,e){var i=Mo(t,{}),r=i.playlists[e.uri];if(!r)return null;if(r.segments&&e.segments&&r.segments.length===e.segments.length&&r.mediaSequence===e.mediaSequence)return null;var n=Mo(r,e);r.segments&&(n.segments=function(t,e,i){var r=e.slice();i=i||0;for(var n=Math.min(t.length,e.length+i),s=i;s<n;s++)r[s-i]=Mo(t[s],r[s-i]);return r}(r.segments,e.segments,e.mediaSequence-r.mediaSequence)),n.segments.forEach(function(t){var e,i;e=t,i=n.resolvedUri,e.resolvedUri||(e.resolvedUri=Ro(i,e.uri)),e.key&&!e.key.resolvedUri&&(e.key.resolvedUri=Ro(i,e.key.uri)),e.map&&!e.map.resolvedUri&&(e.map.resolvedUri=Ro(i,e.map.uri))});for(var s=0;s<i.playlists.length;s++)i.playlists[s].uri===e.uri&&(i.playlists[s]=n);return i.playlists[e.uri]=n,i},jo=function(t){for(var e=t.playlists.length;e--;){var i=t.playlists[e];(t.playlists[i.uri]=i).resolvedUri=Ro(t.uri,i.uri),i.id=e,i.attributes||(i.attributes={},Uo.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))}},Fo=function(e){No(e,function(t){t.uri&&(t.resolvedUri=Ro(e.uri,t.uri))})},Ho=function(t,e){var i=t.segments[t.segments.length-1];return e&&i&&i.duration?1e3*i.duration:500*(t.targetDuration||10)},Vo=function(n){function s(t,e,i){y(this,s);var r=b(this,n.call(this));if(r.srcUrl=t,r.hls_=e,r.withCredentials=i,!r.srcUrl)throw new Error("A non-empty playlist URL is required");return r.state="HAVE_NOTHING",r.on("mediaupdatetimeout",function(){"HAVE_METADATA"===r.state&&(r.state="HAVE_CURRENT_METADATA",r.request=r.hls_.xhr({uri:Ro(r.master.uri,r.media().uri),withCredentials:r.withCredentials},function(t,e){if(r.request)return t?r.playlistRequestError(r.request,r.media().uri,"HAVE_METADATA"):void r.haveMetadata(r.request,r.media().uri)}))}),r}return _(s,n),s.prototype.playlistRequestError=function(t,e,i){this.request=null,i&&(this.state=i),this.error={playlist:this.master.playlists[e],status:t.status,message:"HLS playlist request error at URL: "+e,responseText:t.responseText,code:500<=t.status?4:2},this.trigger("error")},s.prototype.haveMetadata=function(t,e){var i=this;this.request=null,this.state="HAVE_METADATA";var r=new js;r.push(t.responseText),r.end(),r.manifest.uri=e,r.manifest.attributes=r.manifest.attributes||{};var n=Bo(this.master,r.manifest);this.targetDuration=r.manifest.targetDuration,n?(this.master=n,this.media_=this.master.playlists[r.manifest.uri]):this.trigger("playlistunchanged"),this.media().endList||(g.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=g.setTimeout(function(){i.trigger("mediaupdatetimeout")},Ho(this.media(),!!n))),this.trigger("loadedplaylist")},s.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},s.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},s.prototype.media=function(i){var r=this;if(!i)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var n=this.state;if("string"==typeof i){if(!this.master.playlists[i])throw new Error("Unknown playlist URI: "+i);i=this.master.playlists[i]}var t=!this.media_||i.uri!==this.media_.uri;if(this.master.playlists[i.uri].endList)return this.request&&(this.request.onreadystatechange=null,this.request.abort(),this.request=null),this.state="HAVE_METADATA",this.media_=i,void(t&&(this.trigger("mediachanging"),this.trigger("mediachange")));if(t){if(this.state="SWITCHING_MEDIA",this.request){if(Ro(this.master.uri,i.uri)===this.request.url)return;this.request.onreadystatechange=null,this.request.abort(),this.request=null}this.media_&&this.trigger("mediachanging"),this.request=this.hls_.xhr({uri:Ro(this.master.uri,i.uri),withCredentials:this.withCredentials},function(t,e){if(r.request){if(t)return r.playlistRequestError(r.request,i.uri,n);r.haveMetadata(e,i.uri),"HAVE_MASTER"===n?r.trigger("loadedmetadata"):r.trigger("mediachange")}})}},s.prototype.pause=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout),"HAVE_NOTHING"===this.state&&(this.started=!1),"SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA":this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")},s.prototype.load=function(t){var e=this;g.clearTimeout(this.mediaUpdateTimeout);var i=this.media();if(t){var r=i?i.targetDuration/2*1e3:5e3;this.mediaUpdateTimeout=g.setTimeout(function(){return e.load()},r)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()},s.prototype.start=function(){var r=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"HLS playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");var i=new js;return i.push(e.responseText),i.end(),r.state="HAVE_MASTER",i.manifest.uri=r.srcUrl,i.manifest.playlists?(r.master=i.manifest,jo(r.master),Fo(r.master),r.trigger("loadedplaylist"),void(r.request||r.media(i.manifest.playlists[0]))):(r.master={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:g.location.href,playlists:[{uri:r.srcUrl,id:0}]},r.master.playlists[r.srcUrl]=r.master.playlists[0],r.master.playlists[0].resolvedUri=r.srcUrl,r.master.playlists[0].attributes=r.master.playlists[0].attributes||{},r.haveMetadata(e,r.srcUrl),r.trigger("loadedmetadata"))}})},s}(As.EventTarget),qo=As.createTimeRange,Wo=function(t,e,i){var r,n;return"undefined"==typeof e&&(e=t.mediaSequence+t.segments.length),e<t.mediaSequence?0:(r=function(t,e){var i=0,r=e-t.mediaSequence,n=t.segments[r];if(n){if("undefined"!=typeof n.start)return{result:n.start,precise:!0};if("undefined"!=typeof n.end)return{result:n.end-n.duration,precise:!0}}for(;r--;){if("undefined"!=typeof(n=t.segments[r]).end)return{result:i+n.end,precise:!0};if(i+=n.duration,"undefined"!=typeof n.start)return{result:i+n.start,precise:!0}}return{result:i,precise:!1}}(t,e)).precise?r.result:(n=function(t,e){for(var i=0,r=void 0,n=e-t.mediaSequence;n<t.segments.length;n++){if("undefined"!=typeof(r=t.segments[n]).start)return{result:r.start-i,precise:!0};if(i+=r.duration,"undefined"!=typeof r.end)return{result:r.end-i,precise:!0}}return{result:-1,precise:!1}}(t,e)).precise?n.result:r.result+i},zo=function(t,e,i){if(!t)return 0;if("number"!=typeof i&&(i=0),"undefined"==typeof e){if(t.totalDuration)return t.totalDuration;if(!t.endList)return g.Infinity}return Wo(t,e,i)},Go=function(t,e,i){var r=0;if(i<e){var n=[i,e];e=n[0],i=n[1]}if(e<0){for(var s=e;s<Math.min(0,i);s++)r+=t.targetDuration;e=0}for(var a=e;a<i;a++)r+=t.segments[a].duration;return r},Xo=function(t){if(!t.segments.length)return 0;for(var e=t.segments.length-1,i=t.segments[e].duration||t.targetDuration,r=i+2*t.targetDuration;e--&&!(r<=(i+=t.segments[e].duration)););return Math.max(0,e)},Yo=function(t,e,i){if(!t||!t.segments)return null;if(t.endList)return zo(t);if(null===e)return null;e=e||0;var r=i?Xo(t):t.segments.length;return Wo(t,t.mediaSequence+r,e)},$o=function(t){return t-Math.floor(t)==0},Ko=function(t,e){if($o(e))return e+.1*t;for(var i=e.toString().split(".")[1].length,r=1;r<=i;r++){var n=Math.pow(10,r),s=e*n;if($o(s)||r===i)return(s+t)/n}},Qo=Ko.bind(null,1),Jo=Ko.bind(null,-1),Zo=function(t){return t.excludeUntil&&t.excludeUntil>Date.now()},tu=function(t){return t.excludeUntil&&t.excludeUntil===1/0},eu=function(t){var e=Zo(t);return!t.disabled&&!e},iu=function(t,e){return e.attributes&&e.attributes[t]},ru=function(t,e){if(1===t.playlists.length)return!0;var i=e.attributes.BANDWIDTH||Number.MAX_VALUE;return 0===t.playlists.filter(function(t){return!!eu(t)&&(t.attributes.BANDWIDTH||0)<i}).length},nu={duration:zo,seekable:function(t,e){var i=e||0,r=Yo(t,e,!0);return null===r?qo():qo(i,r)},safeLiveIndex:Xo,getMediaInfoForTime:function(t,e,i,r){var n=void 0,s=void 0,a=t.segments.length,o=e-r;if(o<0){if(0<i)for(n=i-1;0<=n;n--)if(s=t.segments[n],0<(o+=Jo(s.duration)))return{mediaIndex:n,startTime:r-Go(t,i,n)};return{mediaIndex:0,startTime:e}}if(i<0){for(n=i;n<0;n++)if((o-=t.targetDuration)<0)return{mediaIndex:0,startTime:e};i=0}for(n=i;n<a;n++)if(s=t.segments[n],(o-=Qo(s.duration))<0)return{mediaIndex:n,startTime:r+Go(t,i,n)};return{mediaIndex:a-1,startTime:e}},isEnabled:eu,isDisabled:function(t){return t.disabled},isBlacklisted:Zo,isIncompatible:tu,playlistEnd:Yo,isAes:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].key)return!0;return!1},isFmp4:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].map)return!0;return!1},hasAttribute:iu,estimateSegmentRequestTime:function(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;return iu("BANDWIDTH",i)?(t*i.attributes.BANDWIDTH-8*r)/e:NaN},isLowestEnabledRendition:ru},su=As.xhr,au=As.mergeOptions,ou=function(){return function t(e,r){e=au({timeout:45e3},e);var i=t.beforeRequest||As.Hls.xhr.beforeRequest;if(i&&"function"==typeof i){var n=i(e);n&&(e=n)}var s=su(e,function(t,e){var i=s.response;!t&&i&&(s.responseTime=Date.now(),s.roundTripTime=s.responseTime-s.requestTime,s.bytesReceived=i.byteLength||i.length,s.bandwidth||(s.bandwidth=Math.floor(s.bytesReceived/s.roundTripTime*8*1e3))),e.headers&&(s.responseHeaders=e.headers),t&&"ETIMEDOUT"===t.code&&(s.timedout=!0),t||s.aborted||200===e.statusCode||206===e.statusCode||0===e.statusCode||(t=new Error("XHR Failed with a response of: "+(s&&(i||s.responseText)))),r(t,s)}),a=s.abort;return s.abort=function(){return s.aborted=!0,a.apply(s,arguments)},s.uri=e.uri,s.requestTime=Date.now(),s}},uu=function(t,e){var i=t.toString(16);return"00".substring(0,2-i.length)+i+(e%2?" ":"")},lu=function(t){return 32<=t&&t<126?String.fromCharCode(t):"."},cu=function(i){var r={};return Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r},hu=function(t){var e=t.byterange||{length:1/0,offset:0};return[e.length,e.offset,t.resolvedUri].join(",")},du=function(t){for(var e=Array.prototype.slice.call(t),i="",r=0;r<e.length/16;r++)i+=e.slice(16*r,16*r+16).map(uu).join("")+" "+e.slice(16*r,16*r+16).map(lu).join("")+"\n";return i},pu=Object.freeze({createTransferableMessage:cu,initSegmentId:hu,hexDump:du,tagDump:function(t){var e=t.bytes;return du(e)},textRanges:function(t){var e,i,r="",n=void 0;for(n=0;n<t.length;n++)r+=(i=n,(e=t).start(i)+"-"+e.end(i)+" ");return r}}),fu=1/30,mu=function(t,e){var i=[],r=void 0;if(t&&t.length)for(r=0;r<t.length;r++)e(t.start(r),t.end(r))&&i.push([t.start(r),t.end(r)]);return As.createTimeRanges(i)},gu=function(t,i){return mu(t,function(t,e){return t-fu<=i&&i<=e+fu})},yu=function(t,e){return mu(t,function(t){return e<=t-fu})},vu=function(t){var e=[];if(!t||!t.length)return"";for(var i=0;i<t.length;i++)e.push(t.start(i)+" => "+t.end(i));return e.join(", ")},_u=function(t){for(var e=[],i=0;i<t.length;i++)e.push({start:t.start(i),end:t.end(i)});return e},bu=function(t,e,i){var r=void 0,n=void 0;if(i&&i.cues)for(r=i.cues.length;r--;)(n=i.cues[r]).startTime<=e&&n.endTime>=t&&i.removeCue(n)},Tu=function(t){return isNaN(t)||Math.abs(t)===1/0?Number.MAX_VALUE:t},Su=function(t,e,i){var n=g.WebKitDataCue||g.VTTCue;if(e&&e.forEach(function(t){var e=t.stream;this.inbandTextTracks_[e].addCue(new n(t.startTime+this.timestampOffset,t.endTime+this.timestampOffset,t.text))},t),i){var s=Tu(t.mediaSource_.duration);if(i.forEach(function(t){var r=t.cueTime+this.timestampOffset;t.frames.forEach(function(t){var e,i=new n(r,r,t.value||t.url||t.data||"");i.frame=t,i.value=t,e=i,Object.defineProperties(e.frame,{id:{get:function(){return As.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),e.value.key}},value:{get:function(){return As.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),e.value.data}},privateData:{get:function(){return As.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),e.value.data}}}),this.metadataTrack_.addCue(i)},this)},t),t.metadataTrack_&&t.metadataTrack_.cues&&t.metadataTrack_.cues.length){for(var r=t.metadataTrack_.cues,a=[],o=0;o<r.length;o++)r[o]&&a.push(r[o]);var u=a.reduce(function(t,e){var i=t[e.startTime]||[];return i.push(e),t[e.startTime]=i,t},{}),l=Object.keys(u).sort(function(t,e){return Number(t)-Number(e)});l.forEach(function(t,e){var i=u[t],r=Number(l[e+1])||s;i.forEach(function(t){t.endTime=r})})}}},ku="undefined"!=typeof window?window:{},Cu="undefined"==typeof Symbol?"__target":Symbol(),Eu="application/javascript",wu=ku.BlobBuilder||ku.WebKitBlobBuilder||ku.MozBlobBuilder||ku.MSBlobBuilder,Au=ku.URL||ku.webkitURL||Au&&Au.msURL,Lu=ku.Worker;function Pu(n,s){return function(t){var e=this;if(!s)return new Lu(n);if(Lu&&!t){var i=Du(s.toString().replace(/^function.+?{/,"").slice(0,-1));return this[Cu]=new Lu(i),function(t,e){if(!t||!e)return;var i=t.terminate;t.objURL=e,t.terminate=function(){t.objURL&&Au.revokeObjectURL(t.objURL),i.call(t)}}(this[Cu],i),this[Cu]}var r={postMessage:function(t){e.onmessage&&setTimeout(function(){e.onmessage({data:t,target:r})})}};s.call(r),this.postMessage=function(t){setTimeout(function(){r.onmessage({data:t,target:e})})},this.isThisThread=!0}}if(Lu){var Ou,xu=Du("self.onmessage = function () {}"),Iu=new Uint8Array(1);try{(Ou=new Lu(xu)).postMessage(Iu,[Iu.buffer])}catch(t){Lu=null}finally{Au.revokeObjectURL(xu),Ou&&Ou.terminate()}}function Du(e){try{return Au.createObjectURL(new Blob([e],{type:Eu}))}catch(t){var i=new wu;return i.append(e),Au.createObjectURL(i.getBlob(type))}}var Ru=new Pu("./transmuxer-worker.worker.js",function(ie,t){var re=this;!function(){var o,e,i,n,s,r,t,a,u,l,c,h,d,p,f,m,g,y,v,_,b,T,S,k,C,E,w,A,L,P,O,x,I,D,R,M,U,N,B,j,F="undefined"!=typeof ie?ie:"undefined"!=typeof global?global:"undefined"!=typeof re?re:{},H="undefined"!=typeof ie?ie:"undefined"!=typeof F?F:"undefined"!=typeof re?re:{},V=Math.pow(2,32)-1;!function(){var t;if(T={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(t in T)T.hasOwnProperty(t)&&(T[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);S=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),C=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),k=new Uint8Array([0,0,0,1]),E=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),w=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),A={video:E,audio:w},O=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),P=new Uint8Array([0,0,0,0,0,0,0,0]),x=new Uint8Array([0,0,0,0,0,0,0,0]),I=x,D=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),R=x,L=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),o=function(t){var e,i,r=[],n=0;for(e=1;e<arguments.length;e++)r.push(arguments[e]);for(e=r.length;e--;)n+=r[e].byteLength;for(i=new Uint8Array(n+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(t,4),e=0,n=8;e<r.length;e++)i.set(r[e],n),n+=r[e].byteLength;return i},e=function(){return o(T.dinf,o(T.dref,O))},i=function(t){return o(T.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,t.audioobjecttype<<3|t.samplingfrequencyindex>>>1,t.samplingfrequencyindex<<7|t.channelcount<<3,6,1,2]))},f=function(t){return o(T.hdlr,A[t])},p=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,t.duration>>>24&255,t.duration>>>16&255,t.duration>>>8&255,255&t.duration,85,196,0,0]);return t.samplerate&&(e[12]=t.samplerate>>>24&255,e[13]=t.samplerate>>>16&255,e[14]=t.samplerate>>>8&255,e[15]=255&t.samplerate),o(T.mdhd,e)},d=function(t){return o(T.mdia,p(t),f(t.type),r(t))},s=function(t){return o(T.mfhd,new Uint8Array([0,0,0,0,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t]))},r=function(t){return o(T.minf,"video"===t.type?o(T.vmhd,L):o(T.smhd,P),e(),g(t))},t=function(t,e){for(var i=[],r=e.length;r--;)i[r]=v(e[r]);return o.apply(null,[T.moof,s(t)].concat(i))},a=function(t){for(var e=t.length,i=[];e--;)i[e]=c(t[e]);return o.apply(null,[T.moov,l(4294967295)].concat(i).concat(u(t)))},u=function(t){for(var e=t.length,i=[];e--;)i[e]=_(t[e]);return o.apply(null,[T.mvex].concat(i))},l=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return o(T.mvhd,e)},m=function(t){var e,i,r=t.samples||[],n=new Uint8Array(4+r.length);for(i=0;i<r.length;i++)e=r[i].flags,n[i+4]=e.dependsOn<<4|e.isDependedOn<<2|e.hasRedundancy;return o(T.sdtp,n)},g=function(t){return o(T.stbl,y(t),o(T.stts,R),o(T.stsc,I),o(T.stsz,D),o(T.stco,x))},y=function(t){return o(T.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===t.type?M(t):U(t))},M=function(t){var e,i=t.sps||[],r=t.pps||[],n=[],s=[];for(e=0;e<i.length;e++)n.push((65280&i[e].byteLength)>>>8),n.push(255&i[e].byteLength),n=n.concat(Array.prototype.slice.call(i[e]));for(e=0;e<r.length;e++)s.push((65280&r[e].byteLength)>>>8),s.push(255&r[e].byteLength),s=s.concat(Array.prototype.slice.call(r[e]));return o(T.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&t.width)>>8,255&t.width,(65280&t.height)>>8,255&t.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o(T.avcC,new Uint8Array([1,t.profileIdc,t.profileCompatibility,t.levelIdc,255].concat([i.length]).concat(n).concat([r.length]).concat(s))),o(T.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))},U=function(t){return o(T.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&t.channelcount)>>8,255&t.channelcount,(65280&t.samplesize)>>8,255&t.samplesize,0,0,0,0,(65280&t.samplerate)>>8,255&t.samplerate,0,0]),i(t))},h=function(t){var e=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,0,(4278190080&t.duration)>>24,(16711680&t.duration)>>16,(65280&t.duration)>>8,255&t.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&t.width)>>8,255&t.width,0,0,(65280&t.height)>>8,255&t.height,0,0]);return o(T.tkhd,e)},v=function(t){var e,i,r,n,s,a;return e=o(T.tfhd,new Uint8Array([0,0,0,58,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),s=Math.floor(t.baseMediaDecodeTime/(V+1)),a=Math.floor(t.baseMediaDecodeTime%(V+1)),i=o(T.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,a>>>24&255,a>>>16&255,a>>>8&255,255&a])),92,"audio"===t.type?(r=b(t,92),o(T.traf,e,i,r)):(n=m(t),r=b(t,n.length+92),o(T.traf,e,i,r,n))},c=function(t){return t.duration=t.duration||4294967295,o(T.trak,h(t),d(t))},_=function(t){var e=new Uint8Array([0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return"video"!==t.type&&(e[e.length-1]=0),o(T.trex,e)},j=function(t,e){var i=0,r=0,n=0,s=0;return t.length&&(void 0!==t[0].duration&&(i=1),void 0!==t[0].size&&(r=2),void 0!==t[0].flags&&(n=4),void 0!==t[0].compositionTimeOffset&&(s=8)),[0,0,i|r|n|s,1,(4278190080&t.length)>>>24,(16711680&t.length)>>>16,(65280&t.length)>>>8,255&t.length,(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},B=function(t,e){var i,r,n,s;for(e+=20+16*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size,n.flags.isLeading<<2|n.flags.dependsOn,n.flags.isDependedOn<<6|n.flags.hasRedundancy<<4|n.flags.paddingValue<<1|n.flags.isNonSyncSample,61440&n.flags.degradationPriority,15&n.flags.degradationPriority,(4278190080&n.compositionTimeOffset)>>>24,(16711680&n.compositionTimeOffset)>>>16,(65280&n.compositionTimeOffset)>>>8,255&n.compositionTimeOffset]);return o(T.trun,new Uint8Array(i))},N=function(t,e){var i,r,n,s;for(e+=20+8*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size]);return o(T.trun,new Uint8Array(i))},b=function(t,e){return"audio"===t.type?N(t,e):B(t,e)};var q={ftyp:n=function(){return o(T.ftyp,S,k,S,C)},mdat:function(t){return o(T.mdat,t)},moof:t,moov:a,initSegment:function(t){var e,i=n(),r=a(t);return(e=new Uint8Array(i.byteLength+r.byteLength)).set(i),e.set(r,i.byteLength),e}},W=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};W.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},W.prototype.push=function(t){this.trigger("data",t)},W.prototype.flush=function(t){this.trigger("done",t)};var z=W,G=function t(){t.prototype.init.call(this),this.captionPackets_=[],this.ccStreams_=[new Q(0,0),new Q(0,1),new Q(1,0),new Q(1,1)],this.reset(),this.ccStreams_.forEach(function(t){t.on("data",this.trigger.bind(this,"data")),t.on("done",this.trigger.bind(this,"done"))},this)};(G.prototype=new z).push=function(t){var e,i,r;if("sei_rbsp"===t.nalUnitType&&(4===(e=function(t){for(var e=0,i={payloadType:-1,payloadSize:0},r=0,n=0;e<t.byteLength&&128!==t[e];){for(;255===t[e];)r+=255,e++;for(r+=t[e++];255===t[e];)n+=255,e++;if(n+=t[e++],!i.payload&&4===r){i.payloadType=r,i.payloadSize=n,i.payload=t.subarray(e,e+n);break}e+=n,n=r=0}return i}(t.escapedRBSP)).payloadType&&(i=181!==(r=e).payload[0]?null:49!=(r.payload[1]<<8|r.payload[2])?null:"GA94"!==String.fromCharCode(r.payload[3],r.payload[4],r.payload[5],r.payload[6])?null:3!==r.payload[7]?null:r.payload.subarray(8,r.payload.length-1))))if(t.dts<this.latestDts_)this.ignoreNextEqualDts_=!0;else{if(t.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1));this.captionPackets_=this.captionPackets_.concat(function(t,e){var i,r,n,s,a=[];if(!(64&e[0]))return a;for(r=31&e[0],i=0;i<r;i++)s={type:3&e[2+(n=3*i)],pts:t},4&e[n+2]&&(s.ccData=e[n+3]<<8|e[n+4],a.push(s));return a}(t.pts,i)),this.latestDts_!==t.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=t.dts}},G.prototype.flush=function(){this.captionPackets_.length?(this.captionPackets_.forEach(function(t,e){t.presortIndex=e}),this.captionPackets_.sort(function(t,e){return t.pts===e.pts?t.presortIndex-e.presortIndex:t.pts-e.pts}),this.captionPackets_.forEach(function(t){t.type<2&&this.dispatchCea608Packet(t)},this),this.captionPackets_.length=0,this.ccStreams_.forEach(function(t){t.flush()},this)):this.ccStreams_.forEach(function(t){t.flush()},this)},G.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach(function(t){t.reset()})},G.prototype.dispatchCea608Packet=function(t){this.setsChannel1Active(t)?this.activeCea608Channel_[t.type]=0:this.setsChannel2Active(t)&&(this.activeCea608Channel_[t.type]=1),null!==this.activeCea608Channel_[t.type]&&this.ccStreams_[(t.type<<1)+this.activeCea608Channel_[t.type]].push(t)},G.prototype.setsChannel1Active=function(t){return 4096==(30720&t.ccData)},G.prototype.setsChannel2Active=function(t){return 6144==(30720&t.ccData)};var X={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},Y=function(t){return null===t?"":(t=X[t]||t,String.fromCharCode(t))},$=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],K=function(){for(var t=[],e=15;e--;)t.push("");return t},Q=function t(e,i){t.prototype.init.call(this),this.field_=e||0,this.dataChannel_=i||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(t){var e,i,r,n,s;if((e=32639&t.ccData)!==this.lastControlCode_){if(4096==(61440&e)?this.lastControlCode_=e:e!==this.PADDING_&&(this.lastControlCode_=null),r=e>>>8,n=255&e,e!==this.PADDING_)if(e===this.RESUME_CAPTION_LOADING_)this.mode_="popOn";else if(e===this.END_OF_CAPTION_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=t.pts;else if(e===this.ROLL_UP_2_ROWS_)this.topRow_=13,this.mode_="rollUp";else if(e===this.ROLL_UP_3_ROWS_)this.topRow_=12,this.mode_="rollUp";else if(e===this.ROLL_UP_4_ROWS_)this.topRow_=11,this.mode_="rollUp";else if(e===this.CARRIAGE_RETURN_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),this.shiftRowsUp_(),this.startPts_=t.pts;else if(e===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[14]=this.nonDisplayed_[14].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1);else if(e===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(t.pts),this.displayed_=K();else if(e===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=K();else if(e===this.RESUME_DIRECT_CAPTIONING_)this.mode_="paintOn";else if(this.isSpecialCharacter(r,n))s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isExtCharacter(r,n))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1),s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isMidRowCode(r,n))this.clearFormatting(t.pts),this[this.mode_](t.pts," "),this.column_++,14==(14&n)&&this.addFormatting(t.pts,["i"]),1==(1&n)&&this.addFormatting(t.pts,["u"]);else if(this.isOffsetControlCode(r,n))this.column_+=3&n;else if(this.isPAC(r,n)){var a=$.indexOf(7968&e);a!==this.row_&&(this.clearFormatting(t.pts),this.row_=a),1&n&&-1===this.formatting_.indexOf("u")&&this.addFormatting(t.pts,["u"]),16==(16&e)&&(this.column_=4*((14&e)>>1)),this.isColorPAC(n)&&14==(14&n)&&this.addFormatting(t.pts,["i"])}else this.isNormalChar(r)&&(0===n&&(n=null),s=Y(r),s+=Y(n),this[this.mode_](t.pts,s),this.column_+=s.length)}else this.lastControlCode_=null}};Q.prototype=new z,Q.prototype.flushDisplayed=function(t){var e=this.displayed_.map(function(t){return t.trim()}).join("\n").replace(/^\n+|\n+$/g,"");e.length&&this.trigger("data",{startPts:this.startPts_,endPts:t,text:e,stream:this.name_})},Q.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=K(),this.nonDisplayed_=K(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.formatting_=[]},Q.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},Q.prototype.isSpecialCharacter=function(t,e){return t===this.EXT_&&48<=e&&e<=63},Q.prototype.isExtCharacter=function(t,e){return(t===this.EXT_+1||t===this.EXT_+2)&&32<=e&&e<=63},Q.prototype.isMidRowCode=function(t,e){return t===this.EXT_&&32<=e&&e<=47},Q.prototype.isOffsetControlCode=function(t,e){return t===this.OFFSET_&&33<=e&&e<=35},Q.prototype.isPAC=function(t,e){return t>=this.BASE_&&t<this.BASE_+8&&64<=e&&e<=127},Q.prototype.isColorPAC=function(t){return 64<=t&&t<=79||96<=t&&t<=127},Q.prototype.isNormalChar=function(t){return 32<=t&&t<=127},Q.prototype.addFormatting=function(t,e){this.formatting_=this.formatting_.concat(e);var i=e.reduce(function(t,e){return t+"<"+e+">"},"");this[this.mode_](t,i)},Q.prototype.clearFormatting=function(t){if(this.formatting_.length){var e=this.formatting_.reverse().reduce(function(t,e){return t+"</"+e+">"},"");this.formatting_=[],this[this.mode_](t,e)}},Q.prototype.popOn=function(t,e){var i=this.nonDisplayed_[this.row_];i+=e,this.nonDisplayed_[this.row_]=i},Q.prototype.rollUp=function(t,e){var i=this.displayed_[14];i+=e,this.displayed_[14]=i},Q.prototype.shiftRowsUp_=function(){var t;for(t=0;t<this.topRow_;t++)this.displayed_[t]="";for(t=this.topRow_;t<14;t++)this.displayed_[t]=this.displayed_[t+1];this.displayed_[14]=""},Q.prototype.paintOn=function(){};var J={CaptionStream:G,Cea608Stream:Q},Z={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},tt=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},et=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=tt(t.dts,r),t.pts=tt(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};et.prototype=new z;var it,rt=et,nt=function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n},st=function(t,e,i){return decodeURIComponent(nt(t,e,i))},at=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ot={TXXX:function(t){var e;if(3===t.data[0]){for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.value=st(t.data,e+1,t.data.length).replace(/\0*$/,"");break}t.data=t.value}},WXXX:function(t){var e;if(3===t.data[0])for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.url=st(t.data,e+1,t.data.length);break}},PRIV:function(t){var e,i;for(e=0;e<t.data.length;e++)if(0===t.data[e]){t.owner=(i=t.data,unescape(nt(i,0,e)));break}t.privateData=t.data.subarray(e+1),t.data=t.privateData}};(it=function(t){var e,u={debug:!(!t||!t.debug),descriptor:t&&t.descriptor},l=0,c=[],h=0;if(it.prototype.init.call(this),this.dispatchType=Z.METADATA_STREAM_TYPE.toString(16),u.descriptor)for(e=0;e<u.descriptor.length;e++)this.dispatchType+=("00"+u.descriptor[e].toString(16)).slice(-2);this.push=function(t){var e,i,r,n,s;if("timed-metadata"===t.type)if(t.dataAlignmentIndicator&&(h=0,c.length=0),0===c.length&&(t.data.length<10||t.data[0]!=="I".charCodeAt(0)||t.data[1]!=="D".charCodeAt(0)||t.data[2]!=="3".charCodeAt(0)))u.debug;else if(c.push(t),h+=t.data.byteLength,1===c.length&&(l=at(t.data.subarray(6,10)),l+=10),!(h<l)){for(e={data:new Uint8Array(l),frames:[],pts:c[0].pts,dts:c[0].dts},s=0;s<l;)e.data.set(c[0].data.subarray(0,l-s),s),s+=c[0].data.byteLength,h-=c[0].data.byteLength,c.shift();i=10,64&e.data[5]&&(i+=4,i+=at(e.data.subarray(10,14)),l-=at(e.data.subarray(16,20)));do{if((r=at(e.data.subarray(i+4,i+8)))<1)return;if((n={id:String.fromCharCode(e.data[i],e.data[i+1],e.data[i+2],e.data[i+3]),data:e.data.subarray(i+10,i+r+10)}).key=n.id,ot[n.id]&&(ot[n.id](n),"com.apple.streaming.transportStreamTimestamp"===n.owner)){var a=n.data,o=(1&a[3])<<30|a[4]<<22|a[5]<<14|a[6]<<6|a[7]>>>2;o*=4,o+=3&a[7],n.timeStamp=o,void 0===e.pts&&void 0===e.dts&&(e.pts=n.timeStamp,e.dts=n.timeStamp),this.trigger("timestamp",n)}e.frames.push(n),i+=10,i+=r}while(i<l);this.trigger("data",e)}}}).prototype=new z;var ut,lt,ct,ht=it,dt=rt;(ut=function(){var n=new Uint8Array(188),s=0;ut.prototype.init.call(this),this.push=function(t){var e,i=0,r=188;for(s?((e=new Uint8Array(t.byteLength+s)).set(n.subarray(0,s)),e.set(t,s),s=0):e=t;r<e.byteLength;)71!==e[i]||71!==e[r]?(i++,r++):(this.trigger("data",e.subarray(i,r)),i+=188,r+=188);i<e.byteLength&&(n.set(e.subarray(i),0),s=e.byteLength-i)},this.flush=function(){188===s&&71===n[0]&&(this.trigger("data",n),s=0),this.trigger("done")}}).prototype=new z,(lt=function(){var r,n,s,a;lt.prototype.init.call(this),(a=this).packetsWaitingForPmt=[],this.programMapTable=void 0,r=function(t,e){var i=0;e.payloadUnitStartIndicator&&(i+=t[i]+1),"pat"===e.type?n(t.subarray(i),e):s(t.subarray(i),e)},n=function(t,e){e.section_number=t[7],e.last_section_number=t[8],a.pmtPid=(31&t[10])<<8|t[11],e.pmtPid=a.pmtPid},s=function(t,e){var i,r;if(1&t[5]){for(a.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&t[1])<<8|t[2])-4,r=12+((15&t[10])<<8|t[11]);r<i;){var n=t[r],s=(31&t[r+1])<<8|t[r+2];n===Z.H264_STREAM_TYPE&&null===a.programMapTable.video?a.programMapTable.video=s:n===Z.ADTS_STREAM_TYPE&&null===a.programMapTable.audio?a.programMapTable.audio=s:n===Z.METADATA_STREAM_TYPE&&(a.programMapTable["timed-metadata"][s]=n),r+=5+((15&t[r+3])<<8|t[r+4])}e.programMapTable=a.programMapTable}},this.push=function(t){var e={},i=4;if(e.payloadUnitStartIndicator=!!(64&t[1]),e.pid=31&t[1],e.pid<<=8,e.pid|=t[2],1<(48&t[3])>>>4&&(i+=t[i]+1),0===e.pid)e.type="pat",r(t.subarray(i),e),this.trigger("data",e);else if(e.pid===this.pmtPid)for(e.type="pmt",r(t.subarray(i),e),this.trigger("data",e);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift());else void 0===this.programMapTable?this.packetsWaitingForPmt.push([t,i,e]):this.processPes_(t,i,e)},this.processPes_=function(t,e,i){i.pid===this.programMapTable.video?i.streamType=Z.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=Z.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=t.subarray(e),this.trigger("data",i)}}).prototype=new z,lt.STREAM_TYPES={h264:27,adts:15},(ct=function(){var d=this,r={data:[],size:0},n={data:[],size:0},s={data:[],size:0},a=function(t,e,i){var r,n,s=new Uint8Array(t.size),a={type:e},o=0,u=0;if(t.data.length&&!(t.size<9)){for(a.trackId=t.data[0].pid,o=0;o<t.data.length;o++)n=t.data[o],s.set(n.data,u),u+=n.data.byteLength;var l,c,h;l=s,(c=a).packetLength=6+(l[4]<<8|l[5]),c.dataAlignmentIndicator=0!=(4&l[6]),192&(h=l[7])&&(c.pts=(14&l[9])<<27|(255&l[10])<<20|(254&l[11])<<12|(255&l[12])<<5|(254&l[13])>>>3,c.pts*=4,c.pts+=(6&l[13])>>>1,c.dts=c.pts,64&h&&(c.dts=(14&l[14])<<27|(255&l[15])<<20|(254&l[16])<<12|(255&l[17])<<5|(254&l[18])>>>3,c.dts*=4,c.dts+=(6&l[18])>>>1)),c.data=l.subarray(9+l[8]),r="video"===e||a.packetLength<=t.size,(i||r)&&(t.size=0,t.data.length=0),r&&d.trigger("data",a)}};ct.prototype.init.call(this),this.push=function(i){({pat:function(){},pes:function(){var t,e;switch(i.streamType){case Z.H264_STREAM_TYPE:case Z.H264_STREAM_TYPE:t=r,e="video";break;case Z.ADTS_STREAM_TYPE:t=n,e="audio";break;case Z.METADATA_STREAM_TYPE:t=s,e="timed-metadata";break;default:return}i.payloadUnitStartIndicator&&a(t,e,!0),t.data.push(i),t.size+=i.data.byteLength},pmt:function(){var t={type:"metadata",tracks:[]},e=i.programMapTable;null!==e.video&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.video,codec:"avc",type:"video"}),null!==e.audio&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.audio,codec:"adts",type:"audio"}),d.trigger("data",t)}})[i.type]()},this.flush=function(){a(r,"video"),a(n,"audio"),a(s,"timed-metadata"),this.trigger("done")}}).prototype=new z;var pt={PAT_PID:0,MP2T_PACKET_LENGTH:188,TransportPacketStream:ut,TransportParseStream:lt,ElementaryStream:ct,TimestampRolloverStream:dt,CaptionStream:J.CaptionStream,Cea608Stream:J.Cea608Stream,MetadataStream:ht};for(var ft in Z)Z.hasOwnProperty(ft)&&(pt[ft]=Z[ft]);var mt,gt=pt,yt=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(mt=function(){var l;mt.prototype.init.call(this),this.push=function(t){var e,i,r,n,s,a,o=0,u=0;if("audio"===t.type)for(l?(n=l,(l=new Uint8Array(n.byteLength+t.data.byteLength)).set(n),l.set(t.data,n.byteLength)):l=t.data;o+5<l.length;)if(255===l[o]&&240==(246&l[o+1])){if(i=2*(1&~l[o+1]),e=(3&l[o+3])<<11|l[o+4]<<3|(224&l[o+5])>>5,a=9e4*(s=1024*(1+(3&l[o+6])))/yt[(60&l[o+2])>>>2],r=o+e,l.byteLength<r)return;if(this.trigger("data",{pts:t.pts+u*a,dts:t.dts+u*a,sampleCount:s,audioobjecttype:1+(l[o+2]>>>6&3),channelcount:(1&l[o+2])<<2|(192&l[o+3])>>>6,samplerate:yt[(60&l[o+2])>>>2],samplingfrequencyindex:(60&l[o+2])>>>2,samplesize:16,data:l.subarray(o+7+i,r)}),l.byteLength===r)return void(l=void 0);u++,l=l.subarray(r)}else o++},this.flush=function(){this.trigger("done")}}).prototype=new z;var vt,_t,bt,Tt=mt,St=function(r){var n=r.byteLength,s=0,a=0;this.length=function(){return 8*n},this.bitsAvailable=function(){return 8*n+a},this.loadWord=function(){var t=r.byteLength-n,e=new Uint8Array(4),i=Math.min(4,n);if(0===i)throw new Error("no bytes available");e.set(r.subarray(t,t+i)),s=new DataView(e.buffer).getUint32(0),a=8*i,n-=i},this.skipBits=function(t){var e;t<a||(t-=a,t-=8*(e=Math.floor(t/8)),n-=e,this.loadWord()),s<<=t,a-=t},this.readBits=function(t){var e=Math.min(a,t),i=s>>>32-e;return 0<(a-=e)?s<<=e:0<n&&this.loadWord(),0<(e=t-e)?i<<e|this.readBits(e):i},this.skipLeadingZeros=function(){var t;for(t=0;t<a;++t)if(0!=(s&2147483648>>>t))return s<<=t,a-=t,t;return this.loadWord(),t+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var t=this.skipLeadingZeros();return this.readBits(t+1)-1},this.readExpGolomb=function(){var t=this.readUnsignedExpGolomb();return 1&t?1+t>>>1:-1*(t>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()};(_t=function(){var i,r,n=0;_t.prototype.init.call(this),this.push=function(t){var e;for(r?((e=new Uint8Array(r.byteLength+t.data.byteLength)).set(r),e.set(t.data,r.byteLength),r=e):r=t.data;n<r.byteLength-3;n++)if(1===r[n+2]){i=n+5;break}for(;i<r.byteLength;)switch(r[i]){case 0:if(0!==r[i-1]){i+=2;break}if(0!==r[i-2]){i++;break}for(n+3!==i-2&&this.trigger("data",r.subarray(n+3,i-2));1!==r[++i]&&i<r.length;);n=i-2,i+=3;break;case 1:if(0!==r[i-1]||0!==r[i-2]){i+=3;break}this.trigger("data",r.subarray(n+3,i-2)),n=i-2,i+=3;break;default:i+=3}r=r.subarray(n),i-=n,n=0},this.flush=function(){r&&3<r.byteLength&&this.trigger("data",r.subarray(n+3)),r=null,n=0,this.trigger("done")}}).prototype=new z,bt={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(vt=function(){var i,r,n,s,a,o,_,e=new _t;vt.prototype.init.call(this),(i=this).push=function(t){"video"===t.type&&(r=t.trackId,n=t.pts,s=t.dts,e.push(t))},e.on("data",function(t){var e={trackId:r,pts:n,dts:s,data:t};switch(31&t[0]){case 5:e.nalUnitType="slice_layer_without_partitioning_rbsp_idr";break;case 6:e.nalUnitType="sei_rbsp",e.escapedRBSP=a(t.subarray(1));break;case 7:e.nalUnitType="seq_parameter_set_rbsp",e.escapedRBSP=a(t.subarray(1)),e.config=o(e.escapedRBSP);break;case 8:e.nalUnitType="pic_parameter_set_rbsp";break;case 9:e.nalUnitType="access_unit_delimiter_rbsp"}i.trigger("data",e)}),e.on("done",function(){i.trigger("done")}),this.flush=function(){e.flush()},_=function(t,e){var i,r=8,n=8;for(i=0;i<t;i++)0!==n&&(n=(r+e.readExpGolomb()+256)%256),r=0===n?r:n},a=function(t){for(var e,i,r=t.byteLength,n=[],s=1;s<r-2;)0===t[s]&&0===t[s+1]&&3===t[s+2]?(n.push(s+2),s+=2):s++;if(0===n.length)return t;e=r-n.length,i=new Uint8Array(e);var a=0;for(s=0;s<e;a++,s++)a===n[0]&&(a++,n.shift()),i[s]=t[a];return i},o=function(t){var e,i,r,n,s,a,o,u,l,c,h,d,p,f=0,m=0,g=0,y=0,v=1;if(i=(e=new St(t)).readUnsignedByte(),n=e.readUnsignedByte(),r=e.readUnsignedByte(),e.skipUnsignedExpGolomb(),bt[i]&&(3===(s=e.readUnsignedExpGolomb())&&e.skipBits(1),e.skipUnsignedExpGolomb(),e.skipUnsignedExpGolomb(),e.skipBits(1),e.readBoolean()))for(h=3!==s?8:12,p=0;p<h;p++)e.readBoolean()&&_(p<6?16:64,e);if(e.skipUnsignedExpGolomb(),0===(a=e.readUnsignedExpGolomb()))e.readUnsignedExpGolomb();else if(1===a)for(e.skipBits(1),e.skipExpGolomb(),e.skipExpGolomb(),o=e.readUnsignedExpGolomb(),p=0;p<o;p++)e.skipExpGolomb();if(e.skipUnsignedExpGolomb(),e.skipBits(1),u=e.readUnsignedExpGolomb(),l=e.readUnsignedExpGolomb(),0===(c=e.readBits(1))&&e.skipBits(1),e.skipBits(1),e.readBoolean()&&(f=e.readUnsignedExpGolomb(),m=e.readUnsignedExpGolomb(),g=e.readUnsignedExpGolomb(),y=e.readUnsignedExpGolomb()),e.readBoolean()&&e.readBoolean()){switch(e.readUnsignedByte()){case 1:d=[1,1];break;case 2:d=[12,11];break;case 3:d=[10,11];break;case 4:d=[16,11];break;case 5:d=[40,33];break;case 6:d=[24,11];break;case 7:d=[20,11];break;case 8:d=[32,11];break;case 9:d=[80,33];break;case 10:d=[18,11];break;case 11:d=[15,11];break;case 12:d=[64,33];break;case 13:d=[160,99];break;case 14:d=[4,3];break;case 15:d=[3,2];break;case 16:d=[2,1];break;case 255:d=[e.readUnsignedByte()<<8|e.readUnsignedByte(),e.readUnsignedByte()<<8|e.readUnsignedByte()]}d&&(v=d[0]/d[1])}return{profileIdc:i,levelIdc:r,profileCompatibility:n,width:Math.ceil((16*(u+1)-2*f-2*m)*v),height:(2-c)*(l+1)*16-2*g-2*y}}}).prototype=new z;var kt,Ct={H264Stream:vt,NalByteStream:_t};(kt=function(){var o=new Uint8Array,u=0;kt.prototype.init.call(this),this.setTimestamp=function(t){u=t},this.parseId3TagSize=function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},this.parseAdtsSize=function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},this.push=function(t){var e,i,r,n,s=0,a=0;for(o.length?(n=o.length,(o=new Uint8Array(t.byteLength+n)).set(o.subarray(0,n)),o.set(t,n)):o=t;3<=o.length-a;)if(o[a]!=="I".charCodeAt(0)||o[a+1]!=="D".charCodeAt(0)||o[a+2]!=="3".charCodeAt(0))if(!0&o[a]&&240==(240&o[a+1])){if(o.length-a<7)break;if((s=this.parseAdtsSize(o,a))>o.length)break;r={type:"audio",data:o.subarray(a,a+s),pts:u,dts:u},this.trigger("data",r),a+=s}else a++;else{if(o.length-a<10)break;if((s=this.parseId3TagSize(o,a))>o.length)break;i={type:"timed-metadata",data:o.subarray(a,a+s)},this.trigger("data",i),a+=s}e=o.length-a,o=0<e?o.subarray(a):new Uint8Array}}).prototype=new z;var Et,wt,At,Lt,Pt,Ot,xt,It,Dt,Rt,Mt,Ut,Nt,Bt,jt,Ft=kt,Ht=[33,16,5,32,164,27],Vt=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],qt=function(t){for(var e=[];t--;)e.push(0);return e},Wt={96000:[Ht,[227,64],qt(154),[56]],88200:[Ht,[231],qt(170),[56]],64000:[Ht,[248,192],qt(240),[56]],48000:[Ht,[255,192],qt(268),[55,148,128],qt(54),[112]],44100:[Ht,[255,192],qt(268),[55,163,128],qt(84),[112]],32000:[Ht,[255,192],qt(268),[55,234],qt(226),[112]],24000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,112],qt(126),[224]],16000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,255],qt(269),[223,108],qt(195),[1,192]],12000:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,253,128],qt(259),[56]],11025:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,255,192],qt(268),[55,175,128],qt(108),[112]],8000:[Vt,qt(268),[3,121,16],qt(47),[7]]},zt=(Et=Wt,Object.keys(Et).reduce(function(t,e){return t[e]=new Uint8Array(Et[e].reduce(function(t,e){return t.concat(e)},[])),t},{})),Gt=(wt=function(t){return 9e4*t},At=function(t,e){return t*e},Lt=function(t){return t/9e4},Pt=function(t,e){return t/e},function(t,e){return wt(Pt(t,e))}),Xt=function(t,e){return At(Lt(t),e)},Yt=Ct.H264Stream,$t=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],Kt=["width","height","profileIdc","levelIdc","profileCompatibility"];Rt=function(t){return t[0]==="I".charCodeAt(0)&&t[1]==="D".charCodeAt(0)&&t[2]==="3".charCodeAt(0)},Bt=function(t,e){var i;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0},jt=function(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e].data.byteLength;return i},(xt=function(n,s){var a=[],o=0,e=0,l=0,c=1/0;s=s||{},xt.prototype.init.call(this),this.push=function(e){Mt(n,e),n&&$t.forEach(function(t){n[t]=e[t]}),a.push(e)},this.setEarliestDts=function(t){e=t-n.timelineStartInfo.baseMediaDecodeTime},this.setVideoBaseMediaDecodeTime=function(t){c=t},this.setAudioAppendStart=function(t){l=t},this.flush=function(){var t,e,i,r;0!==a.length&&(t=this.trimAdtsFramesByEarliestDts_(a),n.baseMediaDecodeTime=Nt(n,s.keepOriginalTimestamps),this.prefixWithSilence_(n,t),n.samples=this.generateSampleTable_(t),i=q.mdat(this.concatenateFrameData_(t)),a=[],e=q.moof(o,[n]),r=new Uint8Array(e.byteLength+i.byteLength),o++,r.set(e),r.set(i,e.byteLength),Ut(n),this.trigger("data",{track:n,boxes:r})),this.trigger("done","AudioSegmentStream")},this.prefixWithSilence_=function(t,e){var i,r,n,s,a=0,o=0,u=0;if(e.length&&(i=Gt(t.baseMediaDecodeTime,t.samplerate),r=Math.ceil(9e4/(t.samplerate/1024)),l&&c&&(a=i-Math.max(l,c),u=(o=Math.floor(a/r))*r),!(o<1||45e3<u))){for((n=zt[t.samplerate])||(n=e[0].data),s=0;s<o;s++)e.splice(s,0,{data:n});t.baseMediaDecodeTime-=Math.floor(Xt(u,t.samplerate))}},this.trimAdtsFramesByEarliestDts_=function(t){return n.minSegmentDts>=e?t:(n.minSegmentDts=1/0,t.filter(function(t){return t.dts>=e&&(n.minSegmentDts=Math.min(n.minSegmentDts,t.dts),n.minSegmentPts=n.minSegmentDts,!0)}))},this.generateSampleTable_=function(t){var e,i,r=[];for(e=0;e<t.length;e++)i=t[e],r.push({size:i.data.byteLength,duration:1024});return r},this.concatenateFrameData_=function(t){var e,i,r=0,n=new Uint8Array(jt(t));for(e=0;e<t.length;e++)i=t[e],n.set(i.data,r),r+=i.data.byteLength;return n}}).prototype=new z,(Ot=function(o,u){var e,i,l=0,c=[],h=[];u=u||{},Ot.prototype.init.call(this),delete o.minPTS,this.gopCache_=[],this.push=function(t){Mt(o,t),"seq_parameter_set_rbsp"!==t.nalUnitType||e||(e=t.config,o.sps=[t.data],Kt.forEach(function(t){o[t]=e[t]},this)),"pic_parameter_set_rbsp"!==t.nalUnitType||i||(i=t.data,o.pps=[t.data]),c.push(t)},this.flush=function(){for(var t,e,i,r,n,s;c.length&&"access_unit_delimiter_rbsp"!==c[0].nalUnitType;)c.shift();if(0===c.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream");if(t=this.groupNalsIntoFrames_(c),(i=this.groupFramesIntoGops_(t))[0][0].keyFrame||((e=this.getGopForFusion_(c[0],o))?(i.unshift(e),i.byteLength+=e.byteLength,i.nalCount+=e.nalCount,i.pts=e.pts,i.dts=e.dts,i.duration+=e.duration):i=this.extendFirstKeyFrame_(i)),h.length){var a;if(!(a=u.alignGopsAtEnd?this.alignGopsAtEnd_(i):this.alignGopsAtStart_(i)))return this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream");Ut(o),i=a}Mt(o,i),o.samples=this.generateSampleTable_(i),n=q.mdat(this.concatenateNalData_(i)),o.baseMediaDecodeTime=Nt(o,u.keepOriginalTimestamps),this.trigger("processedGopsInfo",i.map(function(t){return{pts:t.pts,dts:t.dts,byteLength:t.byteLength}})),this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.trigger("baseMediaDecodeTime",o.baseMediaDecodeTime),this.trigger("timelineStartInfo",o.timelineStartInfo),r=q.moof(l,[o]),s=new Uint8Array(r.byteLength+n.byteLength),l++,s.set(r),s.set(n,r.byteLength),this.trigger("data",{track:o,boxes:s}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.resetStream_=function(){Ut(o),i=e=void 0},this.getGopForFusion_=function(t){var e,i,r,n,s,a=1/0;for(s=0;s<this.gopCache_.length;s++)r=(n=this.gopCache_[s]).gop,o.pps&&Bt(o.pps[0],n.pps[0])&&o.sps&&Bt(o.sps[0],n.sps[0])&&(r.dts<o.timelineStartInfo.dts||-1e4<=(e=t.dts-r.dts-r.duration)&&e<=45e3&&(!i||e<a)&&(i=n,a=e));return i?i.gop:null},this.extendFirstKeyFrame_=function(t){var e;return!t[0][0].keyFrame&&1<t.length&&(e=t.shift(),t.byteLength-=e.byteLength,t.nalCount-=e.nalCount,t[0][0].dts=e.dts,t[0][0].pts=e.pts,t[0][0].duration+=e.duration),t},this.groupNalsIntoFrames_=function(t){var e,i,r=[],n=[];for(e=r.byteLength=0;e<t.length;e++)"access_unit_delimiter_rbsp"===(i=t[e]).nalUnitType?(r.length&&(r.duration=i.dts-r.dts,n.push(r)),(r=[i]).byteLength=i.data.byteLength,r.pts=i.pts,r.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(r.keyFrame=!0),r.duration=i.dts-r.dts,r.byteLength+=i.data.byteLength,r.push(i));return n.length&&(!r.duration||r.duration<=0)&&(r.duration=n[n.length-1].duration),n.push(r),n},this.groupFramesIntoGops_=function(t){var e,i,r=[],n=[];for(r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=t[0].pts,r.dts=t[0].dts,n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=t[0].pts,n.dts=t[0].dts,e=0;e<t.length;e++)(i=t[e]).keyFrame?(r.length&&(n.push(r),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration),(r=[i]).nalCount=i.length,r.byteLength=i.byteLength,r.pts=i.pts,r.dts=i.dts,r.duration=i.duration):(r.duration+=i.duration,r.nalCount+=i.length,r.byteLength+=i.byteLength,r.push(i));return n.length&&r.duration<=0&&(r.duration=n[n.length-1].duration),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration,n.push(r),n},this.generateSampleTable_=function(t,e){var i,r,n,s,a,o=e||0,u=[];for(i=0;i<t.length;i++)for(s=t[i],r=0;r<s.length;r++)a=s[r],(n={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0}}).dataOffset=o,n.compositionTimeOffset=a.pts-a.dts,n.duration=a.duration,n.size=4*a.length,n.size+=a.byteLength,a.keyFrame&&(n.flags.dependsOn=2),o+=n.size,u.push(n);return u},this.concatenateNalData_=function(t){var e,i,r,n,s,a,o=0,u=t.byteLength,l=t.nalCount,c=new Uint8Array(u+4*l),h=new DataView(c.buffer);for(e=0;e<t.length;e++)for(n=t[e],i=0;i<n.length;i++)for(s=n[i],r=0;r<s.length;r++)a=s[r],h.setUint32(o,a.data.byteLength),o+=4,c.set(a.data,o),o+=a.data.byteLength;return c},this.alignGopsAtStart_=function(t){var e,i,r,n,s,a,o,u;for(s=t.byteLength,a=t.nalCount,o=t.duration,e=i=0;e<h.length&&i<t.length&&(r=h[e],n=t[i],r.pts!==n.pts);)n.pts>r.pts?e++:(i++,s-=n.byteLength,a-=n.nalCount,o-=n.duration);return 0===i?t:i===t.length?null:((u=t.slice(i)).byteLength=s,u.duration=o,u.nalCount=a,u.pts=u[0].pts,u.dts=u[0].dts,u)},this.alignGopsAtEnd_=function(t){var e,i,r,n,s,a,o;for(e=h.length-1,i=t.length-1,s=null,a=!1;0<=e&&0<=i;){if(r=h[e],n=t[i],r.pts===n.pts){a=!0;break}r.pts>n.pts?e--:(e===h.length-1&&(s=i),i--)}if(!a&&null===s)return null;if(0===(o=a?i:s))return t;var u=t.slice(o),l=u.reduce(function(t,e){return t.byteLength+=e.byteLength,t.duration+=e.duration,t.nalCount+=e.nalCount,t},{byteLength:0,duration:0,nalCount:0});return u.byteLength=l.byteLength,u.duration=l.duration,u.nalCount=l.nalCount,u.pts=u[0].pts,u.dts=u[0].dts,u},this.alignGopsWith=function(t){h=t}}).prototype=new z,Mt=function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts&&(t.timelineStartInfo.pts=e.pts),void 0===t.minSegmentPts?t.minSegmentPts=e.pts:t.minSegmentPts=Math.min(t.minSegmentPts,e.pts),void 0===t.maxSegmentPts?t.maxSegmentPts=e.pts:t.maxSegmentPts=Math.max(t.maxSegmentPts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts),void 0===t.minSegmentDts?t.minSegmentDts=e.dts:t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),void 0===t.maxSegmentDts?t.maxSegmentDts=e.dts:t.maxSegmentDts=Math.max(t.maxSegmentDts,e.dts))},Ut=function(t){delete t.minSegmentDts,delete t.maxSegmentDts,delete t.minSegmentPts,delete t.maxSegmentPts},Nt=function(t,e){var i,r=t.minSegmentDts;return e||(r-=t.timelineStartInfo.dts),i=t.timelineStartInfo.baseMediaDecodeTime,i+=r,i=Math.max(0,i),"audio"===t.type&&(i*=t.samplerate/9e4,i=Math.floor(i)),i},(Dt=function(t,e){this.numberOfTracks=0,this.metadataStream=e,"undefined"!=typeof t.remux?this.remuxTracks=!!t.remux:this.remuxTracks=!0,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,Dt.prototype.init.call(this),this.push=function(t){return t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):(this.pendingTracks.push(t.track),this.pendingBoxes.push(t.boxes),this.pendingBytes+=t.boxes.byteLength,"video"===t.track.type&&(this.videoTrack=t.track),void("audio"===t.track.type&&(this.audioTrack=t.track)))}}).prototype=new z,Dt.prototype.flush=function(t){var e,i,r,n,s=0,a={captions:[],captionStreams:{},metadata:[],info:{}},o=0;if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==t&&"AudioSegmentStream"!==t)return;if(this.remuxTracks)return;if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}for(this.videoTrack?(o=this.videoTrack.timelineStartInfo.pts,Kt.forEach(function(t){a.info[t]=this.videoTrack[t]},this)):this.audioTrack&&(o=this.audioTrack.timelineStartInfo.pts,$t.forEach(function(t){a.info[t]=this.audioTrack[t]},this)),1===this.pendingTracks.length?a.type=this.pendingTracks[0].type:a.type="combined",this.emittedTracks+=this.pendingTracks.length,r=q.initSegment(this.pendingTracks),a.initSegment=new Uint8Array(r.byteLength),a.initSegment.set(r),a.data=new Uint8Array(this.pendingBytes),n=0;n<this.pendingBoxes.length;n++)a.data.set(this.pendingBoxes[n],s),s+=this.pendingBoxes[n].byteLength;for(n=0;n<this.pendingCaptions.length;n++)(e=this.pendingCaptions[n]).startTime=e.startPts-o,e.startTime/=9e4,e.endTime=e.endPts-o,e.endTime/=9e4,a.captionStreams[e.stream]=!0,a.captions.push(e);for(n=0;n<this.pendingMetadata.length;n++)(i=this.pendingMetadata[n]).cueTime=i.pts-o,i.cueTime/=9e4,a.metadata.push(i);a.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",a),this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},(It=function(r){var n,s,a=this,i=!0;It.prototype.init.call(this),r=r||{},this.baseMediaDecodeTime=r.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var e={};(this.transmuxPipeline_=e).type="aac",e.metadataStream=new gt.MetadataStream,e.aacStream=new Ft,e.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),e.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),e.adtsStream=new Tt,e.coalesceStream=new Dt(r,e.metadataStream),e.headOfPipeline=e.aacStream,e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream),e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream),e.metadataStream.on("timestamp",function(t){e.aacStream.setTimestamp(t.timeStamp)}),e.aacStream.on("data",function(t){"timed-metadata"!==t.type||e.audioSegmentStream||(s=s||{timelineStartInfo:{baseMediaDecodeTime:a.baseMediaDecodeTime},codec:"adts",type:"audio"},e.coalesceStream.numberOfTracks++,e.audioSegmentStream=new xt(s,r),e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))}),e.coalesceStream.on("data",this.trigger.bind(this,"data")),e.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setupTsPipeline=function(){var i={};(this.transmuxPipeline_=i).type="ts",i.metadataStream=new gt.MetadataStream,i.packetStream=new gt.TransportPacketStream,i.parseStream=new gt.TransportParseStream,i.elementaryStream=new gt.ElementaryStream,i.videoTimestampRolloverStream=new gt.TimestampRolloverStream("video"),i.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),i.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),i.adtsStream=new Tt,i.h264Stream=new Yt,i.captionStream=new gt.CaptionStream,i.coalesceStream=new Dt(r,i.metadataStream),i.headOfPipeline=i.packetStream,i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream),i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream),i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream),i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream),i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream),i.elementaryStream.on("data",function(t){var e;if("metadata"===t.type){for(e=t.tracks.length;e--;)n||"video"!==t.tracks[e].type?s||"audio"!==t.tracks[e].type||((s=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime):(n=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime;n&&!i.videoSegmentStream&&(i.coalesceStream.numberOfTracks++,i.videoSegmentStream=new Ot(n,r),i.videoSegmentStream.on("timelineStartInfo",function(t){s&&(s.timelineStartInfo=t,i.audioSegmentStream.setEarliestDts(t.dts))}),i.videoSegmentStream.on("processedGopsInfo",a.trigger.bind(a,"gopInfo")),i.videoSegmentStream.on("baseMediaDecodeTime",function(t){s&&i.audioSegmentStream.setVideoBaseMediaDecodeTime(t)}),i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)),s&&!i.audioSegmentStream&&(i.coalesceStream.numberOfTracks++,i.audioSegmentStream=new xt(s,r),i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))}}),i.coalesceStream.on("data",this.trigger.bind(this,"data")),i.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setBaseMediaDecodeTime=function(t){var e=this.transmuxPipeline_;this.baseMediaDecodeTime=t,s&&(s.timelineStartInfo.dts=void 0,s.timelineStartInfo.pts=void 0,Ut(s),s.timelineStartInfo.baseMediaDecodeTime=t,e.audioTimestampRolloverStream&&e.audioTimestampRolloverStream.discontinuity()),n&&(e.videoSegmentStream&&(e.videoSegmentStream.gopCache_=[],e.videoTimestampRolloverStream.discontinuity()),n.timelineStartInfo.dts=void 0,n.timelineStartInfo.pts=void 0,Ut(n),e.captionStream.reset(),n.timelineStartInfo.baseMediaDecodeTime=t),e.timedMetadataTimestampRolloverStream&&e.timedMetadataTimestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(t){s&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)},this.alignGopsWith=function(t){n&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)},this.push=function(t){if(i){var e=Rt(t);e&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():e||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),i=!1}this.transmuxPipeline_.headOfPipeline.push(t)},this.flush=function(){i=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new z;var Qt={Transmuxer:It,VideoSegmentStream:Ot,AudioSegmentStream:xt,AUDIO_PROPERTIES:$t,VIDEO_PROPERTIES:Kt},Jt={generator:q,Transmuxer:Qt.Transmuxer,AudioSegmentStream:Qt.AudioSegmentStream,VideoSegmentStream:Qt.VideoSegmentStream},Zt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},te=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),ee=function(){function e(t){Zt(this,e),this.options=t||{},this.init()}return te(e,[{key:"init",value:function(){var t;this.transmuxer&&this.transmuxer.dispose(),this.transmuxer=new Jt.Transmuxer(this.options),(t=this.transmuxer).on("data",function(t){var e=t.initSegment;t.initSegment={data:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength};var i=t.data;t.data=i.buffer,H.postMessage({action:"data",segment:t,byteOffset:i.byteOffset,byteLength:i.byteLength},[t.data])}),t.captionStream&&t.captionStream.on("data",function(t){H.postMessage({action:"caption",data:t})}),t.on("done",function(t){H.postMessage({action:"done"})}),t.on("gopInfo",function(t){H.postMessage({action:"gopInfo",gopInfo:t})})}},{key:"push",value:function(t){var e=new Uint8Array(t.data,t.byteOffset,t.byteLength);this.transmuxer.push(e)}},{key:"reset",value:function(){this.init()}},{key:"setTimestampOffset",value:function(t){var e=t.timestampOffset||0;this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4*e))}},{key:"setAudioAppendStart",value:function(t){this.transmuxer.setAudioAppendStart(Math.ceil(9e4*t.appendStart))}},{key:"flush",value:function(t){this.transmuxer.flush()}},{key:"resetCaptions",value:function(){this.transmuxer.resetCaptions()}},{key:"alignGopsWith",value:function(t){this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())}}]),e}();new function(t){t.onmessage=function(t){"init"===t.data.action&&t.data.options?this.messageHandlers=new ee(t.data.options):(this.messageHandlers||(this.messageHandlers=new ee),t.data&&t.data.action&&"init"!==t.data.action&&this.messageHandlers[t.data.action]&&this.messageHandlers[t.data.action](t.data))}}(re)}()}),Mu=function(t){return/mp4a\.\d+.\d+/i.test(t)},Uu=function(t){return/avc1\.[\da-f]+/i.test(t)},Nu=function(t){return t.map(function(t){return t.replace(/avc1\.(\d+)\.(\d+)/i,function(t,e,i){return"avc1."+("00"+Number(e).toString(16)).slice(-2)+"00"+("00"+Number(i).toString(16)).slice(-2)})})},Bu=function(n){function s(t,e){y(this,s);var i=b(this,n.call(this,As.EventTarget));i.timestampOffset_=0,i.pendingBuffers_=[],i.bufferUpdating_=!1,i.mediaSource_=t,i.codecs_=e,i.audioCodec_=null,i.videoCodec_=null,i.audioDisabled_=!1,i.appendAudioInitSegment_=!0,i.gopBuffer_=[],i.timeMapping_=0,i.safeAppend_=11<=As.browser.IE_VERSION;var r={remux:!1,alignGopsAtEnd:i.safeAppend_};return i.codecs_.forEach(function(t){Mu(t)?i.audioCodec_=t:Uu(t)&&(i.videoCodec_=t)}),i.transmuxer_=new Ru,i.transmuxer_.postMessage({action:"init",options:r}),i.transmuxer_.onmessage=function(t){return"data"===t.data.action?i.data_(t):"done"===t.data.action?i.done_(t):"gopInfo"===t.data.action?i.appendGopInfo_(t):void 0},Object.defineProperty(i,"timestampOffset",{get:function(){return this.timestampOffset_},set:function(t){"number"==typeof t&&0<=t&&(this.timestampOffset_=t,this.appendAudioInitSegment_=!0,this.gopBuffer_.length=0,this.timeMapping_=0,this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:t}))}}),Object.defineProperty(i,"appendWindowStart",{get:function(){return(this.videoBuffer_||this.audioBuffer_).appendWindowStart},set:function(t){this.videoBuffer_&&(this.videoBuffer_.appendWindowStart=t),this.audioBuffer_&&(this.audioBuffer_.appendWindowStart=t)}}),Object.defineProperty(i,"updating",{get:function(){return!!(this.bufferUpdating_||!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.updating||this.videoBuffer_&&this.videoBuffer_.updating)}}),Object.defineProperty(i,"buffered",{get:function(){var t=null,e=null,i=0,r=[],n=[];if(!this.videoBuffer_&&!this.audioBuffer_)return As.createTimeRange();if(!this.videoBuffer_)return this.audioBuffer_.buffered;if(!this.audioBuffer_)return this.videoBuffer_.buffered;if(this.audioDisabled_)return this.videoBuffer_.buffered;if(0===this.videoBuffer_.buffered.length&&0===this.audioBuffer_.buffered.length)return As.createTimeRange();for(var s=this.videoBuffer_.buffered,a=this.audioBuffer_.buffered,o=s.length;o--;)r.push({time:s.start(o),type:"start"}),r.push({time:s.end(o),type:"end"});for(o=a.length;o--;)r.push({time:a.start(o),type:"start"}),r.push({time:a.end(o),type:"end"});for(r.sort(function(t,e){return t.time-e.time}),o=0;o<r.length;o++)"start"===r[o].type?2===++i&&(t=r[o].time):"end"===r[o].type&&1===--i&&(e=r[o].time),null!==t&&null!==e&&(n.push([t,e]),e=t=null);return As.createTimeRanges(n)}}),i}return _(s,n),s.prototype.data_=function(t){var e=t.data.segment;e.data=new Uint8Array(e.data,t.data.byteOffset,t.data.byteLength),e.initSegment=new Uint8Array(e.initSegment.data,e.initSegment.byteOffset,e.initSegment.byteLength),function(t,e,i){var r=e.player_;if(i.captions&&i.captions.length)for(var n in t.inbandTextTracks_||(t.inbandTextTracks_={}),i.captionStreams)if(!t.inbandTextTracks_[n]){r.tech_.trigger({type:"usage",name:"hls-608"});var s=r.textTracks().getTrackById(n);t.inbandTextTracks_[n]=s||r.addRemoteTextTrack({kind:"captions",id:n,label:n},!1).track}i.metadata&&i.metadata.length&&!t.metadataTrack_&&(t.metadataTrack_=r.addRemoteTextTrack({kind:"metadata",label:"Timed Metadata"},!1).track,t.metadataTrack_.inBandMetadataTrackDispatchType=i.metadata.dispatchType)}(this,this.mediaSource_,e),this.pendingBuffers_.push(e)},s.prototype.done_=function(t){"closed"!==this.mediaSource_.readyState?this.processPendingSegments_():this.pendingBuffers_.length=0},s.prototype.createRealSourceBuffers_=function(){var r=this,n=["audio","video"];n.forEach(function(e){if(r[e+"Codec_"]&&!r[e+"Buffer_"]){var i=null;if(r.mediaSource_[e+"Buffer_"])(i=r.mediaSource_[e+"Buffer_"]).updating=!1;else{var t=e+'/mp4;codecs="'+r[e+"Codec_"]+'"';i=function(t,e){var i=t.addSourceBuffer(e),r=Object.create(null);r.updating=!1,r.realBuffer_=i;var n=function(e){"function"==typeof i[e]?r[e]=function(){return i[e].apply(i,arguments)}:"undefined"==typeof r[e]&&Object.defineProperty(r,e,{get:function(){return i[e]},set:function(t){return i[e]=t}})};for(var s in i)n(s);return r}(r.mediaSource_.nativeMediaSource_,t),r.mediaSource_[e+"Buffer_"]=i}r[e+"Buffer_"]=i,["update","updatestart","updateend"].forEach(function(t){i.addEventListener(t,function(){if("audio"!==e||!r.audioDisabled_)return"updateend"===t&&(r[e+"Buffer_"].updating=!1),n.every(function(t){return!("audio"!==t||!r.audioDisabled_)||(e===t||!r[t+"Buffer_"]||!r[t+"Buffer_"].updating)})?r.trigger(t):void 0})})}})},s.prototype.appendBuffer=function(t){if(this.bufferUpdating_=!0,this.audioBuffer_&&this.audioBuffer_.buffered.length){var e=this.audioBuffer_.buffered;this.transmuxer_.postMessage({action:"setAudioAppendStart",appendStart:e.end(e.length-1)})}this.videoBuffer_&&this.transmuxer_.postMessage({action:"alignGopsWith",gopsToAlignWith:function(t,e,i){if(!e||!t.length)return[];var r=Math.ceil(9e4*(e.currentTime()-i+3)),n=void 0;for(n=0;n<t.length&&!(t[n].pts>r);n++);return t.slice(n)}(this.gopBuffer_,this.mediaSource_.player_,this.timeMapping_)}),this.transmuxer_.postMessage({action:"push",data:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength},[t.buffer]),this.transmuxer_.postMessage({action:"flush"})},s.prototype.appendGopInfo_=function(t){this.gopBuffer_=function(t,e,i){if(!e.length)return t;if(i)return e.slice();for(var r=e[0].pts,n=0;n<t.length&&!(t[n].pts>=r);n++);return t.slice(0,n).concat(e)}(this.gopBuffer_,t.data.gopInfo,this.safeAppend_)},s.prototype.remove=function(t,e){if(this.videoBuffer_&&(this.videoBuffer_.updating=!0,this.videoBuffer_.remove(t,e),this.gopBuffer_=function(t,e,i,r){for(var n=Math.ceil(9e4*(e-r)),s=Math.ceil(9e4*(i-r)),a=t.slice(),o=t.length;o--&&!(t[o].pts<=s););if(-1===o)return a;for(var u=o+1;u--&&!(t[u].pts<=n););return u=Math.max(u,0),a.splice(u,o-u+1),a}(this.gopBuffer_,t,e,this.timeMapping_)),!this.audioDisabled_&&this.audioBuffer_&&(this.audioBuffer_.updating=!0,this.audioBuffer_.remove(t,e)),bu(t,e,this.metadataTrack_),this.inbandTextTracks_)for(var i in this.inbandTextTracks_)bu(t,e,this.inbandTextTracks_[i])},s.prototype.processPendingSegments_=function(){var t={video:{segments:[],bytes:0},audio:{segments:[],bytes:0},captions:[],metadata:[]};t=this.pendingBuffers_.reduce(function(t,e){var i=e.type,r=e.data,n=e.initSegment;return t[i].segments.push(r),t[i].bytes+=r.byteLength,t[i].initSegment=n,e.captions&&(t.captions=t.captions.concat(e.captions)),e.info&&(t[i].info=e.info),e.metadata&&(t.metadata=t.metadata.concat(e.metadata)),t},t),this.videoBuffer_||this.audioBuffer_||(0===t.video.bytes&&(this.videoCodec_=null),0===t.audio.bytes&&(this.audioCodec_=null),this.createRealSourceBuffers_()),t.audio.info&&this.mediaSource_.trigger({type:"audioinfo",info:t.audio.info}),t.video.info&&this.mediaSource_.trigger({type:"videoinfo",info:t.video.info}),this.appendAudioInitSegment_&&(!this.audioDisabled_&&this.audioBuffer_&&(t.audio.segments.unshift(t.audio.initSegment),t.audio.bytes+=t.audio.initSegment.byteLength),this.appendAudioInitSegment_=!1);var e=!1;this.videoBuffer_&&t.video.bytes?(t.video.segments.unshift(t.video.initSegment),t.video.bytes+=t.video.initSegment.byteLength,this.concatAndAppendSegments_(t.video,this.videoBuffer_),Su(this,t.captions,t.metadata)):!this.videoBuffer_||!this.audioDisabled_&&this.audioBuffer_||(e=!0),!this.audioDisabled_&&this.audioBuffer_&&this.concatAndAppendSegments_(t.audio,this.audioBuffer_),this.pendingBuffers_.length=0,e&&this.trigger("updateend"),this.bufferUpdating_=!1},s.prototype.concatAndAppendSegments_=function(t,e){var i=0,r=void 0;if(t.bytes){r=new Uint8Array(t.bytes),t.segments.forEach(function(t){r.set(t,i),i+=t.byteLength});try{e.updating=!0,e.appendBuffer(r)}catch(t){this.mediaSource_.player_&&this.mediaSource_.player_.error({code:-3,type:"APPEND_BUFFER_ERR",message:t.message,originalError:t})}}},s.prototype.abort=function(){this.videoBuffer_&&this.videoBuffer_.abort(),!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.abort(),this.transmuxer_&&this.transmuxer_.postMessage({action:"reset"}),this.pendingBuffers_.length=0,this.bufferUpdating_=!1},s}(As.EventTarget),ju=function(e){function i(){y(this,i);var s=b(this,e.call(this)),t=void 0;for(t in s.nativeMediaSource_=new g.MediaSource,s.nativeMediaSource_)t in i.prototype||"function"!=typeof s.nativeMediaSource_[t]||(s[t]=s.nativeMediaSource_[t].bind(s.nativeMediaSource_));return s.duration_=NaN,Object.defineProperty(s,"duration",{get:function(){return this.duration_===1/0?this.duration_:this.nativeMediaSource_.duration},set:function(t){(this.duration_=t)===1/0||(this.nativeMediaSource_.duration=t)}}),Object.defineProperty(s,"seekable",{get:function(){return this.duration_===1/0?As.createTimeRanges([[0,this.nativeMediaSource_.duration]]):this.nativeMediaSource_.seekable}}),Object.defineProperty(s,"readyState",{get:function(){return this.nativeMediaSource_.readyState}}),Object.defineProperty(s,"activeSourceBuffers",{get:function(){return this.activeSourceBuffers_}}),s.sourceBuffers=[],s.activeSourceBuffers_=[],s.updateActiveSourceBuffers_=function(){if(s.activeSourceBuffers_.length=0,1===s.sourceBuffers.length){var t=s.sourceBuffers[0];return t.appendAudioInitSegment_=!0,t.audioDisabled_=!t.audioCodec_,void s.activeSourceBuffers_.push(t)}for(var i=!1,r=!0,e=0;e<s.player_.audioTracks().length;e++){var n=s.player_.audioTracks()[e];if(n.enabled&&"main"!==n.kind){r=!(i=!0);break}}s.sourceBuffers.forEach(function(t,e){if(t.appendAudioInitSegment_=!0,t.videoCodec_&&t.audioCodec_)t.audioDisabled_=i;else if(t.videoCodec_&&!t.audioCodec_)t.audioDisabled_=!0,r=!1;else if(!t.videoCodec_&&t.audioCodec_&&(t.audioDisabled_=e?r:!r,t.audioDisabled_))return;s.activeSourceBuffers_.push(t)})},s.onPlayerMediachange_=function(){s.sourceBuffers.forEach(function(t){t.appendAudioInitSegment_=!0})},s.onHlsReset_=function(){s.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.postMessage({action:"resetCaptions"})})},s.onHlsSegmentTimeMapping_=function(e){s.sourceBuffers.forEach(function(t){return t.timeMapping_=e.mapping})},["sourceopen","sourceclose","sourceended"].forEach(function(t){this.nativeMediaSource_.addEventListener(t,this.trigger.bind(this))},s),s.on("sourceopen",function(t){var e=p.querySelector('[src="'+s.url_+'"]');e&&(s.player_=As(e.parentNode),s.player_.tech_.on("hls-reset",s.onHlsReset_),s.player_.tech_.on("hls-segment-time-mapping",s.onHlsSegmentTimeMapping_),s.player_.audioTracks&&s.player_.audioTracks()&&(s.player_.audioTracks().on("change",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("addtrack",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("removetrack",s.updateActiveSourceBuffers_)),s.player_.on("mediachange",s.onPlayerMediachange_))}),s.on("sourceended",function(t){for(var e=Tu(s.duration),i=0;i<s.sourceBuffers.length;i++){var r=s.sourceBuffers[i],n=r.metadataTrack_&&r.metadataTrack_.cues;n&&n.length&&(n[n.length-1].endTime=e)}}),s.on("sourceclose",function(t){this.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.terminate()}),this.sourceBuffers.length=0,this.player_&&(this.player_.audioTracks&&this.player_.audioTracks()&&(this.player_.audioTracks().off("change",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("addtrack",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("removetrack",this.updateActiveSourceBuffers_)),this.player_.el_&&(this.player_.off("mediachange",this.onPlayerMediachange_),this.player_.tech_.off("hls-reset",this.onHlsReset_),this.player_.tech_.off("hls-segment-time-mapping",this.onHlsSegmentTimeMapping_)))}),s}return _(i,e),i.prototype.addSeekableRange_=function(t,e){var i=void 0;if(this.duration!==1/0)throw(i=new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name="InvalidStateError",i.code=11,i;(e>this.nativeMediaSource_.duration||isNaN(this.nativeMediaSource_.duration))&&(this.nativeMediaSource_.duration=e)},i.prototype.addSourceBuffer=function(t){var n,e,i=void 0,r=(n={type:"",parameters:{}},e=t.trim().split(";"),n.type=e.shift().trim(),e.forEach(function(t){var e=t.trim().split("=");if(1<e.length){var i=e[0].replace(/"/g,"").trim(),r=e[1].replace(/"/g,"").trim();n.parameters[i]=r}}),n);if(/^(video|audio)\/mp2t$/i.test(r.type)){var s=[];r.parameters&&r.parameters.codecs&&(s=r.parameters.codecs.split(","),s=(s=Nu(s)).filter(function(t){return Mu(t)||Uu(t)})),0===s.length&&(s=["avc1.4d400d","mp4a.40.2"]),i=new Bu(this,s),0!==this.sourceBuffers.length&&(this.sourceBuffers[0].createRealSourceBuffers_(),i.createRealSourceBuffers_(),this.sourceBuffers[0].audioDisabled_=!0)}else i=this.nativeMediaSource_.addSourceBuffer(t);return this.sourceBuffers.push(i),i},i}(As.EventTarget),Fu=0;As.mediaSources={};var Hu=function(t,e){var i=As.mediaSources[t];if(!i)throw new Error("Media Source not found (Video.js)");i.trigger({type:"sourceopen",swfId:e})},Vu=function(){return!!g.MediaSource&&!!g.MediaSource.isTypeSupported&&g.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')},qu=function(){if(this.MediaSource={open:Hu,supportsNativeMediaSources:Vu},Vu())return new ju;throw new Error("Cannot use create a virtual MediaSource for this video")};qu.open=Hu,qu.supportsNativeMediaSources=Vu;var Wu={createObjectURL:function(t){var e=void 0;return t instanceof ju?(e=g.URL.createObjectURL(t.nativeMediaSource_),t.url_=e):t instanceof ju?(e="blob:vjs-media-source/"+Fu,Fu++,As.mediaSources[e]=t,e):(e=g.URL.createObjectURL(t),t.url_=e)}};As.MediaSource=qu,As.URL=Wu;var zu=As.mergeOptions,Gu=function(t,e){for(var a=zu(t,{duration:e.duration,minimumUpdatePeriod:e.minimumUpdatePeriod}),i=0;i<e.playlists.length;i++){var r=Bo(a,e.playlists[i]);r&&(a=r)}return No(e,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n=t.playlists[0].uri,s=Bo(a,t.playlists[0]);s&&((a=s).mediaGroups[e][i][r].playlists[0]=a.playlists[n])}}),a},Xu=function(s){function a(t,e,i,r){y(this,a);var n=b(this,s.call(this));if(n.hls_=e,n.withCredentials=i,!t)throw new Error("A non-empty playlist URL or playlist is required");return n.on("minimumUpdatePeriod",function(){n.refreshXml_()}),n.on("mediaupdatetimeout",function(){n.refreshMedia_()}),"string"==typeof t?(n.srcUrl=t,n.state="HAVE_NOTHING",b(n)):(n.masterPlaylistLoader_=r,n.state="HAVE_METADATA",n.started=!0,n.media(t),g.setTimeout(function(){n.trigger("loadedmetadata")},0),n)}return _(a,s),a.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},a.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},a.prototype.media=function(t){if(!t)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var e=this.state;if("string"==typeof t){if(!this.master.playlists[t])throw new Error("Unknown playlist URI: "+t);t=this.master.playlists[t]}var i=!this.media_||t.uri!==this.media_.uri;this.state="HAVE_METADATA",i&&(this.media_&&this.trigger("mediachanging"),this.media_=t,this.refreshMedia_(),"HAVE_MASTER"!==e&&this.trigger("mediachange"))},a.prototype.pause=function(){this.stopRequest(),"HAVE_NOTHING"===this.state&&(this.started=!1)},a.prototype.load=function(){this.started?this.trigger("loadedplaylist"):this.start()},a.prototype.parseMasterXml=function(){var s=Sa(this.masterXml_,{manifestUri:this.srcUrl,clientOffset:this.clientOffset_});s.uri=this.srcUrl;for(var t=0;t<s.playlists.length;t++){var e="placeholder-uri-"+t;s.playlists[t].uri=e,s.playlists[e]=s.playlists[t]}return No(s,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n="placeholder-uri-"+e+"-"+i+"-"+r;t.playlists[0].uri=n,s.playlists[n]=t.playlists[0]}}),jo(s),Fo(s),s},a.prototype.start=function(){var i=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(i.request){if(i.request=null,t)return i.error={status:e.status,message:"DASH playlist request error at URL: "+i.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===i.state&&(i.started=!1),i.trigger("error");i.masterXml_=e.responseText,e.responseHeaders&&e.responseHeaders.date?i.masterLoaded_=Date.parse(e.responseHeaders.date):i.masterLoaded_=Date.now(),i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))}})},a.prototype.syncClientServerClock_=function(r){var n=this,s=ka(this.masterXml_);return null===s?(this.clientOffset_=this.masterLoaded_-Date.now(),r()):"DIRECT"===s.method?(this.clientOffset_=s.value-Date.now(),r()):void(this.request=this.hls_.xhr({uri:Ro(this.srcUrl,s.value),method:s.method,withCredentials:this.withCredentials},function(t,e){if(n.request){if(t)return n.clientOffset_=n.masterLoaded_-Date.now(),r();var i=void 0;i="HEAD"===s.method?e.responseHeaders&&e.responseHeaders.date?Date.parse(e.responseHeaders.date):n.masterLoaded_:Date.parse(e.responseText),n.clientOffset_=i-Date.now(),r()}}))},a.prototype.onClientServerClockSync_=function(){var t=this;this.master=this.parseMasterXml(),this.state="HAVE_MASTER",this.trigger("loadedplaylist"),this.media_||this.media(this.master.playlists[0]),g.setTimeout(function(){t.trigger("loadedmetadata")},0),this.master.minimumUpdatePeriod&&g.setTimeout(function(){t.trigger("minimumUpdatePeriod")},this.master.minimumUpdatePeriod)},a.prototype.refreshXml_=function(){var r=this;this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"DASH playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");r.masterXml_=e.responseText;var i=r.parseMasterXml();r.master=Gu(r.master,i),g.setTimeout(function(){r.trigger("minimumUpdatePeriod")},r.master.minimumUpdatePeriod)}})},a.prototype.refreshMedia_=function(){var t=this,e=void 0,i=void 0;this.masterPlaylistLoader_?(e=this.masterPlaylistLoader_.master,i=this.masterPlaylistLoader_.parseMasterXml()):(e=this.master,i=this.parseMasterXml());var r=Gu(e,i);r?(this.masterPlaylistLoader_?this.masterPlaylistLoader_.master=r:this.master=r,this.media_=r.playlists[this.media_.uri]):this.trigger("playlistunchanged"),this.media().endList||(this.mediaUpdateTimeout=g.setTimeout(function(){t.trigger("mediaupdatetimeout")},Ho(this.media(),!!r))),this.trigger("loadedplaylist")},a}(As.EventTarget),Yu=function(t){return As.log.debug?As.log.debug.bind(As,"VHS:",t+" >"):function(){}};function $u(){}var Ku=function(){function n(t,e,i,r){y(this,n),this.callbacks_=[],this.pendingCallback_=null,this.timestampOffset_=0,this.mediaSource=t,this.processedAppend_=!1,this.type_=i,this.mimeType_=e,this.logger_=Yu("SourceUpdater["+i+"]["+e+"]"),"closed"===t.readyState?t.addEventListener("sourceopen",this.createSourceBuffer_.bind(this,e,r)):this.createSourceBuffer_(e,r)}return n.prototype.createSourceBuffer_=function(t,e){var i=this;this.sourceBuffer_=this.mediaSource.addSourceBuffer(t),this.logger_("created SourceBuffer"),e&&(e.trigger("sourcebufferadded"),this.mediaSource.sourceBuffers.length<2)?e.on("sourcebufferadded",function(){i.start_()}):this.start_()},n.prototype.start_=function(){var e=this;this.started_=!0,this.onUpdateendCallback_=function(){var t=e.pendingCallback_;e.pendingCallback_=null,e.logger_("buffered ["+vu(e.buffered())+"]"),t&&t(),e.runCallback_()},this.sourceBuffer_.addEventListener("updateend",this.onUpdateendCallback_),this.runCallback_()},n.prototype.abort=function(t){var e=this;this.processedAppend_&&this.queueCallback_(function(){e.sourceBuffer_.abort()},t)},n.prototype.appendBuffer=function(t,e){var i=this;this.processedAppend_=!0,this.queueCallback_(function(){i.sourceBuffer_.appendBuffer(t)},e)},n.prototype.buffered=function(){return this.sourceBuffer_?this.sourceBuffer_.buffered:As.createTimeRanges()},n.prototype.remove=function(t,e){var i=this;this.processedAppend_&&this.queueCallback_(function(){i.logger_("remove ["+t+" => "+e+"]"),i.sourceBuffer_.remove(t,e)},$u)},n.prototype.updating=function(){return!this.sourceBuffer_||this.sourceBuffer_.updating||this.pendingCallback_},n.prototype.timestampOffset=function(t){var e=this;return"undefined"!=typeof t&&(this.queueCallback_(function(){e.sourceBuffer_.timestampOffset=t}),this.timestampOffset_=t),this.timestampOffset_},n.prototype.queueCallback_=function(t,e){this.callbacks_.push([t.bind(this),e]),this.runCallback_()},n.prototype.runCallback_=function(){var t=void 0;!this.updating()&&this.callbacks_.length&&this.started_&&(t=this.callbacks_.shift(),this.pendingCallback_=t[1],t[0]())},n.prototype.dispose=function(){this.sourceBuffer_.removeEventListener("updateend",this.onUpdateendCallback_),this.sourceBuffer_&&"open"===this.mediaSource.readyState&&this.sourceBuffer_.abort()},n}(),Qu={GOAL_BUFFER_LENGTH:30,MAX_GOAL_BUFFER_LENGTH:60,GOAL_BUFFER_LENGTH_RATE:1,BANDWIDTH_VARIANCE:1.2,BUFFER_LOW_WATER_LINE:0,MAX_BUFFER_LOW_WATER_LINE:30,BUFFER_LOW_WATER_LINE_RATE:1},Ju=2,Zu=-101,tl=-102,el=function(t){var e,i,r={};return t.byterange&&(r.Range=(e=t.byterange,i=e.offset+e.length-1,"bytes="+e.offset+"-"+i)),r},il=function(t){t.forEach(function(t){t.abort()})},rl=function(t,e){return e.timedout?{status:e.status,message:"HLS request timed-out at URL: "+e.uri,code:Zu,xhr:e}:e.aborted?{status:e.status,message:"HLS request aborted at URL: "+e.uri,code:tl,xhr:e}:t?{status:e.status,message:"HLS request errored at URL: "+e.uri,code:Ju,xhr:e}:null},nl=function(a,o,u){var l=[],c=0;return function(t,e){if(t&&(il(a),l.push(t)),(c+=1)===a.length){if(e.endOfAllRequests=Date.now(),0<l.length){var i=l.reduce(function(t,e){return e.code>t.code?e:t});return u(i,e)}return e.encryptedBytes?(n=e,s=u,(r=o).addEventListener("message",function t(e){if(e.data.source===n.requestId){r.removeEventListener("message",t);var i=e.data.decrypted;return n.bytes=new Uint8Array(i.bytes,i.byteOffset,i.byteLength),s(null,n)}}),void r.postMessage(cu({source:n.requestId,encrypted:n.encryptedBytes,key:n.key.bytes,iv:n.key.iv}),[n.encryptedBytes.buffer,n.key.bytes.buffer])):u(null,e)}var r,n,s}},sl=function(n,s){return function(t){var e,i,r;return n.stats=As.mergeOptions(n.stats,(i=(e=t).target,(r={bandwidth:1/0,bytesReceived:0,roundTripTime:Date.now()-i.requestTime||0}).bytesReceived=e.loaded,r.bandwidth=Math.floor(r.bytesReceived/r.roundTripTime*8*1e3),r)),!n.stats.firstBytesReceivedAt&&n.stats.bytesReceived&&(n.stats.firstBytesReceivedAt=Date.now()),s(t,n)}},al=function(t,e,i,r,n,s){var a,o,u,l,c=[],h=nl(c,i,s);if(r.key){var d=t(As.mergeOptions(e,{uri:r.key.resolvedUri,responseType:"arraybuffer"}),(a=r,o=h,function(t,e){var i=e.response,r=rl(t,e);if(r)return o(r,a);if(16!==i.byteLength)return o({status:e.status,message:"Invalid HLS key at URL: "+e.uri,code:Ju,xhr:e},a);var n=new DataView(i);return a.key.bytes=new Uint32Array([n.getUint32(0),n.getUint32(4),n.getUint32(8),n.getUint32(12)]),o(null,a)}));c.push(d)}if(r.map&&!r.map.bytes){var p=t(As.mergeOptions(e,{uri:r.map.resolvedUri,responseType:"arraybuffer",headers:el(r.map)}),(u=r,l=h,function(t,e){var i=e.response,r=rl(t,e);return r?l(r,u):0===i.byteLength?l({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Ju,xhr:e},u):(u.map.bytes=new Uint8Array(e.response),l(null,u))}));c.push(p)}var f,m,g=t(As.mergeOptions(e,{uri:r.resolvedUri,responseType:"arraybuffer",headers:el(r)}),(f=r,m=h,function(t,e){var i,r=e.response,n=rl(t,e);return n?m(n,f):0===r.byteLength?m({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Ju,xhr:e},f):(f.stats={bandwidth:(i=e).bandwidth,bytesReceived:i.bytesReceived||0,roundTripTime:i.roundTripTime||0},f.key?f.encryptedBytes=new Uint8Array(e.response):f.bytes=new Uint8Array(e.response),m(null,f))}));return g.addEventListener("progress",sl(r,n)),c.push(g),function(){return il(c)}},ol={videoCodec:"avc1",videoObjectTypeIndicator:".4d400d",audioProfile:"2"},ul=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i={codecCount:0};return i.codecCount=e.split(",").length,i.codecCount=i.codecCount||2,(t=/(^|\s|,)+(avc[13])([^ ,]*)/i.exec(e))&&(i.videoCodec=t[2],i.videoObjectTypeIndicator=t[3]),i.audioProfile=/(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(e),i.audioProfile=i.audioProfile&&i.audioProfile[2],i},ll=function(t,e,i){return t+"/"+e+'; codecs="'+i.filter(function(t){return!!t}).join(", ")+'"'},cl=function(t,e){var i,r,n=(i=e).segments&&i.segments.length&&i.segments[0].map?"mp4":"mp2t",s=(r=e.attributes||{}).CODECS?ul(r.CODECS):ol,a=e.attributes||{},o=!0,u=!1;if(!e)return[];if(t.mediaGroups.AUDIO&&a.AUDIO){var l=t.mediaGroups.AUDIO[a.AUDIO];if(l)for(var c in o=!(u=!0),l)if(!l[c].uri&&!l[c].playlists){o=!0;break}}u&&!s.audioProfile&&(o||(s.audioProfile=function(t,e){if(!t.mediaGroups.AUDIO||!e)return null;var i=t.mediaGroups.AUDIO[e];if(!i)return null;for(var r in i){var n=i[r];if(n.default&&n.playlists)return ul(n.playlists[0].attributes.CODECS).audioProfile}return null}(t,a.AUDIO)),s.audioProfile||(As.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),s.audioProfile=ol.audioProfile));var h={};s.videoCodec&&(h.video=""+s.videoCodec+s.videoObjectTypeIndicator),s.audioProfile&&(h.audio="mp4a.40."+s.audioProfile);var d=ll("audio",n,[h.audio]),p=ll("video",n,[h.video]),f=ll("video",n,[h.video,h.audio]);return u?!o&&h.video?[p,d]:o||h.video?[f,d]:[d,d]:h.video?[f]:[d]},hl=function(t,e){var i;return t&&(i=g.getComputedStyle(t))?i[e]:""},dl=function(t,r){var n=t.slice();t.sort(function(t,e){var i=r(t,e);return 0===i?n.indexOf(t)-n.indexOf(e):i})},pl=function(t,e){var i=void 0,r=void 0;return t.attributes.BANDWIDTH&&(i=t.attributes.BANDWIDTH),i=i||g.Number.MAX_VALUE,e.attributes.BANDWIDTH&&(r=e.attributes.BANDWIDTH),i-(r=r||g.Number.MAX_VALUE)},fl=function(t,e,i){if(!t||!e)return!1;var r=i===t.segments.length;return t.endList&&"open"===e.readyState&&r},ml=function(t){return"number"==typeof t&&isFinite(t)},gl=function(i){function r(t){y(this,r);var e=b(this,i.call(this));if(!t)throw new TypeError("Initialization settings are required");if("function"!=typeof t.currentTime)throw new TypeError("No currentTime getter specified");if(!t.mediaSource)throw new TypeError("No MediaSource specified");return e.bandwidth=t.bandwidth,e.throughput={rate:0,count:0},e.roundTrip=NaN,e.resetStats_(),e.mediaIndex=null,e.hasPlayed_=t.hasPlayed,e.currentTime_=t.currentTime,e.seekable_=t.seekable,e.seeking_=t.seeking,e.duration_=t.duration,e.mediaSource_=t.mediaSource,e.hls_=t.hls,e.loaderType_=t.loaderType,e.startingMedia_=void 0,e.segmentMetadataTrack_=t.segmentMetadataTrack,e.goalBufferLength_=t.goalBufferLength,e.sourceType_=t.sourceType,e.state_="INIT",e.checkBufferTimeout_=null,e.error_=void 0,e.currentTimeline_=-1,e.pendingSegment_=null,e.mimeType_=null,e.sourceUpdater_=null,e.xhrOptions_=null,e.activeInitSegmentId_=null,e.initSegments_={},e.decrypter_=t.decrypter,e.syncController_=t.syncController,e.syncPoint_={segmentIndex:0,time:0},e.syncController_.on("syncinfoupdate",function(){return e.trigger("syncinfoupdate")}),e.mediaSource_.addEventListener("sourceopen",function(){return e.ended_=!1}),e.fetchAtBuffer_=!1,e.logger_=Yu("SegmentLoader["+e.loaderType_+"]"),Object.defineProperty(e,"state",{get:function(){return this.state_},set:function(t){t!==this.state_&&(this.logger_(this.state_+" -> "+t),this.state_=t)}}),e}return _(r,i),r.prototype.resetStats_=function(){this.mediaBytesTransferred=0,this.mediaRequests=0,this.mediaRequestsAborted=0,this.mediaRequestsTimedout=0,this.mediaRequestsErrored=0,this.mediaTransferDuration=0,this.mediaSecondsLoaded=0},r.prototype.dispose=function(){this.state="DISPOSED",this.pause(),this.abort_(),this.sourceUpdater_&&this.sourceUpdater_.dispose(),this.resetStats_()},r.prototype.abort=function(){"WAITING"===this.state?(this.abort_(),this.state="READY",this.paused()||this.monitorBuffer_()):this.pendingSegment_&&(this.pendingSegment_=null)},r.prototype.abort_=function(){this.pendingSegment_&&this.pendingSegment_.abortRequests(),this.pendingSegment_=null},r.prototype.error=function(t){return"undefined"!=typeof t&&(this.error_=t),this.pendingSegment_=null,this.error_},r.prototype.endOfStream=function(){this.ended_=!0,this.pause(),this.trigger("ended")},r.prototype.buffered_=function(){return this.sourceUpdater_?this.sourceUpdater_.buffered():As.createTimeRanges()},r.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=hu(t),r=this.initSegments_[i];return e&&!r&&t.bytes&&(this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:t.bytes}),r||t},r.prototype.couldBeginLoading_=function(){return this.playlist_&&(this.sourceUpdater_||this.mimeType_&&"INIT"===this.state)&&!this.paused()},r.prototype.load=function(){if(this.monitorBuffer_(),this.playlist_){if(this.syncController_.setDateTimeMapping(this.playlist_),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();!this.couldBeginLoading_()||"READY"!==this.state&&"INIT"!==this.state||(this.state="READY")}},r.prototype.init_=function(){return this.state="READY",this.sourceUpdater_=new Ku(this.mediaSource_,this.mimeType_,this.loaderType_,this.sourceBufferEmitter_),this.resetEverything(),this.monitorBuffer_()},r.prototype.playlist=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(t){var i=this.playlist_,r=this.pendingSegment_;this.playlist_=t,this.xhrOptions_=e,this.hasPlayed_()||(t.syncInfo={mediaSequence:t.mediaSequence,time:0});var n=i?i.id:null;if(this.logger_("playlist update ["+n+" => "+t.id+"]"),this.trigger("syncinfoupdate"),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();if(i&&i.uri===t.uri){var s=t.mediaSequence-i.mediaSequence;this.logger_("live window shift ["+s+"]"),null!==this.mediaIndex&&(this.mediaIndex-=s),r&&(r.mediaIndex-=s,0<=r.mediaIndex&&(r.segment=t.segments[r.mediaIndex])),this.syncController_.saveExpiredSegmentInfo(i,t)}else null!==this.mediaIndex&&this.resyncLoader()}},r.prototype.pause=function(){this.checkBufferTimeout_&&(g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null)},r.prototype.paused=function(){return null===this.checkBufferTimeout_},r.prototype.mimeType=function(t,e){this.mimeType_||(this.mimeType_=t,this.sourceBufferEmitter_=e,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_())},r.prototype.resetEverything=function(){this.ended_=!1,this.resetLoader(),this.remove(0,this.duration_()),this.trigger("reseteverything")},r.prototype.resetLoader=function(){this.fetchAtBuffer_=!1,this.resyncLoader()},r.prototype.resyncLoader=function(){this.mediaIndex=null,this.syncPoint_=null,this.abort()},r.prototype.remove=function(t,e){this.sourceUpdater_&&this.sourceUpdater_.remove(t,e),bu(t,e,this.segmentMetadataTrack_)},r.prototype.monitorBuffer_=function(){this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),1)},r.prototype.monitorBufferTick_=function(){"READY"===this.state&&this.fillBuffer_(),this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),500)},r.prototype.fillBuffer_=function(){if(!this.sourceUpdater_.updating()){this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var t=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(t)fl(this.playlist_,this.mediaSource_,t.mediaIndex)?this.endOfStream():(t.mediaIndex!==this.playlist_.segments.length-1||"ended"!==this.mediaSource_.readyState||this.seeking_())&&((t.timeline!==this.currentTimeline_||null!==t.startOfSegment&&t.startOfSegment<this.sourceUpdater_.timestampOffset())&&(this.syncController_.reset(),t.timestampOffset=t.startOfSegment),this.loadSegment_(t))}},r.prototype.checkBuffer_=function(t,e,i,r,n,s){var a=0,o=void 0;t.length&&(a=t.end(t.length-1));var u=Math.max(0,a-n);if(!e.segments.length)return null;if(u>=this.goalBufferLength_())return null;if(!r&&1<=u)return null;if(null===s)return i=this.getSyncSegmentCandidate_(e),this.generateSegmentInfo_(e,i,null,!0);if(null!==i){var l=e.segments[i];return o=l&&l.end?l.end:a,this.generateSegmentInfo_(e,i+1,o,!1)}if(this.fetchAtBuffer_){var c=nu.getMediaInfoForTime(e,a,s.segmentIndex,s.time);i=c.mediaIndex,o=c.startTime}else{var h=nu.getMediaInfoForTime(e,n,s.segmentIndex,s.time);i=h.mediaIndex,o=h.startTime}return this.generateSegmentInfo_(e,i,o,!1)},r.prototype.getSyncSegmentCandidate_=function(t){var e=this;if(-1===this.currentTimeline_)return 0;var i=t.segments.map(function(t,e){return{timeline:t.timeline,segmentIndex:e}}).filter(function(t){return t.timeline===e.currentTimeline_});return i.length?i[Math.min(i.length-1,1)].segmentIndex:Math.max(t.segments.length-1,0)},r.prototype.generateSegmentInfo_=function(t,e,i,r){if(e<0||e>=t.segments.length)return null;var n=t.segments[e];return{requestId:"segment-loader-"+Math.random(),uri:n.resolvedUri,mediaIndex:e,isSyncRequest:r,startOfSegment:i,playlist:t,bytes:null,encryptedBytes:null,timestampOffset:null,timeline:n.timeline,duration:n.duration,segment:n}},r.prototype.abortRequestEarly_=function(t){if(this.hls_.tech_.paused()||!this.xhrOptions_.timeout||!this.playlist_.attributes.BANDWIDTH)return!1;if(Date.now()-(t.firstBytesReceivedAt||Date.now())<1e3)return!1;var e=this.currentTime_(),i=t.bandwidth,r=this.pendingSegment_.duration,n=nu.estimateSegmentRequestTime(r,i,this.playlist_,t.bytesReceived),s=function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return((t.length?t.end(t.length-1):0)-e)/i}(this.buffered_(),e,this.hls_.tech_.playbackRate())-1;if(n<=s)return!1;var a=function(t){var e=t.master,i=t.currentTime,r=t.bandwidth,n=t.duration,s=t.segmentDuration,a=t.timeUntilRebuffer,o=t.currentTimeline,u=t.syncController,l=e.playlists.filter(function(t){return!nu.isIncompatible(t)}),c=l.filter(nu.isEnabled);c.length||(c=l.filter(function(t){return!nu.isDisabled(t)}));var h=c.filter(nu.hasAttribute.bind(null,"BANDWIDTH")).map(function(t){var e=u.getSyncPoint(t,n,o,i)?1:2;return{playlist:t,rebufferingImpact:nu.estimateSegmentRequestTime(s,r,t)*e-a}}),d=h.filter(function(t){return t.rebufferingImpact<=0});return dl(d,function(t,e){return pl(e.playlist,t.playlist)}),d.length?d[0]:(dl(h,function(t,e){return t.rebufferingImpact-e.rebufferingImpact}),h[0]||null)}({master:this.hls_.playlists.master,currentTime:e,bandwidth:i,duration:this.duration_(),segmentDuration:r,timeUntilRebuffer:s,currentTimeline:this.currentTimeline_,syncController:this.syncController_});if(a){var o=n-s-a.rebufferingImpact,u=.5;return s<=fu&&(u=1),!a.playlist||a.playlist.uri===this.playlist_.uri||o<u?!1:(this.bandwidth=a.playlist.attributes.BANDWIDTH*Qu.BANDWIDTH_VARIANCE+1,this.abort(),this.trigger("earlyabort"),!0)}},r.prototype.handleProgress_=function(t,e){this.pendingSegment_&&e.requestId===this.pendingSegment_.requestId&&!this.abortRequestEarly_(e.stats)&&this.trigger("progress")},r.prototype.loadSegment_=function(t){this.state="WAITING",this.pendingSegment_=t,this.trimBackBuffer_(t),t.abortRequests=al(this.hls_.xhr,this.xhrOptions_,this.decrypter_,this.createSimplifiedSegmentObj_(t),this.handleProgress_.bind(this),this.segmentRequestFinished_.bind(this))},r.prototype.trimBackBuffer_=function(t){var e,i,r,n,s=(e=this.seekable_(),i=this.currentTime_(),r=this.playlist_.targetDuration||10,n=void 0,n=e.length&&0<e.start(0)&&e.start(0)<i?e.start(0):i-30,Math.min(n,i-r));0<s&&this.remove(0,s)},r.prototype.createSimplifiedSegmentObj_=function(t){var e=t.segment,i={resolvedUri:e.resolvedUri,byterange:e.byterange,requestId:t.requestId};if(e.key){var r=e.key.iv||new Uint32Array([0,0,0,t.mediaIndex+t.playlist.mediaSequence]);i.key={resolvedUri:e.key.resolvedUri,iv:r}}return e.map&&(i.map=this.initSegment(e.map)),i},r.prototype.segmentRequestFinished_=function(t,e){if(this.mediaRequests+=1,e.stats&&(this.mediaBytesTransferred+=e.stats.bytesReceived,this.mediaTransferDuration+=e.stats.roundTripTime),this.pendingSegment_){if(e.requestId===this.pendingSegment_.requestId){if(t)return this.pendingSegment_=null,this.state="READY",t.code===tl?void(this.mediaRequestsAborted+=1):(this.pause(),t.code===Zu?(this.mediaRequestsTimedout+=1,this.bandwidth=1,this.roundTrip=NaN,void this.trigger("bandwidthupdate")):(this.mediaRequestsErrored+=1,this.error(t),void this.trigger("error")));this.bandwidth=e.stats.bandwidth,this.roundTrip=e.stats.roundTripTime,e.map&&(e.map=this.initSegment(e.map,!0)),this.processSegmentResponse_(e)}}else this.mediaRequestsAborted+=1},r.prototype.processSegmentResponse_=function(t){var e=this.pendingSegment_;e.bytes=t.bytes,t.map&&(e.segment.map.bytes=t.map.bytes),e.endOfAllRequests=t.endOfAllRequests,this.handleSegment_()},r.prototype.handleSegment_=function(){var t=this;if(this.pendingSegment_){var e=this.pendingSegment_,i=e.segment,r=this.syncController_.probeSegmentInfo(e);"undefined"==typeof this.startingMedia_&&r&&(r.containsAudio||r.containsVideo)&&(this.startingMedia_={containsAudio:r.containsAudio,containsVideo:r.containsVideo});var n,s,a,o=(n=this.loaderType_,s=this.startingMedia_,a=r,"main"===n&&s&&a?a.containsAudio||a.containsVideo?s.containsVideo&&!a.containsVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":!s.containsVideo&&a.containsVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null);if(o)return this.error({message:o,blacklistDuration:1/0}),void this.trigger("error");if(e.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");null!==e.timestampOffset&&e.timestampOffset!==this.sourceUpdater_.timestampOffset()&&(this.sourceUpdater_.timestampOffset(e.timestampOffset),this.trigger("timestampoffset"));var u,l,c,h,d,p,f,m,g,y,v,_=this.syncController_.mappingForTimeline(e.timeline);if(null!==_&&this.trigger({type:"segmenttimemapping",mapping:_}),this.state="APPENDING",i.map){var b=hu(i.map);if(!this.activeInitSegmentId_||this.activeInitSegmentId_!==b){var T=this.initSegment(i.map);this.sourceUpdater_.appendBuffer(T.bytes,function(){t.activeInitSegmentId_=b})}}e.byteLength=e.bytes.byteLength,"number"==typeof i.start&&"number"==typeof i.end?this.mediaSecondsLoaded+=i.end-i.start:this.mediaSecondsLoaded+=i.duration,this.logger_((l=(u=e).segment,c=l.start,h=l.end,d=u.playlist,p=d.mediaSequence,f=d.id,m=d.segments,g=void 0===m?[]:m,y=u.mediaIndex,v=u.timeline,["appending ["+y+"] of ["+p+", "+(p+g.length)+"] from playlist ["+f+"]","["+c+" => "+h+"] in timeline ["+v+"]"].join(" "))),this.sourceUpdater_.appendBuffer(e.bytes,this.handleUpdateEnd_.bind(this))}else this.state="READY"},r.prototype.handleUpdateEnd_=function(){if(!this.pendingSegment_)return this.state="READY",void(this.paused()||this.monitorBuffer_());var t=this.pendingSegment_,e=t.segment,i=null!==this.mediaIndex;(this.pendingSegment_=null,this.recordThroughput_(t),this.addSegmentMetadataCue_(t),this.state="READY",this.mediaIndex=t.mediaIndex,this.fetchAtBuffer_=!0,this.currentTimeline_=t.timeline,this.trigger("syncinfoupdate"),e.end&&this.currentTime_()-e.end>3*t.playlist.targetDuration)?this.resetEverything():(i&&this.trigger("bandwidthupdate"),this.trigger("progress"),fl(t.playlist,this.mediaSource_,t.mediaIndex+1)&&this.endOfStream(),this.paused()||this.monitorBuffer_())},r.prototype.recordThroughput_=function(t){var e=this.throughput.rate,i=Date.now()-t.endOfAllRequests+1,r=Math.floor(t.byteLength/i*8*1e3);this.throughput.rate+=(r-e)/++this.throughput.count},r.prototype.addSegmentMetadataCue_=function(t){if(this.segmentMetadataTrack_){var e=t.segment,i=e.start,r=e.end;if(ml(i)&&ml(r)){bu(i,r,this.segmentMetadataTrack_);var n=g.WebKitDataCue||g.VTTCue,s={bandwidth:t.playlist.attributes.BANDWIDTH,resolution:t.playlist.attributes.RESOLUTION,codecs:t.playlist.attributes.CODECS,byteLength:t.byteLength,uri:t.uri,timeline:t.timeline,playlist:t.playlist.uri,start:i,end:r},a=new n(i,r,JSON.stringify(s));a.value=s,this.segmentMetadataTrack_.addCue(a)}}},r}(As.EventTarget),yl=new Uint8Array("\n\n".split("").map(function(t){return t.charCodeAt(0)})),vl=function(t){return String.fromCharCode.apply(null,t)},_l=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.mediaSource_=null,i.subtitlesTrack_=null,i}return _(n,r),n.prototype.buffered_=function(){if(!this.subtitlesTrack_||!this.subtitlesTrack_.cues.length)return As.createTimeRanges();var t=this.subtitlesTrack_.cues,e=t[0].startTime,i=t[t.length-1].startTime;return As.createTimeRanges([[e,i]])},n.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=hu(t),r=this.initSegments_[i];if(e&&!r&&t.bytes){var n=yl.byteLength+t.bytes.byteLength,s=new Uint8Array(n);s.set(t.bytes),s.set(yl,t.bytes.byteLength),this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:s}}return r||t},n.prototype.couldBeginLoading_=function(){return this.playlist_&&this.subtitlesTrack_&&!this.paused()},n.prototype.init_=function(){return this.state="READY",this.resetEverything(),this.monitorBuffer_()},n.prototype.track=function(t){return"undefined"==typeof t||(this.subtitlesTrack_=t,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_()),this.subtitlesTrack_},n.prototype.remove=function(t,e){bu(t,e,this.subtitlesTrack_)},n.prototype.fillBuffer_=function(){var t=this;this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var e=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(e=this.skipEmptySegments_(e)){if(null===this.syncController_.timestampOffsetForTimeline(e.timeline)){return this.syncController_.one("timestampoffset",function(){t.state="READY",t.paused()||t.monitorBuffer_()}),void(this.state="WAITING_ON_TIMELINE")}this.loadSegment_(e)}},n.prototype.skipEmptySegments_=function(t){for(;t&&t.segment.empty;)t=this.generateSegmentInfo_(t.playlist,t.mediaIndex+1,t.startOfSegment+t.duration,t.isSyncRequest);return t},n.prototype.handleSegment_=function(){var e=this;if(this.pendingSegment_&&this.subtitlesTrack_){this.state="APPENDING";var t=this.pendingSegment_,i=t.segment;if("function"!=typeof g.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_){var r=function(){e.handleSegment_()};return this.state="WAITING_ON_VTTJS",this.subtitlesTrack_.tech_.one("vttjsloaded",r),void this.subtitlesTrack_.tech_.one("vttjserror",function(){e.subtitlesTrack_.tech_.off("vttjsloaded",r),e.error({message:"Error loading vtt.js"}),e.state="READY",e.pause(),e.trigger("error")})}i.requested=!0;try{this.parseVTTCues_(t)}catch(t){return this.error({message:t.message}),this.state="READY",this.pause(),this.trigger("error")}if(this.updateTimeMapping_(t,this.syncController_.timelines[t.timeline],this.playlist_),t.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");t.byteLength=t.bytes.byteLength,this.mediaSecondsLoaded+=i.duration,t.cues.length&&this.remove(t.cues[0].endTime,t.cues[t.cues.length-1].endTime),t.cues.forEach(function(t){e.subtitlesTrack_.addCue(t)}),this.handleUpdateEnd_()}else this.state="READY"},n.prototype.parseVTTCues_=function(e){var t=void 0,i=!1;"function"==typeof g.TextDecoder?t=new g.TextDecoder("utf8"):(t=g.WebVTT.StringDecoder(),i=!0);var r=new g.WebVTT.Parser(g,g.vttjs,t);if(e.cues=[],e.timestampmap={MPEGTS:0,LOCAL:0},r.oncue=e.cues.push.bind(e.cues),r.ontimestampmap=function(t){return e.timestampmap=t},r.onparsingerror=function(t){As.log.warn("Error encountered when parsing cues: "+t.message)},e.segment.map){var n=e.segment.map.bytes;i&&(n=vl(n)),r.parse(n)}var s=e.bytes;i&&(s=vl(s)),r.parse(s),r.flush()},n.prototype.updateTimeMapping_=function(t,e,i){var r=t.segment;if(e)if(t.cues.length){var n=t.timestampmap,s=n.MPEGTS/9e4-n.LOCAL+e.mapping;if(t.cues.forEach(function(t){t.startTime+=s,t.endTime+=s}),!i.syncInfo){var a=t.cues[0].startTime,o=t.cues[t.cues.length-1].startTime;i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:Math.min(a,o-r.duration)}}}else r.empty=!0},n}(gl),bl=function(t,e){for(var i=t.cues,r=0;r<i.length;r++){var n=i[r];if(e>=n.adStartTime&&e<=n.adEndTime)return n}return null},Tl=So,Sl=[{name:"VOD",run:function(t,e,i,r,n){if(i!==1/0){return{time:0,segmentIndex:0}}return null}},{name:"ProgramDateTime",run:function(t,e,i,r,n){if(!t.datetimeToDisplayTime)return null;var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.dateTimeObject){var c=l.dateTimeObject.getTime()/1e3+t.datetimeToDisplayTime,h=Math.abs(n-c);if(null!==o&&o<h)break;o=h,a={time:c,segmentIndex:u}}}return a}},{name:"Segment",run:function(t,e,i,r,n){var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.timeline===r&&"undefined"!=typeof l.start){var c=Math.abs(n-l.start);if(null!==o&&o<c)break;(!a||null===o||c<=o)&&(o=c,a={time:l.start,segmentIndex:u})}}return a}},{name:"Discontinuity",run:function(t,e,i,r,n){var s=null;if(n=n||0,e.discontinuityStarts&&e.discontinuityStarts.length)for(var a=null,o=0;o<e.discontinuityStarts.length;o++){var u=e.discontinuityStarts[o],l=e.discontinuitySequence+o+1,c=t.discontinuities[l];if(c){var h=Math.abs(n-c.time);if(null!==a&&a<h)break;(!s||null===a||h<=a)&&(a=h,s={time:c.time,segmentIndex:u})}}return s}},{name:"Playlist",run:function(t,e,i,r,n){return e.syncInfo?{time:e.syncInfo.time,segmentIndex:e.syncInfo.mediaSequence-e.mediaSequence}:null}}],kl=function(e){function i(){y(this,i);var t=b(this,e.call(this));return t.inspectCache_=void 0,t.timelines=[],t.discontinuities=[],t.datetimeToDisplayTime=null,t.logger_=Yu("SyncController"),t}return _(i,e),i.prototype.getSyncPoint=function(t,e,i,r){var n=this.runStrategies_(t,e,i,r);return n.length?this.selectSyncPoint_(n,{key:"time",value:r}):null},i.prototype.getExpiredTime=function(t,e){if(!t||!t.segments)return null;var i=this.runStrategies_(t,e,t.discontinuitySequence,0);if(!i.length)return null;var r=this.selectSyncPoint_(i,{key:"segmentIndex",value:0});return 0<r.segmentIndex&&(r.time*=-1),Math.abs(r.time+Go(t,r.segmentIndex,0))},i.prototype.runStrategies_=function(t,e,i,r){for(var n=[],s=0;s<Sl.length;s++){var a=Sl[s],o=a.run(this,t,e,i,r);o&&(o.strategy=a.name,n.push({strategy:a.name,syncPoint:o}))}return n},i.prototype.selectSyncPoint_=function(t,e){for(var i=t[0].syncPoint,r=Math.abs(t[0].syncPoint[e.key]-e.value),n=t[0].strategy,s=1;s<t.length;s++){var a=Math.abs(t[s].syncPoint[e.key]-e.value);a<r&&(r=a,i=t[s].syncPoint,n=t[s].strategy)}return this.logger_("syncPoint for ["+e.key+": "+e.value+"] chosen with strategy ["+n+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+"]"),i},i.prototype.saveExpiredSegmentInfo=function(t,e){for(var i=e.mediaSequence-t.mediaSequence-1;0<=i;i--){var r=t.segments[i];if(r&&"undefined"!=typeof r.start){e.syncInfo={mediaSequence:t.mediaSequence+i,time:r.start},this.logger_("playlist refresh sync: [time:"+e.syncInfo.time+", mediaSequence: "+e.syncInfo.mediaSequence+"]"),this.trigger("syncinfoupdate");break}}},i.prototype.setDateTimeMapping=function(t){if(!this.datetimeToDisplayTime&&t.segments&&t.segments.length&&t.segments[0].dateTimeObject){var e=t.segments[0].dateTimeObject.getTime()/1e3;this.datetimeToDisplayTime=-e}},i.prototype.reset=function(){this.inspectCache_=void 0},i.prototype.probeSegmentInfo=function(t){var e=t.segment,i=t.playlist,r=void 0;return(r=e.map?this.probeMp4Segment_(t):this.probeTsSegment_(t))&&this.calculateSegmentTimeMapping_(t,r)&&(this.saveDiscontinuitySyncInfo_(t),i.syncInfo||(i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:e.start})),r},i.prototype.probeMp4Segment_=function(t){var e=t.segment,i=La(e.map.bytes),r=Pa(i,t.bytes);return null!==t.timestampOffset&&(t.timestampOffset-=r),{start:r,end:r+e.duration}},i.prototype.probeTsSegment_=function(t){var e=Tl(t.bytes,this.inspectCache_),i=void 0,r=void 0;return e?(e.video&&2===e.video.length?(this.inspectCache_=e.video[1].dts,i=e.video[0].dtsTime,r=e.video[1].dtsTime):e.audio&&2===e.audio.length&&(this.inspectCache_=e.audio[1].dts,i=e.audio[0].dtsTime,r=e.audio[1].dtsTime),{start:i,end:r,containsVideo:e.video&&2===e.video.length,containsAudio:e.audio&&2===e.audio.length}):null},i.prototype.timestampOffsetForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].time},i.prototype.mappingForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].mapping},i.prototype.calculateSegmentTimeMapping_=function(t,e){var i=t.segment,r=this.timelines[t.timeline];if(null!==t.timestampOffset)r={time:t.startOfSegment,mapping:t.startOfSegment-e.start},this.timelines[t.timeline]=r,this.trigger("timestampoffset"),this.logger_("time mapping for timeline "+t.timeline+": [time: "+r.time+"] [mapping: "+r.mapping+"]"),i.start=t.startOfSegment,i.end=e.end+r.mapping;else{if(!r)return!1;i.start=e.start+r.mapping,i.end=e.end+r.mapping}return!0},i.prototype.saveDiscontinuitySyncInfo_=function(t){var e=t.playlist,i=t.segment;if(i.discontinuity)this.discontinuities[i.timeline]={time:i.start,accuracy:0};else if(e.discontinuityStarts&&e.discontinuityStarts.length)for(var r=0;r<e.discontinuityStarts.length;r++){var n=e.discontinuityStarts[r],s=e.discontinuitySequence+r+1,a=n-t.mediaIndex,o=Math.abs(a);if(!this.discontinuities[s]||this.discontinuities[s].accuracy>o){var u=void 0;u=a<0?i.start-Go(e,t.mediaIndex,n):i.end+Go(e,t.mediaIndex+1,n),this.discontinuities[s]={time:u,accuracy:o}}}},i}(As.EventTarget),Cl=new Pu("./decrypter-worker.worker.js",function(t,e){var i,s,h,r,n,d,p,g,a,l,y,o,u=this;i="undefined"!=typeof t?t:"undefined"!=typeof global?global:"undefined"!=typeof u?u:{},s="undefined"!=typeof t?t:"undefined"!=typeof i?i:"undefined"!=typeof u?u:{},h=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},d=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},p=null,g=function(){function c(t){h(this,c),p||(p=d()),this._tables=[[p[0][0].slice(),p[0][1].slice(),p[0][2].slice(),p[0][3].slice(),p[0][4].slice()],[p[1][0].slice(),p[1][1].slice(),p[1][2].slice(),p[1][3].slice(),p[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),a=function(){function t(){h(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),l=function(e){function i(){h(this,i);var t=n(this,e.call(this,a));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(a),y=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},o=function(){function u(t,e,i,r){h(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new l,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([y(s[o-4]),y(s[o-3]),y(s[o-2]),y(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new g(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=y(r[m]),d=y(r[m+1]),p=y(r[m+2]),f=y(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=y(a[m]^o),a[m+1]=y(a[m+1]^u),a[m+2]=y(a[m+2]^l),a[m+3]=y(a[m+3]^c),o=h,u=d,l=p,c=f;return s}(e,i,r);n.set(t,e.byteOffset)}},r(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),new function(t){t.onmessage=function(t){var n=t.data,e=new Uint8Array(n.encrypted.bytes,n.encrypted.byteOffset,n.encrypted.byteLength),i=new Uint32Array(n.key.bytes,n.key.byteOffset,n.key.byteLength/4),r=new Uint32Array(n.iv.bytes,n.iv.byteOffset,n.iv.byteLength/4);new o(e,i,r,function(t,e){var i,r;s.postMessage((i={source:n.source,decrypted:e},r={},Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r),[e.buffer])})}}(u)}),El=function(t,e){t.abort(),t.pause(),e&&e.activePlaylistLoader&&(e.activePlaylistLoader.pause(),e.activePlaylistLoader=null)},wl=function(t,e){(e.activePlaylistLoader=t).load()},Al={AUDIO:function(u,l){return function(){var t=l.segmentLoaders[u],e=l.mediaTypes[u],i=l.blacklistCurrentPlaylist;El(t,e);var r=e.activeTrack(),n=e.activeGroup(),s=(n.filter(function(t){return t.default})[0]||n[0]).id,a=e.tracks[s];if(r!==a){for(var o in As.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),e.tracks)e.tracks[o].enabled=e.tracks[o]===a;e.onTrackChanged()}else i({message:"Problem encountered loading the default audio track."})}},SUBTITLES:function(r,n){return function(){var t=n.segmentLoaders[r],e=n.mediaTypes[r];As.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),El(t,e);var i=e.activeTrack();i&&(i.mode="disabled"),e.onTrackChanged()}}},Ll={AUDIO:function(t,e,i){if(e){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Al[t](t,i))}},SUBTITLES:function(t,e,i){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t],a=i.mediaTypes[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),s.track(a.activeTrack()),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Al[t](t,i))}},Pl=function(e,i){return function(t){return t.attributes[e]===i}},Ol=function(e){return function(t){return t.resolvedUri===e}},xl={AUDIO:function(t,e){var i,r,n=e.hls,s=e.sourceType,a=e.segmentLoaders[t],o=e.requestOptions.withCredentials,u=e.master,l=u.mediaGroups,c=u.playlists,h=e.mediaTypes[t],d=h.groups,p=h.tracks,f=e.masterPlaylistLoader;for(var m in l[t]&&0!==Object.keys(l[t]).length||(l[t]={main:{default:{default:!0}}}),l[t]){d[m]||(d[m]=[]);var g=c.filter(Pl(t,m));for(var y in l[t][m]){var v=l[t][m][y];g.filter(Ol(v.resolvedUri)).length&&delete v.resolvedUri;var _=void 0;if(_=v.resolvedUri?new Vo(v.resolvedUri,n,o):v.playlists&&"dash"===s?new Xu(v.playlists[0],n,o,f):null,v=As.mergeOptions({id:y,playlistLoader:_},v),Ll[t](t,v.playlistLoader,e),d[m].push(v),"undefined"==typeof p[y]){var b=new As.AudioTrack({id:y,kind:(i=v,r=void 0,r=i.default?"main":"alternative",i.characteristics&&0<=i.characteristics.indexOf("public.accessibility.describes-video")&&(r="main-desc"),r),enabled:!1,language:v.language,default:v.default,label:y});p[y]=b}}}a.on("error",Al[t](t,e))},SUBTITLES:function(t,e){var i=e.tech,r=e.hls,n=e.sourceType,s=e.segmentLoaders[t],a=e.requestOptions.withCredentials,o=e.master.mediaGroups,u=e.mediaTypes[t],l=u.groups,c=u.tracks,h=e.masterPlaylistLoader;for(var d in o[t])for(var p in l[d]||(l[d]=[]),o[t][d])if(!o[t][d][p].forced){var f=o[t][d][p],m=void 0;if("hls"===n?m=new Vo(f.resolvedUri,r,a):"dash"===n&&(m=new Xu(f.playlists[0],r,a,h)),f=As.mergeOptions({id:p,playlistLoader:m},f),Ll[t](t,f.playlistLoader,e),l[d].push(f),"undefined"==typeof c[p]){var g=i.addRemoteTextTrack({id:p,kind:"subtitles",enabled:!1,language:f.language,label:p},!1).track;c[p]=g}}s.on("error",Al[t](t,e))},"CLOSED-CAPTIONS":function(t,e){var i=e.tech,r=e.master.mediaGroups,n=e.mediaTypes[t],s=n.groups,a=n.tracks;for(var o in r[t])for(var u in s[o]||(s[o]=[]),r[t][o]){var l=r[t][o][u];if(l.instreamId.match(/CC\d/)&&(s[o].push(As.mergeOptions({id:u},l)),"undefined"==typeof a[u])){var c=i.addRemoteTextTrack({id:l.instreamId,kind:"captions",enabled:!1,language:l.language,label:u},!1).track;a[u]=c}}}},Il={AUDIO:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if(t[e].enabled)return t[e];return null}},SUBTITLES:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if("showing"===t[e].mode)return t[e];return null}}},Dl=function(e){["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){xl[t](t,e)});var i=e.mediaTypes,t=e.masterPlaylistLoader,r=e.tech,n=e.hls;["AUDIO","SUBTITLES"].forEach(function(t){var s,a,o,u,l,c;i[t].activeGroup=(s=t,a=e,function(e){var t=a.masterPlaylistLoader,i=a.mediaTypes[s].groups,r=t.media();if(!r)return null;var n=null;return r.attributes[s]&&(n=i[r.attributes[s]]),n=n||i.main,"undefined"==typeof e?n:null===e?null:n.filter(function(t){return t.id===e.id})[0]||null}),i[t].activeTrack=Il[t](t,e),i[t].onGroupChanged=(o=t,u=e,function(){var t=u.segmentLoaders,e=t[o],i=t.main,r=u.mediaTypes[o],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;El(e,r),s&&(s.playlistLoader?(e.resyncLoader(),wl(s.playlistLoader,r)):a&&i.resetEverything())}),i[t].onTrackChanged=(l=t,c=e,function(){var t=c.segmentLoaders,e=t[l],i=t.main,r=c.mediaTypes[l],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;El(e,r),s&&(s.playlistLoader?(a!==s.playlistLoader&&(e.track&&e.track(n),e.resetEverything()),wl(s.playlistLoader,r)):i.resetEverything())})});var s=i.AUDIO.activeGroup(),a=(s.filter(function(t){return t.default})[0]||s[0]).id;i.AUDIO.tracks[a].enabled=!0,i.AUDIO.onTrackChanged(),t.on("mediachange",function(){["AUDIO","SUBTITLES"].forEach(function(t){return i[t].onGroupChanged()})});var o=function(){i.AUDIO.onTrackChanged(),r.trigger({type:"usage",name:"hls-audio-change"})};for(var u in r.audioTracks().addEventListener("change",o),r.remoteTextTracks().addEventListener("change",i.SUBTITLES.onTrackChanged),n.on("dispose",function(){r.audioTracks().removeEventListener("change",o),r.remoteTextTracks().removeEventListener("change",i.SUBTITLES.onTrackChanged)}),r.clearTracks("audio"),i.AUDIO.tracks)r.audioTracks().addTrack(i.AUDIO.tracks[u])},Rl=function(){var e={};return["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){e[t]={groups:{},tracks:{},activePlaylistLoader:null,activeGroup:$u,activeTrack:$u,onGroupChanged:$u,onTrackChanged:$u}}),e},Ml=void 0,Ul=["mediaRequests","mediaRequestsAborted","mediaRequestsTimedout","mediaRequestsErrored","mediaTransferDuration","mediaBytesTransferred"],Nl=function(t){return this.audioSegmentLoader_[t]+this.mainSegmentLoader_[t]},Bl=function(d){function p(t){y(this,p);var e=b(this,d.call(this)),i=t.url,r=t.withCredentials,n=t.tech,s=t.bandwidth,a=t.externHls,o=t.useCueTags,u=t.blacklistDuration,l=t.enableLowInitialPlaylist,c=t.sourceType;if(!i)throw new Error("A non-empty playlist URL is required");Ml=a,e.withCredentials=r,e.tech_=n,e.hls_=n.hls,e.sourceType_=c,e.useCueTags_=o,e.blacklistDuration=u,e.enableLowInitialPlaylist=l,e.useCueTags_&&(e.cueTagsTrack_=e.tech_.addTextTrack("metadata","ad-cues"),e.cueTagsTrack_.inBandMetadataTrackDispatchType=""),e.requestOptions_={withCredentials:e.withCredentials,timeout:null},e.mediaTypes_=Rl(),e.mediaSource=new As.MediaSource,e.mediaSource.addEventListener("sourceopen",e.handleSourceOpen_.bind(e)),e.seekable_=As.createTimeRanges(),e.hasPlayed_=function(){return!1},e.syncController_=new kl(t),e.segmentMetadataTrack_=n.addRemoteTextTrack({kind:"metadata",label:"segment-metadata"},!1).track,e.decrypter_=new Cl;var h={hls:e.hls_,mediaSource:e.mediaSource,currentTime:e.tech_.currentTime.bind(e.tech_),seekable:function(){return e.seekable()},seeking:function(){return e.tech_.seeking()},duration:function(){return e.mediaSource.duration},hasPlayed:function(){return e.hasPlayed_()},goalBufferLength:function(){return e.goalBufferLength()},bandwidth:s,syncController:e.syncController_,decrypter:e.decrypter_,sourceType:e.sourceType_};return e.masterPlaylistLoader_="dash"===e.sourceType_?new Xu(i,e.hls_,e.withCredentials):new Vo(i,e.hls_,e.withCredentials),e.setupMasterPlaylistLoaderListeners_(),e.mainSegmentLoader_=new gl(As.mergeOptions(h,{segmentMetadataTrack:e.segmentMetadataTrack_,loaderType:"main"}),t),e.audioSegmentLoader_=new gl(As.mergeOptions(h,{loaderType:"audio"}),t),e.subtitleSegmentLoader_=new _l(As.mergeOptions(h,{loaderType:"vtt"}),t),e.setupSegmentLoaderListeners_(),Ul.forEach(function(t){e[t+"_"]=Nl.bind(e,t)}),e.logger_=Yu("MPC"),e.masterPlaylistLoader_.load(),e}return _(p,d),p.prototype.setupMasterPlaylistLoaderListeners_=function(){var r=this;this.masterPlaylistLoader_.on("loadedmetadata",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;ru(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,t.endList&&"none"!==r.tech_.preload()&&(r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load()),Dl({sourceType:r.sourceType_,segmentLoaders:{AUDIO:r.audioSegmentLoader_,SUBTITLES:r.subtitleSegmentLoader_,main:r.mainSegmentLoader_},tech:r.tech_,requestOptions:r.requestOptions_,masterPlaylistLoader:r.masterPlaylistLoader_,hls:r.hls_,master:r.master(),mediaTypes:r.mediaTypes_,blacklistCurrentPlaylist:r.blacklistCurrentPlaylist.bind(r)}),r.triggerPresenceUsage_(r.master(),t);try{r.setupSourceBuffers_()}catch(t){return As.log.warn("Failed to create SourceBuffers",t),r.mediaSource.endOfStream("decode")}r.setupFirstPlay(),r.trigger("selectedinitialmedia")}),this.masterPlaylistLoader_.on("loadedplaylist",function(){var t=r.masterPlaylistLoader_.media();if(!t){r.excludeUnsupportedVariants_();var e=void 0;return r.enableLowInitialPlaylist&&(e=r.selectInitialPlaylist()),e||(e=r.selectPlaylist()),r.initialMedia_=e,void r.masterPlaylistLoader_.media(r.initialMedia_)}if(r.useCueTags_&&r.updateAdCues_(t),r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.updateDuration(),r.tech_.paused()||r.mainSegmentLoader_.load(),!t.endList){var i=function(){var t=r.seekable();0!==t.length&&r.mediaSource.addSeekableRange_(t.start(0),t.end(0))};if(r.duration()!==1/0){r.tech_.one("durationchange",function t(){r.duration()===1/0?i():r.tech_.one("durationchange",t)})}else i()}}),this.masterPlaylistLoader_.on("error",function(){r.blacklistCurrentPlaylist(r.masterPlaylistLoader_.error)}),this.masterPlaylistLoader_.on("mediachanging",function(){r.mainSegmentLoader_.abort(),r.mainSegmentLoader_.pause()}),this.masterPlaylistLoader_.on("mediachange",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;ru(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load(),r.tech_.trigger({type:"mediachange",bubbles:!0})}),this.masterPlaylistLoader_.on("playlistunchanged",function(){var t=r.masterPlaylistLoader_.media();r.stuckAtPlaylistEnd_(t)&&(r.blacklistCurrentPlaylist({message:"Playlist no longer updating."}),r.tech_.trigger("playliststuck"))}),this.masterPlaylistLoader_.on("renditiondisabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-disabled"})}),this.masterPlaylistLoader_.on("renditionenabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-enabled"})})},p.prototype.triggerPresenceUsage_=function(t,e){var i=t.mediaGroups||{},r=!0,n=Object.keys(i.AUDIO);for(var s in i.AUDIO)for(var a in i.AUDIO[s]){i.AUDIO[s][a].uri||(r=!1)}r&&this.tech_.trigger({type:"usage",name:"hls-demuxed"}),Object.keys(i.SUBTITLES).length&&this.tech_.trigger({type:"usage",name:"hls-webvtt"}),Ml.Playlist.isAes(e)&&this.tech_.trigger({type:"usage",name:"hls-aes"}),Ml.Playlist.isFmp4(e)&&this.tech_.trigger({type:"usage",name:"hls-fmp4"}),n.length&&1<Object.keys(i.AUDIO[n[0]]).length&&this.tech_.trigger({type:"usage",name:"hls-alternate-audio"}),this.useCueTags_&&this.tech_.trigger({type:"usage",name:"hls-playlist-cue-tags"})},p.prototype.setupSegmentLoaderListeners_=function(){var s=this;this.mainSegmentLoader_.on("bandwidthupdate",function(){var t=s.selectPlaylist(),e=s.masterPlaylistLoader_.media(),i=s.tech_.buffered(),r=i.length?i.end(i.length-1)-s.tech_.currentTime():0,n=s.bufferLowWaterLine();(!e.endList||s.duration()<Qu.MAX_BUFFER_LOW_WATER_LINE||t.attributes.BANDWIDTH<e.attributes.BANDWIDTH||n<=r)&&s.masterPlaylistLoader_.media(t),s.tech_.trigger("bandwidthupdate")}),this.mainSegmentLoader_.on("progress",function(){s.trigger("progress")}),this.mainSegmentLoader_.on("error",function(){s.blacklistCurrentPlaylist(s.mainSegmentLoader_.error())}),this.mainSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("timestampoffset",function(){s.tech_.trigger({type:"usage",name:"hls-timestamp-offset"})}),this.audioSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("ended",function(){s.onEndOfStream()}),this.mainSegmentLoader_.on("earlyabort",function(){s.blacklistCurrentPlaylist({message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},120)}),this.mainSegmentLoader_.on("reseteverything",function(){s.tech_.trigger("hls-reset")}),this.mainSegmentLoader_.on("segmenttimemapping",function(t){s.tech_.trigger({type:"hls-segment-time-mapping",mapping:t.mapping})}),this.audioSegmentLoader_.on("ended",function(){s.onEndOfStream()})},p.prototype.mediaSecondsLoaded_=function(){return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)},p.prototype.load=function(){this.mainSegmentLoader_.load(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()},p.prototype.fastQualityChange_=function(){var t=this.selectPlaylist();t!==this.masterPlaylistLoader_.media()&&(this.masterPlaylistLoader_.media(t),this.mainSegmentLoader_.resetLoader())},p.prototype.play=function(){if(!this.setupFirstPlay()){this.tech_.ended()&&this.tech_.setCurrentTime(0),this.hasPlayed_()&&this.load();var t=this.tech_.seekable();return this.tech_.duration()===1/0&&this.tech_.currentTime()<t.start(0)?this.tech_.setCurrentTime(t.end(t.length-1)):void 0}},p.prototype.setupFirstPlay=function(){var t=this,e=this.masterPlaylistLoader_.media();if(!e||this.tech_.paused()||this.hasPlayed_())return!1;if(!e.endList){var i=this.seekable();if(!i.length)return!1;if(As.browser.IE_VERSION&&0===this.tech_.readyState())return this.tech_.one("loadedmetadata",function(){t.trigger("firstplay"),t.tech_.setCurrentTime(i.end(0)),t.hasPlayed_=function(){return!0}}),!1;this.trigger("firstplay"),this.tech_.setCurrentTime(i.end(0))}return this.hasPlayed_=function(){return!0},this.load(),!0},p.prototype.handleSourceOpen_=function(){try{this.setupSourceBuffers_()}catch(t){return As.log.warn("Failed to create Source Buffers",t),this.mediaSource.endOfStream("decode")}if(this.tech_.autoplay()){var t=this.tech_.play();"undefined"!=typeof t&&"function"==typeof t.then&&t.then(null,function(t){})}this.trigger("sourceopen")},p.prototype.onEndOfStream=function(){var t=this.mainSegmentLoader_.ended_;this.mediaTypes_.AUDIO.activePlaylistLoader&&(t=!this.mainSegmentLoader_.startingMedia_||this.mainSegmentLoader_.startingMedia_.containsVideo?t&&this.audioSegmentLoader_.ended_:this.audioSegmentLoader_.ended_),t&&this.mediaSource.endOfStream()},p.prototype.stuckAtPlaylistEnd_=function(t){if(!this.seekable().length)return!1;var e=this.syncController_.getExpiredTime(t,this.mediaSource.duration);if(null===e)return!1;var i=Ml.Playlist.playlistEnd(t,e),r=this.tech_.currentTime(),n=this.tech_.buffered();if(!n.length)return i-r<=.1;var s=n.end(n.length-1);return s-r<=.1&&i-s<=.1},p.prototype.blacklistCurrentPlaylist=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=void 0;if(r=e.playlist||this.masterPlaylistLoader_.media(),i=i||e.blacklistDuration||this.blacklistDuration,!r){this.error=e;try{return this.mediaSource.endOfStream("network")}catch(t){return this.trigger("error")}}var n=1===this.masterPlaylistLoader_.master.playlists.filter(eu).length;return n?(As.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."),this.tech_.trigger("retryplaylist"),this.masterPlaylistLoader_.load(n)):(r.excludeUntil=Date.now()+1e3*i,this.tech_.trigger("blacklistplaylist"),this.tech_.trigger({type:"usage",name:"hls-rendition-blacklisted"}),t=this.selectPlaylist(),As.log.warn("Problem encountered with the current HLS playlist."+(e.message?" "+e.message:"")+" Switching to another playlist."),this.masterPlaylistLoader_.media(t))},p.prototype.pauseLoading=function(){this.mainSegmentLoader_.pause(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.pause(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.pause()},p.prototype.setCurrentTime=function(t){var e=gu(this.tech_.buffered(),t);return this.masterPlaylistLoader_&&this.masterPlaylistLoader_.media()&&this.masterPlaylistLoader_.media().segments?e&&e.length?t:(this.mainSegmentLoader_.resetEverything(),this.mainSegmentLoader_.abort(),this.mediaTypes_.AUDIO.activePlaylistLoader&&(this.audioSegmentLoader_.resetEverything(),this.audioSegmentLoader_.abort()),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&(this.subtitleSegmentLoader_.resetEverything(),this.subtitleSegmentLoader_.abort()),void this.load()):0},p.prototype.duration=function(){return this.masterPlaylistLoader_?this.mediaSource?this.mediaSource.duration:Ml.Playlist.duration(this.masterPlaylistLoader_.media()):0},p.prototype.seekable=function(){return this.seekable_},p.prototype.onSyncInfoUpdate_=function(){var t=void 0,e=void 0;if(this.masterPlaylistLoader_){var i=this.masterPlaylistLoader_.media();if(i){var r=this.syncController_.getExpiredTime(i,this.mediaSource.duration);if(null!==r&&0!==(t=Ml.Playlist.seekable(i,r)).length){if(this.mediaTypes_.AUDIO.activePlaylistLoader){if(i=this.mediaTypes_.AUDIO.activePlaylistLoader.media(),null===(r=this.syncController_.getExpiredTime(i,this.mediaSource.duration)))return;if(0===(e=Ml.Playlist.seekable(i,r)).length)return}e?e.start(0)>t.end(0)||t.start(0)>e.end(0)?this.seekable_=t:this.seekable_=As.createTimeRanges([[e.start(0)>t.start(0)?e.start(0):t.start(0),e.end(0)<t.end(0)?e.end(0):t.end(0)]]):this.seekable_=t,this.logger_("seekable updated ["+vu(this.seekable_)+"]"),this.tech_.trigger("seekablechanged")}}}},p.prototype.updateDuration=function(){var e=this,t=this.mediaSource.duration,i=Ml.Playlist.duration(this.masterPlaylistLoader_.media()),r=this.tech_.buffered(),n=function t(){e.mediaSource.duration=i,e.tech_.trigger("durationchange"),e.mediaSource.removeEventListener("sourceopen",t)};0<r.length&&(i=Math.max(i,r.end(r.length-1))),t!==i&&("open"!==this.mediaSource.readyState?this.mediaSource.addEventListener("sourceopen",n):n())},p.prototype.dispose=function(){var r=this;this.decrypter_.terminate(),this.masterPlaylistLoader_.dispose(),this.mainSegmentLoader_.dispose(),["AUDIO","SUBTITLES"].forEach(function(t){var e=r.mediaTypes_[t].groups;for(var i in e)e[i].forEach(function(t){t.playlistLoader&&t.playlistLoader.dispose()})}),this.audioSegmentLoader_.dispose(),this.subtitleSegmentLoader_.dispose()},p.prototype.master=function(){return this.masterPlaylistLoader_.master},p.prototype.media=function(){return this.masterPlaylistLoader_.media()||this.initialMedia_},p.prototype.setupSourceBuffers_=function(){var t,e=this.masterPlaylistLoader_.media();if(e&&"open"===this.mediaSource.readyState){if((t=cl(this.masterPlaylistLoader_.master,e)).length<1)return this.error="No compatible SourceBuffer configuration for the variant stream:"+e.resolvedUri,this.mediaSource.endOfStream("decode");this.configureLoaderMimeTypes_(t),this.excludeIncompatibleVariants_(e)}},p.prototype.configureLoaderMimeTypes_=function(t){var e=1<t.length&&-1===t[0].indexOf(",")&&t[0]!==t[1]?new As.EventTarget:null;this.mainSegmentLoader_.mimeType(t[0],e),t[1]&&this.audioSegmentLoader_.mimeType(t[1],e)},p.prototype.excludeUnsupportedVariants_=function(){this.master().playlists.forEach(function(t){t.attributes.CODECS&&g.MediaSource&&g.MediaSource.isTypeSupported&&!g.MediaSource.isTypeSupported('video/mp4; codecs="'+t.attributes.CODECS.replace(/avc1\.(\d+)\.(\d+)/i,function(t){return Nu([t])[0]})+'"')&&(t.excludeUntil=1/0)})},p.prototype.excludeIncompatibleVariants_=function(t){var i=2,r=null,e=void 0;t.attributes.CODECS&&(e=ul(t.attributes.CODECS),r=e.videoCodec,i=e.codecCount),this.master().playlists.forEach(function(t){var e={codecCount:2,videoCodec:null};t.attributes.CODECS&&(e=ul(t.attributes.CODECS)),e.codecCount!==i&&(t.excludeUntil=1/0),e.videoCodec!==r&&(t.excludeUntil=1/0)})},p.prototype.updateAdCues_=function(t){var e=0,i=this.seekable();i.length&&(e=i.start(0)),function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;if(t.segments)for(var r=i,n=void 0,s=0;s<t.segments.length;s++){var a=t.segments[s];if(n||(n=bl(e,r+a.duration/2)),n){if("cueIn"in a){n.endTime=r,n.adEndTime=r,r+=a.duration,n=null;continue}if(r<n.endTime){r+=a.duration;continue}n.endTime+=a.duration}else if("cueOut"in a&&((n=new g.VTTCue(r,r+a.duration,a.cueOut)).adStartTime=r,n.adEndTime=r+parseFloat(a.cueOut),e.addCue(n)),"cueOutCont"in a){var o,u,l=a.cueOutCont.split("/").map(parseFloat);o=l[0],u=l[1],(n=new g.VTTCue(r,r+a.duration,"")).adStartTime=r-o,n.adEndTime=n.adStartTime+u,e.addCue(n)}r+=a.duration}}(t,this.cueTagsTrack_,e)},p.prototype.goalBufferLength=function(){var t=this.tech_.currentTime(),e=Qu.GOAL_BUFFER_LENGTH,i=Qu.GOAL_BUFFER_LENGTH_RATE,r=Math.max(e,Qu.MAX_GOAL_BUFFER_LENGTH);return Math.min(e+t*i,r)},p.prototype.bufferLowWaterLine=function(){var t=this.tech_.currentTime(),e=Qu.BUFFER_LOW_WATER_LINE,i=Qu.BUFFER_LOW_WATER_LINE_RATE,r=Math.max(e,Qu.MAX_BUFFER_LOW_WATER_LINE);return Math.min(e+t*i,r)},p}(As.EventTarget),jl=function t(e,i,r){y(this,t);var n,s,a,o=e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_);if(i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION;this.width=u.width,this.height=u.height}this.bandwidth=i.attributes.BANDWIDTH,this.id=r,this.enabled=(n=e.playlists,s=i.uri,a=o,function(t){var e=n.master.playlists[s],i=tu(e),r=eu(e);return"undefined"==typeof t?r:(t?delete e.disabled:e.disabled=!0,t===r||i||(a(),t?n.trigger("renditionenabled"):n.trigger("renditiondisabled")),t)})},Fl=["seeking","seeked","pause","playing","error"],Hl=function(){function a(t){var e=this;y(this,a),this.tech_=t.tech,this.seekable=t.seekable,this.consecutiveUpdates=0,this.lastRecordedTime=null,this.timer_=null,this.checkCurrentTimeTimeout_=null,this.logger_=Yu("PlaybackWatcher"),this.logger_("initialize");var i=function(){return e.monitorCurrentTime_()},r=function(){return e.techWaiting_()},n=function(){return e.cancelTimer_()},s=function(){return e.fixesBadSeeks_()};this.tech_.on("seekablechanged",s),this.tech_.on("waiting",r),this.tech_.on(Fl,n),this.tech_.on("canplay",i),this.dispose=function(){e.logger_("dispose"),e.tech_.off("seekablechanged",s),e.tech_.off("waiting",r),e.tech_.off(Fl,n),e.tech_.off("canplay",i),e.checkCurrentTimeTimeout_&&g.clearTimeout(e.checkCurrentTimeTimeout_),e.cancelTimer_()}}return a.prototype.monitorCurrentTime_=function(){this.checkCurrentTime_(),this.checkCurrentTimeTimeout_&&g.clearTimeout(this.checkCurrentTimeTimeout_),this.checkCurrentTimeTimeout_=g.setTimeout(this.monitorCurrentTime_.bind(this),250)},a.prototype.checkCurrentTime_=function(){if(this.tech_.seeking()&&this.fixesBadSeeks_())return this.consecutiveUpdates=0,void(this.lastRecordedTime=this.tech_.currentTime());if(!this.tech_.paused()&&!this.tech_.seeking()){var t=this.tech_.currentTime(),e=this.tech_.buffered();if(this.lastRecordedTime===t&&(!e.length||t+.1>=e.end(e.length-1)))return this.techWaiting_();5<=this.consecutiveUpdates&&t===this.lastRecordedTime?(this.consecutiveUpdates++,this.waiting_()):t===this.lastRecordedTime?this.consecutiveUpdates++:(this.consecutiveUpdates=0,this.lastRecordedTime=t)}},a.prototype.cancelTimer_=function(){this.consecutiveUpdates=0,this.timer_&&(this.logger_("cancelTimer_"),clearTimeout(this.timer_)),this.timer_=null},a.prototype.fixesBadSeeks_=function(){var t=this.tech_.seeking(),e=this.seekable(),i=this.tech_.currentTime(),r=void 0;t&&this.afterSeekableWindow_(e,i)&&(r=e.end(e.length-1));t&&this.beforeSeekableWindow_(e,i)&&(r=e.start(0)+.1);return"undefined"!=typeof r&&(this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+vu(e)+". Seeking to "+r+"."),this.tech_.setCurrentTime(r),!0)},a.prototype.waiting_=function(){if(!this.techWaiting_()){var t=this.tech_.currentTime(),e=this.tech_.buffered(),i=gu(e,t);return i.length&&t+3<=i.end(0)?(this.cancelTimer_(),this.tech_.setCurrentTime(t),this.logger_("Stopped at "+t+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time."),void this.tech_.trigger({type:"usage",name:"hls-unknown-waiting"})):void 0}},a.prototype.techWaiting_=function(){var t=this.seekable(),e=this.tech_.currentTime();if(this.tech_.seeking()&&this.fixesBadSeeks_())return!0;if(this.tech_.seeking()||null!==this.timer_)return!0;if(this.beforeSeekableWindow_(t,e)){var i=t.end(t.length-1);return this.logger_("Fell out of live window at time "+e+". Seeking to live point (seekable end) "+i),this.cancelTimer_(),this.tech_.setCurrentTime(i),this.tech_.trigger({type:"usage",name:"hls-live-resync"}),!0}var r=this.tech_.buffered(),n=yu(r,e);if(this.videoUnderflow_(n,r,e))return this.cancelTimer_(),this.tech_.setCurrentTime(e),this.tech_.trigger({type:"usage",name:"hls-video-underflow"}),!0;if(0<n.length){var s=n.start(0)-e;return this.logger_("Stopped at "+e+", setting timer for "+s+", seeking to "+n.start(0)),this.timer_=setTimeout(this.skipTheGap_.bind(this),1e3*s,e),!0}return!1},a.prototype.afterSeekableWindow_=function(t,e){return!!t.length&&e>t.end(t.length-1)+.1},a.prototype.beforeSeekableWindow_=function(t,e){return!!(t.length&&0<t.start(0)&&e<t.start(0)-.1)},a.prototype.videoUnderflow_=function(t,e,i){if(0===t.length){var r=this.gapFromVideoUnderflow_(e,i);if(r)return this.logger_("Encountered a gap in video from "+r.start+" to "+r.end+". Seeking to current time "+i),!0}return!1},a.prototype.skipTheGap_=function(t){var e=this.tech_.buffered(),i=this.tech_.currentTime(),r=yu(e,i);this.cancelTimer_(),0!==r.length&&i===t&&(this.logger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",t,"nextRange start:",r.start(0)),this.tech_.setCurrentTime(r.start(0)+fu),this.tech_.trigger({type:"usage",name:"hls-gap-skip"}))},a.prototype.gapFromVideoUnderflow_=function(t,e){for(var i=function(t){if(t.length<2)return As.createTimeRanges();for(var e=[],i=1;i<t.length;i++){var r=t.end(i-1),n=t.start(i);e.push([r,n])}return As.createTimeRanges(e)}(t),r=0;r<i.length;r++){var n=i.start(r),s=i.end(r);if(e-n<4&&2<e-n)return{start:n,end:s}}return null},a}(),Vl={errorInterval:30,getSource:function(t){return t(this.tech({IWillNotUseThisInPlugins:!0}).currentSource_)}},ql=function(t){!function e(i,t){var r=0,n=0,s=As.mergeOptions(Vl,t);i.ready(function(){i.trigger({type:"usage",name:"hls-error-reload-initialized"})});var a=function(){n&&i.currentTime(n)},o=function(t){null!=t&&(n=i.duration()!==1/0&&i.currentTime()||0,i.one("loadedmetadata",a),i.src(t),i.trigger({type:"usage",name:"hls-error-reload"}),i.play())},u=function(){if(Date.now()-r<1e3*s.errorInterval)i.trigger({type:"usage",name:"hls-error-reload-canceled"});else{if(s.getSource&&"function"==typeof s.getSource)return r=Date.now(),s.getSource.call(i,o);As.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")}},l=function t(){i.off("loadedmetadata",a),i.off("error",u),i.off("dispose",t)};i.on("error",u),i.on("dispose",l),i.reloadSourceOnError=function(t){l(),e(i,t)}}(this,t)},Wl={PlaylistLoader:Vo,Playlist:nu,Decrypter:Do,AsyncStream:Oo,decrypt:Io,utils:pu,STANDARD_PLAYLIST_SELECTOR:function(){return function(t,e,i,r){var n=t.playlists.map(function(t){var e,i;return e=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width,i=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.height,{bandwidth:t.attributes.BANDWIDTH||g.Number.MAX_VALUE,width:e,height:i,playlist:t}});dl(n,function(t,e){return t.bandwidth-e.bandwidth});var s=(n=n.filter(function(t){return!nu.isIncompatible(t.playlist)})).filter(function(t){return nu.isEnabled(t.playlist)});s.length||(s=n.filter(function(t){return!nu.isDisabled(t.playlist)}));var a=s.filter(function(t){return t.bandwidth*Qu.BANDWIDTH_VARIANCE<e}),o=a[a.length-1],u=a.filter(function(t){return t.bandwidth===o.bandwidth})[0],l=a.filter(function(t){return t.width&&t.height});dl(l,function(t,e){return t.width-e.width});var c=l.filter(function(t){return t.width===i&&t.height===r});o=c[c.length-1];var h=c.filter(function(t){return t.bandwidth===o.bandwidth})[0],d=void 0,p=void 0,f=void 0;h||(p=(d=l.filter(function(t){return t.width>i||t.height>r})).filter(function(t){return t.width===d[0].width&&t.height===d[0].height}),o=p[p.length-1],f=p.filter(function(t){return t.bandwidth===o.bandwidth})[0]);var m=f||h||u||s[0]||n[0];return m?m.playlist:null}(this.playlists.master,this.systemBandwidth,parseInt(hl(this.tech_.el(),"width"),10),parseInt(hl(this.tech_.el(),"height"),10))},INITIAL_PLAYLIST_SELECTOR:function(){var t=this.playlists.master.playlists.filter(nu.isEnabled);return dl(t,function(t,e){return pl(t,e)}),t.filter(function(t){return ul(t.attributes.CODECS).videoCodec})[0]||null},comparePlaylistBandwidth:pl,comparePlaylistResolution:function(t,e){var i=void 0,r=void 0;return t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(i=t.attributes.RESOLUTION.width),i=i||g.Number.MAX_VALUE,e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(r=e.attributes.RESOLUTION.width),i===(r=r||g.Number.MAX_VALUE)&&t.attributes.BANDWIDTH&&e.attributes.BANDWIDTH?t.attributes.BANDWIDTH-e.attributes.BANDWIDTH:i-r},xhr:ou()};["GOAL_BUFFER_LENGTH","MAX_GOAL_BUFFER_LENGTH","GOAL_BUFFER_LENGTH_RATE","BUFFER_LOW_WATER_LINE","MAX_BUFFER_LOW_WATER_LINE","BUFFER_LOW_WATER_LINE_RATE","BANDWIDTH_VARIANCE"].forEach(function(e){Object.defineProperty(Wl,e,{get:function(){return As.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),Qu[e]},set:function(t){As.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),"number"!=typeof t||t<0?As.log.warn("value of Hls."+e+" must be greater than or equal to 0"):Qu[e]=t}})});var zl=function(t){if(/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(t))return"hls";return/^application\/dash\+xml/i.test(t)?"dash":null},Gl=function(t,e){for(var i=e.media(),r=-1,n=0;n<t.length;n++)if(t[n].id===i.uri){r=n;break}t.selectedIndex_=r,t.trigger({selectedIndex:r,type:"change"})};Wl.canPlaySource=function(){return As.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Xl=function(t){if("dash"===t.options_.sourceType){var e=As.players[t.tech_.options_.playerId];if(e.eme){var i=function(t,e,i){if(!t)return t;var r={};for(var n in t)r[n]={audioContentType:'audio/mp4; codecs="'+i.attributes.CODECS+'"',videoContentType:'video/mp4; codecs="'+e.attributes.CODECS+'"'},e.contentProtection&&e.contentProtection[n]&&e.contentProtection[n].pssh&&(r[n].pssh=e.contentProtection[n].pssh),"string"==typeof t[n]&&(r[n].url=t[n]);return As.mergeOptions(t,r)}(t.source_.keySystems,t.playlists.media(),t.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());i&&(e.currentSource().keySystems=i)}}};Wl.supportsNativeHls=function(){var e=p.createElement("video");if(!As.getTech("Html5").isSupported())return!1;return["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some(function(t){return/maybe|probably/i.test(e.canPlayType(t))})}(),Wl.supportsNativeDash=!!As.getTech("Html5").isSupported()&&/maybe|probably/i.test(p.createElement("video").canPlayType("application/dash+xml")),Wl.supportsTypeNatively=function(t){return"hls"===t?Wl.supportsNativeHls:"dash"===t&&Wl.supportsNativeDash},Wl.isSupported=function(){return As.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Yl=function(s){function a(t,e,i){y(this,a);var r=b(this,s.call(this,e,i.hls));if(e.options_&&e.options_.playerId){var n=As(e.options_.playerId);n.hasOwnProperty("hls")||Object.defineProperty(n,"hls",{get:function(){return As.log.warn("player.hls is deprecated. Use player.tech_.hls instead."),e.trigger({type:"usage",name:"hls-player-access"}),r}}),n.vhs=r,n.dash=r}if(r.tech_=e,r.source_=t,r.stats={},r.ignoreNextSeekingEvent_=!1,r.setOptions_(),r.options_.overrideNative&&(e.featuresNativeVideoTracks||e.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");return r.on(p,["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(t){var e=p.fullscreenElement||p.webkitFullscreenElement||p.mozFullScreenElement||p.msFullscreenElement;e&&e.contains(r.tech_.el())&&r.masterPlaylistController_.fastQualityChange_()}),r.on(r.tech_,"seeking",function(){this.ignoreNextSeekingEvent_?this.ignoreNextSeekingEvent_=!1:this.setCurrentTime(this.tech_.currentTime())}),r.on(r.tech_,"error",function(){this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()}),r.on(r.tech_,"play",r.play),r}return _(a,s),a.prototype.setOptions_=function(){var e=this;this.options_.withCredentials=this.options_.withCredentials||!1,"number"!=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300),"number"!=typeof this.options_.bandwidth&&(this.options_.bandwidth=4194304),this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&4194304===this.options_.bandwidth,["withCredentials","bandwidth"].forEach(function(t){"undefined"!=typeof e.source_[t]&&(e.options_[t]=e.source_[t])}),this.bandwidth=this.options_.bandwidth},a.prototype.src=function(t,e){var r=this;t&&(this.setOptions_(),this.options_.url=this.source_.src,this.options_.tech=this.tech_,this.options_.externHls=Wl,this.options_.sourceType=zl(e),this.masterPlaylistController_=new Bl(this.options_),this.playbackWatcher_=new Hl(As.mergeOptions(this.options_,{seekable:function(){return r.seekable()}})),this.masterPlaylistController_.on("error",function(){As.players[r.tech_.options_.playerId].error(r.masterPlaylistController_.error)}),this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):Wl.STANDARD_PLAYLIST_SELECTOR.bind(this),this.masterPlaylistController_.selectInitialPlaylist=Wl.INITIAL_PLAYLIST_SELECTOR.bind(this),this.playlists=this.masterPlaylistController_.masterPlaylistLoader_,this.mediaSource=this.masterPlaylistController_.mediaSource,Object.defineProperties(this,{selectPlaylist:{get:function(){return this.masterPlaylistController_.selectPlaylist},set:function(t){this.masterPlaylistController_.selectPlaylist=t.bind(this)}},throughput:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=t,this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1}},bandwidth:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.bandwidth},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.bandwidth=t,this.masterPlaylistController_.mainSegmentLoader_.throughput={rate:0,count:0}}},systemBandwidth:{get:function(){var t=1/(this.bandwidth||1),e=void 0;return e=0<this.throughput?1/this.throughput:0,Math.floor(1/(t+e))},set:function(){As.log.error('The "systemBandwidth" property is read-only')}}}),Object.defineProperties(this.stats,{bandwidth:{get:function(){return r.bandwidth||0},enumerable:!0},mediaRequests:{get:function(){return r.masterPlaylistController_.mediaRequests_()||0},enumerable:!0},mediaRequestsAborted:{get:function(){return r.masterPlaylistController_.mediaRequestsAborted_()||0},enumerable:!0},mediaRequestsTimedout:{get:function(){return r.masterPlaylistController_.mediaRequestsTimedout_()||0},enumerable:!0},mediaRequestsErrored:{get:function(){return r.masterPlaylistController_.mediaRequestsErrored_()||0},enumerable:!0},mediaTransferDuration:{get:function(){return r.masterPlaylistController_.mediaTransferDuration_()||0},enumerable:!0},mediaBytesTransferred:{get:function(){return r.masterPlaylistController_.mediaBytesTransferred_()||0},enumerable:!0},mediaSecondsLoaded:{get:function(){return r.masterPlaylistController_.mediaSecondsLoaded_()||0},enumerable:!0},buffered:{get:function(){return _u(r.tech_.buffered())},enumerable:!0},currentTime:{get:function(){return r.tech_.currentTime()},enumerable:!0},currentSource:{get:function(){return r.tech_.currentSource_},enumerable:!0},currentTech:{get:function(){return r.tech_.name_},enumerable:!0},duration:{get:function(){return r.tech_.duration()},enumerable:!0},master:{get:function(){return r.playlists.master},enumerable:!0},playerDimensions:{get:function(){return r.tech_.currentDimensions()},enumerable:!0},seekable:{get:function(){return _u(r.tech_.seekable())},enumerable:!0},timestamp:{get:function(){return Date.now()},enumerable:!0},videoPlaybackQuality:{get:function(){return r.tech_.getVideoPlaybackQuality()},enumerable:!0}}),this.tech_.one("canplay",this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),this.masterPlaylistController_.on("selectedinitialmedia",function(){var i,t;t=(i=r).playlists,i.representations=function(){return t.master.playlists.filter(function(t){return!tu(t)}).map(function(t,e){return new jl(i,t,t.uri)})},Xl(r)}),this.on(this.masterPlaylistController_,"progress",function(){this.tech_.trigger("progress")}),this.on(this.masterPlaylistController_,"firstplay",function(){this.ignoreNextSeekingEvent_=!0}),this.tech_.ready(function(){return r.setupQualityLevels_()}),this.tech_.el()&&this.tech_.src(As.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))},a.prototype.setupQualityLevels_=function(){var i=this,t=As.players[this.tech_.options_.playerId];t&&t.qualityLevels&&(this.qualityLevels_=t.qualityLevels(),this.masterPlaylistController_.on("selectedinitialmedia",function(){var e,t;e=i.qualityLevels_,(t=i).representations().forEach(function(t){e.addQualityLevel(t)}),Gl(e,t.playlists)}),this.playlists.on("mediachange",function(){Gl(i.qualityLevels_,i.playlists)}))},a.prototype.play=function(){this.masterPlaylistController_.play()},a.prototype.setCurrentTime=function(t){this.masterPlaylistController_.setCurrentTime(t)},a.prototype.duration=function(){return this.masterPlaylistController_.duration()},a.prototype.seekable=function(){return this.masterPlaylistController_.seekable()},a.prototype.dispose=function(){this.playbackWatcher_&&this.playbackWatcher_.dispose(),this.masterPlaylistController_&&this.masterPlaylistController_.dispose(),this.qualityLevels_&&this.qualityLevels_.dispose(),s.prototype.dispose.call(this)},a}(As.getComponent("Component")),$l={name:"videojs-http-streaming",VERSION:"1.0.0",canHandleSource:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=As.mergeOptions(As.options,e);return $l.canPlayType(t.type,i)},handleSource:function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=As.mergeOptions(As.options,i);return e.hls=new Yl(t,e,r),e.hls.xhr=ou(),e.hls.src(t.src,t.type),e.hls},canPlayType:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=As.mergeOptions(As.options,e).hls.overrideNative,r=zl(t);return r&&(!Wl.supportsTypeNatively(r)||i)?"maybe":""}};return"undefined"!=typeof As.MediaSource&&"undefined"!=typeof As.URL||(As.MediaSource=qu,As.URL=Wu),qu.supportsNativeMediaSources()&&As.getTech("Html5").registerSourceHandler($l,0),As.HlsHandler=Yl,As.HlsSourceHandler=$l,As.Hls=Wl,As.use||As.registerComponent("Hls",Wl),As.options.hls=As.options.hls||{},As.registerPlugin?As.registerPlugin("reloadSourceOnError",ql):As.plugin("reloadSourceOnError",ql),As});;
var $j = jQuery.noConflict();

(function($j) {
  'use strict';

  $j(document).ready(function() {
    function fancyModal(linkClass, targetClass, options) {
      var link = $j('.' + linkClass),
        target = $j('.' + targetClass);

      if (link.length && target.length && typeof $j.fancybox === 'function') {
        link.bind('click', function() {
          $j.fancybox.open(target, options);
          return false;
        });
      }
    }

    var optionsTextResize = {
      padding: 5,
      scrolling: 'no',
      modal: false,
      buttons: ['close']
    };

    var optionsImageResize = {
      padding: 10,
      scrolling: 'auto',
      modal: false,
      buttons: ['close']
    };

    var optionsSecureData = {
      padding: 5,
      modal: false,
      buttons: ['close'],
      beforeShow: function() {
        $j('.fancybox-overlay').css('background', 'rgba(0, 0, 0, 0.2)');
      }
    };

    fancyModal(
      'subscribe-form-modal-link',
      'subscribe-form-modal',
      optionsImageResize
    );

    fancyModal(
      'fancy-text-resize',
      'fancy-text-resize-block',
      optionsTextResize
    );

    fancyModal('data-secure-link', 'data-secure-content', optionsSecureData);

    $j('.main-menu ul a.is-active').closest('ul').prevAll('a').addClass('is-active');
    $j('.search-form-key').text('"' + $j('.search-form #edit-keys').val() + '"');
  });
})(jQuery);

(function ($j) {
  'use strict';

  $j(document).ready(function () {

    var visited = localStorage.getItem('visited');
    var $cookiesContainer = $j('.cookie-disclaimer-holder > div');

    if(visited === null) {
      $cookiesContainer.slideDown(1000);
      $j('.continue, .close').click(function () {
        $cookiesContainer.slideUp(1000);
      });
      localStorage.setItem('visited', true);
    }
  });
})(jQuery);

(function ($) {
  'use strict';

  function external(link) {
    return (link.host !== window.location.host);
  }

  $('a').not('.continue, .print, [target="_blank"]').on('click', function(e) {
    if (external(this)) {
      e.preventDefault();

      var target = $(this).attr('href');

      $('.external-modal .continue').attr('href', target);
      $('body').addClass('external-modal-is-active');
    }
  });

  $('.modal-dialog .close').on('click', function() {
    $('body').removeClass('external-modal-is-active');
  })

})(jQuery);
(function ($j) {
  'use strict';

  $j(document).ready(function () {

    var mobileNav = {
      timerId: null,
      mobileView: window.innerWidth < 700,
      init: function () {
        $j('.mobile-nav .menu-button').on('click', this.toggleMenu);
        $j('.mobile-nav .back-button').on('click', function (e) {
          e.preventDefault();
          window.history.back();
        });
        this.toggleArrows();
        $j(window).resize(this.resizeMenu.bind(mobileNav));
        $j('.mobile-nav .search-button').on('click', this.toggleSearch.bind(mobileNav));
        $j('.mobile-nav, .main-menu').on('touchstart', function (event) {
          event.stopPropagation();
        }).on('click', function (event) {
          event.stopPropagation();
        });
        $j('html').on('touchstart', this.hideMenu).on('click', this.hideMenu);
      },
      toggleSearch: function () {
        this.hideMenu();
        $j('.header .search-block').slideToggle('fast');
        return false;
      },
      toggleMenu: function () {
        $j('.header .search-block').slideUp('fast');
        $j('.mobile-nav .menu-button').toggleClass('active');
        $j('.main-menu').toggleClass('show');
        window.scrollTo(0, 0);
        return false;
      },
      hideMenu: function () {
        if ($j('.main-menu').hasClass('show')) {
          $j('.mobile-nav .menu-button').removeClass('active');
          $j('.main-menu').removeClass('show');
        }
      },
      toggleArrows: function () {
        $j('.main-menu .toggle-arrow').on('click', function () {
          $j(this).parent().toggleClass('is-active');
        });
      },
      resizeMenu: function () {
        clearTimeout(this.timerId);
        var searchBlock = $j('.header .search-block');

        this.timerId = setTimeout(function () {
          if (window.innerWidth > 700) {
            if (this.mobileView) {
              this.mobileView = !this.mobileView;
              searchBlock.css("display", "block");
            }
          } else if (!this.mobileView) {
            this.mobileView = !this.mobileView;
            searchBlock.css("display", "none");
          }
        }, 10);
      }
    };

    mobileNav.init();

  });

})(jQuery);

(function ($) {
  'use strict';

  var subscription = $('.newsletter-form .additional-settings');

  $('.newsletter-triger').on('click', function() {
    subscription.is(":hidden") ? subscription.slideDown() : subscription.slideUp();
  });

  $('.newsletter-popup-triger').on('click', function() {
    $('body').addClass('newsletter-modal-is-active');
  })

  $('.modal-dialog .close').on('click', function() {
    $('body').removeClass('newsletter-modal-is-active');
  })

  $('.newsletter-form').submit(function(e) {
    var email = $('.newsletter-form input[name="email"'),
        terms = $('.newsletter-form input[name="terms"'),
        message = 'Hinweis:\n\n';

    if (!email.val()) {
      message += $('.newsletter-form input[name="email_error"').val() + '\n';
      $(email).closest('.form-item').addClass('error');
    } else {
      $(email).closest('.form-item').removeClass('error');
    }

    if (terms.is( ":checked" ) !==  true) {
      message += $('.newsletter-form input[name="terms_error"').val();
      $(terms).closest('.form-item').addClass('error');
    } else {
      $(terms).closest('.form-item').removeClass('error');
    }

    if (!email.val() || terms.is( ":checked" ) !==  true) {
      alert(message);
      e.preventDefault();
    }
  })
})(jQuery);
(function ($j) {
    'use strict';

    $j(document).ready(function () {
        /* eslint-disable no-undef */

        var VideoFancybox = {
            init: function () {
                if ($j('.video-placeholder').length && videojs) {
                    VideoFancybox.unbindContextMenu();
                    VideoFancybox.createPlayers();
                }
            },
            unbindContextMenu: function(){
                $j('.video-placeholder').bind('contextmenu', function () {
                    return false;
                });
            },
            createPlayers: function(){
                $j('.video-placeholder').each(function () {
                    var filePath = $j(this).attr('filePath');
                    var imagePath = $j(this).attr('poster');
                    var tmpId = VideoFancybox.generateRandomId();

                    $j(this).attr('id', tmpId);
                    if (filePath) {
                        var containerWidth = $j(this).width();
                        var existingPlayer = videojs.players[tmpId + '_video'];

                        if (typeof existingPlayer != 'undefined') {
                            existingPlayer.dispose();
                        }
                        $j('#' + tmpId).html('<video preload="metadata" class="video-js vjs-default-skin vjs-big-play-centered" id="'+
                            tmpId + '_video" controls width="' + containerWidth + '" height="' + 'auto' + '" poster="' + imagePath +
                            '"><source src="' + filePath + '">' + '</video>');
                        videojs(tmpId + '_video', {fluid:true});
                    }
                });
            },
            generateRandomId: function () {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 15; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            }
        };

        VideoFancybox.init();
        /* eslint-enable no-undef */
    });

}(jQuery));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function ($, Drupal, drupalSettings) {
  var showWeight = JSON.parse(localStorage.getItem('Drupal.tableDrag.showWeight'));

  Drupal.behaviors.tableDrag = {
    attach: function attach(context, settings) {
      function initTableDrag(table, base) {
        if (table.length) {
          Drupal.tableDrag[base] = new Drupal.tableDrag(table[0], settings.tableDrag[base]);
        }
      }

      Object.keys(settings.tableDrag || {}).forEach(function (base) {
        initTableDrag($(context).find('#' + base).once('tabledrag'), base);
      });
    }
  };

  Drupal.tableDrag = function (table, tableSettings) {
    var _this = this;

    var self = this;
    var $table = $(table);

    this.$table = $(table);

    this.table = table;

    this.tableSettings = tableSettings;

    this.dragObject = null;

    this.rowObject = null;

    this.oldRowElement = null;

    this.oldY = null;

    this.changed = false;

    this.maxDepth = 0;

    this.rtl = $(this.table).css('direction') === 'rtl' ? -1 : 1;

    this.striping = $(this.table).data('striping') === 1;

    this.scrollSettings = { amount: 4, interval: 50, trigger: 70 };

    this.scrollInterval = null;

    this.scrollY = 0;

    this.windowHeight = 0;

    this.indentEnabled = false;
    Object.keys(tableSettings || {}).forEach(function (group) {
      Object.keys(tableSettings[group] || {}).forEach(function (n) {
        if (tableSettings[group][n].relationship === 'parent') {
          _this.indentEnabled = true;
        }
        if (tableSettings[group][n].limit > 0) {
          _this.maxDepth = tableSettings[group][n].limit;
        }
      });
    });
    if (this.indentEnabled) {
      this.indentCount = 1;

      var indent = Drupal.theme('tableDragIndentation');
      var testRow = $('<tr></tr>').addClass('draggable').appendTo(table);
      var testCell = $('<td></td>').appendTo(testRow).prepend(indent).prepend(indent);
      var $indentation = testCell.find('.js-indentation');

      this.indentAmount = $indentation.get(1).offsetLeft - $indentation.get(0).offsetLeft;
      testRow.remove();
    }

    $table.find('> tr.draggable, > tbody > tr.draggable').each(function () {
      self.makeDraggable(this);
    });

    $table.before($('<button type="button" class="link tabledrag-toggle-weight"></button>').on('click', $.proxy(function (e) {
      e.preventDefault();
      this.toggleColumns();
    }, this)).wrap('<div class="tabledrag-toggle-weight-wrapper"></div>').parent());

    self.initColumns();

    $(document).on('touchmove', function (event) {
      return self.dragRow(event.originalEvent.touches[0], self);
    });
    $(document).on('touchend', function (event) {
      return self.dropRow(event.originalEvent.touches[0], self);
    });
    $(document).on('mousemove pointermove', function (event) {
      return self.dragRow(event, self);
    });
    $(document).on('mouseup pointerup', function (event) {
      return self.dropRow(event, self);
    });

    $(window).on('storage', $.proxy(function (e) {
      if (e.originalEvent.key === 'Drupal.tableDrag.showWeight') {
        showWeight = JSON.parse(e.originalEvent.newValue);
        this.displayColumns(showWeight);
      }
    }, this));
  };

  Drupal.tableDrag.prototype.initColumns = function () {
    var _this2 = this;

    var $table = this.$table;
    var hidden = void 0;
    var cell = void 0;
    var columnIndex = void 0;
    Object.keys(this.tableSettings || {}).forEach(function (group) {
      Object.keys(_this2.tableSettings[group]).some(function (tableSetting) {
        var field = $table.find('.' + _this2.tableSettings[group][tableSetting].target).eq(0);
        if (field.length && _this2.tableSettings[group][tableSetting].hidden) {
          hidden = _this2.tableSettings[group][tableSetting].hidden;
          cell = field.closest('td');
          return true;
        }
        return false;
      });

      if (hidden && cell[0]) {
        columnIndex = cell.parent().find('> td').index(cell.get(0)) + 1;
        $table.find('> thead > tr, > tbody > tr, > tr').each(_this2.addColspanClass(columnIndex));
      }
    });
    this.displayColumns(showWeight);
  };

  Drupal.tableDrag.prototype.addColspanClass = function (columnIndex) {
    return function () {
      var $row = $(this);
      var index = columnIndex;
      var cells = $row.children();
      var cell = void 0;
      cells.each(function (n) {
        if (n < index && this.colSpan && this.colSpan > 1) {
          index -= this.colSpan - 1;
        }
      });
      if (index > 0) {
        cell = cells.filter(':nth-child(' + index + ')');
        if (cell[0].colSpan && cell[0].colSpan > 1) {
          cell.addClass('tabledrag-has-colspan');
        } else {
          cell.addClass('tabledrag-hide');
        }
      }
    };
  };

  Drupal.tableDrag.prototype.displayColumns = function (displayWeight) {
    if (displayWeight) {
      this.showColumns();
    } else {
        this.hideColumns();
      }

    $('table').findOnce('tabledrag').trigger('columnschange', !!displayWeight);
  };

  Drupal.tableDrag.prototype.toggleColumns = function () {
    showWeight = !showWeight;
    this.displayColumns(showWeight);
    if (showWeight) {
      localStorage.setItem('Drupal.tableDrag.showWeight', showWeight);
    } else {
      localStorage.removeItem('Drupal.tableDrag.showWeight');
    }
  };

  Drupal.tableDrag.prototype.hideColumns = function () {
    var $tables = $('table').findOnce('tabledrag');

    $tables.find('.tabledrag-hide').css('display', 'none');

    $tables.find('.tabledrag-handle').css('display', '');

    $tables.find('.tabledrag-has-colspan').each(function () {
      this.colSpan = this.colSpan - 1;
    });

    $('.tabledrag-toggle-weight').text(Drupal.t('Show row weights'));
  };

  Drupal.tableDrag.prototype.showColumns = function () {
    var $tables = $('table').findOnce('tabledrag');

    $tables.find('.tabledrag-hide').css('display', '');

    $tables.find('.tabledrag-handle').css('display', 'none');

    $tables.find('.tabledrag-has-colspan').each(function () {
      this.colSpan = this.colSpan + 1;
    });

    $('.tabledrag-toggle-weight').text(Drupal.t('Hide row weights'));
  };

  Drupal.tableDrag.prototype.rowSettings = function (group, row) {
    var field = $(row).find('.' + group);
    var tableSettingsGroup = this.tableSettings[group];
    return Object.keys(tableSettingsGroup).map(function (delta) {
      var targetClass = tableSettingsGroup[delta].target;
      var rowSettings = void 0;
      if (field.is('.' + targetClass)) {
        rowSettings = {};
        Object.keys(tableSettingsGroup[delta]).forEach(function (n) {
          rowSettings[n] = tableSettingsGroup[delta][n];
        });
      }
      return rowSettings;
    }).filter(function (rowSetting) {
      return rowSetting;
    })[0];
  };

  Drupal.tableDrag.prototype.makeDraggable = function (item) {
    var self = this;
    var $item = $(item);

    $item.find('td:first-of-type').find('a').addClass('menu-item__link');

    var handle = $('<a href="#" class="tabledrag-handle"><div class="handle">&nbsp;</div></a>').attr('title', Drupal.t('Drag to re-order'));

    var $indentationLast = $item.find('td:first-of-type').find('.js-indentation').eq(-1);
    if ($indentationLast.length) {
      $indentationLast.after(handle);

      self.indentCount = Math.max($item.find('.js-indentation').length, self.indentCount);
    } else {
      $item.find('td').eq(0).prepend(handle);
    }

    handle.on('mousedown touchstart pointerdown', function (event) {
      event.preventDefault();
      if (event.originalEvent.type === 'touchstart') {
        event = event.originalEvent.touches[0];
      }
      self.dragStart(event, self, item);
    });

    handle.on('click', function (e) {
      e.preventDefault();
    });

    handle.on('focus', function () {
      self.safeBlur = true;
    });

    handle.on('blur', function (event) {
      if (self.rowObject && self.safeBlur) {
        self.dropRow(event, self);
      }
    });

    handle.on('keydown', function (event) {
      if (event.keyCode !== 9 && !self.rowObject) {
        self.rowObject = new self.row(item, 'keyboard', self.indentEnabled, self.maxDepth, true);
      }

      var keyChange = false;
      var groupHeight = void 0;

      switch (event.keyCode) {
        case 37:
        case 63234:
          keyChange = true;
          self.rowObject.indent(-1 * self.rtl);
          break;

        case 38:
        case 63232:
          {
            var $previousRow = $(self.rowObject.element).prev('tr').eq(0);
            var previousRow = $previousRow.get(0);
            while (previousRow && $previousRow.is(':hidden')) {
              $previousRow = $(previousRow).prev('tr').eq(0);
              previousRow = $previousRow.get(0);
            }
            if (previousRow) {
              self.safeBlur = false;
              self.rowObject.direction = 'up';
              keyChange = true;

              if ($(item).is('.tabledrag-root')) {
                groupHeight = 0;
                while (previousRow && $previousRow.find('.js-indentation').length) {
                  $previousRow = $(previousRow).prev('tr').eq(0);
                  previousRow = $previousRow.get(0);
                  groupHeight += $previousRow.is(':hidden') ? 0 : previousRow.offsetHeight;
                }
                if (previousRow) {
                  self.rowObject.swap('before', previousRow);

                  window.scrollBy(0, -groupHeight);
                }
              } else if (self.table.tBodies[0].rows[0] !== previousRow || $previousRow.is('.draggable')) {
                self.rowObject.swap('before', previousRow);
                self.rowObject.interval = null;
                self.rowObject.indent(0);
                window.scrollBy(0, -parseInt(item.offsetHeight, 10));
              }

              handle.trigger('focus');
            }
            break;
          }

        case 39:
        case 63235:
          keyChange = true;
          self.rowObject.indent(self.rtl);
          break;

        case 40:
        case 63233:
          {
            var $nextRow = $(self.rowObject.group).eq(-1).next('tr').eq(0);
            var nextRow = $nextRow.get(0);
            while (nextRow && $nextRow.is(':hidden')) {
              $nextRow = $(nextRow).next('tr').eq(0);
              nextRow = $nextRow.get(0);
            }
            if (nextRow) {
              self.safeBlur = false;
              self.rowObject.direction = 'down';
              keyChange = true;

              if ($(item).is('.tabledrag-root')) {
                groupHeight = 0;
                var nextGroup = new self.row(nextRow, 'keyboard', self.indentEnabled, self.maxDepth, false);
                if (nextGroup) {
                  $(nextGroup.group).each(function () {
                    groupHeight += $(this).is(':hidden') ? 0 : this.offsetHeight;
                  });
                  var nextGroupRow = $(nextGroup.group).eq(-1).get(0);
                  self.rowObject.swap('after', nextGroupRow);

                  window.scrollBy(0, parseInt(groupHeight, 10));
                }
              } else {
                self.rowObject.swap('after', nextRow);
                self.rowObject.interval = null;
                self.rowObject.indent(0);
                window.scrollBy(0, parseInt(item.offsetHeight, 10));
              }

              handle.trigger('focus');
            }
            break;
          }
      }

      if (self.rowObject && self.rowObject.changed === true) {
        $(item).addClass('drag');
        if (self.oldRowElement) {
          $(self.oldRowElement).removeClass('drag-previous');
        }
        self.oldRowElement = item;
        if (self.striping === true) {
          self.restripeTable();
        }
        self.onDrag();
      }

      if (keyChange) {
        return false;
      }
    });

    handle.on('keypress', function (event) {

      switch (event.keyCode) {
        case 37:
        case 38:
        case 39:
        case 40:
          return false;
      }
    });
  };

  Drupal.tableDrag.prototype.dragStart = function (event, self, item) {
    self.dragObject = {};
    self.dragObject.initOffset = self.getPointerOffset(item, event);
    self.dragObject.initPointerCoords = self.pointerCoords(event);
    if (self.indentEnabled) {
      self.dragObject.indentPointerPos = self.dragObject.initPointerCoords;
    }

    if (self.rowObject) {
      $(self.rowObject.element).find('a.tabledrag-handle').trigger('blur');
    }

    self.rowObject = new self.row(item, 'pointer', self.indentEnabled, self.maxDepth, true);

    self.table.topY = $(self.table).offset().top;
    self.table.bottomY = self.table.topY + self.table.offsetHeight;

    $(item).addClass('drag');

    $('body').addClass('drag');
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }

    self.oldY = self.pointerCoords(event).y;
  };

  Drupal.tableDrag.prototype.dragRow = function (event, self) {
    if (self.dragObject) {
      self.currentPointerCoords = self.pointerCoords(event);
      var y = self.currentPointerCoords.y - self.dragObject.initOffset.y;
      var x = self.currentPointerCoords.x - self.dragObject.initOffset.x;

      if (y !== self.oldY) {
        self.rowObject.direction = y > self.oldY ? 'down' : 'up';

        self.oldY = y;

        var scrollAmount = self.checkScroll(self.currentPointerCoords.y);

        clearInterval(self.scrollInterval);

        if (scrollAmount > 0 && self.rowObject.direction === 'down' || scrollAmount < 0 && self.rowObject.direction === 'up') {
          self.setScroll(scrollAmount);
        }

        var currentRow = self.findDropTargetRow(x, y);
        if (currentRow) {
          if (self.rowObject.direction === 'down') {
            self.rowObject.swap('after', currentRow, self);
          } else {
            self.rowObject.swap('before', currentRow, self);
          }
          if (self.striping === true) {
            self.restripeTable();
          }
        }
      }

      if (self.indentEnabled) {
        var xDiff = self.currentPointerCoords.x - self.dragObject.indentPointerPos.x;

        var indentDiff = Math.round(xDiff / self.indentAmount);

        var indentChange = self.rowObject.indent(indentDiff);

        self.dragObject.indentPointerPos.x += self.indentAmount * indentChange * self.rtl;
        self.indentCount = Math.max(self.indentCount, self.rowObject.indents);
      }

      return false;
    }
  };

  Drupal.tableDrag.prototype.dropRow = function (event, self) {
    var droppedRow = void 0;
    var $droppedRow = void 0;

    if (self.rowObject !== null) {
      droppedRow = self.rowObject.element;
      $droppedRow = $(droppedRow);

      if (self.rowObject.changed === true) {
        self.updateFields(droppedRow);

        Object.keys(self.tableSettings || {}).forEach(function (group) {
          var rowSettings = self.rowSettings(group, droppedRow);
          if (rowSettings.relationship === 'group') {
            Object.keys(self.rowObject.children || {}).forEach(function (n) {
              self.updateField(self.rowObject.children[n], group);
            });
          }
        });

        self.rowObject.markChanged();
        if (self.changed === false) {
          $(Drupal.theme('tableDragChangedWarning')).insertBefore(self.table).hide().fadeIn('slow');
          self.changed = true;
        }
      }

      if (self.indentEnabled) {
        self.rowObject.removeIndentClasses();
      }
      if (self.oldRowElement) {
        $(self.oldRowElement).removeClass('drag-previous');
      }
      $droppedRow.removeClass('drag').addClass('drag-previous');
      self.oldRowElement = droppedRow;
      self.onDrop();
      self.rowObject = null;
    }

    if (self.dragObject !== null) {
      self.dragObject = null;
      $('body').removeClass('drag');
      clearInterval(self.scrollInterval);
    }
  };

  Drupal.tableDrag.prototype.pointerCoords = function (event) {
    if (event.pageX || event.pageY) {
      return { x: event.pageX, y: event.pageY };
    }
    return {
      x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
      y: event.clientY + document.body.scrollTop - document.body.clientTop
    };
  };

  Drupal.tableDrag.prototype.getPointerOffset = function (target, event) {
    var docPos = $(target).offset();
    var pointerPos = this.pointerCoords(event);
    return { x: pointerPos.x - docPos.left, y: pointerPos.y - docPos.top };
  };

  Drupal.tableDrag.prototype.findDropTargetRow = function (x, y) {
    var _this3 = this;

    var rows = $(this.table.tBodies[0].rows).not(':hidden');

    var _loop = function _loop(n) {
      var row = rows[n];
      var $row = $(row);
      var rowY = $row.offset().top;
      var rowHeight = void 0;

      if (row.offsetHeight === 0) {
        rowHeight = parseInt(row.firstChild.offsetHeight, 10) / 2;
      } else {
          rowHeight = parseInt(row.offsetHeight, 10) / 2;
        }

      if (y > rowY - rowHeight && y < rowY + rowHeight) {
        if (_this3.indentEnabled) {
          if (Object.keys(_this3.rowObject.group).some(function (o) {
            return _this3.rowObject.group[o] === row;
          })) {
            return {
              v: null
            };
          }
        } else if (row === _this3.rowObject.element) {
            return {
              v: null
            };
          }

        if (!_this3.rowObject.isValidSwap(row)) {
          return {
            v: null
          };
        }

        while ($row.is(':hidden') && $row.prev('tr').is(':hidden')) {
          $row = $row.prev('tr:first-of-type');
          row = $row.get(0);
        }
        return {
          v: row
        };
      }
    };

    for (var n = 0; n < rows.length; n++) {
      var _ret = _loop(n);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
    return null;
  };

  Drupal.tableDrag.prototype.updateFields = function (changedRow) {
    var _this4 = this;

    Object.keys(this.tableSettings || {}).forEach(function (group) {
      _this4.updateField(changedRow, group);
    });
  };

  Drupal.tableDrag.prototype.updateField = function (changedRow, group) {
    var rowSettings = this.rowSettings(group, changedRow);
    var $changedRow = $(changedRow);
    var sourceRow = void 0;
    var $previousRow = void 0;
    var previousRow = void 0;
    var useSibling = void 0;

    if (rowSettings.relationship === 'self' || rowSettings.relationship === 'group') {
      sourceRow = changedRow;
    } else if (rowSettings.relationship === 'sibling') {
        $previousRow = $changedRow.prev('tr:first-of-type');
        previousRow = $previousRow.get(0);
        var $nextRow = $changedRow.next('tr:first-of-type');
        var nextRow = $nextRow.get(0);
        sourceRow = changedRow;
        if ($previousRow.is('.draggable') && $previousRow.find('.' + group).length) {
          if (this.indentEnabled) {
            if ($previousRow.find('.js-indentations').length === $changedRow.find('.js-indentations').length) {
              sourceRow = previousRow;
            }
          } else {
            sourceRow = previousRow;
          }
        } else if ($nextRow.is('.draggable') && $nextRow.find('.' + group).length) {
          if (this.indentEnabled) {
            if ($nextRow.find('.js-indentations').length === $changedRow.find('.js-indentations').length) {
              sourceRow = nextRow;
            }
          } else {
            sourceRow = nextRow;
          }
        }
      } else if (rowSettings.relationship === 'parent') {
          $previousRow = $changedRow.prev('tr');
          previousRow = $previousRow;
          while ($previousRow.length && $previousRow.find('.js-indentation').length >= this.rowObject.indents) {
            $previousRow = $previousRow.prev('tr');
            previousRow = $previousRow;
          }

          if ($previousRow.length) {
            sourceRow = $previousRow.get(0);
          } else {
              sourceRow = $(this.table).find('tr.draggable:first-of-type').get(0);
              if (sourceRow === this.rowObject.element) {
                sourceRow = $(this.rowObject.group[this.rowObject.group.length - 1]).next('tr.draggable').get(0);
              }
              useSibling = true;
            }
        }

    this.copyDragClasses(sourceRow, changedRow, group);
    rowSettings = this.rowSettings(group, changedRow);

    if (useSibling) {
      rowSettings.relationship = 'sibling';
      rowSettings.source = rowSettings.target;
    }

    var targetClass = '.' + rowSettings.target;
    var targetElement = $changedRow.find(targetClass).get(0);

    if (targetElement) {
      var sourceClass = '.' + rowSettings.source;
      var sourceElement = $(sourceClass, sourceRow).get(0);
      switch (rowSettings.action) {
        case 'depth':
          targetElement.value = $(sourceElement).closest('tr').find('.js-indentation').length;
          break;

        case 'match':
          targetElement.value = sourceElement.value;
          break;

        case 'order':
          {
            var siblings = this.rowObject.findSiblings(rowSettings);
            if ($(targetElement).is('select')) {
              var values = [];
              $(targetElement).find('option').each(function () {
                values.push(this.value);
              });
              var maxVal = values[values.length - 1];

              $(siblings).find(targetClass).each(function () {
                if (values.length > 0) {
                  this.value = values.shift();
                } else {
                  this.value = maxVal;
                }
              });
            } else {
              var weight = parseInt($(siblings[0]).find(targetClass).val(), 10) || 0;
              $(siblings).find(targetClass).each(function () {
                this.value = weight;
                weight++;
              });
            }
            break;
          }
      }
    }
  };

  Drupal.tableDrag.prototype.copyDragClasses = function (sourceRow, targetRow, group) {
    var sourceElement = $(sourceRow).find('.' + group);
    var targetElement = $(targetRow).find('.' + group);
    if (sourceElement.length && targetElement.length) {
      targetElement[0].className = sourceElement[0].className;
    }
  };

  Drupal.tableDrag.prototype.checkScroll = function (cursorY) {
    var de = document.documentElement;
    var b = document.body;

    var windowHeight = window.innerHeight || (de.clientHeight && de.clientWidth !== 0 ? de.clientHeight : b.offsetHeight);
    this.windowHeight = windowHeight;
    var scrollY = void 0;
    if (document.all) {
      scrollY = !de.scrollTop ? b.scrollTop : de.scrollTop;
    } else {
      scrollY = window.pageYOffset ? window.pageYOffset : window.scrollY;
    }
    this.scrollY = scrollY;
    var trigger = this.scrollSettings.trigger;
    var delta = 0;

    if (cursorY - scrollY > windowHeight - trigger) {
      delta = trigger / (windowHeight + scrollY - cursorY);
      delta = delta > 0 && delta < trigger ? delta : trigger;
      return delta * this.scrollSettings.amount;
    }
    if (cursorY - scrollY < trigger) {
      delta = trigger / (cursorY - scrollY);
      delta = delta > 0 && delta < trigger ? delta : trigger;
      return -delta * this.scrollSettings.amount;
    }
  };

  Drupal.tableDrag.prototype.setScroll = function (scrollAmount) {
    var self = this;

    this.scrollInterval = setInterval(function () {
      self.checkScroll(self.currentPointerCoords.y);
      var aboveTable = self.scrollY > self.table.topY;
      var belowTable = self.scrollY + self.windowHeight < self.table.bottomY;
      if (scrollAmount > 0 && belowTable || scrollAmount < 0 && aboveTable) {
        window.scrollBy(0, scrollAmount);
      }
    }, this.scrollSettings.interval);
  };

  Drupal.tableDrag.prototype.restripeTable = function () {
    $(this.table).find('> tbody > tr.draggable, > tr.draggable').filter(':visible').filter(':odd').removeClass('odd').addClass('even').end().filter(':even').removeClass('even').addClass('odd');
  };

  Drupal.tableDrag.prototype.onDrag = function () {
    return null;
  };

  Drupal.tableDrag.prototype.onDrop = function () {
    return null;
  };

  Drupal.tableDrag.prototype.row = function (tableRow, method, indentEnabled, maxDepth, addClasses) {
    var $tableRow = $(tableRow);

    this.element = tableRow;
    this.method = method;
    this.group = [tableRow];
    this.groupDepth = $tableRow.find('.js-indentation').length;
    this.changed = false;
    this.table = $tableRow.closest('table')[0];
    this.indentEnabled = indentEnabled;
    this.maxDepth = maxDepth;

    this.direction = '';
    if (this.indentEnabled) {
      this.indents = $tableRow.find('.js-indentation').length;
      this.children = this.findChildren(addClasses);
      this.group = $.merge(this.group, this.children);

      for (var n = 0; n < this.group.length; n++) {
        this.groupDepth = Math.max($(this.group[n]).find('.js-indentation').length, this.groupDepth);
      }
    }
  };

  Drupal.tableDrag.prototype.row.prototype.findChildren = function (addClasses) {
    var parentIndentation = this.indents;
    var currentRow = $(this.element, this.table).next('tr.draggable');
    var rows = [];
    var child = 0;

    function rowIndentation(indentNum, el) {
      var self = $(el);
      if (child === 1 && indentNum === parentIndentation) {
        self.addClass('tree-child-first');
      }
      if (indentNum === parentIndentation) {
        self.addClass('tree-child');
      } else if (indentNum > parentIndentation) {
        self.addClass('tree-child-horizontal');
      }
    }

    while (currentRow.length) {
      if (currentRow.find('.js-indentation').length > parentIndentation) {
        child++;
        rows.push(currentRow[0]);
        if (addClasses) {
          currentRow.find('.js-indentation').each(rowIndentation);
        }
      } else {
        break;
      }
      currentRow = currentRow.next('tr.draggable');
    }
    if (addClasses && rows.length) {
      $(rows[rows.length - 1]).find('.js-indentation:nth-child(' + (parentIndentation + 1) + ')').addClass('tree-child-last');
    }
    return rows;
  };

  Drupal.tableDrag.prototype.row.prototype.isValidSwap = function (row) {
    var $row = $(row);
    if (this.indentEnabled) {
      var prevRow = void 0;
      var nextRow = void 0;
      if (this.direction === 'down') {
        prevRow = row;
        nextRow = $row.next('tr').get(0);
      } else {
        prevRow = $row.prev('tr').get(0);
        nextRow = row;
      }
      this.interval = this.validIndentInterval(prevRow, nextRow);

      if (this.interval.min > this.interval.max) {
        return false;
      }
    }

    if (this.table.tBodies[0].rows[0] === row && $row.is(':not(.draggable)')) {
      return false;
    }

    return true;
  };

  Drupal.tableDrag.prototype.row.prototype.swap = function (position, row) {
    this.group.forEach(function (row) {
      Drupal.detachBehaviors(row, drupalSettings, 'move');
    });
    $(row)[position](this.group);

    this.group.forEach(function (row) {
      Drupal.attachBehaviors(row, drupalSettings);
    });
    this.changed = true;
    this.onSwap(row);
  };

  Drupal.tableDrag.prototype.row.prototype.validIndentInterval = function (prevRow, nextRow) {
    var $prevRow = $(prevRow);
    var maxIndent = void 0;

    var minIndent = nextRow ? $(nextRow).find('.js-indentation').length : 0;

    if (!prevRow || $prevRow.is(':not(.draggable)') || $(this.element).is('.tabledrag-root')) {
      maxIndent = 0;
    } else {
      maxIndent = $prevRow.find('.js-indentation').length + ($prevRow.is('.tabledrag-leaf') ? 0 : 1);

      if (this.maxDepth) {
        maxIndent = Math.min(maxIndent, this.maxDepth - (this.groupDepth - this.indents));
      }
    }

    return { min: minIndent, max: maxIndent };
  };

  Drupal.tableDrag.prototype.row.prototype.indent = function (indentDiff) {
    var $group = $(this.group);

    if (!this.interval) {
      var prevRow = $(this.element).prev('tr').get(0);
      var nextRow = $group.eq(-1).next('tr').get(0);
      this.interval = this.validIndentInterval(prevRow, nextRow);
    }

    var indent = this.indents + indentDiff;
    indent = Math.max(indent, this.interval.min);
    indent = Math.min(indent, this.interval.max);
    indentDiff = indent - this.indents;

    for (var n = 1; n <= Math.abs(indentDiff); n++) {
      if (indentDiff < 0) {
        $group.find('.js-indentation:first-of-type').remove();
        this.indents--;
      } else {
        $group.find('td:first-of-type').prepend(Drupal.theme('tableDragIndentation'));
        this.indents++;
      }
    }
    if (indentDiff) {
      this.changed = true;
      this.groupDepth += indentDiff;
      this.onIndent();
    }

    return indentDiff;
  };

  Drupal.tableDrag.prototype.row.prototype.findSiblings = function (rowSettings) {
    var siblings = [];
    var directions = ['prev', 'next'];
    var rowIndentation = this.indents;
    var checkRowIndentation = void 0;
    for (var d = 0; d < directions.length; d++) {
      var checkRow = $(this.element)[directions[d]]();
      while (checkRow.length) {
        if (checkRow.find('.' + rowSettings.target)) {
          if (this.indentEnabled) {
            checkRowIndentation = checkRow.find('.js-indentation').length;
          }

          if (!this.indentEnabled || checkRowIndentation === rowIndentation) {
            siblings.push(checkRow[0]);
          } else if (checkRowIndentation < rowIndentation) {
            break;
          }
        } else {
          break;
        }
        checkRow = checkRow[directions[d]]();
      }

      if (directions[d] === 'prev') {
        siblings.reverse();
        siblings.push(this.element);
      }
    }
    return siblings;
  };

  Drupal.tableDrag.prototype.row.prototype.removeIndentClasses = function () {
    var _this5 = this;

    Object.keys(this.children || {}).forEach(function (n) {
      $(_this5.children[n]).find('.js-indentation').removeClass('tree-child').removeClass('tree-child-first').removeClass('tree-child-last').removeClass('tree-child-horizontal');
    });
  };

  Drupal.tableDrag.prototype.row.prototype.markChanged = function () {
    var marker = Drupal.theme('tableDragChangedMarker');
    var cell = $(this.element).find('td:first-of-type');
    if (cell.find('abbr.tabledrag-changed').length === 0) {
      cell.append(marker);
    }
  };

  Drupal.tableDrag.prototype.row.prototype.onIndent = function () {
    return null;
  };

  Drupal.tableDrag.prototype.row.prototype.onSwap = function (swappedRow) {
    return null;
  };

  $.extend(Drupal.theme, {
    tableDragChangedMarker: function tableDragChangedMarker() {
      return '<abbr class="warning tabledrag-changed" title="' + Drupal.t('Changed') + '">*</abbr>';
    },
    tableDragIndentation: function tableDragIndentation() {
      return '<div class="js-indentation indentation">&nbsp;</div>';
    },
    tableDragChangedWarning: function tableDragChangedWarning() {
      return '<div class="tabledrag-changed-warning messages messages--warning" role="alert">' + Drupal.theme('tableDragChangedMarker') + ' ' + Drupal.t('You have unsaved changes.') + '</div>';
    }
  });
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  var autocomplete = void 0;

  function autocompleteSplitValues(value) {
    var result = [];
    var quote = false;
    var current = '';
    var valueLength = value.length;
    var character = void 0;

    for (var i = 0; i < valueLength; i++) {
      character = value.charAt(i);
      if (character === '"') {
        current += character;
        quote = !quote;
      } else if (character === ',' && !quote) {
        result.push(current.trim());
        current = '';
      } else {
        current += character;
      }
    }
    if (value.length > 0) {
      result.push($.trim(current));
    }

    return result;
  }

  function extractLastTerm(terms) {
    return autocomplete.splitValues(terms).pop();
  }

  function searchHandler(event) {
    var options = autocomplete.options;

    if (options.isComposing) {
      return false;
    }

    var term = autocomplete.extractLastTerm(event.target.value);

    if (term.length > 0 && options.firstCharacterBlacklist.indexOf(term[0]) !== -1) {
      return false;
    }

    return term.length >= options.minLength;
  }

  function sourceData(request, response) {
    var elementId = this.element.attr('id');

    if (!(elementId in autocomplete.cache)) {
      autocomplete.cache[elementId] = {};
    }

    function showSuggestions(suggestions) {
      var tagged = autocomplete.splitValues(request.term);
      var il = tagged.length;
      for (var i = 0; i < il; i++) {
        var index = suggestions.indexOf(tagged[i]);
        if (index >= 0) {
          suggestions.splice(index, 1);
        }
      }
      response(suggestions);
    }

    var term = autocomplete.extractLastTerm(request.term);

    function sourceCallbackHandler(data) {
      autocomplete.cache[elementId][term] = data;

      showSuggestions(data);
    }

    if (autocomplete.cache[elementId].hasOwnProperty(term)) {
      showSuggestions(autocomplete.cache[elementId][term]);
    } else {
      var options = $.extend({ success: sourceCallbackHandler, data: { q: term } }, autocomplete.ajax);
      $.ajax(this.element.attr('data-autocomplete-path'), options);
    }
  }

  function focusHandler() {
    return false;
  }

  function selectHandler(event, ui) {
    var terms = autocomplete.splitValues(event.target.value);

    terms.pop();

    terms.push(ui.item.value);

    event.target.value = terms.join(', ');

    return false;
  }

  function renderItem(ul, item) {
    return $('<li>').append($('<a>').html(item.label)).appendTo(ul);
  }

  Drupal.behaviors.autocomplete = {
    attach: function attach(context) {
      var $autocomplete = $(context).find('input.form-autocomplete').once('autocomplete');
      if ($autocomplete.length) {
        var blacklist = $autocomplete.attr('data-autocomplete-first-character-blacklist');
        $.extend(autocomplete.options, {
          firstCharacterBlacklist: blacklist || ''
        });

        $autocomplete.autocomplete(autocomplete.options).each(function () {
          $(this).data('ui-autocomplete')._renderItem = autocomplete.options.renderItem;
        });

        $autocomplete.on('compositionstart.autocomplete', function () {
          autocomplete.options.isComposing = true;
        });
        $autocomplete.on('compositionend.autocomplete', function () {
          autocomplete.options.isComposing = false;
        });
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        $(context).find('input.form-autocomplete').removeOnce('autocomplete').autocomplete('destroy');
      }
    }
  };

  autocomplete = {
    cache: {},

    splitValues: autocompleteSplitValues,
    extractLastTerm: extractLastTerm,

    options: {
      source: sourceData,
      focus: focusHandler,
      search: searchHandler,
      select: selectHandler,
      renderItem: renderItem,
      minLength: 1,

      firstCharacterBlacklist: '',

      isComposing: false
    },
    ajax: {
      dataType: 'json'
    }
  };

  Drupal.autocomplete = autocomplete;
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.behaviors.responsiveImageAJAX = {
    attach: function attach() {
      if (window.picturefill) {
        window.picturefill();
      }
    }
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass('ajax-progress ajax-progress-bar');
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],a):a(jQuery)}(function(a){return a.ui.formResetMixin={_formResetHandler:function(){var b=a(this);setTimeout(function(){var c=b.data("ui-form-reset-instances");a.each(c,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];a.length||this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)}},_unbindFormResetHandler:function(){if(this.form.length){var b=this.form.data("ui-form-reset-instances");b.splice(a.inArray(this,b),1),b.length?this.form.data("ui-form-reset-instances",b):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../escape-selector","../form-reset-mixin","../labels","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.checkboxradio",[a.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var b,c,d=this,e=this._super()||{};return this._readType(),c=this.element.labels(),this.label=a(c[c.length-1]),this.label.length||a.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){d.originalLabel+=3===this.nodeType?a(this).text():this.outerHTML}),this.originalLabel&&(e.label=this.originalLabel),b=this.element[0].disabled,null!=b&&(e.disabled=b),e},_create:function(){var a=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var b=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===b&&/radio|checkbox/.test(this.type)||a.error("Can't create checkboxradio on element.nodeName="+b+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var b,c=this.element[0].name,d="input[name='"+a.ui.escapeSelector(c)+"']";return c?(b=this.form.length?a(this.form[0].elements).filter(d):a(d).filter(function(){return 0===a(this).form().length}),b.not(this.element)):a([])},_toggleClasses:function(){var b=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",b),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",b)._toggleClass(this.icon,null,"ui-icon-blank",!b),"radio"===this.type&&this._getRadioGroup().each(function(){var b=a(this).checkboxradio("instance");b&&b._removeClass(b.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(a,b){if("label"!==a||b)return this._super(a,b),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",b),void(this.element[0].disabled=b)):void this.refresh()},_updateIcon:function(b){var c="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=a("<span>"),this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(c+=b?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,b?"ui-icon-blank":"ui-icon-check")):c+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",c),b||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);this.icon&&(a=a.not(this.icon[0])),this.iconSpace&&(a=a.not(this.iconSpace[0])),a.remove(),this.label.append(this.options.label)},refresh:function(){var a=this.element[0].checked,b=this.element[0].disabled;this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),b!==this.options.disabled&&this._setOptions({disabled:b})}}]),a.ui.checkboxradio});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../widget"],a):a(jQuery)}(function(a){var b=/ui-corner-([a-z]){2,6}/g;return a.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var b=this,c=[];a.each(this.options.items,function(d,e){var f,g={};if(e)return"controlgroupLabel"===d?(f=b.element.find(e),f.each(function(){var b=a(this);b.children(".ui-controlgroup-label-contents").length||b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),b._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),void(c=c.concat(f.get()))):void(a.fn[d]&&(g=b["_"+d+"Options"]?b["_"+d+"Options"]("middle"):{classes:{}},b.element.find(e).each(function(){var e=a(this),f=e[d]("instance"),h=a.widget.extend({},g);if("button"!==d||!e.parent(".ui-spinner").length){f||(f=e[d]()[d]("instance")),f&&(h.classes=b._resolveClassesValues(h.classes,f)),e[d](h);var i=e[d]("widget");a.data(i[0],"ui-controlgroup-data",f?f:e[d]("instance")),c.push(i[0])}})))}),this.childWidgets=a(a.unique(c)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(b){this.childWidgets.each(function(){var c=a(this),d=c.data("ui-controlgroup-data");d&&d[b]&&d[b]()})},_updateCornerClass:function(a,b){var c="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(b,"label").classes.label;this._removeClass(a,null,c),this._addClass(a,null,d)},_buildSimpleOptions:function(a,b){var c="vertical"===this.options.direction,d={classes:{}};return d.classes[b]={middle:"",first:"ui-corner-"+(c?"top":"left"),last:"ui-corner-"+(c?"bottom":"right"),only:"ui-corner-all"}[a],d},_spinnerOptions:function(a){var b=this._buildSimpleOptions(a,"ui-spinner");return b.classes["ui-spinner-up"]="",b.classes["ui-spinner-down"]="",b},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")},_selectmenuOptions:function(a){var b="vertical"===this.options.direction;return{width:!!b&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(b?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(b?"top":"left")},last:{"ui-selectmenu-button-open":b?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(b?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}},_resolveClassesValues:function(c,d){var e={};return a.each(c,function(f){var g=d.options.classes[f]||"";g=a.trim(g.replace(b,"")),e[f]=(g+" "+c[f]).replace(/\s+/g," ")}),e},_setOption:function(a,b){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,b),"disabled"===a?void this._callChildMethod(b?"disable":"enable"):void this.refresh()},refresh:function(){var b,c=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),b=this.childWidgets,this.options.onlyVisible&&(b=b.filter(":visible")),b.length&&(a.each(["first","last"],function(a,d){var e=b[d]().data("ui-controlgroup-data");if(e&&c["_"+e.widgetName+"Options"]){var f=c["_"+e.widgetName+"Options"](1===b.length?"only":d);f.classes=c._resolveClassesValues(f.classes,e),e.element[e.widgetName](f)}else c._updateCornerClass(b[d](),d)}),this._callChildMethod("refresh"))}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(e),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),a.uiBackCompat!==!1&&(a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),a.ui.button});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).on("mouseup",function(){b=!1}),a.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.on("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).on("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f=!("string"!=typeof this.options.cancel||!c.target.nodeName)&&a(c.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(c))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0))}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)if(b.originalEvent.altKey||b.originalEvent.ctrlKey||b.originalEvent.metaKey||b.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(c){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,b=!1,c.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blurActiveElement(b),this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=a.ui.safeActiveElement(this.document[0]),d=a(b.target);d.closest(c).length||a.ui.safeBlur(c)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp(new a.Event("mouseup",b)),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.trigger("focus"),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new a.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f=Math.max,g=Math.abs,h=/left|center|right/,i=/top|center|bottom/,j=/[\+\-]\d+(\.[\d]+)?%?/,k=/^\w+/,l=/%$/,m=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType,f=!d&&!e;return{element:c,isWindow:d,isDocument:e,offset:f?a(b).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return m.apply(this,arguments);e=a.extend({},e);var l,n,o,p,q,r,s=a(e.of),t=a.position.getWithinInfo(e.within),u=a.position.getScrollInfo(t),v=(e.collision||"flip").split(" "),w={};return r=d(s),s[0].preventDefault&&(e.at="left top"),n=r.width,o=r.height,p=r.offset,q=a.extend({},p),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=h.test(c[0])?c.concat(["center"]):i.test(c[0])?["center"].concat(c):["center","center"]),c[0]=h.test(c[0])?c[0]:"center",c[1]=i.test(c[1])?c[1]:"center",a=j.exec(c[0]),b=j.exec(c[1]),w[this]=[a?a[0]:0,b?b[0]:0],e[this]=[k.exec(c[0])[0],k.exec(c[1])[0]]}),1===v.length&&(v[1]=v[0]),"right"===e.at[0]?q.left+=n:"center"===e.at[0]&&(q.left+=n/2),"bottom"===e.at[1]?q.top+=o:"center"===e.at[1]&&(q.top+=o/2),l=b(w.at,n,o),q.left+=l[0],q.top+=l[1],this.each(function(){var d,h,i=a(this),j=i.outerWidth(),k=i.outerHeight(),m=c(this,"marginLeft"),r=c(this,"marginTop"),x=j+m+c(this,"marginRight")+u.width,y=k+r+c(this,"marginBottom")+u.height,z=a.extend({},q),A=b(w.my,i.outerWidth(),i.outerHeight());"right"===e.my[0]?z.left-=j:"center"===e.my[0]&&(z.left-=j/2),"bottom"===e.my[1]?z.top-=k:"center"===e.my[1]&&(z.top-=k/2),z.left+=A[0],z.top+=A[1],d={marginLeft:m,marginTop:r},a.each(["left","top"],function(b,c){a.ui.position[v[b]]&&a.ui.position[v[b]][c](z,{targetWidth:n,targetHeight:o,elemWidth:j,elemHeight:k,collisionPosition:d,collisionWidth:x,collisionHeight:y,offset:[l[0]+A[0],l[1]+A[1]],my:e.my,at:e.at,within:t,elem:i})}),e.using&&(h=function(a){var b=p.left-z.left,c=b+n-j,d=p.top-z.top,h=d+o-k,l={target:{element:s,left:p.left,top:p.top,width:n,height:o},element:{element:i,left:z.left,top:z.top,width:j,height:k},horizontal:c<0?"left":b>0?"right":"center",vertical:h<0?"top":d>0?"bottom":"middle"};n<j&&g(b+c)<n&&(l.horizontal="center"),o<k&&g(d+h)<o&&(l.vertical="middle"),f(g(b),g(c))>f(g(d),g(h))?l.important="horizontal":l.important="vertical",e.using.call(this,a,l)}),i.offset(a.extend(z,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,g=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-g-e;b.collisionWidth>g?i>0&&j<=0?(c=a.left+i+b.collisionWidth-g-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+g-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=f(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,g=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-g-e;b.collisionHeight>g?i>0&&j<=0?(c=a.top+i+b.collisionHeight-g-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+g-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=f(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,h=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-h-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-h-f,(c<0||c<g(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||g(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,h=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-h-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-h-f,(d<0||d<g(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||g(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}}}(),a.ui.position});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.resizable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c=this.options,d=this;this._addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),c.autoHide&&a(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var b,c,d,e,f,g=this.options,h=this;if(this.handles=g.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)b=a.trim(d[c]),e="ui-resizable-"+b,f=a("<div>"),this._addClass(f,"ui-resizable-handle "+e),f.css({zIndex:g.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.append(f);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(f=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=f&&f[1]?f[1]:"se")}),g.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),this._addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),!!i&&(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseFloat(k.element.css("left"))+(k.position.left-k.originalPosition.left)||null,i=parseFloat(k.element.css("top"))+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,k=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseFloat(c.element.css("width")),height:parseFloat(c.element.css("height")),top:parseFloat(c.element.css("top")),left:parseFloat(c.element.css("left"))};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseFloat(b.width()),height:parseFloat(b.height()),left:parseFloat(b.css("left")),top:parseFloat(b.css("top"))})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("ui-resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),b._addClass(b.ghost,"ui-resizable-ghost"),a.uiBackCompat!==!1&&"string"==typeof b.options.ghost&&b.ghost.addClass(this.options.ghost),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((o-k<=0||n-j<=0)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}}),a.ui.resizable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(a.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_keepFocus:function(b){function c(){var b=a.ui.safeActiveElement(this.document[0]),c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.trigger("focus")}),b.preventDefault()):(this._delay(function(){d.trigger("focus")}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:a("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(b,"ui-dialog-title"),this._title(b),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,f={icon:d.icon,iconPosition:d.iconPosition,showLabel:d.showLabel,icons:d.icons,text:d.text},delete d.click,delete d.icon,delete d.iconPosition,delete d.showLabel,delete d.icons,"boolean"==typeof d.text&&delete d.text,a("<button></button>",d).button(f).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){c._addClass(a(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},c._removeClass(a(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){c._addClass(a(this),"ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},c._removeClass(a(this),"ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);c!==-1&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(b,c){var d,e,f=this.uiDialog;"disabled"!==b&&(this._super(b,c),"appendTo"===b&&this.uiDialog.appendTo(this._appendTo()),"buttons"===b&&this._createButtons(),"closeText"===b&&this.uiDialogTitlebarClose.button({label:a("<a>").text(""+this.options.closeText).html()}),"draggable"===b&&(d=f.is(":data(ui-draggable)"),d&&!c&&f.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===b&&this._position(),"resizable"===b&&(e=f.is(":data(ui-resizable)"),e&&!c&&f.resizable("destroy"),e&&"string"==typeof c&&f.resizable("option","handles",c),e||c===!1||this._makeResizable()),"title"===b&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}}),a.ui.dialog});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',

    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef = void 0;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);

      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    dialog.show = function () {
      openDialog({ modal: false });
    };
    dialog.showModal = function () {
      openDialog({ modal: true });
    };
    dialog.close = closeDialog;

    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({ autoResize: true, maxHeight: '95%' }, drupalSettings.dialog);

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option = void 0;
    var optionValue = void 0;
    var adjustedValue = void 0;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = { settings: settings, $element: $element };
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', { resizable: false, draggable: false }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex = void 0;
      var index = void 0;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.dialog = {
    attach: function attach(context, settings) {
      var $context = $(context);

      if (!$('#drupal-modal').length) {
        $('<div id="drupal-modal" class="ui-front"></div>').hide().appendTo('body');
      }

      var $dialog = $context.closest('.ui-dialog-content');
      if ($dialog.length) {
        if ($dialog.dialog('option', 'drupalAutoButtons')) {
          $dialog.trigger('dialogButtonsChange');
        }

        $dialog.dialog('widget').trigger('focus');
      }

      var originalClose = settings.dialog.close;

      settings.dialog.close = function (event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        originalClose.apply(settings.dialog, [event].concat(args));
        $(event.target).remove();
      };
    },
    prepareDialogButtons: function prepareDialogButtons($dialog) {
      var buttons = [];
      var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
      $buttons.each(function () {
        var $originalButton = $(this).css({ display: 'none' });
        buttons.push({
          text: $originalButton.html() || $originalButton.attr('value'),
          class: $originalButton.attr('class'),
          click: function click(e) {
            if ($originalButton.is('a')) {
              $originalButton[0].click();
            } else {
              $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
              e.preventDefault();
            }
          }
        });
      });
      return buttons;
    }
  };

  Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
    if (!response.selector) {
      return false;
    }
    var $dialog = $(response.selector);
    if (!$dialog.length) {
      $dialog = $('<div id="' + response.selector.replace(/^#/, '') + '" class="ui-front"></div>').appendTo('body');
    }

    if (!ajax.wrapper) {
      ajax.wrapper = $dialog.attr('id');
    }

    response.command = 'insert';
    response.method = 'html';
    ajax.commands.insert(ajax, response, status);

    if (!response.dialogOptions.buttons) {
      response.dialogOptions.drupalAutoButtons = true;
      response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
    }

    $dialog.on('dialogButtonsChange', function () {
      var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
      $dialog.dialog('option', 'buttons', buttons);
    });

    response.dialogOptions = response.dialogOptions || {};
    var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);
    if (response.dialogOptions.modal) {
      dialog.showModal();
    } else {
      dialog.show();
    }

    $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
  };

  Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      Drupal.dialog($dialog.get(0)).close();
      if (!response.persist) {
        $dialog.remove();
      }
    }

    $dialog.off('dialogButtonsChange');
  };

  Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      $dialog.dialog('option', response.optionName, response.optionValue);
    }
  };

  $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
    $element.on('click.dialog', '.dialog-cancel', function (e) {
      dialog.close('cancel');
      e.preventDefault();
      e.stopPropagation();
    });
  });

  $(window).on('dialog:beforeclose', function (e, dialog, $element) {
    $element.off('.dialog');
  });
})(jQuery, Drupal);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()},"click .ui-menu-item":function(b){var c=a(b.target),d=a(a.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.select(b),b.isPropagationStopped()||(this.mouseHandled=!0),c.has(".ui-menu").length?this.expand(b):!this.element.is(":focus")&&d.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){if(!this.previousFilter){var c=a(b.target).closest(".ui-menu-item"),d=a(b.currentTarget);c[0]===d[0]&&(this._removeClass(d.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(b,d))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this.element.find(this.options.items).eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){var c=!a.contains(this.element[0],a.ui.safeActiveElement(this.document[0]));c&&this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1}})},_destroy:function(){var b=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),c=b.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),c.children().each(function(){var b=a(this);b.data("ui-menu-submenu-caret")&&b.remove()})},_keydown:function(b){var c,d,e,f,g=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:g=!1,d=this.previousFilter||"",f=!1,e=b.keyCode>=96&&b.keyCode<=105?(b.keyCode-96).toString():String.fromCharCode(b.keyCode),clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,c=this._filterMenuItems(e),c=f&&c.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):c,c.length||(e=String.fromCharCode(b.keyCode),c=this._filterMenuItems(e)),c.length?(this.focus(b,c),this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}g&&b.preventDefault()},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var b,c,d,e,f,g=this,h=this.options.icons.submenu,i=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),d=i.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),c=b.prev(),d=a("<span>").data("ui-menu-submenu-caret",!0);g._addClass(d,"ui-menu-icon","ui-icon "+h),c.attr("aria-haspopup","true").prepend(d),b.attr("aria-labelledby",c.attr("id"))}),this._addClass(d,"ui-menu","ui-widget ui-widget-content ui-front"),b=i.add(this.element),c=b.find(this.options.items),c.not(".ui-menu-item").each(function(){var b=a(this);g._isDivider(b)&&g._addClass(b,"ui-menu-divider","ui-widget-content")}),e=c.not(".ui-menu-item, .ui-menu-divider"),f=e.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(e,"ui-menu-item")._addClass(f,"ui-menu-item-wrapper"),c.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){if("icons"===a){var c=this.element.find(".ui-menu-icon");this._removeClass(c,null,this.options.icons.submenu)._addClass(c,null,b.submenu)}this._super(a,b)},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",String(a)),this._toggleClass(null,"ui-state-disabled",!!a)},focus:function(a,b){var c,d,e;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.children(".ui-menu-item-wrapper"),this._addClass(d,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),e=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(e,null,"ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&a&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.outerHeight(),e<0?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(b),this._removeClass(d.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(b){return!a(b.target).closest(".ui-menu").length},_isDivider:function(a){return!/[^\-\u2014\u2013\s]/.test(a.text())},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items).first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)},_filterMenuItems:function(b){var c=b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),d=new RegExp("^"+c,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return d.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./menu","../keycode","../position","../safe-active-element","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var b,c,d,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e,g="input"===e;this.isMultiLine=f||!g&&this._isContentEditable(this.element),this.valueMethod=this.element[f||g?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))return b=!0,d=!0,void(c=!0);b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:this.menu.active&&(b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());break;default:c=!0,this._searchTimeout(e)}},keypress:function(d){if(b)return b=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||d.preventDefault());if(!c){var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}}},input:function(a){return d?(d=!1,void a.preventDefault()):void this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),void this._change(a))}}),this._initSource(),this.menu=a("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(b){b.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==a.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(b,c){var d,e;return this.isNewMenu&&(this.isNewMenu=!1,b.originalEvent&&/^mouse/.test(b.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)})):(e=c.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",b,{item:e})&&b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(e.value),d=c.item.attr("aria-label")||e.value,void(d&&a.trim(d).length&&(this.liveRegion.children().hide(),a("<div>").text(d).appendTo(this.liveRegion))))},menuselect:function(b,c){var d=c.item.data("ui-autocomplete-item"),e=this.previous;this.element[0]!==a.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=e,this._delay(function(){this.previous=e,this.selectedItem=d})),!1!==this._trigger("select",b,{item:d})&&this._value(d.value),this.term=this._value(),this.close(b),this.selectedItem=d}}),this.liveRegion=a("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(b){var c=this.menu.element[0];return b.target===this.element[0]||b.target===c||a.contains(c,b.target)},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b&&b[0]||(b=this.element.closest(".ui-front, dialog")),b.length||(b=this.document[0].body),b},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var b=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;b&&(!b||c||d)||(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(a):void 0},_search:function(a){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var b=++this.requestIndex;return a.proxy(function(a){b===this.requestIndex&&this.__response(a),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return"string"==typeof b?{label:b,value:b}:a.extend({},b,{label:b.label||b.value,value:b.value||b.label})})},_suggest:function(b){var c=this.menu.element.empty();this._renderMenu(c,b),this.isNewMenu=!0,this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").append(a("<div>").text(c.label)).appendTo(b)},_move:function(a,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[a](b):void this.search(null,b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(a,b),b.preventDefault())},_isContentEditable:function(a){if(!a.length)return!1;var b=a.prop("contentEditable");return"inherit"===b?this._isContentEditable(a.parent()):"true"===b}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(b){var c;this._superApply(arguments),this.options.disabled||this.cancelSearch||(c=b&&b.length?this.options.messages.results(b.length):this.options.messages.noResults,this.liveRegion.children().hide(),a("<div>").text(c).appendTo(this.liveRegion))}}),a.ui.autocomplete});;
