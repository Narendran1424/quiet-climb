
document.addEventListener("DOMContentLoaded", () => {
  moveUp();
  animateOpacity();
  moveLeft();
  moveRight();
  slowAnimation();
  headerAnimation();
  initHeroAnimation();

})


function moveUp() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(reveal => {
    let threshold = 0.3;

    if (reveal.classList.contains("reveal-zero")) {
      threshold = 0;
    }
    else if (reveal.classList.contains("reveal-one")) {
      threshold = 0.1;
    }
    else if (reveal.classList.contains("reveal-two")) {
      threshold = 0.2;
    }
    if (window.innerWidth <= 768 && reveal.classList.contains("reveal-mobile-zero")) {
      threshold = 0;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold });

    observer.observe(reveal);
  });
}



function animateOpacity(){
    const reveals = document.querySelectorAll(".reveal-opacity");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        
      } 
    });
  }, {
    threshold: 0.3
  });
  
  reveals.forEach(reveal => observer.observe(reveal));
}

function moveLeft() {
  const reveals = document.querySelectorAll(".reveal-left");

  reveals.forEach(reveal => {
    let threshold = 0.3;

    if (reveal.classList.contains("reveal-left-zero")) {
      threshold = 0;
    }
    else if (reveal.classList.contains("reveal-left-one")) {
      threshold = 0.1;
    }
    else if (reveal.classList.contains("reveal-left-two")) {
      threshold = 0.2;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold });

    observer.observe(reveal);
  });
}



function moveRight(){
  const reveals = document.querySelectorAll(".reveal-right");

 reveals.forEach(reveal => {
    let threshold = 0.2;

    if (reveal.classList.contains("reveal-right-zero")) {
      threshold = 0;
    }
    else if (reveal.classList.contains("reveal-right-one")) {
      threshold = 0.1;
    }
     else if (reveal.classList.contains("reveal-right-two")) {
      threshold = 0.2;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold });

    observer.observe(reveal);
  });
}

function slowAnimation() {
  const reveals = document.querySelectorAll(".reveal-text");
  
  const thresholdValue = window.innerWidth < 768 ? 0.1 : 0.3;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } 
    });
  }, { threshold: thresholdValue });

  reveals.forEach(reveal => observer.observe(reveal));
}



function headerAnimation()  {
  const headers = document.querySelectorAll(".reveal-header");


  headers.forEach(header => {
  const words = header.textContent.trim().split(" ");
  header.textContent = "";
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    header.appendChild(span);
    if (i < words.length - 1) header.appendChild(document.createTextNode(" "));
  });
});


  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  headers.forEach(header => observer.observe(header));

}

function initHeroAnimation() {
    const elements = document.querySelectorAll(".hero-content .hero-animate");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.4 });

    elements.forEach(el => observer.observe(el));
}


function initGoTopButton(goTopBtnSelector) {
  const goTopBtn = document.querySelector(goTopBtnSelector);
  if (!goTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      goTopBtn.classList.add("active");
    } else {
      goTopBtn.classList.remove("active");
    }
  });

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initGoTopButton(".go-top-btn");
});

