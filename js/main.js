// Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.style.color = "green";
        formMessage.textContent = "Thank you! We will contact you soon.";
        this.reset();
    } else {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill out all fields.";
    }
});
