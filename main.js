'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {elementToggleFunc(sidebar); })

//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    })
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {elementToggleFunc(this); });

for(let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for(let i = 0; i < filterItems.length; i++) {
        if(selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    
    filterBtn[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;

    })
}

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else { 
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        
        for(let i = 0; i < pages.length; i++) {
            if(this.innerHTML.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navigationLinks[i]. classList.remove('active');
            }
        }
    });
}
const translations = {
  kk: {
    about_title: "Біз туралы",
    about_text: "Сіз бұл сайт арқылы өз бизнесіңізді жарнамалай аласыз.",
    service_title: "Сіздер не аласыздар",
    menu: "Мәзір",
    order: "Тапсырыс беру",
    clients_title: "Клиенттер",
    testimonial_title: "Отзыв",
    send_btn: "Жіберу",
    contact_form_title: "Өзіңіз жайлы",
  },
  ru: {
    about_title: "О нас",
    about_text: "С помощью этого сайта вы можете рекламировать свой бизнес.",
    service_title: "Что вы получите",
    menu: "Меню",
    order: "Оформить заказ",
    clients_title: "Клиенты",
    testimonial_title: "Отзывы",
    send_btn: "Отправить",
    contact_form_title: "О вас",
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Егер "Жіберу" батырмасында иконка болса, оның ішіндегі <span> ауыстыру керек:
  const btn = document.querySelector(".form-btn span");
  if (btn && translations[lang]["send_btn"]) {
    btn.textContent = translations[lang]["send_btn"];
  }
}
const translations = {
  kk: {
    about_title: "Біз туралы",
    about_text: "Сіз бұл сайт арқылы өз бизнесіңізді жарнамалай аласыз.",
    service_title: "Сіздер не аласыздар",
    menu: "Мәзір",
    order: "Тапсырыс беру",
    clients_title: "Клиенттер",
    testimonial_title: "Отзыв",
    send_btn: "Жіберу",
    contact_form_title: "Өзіңіз жайлы",
  },
  ru: {
    about_title: "О нас",
    about_text: "С помощью этого сайта вы можете рекламировать свой бизнес.",
    service_title: "Что вы получите",
    menu: "Меню",
    order: "Оформить заказ",
    clients_title: "Клиенты",
    testimonial_title: "Отзывы",
    send_btn: "Отправить",
    contact_form_title: "О вас",
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const btn = document.querySelector(".form-btn span");
  if (btn && translations[lang]["send_btn"]) {
    btn.textContent = translations[lang]["send_btn"];
  }
}
-