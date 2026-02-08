const febHolidays = [
  "Pinguuu, Sorry for my previous khand",
  "I promise you will never have to see it again",
  "ily so much, I can't even express it in words",
  "poooreee lifeee mai tumhara sahara bnunga ",
  "ek accha and saccha dost bannke",
  "tum kabhi bhi akeli nahi hogi",
  "main hamesha tumhare sath rahunga",
  "tum meri life ka sabse important insaan ho & rahoge",
  "mere life mai kese bhi problem aaye",
  "tab bhi sath chorunga nahi",
  "mere life mai kese bhi problem aaye",
  "main tumhe kabhi bhi gussa karaunga nahi",
  "You're my everything",
  "merese nhi hota tumhare bina rehnaa (exxperience)",
  "tum khud soch nahi sakte ki tum mere liye kitni important ho",
  "I will always be there for you",
  "No matter how far we are",
  "In one word, you're just perfect.",
  "I'm so grateful I met you",
  "Meri nazar mai tum itna khoobsurat ho UFF",
  "I'll always do my best to keep you happy🥺",
  "kabhi khud ko akela mat samjhna💓",
  "You are the most special person in my life🥰",
  "I don't want to lose you EVERRRRRRRRRRRR",
  "trust me tum enough ho mere liye",
  "Tumhe nahi pata mujhe kitna acche lagte hai",
  "jab tumhare sath time spend krta hoon",
  "I'm Very thankfull to God",
  "for bringing you in my life hehe",
  "Thankfull to you as well for",
  "accepting me in your life ",
  "and giving me a chance to be with youuuuuuuuuuuu",
  "I Love You Forever and Always, my Pingu💓",
];

const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = 0;
let activeIndex = 0;
const rotate = -360 / febHolidays.length;

init();

function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1}</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });

  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}

function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);

  const activeEl = document.querySelector("li.active");
  if (activeEl) {
    activeEl.classList.remove("active");
  }

  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(`li:nth-child(${activeIndex + 1})`);
  const bgColor = window.getComputedStyle(newActiveEl).backgroundColor;
  document.body.style.backgroundColor = bgColor;
  newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
})
window.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    adjustDay(-1);
  } else {
    adjustDay(1);
  }
});
  