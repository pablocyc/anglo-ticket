(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Yh={firebaseConfig:{apiKey:"AIzaSyBe9z4PstWKmm01BmsdFONZKM-_NmdnYuA",authDomain:"anglo-ticket.firebaseapp.com",projectId:"anglo-ticket",storageBucket:"anglo-ticket.appspot.com",messagingSenderId:"1017721602572",appId:"1:1017721602572:web:eae7f3103e1b4332c52429"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Jh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(f=64)),r.push(n[l],n[h],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Jh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Zh;const f=s<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const A=c<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Zh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tf=function(e){const t=Gu(e);return Hu.encodeByteArray(t,!0)},Ir=function(e){return tf(e).replace(/\./g,"")},ef=function(e){try{return Hu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=()=>nf().__FIREBASE_DEFAULTS__,sf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},of=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ef(e[1]);return t&&JSON.parse(t)},Ku=()=>{try{return rf()||sf()||of()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},af=e=>{var t,n;return(n=(t=Ku())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},uf=e=>{const t=af(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Wu=()=>{var e;return(e=Ku())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ir(JSON.stringify(n)),Ir(JSON.stringify(o)),a].join(".")}function hf(){try{return typeof indexedDB=="object"}catch{return!1}}function ff(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="FirebaseError";class Be extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=df,Object.setPrototypeOf(this,Be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qu.prototype.create)}}class Qu{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?pf(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Be(i,a,r)}}function pf(e,t){return e.replace(gf,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const gf=/\{\$([^}]+)}/g;function Zi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(ma(s)&&ma(o)){if(!Zi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ma(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){return e&&e._delegate?e._delegate:e}class En{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new cf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yf(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_f(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _f(e){return e===Qt?void 0:e}function yf(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(O||(O={}));const Ef={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Tf=O.INFO,wf={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Af=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=wf[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xu{constructor(t){this.name=t,this._logLevel=Tf,this._logHandler=Af,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ef[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const If=(e,t)=>t.some(n=>e instanceof n);let _a,ya;function Rf(){return _a||(_a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sf(){return ya||(ya=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yu=new WeakMap,ts=new WeakMap,Ju=new WeakMap,bi=new WeakMap,xs=new WeakMap;function bf(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Nt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Yu.set(n,e)}).catch(()=>{}),xs.set(t,e),t}function Pf(e){if(ts.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ts.set(e,t)}let es={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ts.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ju.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Of(e){es=e(es)}function Cf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Pi(this),t,...n);return Ju.set(r,t.sort?t.sort():[t]),Nt(r)}:Sf().includes(e)?function(...t){return e.apply(Pi(this),t),Nt(Yu.get(this))}:function(...t){return Nt(e.apply(Pi(this),t))}}function Df(e){return typeof e=="function"?Cf(e):(e instanceof IDBTransaction&&Pf(e),If(e,Rf())?new Proxy(e,es):e)}function Nt(e){if(e instanceof IDBRequest)return bf(e);if(bi.has(e))return bi.get(e);const t=Df(e);return t!==e&&(bi.set(e,t),xs.set(t,e)),t}const Pi=e=>xs.get(e);function Vf(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Nt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Nt(o.result),u.oldVersion,u.newVersion,Nt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xf=["get","getKey","getAll","getAllKeys","count"],kf=["put","add","delete","clear"],Oi=new Map;function va(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Oi.get(t))return Oi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=kf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xf.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Oi.set(t,s),s}Of(e=>({...e,get:(t,n,r)=>va(t,n)||e.get(t,n,r),has:(t,n)=>!!va(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nf(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ns="@firebase/app",Ea="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Xu("@firebase/app"),Mf="@firebase/app-compat",Lf="@firebase/analytics-compat",Ff="@firebase/analytics",Bf="@firebase/app-check-compat",Uf="@firebase/app-check",jf="@firebase/auth",qf="@firebase/auth-compat",zf="@firebase/database",Gf="@firebase/database-compat",Hf="@firebase/functions",Kf="@firebase/functions-compat",Wf="@firebase/installations",Qf="@firebase/installations-compat",Xf="@firebase/messaging",Yf="@firebase/messaging-compat",Jf="@firebase/performance",Zf="@firebase/performance-compat",td="@firebase/remote-config",ed="@firebase/remote-config-compat",nd="@firebase/storage",rd="@firebase/storage-compat",id="@firebase/firestore",sd="@firebase/firestore-compat",od="firebase",ad="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]",ud={[ns]:"fire-core",[Mf]:"fire-core-compat",[Ff]:"fire-analytics",[Lf]:"fire-analytics-compat",[Uf]:"fire-app-check",[Bf]:"fire-app-check-compat",[jf]:"fire-auth",[qf]:"fire-auth-compat",[zf]:"fire-rtdb",[Gf]:"fire-rtdb-compat",[Hf]:"fire-fn",[Kf]:"fire-fn-compat",[Wf]:"fire-iid",[Qf]:"fire-iid-compat",[Xf]:"fire-fcm",[Yf]:"fire-fcm-compat",[Jf]:"fire-perf",[Zf]:"fire-perf-compat",[td]:"fire-rc",[ed]:"fire-rc-compat",[nd]:"fire-gcs",[rd]:"fire-gcs-compat",[id]:"fire-fst",[sd]:"fire-fst-compat","fire-js":"fire-js",[od]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map,is=new Map;function cd(e,t){try{e.container.addComponent(t)}catch(n){re.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Sr(e){const t=e.name;if(is.has(t))return re.debug(`There were multiple attempts to register component ${t}.`),!1;is.set(t,e);for(const n of Rr.values())cd(n,e);return!0}function ld(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mt=new Qu("app","Firebase",hd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=ad;function Zu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:rs,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=Wu()),!n)throw Mt.create("no-options");const s=Rr.get(i);if(s){if(Zi(n,s.options)&&Zi(r,s.config))return s;throw Mt.create("duplicate-app",{appName:i})}const o=new vf(i);for(const u of is.values())o.addComponent(u);const a=new fd(n,r,o);return Rr.set(i,a),a}function pd(e=rs){const t=Rr.get(e);if(!t&&e===rs&&Wu())return Zu();if(!t)throw Mt.create("no-app",{appName:e});return t}function Ie(e,t,n){var r;let i=(r=ud[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),re.warn(a.join(" "));return}Sr(new En(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="firebase-heartbeat-database",md=1,Tn="firebase-heartbeat-store";let Ci=null;function tc(){return Ci||(Ci=Vf(gd,md,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Tn)}}}).catch(e=>{throw Mt.create("idb-open",{originalErrorMessage:e.message})})),Ci}async function _d(e){try{return await(await tc()).transaction(Tn).objectStore(Tn).get(ec(e))}catch(t){if(t instanceof Be)re.warn(t.message);else{const n=Mt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});re.warn(n.message)}}}async function Ta(e,t){try{const r=(await tc()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(t,ec(e)),await r.done}catch(n){if(n instanceof Be)re.warn(n.message);else{const r=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});re.warn(r.message)}}}function ec(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=1024,vd=30*24*60*60*1e3;class Ed{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wa();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=vd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wa(),{heartbeatsToSend:r,unsentEntries:i}=Td(this._heartbeatsCache.heartbeats),s=Ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function wa(){return new Date().toISOString().substring(0,10)}function Td(e,t=yd){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Aa(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Aa(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hf()?ff().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _d(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Aa(e){return Ir(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(e){Sr(new En("platform-logger",t=>new $f(t),"PRIVATE")),Sr(new En("heartbeat",t=>new Ed(t),"PRIVATE")),Ie(ns,Ea,e),Ie(ns,Ea,"esm2017"),Ie("fire-js","")}Ad("");var Id="firebase",Rd="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(Id,Rd,"app");var Sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,ks=ks||{},T=Sd||self;function zr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Bn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function bd(e){return Object.prototype.hasOwnProperty.call(e,Di)&&e[Di]||(e[Di]=++Pd)}var Di="closure_uid_"+(1e9*Math.random()>>>0),Pd=0;function Od(e,t,n){return e.call.apply(e.bind,arguments)}function Cd(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function et(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=Od:et=Cd,et.apply(null,arguments)}function or(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function H(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Gt(){this.s=this.s,this.o=this.o}var Dd=0;Gt.prototype.s=!1;Gt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Dd!=0)&&bd(this)};Gt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function $s(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ia(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(zr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function nt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var Vd=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",()=>{},t),T.removeEventListener("test",()=>{},t)}catch{}return e}();function wn(e){return/^[\s\xa0]*$/.test(e)}function Gr(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function Et(e){return Gr().indexOf(e)!=-1}function Ns(e){return Ns[" "](e),e}Ns[" "]=function(){};function xd(e,t){var n=Rp;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var kd=Et("Opera"),Oe=Et("Trident")||Et("MSIE"),rc=Et("Edge"),ss=rc||Oe,ic=Et("Gecko")&&!(Gr().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge"))&&!(Et("Trident")||Et("MSIE"))&&!Et("Edge"),$d=Gr().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge");function sc(){var e=T.document;return e?e.documentMode:void 0}var os;t:{var Vi="",xi=function(){var e=Gr();if(ic)return/rv:([^\);]+)(\)|;)/.exec(e);if(rc)return/Edge\/([\d\.]+)/.exec(e);if(Oe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if($d)return/WebKit\/(\S+)/.exec(e);if(kd)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(xi&&(Vi=xi?xi[1]:""),Oe){var ki=sc();if(ki!=null&&ki>parseFloat(Vi)){os=String(ki);break t}}os=Vi}var as;if(T.document&&Oe){var Ra=sc();as=Ra||parseInt(os,10)||void 0}else as=void 0;var Nd=as;function An(e,t){if(nt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ic){t:{try{Ns(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Md[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&An.$.h.call(this)}}H(An,nt);var Md={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),Ld=0;function Fd(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Ld,this.fa=this.ia=!1}function Hr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ms(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Bd(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function oc(e){const t={};for(const n in e)t[n]=e[n];return t}const Sa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ac(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Sa.length;s++)n=Sa[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Kr(e){this.src=e,this.g={},this.h=0}Kr.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=cs(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Fd(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function us(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=nc(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Hr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function cs(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Ls="closure_lm_"+(1e6*Math.random()|0),$i={};function uc(e,t,n,r,i){if(r&&r.once)return lc(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)uc(e,t[s],n,r,i);return null}return n=Us(n),e&&e[Un]?e.O(t,n,Bn(r)?!!r.capture:!!r,i):cc(e,t,n,!1,r,i)}function cc(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Bn(i)?!!i.capture:!!i,a=Bs(e);if(a||(e[Ls]=a=new Kr(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Ud(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Vd||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(fc(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ud(){function e(n){return t.call(e.src,e.listener,n)}const t=jd;return e}function lc(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)lc(e,t[s],n,r,i);return null}return n=Us(n),e&&e[Un]?e.P(t,n,Bn(r)?!!r.capture:!!r,i):cc(e,t,n,!0,r,i)}function hc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)hc(e,t[s],n,r,i);else r=Bn(r)?!!r.capture:!!r,n=Us(n),e&&e[Un]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=cs(s,n,r,i),-1<n&&(Hr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Bs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=cs(t,n,r,i)),(n=-1<e?t[e]:null)&&Fs(n))}function Fs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Un])us(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(fc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Bs(t))?(us(n,e),n.h==0&&(n.src=null,t[Ls]=null)):Hr(e)}}}function fc(e){return e in $i?$i[e]:$i[e]="on"+e}function jd(e,t){if(e.fa)e=!0;else{t=new An(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Fs(e),e=n.call(r,t)}return e}function Bs(e){return e=e[Ls],e instanceof Kr?e:null}var Ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(e){return typeof e=="function"?e:(e[Ni]||(e[Ni]=function(t){return e.handleEvent(t)}),e[Ni])}function G(){Gt.call(this),this.i=new Kr(this),this.S=this,this.J=null}H(G,Gt);G.prototype[Un]=!0;G.prototype.removeEventListener=function(e,t,n,r){hc(this,e,t,n,r)};function X(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new nt(t,e);else if(t instanceof nt)t.target=t.target||e;else{var i=t;t=new nt(r,e),ac(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ar(o,r,!0,t)&&i}if(o=t.g=e,i=ar(o,r,!0,t)&&i,i=ar(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ar(o,r,!1,t)&&i}G.prototype.N=function(){if(G.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Hr(n[r]);delete e.g[t],e.h--}}this.J=null};G.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};G.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ar(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&us(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var js=T.JSON.stringify;class qd{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function zd(){var e=qs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Gd{constructor(){this.h=this.g=null}add(t,n){const r=dc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dc=new qd(()=>new Hd,e=>e.reset());class Hd{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kd(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Wd(e){T.setTimeout(()=>{throw e},0)}let In,Rn=!1,qs=new Gd,pc=()=>{const e=T.Promise.resolve(void 0);In=()=>{e.then(Qd)}};var Qd=()=>{for(var e;e=zd();){try{e.h.call(e.g)}catch(n){Wd(n)}var t=dc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Rn=!1};function Wr(e,t){G.call(this),this.h=e||1,this.g=t||T,this.j=et(this.qb,this),this.l=Date.now()}H(Wr,G);m=Wr.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),X(this,"tick"),this.ga&&(zs(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){Wr.$.N.call(this),zs(this),delete this.g};function Gs(e,t,n){if(typeof e=="function")n&&(e=et(e,n));else if(e&&typeof e.handleEvent=="function")e=et(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function gc(e){e.g=Gs(()=>{e.g=null,e.i&&(e.i=!1,gc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Xd extends Gt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:gc(this)}N(){super.N(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(e){Gt.call(this),this.h=e,this.g={}}H(Sn,Gt);var ba=[];function mc(e,t,n,r){Array.isArray(n)||(n&&(ba[0]=n.toString()),n=ba);for(var i=0;i<n.length;i++){var s=uc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function _c(e){Ms(e.g,function(t,n){this.g.hasOwnProperty(n)&&Fs(t)},e),e.g={}}Sn.prototype.N=function(){Sn.$.N.call(this),_c(this)};Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qr(){this.g=!0}Qr.prototype.Ea=function(){this.g=!1};function Yd(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Jd(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Ae(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+tp(e,n)+(r?" "+r:"")})}function Zd(e,t){e.info(function(){return"TIMEOUT: "+t})}Qr.prototype.info=function(){};function tp(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return js(n)}catch{return t}}var ue={},Pa=null;function Xr(){return Pa=Pa||new G}ue.Ta="serverreachability";function yc(e){nt.call(this,ue.Ta,e)}H(yc,nt);function bn(e){const t=Xr();X(t,new yc(t))}ue.STAT_EVENT="statevent";function vc(e,t){nt.call(this,ue.STAT_EVENT,e),this.stat=t}H(vc,nt);function st(e){const t=Xr();X(t,new vc(t,e))}ue.Ua="timingevent";function Ec(e,t){nt.call(this,ue.Ua,e),this.size=t}H(Ec,nt);function jn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Yr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hs(){}Hs.prototype.h=null;function Oa(e){return e.h||(e.h=e.i())}function wc(){}var qn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ks(){nt.call(this,"d")}H(Ks,nt);function Ws(){nt.call(this,"c")}H(Ws,nt);var ls;function Jr(){}H(Jr,Hs);Jr.prototype.g=function(){return new XMLHttpRequest};Jr.prototype.i=function(){return{}};ls=new Jr;function zn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Sn(this),this.P=ep,e=ss?125:void 0,this.V=new Wr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ac}function Ac(){this.i=null,this.g="",this.h=!1}var ep=45e3,hs={},br={};m=zn.prototype;m.setTimeout=function(e){this.P=e};function fs(e,t,n){e.L=1,e.v=ti(Dt(t)),e.s=n,e.S=!0,Ic(e,null)}function Ic(e,t){e.G=Date.now(),Gn(e),e.A=Dt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Vc(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Ac,e.g=Zc(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Xd(et(e.Pa,e,e.g),e.O)),mc(e.U,e.g,"readystatechange",e.nb),t=e.I?oc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),bn(),Yd(e.j,e.u,e.A,e.m,e.W,e.s)}m.nb=function(e){e=e.target;const t=this.M;t&&Tt(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const l=Tt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ss||this.g&&(this.h.h||this.g.ja()||xa(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?bn(3):bn(2)),Zr(this);var n=this.g.da();this.ca=n;e:if(Rc(this)){var r=xa(this.g);e="";var i=r.length,s=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),dn(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Jd(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wn(a)){var c=a;break e}}c=null}if(n=c)Ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ds(this,n);else{this.i=!1,this.o=3,st(12),Xt(this),dn(this);break t}}this.S?(Sc(this,l,o),ss&&this.i&&l==3&&(mc(this.U,this.V,"tick",this.mb),this.V.start())):(Ae(this.j,this.m,o,null),ds(this,o)),l==4&&Xt(this),this.i&&!this.J&&(l==4?Qc(this.l,this):(this.i=!1,Gn(this)))}else wp(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Xt(this),dn(this)}}}catch{}finally{}};function Rc(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Sc(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=np(e,n),i==br){t==4&&(e.o=4,st(14),r=!1),Ae(e.j,e.m,null,"[Incomplete Response]");break}else if(i==hs){e.o=4,st(15),Ae(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ae(e.j,e.m,i,null),ds(e,i);Rc(e)&&i!=br&&i!=hs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,st(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),to(t),t.M=!0,st(11))):(Ae(e.j,e.m,n,"[Invalid Chunked Response]"),Xt(e),dn(e))}m.mb=function(){if(this.g){var e=Tt(this.g),t=this.g.ja();this.C<t.length&&(Zr(this),Sc(this,e,t),this.i&&e!=4&&Gn(this))}};function np(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?br:(n=Number(t.substring(n,r)),isNaN(n)?hs:(r+=1,r+n>t.length?br:(t=t.slice(r,r+n),e.C=r+n,t)))}m.cancel=function(){this.J=!0,Xt(this)};function Gn(e){e.Y=Date.now()+e.P,bc(e,e.P)}function bc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=jn(et(e.lb,e),t)}function Zr(e){e.B&&(T.clearTimeout(e.B),e.B=null)}m.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Zd(this.j,this.A),this.L!=2&&(bn(),st(17)),Xt(this),this.o=2,dn(this)):bc(this,this.Y-e)};function dn(e){e.l.H==0||e.J||Qc(e.l,e)}function Xt(e){Zr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,zs(e.V),_c(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ds(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ps(n.i,e))){if(!e.K&&ps(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Cr(n),ri(n);else break t;Zs(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=jn(et(n.ib,n),6e3));if(1>=$c(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Yt(n,11)}else if((e.K||n.g==e)&&Cr(n),!wn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const l=c[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const A=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var s=r.i;s.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Qs(s,s.h),s.h=null))}if(r.F){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.Da=b,V(r.I,r.F,b))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Jc(r,r.J?r.pa:null,r.Y),o.K){Nc(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Zr(a),Gn(a)),r.g=o}else Kc(r);0<n.j.length&&ii(n)}else c[0]!="stop"&&c[0]!="close"||Yt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Yt(n,7):Js(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}bn(4)}catch{}}function rp(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(zr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function ip(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(zr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Pc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(zr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=ip(e),r=rp(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Oc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sp(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function te(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof te){this.h=e.h,Pr(this,e.j),this.s=e.s,this.g=e.g,Or(this,e.m),this.l=e.l;var t=e.i,n=new Pn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ca(this,n),this.o=e.o}else e&&(t=String(e).match(Oc))?(this.h=!1,Pr(this,t[1]||"",!0),this.s=un(t[2]||""),this.g=un(t[3]||"",!0),Or(this,t[4]),this.l=un(t[5]||"",!0),Ca(this,t[6]||"",!0),this.o=un(t[7]||"")):(this.h=!1,this.i=new Pn(null,this.h))}te.prototype.toString=function(){var e=[],t=this.j;t&&e.push(cn(t,Da,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(cn(t,Da,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(cn(n,n.charAt(0)=="/"?up:ap,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",cn(n,lp)),e.join("")};function Dt(e){return new te(e)}function Pr(e,t,n){e.j=n?un(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Or(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ca(e,t,n){t instanceof Pn?(e.i=t,hp(e.i,e.h)):(n||(t=cn(t,cp)),e.i=new Pn(t,e.h))}function V(e,t,n){e.i.set(t,n)}function ti(e){return V(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function un(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function cn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,op),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function op(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Da=/[#\/\?@]/g,ap=/[#\?:]/g,up=/[#\?]/g,cp=/[#\?@]/g,lp=/#/g;function Pn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ht(e){e.g||(e.g=new Map,e.h=0,e.i&&sp(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Pn.prototype;m.add=function(e,t){Ht(this),this.i=null,e=Ue(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Cc(e,t){Ht(e),t=Ue(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Dc(e,t){return Ht(e),t=Ue(e,t),e.g.has(t)}m.forEach=function(e,t){Ht(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};m.ta=function(){Ht(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};m.Z=function(e){Ht(this);let t=[];if(typeof e=="string")Dc(this,e)&&(t=t.concat(this.g.get(Ue(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Ht(this),this.i=null,e=Ue(this,e),Dc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Vc(e,t,n){Cc(e,t),0<n.length&&(e.i=null,e.g.set(Ue(e,t),$s(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ue(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function hp(e,t){t&&!e.j&&(Ht(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Cc(this,r),Vc(this,i,n))},e)),e.j=t}var fp=class{constructor(e,t){this.g=e,this.map=t}};function xc(e){this.l=e||dp,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ka&&T.g.Ka()&&T.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dp=10;function kc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function $c(e){return e.h?1:e.g?e.g.size:0}function ps(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Qs(e,t){e.g?e.g.add(t):e.h=t}function Nc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}xc.prototype.cancel=function(){if(this.i=Mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Mc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return $s(e.i)}var pp=class{stringify(e){return T.JSON.stringify(e,void 0)}parse(e){return T.JSON.parse(e,void 0)}};function gp(){this.g=new pp}function mp(e,t,n){const r=n||"";try{Pc(e,function(i,s){let o=i;Bn(i)&&(o=js(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function _p(e,t){const n=new Qr;if(T.Image){const r=new Image;r.onload=or(ur,n,r,"TestLoadImage: loaded",!0,t),r.onerror=or(ur,n,r,"TestLoadImage: error",!1,t),r.onabort=or(ur,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=or(ur,n,r,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ur(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Hn(e){this.l=e.ec||null,this.j=e.ob||!1}H(Hn,Hs);Hn.prototype.g=function(){return new ei(this.l,this.j)};Hn.prototype.i=function(e){return function(){return e}}({});function ei(e,t){G.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(ei,G);var Xs=0;m=ei.prototype;m.open=function(e,t){if(this.readyState!=Xs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,On(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||T).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=Xs};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Lc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Kn(this):On(this),this.readyState==3&&Lc(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,Kn(this))};m.Ya=function(e){this.g&&(this.response=e,Kn(this))};m.ka=function(){this.g&&Kn(this)};function Kn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,On(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function On(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var yp=T.JSON.parse;function M(e){G.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Fc,this.L=this.M=!1}H(M,G);var Fc="",vp=/^https?$/i,Ep=["POST","PUT"];m=M.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ls.g(),this.C=this.u?Oa(this.u):Oa(ls),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Va(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=T.FormData&&e instanceof T.FormData,!(0<=nc(Ep,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jc(this),0<this.B&&((this.L=Tp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Gs(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Va(this,s)}};function Tp(e){return Oe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof ks<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function Va(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Bc(e),ni(e)}function Bc(e){e.F||(e.F=!0,X(e,"complete"),X(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,X(this,"complete"),X(this,"abort"),ni(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ni(this,!0)),M.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?Uc(this):this.kb())};m.kb=function(){Uc(this)};function Uc(e){if(e.h&&typeof ks<"u"&&(!e.C[1]||Tt(e)!=4||e.da()!=2)){if(e.v&&Tt(e)==4)Gs(e.La,0,e);else if(X(e,"readystatechange"),Tt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Oc)[1]||null;!i&&T.self&&T.self.location&&(i=T.self.location.protocol.slice(0,-1)),r=!vp.test(i?i.toLowerCase():"")}n=r}if(n)X(e,"complete"),X(e,"success");else{e.m=6;try{var s=2<Tt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Bc(e)}}finally{ni(e)}}}}function ni(e,t){if(e.g){jc(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||X(e,"ready");try{n.onreadystatechange=r}catch{}}}function jc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}m.isActive=function(){return!!this.g};function Tt(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),yp(t)}};function xa(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Fc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function wp(e){const t={};e=(e.g&&2<=Tt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(wn(e[r]))continue;var n=Kd(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Bd(t,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qc(e){let t="";return Ms(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ys(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):V(e,t,n))}function tn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zc(e){this.Ga=0,this.j=[],this.l=new Qr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=tn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=tn("baseRetryDelayMs",5e3,e),this.hb=tn("retryDelaySeedMs",1e4,e),this.eb=tn("forwardChannelMaxRetries",2,e),this.xa=tn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new xc(e&&e.concurrentRequestLimit),this.Ja=new gp,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=zc.prototype;m.ra=8;m.H=1;function Js(e){if(Gc(e),e.H==3){var t=e.W++,n=Dt(e.I);if(V(n,"SID",e.K),V(n,"RID",t),V(n,"TYPE","terminate"),Wn(e,n),t=new zn(e,e.l,t),t.L=2,t.v=ti(Dt(n)),n=!1,T.navigator&&T.navigator.sendBeacon)try{n=T.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=Zc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Gn(t)}Yc(e)}function ri(e){e.g&&(to(e),e.g.cancel(),e.g=null)}function Gc(e){ri(e),e.u&&(T.clearTimeout(e.u),e.u=null),Cr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function ii(e){if(!kc(e.i)&&!e.m){e.m=!0;var t=e.Na;In||pc(),Rn||(In(),Rn=!0),qs.add(t,e),e.C=0}}function Ap(e,t){return $c(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=jn(et(e.Na,e,t),Xc(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new zn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=oc(s),ac(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Hc(this,i,t),n=Dt(this.I),V(n,"RID",e),V(n,"CVER",22),this.F&&V(n,"X-HTTP-Session-Id",this.F),Wn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(qc(s)))+"&"+t:this.o&&Ys(n,this.o,s)),Qs(this.i,i),this.bb&&V(n,"TYPE","init"),this.P?(V(n,"$req",t),V(n,"SID","null"),i.aa=!0,fs(i,n,null)):fs(i,n,t),this.H=2}}else this.H==3&&(e?ka(this,e):this.j.length==0||kc(this.i)||ka(this))};function ka(e,t){var n;t?n=t.m:n=e.W++;const r=Dt(e.I);V(r,"SID",e.K),V(r,"RID",n),V(r,"AID",e.V),Wn(e,r),e.o&&e.s&&Ys(r,e.o,e.s),n=new zn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Hc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Qs(e.i,n),fs(n,r,t)}function Wn(e,t){e.na&&Ms(e.na,function(n,r){V(t,r,n)}),e.h&&Pc({},function(n,r){V(t,r,n)})}function Hc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?et(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].g;const l=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{mp(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Kc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;In||pc(),Rn||(In(),Rn=!0),qs.add(t,e),e.A=0}}function Zs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=jn(et(e.Ma,e),Xc(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,Wc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=jn(et(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),ri(this),Wc(this))};function to(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Wc(e){e.g=new zn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Dt(e.wa);V(t,"RID","rpc"),V(t,"SID",e.K),V(t,"AID",e.V),V(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&V(t,"TO",e.qa),V(t,"TYPE","xmlhttp"),Wn(e,t),e.o&&e.s&&Ys(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ti(Dt(t)),n.s=null,n.S=!0,Ic(n,e)}m.ib=function(){this.v!=null&&(this.v=null,ri(this),Zs(this),st(19))};function Cr(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Qc(e,t){var n=null;if(e.g==t){Cr(e),to(e),e.g=null;var r=2}else if(ps(e.i,t))n=t.F,Nc(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Xr(),X(r,new Ec(r,n)),ii(e)}else Kc(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Ap(e,t)||r==2&&Zs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Yt(e,5);break;case 4:Yt(e,10);break;case 3:Yt(e,6);break;default:Yt(e,2)}}}function Xc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Yt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=et(e.pb,e);n||(n=new te("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Pr(n,"https"),ti(n)),_p(n.toString(),r)}else st(2);e.H=0,e.h&&e.h.za(t),Yc(e),Gc(e)}m.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function Yc(e){if(e.H=0,e.ma=[],e.h){const t=Mc(e.i);(t.length!=0||e.j.length!=0)&&(Ia(e.ma,t),Ia(e.ma,e.j),e.i.i.length=0,$s(e.j),e.j.length=0),e.h.ya()}}function Jc(e,t,n){var r=n instanceof te?Dt(n):new te(n);if(r.g!="")t&&(r.g=t+"."+r.g),Or(r,r.m);else{var i=T.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new te(null);r&&Pr(s,r),t&&(s.g=t),i&&Or(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&V(r,n,t),V(r,"VER",e.ra),Wn(e,r),r}function Zc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new M(new Hn({ob:!0})):new M(e.va),t.Oa(e.J),t}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function tl(){}m=tl.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function Dr(){if(Oe&&!(10<=Number(Nd)))throw Error("Environmental error: no available transport.")}Dr.prototype.g=function(e,t){return new ht(e,t)};function ht(e,t){G.call(this),this.g=new zc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!wn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!wn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new je(this)}H(ht,G);ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Jc(e,null,e.Y),ii(e)};ht.prototype.close=function(){Js(this.g)};ht.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=js(e),e=n);t.j.push(new fp(t.fb++,e)),t.H==3&&ii(t)};ht.prototype.N=function(){this.g.h=null,delete this.j,Js(this.g),delete this.g,ht.$.N.call(this)};function el(e){Ks.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(el,Ks);function nl(){Ws.call(this),this.status=1}H(nl,Ws);function je(e){this.g=e}H(je,tl);je.prototype.Ba=function(){X(this.g,"a")};je.prototype.Aa=function(e){X(this.g,new el(e))};je.prototype.za=function(e){X(this.g,new nl)};je.prototype.ya=function(){X(this.g,"b")};function Ip(){this.blockSize=-1}function yt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}H(yt,Ip);yt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Mi(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}yt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Mi(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Mi(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Mi(this,r),i=0;break}}this.h=i,this.i+=t};yt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function D(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Rp={};function eo(e){return-128<=e&&128>e?xd(e,function(t){return new D([t|0],0>t?-1:0)}):new D([e|0],0>e?-1:0)}function wt(e){if(isNaN(e)||!isFinite(e))return Re;if(0>e)return W(wt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=gs;return new D(t,0)}function rl(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return W(rl(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=wt(Math.pow(t,8)),r=Re,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=wt(Math.pow(t,s)),r=r.R(s).add(wt(o))):(r=r.R(n),r=r.add(wt(o)))}return r}var gs=4294967296,Re=eo(0),ms=eo(1),$a=eo(16777216);m=D.prototype;m.ea=function(){if(ft(this))return-W(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:gs+r)*t,t*=gs}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Pt(this))return"0";if(ft(this))return"-"+W(this).toString(e);for(var t=wt(Math.pow(e,6)),n=this,r="";;){var i=xr(n,t).g;n=Vr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Pt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Pt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ft(e){return e.h==-1}m.X=function(e){return e=Vr(this,e),ft(e)?-1:Pt(e)?0:1};function W(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new D(n,~e.h).add(ms)}m.abs=function(){return ft(this)?W(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new D(n,n[n.length-1]&-2147483648?-1:0)};function Vr(e,t){return e.add(W(t))}m.R=function(e){if(Pt(this)||Pt(e))return Re;if(ft(this))return ft(e)?W(this).R(W(e)):W(W(this).R(e));if(ft(e))return W(this.R(W(e)));if(0>this.X($a)&&0>e.X($a))return wt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,cr(n,2*r+2*i),n[2*r+2*i+1]+=s*u,cr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,cr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,cr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new D(n,0)};function cr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function en(e,t){this.g=e,this.h=t}function xr(e,t){if(Pt(t))throw Error("division by zero");if(Pt(e))return new en(Re,Re);if(ft(e))return t=xr(W(e),t),new en(W(t.g),W(t.h));if(ft(t))return t=xr(e,W(t)),new en(W(t.g),t.h);if(30<e.g.length){if(ft(e)||ft(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ms,r=t;0>=r.X(e);)n=Na(n),r=Na(r);var i=ge(n,1),s=ge(r,1);for(r=ge(r,2),n=ge(n,2);!Pt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=ge(r,1),n=ge(n,1)}return t=Vr(e,i.R(t)),new en(i,t)}for(i=Re;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=wt(n),o=s.R(t);ft(o)||0<o.X(e);)n-=r,s=wt(n),o=s.R(t);Pt(s)&&(s=ms),i=i.add(s),e=Vr(e,o)}return new en(i,e)}m.gb=function(e){return xr(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new D(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new D(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new D(n,this.h^e.h)};function Na(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new D(n,e.h)}function ge(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new D(i,e.h)}Dr.prototype.createWebChannel=Dr.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Yr.NO_ERROR=0;Yr.TIMEOUT=8;Yr.HTTP_ERROR=6;Tc.COMPLETE="complete";wc.EventType=qn;qn.OPEN="a";qn.CLOSE="b";qn.ERROR="c";qn.MESSAGE="d";G.prototype.listen=G.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;yt.prototype.digest=yt.prototype.l;yt.prototype.reset=yt.prototype.reset;yt.prototype.update=yt.prototype.j;D.prototype.add=D.prototype.add;D.prototype.multiply=D.prototype.R;D.prototype.modulo=D.prototype.gb;D.prototype.compare=D.prototype.X;D.prototype.toNumber=D.prototype.ea;D.prototype.toString=D.prototype.toString;D.prototype.getBits=D.prototype.D;D.fromNumber=wt;D.fromString=rl;var Sp=function(){return new Dr},bp=function(){return Xr()},Li=Yr,Pp=Tc,Op=ue,Ma={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Cp=Hn,lr=wc,Dp=M,Vp=yt,Se=D;const La="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Xu("@firebase/firestore");function nn(){return ie.logLevel}function y(e,...t){if(ie.logLevel<=O.DEBUG){const n=t.map(no);ie.debug(`Firestore (${qe}): ${e}`,...n)}}function Vt(e,...t){if(ie.logLevel<=O.ERROR){const n=t.map(no);ie.error(`Firestore (${qe}): ${e}`,...n)}}function Ce(e,...t){if(ie.logLevel<=O.WARN){const n=t.map(no);ie.warn(`Firestore (${qe}): ${e}`,...n)}}function no(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e="Unexpected state"){const t=`FIRESTORE (${qe}) INTERNAL ASSERTION FAILED: `+e;throw Vt(t),new Error(t)}function k(e,t){e||E()}function R(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Be{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class kp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $p{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(k(typeof r.accessToken=="string"),new il(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new Z(t)}}class Np{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Z.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mp{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Np(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fp{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(k(typeof n.token=="string"),this.R=n.token,new Lp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Bp(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function C(e,t){return e<t?-1:e>t?1:0}function De(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new j(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new j(0,0))}static max(){return new w(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,n,r){n===void 0?n=0:n>t.length&&E(),r===void 0?r=t.length-n:r>t.length-n&&E(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Cn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Cn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends Cn{construct(t,n,r){return new x(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new _(d.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const Up=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends Cn{construct(t,n,r){return new Q(t,n,r)}static isValidIdentifier(t){return Up.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new _(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new _(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(x.fromString(t))}static fromName(t){return new v(x.fromString(t).popFirst(5))}static empty(){return new v(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new x(t.slice()))}}function jp(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=w.fromTimestamp(r===1e9?new j(n+1,0):new j(n,r));return new jt(i,v.empty(),t)}function qp(e){return new jt(e.readTime,e.key,-1)}class jt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new jt(w.min(),v.empty(),-1)}static max(){return new jt(w.max(),v.empty(),-1)}}function zp(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:C(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Gp)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,r)=>{n(t)})}static reject(t){return new p((n,r)=>{r(t)})}static waitFor(t){return new p((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=p.resolve(!1);for(const r of t)n=n.next(i=>i?p.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new p((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,n){return new p((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Xn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ro._e=-1;function si(e){return e==null}function kr(e){return e===0&&1/e==-1/0}function Kp(e){return typeof e=="number"&&Number.isInteger(e)&&!kr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ze(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ol(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new N(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new N(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hr(this.root,t,this.comparator,!1)}getReverseIterator(){return new hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hr(this.root,t,this.comparator,!0)}}class hr{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??K.RED,this.left=i??K.EMPTY,this.right=s??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new K(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return K.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(t,n,r,i,s){return this}insert(t,n,r){return new K(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.comparator=t,this.data=new N(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ba(this.data.getIterator())}getIteratorFrom(t){return new Ba(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Y)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Y(this.comparator);return n.data=t,n}}class Ba{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.fields=t,t.sort(Q.comparator)}static empty(){return new _t([])}unionWith(t){let n=new Y(Q.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new _t(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return De(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new al("Invalid base64 string: "+s):s}}(t);return new rt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new rt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Wp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(e){if(k(!!e),typeof e=="string"){let t=0;const n=Wp.exec(e);if(k(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:B(e.seconds),nanos:B(e.nanos)}}function B(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function se(e){return typeof e=="string"?rt.fromBase64String(e):rt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function so(e){const t=e.mapValue.fields.__previous_value__;return io(t)?so(t):t}function Dn(e){const t=qt(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,n,r,i,s,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Vn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Vn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function oe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?io(e)?4:Xp(e)?9007199254740991:10:E()}function St(e,t){if(e===t)return!0;const n=oe(e);if(n!==oe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Dn(e).isEqual(Dn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qt(i.timestampValue),a=qt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return se(i.bytesValue).isEqual(se(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return B(i.geoPointValue.latitude)===B(s.geoPointValue.latitude)&&B(i.geoPointValue.longitude)===B(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return B(i.integerValue)===B(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=B(i.doubleValue),a=B(s.doubleValue);return o===a?kr(o)===kr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return De(e.arrayValue.values||[],t.arrayValue.values||[],St);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Fa(o)!==Fa(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!St(o[u],a[u])))return!1;return!0}(e,t);default:return E()}}function xn(e,t){return(e.values||[]).find(n=>St(n,t))!==void 0}function Ve(e,t){if(e===t)return 0;const n=oe(e),r=oe(t);if(n!==r)return C(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return C(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=B(s.integerValue||s.doubleValue),u=B(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return Ua(e.timestampValue,t.timestampValue);case 4:return Ua(Dn(e),Dn(t));case 5:return C(e.stringValue,t.stringValue);case 6:return function(s,o){const a=se(s),u=se(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=C(a[c],u[c]);if(l!==0)return l}return C(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=C(B(s.latitude),B(o.latitude));return a!==0?a:C(B(s.longitude),B(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=Ve(a[c],u[c]);if(l)return l}return C(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===fr.mapValue&&o===fr.mapValue)return 0;if(s===fr.mapValue)return 1;if(o===fr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const f=C(u[h],l[h]);if(f!==0)return f;const g=Ve(a[u[h]],c[l[h]]);if(g!==0)return g}return C(u.length,l.length)}(e.mapValue,t.mapValue);default:throw E()}}function Ua(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return C(e,t);const n=qt(e),r=qt(t),i=C(n.seconds,r.seconds);return i!==0?i:C(n.nanos,r.nanos)}function xe(e){return _s(e)}function _s(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=qt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return se(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return v.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=_s(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_s(n.fields[o])}`;return i+"}"}(e.mapValue):E()}function ja(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ys(e){return!!e&&"integerValue"in e}function oo(e){return!!e&&"arrayValue"in e}function qa(e){return!!e&&"nullValue"in e}function za(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vr(e){return!!e&&"mapValue"in e}function pn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ze(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=pn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=pn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Xp(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.value=t}static empty(){return new dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!vr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=pn(n)}setAll(t){let n=Q.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=pn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());vr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];vr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){ze(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new dt(pn(this.value))}}function ul(e){const t=[];return ze(e.fields,(n,r)=>{const i=new Q([n]);if(vr(r)){const s=ul(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new _t(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new tt(t,0,w.min(),w.min(),w.min(),dt.empty(),0)}static newFoundDocument(t,n,r,i){return new tt(t,1,n,w.min(),r,i,0)}static newNoDocument(t,n){return new tt(t,2,n,w.min(),w.min(),dt.empty(),0)}static newUnknownDocument(t,n){return new tt(t,3,n,w.min(),w.min(),dt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,n){this.position=t,this.inclusive=n}}function Ga(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),n.key):r=Ve(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ha(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!St(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Yp(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{}class U extends cl{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Zp(t,n,r):n==="array-contains"?new ng(t,r):n==="in"?new rg(t,r):n==="not-in"?new ig(t,r):n==="array-contains-any"?new sg(t,r):new U(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new tg(t,r):new eg(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ve(n,this.value)):n!==null&&oe(this.value)===oe(n)&&this.matchesComparison(Ve(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vt extends cl{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new vt(t,n)}matches(t){return ll(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ll(e){return e.op==="and"}function hl(e){return Jp(e)&&ll(e)}function Jp(e){for(const t of e.filters)if(t instanceof vt)return!1;return!0}function vs(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+xe(e.value);if(hl(e))return e.filters.map(t=>vs(t)).join(",");{const t=e.filters.map(n=>vs(n)).join(",");return`${e.op}(${t})`}}function fl(e,t){return e instanceof U?function(r,i){return i instanceof U&&r.op===i.op&&r.field.isEqual(i.field)&&St(r.value,i.value)}(e,t):e instanceof vt?function(r,i){return i instanceof vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&fl(o,i.filters[a]),!0):!1}(e,t):void E()}function dl(e){return e instanceof U?function(n){return`${n.field.canonicalString()} ${n.op} ${xe(n.value)}`}(e):e instanceof vt?function(n){return n.op.toString()+" {"+n.getFilters().map(dl).join(" ,")+"}"}(e):"Filter"}class Zp extends U{constructor(t,n,r){super(t,n,r),this.key=v.fromName(r.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.matchesComparison(n)}}class tg extends U{constructor(t,n){super(t,"in",n),this.keys=pl("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class eg extends U{constructor(t,n){super(t,"not-in",n),this.keys=pl("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function pl(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>v.fromName(r.referenceValue))}class ng extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return oo(n)&&xn(n.arrayValue,this.value)}}class rg extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&xn(this.value.arrayValue,n)}}class ig extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!xn(this.value.arrayValue,n)}}class sg extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!oo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Ka(e,t=null,n=[],r=[],i=null,s=null,o=null){return new og(e,t,n,r,i,s,o)}function ao(e){const t=R(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>vs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),si(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>xe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>xe(r)).join(",")),t.ce=n}return t.ce}function uo(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Yp(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!fl(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ha(e.startAt,t.startAt)&&Ha(e.endAt,t.endAt)}function Es(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ag(e,t,n,r,i,s,o,a){return new Ge(e,t,n,r,i,s,o,a)}function gl(e){return new Ge(e)}function Wa(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ml(e){return e.collectionGroup!==null}function gn(e){const t=R(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Y(Q.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new kn(s,r))}),n.has(Q.keyField().canonicalString())||t.le.push(new kn(Q.keyField(),r))}return t.le}function It(e){const t=R(e);return t.he||(t.he=ug(t,gn(e))),t.he}function ug(e,t){if(e.limitType==="F")return Ka(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kn(i.field,s)});const n=e.endAt?new $r(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new $r(e.startAt.position,e.startAt.inclusive):null;return Ka(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ts(e,t){const n=e.filters.concat([t]);return new Ge(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ws(e,t,n){return new Ge(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function oi(e,t){return uo(It(e),It(t))&&e.limitType===t.limitType}function _l(e){return`${ao(It(e))}|lt:${e.limitType}`}function ve(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>dl(i)).join(", ")}]`),si(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xe(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xe(i)).join(",")),`Target(${r})`}(It(e))}; limitType=${e.limitType})`}function ai(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):v.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of gn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Ga(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,gn(r),i)||r.endAt&&!function(o,a,u){const c=Ga(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,gn(r),i))}(e,t)}function cg(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function yl(e){return(t,n)=>{let r=!1;for(const i of gn(e)){const s=lg(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lg(e,t,n){const r=e.field.isKeyField()?v.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ve(u,c):E()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return E()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ze(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return ol(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new N(v.comparator);function xt(){return hg}const vl=new N(v.comparator);function ln(...e){let t=vl;for(const n of e)t=t.insert(n.key,n);return t}function El(e){let t=vl;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Jt(){return mn()}function Tl(){return mn()}function mn(){return new He(e=>e.toString(),(e,t)=>e.isEqual(t))}const fg=new N(v.comparator),dg=new Y(v.comparator);function S(...e){let t=dg;for(const n of e)t=t.add(n);return t}const pg=new Y(C);function gg(){return pg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kr(t)?"-0":t}}function Al(e){return{integerValue:""+e}}function mg(e,t){return Kp(t)?Al(t):wl(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this._=void 0}}function _g(e,t,n){return e instanceof Nr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&io(s)&&(s=so(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof $n?Rl(e,t):e instanceof Nn?Sl(e,t):function(i,s){const o=Il(i,s),a=Qa(o)+Qa(i.Ie);return ys(o)&&ys(i.Ie)?Al(a):wl(i.serializer,a)}(e,t)}function yg(e,t,n){return e instanceof $n?Rl(e,t):e instanceof Nn?Sl(e,t):n}function Il(e,t){return e instanceof Mr?function(r){return ys(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Nr extends ui{}class $n extends ui{constructor(t){super(),this.elements=t}}function Rl(e,t){const n=bl(t);for(const r of e.elements)n.some(i=>St(i,r))||n.push(r);return{arrayValue:{values:n}}}class Nn extends ui{constructor(t){super(),this.elements=t}}function Sl(e,t){let n=bl(t);for(const r of e.elements)n=n.filter(i=>!St(i,r));return{arrayValue:{values:n}}}class Mr extends ui{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Qa(e){return B(e.integerValue||e.doubleValue)}function bl(e){return oo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function vg(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof $n&&i instanceof $n||r instanceof Nn&&i instanceof Nn?De(r.elements,i.elements,St):r instanceof Mr&&i instanceof Mr?St(r.Ie,i.Ie):r instanceof Nr&&i instanceof Nr}(e.transform,t.transform)}class Eg{constructor(t,n){this.version=t,this.transformResults=n}}class Ot{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ot}static exists(t){return new Ot(void 0,t)}static updateTime(t){return new Ot(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Er(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ci{}function Pl(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Cl(e.key,Ot.none()):new Yn(e.key,e.data,Ot.none());{const n=e.data,r=dt.empty();let i=new Y(Q.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ce(e.key,r,new _t(i.toArray()),Ot.none())}}function Tg(e,t,n){e instanceof Yn?function(i,s,o){const a=i.value.clone(),u=Ya(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ce?function(i,s,o){if(!Er(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ya(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ol(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function _n(e,t,n,r){return e instanceof Yn?function(s,o,a,u){if(!Er(s.precondition,o))return a;const c=s.value.clone(),l=Ja(s.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof ce?function(s,o,a,u){if(!Er(s.precondition,o))return a;const c=Ja(s.fieldTransforms,u,o),l=o.data;return l.setAll(Ol(s)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Er(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function wg(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Il(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function Xa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&De(r,i,(s,o)=>vg(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Yn extends ci{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ce extends ci{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ol(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ya(e,t,n){const r=new Map;k(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,yg(o,a,n[i]))}return r}function Ja(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_g(s,o,t))}return r}class Cl extends ci{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ag extends ci{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Tg(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=_n(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=_n(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Tl();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Pl(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),S())}isEqual(t){return this.batchId===t.batchId&&De(this.mutations,t.mutations,(n,r)=>Xa(n,r))&&De(this.baseMutations,t.baseMutations,(n,r)=>Xa(n,r))}}class co{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){k(t.mutations.length===r.length);let i=function(){return fg}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new co(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,P;function bg(e){switch(e){default:return E();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Dl(e){if(e===void 0)return Vt("GRPC error has no .code"),d.UNKNOWN;switch(e){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return E()}}(P=F||(F={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Se([4294967295,4294967295],0);function Za(e){const t=Pg().encode(e),n=new Vp;return n.update(t),new Uint8Array(n.digest())}function tu(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Se([n,r],0),new Se([i,s],0)]}class lo{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hn(`Invalid padding: ${n}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new hn(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Se.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(Se.fromNumber(r)));return i.compare(Og)===1&&(i=new Se([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Za(t),[r,i]=tu(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new lo(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Za(t),[r,i]=tu(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Jn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new li(w.min(),i,new N(C),xt(),S())}}class Jn{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Jn(r,n,S(),S(),S())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class Vl{constructor(t,n){this.targetId=t,this.fe=n}}class xl{constructor(t,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class eu{constructor(){this.ge=0,this.pe=ru(),this.ye=rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=S(),n=S(),r=S();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:E()}}),new Jn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=ru()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Cg{constructor(t){this.Le=t,this.ke=new Map,this.qe=xt(),this.Qe=nu(),this.Ke=new N(C)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:E()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Es(s))if(r===0){const o=new v(s.path);this.We(n,o,tt.newNoDocument(o,w.min()))}else k(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=se(r).toUint8Array()}catch(u){if(u instanceof al)return Ce("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new lo(o,i,s)}catch(u){return Ce(u instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Es(a.target)){const u=new v(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,tt.newNoDocument(u,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=S();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new li(t,n,this.Ke,this.qe,r);return this.qe=xt(),this.Qe=nu(),this.Ke=new N(C),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new eu,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Y(C),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new eu),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function nu(){return new N(v.comparator)}function ru(){return new N(v.comparator)}const Dg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Vg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xg=(()=>({and:"AND",or:"OR"}))();class kg{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function As(e,t){return e.useProto3Json||si(t)?t:{value:t}}function Lr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function $g(e,t){return Lr(e,t.toTimestamp())}function Rt(e){return k(!!e),w.fromTimestamp(function(n){const r=qt(n);return new j(r.seconds,r.nanos)}(e))}function ho(e,t){return function(r){return new x(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function $l(e){const t=x.fromString(e);return k(Fl(t)),t}function Is(e,t){return ho(e.databaseId,t.path)}function Fi(e,t){const n=$l(t);if(n.get(1)!==e.databaseId.projectId)throw new _(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(Nl(n))}function Rs(e,t){return ho(e.databaseId,t)}function Ng(e){const t=$l(e);return t.length===4?x.emptyPath():Nl(t)}function Ss(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Nl(e){return k(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function iu(e,t,n){return{name:Is(e,t),fields:n.value.mapValue.fields}}function Mg(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(k(l===void 0||typeof l=="string"),rt.fromBase64String(l||"")):(k(l===void 0||l instanceof Uint8Array),rt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?d.UNKNOWN:Dl(c.code);return new _(l,c.message||"")}(o);n=new xl(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fi(e,r.document.name),s=Rt(r.document.updateTime),o=r.document.createTime?Rt(r.document.createTime):w.min(),a=new dt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Tr(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Fi(e,r.document),s=r.readTime?Rt(r.readTime):w.min(),o=tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Tr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Fi(e,r.document),s=r.removedTargetIds||[];n=new Tr([],s,i,null)}else{if(!("filter"in t))return E();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Sg(i,s),a=r.targetId;n=new Vl(a,o)}}return n}function Lg(e,t){let n;if(t instanceof Yn)n={update:iu(e,t.key,t.value)};else if(t instanceof Cl)n={delete:Is(e,t.key)};else if(t instanceof ce)n={update:iu(e,t.key,t.data),updateMask:Kg(t.fieldMask)};else{if(!(t instanceof Ag))return E();n={verify:Is(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Nr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $n)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Nn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw E()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$g(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:E()}(e,t.precondition)),n}function Fg(e,t){return e&&e.length>0?(k(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Rt(i.updateTime):Rt(s);return o.isEqual(w.min())&&(o=Rt(s)),new Eg(o,i.transformResults||[])}(n,t))):[]}function Bg(e,t){return{documents:[Rs(e,t.path)]}}function Ug(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Rs(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Rs(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return Ll(vt.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Ee(h.field),direction:zg(h.dir)}}(c))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=As(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function jg(e){let t=Ng(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){k(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];n.where&&(s=function(h){const f=Ml(h);return f instanceof vt&&hl(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(A){return new kn(Te(A.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,si(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(h){const f=!!h.before,g=h.values||[];return new $r(g,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,g=h.values||[];return new $r(g,f)}(n.endAt)),ag(t,i,o,s,a,"F",u,c)}function qg(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return E()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ml(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Te(n.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Te(n.unaryFilter.field);return U.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Te(n.unaryFilter.field);return U.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Te(n.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(e):e.fieldFilter!==void 0?function(n){return U.create(Te(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return vt.create(n.compositeFilter.filters.map(r=>Ml(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return E()}}(n.compositeFilter.op))}(e):E()}function zg(e){return Dg[e]}function Gg(e){return Vg[e]}function Hg(e){return xg[e]}function Ee(e){return{fieldPath:e.canonicalString()}}function Te(e){return Q.fromServerFormat(e.fieldPath)}function Ll(e){return e instanceof U?function(n){if(n.op==="=="){if(za(n.value))return{unaryFilter:{field:Ee(n.field),op:"IS_NAN"}};if(qa(n.value))return{unaryFilter:{field:Ee(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(za(n.value))return{unaryFilter:{field:Ee(n.field),op:"IS_NOT_NAN"}};if(qa(n.value))return{unaryFilter:{field:Ee(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ee(n.field),op:Gg(n.op),value:n.value}}}(e):e instanceof vt?function(n){const r=n.getFilters().map(i=>Ll(i));return r.length===1?r[0]:{compositeFilter:{op:Hg(n.op),filters:r}}}(e):E()}function Kg(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Fl(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,n,r,i,s=w.min(),o=w.min(),a=rt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(t){this.ut=t}}function Qg(e){const t=jg({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ws(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.on=new Yg}addToCollectionParentIndex(t,n){return this.on.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(jt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(jt.min())}updateCollectionGroup(t,n,r){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class Yg{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Y(x.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Y(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new ke(0)}static Nn(){return new ke(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.changes=new He(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&_n(r.mutation,i,_t.empty(),j.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,S()).next(()=>r))}getLocalViewOfDocuments(t,n,r=S()){const i=Jt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=ln();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Jt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,S()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=xt();const o=mn(),a=function(){return mn()}();return n.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof ce)?s=s.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),_n(l.mutation,c,l.mutation.getFieldMask(),j.now())):o.set(c.key,_t.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new Zg(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=mn();let i=new N((o,a)=>o-a),s=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||_t.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||S()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Tl();l.forEach(f=>{if(!s.has(f)){const g=Pl(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return v.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ml(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):p.resolve(Jt());let a=-1,u=s;return o.next(c=>p.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?p.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,S())).next(l=>({batchId:a,changes:El(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(r=>{let i=ln();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=ln();return this.indexManager.getCollectionParents(t,s).next(a=>p.forEach(a,u=>{const c=function(h,f){return new Ge(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(l=>{l.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,tt.newInvalidDocument(l)))});let a=ln();return o.forEach((u,c)=>{const l=s.get(u);l!==void 0&&_n(l.mutation,c,_t.empty(),j.now()),ai(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return p.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Rt(i.createTime)}}(n)),p.resolve()}getNamedQuery(t,n){return p.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Qg(i.bundledQuery),readTime:Rt(i.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.overlays=new N(v.comparator),this.lr=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Jt();return p.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),p.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),p.resolve()}getOverlaysForCollection(t,n,r){const i=Jt(),s=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new N((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=Jt(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Jt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return p.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rg(n,r));let s=this.lr.get(n);s===void 0&&(s=S(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.hr=new Y(q.Pr),this.Ir=new Y(q.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new q(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new q(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new v(new x([])),r=new q(n,t),i=new q(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new v(new x([])),r=new q(n,t),i=new q(n,t+1);let s=S();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new q(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class q{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return v.comparator(t.key,n.key)||C(t.gr,n.gr)}static Tr(t,n){return C(t.gr,n.gr)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Y(q.Pr)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ig(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new q(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new q(n,0),i=new q(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Y(C);return n.forEach(i=>{const s=new q(i,0),o=new q(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),p.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;v.isDocumentKey(s)||(s=s.child(""));const o=new q(new v(s),0);let a=new Y(C);return this.yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.gr)),!0)},o),p.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){k(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return p.forEach(n.mutations,i=>{const s=new q(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new q(n,0),i=this.yr.firstAfterOrEqual(r);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t){this.Cr=t,this.docs=function(){return new N(v.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(t,n){let r=xt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=xt();const o=n.path,a=new v(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||zp(qp(l),r)<=0||(i.has(l.key)||ai(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(t,n,r,i){E()}vr(t,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new sm(this)}getSize(t){return p.resolve(this.size)}}class sm extends Jg{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),p.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t){this.persistence=t,this.Fr=new He(n=>ao(n),uo),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Mr=0,this.Or=new fo,this.targetCount=0,this.Nr=ke.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),p.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new ke(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.kn(n),p.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return p.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),p.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),p.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return p.resolve(r)}containsKey(t,n){return p.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,n){this.Br={},this.overlays={},this.Lr=new ro(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new om(this),this.indexManager=new Xg,this.remoteDocumentCache=function(i){return new im(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Wg(n),this.Kr=new em(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new nm,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new rm(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){y("MemoryPersistence","Starting transaction:",t);const i=new um(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return p.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class um extends Hp{constructor(t){super(),this.currentSequenceNumber=t}}class po{constructor(t){this.persistence=t,this.Gr=new fo,this.zr=null}static jr(t){return new po(t)}get Hr(){if(this.zr)return this.zr;throw E()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),p.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),p.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Hr,r=>{const i=v.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,w.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return p.or([()=>p.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=S(),i=S();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new go(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new cm;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(nn()<=O.DEBUG&&y("QueryEngine","SDK will not create cache indexes for query:",ve(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),p.resolve()):(nn()<=O.DEBUG&&y("QueryEngine","Query:",ve(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(nn()<=O.DEBUG&&y("QueryEngine","The SDK decides to create cache indexes for query:",ve(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,It(n))):p.resolve())}zi(t,n){if(Wa(n))return p.resolve(null);let r=It(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ws(n,null,"F"),r=It(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=S(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Yi(n,a);return this.Zi(n,c,o,u.readTime)?this.zi(t,ws(n,null,"F")):this.Xi(t,c,n,u)}))})))}ji(t,n,r,i){return Wa(n)||i.isEqual(w.min())?p.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?p.resolve(null):(nn()<=O.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ve(n)),this.Xi(t,o,n,jp(i,-1)).next(a=>a))})}Yi(t,n){let r=new Y(yl(t));return n.forEach((i,s)=>{ai(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return nn()<=O.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",ve(n)),this.Gi.getDocumentsMatchingQuery(t,n,jt.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new N(C),this.ns=new He(s=>ao(s),uo),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tm(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function fm(e,t,n,r){return new hm(e,t,n,r)}async function Bl(e,t){const n=R(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=S();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function dm(e,t){const n=R(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,f=h.keys();let g=p.resolve();return f.forEach(A=>{g=g.next(()=>l.getEntry(u,A)).next(b=>{const I=c.docVersions.get(A);k(I!==null),b.version.compareTo(I)<0&&(h.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),l.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=S();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ul(e){const t=R(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function pm(e,t){const n=R(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,l.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(rt.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),i=i.insert(h,g),function(b,I,L){return b.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(f,g,l)&&a.push(n.qr.updateTargetData(s,g))});let u=xt(),c=S();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(gm(s,o,t.documentUpdates).next(l=>{u=l.us,c=l.cs})),!r.isEqual(w.min())){const l=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ts=i,s))}function gm(e,t,n){let r=S(),i=S();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=xt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(w.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{us:o,cs:i}})}function mm(e,t){const n=R(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function _m(e,t){const n=R(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,p.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new $t(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function bs(e,t,n){const r=R(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xn(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function su(e,t,n){const r=R(e);let i=w.min(),s=S();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=R(u),f=h.ns.get(l);return f!==void 0?p.resolve(h.ts.get(f)):h.qr.getTargetData(c,l)}(r,o,It(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?i:w.min(),n?s:S())).next(a=>(ym(r,cg(t),a),{documents:a,ls:s})))}function ym(e,t,n){let r=e.rs.get(t)||w.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.rs.set(t,r)}class ou{constructor(){this.activeTargetIds=gg()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vm{constructor(){this.eo=new ou,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new ou,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr=null;function Bi(){return dr===null?dr=function(){return 268435456+Math.round(2147483648*Math.random())}():dr++,"0x"+dr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="WebChannelConnection";class Am extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Bi(),u=this.So(n,r);y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,s,o),this.Do(n,u,c,i).then(l=>(y("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Ce("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qe}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=Tm[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=Bi();return new Promise((o,a)=>{const u=new Dp;u.setWithCredentials(!0),u.listenOnce(Pp.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Li.NO_ERROR:const l=u.getResponseJson();y(J,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Li.TIMEOUT:y(J,`RPC '${t}' ${s} timed out`),a(new _(d.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const h=u.getStatus();if(y(J,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const A=function(I){const L=I.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(L)>=0?L:d.UNKNOWN}(g.status);a(new _(A,g.message))}else a(new _(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new _(d.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{y(J,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);y(J,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}vo(t,n,r){const i=Bi(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Sp(),a=bp(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Cp({})),this.bo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=s.join("");y(J,`Creating RPC '${t}' stream ${i}: ${l}`,u);const h=o.createWebChannel(l,u);let f=!1,g=!1;const A=new wm({co:I=>{g?y(J,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(f||(y(J,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),y(J,`RPC '${t}' stream ${i} sending:`,I),h.send(I))},lo:()=>h.close()}),b=(I,L,it)=>{I.listen(L,ut=>{try{it(ut)}catch(bt){setTimeout(()=>{throw bt},0)}})};return b(h,lr.EventType.OPEN,()=>{g||y(J,`RPC '${t}' stream ${i} transport opened.`)}),b(h,lr.EventType.CLOSE,()=>{g||(g=!0,y(J,`RPC '${t}' stream ${i} transport closed`),A.Ro())}),b(h,lr.EventType.ERROR,I=>{g||(g=!0,Ce(J,`RPC '${t}' stream ${i} transport errored:`,I),A.Ro(new _(d.UNAVAILABLE,"The operation could not be completed")))}),b(h,lr.EventType.MESSAGE,I=>{var L;if(!g){const it=I.data[0];k(!!it);const ut=it,bt=ut.error||((L=ut[0])===null||L===void 0?void 0:L.error);if(bt){y(J,`RPC '${t}' stream ${i} received error:`,bt);const Je=bt.status;let Ze=function(Xh){const ga=F[Xh];if(ga!==void 0)return Dl(ga)}(Je),pa=bt.message;Ze===void 0&&(Ze=d.INTERNAL,pa="Unknown error status: "+Je+" with message "+bt.message),g=!0,A.Ro(new _(Ze,pa)),h.close()}else y(J,`RPC '${t}' stream ${i} received:`,it),A.Vo(it)}}),b(a,Op.STAT_EVENT,I=>{I.stat===Ma.PROXY?y(J,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===Ma.NOPROXY&&y(J,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.Ao()},0),A}}function Ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e){return new kg(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new jl(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Vt(n.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new _(d.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Im extends ql{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=Mg(this.serializer,t),r=function(s){if(!("targetChange"in s))return w.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?Rt(o.readTime):w.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=Ss(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Es(u)?{documents:Bg(s,u)}:{query:Ug(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=kl(s,o.resumeToken);const c=As(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=Lr(s,o.snapshotVersion.toTimestamp());const c=As(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=qg(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=Ss(this.serializer),n.removeTarget=t,this.e_(n)}}class Rm extends ql{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=Fg(t.writeResults,t.commitTime),r=Rt(t.commitTime);return this.listener.I_(r,n)}return k(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Ss(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Lg(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(d.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(d.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class bm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Vt(n),this.f_=!1):y("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{le(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=R(u);c.C_.add(4),await Zn(c),c.M_.set("Unknown"),c.C_.delete(4),await fi(c)}(this))})}),this.M_=new bm(r,i)}}async function fi(e){if(le(e))for(const t of e.v_)await t(!0)}async function Zn(e){for(const t of e.v_)await t(!1)}function zl(e,t){const n=R(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),yo(n)?_o(n):Ke(n).Ho()&&mo(n,t))}function Gl(e,t){const n=R(e),r=Ke(n);n.D_.delete(t),r.Ho()&&Hl(n,t),n.D_.size===0&&(r.Ho()?r.Zo():le(n)&&n.M_.set("Unknown"))}function mo(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ke(e).u_(t)}function Hl(e,t){e.x_.Oe(t),Ke(e).c_(t)}function _o(e){e.x_=new Cg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ke(e).start(),e.M_.g_()}function yo(e){return le(e)&&!Ke(e).jo()&&e.D_.size>0}function le(e){return R(e).C_.size===0}function Kl(e){e.x_=void 0}async function Om(e){e.D_.forEach((t,n)=>{mo(e,t)})}async function Cm(e,t){Kl(e),yo(e)?(e.M_.w_(t),_o(e)):e.M_.set("Unknown")}async function Dm(e,t,n){if(e.M_.set("Online"),t instanceof xl&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Fr(e,r)}else if(t instanceof Tr?e.x_.$e(t):t instanceof Vl?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(w.min()))try{const r=await Ul(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.D_.get(c);l&&s.D_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=s.D_.get(u);if(!l)return;s.D_.set(u,l.withResumeToken(rt.EMPTY_BYTE_STRING,l.snapshotVersion)),Hl(s,u);const h=new $t(l.target,u,c,l.sequenceNumber);mo(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await Fr(e,r)}}async function Fr(e,t,n){if(!Xn(t))throw t;e.C_.add(1),await Zn(e),e.M_.set("Offline"),n||(n=()=>Ul(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await fi(e)})}function Wl(e,t){return t().catch(n=>Fr(e,n,t))}async function di(e){const t=R(e),n=zt(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;Vm(t);)try{const i=await mm(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,xm(t,i)}catch(i){await Fr(t,i)}Ql(t)&&Xl(t)}function Vm(e){return le(e)&&e.b_.length<10}function xm(e,t){e.b_.push(t);const n=zt(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function Ql(e){return le(e)&&!zt(e).jo()&&e.b_.length>0}function Xl(e){zt(e).start()}async function km(e){zt(e).E_()}async function $m(e){const t=zt(e);for(const n of e.b_)t.P_(n.mutations)}async function Nm(e,t,n){const r=e.b_.shift(),i=co.from(r,t,n);await Wl(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await di(e)}async function Mm(e,t){t&&zt(e).h_&&await async function(r,i){if(function(o){return bg(o)&&o!==d.ABORTED}(i.code)){const s=r.b_.shift();zt(r).Yo(),await Wl(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await di(r)}}(e,t),Ql(e)&&Xl(e)}async function uu(e,t){const n=R(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=le(n);n.C_.add(3),await Zn(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await fi(n)}async function Lm(e,t){const n=R(e);t?(n.C_.delete(2),await fi(n)):t||(n.C_.add(2),await Zn(n),n.M_.set("Unknown"))}function Ke(e){return e.O_||(e.O_=function(n,r,i){const s=R(n);return s.A_(),new Im(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:Om.bind(null,e),Io:Cm.bind(null,e),a_:Dm.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),yo(e)?_o(e):e.M_.set("Unknown")):(await e.O_.stop(),Kl(e))})),e.O_}function zt(e){return e.N_||(e.N_=function(n,r,i){const s=R(n);return s.A_(),new Rm(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:km.bind(null,e),Io:Mm.bind(null,e),T_:$m.bind(null,e),I_:Nm.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await di(e)):(await e.N_.stop(),e.b_.length>0&&(y("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new vo(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eo(e,t){if(Vt("AsyncQueue",`${t}: ${e}`),Xn(e))return new _(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.comparator=t?(n,r)=>t(n,r)||v.comparator(n.key,r.key):(n,r)=>v.comparator(n.key,r.key),this.keyedMap=ln(),this.sortedSet=new N(this.comparator)}static emptySet(t){return new be(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new be;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.B_=new N(v.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):E():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class $e{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $e(t,n,be.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&oi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.k_=void 0,this.listeners=[]}}class Bm{constructor(){this.queries=new He(t=>_l(t),oi),this.onlineState="Unknown",this.q_=new Set}}async function Um(e,t){const n=R(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Fm),i)try{s.k_=await n.onListen(r)}catch(o){const a=Eo(o,`Initialization of query '${ve(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&To(n)}async function jm(e,t){const n=R(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qm(e,t){const n=R(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&To(n)}function zm(e,t,n){const r=R(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function To(e){e.q_.forEach(t=>{t.next()})}class Gm{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new $e(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=$e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.key=t}}class Jl{constructor(t){this.key=t}}class Hm{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=S(),this.mutatedKeys=S(),this._a=yl(t),this.aa=new be(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new cu,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const f=i.get(l),g=ai(this.query,h)?h:null,A=!!f&&this.mutatedKeys.has(f.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;f&&g?f.data.isEqual(g.data)?A!==b&&(r.track({type:3,doc:g}),I=!0):this.ha(f,g)||(r.track({type:2,doc:g}),I=!0,(u&&this._a(g,u)>0||c&&this._a(g,c)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),I=!0):f&&!g&&(r.track({type:1,doc:f}),I=!0,(u||c)&&(a=!0)),I&&(g?(o=o.add(g),s=b?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((c,l)=>function(f,g){const A=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return A(f)-A(g)}(c.type,l.type)||this._a(c.doc,l.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,s.length!==0||u?{snapshot:new $e(this.query,t.aa,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new cu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=S(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new Jl(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new Yl(r))}),n}da(t){this.ia=t.ls,this.oa=S();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return $e.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Km{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Wm{constructor(t){this.key=t,this.Ra=!1}}class Qm{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new He(a=>_l(a),oi),this.fa=new Map,this.ga=new Set,this.pa=new N(v.comparator),this.ya=new Map,this.wa=new fo,this.Sa={},this.ba=new Map,this.Da=ke.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Xm(e,t){const n=o_(e);let r,i;const s=n.ma.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await _m(n.localStore,It(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ym(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&zl(n.remoteStore,o)}return i}async function Ym(e,t,n,r,i){e.va=(h,f,g)=>async function(b,I,L,it){let ut=I.view.ca(L);ut.Zi&&(ut=await su(b.localStore,I.query,!1).then(({documents:Ze})=>I.view.ca(Ze,ut)));const bt=it&&it.targetChanges.get(I.targetId),Je=I.view.applyChanges(ut,b.isPrimaryClient,bt);return hu(b,I.targetId,Je.Ta),Je.snapshot}(e,h,f,g);const s=await su(e.localStore,t,!0),o=new Hm(t,s.ls),a=o.ca(s.documents),u=Jn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);hu(e,n,c.Ta);const l=new Km(t,n,o);return e.ma.set(t,l),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),c.snapshot}async function Jm(e,t){const n=R(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!oi(s,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Gl(n.remoteStore,r.targetId),Ps(n,r.targetId)}).catch(Qn)):(Ps(n,r.targetId),await bs(n.localStore,r.targetId,!0))}async function Zm(e,t,n){const r=a_(e);try{const i=await function(o,a){const u=R(o),c=j.now(),l=a.reduce((g,A)=>g.add(A.key),S());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let A=xt(),b=S();return u.ss.getEntries(g,l).next(I=>{A=I,A.forEach((L,it)=>{it.isValidDocument()||(b=b.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,A)).next(I=>{h=I;const L=[];for(const it of a){const ut=wg(it,h.get(it.key).overlayedDocument);ut!=null&&L.push(new ce(it.key,ut,ul(ut.value.mapValue),Ot.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,L,a)}).next(I=>{f=I;const L=I.applyToLocalDocumentSet(h,b);return u.documentOverlayCache.saveOverlays(g,I.batchId,L)})}).then(()=>({batchId:f.batchId,changes:El(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Sa[o.currentUser.toKey()];c||(c=new N(C)),c=c.insert(a,u),o.Sa[o.currentUser.toKey()]=c}(r,i.batchId,n),await tr(r,i.changes),await di(r.remoteStore)}catch(i){const s=Eo(i,"Failed to persist write");n.reject(s)}}async function Zl(e,t){const n=R(e);try{const r=await pm(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(k(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?k(o.Ra):i.removedDocuments.size>0&&(k(o.Ra),o.Ra=!1))}),await tr(n,r,t)}catch(r){await Qn(r)}}function lu(e,t,n){const r=R(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=R(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const f of h.listeners)f.Q_(a)&&(c=!0)}),c&&To(u)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function t_(e,t,n){const r=R(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new N(v.comparator);o=o.insert(s,tt.newNoDocument(s,w.min()));const a=S().add(s),u=new li(w.min(),new Map,new N(C),o,a);await Zl(r,u),r.pa=r.pa.remove(s),r.ya.delete(t),wo(r)}else await bs(r.localStore,t,!1).then(()=>Ps(r,t,n)).catch(Qn)}async function e_(e,t){const n=R(e),r=t.batch.batchId;try{const i=await dm(n.localStore,t);eh(n,r,null),th(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tr(n,i)}catch(i){await Qn(i)}}async function n_(e,t,n){const r=R(e);try{const i=await function(o,a){const u=R(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(k(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);eh(r,t,n),th(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await tr(r,i)}catch(i){await Qn(i)}}function th(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function eh(e,t,n){const r=R(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function Ps(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||nh(e,r)})}function nh(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(Gl(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),wo(e))}function hu(e,t,n){for(const r of n)r instanceof Yl?(e.wa.addReference(r.key,t),r_(e,r)):r instanceof Jl?(y("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||nh(e,r.key)):E()}function r_(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(y("SyncEngine","New document in limbo: "+n),e.ga.add(r),wo(e))}function wo(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new v(x.fromString(t)),r=e.Da.next();e.ya.set(r,new Wm(n)),e.pa=e.pa.insert(n,r),zl(e.remoteStore,new $t(It(gl(n.path)),r,"TargetPurposeLimboResolution",ro._e))}}async function tr(e,t,n){const r=R(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=go.Qi(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(u,c){const l=R(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,f=>p.forEach(f.ki,g=>l.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>p.forEach(f.qi,g=>l.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!Xn(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const g=l.ts.get(f),A=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(A);l.ts=l.ts.insert(f,b)}}}(r.localStore,s))}async function i_(e,t){const n=R(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const r=await Bl(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(u=>{u.reject(new _(d.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await tr(n,r._s)}}function s_(e,t){const n=R(e),r=n.ya.get(t);if(r&&r.Ra)return S().add(r.key);{let i=S();const s=n.fa.get(t);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function o_(e){const t=R(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=s_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=t_.bind(null,t),t.Va.a_=qm.bind(null,t.eventManager),t.Va.Fa=zm.bind(null,t.eventManager),t}function a_(e){const t=R(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=e_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=n_.bind(null,t),t}class fu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=hi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return fm(this.persistence,new lm,t.initialUser,this.serializer)}createPersistence(t){return new am(po.jr,this.serializer)}createSharedClientState(t){return new vm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class u_{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=i_.bind(null,this.syncEngine),await Lm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Bm}()}createDatastore(t){const n=hi(t.databaseInfo.databaseId),r=function(s){return new Am(s)}(t.databaseInfo);return function(s,o,a,u){return new Sm(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Pm(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>lu(this.syncEngine,n,0),function(){return au.D()?new au:new Em}())}createSyncEngine(t,n){return function(i,s,o,a,u,c,l){const h=new Qm(i,s,o,a,u,c);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=R(n);y("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Zn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Vt("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=sl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Eo(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ji(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function du(e,t){e.asyncQueue.verifyOperationInProgress();const n=await f_(e);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>uu(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>uu(t.remoteStore,s)),e._onlineComponents=t}function h_(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function f_(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await ji(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!h_(n))throw n;Ce("Error using user provided cache. Falling back to memory cache: "+n),await ji(e,new fu)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await ji(e,new fu);return e._offlineComponents}async function rh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await du(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await du(e,new u_))),e._onlineComponents}function d_(e){return rh(e).then(t=>t.syncEngine)}async function p_(e){const t=await rh(e),n=t.eventManager;return n.onListen=Xm.bind(null,t.syncEngine),n.onUnlisten=Jm.bind(null,t.syncEngine),n}function g_(e,t,n={}){const r=new Lt;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new c_({next:f=>{o.enqueueAndForget(()=>jm(s,h)),f.fromCache&&u.source==="server"?c.reject(new _(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Gm(a,l,{includeMetadataChanges:!0,J_:!0});return Um(s,h)}(await p_(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(e,t,n){if(!n)throw new _(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function m_(e,t,n,r){if(t===!0&&r===!0)throw new _(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function gu(e){if(!v.isDocumentKey(e))throw new _(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function mu(e){if(v.isDocumentKey(e))throw new _(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function pi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":E()}function Br(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pi(e);throw new _(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}m_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ih((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gi{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _u({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _u(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xp;switch(r.type){case"firstParty":return new Mp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pu.get(n);r&&(y("ComponentProvider","Removing Datastore"),pu.delete(n),r.terminate())}(this),Promise.resolve()}}function __(e,t,n,r={}){var i;const s=(e=Br(e,gi))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Z.MOCK_USER;else{a=lf(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new _(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Z(c)}e._authCredentials=new kp(new il(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new he(this.firestore,t,this._query)}}class gt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}}class Ft extends he{constructor(t,n,r){super(t,n,gl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new v(t))}withConverter(t){return new Ft(this.firestore,t,this._path)}}function y_(e,t,...n){if(e=Pe(e),sh("collection","path",t),e instanceof gi){const r=x.fromString(t,...n);return mu(r),new Ft(e,null,r)}{if(!(e instanceof gt||e instanceof Ft))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(x.fromString(t,...n));return mu(r),new Ft(e.firestore,null,r)}}function v_(e,t,...n){if(e=Pe(e),arguments.length===1&&(t=sl.newId()),sh("doc","path",t),e instanceof gi){const r=x.fromString(t,...n);return gu(r),new gt(e,null,new v(r))}{if(!(e instanceof gt||e instanceof Ft))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(x.fromString(t,...n));return gu(r),new gt(e.firestore,e instanceof Ft?e.converter:null,new v(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new jl(this,"async_queue_retry"),this.iu=()=>{const n=Ui();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Ui();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Lt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Xn(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=vo.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&E()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class Ao extends gi{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new E_}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ah(this),this._firestoreClient.terminate()}}function T_(e,t){const n=typeof e=="object"?e:pd(),r=typeof e=="string"?e:t||"(default)",i=ld(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uf("firestore");s&&__(i,...s)}return i}function oh(e){return e._firestoreClient||ah(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ah(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,c,l){return new Qp(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ih(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new l_(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(rt.fromBase64String(t))}catch(n){throw new _(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ne(rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=/^__.*__$/;class A_{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,n,this.fieldTransforms):new Yn(t,this.data,n,this.fieldTransforms)}}function ch(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class So{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new So(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Ur(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(ch(this.Iu)&&w_.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class I_{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||hi(t)}pu(t,n,r,i=!1){return new So({Iu:t,methodName:n,gu:r,path:Q.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lh(e){const t=e._freezeSettings(),n=hi(e._databaseId);return new I_(e._databaseId,!!t.ignoreUndefinedProperties,n)}function R_(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);dh("Data must be an object, but it was:",o,r);const a=hh(r,o);let u,c;if(s.merge)u=new _t(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const f=b_(t,h,n);if(!o.contains(f))throw new _(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);O_(l,f)||l.push(f)}u=new _t(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new A_(new dt(a),u,c)}function S_(e,t,n,r=!1){return bo(n,e.pu(r?4:3,t))}function bo(e,t){if(fh(e=Pe(e)))return dh("Unsupported field value:",t,e),hh(e,t);if(e instanceof uh)return function(r,i){if(!ch(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=bo(a,i.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=j.fromDate(r);return{timestampValue:Lr(i.serializer,s)}}if(r instanceof j){const s=new j(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lr(i.serializer,s)}}if(r instanceof Ro)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ne)return{bytesValue:kl(i.serializer,r._byteString)};if(r instanceof gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ho(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${pi(r)}`)}(e,t)}function hh(e,t){const n={};return ol(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ze(e,(r,i)=>{const s=bo(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fh(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof j||e instanceof Ro||e instanceof Ne||e instanceof gt||e instanceof uh)}function dh(e,t,n){if(!fh(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=pi(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function b_(e,t,n){if((t=Pe(t))instanceof Io)return t._internalPath;if(typeof t=="string")return ph(e,t);throw Ur("Field path arguments must be of type string or ",e,!1,void 0,n)}const P_=new RegExp("[~\\*/\\[\\]]");function ph(e,t,n){if(t.search(P_)>=0)throw Ur(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Io(...t.split("."))._internalPath}catch{throw Ur(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ur(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new _(d.INVALID_ARGUMENT,a+e+u)}function O_(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new C_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Po("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class C_ extends gh{data(){return super.data()}}function Po(e,t){return typeof t=="string"?ph(e,t):t instanceof Io?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new _(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oo{}class mh extends Oo{}function V_(e,t,...n){let r=[];t instanceof Oo&&r.push(t),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Do).length,a=s.filter(u=>u instanceof Co).length;if(o>1||o>0&&a>0)throw new _(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class Co extends mh{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Co(t,n,r)}_apply(t){const n=this._parse(t);return _h(t._query,n),new he(t.firestore,t.converter,Ts(t._query,n))}_parse(t){const n=lh(t.firestore);return function(s,o,a,u,c,l,h){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){vu(h,l);const g=[];for(const A of h)g.push(yu(u,s,A));f={arrayValue:{values:g}}}else f=yu(u,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||vu(h,l),f=S_(a,o,h,l==="in"||l==="not-in");return U.create(c,l,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Do extends Oo{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Do(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)_h(o,u),o=Ts(o,u)}(t._query,n),new he(t.firestore,t.converter,Ts(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vo extends mh{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Vo(t,n)}_apply(t){const n=function(i,s,o){if(i.startAt!==null)throw new _(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new _(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kn(s,o)}(t._query,this._field,this._direction);return new he(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ge(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,n))}}function x_(e,t="asc"){const n=t,r=Po("orderBy",e);return Vo._create(r,n)}function yu(e,t,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new _(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ml(t)&&n.indexOf("/")!==-1)throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(x.fromString(n));if(!v.isDocumentKey(r))throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ja(e,new v(r))}if(n instanceof gt)return ja(e,n._key);throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pi(n)}.`)}function vu(e,t){if(!Array.isArray(e)||e.length===0)throw new _(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function _h(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new _(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class k_{convertValue(t,n="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return B(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(se(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw E()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ze(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Ro(B(t.latitude),B(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=so(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Dn(t));default:return null}}convertTimestamp(t){const n=qt(t);return new j(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=x.fromString(t);k(Fl(r));const i=new Vn(r.get(1),r.get(3)),s=new v(r.popFirst(5));return i.isEqual(n)||Vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class N_ extends gh{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Po("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wr extends N_{data(t={}){return super.data(t)}}class M_{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new pr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new wr(this._firestore,this._userDataWriter,r.key,r,new pr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new wr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new wr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:L_(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function L_(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}class F_ extends k_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function B_(e){e=Br(e,he);const t=Br(e.firestore,Ao),n=oh(t),r=new F_(t);return D_(e._query),g_(n,e._query).then(i=>new M_(t,r,e,i))}function U_(e,t){const n=Br(e.firestore,Ao),r=v_(e),i=$_(e.converter,t);return j_(n,[R_(lh(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Ot.exists(!1))]).then(()=>r)}function j_(e,t){return function(r,i){const s=new Lt;return r.asyncQueue.enqueueAndForget(async()=>Zm(await d_(r),i,s)),s.promise}(oh(e),t)}(function(t,n=!0){(function(i){qe=i})(dd),Sr(new En("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ao(new $p(r.getProvider("auth-internal")),new Fp(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new _(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vn(c.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ie(La,"4.3.2",t),Ie(La,"4.3.2","esm2017")})();const q_=Zu(Yh.firebaseConfig),z_=T_(q_),G_=async e=>{const t=y_(z_,"tickets"),n=V_(t,x_("timestamp","desc"));try{const i=(await B_(n)).size+1,s={...e,ticketNumber:i,timestamp:new Date};return await U_(t,s),i}catch(r){throw console.error("Error al comprar ticket: ",r),new Error("Error al comprar ticket")}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar=globalThis,xo=Ar.ShadowRoot&&(Ar.ShadyCSS===void 0||Ar.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ko=Symbol(),Eu=new WeakMap;let yh=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==ko)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(xo&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Eu.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Eu.set(n,t))}return t}toString(){return this.cssText}};const H_=e=>new yh(typeof e=="string"?e:e+"",void 0,ko),$o=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new yh(n,e,ko)},K_=(e,t)=>{if(xo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Ar.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Tu=xo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return H_(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:W_,defineProperty:Q_,getOwnPropertyDescriptor:X_,getOwnPropertyNames:Y_,getOwnPropertySymbols:J_,getPrototypeOf:Z_}=Object,Bt=globalThis,wu=Bt.trustedTypes,ty=wu?wu.emptyScript:"",qi=Bt.reactiveElementPolyfillSupport,yn=(e,t)=>e,Os={toAttribute(e,t){switch(t){case Boolean:e=e?ty:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},vh=(e,t)=>!W_(e,t),Au={attribute:!0,type:String,converter:Os,reflect:!1,hasChanged:vh};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Bt.litPropertyMetadata??(Bt.litPropertyMetadata=new WeakMap);class we extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Au){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Q_(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=X_(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const a=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Au}static _$Ei(){if(this.hasOwnProperty(yn("elementProperties")))return;const t=Z_(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yn("properties"))){const n=this.properties,r=[...Y_(n),...J_(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Tu(i))}else t!==void 0&&n.push(Tu(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$ES)==null||n.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return K_(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Os).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){var s;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Os;this._$Em=i,this[i]=a.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(t,n,r,i=!1,s){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??vh)(i?s:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$ES)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(n)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}}we.elementStyles=[],we.shadowRootOptions={mode:"open"},we[yn("elementProperties")]=new Map,we[yn("finalized")]=new Map,qi==null||qi({ReactiveElement:we}),(Bt.reactiveElementVersions??(Bt.reactiveElementVersions=[])).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn=globalThis,jr=vn.trustedTypes,Iu=jr?jr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Eh="$lit$",kt=`lit$${(Math.random()+"").slice(9)}$`,Th="?"+kt,ey=`<${Th}>`,ae=document,Mn=()=>ae.createComment(""),Ln=e=>e===null||typeof e!="object"&&typeof e!="function",wh=Array.isArray,ny=e=>wh(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",zi=`[ 	
\f\r]`,rn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ru=/-->/g,Su=/>/g,Wt=RegExp(`>|${zi}(?:([^\\s"'>=/]+)(${zi}*=${zi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bu=/'/g,Pu=/"/g,Ah=/^(?:script|style|textarea|title)$/i,ry=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),qr=ry(1),Me=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Ou=new WeakMap,Zt=ae.createTreeWalker(ae,129);function Ih(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Iu!==void 0?Iu.createHTML(t):t}const iy=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":"",o=rn;for(let a=0;a<n;a++){const u=e[a];let c,l,h=-1,f=0;for(;f<u.length&&(o.lastIndex=f,l=o.exec(u),l!==null);)f=o.lastIndex,o===rn?l[1]==="!--"?o=Ru:l[1]!==void 0?o=Su:l[2]!==void 0?(Ah.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=Wt):l[3]!==void 0&&(o=Wt):o===Wt?l[0]===">"?(o=i??rn,h=-1):l[1]===void 0?h=-2:(h=o.lastIndex-l[2].length,c=l[1],o=l[3]===void 0?Wt:l[3]==='"'?Pu:bu):o===Pu||o===bu?o=Wt:o===Ru||o===Su?o=rn:(o=Wt,i=void 0);const g=o===Wt&&e[a+1].startsWith("/>")?" ":"";s+=o===rn?u+ey:h>=0?(r.push(c),u.slice(0,h)+Eh+u.slice(h)+kt+g):u+kt+(h===-2?a:g)}return[Ih(e,s+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class Fn{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[c,l]=iy(t,n);if(this.el=Fn.createElement(c,r),Zt.currentNode=this.el.content,n===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Zt.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Eh)){const f=l[o++],g=i.getAttribute(h).split(kt),A=/([.?@])?(.*)/.exec(f);u.push({type:1,index:s,name:A[2],strings:g,ctor:A[1]==="."?oy:A[1]==="?"?ay:A[1]==="@"?uy:mi}),i.removeAttribute(h)}else h.startsWith(kt)&&(u.push({type:6,index:s}),i.removeAttribute(h));if(Ah.test(i.tagName)){const h=i.textContent.split(kt),f=h.length-1;if(f>0){i.textContent=jr?jr.emptyScript:"";for(let g=0;g<f;g++)i.append(h[g],Mn()),Zt.nextNode(),u.push({type:2,index:++s});i.append(h[f],Mn())}}}else if(i.nodeType===8)if(i.data===Th)u.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(kt,h+1))!==-1;)u.push({type:7,index:s}),h+=kt.length-1}s++}}static createElement(t,n){const r=ae.createElement("template");return r.innerHTML=t,r}}function Le(e,t,n=e,r){var o,a;if(t===Me)return t;let i=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const s=Ln(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=Le(e,i._$AS(e,t.values),i,r)),t}class sy{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??ae).importNode(n,!0);Zt.currentNode=i;let s=Zt.nextNode(),o=0,a=0,u=r[0];for(;u!==void 0;){if(o===u.index){let c;u.type===2?c=new er(s,s.nextSibling,this,t):u.type===1?c=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(c=new cy(s,this,t)),this._$AV.push(c),u=r[++a]}o!==(u==null?void 0:u.index)&&(s=Zt.nextNode(),o++)}return Zt.currentNode=ae,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class er{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Le(this,t,n),Ln(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==Me&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ny(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&Ln(this._$AH)?this._$AA.nextSibling.data=t:this.$(ae.createTextNode(t)),this._$AH=t}g(t){var s;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Fn.createElement(Ih(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(n);else{const o=new sy(i,this),a=o.u(this.options);o.p(n),this.$(a),this._$AH=o}}_$AC(t){let n=Ou.get(t.strings);return n===void 0&&Ou.set(t.strings,n=new Fn(t)),n}T(t){wh(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new er(this.k(Mn()),this.k(Mn()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class mi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=z}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=Le(this,t,n,0),o=!Ln(t)||t!==this._$AH&&t!==Me,o&&(this._$AH=t);else{const a=t;let u,c;for(t=s[0],u=0;u<s.length-1;u++)c=Le(this,a[r+u],n,u),c===Me&&(c=this._$AH[u]),o||(o=!Ln(c)||c!==this._$AH[u]),c===z?t=z:t!==z&&(t+=(c??"")+s[u+1]),this._$AH[u]=c}o&&!i&&this.O(t)}O(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class oy extends mi{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===z?void 0:t}}class ay extends mi{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class uy extends mi{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=Le(this,t,n,0)??z)===Me)return;const r=this._$AH,i=t===z&&r!==z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==z&&(r===z||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class cy{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Le(this,t)}}const Gi=vn.litHtmlPolyfillSupport;Gi==null||Gi(Fn,er),(vn.litHtmlVersions??(vn.litHtmlVersions=[])).push("3.0.2");const ly=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const s=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new er(t.insertBefore(Mn(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ee extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ly(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Me}}var zu;ee._$litElement$=!0,ee.finalized=!0,(zu=globalThis.litElementHydrateSupport)==null||zu.call(globalThis,{LitElement:ee});const Hi=globalThis.litElementPolyfillSupport;Hi==null||Hi({LitElement:ee});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");class hy extends ee{static get properties(){return{targetDate:{type:Number},timeRemaining:{type:Object}}}constructor(){super();const t=this.getAttribute("eventDate");this.targetDate=new Date(t).getTime(),this.timeRemaining={days:0,hours:0,minutes:0,seconds:0}}static get styles(){return $o`
      .countdown {
        font-size: 1.2em;
        text-align: center;
        color: rgb(250, 202, 21);
      }

      .box-timer {
        display: inline;
        color: white;
        font-weight: 500;
        padding: 6px 8px;
        text-align: center;
        border-radius: 6px;
        background-color: #1e1e2a;
      }
    `}connectedCallback(){super.connectedCallback(),this.updateTime(),this.timerID=setInterval(()=>this.updateTime(),1e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timerID)}updateTime(){const t=new Date().getTime(),n=this.targetDate-t;if(n<0){clearInterval(this.timerID),this.timeRemaining={days:0,hours:0,minutes:0,seconds:0};return}this.timeRemaining={days:Math.floor(n/(1e3*60*60*24)),hours:Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),minutes:Math.floor(n%(1e3*60*60)/(1e3*60)),seconds:Math.floor(n%(1e3*60)/1e3)}}render(){const{days:t,hours:n,minutes:r,seconds:i}=this.timeRemaining;return qr`
      <div class="countdown">
        <h2>ProJamboree</h2>
        <div class="box-timer">${t}d</div>
        :
        <div class="box-timer">${n}h</div>
        :
        <div class="box-timer">${r}m</div>
        :
        <div class="box-timer">${i}s</div>
      </div>
    `}}customElements.define("countdown-timer",hy);function fy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var No={},_i={},at={};Object.defineProperty(at,"__esModule",{value:!0});function dy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var py=function e(t,n){dy(this,e),this.data=t,this.text=n.text||t,this.options=n};at.default=py;Object.defineProperty(_i,"__esModule",{value:!0});_i.CODE39=void 0;var gy=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),my=at,_y=yy(my);function yy(e){return e&&e.__esModule?e:{default:e}}function vy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ey(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Ty(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var wy=function(e){Ty(t,e);function t(n,r){return vy(this,t),n=n.toUpperCase(),r.mod43&&(n+=Ry(Sy(n))),Ey(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r))}return gy(t,[{key:"encode",value:function(){for(var r=Ki("*"),i=0;i<this.data.length;i++)r+=Ki(this.data[i])+"0";return r+=Ki("*"),{data:r,text:this.text}}},{key:"valid",value:function(){return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)!==-1}}]),t}(_y.default),Rh=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],Ay=[20957,29783,23639,30485,20951,29813,23669,20855,29789,23645,29975,23831,30533,22295,30149,24005,21623,29981,23837,22301,30023,23879,30545,22343,30161,24017,21959,30065,23921,22385,29015,18263,29141,17879,29045,18293,17783,29021,18269,17477,17489,17681,20753,35770];function Ki(e){return Iy(Sh(e))}function Iy(e){return Ay[e].toString(2)}function Ry(e){return Rh[e]}function Sh(e){return Rh.indexOf(e)}function Sy(e){for(var t=0,n=0;n<e.length;n++)t+=Sh(e[n]);return t=t%43,t}_i.CODE39=wy;var At={},Mo={},We={},$={};Object.defineProperty($,"__esModule",{value:!0});var sn;function Wi(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var bh=$.SET_A=0,Ph=$.SET_B=1,Oh=$.SET_C=2;$.SHIFT=98;var by=$.START_A=103,Py=$.START_B=104,Oy=$.START_C=105;$.MODULO=103;$.STOP=106;$.FNC1=207;$.SET_BY_CODE=(sn={},Wi(sn,by,bh),Wi(sn,Py,Ph),Wi(sn,Oy,Oh),sn);$.SWAP={101:bh,100:Ph,99:Oh};$.A_START_CHAR=String.fromCharCode(208);$.B_START_CHAR=String.fromCharCode(209);$.C_START_CHAR=String.fromCharCode(210);$.A_CHARS="[\0-_È-Ï]";$.B_CHARS="[ -È-Ï]";$.C_CHARS="(Ï*[0-9]{2}Ï*)";$.BARS=[11011001100,11001101100,11001100110,10010011e3,10010001100,10001001100,10011001e3,10011000100,10001100100,11001001e3,11001000100,11000100100,10110011100,10011011100,10011001110,10111001100,10011101100,10011100110,11001110010,11001011100,11001001110,11011100100,11001110100,11101101110,11101001100,11100101100,11100100110,11101100100,11100110100,11100110010,11011011e3,11011000110,11000110110,10100011e3,10001011e3,10001000110,10110001e3,10001101e3,10001100010,11010001e3,11000101e3,11000100010,10110111e3,10110001110,10001101110,10111011e3,10111000110,10001110110,11101110110,11010001110,11000101110,11011101e3,11011100010,11011101110,11101011e3,11101000110,11100010110,11101101e3,11101100010,11100011010,11101111010,11001000010,11110001010,1010011e4,10100001100,1001011e4,10010000110,10000101100,10000100110,1011001e4,10110000100,1001101e4,10011000010,10000110100,10000110010,11000010010,1100101e4,11110111010,11000010100,10001111010,10100111100,10010111100,10010011110,10111100100,10011110100,10011110010,11110100100,11110010100,11110010010,11011011110,11011110110,11110110110,10101111e3,10100011110,10001011110,10111101e3,10111100010,11110101e3,11110100010,10111011110,10111101110,11101011110,11110101110,11010000100,1101001e4,11010011100,1100011101011];Object.defineProperty(We,"__esModule",{value:!0});var Cy=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Dy=at,Vy=xy(Dy),ct=$;function xy(e){return e&&e.__esModule?e:{default:e}}function ky(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Ny(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var My=function(e){Ny(t,e);function t(n,r){ky(this,t);var i=$y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n.substring(1),r));return i.bytes=n.split("").map(function(s){return s.charCodeAt(0)}),i}return Cy(t,[{key:"valid",value:function(){return/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)}},{key:"encode",value:function(){var r=this.bytes,i=r.shift()-105,s=ct.SET_BY_CODE[i];if(s===void 0)throw new RangeError("The encoding does not start with a start character.");this.shouldEncodeAsEan128()===!0&&r.unshift(ct.FNC1);var o=t.next(r,1,s);return{text:this.text===this.data?this.text.replace(/[^\x20-\x7E]/g,""):this.text,data:t.getBar(i)+o.result+t.getBar((o.checksum+i)%ct.MODULO)+t.getBar(ct.STOP)}}},{key:"shouldEncodeAsEan128",value:function(){var r=this.options.ean128||!1;return typeof r=="string"&&(r=r.toLowerCase()==="true"),r}}],[{key:"getBar",value:function(r){return ct.BARS[r]?ct.BARS[r].toString():""}},{key:"correctIndex",value:function(r,i){if(i===ct.SET_A){var s=r.shift();return s<32?s+64:s-32}else return i===ct.SET_B?r.shift()-32:(r.shift()-48)*10+r.shift()-48}},{key:"next",value:function(r,i,s){if(!r.length)return{result:"",checksum:0};var o=void 0,a=void 0;if(r[0]>=200){a=r.shift()-105;var u=ct.SWAP[a];u!==void 0?o=t.next(r,i+1,u):((s===ct.SET_A||s===ct.SET_B)&&a===ct.SHIFT&&(r[0]=s===ct.SET_A?r[0]>95?r[0]-96:r[0]:r[0]<32?r[0]+96:r[0]),o=t.next(r,i+1,s))}else a=t.correctIndex(r,s),o=t.next(r,i+1,s);var c=t.getBar(a),l=a*i;return{result:c+o.result,checksum:l+o.checksum}}}]),t}(Vy.default);We.default=My;var Lo={};Object.defineProperty(Lo,"__esModule",{value:!0});var Ut=$,Ch=function(t){return t.match(new RegExp("^"+Ut.A_CHARS+"*"))[0].length},Dh=function(t){return t.match(new RegExp("^"+Ut.B_CHARS+"*"))[0].length},Vh=function(t){return t.match(new RegExp("^"+Ut.C_CHARS+"*"))[0]};function Fo(e,t){var n=t?Ut.A_CHARS:Ut.B_CHARS,r=e.match(new RegExp("^("+n+"+?)(([0-9]{2}){2,})([^0-9]|$)"));if(r)return r[1]+String.fromCharCode(204)+xh(e.substring(r[1].length));var i=e.match(new RegExp("^"+n+"+"))[0];return i.length===e.length?e:i+String.fromCharCode(t?205:206)+Fo(e.substring(i.length),!t)}function xh(e){var t=Vh(e),n=t.length;if(n===e.length)return e;e=e.substring(n);var r=Ch(e)>=Dh(e);return t+String.fromCharCode(r?206:205)+Fo(e,r)}Lo.default=function(e){var t=void 0,n=Vh(e).length;if(n>=2)t=Ut.C_START_CHAR+xh(e);else{var r=Ch(e)>Dh(e);t=(r?Ut.A_START_CHAR:Ut.B_START_CHAR)+Fo(e,r)}return t.replace(/[\xCD\xCE]([^])[\xCD\xCE]/,function(i,s){return String.fromCharCode(203)+s})};Object.defineProperty(Mo,"__esModule",{value:!0});var Ly=We,Fy=kh(Ly),By=Lo,Uy=kh(By);function kh(e){return e&&e.__esModule?e:{default:e}}function jy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qi(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function qy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var zy=function(e){qy(t,e);function t(n,r){if(jy(this,t),/^[\x00-\x7F\xC8-\xD3]+$/.test(n))var i=Qi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,(0,Uy.default)(n),r));else var i=Qi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r));return Qi(i)}return t}(Fy.default);Mo.default=zy;var Bo={};Object.defineProperty(Bo,"__esModule",{value:!0});var Gy=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Hy=We,Ky=Wy(Hy),Cu=$;function Wy(e){return e&&e.__esModule?e:{default:e}}function Qy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xy(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Yy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Jy=function(e){Yy(t,e);function t(n,r){return Qy(this,t),Xy(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,Cu.A_START_CHAR+n,r))}return Gy(t,[{key:"valid",value:function(){return new RegExp("^"+Cu.A_CHARS+"+$").test(this.data)}}]),t}(Ky.default);Bo.default=Jy;var Uo={};Object.defineProperty(Uo,"__esModule",{value:!0});var Zy=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),t0=We,e0=n0(t0),Du=$;function n0(e){return e&&e.__esModule?e:{default:e}}function r0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function s0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o0=function(e){s0(t,e);function t(n,r){return r0(this,t),i0(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,Du.B_START_CHAR+n,r))}return Zy(t,[{key:"valid",value:function(){return new RegExp("^"+Du.B_CHARS+"+$").test(this.data)}}]),t}(e0.default);Uo.default=o0;var jo={};Object.defineProperty(jo,"__esModule",{value:!0});var a0=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u0=We,c0=l0(u0),Vu=$;function l0(e){return e&&e.__esModule?e:{default:e}}function h0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function d0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p0=function(e){d0(t,e);function t(n,r){return h0(this,t),f0(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,Vu.C_START_CHAR+n,r))}return a0(t,[{key:"valid",value:function(){return new RegExp("^"+Vu.C_CHARS+"+$").test(this.data)}}]),t}(c0.default);jo.default=p0;Object.defineProperty(At,"__esModule",{value:!0});At.CODE128C=At.CODE128B=At.CODE128A=At.CODE128=void 0;var g0=Mo,m0=yi(g0),_0=Bo,y0=yi(_0),v0=Uo,E0=yi(v0),T0=jo,w0=yi(T0);function yi(e){return e&&e.__esModule?e:{default:e}}At.CODE128=m0.default;At.CODE128A=y0.default;At.CODE128B=E0.default;At.CODE128C=w0.default;var ot={},qo={},mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.SIDE_BIN="101";mt.MIDDLE_BIN="01010";mt.BINARIES={L:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],G:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],R:["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"],O:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],E:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"]};mt.EAN2_STRUCTURE=["LL","LG","GL","GG"];mt.EAN5_STRUCTURE=["GGLLL","GLGLL","GLLGL","GLLLG","LGGLL","LLGGL","LLLGG","LGLGL","LGLLG","LLGLG"];mt.EAN13_STRUCTURE=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"];var vi={},fe={};Object.defineProperty(fe,"__esModule",{value:!0});var A0=mt,I0=function(t,n,r){var i=t.split("").map(function(o,a){return A0.BINARIES[n[a]]}).map(function(o,a){return o?o[t[a]]:""});if(r){var s=t.length-1;i=i.map(function(o,a){return a<s?o+r:o})}return i.join("")};fe.default=I0;Object.defineProperty(vi,"__esModule",{value:!0});var R0=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),me=mt,S0=fe,xu=$h(S0),b0=at,P0=$h(b0);function $h(e){return e&&e.__esModule?e:{default:e}}function O0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function D0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var V0=function(e){D0(t,e);function t(n,r){O0(this,t);var i=C0(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r));return i.fontSize=!r.flat&&r.fontSize>r.width*10?r.width*10:r.fontSize,i.guardHeight=r.height+i.fontSize/2+r.textMargin,i}return R0(t,[{key:"encode",value:function(){return this.options.flat?this.encodeFlat():this.encodeGuarded()}},{key:"leftText",value:function(r,i){return this.text.substr(r,i)}},{key:"leftEncode",value:function(r,i){return(0,xu.default)(r,i)}},{key:"rightText",value:function(r,i){return this.text.substr(r,i)}},{key:"rightEncode",value:function(r,i){return(0,xu.default)(r,i)}},{key:"encodeGuarded",value:function(){var r={fontSize:this.fontSize},i={height:this.guardHeight};return[{data:me.SIDE_BIN,options:i},{data:this.leftEncode(),text:this.leftText(),options:r},{data:me.MIDDLE_BIN,options:i},{data:this.rightEncode(),text:this.rightText(),options:r},{data:me.SIDE_BIN,options:i}]}},{key:"encodeFlat",value:function(){var r=[me.SIDE_BIN,this.leftEncode(),me.MIDDLE_BIN,this.rightEncode(),me.SIDE_BIN];return{data:r.join(""),text:this.text}}}]),t}(P0.default);vi.default=V0;Object.defineProperty(qo,"__esModule",{value:!0});var x0=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),on=function e(t,n,r){t===null&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(i===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:e(s,n,r)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(r)}},k0=mt,$0=vi,N0=M0($0);function M0(e){return e&&e.__esModule?e:{default:e}}function L0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function B0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ku=function(t){var n=t.substr(0,12).split("").map(function(r){return+r}).reduce(function(r,i,s){return s%2?r+i*3:r+i},0);return(10-n%10)%10},U0=function(e){B0(t,e);function t(n,r){L0(this,t),n.search(/^[0-9]{12}$/)!==-1&&(n+=ku(n));var i=F0(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r));return i.lastChar=r.lastChar,i}return x0(t,[{key:"valid",value:function(){return this.data.search(/^[0-9]{13}$/)!==-1&&+this.data[12]===ku(this.data)}},{key:"leftText",value:function(){return on(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"leftText",this).call(this,1,6)}},{key:"leftEncode",value:function(){var r=this.data.substr(1,6),i=k0.EAN13_STRUCTURE[this.data[0]];return on(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"leftEncode",this).call(this,r,i)}},{key:"rightText",value:function(){return on(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"rightText",this).call(this,7,6)}},{key:"rightEncode",value:function(){var r=this.data.substr(7,6);return on(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"rightEncode",this).call(this,r,"RRRRRR")}},{key:"encodeGuarded",value:function(){var r=on(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"encodeGuarded",this).call(this);return this.options.displayValue&&(r.unshift({data:"000000000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),this.options.lastChar&&(r.push({data:"00"}),r.push({data:"00000",text:this.options.lastChar,options:{fontSize:this.fontSize}}))),r}}]),t}(N0.default);qo.default=U0;var zo={};Object.defineProperty(zo,"__esModule",{value:!0});var j0=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),gr=function e(t,n,r){t===null&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(i===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:e(s,n,r)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(r)}},q0=vi,z0=G0(q0);function G0(e){return e&&e.__esModule?e:{default:e}}function H0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function W0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var $u=function(t){var n=t.substr(0,7).split("").map(function(r){return+r}).reduce(function(r,i,s){return s%2?r+i:r+i*3},0);return(10-n%10)%10},Q0=function(e){W0(t,e);function t(n,r){return H0(this,t),n.search(/^[0-9]{7}$/)!==-1&&(n+=$u(n)),K0(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r))}return j0(t,[{key:"valid",value:function(){return this.data.search(/^[0-9]{8}$/)!==-1&&+this.data[7]===$u(this.data)}},{key:"leftText",value:function(){return gr(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"leftText",this).call(this,0,4)}},{key:"leftEncode",value:function(){var r=this.data.substr(0,4);return gr(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"leftEncode",this).call(this,r,"LLLL")}},{key:"rightText",value:function(){return gr(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"rightText",this).call(this,4,4)}},{key:"rightEncode",value:function(){var r=this.data.substr(4,4);return gr(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"rightEncode",this).call(this,r,"RRRR")}}]),t}(z0.default);zo.default=Q0;var Go={};Object.defineProperty(Go,"__esModule",{value:!0});var X0=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y0=mt,J0=fe,Z0=Nh(J0),tv=at,ev=Nh(tv);function Nh(e){return e&&e.__esModule?e:{default:e}}function nv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function iv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var sv=function(t){var n=t.split("").map(function(r){return+r}).reduce(function(r,i,s){return s%2?r+i*9:r+i*3},0);return n%10},ov=function(e){iv(t,e);function t(n,r){return nv(this,t),rv(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r))}return X0(t,[{key:"valid",value:function(){return this.data.search(/^[0-9]{5}$/)!==-1}},{key:"encode",value:function(){var r=Y0.EAN5_STRUCTURE[sv(this.data)];return{data:"1011"+(0,Z0.default)(this.data,r,"01"),text:this.text}}}]),t}(ev.default);Go.default=ov;var Ho={};Object.defineProperty(Ho,"__esModule",{value:!0});var av=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),uv=mt,cv=fe,lv=Mh(cv),hv=at,fv=Mh(hv);function Mh(e){return e&&e.__esModule?e:{default:e}}function dv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function gv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var mv=function(e){gv(t,e);function t(n,r){return dv(this,t),pv(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r))}return av(t,[{key:"valid",value:function(){return this.data.search(/^[0-9]{2}$/)!==-1}},{key:"encode",value:function(){var r=uv.EAN2_STRUCTURE[parseInt(this.data)%4];return{data:"1011"+(0,lv.default)(this.data,r,"01"),text:this.text}}}]),t}(fv.default);Ho.default=mv;var nr={};Object.defineProperty(nr,"__esModule",{value:!0});var _v=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();nr.checksum=Cs;var yv=fe,_e=Lh(yv),vv=at,Ev=Lh(vv);function Lh(e){return e&&e.__esModule?e:{default:e}}function Tv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Av(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Iv=function(e){Av(t,e);function t(n,r){Tv(this,t),n.search(/^[0-9]{11}$/)!==-1&&(n+=Cs(n));var i=wv(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r));return i.displayValue=r.displayValue,r.fontSize>r.width*10?i.fontSize=r.width*10:i.fontSize=r.fontSize,i.guardHeight=r.height+i.fontSize/2+r.textMargin,i}return _v(t,[{key:"valid",value:function(){return this.data.search(/^[0-9]{12}$/)!==-1&&this.data[11]==Cs(this.data)}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var r="";return r+="101",r+=(0,_e.default)(this.data.substr(0,6),"LLLLLL"),r+="01010",r+=(0,_e.default)(this.data.substr(6,6),"RRRRRR"),r+="101",{data:r,text:this.text}}},{key:"guardedEncoding",value:function(){var r=[];return this.displayValue&&r.push({data:"00000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),r.push({data:"101"+(0,_e.default)(this.data[0],"L"),options:{height:this.guardHeight}}),r.push({data:(0,_e.default)(this.data.substr(1,5),"LLLLL"),text:this.text.substr(1,5),options:{fontSize:this.fontSize}}),r.push({data:"01010",options:{height:this.guardHeight}}),r.push({data:(0,_e.default)(this.data.substr(6,5),"RRRRR"),text:this.text.substr(6,5),options:{fontSize:this.fontSize}}),r.push({data:(0,_e.default)(this.data[11],"R")+"101",options:{height:this.guardHeight}}),this.displayValue&&r.push({data:"00000000",text:this.text.substr(11,1),options:{textAlign:"right",fontSize:this.fontSize}}),r}}]),t}(Ev.default);function Cs(e){var t=0,n;for(n=1;n<11;n+=2)t+=parseInt(e[n]);for(n=0;n<11;n+=2)t+=parseInt(e[n])*3;return(10-t%10)%10}nr.default=Iv;var Ko={};Object.defineProperty(Ko,"__esModule",{value:!0});var Rv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Sv=fe,bv=Fh(Sv),Pv=at,Ov=Fh(Pv),Cv=nr;function Fh(e){return e&&e.__esModule?e:{default:e}}function Dv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xi(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Vv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var xv=["XX00000XXX","XX10000XXX","XX20000XXX","XXX00000XX","XXXX00000X","XXXXX00005","XXXXX00006","XXXXX00007","XXXXX00008","XXXXX00009"],kv=[["EEEOOO","OOOEEE"],["EEOEOO","OOEOEE"],["EEOOEO","OOEEOE"],["EEOOOE","OOEEEO"],["EOEEOO","OEOOEE"],["EOOEEO","OEEOOE"],["EOOOEE","OEEEOO"],["EOEOEO","OEOEOE"],["EOEOOE","OEOEEO"],["EOOEOE","OEEOEO"]],$v=function(e){Vv(t,e);function t(n,r){Dv(this,t);var i=Xi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r));if(i.isValid=!1,n.search(/^[0-9]{6}$/)!==-1)i.middleDigits=n,i.upcA=Nu(n,"0"),i.text=r.text||""+i.upcA[0]+n+i.upcA[i.upcA.length-1],i.isValid=!0;else if(n.search(/^[01][0-9]{7}$/)!==-1)if(i.middleDigits=n.substring(1,n.length-1),i.upcA=Nu(i.middleDigits,n[0]),i.upcA[i.upcA.length-1]===n[n.length-1])i.isValid=!0;else return Xi(i);else return Xi(i);return i.displayValue=r.displayValue,r.fontSize>r.width*10?i.fontSize=r.width*10:i.fontSize=r.fontSize,i.guardHeight=r.height+i.fontSize/2+r.textMargin,i}return Rv(t,[{key:"valid",value:function(){return this.isValid}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var r="";return r+="101",r+=this.encodeMiddleDigits(),r+="010101",{data:r,text:this.text}}},{key:"guardedEncoding",value:function(){var r=[];return this.displayValue&&r.push({data:"00000000",text:this.text[0],options:{textAlign:"left",fontSize:this.fontSize}}),r.push({data:"101",options:{height:this.guardHeight}}),r.push({data:this.encodeMiddleDigits(),text:this.text.substring(1,7),options:{fontSize:this.fontSize}}),r.push({data:"010101",options:{height:this.guardHeight}}),this.displayValue&&r.push({data:"00000000",text:this.text[7],options:{textAlign:"right",fontSize:this.fontSize}}),r}},{key:"encodeMiddleDigits",value:function(){var r=this.upcA[0],i=this.upcA[this.upcA.length-1],s=kv[parseInt(i)][parseInt(r)];return(0,bv.default)(this.middleDigits,s)}}]),t}(Ov.default);function Nu(e,t){for(var n=parseInt(e[e.length-1]),r=xv[n],i="",s=0,o=0;o<r.length;o++){var a=r[o];a==="X"?i+=e[s++]:i+=a}return i=""+t+i,""+i+(0,Cv.checksum)(i)}Ko.default=$v;Object.defineProperty(ot,"__esModule",{value:!0});ot.UPCE=ot.UPC=ot.EAN2=ot.EAN5=ot.EAN8=ot.EAN13=void 0;var Nv=qo,Mv=Qe(Nv),Lv=zo,Fv=Qe(Lv),Bv=Go,Uv=Qe(Bv),jv=Ho,qv=Qe(jv),zv=nr,Gv=Qe(zv),Hv=Ko,Kv=Qe(Hv);function Qe(e){return e&&e.__esModule?e:{default:e}}ot.EAN13=Mv.default;ot.EAN8=Fv.default;ot.EAN5=Uv.default;ot.EAN2=qv.default;ot.UPC=Gv.default;ot.UPCE=Kv.default;var Fe={},Ei={},rr={};Object.defineProperty(rr,"__esModule",{value:!0});rr.START_BIN="1010";rr.END_BIN="11101";rr.BINARIES=["00110","10001","01001","11000","00101","10100","01100","00011","10010","01010"];Object.defineProperty(Ei,"__esModule",{value:!0});var Wv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),mr=rr,Qv=at,Xv=Yv(Qv);function Yv(e){return e&&e.__esModule?e:{default:e}}function Jv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function t1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var e1=function(e){t1(t,e);function t(){return Jv(this,t),Zv(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Wv(t,[{key:"valid",value:function(){return this.data.search(/^([0-9]{2})+$/)!==-1}},{key:"encode",value:function(){var r=this,i=this.data.match(/.{2}/g).map(function(s){return r.encodePair(s)}).join("");return{data:mr.START_BIN+i+mr.END_BIN,text:this.text}}},{key:"encodePair",value:function(r){var i=mr.BINARIES[r[1]];return mr.BINARIES[r[0]].split("").map(function(s,o){return(s==="1"?"111":"1")+(i[o]==="1"?"000":"0")}).join("")}}]),t}(Xv.default);Ei.default=e1;var Wo={};Object.defineProperty(Wo,"__esModule",{value:!0});var n1=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r1=Ei,i1=s1(r1);function s1(e){return e&&e.__esModule?e:{default:e}}function o1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function u1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Mu=function(t){var n=t.substr(0,13).split("").map(function(r){return parseInt(r,10)}).reduce(function(r,i,s){return r+i*(3-s%2*2)},0);return Math.ceil(n/10)*10-n},c1=function(e){u1(t,e);function t(n,r){return o1(this,t),n.search(/^[0-9]{13}$/)!==-1&&(n+=Mu(n)),a1(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r))}return n1(t,[{key:"valid",value:function(){return this.data.search(/^[0-9]{14}$/)!==-1&&+this.data[13]===Mu(this.data)}}]),t}(i1.default);Wo.default=c1;Object.defineProperty(Fe,"__esModule",{value:!0});Fe.ITF14=Fe.ITF=void 0;var l1=Ei,h1=Bh(l1),f1=Wo,d1=Bh(f1);function Bh(e){return e&&e.__esModule?e:{default:e}}Fe.ITF=h1.default;Fe.ITF14=d1.default;var pt={},de={};Object.defineProperty(de,"__esModule",{value:!0});var p1=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g1=at,m1=_1(g1);function _1(e){return e&&e.__esModule?e:{default:e}}function y1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function E1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var T1=function(e){E1(t,e);function t(n,r){return y1(this,t),v1(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r))}return p1(t,[{key:"encode",value:function(){for(var r="110",i=0;i<this.data.length;i++){var s=parseInt(this.data[i]),o=s.toString(2);o=w1(o,4-o.length);for(var a=0;a<o.length;a++)r+=o[a]=="0"?"100":"110"}return r+="1001",{data:r,text:this.text}}},{key:"valid",value:function(){return this.data.search(/^[0-9]+$/)!==-1}}]),t}(m1.default);function w1(e,t){for(var n=0;n<t;n++)e="0"+e;return e}de.default=T1;var Qo={},pe={};Object.defineProperty(pe,"__esModule",{value:!0});pe.mod10=A1;pe.mod11=I1;function A1(e){for(var t=0,n=0;n<e.length;n++){var r=parseInt(e[n]);(n+e.length)%2===0?t+=r:t+=r*2%10+Math.floor(r*2/10)}return(10-t%10)%10}function I1(e){for(var t=0,n=[2,3,4,5,6,7],r=0;r<e.length;r++){var i=parseInt(e[e.length-1-r]);t+=n[r%n.length]*i}return(11-t%11)%11}Object.defineProperty(Qo,"__esModule",{value:!0});var R1=de,S1=P1(R1),b1=pe;function P1(e){return e&&e.__esModule?e:{default:e}}function O1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function D1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var V1=function(e){D1(t,e);function t(n,r){return O1(this,t),C1(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n+(0,b1.mod10)(n),r))}return t}(S1.default);Qo.default=V1;var Xo={};Object.defineProperty(Xo,"__esModule",{value:!0});var x1=de,k1=N1(x1),$1=pe;function N1(e){return e&&e.__esModule?e:{default:e}}function M1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function F1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var B1=function(e){F1(t,e);function t(n,r){return M1(this,t),L1(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n+(0,$1.mod11)(n),r))}return t}(k1.default);Xo.default=B1;var Yo={};Object.defineProperty(Yo,"__esModule",{value:!0});var U1=de,j1=q1(U1),Lu=pe;function q1(e){return e&&e.__esModule?e:{default:e}}function z1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function H1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var K1=function(e){H1(t,e);function t(n,r){return z1(this,t),n+=(0,Lu.mod10)(n),n+=(0,Lu.mod10)(n),G1(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r))}return t}(j1.default);Yo.default=K1;var Jo={};Object.defineProperty(Jo,"__esModule",{value:!0});var W1=de,Q1=X1(W1),Fu=pe;function X1(e){return e&&e.__esModule?e:{default:e}}function Y1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Z1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var tE=function(e){Z1(t,e);function t(n,r){return Y1(this,t),n+=(0,Fu.mod11)(n),n+=(0,Fu.mod10)(n),J1(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r))}return t}(Q1.default);Jo.default=tE;Object.defineProperty(pt,"__esModule",{value:!0});pt.MSI1110=pt.MSI1010=pt.MSI11=pt.MSI10=pt.MSI=void 0;var eE=de,nE=ir(eE),rE=Qo,iE=ir(rE),sE=Xo,oE=ir(sE),aE=Yo,uE=ir(aE),cE=Jo,lE=ir(cE);function ir(e){return e&&e.__esModule?e:{default:e}}pt.MSI=nE.default;pt.MSI10=iE.default;pt.MSI11=oE.default;pt.MSI1010=uE.default;pt.MSI1110=lE.default;var Ti={};Object.defineProperty(Ti,"__esModule",{value:!0});Ti.pharmacode=void 0;var hE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),fE=at,dE=pE(fE);function pE(e){return e&&e.__esModule?e:{default:e}}function gE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mE(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function _E(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var yE=function(e){_E(t,e);function t(n,r){gE(this,t);var i=mE(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r));return i.number=parseInt(n,10),i}return hE(t,[{key:"encode",value:function(){for(var r=this.number,i="";!isNaN(r)&&r!=0;)r%2===0?(i="11100"+i,r=(r-2)/2):(i="100"+i,r=(r-1)/2);return i=i.slice(0,-2),{data:i,text:this.text}}},{key:"valid",value:function(){return this.number>=3&&this.number<=131070}}]),t}(dE.default);Ti.pharmacode=yE;var wi={};Object.defineProperty(wi,"__esModule",{value:!0});wi.codabar=void 0;var vE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),EE=at,TE=wE(EE);function wE(e){return e&&e.__esModule?e:{default:e}}function AE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function IE(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function RE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var SE=function(e){RE(t,e);function t(n,r){AE(this,t),n.search(/^[0-9\-\$\:\.\+\/]+$/)===0&&(n="A"+n+"A");var i=IE(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n.toUpperCase(),r));return i.text=i.options.text||i.text.replace(/[A-D]/g,""),i}return vE(t,[{key:"valid",value:function(){return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)!==-1}},{key:"encode",value:function(){for(var r=[],i=this.getEncodings(),s=0;s<this.data.length;s++)r.push(i[this.data.charAt(s)]),s!==this.data.length-1&&r.push("0");return{text:this.text,data:r.join("")}}},{key:"getEncodings",value:function(){return{0:"101010011",1:"101011001",2:"101001011",3:"110010101",4:"101101001",5:"110101001",6:"100101011",7:"100101101",8:"100110101",9:"110100101","-":"101001101",$:"101100101",":":"1101011011","/":"1101101011",".":"1101101101","+":"1011011011",A:"1011001001",B:"1001001011",C:"1010010011",D:"1010011001"}}}]),t}(TE.default);wi.codabar=SE;var Ai={};Object.defineProperty(Ai,"__esModule",{value:!0});Ai.GenericBarcode=void 0;var bE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),PE=at,OE=CE(PE);function CE(e){return e&&e.__esModule?e:{default:e}}function DE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function VE(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function xE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var kE=function(e){xE(t,e);function t(n,r){return DE(this,t),VE(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r))}return bE(t,[{key:"encode",value:function(){return{data:"10101010101010101010101010101010101010101",text:this.text}}},{key:"valid",value:function(){return!0}}]),t}(OE.default);Ai.GenericBarcode=kE;Object.defineProperty(No,"__esModule",{value:!0});var $E=_i,_r=At,ye=ot,Bu=Fe,an=pt,NE=Ti,ME=wi,LE=Ai;No.default={CODE39:$E.CODE39,CODE128:_r.CODE128,CODE128A:_r.CODE128A,CODE128B:_r.CODE128B,CODE128C:_r.CODE128C,EAN13:ye.EAN13,EAN8:ye.EAN8,EAN5:ye.EAN5,EAN2:ye.EAN2,UPC:ye.UPC,UPCE:ye.UPCE,ITF14:Bu.ITF14,ITF:Bu.ITF,MSI:an.MSI,MSI10:an.MSI10,MSI11:an.MSI11,MSI1010:an.MSI1010,MSI1110:an.MSI1110,pharmacode:NE.pharmacode,codabar:ME.codabar,GenericBarcode:LE.GenericBarcode};var Xe={};Object.defineProperty(Xe,"__esModule",{value:!0});var FE=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Xe.default=function(e,t){return FE({},e,t)};var Zo={};Object.defineProperty(Zo,"__esModule",{value:!0});Zo.default=BE;function BE(e){var t=[];function n(r){if(Array.isArray(r))for(var i=0;i<r.length;i++)n(r[i]);else r.text=r.text||"",r.data=r.data||"",t.push(r)}return n(e),t}var ta={};Object.defineProperty(ta,"__esModule",{value:!0});ta.default=UE;function UE(e){return e.marginTop=e.marginTop||e.margin,e.marginBottom=e.marginBottom||e.margin,e.marginRight=e.marginRight||e.margin,e.marginLeft=e.marginLeft||e.margin,e}var ea={},na={},Ii={};Object.defineProperty(Ii,"__esModule",{value:!0});Ii.default=jE;function jE(e){var t=["width","height","textMargin","fontSize","margin","marginTop","marginBottom","marginLeft","marginRight"];for(var n in t)t.hasOwnProperty(n)&&(n=t[n],typeof e[n]=="string"&&(e[n]=parseInt(e[n],10)));return typeof e.displayValue=="string"&&(e.displayValue=e.displayValue!="false"),e}var Ri={};Object.defineProperty(Ri,"__esModule",{value:!0});var qE={width:2,height:100,format:"auto",displayValue:!0,fontOptions:"",font:"monospace",text:void 0,textAlign:"center",textPosition:"bottom",textMargin:2,fontSize:20,background:"#ffffff",lineColor:"#000000",margin:10,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0,valid:function(){}};Ri.default=qE;Object.defineProperty(na,"__esModule",{value:!0});var zE=Ii,GE=Uh(zE),HE=Ri,Uu=Uh(HE);function Uh(e){return e&&e.__esModule?e:{default:e}}function KE(e){var t={};for(var n in Uu.default)Uu.default.hasOwnProperty(n)&&(e.hasAttribute("jsbarcode-"+n.toLowerCase())&&(t[n]=e.getAttribute("jsbarcode-"+n.toLowerCase())),e.hasAttribute("data-"+n.toLowerCase())&&(t[n]=e.getAttribute("data-"+n.toLowerCase())));return t.value=e.getAttribute("jsbarcode-value")||e.getAttribute("data-value"),t=(0,GE.default)(t),t}na.default=KE;var ra={},ia={},lt={};Object.defineProperty(lt,"__esModule",{value:!0});lt.getTotalWidthOfEncodings=lt.calculateEncodingAttributes=lt.getBarcodePadding=lt.getEncodingHeight=lt.getMaximumHeightOfEncodings=void 0;var WE=Xe,QE=XE(WE);function XE(e){return e&&e.__esModule?e:{default:e}}function jh(e,t){return t.height+(t.displayValue&&e.text.length>0?t.fontSize+t.textMargin:0)+t.marginTop+t.marginBottom}function qh(e,t,n){if(n.displayValue&&t<e){if(n.textAlign=="center")return Math.floor((e-t)/2);if(n.textAlign=="left")return 0;if(n.textAlign=="right")return Math.floor(e-t)}return 0}function YE(e,t,n){for(var r=0;r<e.length;r++){var i=e[r],s=(0,QE.default)(t,i.options),o;s.displayValue?o=tT(i.text,s,n):o=0;var a=i.data.length*s.width;i.width=Math.ceil(Math.max(o,a)),i.height=jh(i,s),i.barcodePadding=qh(o,a,s)}}function JE(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].width;return t}function ZE(e){for(var t=0,n=0;n<e.length;n++)e[n].height>t&&(t=e[n].height);return t}function tT(e,t,n){var r;if(n)r=n;else if(typeof document<"u")r=document.createElement("canvas").getContext("2d");else return 0;r.font=t.fontOptions+" "+t.fontSize+"px "+t.font;var i=r.measureText(e);if(!i)return 0;var s=i.width;return s}lt.getMaximumHeightOfEncodings=ZE;lt.getEncodingHeight=jh;lt.getBarcodePadding=qh;lt.calculateEncodingAttributes=YE;lt.getTotalWidthOfEncodings=JE;Object.defineProperty(ia,"__esModule",{value:!0});var eT=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),nT=Xe,rT=iT(nT),Yi=lt;function iT(e){return e&&e.__esModule?e:{default:e}}function sT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var oT=function(){function e(t,n,r){sT(this,e),this.canvas=t,this.encodings=n,this.options=r}return eT(e,[{key:"render",value:function(){if(!this.canvas.getContext)throw new Error("The browser does not support canvas.");this.prepareCanvas();for(var n=0;n<this.encodings.length;n++){var r=(0,rT.default)(this.options,this.encodings[n].options);this.drawCanvasBarcode(r,this.encodings[n]),this.drawCanvasText(r,this.encodings[n]),this.moveCanvasDrawing(this.encodings[n])}this.restoreCanvas()}},{key:"prepareCanvas",value:function(){var n=this.canvas.getContext("2d");n.save(),(0,Yi.calculateEncodingAttributes)(this.encodings,this.options,n);var r=(0,Yi.getTotalWidthOfEncodings)(this.encodings),i=(0,Yi.getMaximumHeightOfEncodings)(this.encodings);this.canvas.width=r+this.options.marginLeft+this.options.marginRight,this.canvas.height=i,n.clearRect(0,0,this.canvas.width,this.canvas.height),this.options.background&&(n.fillStyle=this.options.background,n.fillRect(0,0,this.canvas.width,this.canvas.height)),n.translate(this.options.marginLeft,0)}},{key:"drawCanvasBarcode",value:function(n,r){var i=this.canvas.getContext("2d"),s=r.data,o;n.textPosition=="top"?o=n.marginTop+n.fontSize+n.textMargin:o=n.marginTop,i.fillStyle=n.lineColor;for(var a=0;a<s.length;a++){var u=a*n.width+r.barcodePadding;s[a]==="1"?i.fillRect(u,o,n.width,n.height):s[a]&&i.fillRect(u,o,n.width,n.height*s[a])}}},{key:"drawCanvasText",value:function(n,r){var i=this.canvas.getContext("2d"),s=n.fontOptions+" "+n.fontSize+"px "+n.font;if(n.displayValue){var o,a;n.textPosition=="top"?a=n.marginTop+n.fontSize-n.textMargin:a=n.height+n.textMargin+n.marginTop+n.fontSize,i.font=s,n.textAlign=="left"||r.barcodePadding>0?(o=0,i.textAlign="left"):n.textAlign=="right"?(o=r.width-1,i.textAlign="right"):(o=r.width/2,i.textAlign="center"),i.fillText(r.text,o,a)}}},{key:"moveCanvasDrawing",value:function(n){var r=this.canvas.getContext("2d");r.translate(n.width,0)}},{key:"restoreCanvas",value:function(){var n=this.canvas.getContext("2d");n.restore()}}]),e}();ia.default=oT;var sa={};Object.defineProperty(sa,"__esModule",{value:!0});var aT=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),uT=Xe,cT=lT(uT),Ji=lt;function lT(e){return e&&e.__esModule?e:{default:e}}function hT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var yr="http://www.w3.org/2000/svg",fT=function(){function e(t,n,r){hT(this,e),this.svg=t,this.encodings=n,this.options=r,this.document=r.xmlDocument||document}return aT(e,[{key:"render",value:function(){var n=this.options.marginLeft;this.prepareSVG();for(var r=0;r<this.encodings.length;r++){var i=this.encodings[r],s=(0,cT.default)(this.options,i.options),o=this.createGroup(n,s.marginTop,this.svg);this.setGroupOptions(o,s),this.drawSvgBarcode(o,s,i),this.drawSVGText(o,s,i),n+=i.width}}},{key:"prepareSVG",value:function(){for(;this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);(0,Ji.calculateEncodingAttributes)(this.encodings,this.options);var n=(0,Ji.getTotalWidthOfEncodings)(this.encodings),r=(0,Ji.getMaximumHeightOfEncodings)(this.encodings),i=n+this.options.marginLeft+this.options.marginRight;this.setSvgAttributes(i,r),this.options.background&&this.drawRect(0,0,i,r,this.svg).setAttribute("style","fill:"+this.options.background+";")}},{key:"drawSvgBarcode",value:function(n,r,i){var s=i.data,o;r.textPosition=="top"?o=r.fontSize+r.textMargin:o=0;for(var a=0,u=0,c=0;c<s.length;c++)u=c*r.width+i.barcodePadding,s[c]==="1"?a++:a>0&&(this.drawRect(u-r.width*a,o,r.width*a,r.height,n),a=0);a>0&&this.drawRect(u-r.width*(a-1),o,r.width*a,r.height,n)}},{key:"drawSVGText",value:function(n,r,i){var s=this.document.createElementNS(yr,"text");if(r.displayValue){var o,a;s.setAttribute("style","font:"+r.fontOptions+" "+r.fontSize+"px "+r.font),r.textPosition=="top"?a=r.fontSize-r.textMargin:a=r.height+r.textMargin+r.fontSize,r.textAlign=="left"||i.barcodePadding>0?(o=0,s.setAttribute("text-anchor","start")):r.textAlign=="right"?(o=i.width-1,s.setAttribute("text-anchor","end")):(o=i.width/2,s.setAttribute("text-anchor","middle")),s.setAttribute("x",o),s.setAttribute("y",a),s.appendChild(this.document.createTextNode(i.text)),n.appendChild(s)}}},{key:"setSvgAttributes",value:function(n,r){var i=this.svg;i.setAttribute("width",n+"px"),i.setAttribute("height",r+"px"),i.setAttribute("x","0px"),i.setAttribute("y","0px"),i.setAttribute("viewBox","0 0 "+n+" "+r),i.setAttribute("xmlns",yr),i.setAttribute("version","1.1"),i.setAttribute("style","transform: translate(0,0)")}},{key:"createGroup",value:function(n,r,i){var s=this.document.createElementNS(yr,"g");return s.setAttribute("transform","translate("+n+", "+r+")"),i.appendChild(s),s}},{key:"setGroupOptions",value:function(n,r){n.setAttribute("style","fill:"+r.lineColor+";")}},{key:"drawRect",value:function(n,r,i,s,o){var a=this.document.createElementNS(yr,"rect");return a.setAttribute("x",n),a.setAttribute("y",r),a.setAttribute("width",i),a.setAttribute("height",s),o.appendChild(a),a}}]),e}();sa.default=fT;var oa={};Object.defineProperty(oa,"__esModule",{value:!0});var dT=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function pT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var gT=function(){function e(t,n,r){pT(this,e),this.object=t,this.encodings=n,this.options=r}return dT(e,[{key:"render",value:function(){this.object.encodings=this.encodings}}]),e}();oa.default=gT;Object.defineProperty(ra,"__esModule",{value:!0});var mT=ia,_T=aa(mT),yT=sa,vT=aa(yT),ET=oa,TT=aa(ET);function aa(e){return e&&e.__esModule?e:{default:e}}ra.default={CanvasRenderer:_T.default,SVGRenderer:vT.default,ObjectRenderer:TT.default};var Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});function ua(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ca(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function la(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var wT=function(e){la(t,e);function t(n,r){ua(this,t);var i=ca(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.name="InvalidInputException",i.symbology=n,i.input=r,i.message='"'+i.input+'" is not a valid input for '+i.symbology,i}return t}(Error),AT=function(e){la(t,e);function t(){ua(this,t);var n=ca(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name="InvalidElementException",n.message="Not supported type to render on",n}return t}(Error),IT=function(e){la(t,e);function t(){ua(this,t);var n=ca(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name="NoElementException",n.message="No element to render on.",n}return t}(Error);Ye.InvalidInputException=wT;Ye.InvalidElementException=AT;Ye.NoElementException=IT;Object.defineProperty(ea,"__esModule",{value:!0});var RT=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ST=na,Ds=zh(ST),bT=ra,fn=zh(bT),PT=Ye;function zh(e){return e&&e.__esModule?e:{default:e}}function ha(e){if(typeof e=="string")return OT(e);if(Array.isArray(e)){for(var t=[],n=0;n<e.length;n++)t.push(ha(e[n]));return t}else{if(typeof HTMLCanvasElement<"u"&&e instanceof HTMLImageElement)return CT(e);if(e&&e.nodeName&&e.nodeName.toLowerCase()==="svg"||typeof SVGElement<"u"&&e instanceof SVGElement)return{element:e,options:(0,Ds.default)(e),renderer:fn.default.SVGRenderer};if(typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement)return{element:e,options:(0,Ds.default)(e),renderer:fn.default.CanvasRenderer};if(e&&e.getContext)return{element:e,renderer:fn.default.CanvasRenderer};if(e&&(typeof e>"u"?"undefined":RT(e))==="object"&&!e.nodeName)return{element:e,renderer:fn.default.ObjectRenderer};throw new PT.InvalidElementException}}function OT(e){var t=document.querySelectorAll(e);if(t.length!==0){for(var n=[],r=0;r<t.length;r++)n.push(ha(t[r]));return n}}function CT(e){var t=document.createElement("canvas");return{element:t,options:(0,Ds.default)(e),renderer:fn.default.CanvasRenderer,afterRender:function(){e.setAttribute("src",t.toDataURL())}}}ea.default=ha;var fa={};Object.defineProperty(fa,"__esModule",{value:!0});var DT=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function VT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var xT=function(){function e(t){VT(this,e),this.api=t}return DT(e,[{key:"handleCatch",value:function(n){if(n.name==="InvalidInputException")if(this.api._options.valid!==this.api._defaults.valid)this.api._options.valid(!1);else throw n.message;else throw n;this.api.render=function(){}}},{key:"wrapBarcodeCall",value:function(n){try{var r=n.apply(void 0,arguments);return this.api._options.valid(!0),r}catch(i){return this.handleCatch(i),this.api}}}]),e}();fa.default=xT;var kT=No,ne=Kt(kT),$T=Xe,sr=Kt($T),NT=Zo,Gh=Kt(NT),MT=ta,ju=Kt(MT),LT=ea,FT=Kt(LT),BT=Ii,UT=Kt(BT),jT=fa,qT=Kt(jT),Hh=Ye,zT=Ri,Kh=Kt(zT);function Kt(e){return e&&e.__esModule?e:{default:e}}var Ct=function(){},Si=function(t,n,r){var i=new Ct;if(typeof t>"u")throw Error("No element to render on was provided.");return i._renderProperties=(0,FT.default)(t),i._encodings=[],i._options=Kh.default,i._errorHandler=new qT.default(i),typeof n<"u"&&(r=r||{},r.format||(r.format=Qh()),i.options(r)[r.format](n,r).render()),i};Si.getModule=function(e){return ne.default[e]};for(var qu in ne.default)ne.default.hasOwnProperty(qu)&&GT(ne.default,qu);function GT(e,t){Ct.prototype[t]=Ct.prototype[t.toUpperCase()]=Ct.prototype[t.toLowerCase()]=function(n,r){var i=this;return i._errorHandler.wrapBarcodeCall(function(){r.text=typeof r.text>"u"?void 0:""+r.text;var s=(0,sr.default)(i._options,r);s=(0,UT.default)(s);var o=e[t],a=Wh(n,o,s);return i._encodings.push(a),i})}}function Wh(e,t,n){e=""+e;var r=new t(e,n);if(!r.valid())throw new Hh.InvalidInputException(r.constructor.name,e);var i=r.encode();i=(0,Gh.default)(i);for(var s=0;s<i.length;s++)i[s].options=(0,sr.default)(n,i[s].options);return i}function Qh(){return ne.default.CODE128?"CODE128":Object.keys(ne.default)[0]}Ct.prototype.options=function(e){return this._options=(0,sr.default)(this._options,e),this};Ct.prototype.blank=function(e){var t=new Array(e+1).join("0");return this._encodings.push({data:t}),this};Ct.prototype.init=function(){if(this._renderProperties){Array.isArray(this._renderProperties)||(this._renderProperties=[this._renderProperties]);var e;for(var t in this._renderProperties){e=this._renderProperties[t];var n=(0,sr.default)(this._options,e.options);n.format=="auto"&&(n.format=Qh()),this._errorHandler.wrapBarcodeCall(function(){var r=n.value,i=ne.default[n.format.toUpperCase()],s=Wh(r,i,n);Vs(e,s,n)})}}};Ct.prototype.render=function(){if(!this._renderProperties)throw new Hh.NoElementException;if(Array.isArray(this._renderProperties))for(var e=0;e<this._renderProperties.length;e++)Vs(this._renderProperties[e],this._encodings,this._options);else Vs(this._renderProperties,this._encodings,this._options);return this};Ct.prototype._defaults=Kh.default;function Vs(e,t,n){t=(0,Gh.default)(t);for(var r=0;r<t.length;r++)t[r].options=(0,sr.default)(n,t[r].options),(0,ju.default)(t[r].options);(0,ju.default)(n);var i=e.renderer,s=new i(e.element,t,n);s.render(),e.afterRender&&e.afterRender()}typeof window<"u"&&(window.JsBarcode=Si);typeof jQuery<"u"&&(jQuery.fn.JsBarcode=function(e,t){var n=[];return jQuery(this).each(function(){n.push(this)}),Si(n,e,t)});var HT=Si;const KT=fy(HT);class WT extends ee{static get properties(){return{name:{type:String},plate:{type:String},code:{type:Number}}}static get styles(){return $o`
      :host {
        --width-image: 329px;
        --height-image: 136px;
        overflow: hidden;
      }

      .ticket {
        position: relative;
        background-image: url("images/ticket.svg");
        background-repeat: no-repeat;
        background-origin: content-box;
        background-size: var(--width-image) var(--height-image);
        width: var(--width-image);
        height: var(--height-image);
      }
      .name, .plate, .plate-vt, .code, .code-vt, .barcode {
        position: absolute;
        font-size: 0.6rem;
      }

      .name {
        width: 30%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .plate, .plate-vt {
        font-family: Vandal;
        font-size: 0.8rem;
        text-align: center;
      }

      .plate {
        width: 36%;
      }

      .plate-vt {
        width: 24%;
        transform: rotate(-90deg);
        font-size: 0.6rem;
        color: white;
      }

      .code, .code-vt {
        font-family: Cascadia;
      }

      .code-vt {
        color: white;
        transform: rotate(-90deg);
        font-size: 0.4rem;
      }
      
      .name { bottom: 6%; left: 3.5%; font-family: Satoshi }
      .plate { top: 50%; left: 25.5%; }
      .plate-vt { bottom: 46%; right: 2.8%; }
      .code { bottom: 6%; left: 35%; }
      .code-vt { bottom: 22%; right: 8.5%; }
      .barcode { top: 31%; right: -8.5%; }

      .ticket .barcode {
        width: 30%;
        transform: rotate(90deg) !important;
      }
    `}formatString(t){const[n,r]=t.split(" ");return`${n[0].toUpperCase()+n[1].toLowerCase()+r[0].toUpperCase()}-`}barcodeGenerator(t,n){const r=this.formatString(n),i=t.padStart(3,"0"),s=r+i;KT(this.shadowRoot.getElementById("barcode"),s,{format:"CODE128",lineColor:"#000",width:2,height:28,displayValue:!1}),this.code=`#${i}`}render(){return qr`
      <div class="ticket">
        <div class="name">${this.name}</div>
        <div class="plate">${this.plate}</div>
        <div class="plate-vt">${this.plate}</div>
        <div class="code">${this.code}</div>
        <div class="code-vt">${this.code}</div>
        <svg id="barcode" class="barcode"></svg>
      </div>
    `}}customElements.define("ticket-generator",WT);const QT=[{name:"Alejandro Rivera"},{name:"Antonio Rivera"},{name:"Anahi Soria"},{name:"Irina Severich"},{name:"Julio Lopez"},{name:"Mayerli Rivera"},{name:"Pablo Cardozo"},{name:"Ricardo Rojas"},{name:"Rodrigo Rocabado"}];class XT extends ee{static get properties(){return{name:{type:String},plate:{type:String}}}static get styles(){return $o`
      p {
        margin: 0;
      }
      .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .input-label {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      label, p {
        color: white;
        font-size: 1.2rem;
      }

      .label-title {
        font-size: 0.8rem;
        font-weight: 700;
        margin-left: 0.6rem;
      }

      .input {
        border-radius: 1rem;
        height: 1.7rem;
        font-family: Satoshi;
        font-size: 1.1rem;
        text-align: center;
        box-shadow: 0 2px #a7a5a5;
        border: 1.5px solid #a7a5a5cc;
      }

      .plates {
        text-align: center;
      }

      button {
        cursor: pointer;
        padding: 0.5rem 0;
        margin: 2rem 0;
        color: #fff;
        font-size: 1.2rem;
        border-radius: 2rem;
        border: none;
        position: relative;
        background: #100720;
        transition: 0.1s;
      }
      
      button::after {
        content: "";
        width: 100%;
        height: 100%;
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
        filter: blur(15px);
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
      }
      
      button:hover {
        transform: scale(0.9) rotate(3deg);
        background: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
        transition: 0.5s;
      }
    `}constructor(){super(),this.name="",this.plate="",this.dirigente="",this.location=""}handleSubmit(t){t.preventDefault(),confirm("¿Estás seguro de que quieres generar el ticket?")&&this.dispatchEvent(new CustomEvent("form-submitted",{detail:{name:this.name,plate:this.plate,dirigente:this.dirigente,location:this.location},bubbles:!0,composed:!0}))}handleInputChange(t){const{name:n,value:r}=t.target,i=new CustomEvent("data-form",{detail:{from:"TicketForm",message:{[n]:r}},bubbles:!0,composed:!0});this.dispatchEvent(i),this[n]=r}getDiris(t){return QT.map(n=>qr`
        <option value=${n[t]}></option>
      `)}render(){return qr`
      <form class="form" @submit=${this.handleSubmit}>
        <div class="input-label">
          <label class="label-title" for="dirigente">Dirigente</label>
          <input class="input" required type="text" list="diris" name="dirigente" .value=${this.dirigente} @input=${this.handleInputChange}>
          <datalist id="diris">
            ${this.getDiris("name")}
          </datalist>
        </div>

        <div class="input-label">
          <label class="label-title" for="name">Nombre</label>
          <input class="input" class="name" required id="name" name="name" type="text" .value=${this.name} @input=${this.handleInputChange} />
        </div>

        <div class="input-label">
          <p class="label-title">Seleccione su plato</p>
          <div class="plates">
            <input required id="chicken" name="plate" type="radio" value="Pollo al horno" @change=${this.handleInputChange} ?checked=${this.plate==="Pollo"} />
            <label for="chicken">Pollo</label>

            <input id="pork" name="plate" type="radio" value="Lechon al horno" @change=${this.handleInputChange} ?checked=${this.plate==="Lechon"} />
            <label for="pork">Lechón</label>
          </div>
        </div>

        <div class="input-label">
          <label class="label-title" for="location">Dirección de domicilio</label>
          <input class="input" required id="location" name="location" type="url" .value=${this.location} @input=${this.handleInputChange} />
        </div>

        <button class="button" type="submit">Comprar Ticket</button>
      </form>
    `}}customElements.define("ticket-form",XT);const da=document.createElement("ticket-generator"),YT=document.querySelector("countdown-timer");YT.after(da);document.addEventListener("data-form",e=>{const t=e.detail.message;da[Object.keys(t)]=Object.values(t)[0]});document.addEventListener("form-submitted",async e=>{const t=e.detail;try{const n=await G_(t);da.barcodeGenerator(n.toString(),t.dirigente)}catch(n){console.error("Error al generar el ticket: ",n)}});
