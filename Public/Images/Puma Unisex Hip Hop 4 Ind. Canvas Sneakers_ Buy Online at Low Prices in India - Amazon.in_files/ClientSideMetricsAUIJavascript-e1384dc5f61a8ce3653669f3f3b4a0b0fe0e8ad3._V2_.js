(function(a,d,w){function m(a){for(var b={},c,d,f=0;f<a.length;f++)d=a[f],c=d.r+d.s+d.m,d.c&&(b[c]||(b[c]=[]),b[c].push(a[f]));return b}function q(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];try{if(c.isSupported)return c.send(a)}catch(d){}}}function h(){for(var a=0;a<B.length;a++)B[a]();E.length&&q(m(E.splice(0,E.length)),O,L,I);y=M=0}function l(c,f,r){r=r||{};0===r.bf&&b.isBF||(c={r:r.r||b.rid,s:r.s||a.ue_sid,m:r.m||a.ue_mid,mkt:r.mkt||a.ue_mkt,sn:r.sn||a.ue_sn,c:f,d:c,t:r.t||b.d(),
cs:r.c&&a.ue_qsl},r.b?q(m([c]),O,I):r.nb?q(m([c]),O,L,I):r.img||G[f]?q(m([c]),I):r.n?(E.push(c),0===N?h():y||(y=d.setTimeout(h,N))):(E.push(c),M||(M=d.setTimeout(h,H))))}function t(a,b,c){K++;K==x?l({m:"Max number of Forester Logs exceeded",f:"forester-client.js",logLevel:"ERROR"},d.ue_err_chan||"jserr"):K<x&&l(a,b,c)}function n(){if(!A){for(var a=0;a<f.length;a++)f[a]();for(a=0;a<B.length;a++)B[a]();q(m(E.splice(0,E.length)),O,I);A=!0}}var k={};(function(){function a(b){return 10>b?"0"+b:b}function b(a){d.lastIndex=
0;return d.test(a)?'"'+a.replace(d,function(a){var b=h[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,d){var g,k,h,u,l=f,n,D=d[a];D&&"object"===typeof D&&"function"===typeof D.toJSON&&(D=D.toJSON(a));"function"===typeof p&&(D=p.call(d,a,D));switch(typeof D){case "string":return b(D);case "number":return isFinite(D)?String(D):"null";case "boolean":case "null":return String(D);case "object":if(!D)return"null";f+=e;n=[];if("[object Array]"===
Object.prototype.toString.apply(D)){u=D.length;for(g=0;g<u;g+=1)n[g]=c(g,D)||"null";h=0===n.length?"[]":f?"[\n"+f+n.join(",\n"+f)+"\n"+l+"]":"["+n.join(",")+"]";f=l;return h}if(p&&"object"===typeof p)for(u=p.length,g=0;g<u;g+=1)"string"===typeof p[g]&&(k=p[g],(h=c(k,D))&&n.push(b(k)+(f?": ":":")+h));else for(k in D)Object.prototype.hasOwnProperty.call(D,k)&&(h=c(k,D))&&n.push(b(k)+(f?": ":":")+h);h=0===n.length?"{}":f?"{\n"+f+n.join(",\n"+f)+"\n"+l+"}":"{"+n.join(",")+"}";f=l;return h}}"function"!==
typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(b){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
f,e,h={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},p;"function"!==typeof k.stringify&&(k.stringify=function(a,b,d){var g;e=f="";if("number"===typeof d)for(g=0;g<d;g+=1)e+=" ";else"string"===typeof d&&(e=d);if((p=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return c("",{"":a})})})();var e=function(){function a(b,c){if(null==b)return c.push("!n");if("number"===typeof b)return c.push("!"+b);if("string"===
typeof b)return"\\"==b[b.length-1]?c.push("'"+b.replace(/'/g,"\\'")+"u005C'"):c.push("'"+b.replace(/'/g,"\\'")+"'");if("boolean"===typeof b)return c.push(b?"!t":"!f");if(b instanceof Array){c.push("*");for(var d=0;d<b.length;d++)a(b[d],c);return c.push(")")}if("object"==typeof b){c.push("(");for(d in b)b.hasOwnProperty(d)&&(c.push(d),a(b[d],c));return c.push(")")}return c.push("!n")}return{stringify:function(b){var c=[];a(b,c);return c.join("")}}}(),v=a.ue_qsl||2E3,x=1E3,z=function(){},c=d.JSON&&
d.JSON.stringify||k&&k.stringify,p=e.stringify,b=a.ue||{},e=a.uet||z;(a.uet||z)("bb","ue_frst_v2",{wb:1});var F="//"+a.ue_furl+"/1/batch/1/OE/",E=[],f=[],B=[],A=!1,y,M,N=void 0===a.ue_hpfi?1E3:a.ue_hpfi,H=void 0===a.ue_lpfi?1E4:a.ue_lpfi,G={"scheduled-delivery":1},K=0,L=function(){function f(){if(d.XDomainRequest){var a=new XDomainRequest;a.onerror=z;a.ontimeout=z;a.onprogress=z;a.onload=z;a.timeout=0;return a}if(d.XMLHttpRequest){a=new XMLHttpRequest;if(!("withCredentials"in a))throw"";return a}if(d.ActiveXObject){for(var b=
0;b<e.length&&!a;b++)try{a=new ActiveXObject(e[b]),e=[e[b]]}catch(c){}return a}}function k(c){for(var d=[],f=c[0]||{},e=0;e<c.length;e++){var h={};h[c[e].c]=c[e].d;d.push(h)}return{rid:f.r||b.rid,sid:f.s||a.ue_sid,mid:f.m||a.ue_mid,mkt:f.mkt||a.ue_mkt,sn:f.sn||a.ue_sn,reqs:d}}var e="MSXML2.XMLHTTP.6.0 MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");return{send:function(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b].length){var d=k(a[b]),e=f();
if(!e)throw"";e.open("POST",F,!0);e.setRequestHeader&&e.setRequestHeader("Content-type","text/plain");e.send(c(d))}},buildPOSTBodyLog:k,isSupported:!0}}(),I=function(){return{send:function(d){for(var f in d)if(d.hasOwnProperty(f)){for(var e=d[f],g=e,k={},h=void 0,l=0;l<g.length;l++)h=g[l].c,k[h]||(k[h]=[]),k[h].push(g[l]);var e=e[0]||{},g=e.sn||a.ue_sn,e=F+(e.m||a.ue_mid)+":"+(e.s||a.ue_sid)+":"+(e.r||b.rid)+(g?":"+g:""),g=[],h=e,l=[],n=void 0;for(n in k)if(k.hasOwnProperty(n))for(var m=0;m<k[n].length;m++){var q=
k[n][m],x=encodeURIComponent((q.cs?p:c)(q.d));l.push({l:x,t:q.t,p:1,c:n,d:q.cs?"c":"j"})}k=l;l=void 0;n="$";for(q=0;q<k.length;){m=k[q];l!=m.c?(h+=n+m.c+"=",n="&",l=m.c):h+=",";var x=h,t=m.d+":",z=m,h=(z.l.match(".{1,"+(v-h.length)+"}[^%]{0,2}")||[])[0]||"";z.l=z.l.substr(h.length);h=x+(t+h+":"+m.t);if(m.l)h+=":"+m.p++ +"_",g.push(h),h=e,n="$",l=0;else if(q++,1!=m.p)for(h+=":"+m.p+"_"+m.p,x=0;x<m.p-1;x++)g[g.length-x-1]+=m.p}g.push(h);e=g;for(g=0;g<e.length;g++)(new Image).src=e[g]}},isSupported:!0}}(),
O=function(){return{send:function(a){for(var b in a)if(a.hasOwnProperty(b)){var d=L.buildPOSTBodyLog(a[b]);if(!navigator.sendBeacon(F,c(d)))throw"";}},isSupported:!!navigator.sendBeacon}}();b._fic=I;b._fac=L;b._fbc=O;b._flq=E;b.sid=b.sid||a.ue_sid;b.mid=b.mid||a.ue_mid;b.furl=b.furl||a.ue_furl;b.sn=b.sn||a.ue_sn;b.isBF=function(){var a=d.performance||d.webkitPerformance,c=w.ue_backdetect&&w.ue_backdetect.ue_back&&document.ue_backdetect.ue_back.value,f=b.bfini;return a&&a.navigation&&2===a.navigation.type||
1<f||!f&&1<c}();try{d.amznJQ&&d.amznJQ.declareAvailable&&d.amznJQ.declareAvailable("forester-client"),d.P&&d.P.register&&d.P.register("forester-client",z)}catch(P){a.ueLogError(P,{logLevel:"WARN"})}(function(){b.log&&b.log.isStub&&(b.log.replay(function(a,b,c){var d=a[2]||{};d.t=b;d.r=c;d.n=1;t(a[0],a[1],d)}),b.onunload.replay(function(a){f.push(a[0])}),b.onflush.replay(function(a){B.push(a[0])}))})();b.log=t;b.log.reset=function(){K=0};b.onunload=function(a){f.push(a)};b.onflush=function(a){B.push(a)};
b.attach("beforeunload",n);b.attach("pagehide",n);e("ld","ue_frst_v2",{wb:1})})(ue_csm,window,document);
(function(a,d){function w(a){if(a)return a.replace(/^\s+|\s+$/g,"")}function m(c,h){if(!c)return{};c.m&&c.m.message&&(c=c.m);var b=h.m||h.message||"",b=c.m&&c.m.message?b+c.m.message:c.m&&c.m.target&&c.m.target.tagName?b+("Error handler invoked by "+c.m.target.tagName+" tag"):c.m?b+c.m:c.message?b+c.message:b+"Unknown error",b={m:b,f:c.f||c.sourceURL||c.fileName||c.filename||c.m&&c.m.target&&c.m.target.src,l:c.l||c.line||c.lineno||c.lineNumber,c:c.c?""+c.c:c.c,s:[],t:a.ue.d(),name:c.name,type:c.type,
csm:k+" "+(c.fromOnError?"onerror":"ueLogError")},l,m,f=0,t=0,A;l=c.stack||(c.err?c.err.stack:"");b.pageURL=h.pageURL||""+(window.location?window.location.href:"")||"missing";b.logLevel=h.logLevel||n;if(m=h.attribution)b.attribution=""+m;a.ue_ld_err&&d.performance&&d.performance.timing&&(m=d.performance.timing,t=window.performance&&window.performance.now&&window.performance.timing?window.performance.now()+window.performance.timing.navigationStart:+new Date,b.ld=0<m.loadEventStart&&(0===m.loadEventEnd||
t<m.loadEventEnd+3));if(l&&l.split)for(b.csm+=" stack",m=l.split("\n");f<m.length&&b.s.length<e;)(l=m[f++])&&b.s.push(w(l));else for(b.csm+=" callee",m=q(c.args||arguments,"callee"),t=f=0;m&&f<e;)A=v,m.skipTrace||(l=m.toString())&&l.substr&&(A=0===t?4*v:A,A=1==t?2*v:A,b.s.push(l.substr(0,A)),t++),m=q(m,"caller"),f++;if(!b.f&&0<b.s.length&&(f=b)&&f.s){var y;l=0<f.s.length?f.s[0]:"";m=1<f.s.length?f.s[1]:"";l&&(y=l.match(z));y&&3==y.length||!m||(y=m.match(x));y&&3==y.length&&(f.f=y[1],f.l=y[2])}return b}
function q(a,d){try{return a[d]}catch(b){}}function h(c,e){if(c){var b=m(c,e);a.ue.log(b,e.channel||t,{nb:1});try{if(!c.fromOnError){var h=d.console,k=d.JSON,f="Error logged with the Track&Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";if(h){if(k&&k.stringify)try{f+=k.stringify(b)}catch(l){f+="no info provided; converting to string failed"}else f+=b.m;"function"===typeof h.error?h.error(f,b):"function"===typeof h.log&&h.log(f,b)}}}catch(n){}}}function l(c,d){if(c&&!(a.ue_err.ec>
a.ue_err.mxe)){a.ue_err.ec++;a.ue_err.ter.push(c);d=d||{};var b=c.logLevel||d.logLevel;d.logLevel=b;d.attribution=c.attribution||d.attribution;b&&b!=n||ue_err.ecf++;h(c,d)}}if(!a.ueLogError||a.ueLogError.isStub){var t=a.ue_err_chan||"jserr",n="FATAL",k="v5",e=20,v=256,x=/\(?([^\s]*):(\d+):\d+\)?/,z=/.*@(.*):(\d*)/;h.skipTrace=1;m.skipTrace=1;l.skipTrace=1;(function(){if(a.ue_err.erl){var c=a.ue_err.erl.length,d,b;for(d=0;d<c;d++)b=a.ue_err.erl[d],h(b.ex,b.info);ue_err.erl=[]}})();a.ueLogError=l}})(ue_csm,
window);
(function(a,d){a.ue_cel||(a.ue_cel=function(){function w(a,d){d?d.r=x:d={r:x,c:1};d.clog&&k.clog?k.clog(a,d.ns||t,d):d.glog&&k.glog?k.glog(a,d.ns||t,d):k.log(a,d.ns||t,d)}function m(){var a=h.length;if(0<a){for(var d=[],b=0;b<a;b++){var e=h[b].api;e.ready()?(e.on({ts:k.d,ns:t}),l.push(h[b]),w({k:"mso",n:h[b].name,t:k.d()})):d.push(h[b])}h=d}}function q(){if(!q.executed){for(var a=0;a<l.length;a++)l[a].api.off&&l[a].api.off({ts:k.d,ns:t});w({k:"eod",t0:k.t0,t:k.d()},{c:1});q.executed=1;for(a=0;a<l.length;a++)h.push(l[a]);
l=[];clearTimeout(n)}}var h=[],l=[],t=a.ue_cel_ns||"cel",n,k=a.ue,e=a.uet,v=a.uex,x=k.rid,z=d.requestAnimationFrame||function(a){a()};if(k.isBF)w({k:"bft",t:k.d()});else return"function"==typeof e&&e("bb","csmCELLSframework",{wb:1}),setTimeout(m,0),k.onunload(q),n=setTimeout(q,6E5),"function"==typeof v&&v("ld","csmCELLSframework",{wb:1}),{registerModule:function(a,d){h.push({name:a,api:d});w({k:"mrg",n:a,t:k.d()});m()},reset:function(a){w({k:"rst",t0:k.t0,t:k.d()});h=h.concat(l);l=[];for(var d=h.length,
b=0;b<d;b++)h[b].api.off(),h[b].api.reset();x=a||k.rid;m();clearTimeout(n);n=setTimeout(q,6E5);q.executed=0},timeout:function(a,e){return d.setTimeout(function(){z(a)},e)},log:w}}())})(ue_csm,window);
(function(a,d,w){a.ue_pdm||ue.isBF||(a.ue_pdm=function(){function m(){var b={w:l.width,aw:l.availWidth,h:l.height,ah:l.availHeight,cd:l.colorDepth,pd:l.pixelDepth},c={w:w.body.scrollWidth,h:w.body.scrollHeight};e&&e.w==b.w&&e.h==b.h&&e.aw==b.aw&&e.ah==b.ah&&e.pd==b.pd&&e.cd==b.cd||(e=b,e.t=n(),e.k="sci",z(e));v&&v.w==c.w&&v.h==c.h||(v=c,v.t=n(),v.k="doi",z(v));t=a.ue_cel.timeout(m,k)}function q(){z({k:"ebl",t:n()})}function h(){z({k:"efo",t:n()})}var l,t,n,k,e,v,x=a.ue,z=a.ue_cel.log,c=a.uet,p=a.uex;
"function"==typeof c&&c("bb","csmCELLSpdm",{wb:1});return{on:function(b){k=b.timespan||500;n=b.ts;l=d.screen;x.attach&&(x.attach("blur",q,d),x.attach("focus",h,d));b=d.location;z({k:"pmd",o:b.origin,p:b.pathname,t:n()});a.ue_cel.timeout(m,0);"function"==typeof p&&p("ld","csmCELLSpdm",{wb:1})},off:function(a){clearTimeout(t);x.detach&&(x.detach("blur",q,d),x.detach("focus",h,d));x.count&&(x.count("cel.PDM.TotalExecutions",0),x.count("cel.PDM.TotalExecutionTime",0),x.count("cel.PDM.AverageExecutionTime",
0/0))},ready:function(){return w.body&&a.ue_cel&&a.ue_cel.log},reset:function(){e=v=null}}}(),a.ue_cel&&a.ue_cel.registerModule("page module",a.ue_pdm))})(ue_csm,window,document);
(function(a,d){a.ue_vpm||ue.isBF||(a.ue_vpm=function(){function w(){var a=t(),c={w:d.innerWidth,h:d.innerHeight,x:d.pageXOffset,y:d.pageYOffset};q&&q.w==c.w&&q.h==c.h&&q.x==c.x&&q.y==c.y||(c.t=a,c.k="vpi",q=c,v(q,{clog:1}));h=0;n=t()-a;k+=1}function m(){h||(h=a.ue_cel.timeout(w,l))}var q,h,l,t,n=0,k=0,e=a.ue,v=a.ue_cel.log,x=a.uet,z=a.uex,c=e.attach,p=e.detach;"function"==typeof x&&x("bb","csmCELLSvpm",{wb:1});return{on:function(b){t=b.ts;l=b.timespan||100;a.ue_cel.timeout(w,0);c&&(c("scroll",m),
c("resize",m));"function"==typeof z&&z("ld","csmCELLSvpm",{wb:1})},off:function(a){clearTimeout(h);p&&(p("scroll",m),p("resize",m));e.count&&(e.count("cel.VPI.TotalExecutions",k),e.count("cel.VPI.TotalExecutionTime",n),e.count("cel.VPI.AverageExecutionTime",n/k))},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){q=void 0},getVpi:function(){return q}}}(),a.ue_cel&&a.ue_cel.registerModule("viewport module",a.ue_vpm))})(ue_csm,window);
(function(a,d,w){var m=a.ue||{};!m.isBF&&!a.ue_fem&&w.querySelector&&d.getComputedStyle&&[].forEach&&(a.ue_fem=a.ue_bwd?function(){function q(a,b){return a>b?3>a-b:3>b-a}function h(a,b,c){var d;a:{try{if(a){var g=a.getBoundingClientRect();d={x:g.left+c.x|0,y:g.top+c.y|0,w:g.width|0,h:g.height|0,d:(0===a.offsetWidth&&0===a.offsetHeight)|0}}else d=void 0;break a}catch(f){}d=void 0}if(d&&!a.cel_b)a.cel_b=d,E({n:a.cel_n,w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,x:a.cel_b.x,y:a.cel_b.y,t:b,k:"ewi",cl:a.className},
{clog:1});else{if(c=d)c=a.cel_b,g=d,c=g.d===c.d&&1===g.d?!1:!(q(c.x,g.x)&&q(c.y,g.y)&&q(c.w,g.w)&&q(c.h,g.h)&&c.d===g.d);c&&(a.cel_b=d,E({n:a.cel_n,w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,x:a.cel_b.x,y:a.cel_b.y,t:b,k:"ewi"},{clog:1}))}}function l(a,b,c){var d;d=a.c?w.getElementsByClassName(a.c):a.id?[w.getElementById(a.id)]:w.querySelectorAll(a.s);a.w=[];for(widgetIndex=0;widgetIndex<d.length;widgetIndex++){var g=d[widgetIndex];g&&(g.cel_n||(g.cel_n=g.getAttribute("cel_widget_id")||(a.id_gen||F)(g,widgetIndex)||
g.id),a.w.push(g),k(r,g,b,c))}}function t(a,b){f.contains(a)||E({n:a.cel_n,t:b,k:"ewd"},{clog:1})}function n(a){I.length&&ue_cel.timeout(function(){for(var b=U(),d=!1;U()-b<c&&!d;){for(d=P;0<d--&&0<I.length;){var f=I.shift();g[f.type](f.elem,f.time,f.pageOffset)}d=0===I.length}O++;n(a)},0)}function k(a,b,c,d){I.push({type:a,elem:b,time:c,pageOffset:d})}function e(a,c,d){for(var g=0;g<b.length;g++)for(var f=b[g].w||[],e=0;e<f.length;e++)k(a,f[e],c,d)}function v(){L||(L=a.ue_cel.timeout(function(){L=
null;var a={x:d.pageXOffset,y:d.pageYOffset},c=p();e(u,c);for(var g=0;g<b.length;g++)k(J,b[g],c,a);n(c)},z))}function x(){L||K||(K=a.ue_cel.timeout(function(){K=null;var a={x:d.pageXOffset,y:d.pageYOffset},b=p();e(r,b,a);n(b)},z))}var z=50,c=4.5,p,b=[],F=function(){},E=a.ue_cel.log,f,B,A,y,M=d.MutationObserver||d.WebKitMutationObserver||d.MozMutationObserver,N=!!M,H,G,K,L,I=[],O=0,P=null,u="removedWidget",J="updateWidgets",r="processWidget",g,R=d.performance||{},U=R.now&&function(){return R.now()}||
function(){return Date.now()};"function"==typeof uet&&uet("bb","csmCELLSfem",{wb:1});return{on:function(c){function d(){if(A&&y&&f&&f.contains&&f.getBoundingClientRect&&p){g={removedWidget:t,updateWidgets:l,processWidget:h};if(N){var a={attributes:!0,subtree:!0};H=new M(x);G=new M(v);H.observe(f,a);G.observe(f,{childList:!0,subtree:!0});G.observe(B,a)}else A.call(f,"DOMAttrModified",x),A.call(f,"DOMNodeInserted",v),A.call(f,"DOMNodeRemoved",v),A.call(B,"DOMNodeInserted",x),A.call(B,"DOMNodeRemoved",
x);v()}}f=w.body;B=w.head;A=f.addEventListener;y=f.removeEventListener;p=c.ts;b=a.cel_widgets||[];P=c.bs||5;m.deffered?d():m.attach&&m.attach("load",d);"function"==typeof uex&&uex("ld","csmCELLSfem",{wb:1})},off:function(){A&&y&&f&&f.contains&&f.getBoundingClientRect&&p&&(G&&(G.disconnect(),G=null),H&&(H.disconnect(),H=null),y.call(f,"DOMAttrModified",x),y.call(f,"DOMNodeInserted",v),y.call(f,"DOMNodeRemoved",v),y.call(B,"DOMNodeInserted",x),y.call(B,"DOMNodeRemoved",x));m.count&&m.count("cel.widgets.batchesProcessed",
O)},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){b=a.cel_widgets||[]}}}():function(){function q(){a.ue_cel.timeout(function(){F.splice(0).forEach(function(a){E(a,{clog:1})})},0)}function h(a){for(var b={x:d.pageXOffset,y:d.pageYOffset},c=0;c<p.length;c++){var f=p[c];if(f.w&&f.w.length)for(var e=0;e<f.w.length;e++){var g=f.w[e],h;a:{try{var k=g,l=b;if(k){var n=k.getBoundingClientRect();h={x:n.left+l.x|0,y:n.top+l.y|0,w:n.width|0,h:n.height|0,d:(0===k.offsetWidth&&0===k.offsetHeight)|
0}}else h=void 0;break a}catch(m){}h=void 0}if(h&&!g.cel_b)g.cel_b=h,F.push({n:g.cel_n,w:g.cel_b.w,h:g.cel_b.h,d:g.cel_b.d,x:g.cel_b.x,y:g.cel_b.y,t:a,k:"ewi",cl:g.className});else{if(k=h)k=g.cel_b,l=h,k=l.d===k.d&&1===l.d?!1:!(t(k.x,l.x)&&t(k.y,l.y)&&t(k.w,l.w)&&t(k.h,l.h)&&k.d===l.d);k&&(g.cel_b=h,F.push({n:g.cel_n,w:g.cel_b.w,h:g.cel_b.h,d:g.cel_b.d,x:g.cel_b.x,y:g.cel_b.y,t:a,k:"ewi"}))}}}}function l(a){for(var c=0;c<p.length;c++){var d=p[c],e;e=d;e=e.c?w.getElementsByClassName(e.c):e.id?[w.getElementById(e.id)]:
w.querySelectorAll(e.s);var h=d.w||[],g;for(g=0;g<h.length;g++){var l=h[g];f.contains(l)||F.push({n:l.cel_n,t:a,k:"ewd"})}d.w=[];for(g=0;g<e.length;g++)if(h=e[g])h.cel_n||(h.cel_n=h.getAttribute("cel_widget_id")||(d.id_gen||b)(h,g)||h.id),d.w.push(h)}k()}function t(a,b){return a>b?3>a-b:3>b-a}function n(){L||(L=a.ue_cel.timeout(function(){L=null;e("dwe",l);q()},v))}function k(){L||K||(K=a.ue_cel.timeout(function(){K=null;e("dwpc",h);q()},v))}function e(a,b){var d=c();b(d);var f=c(),d=f-d;d<=x?f=0:
f-I>=z?(I=f,f=0):(ue_fem.off(),f=1);(F.length||f)&&F.push({k:"ewt",e:a,d:d,ex:f,t:c()})}var v=50,x=10,z=3E3,c,p=[],b=function(){},F=[],E=a.ue_cel.log,f,B,A,y,M=d.MutationObserver||d.WebKitMutationObserver||d.MozMutationObserver,N=!!M,H,G,K,L,I=-z;"function"==typeof uet&&uet("bb","csmCELLSfem",{wb:1});return{on:function(b){function d(){if(A&&y&&f&&f.contains&&f.getBoundingClientRect&&c){if(N){var a={attributes:!0,subtree:!0};H=new M(k);G=new M(n);H.observe(f,a);G.observe(f,{childList:!0,subtree:!0});
G.observe(B,a)}else A.call(f,"DOMAttrModified",k),A.call(f,"DOMNodeInserted",n),A.call(f,"DOMNodeRemoved",n),A.call(B,"DOMNodeInserted",k),A.call(B,"DOMNodeRemoved",k);n()}}f=w.body;B=w.head;A=f.addEventListener;y=f.removeEventListener;c=b.ts;p=a.cel_widgets||[];m.deffered?d():m.attach&&m.attach("load",d);"function"==typeof uex&&uex("ld","csmCELLSfem",{wb:1})},off:function(){A&&y&&f&&f.contains&&f.getBoundingClientRect&&c&&(G&&(G.disconnect(),G=null),H&&(H.disconnect(),H=null),y.call(f,"DOMAttrModified",
k),y.call(f,"DOMNodeInserted",n),y.call(f,"DOMNodeRemoved",n),y.call(B,"DOMNodeInserted",k),y.call(B,"DOMNodeRemoved",k))},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){p=a.cel_widgets||[]}}}(),a.ue_cel&&a.ue_fem&&a.ue_cel.registerModule("features module",a.ue_fem))})(ue_csm,window,document);