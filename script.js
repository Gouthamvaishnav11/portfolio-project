const formOpenBtn = document.querySelector("#form-open"),   
 home = document.querySelector(".home"),   
 formContainer = document.querySelector(".form_container"),   
 formCloseBtn = document.querySelector(".form_close"),   
 signupBtn = document.querySelector("#signup"),   
 loginBtn = document.querySelector("#login"),  
  pwShowHide = document.querySelectorAll(".pw_hide"),   
  loginForm = document.querySelector(".login_form form"), 
  navLinks = document.querySelectorAll(".nav_link"),   
  sections = document.querySelectorAll("section"),
  linkedInLogo = document.querySelector("#linkedin-logo"),
  githubLogo = document.querySelector("#github-logo");

 // Show form container
 formOpenBtn.addEventListener("click", () => home.classList.add("show"));
 formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

 // Toggle password visibility
 pwShowHide.forEach((icon) => {
   icon.addEventListener("click", () => {
     let getPwInput = icon.parentElement.querySelector("input");
     if (getPwInput.type === "password") {
       getPwInput.type = "text";
       icon.classList.replace("uil-eye-slash", "uil-eye");
     } else {
       getPwInput.type = "password";
       icon.classList.replace("uil-eye", "uil-eye-slash");
     }
   });
 });

 // Switch to signup form
 signupBtn.addEventListener("click", (e) => {
   e.preventDefault();
   formContainer.classList.add("active");
 });

 // Switch to login form
 loginBtn.addEventListener("click", (e) => {
   e.preventDefault();
   formContainer.classList.remove("active");
 });

 // Handle login submission
  loginForm.addEventListener("submit", (e) => {
     e.preventDefault();
    // Make all sections visible
    sections.forEach(section => {
       section.style.display = "block";

    });
    home.classList.remove("show");
 });

 // Handle navigation links
 navLinks.forEach(link => {
   link.addEventListener("click", (e) => {
     e.preventDefault();
     const targetId = link.getAttribute("href");
     sections.forEach(section => {
       section.style.display = section.id === targetId ? "block" : "none";
     });
   });
 });

 // Open LinkedIn profile
 linkedInLogo.addEventListener("click", () => {
   window.open("https://www.linkedin.com/in/goutham-vaishnav/", "_blank");
 });

 // Open GitHub profile
 githubLogo.addEventListener("click", () => {
   window.open("https://github.com/Gouthamvaishnav11", "_blank");
 });

 instagramlogo.addEventListener("click", () => {
  window.open("https://www.instagram.com/goutham.v4203/", "_blank");
});
//  feed back form 
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message!');
});

