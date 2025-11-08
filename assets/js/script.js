const successContainer = document.querySelector(".success-slider");
let position = 0;

function successMarquee() {
  const scrollSpeed = 1.3;
  position += scrollSpeed;

  if (position >= successContainer.scrollWidth / 2) {
    position = 0;
  }

  successContainer.style.transform = `translateX(-${position}px)`;
  requestAnimationFrame(successMarquee);
}

successContainer.innerHTML += successContainer.innerHTML;

requestAnimationFrame(successMarquee);

function initScrollEffects(headerSelector, sentinelSelector, thresholdValue = 0.1) {
  const header = document.querySelector(headerSelector);
  const sentinel = document.querySelector(sentinelSelector);

  if (!header || !sentinel) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.remove("scrolled");
        } else {
          header.classList.add("scrolled");
        }
      });
    },
    {
      root: null,
      threshold: thresholdValue,
    }
  );

  observer.observe(sentinel);
}




document.addEventListener("DOMContentLoaded", () => {
  initScrollEffects(".header", ".sentinel", 0.1);
  
});


const testimonialBtns = document.querySelectorAll(
  ".testimonial-slider-btn-container button"
);
const testimonialCardContainer = document.querySelector(
  ".testimonial-card-container"
);
const container = document.querySelector(".testimonial-card-container");
const progress = document.querySelector(".testimonial-indicator .progress");

let slides = [];
let currentIndex = 0;
let isTransitioning = false;
let autoplay;
let resizeTimeout;
let cardWidth = 0;

function getActiveSlides() {
  return testimonialCardContainer.classList.contains("show-testimonials")
    ? [
        ...document.querySelectorAll(
          ".testimonial-card:not(.case-studies-card)"
        ),
      ]
    : [...document.querySelectorAll(".testimonial-card.case-studies-card")];
}

function clearContainer() {
  container.querySelectorAll(".testimonial-card").forEach((card) => {
    if (card.dataset.cloned === "true") card.remove();
  });
}

function rebuildSlider() {
  clearContainer();
  slides = getActiveSlides();
  slides
    .slice()
    .reverse()
    .forEach((s) => {
      const clone = s.cloneNode(true);
      clone.dataset.cloned = "true";
      clone.classList.remove("reveal-card", "visible");
      container.prepend(clone);
    });
  slides.forEach((s) => {
    const clone = s.cloneNode(true);
    clone.dataset.cloned = "true";
    clone.classList.remove("reveal-card", "visible");
    container.append(clone);
  });
  currentIndex = slides.length;
  updateCardWidth();
  updateSlide(currentIndex, false);
}

function updateCardWidth() {
  const card = container.querySelector(".testimonial-card");
  if (!card) return;
  const gap = parseFloat(getComputedStyle(container).gap) || 0;
  cardWidth = card.offsetWidth + gap;
}

function updateSlide(index, animate = true) {
  container.style.transition = animate ? "transform 0.8s ease-in-out" : "none";
  requestAnimationFrame(() => {
    container.style.transform = `translateX(${-index * cardWidth}px)`;
    const progressVisible = document.querySelector('.testimonial-indicator .progress.visible');
    if (progressVisible) {
      updateProgress();
    }
    

    if (!animate) {
      isTransitioning = false;
    }
  });
}

function updateProgress() {
  let visible = 1;
  let relativeIndex = (currentIndex - slides.length) % slides.length;
  if (relativeIndex < 0) relativeIndex += slides.length;
  const step = 50;
  progress.style.width = `${
    step * ((relativeIndex % (slides.length / visible)) + 1)
  }%`;
}

function handleTransitionEnd() {
  isTransitioning = false;

  let reset = false;
  if (currentIndex >= slides.length * 2) {
    currentIndex = slides.length;
    reset = true;
  }
  if (currentIndex < slides.length) {
    currentIndex = slides.length * 2 - 1;
    reset = true;
  }

  if (reset) {
    container.classList.add("slider-reset");
    requestAnimationFrame(() => {
      updateSlide(currentIndex, false);
      container.classList.remove("slider-reset");
    });
  }
}

container.addEventListener("transitionend", handleTransitionEnd);

function startAutoplay() {
  stopAutoplay();
  updateCardWidth();
  isTransitioning = false;
  autoplay = setInterval(() => {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex++;
      updateSlide(currentIndex);
    }
  }, 4000);
}

function stopAutoplay() {
  clearInterval(autoplay);
}

let startX = 0;
let startY = 0;
const swipeThreshold = 50;

function getEventX(e) {
  return e.type.includes("mouse") ? e.pageX : e.changedTouches[0].screenX;
}

function getEventY(e) {
  return e.type.includes("mouse") ? e.pageY : e.changedTouches[0].screenY;
}

function startSwipe(e) {
  startX = getEventX(e);
  startY = getEventY(e);
  stopAutoplay();
  container.classList.add("no-select");
}

function endSwipe(e) {
  const endX = getEventX(e);
  const endY = getEventY(e);
  const dx = endX - startX;
  const dy = endY - startY;
  if (
    Math.abs(dx) > Math.abs(dy) &&
    Math.abs(dx) > swipeThreshold &&
    !isTransitioning
  ) {
    isTransitioning = true;
    currentIndex += dx < 0 ? 1 : -1;
    updateSlide(currentIndex, true);
  }
  container.classList.remove("no-select");
  startAutoplay();
}

container.addEventListener("touchstart", startSwipe, { passive: true });
container.addEventListener("touchend", endSwipe);
container.addEventListener("mousedown", startSwipe);
container.addEventListener("mouseup", endSwipe);

testimonialBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    testimonialBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const target = btn.dataset.target;
    testimonialCardContainer.classList.toggle(
      "show-testimonials",
      target === "testimonial-card"
    );
    testimonialCardContainer.classList.toggle(
      "show-case-studies",
      target === "case-studies-card"
    );
    rebuildSlider();
    startAutoplay();
    if(target==="testimonial-card"){
      const revealCards=document.querySelectorAll(".reveal-card")
      revealCards.forEach(card=>{
        card.classList.remove("reveal-card","visible")
      })
    }
    
  });
});

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  stopAutoplay();
  resizeTimeout = setTimeout(() => {
    updateCardWidth();
    updateSlide(currentIndex, false);
    const anyVisibleCard = document.querySelector(".reveal-card.visible");
    if (anyVisibleCard) startAutoplay();
  }, 200);
});

window.addEventListener("load", () => {
  rebuildSlider();
});




const revealCards = document.querySelectorAll(".reveal-card");

progress.style.width = "0%";
progress.dataset.started = "false";

const cardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      startAutoplay();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0 });

revealCards.forEach(card => cardObserver.observe(card));

const progressObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && progress.dataset.started === "false") {
      progress.dataset.started = "true";
      progress.classList.add("visible");
      requestAnimationFrame(() => {
        const targetWidth = window.innerWidth > 768 ? 50 : 100;
        progress.style.width = `${targetWidth}%`;
      });
      observer.unobserve(progress);
    }
  });
}, { threshold: 0 });

progressObserver.observe(progress);

const serviceCards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.querySelectorAll(".reveal-card-text").forEach(el => {
        el.classList.add("visible");
      });

      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1});


serviceCards.forEach(card => observer.observe(card));


if (window.innerWidth <= 768) {
  [1, 3].forEach(i => {
    if (revealCards[i]) {
      revealCards[i].classList.remove("reveal-card");
    }
  });
}