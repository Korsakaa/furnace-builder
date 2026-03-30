const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C5JvI5sk.js","assets/core-DV6XEvTN.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const yc="modulepreload",Ec=function(n){return"/"+n},Qo={},ea=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Ec(l),l in Qo)return;Qo[l]=!0;const h=l.endsWith(".css"),c=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":yc,h||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),h)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};var b=(n=>(n.Empty="Empty",n.FullStretcher="FullStretcher",n.FullHeader="FullHeader",n.ThreeQuarter="ThreeQuarter",n.ThreeQuarterHeader="ThreeQuarterHeader",n.Quarter="Quarter",n.QuarterHeader="QuarterHeader",n.Half="Half",n.HalfLong="HalfLong",n.HalfLongHeader="HalfLongHeader",n.Hole="Hole",n.VerticalStretcher="VerticalStretcher",n.Grate="Grate",n.Slab="Slab",n.ChamferTL="ChamferTL",n.ChamferTR="ChamferTR",n.ChamferBR="ChamferBR",n.ChamferBL="ChamferBL",n.ChamferHeaderTL="ChamferHeaderTL",n.ChamferHeaderTR="ChamferHeaderTR",n.ChamferHeaderBR="ChamferHeaderBR",n.ChamferHeaderBL="ChamferHeaderBL",n.ChamferTL2="ChamferTL2",n.ChamferTR2="ChamferTR2",n.ChamferBR2="ChamferBR2",n.ChamferBL2="ChamferBL2",n.ChamferHeaderTL2="ChamferHeaderTL2",n.ChamferHeaderTR2="ChamferHeaderTR2",n.ChamferHeaderBR2="ChamferHeaderBR2",n.ChamferHeaderBL2="ChamferHeaderBL2",n.WedgeL="WedgeL",n.WedgeR="WedgeR",n.WedgeHeaderF="WedgeHeaderF",n.WedgeHeaderB="WedgeHeaderB",n.HalfDiagTL="HalfDiagTL",n.HalfDiagTR="HalfDiagTR",n.HalfDiagBR="HalfDiagBR",n.HalfDiagBL="HalfDiagBL",n.WedgeHalfL="WedgeHalfL",n.WedgeHalfR="WedgeHalfR",n.WedgeHalfHeaderF="WedgeHalfHeaderF",n.WedgeHalfHeaderB="WedgeHalfHeaderB",n.WedgeMidL="WedgeMidL",n.WedgeMidR="WedgeMidR",n.WedgeMidHeaderF="WedgeMidHeaderF",n.WedgeMidHeaderB="WedgeMidHeaderB",n))(b||{}),xl=(n=>(n.Chain="Chain",n.Cross="Cross",n))(xl||{});function Ns(n){return n.startsWith("Chamfer")}function zi(n){return n.replace("ChamferHeader","").replace("Chamfer","").replace(/\d+$/,"")}function ki(n,e,t){if(n.endsWith("2"))return[e/2,t/2];const i=Math.min(e,t);return[i,i]}function Ml(n){return n.startsWith("HalfDiag")}function Sl(n){return n.slice(8)}function yl(n){return n.startsWith("Wedge")}function El(n){return n==="WedgeR"||n==="WedgeHalfR"?"R":n==="WedgeHeaderF"||n==="WedgeHalfHeaderF"?"F":n==="WedgeHeaderB"||n==="WedgeHalfHeaderB"?"B":n==="WedgeMidL"?"ML":n==="WedgeMidR"?"MR":n==="WedgeMidHeaderF"?"MF":n==="WedgeMidHeaderB"?"MB":"L"}function Tc(n){return`door:${n}`}function En(n){return n.startsWith("door:")}function yi(n){return n.slice(5)}function Ac(n){return`box:${n}`}function Ei(n){return n.startsWith("box:")}function Ti(n){return n.slice(4)}function ta(n,e){const t=()=>Array.from({length:n},()=>Array.from({length:e},()=>"Empty"));return{rows:[t(),t(),t()],rowOffsets:[!1,!1,!1],rowHidden:[!1,!1,!1],rowGroups:[],rowGroupIds:[null,null,null],cols:n,depths:e,doors:[],boxes:[]}}function Tl(n){const e=()=>Array.from({length:n.cols},()=>Array.from({length:n.depths},()=>"Empty"));n.rows.push(e()),n.rowOffsets.push(!1),n.rowHidden.push(!1),n.rowGroupIds.push(null)}function kn(n,e,t,i,s){e<n.rows.length&&t<n.cols&&i<n.depths&&(n.rows[e][t][i]=s)}function wc(n){return n.rows.flat(2).filter(e=>e!=="Empty").length}function bt(n,e,t){if(En(n)&&e){const i=e.find(s=>s.id===yi(n));if(i)return i.brickBase==="Тычок"?[2,i.cols]:[i.cols,2]}if(Ei(n)&&t){const i=t.find(s=>s.id===Ti(n));if(i)return[i.cols,i.depths]}switch(n){case"FullStretcher":return[4,2];case"FullHeader":return[2,4];case"ThreeQuarter":return[3,2];case"ThreeQuarterHeader":return[2,3];case"Quarter":return[1,2];case"QuarterHeader":return[2,1];case"Half":return[2,2];case"HalfLong":return[4,1];case"HalfLongHeader":return[1,4];case"Hole":return[2,2];case"VerticalStretcher":return[4,2];case"Grate":return[4,2];case"Slab":return[4,2];case"ChamferTL":case"ChamferTR":case"ChamferBR":case"ChamferBL":return[4,2];case"ChamferHeaderTL":case"ChamferHeaderTR":case"ChamferHeaderBR":case"ChamferHeaderBL":return[2,4];case"ChamferTL2":case"ChamferTR2":case"ChamferBR2":case"ChamferBL2":return[4,2];case"ChamferHeaderTL2":case"ChamferHeaderTR2":case"ChamferHeaderBR2":case"ChamferHeaderBL2":return[2,4];case"WedgeL":case"WedgeR":return[4,2];case"WedgeHeaderF":case"WedgeHeaderB":return[2,4];case"HalfDiagTL":case"HalfDiagTR":case"HalfDiagBR":case"HalfDiagBL":return[2,2];case"WedgeHalfL":case"WedgeHalfR":case"WedgeHalfHeaderF":case"WedgeHalfHeaderB":return[2,2];case"WedgeMidL":case"WedgeMidR":return[4,2];case"WedgeMidHeaderF":case"WedgeMidHeaderB":return[2,4];default:return[4,2]}}function Qs(n,e,t){for(const i of n.rows){for(;i.length<e;)i.push(Array.from({length:t},()=>"Empty"));i.length=e;for(const s of i){for(;s.length<t;)s.push("Empty");s.length=t}}n.cols=e,n.depths=t}function bc(n,e,t){Al(n,e),n.rowOffsets[e]=e%2===1;const i=t==="Cross"&&e%5===0?"FullHeader":"FullStretcher",[s,r]=bt(i);for(let a=0;a<n.depths;a+=r)for(let o=0;o<n.cols;o+=s)kn(n,e,o,a,i)}function Al(n,e){for(let t=0;t<n.cols;t++)for(let i=0;i<n.depths;i++)kn(n,e,t,i,"Empty")}function ji(n){return JSON.stringify(n,null,2)}function na(n){const e=JSON.parse(n);return e.rowOffsets||(e.rowOffsets=new Array(e.rows.length).fill(!1)),e.rowOffsets.length=e.rows.length,e.doors||(e.doors=[]),e.boxes||(e.boxes=[]),e.rowHidden||(e.rowHidden=new Array(e.rows.length).fill(!1)),e.rowHidden.length=e.rows.length,e.rowGroups||(e.rowGroups=[]),e.rowGroupIds||(e.rowGroupIds=new Array(e.rows.length).fill(null)),e.rowGroupIds.length=e.rows.length,e}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="169",di={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rc=0,ia=1,Cc=2,wl=1,bl=2,an=3,Tn=0,Rt=1,ln=2,Sn=0,fi=1,sa=2,ra=3,oa=4,Lc=5,On=100,Pc=101,Dc=102,Ic=103,Uc=104,Nc=200,Fc=201,Oc=202,Bc=203,Br=204,Hr=205,Hc=206,zc=207,kc=208,Gc=209,Vc=210,Wc=211,Xc=212,qc=213,Yc=214,zr=0,kr=1,Gr=2,gi=3,Vr=4,Wr=5,Xr=6,qr=7,Rl=0,$c=1,Kc=2,yn=0,Zc=1,jc=2,Jc=3,Cl=4,Qc=5,eh=6,th=7,Ll=300,_i=301,vi=302,Yr=303,$r=304,Vs=306,Kr=1e3,Hn=1001,Zr=1002,zt=1003,nh=1004,Ji=1005,Xt=1006,er=1007,zn=1008,un=1009,Pl=1010,Dl=1011,Gi=1012,Lo=1013,Gn=1014,cn=1015,qi=1016,Po=1017,Do=1018,xi=1020,Il=35902,Ul=1021,Nl=1022,Yt=1023,Fl=1024,Ol=1025,pi=1026,Mi=1027,Bl=1028,Io=1029,Hl=1030,Uo=1031,No=1033,bs=33776,Rs=33777,Cs=33778,Ls=33779,jr=35840,Jr=35841,Qr=35842,eo=35843,to=36196,no=37492,io=37496,so=37808,ro=37809,oo=37810,ao=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,vo=37821,Ps=36492,xo=36494,Mo=36495,zl=36283,So=36284,yo=36285,Eo=36286,ih=3200,sh=3201,kl=0,rh=1,Mn="",Kt="srgb",wn="srgb-linear",Fo="display-p3",Ws="display-p3-linear",Fs="linear",it="srgb",Os="rec709",Bs="p3",$n=7680,aa=519,oh=512,ah=513,lh=514,Gl=515,ch=516,hh=517,uh=518,dh=519,la=35044,ca="300 es",hn=2e3,Hs=2001;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,To=180/Math.PI;function Ai(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function fh(n,e){return(n%e+e)%e}function tr(n,e,t){return(1-t)*n+t*e}function Ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ph={DEG2RAD:Ds};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,s,r,a,o,l,h){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,h)}set(e,t,i,s,r,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],_=i[8],S=s[0],p=s[3],m=s[6],v=s[1],g=s[4],y=s[7],L=s[2],C=s[5],R=s[8];return r[0]=a*S+o*v+l*L,r[3]=a*p+o*g+l*C,r[6]=a*m+o*y+l*R,r[1]=h*S+c*v+u*L,r[4]=h*p+c*g+u*C,r[7]=h*m+c*y+u*R,r[2]=d*S+f*v+_*L,r[5]=d*p+f*g+_*C,r[8]=d*m+f*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*r*c+i*o*l+s*r*h-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*r,f=h*r-a*l,_=t*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=u*S,e[1]=(s*h-c*i)*S,e[2]=(o*i-s*a)*S,e[3]=d*S,e[4]=(c*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(i*l-h*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nr.makeScale(e,t)),this}rotate(e){return this.premultiply(nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new ke;function Vl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mh(){const n=zs("canvas");return n.style.display="block",n}const ha={};function Is(n){n in ha||(ha[n]=!0,console.warn(n))}function gh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function _h(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ua=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),da=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ci={[wn]:{transfer:Fs,primaries:Os,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Kt]:{transfer:it,primaries:Os,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ws]:{transfer:Fs,primaries:Bs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(da),fromReference:n=>n.applyMatrix3(ua)},[Fo]:{transfer:it,primaries:Bs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(da),fromReference:n=>n.applyMatrix3(ua).convertLinearToSRGB()}},xh=new Set([wn,Ws]),Je={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!xh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ci[e].toReference,s=Ci[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ci[n].primaries},getTransfer:function(n){return n===Mn?Fs:Ci[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ci[e].luminanceCoefficients)}};function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Kn;class Mh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kn===void 0&&(Kn=zs("canvas")),Kn.width=e.width,Kn.height=e.height;const i=Kn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sh=0;class Wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sr(s[a].image)):r.push(sr(s[a]))}else r=sr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function sr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Ct extends qn{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=Hn,s=Hn,r=Xt,a=zn,o=Yt,l=un,h=Ct.DEFAULT_ANISOTROPY,c=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Ai(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Ll;Ct.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],_=l[9],S=l[2],p=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+S)<.1&&Math.abs(_+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(h+1)/2,y=(f+1)/2,L=(m+1)/2,C=(c+d)/4,R=(u+S)/4,U=(_+p)/4;return g>y&&g>L?g<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(g),s=C/i,r=R/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=U/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=U/r),this.set(i,s,r,t),this}let v=Math.sqrt((p-_)*(p-_)+(u-S)*(u-S)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(u-S)/v,this.z=(d-c)/v,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eh extends qn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ct(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Eh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xl extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Th extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=S;return}if(u!==S||l!==d||h!==f||c!==_){let p=1-o;const m=l*d+h*f+c*_+u*S,v=m>=0?1:-1,g=1-m*m;if(g>Number.EPSILON){const L=Math.sqrt(g),C=Math.atan2(L,m*v);p=Math.sin(p*C)/L,o=Math.sin(o*C)/L}const y=o*v;if(l=l*p+d*y,h=h*p+f*y,c=c*p+_*y,u=u*p+S*y,p===1-o){const L=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=L,h*=L,c*=L,u*=L}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+c*u+l*f-h*d,e[t+1]=l*_+c*d+h*u-o*f,e[t+2]=h*_+c*f+o*d-l*u,e[t+3]=c*_-o*u-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*f*_,this._y=h*f*u-d*c*_,this._z=h*c*_+d*f*u,this._w=h*c*u-d*f*_;break;case"YXZ":this._x=d*c*u+h*f*_,this._y=h*f*u-d*c*_,this._z=h*c*_-d*f*u,this._w=h*c*u+d*f*_;break;case"ZXY":this._x=d*c*u-h*f*_,this._y=h*f*u+d*c*_,this._z=h*c*_+d*f*u,this._w=h*c*u-d*f*_;break;case"ZYX":this._x=d*c*u-h*f*_,this._y=h*f*u+d*c*_,this._z=h*c*_-d*f*u,this._w=h*c*u+d*f*_;break;case"YZX":this._x=d*c*u+h*f*_,this._y=h*f*u+d*c*_,this._z=h*c*_-d*f*u,this._w=h*c*u-d*f*_;break;case"XZY":this._x=d*c*u-h*f*_,this._y=h*f*u-d*c*_,this._z=h*c*_+d*f*u,this._w=h*c*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-s*o,this._w=a*c-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*i),c=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=s+l*u+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new D,fa=new Wn;class Yi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(r,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qi.copy(i.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),es.subVectors(this.max,Li),Zn.subVectors(e.a,Li),jn.subVectors(e.b,Li),Jn.subVectors(e.c,Li),fn.subVectors(jn,Zn),pn.subVectors(Jn,jn),Rn.subVectors(Zn,Jn);let t=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Rn.z,Rn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Rn.z,0,-Rn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Rn.y,Rn.x,0];return!or(t,Zn,jn,Jn,es)||(t=[1,0,0,0,1,0,0,0,1],!or(t,Zn,jn,Jn,es))?!1:(ts.crossVectors(fn,pn),t=[ts.x,ts.y,ts.z],or(t,Zn,jn,Jn,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new D,new D,new D,new D,new D,new D,new D,new D],Gt=new D,Qi=new Yi,Zn=new D,jn=new D,Jn=new D,fn=new D,pn=new D,Rn=new D,Li=new D,es=new D,ts=new D,Cn=new D;function or(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Cn.fromArray(n,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),l=e.dot(Cn),h=t.dot(Cn),c=i.dot(Cn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Ah=new Yi,Pi=new D,ar=new D;class Xs{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ah.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Pi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(ar)),this.expandByPoint(Pi.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new D,lr=new D,ns=new D,mn=new D,cr=new D,is=new D,hr=new D;class Oo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){lr.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(lr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=mn.dot(this.direction),l=-mn.dot(ns),h=mn.lengthSq(),c=Math.abs(1-a*a);let u,d,f,_;if(c>0)if(u=a*l-o,d=a*o-l,_=r*c,u>=0)if(d>=-_)if(d<=_){const S=1/c;u*=S,d*=S,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lr).addScaledVector(ns,d),f}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const i=nn.dot(this.direction),s=nn.dot(nn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,i,s,r){cr.subVectors(t,e),is.subVectors(i,e),hr.crossVectors(cr,is);let a=this.direction.dot(hr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,e);const l=o*this.direction.dot(is.crossVectors(mn,is));if(l<0)return null;const h=o*this.direction.dot(cr.cross(mn));if(h<0||l+h>a)return null;const c=-o*mn.dot(hr);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,s,r,a,o,l,h,c,u,d,f,_,S,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,h,c,u,d,f,_,S,p)}set(e,t,i,s,r,a,o,l,h,c,u,d,f,_,S,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Qn.setFromMatrixColumn(e,0).length(),r=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*c,f=a*u,_=o*c,S=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=f+_*h,t[5]=d-S*h,t[9]=-o*l,t[2]=S-d*h,t[6]=_+f*h,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,f=l*u,_=h*c,S=h*u;t[0]=d+S*o,t[4]=_*o-f,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=f*o-_,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,f=l*u,_=h*c,S=h*u;t[0]=d-S*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*c,t[9]=S-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,f=a*u,_=o*c,S=o*u;t[0]=l*c,t[4]=_*h-f,t[8]=d*h+S,t[1]=l*u,t[5]=S*h+d,t[9]=f*h-_,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*h,_=o*l,S=o*h;t[0]=l*c,t[4]=S-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=f*u+_,t[10]=d-S*u}else if(e.order==="XZY"){const d=a*l,f=a*h,_=o*l,S=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+S,t[5]=a*c,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*c,t[10]=S*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wh,e,bh)}lookAt(e,t,i){const s=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),gn.crossVectors(i,It),gn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),gn.crossVectors(i,It)),gn.normalize(),ss.crossVectors(It,gn),s[0]=gn.x,s[4]=ss.x,s[8]=It.x,s[1]=gn.y,s[5]=ss.y,s[9]=It.y,s[2]=gn.z,s[6]=ss.z,s[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],_=i[2],S=i[6],p=i[10],m=i[14],v=i[3],g=i[7],y=i[11],L=i[15],C=s[0],R=s[4],U=s[8],Q=s[12],x=s[1],E=s[5],B=s[9],F=s[13],k=s[2],q=s[6],V=s[10],X=s[14],W=s[3],pe=s[7],fe=s[11],ue=s[15];return r[0]=a*C+o*x+l*k+h*W,r[4]=a*R+o*E+l*q+h*pe,r[8]=a*U+o*B+l*V+h*fe,r[12]=a*Q+o*F+l*X+h*ue,r[1]=c*C+u*x+d*k+f*W,r[5]=c*R+u*E+d*q+f*pe,r[9]=c*U+u*B+d*V+f*fe,r[13]=c*Q+u*F+d*X+f*ue,r[2]=_*C+S*x+p*k+m*W,r[6]=_*R+S*E+p*q+m*pe,r[10]=_*U+S*B+p*V+m*fe,r[14]=_*Q+S*F+p*X+m*ue,r[3]=v*C+g*x+y*k+L*W,r[7]=v*R+g*E+y*q+L*pe,r[11]=v*U+g*B+y*V+L*fe,r[15]=v*Q+g*F+y*X+L*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],f=e[14],_=e[3],S=e[7],p=e[11],m=e[15];return _*(+r*l*u-s*h*u-r*o*d+i*h*d+s*o*f-i*l*f)+S*(+t*l*f-t*h*d+r*a*d-s*a*f+s*h*c-r*l*c)+p*(+t*h*u-t*o*f-r*a*u+i*a*f+r*o*c-i*h*c)+m*(-s*o*c-t*l*u+t*o*d+s*a*u-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],f=e[11],_=e[12],S=e[13],p=e[14],m=e[15],v=u*p*h-S*d*h+S*l*f-o*p*f-u*l*m+o*d*m,g=_*d*h-c*p*h-_*l*f+a*p*f+c*l*m-a*d*m,y=c*S*h-_*u*h+_*o*f-a*S*f-c*o*m+a*u*m,L=_*u*l-c*S*l-_*o*d+a*S*d+c*o*p-a*u*p,C=t*v+i*g+s*y+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=v*R,e[1]=(S*d*r-u*p*r-S*s*f+i*p*f+u*s*m-i*d*m)*R,e[2]=(o*p*r-S*l*r+S*s*h-i*p*h-o*s*m+i*l*m)*R,e[3]=(u*l*r-o*d*r-u*s*h+i*d*h+o*s*f-i*l*f)*R,e[4]=g*R,e[5]=(c*p*r-_*d*r+_*s*f-t*p*f-c*s*m+t*d*m)*R,e[6]=(_*l*r-a*p*r-_*s*h+t*p*h+a*s*m-t*l*m)*R,e[7]=(a*d*r-c*l*r+c*s*h-t*d*h-a*s*f+t*l*f)*R,e[8]=y*R,e[9]=(_*u*r-c*S*r-_*i*f+t*S*f+c*i*m-t*u*m)*R,e[10]=(a*S*r-_*o*r+_*i*h-t*S*h-a*i*m+t*o*m)*R,e[11]=(c*o*r-a*u*r-c*i*h+t*u*h+a*i*f-t*o*f)*R,e[12]=L*R,e[13]=(c*S*s-_*u*s+_*i*d-t*S*d-c*i*p+t*u*p)*R,e[14]=(_*o*s-a*S*s-_*i*l+t*S*l+a*i*p-t*o*p)*R,e[15]=(a*u*s-c*o*s+c*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,u=o+o,d=r*h,f=r*c,_=r*u,S=a*c,p=a*u,m=o*u,v=l*h,g=l*c,y=l*u,L=i.x,C=i.y,R=i.z;return s[0]=(1-(S+m))*L,s[1]=(f+y)*L,s[2]=(_-g)*L,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(d+m))*C,s[6]=(p+v)*C,s[7]=0,s[8]=(_+g)*R,s[9]=(p-v)*R,s[10]=(1-(d+S))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Qn.set(s[0],s[1],s[2]).length();const a=Qn.set(s[4],s[5],s[6]).length(),o=Qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vt.copy(this);const h=1/r,c=1/a,u=1/o;return Vt.elements[0]*=h,Vt.elements[1]*=h,Vt.elements[2]*=h,Vt.elements[4]*=c,Vt.elements[5]*=c,Vt.elements[6]*=c,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=hn){const l=this.elements,h=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let f,_;if(o===hn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Hs)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=hn){const l=this.elements,h=1/(t-e),c=1/(i-s),u=1/(a-r),d=(t+e)*h,f=(i+s)*c;let _,S;if(o===hn)_=(a+r)*u,S=-2*u;else if(o===Hs)_=r*u,S=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qn=new D,Vt=new st,wh=new D(0,0,0),bh=new D(1,1,1),gn=new D,ss=new D,It=new D,pa=new st,ma=new Wn;class Jt{constructor(e=0,t=0,i=0,s=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ma.setFromEuler(this),this.setFromQuaternion(ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rh=0;const ga=new D,ei=new Wn,sn=new st,rs=new D,Di=new D,Ch=new D,Lh=new Wn,_a=new D(1,0,0),va=new D(0,1,0),xa=new D(0,0,1),Ma={type:"added"},Ph={type:"removed"},ti={type:"childadded",child:null},ur={type:"childremoved",child:null};class vt extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new D,t=new Jt,i=new Wn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new ke}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(_a,e)}rotateY(e){return this.rotateOnAxis(va,e)}rotateZ(e){return this.rotateOnAxis(xa,e)}translateOnAxis(e,t){return ga.copy(e).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_a,e)}translateY(e){return this.translateOnAxis(va,e)}translateZ(e){return this.translateOnAxis(xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rs.copy(e):rs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Di,rs,this.up):sn.lookAt(rs,Di,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),ei.setFromRotationMatrix(sn),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ma),ti.child=e,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ph),ur.child=e,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ma),ti.child=e,this.dispatchEvent(ti),ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new D,rn=new D,dr=new D,on=new D,ni=new D,ii=new D,Sa=new D,fr=new D,pr=new D,mr=new D,gr=new at,_r=new at,vr=new at;class qt{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wt.subVectors(e,t),s.cross(Wt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wt.subVectors(s,t),rn.subVectors(i,t),dr.subVectors(e,t);const a=Wt.dot(Wt),o=Wt.dot(rn),l=Wt.dot(dr),h=rn.dot(rn),c=rn.dot(dr),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*l-o*c)*d,_=(a*c-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return gr.setScalar(0),_r.setScalar(0),vr.setScalar(0),gr.fromBufferAttribute(e,t),_r.fromBufferAttribute(e,i),vr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gr,r.x),a.addScaledVector(_r,r.y),a.addScaledVector(vr,r.z),a}static isFrontFacing(e,t,i,s){return Wt.subVectors(i,t),rn.subVectors(e,t),Wt.cross(rn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Wt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ni.subVectors(s,i),ii.subVectors(r,i),fr.subVectors(e,i);const l=ni.dot(fr),h=ii.dot(fr);if(l<=0&&h<=0)return t.copy(i);pr.subVectors(e,s);const c=ni.dot(pr),u=ii.dot(pr);if(c>=0&&u<=c)return t.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(ni,a);mr.subVectors(e,r);const f=ni.dot(mr),_=ii.dot(mr);if(_>=0&&f<=_)return t.copy(r);const S=f*h-l*_;if(S<=0&&h>=0&&_<=0)return o=h/(h-_),t.copy(i).addScaledVector(ii,o);const p=c*_-f*u;if(p<=0&&u-c>=0&&f-_>=0)return Sa.subVectors(r,s),o=(u-c)/(u-c+(f-_)),t.copy(s).addScaledVector(Sa,o);const m=1/(p+S+d);return a=S*m,o=d*m,t.copy(i).addScaledVector(ni,a).addScaledVector(ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},os={h:0,s:0,l:0};function xr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=fh(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=xr(a,r,e+1/3),this.g=xr(a,r,e),this.b=xr(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=Yl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Je.fromWorkingColorSpace(Mt.copy(this),e),Math.round(_t(Mt.r*255,0,255))*65536+Math.round(_t(Mt.g*255,0,255))*256+Math.round(_t(Mt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Mt.copy(this),t);const i=Mt.r,s=Mt.g,r=Mt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Kt){Je.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,s=Mt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(os);const i=tr(_n.h,os.h,t),s=tr(_n.s,os.s,t),r=tr(_n.l,os.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ge;Ge.NAMES=Yl;let Dh=0;class wi extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=fi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Br,this.blendDst=Hr,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(i.blending=this.blending),this.side!==Tn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Br&&(i.blendSrc=this.blendSrc),this.blendDst!==Hr&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $l extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new D,as=new le;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=la,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),e}}class Kl extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zl extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Lt extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ih=0;const Ot=new st,Mr=new vt,si=new D,Ut=new Yi,Ii=new Yi,mt=new D;class $t extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vl(e)?Zl:Kl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,i){return Ot.makeTranslation(e,t,i),this.applyMatrix4(Ot),this}scale(e,t,i){return Ot.makeScale(e,t,i),this.applyMatrix4(Ot),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Ut.min,Ii.min),Ut.expandByPoint(mt),mt.addVectors(Ut.max,Ii.max),Ut.expandByPoint(mt)):(Ut.expandByPoint(Ii.min),Ut.expandByPoint(Ii.max))}Ut.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)mt.fromBufferAttribute(o,h),l&&(si.fromBufferAttribute(e,h),mt.add(si)),s=Math.max(s,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new D,l[U]=new D;const h=new D,c=new D,u=new D,d=new le,f=new le,_=new le,S=new D,p=new D;function m(U,Q,x){h.fromBufferAttribute(i,U),c.fromBufferAttribute(i,Q),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,Q),_.fromBufferAttribute(r,x),c.sub(h),u.sub(h),f.sub(d),_.sub(d);const E=1/(f.x*_.y-_.x*f.y);isFinite(E)&&(S.copy(c).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(E),p.copy(u).multiplyScalar(f.x).addScaledVector(c,-_.x).multiplyScalar(E),o[U].add(S),o[Q].add(S),o[x].add(S),l[U].add(p),l[Q].add(p),l[x].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,Q=v.length;U<Q;++U){const x=v[U],E=x.start,B=x.count;for(let F=E,k=E+B;F<k;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const g=new D,y=new D,L=new D,C=new D;function R(U){L.fromBufferAttribute(s,U),C.copy(L);const Q=o[U];g.copy(Q),g.sub(L.multiplyScalar(L.dot(Q))).normalize(),y.crossVectors(C,Q);const E=y.dot(l[U])<0?-1:1;a.setXYZW(U,g.x,g.y,g.z,E)}for(let U=0,Q=v.length;U<Q;++U){const x=v[U],E=x.start,B=x.count;for(let F=E,k=E+B;F<k;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,h=new D,c=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),S=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),h.fromBufferAttribute(i,p),o.add(c),l.add(c),h.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let f=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*c;for(let m=0;m<c;m++)d[_++]=h[f++]}return new jt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=e(l,i);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(t))}const r=e.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ya=new st,Ln=new Oo,ls=new Xs,Ea=new D,cs=new D,hs=new D,us=new D,Sr=new D,ds=new D,Ta=new D,fs=new D;class ct extends vt{constructor(e=new $t,t=new $l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ds.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],u=r[l];c!==0&&(Sr.fromBufferAttribute(u,e),a?ds.addScaledVector(Sr,c):ds.addScaledVector(Sr.sub(t),c))}t.add(ds)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(r),Ln.copy(e.ray).recast(e.near),!(ls.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(ls,Ea)===null||Ln.origin.distanceToSquared(Ea)>(e.far-e.near)**2))&&(ya.copy(r).invert(),Ln.copy(e.ray).applyMatrix4(ya),!(i.boundingBox!==null&&Ln.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const p=d[_],m=a[p.materialIndex],v=Math.max(p.start,f.start),g=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,L=g;y<L;y+=3){const C=o.getX(y),R=o.getX(y+1),U=o.getX(y+2);s=ps(this,m,e,i,h,c,u,C,R,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let p=_,m=S;p<m;p+=3){const v=o.getX(p),g=o.getX(p+1),y=o.getX(p+2);s=ps(this,a,e,i,h,c,u,v,g,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const p=d[_],m=a[p.materialIndex],v=Math.max(p.start,f.start),g=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,L=g;y<L;y+=3){const C=y,R=y+1,U=y+2;s=ps(this,m,e,i,h,c,u,C,R,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let p=_,m=S;p<m;p+=3){const v=p,g=p+1,y=p+2;s=ps(this,a,e,i,h,c,u,v,g,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Uh(n,e,t,i,s,r,a,o){let l;if(e.side===Rt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Tn,o),l===null)return null;fs.copy(o),fs.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(fs);return h<t.near||h>t.far?null:{distance:h,point:fs.clone(),object:n}}function ps(n,e,t,i,s,r,a,o,l,h){n.getVertexPosition(o,cs),n.getVertexPosition(l,hs),n.getVertexPosition(h,us);const c=Uh(n,e,t,i,cs,hs,us,Ta);if(c){const u=new D;qt.getBarycoord(Ta,cs,hs,us,u),s&&(c.uv=qt.getInterpolatedAttribute(s,o,l,h,u,new le)),r&&(c.uv1=qt.getInterpolatedAttribute(r,o,l,h,u,new le)),a&&(c.normal=qt.getInterpolatedAttribute(a,o,l,h,u,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:h,normal:new D,materialIndex:0};qt.getNormal(cs,hs,us,d.normal),c.face=d,c.barycoord=u}return c}class Nt extends $t{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(u,2));function _(S,p,m,v,g,y,L,C,R,U,Q){const x=y/R,E=L/U,B=y/2,F=L/2,k=C/2,q=R+1,V=U+1;let X=0,W=0;const pe=new D;for(let fe=0;fe<V;fe++){const ue=fe*E-F;for(let Ue=0;Ue<q;Ue++){const Ie=Ue*x-B;pe[S]=Ie*v,pe[p]=ue*g,pe[m]=k,h.push(pe.x,pe.y,pe.z),pe[S]=0,pe[p]=0,pe[m]=C>0?1:-1,c.push(pe.x,pe.y,pe.z),u.push(Ue/R),u.push(1-fe/U),X+=1}}for(let fe=0;fe<U;fe++)for(let ue=0;ue<R;ue++){const Ue=d+ue+q*fe,Ie=d+ue+q*(fe+1),H=d+(ue+1)+q*(fe+1),se=d+(ue+1)+q*fe;l.push(Ue,Ie,se),l.push(Ie,H,se),W+=6}o.addGroup(f,W,Q),f+=W,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=Si(n[t]);for(const s in i)e[s]=i[s]}return e}function Nh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Fh={clone:Si,merge:St};var Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jl extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new D,Aa=new le,wa=new le;class Ht extends Jl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vn.x,vn.y).multiplyScalar(-e/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vn.x,vn.y).multiplyScalar(-e/vn.z)}getViewSize(e,t){return this.getViewBounds(e,Aa,wa),t.subVectors(wa,Aa)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ri=-90,oi=1;class Hh extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(ri,oi,e,t);s.layers=this.layers,this.add(s);const r=new Ht(ri,oi,e,t);r.layers=this.layers,this.add(r);const a=new Ht(ri,oi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(ri,oi,e,t);o.layers=this.layers,this.add(o);const l=new Ht(ri,oi,e,t);l.layers=this.layers,this.add(l);const h=new Ht(ri,oi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const h of t)this.remove(h);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ql extends Ct{constructor(e,t,i,s,r,a,o,l,h,c){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,i,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zh extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ql(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nt(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Si(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Sn});r.uniforms.tEquirect.value=t;const a=new ct(s,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Xt),new Hh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const yr=new D,kh=new D,Gh=new ke;class xn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=yr.subVectors(i,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gh.getNormalMatrix(e),s=this.coplanarPoint(yr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Xs,ms=new D;class Bo{constructor(e=new xn,t=new xn,i=new xn,s=new xn,r=new xn,a=new xn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],c=s[5],u=s[6],d=s[7],f=s[8],_=s[9],S=s[10],p=s[11],m=s[12],v=s[13],g=s[14],y=s[15];if(i[0].setComponents(l-r,d-h,p-f,y-m).normalize(),i[1].setComponents(l+r,d+h,p+f,y+m).normalize(),i[2].setComponents(l+a,d+c,p+_,y+v).normalize(),i[3].setComponents(l-a,d-c,p-_,y-v).normalize(),i[4].setComponents(l-o,d-u,p-S,y-g).normalize(),t===hn)i[5].setComponents(l+o,d+u,p+S,y+g).normalize();else if(t===Hs)i[5].setComponents(o,u,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ms.x=s.normal.x>0?e.max.x:e.min.x,ms.y=s.normal.y>0?e.max.y:e.min.y,ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ec(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vh(n){const e=new WeakMap;function t(o,l){const h=o.array,c=o.usage,u=h.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=n.SHORT;else if(h instanceof Uint32Array)f=n.UNSIGNED_INT;else if(h instanceof Int32Array)f=n.INT;else if(h instanceof Int8Array)f=n.BYTE;else if(h instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){const c=l.array,u=l.updateRanges;if(n.bindBuffer(h,o),u.length===0)n.bufferSubData(h,0,c);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],S=u[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,u[d]=S)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const S=u[f];n.bufferSubData(h,S.start*c.BYTES_PER_ELEMENT,c,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}class $i extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,u=e/o,d=t/l,f=[],_=[],S=[],p=[];for(let m=0;m<c;m++){const v=m*d-a;for(let g=0;g<h;g++){const y=g*u-r;_.push(y,-v,0),S.push(0,0,1),p.push(g/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const g=v+h*m,y=v+h*(m+1),L=v+1+h*(m+1),C=v+1+h*m;f.push(g,y,C),f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(S,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,su=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Su=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,df=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:$h,alphatest_pars_fragment:Kh,aomap_fragment:Zh,aomap_pars_fragment:jh,batching_pars_vertex:Jh,batching_vertex:Qh,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:su,clipping_planes_fragment:ru,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:au,clipping_planes_vertex:lu,color_fragment:cu,color_pars_fragment:hu,color_pars_vertex:uu,color_vertex:du,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:_u,emissivemap_fragment:vu,emissivemap_pars_fragment:xu,colorspace_fragment:Mu,colorspace_pars_fragment:Su,envmap_fragment:yu,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Fu,envmap_vertex:wu,fog_vertex:bu,fog_pars_vertex:Ru,fog_fragment:Cu,fog_pars_fragment:Lu,gradientmap_pars_fragment:Pu,lightmap_pars_fragment:Du,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Uu,lights_pars_begin:Nu,lights_toon_fragment:Ou,lights_toon_pars_fragment:Bu,lights_phong_fragment:Hu,lights_phong_pars_fragment:zu,lights_physical_fragment:ku,lights_physical_pars_fragment:Gu,lights_fragment_begin:Vu,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:Ku,map_fragment:Zu,map_pars_fragment:ju,map_particle_fragment:Ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:ed,metalnessmap_pars_fragment:td,morphinstance_vertex:nd,morphcolor_vertex:id,morphnormal_vertex:sd,morphtarget_pars_vertex:rd,morphtarget_vertex:od,normal_fragment_begin:ad,normal_fragment_maps:ld,normal_pars_fragment:cd,normal_pars_vertex:hd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:_d,packing:vd,premultiplied_alpha_fragment:xd,project_vertex:Md,dithering_fragment:Sd,dithering_pars_fragment:yd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:wd,shadowmap_vertex:bd,shadowmask_pars_fragment:Rd,skinbase_vertex:Cd,skinning_pars_vertex:Ld,skinning_vertex:Pd,skinnormal_vertex:Dd,specularmap_fragment:Id,specularmap_pars_fragment:Ud,tonemapping_fragment:Nd,tonemapping_pars_fragment:Fd,transmission_fragment:Od,transmission_pars_fragment:Bd,uv_pars_fragment:Hd,uv_pars_vertex:zd,uv_vertex:kd,worldpos_vertex:Gd,background_vert:Vd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:qd,cube_vert:Yd,cube_frag:$d,depth_vert:Kd,depth_frag:Zd,distanceRGBA_vert:jd,distanceRGBA_frag:Jd,equirect_vert:Qd,equirect_frag:ef,linedashed_vert:tf,linedashed_frag:nf,meshbasic_vert:sf,meshbasic_frag:rf,meshlambert_vert:of,meshlambert_frag:af,meshmatcap_vert:lf,meshmatcap_frag:cf,meshnormal_vert:hf,meshnormal_frag:uf,meshphong_vert:df,meshphong_frag:ff,meshphysical_vert:pf,meshphysical_frag:mf,meshtoon_vert:gf,meshtoon_frag:_f,points_vert:vf,points_frag:xf,shadow_vert:Mf,shadow_frag:Sf,sprite_vert:yf,sprite_frag:Ef},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Zt={basic:{uniforms:St([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:St([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:St([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:St([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:St([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:St([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:St([ge.points,ge.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:St([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:St([ge.common,ge.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:St([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:St([ge.sprite,ge.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:St([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:St([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Zt.physical={uniforms:St([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const gs={r:0,b:0,g:0},Dn=new Jt,Tf=new st;function Af(n,e,t,i,s,r,a){const o=new Ge(0);let l=r===!0?0:1,h,c,u=null,d=0,f=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?t:e).get(g)),g}function S(v){let g=!1;const y=_(v);y===null?m(o,l):y&&y.isColor&&(m(y,1),g=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(v,g){const y=_(g);y&&(y.isCubeTexture||y.mapping===Vs)?(c===void 0&&(c=new ct(new Nt(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Si(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Dn.copy(g.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tf.makeRotationFromEuler(Dn)),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==it,(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new ct(new $i(2,2),new An({name:"BackgroundMaterial",uniforms:Si(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=Je.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function m(v,g){v.getRGB(gs,jl(n)),i.buffers.color.setClear(gs.r,gs.g,gs.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),l=g,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:S,addToRenderList:p}}function wf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(x,E,B,F,k){let q=!1;const V=u(F,B,E);r!==V&&(r=V,h(r.object)),q=f(x,F,B,k),q&&_(x,F,B,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(x,E,B,F),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function h(x){return n.bindVertexArray(x)}function c(x){return n.deleteVertexArray(x)}function u(x,E,B){const F=B.wireframe===!0;let k=i[x.id];k===void 0&&(k={},i[x.id]=k);let q=k[E.id];q===void 0&&(q={},k[E.id]=q);let V=q[F];return V===void 0&&(V=d(l()),q[F]=V),V}function d(x){const E=[],B=[],F=[];for(let k=0;k<t;k++)E[k]=0,B[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:B,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,E,B,F){const k=r.attributes,q=E.attributes;let V=0;const X=B.getAttributes();for(const W in X)if(X[W].location>=0){const fe=k[W];let ue=q[W];if(ue===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),fe===void 0||fe.attribute!==ue||ue&&fe.data!==ue.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function _(x,E,B,F){const k={},q=E.attributes;let V=0;const X=B.getAttributes();for(const W in X)if(X[W].location>=0){let fe=q[W];fe===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor));const ue={};ue.attribute=fe,fe&&fe.data&&(ue.data=fe.data),k[W]=ue,V++}r.attributes=k,r.attributesNum=V,r.index=F}function S(){const x=r.newAttributes;for(let E=0,B=x.length;E<B;E++)x[E]=0}function p(x){m(x,0)}function m(x,E){const B=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;B[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),k[x]!==E&&(n.vertexAttribDivisor(x,E),k[x]=E)}function v(){const x=r.newAttributes,E=r.enabledAttributes;for(let B=0,F=E.length;B<F;B++)E[B]!==x[B]&&(n.disableVertexAttribArray(B),E[B]=0)}function g(x,E,B,F,k,q,V){V===!0?n.vertexAttribIPointer(x,E,B,k,q):n.vertexAttribPointer(x,E,B,F,k,q)}function y(x,E,B,F){S();const k=F.attributes,q=B.getAttributes(),V=E.defaultAttributeValues;for(const X in q){const W=q[X];if(W.location>=0){let pe=k[X];if(pe===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){const fe=pe.normalized,ue=pe.itemSize,Ue=e.get(pe);if(Ue===void 0)continue;const Ie=Ue.buffer,H=Ue.type,se=Ue.bytesPerElement,he=H===n.INT||H===n.UNSIGNED_INT||pe.gpuType===Lo;if(pe.isInterleavedBufferAttribute){const ie=pe.data,_e=ie.stride,Te=pe.offset;if(ie.isInstancedInterleavedBuffer){for(let be=0;be<W.locationSize;be++)m(W.location+be,ie.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let be=0;be<W.locationSize;be++)p(W.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let be=0;be<W.locationSize;be++)g(W.location+be,ue/W.locationSize,H,fe,_e*se,(Te+ue/W.locationSize*be)*se,he)}else{if(pe.isInstancedBufferAttribute){for(let ie=0;ie<W.locationSize;ie++)m(W.location+ie,pe.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ie=0;ie<W.locationSize;ie++)p(W.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ie=0;ie<W.locationSize;ie++)g(W.location+ie,ue/W.locationSize,H,fe,ue*se,ue/W.locationSize*ie*se,he)}}else if(V!==void 0){const fe=V[X];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(W.location,fe);break;case 3:n.vertexAttrib3fv(W.location,fe);break;case 4:n.vertexAttrib4fv(W.location,fe);break;default:n.vertexAttrib1fv(W.location,fe)}}}}v()}function L(){U();for(const x in i){const E=i[x];for(const B in E){const F=E[B];for(const k in F)c(F[k].object),delete F[k];delete E[B]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const B in E){const F=E[B];for(const k in F)c(F[k].object),delete F[k];delete E[B]}delete i[x.id]}function R(x){for(const E in i){const B=i[E];if(B[x.id]===void 0)continue;const F=B[x.id];for(const k in F)c(F[k].object),delete F[k];delete B[x.id]}}function U(){Q(),a=!0,r!==s&&(r=s,h(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:Q,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:p,disableUnusedAttributes:v}}function bf(n,e,t){let i;function s(h){i=h}function r(h,c){n.drawArrays(i,h,c),t.update(c,i,1)}function a(h,c,u){u!==0&&(n.drawArraysInstanced(i,h,c,u),t.update(c,i,u))}function o(h,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let f=0;for(let _=0;_<u;_++)f+=c[_];t.update(f,i,1)}function l(h,c,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<h.length;_++)a(h[_],c[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let _=0;for(let S=0;S<u;S++)_+=c[S];for(let S=0;S<d.length;S++)t.update(_,i,d[S])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rf(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Yt&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==un&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==cn&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function Cf(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new xn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,S=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?c(null):h();else{const v=r?0:i,g=v*4;let y=m.clippingState||null;l.value=y,y=c(_,d,g,f);for(let L=0;L!==g;++L)y[L]=t[L];m.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,d,f,_){const S=u!==null?u.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const m=f+S*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let g=0,y=f;g!==S;++g,y+=4)a.copy(u[g]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function Lf(n){let e=new WeakMap;function t(a,o){return o===Yr?a.mapping=_i:o===$r&&(a.mapping=vi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yr||o===$r)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new zh(l.height);return h.fromEquirectangularTexture(n,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class tc extends Jl{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,ba=[.125,.215,.35,.446,.526,.582],Bn=20,Er=new tc,Ra=new Ge;let Tr=null,Ar=0,wr=0,br=!1;const Fn=(1+Math.sqrt(5))/2,ai=1/Fn,Ca=[new D(-Fn,ai,0),new D(Fn,ai,0),new D(-ai,0,Fn),new D(ai,0,Fn),new D(0,Fn,-ai),new D(0,Fn,ai),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class La{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Tr=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ia(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Da(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tr,Ar,wr),this._renderer.xr.enabled=br,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tr=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:qi,format:Yt,colorSpace:wn,depthBuffer:!1},s=Pa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pa(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pf(r)),this._blurMaterial=Df(r,e,t)}return s}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,i,s){const o=new Ht(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Ra),c.toneMapping=yn,c.autoClear=!1;const f=new $l({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new ct(new Nt,f);let S=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,S=!0):(f.color.copy(Ra),S=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(h[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,h[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,h[m]));const g=this._cubeSize;_s(s,v*g,m>2?g:0,g,g),c.setRenderTarget(s),S&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===_i||e.mapping===vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ia()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Da());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_s(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Er)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ca[(s-r-1)%Ca.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new ct(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bn-1),S=r/_,p=isFinite(r)?1+Math.floor(c*S):Bn;p>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const m=[];let v=0;for(let R=0;R<Bn;++R){const U=R/S,Q=Math.exp(-U*U/2);m.push(Q),R===0?v+=Q:R<p&&(v+=2*Q)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-i;const y=this._sizeLods[s],L=3*y*(s>g-hi?s-g+hi:0),C=4*(this._cubeSize-y);_s(t,L,C,3*y,2*y),l.setRenderTarget(t),l.render(u,Er)}}function Pf(n){const e=[],t=[],i=[];let s=n;const r=n-hi+1+ba.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-hi?l=ba[a-n+hi-1]:a===0&&(l=0),i.push(l);const h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,_=6,S=3,p=2,m=1,v=new Float32Array(S*_*f),g=new Float32Array(p*_*f),y=new Float32Array(m*_*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,U=C>2?0:-1,Q=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];v.set(Q,S*_*C),g.set(d,p*_*C);const x=[C,C,C,C,C,C];y.set(x,m*_*C)}const L=new $t;L.setAttribute("position",new jt(v,S)),L.setAttribute("uv",new jt(g,p)),L.setAttribute("faceIndex",new jt(y,m)),e.push(L),s>hi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pa(n,e,t){const i=new Vn(n,e,t);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Df(n,e,t){const i=new Float32Array(Bn),s=new D(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Da(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ia(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function If(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,h=l===Yr||l===$r,c=l===_i||l===vi;if(h||c){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new La(n)),u=h?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return h&&f&&f.height>0||c&&f&&s(f)?(t===null&&(t=new La(n)),u=h?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Uf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Is("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Nf(n,e,t,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const S=d.morphAttributes[_];for(let p=0,m=S.length;p<m;p++)e.remove(S[p])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const S=f[_];for(let p=0,m=S.length;p<m;p++)e.update(S[p],n.ARRAY_BUFFER)}}function h(u){const d=[],f=u.index,_=u.attributes.position;let S=0;if(f!==null){const v=f.array;S=f.version;for(let g=0,y=v.length;g<y;g+=3){const L=v[g+0],C=v[g+1],R=v[g+2];d.push(L,C,C,R,R,L)}}else if(_!==void 0){const v=_.array;S=_.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const L=g+0,C=g+1,R=g+2;d.push(L,C,C,R,R,L)}}else return;const p=new(Vl(d)?Zl:Kl)(d,1);p.version=S;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Ff(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function h(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,d*a,_),t.update(f,i,_))}function c(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,i,1)}function u(d,f,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)h(d[m]/a,f[m],S[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,S,0,_);let m=0;for(let v=0;v<_;v++)m+=f[v];for(let v=0;v<S.length;v++)t.update(m,i,S[v])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Of(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Bf(n,e,t){const i=new WeakMap,s=new at;function r(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let x=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),S===!0&&(y=2),p===!0&&(y=3);let L=o.attributes.position.count*y,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*C*4*u),U=new Xl(R,L,C,u);U.type=cn,U.needsUpdate=!0;const Q=y*4;for(let E=0;E<u;E++){const B=m[E],F=v[E],k=g[E],q=L*C*4*E;for(let V=0;V<B.count;V++){const X=V*Q;_===!0&&(s.fromBufferAttribute(B,V),R[q+X+0]=s.x,R[q+X+1]=s.y,R[q+X+2]=s.z,R[q+X+3]=0),S===!0&&(s.fromBufferAttribute(F,V),R[q+X+4]=s.x,R[q+X+5]=s.y,R[q+X+6]=s.z,R[q+X+7]=0),p===!0&&(s.fromBufferAttribute(k,V),R[q+X+8]=s.x,R[q+X+9]=s.y,R[q+X+10]=s.z,R[q+X+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new le(L,C)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<h.length;p++)_+=h[p];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Hf(n,e,t,i){let s=new WeakMap;function r(l){const h=i.render.frame,c=l.geometry,u=e.get(l,c);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}class nc extends Ct{constructor(e,t,i,s,r,a,o,l,h,c=pi){if(c!==pi&&c!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===pi&&(i=Gn),i===void 0&&c===Mi&&(i=xi),super(null,s,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ic=new Ct,Ua=new nc(1,1),sc=new Xl,rc=new Th,oc=new Ql,Na=[],Fa=[],Oa=new Float32Array(16),Ba=new Float32Array(9),Ha=new Float32Array(4);function bi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Na[s];if(r===void 0&&(r=new Float32Array(s),Na[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qs(n,e){let t=Fa[e];t===void 0&&(t=new Int32Array(e),Fa[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Gf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function Vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Wf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;Ha.set(i),n.uniformMatrix2fv(this.addr,!1,Ha),pt(t,i)}}function Xf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;Ba.set(i),n.uniformMatrix3fv(this.addr,!1,Ba),pt(t,i)}}function qf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;Oa.set(i),n.uniformMatrix4fv(this.addr,!1,Oa),pt(t,i)}}function Yf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function jf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function tp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ua.compareFunction=Gl,r=Ua):r=ic,t.setTexture2D(e||r,s)}function np(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rc,s)}function ip(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||oc,s)}function sp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sc,s)}function rp(n){switch(n){case 5126:return zf;case 35664:return kf;case 35665:return Gf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return qf;case 5124:case 35670:return Yf;case 35667:case 35671:return $f;case 35668:case 35672:return Kf;case 35669:case 35673:return Zf;case 5125:return jf;case 36294:return Jf;case 36295:return Qf;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return sp}}function op(n,e){n.uniform1fv(this.addr,e)}function ap(n,e){const t=bi(e,this.size,2);n.uniform2fv(this.addr,t)}function lp(n,e){const t=bi(e,this.size,3);n.uniform3fv(this.addr,t)}function cp(n,e){const t=bi(e,this.size,4);n.uniform4fv(this.addr,t)}function hp(n,e){const t=bi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function up(n,e){const t=bi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dp(n,e){const t=bi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fp(n,e){n.uniform1iv(this.addr,e)}function pp(n,e){n.uniform2iv(this.addr,e)}function mp(n,e){n.uniform3iv(this.addr,e)}function gp(n,e){n.uniform4iv(this.addr,e)}function _p(n,e){n.uniform1uiv(this.addr,e)}function vp(n,e){n.uniform2uiv(this.addr,e)}function xp(n,e){n.uniform3uiv(this.addr,e)}function Mp(n,e){n.uniform4uiv(this.addr,e)}function Sp(n,e,t){const i=this.cache,s=e.length,r=qs(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ic,r[a])}function yp(n,e,t){const i=this.cache,s=e.length,r=qs(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rc,r[a])}function Ep(n,e,t){const i=this.cache,s=e.length,r=qs(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||oc,r[a])}function Tp(n,e,t){const i=this.cache,s=e.length,r=qs(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sc,r[a])}function Ap(n){switch(n){case 5126:return op;case 35664:return ap;case 35665:return lp;case 35666:return cp;case 35674:return hp;case 35675:return up;case 35676:return dp;case 5124:case 35670:return fp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return gp;case 5125:return _p;case 36294:return vp;case 36295:return xp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}class wp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rp(t.type)}}class bp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ap(t.type)}}class Rp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Rr=/(\w+)(\])?(\[|\.)?/g;function za(n,e){n.seq.push(e),n.map[e.id]=e}function Cp(n,e,t){const i=n.name,s=i.length;for(Rr.lastIndex=0;;){const r=Rr.exec(i),a=Rr.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){za(t,h===void 0?new wp(o,n,e):new bp(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Rp(o),za(t,u)),t=u}}}class Us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Cp(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ka(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Lp=37297;let Pp=0;function Dp(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Ip(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===Bs&&t===Os?i="LinearDisplayP3ToLinearSRGB":e===Os&&t===Bs&&(i="LinearSRGBToLinearDisplayP3"),n){case wn:case Ws:return[i,"LinearTransferOETF"];case Kt:case Fo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ga(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Dp(n.getShaderSource(e),a)}else return s}function Up(n,e){const t=Ip(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Np(n,e){let t;switch(e){case Zc:t="Linear";break;case jc:t="Reinhard";break;case Jc:t="Cineon";break;case Cl:t="ACESFilmic";break;case eh:t="AgX";break;case th:t="Neutral";break;case Qc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vs=new D;function Fp(){Je.getLuminanceCoefficients(vs);const n=vs.x.toFixed(4),e=vs.y.toFixed(4),t=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Op(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function Bp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Hp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ni(n){return n!==""}function Va(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wa(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(n){return n.replace(zp,Gp)}const kp=new Map;function Gp(n,e){let t=ze[e];if(t===void 0){const i=kp.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ao(t)}const Vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(n){return n.replace(Vp,Wp)}function Wp(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qa(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function qp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _i:case vi:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function $p(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rl:e="ENVMAP_BLENDING_MULTIPLY";break;case $c:e="ENVMAP_BLENDING_MIX";break;case Kc:e="ENVMAP_BLENDING_ADD";break}return e}function Kp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Zp(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xp(t),h=qp(t),c=Yp(t),u=$p(t),d=Kp(t),f=Op(t),_=Bp(r),S=s.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ni).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ni).join(`
`),m.length>0&&(m+=`
`)):(p=[qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),m=[qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?ze.tonemapping_pars_fragment:"",t.toneMapping!==yn?Np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Up("linearToOutputTexel",t.outputColorSpace),Fp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),a=Ao(a),a=Va(a,t),a=Wa(a,t),o=Ao(o),o=Va(o,t),o=Wa(o,t),a=Xa(a),o=Xa(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const g=v+p+a,y=v+m+o,L=ka(s,s.VERTEX_SHADER,g),C=ka(s,s.FRAGMENT_SHADER,y);s.attachShader(S,L),s.attachShader(S,C),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(E){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(S).trim(),F=s.getShaderInfoLog(L).trim(),k=s.getShaderInfoLog(C).trim();let q=!0,V=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,L,C);else{const X=Ga(s,L,"vertex"),W=Ga(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+B+`
`+X+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||k==="")&&(V=!1);V&&(E.diagnostics={runnable:q,programLog:B,vertexShader:{log:F,prefix:p},fragmentShader:{log:k,prefix:m}})}s.deleteShader(L),s.deleteShader(C),U=new Us(s,S),Q=Hp(s,S)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let Q;this.getAttributes=function(){return Q===void 0&&R(this),Q};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(S,Lp)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=C,this}let jp=0;class Jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qp(e),t.set(e,i)),i}}class Qp{constructor(e){this.id=jp++,this.code=e,this.usedTimes=0}}function em(n,e,t,i,s,r,a){const o=new ql,l=new Jp,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return h.add(x),x===0?"uv":`uv${x}`}function m(x,E,B,F,k){const q=F.fog,V=k.geometry,X=x.isMeshStandardMaterial?F.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),pe=W&&W.mapping===Vs?W.image.height:null,fe=S[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ue=ue!==void 0?ue.length:0;let Ie=0;V.morphAttributes.position!==void 0&&(Ie=1),V.morphAttributes.normal!==void 0&&(Ie=2),V.morphAttributes.color!==void 0&&(Ie=3);let H,se,he,ie;if(fe){const Et=Zt[fe];H=Et.vertexShader,se=Et.fragmentShader}else H=x.vertexShader,se=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),ie=l.getFragmentShaderID(x);const _e=n.getRenderTarget(),Te=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,Le=!!x.map,$=!!x.matcap,A=!!W,J=!!x.aoMap,ee=!!x.lightMap,j=!!x.bumpMap,re=!!x.normalMap,de=!!x.displacementMap,ce=!!x.emissiveMap,w=!!x.metalnessMap,M=!!x.roughnessMap,O=x.anisotropy>0,K=x.clearcoat>0,te=x.dispersion>0,Z=x.iridescence>0,Re=x.sheen>0,me=x.transmission>0,ye=O&&!!x.anisotropyMap,We=K&&!!x.clearcoatMap,oe=K&&!!x.clearcoatNormalMap,Ee=K&&!!x.clearcoatRoughnessMap,Oe=Z&&!!x.iridescenceMap,Be=Z&&!!x.iridescenceThicknessMap,Ae=Re&&!!x.sheenColorMap,Xe=Re&&!!x.sheenRoughnessMap,He=!!x.specularMap,tt=!!x.specularColorMap,P=!!x.specularIntensityMap,Me=me&&!!x.transmissionMap,Y=me&&!!x.thicknessMap,ne=!!x.gradientMap,ve=!!x.alphaMap,Se=x.alphaTest>0,qe=!!x.alphaHash,ht=!!x.extensions;let yt=yn;x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(yt=n.toneMapping);const Ye={shaderID:fe,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:se,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:Te,instancingColor:Te&&k.instanceColor!==null,instancingMorph:Te&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:wn,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:$,envMap:A,envMapMode:A&&W.mapping,envMapCubeUVHeight:pe,aoMap:J,lightMap:ee,bumpMap:j,normalMap:re,displacementMap:f&&de,emissiveMap:ce,normalMapObjectSpace:re&&x.normalMapType===rh,normalMapTangentSpace:re&&x.normalMapType===kl,metalnessMap:w,roughnessMap:M,anisotropy:O,anisotropyMap:ye,clearcoat:K,clearcoatMap:We,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:te,iridescence:Z,iridescenceMap:Oe,iridescenceThicknessMap:Be,sheen:Re,sheenColorMap:Ae,sheenRoughnessMap:Xe,specularMap:He,specularColorMap:tt,specularIntensityMap:P,transmission:me,transmissionMap:Me,thicknessMap:Y,gradientMap:ne,opaque:x.transparent===!1&&x.blending===fi&&x.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:qe,combine:x.combine,mapUv:Le&&p(x.map.channel),aoMapUv:J&&p(x.aoMap.channel),lightMapUv:ee&&p(x.lightMap.channel),bumpMapUv:j&&p(x.bumpMap.channel),normalMapUv:re&&p(x.normalMap.channel),displacementMapUv:de&&p(x.displacementMap.channel),emissiveMapUv:ce&&p(x.emissiveMap.channel),metalnessMapUv:w&&p(x.metalnessMap.channel),roughnessMapUv:M&&p(x.roughnessMap.channel),anisotropyMapUv:ye&&p(x.anisotropyMap.channel),clearcoatMapUv:We&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(x.sheenRoughnessMap.channel),specularMapUv:He&&p(x.specularMap.channel),specularColorMapUv:tt&&p(x.specularColorMap.channel),specularIntensityMapUv:P&&p(x.specularIntensityMap.channel),transmissionMapUv:Me&&p(x.transmissionMap.channel),thicknessMapUv:Y&&p(x.thicknessMap.channel),alphaMapUv:ve&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(re||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Le||ve),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Rt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ht&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&x.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=h.has(1),Ye.vertexUv2s=h.has(2),Ye.vertexUv3s=h.has(3),h.clear(),Ye}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)E.push(B),E.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(g(E,x),y(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),x.push(o.mask)}function L(x){const E=S[x.type];let B;if(E){const F=Zt[E];B=Fh.clone(F.uniforms)}else B=x.uniforms;return B}function C(x,E){let B;for(let F=0,k=c.length;F<k;F++){const q=c[F];if(q.cacheKey===E){B=q,++B.usedTimes;break}}return B===void 0&&(B=new Zp(n,E,x,r),c.push(B)),B}function R(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function U(x){l.remove(x)}function Q(){l.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:L,acquireProgram:C,releaseProgram:R,releaseShaderCache:U,programs:c,dispose:Q}}function tm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function nm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ya(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $a(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,_,S,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:S,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=S,m.group=p),e++,m}function o(u,d,f,_,S,p){const m=a(u,d,f,_,S,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,_,S,p){const m=a(u,d,f,_,S,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function h(u,d){t.length>1&&t.sort(u||nm),i.length>1&&i.sort(d||Ya),s.length>1&&s.sort(d||Ya)}function c(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:c,sort:h}}function im(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new $a,n.set(i,[a])):s>=r.length?(a=new $a,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ge};break;case"SpotLight":t={position:new D,direction:new D,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function rm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let om=0;function am(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lm(n){const e=new sm,t=rm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,r=new st,a=new st;function o(h){let c=0,u=0,d=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let f=0,_=0,S=0,p=0,m=0,v=0,g=0,y=0,L=0,C=0,R=0;h.sort(am);for(let Q=0,x=h.length;Q<x;Q++){const E=h[Q],B=E.color,F=E.intensity,k=E.distance,q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)c+=B.r*F,u+=B.g*F,d+=B.b*F;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],F);R++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const X=E.shadow,W=t.get(E);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=E.shadow.matrix,v++}i.directional[f]=V,f++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(B).multiplyScalar(F),V.distance=k,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[S]=V;const X=E.shadow;if(E.map&&(i.spotLightMap[L]=E.map,L++,X.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[S]=X.matrix,E.castShadow){const W=t.get(E);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[S]=W,i.spotShadowMap[S]=q,y++}S++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(B).multiplyScalar(F),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=V,p++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const X=E.shadow,W=t.get(E);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=E.shadow.matrix,g++}i.point[_]=V,_++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(F),V.groundColor.copy(E.groundColor).multiplyScalar(F),i.hemi[m]=V,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==f||U.pointLength!==_||U.spotLength!==S||U.rectAreaLength!==p||U.hemiLength!==m||U.numDirectionalShadows!==v||U.numPointShadows!==g||U.numSpotShadows!==y||U.numSpotMaps!==L||U.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=S,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,U.directionalLength=f,U.pointLength=_,U.spotLength=S,U.rectAreaLength=p,U.hemiLength=m,U.numDirectionalShadows=v,U.numPointShadows=g,U.numSpotShadows=y,U.numSpotMaps=L,U.numLightProbes=R,i.version=om++)}function l(h,c){let u=0,d=0,f=0,_=0,S=0;const p=c.matrixWorldInverse;for(let m=0,v=h.length;m<v;m++){const g=h[m];if(g.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(g.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(g.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(g.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(g.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(p),d++}else if(g.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:i}}function Ka(n){const e=new lm(n),t=[],i=[];function s(c){h.camera=c,t.length=0,i.length=0}function r(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cm(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ka(n),e.set(s,[o])):r>=a.length?(o=new Ka(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class hm extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class um extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pm(n,e,t){let i=new Bo;const s=new le,r=new le,a=new at,o=new hm({depthPacking:sh}),l=new um,h={},c=t.maxTextureSize,u={[Tn]:Rt,[Rt]:Tn,[ln]:ln},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:dm,fragmentShader:fm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new $t;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ct(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let m=this.type;this.render=function(C,R,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const Q=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Sn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=m!==an&&this.type===an,k=m===an&&this.type!==an;for(let q=0,V=C.length;q<V;q++){const X=C[q],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const pe=W.getFrameExtents();if(s.multiply(pe),r.copy(W.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/pe.x),s.x=r.x*pe.x,W.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/pe.y),s.y=r.y*pe.y,W.mapSize.y=r.y)),W.map===null||F===!0||k===!0){const ue=this.type!==an?{minFilter:zt,magFilter:zt}:{};W.map!==null&&W.map.dispose(),W.map=new Vn(s.x,s.y,ue),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const fe=W.getViewportCount();for(let ue=0;ue<fe;ue++){const Ue=W.getViewport(ue);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),B.viewport(a),W.updateMatrices(X,ue),i=W.getFrustum(),y(R,U,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===an&&v(W,U),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(Q,x,E)};function v(C,R){const U=e.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Vn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,U,d,S,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,U,f,S,null)}function g(C,R,U,Q){let x=null;const E=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)x=E;else if(x=U.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=x.uuid,F=R.uuid;let k=h[B];k===void 0&&(k={},h[B]=k);let q=k[F];q===void 0&&(q=x.clone(),k[F]=q,R.addEventListener("dispose",L)),x=q}if(x.visible=R.visible,x.wireframe=R.wireframe,Q===an?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=n.properties.get(x);B.light=U}return x}function y(C,R,U,Q,x){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===an)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const F=e.update(C),k=C.material;if(Array.isArray(k)){const q=F.groups;for(let V=0,X=q.length;V<X;V++){const W=q[V],pe=k[W.materialIndex];if(pe&&pe.visible){const fe=g(C,pe,Q,x);C.onBeforeShadow(n,C,R,U,F,fe,W),n.renderBufferDirect(U,null,F,fe,C,W),C.onAfterShadow(n,C,R,U,F,fe,W)}}}else if(k.visible){const q=g(C,k,Q,x);C.onBeforeShadow(n,C,R,U,F,q,null),n.renderBufferDirect(U,null,F,q,C,null),C.onAfterShadow(n,C,R,U,F,q,null)}}const B=C.children;for(let F=0,k=B.length;F<k;F++)y(B[F],R,U,Q,x)}function L(C){C.target.removeEventListener("dispose",L);for(const U in h){const Q=h[U],x=C.target.uuid;x in Q&&(Q[x].dispose(),delete Q[x])}}}const mm={[zr]:kr,[Gr]:Xr,[Vr]:qr,[gi]:Wr,[kr]:zr,[Xr]:Gr,[qr]:Vr,[Wr]:gi};function gm(n){function e(){let P=!1;const Me=new at;let Y=null;const ne=new at(0,0,0,0);return{setMask:function(ve){Y!==ve&&!P&&(n.colorMask(ve,ve,ve,ve),Y=ve)},setLocked:function(ve){P=ve},setClear:function(ve,Se,qe,ht,yt){yt===!0&&(ve*=ht,Se*=ht,qe*=ht),Me.set(ve,Se,qe,ht),ne.equals(Me)===!1&&(n.clearColor(ve,Se,qe,ht),ne.copy(Me))},reset:function(){P=!1,Y=null,ne.set(-1,0,0,0)}}}function t(){let P=!1,Me=!1,Y=null,ne=null,ve=null;return{setReversed:function(Se){Me=Se},setTest:function(Se){Se?he(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Se){Y!==Se&&!P&&(n.depthMask(Se),Y=Se)},setFunc:function(Se){if(Me&&(Se=mm[Se]),ne!==Se){switch(Se){case zr:n.depthFunc(n.NEVER);break;case kr:n.depthFunc(n.ALWAYS);break;case Gr:n.depthFunc(n.LESS);break;case gi:n.depthFunc(n.LEQUAL);break;case Vr:n.depthFunc(n.EQUAL);break;case Wr:n.depthFunc(n.GEQUAL);break;case Xr:n.depthFunc(n.GREATER);break;case qr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=Se}},setLocked:function(Se){P=Se},setClear:function(Se){ve!==Se&&(n.clearDepth(Se),ve=Se)},reset:function(){P=!1,Y=null,ne=null,ve=null}}}function i(){let P=!1,Me=null,Y=null,ne=null,ve=null,Se=null,qe=null,ht=null,yt=null;return{setTest:function(Ye){P||(Ye?he(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(Ye){Me!==Ye&&!P&&(n.stencilMask(Ye),Me=Ye)},setFunc:function(Ye,Et,en){(Y!==Ye||ne!==Et||ve!==en)&&(n.stencilFunc(Ye,Et,en),Y=Ye,ne=Et,ve=en)},setOp:function(Ye,Et,en){(Se!==Ye||qe!==Et||ht!==en)&&(n.stencilOp(Ye,Et,en),Se=Ye,qe=Et,ht=en)},setLocked:function(Ye){P=Ye},setClear:function(Ye){yt!==Ye&&(n.clearStencil(Ye),yt=Ye)},reset:function(){P=!1,Me=null,Y=null,ne=null,ve=null,Se=null,qe=null,ht=null,yt=null}}}const s=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap;let h={},c={},u=new WeakMap,d=[],f=null,_=!1,S=null,p=null,m=null,v=null,g=null,y=null,L=null,C=new Ge(0,0,0),R=0,U=!1,Q=null,x=null,E=null,B=null,F=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=V>=2);let W=null,pe={};const fe=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Ue=new at().fromArray(fe),Ie=new at().fromArray(ue);function H(P,Me,Y,ne){const ve=new Uint8Array(4),Se=n.createTexture();n.bindTexture(P,Se),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<Y;qe++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Me+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Se}const se={};se[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),he(n.DEPTH_TEST),r.setFunc(gi),ee(!1),j(ia),he(n.CULL_FACE),A(Sn);function he(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function ie(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function _e(P,Me){return c[P]!==Me?(n.bindFramebuffer(P,Me),c[P]=Me,P===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=Me),P===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function Te(P,Me){let Y=d,ne=!1;if(P){Y=u.get(Me),Y===void 0&&(Y=[],u.set(Me,Y));const ve=P.textures;if(Y.length!==ve.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,qe=ve.length;Se<qe;Se++)Y[Se]=n.COLOR_ATTACHMENT0+Se;Y.length=ve.length,ne=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ne=!0);ne&&n.drawBuffers(Y)}function be(P){return f!==P?(n.useProgram(P),f=P,!0):!1}const Le={[On]:n.FUNC_ADD,[Pc]:n.FUNC_SUBTRACT,[Dc]:n.FUNC_REVERSE_SUBTRACT};Le[Ic]=n.MIN,Le[Uc]=n.MAX;const $={[Nc]:n.ZERO,[Fc]:n.ONE,[Oc]:n.SRC_COLOR,[Br]:n.SRC_ALPHA,[Vc]:n.SRC_ALPHA_SATURATE,[kc]:n.DST_COLOR,[Hc]:n.DST_ALPHA,[Bc]:n.ONE_MINUS_SRC_COLOR,[Hr]:n.ONE_MINUS_SRC_ALPHA,[Gc]:n.ONE_MINUS_DST_COLOR,[zc]:n.ONE_MINUS_DST_ALPHA,[Wc]:n.CONSTANT_COLOR,[Xc]:n.ONE_MINUS_CONSTANT_COLOR,[qc]:n.CONSTANT_ALPHA,[Yc]:n.ONE_MINUS_CONSTANT_ALPHA};function A(P,Me,Y,ne,ve,Se,qe,ht,yt,Ye){if(P===Sn){_===!0&&(ie(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),P!==Lc){if(P!==S||Ye!==U){if((p!==On||g!==On)&&(n.blendEquation(n.FUNC_ADD),p=On,g=On),Ye)switch(P){case fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sa:n.blendFunc(n.ONE,n.ONE);break;case ra:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ra:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}m=null,v=null,y=null,L=null,C.set(0,0,0),R=0,S=P,U=Ye}return}ve=ve||Me,Se=Se||Y,qe=qe||ne,(Me!==p||ve!==g)&&(n.blendEquationSeparate(Le[Me],Le[ve]),p=Me,g=ve),(Y!==m||ne!==v||Se!==y||qe!==L)&&(n.blendFuncSeparate($[Y],$[ne],$[Se],$[qe]),m=Y,v=ne,y=Se,L=qe),(ht.equals(C)===!1||yt!==R)&&(n.blendColor(ht.r,ht.g,ht.b,yt),C.copy(ht),R=yt),S=P,U=!1}function J(P,Me){P.side===ln?ie(n.CULL_FACE):he(n.CULL_FACE);let Y=P.side===Rt;Me&&(Y=!Y),ee(Y),P.blending===fi&&P.transparent===!1?A(Sn):A(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const ne=P.stencilWrite;a.setTest(ne),ne&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),de(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(P){Q!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),Q=P)}function j(P){P!==Rc?(he(n.CULL_FACE),P!==x&&(P===ia?n.cullFace(n.BACK):P===Cc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),x=P}function re(P){P!==E&&(q&&n.lineWidth(P),E=P)}function de(P,Me,Y){P?(he(n.POLYGON_OFFSET_FILL),(B!==Me||F!==Y)&&(n.polygonOffset(Me,Y),B=Me,F=Y)):ie(n.POLYGON_OFFSET_FILL)}function ce(P){P?he(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function w(P){P===void 0&&(P=n.TEXTURE0+k-1),W!==P&&(n.activeTexture(P),W=P)}function M(P,Me,Y){Y===void 0&&(W===null?Y=n.TEXTURE0+k-1:Y=W);let ne=pe[Y];ne===void 0&&(ne={type:void 0,texture:void 0},pe[Y]=ne),(ne.type!==P||ne.texture!==Me)&&(W!==Y&&(n.activeTexture(Y),W=Y),n.bindTexture(P,Me||se[P]),ne.type=P,ne.texture=Me)}function O(){const P=pe[W];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(P){Ue.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ue.copy(P))}function Ae(P){Ie.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ie.copy(P))}function Xe(P,Me){let Y=l.get(Me);Y===void 0&&(Y=new WeakMap,l.set(Me,Y));let ne=Y.get(P);ne===void 0&&(ne=n.getUniformBlockIndex(Me,P.name),Y.set(P,ne))}function He(P,Me){const ne=l.get(Me).get(P);o.get(Me)!==ne&&(n.uniformBlockBinding(Me,ne,P.__bindingPointIndex),o.set(Me,ne))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},W=null,pe={},c={},u=new WeakMap,d=[],f=null,_=!1,S=null,p=null,m=null,v=null,g=null,y=null,L=null,C=new Ge(0,0,0),R=0,U=!1,Q=null,x=null,E=null,B=null,F=null,Ue.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:he,disable:ie,bindFramebuffer:_e,drawBuffers:Te,useProgram:be,setBlending:A,setMaterial:J,setFlipSided:ee,setCullFace:j,setLineWidth:re,setPolygonOffset:de,setScissorTest:ce,activeTexture:w,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:Ee,texImage3D:Oe,updateUBOMapping:Xe,uniformBlockBinding:He,texStorage2D:We,texStorage3D:oe,texSubImage2D:Z,texSubImage3D:Re,compressedTexSubImage2D:me,compressedTexSubImage3D:ye,scissor:Be,viewport:Ae,reset:tt}}function Za(n,e,t,i){const s=_m(i);switch(t){case Ul:return n*e;case Fl:return n*e;case Ol:return n*e*2;case Bl:return n*e/s.components*s.byteLength;case Io:return n*e/s.components*s.byteLength;case Hl:return n*e*2/s.components*s.byteLength;case Uo:return n*e*2/s.components*s.byteLength;case Nl:return n*e*3/s.components*s.byteLength;case Yt:return n*e*4/s.components*s.byteLength;case No:return n*e*4/s.components*s.byteLength;case bs:case Rs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cs:case Ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jr:case eo:return Math.max(n,16)*Math.max(e,8)/4;case jr:case Qr:return Math.max(n,8)*Math.max(e,8)/2;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ao:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case co:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ho:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case po:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case go:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _o:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ps:case xo:case Mo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zl:case So:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yo:case Eo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _m(n){switch(n){case un:case Pl:return{byteLength:1,components:1};case Gi:case Dl:case qi:return{byteLength:2,components:1};case Po:case Do:return{byteLength:2,components:4};case Gn:case Lo:case cn:return{byteLength:4,components:1};case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function vm(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return f?new OffscreenCanvas(w,M):zs("canvas")}function S(w,M,O){let K=1;const te=ce(w);if((te.width>O||te.height>O)&&(K=O/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(K*te.width),Re=Math.floor(K*te.height);u===void 0&&(u=_(Z,Re));const me=M?_(Z,Re):u;return me.width=Z,me.height=Re,me.getContext("2d").drawImage(w,0,0,Z,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Re+")."),me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==zt&&w.minFilter!==Xt}function m(w){n.generateMipmap(w)}function v(w,M,O,K,te=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=M;if(M===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),M===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),M===n.RGBA){const Re=te?Fs:Je.getTransfer(K);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=Re===it?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(w,M){let O;return w?M===null||M===Gn||M===xi?O=n.DEPTH24_STENCIL8:M===cn?O=n.DEPTH32F_STENCIL8:M===Gi&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gn||M===xi?O=n.DEPTH_COMPONENT24:M===cn?O=n.DEPTH_COMPONENT32F:M===Gi&&(O=n.DEPTH_COMPONENT16),O}function y(w,M){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==zt&&w.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function L(w){const M=w.target;M.removeEventListener("dispose",L),R(M),M.isVideoTexture&&c.delete(M)}function C(w){const M=w.target;M.removeEventListener("dispose",C),Q(M)}function R(w){const M=i.get(w);if(M.__webglInit===void 0)return;const O=w.source,K=d.get(O);if(K){const te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&U(w),Object.keys(K).length===0&&d.delete(O)}i.remove(w)}function U(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const O=w.source,K=d.get(O);delete K[M.__cacheKey],a.memory.textures--}function Q(w){const M=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[K][te]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,te=O.length;K<te;K++){const Z=i.get(O[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(O[K])}i.remove(w)}let x=0;function E(){x=0}function B(){const w=x;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),x+=1,w}function F(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function k(w,M){const O=i.get(w);if(w.isVideoTexture&&re(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(O,w,M);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}function q(w,M){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Ie(O,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)}function V(w,M){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Ie(O,w,M);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)}function X(w,M){const O=i.get(w);if(w.version>0&&O.__version!==w.version){H(O,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)}const W={[Kr]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[Zr]:n.MIRRORED_REPEAT},pe={[zt]:n.NEAREST,[nh]:n.NEAREST_MIPMAP_NEAREST,[Ji]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[er]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},fe={[oh]:n.NEVER,[dh]:n.ALWAYS,[ah]:n.LESS,[Gl]:n.LEQUAL,[lh]:n.EQUAL,[uh]:n.GEQUAL,[ch]:n.GREATER,[hh]:n.NOTEQUAL};function ue(w,M){if(M.type===cn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xt||M.magFilter===er||M.magFilter===Ji||M.magFilter===zn||M.minFilter===Xt||M.minFilter===er||M.minFilter===Ji||M.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,W[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,W[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,W[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,pe[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zt||M.minFilter!==Ji&&M.minFilter!==zn||M.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(w,M){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",L));const K=M.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const Z=F(M);if(Z!==w.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[Z].usedTimes++;const Re=te[w.__cacheKey];Re!==void 0&&(te[w.__cacheKey].usedTimes--,Re.usedTimes===0&&U(M)),w.__cacheKey=Z,w.__webglTexture=te[Z].texture}return O}function Ie(w,M,O){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);const te=Ue(w,M),Z=M.source;t.bindTexture(K,w.__webglTexture,n.TEXTURE0+O);const Re=i.get(Z);if(Z.version!==Re.__version||te===!0){t.activeTexture(n.TEXTURE0+O);const me=Je.getPrimaries(Je.workingColorSpace),ye=M.colorSpace===Mn?null:Je.getPrimaries(M.colorSpace),We=M.colorSpace===Mn||me===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let oe=S(M.image,!1,s.maxTextureSize);oe=de(M,oe);const Ee=r.convert(M.format,M.colorSpace),Oe=r.convert(M.type);let Be=v(M.internalFormat,Ee,Oe,M.colorSpace,M.isVideoTexture);ue(K,M);let Ae;const Xe=M.mipmaps,He=M.isVideoTexture!==!0,tt=Re.__version===void 0||te===!0,P=Z.dataReady,Me=y(M,oe);if(M.isDepthTexture)Be=g(M.format===Mi,M.type),tt&&(He?t.texStorage2D(n.TEXTURE_2D,1,Be,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,Ee,Oe,null));else if(M.isDataTexture)if(Xe.length>0){He&&tt&&t.texStorage2D(n.TEXTURE_2D,Me,Be,Xe[0].width,Xe[0].height);for(let Y=0,ne=Xe.length;Y<ne;Y++)Ae=Xe[Y],He?P&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,Ee,Oe,Ae.data):t.texImage2D(n.TEXTURE_2D,Y,Be,Ae.width,Ae.height,0,Ee,Oe,Ae.data);M.generateMipmaps=!1}else He?(tt&&t.texStorage2D(n.TEXTURE_2D,Me,Be,oe.width,oe.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,Ee,Oe,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,Ee,Oe,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Be,Xe[0].width,Xe[0].height,oe.depth);for(let Y=0,ne=Xe.length;Y<ne;Y++)if(Ae=Xe[Y],M.format!==Yt)if(Ee!==null)if(He){if(P)if(M.layerUpdates.size>0){const ve=Za(Ae.width,Ae.height,M.format,M.type);for(const Se of M.layerUpdates){const qe=Ae.data.subarray(Se*ve/Ae.data.BYTES_PER_ELEMENT,(Se+1)*ve/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Se,Ae.width,Ae.height,1,Ee,qe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ae.width,Ae.height,oe.depth,Ee,Ae.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Be,Ae.width,Ae.height,oe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ae.width,Ae.height,oe.depth,Ee,Oe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Be,Ae.width,Ae.height,oe.depth,0,Ee,Oe,Ae.data)}else{He&&tt&&t.texStorage2D(n.TEXTURE_2D,Me,Be,Xe[0].width,Xe[0].height);for(let Y=0,ne=Xe.length;Y<ne;Y++)Ae=Xe[Y],M.format!==Yt?Ee!==null?He?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,Ee,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?P&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,Ee,Oe,Ae.data):t.texImage2D(n.TEXTURE_2D,Y,Be,Ae.width,Ae.height,0,Ee,Oe,Ae.data)}else if(M.isDataArrayTexture)if(He){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Be,oe.width,oe.height,oe.depth),P)if(M.layerUpdates.size>0){const Y=Za(oe.width,oe.height,M.format,M.type);for(const ne of M.layerUpdates){const ve=oe.data.subarray(ne*Y/oe.data.BYTES_PER_ELEMENT,(ne+1)*Y/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,Ee,Oe,ve)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Oe,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,oe.width,oe.height,oe.depth,0,Ee,Oe,oe.data);else if(M.isData3DTexture)He?(tt&&t.texStorage3D(n.TEXTURE_3D,Me,Be,oe.width,oe.height,oe.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Oe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,oe.width,oe.height,oe.depth,0,Ee,Oe,oe.data);else if(M.isFramebufferTexture){if(tt)if(He)t.texStorage2D(n.TEXTURE_2D,Me,Be,oe.width,oe.height);else{let Y=oe.width,ne=oe.height;for(let ve=0;ve<Me;ve++)t.texImage2D(n.TEXTURE_2D,ve,Be,Y,ne,0,Ee,Oe,null),Y>>=1,ne>>=1}}else if(Xe.length>0){if(He&&tt){const Y=ce(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Me,Be,Y.width,Y.height)}for(let Y=0,ne=Xe.length;Y<ne;Y++)Ae=Xe[Y],He?P&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ee,Oe,Ae):t.texImage2D(n.TEXTURE_2D,Y,Be,Ee,Oe,Ae);M.generateMipmaps=!1}else if(He){if(tt){const Y=ce(oe);t.texStorage2D(n.TEXTURE_2D,Me,Be,Y.width,Y.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Oe,oe)}else t.texImage2D(n.TEXTURE_2D,0,Be,Ee,Oe,oe);p(M)&&m(K),Re.__version=Z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function H(w,M,O){if(M.image.length!==6)return;const K=Ue(w,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const Z=i.get(te);if(te.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const Re=Je.getPrimaries(Je.workingColorSpace),me=M.colorSpace===Mn?null:Je.getPrimaries(M.colorSpace),ye=M.colorSpace===Mn||Re===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let ne=0;ne<6;ne++)!We&&!oe?Ee[ne]=S(M.image[ne],!0,s.maxCubemapSize):Ee[ne]=oe?M.image[ne].image:M.image[ne],Ee[ne]=de(M,Ee[ne]);const Oe=Ee[0],Be=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),Xe=v(M.internalFormat,Be,Ae,M.colorSpace),He=M.isVideoTexture!==!0,tt=Z.__version===void 0||K===!0,P=te.dataReady;let Me=y(M,Oe);ue(n.TEXTURE_CUBE_MAP,M);let Y;if(We){He&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Xe,Oe.width,Oe.height);for(let ne=0;ne<6;ne++){Y=Ee[ne].mipmaps;for(let ve=0;ve<Y.length;ve++){const Se=Y[ve];M.format!==Yt?Be!==null?He?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Se.width,Se.height,Be,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,Xe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Se.width,Se.height,Be,Ae,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,Xe,Se.width,Se.height,0,Be,Ae,Se.data)}}}else{if(Y=M.mipmaps,He&&tt){Y.length>0&&Me++;const ne=ce(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Xe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){He?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee[ne].width,Ee[ne].height,Be,Ae,Ee[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Xe,Ee[ne].width,Ee[ne].height,0,Be,Ae,Ee[ne].data);for(let ve=0;ve<Y.length;ve++){const qe=Y[ve].image[ne].image;He?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,qe.width,qe.height,Be,Ae,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,Xe,qe.width,qe.height,0,Be,Ae,qe.data)}}else{He?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Be,Ae,Ee[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Xe,Be,Ae,Ee[ne]);for(let ve=0;ve<Y.length;ve++){const Se=Y[ve];He?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Be,Ae,Se.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,Xe,Be,Ae,Se.image[ne])}}}p(M)&&m(n.TEXTURE_CUBE_MAP),Z.__version=te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function se(w,M,O,K,te,Z){const Re=r.convert(O.format,O.colorSpace),me=r.convert(O.type),ye=v(O.internalFormat,Re,me,O.colorSpace);if(!i.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>Z),Ee=Math.max(1,M.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,ye,oe,Ee,M.depth,0,Re,me,null):t.texImage2D(te,Z,ye,oe,Ee,0,Re,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),j(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,i.get(O).__webglTexture,0,ee(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,i.get(O).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(w,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){const K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,Z=g(M.stencilBuffer,te),Re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=ee(M);j(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,Z,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,w)}else{const K=M.textures;for(let te=0;te<K.length;te++){const Z=K[te],Re=r.convert(Z.format,Z.colorSpace),me=r.convert(Z.type),ye=v(Z.internalFormat,Re,me,Z.colorSpace),We=ee(M);O&&j(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,ye,M.width,M.height):j(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,ye,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ye,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const K=i.get(M.depthTexture).__webglTexture,te=ee(M);if(M.depthTexture.format===pi)j(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(M.depthTexture.format===Mi)j(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function _e(w){const M=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ie(M.__webglFramebuffer,w)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),he(M.__webglDepthbuffer[K],w,!1);else{const te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),he(M.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(w,M,O){const K=i.get(w);M!==void 0&&se(K.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&_e(w)}function be(w){const M=w.texture,O=i.get(w),K=i.get(M);w.addEventListener("dispose",C);const te=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,a.memory.textures++),Z){O.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[me]=[];for(let ye=0;ye<M.mipmaps.length;ye++)O.__webglFramebuffer[me][ye]=n.createFramebuffer()}else O.__webglFramebuffer[me]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)O.__webglFramebuffer[me]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Re)for(let me=0,ye=te.length;me<ye;me++){const We=i.get(te[me]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&j(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let me=0;me<te.length;me++){const ye=te[me];O.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[me]);const We=r.convert(ye.format,ye.colorSpace),oe=r.convert(ye.type),Ee=v(ye.internalFormat,We,oe,ye.colorSpace,w.isXRRenderTarget===!0),Oe=ee(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,O.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),he(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ue(n.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)se(O.__webglFramebuffer[me][ye],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ye);else se(O.__webglFramebuffer[me],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let me=0,ye=te.length;me<ye;me++){const We=te[me],oe=i.get(We);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ue(n.TEXTURE_2D,We),se(O.__webglFramebuffer,w,We,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),p(We)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),ue(me,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)se(O.__webglFramebuffer[ye],w,M,n.COLOR_ATTACHMENT0,me,ye);else se(O.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,me,0);p(M)&&m(me),t.unbindTexture()}w.depthBuffer&&_e(w)}function Le(w){const M=w.textures;for(let O=0,K=M.length;O<K;O++){const te=M[O];if(p(te)){const Z=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(te).__webglTexture;t.bindTexture(Z,Re),m(Z),t.unbindTexture()}}}const $=[],A=[];function J(w){if(w.samples>0){if(j(w)===!1){const M=w.textures,O=w.width,K=w.height;let te=n.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(w),me=M.length>1;if(me)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const We=i.get(M[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,te,n.NEAREST),l===!0&&($.length=0,A.length=0,$.push(n.COLOR_ATTACHMENT0+ye),w.depthBuffer&&w.resolveDepthBuffer===!1&&($.push(Z),A.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const We=i.get(M[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ee(w){return Math.min(s.maxSamples,w.samples)}function j(w){const M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function re(w){const M=a.render.frame;c.get(w)!==M&&(c.set(w,M),w.update())}function de(w,M){const O=w.colorSpace,K=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==wn&&O!==Mn&&(Je.getTransfer(O)===it?(K!==Yt||te!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function ce(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=E,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=Te,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=se,this.useMultisampledRTT=j}function xm(n,e){function t(i,s=Mn){let r;const a=Je.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===Po)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Do)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Il)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pl)return n.BYTE;if(i===Dl)return n.SHORT;if(i===Gi)return n.UNSIGNED_SHORT;if(i===Lo)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===qi)return n.HALF_FLOAT;if(i===Ul)return n.ALPHA;if(i===Nl)return n.RGB;if(i===Yt)return n.RGBA;if(i===Fl)return n.LUMINANCE;if(i===Ol)return n.LUMINANCE_ALPHA;if(i===pi)return n.DEPTH_COMPONENT;if(i===Mi)return n.DEPTH_STENCIL;if(i===Bl)return n.RED;if(i===Io)return n.RED_INTEGER;if(i===Hl)return n.RG;if(i===Uo)return n.RG_INTEGER;if(i===No)return n.RGBA_INTEGER;if(i===bs||i===Rs||i===Cs||i===Ls)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jr||i===Jr||i===Qr||i===eo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===to||i===no||i===io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===to||i===no)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===so||i===ro||i===oo||i===ao||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===so)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ro)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ao)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===co)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_o)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ps||i===xo||i===Mo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ps)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zl||i===So||i===yo||i===Eo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ps)return r.COMPRESSED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Mm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fi extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sm={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,i),m=this._getHandJoint(h,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,_=.005;h.inputState.pinching&&d>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Em=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ct,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new An({vertexShader:ym,fragmentShader:Em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Am extends qn{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,_=null;const S=new Tm,p=t.getContextAttributes();let m=null,v=null;const g=[],y=[],L=new le;let C=null;const R=new Ht;R.layers.enable(1),R.viewport=new at;const U=new Ht;U.layers.enable(2),U.viewport=new at;const Q=[R,U],x=new Mm;x.layers.enable(1),x.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let se=g[H];return se===void 0&&(se=new Cr,g[H]=se),se.getTargetRaySpace()},this.getControllerGrip=function(H){let se=g[H];return se===void 0&&(se=new Cr,g[H]=se),se.getGripSpace()},this.getHand=function(H){let se=g[H];return se===void 0&&(se=new Cr,g[H]=se),se.getHandSpace()};function F(H){const se=y.indexOf(H.inputSource);if(se===-1)return;const he=g[se];he!==void 0&&(he.update(H.inputSource,H.frame,h||a),he.dispatchEvent({type:H.type,data:H.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",q);for(let H=0;H<g.length;H++){const se=y[H];se!==null&&(y[H]=null,g[H].disconnect(se))}E=null,B=null,S.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,v=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(H){h=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Vn(f.framebufferWidth,f.framebufferHeight,{format:Yt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,he=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?Mi:pi,he=p.stencil?xi:Gn);const _e={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Vn(d.textureWidth,d.textureHeight,{format:Yt,type:un,depthTexture:new nc(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(H){for(let se=0;se<H.removed.length;se++){const he=H.removed[se],ie=y.indexOf(he);ie>=0&&(y[ie]=null,g[ie].disconnect(he))}for(let se=0;se<H.added.length;se++){const he=H.added[se];let ie=y.indexOf(he);if(ie===-1){for(let Te=0;Te<g.length;Te++)if(Te>=y.length){y.push(he),ie=Te;break}else if(y[Te]===null){y[Te]=he,ie=Te;break}if(ie===-1)break}const _e=g[ie];_e&&_e.connect(he)}}const V=new D,X=new D;function W(H,se,he){V.setFromMatrixPosition(se.matrixWorld),X.setFromMatrixPosition(he.matrixWorld);const ie=V.distanceTo(X),_e=se.projectionMatrix.elements,Te=he.projectionMatrix.elements,be=_e[14]/(_e[10]-1),Le=_e[14]/(_e[10]+1),$=(_e[9]+1)/_e[5],A=(_e[9]-1)/_e[5],J=(_e[8]-1)/_e[0],ee=(Te[8]+1)/Te[0],j=be*J,re=be*ee,de=ie/(-J+ee),ce=de*-J;if(se.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ce),H.translateZ(de),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),_e[10]===-1)H.projectionMatrix.copy(se.projectionMatrix),H.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const w=be+de,M=Le+de,O=j-ce,K=re+(ie-ce),te=$*Le/M*w,Z=A*Le/M*w;H.projectionMatrix.makePerspective(O,K,te,Z,w,M),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function pe(H,se){se===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(se.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let se=H.near,he=H.far;S.texture!==null&&(S.depthNear>0&&(se=S.depthNear),S.depthFar>0&&(he=S.depthFar)),x.near=U.near=R.near=se,x.far=U.far=R.far=he,(E!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,B=x.far);const ie=H.parent,_e=x.cameras;pe(x,ie);for(let Te=0;Te<_e.length;Te++)pe(_e[Te],ie);_e.length===2?W(x,R,U):x.projectionMatrix.copy(R.projectionMatrix),fe(H,x,ie)};function fe(H,se,he){he===null?H.matrix.copy(se.matrixWorld):(H.matrix.copy(he.matrixWorld),H.matrix.invert(),H.matrix.multiply(se.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(se.projectionMatrix),H.projectionMatrixInverse.copy(se.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=To*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let ue=null;function Ue(H,se){if(c=se.getViewerPose(h||a),_=se,c!==null){const he=c.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ie=!1;he.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let Te=0;Te<he.length;Te++){const be=he[Te];let Le=null;if(f!==null)Le=f.getViewport(be);else{const A=u.getViewSubImage(d,be);Le=A.viewport,Te===0&&(e.setRenderTargetTextures(v,A.colorTexture,d.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(v))}let $=Q[Te];$===void 0&&($=new Ht,$.layers.enable(Te),$.viewport=new at,Q[Te]=$),$.matrix.fromArray(be.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(be.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Le.x,Le.y,Le.width,Le.height),Te===0&&(x.matrix.copy($.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push($)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const Te=u.getDepthInformation(he[0]);Te&&Te.isValid&&Te.texture&&S.init(e,Te,s.renderState)}}for(let he=0;he<g.length;he++){const ie=y[he],_e=g[he];ie!==null&&_e!==void 0&&_e.update(ie,se,h||a)}ue&&ue(H,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}const Ie=new ec;Ie.setAnimationLoop(Ue),this.setAnimationLoop=function(H){ue=H},this.dispose=function(){}}}const In=new Jt,wm=new st;function bm(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,jl(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,g,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),S(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,g):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Rt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Rt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),g=v.envMap,y=v.envMapRotation;g&&(p.envMap.value=g,In.copy(y),In.x*=-1,In.y*=-1,In.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),p.envMapRotation.value.setFromMatrix4(wm.makeRotationFromEuler(In)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,g){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=g*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rm(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function h(v,g){let y=s[v.id];y===void 0&&(_(v),y=c(v),s[v.id]=y,v.addEventListener("dispose",p));const L=g.program;i.updateUBOMapping(v,L);const C=e.render.frame;r[v.id]!==C&&(d(v),r[v.id]=C)}function c(v){const g=u();v.__bindingPointIndex=g;const y=n.createBuffer(),L=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=s[v.id],y=v.uniforms,L=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let C=0,R=y.length;C<R;C++){const U=Array.isArray(y[C])?y[C]:[y[C]];for(let Q=0,x=U.length;Q<x;Q++){const E=U[Q];if(f(E,C,Q,L)===!0){const B=E.__offset,F=Array.isArray(E.value)?E.value:[E.value];let k=0;for(let q=0;q<F.length;q++){const V=F[q],X=S(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,B+k,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,g,y,L){const C=v.value,R=g+"_"+y;if(L[R]===void 0)return typeof C=="number"||typeof C=="boolean"?L[R]=C:L[R]=C.clone(),!0;{const U=L[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return L[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(v){const g=v.uniforms;let y=0;const L=16;for(let R=0,U=g.length;R<U;R++){const Q=Array.isArray(g[R])?g[R]:[g[R]];for(let x=0,E=Q.length;x<E;x++){const B=Q[x],F=Array.isArray(B.value)?B.value:[B.value];for(let k=0,q=F.length;k<q;k++){const V=F[k],X=S(V),W=y%L,pe=W%X.boundary,fe=W+pe;y+=pe,fe!==0&&L-fe<X.storage&&(y+=L-fe),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=X.storage}}}const C=y%L;return C>0&&(y+=L-C),v.__size=y,v.__cache={},this}function S(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const y=a.indexOf(g.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function m(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:h,dispose:m}}class Cm{constructor(e={}){const{canvas:t=mh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),_=new Int32Array(4);let S=null,p=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=yn,this.toneMappingExposure=1;const g=this;let y=!1,L=0,C=0,R=null,U=-1,Q=null;const x=new at,E=new at;let B=null;const F=new Ge(0);let k=0,q=t.width,V=t.height,X=1,W=null,pe=null;const fe=new at(0,0,q,V),ue=new at(0,0,q,V);let Ue=!1;const Ie=new Bo;let H=!1,se=!1;const he=new st,ie=new st,_e=new D,Te=new at,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function $(){return R===null?X:1}let A=i;function J(T,I){return t.getContext(T,I)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Se,!1),A===null){const I="webgl2";if(A=J(I,T),A===null)throw J(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ee,j,re,de,ce,w,M,O,K,te,Z,Re,me,ye,We,oe,Ee,Oe,Be,Ae,Xe,He,tt,P;function Me(){ee=new Uf(A),ee.init(),He=new xm(A,ee),j=new Rf(A,ee,e,He),re=new gm(A),j.reverseDepthBuffer&&re.buffers.depth.setReversed(!0),de=new Of(A),ce=new tm,w=new vm(A,ee,re,ce,j,He,de),M=new Lf(g),O=new If(g),K=new Vh(A),tt=new wf(A,K),te=new Nf(A,K,de,tt),Z=new Hf(A,te,K,de),Be=new Bf(A,j,w),oe=new Cf(ce),Re=new em(g,M,O,ee,j,tt,oe),me=new bm(g,ce),ye=new im,We=new cm(ee),Oe=new Af(g,M,O,re,Z,d,l),Ee=new pm(g,Z,j),P=new Rm(A,de,j,re),Ae=new bf(A,ee,de),Xe=new Ff(A,ee,de),de.programs=Re.programs,g.capabilities=j,g.extensions=ee,g.properties=ce,g.renderLists=ye,g.shadowMap=Ee,g.state=re,g.info=de}Me();const Y=new Am(g,A);this.xr=Y,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(q,V,!1))},this.getSize=function(T){return T.set(q,V)},this.setSize=function(T,I,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,V=I,t.width=Math.floor(T*X),t.height=Math.floor(I*X),z===!0&&(t.style.width=T+"px",t.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(q*X,V*X).floor()},this.setDrawingBufferSize=function(T,I,z){q=T,V=I,X=z,t.width=Math.floor(T*z),t.height=Math.floor(I*z),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,I,z,G){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,I,z,G),re.viewport(x.copy(fe).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,I,z,G){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,I,z,G),re.scissor(E.copy(ue).multiplyScalar(X).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(T){re.setScissorTest(Ue=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(T=!0,I=!0,z=!0){let G=0;if(T){let N=!1;if(R!==null){const ae=R.texture.format;N=ae===No||ae===Uo||ae===Io}if(N){const ae=R.texture.type,xe=ae===un||ae===Gn||ae===Gi||ae===xi||ae===Po||ae===Do,we=Oe.getClearColor(),Ce=Oe.getClearAlpha(),Ne=we.r,Fe=we.g,Pe=we.b;xe?(f[0]=Ne,f[1]=Fe,f[2]=Pe,f[3]=Ce,A.clearBufferuiv(A.COLOR,0,f)):(_[0]=Ne,_[1]=Fe,_[2]=Pe,_[3]=Ce,A.clearBufferiv(A.COLOR,0,_))}else G|=A.COLOR_BUFFER_BIT}I&&(G|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ye.dispose(),We.dispose(),ce.dispose(),M.dispose(),O.dispose(),Z.dispose(),tt.dispose(),P.dispose(),Re.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Xo),Y.removeEventListener("sessionend",qo),bn.stop()};function ne(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=de.autoReset,I=Ee.enabled,z=Ee.autoUpdate,G=Ee.needsUpdate,N=Ee.type;Me(),de.autoReset=T,Ee.enabled=I,Ee.autoUpdate=z,Ee.needsUpdate=G,Ee.type=N}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const I=T.target;I.removeEventListener("dispose",qe),ht(I)}function ht(T){yt(T),ce.remove(T)}function yt(T){const I=ce.get(T).programs;I!==void 0&&(I.forEach(function(z){Re.releaseProgram(z)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,z,G,N,ae){I===null&&(I=be);const xe=N.isMesh&&N.matrixWorld.determinant()<0,we=vc(T,I,z,G,N);re.setMaterial(G,xe);let Ce=z.index,Ne=1;if(G.wireframe===!0){if(Ce=te.getWireframeAttribute(z),Ce===void 0)return;Ne=2}const Fe=z.drawRange,Pe=z.attributes.position;let Qe=Fe.start*Ne,nt=(Fe.start+Fe.count)*Ne;ae!==null&&(Qe=Math.max(Qe,ae.start*Ne),nt=Math.min(nt,(ae.start+ae.count)*Ne)),Ce!==null?(Qe=Math.max(Qe,0),nt=Math.min(nt,Ce.count)):Pe!=null&&(Qe=Math.max(Qe,0),nt=Math.min(nt,Pe.count));const ot=nt-Qe;if(ot<0||ot===1/0)return;tt.setup(N,G,we,z,Ce);let Pt,Ke=Ae;if(Ce!==null&&(Pt=K.get(Ce),Ke=Xe,Ke.setIndex(Pt)),N.isMesh)G.wireframe===!0?(re.setLineWidth(G.wireframeLinewidth*$()),Ke.setMode(A.LINES)):Ke.setMode(A.TRIANGLES);else if(N.isLine){let De=G.linewidth;De===void 0&&(De=1),re.setLineWidth(De*$()),N.isLineSegments?Ke.setMode(A.LINES):N.isLineLoop?Ke.setMode(A.LINE_LOOP):Ke.setMode(A.LINE_STRIP)}else N.isPoints?Ke.setMode(A.POINTS):N.isSprite&&Ke.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const De=N._multiDrawStarts,gt=N._multiDrawCounts,Ze=N._multiDrawCount,kt=Ce?K.get(Ce).bytesPerElement:1,Yn=ce.get(G).currentProgram.getUniforms();for(let Dt=0;Dt<Ze;Dt++)Yn.setValue(A,"_gl_DrawID",Dt),Ke.render(De[Dt]/kt,gt[Dt])}else if(N.isInstancedMesh)Ke.renderInstances(Qe,ot,N.count);else if(z.isInstancedBufferGeometry){const De=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,De);Ke.renderInstances(Qe,ot,gt)}else Ke.render(Qe,ot)};function Ye(T,I,z){T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=Rt,T.needsUpdate=!0,Zi(T,I,z),T.side=Tn,T.needsUpdate=!0,Zi(T,I,z),T.side=ln):Zi(T,I,z)}this.compile=function(T,I,z=null){z===null&&(z=T),p=We.get(z),p.init(I),v.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==z&&T.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){const we=ae[xe];Ye(we,z,N),G.add(we)}else Ye(ae,z,N),G.add(ae)}),v.pop(),p=null,G},this.compileAsync=function(T,I,z=null){const G=this.compile(T,I,z);return new Promise(N=>{function ae(){if(G.forEach(function(xe){ce.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){N(T);return}setTimeout(ae,10)}ee.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Et=null;function en(T){Et&&Et(T)}function Xo(){bn.stop()}function qo(){bn.start()}const bn=new ec;bn.setAnimationLoop(en),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(T){Et=T,Y.setAnimationLoop(T),T===null?bn.stop():bn.start()},Y.addEventListener("sessionstart",Xo),Y.addEventListener("sessionend",qo),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,I,R),p=We.get(T,v.length),p.init(I),v.push(p),ie.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ie.setFromProjectionMatrix(ie),se=this.localClippingEnabled,H=oe.init(this.clippingPlanes,se),S=ye.get(T,m.length),S.init(),m.push(S),Y.enabled===!0&&Y.isPresenting===!0){const ae=g.xr.getDepthSensingMesh();ae!==null&&Ks(ae,I,-1/0,g.sortObjects)}Ks(T,I,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(W,pe),Le=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Le&&Oe.addToRenderList(S,T),this.info.render.frame++,H===!0&&oe.beginShadows();const z=p.state.shadowsArray;Ee.render(z,T,I),H===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=S.opaque,N=S.transmissive;if(p.setupLights(),I.isArrayCamera){const ae=I.cameras;if(N.length>0)for(let xe=0,we=ae.length;xe<we;xe++){const Ce=ae[xe];$o(G,N,T,Ce)}Le&&Oe.render(T);for(let xe=0,we=ae.length;xe<we;xe++){const Ce=ae[xe];Yo(S,T,Ce,Ce.viewport)}}else N.length>0&&$o(G,N,T,I),Le&&Oe.render(T),Yo(S,T,I);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(g,T,I),tt.resetDefaultState(),U=-1,Q=null,v.pop(),v.length>0?(p=v[v.length-1],H===!0&&oe.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?S=m[m.length-1]:S=null};function Ks(T,I,z,G){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){G&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);const xe=Z.update(T),we=T.material;we.visible&&S.push(T,xe,we,z,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){const xe=Z.update(T),we=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Te.copy(xe.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(ie)),Array.isArray(we)){const Ce=xe.groups;for(let Ne=0,Fe=Ce.length;Ne<Fe;Ne++){const Pe=Ce[Ne],Qe=we[Pe.materialIndex];Qe&&Qe.visible&&S.push(T,xe,Qe,z,Te.z,Pe)}}else we.visible&&S.push(T,xe,we,z,Te.z,null)}}const ae=T.children;for(let xe=0,we=ae.length;xe<we;xe++)Ks(ae[xe],I,z,G)}function Yo(T,I,z,G){const N=T.opaque,ae=T.transmissive,xe=T.transparent;p.setupLightsView(z),H===!0&&oe.setGlobalState(g.clippingPlanes,z),G&&re.viewport(x.copy(G)),N.length>0&&Ki(N,I,z),ae.length>0&&Ki(ae,I,z),xe.length>0&&Ki(xe,I,z),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function $o(T,I,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Vn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?qi:un,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=p.state.transmissionRenderTarget[G.id],xe=G.viewport||x;ae.setSize(xe.z,xe.w);const we=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(F),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,.5),g.clear(),Le&&Oe.render(z);const Ce=g.toneMapping;g.toneMapping=yn;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),H===!0&&oe.setGlobalState(g.clippingPlanes,G),Ki(T,z,G),w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Pe=0,Qe=I.length;Pe<Qe;Pe++){const nt=I[Pe],ot=nt.object,Pt=nt.geometry,Ke=nt.material,De=nt.group;if(Ke.side===ln&&ot.layers.test(G.layers)){const gt=Ke.side;Ke.side=Rt,Ke.needsUpdate=!0,Ko(ot,z,G,Pt,Ke,De),Ke.side=gt,Ke.needsUpdate=!0,Fe=!0}}Fe===!0&&(w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae))}g.setRenderTarget(we),g.setClearColor(F,k),Ne!==void 0&&(G.viewport=Ne),g.toneMapping=Ce}function Ki(T,I,z){const G=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ae=T.length;N<ae;N++){const xe=T[N],we=xe.object,Ce=xe.geometry,Ne=G===null?xe.material:G,Fe=xe.group;we.layers.test(z.layers)&&Ko(we,I,z,Ce,Ne,Fe)}}function Ko(T,I,z,G,N,ae){T.onBeforeRender(g,I,z,G,N,ae),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(g,I,z,G,T,ae),N.transparent===!0&&N.side===ln&&N.forceSinglePass===!1?(N.side=Rt,N.needsUpdate=!0,g.renderBufferDirect(z,I,G,N,T,ae),N.side=Tn,N.needsUpdate=!0,g.renderBufferDirect(z,I,G,N,T,ae),N.side=ln):g.renderBufferDirect(z,I,G,N,T,ae),T.onAfterRender(g,I,z,G,N,ae)}function Zi(T,I,z){I.isScene!==!0&&(I=be);const G=ce.get(T),N=p.state.lights,ae=p.state.shadowsArray,xe=N.state.version,we=Re.getParameters(T,N.state,ae,I,z),Ce=Re.getProgramCacheKey(we);let Ne=G.programs;G.environment=T.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(T.isMeshStandardMaterial?O:M).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",qe),Ne=new Map,G.programs=Ne);let Fe=Ne.get(Ce);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===xe)return jo(T,we),Fe}else we.uniforms=Re.getUniforms(T),T.onBeforeCompile(we,g),Fe=Re.acquireProgram(we,Ce),Ne.set(Ce,Fe),G.uniforms=we.uniforms;const Pe=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),jo(T,we),G.needsLights=Mc(T),G.lightsStateVersion=xe,G.needsLights&&(Pe.ambientLightColor.value=N.state.ambient,Pe.lightProbe.value=N.state.probe,Pe.directionalLights.value=N.state.directional,Pe.directionalLightShadows.value=N.state.directionalShadow,Pe.spotLights.value=N.state.spot,Pe.spotLightShadows.value=N.state.spotShadow,Pe.rectAreaLights.value=N.state.rectArea,Pe.ltc_1.value=N.state.rectAreaLTC1,Pe.ltc_2.value=N.state.rectAreaLTC2,Pe.pointLights.value=N.state.point,Pe.pointLightShadows.value=N.state.pointShadow,Pe.hemisphereLights.value=N.state.hemi,Pe.directionalShadowMap.value=N.state.directionalShadowMap,Pe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pe.spotShadowMap.value=N.state.spotShadowMap,Pe.spotLightMatrix.value=N.state.spotLightMatrix,Pe.spotLightMap.value=N.state.spotLightMap,Pe.pointShadowMap.value=N.state.pointShadowMap,Pe.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function Zo(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Us.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function jo(T,I){const z=ce.get(T);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function vc(T,I,z,G,N){I.isScene!==!0&&(I=be),w.resetTextureUnits();const ae=I.fog,xe=G.isMeshStandardMaterial?I.environment:null,we=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:wn,Ce=(G.isMeshStandardMaterial?O:M).get(G.envMap||xe),Ne=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Fe=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,nt=!!z.morphAttributes.color;let ot=yn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ot=g.toneMapping);const Pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=Pt!==void 0?Pt.length:0,De=ce.get(G),gt=p.state.lights;if(H===!0&&(se===!0||T!==Q)){const Ft=T===Q&&G.id===U;oe.setState(G,T,Ft)}let Ze=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==gt.state.version||De.outputColorSpace!==we||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==Ce||G.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Fe||De.morphTargets!==Pe||De.morphNormals!==Qe||De.morphColors!==nt||De.toneMapping!==ot||De.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,De.__version=G.version);let kt=De.currentProgram;Ze===!0&&(kt=Zi(G,I,N));let Yn=!1,Dt=!1,Zs=!1;const lt=kt.getUniforms(),dn=De.uniforms;if(re.useProgram(kt.program)&&(Yn=!0,Dt=!0,Zs=!0),G.id!==U&&(U=G.id,Dt=!0),Yn||Q!==T){j.reverseDepthBuffer?(he.copy(T.projectionMatrix),_h(he),vh(he),lt.setValue(A,"projectionMatrix",he)):lt.setValue(A,"projectionMatrix",T.projectionMatrix),lt.setValue(A,"viewMatrix",T.matrixWorldInverse);const Ft=lt.map.cameraPosition;Ft!==void 0&&Ft.setValue(A,_e.setFromMatrixPosition(T.matrixWorld)),j.logarithmicDepthBuffer&&lt.setValue(A,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(A,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,Dt=!0,Zs=!0)}if(N.isSkinnedMesh){lt.setOptional(A,N,"bindMatrix"),lt.setOptional(A,N,"bindMatrixInverse");const Ft=N.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),lt.setValue(A,"boneTexture",Ft.boneTexture,w))}N.isBatchedMesh&&(lt.setOptional(A,N,"batchingTexture"),lt.setValue(A,"batchingTexture",N._matricesTexture,w),lt.setOptional(A,N,"batchingIdTexture"),lt.setValue(A,"batchingIdTexture",N._indirectTexture,w),lt.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(A,"batchingColorTexture",N._colorsTexture,w));const js=z.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&Be.update(N,z,kt),(Dt||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,lt.setValue(A,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dn.envMap.value=Ce,dn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(dn.envMapIntensity.value=I.environmentIntensity),Dt&&(lt.setValue(A,"toneMappingExposure",g.toneMappingExposure),De.needsLights&&xc(dn,Zs),ae&&G.fog===!0&&me.refreshFogUniforms(dn,ae),me.refreshMaterialUniforms(dn,G,X,V,p.state.transmissionRenderTarget[T.id]),Us.upload(A,Zo(De),dn,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Us.upload(A,Zo(De),dn,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(A,"center",N.center),lt.setValue(A,"modelViewMatrix",N.modelViewMatrix),lt.setValue(A,"normalMatrix",N.normalMatrix),lt.setValue(A,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ft=G.uniformsGroups;for(let Js=0,Sc=Ft.length;Js<Sc;Js++){const Jo=Ft[Js];P.update(Jo,kt),P.bind(Jo,kt)}}return kt}function xc(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Mc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,I,z){ce.get(T.texture).__webglTexture=I,ce.get(T.depthTexture).__webglTexture=z;const G=ce.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const z=ce.get(T);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,z=0){R=T,L=I,C=z;let G=!0,N=null,ae=!1,xe=!1;if(T){const Ce=ce.get(T);if(Ce.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(A.FRAMEBUFFER,null),G=!1;else if(Ce.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(Ce.__hasExternalTextures)w.rebindTextures(T,ce.get(T.texture).__webglTexture,ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pe=T.depthTexture;if(Ce.__boundDepthTexture!==Pe){if(Pe!==null&&ce.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(xe=!0);const Fe=ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[I])?N=Fe[I][z]:N=Fe[I],ae=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?N=ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[z]:N=Fe,x.copy(T.viewport),E.copy(T.scissor),B=T.scissorTest}else x.copy(fe).multiplyScalar(X).floor(),E.copy(ue).multiplyScalar(X).floor(),B=Ue;if(re.bindFramebuffer(A.FRAMEBUFFER,N)&&G&&re.drawBuffers(T,N),re.viewport(x),re.scissor(E),re.setScissorTest(B),ae){const Ce=ce.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ce.__webglTexture,z)}else if(xe){const Ce=ce.get(T.texture),Ne=I||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ce.__webglTexture,z||0,Ne)}U=-1},this.readRenderTargetPixels=function(T,I,z,G,N,ae,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){re.bindFramebuffer(A.FRAMEBUFFER,we);try{const Ce=T.texture,Ne=Ce.format,Fe=Ce.type;if(!j.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-G&&z>=0&&z<=T.height-N&&A.readPixels(I,z,G,N,He.convert(Ne),He.convert(Fe),ae)}finally{const Ce=R!==null?ce.get(R).__webglFramebuffer:null;re.bindFramebuffer(A.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,I,z,G,N,ae,xe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){const Ce=T.texture,Ne=Ce.format,Fe=Ce.type;if(!j.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-G&&z>=0&&z<=T.height-N){re.bindFramebuffer(A.FRAMEBUFFER,we);const Pe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Pe),A.bufferData(A.PIXEL_PACK_BUFFER,ae.byteLength,A.STREAM_READ),A.readPixels(I,z,G,N,He.convert(Ne),He.convert(Fe),0);const Qe=R!==null?ce.get(R).__webglFramebuffer:null;re.bindFramebuffer(A.FRAMEBUFFER,Qe);const nt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await gh(A,nt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Pe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ae),A.deleteBuffer(Pe),A.deleteSync(nt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,z=0){T.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-z),N=Math.floor(T.image.width*G),ae=Math.floor(T.image.height*G),xe=I!==null?I.x:0,we=I!==null?I.y:0;w.setTexture2D(T,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,xe,we,N,ae),re.unbindTexture()},this.copyTextureToTexture=function(T,I,z=null,G=null,N=0){T.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],I=arguments[2],N=arguments[3]||0,z=null);let ae,xe,we,Ce,Ne,Fe;z!==null?(ae=z.max.x-z.min.x,xe=z.max.y-z.min.y,we=z.min.x,Ce=z.min.y):(ae=T.image.width,xe=T.image.height,we=0,Ce=0),G!==null?(Ne=G.x,Fe=G.y):(Ne=0,Fe=0);const Pe=He.convert(I.format),Qe=He.convert(I.type);w.setTexture2D(I,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);const nt=A.getParameter(A.UNPACK_ROW_LENGTH),ot=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Pt=A.getParameter(A.UNPACK_SKIP_PIXELS),Ke=A.getParameter(A.UNPACK_SKIP_ROWS),De=A.getParameter(A.UNPACK_SKIP_IMAGES),gt=T.isCompressedTexture?T.mipmaps[N]:T.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,gt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,gt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,we),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ce),T.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,N,Ne,Fe,ae,xe,Pe,Qe,gt.data):T.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,N,Ne,Fe,gt.width,gt.height,Pe,gt.data):A.texSubImage2D(A.TEXTURE_2D,N,Ne,Fe,ae,xe,Pe,Qe,gt),A.pixelStorei(A.UNPACK_ROW_LENGTH,nt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ot),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ke),A.pixelStorei(A.UNPACK_SKIP_IMAGES,De),N===0&&I.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(T,I,z=null,G=null,N=0){T.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,T=arguments[2],I=arguments[3],N=arguments[4]||0);let ae,xe,we,Ce,Ne,Fe,Pe,Qe,nt;const ot=T.isCompressedTexture?T.mipmaps[N]:T.image;z!==null?(ae=z.max.x-z.min.x,xe=z.max.y-z.min.y,we=z.max.z-z.min.z,Ce=z.min.x,Ne=z.min.y,Fe=z.min.z):(ae=ot.width,xe=ot.height,we=ot.depth,Ce=0,Ne=0,Fe=0),G!==null?(Pe=G.x,Qe=G.y,nt=G.z):(Pe=0,Qe=0,nt=0);const Pt=He.convert(I.format),Ke=He.convert(I.type);let De;if(I.isData3DTexture)w.setTexture3D(I,0),De=A.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)w.setTexture2DArray(I,0),De=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);const gt=A.getParameter(A.UNPACK_ROW_LENGTH),Ze=A.getParameter(A.UNPACK_IMAGE_HEIGHT),kt=A.getParameter(A.UNPACK_SKIP_PIXELS),Yn=A.getParameter(A.UNPACK_SKIP_ROWS),Dt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ot.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ot.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ce),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ne),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Fe),T.isDataTexture||T.isData3DTexture?A.texSubImage3D(De,N,Pe,Qe,nt,ae,xe,we,Pt,Ke,ot.data):I.isCompressedArrayTexture?A.compressedTexSubImage3D(De,N,Pe,Qe,nt,ae,xe,we,Pt,ot.data):A.texSubImage3D(De,N,Pe,Qe,nt,ae,xe,we,Pt,Ke,ot),A.pixelStorei(A.UNPACK_ROW_LENGTH,gt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ze),A.pixelStorei(A.UNPACK_SKIP_PIXELS,kt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Yn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Dt),N===0&&I.generateMipmaps&&A.generateMipmap(De),re.unbindTexture()},this.initRenderTarget=function(T){ce.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),re.unbindTexture()},this.resetState=function(){L=0,C=0,R=null,re.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fo?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Ws?"display-p3":"srgb"}}class zo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lm extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ac extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ks=new D,Gs=new D,ja=new st,Ui=new Oo,xs=new Xs,Lr=new D,Ja=new D;class Pm extends vt{constructor(e=new $t,t=new ac){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ks.fromBufferAttribute(t,s-1),Gs.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ks.distanceTo(Gs);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(s),xs.radius+=r,e.ray.intersectsSphere(xs)===!1)return;ja.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(ja);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let S=f,p=_-1;S<p;S+=h){const m=c.getX(S),v=c.getX(S+1),g=Ms(this,e,Ui,l,m,v);g&&t.push(g)}if(this.isLineLoop){const S=c.getX(_-1),p=c.getX(f),m=Ms(this,e,Ui,l,S,p);m&&t.push(m)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let S=f,p=_-1;S<p;S+=h){const m=Ms(this,e,Ui,l,S,S+1);m&&t.push(m)}if(this.isLineLoop){const S=Ms(this,e,Ui,l,_-1,f);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ms(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(ks.fromBufferAttribute(a,s),Gs.fromBufferAttribute(a,r),t.distanceSqToSegment(ks,Gs,Lr,Ja)>i)return;Lr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Lr);if(!(l<e.near||l>e.far))return{distance:l,point:Ja.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Qa=new D,el=new D;class Dm extends Pm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Qa.fromBufferAttribute(t,s),el.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qa.distanceTo(el);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const c=i[s],d=i[s+1]-c,f=(a-c)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,s=[],r=[],a=[],o=new D,l=new st;for(let f=0;f<=e;f++){const _=f/e;s[f]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(_t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(_t(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ko extends Qt{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Im extends ko{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Go(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,f=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,f*=c,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Ss=new D,Pr=new Go,Dr=new Go,Ir=new Go;class Um extends Qt{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,c;this.closed||o>0?h=s[(o-1)%r]:(Ss.subVectors(s[0],s[1]).add(s[0]),h=Ss);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(Ss.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(u),f),S=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(c),f);S<1e-4&&(S=1),_<1e-4&&(_=S),p<1e-4&&(p=S),Pr.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,_,S,p),Dr.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,_,S,p),Ir.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,_,S,p)}else this.curveType==="catmullrom"&&(Pr.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),Dr.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),Ir.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return i.set(Pr.calc(l),Dr.calc(l),Ir.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function tl(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Nm(n,e){const t=1-n;return t*t*e}function Fm(n,e){return 2*(1-n)*n*e}function Om(n,e){return n*n*e}function Oi(n,e,t,i){return Nm(n,e)+Fm(n,t)+Om(n,i)}function Bm(n,e){const t=1-n;return t*t*t*e}function Hm(n,e){const t=1-n;return 3*t*t*n*e}function zm(n,e){return 3*(1-n)*n*n*e}function km(n,e){return n*n*n*e}function Bi(n,e,t,i,s){return Bm(n,e)+Hm(n,t)+zm(n,i)+km(n,s)}class lc extends Qt{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Bi(e,s.x,r.x,a.x,o.x),Bi(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gm extends Qt{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Bi(e,s.x,r.x,a.x,o.x),Bi(e,s.y,r.y,a.y,o.y),Bi(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cc extends Qt{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vm extends Qt{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hc extends Qt{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Oi(e,s.x,r.x,a.x),Oi(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wm extends Qt{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Oi(e,s.x,r.x,a.x),Oi(e,s.y,r.y,a.y),Oi(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uc extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],c=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(tl(o,l.x,h.x,c.x,u.x),tl(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var wo=Object.freeze({__proto__:null,ArcCurve:Im,CatmullRomCurve3:Um,CubicBezierCurve:lc,CubicBezierCurve3:Gm,EllipseCurve:ko,LineCurve:cc,LineCurve3:Vm,QuadraticBezierCurve:hc,QuadraticBezierCurve3:Wm,SplineCurve:uc});class Xm extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){const c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new wo[s.type]().fromJSON(s))}return this}}class nl extends Xm{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new cc(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new hc(this.currentPoint.clone(),new le(e,t),new le(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new lc(this.currentPoint.clone(),new le(e,t),new le(i,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new uc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const h=new ko(e,t,i,s,r,a,o,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vo extends nl{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new nl().fromJSON(s))}return this}}const qm={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=dc(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h,c,u,d,f;if(i&&(r=jm(n,e,r,t)),n.length>80*t){o=h=n[0],l=c=n[1];for(let _=t;_<s;_+=t)u=n[_],d=n[_+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-o,c-l),f=f!==0?32767/f:0}return Vi(r,a,t,o,l,f,0),a}};function dc(n,e,t,i,s){let r,a;if(s===lg(n,e,t,i)>0)for(r=e;r<t;r+=i)a=il(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=il(r,n[r],n[r+1],a);return a&&Ys(a,a.next)&&(Xi(a),a=a.next),a}function Xn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ys(t,t.next)||rt(t.prev,t,t.next)===0)){if(Xi(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Vi(n,e,t,i,s,r,a){if(!n)return;!a&&r&&ng(n,i,s,r);let o=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?$m(n,i,s,r):Ym(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(h.i/t|0),Xi(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=Km(Xn(n),e,t),Vi(n,e,t,i,s,r,2)):a===2&&Zm(n,e,t,i,s,r):Vi(Xn(n),e,t,i,s,r,1);break}}}function Ym(n){const e=n.prev,t=n,i=n.next;if(rt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=s<r?s<a?s:a:r<a?r:a,u=o<l?o<h?o:h:l<h?l:h,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>h?o:h:l>h?l:h;let _=i.next;for(;_!==e;){if(_.x>=c&&_.x<=d&&_.y>=u&&_.y<=f&&ui(s,o,r,l,a,h,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function $m(n,e,t,i){const s=n.prev,r=n,a=n.next;if(rt(s,r,a)>=0)return!1;const o=s.x,l=r.x,h=a.x,c=s.y,u=r.y,d=a.y,f=o<l?o<h?o:h:l<h?l:h,_=c<u?c<d?c:d:u<d?u:d,S=o>l?o>h?o:h:l>h?l:h,p=c>u?c>d?c:d:u>d?u:d,m=bo(f,_,e,t,i),v=bo(S,p,e,t,i);let g=n.prevZ,y=n.nextZ;for(;g&&g.z>=m&&y&&y.z<=v;){if(g.x>=f&&g.x<=S&&g.y>=_&&g.y<=p&&g!==s&&g!==a&&ui(o,c,l,u,h,d,g.x,g.y)&&rt(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=f&&y.x<=S&&y.y>=_&&y.y<=p&&y!==s&&y!==a&&ui(o,c,l,u,h,d,y.x,y.y)&&rt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=m;){if(g.x>=f&&g.x<=S&&g.y>=_&&g.y<=p&&g!==s&&g!==a&&ui(o,c,l,u,h,d,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=S&&y.y>=_&&y.y<=p&&y!==s&&y!==a&&ui(o,c,l,u,h,d,y.x,y.y)&&rt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Km(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Ys(s,r)&&fc(s,i,i.next,r)&&Wi(s,r)&&Wi(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Xi(i),Xi(i.next),i=n=r),i=i.next}while(i!==n);return Xn(i)}function Zm(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rg(a,o)){let l=pc(a,o);a=Xn(a,a.next),l=Xn(l,l.next),Vi(a,e,t,i,s,r,0),Vi(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function jm(n,e,t,i){const s=[];let r,a,o,l,h;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,h=dc(n,o,l,i,!1),h===h.next&&(h.steiner=!0),s.push(sg(h));for(s.sort(Jm),r=0;r<s.length;r++)t=Qm(s[r],t);return t}function Jm(n,e){return n.x-e.x}function Qm(n,e){const t=eg(n,e);if(!t)return e;const i=pc(t,n);return Xn(i,i.next),Xn(t,t.next)}function eg(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,h=s.y;let c=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ui(a<h?r:i,a,l,h,a<h?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Wi(t,n)&&(u<c||u===c&&(t.x>s.x||t.x===s.x&&tg(s,t)))&&(s=t,c=u)),t=t.next;while(t!==o);return s}function tg(n,e){return rt(n.prev,n,e.prev)<0&&rt(e.next,n,n.next)<0}function ng(n,e,t,i){let s=n;do s.z===0&&(s.z=bo(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ig(s)}function ig(n){let e,t,i,s,r,a,o,l,h=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<h&&(o++,i=i.nextZ,!!i);e++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,h*=2}while(a>1);return n}function bo(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function sg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ui(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function rg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!og(n,e)&&(Wi(n,e)&&Wi(e,n)&&ag(n,e)&&(rt(n.prev,n,e.prev)||rt(n,e.prev,e))||Ys(n,e)&&rt(n.prev,n,n.next)>0&&rt(e.prev,e,e.next)>0)}function rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ys(n,e){return n.x===e.x&&n.y===e.y}function fc(n,e,t,i){const s=Es(rt(n,e,t)),r=Es(rt(n,e,i)),a=Es(rt(t,i,n)),o=Es(rt(t,i,e));return!!(s!==r&&a!==o||s===0&&ys(n,t,e)||r===0&&ys(n,i,e)||a===0&&ys(t,n,i)||o===0&&ys(t,e,i))}function ys(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Es(n){return n>0?1:n<0?-1:0}function og(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Wi(n,e){return rt(n.prev,n,n.next)<0?rt(n,e,n.next)>=0&&rt(n,n.prev,e)>=0:rt(n,e,n.prev)<0||rt(n,n.next,e)<0}function ag(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pc(n,e){const t=new Ro(n.i,n.x,n.y),i=new Ro(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function il(n,e,t,i){const s=new Ro(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xi(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ro(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Hi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Hi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];sl(e),rl(i,e);let a=e.length;t.forEach(sl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,rl(i,t[l]);const o=qm.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function sl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function rl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class $s extends $t{constructor(e=new Vo([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const h=e[o];a(h)}this.setAttribute("position",new Lt(s,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function a(o){const l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:cg;let g,y=!1,L,C,R,U;m&&(g=m.getSpacedPoints(c),y=!0,d=!1,L=m.computeFrenetFrames(c,!1),C=new D,R=new D,U=new D),d||(p=0,f=0,_=0,S=0);const Q=o.extractPoints(h);let x=Q.shape;const E=Q.holes;if(!Hi.isClockWise(x)){x=x.reverse();for(let $=0,A=E.length;$<A;$++){const J=E[$];Hi.isClockWise(J)&&(E[$]=J.reverse())}}const F=Hi.triangulateShape(x,E),k=x;for(let $=0,A=E.length;$<A;$++){const J=E[$];x=x.concat(J)}function q($,A,J){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(A,J)}const V=x.length,X=F.length;function W($,A,J){let ee,j,re;const de=$.x-A.x,ce=$.y-A.y,w=J.x-$.x,M=J.y-$.y,O=de*de+ce*ce,K=de*M-ce*w;if(Math.abs(K)>Number.EPSILON){const te=Math.sqrt(O),Z=Math.sqrt(w*w+M*M),Re=A.x-ce/te,me=A.y+de/te,ye=J.x-M/Z,We=J.y+w/Z,oe=((ye-Re)*M-(We-me)*w)/(de*M-ce*w);ee=Re+de*oe-$.x,j=me+ce*oe-$.y;const Ee=ee*ee+j*j;if(Ee<=2)return new le(ee,j);re=Math.sqrt(Ee/2)}else{let te=!1;de>Number.EPSILON?w>Number.EPSILON&&(te=!0):de<-Number.EPSILON?w<-Number.EPSILON&&(te=!0):Math.sign(ce)===Math.sign(M)&&(te=!0),te?(ee=-ce,j=de,re=Math.sqrt(O)):(ee=de,j=ce,re=Math.sqrt(O/2))}return new le(ee/re,j/re)}const pe=[];for(let $=0,A=k.length,J=A-1,ee=$+1;$<A;$++,J++,ee++)J===A&&(J=0),ee===A&&(ee=0),pe[$]=W(k[$],k[J],k[ee]);const fe=[];let ue,Ue=pe.concat();for(let $=0,A=E.length;$<A;$++){const J=E[$];ue=[];for(let ee=0,j=J.length,re=j-1,de=ee+1;ee<j;ee++,re++,de++)re===j&&(re=0),de===j&&(de=0),ue[ee]=W(J[ee],J[re],J[de]);fe.push(ue),Ue=Ue.concat(ue)}for(let $=0;$<p;$++){const A=$/p,J=f*Math.cos(A*Math.PI/2),ee=_*Math.sin(A*Math.PI/2)+S;for(let j=0,re=k.length;j<re;j++){const de=q(k[j],pe[j],ee);ie(de.x,de.y,-J)}for(let j=0,re=E.length;j<re;j++){const de=E[j];ue=fe[j];for(let ce=0,w=de.length;ce<w;ce++){const M=q(de[ce],ue[ce],ee);ie(M.x,M.y,-J)}}}const Ie=_+S;for(let $=0;$<V;$++){const A=d?q(x[$],Ue[$],Ie):x[$];y?(R.copy(L.normals[0]).multiplyScalar(A.x),C.copy(L.binormals[0]).multiplyScalar(A.y),U.copy(g[0]).add(R).add(C),ie(U.x,U.y,U.z)):ie(A.x,A.y,0)}for(let $=1;$<=c;$++)for(let A=0;A<V;A++){const J=d?q(x[A],Ue[A],Ie):x[A];y?(R.copy(L.normals[$]).multiplyScalar(J.x),C.copy(L.binormals[$]).multiplyScalar(J.y),U.copy(g[$]).add(R).add(C),ie(U.x,U.y,U.z)):ie(J.x,J.y,u/c*$)}for(let $=p-1;$>=0;$--){const A=$/p,J=f*Math.cos(A*Math.PI/2),ee=_*Math.sin(A*Math.PI/2)+S;for(let j=0,re=k.length;j<re;j++){const de=q(k[j],pe[j],ee);ie(de.x,de.y,u+J)}for(let j=0,re=E.length;j<re;j++){const de=E[j];ue=fe[j];for(let ce=0,w=de.length;ce<w;ce++){const M=q(de[ce],ue[ce],ee);y?ie(M.x,M.y+g[c-1].y,g[c-1].x+J):ie(M.x,M.y,u+J)}}}H(),se();function H(){const $=s.length/3;if(d){let A=0,J=V*A;for(let ee=0;ee<X;ee++){const j=F[ee];_e(j[2]+J,j[1]+J,j[0]+J)}A=c+p*2,J=V*A;for(let ee=0;ee<X;ee++){const j=F[ee];_e(j[0]+J,j[1]+J,j[2]+J)}}else{for(let A=0;A<X;A++){const J=F[A];_e(J[2],J[1],J[0])}for(let A=0;A<X;A++){const J=F[A];_e(J[0]+V*c,J[1]+V*c,J[2]+V*c)}}i.addGroup($,s.length/3-$,0)}function se(){const $=s.length/3;let A=0;he(k,A),A+=k.length;for(let J=0,ee=E.length;J<ee;J++){const j=E[J];he(j,A),A+=j.length}i.addGroup($,s.length/3-$,1)}function he($,A){let J=$.length;for(;--J>=0;){const ee=J;let j=J-1;j<0&&(j=$.length-1);for(let re=0,de=c+p*2;re<de;re++){const ce=V*re,w=V*(re+1),M=A+ee+ce,O=A+j+ce,K=A+j+w,te=A+ee+w;Te(M,O,K,te)}}}function ie($,A,J){l.push($),l.push(A),l.push(J)}function _e($,A,J){be($),be(A),be(J);const ee=s.length/3,j=v.generateTopUV(i,s,ee-3,ee-2,ee-1);Le(j[0]),Le(j[1]),Le(j[2])}function Te($,A,J,ee){be($),be(A),be(ee),be(A),be(J),be(ee);const j=s.length/3,re=v.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);Le(re[0]),Le(re[1]),Le(re[3]),Le(re[1]),Le(re[2]),Le(re[3])}function be($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function Le($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return hg(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wo[s.type]().fromJSON(s)),new $s(i,e.options)}}const cg={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],h=e[s*3],c=e[s*3+1];return[new le(r,a),new le(o,l),new le(h,c)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],h=e[i*3],c=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],_=e[s*3+2],S=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-c)<Math.abs(a-h)?[new le(a,1-l),new le(h,1-u),new le(d,1-_),new le(S,1-m)]:[new le(o,1-l),new le(c,1-u),new le(f,1-_),new le(p,1-m)]}};function hg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class wt extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mc extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ur=new st,ol=new D,al=new D;class ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(ol),al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(al),t.updateMatrixWorld(),Ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dg extends ug{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ll extends mc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fg extends mc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pg extends Dm{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ge(i),s=new Ge(s);const r=t/2,a=e/t,o=e/2,l=[],h=[];for(let d=0,f=0,_=-o;d<=t;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const S=d===r?i:s;S.toArray(h,f),f+=3,S.toArray(h,f),f+=3,S.toArray(h,f),f+=3,S.toArray(h,f),f+=3}const c=new $t;c.setAttribute("position",new Lt(l,3)),c.setAttribute("color",new Lt(h,3));const u=new ac({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class mg extends qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);const hl={type:"change"},Wo={type:"start"},gc={type:"end"},Ts=new Oo,ul=new xn,gg=Math.cos(70*ph.DEG2RAD),dt=new D,At=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nr=1e-6;class _g extends mg{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Wn,this._lastTargetPosition=new D,this._quat=new Wn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cl,this._sphericalDelta=new cl,this._scale=1,this._panOffset=new D,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new D,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xg.bind(this),this._onPointerDown=vg.bind(this),this._onPointerUp=Mg.bind(this),this._onContextMenu=bg.bind(this),this._onMouseWheel=Eg.bind(this),this._onKeyDown=Tg.bind(this),this._onTouchStart=Ag.bind(this),this._onTouchMove=wg.bind(this),this._onMouseDown=Sg.bind(this),this._onMouseMove=yg.bind(this),this._interceptControlDown=Rg.bind(this),this._interceptControlUp=Cg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hl),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;dt.copy(t).sub(this.target),dt.applyQuaternion(this._quat),this._spherical.setFromVector3(dt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=At:i>Math.PI&&(i-=At),s<-Math.PI?s+=At:s>Math.PI&&(s-=At),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(dt.setFromSpherical(this._spherical),dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=dt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new D(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ts.origin.copy(this.object.position),Ts.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ts.direction))<gg?this.object.lookAt(this.target):(ul.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ts.intersectPlane(ul,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nr||this._lastTargetPosition.distanceToSquared(this.target)>Nr?(this.dispatchEvent(hl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?At/60*this.autoRotateSpeed*e:At/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dt.setFromMatrixColumn(t,0),dt.multiplyScalar(-e),this._panOffset.add(dt)}_panUp(e,t){this.screenSpacePanning===!0?dt.setFromMatrixColumn(t,1):(dt.setFromMatrixColumn(t,0),dt.crossVectors(this.object.up,dt)),dt.multiplyScalar(e),this._panOffset.add(dt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;dt.copy(s).sub(this.target);let r=dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(At*this._rotateDelta.x/t.clientHeight),this._rotateUp(At*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(At*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-At*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(At*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-At*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(At*this._rotateDelta.x/t.clientHeight),this._rotateUp(At*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function vg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function xg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Mg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gc),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Sg(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=et.DOLLY;break;case di.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}break;case di.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Wo)}function yg(n){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Eg(n){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(n.preventDefault(),this.dispatchEvent(Wo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gc))}function Tg(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ag(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=et.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=et.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Wo)}function wg(n){switch(this._trackPointer(n),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=et.NONE}}function bg(n){this.enabled!==!1&&n.preventDefault()}function Rg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const je=.077,Bt=.5,Ve=.5,dl={top:13137482,front:13927770,side:11033650,bot:8011290},As={top:6146725,front:10478027,side:1941109,bot:946261},Lg={top:1118481,front:1381653,side:855309,bot:526344},Pg={top:2236962,front:1842204,side:1447446,bot:657930};function Fr(n){return[new wt({color:n.side,roughness:.9}),new wt({color:n.side,roughness:.9}),new wt({color:n.top,roughness:.85}),new wt({color:n.bot,roughness:1}),new wt({color:n.front,roughness:.85}),new wt({color:n.side,roughness:.9})]}function Dg(n,e,t,i){const s=[],r=(o,l,h)=>s.push(o,l,h);if(r(0,0,0),r(n,0,0),r(n,0,e),r(0,0,0),r(n,0,e),r(0,0,e),i==="L")r(0,0,0),r(0,t,e),r(0,t,0),r(0,0,0),r(0,0,e),r(0,t,e),r(0,0,0),r(0,t,0),r(n,0,0),r(0,0,e),r(n,0,e),r(0,t,e),r(0,t,0),r(0,t,e),r(n,0,e),r(0,t,0),r(n,0,e),r(n,0,0);else if(i==="R")r(n,0,0),r(n,t,0),r(n,t,e),r(n,0,0),r(n,t,e),r(n,0,e),r(0,0,0),r(n,t,0),r(n,0,0),r(0,0,e),r(n,0,e),r(n,t,e),r(0,0,0),r(0,0,e),r(n,t,e),r(0,0,0),r(n,t,e),r(n,t,0);else if(i==="F")r(0,0,0),r(0,t,0),r(n,t,0),r(0,0,0),r(n,t,0),r(n,0,0),r(0,0,0),r(0,0,e),r(0,t,0),r(n,0,0),r(n,t,0),r(n,0,e),r(0,t,0),r(0,0,e),r(n,0,e),r(0,t,0),r(n,0,e),r(n,t,0);else if(i==="B")r(0,0,e),r(n,0,e),r(n,t,e),r(0,0,e),r(n,t,e),r(0,t,e),r(0,0,0),r(0,0,e),r(0,t,e),r(n,0,0),r(n,t,e),r(n,0,e),r(0,t,e),r(n,t,e),r(n,0,0),r(0,t,e),r(n,0,0),r(0,0,0);else if(i==="MR"){const o=n/2;r(0,0,0),r(0,t,e),r(0,t,0),r(0,0,0),r(0,0,e),r(0,t,e),r(0,0,0),r(0,t,0),r(o,t,0),r(0,0,0),r(o,t,0),r(o,0,0),r(o,0,0),r(o,t,0),r(n,0,0),r(0,0,e),r(o,0,e),r(o,t,e),r(0,0,e),r(o,t,e),r(0,t,e),r(o,0,e),r(n,0,e),r(o,t,e),r(0,t,0),r(0,t,e),r(o,t,e),r(0,t,0),r(o,t,e),r(o,t,0),r(o,t,0),r(o,t,e),r(n,0,e),r(o,t,0),r(n,0,e),r(n,0,0)}else if(i==="ML"){const o=n/2;r(n,0,0),r(n,t,0),r(n,t,e),r(n,0,0),r(n,t,e),r(n,0,e),r(0,0,0),r(o,t,0),r(o,0,0),r(o,0,0),r(o,t,0),r(n,t,0),r(o,0,0),r(n,t,0),r(n,0,0),r(0,0,e),r(o,0,e),r(o,t,e),r(o,0,e),r(n,0,e),r(n,t,e),r(o,0,e),r(n,t,e),r(o,t,e),r(o,t,0),r(o,t,e),r(n,t,e),r(o,t,0),r(n,t,e),r(n,t,0),r(0,0,0),r(0,0,e),r(o,t,e),r(0,0,0),r(o,t,e),r(o,t,0)}else if(i==="MF"){const o=e/2;r(0,0,e),r(n,0,e),r(n,t,e),r(0,0,e),r(n,t,e),r(0,t,e),r(0,0,o),r(0,0,e),r(0,t,e),r(0,0,o),r(0,t,e),r(0,t,o),r(0,0,0),r(0,0,o),r(0,t,o),r(n,0,o),r(n,t,o),r(n,t,e),r(n,0,o),r(n,t,e),r(n,0,e),r(n,0,0),r(n,t,o),r(n,0,o),r(0,t,o),r(0,t,e),r(n,t,e),r(0,t,o),r(n,t,e),r(n,t,o),r(0,0,0),r(0,t,o),r(n,t,o),r(0,0,0),r(n,t,o),r(n,0,0)}else if(i==="MB"){const o=e/2;r(0,0,0),r(0,t,0),r(n,t,0),r(0,0,0),r(n,t,0),r(n,0,0),r(0,0,0),r(0,t,o),r(0,t,0),r(0,0,0),r(0,0,o),r(0,t,o),r(0,0,o),r(0,0,e),r(0,t,o),r(n,0,0),r(n,t,0),r(n,t,o),r(n,0,0),r(n,t,o),r(n,0,o),r(n,0,o),r(n,t,o),r(n,0,e),r(0,t,0),r(0,t,o),r(n,t,o),r(0,t,0),r(n,t,o),r(n,t,0),r(0,t,o),r(0,0,e),r(n,0,e),r(0,t,o),r(n,0,e),r(n,t,o)}const a=new $t;return a.setAttribute("position",new Lt(s,3)),a.computeVertexNormals(),a}function Ig(n,e,t,i,s,r){let a;i==="TL"?a=[[s,0],[n,0],[n,e],[0,e],[0,r]]:i==="TR"?a=[[0,0],[n-s,0],[n,r],[n,e],[0,e]]:i==="BR"?a=[[0,0],[n,0],[n,e-r],[n-s,e],[0,e]]:a=[[0,0],[n,0],[n,e],[s,e],[0,e-r]];const o=new Vo(a.map(([h,c])=>new le(h,c))),l=new $s(o,{depth:t,bevelEnabled:!1});return l.rotateX(Math.PI/2),l.translate(0,t,0),l}function Ug(n,e,t,i){let s;i==="TL"?s=[[0,0],[n,0],[0,e]]:i==="TR"?s=[[0,0],[n,0],[n,e]]:i==="BR"?s=[[n,0],[n,e],[0,e]]:s=[[0,0],[n,e],[0,e]];const r=new Vo(s.map(([o,l])=>new le(o,l))),a=new $s(r,{depth:t,bevelEnabled:!1});return a.rotateX(Math.PI/2),a.translate(0,t,0),a}class Ng{constructor(e){this.scene=new Lm,this.scene.background=new Ge(1710100),this.scene.fog=new zo(1710100,.012);const t=e.clientWidth,i=e.clientHeight;this.camera=new Ht(40,t/i,.1,500),this.camera.position.set(20,14,28),this.renderer=new Cm({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bl,this.renderer.toneMapping=Cl,this.renderer.toneMappingExposure=1.1,e.appendChild(this.renderer.domElement),this.scene.add(new fg(16773336,.6)),this.sun=new ll(16771264,2.2),this.sun.position.set(20,35,20),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-8e-4,this.sun.shadow.camera.near=.5,this.sun.shadow.camera.far=200;const s=this.sun.shadow.camera;s.left=s.bottom=-40,s.right=s.top=40,this.scene.add(this.sun);const r=new ll(11585768,.5);r.position.set(-15,10,-15),this.scene.add(r);const a=new ct(new $i(300,300),new wt({color:1380880,roughness:1,metalness:0}));a.rotation.x=-Math.PI/2,a.position.y=-.02,a.receiveShadow=!0,this.scene.add(a),this.scene.add(new pg(300,150,2761240,2235412)),this.group=new Fi,this.scene.add(this.group),this.controls=new _g(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=3,this.controls.maxDistance=120,this.controls.maxPolarAngle=Math.PI/2+.1,new ResizeObserver(()=>{const l=e.clientWidth,h=e.clientHeight;this.camera.aspect=l/h,this.camera.updateProjectionMatrix(),this.renderer.setSize(l,h)}).observe(e);const o=()=>{requestAnimationFrame(o),this.controls.update(),this.renderer.render(this.scene,this.camera)};o()}bindControls(){var o;const i=(l,h)=>{const c=this.camera.position.clone().sub(this.controls.target),u=c.length();let d=Math.atan2(c.x,c.z),f=Math.acos(Math.max(-1,Math.min(1,c.y/u)));d+=l,f=Math.max(.05,Math.min(Math.PI/2+.1,f+h)),this.camera.position.set(this.controls.target.x+u*Math.sin(f)*Math.sin(d),this.controls.target.y+u*Math.cos(f),this.controls.target.z+u*Math.sin(f)*Math.cos(d)),this.camera.lookAt(this.controls.target)},s=l=>{const h=this.camera.position.clone().sub(this.controls.target),c=Math.max(this.controls.minDistance,Math.min(this.controls.maxDistance,h.length()*l));h.normalize().multiplyScalar(c),this.camera.position.copy(this.controls.target).add(h)},r=this.camera.position.clone(),a=(l,h)=>{const c=document.getElementById(l);if(!c)return;let u=null;c.addEventListener("mousedown",()=>{h(),u=setInterval(h,80)}),c.addEventListener("mouseup",()=>{u&&(clearInterval(u),u=null)}),c.addEventListener("mouseleave",()=>{u&&(clearInterval(u),u=null)}),c.addEventListener("touchstart",d=>{d.preventDefault(),h(),u=setInterval(h,80)},{passive:!1}),c.addEventListener("touchend",()=>{u&&(clearInterval(u),u=null)})};a("btn-3d-up",()=>i(0,-.12)),a("btn-3d-down",()=>i(0,.12)),a("btn-3d-left",()=>i(-.12,0)),a("btn-3d-right",()=>i(.12,0)),a("btn-3d-zoomin",()=>s(.85)),a("btn-3d-zoomout",()=>s(1/.85)),(o=document.getElementById("btn-3d-reset"))==null||o.addEventListener("click",()=>{this.camera.position.copy(r),this.camera.lookAt(this.controls.target)})}exportPNG(){this.renderer.render(this.scene,this.camera);const e=this.renderer.domElement.toDataURL("image/png"),t=document.createElement("a");t.href=e,t.download="furnace_3d.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)}update(e,t,i=!1,s=-1,r=-1){var f,_,S,p,m,v,g,y,L,C,R,U,Q,x,E,B,F,k,q,V;const a=s<0?e.rows.length:Math.min(s,e.rows.length),o=r<0?e.cols:Math.min(r,e.cols);for(const X of[...this.group.children]){const W=X;Array.isArray(W.material)?W.material.forEach(pe=>pe.dispose()):(f=W.material)==null||f.dispose(),(_=W.geometry)==null||_.dispose()}this.group.clear();const l=e.cols*Ve*.5,h=e.depths*Ve*.5,c=a*(Bt+je)*.5;this.controls.target.set(l,c,h);const u=Math.max(e.cols,e.depths)*Ve+10,d=this.sun.shadow.camera;d.left=d.bottom=-u,d.right=d.top=u,d.updateProjectionMatrix();for(let X=0;X<a;X++){if(e.rowHidden[X])continue;const W=X===t,pe=W?As:dl,fe=e.rowOffsets[X]?Ve*2:0,ue=X*(Bt+je);for(let Ue=0;Ue<o;Ue++)for(let Ie=0;Ie<e.depths;Ie++){const H=(p=(S=e.rows[X])==null?void 0:S[Ue])==null?void 0:p[Ie];if(!H||H===b.Empty)continue;const[se,he]=bt(H,e.doors,e.boxes);let ie=se*Ve-je,_e=he*Ve-je,Te=Bt;H===b.VerticalStretcher&&(Te=Ve*2,_e=Ve*2-je),H===b.Slab&&(Te=Bt/3);const be=Ue*Ve+je/2+fe,Le=Ie*Ve+je/2;if(yl(H)){const $=El(H),A=Dg(ie,_e,Te,$),J=W?As.front:6266952,ee=new wt({color:J,roughness:.85}),j=new ct(A,ee);j.position.set(be,ue,Le),j.castShadow=!0,j.receiveShadow=!0,this.group.add(j)}else if(Ns(H)){const $=zi(H),[A,J]=ki(H,ie,_e),ee=Ig(ie,_e,Te,$,A,J),j=W?As.front:dl.front,re=new wt({color:j,roughness:.85}),de=new ct(ee,re);de.position.set(be,ue,Le),de.castShadow=!0,de.receiveShadow=!0,this.group.add(de)}else if(Ml(H)){const $=Sl(H),A=Ug(ie,_e,Te,$),J=W?As.front:10506432,ee=new wt({color:J,roughness:.85}),j=new ct(A,ee);j.position.set(be,ue,Le),j.castShadow=!0,j.receiveShadow=!0,this.group.add(j)}else if(Ei(H)){if(!(X>0&&((v=(m=e.rows[X-1])==null?void 0:m[Ue])==null?void 0:v[Ie])===H)){const A=e.boxes.find(J=>J.id===Ti(H));if(A){const J=A.heightRows*Bt+(A.heightRows-1)*je,ee=parseInt(A.color.slice(1,3),16)/255,j=parseInt(A.color.slice(3,5),16)/255,re=parseInt(A.color.slice(5,7),16)/255,de=new wt({color:new Ge(ee,j,re),roughness:.55,metalness:.1,transparent:!0,opacity:.88}),ce=A.cols*Ve-je,w=A.depths*Ve-je,M=new ct(new Nt(ce,J,w),de);M.position.set(be+ce/2,ue+J/2,Le+w/2),M.castShadow=!0,M.receiveShadow=!0,this.group.add(M)}}}else if(En(H)){if(!(X>0&&((y=(g=e.rows[X-1])==null?void 0:g[Ue])==null?void 0:y[Ie])===H)){const A=e.doors.find(J=>J.id===yi(H));if(A){const J=A.heightRows*Bt+(A.heightRows-1)*je,ee=je*2.5,j=new wt({color:4482696,roughness:.4,metalness:.8});if(A.brickBase==="Тычок"){const re=A.offsetX==="left"?0:A.offsetX==="right"?ie-ee:(ie-ee)/2;for(let de=0;de<A.cols;de++){if(!((L=A.shape[de])!=null&&L.some(M=>M)))continue;const ce=Le+de*Ve,w=new ct(new Nt(ee,J,Ve),j);w.position.set(be+re+ee/2,ue+J/2,ce+Ve/2),w.castShadow=!0,w.receiveShadow=!0,this.group.add(w)}}else{const re=A.offsetX==="left"?0:A.offsetX==="right"?_e-ee:(_e-ee)/2;for(let de=0;de<A.cols;de++){if(!((C=A.shape[de])!=null&&C.some(M=>M)))continue;const ce=be+de*Ve,w=new ct(new Nt(Ve,J,ee),j);w.position.set(ce+Ve/2,ue+J/2,Le+re+ee/2),w.castShadow=!0,w.receiveShadow=!0,this.group.add(w)}}}}}else if(H===b.Grate){const $=Bt*.28,A=Ve*.28,J=4,ee=_e/J,j=new wt({color:5592405,roughness:.5,metalness:.7});for(let re=0;re<J;re++){const de=Le+ee*re+(ee-A)/2,ce=new ct(new Nt(ie,$,A),j);ce.position.set(be+ie/2,ue+$/2,de+A/2),ce.castShadow=!0,ce.receiveShadow=!0,this.group.add(ce)}}else{const $=H===b.Hole?Fr(Lg):H===b.Slab?Fr(Pg):Fr(pe),A=new ct(new Nt(ie,Te,_e),$);A.position.set(be+ie/2,ue+Te/2,Le+_e/2),A.castShadow=!0,A.receiveShadow=!0,this.group.add(A)}}if(i){const Ue=new wt({color:8024160,roughness:1});if(X<a-1&&!e.rowHidden[X+1]){const Ie=e.rowOffsets[X+1]?Ve*2:0,H=ue+Bt+je/2,se=[];for(let he=0;he<e.cols;he++)for(let ie=0;ie<e.depths;ie++){const _e=(U=(R=e.rows[X+1])==null?void 0:R[he])==null?void 0:U[ie];if(!_e||_e===b.Empty||_e===b.Hole)continue;const[Te,be]=bt(_e,e.doors);se.push({x0:he*Ve+je/2+Ie,x1:he*Ve+je/2+Ie+Te*Ve-je,z0:ie*Ve+je/2,z1:ie*Ve+je/2+be*Ve-je})}for(let he=0;he<e.cols;he++)for(let ie=0;ie<e.depths;ie++){const _e=(x=(Q=e.rows[X])==null?void 0:Q[he])==null?void 0:x[ie];if(!_e||_e===b.Empty||_e===b.Hole)continue;const[Te,be]=bt(_e,e.doors),Le=he*Ve+je/2+fe,$=Le+Te*Ve-je,A=ie*Ve+je/2,J=A+be*Ve-je;for(const ee of se){const j=Math.max(Le,ee.x0),re=Math.min($,ee.x1),de=Math.max(A,ee.z0),ce=Math.min(J,ee.z1);if(re<=j||ce<=de)continue;const w=new ct(new Nt(re-j,je,ce-de),Ue);w.position.set((j+re)/2,H,(de+ce)/2),this.group.add(w)}}}for(let Ie=0;Ie<e.cols;Ie++)for(let H=0;H<e.depths;H++){const se=(B=(E=e.rows[X])==null?void 0:E[Ie])==null?void 0:B[H];if(!se||se===b.Empty||se===b.Hole)continue;const[he,ie]=bt(se,e.doors),_e=(k=(F=e.rows[X])==null?void 0:F[Ie+he])==null?void 0:k[H];if(_e&&_e!==b.Empty&&_e!==b.Hole){const[,be]=bt(_e,e.doors),Le=Math.min(ie,be)*Ve-je,$=(Ie+he)*Ve+fe,A=H*Ve+je/2,J=new ct(new Nt(je,Bt,Le),Ue);J.position.set($,ue+Bt/2,A+Le/2),this.group.add(J)}const Te=(V=(q=e.rows[X])==null?void 0:q[Ie])==null?void 0:V[H+ie];if(Te&&Te!==b.Empty&&Te!==b.Hole){const[be]=bt(Te,e.doors),Le=Math.min(he,be)*Ve-je,$=Ie*Ve+fe+je/2,A=(H+ie)*Ve,J=new ct(new Nt(Le,Bt,je),Ue);J.position.set($+Le/2,ue+Bt/2,A),this.group.add(J)}}}}}}const $e=16,li=60,Fg=[b.FullStretcher,b.FullHeader,b.ThreeQuarter,b.ThreeQuarterHeader,b.Quarter,b.QuarterHeader,b.Half,b.HalfLong,b.HalfLongHeader,b.ChamferTL,b.ChamferTR,b.ChamferBR,b.ChamferBL,b.ChamferHeaderTL,b.ChamferHeaderTR,b.ChamferHeaderBR,b.ChamferHeaderBL,b.ChamferTL2,b.ChamferTR2,b.ChamferBR2,b.ChamferBL2,b.ChamferHeaderTL2,b.ChamferHeaderTR2,b.ChamferHeaderBR2,b.ChamferHeaderBL2,b.WedgeL,b.WedgeR,b.WedgeHeaderF,b.WedgeHeaderB,b.HalfDiagTL,b.HalfDiagTR,b.HalfDiagBR,b.HalfDiagBL,b.WedgeHalfL,b.WedgeHalfR,b.WedgeHalfHeaderF,b.WedgeHalfHeaderB,b.WedgeMidL,b.WedgeMidR,b.WedgeMidHeaderF,b.WedgeMidHeaderB,b.Hole,b.VerticalStretcher,b.Grate,b.Slab];function Og(n){return[...Fg,...n.doors.map(e=>`door:${e.id}`),...n.boxes.map(e=>`box:${e.id}`)]}function Bg(n,e,t){if(e)return"#6e6e6e";if(En(n))return"#2a4a5a";if(Ei(n)&&t){const i=t.boxes.find(s=>s.id===Ti(n));if(i)return i.color}switch(n){case b.FullStretcher:return"#d27846";case b.FullHeader:return"#4688d2";case b.ThreeQuarter:return"#be6b41";case b.ThreeQuarterHeader:return"#3a7ac2";case b.Quarter:return"#b05a30";case b.QuarterHeader:return"#2a68b8";case b.Half:return"#a85a32";case b.HalfLong:return"#c87850";case b.HalfLongHeader:return"#5090d0";case b.ChamferTL:case b.ChamferTR:case b.ChamferBR:case b.ChamferBL:return"#e07838";case b.ChamferHeaderTL:case b.ChamferHeaderTR:case b.ChamferHeaderBR:case b.ChamferHeaderBL:return"#e07838";case b.ChamferTL2:case b.ChamferTR2:case b.ChamferBR2:case b.ChamferBL2:return"#e07838";case b.ChamferHeaderTL2:case b.ChamferHeaderTR2:case b.ChamferHeaderBR2:case b.ChamferHeaderBL2:return"#e07838";case b.HalfDiagTL:case b.HalfDiagTR:case b.HalfDiagBR:case b.HalfDiagBL:return"#a050c0";case b.WedgeHalfL:case b.WedgeHalfR:return"#5fa040";case b.WedgeHalfHeaderF:case b.WedgeHalfHeaderB:return"#3080a8";case b.WedgeMidL:case b.WedgeMidR:return"#70b850";case b.WedgeMidHeaderF:case b.WedgeMidHeaderB:return"#4098c8";case b.Hole:return"#19120c";case b.VerticalStretcher:return"#5aab58";case b.Grate:return"#3a3a3a";case b.Slab:return"#1a1a1a";default:return"transparent"}}function ws(n){return n?"#444":"#321a08"}function _c(n,e,t,i){var s,r;for(const a of Og(n)){const[o,l]=bt(a,n.doors,n.boxes);for(let h=0;h<o;h++)for(let c=0;c<l;c++){const u=t-h,d=i-c;if(u>=0&&d>=0&&u<n.cols&&d<n.depths&&((r=(s=n.rows[e])==null?void 0:s[u])==null?void 0:r[d])===a)return[u,d]}}return null}function fl(n,e,t,i,s,r,a){const o=n+.5,l=e+.5;return s==="TL"?o/r+l/a<=1:s==="TR"?(t-o)/r+l/a<=1:s==="BR"?(t-o)/r+(i-l)/a<=1:o/r+(i-l)/a<=1}function Or(n,e,t,i,s){var u,d;if(e<0||e>=n.rows.length||t<0||i<0||t>=n.cols||i>=n.depths)return;const[r,a]=bt(s,n.doors,n.boxes),o=Ns(s)?zi(s):null,[l,h]=o?ki(s,r,a):[0,0],c=new Set;for(let f=0;f<r;f++)for(let _=0;_<a;_++){const S=t+f,p=i+_;if(S>=n.cols||p>=n.depths||o&&fl(f,_,r,a,o,l,h))continue;const m=_c(n,e,S,p);if(m){const v=`${m[0]},${m[1]}`;if(!c.has(v)){const g=(d=(u=n.rows[e])==null?void 0:u[m[0]])==null?void 0:d[m[1]];if(o&&g&&Ns(g)){const[y,L]=bt(g,n.doors,n.boxes),[C,R]=ki(g,y,L);if(fl(S-m[0],p-m[1],y,L,zi(g),C,R)){c.add(v);continue}}kn(n,e,m[0],m[1],b.Empty),c.add(v)}}}kn(n,e,t,i,s)}function pl(n,e,t,i,s){if(Or(n,e,t,i,s),En(s)){const r=n.doors.find(a=>a.id===yi(s));if(r)for(let a=1;a<r.heightRows;a++)Or(n,e+a,t,i,s)}if(Ei(s)){const r=n.boxes.find(a=>a.id===Ti(s));if(r){for(;n.rows.length<e+r.heightRows;)Tl(n);for(let a=1;a<r.heightRows;a++)Or(n,e+a,t,i,s)}}}function Hg(n,e,t,i){var a,o,l,h,c,u;const s=_c(n,e,t,i);if(!s)return;const r=(o=(a=n.rows[e])==null?void 0:a[s[0]])==null?void 0:o[s[1]];if(!(!r||r===b.Empty)){if(kn(n,e,s[0],s[1],b.Empty),En(r)){const d=n.doors.find(f=>f.id===yi(r));if(d)for(let f=1;f<d.heightRows;f++){const _=e+f;_<n.rows.length&&((h=(l=n.rows[_])==null?void 0:l[s[0]])==null?void 0:h[s[1]])===r&&kn(n,_,s[0],s[1],b.Empty)}}if(Ei(r)){const d=n.boxes.find(f=>f.id===Ti(r));if(d)for(let f=1;f<d.heightRows;f++){const _=e+f;_<n.rows.length&&((u=(c=n.rows[_])==null?void 0:c[s[0]])==null?void 0:u[s[1]])===r&&kn(n,_,s[0],s[1],b.Empty)}}}}function ml(n,e,t,i,s,r){n.font="8px monospace",n.fillStyle="#7a6a50",n.textAlign="center";for(let a=0;a<i;a+=4)n.fillText(String(a/4+1),e+a*$e+r+$e*2,t-2);n.fillStyle="#4a6a7a",n.textAlign="right";for(let a=0;a<s;a+=2)n.fillText(String(a/2+1),e-3,t+a*$e+$e+3);n.textAlign="left"}function zg(n,e,t,i,s){const r=i*$e,a=s*$e;n.fillStyle="#1e1710",n.fillRect(e,t,r,a);for(let o=1;o<i;o++){const l=e+o*$e;n.beginPath(),n.moveTo(l,t),n.lineTo(l,t+a),o%4===0?(n.strokeStyle="rgba(108,84,50,0.75)",n.lineWidth=1):(n.strokeStyle="rgba(82,64,38,0.35)",n.lineWidth=.5),n.stroke()}for(let o=1;o<s;o++){const l=t+o*$e;n.beginPath(),n.moveTo(e,l),n.lineTo(e+r,l),o%2===0?(n.strokeStyle="rgba(108,84,50,0.75)",n.lineWidth=1):(n.strokeStyle="rgba(82,64,38,0.35)",n.lineWidth=.5),n.stroke()}if(s>=2){const o=t+Math.floor(s/2)*$e;n.setLineDash([5,5]),n.strokeStyle="rgba(215,178,65,0.85)",n.lineWidth=2,n.beginPath(),n.moveTo(e,o),n.lineTo(e+r,o),n.stroke(),n.setLineDash([])}n.strokeStyle="#735c38",n.lineWidth=1.5,n.strokeRect(e,t,r,a)}function gl(n,e,t,i,s,r,a=!1){var h,c,u,d;const o=e.rowOffsets[t]?$e*2:0,l=2;for(let f=0;f<e.cols;f++)for(let _=0;_<e.depths;_++){const S=(c=(h=e.rows[t])==null?void 0:h[f])==null?void 0:c[_];if(!S||S===b.Empty)continue;const[p,m]=bt(S,e.doors,e.boxes),v=i+f*$e+o+l,g=s+_*$e+l,y=p*$e-2*l,L=m*$e-2*l;if(n.fillStyle=Bg(S,r,e),Ns(S)){const C=zi(S),[R,U]=ki(S,p,m),Q=R*$e,x=U*$e;n.beginPath(),C==="TL"?(n.moveTo(v+Q,g),n.lineTo(v+y,g),n.lineTo(v+y,g+L),n.lineTo(v,g+L),n.lineTo(v,g+x)):C==="TR"?(n.moveTo(v,g),n.lineTo(v+y-Q,g),n.lineTo(v+y,g+x),n.lineTo(v+y,g+L),n.lineTo(v,g+L)):C==="BR"?(n.moveTo(v,g),n.lineTo(v+y,g),n.lineTo(v+y,g+L-x),n.lineTo(v+y-Q,g+L),n.lineTo(v,g+L)):(n.moveTo(v,g),n.lineTo(v+y,g),n.lineTo(v+y,g+L),n.lineTo(v+Q,g+L),n.lineTo(v,g+L-x)),n.closePath(),n.fill(),n.strokeStyle=ws(r),n.lineWidth=1.5,n.stroke()}else if(yl(S)){const C=El(S);n.beginPath(),n.roundRect(v,g,y,L,2),n.fill(),n.fillStyle=r?"rgba(255,255,255,0.18)":"rgba(255,255,255,0.30)",n.beginPath(),C==="L"?(n.moveTo(v,g),n.lineTo(v+y,g),n.lineTo(v+y,g+L)):C==="R"?(n.moveTo(v,g),n.lineTo(v,g+L),n.lineTo(v+y,g+L)):C==="F"?(n.moveTo(v,g+L),n.lineTo(v+y,g+L),n.lineTo(v+y,g)):C==="B"?(n.moveTo(v,g),n.lineTo(v+y,g),n.lineTo(v,g+L)):C==="MR"?(n.moveTo(v+y/2,g),n.lineTo(v+y,g),n.lineTo(v+y,g+L)):C==="ML"?(n.moveTo(v,g),n.lineTo(v+y/2,g),n.lineTo(v,g+L)):C==="MF"?(n.moveTo(v+y,g+L/2),n.lineTo(v+y,g),n.lineTo(v,g)):C==="MB"&&(n.moveTo(v,g+L/2),n.lineTo(v,g+L),n.lineTo(v+y,g+L)),n.closePath(),n.fill(),n.strokeStyle=r?"rgba(180,180,180,0.7)":"rgba(255,255,255,0.65)",n.lineWidth=1.5,n.setLineDash([3,2]),n.beginPath(),C==="L"?(n.moveTo(v,g+L),n.lineTo(v+y,g)):C==="R"?(n.moveTo(v,g),n.lineTo(v+y,g+L)):C==="F"?(n.moveTo(v+y,g+L),n.lineTo(v,g)):C==="B"?(n.moveTo(v,g),n.lineTo(v+y,g+L)):C==="MR"?(n.moveTo(v+y/2,g),n.lineTo(v+y,g+L)):C==="ML"?(n.moveTo(v,g),n.lineTo(v+y/2,g+L)):C==="MF"?(n.moveTo(v,g+L/2),n.lineTo(v+y,g)):C==="MB"&&(n.moveTo(v,g+L/2),n.lineTo(v+y,g+L)),n.stroke(),C==="MR"||C==="ML"?(n.beginPath(),n.moveTo(v+y/2,g),n.lineTo(v+y/2,g+L),n.stroke()):(C==="MF"||C==="MB")&&(n.beginPath(),n.moveTo(v,g+L/2),n.lineTo(v+y,g+L/2),n.stroke()),n.setLineDash([]),n.strokeStyle=ws(r),n.lineWidth=1.5,n.beginPath(),n.roundRect(v,g,y,L,2),n.stroke()}else if(Ml(S)){const C=Sl(S);n.beginPath(),C==="TL"?(n.moveTo(v,g),n.lineTo(v+y,g),n.lineTo(v,g+L)):C==="TR"?(n.moveTo(v,g),n.lineTo(v+y,g),n.lineTo(v+y,g+L)):C==="BR"?(n.moveTo(v+y,g),n.lineTo(v+y,g+L),n.lineTo(v,g+L)):(n.moveTo(v,g),n.lineTo(v+y,g+L),n.lineTo(v,g+L)),n.closePath(),n.fill(),n.strokeStyle=ws(r),n.lineWidth=1.5,n.stroke()}else n.beginPath(),n.roundRect(v,g,y,L,2),n.fill(),n.strokeStyle=ws(r),n.lineWidth=1.5,n.stroke();if(En(S)&&!r){const C=e.doors.find(R=>R.id===yi(S));if(C){if(n.save(),n.beginPath(),n.roundRect(v,g,y,L,2),n.clip(),C.brickBase==="Тычок"){for(let U=0;U<C.cols;U++){const Q=((u=C.shape[U])==null?void 0:u.some(E=>E))??!1,x=g+U*$e-l+1;n.fillStyle=Q?"#6aaabf":"#111a20",n.fillRect(v+l-1,x,y,$e-2)}n.fillStyle="rgba(255,200,80,0.6)";const R=C.offsetX==="right"?v+y-3:C.offsetX==="center"?v+y/2-1:v;n.fillRect(R,g,3,L)}else{for(let U=0;U<C.cols;U++){const Q=((d=C.shape[U])==null?void 0:d.some(E=>E))??!1,x=v+U*$e-l+1;n.fillStyle=Q?"#6aaabf":"#111a20",n.fillRect(x,g+l-1,$e-2,L)}n.fillStyle="rgba(255,200,80,0.6)";const R=C.offsetX==="right"?g+L-3:C.offsetX==="center"?g+L/2-1:g;n.fillRect(v,R,y,3)}n.restore()}}if(Ei(S)&&!r){const C=e.boxes.find(R=>R.id===Ti(S));C&&(n.save(),n.beginPath(),n.roundRect(v,g,y,L,2),n.clip(),n.fillStyle="rgba(0,0,0,0.22)",n.fillRect(v,g,y,L),n.fillStyle="rgba(255,255,255,0.85)",n.font="bold 9px sans-serif",n.textAlign="center",n.fillText(C.name,v+y/2,g+L/2+3,y-4),n.restore())}if(S===b.Grate&&!r){const R=L/5;n.save(),n.beginPath(),n.roundRect(v,g,y,L,2),n.clip(),n.strokeStyle="#888",n.lineWidth=2;for(let x=1;x<=4;x++){const E=g+R*x;n.beginPath(),n.moveTo(v+2,E),n.lineTo(v+y-2,E),n.stroke()}const U=7,Q=y/(U+1);n.lineWidth=1.5;for(let x=1;x<=U;x++){const E=v+Q*x;n.beginPath(),n.moveTo(E,g+2),n.lineTo(E,g+L-2),n.stroke()}n.restore()}}}function _l(n,e,t,i,s,r,a,o=!1){zg(n,i,s,e.cols,e.depths),n.save(),n.beginPath(),n.rect(i,s,e.cols*$e,e.depths*$e),n.clip(),a!==void 0&&(n.globalAlpha=.45,gl(n,e,a,i,s,!0),n.globalAlpha=1),gl(n,e,t,i,s,r,o),n.restore()}function kg(n,e,t,i,s,r,a){const o=s?$e*2:0,l=n-t-o,h=e-i;if(l<0||h<0)return null;const c=Math.floor(l/$e),u=Math.floor(h/$e);return c>=0&&c<r&&u>=0&&u<a?[c,u]:null}class Gg{constructor(e,t){this.selectedRow=0,this.selectedTool=b.FullStretcher,this.showMortar=!1,this.paintDown=!1,this.eraseDown=!1,this._painted=!1,this.currentOrigin={x:0,y:0},this.lastPlaced=null,this._dimColBox=null,this._dimDepBox=null,this.canvas=e,this.ctx=e.getContext("2d"),this.model=t,this.setupEvents(),this.setupKeyboard()}setModel(e){this.model=e}draw(){const e=this.model,t=e.cols,i=e.depths,s=t*$e,r=i*$e,a=this.selectedRow>0,o=window.devicePixelRatio||1,l=36;let h=8;h+=14+r+8+l;const c=li+s+12;(this.canvas.width!==Math.round(c*o)||this.canvas.height!==Math.round(h*o))&&(this.canvas.width=Math.round(c*o),this.canvas.height=Math.round(h*o),this.canvas.style.width=c+"px",this.canvas.style.height=h+"px",this.ctx.scale(o,o));const u=this.ctx;u.clearRect(0,0,c,h);const d=li;let f=8;u.fillStyle="#dcb070",u.font="bold 11px monospace";const _=e.rowOffsets[this.selectedRow]?" [½→]":"";u.fillText(`Ряд ${this.selectedRow+1}${_}`,4,f+11),f+=14;const S=e.rowOffsets[this.selectedRow]?$e*2:0;ml(u,d,f,t,i,S),this.currentOrigin={x:d,y:f};const p=a?this.selectedRow-1:void 0;_l(u,e,this.selectedRow,d,f,!1,p,this.showMortar),u.font="bold 10px monospace";const m=4,v=f+r-16,g=14,y=`X: ${t/4}`,L=`Y: ${i/2}`,C=u.measureText(y).width,R=u.measureText(L).width,U=6,Q=d+2,x=Q+m*2+C+U;u.fillStyle="rgba(20,14,8,0.72)",u.fillRect(Q,v,C+m*2,g),u.fillRect(x,v,R+m*2,g),u.fillStyle="#c8a860",u.textAlign="left",u.fillText(y,Q+m,v+g-3),u.fillText(L,x+m,v+g-3),this._dimColBox={x:Q,y:v,w:C+m*2,h:g},this._dimDepBox={x,y:v,w:R+m*2,h:g},f+=r+10,u.fillStyle="#5a5040",u.font="10px monospace",u.textAlign="left",u.fillText("← → ↑ ↓  следующий кирпич",li,f+11),u.fillText("ПКМ  стереть  |  Ctrl▶  Ложок ↔ Тычок",li,f+24)}setupEvents(){const e=this.canvas,t=(i,s)=>{var f;const r=e.getBoundingClientRect(),a=i.clientX-r.left,o=i.clientY-r.top,{x:l,y:h}=this.currentOrigin,c=kg(a,o,l,h,this.model.rowOffsets[this.selectedRow],this.model.cols,this.model.depths);if(!c)return;const[u,d]=c;s?Hg(this.model,this.selectedRow,u,d):(pl(this.model,this.selectedRow,u,d,this.selectedTool),this.lastPlaced={col:u,dep:d}),this._painted=!0,this.draw(),(f=this.onChange)==null||f.call(this)};e.addEventListener("mousedown",i=>{if(i.button===0){const s=e.getBoundingClientRect(),r=i.clientX-s.left,a=i.clientY-s.top;if(this._dimColBox&&r>=this._dimColBox.x&&r<=this._dimColBox.x+this._dimColBox.w&&a>=this._dimColBox.y&&a<=this._dimColBox.y+this._dimColBox.h){this._showDimInput("cols",i.clientX,i.clientY);return}if(this._dimDepBox&&r>=this._dimDepBox.x&&r<=this._dimDepBox.x+this._dimDepBox.w&&a>=this._dimDepBox.y&&a<=this._dimDepBox.y+this._dimDepBox.h){this._showDimInput("depths",i.clientX,i.clientY);return}this._painted=!1,this.paintDown=!0,t(i,!1)}i.button===2&&(this._painted=!1,this.eraseDown=!0,t(i,!0))}),e.addEventListener("mousemove",i=>{this.paintDown&&t(i,!1),this.eraseDown&&t(i,!0)}),e.addEventListener("mouseup",()=>{var i;this._painted&&((i=this.onPaintEnd)==null||i.call(this)),this._painted=!1,this.paintDown=!1,this.eraseDown=!1}),e.addEventListener("mouseleave",()=>{var i;this._painted&&((i=this.onPaintEnd)==null||i.call(this)),this._painted=!1,this.paintDown=!1,this.eraseDown=!1}),e.addEventListener("contextmenu",i=>i.preventDefault())}_showDimInput(e,t,i){const s=e==="cols"?this.model.cols/4:this.model.depths/2,r=e==="cols"?120:60,a=e==="cols"?2:1,o=document.createElement("input");o.type="number",o.value=String(s),o.min=String(a),o.max=String(r),Object.assign(o.style,{position:"fixed",left:t+"px",top:i-22+"px",width:"52px",padding:"2px 5px",background:"#1e1810",border:"1px solid #c8a860",borderRadius:"4px",color:"#c8a860",fontSize:"12px",fontFamily:"monospace",zIndex:"9999",outline:"none"}),document.body.appendChild(o),o.select();const l=()=>{var d;const h=Math.max(a,Math.min(r,parseInt(o.value)||s));if(o.remove(),h===s)return;const c=e==="cols"?h*4:this.model.cols,u=e==="depths"?h*2:this.model.depths;(d=this.onResize)==null||d.call(this,c,u)};o.addEventListener("blur",l),o.addEventListener("keydown",h=>{h.key==="Enter"&&o.blur(),h.key==="Escape"&&o.remove()})}exportAllRows(){const e=this.model,t=e.cols,i=e.depths,s=t*$e,r=i*$e,a=8,o=16,l=li+s+a,h=a+o+r+a;e.rows.forEach((c,u)=>{const d=document.createElement("canvas");d.width=l,d.height=h;const f=d.getContext("2d"),_=li,S=a+o,p=e.rowOffsets[u]?$e*2:0;f.fillStyle="#1a1410",f.fillRect(0,0,l,h),f.fillStyle="#dcb070",f.font="bold 11px monospace";const m=e.rowOffsets[u]?" [½→]":"";f.fillText(`Ряд ${u+1}${m}`,4,a+11),ml(f,_,S,t,i,p),_l(f,e,u,_,S,!1,u>0?u-1:void 0),d.toBlob(v=>{if(!v)return;const g=document.createElement("a");g.href=URL.createObjectURL(v),g.download=`row_${String(u+1).padStart(3,"0")}.png`,setTimeout(()=>{document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(g.href)},u*120)})})}setupKeyboard(){const e={ArrowRight:[1,0],ArrowLeft:[-1,0],ArrowDown:[0,1],ArrowUp:[0,-1]};window.addEventListener("keydown",t=>{var l,h;if(document.activeElement instanceof HTMLInputElement)return;if(t.key==="Control"&&t.location===2){const c=this.selectedTool===b.FullStretcher?b.FullHeader:b.FullStretcher;this.selectedTool=c,(l=this.onToolChange)==null||l.call(this,c);return}const i=e[t.key];if(!i)return;t.preventDefault();const[s,r]=bt(this.selectedTool,this.model.doors,this.model.boxes);let a,o;this.lastPlaced?(a=this.lastPlaced.col+i[0]*s,o=this.lastPlaced.dep+i[1]*r):(a=i[0]<0?this.model.cols-s:0,o=i[1]<0?this.model.depths-r:0),!(a<0||o<0||a>=this.model.cols||o>=this.model.depths)&&(pl(this.model,this.selectedRow,a,o,this.selectedTool),this.lastPlaced={col:a,dep:o},this.draw(),(h=this.onChange)==null||h.call(this))})}}const Un=18,Nn=24;class Vg{constructor(e){this.model=e,this.shape=[],this.cols=4,this.heightRows=3,this.depth=2,this.brickBase="Ложок",this.offsetX="left",this.painting=!1,this.paintValue=!0,this.doorCounter=1,this.modal=document.getElementById("door-modal"),this.canvas=document.getElementById("door-editor-canvas"),this.ctx=this.canvas.getContext("2d"),this.initShape(),this.bindEvents()}open(){this.refreshDoorList(),this.modal.style.display="flex",this.resizeCanvas(),this.drawCanvas()}close(){this.modal.style.display="none"}initShape(){this.shape=Array.from({length:this.cols},()=>Array.from({length:this.heightRows},()=>!0))}resizeShape(e,t){const i=this.shape;this.cols=e,this.heightRows=t,this.shape=Array.from({length:e},(s,r)=>Array.from({length:t},(a,o)=>{var l;return((l=i[r])==null?void 0:l[o])??!0}))}resizeCanvas(){const e=this.cols*Un+1,t=this.heightRows*Nn+1;this.canvas.width=e,this.canvas.height=t,this.canvas.style.width=e+"px",this.canvas.style.height=t+"px"}drawCanvas(){const{ctx:e,cols:t,heightRows:i}=this;e.clearRect(0,0,this.canvas.width,this.canvas.height);for(let s=0;s<t;s++)for(let r=0;r<i;r++){const a=s*Un,o=r*Nn;e.fillStyle=this.shape[s][r]?"#6aaabf":"#1a1410",e.fillRect(a+1,o+1,Un-1,Nn-1)}e.strokeStyle="#3a3020",e.lineWidth=1;for(let s=0;s<=t;s++)e.beginPath(),e.moveTo(s*Un+.5,0),e.lineTo(s*Un+.5,i*Nn),e.stroke();for(let s=0;s<=i;s++)e.beginPath(),e.moveTo(0,s*Nn+.5),e.lineTo(t*Un,s*Nn+.5),e.stroke()}cellAt(e){const t=this.canvas.getBoundingClientRect();return[Math.floor((e.clientX-t.left)/Un),Math.floor((e.clientY-t.top)/Nn)]}toggleCell(e,t,i){e<0||e>=this.cols||t<0||t>=this.heightRows||(this.shape[e][t]=i,this.drawCanvas())}bindEvents(){this.canvas.addEventListener("mousedown",s=>{var o;s.preventDefault();const[r,a]=this.cellAt(s);this.paintValue=s.button===2?!1:!((o=this.shape[r])!=null&&o[a]),this.painting=!0,this.toggleCell(r,a,this.paintValue)}),this.canvas.addEventListener("mousemove",s=>{if(!this.painting)return;const[r,a]=this.cellAt(s);this.toggleCell(r,a,this.paintValue)}),window.addEventListener("mouseup",()=>{this.painting=!1}),this.canvas.addEventListener("contextmenu",s=>s.preventDefault()),document.querySelectorAll(".door-base-btn").forEach(s=>{s.addEventListener("click",()=>{this.brickBase=s.dataset.base,this.depth=this.brickBase==="Ложок"?2:4,document.querySelectorAll(".door-base-btn").forEach(r=>r.classList.remove("active")),s.classList.add("active")})}),document.querySelectorAll(".door-offset-btn").forEach(s=>{s.addEventListener("click",()=>{this.offsetX=s.dataset.offset,document.querySelectorAll(".door-offset-btn").forEach(r=>r.classList.remove("active")),s.classList.add("active")})});const e=document.getElementById("door-inp-cols"),t=document.getElementById("door-inp-rows"),i=()=>{const s=Math.max(1,Math.min(16,parseInt(e.value)||this.cols)),r=Math.max(1,Math.min(12,parseInt(t.value)||this.heightRows));e.value=String(s),t.value=String(r),this.resizeShape(s,r),this.resizeCanvas(),this.drawCanvas()};document.getElementById("door-btn-resize").addEventListener("click",i),e.addEventListener("input",i),t.addEventListener("input",i),document.getElementById("door-btn-clear").addEventListener("click",()=>{this.initShape(),this.drawCanvas()}),document.getElementById("door-btn-create").addEventListener("click",()=>{var l;const s=document.getElementById("door-inp-name"),r=s.value.trim()||`Дверца ${this.doorCounter}`,a=`d${Date.now()}`,o={id:a,name:r,cols:this.cols,heightRows:this.heightRows,depth:this.depth,brickBase:this.brickBase,offsetX:this.offsetX,shape:this.shape.map(h=>[...h])};this.model.doors.push(o),this.doorCounter++,s.value=`Дверца ${this.doorCounter}`,this.refreshDoorList(),(l=this.onDoorCreated)==null||l.call(this,Tc(a))}),document.getElementById("door-btn-close").addEventListener("click",()=>this.close()),this.modal.addEventListener("click",s=>{s.target===this.modal&&this.close()})}refreshDoorList(){const e=document.getElementById("door-list");if(this.model.doors.length===0){e.innerHTML='<div style="color:#6a6050;font-size:11px;padding:4px;">Нет созданных дверец</div>';return}e.innerHTML=this.model.doors.map(t=>`
      <div class="door-list-item">
        <span>${t.name} &nbsp;<span style="color:#6a6050;font-size:10px;">${t.brickBase} · ${t.cols}×${t.heightRows}р · ${t.offsetX==="left"?"←":"→"}</span></span>
        <div style="display:flex;gap:4px;">
          <button class="door-select-btn" data-bt="door:${t.id}">Выбрать</button>
          <button class="door-delete-btn" data-id="${t.id}" style="background:#4a1010;border-color:#803030;color:#d07070;">✕</button>
        </div>
      </div>
    `).join(""),e.querySelectorAll(".door-select-btn").forEach(t=>{t.addEventListener("click",()=>{var i;(i=this.onDoorCreated)==null||i.call(this,t.dataset.bt),this.close()})}),e.querySelectorAll(".door-delete-btn").forEach(t=>{t.addEventListener("click",()=>{var r;const i=t.dataset.id,s=`door:${i}`;for(const a of this.model.rows)for(const o of a)for(let l=0;l<o.length;l++)o[l]===s&&(o[l]="Empty");this.model.doors=this.model.doors.filter(a=>a.id!==i),this.refreshDoorList(),(r=this.onDoorCreated)==null||r.call(this,"")})})}}class Wg{constructor(e){this.model=e,this.boxCounter=1,this.modal=document.getElementById("box-modal"),this.bindEvents()}setModel(e){this.model=e}open(){this.refreshBoxList(),this.modal.style.display="flex"}close(){this.modal.style.display="none"}bindEvents(){document.querySelectorAll(".box-color-swatch").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".box-color-swatch").forEach(s=>s.classList.remove("active")),t.classList.add("active");const i=document.getElementById("box-inp-color");i.value=t.dataset.color})}),document.getElementById("box-inp-color").addEventListener("input",()=>{document.querySelectorAll(".box-color-swatch").forEach(t=>t.classList.remove("active"))}),document.getElementById("box-btn-create").addEventListener("click",()=>{var h;const t=document.getElementById("box-inp-name").value.trim()||`Объект ${this.boxCounter}`,i=Math.max(1,Math.min(120,parseInt(document.getElementById("box-inp-cols").value)||4)),s=Math.max(1,Math.min(60,parseInt(document.getElementById("box-inp-depths").value)||4)),r=Math.max(1,Math.min(40,parseInt(document.getElementById("box-inp-rows").value)||3)),a=document.getElementById("box-inp-color").value||"#c87840",o=`bx${Date.now()}`,l={id:o,name:t,cols:i,depths:s,heightRows:r,color:a};this.model.boxes.push(l),this.boxCounter++,document.getElementById("box-inp-name").value=`Объект ${this.boxCounter}`,this.refreshBoxList(),(h=this.onBoxCreated)==null||h.call(this,Ac(o))}),document.getElementById("box-btn-close").addEventListener("click",()=>this.close()),this.modal.addEventListener("click",t=>{t.target===this.modal&&this.close()})}refreshBoxList(){const e=document.getElementById("box-list");if(this.model.boxes.length===0){e.innerHTML='<div style="color:#6a6050;font-size:11px;padding:4px;">Нет созданных объектов</div>';return}e.innerHTML=this.model.boxes.map(t=>`
      <div class="box-list-item">
        <span class="box-color-dot" style="background:${t.color};"></span>
        <span>${t.name} &nbsp;<span style="color:#6a6050;font-size:10px;">${t.cols}×${t.depths} яч · ${t.heightRows} р.</span></span>
        <div style="display:flex;gap:4px;">
          <button class="box-select-btn" data-bt="box:${t.id}">Выбрать</button>
          <button class="box-delete-btn" data-id="${t.id}" style="background:#4a1010;border-color:#803030;color:#d07070;">✕</button>
        </div>
      </div>
    `).join(""),e.querySelectorAll(".box-select-btn").forEach(t=>{t.addEventListener("click",()=>{var i;(i=this.onBoxCreated)==null||i.call(this,t.dataset.bt),this.close()})}),e.querySelectorAll(".box-delete-btn").forEach(t=>{t.addEventListener("click",()=>{var r;const i=t.dataset.id,s=`box:${i}`;for(const a of this.model.rows)for(const o of a)for(let l=0;l<o.length;l++)o[l]===s&&(o[l]="Empty");this.model.boxes=this.model.boxes.filter(a=>a.id!==i),this.refreshBoxList(),(r=this.onBoxCreated)==null||r.call(this,"")})})}}const vl={[b.Empty]:"Нет",[b.FullStretcher]:"Ложок",[b.FullHeader]:"Тычок",[b.ThreeQuarter]:"3/4 Ложок",[b.ThreeQuarterHeader]:"3/4 Тычок",[b.Quarter]:"1/4 Ложок",[b.QuarterHeader]:"1/4 Тычок",[b.Half]:"1/2",[b.HalfLong]:"1/2 Ложок вдоль",[b.HalfLongHeader]:"1/2 Тычок вдоль",[b.ChamferTL]:"Срез ↖ Ложок",[b.ChamferTR]:"Срез ↗ Ложок",[b.ChamferBR]:"Срез ↘ Ложок",[b.ChamferBL]:"Срез ↙ Ложок",[b.ChamferHeaderTL]:"Срез ↖ Тычок",[b.ChamferHeaderTR]:"Срез ↗ Тычок",[b.ChamferHeaderBR]:"Срез ↘ Тычок",[b.ChamferHeaderBL]:"Срез ↙ Тычок",[b.ChamferTL2]:"Срез½ ↖ Ложок",[b.ChamferTR2]:"Срез½ ↗ Ложок",[b.ChamferBR2]:"Срез½ ↘ Ложок",[b.ChamferBL2]:"Срез½ ↙ Ложок",[b.ChamferHeaderTL2]:"Срез½ ↖ Тычок",[b.ChamferHeaderTR2]:"Срез½ ↗ Тычок",[b.ChamferHeaderBR2]:"Срез½ ↘ Тычок",[b.ChamferHeaderBL2]:"Срез½ ↙ Тычок",[b.WedgeL]:"Клин Лж →",[b.WedgeR]:"Клин Лж ←",[b.WedgeHeaderF]:"Клин Тч ↓",[b.WedgeHeaderB]:"Клин Тч ↑",[b.WedgeHalfL]:"Клин½ Лж →",[b.WedgeHalfR]:"Клин½ Лж ←",[b.WedgeHalfHeaderF]:"Клин½ Тч ↓",[b.WedgeHalfHeaderB]:"Клин½ Тч ↑",[b.HalfDiagTL]:"Диаг ↖",[b.HalfDiagTR]:"Диаг ↗",[b.HalfDiagBR]:"Диаг ↘",[b.HalfDiagBL]:"Диаг ↙",[b.WedgeMidR]:"Клин½→ Лж",[b.WedgeMidL]:"Клин←½ Лж",[b.WedgeMidHeaderF]:"Клин½↓ Тч",[b.WedgeMidHeaderB]:"Клин↑½ Тч",[b.Hole]:"Отверстие",[b.VerticalStretcher]:"На ребро",[b.Grate]:"Решетка",[b.Slab]:"Плита"};class Xg{constructor(){this.history=[],this.historyPtr=-1,this._histLocked=!1,this.selectedRow=0,this.selectedTool=b.FullStretcher,this.selectedBond=xl.Chain,this.showMortar=!1,this.sliceRow=-1,this.sliceCol=-1,this.selectedGroupId=null,this.countsScope="all",this.GROUP_COLORS=["#e05540","#e09030","#50a840","#4090d0","#9040c0","#40b0b0","#d040a0"],this.model=ta(60,30),this.renderer3d=new Ng(document.getElementById("viewport")),this.gridEditor=new Gg(document.getElementById("grid-canvas"),this.model),this.gridEditor.selectedRow=this.selectedRow,this.gridEditor.selectedTool=this.selectedTool,this.gridEditor.onChange=()=>{this.refresh3d(),this.refreshCounts(),this.refreshStatus(),this.refreshRowList()},this.gridEditor.onPaintEnd=()=>{this.pushHistory()},this.gridEditor.onToolChange=e=>{this.selectTool(e)},this.gridEditor.onResize=(e,t)=>{Qs(this.model,e,t);const i=document.getElementById("inp-cols"),s=document.getElementById("inp-depths");i&&(i.value=String(e/4)),s&&(s.value=String(t/2)),this.pushHistory(),this.refreshAll()},this.doorEditor=new Vg(this.model),this.doorEditor.onDoorCreated=e=>{e&&this.selectTool(e),this.refreshDoorButtons(),this.refreshAll()},this.boxEditor=new Wg(this.model),this.boxEditor.onBoxCreated=e=>{e&&this.selectTool(e),this.refreshBoxButtons(),this.refreshAll()},this.renderer3d.bindControls(),this.bindUI(),this.addBrickIcons(),this.refreshAll(),this.pushHistory(),window.addEventListener("keydown",e=>{e.ctrlKey&&!e.shiftKey&&e.key==="z"&&(e.preventDefault(),this.undo()),e.ctrlKey&&(e.key==="y"||e.shiftKey&&e.key==="z")&&(e.preventDefault(),this.redo())})}addBrickIcons(){const t={[b.FullStretcher]:"#d27846",[b.FullHeader]:"#4688d2",[b.ThreeQuarter]:"#be6b41",[b.ThreeQuarterHeader]:"#3a7ac2",[b.Quarter]:"#b05a30",[b.QuarterHeader]:"#2a68b8",[b.Half]:"#a85a32",[b.HalfLong]:"#c87850",[b.HalfLongHeader]:"#5090d0",[b.ChamferTL]:"#e07838",[b.ChamferTR]:"#e07838",[b.ChamferBR]:"#e07838",[b.ChamferBL]:"#e07838",[b.ChamferHeaderTL]:"#e07838",[b.ChamferHeaderTR]:"#e07838",[b.ChamferHeaderBR]:"#e07838",[b.ChamferHeaderBL]:"#e07838",[b.ChamferTL2]:"#e07838",[b.ChamferTR2]:"#e07838",[b.ChamferBR2]:"#e07838",[b.ChamferBL2]:"#e07838",[b.ChamferHeaderTL2]:"#e07838",[b.ChamferHeaderTR2]:"#e07838",[b.ChamferHeaderBR2]:"#e07838",[b.ChamferHeaderBL2]:"#e07838",[b.WedgeL]:"#5fa040",[b.WedgeR]:"#5fa040",[b.WedgeHeaderF]:"#3080a8",[b.WedgeHeaderB]:"#3080a8",[b.WedgeHalfL]:"#5fa040",[b.WedgeHalfR]:"#5fa040",[b.WedgeHalfHeaderF]:"#3080a8",[b.WedgeHalfHeaderB]:"#3080a8",[b.HalfDiagTL]:"#a050c0",[b.HalfDiagTR]:"#a050c0",[b.HalfDiagBR]:"#a050c0",[b.HalfDiagBL]:"#a050c0",[b.WedgeMidR]:"#70b850",[b.WedgeMidL]:"#70b850",[b.WedgeMidHeaderF]:"#4098c8",[b.WedgeMidHeaderB]:"#4098c8",[b.Hole]:"#19120c",[b.VerticalStretcher]:"#5aab58",[b.Grate]:"#3a3a3a",[b.Slab]:"#1a1a1a"};document.querySelectorAll("#tool-panel .btn-tool[data-tool]").forEach(i=>{const s=i.dataset.tool;if(En(s)||!(s in t))return;const[r,a]=bt(s),o=r*6,l=a*6,h=document.createElement("canvas");h.width=o,h.height=l,h.style.display="block",h.style.imageRendering="pixelated",h.style.flexShrink="0";const c=h.getContext("2d"),u=t[s];if(s.startsWith("Chamfer")){const d=zi(s),[f,_]=ki(s,r,a),S=f*6,p=_*6;c.fillStyle=u,c.beginPath(),d==="TL"?(c.moveTo(S,0),c.lineTo(o,0),c.lineTo(o,l),c.lineTo(0,l),c.lineTo(0,p)):d==="TR"?(c.moveTo(0,0),c.lineTo(o-S,0),c.lineTo(o,p),c.lineTo(o,l),c.lineTo(0,l)):d==="BR"?(c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,l-p),c.lineTo(o-S,l),c.lineTo(0,l)):(c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,l),c.lineTo(S,l),c.lineTo(0,l-p)),c.closePath(),c.fill(),c.strokeStyle="#321a08",c.lineWidth=1,c.stroke(),i.appendChild(h);return}if(s.startsWith("Wedge")){c.fillStyle=u,c.beginPath(),s==="WedgeL"||s==="WedgeHalfL"?(c.moveTo(0,l),c.lineTo(o,l),c.lineTo(0,0)):s==="WedgeR"||s==="WedgeHalfR"?(c.moveTo(0,l),c.lineTo(o,l),c.lineTo(o,0)):s==="WedgeHeaderF"||s==="WedgeHalfHeaderF"?(c.moveTo(0,l),c.lineTo(o,l),c.lineTo(0,0)):s==="WedgeHeaderB"||s==="WedgeHalfHeaderB"?(c.moveTo(0,l),c.lineTo(o,l),c.lineTo(o,0)):s==="WedgeMidR"?(c.moveTo(0,0),c.lineTo(o/2,0),c.lineTo(o,l),c.lineTo(0,l)):s==="WedgeMidL"?(c.moveTo(o/2,0),c.lineTo(o,0),c.lineTo(o,l),c.lineTo(0,l)):s==="WedgeMidHeaderF"?(c.moveTo(0,l/2),c.lineTo(o,0),c.lineTo(o,l),c.lineTo(0,l)):(c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,l/2),c.lineTo(0,l)),c.closePath(),c.fill(),c.strokeStyle="#0a2a12",c.lineWidth=1,c.stroke(),i.appendChild(h);return}if(s.startsWith("HalfDiag")){const d=s.slice(8);c.fillStyle=u,c.beginPath(),d==="TL"?(c.moveTo(0,0),c.lineTo(o,0),c.lineTo(0,l)):d==="TR"?(c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,l)):d==="BR"?(c.moveTo(o,0),c.lineTo(o,l),c.lineTo(0,l)):(c.moveTo(0,0),c.lineTo(o,l),c.lineTo(0,l)),c.closePath(),c.fill(),c.strokeStyle="#4a1a60",c.lineWidth=1,c.stroke(),i.appendChild(h);return}if(c.fillStyle=u,c.fillRect(0,0,o,l),c.strokeStyle="#321a08",c.lineWidth=1,c.strokeRect(.5,.5,o-1,l-1),s===b.Hole&&(c.strokeStyle="#333",c.lineWidth=1,c.beginPath(),c.moveTo(2,2),c.lineTo(o-2,l-2),c.stroke(),c.beginPath(),c.moveTo(o-2,2),c.lineTo(2,l-2),c.stroke()),s===b.Grate){c.strokeStyle="#888",c.lineWidth=1;for(let d=1;d<=3;d++){const f=l*d/4;c.beginPath(),c.moveTo(1,f),c.lineTo(o-1,f),c.stroke()}for(let d=1;d<=6;d++){const f=o*d/7;c.beginPath(),c.moveTo(f,1),c.lineTo(f,l-1),c.stroke()}}s===b.VerticalStretcher&&(c.strokeStyle="rgba(0,0,0,0.35)",c.setLineDash([2,2]),c.lineWidth=1,c.beginPath(),c.moveTo(0,l/2),c.lineTo(o,l/2),c.stroke(),c.setLineDash([])),i.appendChild(h)})}refreshAll(){var e;this.refresh3d(),this.refreshGrid(),this.refreshGroupBar(),this.refreshRowList(),this.refreshStatus(),this.refreshCounts(),(e=this._resetSlice)==null||e.call(this)}refresh3d(){this.renderer3d.update(this.model,this.selectedRow,this.showMortar,this.sliceRow,this.sliceCol)}pushHistory(){this._histLocked||(this.history=this.history.slice(0,this.historyPtr+1),this.history.push(ji(this.model)),this.history.length>60&&this.history.shift(),this.historyPtr=this.history.length-1,this._updateUndoButtons())}_restoreFromHistory(e){this._histLocked=!0,this.model=na(e),this.gridEditor.setModel(this.model),this.doorEditor.model=this.model,this.boxEditor.setModel(this.model),this.refreshDoorButtons(),this.refreshBoxButtons(),this.refreshAll(),this._histLocked=!1,this._updateUndoButtons()}undo(){this.historyPtr<=0||(this.historyPtr--,this._restoreFromHistory(this.history[this.historyPtr]))}redo(){this.historyPtr>=this.history.length-1||(this.historyPtr++,this._restoreFromHistory(this.history[this.historyPtr]))}_updateUndoButtons(){const e=document.getElementById("btn-undo"),t=document.getElementById("btn-redo");e&&(e.disabled=this.historyPtr<=0),t&&(t.disabled=this.historyPtr>=this.history.length-1)}selectTool(e){var t;this.selectedTool=e,this.gridEditor.selectedTool=e,document.querySelectorAll(".btn-tool[data-tool]").forEach(i=>i.classList.remove("active")),(t=document.querySelector(`.btn-tool[data-tool="${e}"]`))==null||t.classList.add("active"),this.refreshStatus()}refreshDoorButtons(){const e=document.getElementById("door-buttons");e.innerHTML=this.model.doors.map(t=>`
      <button class="btn-tool${this.selectedTool===`door:${t.id}`?" active":""}"
              data-tool="door:${t.id}">${t.name}</button>
    `).join(""),e.querySelectorAll(".btn-tool[data-tool]").forEach(t=>{t.addEventListener("click",()=>{this.selectTool(t.dataset.tool)})})}refreshBoxButtons(){const e=document.getElementById("box-buttons");e.innerHTML=this.model.boxes.map(t=>`
      <button class="btn-tool${this.selectedTool===`box:${t.id}`?" active":""}"
              data-tool="box:${t.id}"
              style="border-left: 4px solid ${t.color};">${t.name}</button>
    `).join(""),e.querySelectorAll(".btn-tool[data-tool]").forEach(t=>{t.addEventListener("click",()=>{this.selectTool(t.dataset.tool)})})}refreshGrid(){this.gridEditor.showMortar=this.showMortar,this.gridEditor.draw()}refreshGroupBar(){const e=document.getElementById("group-bar");if(!e)return;e.innerHTML="";const t=(s,r,a,o,l)=>{const h=document.createElement("div");h.className="group-chip"+(r?" g-active":""),a&&(h.style.borderLeftColor=a);const c=document.createElement("span");if(c.className="gc-name",c.textContent=s,h.appendChild(c),l){const u=document.createElement("button");u.className="gc-del",u.textContent="×",u.addEventListener("click",d=>{d.stopPropagation(),l()}),h.appendChild(u)}return h.addEventListener("click",o),h};e.appendChild(t("Все",this.selectedGroupId===null,null,()=>{this.selectedGroupId=null,this.countsScope="all",this.refreshGroupBar(),this.refreshRowList(),this.refreshCounts()}));for(const s of this.model.rowGroups)e.appendChild(t(s.name,this.selectedGroupId===s.id,s.color,()=>{this.selectedGroupId=s.id,this.countsScope="group",this.refreshGroupBar(),this.refreshRowList(),this.refreshCounts()},()=>{this.model.rowGroupIds=this.model.rowGroupIds.map(r=>r===s.id?null:r),this.model.rowGroups=this.model.rowGroups.filter(r=>r.id!==s.id),this.selectedGroupId===s.id&&(this.selectedGroupId=null,this.countsScope="all"),this.pushHistory(),this.refreshGroupBar(),this.refreshRowList(),this.refreshCounts()}));const i=document.createElement("div");i.className="group-chip-add",i.textContent="+ Группа",i.title="Создать группу",i.addEventListener("click",()=>{const s=prompt("Название группы:");if(!(s!=null&&s.trim()))return;const r=this.GROUP_COLORS[this.model.rowGroups.length%this.GROUP_COLORS.length],a=`g${Date.now()}`;this.model.rowGroups.push({id:a,name:s.trim(),color:r}),this.selectedGroupId=a,this.countsScope="group",this.pushHistory(),this.refreshGroupBar(),this.refreshRowList(),this.refreshCounts()}),e.appendChild(i)}refreshCounts(){var h;const e={[b.FullStretcher]:"Ложок",[b.FullHeader]:"Тычок",[b.ThreeQuarter]:"3/4 Ложок",[b.ThreeQuarterHeader]:"3/4 Тычок",[b.Quarter]:"1/4 Ложок",[b.QuarterHeader]:"1/4 Тычок",[b.Half]:"1/2",[b.HalfLong]:"1/2 Ложок вдоль",[b.HalfLongHeader]:"1/2 Тычок вдоль",[b.ChamferTL]:"Срез ↖ Ложок",[b.ChamferTR]:"Срез ↗ Ложок",[b.ChamferBR]:"Срез ↘ Ложок",[b.ChamferBL]:"Срез ↙ Ложок",[b.ChamferHeaderTL]:"Срез ↖ Тычок",[b.ChamferHeaderTR]:"Срез ↗ Тычок",[b.ChamferHeaderBR]:"Срез ↘ Тычок",[b.ChamferHeaderBL]:"Срез ↙ Тычок",[b.ChamferTL2]:"Срез½ ↖ Ложок",[b.ChamferTR2]:"Срез½ ↗ Ложок",[b.ChamferBR2]:"Срез½ ↘ Ложок",[b.ChamferBL2]:"Срез½ ↙ Ложок",[b.ChamferHeaderTL2]:"Срез½ ↖ Тычок",[b.ChamferHeaderTR2]:"Срез½ ↗ Тычок",[b.ChamferHeaderBR2]:"Срез½ ↘ Тычок",[b.ChamferHeaderBL2]:"Срез½ ↙ Тычок",[b.WedgeL]:"Клин Лж →",[b.WedgeR]:"Клин Лж ←",[b.WedgeHeaderF]:"Клин Тч ↓",[b.WedgeHeaderB]:"Клин Тч ↑",[b.WedgeHalfL]:"Клин½ Лж →",[b.WedgeHalfR]:"Клин½ Лж ←",[b.WedgeHalfHeaderF]:"Клин½ Тч ↓",[b.WedgeHalfHeaderB]:"Клин½ Тч ↑",[b.HalfDiagTL]:"Диаг ↖",[b.HalfDiagTR]:"Диаг ↗",[b.HalfDiagBR]:"Диаг ↘",[b.HalfDiagBL]:"Диаг ↙",[b.WedgeMidR]:"Клин½→ Лж",[b.WedgeMidL]:"Клин←½ Лж",[b.WedgeMidHeaderF]:"Клин½↓ Тч",[b.WedgeMidHeaderB]:"Клин↑½ Тч",[b.Hole]:"Отверстие",[b.VerticalStretcher]:"На ребро",[b.Grate]:"Решетка",[b.Slab]:"Плита"};for(const c of this.model.doors)e[`door:${c.id}`]=c.name;let t;this.countsScope==="row"?t=[this.selectedRow]:this.countsScope==="group"&&this.selectedGroupId!==null?t=this.model.rowGroupIds.map((c,u)=>c===this.selectedGroupId?u:-1).filter(c=>c>=0):t=this.model.rows.map((c,u)=>u);const i=(h=this.model.rowGroups.find(c=>c.id===this.selectedGroupId))==null?void 0:h.name,s=this.countsScope==="row"?` · Ряд ${this.selectedRow+1}`:this.countsScope==="group"?` · ${i??""}`:"",r=document.querySelector("#brick-counts-panel h3");r&&(r.textContent=`РАСХОД${s}`);const a={};let o=0;for(const c of t)for(const u of this.model.rows[c])for(const d of u)d!==b.Empty&&(a[d]=(a[d]??0)+1,o++);const l=document.getElementById("brick-counts");l.innerHTML=Object.keys(a).map(c=>`
        <div class="count-item">
          <span class="ct-label">${e[c]??c}</span>
          <span class="ct-val">${a[c]}</span>
        </div>`).join("")+(o?`<div class="count-total"><span>Итого</span><span>${o}</span></div>`:"")}refreshStatus(){const e=document.getElementById("status");let t=vl[this.selectedTool]??"";if(!t&&En(this.selectedTool)){const i=this.model.doors.find(s=>s.id===yi(this.selectedTool));t=(i==null?void 0:i.name)??"Дверца"}e.textContent=`Ряд: ${this.selectedRow+1}/${this.model.rows.length}  |  Кирпичей: ${wc(this.model)}  |  Инструмент: ${t}`}refreshRowList(){const e=document.getElementById("row-list");e.innerHTML="";for(let i=0;i<this.model.rows.length;i++){const r=this.model.rows[i].flat().some(f=>f===b.FullHeader)?"тыч":"лож",a=this.model.rowOffsets[i],o=this.model.rowHidden[i],l=this.model.rowGroupIds[i],h=this.model.rowGroups.find(f=>f.id===l),c=this.selectedGroupId!==null&&l===this.selectedGroupId,u=h?h.color:this.selectedGroupId!==null?"#2a2016":"#383028",d=document.createElement("div");d.className="row-item"+(i===this.selectedRow?" selected":"")+(o?" row-hidden":""),d.innerHTML=`
        <div class="row-group-dot ${c?"in-grp":""}" style="background:${u};${this.selectedGroupId!==null?"cursor:pointer;":""}"></div>
        <span>Ряд ${i+1}</span>
        <span class="badge">${r}</span>
        <button class="btn-offset ${a?"on":""}" data-row="${i}" title="Смещение на ½ кирпича">
          ${a?"½→":"0"}
        </button>
        <button class="btn-eye ${o?"hidden":""}" data-row="${i}" title="${o?"Показать ряд":"Скрыть ряд"}">
          ${o?"🙈":"👁"}
        </button>`,this.selectedGroupId!==null&&d.querySelector(".row-group-dot").addEventListener("click",f=>{f.stopPropagation(),this.model.rowGroupIds[i]=this.model.rowGroupIds[i]===this.selectedGroupId?null:this.selectedGroupId,this.pushHistory(),this.refreshRowList(),this.refreshCounts()}),d.querySelectorAll("span").forEach(f=>f.addEventListener("click",()=>{this.selectedRow=i,this.gridEditor.selectedRow=i,this.countsScope="row",this.refreshAll()})),d.querySelector(".btn-offset").addEventListener("click",f=>{f.stopPropagation(),this.model.rowOffsets[i]=!this.model.rowOffsets[i],this.refreshAll()}),d.querySelector(".btn-eye").addEventListener("click",f=>{f.stopPropagation(),this.model.rowHidden[i]=!this.model.rowHidden[i],this.refresh3d(),this.refreshRowList()}),e.appendChild(d)}const t=e.querySelector(".selected");t==null||t.scrollIntoView({block:"nearest"})}bindUI(){document.querySelectorAll(".btn-tool[data-tool]").forEach(v=>{v.addEventListener("click",()=>{this.selectTool(v.dataset.tool)})}),document.getElementById("btn-undo").addEventListener("click",()=>this.undo()),document.getElementById("btn-redo").addEventListener("click",()=>this.redo()),document.getElementById("btn-door-editor").addEventListener("click",()=>{this.doorEditor.open()}),document.getElementById("btn-box-editor").addEventListener("click",()=>{this.boxEditor.open()}),document.querySelectorAll(".btn-tool[data-bond]").forEach(v=>{v.addEventListener("click",()=>{this.selectedBond=v.dataset.bond,document.querySelectorAll(".btn-tool[data-bond]").forEach(g=>g.classList.remove("active")),v.classList.add("active")})}),document.getElementById("btn-fill").addEventListener("click",()=>{bc(this.model,this.selectedRow,this.selectedBond),this.pushHistory(),this.refreshAll()}),document.getElementById("btn-clear").addEventListener("click",()=>{Al(this.model,this.selectedRow),this.pushHistory(),this.refreshAll()});const e=document.getElementById("coord-modal"),t=e.querySelectorAll(".coord-axis-btn"),i=e.querySelectorAll(".coord-scope-btn"),s=document.getElementById("coord-group-row"),r=document.getElementById("coord-manual-row"),a=document.getElementById("coord-group-sel"),o=document.getElementById("coord-axis-label");let l="X",h="all";document.getElementById("btn-coord-calc").addEventListener("click",()=>{a.innerHTML="";for(const v of this.model.rowGroups){const g=document.createElement("option");g.value=v.id,g.textContent=v.name,a.appendChild(g)}e.style.display="flex"}),document.getElementById("coord-btn-close").addEventListener("click",()=>{e.style.display="none"}),e.addEventListener("click",v=>{v.target===e&&(e.style.display="none")}),t.forEach(v=>v.addEventListener("click",()=>{t.forEach(y=>y.classList.remove("active")),v.classList.add("active"),l=v.dataset.axis,o.textContent=`Позиция ${l}:`;const g=document.getElementById("coord-inp-pos");g.max=String(Math.floor(l==="X"?this.model.cols/4:this.model.depths/2))})),i.forEach(v=>v.addEventListener("click",()=>{i.forEach(g=>g.classList.remove("active")),v.classList.add("active"),h=v.dataset.scope,s.style.display=h==="group"?"flex":"none",r.style.display=h==="manual"?"flex":"none"})),document.getElementById("coord-btn-calc").addEventListener("click",()=>{const v=parseInt(document.getElementById("coord-inp-pos").value)-1,g=this.model;let y;if(h==="all")y=g.rows.map((B,F)=>F);else if(h==="group"){const B=a.value;y=g.rows.map((F,k)=>k).filter(F=>g.rowGroupIds[F]===B)}else{const B=document.getElementById("coord-inp-rows").value;y=[];for(const F of B.split(",")){const k=F.trim().split("-").map(q=>parseInt(q.trim())-1);if(k.length===2)for(let q=k[0];q<=k[1];q++)q>=0&&q<g.rows.length&&y.push(q);else k.length===1&&!isNaN(k[0])&&k[0]>=0&&k[0]<g.rows.length&&y.push(k[0])}}const L=new Map,C=l==="X"?v*4:v*2;for(const B of y)if(!(B<0||B>=g.rows.length))for(let F=0;F<g.cols;F++)for(let k=0;k<g.depths;k++){const q=g.rows[B][F][k];if(!q||q===b.Empty)continue;const[V,X]=bt(q,g.doors,g.boxes),W=l==="X"?F:k,pe=l==="X"?V:X;if(W!==(l==="X"?F:k)||C<W||C>=W+pe||l==="X"&&F!==Math.floor(F/V)*V||l==="Y"&&k!==Math.floor(k/X)*X)continue;L.has(q)||L.set(q,new Map);const fe=L.get(q);fe.set(B,(fe.get(B)??0)+1)}const R=document.getElementById("coord-result-body");R.innerHTML="";const U={...vl};for(const B of g.doors)U[`door:${B.id}`]=B.name;for(const B of g.boxes)U[`box:${B.id}`]=B.name;let Q=0;const x=new Map,E=new Map;for(const[B,F]of L){let k=0;const q=[];for(const[V,X]of F)k+=X,q.push(`Р${V+1}×${X}`);x.set(B,k),E.set(B,q),Q+=k}if(x.size===0){const B=document.createElement("tr");B.innerHTML='<td colspan="3" style="color:#6a6050;text-align:center;">Кирпичей не найдено</td>',R.appendChild(B)}else{for(const[F,k]of x){const q=document.createElement("tr");q.innerHTML=`<td>${U[F]??F}</td><td style="color:#8a8070;font-size:11px;">${E.get(F).join(", ")}</td><td>${k}</td>`,R.appendChild(q)}const B=document.createElement("tr");B.className="total-row",B.innerHTML=`<td>Итого</td><td></td><td>${Q}</td>`,R.appendChild(B)}document.getElementById("coord-result").style.display="block"});const c=document.getElementById("inp-cols"),u=document.getElementById("inp-depths");c.addEventListener("change",()=>{const v=Math.max(2,Math.min(120,parseInt(c.value)||20));c.value=String(v),Qs(this.model,v*4,this.model.depths),this.pushHistory(),this.refreshAll()}),u.addEventListener("change",()=>{const v=Math.max(1,Math.min(60,parseInt(u.value)||8));u.value=String(v),Qs(this.model,this.model.cols,v*2),this.pushHistory(),this.refreshAll()}),document.getElementById("btn-add-row").addEventListener("click",()=>{var g;Tl(this.model);const v=this.model.rows.length-1;this.selectedGroupId!==null&&(this.model.rowGroupIds[v]=this.selectedGroupId),this.selectedRow=v,this.gridEditor.selectedRow=this.selectedRow,this.pushHistory(),this.refreshAll(),(g=this._resetSlice)==null||g.call(this)}),document.getElementById("btn-export-png").addEventListener("click",()=>{this.gridEditor.exportAllRows()}),document.getElementById("btn-export-3d").addEventListener("click",()=>{this.renderer3d.exportPNG()}),(()=>{const v=document.getElementById("btn-chamfer-toggle"),g=24,y=12,L=6,C=document.createElement("canvas");C.width=g,C.height=y,C.style.display="block",C.style.margin="0 auto";const R=C.getContext("2d");R.fillStyle="#e07838",R.beginPath(),R.moveTo(L,0),R.lineTo(g,0),R.lineTo(g,y),R.lineTo(0,y),R.lineTo(0,L),R.closePath(),R.fill(),R.strokeStyle="#321a08",R.lineWidth=1,R.stroke(),v.style.display="flex",v.style.flexDirection="column",v.style.alignItems="center",v.style.gap="3px",v.appendChild(C)})(),document.getElementById("btn-chamfer-toggle").addEventListener("click",()=>{const v=document.getElementById("chamfer-panel"),g=v.style.display!=="none";v.style.display=g?"none":"block",document.getElementById("btn-chamfer-toggle").textContent=g?"Со срезом ▾":"Со срезом ▲"});const d=document.getElementById("slice-slider"),f=document.getElementById("slice-label"),_=()=>{const v=this.model.rows.length;d.max=String(v),d.value=String(v),f.textContent=`Y ${v}/${v}`,this.sliceRow=-1};d.addEventListener("input",()=>{const v=parseInt(d.value),g=this.model.rows.length;f.textContent=`Y ${v}/${g}`,this.sliceRow=v>=g?-1:v,this.refresh3d()});const S=document.getElementById("sliceX-slider"),p=document.getElementById("sliceX-label"),m=()=>{const v=this.model.cols;S.max=String(v),S.value=String(v),p.textContent=`X ${v}/${v}`,this.sliceCol=-1};S.addEventListener("input",()=>{const v=parseInt(S.value),g=this.model.cols;p.textContent=`X ${v}/${g}`,this.sliceCol=v>=g?-1:v,this.refresh3d()}),this._resetSlice=()=>{_(),m()},document.getElementById("chk-mortar").addEventListener("change",v=>{this.showMortar=v.target.checked,this.refreshAll()}),document.getElementById("btn-new").addEventListener("click",()=>{if(!confirm("Создать новый проект? Несохранённые изменения будут потеряны."))return;const v=this.model.cols,g=this.model.depths;this.model=ta(v,g),this.selectedRow=0,this.gridEditor.setModel(this.model),this.doorEditor.model=this.model,this.boxEditor.setModel(this.model),this.gridEditor.selectedRow=0,this.refreshDoorButtons(),this.refreshBoxButtons(),this.history=[ji(this.model)],this.historyPtr=0,this._updateUndoButtons(),this.refreshAll()}),document.getElementById("btn-save").addEventListener("click",async()=>{const v=ji(this.model);if(window.__TAURI_INTERNALS__){const{save:g}=await ea(async()=>{const{save:C}=await import("./index-C5JvI5sk.js");return{save:C}},__vite__mapDeps([0,1])),{invoke:y}=await ea(async()=>{const{invoke:C}=await import("./core-DV6XEvTN.js");return{invoke:C}},[]),L=await g({defaultPath:"furnace.json",filters:[{name:"JSON",extensions:["json"]}]});L&&await y("save_file",{path:L,content:v})}else{const g=new Blob([v],{type:"application/json"}),y=document.createElement("a");y.href=URL.createObjectURL(g),y.download="furnace.json",document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(y.href)}}),document.getElementById("btn-load").addEventListener("click",()=>{document.getElementById("file-input").click()}),document.getElementById("file-input").addEventListener("change",v=>{var y;const g=(y=v.target.files)==null?void 0:y[0];g&&g.text().then(L=>{this.model=na(L),this.gridEditor.setModel(this.model),this.doorEditor.model=this.model,this.boxEditor.setModel(this.model),this.selectedRow=0,this.gridEditor.selectedRow=0;const C=document.getElementById("inp-cols"),R=document.getElementById("inp-depths");C.value=String(Math.round(this.model.cols/4)),R.value=String(Math.round(this.model.depths/2)),this.refreshDoorButtons(),this.refreshBoxButtons(),this.refreshAll(),this.history=[ji(this.model)],this.historyPtr=0,this._updateUndoButtons()})})}}new Xg;
