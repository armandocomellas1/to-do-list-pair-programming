"use strict";(self.webpackChunkto_do_list_pair_programming=self.webpackChunkto_do_list_pair_programming||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),o=t.n(r),i=t(645),s=t.n(i),a=t(667),d=t.n(a),l=new URL(t(204),t.b),c=new URL(t(476),t.b),p=new URL(t(860),t.b),m=s()(o()),u=d()(l),g=d()(c),v=d()(p);m.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  background-color: rgb(246, 246, 246);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n  margin: 1rem auto;\r\n  background-color: rgb(255, 255, 255);\r\n  box-shadow: 5px 5px 8px rgb(240, 225, 225);\r\n}\r\n\r\n.container .cont_title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.container .title {\r\n  padding: 1rem 1rem;\r\n  border-bottom: 1px solid rgb(242, 242, 242);\r\n  width: 100%;\r\n}\r\n\r\n.container .img_refresh {\r\n  background-image: url("+u+");\r\n  background-repeat: no-repeat, repeat;\r\n  background-position: center;\r\n  background-size: 60%;\r\n  height: 51px;\r\n  padding-right: 3rem;\r\n  border-bottom: 1px solid rgb(242, 242, 242);\r\n  opacity: 0.5;\r\n}\r\n\r\n.container .add_list {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.container .input_t {\r\n  padding: 1rem 1rem;\r\n  border: none;\r\n  border-bottom: 1px solid rgb(242, 242, 242);\r\n  width: 100%;\r\n  outline: none;\r\n}\r\n\r\n.container .add_list .img_list {\r\n  background-image: url("+g+");\r\n  background-repeat: no-repeat, repeat;\r\n  background-position: center;\r\n  padding-right: 3rem;\r\n  border-bottom: 1px solid rgb(242, 242, 242);\r\n  height: 47px;\r\n}\r\n\r\n.container .rows {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1rem 1rem;\r\n  border-bottom: 1px solid rgb(242, 242, 242);\r\n  height: 30px;\r\n}\r\n\r\n.container .list {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.container .list p {\r\n  padding-left: 10px;\r\n  outline: none;\r\n  width: 300px;\r\n}\r\n\r\n.container .point {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 5%;\r\n  align-items: flex-end;\r\n}\r\n\r\n.container .point:hover {\r\n  cursor: move;\r\n}\r\n\r\n.container .point > div {\r\n  width: 6px;\r\n  height: 6px;\r\n  background: #000;\r\n  -moz-border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  border-radius: 5px;\r\n  margin-bottom: 2px;\r\n  opacity: 0.5;\r\n}\r\n\r\n.container .point:hover .points {\r\n  background: #000;\r\n  opacity: 0.9;\r\n}\r\n\r\n.container .delete_img {\r\n  display: none;\r\n  background-image: url("+v+");\r\n  background-repeat: no-repeat, repeat;\r\n  background-position: center;\r\n  background-size: 100%;\r\n  width: 1rem;\r\n  padding-right: 0.5rem;\r\n}\r\n\r\n.container .footer {\r\n  padding: 1rem 0;\r\n  border-bottom: 1px solid rgb(242, 242, 242);\r\n  text-align: center;\r\n  background-color: rgb(246, 246, 246);\r\n  color: rgb(180, 180, 180);\r\n  font-size: 1.2rem;\r\n  border: none;\r\n}\r\n\r\n.container .footer:hover {\r\n  text-decoration: underline;\r\n  color: #000;\r\n}\r\n",""]);const f=m},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(s[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&s[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var d=e[a],l=r.base?d[0]+r.base:d[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var g=o(u,r);r.byIndex=a,n.splice(a,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=t(i[s]);n[a].references--}for(var d=r(e,o),l=0;l<i.length;l++){var c=t(i[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},800:(e,n,t)=>{var r=t(379),o=t.n(r),i=t(795),s=t.n(i),a=t(569),d=t.n(a),l=t(565),c=t.n(l),p=t(216),m=t.n(p),u=t(589),g=t.n(u),v=t(426),f={};f.styleTagTransform=g(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=m(),o()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;const h=[],y=document.getElementById("list_row");document.getElementById("list_row").addEventListener("click",(e=>{if(h.length>0){let n=e.target.className;"point"===n&&(n=e.target.parentElement.className,(e=>{const n=document.getElementsByClassName(e)[0];n.getElementsByClassName("point")[0].style.display="none",n.getElementsByClassName("delete_img")[0].style.display="flex",n.getElementsByClassName("editable")[0].contentEditable=!0,n.getElementsByClassName("editable")[0].focus(),n.style.backgroundColor="rgb(231, 230, 177)"})(n))}})),document.getElementById("list_row").addEventListener("click",(e=>{if(h.length>0){const n=e.target.parentElement.className,t=e.target.className;"rows"===n.split(" ")[0]&&"delete_img"===t&&(e=>{let n=e.split(" ")[1];n-=1,h.splice(n,1),document.getElementsByClassName(e)[0].remove();let t=1;h.forEach((e=>{e.index=t,t+=1})),localStorage.setItem("List",JSON.stringify(h))})(n)}})),document.getElementsByClassName("input_t")[0].addEventListener("keypress",(e=>{13===(e.keyCode?e.keyCode:e.which)&&function(){const e=document.getElementsByClassName("input_t")[0].value,n=document.getElementById("list_row");let t=n.childElementCount;t=t<=0?1:n.childElementCount+1;const r={description:e,completed:!1,index:t},o=`\n    <div class="list">\n      <input class="select" type="checkbox">\n      <p class="editable">${r.description}</p>\n    </div>\n    <div class="point">\n      <div class="points"></div>\n      <div class="points"></div>\n      <div class="points"></div>\n    </div>\n    <div class="delete_img">\n      <div class="pointv"></div>\n      <div class="pointv"></div>\n      <div class="pointv"></div>\n    </div>\n  `,i=document.createElement("div");i.classList.add("rows"),i.classList.add(r.index),i.innerHTML=o,i.setAttribute("draggable",!0),i.classList.add("draggable"),y.appendChild(i),h.push(r),localStorage.setItem("List",JSON.stringify(h)),document.getElementsByClassName("input_t")[0].value=""}()})),document.getElementById("list_row").addEventListener("click",(e=>{if(h.length>0){const n=e.target.parentElement.className;let t=n.split(" ")[1];void 0!==document.getElementsByClassName(n)[0]&&document.getElementsByClassName(n)[0].addEventListener("keypress",(e=>{13===(e.keyCode?e.keyCode:e.which)&&(t-=1,document.getElementsByClassName(n)[0].getElementsByClassName("editable")[0].contentEditable=!1,document.getElementsByClassName(n)[0].getElementsByClassName("editable")[0].blur(),document.getElementsByClassName("point")[t].style.display="flex",document.getElementsByClassName("delete_img")[t].style.display="none",document.getElementsByClassName(n)[0].style.backgroundColor="rgb(255, 255, 255)")}))}})),document.getElementById("unique").addEventListener("click",(()=>{const e=localStorage.getItem("List"),n=JSON.parse(e).filter((e=>!0!==e.completed));let t=1;n.forEach((e=>{e.index=t,t+=1})),localStorage.setItem("List",JSON.stringify(n));const r=document.getElementById("list_row").childElementCount;let o=0;for(let e=0;e<r;e+=1)!0===document.getElementById("list_row").childNodes[o].childNodes[1].childNodes[1].checked?0===o?(document.getElementById("list_row").childNodes[o].remove(),o=0):document.getElementById("list_row").childNodes[o].remove():o+=1;r<=1&&!0===document.getElementById("list_row").childNodes[0].childNodes[1].childNodes[1].checked&&document.getElementById("list_row").childNodes[0].remove()})),document.body.addEventListener("click",(document.getElementById("list_row").addEventListener("click",(e=>{if("select"===e.target.className){e.path[1].children[1].style.textDecoration="line-through";let n=e.path[2].className;n=n.split(" ");const t=n[1],r={description:e.path[1].children[1].innerText,completed:!0,index:t},o=localStorage.getItem("List"),i=JSON.parse(o);i.forEach((e=>{Number(e.index)===Number(r.index)&&(e.completed=!0)})),localStorage.setItem("List",JSON.stringify(i))}})),void document.getElementById("list_row").addEventListener("mousedown",(e=>{if("point"===e.target.className){const e=document.querySelectorAll(".rows"),n=document.querySelectorAll(".contains");e.forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("dragging"),e.style.fontWeight="bold"})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging"),e.style.fontWeight="normal",(()=>{const e=document.querySelectorAll(".contains");let n=1;const t=[];e.forEach((e=>{for(let r=0;r<e.childElementCount;r+=1){let o=e.childNodes;o=o[r].innerText;const i={description:o,completed:!1,index:n};t.push(i),n+=1}localStorage.setItem("List",JSON.stringify(t))}))})()}))})),n.forEach((e=>{e.addEventListener("dragover",(n=>{n.preventDefault();const t=function(e,n){return[...e.querySelectorAll(".draggable:not(.dragging)")].reduce(((e,t)=>{const r=t.getBoundingClientRect(),o=n-r.top-r.height/2;return o<0&&o>e.offset?{offSet:o,element:t}:e}),{offset:Number.NEGATIVE_INFINITY}).element}(e,n.clientY),r=document.querySelector(".dragging");null==t?e.appendChild(r):e.insertBefore(r,t)}))}))}}))),!0),window.onload=()=>{const e=localStorage.getItem("List"),n=JSON.parse(e);null!==n&&n.forEach((e=>{const n=`\n        <div class="list">\n          <input class="select" type="checkbox">\n          <p class="editable">${e.description}</p>\n        </div>\n        <div class="point">\n          <div class="points"></div>\n          <div class="points"></div>\n          <div class="points"></div>\n        </div>\n        <div class="delete_img">\n          <div class="pointv"></div>\n          <div class="pointv"></div>\n          <div class="pointv"></div>\n        </div>\n      `,t=document.createElement("div");t.classList.add("rows"),t.classList.add(e.index),t.innerHTML=n,t.setAttribute("draggable",!0),t.classList.add("draggable"),y.appendChild(t);const r={description:e.description,completed:!1,index:e.index};h.push(r)}))}},860:(e,n,t)=>{e.exports=t.p+"6d29059658269418b0f9.svg"},476:(e,n,t)=>{e.exports=t.p+"27a27afc59614f4483b3.svg"},204:(e,n,t)=>{e.exports=t.p+"4d80e820ac1870e4cada.svg"}},e=>{e(e.s=800)}]);