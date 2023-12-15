import{l as s,s as m,i as u}from"./assets/modal-subscription-1578d01a.js";import"./assets/vendor-c374a7a2.js";const r=document.querySelector(".cart-container"),a=s("products"),o=document.querySelectorAll(".js-cart-counter");function p(){o.forEach(t=>{t.textContent=a.length})}p();for(const t of o)t.textContent=a.length;const l=document.querySelector(".cart-content-wrap");a.length===0?l.style.display="none":r.style.display="none";const g=document.querySelector(".js-cart-products");g.insertAdjacentHTML("beforeend",b(a));const f=document.querySelectorAll(".cart-btn-close");f.forEach(t=>{t.addEventListener("click",y)});function y(t){const c=t.target.closest(".cart-item").dataset.id;a.forEach((n,i,I)=>{n.data._id===c&&(document.querySelector(".cart-item").remove(),m("products",a),s("products"),a.length===0&&(l.style.display="none",r.style.display="block",localStorage.removeItem("products"),localStorage.setItem("products",JSON.stringify([])),o.forEach(d=>{d.textContent=test.length})))})}const v=document.querySelector(".total__price");function S(){const c=s("products").reduce((n,i)=>n+=i.data.price,0).toFixed(2);v.textContent=`$${String(c)}`}S();const h=document.querySelector(".cart__delete-button");h.addEventListener("click",C);function C(){localStorage.removeItem("products"),localStorage.setItem("products",JSON.stringify([]));const t=JSON.parse(localStorage.getItem("products"));o.forEach(e=>{e.textContent=t.length}),t.length===0&&(l.style.display="none",r.style.display="block")}function b(t){return t.map(e=>`<li class="cart-item" data-id="${e.data._id}">
						<div class="cart-item-wrap">
							<div class="cart-img-container">
								<img
									class="cart-img"
									src="${e.data.img}"
									alt="${e.data.name}"
								/>
							</div>
							<div class="cart-img-text">
								<div class="cart-item-title-wrap">
									<h3 class="cart-item-title">${e.data.name}</h3>
									<button
										name="button"
										type="button"
										class="cart-btn-close"
										aria-label="Close modal window"
									>
										<svg width="18" height="18" class="cart-icon-close">
											<use href="${u}#icon-icon-close"></use>
										</svg>
									</button>
								</div>

								<div class="cart-info-container">
									<p class="cart-info">
										Category:
										<span>${e.data.category.replaceAll("_"," ")}</span>
									</p>
									<p class="cart-info cart-info-overflow">
										Size:
										<span>${e.data.size}</span>
									</p>
								</div>
								<h3 class="cart-info-price">$${e.data.price}</h3>
							</div>
						</div>
					</li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
