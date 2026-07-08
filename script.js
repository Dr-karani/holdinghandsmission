/* ==========================================
   HOLDING HANDS MISSION
   Premium JavaScript
========================================== */

/* ===========================
   STICKY NAVBAR
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

/* ===========================
   FAQ ACCORDION
=========================== */

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(i=>{

if(i!==item){

i.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/* ===========================
   COUNTER ANIMATION
=========================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ===========================
   TESTIMONIAL SLIDER
=========================== */

const testimonials=document.querySelectorAll(".testimonial");

let current=0;

function showTestimonial(){

testimonials.forEach(t=>t.classList.remove("active"));

testimonials[current].classList.add("active");

current++;

if(current>=testimonials.length){

current=0;

}

}

if(testimonials.length){

showTestimonial();

setInterval(showTestimonial,5000);

}

/* ===========================
   SCROLL REVEAL
=========================== */

const reveals=document.querySelectorAll(".card,.feature,.step,.gallery-item,.testimonial,.faq-item");

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s ease";

revealObserver.observe(item);

});

/* ===========================
   SMOOTH ACTIVE NAVIGATION
=========================== */

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let currentSection="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

currentSection=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + currentSection){

link.classList.add("active");

}

});

});

/* ===========================
   BACK TO TOP BUTTON
=========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topButton";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="105px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#0E7A3B";
topBtn.style.color="#fff";
topBtn.style.fontSize="24px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
