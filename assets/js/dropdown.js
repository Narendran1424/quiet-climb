document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
  const menu = dropdown.querySelector('.dropdown-menu');
  const bsDropdown = new bootstrap.Dropdown(menu, { autoClose: true });


  dropdown.addEventListener('mouseenter', () => {
    bsDropdown.show();
  });


  dropdown.addEventListener('mouseleave', () => {
    bsDropdown.hide();
  });
  dropdown.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      window.location.href = link.href;
    });
  });
});

const dropdownLinks=document.querySelectorAll(".header .navbar .dropdown-item")

dropdownLinks.forEach(link => {
  link.addEventListener("click", () => {
    const service = link.getAttribute("data-service");
    sessionStorage.setItem("selectedService", service);
  });
});

const serviceData = {
  accelerator: {
    heroTitle: "1:1 Accelerator ",
    heroSpan:"(8–12 weeks)",
    breadcrumb: "1:1 Accelerator (8–12 weeks)",
    heading: "Accelerator — Senior & Executive Leadership Coaching",
    img: "accelerator-large.png",
    subtitle:"Turn high performance into visible, recognised leadership.",
    desc: "You deliver strong results. Your expertise is undeniable. Yet when leadership roles are discussed, you hear the same words: “not ready for leadership.” No one tells you why. You are left to guess at unspoken rules. The 1:1 Accelerator is built for ambitious professionals who don’t fit the traditional mould - introverts, international professionals, women in male-dominated industries, and quietly ambitious technical professionals. In 8–12 weeks, we work together to make your leadership visible and credible so decision-makers see you as ready.",
    cards: [
      { icon: "shrug.png", title: "Who it is for", text: "Ambitious leaders & professionals (including introverts, international professionals, women in male-dominated industries, and other underrepresented voices) who want to progress into senior or executive roles and do not know how or feel overlooked today. You’re motivated to accelerate your journey with a 1:1 strategy that stays true to your values and who you are." },
      { icon: "speedometer.png", title: "How it works", list: ["Decode the unspoken rules that are blocking your progress", "Practice credibility signals that decision-makers recognise", "Shape your leadership story so it builds authority and influence", "Create a personalised promotion-readiness roadmap so you stop guessing and start progressing"] },
      { icon: "solution.png", title: "What it solves", text: "You already have the talent and experience, but you are stuck at the invisible line where expertise is not enough. The 1:1 Accelerator gives you a tailored path to make your leadership visible, trusted, and promotable." },
      { icon: "light-bulb.png", title: "What you get", list: ["A credibility diagnostic and stakeholder map that show you exactly where you stand", "Executive communication sprints to practice authority in a safe space", "A promotion readiness plan with clear, concrete steps to reach your next role"] },
      { icon: "superior.png", title: "The outcome", text: "You finish with clarity on the unspoken rules and the practical tools to progress into senior & executive leadership, not by changing who you are, but by making your value visible in the ways that decision-makers recognise." },
      {title:"Do You Have a Career Crossroads Looming?",text:"If you’re approaching a promotion review, stepping into higher visibility, or wondering why your career has stalled - this is the moment to get clear."}
    ],
    proven: {
      heading: "A Proven Path",
      items: [
        { icon: "star.png", quote: "“Within three months, I stepped into a leadership role after years of being seen as just technical.”", cite: "-Experts, client" },
        { icon: "star.png", quote: "“Moved into a high-visibility strategic role that put me firmly on the leadership path.”", cite: "-Engineering professional, client" }
      ]
    },
    btnContent:"Apply for 1:1 Coaching",
  },

  cohort: {
    heroTitle: "Cohort Lab ",
    heroSpan:"(6–8 leaders)",
    breadcrumb: "Cohort Lab (6–8 leaders)",
    heading: "Cohort Lab — Group Coaching For Emerging Leaders",
    img: "cohort-lab-large.png",
    subtitle:"From isolated ambition to shared momentum",
    desc: "When you don’t see role models like yourself in senior leadership, the climb feels lonely. You start to doubt whether you belong there at all. The Cohort Lab brings together 6–8 ambitious professionals - introverts, international professionals, women in male dominated industries, and technical professionals who share the same climb. Together, you learn, practice, and build momentum.",
    cards: [
      { icon: "shrug.png", title: "Who it is for", text: "Ambitious leaders & professionals (including introverts, international professionals, women in male-dominated industries, and other underrepresented voices) who want to grow into senior or executive leadership with a group of like-minded individuals. You’re ready to move forward faster: to be seen, to be heard, and to master the unspoken rules of leadership." },
      { icon: "speedometer.png", title: "How it works", list: ["Weekly or bi-weekly group hot seats to practice and get feedback", "Peer support and accountability so you apply lessons in real time", "Shared strategies for navigating hidden rules and unspoken barriers", "Practical playbooks to make credibility visible and promotable"] },
      { icon: "solution.png", title: "What it solves", text: "Progress feels lonely when you cannot see anyone like you ahead. The Cohort Lab gives you a community of peers with the same ambition, guided practice to master credibility signals, and accountability to keep climbing." },
      { icon: "light-bulb.png", title: "What you get", list: ["6 Group sessions (virtual or in-person)", "Hot seat coaching that addresses your real challenges", "Peer accountability and shared strategies that prove you are not climbing alone","Access to hidden frameworks that uncover unspoken rules of progression"] },
      { icon: "superior.png", title: "The outcome", text: "You gain confidence, clarity, and the momentum to advance. You stop wondering if you belong, because you see yourself grow alongside others who share the same path to senior & executive roles." },
      {title:"Ready To Stop Climbing Alone?",text:"Progress is faster when you climb with others who understand your journey."}
    ],
    proven: {
      heading: "A Proven Path",
      items: [
        { icon: "star.png", quote: "“Coaching gave me clarity and courage to show up differently. I was seen, supported, and promoted.”", cite: "-Cohort participant" },
        { icon: "star.png", quote: "“From a quiet, overlooked manager to an impactful leader without losing authenticity.”", cite: "-Cohort participant"}
    ]
    },
    btnContent:"Join the Next Cohort",
  },

  coaching: {
    heroTitle: "Communication Coaching ",
    heroSpan:"(Storytelling & Authentic Presence)",
    breadcrumb: "Communication Coaching (Storytelling & Authentic Presence)",
    heading: "Communication Coaching — Storytelling & Authentic Presence",
    img: "communication-large.png",
    subtitle:"Unlock leadership progression through authentic communication.",
    desc: "Strong communication is not optional at senior levels - it’s the difference between being overlooked and being recognised as a leader. For ambitious professionals, authentic communication is one of the fastest ways to increase impact and unlock progression. This program is for introverts, technical professionals, and quiet leaders who want to influence without faking extroversion - and for any professional who knows that communication is the key to opening doors into senior leadership. Because when your communication is clear and authentic, you can create impact in any room, in any culture, and wherever your career takes you.",
   cards: [
      { icon: "shrug.png", title: "Who it is for", text: "Professionals who are motivated to strengthen their communication and create accelerated impact in their leadership journey, all while being authentic and using their unique voice, not copying someone else’s style." },
      { icon: "speedometer.png", title: "How it works", list: ["Learn storytelling frameworks that turn complex ideas into clear, memorable narratives", "Practice presence and delivery in a way that feels authentic, not performative", "Build the confidence to communicate impact to sponsors, decision-makers, and senior leaders", "Rehearse for high-stakes settings (board reviews, promotions, presentations etc.) with practical feedback"] },
      { icon: "solution.png", title: "What it solves", text: "Many high performers are told to “work on communication” but rarely shown how. This program helps you speak with clarity, connect with audiences, and tell stories that inspire trust, all while staying authentic and vulnerable, not forced or artificial." },
      { icon: "light-bulb.png", title: "What you get", list: ["Storytelling frameworks to turn complex work into clear, memorable narratives", "Coaching on presence, voice, and delivery that feels natural, not performative", "Tools to connect with any audience, from engineers to executives","Real practice and feedback so you see immediate improvement"] },
      { icon: "superior.png", title: "The outcome", text: "You learn how to communicate with credibility and warmth, influence decisions at senior & executive levels, and be remembered for both your clarity and your humanity" },
      {title:"Ready To Increase Your Impact?",text:"Leadership is not only about what you deliver, it’s about how you communicate your value. When you get this right, you can create impact in any culture, in any room, wherever your career takes you."}
    ],
    proven: {
      heading: "A Proven Path",
      items: [
        { icon: "star.png", quote: "“Moved from being seen as passive, even labelled as underperforming - to being recognised as an impactful leader while staying authentic.”", cite: "-Coaching client" },
        { icon: "star.png", quote: "“My ideas now land with senior leaders. I no longer feel invisible in the room.”", cite: "-Coaching client" }
      ]
    },
    btnContent:"Book Communication Coaching",
  },

  corporate: {
    heroTitle: "Corporate Workshops & Leadership Pods",
    breadcrumb: "Corporate Workshops & Leadership Pods",
    heading: "Corporate Workshops & Leadership Pods",
    img: "workshop-large.png",
    subtitle:"Unlock the full impact of your diverse talent.",
    desc: "Diversity without inclusion is just a statistic. Progress happens when diverse employees are not only present, but also seen, valued, and promoted. Our Corporate Workshops and Leadership Pods equip senior leadership and employees alike. Leaders learn to recognise and sponsor overlooked talent. Employees learn to build credibility signals and visibility. Together, they drive both inclusion and productivity.",
    cards: [
      { icon: "shrug.png", title: "Who it is for", text: "For organisations that want to unlock the leadership potential of ambitious talent, especially introverts, international professionals, women in male-dominated industries, and other underrepresented voices who are too often dismissed as “not the leadership type.” These programs motivate and recognise rising leaders for who they are and what they bring. By celebrating diversity and making credibility visible, you create a culture where inclusion is real and leadership pipelines are stronger." },
      { icon: "speedometer.png", title: "How it works", list: ["Credibility Signals: what leaders really recognise", "Influence Without Authority: leading beyond your role", "Cross-Cultural Leadership: navigating global teams", "Inclusive Leadership: equipping executives to support diverse talent"] },
      { icon: "solution.png", title: "What it solves", text: "Talent is wasted when potential leaders are left guessing at unspoken rules. These workshops and pods make credibility visible, practical, and coachable, so your organisation does not lose its future leaders." },
      { icon: "light-bulb.png", title: "What you get", list: ["Signature workshops: Credibility Signals, Influence Without Authority, Cross-Cultural Leadership", "Tailored leadership pods with manager alignment and feedback loops", "Practical frameworks that teams can use to measure and sustain growth"] },
      { icon: "superior.png", title: "The outcome", list:["Retain top talent by showing ambitious professionals they have a clear path forward","Build a promotable pipeline of diverse leaders ready for senior and executive roles", "Increase innovation by empowering leaders with different perspectives to contribute visibly","Strengthen trust and engagement across teams through authentic leadership presence"]},
      {title:"Ready to Maximise the Impact of Your Talent?",text:"When inclusion becomes real, organisations thrive. Productivity rises, innovation grows, and future leaders stay."}
    ],
    proven: {
      heading: "A Proven Path",
      items: [
        { icon: "star.png", quote: "Built on my journey to senior leadership in industry, where inclusion turned underrepresented voices into recognised leaders, and now adapted for organisations ready to move from awareness to action."}
    ]
    },
    btnContent:"Enquire for Corporate Training",
  }
};
sessionStorage.setItem("serviceData", JSON.stringify(serviceData));




