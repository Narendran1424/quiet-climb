const subscribeBtn= document.querySelector(".resources-card-wrapper .resources-card .subscribe-btn");
const notifyBtn= document.querySelector(".resources-card-wrapper .resources-card .notify-btn");

const footerInputMail=document.querySelector(".footer-content-container .footer-contact-form-container form .email-input")


function focusEmailInput() {
  if (footerInputMail) {
    footerInputMail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      footerInputMail.focus();
    }, 300);
  }
}

subscribeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    focusEmailInput();
} );
notifyBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    focusEmailInput();
} );