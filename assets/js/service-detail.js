const storedData = JSON.parse(sessionStorage.getItem("serviceData"));
const selectedKey = sessionStorage.getItem("selectedService");
const dropdownLinkss = document.querySelectorAll(".navbar .dropdown-item");
if (selectedKey) {
  dropdownLinkss.forEach(link => {
    if (link.getAttribute("data-service") === selectedKey) {
      dropdownLinkss.forEach(item => {
        item.classList.remove("active");
      });
      link.classList.add("active");
    }
  });
}
if (storedData && selectedKey) {
  const service = storedData[selectedKey];
  const heroTitle=document.querySelector(".hero-section h2")
  heroTitle.innerText = service.heroTitle;
    if (service.heroSpan) {
    heroTitle.innerHTML += ` <span class="fw-normal fst-italic text-grey">${service.heroSpan}</span>`;
    }
  document.querySelector(".breadcrumb-item.active").innerText = service.breadcrumb;
  const contentWrapper = document.querySelector(".service-content-container");
  contentWrapper.innerHTML = `
    <h2>${service.heading}</h2>
    <img src="./assets/images/${service.img}" class="main-img" alt="${service.img}">
    <div class="service-content-desc-container ">
      <h3 class="ff-poppins fw-semibold reveal-text">${service.subtitle}</h3>
      <p class="ff-poppins text-grey reveal-text">${service.desc}</p>
    </div>
    <div class="proven-content-wrapper reveal-text">
      <h3 class="ff-poppins fw-medium"></h3>
      <div class="proven-content-container d-flex"></div>
    </div>
  `;


  
  const provenWrapper = document.querySelector(".proven-content-wrapper");


  contentWrapper.querySelectorAll(".service-content-card").forEach(c => c.remove());
  
  const applyBtn=document.querySelector(".ready-section .ready-content-container .ready-btn-container .apply-btn");
  
  service.cards.forEach(card => {
    let cardContent = `
      <div class="service-content-card reveal-text">
        <h3 class="ff-poppins fw-medium d-flex align-items-end">
          ${card.icon ? `<img src="./assets/images/${card.icon}" alt="${card.title}">` : ""} ${card.title}
        </h3>
        ${card.text ? `<p class="ff-poppins text-grey">${card.text}</p>` : ""}
        ${card.list ? `<ul class="ff-poppins text-grey">${card.list.map(item => `<li>${item}</li>`).join("")}</ul>` : ""}
      </div>
    `;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cardContent;
    const cardEl = tempDiv.firstElementChild;

   
    contentWrapper.insertBefore(cardEl, provenWrapper);
  });


  provenWrapper.querySelector("h3").innerText = service.proven.heading;

  const provenContainer = provenWrapper.querySelector(".proven-content-container");
  provenContainer.innerHTML = "";

  service.proven.items.forEach(item => {
    const provenCardHTML = `
      <div class="proven-card d-flex align-items-start">
        <img src="./assets/images/${item.icon}" alt="star">
        <div class="proven-card-content">
          <p class="proven-card-desc ff-poppins text-grey">${item.quote}</p>
          ${item.cite ? `<cite class="proven-cite ff-poppins fw-medium text-end">${item.cite}</cite>`:""}
        </div>
      </div>
    `;
    provenContainer.insertAdjacentHTML("beforeend", provenCardHTML);
  });
  applyBtn.textContent=service.btnContent
  removeBorder();
}

function removeBorder(){
  if(selectedKey=="corporate"){
    const provenCard=document.querySelector(".proven-card");
    provenCard.classList.add("border-none")
  }
}



const applyBtn = document.querySelector(".ready-content-container .ready-btn-container .apply-btn");

let needs = JSON.parse(sessionStorage.getItem("needs")) || [];

applyBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let need = "";

  if (applyBtn.textContent.includes("Apply")) {
    need = "accelerator";
  } else if (applyBtn.textContent.includes("Cohort")) {
    need = "cohort_lab";
  } else if (applyBtn.textContent.includes("Communication")) {
    need = "communication";
  } else {
    need = "Corporate_workshops";
  }


  if (!needs.includes(need)) {
    needs.push(need);
  }

  sessionStorage.setItem("needs", JSON.stringify(needs));

});
