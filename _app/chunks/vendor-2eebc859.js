function z(){}function Xt(t,e){for(const n in e)t[n]=e[n];return t}function At(t){return t()}function Nt(){return Object.create(null)}function x(t){t.forEach(At)}function te(t){return typeof t=="function"}function ee(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ne(t){return Object.keys(t).length===0}function cn(t,e,n,o){if(t){const r=Tt(t,e,n,o);return t[0](r)}}function Tt(t,e,n,o){return t[1]&&o?Xt(n.ctx.slice(),t[1](o(e))):n.ctx}function ln(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)i[c]=e.dirty[c]|r[c];return i}return e.dirty|r}return e.dirty}function an(t,e,n,o,r,i){if(r){const s=Tt(e,n,o,i);t.p(s,r)}}function fn(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}let Y=!1;function re(){Y=!0}function oe(){Y=!1}function ie(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function se(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&u.push(a)}e=u}const n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:ie(1,r,d=>e[n[d]].claim_order,l))-1;o[u]=n[a]+1;const w=a+1;n[w]=u,r=Math.max(w,r)}const i=[],s=[];let c=e.length-1;for(let u=n[r]+1;u!=0;u=o[u-1]){for(i.push(e[u-1]);c>=u;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);i.reverse(),s.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<s.length;u++){for(;l<i.length&&s[u].claim_order>=i[l].claim_order;)l++;const a=l<i.length?i[l]:null;t.insertBefore(s[u],a)}}function ue(t,e){if(Y){for(se(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function dn(t,e,n){Y&&!n?ue(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ce(t){t.parentNode.removeChild(t)}function le(t){return document.createElement(t)}function st(t){return document.createTextNode(t)}function hn(){return st(" ")}function gn(){return st("")}function mn(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function yn(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ae(t){return Array.from(t.childNodes)}function fe(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function It(t,e,n,o,r=!1){fe(t);const i=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const u=n(c);return u===void 0?t.splice(s,1):t[s]=u,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const u=n(c);return u===void 0?t.splice(s,1):t[s]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function de(t,e,n,o){return It(t,r=>r.nodeName===e,r=>{const i=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||i.push(c.name)}i.forEach(s=>r.removeAttribute(s))},()=>o(e))}function wn(t,e,n){return de(t,e,n,le)}function he(t,e){return It(t,n=>n.nodeType===3,n=>{const o=""+e;if(n.data.startsWith(o)){if(n.data.length!==o.length)return n.splitText(o.length)}else n.data=o},()=>st(e),!0)}function _n(t){return he(t," ")}function pn(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function En(t,e){t.value=e==null?"":e}function Cn(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let H;function V(t){H=t}function ut(){if(!H)throw new Error("Function called outside component initialization");return H}function Bn(t){ut().$$.on_mount.push(t)}function bn(t){ut().$$.after_update.push(t)}function An(t,e){ut().$$.context.set(t,e)}const K=[],Mt=[],G=[],St=[],Pt=Promise.resolve();let ct=!1;function Rt(){ct||(ct=!0,Pt.then(Lt))}function Nn(){return Rt(),Pt}function lt(t){G.push(t)}const at=new Set;let q=0;function Lt(){const t=H;do{for(;q<K.length;){const e=K[q];q++,V(e),ge(e.$$)}for(V(null),K.length=0,q=0;Mt.length;)Mt.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];at.has(n)||(at.add(n),n())}G.length=0}while(K.length);for(;St.length;)St.pop()();ct=!1,at.clear(),V(t)}function ge(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(lt)}}const Q=new Set;let L;function Tn(){L={r:0,c:[],p:L}}function In(){L.r||x(L.c),L=L.p}function me(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function Mn(t,e,n,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),L.c.push(()=>{Q.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function Sn(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const u in s)u in c||(o[u]=1);for(const u in c)r[u]||(n[u]=c[u],r[u]=1);t[i]=c}else for(const u in s)r[u]=1}for(const s in o)s in n||(n[s]=void 0);return n}function Pn(t){return typeof t=="object"&&t!==null?t:{}}function Rn(t){t&&t.c()}function Ln(t,e){t&&t.l(e)}function ye(t,e,n,o){const{fragment:r,on_mount:i,on_destroy:s,after_update:c}=t.$$;r&&r.m(e,n),o||lt(()=>{const u=i.map(At).filter(te);s?s.push(...u):x(u),t.$$.on_mount=[]}),c.forEach(lt)}function we(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(t,e){t.$$.dirty[0]===-1&&(K.push(t),Rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Dn(t,e,n,o,r,i,s,c=[-1]){const u=H;V(t);const l=t.$$={fragment:null,ctx:null,props:i,update:z,not_equal:r,bound:Nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Nt(),dirty:c,skip_bound:!1,root:e.target||u.$$.root};s&&s(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(w,d,...f)=>{const y=f.length?f[0]:d;return l.ctx&&r(l.ctx[w],l.ctx[w]=y)&&(!l.skip_bound&&l.bound[w]&&l.bound[w](y),a&&_e(t,w)),d}):[],l.update(),a=!0,x(l.before_update),l.fragment=o?o(l.ctx):!1,e.target){if(e.hydrate){re();const w=ae(e.target);l.fragment&&l.fragment.l(w),w.forEach(ce)}else l.fragment&&l.fragment.c();e.intro&&me(t.$$.fragment),ye(t,e.target,e.anchor,e.customElement),oe(),Lt()}V(u)}class Fn{$destroy(){we(this,1),this.$destroy=z}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const D=[];function Un(t,e=z){let n;const o=new Set;function r(c){if(ee(t,c)&&(t=c,n)){const u=!D.length;for(const l of o)l[1](),D.push(l,t);if(u){for(let l=0;l<D.length;l+=2)D[l][0](D[l+1]);D.length=0}}}function i(c){r(c(t))}function s(c,u=z){const l=[c,u];return o.add(l),o.size===1&&(n=e(r)||z),c(t),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:s}}var pe=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Dt={},A={};let ft;const Ee=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];A.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};A.getSymbolTotalCodewords=function(e){return Ee[e]};A.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};A.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ft=e};A.isKanjiModeEnabled=function(){return typeof ft!="undefined"};A.toSJIS=function(e){return ft(e)};var W={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(o){return o&&typeof o.bit!="undefined"&&o.bit>=0&&o.bit<4},t.from=function(o,r){if(t.isValid(o))return o;try{return e(o)}catch{return r}}})(W);function Ft(){this.buffer=[],this.length=0}Ft.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Ce=Ft;function J(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}J.prototype.set=function(t,e,n,o){const r=t*this.size+e;this.data[r]=n,o&&(this.reservedBit[r]=!0)};J.prototype.get=function(t,e){return this.data[t*this.size+e]};J.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};J.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Be=J,Ut={};(function(t){const e=A.getSymbolSize;t.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,i=e(o),s=i===145?26:Math.ceil((i-13)/(2*r-2))*2,c=[i-7];for(let u=1;u<r-1;u++)c[u]=c[u-1]-s;return c.push(6),c.reverse()},t.getPositions=function(o){const r=[],i=t.getRowColCoords(o),s=i.length;for(let c=0;c<s;c++)for(let u=0;u<s;u++)c===0&&u===0||c===0&&u===s-1||c===s-1&&u===0||r.push([i[c],i[u]]);return r}})(Ut);var kt={};const be=A.getSymbolSize,vt=7;kt.getPositions=function(e){const n=be(e);return[[0,0],[n-vt,0],[0,n-vt]]};var $t={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){const i=r.size;let s=0,c=0,u=0,l=null,a=null;for(let w=0;w<i;w++){c=u=0,l=a=null;for(let d=0;d<i;d++){let f=r.get(w,d);f===l?c++:(c>=5&&(s+=e.N1+(c-5)),l=f,c=1),f=r.get(d,w),f===a?u++:(u>=5&&(s+=e.N1+(u-5)),a=f,u=1)}c>=5&&(s+=e.N1+(c-5)),u>=5&&(s+=e.N1+(u-5))}return s},t.getPenaltyN2=function(r){const i=r.size;let s=0;for(let c=0;c<i-1;c++)for(let u=0;u<i-1;u++){const l=r.get(c,u)+r.get(c,u+1)+r.get(c+1,u)+r.get(c+1,u+1);(l===4||l===0)&&s++}return s*e.N2},t.getPenaltyN3=function(r){const i=r.size;let s=0,c=0,u=0;for(let l=0;l<i;l++){c=u=0;for(let a=0;a<i;a++)c=c<<1&2047|r.get(l,a),a>=10&&(c===1488||c===93)&&s++,u=u<<1&2047|r.get(a,l),a>=10&&(u===1488||u===93)&&s++}return s*e.N3},t.getPenaltyN4=function(r){let i=0;const s=r.data.length;for(let u=0;u<s;u++)i+=r.data[u];return Math.abs(Math.ceil(i*100/s/5)-10)*e.N4};function n(o,r,i){switch(o){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw new Error("bad maskPattern:"+o)}}t.applyMask=function(r,i){const s=i.size;for(let c=0;c<s;c++)for(let u=0;u<s;u++)i.isReserved(u,c)||i.xor(u,c,n(r,u,c))},t.getBestMask=function(r,i){const s=Object.keys(t.Patterns).length;let c=0,u=1/0;for(let l=0;l<s;l++){i(l),t.applyMask(l,r);const a=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(l,r),a<u&&(u=a,c=l)}return c}})($t);var Z={};const P=W,X=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],tt=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Z.getBlocksCount=function(e,n){switch(n){case P.L:return X[(e-1)*4+0];case P.M:return X[(e-1)*4+1];case P.Q:return X[(e-1)*4+2];case P.H:return X[(e-1)*4+3];default:return}};Z.getTotalCodewordsCount=function(e,n){switch(n){case P.L:return tt[(e-1)*4+0];case P.M:return tt[(e-1)*4+1];case P.Q:return tt[(e-1)*4+2];case P.H:return tt[(e-1)*4+3];default:return}};var zt={},et={};const j=new Uint8Array(512),nt=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)j[n]=e,nt[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)j[n]=j[n-255]})();et.log=function(e){if(e<1)throw new Error("log("+e+")");return nt[e]};et.exp=function(e){return j[e]};et.mul=function(e,n){return e===0||n===0?0:j[nt[e]+nt[n]]};(function(t){const e=et;t.mul=function(o,r){const i=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let c=0;c<r.length;c++)i[s+c]^=e.mul(o[s],r[c]);return i},t.mod=function(o,r){let i=new Uint8Array(o);for(;i.length-r.length>=0;){const s=i[0];for(let u=0;u<r.length;u++)i[u]^=e.mul(r[u],s);let c=0;for(;c<i.length&&i[c]===0;)c++;i=i.slice(c)}return i},t.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let i=0;i<o;i++)r=t.mul(r,new Uint8Array([1,e.exp(i)]));return r}})(zt);const xt=zt;function dt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}dt.prototype.initialize=function(e){this.degree=e,this.genPoly=xt.generateECPolynomial(this.degree)};dt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const o=xt.mod(n,this.genPoly),r=this.degree-o.length;if(r>0){const i=new Uint8Array(this.degree);return i.set(o,r),i}return o};var Ae=dt,Ht={},R={},ht={};ht.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var I={};const Vt="[0-9]+",Ne="[A-Z $%*+\\-./:]+";let O="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";O=O.replace(/u/g,"\\u");const Te="(?:(?![A-Z0-9 $%*+\\-./:]|"+O+`)(?:.|[\r
]))+`;I.KANJI=new RegExp(O,"g");I.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");I.BYTE=new RegExp(Te,"g");I.NUMERIC=new RegExp(Vt,"g");I.ALPHANUMERIC=new RegExp(Ne,"g");const Ie=new RegExp("^"+O+"$"),Me=new RegExp("^"+Vt+"$"),Se=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");I.testKanji=function(e){return Ie.test(e)};I.testNumeric=function(e){return Me.test(e)};I.testAlphanumeric=function(e){return Se.test(e)};(function(t){const e=ht,n=I;t.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return n.testNumeric(i)?t.NUMERIC:n.testAlphanumeric(i)?t.ALPHANUMERIC:n.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+r)}}t.from=function(i,s){if(t.isValid(i))return i;try{return o(i)}catch{return s}}})(R);(function(t){const e=A,n=Z,o=W,r=R,i=ht,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,c=e.getBCHDigit(s);function u(d,f,y){for(let _=1;_<=40;_++)if(f<=t.getCapacity(_,y,d))return _}function l(d,f){return r.getCharCountIndicator(d,f)+4}function a(d,f){let y=0;return d.forEach(function(_){y+=l(_.mode,f)+_.getBitsLength()}),y}function w(d,f){for(let y=1;y<=40;y++)if(a(d,y)<=t.getCapacity(y,f,r.MIXED))return y}t.from=function(f,y){return i.isValid(f)?parseInt(f,10):y},t.getCapacity=function(f,y,_){if(!i.isValid(f))throw new Error("Invalid QR Code version");typeof _=="undefined"&&(_=r.BYTE);const b=e.getSymbolTotalCodewords(f),m=n.getTotalCodewordsCount(f,y),p=(b-m)*8;if(_===r.MIXED)return p;const g=p-l(_,f);switch(_){case r.NUMERIC:return Math.floor(g/10*3);case r.ALPHANUMERIC:return Math.floor(g/11*2);case r.KANJI:return Math.floor(g/13);case r.BYTE:default:return Math.floor(g/8)}},t.getBestVersionForData=function(f,y){let _;const b=o.from(y,o.M);if(Array.isArray(f)){if(f.length>1)return w(f,b);if(f.length===0)return 1;_=f[0]}else _=f;return u(_.mode,_.getLength(),b)},t.getEncodedBits=function(f){if(!i.isValid(f)||f<7)throw new Error("Invalid QR Code version");let y=f<<12;for(;e.getBCHDigit(y)-c>=0;)y^=s<<e.getBCHDigit(y)-c;return f<<12|y}})(Ht);var Kt={};const gt=A,Jt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,Pe=1<<14|1<<12|1<<10|1<<4|1<<1,jt=gt.getBCHDigit(Jt);Kt.getEncodedBits=function(e,n){const o=e.bit<<3|n;let r=o<<10;for(;gt.getBCHDigit(r)-jt>=0;)r^=Jt<<gt.getBCHDigit(r)-jt;return(o<<10|r)^Pe};var Ot={};const Re=R;function F(t){this.mode=Re.NUMERIC,this.data=t.toString()}F.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let n,o,r;for(n=0;n+3<=this.data.length;n+=3)o=this.data.substr(n,3),r=parseInt(o,10),e.put(r,10);const i=this.data.length-n;i>0&&(o=this.data.substr(n),r=parseInt(o,10),e.put(r,i*3+1))};var Le=F;const De=R,mt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function U(t){this.mode=De.ALPHANUMERIC,this.data=t}U.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let o=mt.indexOf(this.data[n])*45;o+=mt.indexOf(this.data[n+1]),e.put(o,11)}this.data.length%2&&e.put(mt.indexOf(this.data[n]),6)};var Fe=U,Ue=function(e){for(var n=[],o=e.length,r=0;r<o;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319&&o>r+1){var s=e.charCodeAt(r+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,r+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const ke=Ue,ve=R;function k(t){this.mode=ve.BYTE,this.data=new Uint8Array(ke(t))}k.getBitsLength=function(e){return e*8};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var $e=k;const ze=R,xe=A;function v(t){this.mode=ze.KANJI,this.data=t}v.getBitsLength=function(e){return e*13};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=xe.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var He=v,Yt={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,o,r){var i={},s={};s[o]=0;var c=e.PriorityQueue.make();c.push(o,0);for(var u,l,a,w,d,f,y,_,b;!c.empty();){u=c.pop(),l=u.value,w=u.cost,d=n[l]||{};for(a in d)d.hasOwnProperty(a)&&(f=d[a],y=w+f,_=s[a],b=typeof s[a]=="undefined",(b||_>y)&&(s[a]=y,c.push(a,y),i[a]=l))}if(typeof r!="undefined"&&typeof s[r]=="undefined"){var m=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(m)}return i},extract_shortest_path_from_predecessor_list:function(n,o){for(var r=[],i=o;i;)r.push(i),i=n[i];return r.reverse(),r},find_path:function(n,o,r){var i=e.single_source_shortest_paths(n,o,r);return e.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(n){var o=e.PriorityQueue,r={},i;n=n||{};for(i in o)o.hasOwnProperty(i)&&(r[i]=o[i]);return r.queue=[],r.sorter=n.sorter||o.default_sorter,r},default_sorter:function(n,o){return n.cost-o.cost},push:function(n,o){var r={value:n,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Yt);(function(t){const e=R,n=Le,o=Fe,r=$e,i=He,s=I,c=A,u=Yt.exports;function l(m){return unescape(encodeURIComponent(m)).length}function a(m,p,g){const h=[];let E;for(;(E=m.exec(g))!==null;)h.push({data:E[0],index:E.index,mode:p,length:E[0].length});return h}function w(m){const p=a(s.NUMERIC,e.NUMERIC,m),g=a(s.ALPHANUMERIC,e.ALPHANUMERIC,m);let h,E;return c.isKanjiModeEnabled()?(h=a(s.BYTE,e.BYTE,m),E=a(s.KANJI,e.KANJI,m)):(h=a(s.BYTE_KANJI,e.BYTE,m),E=[]),p.concat(g,h,E).sort(function(B,N){return B.index-N.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function d(m,p){switch(p){case e.NUMERIC:return n.getBitsLength(m);case e.ALPHANUMERIC:return o.getBitsLength(m);case e.KANJI:return i.getBitsLength(m);case e.BYTE:return r.getBitsLength(m)}}function f(m){return m.reduce(function(p,g){const h=p.length-1>=0?p[p.length-1]:null;return h&&h.mode===g.mode?(p[p.length-1].data+=g.data,p):(p.push(g),p)},[])}function y(m){const p=[];for(let g=0;g<m.length;g++){const h=m[g];switch(h.mode){case e.NUMERIC:p.push([h,{data:h.data,mode:e.ALPHANUMERIC,length:h.length},{data:h.data,mode:e.BYTE,length:h.length}]);break;case e.ALPHANUMERIC:p.push([h,{data:h.data,mode:e.BYTE,length:h.length}]);break;case e.KANJI:p.push([h,{data:h.data,mode:e.BYTE,length:l(h.data)}]);break;case e.BYTE:p.push([{data:h.data,mode:e.BYTE,length:l(h.data)}])}}return p}function _(m,p){const g={},h={start:{}};let E=["start"];for(let C=0;C<m.length;C++){const B=m[C],N=[];for(let S=0;S<B.length;S++){const T=B[S],$=""+C+S;N.push($),g[$]={node:T,lastCount:0},h[$]={};for(let it=0;it<E.length;it++){const M=E[it];g[M]&&g[M].node.mode===T.mode?(h[M][$]=d(g[M].lastCount+T.length,T.mode)-d(g[M].lastCount,T.mode),g[M].lastCount+=T.length):(g[M]&&(g[M].lastCount=T.length),h[M][$]=d(T.length,T.mode)+4+e.getCharCountIndicator(T.mode,p))}}E=N}for(let C=0;C<E.length;C++)h[E[C]].end=0;return{map:h,table:g}}function b(m,p){let g;const h=e.getBestModeForData(m);if(g=e.from(p,h),g!==e.BYTE&&g.bit<h.bit)throw new Error('"'+m+'" cannot be encoded with mode '+e.toString(g)+`.
 Suggested mode is: `+e.toString(h));switch(g===e.KANJI&&!c.isKanjiModeEnabled()&&(g=e.BYTE),g){case e.NUMERIC:return new n(m);case e.ALPHANUMERIC:return new o(m);case e.KANJI:return new i(m);case e.BYTE:return new r(m)}}t.fromArray=function(p){return p.reduce(function(g,h){return typeof h=="string"?g.push(b(h,null)):h.data&&g.push(b(h.data,h.mode)),g},[])},t.fromString=function(p,g){const h=w(p,c.isKanjiModeEnabled()),E=y(h),C=_(E,g),B=u.find_path(C.map,"start","end"),N=[];for(let S=1;S<B.length-1;S++)N.push(C.table[B[S]].node);return t.fromArray(f(N))},t.rawSplit=function(p){return t.fromArray(w(p,c.isKanjiModeEnabled()))}})(Ot);const rt=A,yt=W,Ve=Ce,Ke=Be,Je=Ut,je=kt,wt=$t,_t=Z,Oe=Ae,ot=Ht,Ye=Kt,Ge=R,pt=Ot;function qe(t,e){const n=t.size,o=je.getPositions(e);for(let r=0;r<o.length;r++){const i=o[r][0],s=o[r][1];for(let c=-1;c<=7;c++)if(!(i+c<=-1||n<=i+c))for(let u=-1;u<=7;u++)s+u<=-1||n<=s+u||(c>=0&&c<=6&&(u===0||u===6)||u>=0&&u<=6&&(c===0||c===6)||c>=2&&c<=4&&u>=2&&u<=4?t.set(i+c,s+u,!0,!0):t.set(i+c,s+u,!1,!0))}}function Qe(t){const e=t.size;for(let n=8;n<e-8;n++){const o=n%2==0;t.set(n,6,o,!0),t.set(6,n,o,!0)}}function We(t,e){const n=Je.getPositions(e);for(let o=0;o<n.length;o++){const r=n[o][0],i=n[o][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?t.set(r+s,i+c,!0,!0):t.set(r+s,i+c,!1,!0)}}function Ze(t,e){const n=t.size,o=ot.getEncodedBits(e);let r,i,s;for(let c=0;c<18;c++)r=Math.floor(c/3),i=c%3+n-8-3,s=(o>>c&1)==1,t.set(r,i,s,!0),t.set(i,r,s,!0)}function Et(t,e,n){const o=t.size,r=Ye.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=(r>>i&1)==1,i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(o-15+i,8,s,!0),i<8?t.set(8,o-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(o-8,8,1,!0)}function Xe(t,e){const n=t.size;let o=-1,r=n-1,i=7,s=0;for(let c=n-1;c>0;c-=2)for(c===6&&c--;;){for(let u=0;u<2;u++)if(!t.isReserved(r,c-u)){let l=!1;s<e.length&&(l=(e[s]>>>i&1)==1),t.set(r,c-u,l),i--,i===-1&&(s++,i=7)}if(r+=o,r<0||n<=r){r-=o,o=-o;break}}}function tn(t,e,n){const o=new Ve;n.forEach(function(u){o.put(u.mode.bit,4),o.put(u.getLength(),Ge.getCharCountIndicator(u.mode,t)),u.write(o)});const r=rt.getSymbolTotalCodewords(t),i=_t.getTotalCodewordsCount(t,e),s=(r-i)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);const c=(s-o.getLengthInBits())/8;for(let u=0;u<c;u++)o.put(u%2?17:236,8);return en(o,t,e)}function en(t,e,n){const o=rt.getSymbolTotalCodewords(e),r=_t.getTotalCodewordsCount(e,n),i=o-r,s=_t.getBlocksCount(e,n),c=o%s,u=s-c,l=Math.floor(o/s),a=Math.floor(i/s),w=a+1,d=l-a,f=new Oe(d);let y=0;const _=new Array(s),b=new Array(s);let m=0;const p=new Uint8Array(t.buffer);for(let B=0;B<s;B++){const N=B<u?a:w;_[B]=p.slice(y,y+N),b[B]=f.encode(_[B]),y+=N,m=Math.max(m,N)}const g=new Uint8Array(o);let h=0,E,C;for(E=0;E<m;E++)for(C=0;C<s;C++)E<_[C].length&&(g[h++]=_[C][E]);for(E=0;E<d;E++)for(C=0;C<s;C++)g[h++]=b[C][E];return g}function nn(t,e,n,o){let r;if(Array.isArray(t))r=pt.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const a=pt.rawSplit(t);l=ot.getBestVersionForData(a,n)}r=pt.fromString(t,l||40)}else throw new Error("Invalid data");const i=ot.getBestVersionForData(r,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=tn(e,n,r),c=rt.getSymbolSize(e),u=new Ke(c);return qe(u,e),Qe(u),We(u,e),Et(u,n,0),e>=7&&Ze(u,e),Xe(u,s),isNaN(o)&&(o=wt.getBestMask(u,Et.bind(null,u,n))),wt.applyMask(o,u),Et(u,n,o),{modules:u,version:e,errorCorrectionLevel:n,maskPattern:o,segments:r}}Dt.create=function(e,n){if(typeof e=="undefined"||e==="")throw new Error("No input text");let o=yt.M,r,i;return typeof n!="undefined"&&(o=yt.from(n.errorCorrectionLevel,yt.M),r=ot.from(n.version),i=wt.from(n.maskPattern),n.toSJISFunc&&rt.setToSJISFunction(n.toSJISFunc)),nn(e,r,o,i)};var Gt={},Ct={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let o=n.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+n);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(i){return[i,i]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}t.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin=="undefined"||o.margin===null||o.margin<0?4:o.margin,i=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:i,scale:i?4:s,margin:r,color:{dark:e(o.color.dark||"#000000ff"),light:e(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},t.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},t.getImageWidth=function(o,r){const i=t.getScale(o,r);return Math.floor((o+r.margin*2)*i)},t.qrToImageData=function(o,r,i){const s=r.modules.size,c=r.modules.data,u=t.getScale(s,i),l=Math.floor((s+i.margin*2)*u),a=i.margin*u,w=[i.color.light,i.color.dark];for(let d=0;d<l;d++)for(let f=0;f<l;f++){let y=(d*l+f)*4,_=i.color.light;if(d>=a&&f>=a&&d<l-a&&f<l-a){const b=Math.floor((d-a)/u),m=Math.floor((f-a)/u);_=w[c[b*s+m]?1:0]}o[y++]=_.r,o[y++]=_.g,o[y++]=_.b,o[y]=_.a}}})(Ct);(function(t){const e=Ct;function n(r,i,s){r.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,s,c){let u=c,l=s;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(l=o()),u=e.getOptions(u);const a=e.getImageWidth(i.modules.size,u),w=l.getContext("2d"),d=w.createImageData(a,a);return e.qrToImageData(d.data,i,u),n(w,l,a),w.putImageData(d,0,0),l},t.renderToDataURL=function(i,s,c){let u=c;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const l=t.render(i,s,u),a=u.type||"image/png",w=u.rendererOpts||{};return l.toDataURL(a,w.quality)}})(Gt);var qt={};const rn=Ct;function Qt(t,e){const n=t.a/255,o=e+'="'+t.hex+'"';return n<1?o+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':o}function Bt(t,e,n){let o=t+e;return typeof n!="undefined"&&(o+=" "+n),o}function on(t,e,n){let o="",r=0,i=!1,s=0;for(let c=0;c<t.length;c++){const u=Math.floor(c%e),l=Math.floor(c/e);!u&&!i&&(i=!0),t[c]?(s++,c>0&&u>0&&t[c-1]||(o+=i?Bt("M",u+n,.5+l+n):Bt("m",r,0),r=0,i=!1),u+1<e&&t[c+1]||(o+=Bt("h",s),s=0)):r++}return o}qt.render=function(e,n,o){const r=rn.getOptions(n),i=e.modules.size,s=e.modules.data,c=i+r.margin*2,u=r.color.light.a?"<path "+Qt(r.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",l="<path "+Qt(r.color.dark,"stroke")+' d="'+on(s,i,r.margin)+'"/>',a='viewBox="0 0 '+c+" "+c+'"',w=r.width?'width="'+r.width+'" height="'+r.width+'" ':"",d='<svg xmlns="http://www.w3.org/2000/svg" '+w+a+' shape-rendering="crispEdges">'+u+l+`</svg>
`;return typeof o=="function"&&o(null,d),d};const sn=pe,Wt=Dt,Zt=Gt,un=qt;function bt(t,e,n,o,r){const i=[].slice.call(arguments,1),s=i.length,c=typeof i[s-1]=="function";if(!c&&!sn())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(r=n,n=e,e=o=void 0):s===3&&(e.getContext&&typeof r=="undefined"?(r=o,o=void 0):(r=o,o=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=o=void 0):s===2&&!e.getContext&&(o=n,n=e,e=void 0),new Promise(function(u,l){try{const a=Wt.create(n,o);u(t(a,e,o))}catch(a){l(a)}})}try{const u=Wt.create(n,o);r(null,t(u,e,o))}catch(u){r(u)}}var kn=bt.bind(null,Zt.render);bt.bind(null,Zt.renderToDataURL);bt.bind(null,function(t,e,n){return un.render(t,n)});export{Pn as A,we as B,Xt as C,Un as D,Nn as E,cn as F,an as G,fn as H,ln as I,ue as J,z as K,En as L,mn as M,x as N,Mt as O,kn as P,Fn as S,ae as a,yn as b,wn as c,ce as d,le as e,Cn as f,dn as g,he as h,Dn as i,pn as j,hn as k,gn as l,_n as m,Tn as n,Mn as o,In as p,me as q,An as r,ee as s,st as t,bn as u,Bn as v,Rn as w,Ln as x,ye as y,Sn as z};