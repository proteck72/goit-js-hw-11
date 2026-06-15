import{a as p,S as m,i as c}from"./assets/vendor-r3xvX9o-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="56323164-caf467cf771b73df75e13f6ca",g="https://pixabay.com/api/";function h(a){const r={key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),i=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const r=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> <span class="info-value">${t}</span></p>
          <p class="info-item"><b>Views</b> <span class="info-value">${n}</span></p>
          <p class="info-item"><b>Comments</b> <span class="info-value">${u}</span></p>
          <p class="info-item"><b>Downloads</b> <span class="info-value">${f}</span></p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){l.innerHTML=""}function v(){i&&i.classList.remove("is-hidden")}function P(){i&&i.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",q);function q(a){a.preventDefault();const r=a.currentTarget,o=r.elements["search-text"].value.trim();if(o===""){c.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),v(),h(o).then(s=>{if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(s=>{console.error("HTTP Request Error:",s),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P(),r.reset()})}
//# sourceMappingURL=index.js.map
