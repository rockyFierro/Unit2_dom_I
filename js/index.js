const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

//I'm sort of bummed that I didn't think of this until halfway done with
//the code. the first half uses mostly getElementBy... so it works out
//any more abstraction might be worth it in the long run
//but only if I'm willing to build my own personal library
//probably bad practice when working with others.

const selector = arg => document.querySelector(arg);
const selectorAll = arg => document.querySelectorAll(arg);

/************\
Navigation bar
\************/

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
const link_get = Object.values(siteContent.nav);
const link = document.getElementsByTagName("a");
for (let i = 0; i < 6; i++) {
  link[i].textContent = link_get[i];
  link[i].style.color = "green";
}

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
const banner_image = document.getElementById("cta-img");
banner_image.setAttribute("src", siteContent["cta"]["img-src"]);

const articleHeading = selectorAll(".text-content h4");
const articleContent = selectorAll(".text-content p");

//shorten out work a little with an alias

const mainSource = siteContent["main-content"];

//TODO:
//Find the iteration that will shuffle the source and the reference
//together to shorten this dictionary...
//function returning reference did not work.

/*
TODO:
- create array with 'main source' 
- move img-src to end of the array
-base for(loop) on mainSrc[] with i+2 as step
-assign each article a heading and p with mainSrc[i] as source

-possibly create function to push a new index(x2) if  there are more article sources than article indices.
*/

articleHeading[0].textContent = mainSource["features-h4"];
articleContent[0].textContent = mainSource["features-content"];
articleHeading[1].textContent = mainSource["about-h4"];
articleContent[1].textContent = mainSource["about-content"];
articleHeading[2].textContent = mainSource["services-h4"];
articleContent[2].textContent = mainSource["services-content"];
articleHeading[3].textContent = mainSource["product-h4"];
articleContent[3].textContent = mainSource["product-content"];
articleHeading[4].textContent = mainSource["vision-h4"];
articleContent[4].textContent = mainSource["vision-content"];
const codeImg = (selector("#middle-img").src = mainSource["middle-img-src"]);

//declare heading and info for contact area

const contactInfoHeading = selector(".contact h4");
const contactInfo = selectorAll(".contact p");

//set info for contact heading

contactInfoHeading.textContent = siteContent.contact["contact-h4"];

//TODO:
//Use previous solution to article problem here

contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

//footer - a pleasure to work with you; declare and set

const footerCR = (selector("footer p").textContent =
  siteContent.footer.copyright);