const footerForm=document.querySelector("footer .footer-contact-form-container form")
const footerEmail=footerForm.querySelector(".email-input");
const errorElement=document.querySelector("footer .footer-contact-form-container .footer-input-error")

footerForm.addEventListener('submit', async (e) => {
  e.preventDefault(); 

  if (!validate()) {
    return; 
  }

  const formData = new FormData(footerForm);

  try {
    const response = await fetch("https://formsubmit.co/ajax/info@thequietclimb.co.uk", {
      method: "POST",
      headers: {
        "Accept": "application/json" 
      },
      body: formData
    });

    if (response.ok) {
      setSUccess(`Thank you for subscribing! <br>
        We’ll reach out to you soon.`);
      footerForm.reset();

      setTimeout(() => {
        errorElement.classList.remove("show", "success");
      }, 4000);
    } else {
      setError("Something went wrong. Please try again.");
    }
  } catch (err) {
    setError("Network error. Please try again later.");
  }
});



function validate(){
  let success=true;
  const emailVal=footerEmail.value.trim();
  if(emailVal===""){
    setError("Please enter the email");
    success=false;
  }
  else if(!validateEmail(emailVal)){
    setError("Please enter the valid email");
    success=false;
  }  
  else{
    setSUccess(`Thank you for subscribing! <br>
                  We'll reach out to you soon.`);
  }
  return success;  
}

