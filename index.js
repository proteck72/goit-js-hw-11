import{a as p,S as m,i}from"./assets/vendor-r3xvX9o-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="56323164-caf467cf771b73df75e13f6ca",g="https://pixabay.com/api/";function h(s){const r={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.getElementById("loader-container"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> <span class="info-value">${t}</span></p>
          <p class="info-item"><b>Views</b> <span class="info-value">${a}</span></p>
          <p class="info-item"><b>Comments</b> <span class="info-value">${u}</span></p>
          <p class="info-item"><b>Downloads</b> <span class="info-value">${f}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function v(){l.innerHTML='<span class="loader"></span>'}function P(){l.innerHTML=""}const S=document.querySelector(".form");S.addEventListener("submit",q);function q(s){s.preventDefault();const r=s.currentTarget,o=r.elements["search-text"].value.trim();if(o===""){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),v(),h(o).then(n=>{if(n.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(n.hits)}).catch(n=>{console.error("HTTP Request Error:",n),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P(),r.reset()})}
//# sourceMappingURL=index.js.map
