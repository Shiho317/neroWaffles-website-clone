'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
  const JumpToSection = document.querySelectorAll('li a[href^="#"]');
  const JumpToSectionArr = Array.prototype.slice.call(JumpToSection);
  console.log(JumpToSectionArr)

  JumpToSectionArr.forEach(section => {
    section.addEventListener('click', e => {
      e.preventDefault();
      console.log(section)

      const targetId = section.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth',
      });
    });
  });
});


const container = document.querySelector('.logo-container');
const subName = document.querySelector('.sub-name');
const vancouver = document.querySelector('.vancouver');
const logo = document.querySelector('.logo');
const menuLink = document.querySelector('.menu-link');
const aboutLink = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');
const x = logo.getBoundingClientRect().width - 100;
const xx = logo.getBoundingClientRect().width;

window.addEventListener('scroll', () => {
  const scrollTopDistance = window.scrollY;
  
  if(scrollTopDistance >= 1){
    container.classList.add('isScroll');
    vancouver.classList.add('hidden');
    subName.classList.add('hidden');
    logo.style.width = `${x}px`;
  }else if(scrollTopDistance <= 1){
    container.classList.remove('isScroll');
    vancouver.classList.remove('hidden');
    subName.classList.remove('hidden');
    logo.style.width = `${xx}px`
  }
});

const menuId = document.querySelector('#menu');
const aboutId = document.querySelector('#about');
const contactId = document.querySelector('#contact');
const menuY = menuId.getBoundingClientRect().top;
const aboutY = aboutId.getBoundingClientRect().top;
const contactY = contactId.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  const windowTopDistance = window.pageYOffset;

    if (windowTopDistance > menuY && aboutY > windowTopDistance){
      menuLink.classList.add('turn-black');
      aboutLink.classList.remove('turn-black');
      contactLink.classList.remove('turn-black');
    }else if(windowTopDistance > aboutY && contactY > windowTopDistance){
      aboutLink.classList.add('turn-black');
      menuLink.classList.remove('turn-black');
      contactLink.classList.remove('turn-black');
    }else if(windowTopDistance > contactY){
      contactLink.classList.add('turn-black');
      aboutLink.classList.remove('turn-black');
      menuLink.classList.remove('turn-black')
    }else{
      contactLink.classList.remove('turn-black');
      menuLink.classList.remove('turn-black');
      aboutLink.classList.remove('turn-black');
    }
});

const syrupBg = document.querySelector('.syrup-bg');
const y = syrupBg.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  const scrollTopDistance = window.scrollY;
  const MaskTopPosition = y - scrollTopDistance * 0.5;
  const topPosition = y - scrollTopDistance;
  

  if(topPosition){
    syrupBg.style.webkitMaskPositionY = `${MaskTopPosition}px`;
    syrupBg.style.top = `${topPosition}px`
  }
  
})


const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');

  let curSlide = 0;
  const maxSlide = slides.length;

  const doSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    })
  };

  const nextSlide = () => {
    if(curSlide === maxSlide - 1){
      curSlide = 0;
    }else{
      curSlide ++;
    }
    doSlide(curSlide);
  }

  const prevSlide = () => {
    if(curSlide === 0){
      curSlide = maxSlide - 1;
    }else{
      curSlide --;
    }
    doSlide(curSlide);
  }

  const init = () => {
    doSlide(0);
  }
  init();

  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);

};

slider();
