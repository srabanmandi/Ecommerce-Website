const ProductContainer = [...document.querySelectorAll('.product-container')]
const nxtbtn = [...document.querySelectorAll('.nxt-btn')]
const prebtn = [...document.querySelectorAll('.pre-btn')]

ProductContainer.forEach((items,i)=>{
    let containerdimension = items.getBoundingClientRect()
    let containerwidth = containerdimension.width

    nxtbtn[i].addEventListener('click',()=>{
        items.scrollLeft += containerwidth
    })
    prebtn[i].addEventListener('click',()=>{
        items.scrollLeft -= containerwidth
    })
})

// login form

const formOpenBtn = document.querySelector(".user");
const home = document.querySelector(".home");
const overlay = document.querySelector(".overlay");
const formContainer = document.querySelector(".form-container");
const formCloseBtn = document.querySelector(".form-close");
const loginBtn = document.querySelector("#login");
const signupBtn = document.querySelector("#signup");
const pwShowHide = document.querySelectorAll(".hide_password");
const allInput = document.querySelectorAll("input");

formOpenBtn.addEventListener("click", () => {
  formContainer.classList.add("show");
  overlay.classList.add("show");
});
formCloseBtn.addEventListener("click", () => {
  formContainer.classList.remove("show");
  overlay.classList.remove("show");
  allInput.forEach((input) => {
    if (input.type === "text" || input.type === "password") {
      input.value = "";
    } else if (input.type === "checkbox") {
      input.checked = false;
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const pw = icon.parentElement.querySelector("input");
    if (pw.type === "password") {
      pw.type = "text";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      pw.type = "password";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});
