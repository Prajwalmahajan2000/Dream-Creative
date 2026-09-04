/* =========================================
   DREAM CREATIVE CONSTRUCTION'S
   JAVASCRIPT
========================================= */


/* ---------- MOBILE MENU ---------- */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* Close mobile menu after clicking */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* ---------- GALLERY FILTER ---------- */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        galleryItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* ---------- IMAGE LIGHTBOX ---------- */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");


const galleryImages =
    document.querySelectorAll(".gallery-item img");


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* Close lightbox */

closeLightbox.addEventListener("click", closeLightboxFunction);


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightboxFunction();

    }

});


function closeLightboxFunction() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "auto";

}


/* ---------- ESC KEY ---------- */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLightboxFunction();

    }

});


/* ---------- WHATSAPP ---------- */

/*
   Your number:
   88886 37623

   Country code:
   India = 91
*/

const whatsappNumber = "918888637623";

const whatsappBtn =
    document.getElementById("whatsappBtn");


whatsappBtn.addEventListener("click", (event) => {

    event.preventDefault();

    const message =
        "Hello Er. Rohan V. Patil, I am interested in your civil engineering / construction services. I would like to discuss my project.";

    const whatsappURL =
        "https://" +
        "wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(
        whatsappURL,
        "_blank"
    );

});


/* ---------- CONTACT FORM ---------- */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    const whatsappMessage =
        `Hello Er. Rohan V. Patil,

My name is ${name}.

Phone: ${phone}

Service Required:
${service || "Not specified"}

Project Details:
${message}

I would like to discuss my project with you.`;


    const whatsappURL =
        "https://" +
        "wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* ---------- CURRENT YEAR ---------- */

document.getElementById("year").textContent =
    new Date().getFullYear();
