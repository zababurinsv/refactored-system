function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequirec3cc;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequirec3cc=o);JSON.parse('{"name":"@newkind/debug","version":"0.1.0","description":"peer to peer connect","module":"./dist/index.mjs","main":"./dist/index.mjs","author":"Zababurin Sergey","license":"GPL-3.0-only","targets":{"main":false,"dev":{"includeNodeModules":true,"optimize":false,"isLibrary":false,"distDir":"service","sourceMap":true,"publicUrl":"/","source":"./frontend/src/index.html"},"service":{"includeNodeModules":true,"optimize":true,"isLibrary":false,"distDir":"service","sourceMap":false,"publicUrl":"/","source":"./frontend/src/index.html"},"global":{"includeNodeModules":true,"optimize":false,"isLibrary":false,"sourceMap":false,"source":"./frontend/src/index.mjs"},"module":{"includeNodeModules":true,"optimize":true,"isLibrary":true,"sourceMap":false,"source":"./frontend/src/index.mjs"}},"palette":{"zb":{"scope":"/palette/src/github.com/zababurinsv/","active":"newkind-db/frontend/src","self":{"auction":"newkind-auction","tera":"newkind-db/frontend/src"},"static":"static","port":6112,"portTunnel":5005,"wstunHost":"ws://localhost:5000"}},"config":{"highWaterMark":300,"port":{"dev":4518,"service":4519,"palette":6112},"list":{"white":["http://localhost:4517","https://zababurinsv.github.io/newkind-service/"],"black":[]}},"scripts":{"dev":"redrun --parallel-calm server:dev watch:static","server:dev":"rimraf ./service/* && parcel --cache-dir ./.parcel-cache --no-hmr --port $npm_package_config_port_dev --dist-dir $npm_package_targets_dev_distDir --public-url $npm_package_targets_dev_publicUrl --target dev","server:service":"nodemon ./backend/index.mjs","server:palette":"nodemon server.mjs","build:service":"rimraf ./service/* && rimraf .parcel-cache && parcel build --target service","build:module":"rimraf ./dist/* && parcel build --target module","build:browser":"rimraf ./dist/* && parcel build --target global","watch:static":"gulp","build:docs":"rimraf ./docs/* && jsdoc -c jsdoc.json","build:readme":"jsdoc2md --configure jsdoc.json --source frontend/index.mjs > md_api.md && cat ./md_info.md ./md_api.md > ./README.md","deploy:gh":"gh-pages -d service/template","download:packages":"./scripts/packages.sh","download:palette":"./scripts/palette.sh","download:node":"./scripts/node.sh","download:server":"./scripts/server.sh","pm2:monit":"pm2 monit","pm2:logs":"pm2 logs --out --lines 200","pm2:list":"pm2 list","clean":"rimraf ./service/* && rimraf ./dist/* && rimraf ./docs/* && rimraf ./md_api.md && find . -name \\".parcel-cache\\" -exec rm -rf \'{}\' +;","kill:dev":"kill $(lsof -t -i:$npm_package_config_port_dev)","kill:service":"kill $(lsof -t -i:$npm_package_config_port_service)","kill:palette":"kill $(lsof -t -i:$npm_package_config_port_palette)"},"dependencies":{"comlink":"^4.3.1","compression":"^1.7.4","cors":"^2.8.5","express":"^4.17.1","express-enqueue":"^1.0.0","libsodium-wrappers":"^0.7.9","nodemon":"^2.0.15","socket.io":"^4.4.0","template-colors-web":"^1.0.0","web-streams-polyfill":"^3.2.0","websocket":"^1.0.34","xmldom":"^0.6.0"},"devDependencies":{"@newkind/tests":"^0.2.6","@parcel/packager-raw-url":"^2.0.1","@parcel/transformer-sass":"^2.0.1","@parcel/transformer-webmanifest":"^2.0.1","@types/libsodium-wrappers":"^0.7.9","docdash":"^1.2.0","gh-pages":"^3.2.3","gulp":"^4.0.2","jsdoc":"^3.6.7","jsdoc-to-markdown":"^7.1.0","parcel":"2.0.1","parcel-plugin-typed-css-modules":"^1.1.0","pm2":"^5.1.2","postcss":"^8.4.4","redrun":"^9.0.1","rimraf":"^3.0.2"},"eslintConfig":{"extends":["react-app","react-app/jest"]}}');let a=Object.prototype.hasOwnProperty,s=Object.prototype.toString;var c,u=function(e){if(null==e)return!0;if("boolean"==typeof e)return!1;if("number"==typeof e)return 0===e;if("string"==typeof e)return 0===e.length;if("function"==typeof e)return 0===e.length;if(Array.isArray(e)){return e instanceof Object?0===Object.keys(e).length:0===e.length}if(e instanceof Error)return""===e.message;if(e.toString==s)switch(e.toString()){case"[object File]":case"[object Map]":case"[object Set]":return 0===e.size;case"[object Object]":for(var t in e)if(a.call(e,t))return!1;return!0}return!1},l={};o.register("7HIkG",(function(e,t){var r=o("cLZ9V");const n=/(rgb(?:BG)?)\((\s*\d+\s*)\,(\s*\d+\s*)\,(\s*\d+\s*)\)/,i=/(style)\(['"](.+?)['"]\)/;let a=[],s={},c=u();function u(){return new RegExp(`^\\.((?:\\.?(?:${a.length?a.join("|")+"|":""}style\\(['"].+?['"]\\)|rgb(?:BG)?\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*\\)))+)`)}function d(e,t){let o=t.match(n),a=t.match(i);if(!o||s[t])return a?e.style(a[2]):s[t]?(s[t].forEach((t=>{e=d(e,t)})),e):e[t]instanceof r?e[t].toString():"function"==typeof e[t]?e[t]():e[t];{let t=o[1],r=o[2],n=o[3],i=o[4];if("rgb"===t)return e.rgb(r,n,i);if("rgbBG"===t)return e.rgbBG(r,n,i)}}function p(e,t,...r){let n="";return t.forEach(((t,i,o)=>{let a=r.shift(),s=o[i+1];a=void 0===a?"":String(a),t=String(t).replace(c,"");{let r=String(s).match(c);r&&a&&r[1].split(".").forEach((e=>a=d(a,e))),e.forEach((e=>t=d(t,e))),a&&e.forEach((e=>a=d(a,e))),n+=t+a}})),n}p.define=(e,t)=>{"string"==typeof t&&(t=[t]),a.push(e),s[e]=t,c=u(),Object.defineProperty&&(Object.defineProperty(l.prototype,e,{get:function(){return this.styles=this.styles.concat(t),this}}),Object.defineProperty(String.prototype,e,{get:function(){return new l([[this]])[e]}}),Object.defineProperty(r.prototype,e,{get:function(){return new l([[this]])[e]}}))},e.exports=p})),o.register("cLZ9V",(function(e,t){function r(e,t){return`<span style="${t}">${e}</span>`}class n{constructor(e){this.string=e}toString(){return this.string}rgb(e,t,i){return new n(r(this,`color: rgb(${e}, ${t}, ${i})`))}rgbBG(e,t,i){return new n(r(this,`background-color: rgb(${e}, ${t}, ${i})`))}style(e){return new n(r(this,e))}}try{String.prototype.rgb=n.prototype.rgb,String.prototype.rgbBG=n.prototype.rgbBG,String.prototype.style=n.prototype.style}catch(e){console.log(e)}e.exports=n}));l=class{constructor(e){this.styles=[],this.templateArgs=e}toString(){return o("7HIkG")(this.styles,...this.templateArgs)}rgb(e,t,r){return this.styles.push(`rgb(${e},${t},${r})`),this}rgbBG(e,t,r){return this.styles.push(`rgbBG(${e},${t},${r})`),this}style(e){return this.styles.push(`style('${e}')`),this}};var d,p=o("cLZ9V"),f={};o.register("9sJrG",(function(e,r){var n;function i(e){this.options=e||{locator:{}}}function a(){this.cdata=!1}function s(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}function c(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function u(e,t,r){return"string"==typeof e?e.substr(t,r):e.length>=t+r||t?new java.lang.String(e,t,r)+"":e}function l(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}t(e.exports,"DOMParser",(()=>n),(e=>n=e)),i.prototype.parseFromString=function(e,t){var r=this.options,n=new f,i=r.domBuilder||new a,o=r.errorHandler,s=r.locator,u=r.xmlns||{},l=/\/x?html?$/.test(t),p=l?d.entityMap:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return s&&i.setDocumentLocator(s),n.errorHandler=function(e,t,r){if(!e){if(t instanceof a)return t;e=t}var n={},i=e instanceof Function;function o(t){var o=e[t];!o&&i&&(o=2==e.length?function(r){e(t,r)}:e),n[t]=o&&function(e){o("[xmldom "+t+"]\t"+e+c(r))}||function(){}}return r=r||{},o("warning"),o("error"),o("fatalError"),n}(o,i,s),n.domBuilder=r.domBuilder||i,l&&(u[""]="http://www.w3.org/1999/xhtml"),u.xml=u.xml||"http://www.w3.org/XML/1998/namespace",e&&"string"==typeof e?n.parse(e,u,p):n.errorHandler.error("invalid doc source"),i.doc},a.prototype={startDocument:function(){this.doc=(new h).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,r,n){var i=this.doc,o=i.createElementNS(e,r||t),a=n.length;l(this,o),this.currentElement=o,this.locator&&s(this.locator,o);for(var c=0;c<a;c++){e=n.getURI(c);var u=n.getValue(c),d=(r=n.getQName(c),i.createAttributeNS(e,r));this.locator&&s(n.getLocator(c),d),d.value=d.nodeValue=u,o.setAttributeNode(d)}},endElement:function(e,t,r){var n=this.currentElement;n.tagName;this.currentElement=n.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var r=this.doc.createProcessingInstruction(e,t);this.locator&&s(this.locator,r),l(this,r)},ignorableWhitespace:function(e,t,r){},characters:function(e,t,r){if(e=u.apply(this,arguments)){if(this.cdata)var n=this.doc.createCDATASection(e);else n=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(n):/^\s*$/.test(e)&&this.doc.appendChild(n),this.locator&&s(this.locator,n)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,r){e=u.apply(this,arguments);var n=this.doc.createComment(e);this.locator&&s(this.locator,n),l(this,n)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,r){var n=this.doc.implementation;if(n&&n.createDocumentType){var i=n.createDocumentType(e,t,r);this.locator&&s(this.locator,i),l(this,i)}},warning:function(e){console.warn("[xmldom warning]\t"+e,c(this.locator))},error:function(e){console.error("[xmldom error]\t"+e,c(this.locator))},fatalError:function(e){throw new m(e,this.locator)}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,(function(e){a.prototype[e]=function(){return null}}));var d=o("eJpNc"),p=o("8FK97"),f=p.XMLReader,m=p.ParseError,h=o("dPxIV").DOMImplementation;o("dPxIV").XMLSerializer,n=i})),o.register("eJpNc",(function(e,r){var n;t(e.exports,"entityMap",(()=>n),(e=>n=e)),n={lt:"<",gt:">",amp:"&",quot:'"',apos:"'",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",times:"×",divide:"÷",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",euro:"€",trade:"™",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"}})),o.register("8FK97",(function(e,r){var n,i;t(e.exports,"XMLReader",(()=>n),(e=>n=e)),t(e.exports,"ParseError",(()=>i),(e=>i=e));var o=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,a=new RegExp("[\\-\\.0-9"+o.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),s=new RegExp("^"+o.source+a.source+"*(?::"+o.source+a.source+"*)?$");function c(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,c)}function u(){}function l(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function d(e,t,r,n,i,o){function a(e,t,n){e in r.attributeNames&&o.fatalError("Attribute "+e+" redefined"),r.addValue(e,t,n)}for(var s,c=++t,u=0;;){var l=e.charAt(c);switch(l){case"=":if(1===u)s=e.slice(t,c),u=3;else{if(2!==u)throw new Error("attribute equal must after attrName");u=3}break;case"'":case'"':if(3===u||1===u){if(1===u&&(o.warning('attribute value must after "="'),s=e.slice(t,c)),t=c+1,!((c=e.indexOf(l,t))>0))throw new Error("attribute value no end '"+l+"' match");a(s,d=e.slice(t,c).replace(/&#?\w+;/g,i),t-1),u=5}else{if(4!=u)throw new Error('attribute value must after "="');a(s,d=e.slice(t,c).replace(/&#?\w+;/g,i),t),o.warning('attribute "'+s+'" missed start quot('+l+")!!"),t=c+1,u=5}break;case"/":switch(u){case 0:r.setTagName(e.slice(t,c));case 5:case 6:case 7:u=7,r.closed=!0;case 4:case 1:case 2:break;default:throw new Error("attribute invalid close char('/')")}break;case"":return o.error("unexpected end of input"),0==u&&r.setTagName(e.slice(t,c)),c;case">":switch(u){case 0:r.setTagName(e.slice(t,c));case 5:case 6:case 7:break;case 4:case 1:"/"===(d=e.slice(t,c)).slice(-1)&&(r.closed=!0,d=d.slice(0,-1));case 2:2===u&&(d=s),4==u?(o.warning('attribute "'+d+'" missed quot(")!'),a(s,d.replace(/&#?\w+;/g,i),t)):("http://www.w3.org/1999/xhtml"===n[""]&&d.match(/^(?:disabled|checked|selected)$/i)||o.warning('attribute "'+d+'" missed value!! "'+d+'" instead!!'),a(d,d,t));break;case 3:throw new Error("attribute value missed!!")}return c;case"":l=" ";default:if(l<=" ")switch(u){case 0:r.setTagName(e.slice(t,c)),u=6;break;case 1:s=e.slice(t,c),u=2;break;case 4:var d=e.slice(t,c).replace(/&#?\w+;/g,i);o.warning('attribute "'+d+'" missed quot(")!!'),a(s,d,t);case 5:u=6}else switch(u){case 2:r.tagName;"http://www.w3.org/1999/xhtml"===n[""]&&s.match(/^(?:disabled|checked|selected)$/i)||o.warning('attribute "'+s+'" missed value!! "'+s+'" instead2!!'),a(s,s,t),t=c,u=1;break;case 5:o.warning('attribute space is required"'+s+'"!!');case 6:u=1,t=c;break;case 3:u=4,t=c;break;case 7:throw new Error("elements closed character '/' and '>' must be connected to")}}c++}}function p(e,t,r){for(var n=e.tagName,i=null,o=e.length;o--;){var a=e[o],s=a.qName,c=a.value;if((p=s.indexOf(":"))>0)var u=a.prefix=s.slice(0,p),l=s.slice(p+1),d="xmlns"===u&&l;else l=s,u=null,d="xmlns"===s&&"";a.localName=l,!1!==d&&(null==i&&(i={},h(r,r={})),r[d]=i[d]=c,a.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(d,c))}for(o=e.length;o--;){(u=(a=e[o]).prefix)&&("xml"===u&&(a.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==u&&(a.uri=r[u||""]))}var p;(p=n.indexOf(":"))>0?(u=e.prefix=n.slice(0,p),l=e.localName=n.slice(p+1)):(u=null,l=e.localName=n);var f=e.uri=r[u||""];if(t.startElement(f,l,n,e),!e.closed)return e.currentNSMap=r,e.localNSMap=i,!0;if(t.endElement(f,l,n),i)for(u in i)t.endPrefixMapping(u)}function f(e,t,r,n,i){if(/^(?:script|textarea)$/i.test(r)){var o=e.indexOf("</"+r+">",t),a=e.substring(t+1,o);if(/[&<]/.test(a))return/^script$/i.test(r)?(i.characters(a,0,a.length),o):(a=a.replace(/&#?\w+;/g,n),i.characters(a,0,a.length),o)}return t+1}function m(e,t,r,n){var i=n[r];return null==i&&((i=e.lastIndexOf("</"+r+">"))<t&&(i=e.lastIndexOf("</"+r)),n[r]=i),i<t}function h(e,t){for(var r in e)t[r]=e[r]}function g(e,t,r,n){if("-"===e.charAt(t+2))return"-"===e.charAt(t+3)?(i=e.indexOf("--\x3e",t+4))>t?(r.comment(e,t+4,i-t-4),i+3):(n.error("Unclosed comment"),-1):-1;if("CDATA["==e.substr(t+3,6)){var i=e.indexOf("]]>",t+9);return r.startCDATA(),r.characters(e,t+9,i-t-9),r.endCDATA(),i+3}var o=function(e,t){var r,n=[],i=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;i.lastIndex=t,i.exec(e);for(;r=i.exec(e);)if(n.push(r),r[1])return n}(e,t),a=o.length;if(a>1&&/!doctype/i.test(o[0][0])){var s=o[1][0],c=!1,u=!1;a>3&&(/^public$/i.test(o[2][0])?(c=o[3][0],u=a>4&&o[4][0]):/^system$/i.test(o[2][0])&&(u=o[3][0]));var l=o[a-1];return r.startDTD(s,c,u),r.endDTD(),l.index+l[0].length}return-1}function b(e,t,r){var n=e.indexOf("?>",t);if(n){var i=e.substring(t,n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if(i){i[0].length;return r.processingInstruction(i[1],i[2]),n+2}return-1}return-1}function v(){this.attributeNames={}}c.prototype=new Error,c.prototype.name=c.name,u.prototype={parse:function(e,t,r){var n=this.domBuilder;n.startDocument(),h(t,t={}),function(e,t,r,n,i){function o(e){if(e>65535){var t=55296+((e-=65536)>>10),r=56320+(1023&e);return String.fromCharCode(t,r)}return String.fromCharCode(e)}function a(e){var t=e.slice(1,-1);return t in r?r[t]:"#"===t.charAt(0)?o(parseInt(t.substr(1).replace("x","0x"))):(i.error("entity not found:"+e),e)}function s(t){if(t>D){var r=e.substring(D,t).replace(/&#?\w+;/g,a);y&&u(D),n.characters(r,0,t-D),D=t}}function u(t,r){for(;t>=w&&(r=N.exec(e));)h=r.index,w=h+r[0].length,y.lineNumber++;y.columnNumber=t-h+1}var h=0,w=0,N=/.*(?:\r\n?|\n)|.*$/g,y=n.locator,E=[{currentNSMap:t}],x={},D=0;for(;;){try{var T=e.indexOf("<",D);if(T<0){if(!e.substr(D).match(/^\s*$/)){var S=n.doc,C=S.createTextNode(e.substr(D));S.appendChild(C),n.currentElement=C}return}switch(T>D&&s(T),e.charAt(T+1)){case"/":var _=e.indexOf(">",T+3),A=e.substring(T+2,_),I=E.pop();_<0?(A=e.substring(T+2).replace(/[\s<].*/,""),i.error("end tag name: "+A+" is not complete:"+I.tagName),_=T+1+A.length):A.match(/\s</)&&(A=A.replace(/[\s<].*/,""),i.error("end tag name: "+A+" maybe not complete"),_=T+1+A.length);var O=I.localNSMap,R=I.tagName==A;if(R||I.tagName&&I.tagName.toLowerCase()==A.toLowerCase()){if(n.endElement(I.uri,I.localName,A),O)for(var k in O)n.endPrefixMapping(k);R||i.fatalError("end tag name: "+A+" is not match the current start tagName:"+I.tagName)}else E.push(I);_++;break;case"?":y&&u(T),_=b(e,T,n);break;case"!":y&&u(T),_=g(e,T,n,i);break;default:y&&u(T);var $=new v,M=E[E.length-1].currentNSMap,j=(_=d(e,T,$,M,a,i),$.length);if(!$.closed&&m(e,_,$.tagName,x)&&($.closed=!0,r.nbsp||i.warning("unclosed xml attribute")),y&&j){for(var U=l(y,{}),P=0;P<j;P++){var F=$[P];u(F.offset),F.locator=l(y,{})}n.locator=U,p($,n,M)&&E.push($),n.locator=y}else p($,n,M)&&E.push($);"http://www.w3.org/1999/xhtml"!==$.uri||$.closed?_++:_=f(e,_,$.tagName,a,n)}}catch(e){if(e instanceof c)throw e;i.error("element parse error: "+e),_=-1}_>D?D=_:s(Math.max(T,D)+1)}}(e,t,r,n,this.errorHandler),n.endDocument()}},v.prototype={setTagName:function(e){if(!s.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},addValue:function(e,t,r){if(!s.test(e))throw new Error("invalid attribute:"+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:r}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}},n=u,i=c})),o.register("dPxIV",(function(e,r){var n,i;function o(e,t){for(var r in e)t[r]=e[r]}function a(e,t){var r=e.prototype;if(!(r instanceof t)){function n(){}n.prototype=t.prototype,o(r,n=new n),e.prototype=r=n}r.constructor!=e&&("function"!=typeof e&&console.error("unknow Class:"+e),r.constructor=e)}t(e.exports,"DOMImplementation",(()=>n),(e=>n=e)),t(e.exports,"XMLSerializer",(()=>i),(e=>i=e));var s={},c=s.ELEMENT_NODE=1,u=s.ATTRIBUTE_NODE=2,l=s.TEXT_NODE=3,d=s.CDATA_SECTION_NODE=4,p=s.ENTITY_REFERENCE_NODE=5,f=s.ENTITY_NODE=6,m=s.PROCESSING_INSTRUCTION_NODE=7,h=s.COMMENT_NODE=8,g=s.DOCUMENT_NODE=9,b=s.DOCUMENT_TYPE_NODE=10,v=s.DOCUMENT_FRAGMENT_NODE=11,w=s.NOTATION_NODE=12,N={},y={},E=(N.INDEX_SIZE_ERR=(y[1]="Index size error",1),N.DOMSTRING_SIZE_ERR=(y[2]="DOMString size error",2),N.HIERARCHY_REQUEST_ERR=(y[3]="Hierarchy request error",3)),x=(N.WRONG_DOCUMENT_ERR=(y[4]="Wrong document",4),N.INVALID_CHARACTER_ERR=(y[5]="Invalid character",5),N.NO_DATA_ALLOWED_ERR=(y[6]="No data allowed",6),N.NO_MODIFICATION_ALLOWED_ERR=(y[7]="No modification allowed",7),N.NOT_FOUND_ERR=(y[8]="Not found",8)),D=(N.NOT_SUPPORTED_ERR=(y[9]="Not supported",9),N.INUSE_ATTRIBUTE_ERR=(y[10]="Attribute in use",10));N.INVALID_STATE_ERR=(y[11]="Invalid state",11),N.SYNTAX_ERR=(y[12]="Syntax error",12),N.INVALID_MODIFICATION_ERR=(y[13]="Invalid modification",13),N.NAMESPACE_ERR=(y[14]="Invalid namespace",14),N.INVALID_ACCESS_ERR=(y[15]="Invalid access",15);function T(e,t){if(t instanceof Error)var r=t;else r=this,Error.call(this,y[e]),this.message=y[e],Error.captureStackTrace&&Error.captureStackTrace(this,T);return r.code=e,t&&(this.message=this.message+": "+t),r}function S(){}function C(e,t){this._node=e,this._refresh=t,_(this)}function _(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var r=e._refresh(e._node);ae(e,"length",r.length),o(r,e),e._inc=t}}function A(){}function I(e,t){for(var r=e.length;r--;)if(e[r]===t)return r}function O(e,t,r,n){if(n?t[I(t,n)]=r:t[t.length++]=r,e){r.ownerElement=e;var i=e.ownerDocument;i&&(n&&P(i,e,n),function(e,t,r){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==r.namespaceURI&&(t._nsMap[r.prefix?r.localName:""]=r.value)}(i,e,r))}}function R(e,t,r){var n=I(t,r);if(!(n>=0))throw T(x,new Error(e.tagName+"@"+r));for(var i=t.length-1;n<i;)t[n]=t[++n];if(t.length=i,e){var o=e.ownerDocument;o&&(P(o,e,r),r.ownerElement=null)}}function k(e){if(this._features={},e)for(var t in e)this._features=e[t]}function $(){}function M(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}function j(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(j(e,t))return!0}while(e=e.nextSibling)}function U(){}function P(e,t,r,n){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==r.namespaceURI&&delete t._nsMap[r.prefix?r.localName:""]}function F(e,t,r){if(e&&e._inc){e._inc++;var n=t.childNodes;if(r)n[n.length++]=r;else{for(var i=t.firstChild,o=0;i;)n[o++]=i,i=i.nextSibling;n.length=o}}}function B(e,t){var r=t.previousSibling,n=t.nextSibling;return r?r.nextSibling=n:e.firstChild=n,n?n.previousSibling=r:e.lastChild=r,F(e.ownerDocument,e),t}function L(e,t,r){var n=t.parentNode;if(n&&n.removeChild(t),t.nodeType===v){var i=t.firstChild;if(null==i)return t;var o=t.lastChild}else i=o=t;var a=r?r.previousSibling:e.lastChild;i.previousSibling=a,o.nextSibling=r,a?a.nextSibling=i:e.firstChild=i,null==r?e.lastChild=o:r.previousSibling=o;do{i.parentNode=e}while(i!==o&&(i=i.nextSibling));return F(e.ownerDocument||e,e),t.nodeType==v&&(t.firstChild=t.lastChild=null),t}function q(){this._nsMap={}}function V(){}function z(){}function G(){}function H(){}function X(){}function Y(){}function Z(){}function W(){}function J(){}function K(){}function Q(){}function ee(){}function te(e,t){var r=[],n=9==this.nodeType&&this.documentElement||this,i=n.prefix,o=n.namespaceURI;if(o&&null==i&&null==(i=n.lookupPrefix(o)))var a=[{namespace:o,prefix:null}];return ne(this,r,e,t,a),r.join("")}function re(e,t,r){var n=e.prefix||"",i=e.namespaceURI;if(!n&&!i)return!1;if("xml"===n&&"http://www.w3.org/XML/1998/namespace"===i||"http://www.w3.org/2000/xmlns/"==i)return!1;for(var o=r.length;o--;){var a=r[o];if(a.prefix==n)return a.namespace!=i}return!0}function ne(e,t,r,n,i){if(n){if(!(e=n(e)))return;if("string"==typeof e)return void t.push(e)}switch(e.nodeType){case c:i||(i=[]);i.length;var o=e.attributes,a=o.length,s=e.firstChild,f=e.tagName;r="http://www.w3.org/1999/xhtml"===e.namespaceURI||r,t.push("<",f);for(var w=0;w<a;w++){"xmlns"==(N=o.item(w)).prefix?i.push({prefix:N.localName,namespace:N.value}):"xmlns"==N.nodeName&&i.push({prefix:"",namespace:N.value})}for(w=0;w<a;w++){var N;if(re(N=o.item(w),0,i)){var y=N.prefix||"",E=N.namespaceURI,x=y?" xmlns:"+y:" xmlns";t.push(x,'="',E,'"'),i.push({prefix:y,namespace:E})}ne(N,t,r,n,i)}if(re(e,0,i)){y=e.prefix||"";if(E=e.namespaceURI){x=y?" xmlns:"+y:" xmlns";t.push(x,'="',E,'"'),i.push({prefix:y,namespace:E})}}if(s||r&&!/^(?:meta|link|img|br|hr|input)$/i.test(f)){if(t.push(">"),r&&/^script$/i.test(f))for(;s;)s.data?t.push(s.data):ne(s,t,r,n,i),s=s.nextSibling;else for(;s;)ne(s,t,r,n,i),s=s.nextSibling;t.push("</",f,">")}else t.push("/>");return;case g:case v:for(s=e.firstChild;s;)ne(s,t,r,n,i),s=s.nextSibling;return;case u:return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,M),'"');case l:return t.push(e.data.replace(/[<&]/g,M).replace(/]]>/g,"]]&gt;"));case d:return t.push("<![CDATA[",e.data,"]]>");case h:return t.push("\x3c!--",e.data,"--\x3e");case b:var D=e.publicId,T=e.systemId;if(t.push("<!DOCTYPE ",e.name),D)t.push(" PUBLIC ",D),T&&"."!=T&&t.push(" ",T),t.push(">");else if(T&&"."!=T)t.push(" SYSTEM ",T,">");else{var S=e.internalSubset;S&&t.push(" [",S,"]"),t.push(">")}return;case m:return t.push("<?",e.target," ",e.data,"?>");case p:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function ie(e,t,r){var n;switch(t.nodeType){case c:(n=t.cloneNode(!1)).ownerDocument=e;case v:break;case u:r=!0}if(n||(n=t.cloneNode(!1)),n.ownerDocument=e,n.parentNode=null,r)for(var i=t.firstChild;i;)n.appendChild(ie(e,i,r)),i=i.nextSibling;return n}function oe(e,t,r){var n=new t.constructor;for(var i in t){var o=t[i];"object"!=typeof o&&o!=n[i]&&(n[i]=o)}switch(t.childNodes&&(n.childNodes=new S),n.ownerDocument=e,n.nodeType){case c:var a=t.attributes,s=n.attributes=new A,l=a.length;s._ownerElement=n;for(var d=0;d<l;d++)n.setAttributeNode(oe(e,a.item(d),!0));break;case u:r=!0}if(r)for(var p=t.firstChild;p;)n.appendChild(oe(e,p,r)),p=p.nextSibling;return n}function ae(e,t,r){e[t]=r}T.prototype=Error.prototype,o(N,T),S.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,t){for(var r=[],n=0;n<this.length;n++)ne(this[n],r,e,t);return r.join("")}},C.prototype.item=function(e){return _(this),this[e]},a(C,S),A.prototype={length:0,item:S.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var r=this[t];if(r.nodeName==e)return r}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new T(D);var r=this.getNamedItem(e.nodeName);return O(this._ownerElement,this,e,r),r},setNamedItemNS:function(e){var t,r=e.ownerElement;if(r&&r!=this._ownerElement)throw new T(D);return t=this.getNamedItemNS(e.namespaceURI,e.localName),O(this._ownerElement,this,e,t),t},removeNamedItem:function(e){var t=this.getNamedItem(e);return R(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var r=this.getNamedItemNS(e,t);return R(this._ownerElement,this,r),r},getNamedItemNS:function(e,t){for(var r=this.length;r--;){var n=this[r];if(n.localName==t&&n.namespaceURI==e)return n}return null}},k.prototype={hasFeature:function(e,t){var r=this._features[e.toLowerCase()];return!(!r||t&&!(t in r))},createDocument:function(e,t,r){var n=new U;if(n.implementation=this,n.childNodes=new S,n.doctype=r,r&&n.appendChild(r),t){var i=n.createElementNS(e,t);n.appendChild(i)}return n},createDocumentType:function(e,t,r){var n=new Y;return n.name=e,n.nodeName=e,n.publicId=t,n.systemId=r,n}},$.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return L(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return B(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return oe(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==l&&e.nodeType==l?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var r=t._nsMap;if(r)for(var n in r)if(r[n]==e)return n;t=t.nodeType==u?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var r=t._nsMap;if(r&&e in r)return r[e];t=t.nodeType==u?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},o(s,$),o(s,$.prototype),U.prototype={nodeName:"#document",nodeType:g,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==v){for(var r=e.firstChild;r;){var n=r.nextSibling;this.insertBefore(r,t),r=n}return e}return null==this.documentElement&&e.nodeType==c&&(this.documentElement=e),L(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),B(this,e)},importNode:function(e,t){return ie(this,e,t)},getElementById:function(e){var t=null;return j(this.documentElement,(function(r){if(r.nodeType==c&&r.getAttribute("id")==e)return t=r,!0})),t},getElementsByClassName:function(e){var t=new RegExp("(^|\\s)"+e+"(\\s|$)");return new C(this,(function(e){var r=[];return j(e.documentElement,(function(n){n!==e&&n.nodeType==c&&t.test(n.getAttribute("class"))&&r.push(n)})),r}))},createElement:function(e){var t=new q;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new S,(t.attributes=new A)._ownerElement=t,t},createDocumentFragment:function(){var e=new K;return e.ownerDocument=this,e.childNodes=new S,e},createTextNode:function(e){var t=new G;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new H;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new X;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var r=new Q;return r.ownerDocument=this,r.tagName=r.target=e,r.nodeValue=r.data=t,r},createAttribute:function(e){var t=new V;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new J;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var r=new q,n=t.split(":"),i=r.attributes=new A;return r.childNodes=new S,r.ownerDocument=this,r.nodeName=t,r.tagName=t,r.namespaceURI=e,2==n.length?(r.prefix=n[0],r.localName=n[1]):r.localName=t,i._ownerElement=r,r},createAttributeNS:function(e,t){var r=new V,n=t.split(":");return r.ownerDocument=this,r.nodeName=t,r.name=t,r.namespaceURI=e,r.specified=!0,2==n.length?(r.prefix=n[0],r.localName=n[1]):r.localName=t,r}},a(U,$),q.prototype={nodeType:c,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var r=this.ownerDocument.createAttribute(e);r.value=r.nodeValue=""+t,this.setAttributeNode(r)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===v?this.insertBefore(e,null):function(e,t){var r=t.parentNode;if(r){var n=e.lastChild;r.removeChild(t),n=e.lastChild}return n=e.lastChild,t.parentNode=e,t.previousSibling=n,t.nextSibling=null,n?n.nextSibling=t:e.firstChild=t,e.lastChild=t,F(e.ownerDocument,e,t),t}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var r=this.getAttributeNodeNS(e,t);r&&this.removeAttributeNode(r)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var r=this.getAttributeNodeNS(e,t);return r&&r.value||""},setAttributeNS:function(e,t,r){var n=this.ownerDocument.createAttributeNS(e,t);n.value=n.nodeValue=""+r,this.setAttributeNode(n)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new C(this,(function(t){var r=[];return j(t,(function(n){n===t||n.nodeType!=c||"*"!==e&&n.tagName!=e||r.push(n)})),r}))},getElementsByTagNameNS:function(e,t){return new C(this,(function(r){var n=[];return j(r,(function(i){i===r||i.nodeType!==c||"*"!==e&&i.namespaceURI!==e||"*"!==t&&i.localName!=t||n.push(i)})),n}))}},U.prototype.getElementsByTagName=q.prototype.getElementsByTagName,U.prototype.getElementsByTagNameNS=q.prototype.getElementsByTagNameNS,a(q,$),V.prototype.nodeType=u,a(V,$),z.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(y[E])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,r){r=this.data.substring(0,e)+r+this.data.substring(e+t),this.nodeValue=this.data=r,this.length=r.length}},a(z,$),G.prototype={nodeName:"#text",nodeType:l,splitText:function(e){var t=this.data,r=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var n=this.ownerDocument.createTextNode(r);return this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling),n}},a(G,z),H.prototype={nodeName:"#comment",nodeType:h},a(H,z),X.prototype={nodeName:"#cdata-section",nodeType:d},a(X,z),Y.prototype.nodeType=b,a(Y,$),Z.prototype.nodeType=w,a(Z,$),W.prototype.nodeType=f,a(W,$),J.prototype.nodeType=p,a(J,$),K.prototype.nodeName="#document-fragment",K.prototype.nodeType=v,a(K,$),Q.prototype.nodeType=m,a(Q,$),ee.prototype.serializeToString=function(e,t,r){return te.call(e,t,r)},$.prototype.toString=te;try{if(Object.defineProperty){function se(e){switch(e.nodeType){case c:case v:var t=[];for(e=e.firstChild;e;)7!==e.nodeType&&8!==e.nodeType&&t.push(se(e)),e=e.nextSibling;return t.join("");default:return e.nodeValue}}Object.defineProperty(C.prototype,"length",{get:function(){return _(this),this.$$length}}),Object.defineProperty($.prototype,"textContent",{get:function(){return se(this)},set:function(e){switch(this.nodeType){case c:case v:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=e,this.nodeValue=e}}}),ae=function(e,t,r){e["$$"+t]=r}}}catch(e){}n=k,i=ee}));const m="undefined"!=typeof window?window.DOMParser:o("9sJrG").DOMParser;function h(e){let t=console[e];console[e]=(...e)=>{let r=[],n=!1;for(let t of e)if(t instanceof l||t instanceof p){if(n)throw new Error("Styled strings must be the first log argument");r=r.concat(f(t.toString()))}else n=!0,r=r.concat(t);return r.length?t(...r):e}}f=function(e){let t=[],r=(new m).parseFromString(`<root>${e}</root>`,"text/xml");return e="",function r(n,i){i=i.slice(0),n.getAttribute&&n.getAttribute("style")&&i.push(n.getAttribute("style")),n.childNodes&&n.childNodes.length||!n.textContent||(e+=`%c${n.textContent}%c`,t.push(function(e){let t={};return e.forEach((e=>{let[r,n]=e.split(":");t[r]=n.trim()})),Object.keys(t).map((e=>`${e}: ${t[e]}`)).join("; ")}(i)),t.push("")),n.childNodes&&Array.from(n.childNodes).forEach((e=>r(e,i)))}(r,[]),[e].concat(t)},d=function(){["log","group","groupCollapsed","groupEnd","warn","info"].forEach(h)};var g=o("7HIkG");function b(...e){return new l(e)}d(),b.define=g.define;let v={black:[0,0,0],red:[237,80,65],green:[102,172,92],yellow:[225,178,60],blue:[73,148,201],magenta:[127,23,53],cyan:[78,181,230],white:[255,255,255],gray:[124,124,124],grey:[124,124,124]};Object.keys(v).forEach((e=>{let t=v[e];b.define(`${e}BG`,`rgbBG(${t[0]}, ${t[1]}, ${t[2]})`),b.define(`${e}`,`rgb(${t[0]}, ${t[1]}, ${t[2]})`)})),b.define("underline",'style("text-decoration: underline")'),b.define("bold",'style("font-weight: bold")'),b.define("italic",'style("font-style: italic")'),b.define("strikethrough",'style("text-decoration: line-through")'),b.define("dim",'style("opacity: 0.75")'),b.define("hidden",'style("opacity: 0.00")'),c=b;let w={},N={self:{isAssert:!0,isConsole:!0},init:!0,count:0,maxCount:0},y=(t=0,r="",n="",...i)=>{console.log(e(c)`${w[r][n].count} ${r}.rgb(0,133,255).bold ${n}.rgb(63,146,63).bold`,i)},E={assert:(e,t="/",r="default",...n)=>(u(w[`${t}`])?(w[`${t}`]={},u(w[t][r])&&(w[t][r]=Object.assign({},N))):u(w[t][r])&&(w[t][r]=Object.assign({},N)),w[t][r].init?(w[t][r].maxCount=e,w[t][r].count=1,w[t][r].init=!1,((e,t,r)=>{-1===e&&(w[`${t}`][`${r}`].maxCount=100,w[`${t}`][`${r}`].self.isAssert=!1)})(e,t,r),0===w[t][r].maxCount?(w[t][r].self.isConsole&&y(w[t][r].count,t,r,n),w[t][r].self.isAssert&&console.assert(!1,t,w),w[t][r].init=!0):w[t][r].self.isConsole&&y(w[t][r].count,t,r,n)):(w[t][r].count=w[t][r].count+1,w[t][r].count>=w[t][r].maxCount?(w[t][r].self.isConsole&&y(w[t][r].count,t,r,n),w[t][r].self.isAssert&&console.assert(!1,t,w),w[t][r].init=!0):w[t][r].self.isConsole&&y(w[t][r].count,t,r,n)),!0)};window["@newkind"]={},window["@newkind"].debug=E;var x=E;export{x as default};