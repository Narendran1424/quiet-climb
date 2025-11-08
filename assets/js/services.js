const serviceContainer = document.querySelector(".service-card-container");
if(serviceContainer){
  const serviceLearnMoreBtns = serviceContainer.querySelectorAll(".learn-more-btn");
  const serviceReadMoreBtns = serviceContainer.querySelectorAll(".read-more-btn");
  if(serviceLearnMoreBtns){
    serviceLearnMoreBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const service = btn.getAttribute("data-service");
        if (service) {
          sessionStorage.setItem("selectedService", service);
        }
      });
    });
  }
  if(serviceReadMoreBtns){
    serviceReadMoreBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const service = btn.getAttribute("data-service");
        if (service) {
          sessionStorage.setItem("selectedService", service);
        }
      });
    });
  }
  
}




