// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.innerHTML = isOpen
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = '<i class="bi bi-list"></i>';
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();

// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const project = document.getElementById("project").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !project || !message) {
        formMessage.textContent = "Please complete all fields.";
        return;
    }

    const recipient = "hello@cecilianjoki.co.ke";

    const subject = encodeURIComponent(
        "New Website Inquiry - " + project
    );

    const body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Project: " + project + "\n\n" +
        "Message:\n" + message
    );

    formMessage.textContent =
        "Opening your email application...";

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;
});
