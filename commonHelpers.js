import{S as m,i as u}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",h="4426398-a0870db649475c1e95845c204",y=l=>{const s=new URLSearchParams({key:h,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${d}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},g=({webformatURL:l,largeImageURL:s,tags:t,likes:a,views:e,comments:r,downloads:o})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
          class="gallery-image"
          src="${l}"
          alt="${t}"/>
        </a>
        <ul class="gallary-descr">
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Likes</h2>
            <p class="gallary-descr-item-num">${a}</p>
          </li>
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Views</h2>
            <p class="gallary-descr-item-num">${e}</p>
          </li>
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Comments</h2>
            <p class="gallary-descr-item-num">${r}</p>
          </li>
          <li class="gallary-descr-item">
            <h2 class="gallary-descr-item-title">Downloads</h2>
            <p class="gallary-descr-item-num">${o}</p>
          </li>
        </ul>
    </li>
    `,i=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),n=document.querySelector(".js-loader"),f=l=>{l.preventDefault(),n.classList.remove("is-hidden");const s=i.elements.user_query.value;y(s).then(t=>{if(t.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"}),c.innerHTML="",i.reset();return}const a=t.hits.map(e=>g(e)).join("");c.innerHTML=a,p.refresh()}).catch(t=>{console.log(t)}).finally(()=>{i.reset(),n.classList.add("is-hidden")})};i.addEventListener("submit",f);const p=new m(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
