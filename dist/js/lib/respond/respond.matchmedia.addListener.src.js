!function(e){"use strict";var t,n,a,i,s,r;e.matchMedia=e.matchMedia||(t=e.document,a=t.documentElement,i=a.firstElementChild||a.firstChild,s=t.createElement("body"),(r=t.createElement("div")).id="mq-test-1",r.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',a.insertBefore(s,i),n=42===r.offsetWidth,a.removeChild(s),{matches:n,media:e}})}(this),function(e){"use strict";if(e.matchMedia&&e.matchMedia("all").addListener)return!1;var t=e.matchMedia,n=t("only all").matches,a=!1,i=0,s=[],r=function(n){e.clearTimeout(i),i=e.setTimeout(function(){for(var n=0,a=s.length;n<a;n++){var i=s[n].mql,r=s[n].listeners||[],o=t(i.media).matches;if(o!==i.matches){i.matches=o;for(var l=0,m=r.length;l<m;l++)r[l].call(e,i)}}},30)};e.matchMedia=function(i){var o=t(i),l=[],m=0;return o.addListener=function(t){n&&(a||(a=!0,e.addEventListener("resize",r,!0)),0===m&&(m=s.push({mql:o,listeners:l})),l.push(t))},o.removeListener=function(e){for(var t=0,n=l.length;t<n;t++)l[t]===e&&l.splice(t,1)},o}}(this),function(e){"use strict";var t={};e.respond=t,t.update=function(){};var n=[],a=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),i=function(e,t){var n=a();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))};if(t.ajax=i,t.queue=n,t.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},t.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!t.mediaQueriesSupported){var s,r,o,l=e.document,m=l.documentElement,d=[],h=[],c=[],u={},f=l.getElementsByTagName("head")[0]||m,p=l.getElementsByTagName("base")[0],y=f.getElementsByTagName("link"),g=function(){var e,t=l.createElement("div"),n=l.body,a=m.style.fontSize,i=n&&n.style.fontSize,s=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||((n=s=l.createElement("body")).style.background="none"),m.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),s&&m.insertBefore(n,m.firstChild),e=t.offsetWidth,s?m.removeChild(n):n.removeChild(t),m.style.fontSize=a,i&&(n.style.fontSize=i),e=o=parseFloat(e)},v=function(t){var n="clientWidth",a=m[n],i="CSS1Compat"===l.compatMode&&a||l.body[n]||a,u={},p=y[y.length-1],x=(new Date).getTime();if(t&&s&&x-s<30)return e.clearTimeout(r),void(r=e.setTimeout(v,30));for(var E in s=x,d)if(d.hasOwnProperty(E)){var w=d[E],S=w.minw,T=w.maxw,C=null===S,b=null===T;S&&(S=parseFloat(S)*(S.indexOf("em")>-1?o||g():1)),T&&(T=parseFloat(T)*(T.indexOf("em")>-1?o||g():1)),w.hasquery&&(C&&b||!(C||i>=S)||!(b||i<=T))||(u[w.media]||(u[w.media]=[]),u[w.media].push(h[w.rules]))}for(var M in c)c.hasOwnProperty(M)&&c[M]&&c[M].parentNode===f&&f.removeChild(c[M]);for(var z in c.length=0,u)if(u.hasOwnProperty(z)){var $=l.createElement("style"),L=u[z].join("\n");$.type="text/css",$.media=z,f.insertBefore($,p.nextSibling),$.styleSheet?$.styleSheet.cssText=L:$.appendChild(l.createTextNode(L)),c.push($)}},x=function(e,n,a){var i=e.replace(t.regex.keyframes,"").match(t.regex.media),s=i&&i.length||0,r=function(e){return e.replace(t.regex.urls,"$1"+n+"$2$3")},o=!s&&a;(n=n.substring(0,n.lastIndexOf("/"))).length&&(n+="/"),o&&(s=1);for(var l=0;l<s;l++){var m,c,u,f;o?(m=a,h.push(r(e))):(m=i[l].match(t.regex.findStyles)&&RegExp.$1,h.push(RegExp.$2&&r(RegExp.$2))),f=(u=m.split(",")).length;for(var p=0;p<f;p++)c=u[p],d.push({media:c.split("(")[0].match(t.regex.only)&&RegExp.$2||"all",rules:h.length-1,hasquery:c.indexOf("(")>-1,minw:c.match(t.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:c.match(t.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},E=function(){if(n.length){var t=n.shift();i(t.href,function(n){x(n,t.href,t.media),u[t.href]=!0,e.setTimeout(function(){E()},0)})}},w=function(){for(var t=0;t<y.length;t++){var a=y[t],i=a.href,s=a.media,r=a.rel&&"stylesheet"===a.rel.toLowerCase();i&&r&&!u[i]&&(a.styleSheet&&a.styleSheet.rawCssText?(x(a.styleSheet.rawCssText,i,s),u[i]=!0):(/^([a-zA-Z:]*\/\/)/.test(i)||p)&&i.replace(RegExp.$1,"").split("/")[0]!==e.location.host||("//"===i.substring(0,2)&&(i=e.location.protocol+i),n.push({href:i,media:s})))}E()};w(),t.update=w,t.getEmValue=g,e.addEventListener?e.addEventListener("resize",S,!1):e.attachEvent&&e.attachEvent("onresize",S)}function S(){v(!0)}}(this);