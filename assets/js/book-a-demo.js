const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const url = `https://calendly.com/thequietclimb-contact/30min?back=1&month=${year}-${month}`;

const calendarFrame=document.querySelector(".calendar-frame");
calendarFrame.src = url;