const validateEmail=(email)=>{
  return String(email)
  .toLowerCase()
  .match(
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  );
}

function setError(message){
  errorElement.innerHTML= message;
  errorElement.classList.remove("success");
  errorElement.classList.add("show");
}
function setSUccess(message){
  errorElement.innerHTML= message;
  errorElement.classList.add("show");
  errorElement.classList.add("success");
}


const navbarToggler = document.querySelector('.navbar-toggler');
const navbarTogglerIcon = navbarToggler.querySelector('.navbar-toggler-icon');
const navbarCollapse = document.querySelector('#mainNavbar');

function setMenuIcon() {
  navbarTogglerIcon.style.backgroundImage = "var(--bs-navbar-toggler-icon-bg)";
}
function setCloseIcon() {
  navbarTogglerIcon.style.backgroundImage = "url('./assets/images/navClose.png')";
  const header = document.querySelector(".header")
  header.classList.add("scrolled")
}

navbarCollapse.classList.contains('show') ? setCloseIcon() : setMenuIcon();


navbarCollapse.addEventListener('show.bs.collapse', setCloseIcon);
navbarCollapse.addEventListener('hide.bs.collapse', setMenuIcon);

function handleResize() {
  if (window.innerWidth >= 768) { 
    navbarCollapse.classList.remove('show'); 
    setMenuIcon();
  }
}

window.addEventListener('resize', handleResize);
