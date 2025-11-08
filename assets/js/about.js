const showMoreBtn = document.querySelector(
  ".founder-message-container .show-more-btn"
);
const founderDesc = document.querySelector(
  ".founder-message-container .founder-message-content p"
);
const founderContent = document.querySelector(
  ".founder-message-container .founder-message-content"
);

if(window.innerWidth<=768){
  founderDesc.classList.remove("reveal","delay-1","dead-slow")
}

showMoreBtn.addEventListener("click", () => {
  showMoreBtn.classList.toggle("active");
  if (showMoreBtn.classList.contains("active")) {
    showMoreBtn.textContent = "Show Less";
  } else {
    showMoreBtn.textContent = "Show More";
  }
  founderContent.classList.toggle("active");
  founderDesc.classList.toggle("active");
});

const header = document.querySelector(".header");
const body = document.body;
const main=document.querySelector(".main");
const cardModal = document.querySelector(".card-modal");
const goTopBtn=document.querySelector(".go-top-btn")

const cardModalContents = document.querySelectorAll(
  ".card-modal .card-modal-content"
);
const closeModalBtns = document.querySelectorAll(".close-modal-btn");
const cardReadMoreBtns = document.querySelectorAll(
  ".our-method-card-container .our-method-card .our-method-card-content .read-more-btn"
);

cardReadMoreBtns.forEach((cardReadMoreBtn) => {
  cardReadMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cardModal.classList.add("active");
    header.classList.add("not-active");
    const modalHeader = cardReadMoreBtn.getAttribute("data-target");

    cardModalContents.forEach((cardModalContent) => {
      if (cardModalContent.classList.contains(`${modalHeader}-modal-content`)) {
        cardModalContent.classList.add("active");
      }
    });
    body.classList.add("not-active");
    main.classList.add("blur");
    goTopBtn.classList.add("not-active")
  });
});

function closeModal() {
  cardModalContents.forEach((cardModalContent) => {
    cardModalContent.classList.remove("active");
  });
  cardModal.classList.remove("active");
  header.classList.remove("not-active");
  body.classList.remove("not-active");
  main.classList.remove("blur");
  goTopBtn.classList.remove("not-active")
}
closeModalBtns.forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", () => {
    closeModal();
  });
});

cardModal.addEventListener("click", (e) => {
  if (!e.target.closest(".card-modal-content")) {
    closeModal();
  }
});





const paragraph = document.querySelector(".typing-text");
const fullHeight = paragraph.offsetHeight;

function setParagraphHeight(paragraph) {
  const fullHeight = paragraph.offsetHeight;
  paragraph.style.minHeight = fullHeight + "px";
}
setParagraphHeight(paragraph)



const fullText = paragraph.textContent.trim();
paragraph.textContent = "";
let typed = false;

const slowWords = ["presence", "vulnerability"];


const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !typed) {
        typed = true;

        const words = fullText.split(/\s+/);
        let wordIndex = 0;

        function typeWord() {
          if (wordIndex >= words.length) {
            paragraph.classList.add("typed");
            return;
          }

          const word = words[wordIndex];
          let charIndex = 0;

          function typeChar() {
            if (charIndex < word.length) {
              paragraph.textContent += word[charIndex];
              charIndex++;
              setTimeout(typeChar, 34); 
            } else {
              paragraph.textContent += " ";
              wordIndex++;

          
              const lowerWord = word.toLowerCase();
              let delay = 100; 
              if (slowWords.some((w) => lowerWord.includes(w))) {
                delay = 1000;
              }

              setTimeout(typeWord, delay);
            }
          }

          typeChar();
        }

        typeWord();
        obs.unobserve(paragraph);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(paragraph);

window.addEventListener("resize", () => {
  setParagraphHeight(paragraph);
});



