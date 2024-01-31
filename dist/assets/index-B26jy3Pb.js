var v=Object.defineProperty;var y=(s,e,t)=>e in s?v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(y(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const g=()=>{const s=document.createElement("div");return s.classList.add("logo"),s.innerHTML=`
        <div></div>
        <div>Test Task</div>
`,s.outerHTML};class p{constructor(e,t,n=!1){i(this,"className");i(this,"text");i(this,"element");i(this,"endIcon");this.className=Array.isArray(e)?e:[e],this.text=t,this.endIcon=n,this.element=document.createElement("button"),this.element.classList.add(...this.className),this.element.innerHTML=`${this.endIcon?`${this.text}<div class='card__btn-icon-wrapper'>
                        <div class='card__btn-icon'></div>
                      </div>`:this.text}`}renderHTML(){return this.element.outerHTML}}const b=()=>{const s=document.querySelector("#menu"),e=new p("menu__btn-red","Sign Up");if(s)return document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".dropdown");if(t){let n=!1;t.addEventListener("click",()=>{const r=document.querySelector(".dropdown-content");return n?(n=!1,r==null?void 0:r.classList.remove("expanded")):(n=!0,r==null?void 0:r.classList.add("expanded"))})}}),s.innerHTML=`<menu>
        ${g()}
        <div class='inner'>
            <div class='left-menu'>
                <a href="#" target="_blank">About Us</a>
                <a href="#" target="_blank">Features</a>
                <a href="#" class='active' target="_blank">Pricing</a>
                <a href="#" target="_blank">Product</a>
                <a href="#" target="_blank">Contact</a>
            </div>
            <div class='dropdown'>
              <a class='menu-icon'></a>
              <div class='dropdown-content'>
                <a href="#" class='dropdown-row' target="_blank">About Us</a>
                <a href="#" class='dropdown-row' target="_blank">Features</a>
                <a href="#" class='dropdown-row' target="_blank">Pricing</a>
                <a href="#" class='dropdown-row' target="_blank">Product</a>
                <a href="#" class='dropdown-row' target="_blank">Contact</a>
                <a href="#" class='dropdown-row'>Login</a>
                ${e.renderHTML()}
            </div>
              </div>
            </div>
            <div class='right-menu'>
                <a class='login'>Login</a>
                ${e.renderHTML()}
            </div>
        </div>
      </menu>
    `};class m{constructor(e,t){i(this,"data");i(this,"container");i(this,"vip");i(this,"cymbolOfCyrrency");i(this,"currency");i(this,"period");i(this,"button");this.data=e,this.vip=t,this.container=document.createElement("div"),this.container.classList.add("card"),this.button=new p(this.vip?["card__btn","card__btn-red"]:"card__btn",this.vip?"Get Started":"Start Free Trial",!!this.vip),t&&this.container.classList.add("card",t),this.cymbolOfCyrrency="$",this.currency="dollar",this.period="month"}render(){var e,t;this.container.innerHTML=`
        <div class='card__top'>
          <div class='heading'>
            <h2 class='card__title'>${this.data.title}</h2>
            <div class='price-wrapp'>
              <div class='currency'>${this.cymbolOfCyrrency}</div>
              <div class='price'>
                <span class='count'>${(t=(e=this.data.prices)==null?void 0:e[this.period])==null?void 0:t[this.currency]}</span>
                <span class='period'>/${this.period}</span>
              </div>
            </div>
          </div>
          <div class='card__top-desc'>Get Torque's basic plan to optimise you lead generation process.</div>
        </div>
        <div class='card__bottom'>
          <div class='features'>
            <div class='features__title'>Core Features</div>
            <div class='features__desc'>${this.data.desc}</div>
            <div class='features__list'>
                ${this.data.features.map(n=>n.white?`<div class='features__item'>
                                <div class='list-icon'></div>
                                ${n.name}
                            </div>`:`<div class='features__item grey'>
                                <div class='list-icon'></div>
                                ${n.name}
                            </div>`).join("")}
            </div>
          </div>
        </div>
        <div class='action'>
          ${this.button.renderHTML()}
        </div>
      `}changeCurrency(){if(this.currency==="dollar")return this.cymbolOfCyrrency="€",this.currency="euro";if(this.currency==="euro")return this.cymbolOfCyrrency="₽",this.currency="rouble";if(this.currency==="rouble")return this.cymbolOfCyrrency="$",this.currency="dollar"}changePeriod(){return this.period==="month"?this.period="day":this.period="month"}getContainer(){return this.container}}const f=[{title:"Basic Survival",desc:"Basic",features:[{name:"Email adresses",white:!0},{name:"Phone numbers",white:!0},{name:"Unlimited Lists",white:!0}],prices:{day:{dollar:1,euro:.7,rouble:200},month:{dollar:30,euro:25,rouble:2400}}},{title:"Mission Professional",desc:"Boost Tools",features:[{name:"Email adresses",white:!1},{name:"Phone numbers",white:!1},{name:"Unlimited Lists",white:!1},{name:"Export contacts",white:!0},{name:"Prospecting",white:!0},{name:"50MB Per File Attachment",white:!0}],prices:{day:{dollar:9,euro:6,rouble:640},month:{dollar:276,euro:200,rouble:19200}}},{title:"Rocketship Premium",desc:"Super Fuel",features:[{name:"Email adresses",white:!1},{name:"Phone numbers",white:!1},{name:"Unlimited Lists",white:!1},{name:"Export contacts",white:!1},{name:"Prospecting",white:!1},{name:"50MB Per File Attachment",white:!0},{name:"Basic analytics",white:!0}],prices:{day:{dollar:14,euro:11.6,rouble:1280},month:{dollar:420,euro:350,rouble:38400}}}];b();const l=document.createDocumentFragment(),o=new m(f[0]);o.render();l.appendChild(o.getContainer());const c=new m(f[1],"vip");c.render();l.appendChild(c.getContainer());const d=new m(f[2]);d.render();l.appendChild(d.getContainer());const h=document.getElementById("card-group");document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{o.getContainer().classList.add("visible")},700),setTimeout(()=>{c.getContainer().classList.add("visible")},100),setTimeout(()=>{d.getContainer().classList.add("visible")},700);const s=document.querySelector("#card-group");s&&s.addEventListener("click",e=>{const t=e.target;t.classList.contains("currency")&&(o.changeCurrency(),c.changeCurrency(),d.changeCurrency(),o.render(),c.render(),d.render()),t.classList.contains("period")&&(o.changePeriod(),c.changePeriod(),d.changePeriod(),o.render(),c.render(),d.render())})});h==null||h.appendChild(l);
