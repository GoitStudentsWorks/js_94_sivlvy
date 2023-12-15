import{g as T,s as y,l as v,a as B,c as q,o as A,b as H,i as r,d as C,e as z}from"./assets/modal-subscription-1578d01a.js";import{S as x}from"./assets/vendor-c374a7a2.js";const d={selectEl:document.querySelector(".filters-categories-select"),formEl:document.querySelector(".filters-form")};let i={keyword:"",category:"",page:1,limit:6};S();T().then(t=>{I(t)}).catch(t=>console.log(t));function I(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';d.selectEl.insertAdjacentHTML("afterbegin",e);const s=t.map(n=>`<option value="${n}">${n.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');d.selectEl.insertAdjacentHTML("beforeend",s),new x({select:d.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}d.formEl.addEventListener("submit",j);function j(t){t.preventDefault(),i.page=1,i.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),y("filters-parameters",i),u()}d.selectEl.addEventListener("change",P);function P(t){i.category=t.target.value,i.page=1,y("filters-parameters",i),u()}function S(){return window.innerWidth>=1440?i.limit=9:window.innerWidth>=768?i.limit=8:i.limit=6,i.limit}const V=document.querySelector(".product-list"),h=document.querySelector(".pagination ul"),b=document.querySelector(".pagination"),$=document.querySelector(".card-container"),g=document.querySelector(".main-content-nothing"),D=document.querySelector(".loader");document.querySelector(".filters-search-input");let p=i,f=0;g.style.display="none";async function u(){y("filters-parameters",p),v("products");const t=v("filters-parameters");try{const e=await B(t);D.style.display="none";const s=e.results;f=e.totalPages;const n=document.querySelectorAll(".add-button");e.results.length?(g.style.display="none",b.style.display="block",$.style.display="block",V.innerHTML=q(s)):(g.style.display="block",b.style.display="none",$.style.display="none");const l=document.querySelectorAll(".add-button");for(const o of l)o.addEventListener("click",A);F()}catch(e){console.log(e)}}function F(){if(f<=1){h.innerHTML="";return}h.innerHTML=N(f,p.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(e=>{e.addEventListener("click",async s=>{const n=parseInt(s.currentTarget.dataset.page);!isNaN(n)&&n!==p.page&&(p.page=n,await u())})})}function N(t,e){let s="";const l=Math.floor(2.5);let o=e-l,a=e+l;o<1&&(o=1,a=Math.min(t,o+5-1)),a>t&&(a=t,o=Math.max(1,a-5+1)),e>1?s+=`<li class="btn prev" data-page="${e-1}"><span>&lt;</span></li>`:s+=`
		<li class="btn prev disabled">
			<span>&lt;</span>
		</li>`,o>1&&(s+=`<li class="first numb" data-page="1">
			<span>1</span>
		</li>`,o>2&&(s+=`<li class="dots">
				<span>...</span>
			</li>`));for(let c=o;c<=a;c++)s+=`<li class="numb ${c===e?"active":""}" data-page="${c}">
			<span>${c}</span>
		</li>`;return a<t&&(a<t-1&&(s+=`<li class="dots">
				<span>...</span>
			</li>`),s+=`<li class="last numb" data-page="${t}">
			<span>${t}</span>
		</li>`),e<t?s+=`<li class="btn next" data-page="${e+1}"><span>&gt;</span></li>`:s+=`<li class="btn next disabled">
			<span>&gt;</span>
		</li>`,s}document.addEventListener("DOMContentLoaded",async function(){let t;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(function(){S(),u()},300)}),await u()});function w(){productmodal.classList.toggle("is-hidden")}function L(t){const e=document.getElementById("productmodal");H(t).then(({data:s})=>{e.innerHTML=_(s),O(e)})}function O(t){t.querySelector(".mod-card-close").addEventListener("click",W),t.style.display="flex",w()}function W(){const t=document.getElementById("productmodal");t.style.display="none",w()}function _(t){return`<div class="modal-2-wrap">
	<div class="modal-img-wrap">
                <div class="modal-img-section">
                    <a class="modal-gallery-link" >
                        <img src="${t.img}" alt="${t.name}" width="160" height="160" loading="lazy" />
                    </a>
                </div>
                <div class="modal-center-section">
					<div class="modal-section-up">
                		<p class="modal-info-item">${t.name}</p>		
                        <div class="modal-subsection">
                        <p class="modal-category-item">Category: <span>${t.category.replace("_"," ")}</span>Size:<span>${t.size}</span></p>
                		<p class="modal-popularity-item"></span>Popularity:<span>${t.popularity}</span></p>
									
					    </div>
                    </div>
					<div class="modal-section-down">
                    <p class="modal-desc-item">${t.desc}</p>
                	</div>
                 </div> 
				</div>
				 <div class="modal-price-button">
                    <p class="modal-info-item">$${t.price}</p>	
                    <button class="modal-button-section add-to-cart " type="button" data-id="${t._id}">
         <span class="button-cart">Add to</span>
        <svg class="modal-icon-button" width="18" height="18">
            <use href="${r}#icon-cart-mob"></use>
        </svg>
    </button>
                    </div>
				<button class="modal-close-button mod-card-close" type="button">
   				 <svg class="close-sharp">
       				 <use href="${r}#close-sharp"></use>
     			 </svg>
    			</button>
            </div>`}const E=document.querySelector(".popular-list");let M=5;E.innerHTML="";C(M).then(t=>{E.innerHTML=Q(t)});document.addEventListener("click",function(t){const e=t.target.closest(".popular-card");if(e){const s=e.dataset.productId;L(s)}});function Q(t){return t.slice(0,M).map(({_id:e,name:s,img:n,category:l,price:o,size:a,is10PercentOff:c,popularity:m})=>`<li class="popular-card" data-product-id="${e}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${n}" alt="${s}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${s.substring(0,15)}</p>
						<button class="add-popular-button add-button" type="button" data-id="${e}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="${r}#icon-cart-mob" alt ="Add to cart">
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${l.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${a}</span>Popularity:<span>${m}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const k=document.querySelector(".discount-list");k.innerHTML="";z().then(t=>{k.innerHTML=G(t)});document.addEventListener("click",function(t){const e=t.target.closest(".discount-card");if(e){const s=e.dataset.productId;L(s)}});function R(t,e){return t.slice().sort(()=>Math.random()-.5).slice(0,e)}function G(t){return R(t,2).map(({_id:s,name:n,img:l,category:o,price:a,size:c,is10PercentOff:m,popularity:J})=>`<li class="discount-card" data-product-id="${s}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${l}" alt="${n}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${n}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${a}</p>
             	<button class="add-discount-button add-button" type="button" data-id="${s}">
							<svg class="discount-icon-button" width="18" height="18">
		 					<use href="${r}#icon-cart-mob" alt ="Add to cart">
		 					</use>
							</svg>
						</button>
				</div>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="${r}#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`).join("")}
//# sourceMappingURL=commonHelpers2.js.map
