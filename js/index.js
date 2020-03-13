const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

/************\
Navigation bar
\************/

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

/*gather the information we want to reference.*/

const link_get = Object.values(siteContent.nav);

/*gather the location we want to display that information*/

const link = document.getElementsByTagName("a");
// const nav_bar = document.getElementsByTagName("nav");

// link[0].textContent = link_get[0];
// link[1].textContent = link_get[1];
// link[2].textContent = link_get[2];
// link[3].textContent = link_get[3];
// link[4].textContent = link_get[4];
// link[5].textContent = link_get[5];
// link[0].style.color = "green";
// link[1].style.color = "green";
// link[2].style.color = "green";
// link[3].style.color = "green";
// link[4].style.color = "green";
// link[5].style.color = "green";

//cursed loop will break code if un-commented.
for (let i = 0; i < 6; i++) {
  link[i].textContent = link_get[i];
  link[i].style.color = "green";
};


/********************************\
  prepends and appending children
\********************************/

const appendix = document.createElement("a");
appendix.textContent = " Appendix";
const appendix_link = link[5].appendChild(appendix);
appendix.style.marginLeft = "2rem";
appendix.style.color = "green";


const prologue = document.createElement("a");
prologue.textContent = "Prologue";
const prologue_link = link[0].prepend(prologue);
prologue.style.marginRight = "2rem";
prologue.style.color = "green";


/********************\
call to action banner
\********************/

const call_to_action = document.getElementByClassName;

const h_tag_banner = document.querySelector(".cta h1");
h_tag_banner.textContent = siteContent.cta["h1"];

const button = document.querySelector("button");
button.innerHTML = siteContent.cta["button"];






















/******************************************
 *                                        *
 *                   ██   █▄▄▄▄ ▄████     *
 *                   █ █  █  ▄▀ █▀   ▀    *
 *                   █▄▄█ █▀▀▌  █▀▀       *
 *                   █  █ █  █  █         *
 *                      █   █    █        *
 *                     █   ▀      ▀       *
 *                    ▀                   *
 *   repeat until page is illuminated     *
 ******************************************/


