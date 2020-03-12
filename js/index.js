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

// Example: Update the img src for the logo
//edited for continuity and length
let logo = document.getElementById("logo-img").src = siteContent.nav["img-src"];

//navigation bar variables
const navSource = Object.values(siteContent.nav);
const navbar = document.querySelectorAll("a");

//call to action variables and assignment
const hTag = document.querySelector('h1').textContent = siteContent.cta.h1;
const button = document.querySelector('button').innerHTML = siteContent.cta.button;
const ctaImage = document.getElementById('cta-img').src = siteContent.cta["img-src"];

//main content top content
const selector = arg => document.querySelector(arg);
const selectorAll = arg => document.querySelectorAll(arg);

const articleHeading = selectorAll('.text-content h4');
const articleContent = selectorAll('.text-content p');

const mainSource = siteContent["main-content"];

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
const codeImg = selector("#middle-img").src = mainSource["middle-img-src"];

const contactInfoHeading = selector(".contact h4");
const contactInfo = selectorAll(".contact p");

contactInfoHeading.textContent = siteContent.contact["contact-h4"];

contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

const footerCR = selector("footer p").textContent = siteContent.footer.copyright;
//get that navbar up
navSource.forEach((link, index) => {
  navbar[index].textContent = link;
  navbar[index].setAttribute("src", link);
});
