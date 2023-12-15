import{a as d,b,N as v}from"./vendor-c374a7a2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=c(s);fetch(s.href,o)}})();d.defaults.baseURL="https://food-boutique.b.goit.study/api";const C=async()=>{const{data:t}=await d.get("/products/categories");return t},x=async({keyword:t,category:e,page:c,limit:r,sortBy:s})=>{const o=new URLSearchParams({page:c,limit:r});t&&o.set("keyword",t),e&&o.set("category",e),s&&o.set("sortBy",s);const{data:n}=await d.get("/products/",{params:o});return n},L=async t=>await d.get(`/products/${t}`),D=async t=>{const{data:e}=await d.get(`/products/popular?limit=${t}`);return e},M=async()=>{const{data:t}=await d.get("/products/discount");return t},S=async t=>{const{data:e}=await d.post("/subscription",t);return e};function w(){b.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}function E(t,e){localStorage.setItem(t,JSON.stringify(e))}function f(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return v.Notify.failure("Oops! Something went wrong!"),e}}const y="/js_94_sivlvy/assets/icons-58c424f0.svg";function p(){const t=document.querySelector(".js-cart-counter"),e=f("products");t.textContent=e.length}if(localStorage.getItem("products"))p();else{const t=[];localStorage.setItem("products",JSON.stringify(t)),p()}function A(t){return t.map(({img:e,name:c,category:r,size:s,popularity:o,_id:n,price:u})=>`<li class="card-wrapper" data-id="${n}">
					<div class="image-wrapper">
					<img src="${e}" alt="${c}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${c}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${r.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${s}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${o}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${u}</p>
			 <button class="add-button" type="button" data-id="${n}">
			 <svg class="icon-button"width="18" height="18">
             <use href="${y}#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function $(t){const e=t.currentTarget.dataset.id,c=f("products")||[];try{const r=await L(e);c.some(s=>s.data._id===e)||(c.push(r),E("products",c),p(),document.querySelectorAll(".add-button").forEach(o=>{if(o.dataset.id===e){o.removeEventListener("click",$);const u=o.querySelector("svg use");o.style.backgroundColor="#6D8434",u.setAttribute("href",`${y}#icon-cart-success`)}}))}catch(r){throw new Error(r)}}const g=document.querySelector(".form-footer"),l=document.querySelector(".modal-subscription"),i=document.querySelector(".modal-unsubscription"),a=document.querySelector(".modal-backdrop-subscription"),P=document.querySelector(".container-modal");document.querySelector(".close");l.classList.add("is-hidden");i.classList.add("is-hidden");const m=t=>{const e=t.target;(e===l||e.closest(".close"))&&(l.classList.add("is-hidden"),a.classList.add("is-hidden"),document.body.style.overflow="auto"),(e===i||e.closest(".close"))&&(i.classList.add("is-hidden"),a.classList.add("is-hidden"),document.body.style.overflow="auto"),(e===P||e.closest(".close"))&&(i.classList.add("is-hidden"),a.classList.add("is-hidden"),document.body.style.overflow="auto")};function h(t){(t.key==="Escape"||t.target===a)&&(l.classList.add("is-hidden"),i.classList.add("is-hidden"),a.classList.add("is-hidden"),document.body.style.overflow="auto")}const q=()=>{l.classList.remove("is-hidden"),a.classList.remove("is-hidden"),document.body.style.overflow="hidden"},I=()=>{i.classList.remove("is-hidden"),a.classList.remove("is-hidden"),document.body.style.overflow="hidden"},O=async t=>{const e={email:t};try{const c=await S(e);q()}catch(c){c.response.data.message==="Subscription already exists"?I():w()}};function k(t){t.preventDefault();const c=document.querySelector(".input-label").value.trim();O(c),g.reset()}g.addEventListener("submit",k);l.addEventListener("click",m);i.addEventListener("click",m);a.addEventListener("click",m);document.addEventListener("keydown",h);document.addEventListener("click",h);export{x as a,L as b,A as c,D as d,M as e,C as g,y as i,f as l,$ as o,E as s};
//# sourceMappingURL=modal-subscription-1578d01a.js.map
