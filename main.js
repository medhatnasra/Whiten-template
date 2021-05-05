const navbar = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");
const li = document.querySelectorAll("li");


navbar.addEventListener("click", poppup);

function poppup() {
    nav.classList.toggle("display");
}


// WORKING WITH FORM

const name = document.getElementById("name");
const email = document.getElementById("email");
const desc = document.getElementById("desc");
const form = document.getElementById("form");
const errormsg = document.querySelector(".error-message");

form.addEventListener("submit", function (e) {
  msg = [];
  if (name.value == "" || name.value == null) {
    e.preventDefault();
    name.classList.add("error");
    msg.push("Empty Name Field");
    errormsg.innerHTML = msg.join("<br> ");
  } else {
    name.classList.remove("error");
    name.classList.add("success");
  }
  if (email.value == "" || email.value == null) {
    e.preventDefault();
    email.classList.add("error");
    msg.push("Empty Email Field");
    errormsg.innerHTML = msg.join("<br> ");
  } else {
    email.classList.remove("error");
    email.classList.add("success");
  }

  if (desc.value == "" || desc.value == null) {
    e.preventDefault();
    desc.classList.add("error");
    msg.push("Empty Description Field");
    errormsg.innerHTML = msg.join("<br> ");
  } else {
    desc.classList.remove("error");
    desc.classList.add("success");
  }
});

// WORKING WITH FORM
