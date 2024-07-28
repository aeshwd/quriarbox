let name = document.getElementById('name');
let email = document.getElementById('email');
let textarea = document.getElementById('textarea');
let send = document.getElementById('send');

send.addEventListener("click", () => {
    let nameValue = name.value;
    let emailValue = email.value;
    let textareaValue = textarea.value;

    if(!nameValue){
        alert('Please enter your name');
        return;
    } else if(!emailValue){
        alert('Please enter Email address');
        return;
    
    } else {
          alert('Done! Your message has been submitted successfully. Our team will contact you as soon as possible. Thanks for choosing Quariarbox Courier Service Provider.');
    }
})

// AOS Animation

window.addEventListener("load", () => {
    let preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");


    setTimeout(() => {
        preloader.style.display = "none";
        AOS.init();
    }, 2200);
});


// Toast

window.onload = (event) => {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}
