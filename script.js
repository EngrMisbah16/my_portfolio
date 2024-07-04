// ---------active-link-------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// -----remove-toogle-navbar-onclick-navlinks------

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// --------toogle-icon-navbar-------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

    
};


// --------contact------
const form = document.querySelector('form');

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hayatshaikh133@gmail.com",
        Password : "32E9D793C3EDF08095FEA759FCAF557BF66B",
        To : 'hayatshaikh133@gmail.com',
        From : "hayatshaikh133@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
     }).then(
        function showMessage() {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully!",
                icon: "success",
                customClass: {
                    confirmButton: 'swal2-confirm'
                }
            });
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

});
// -------------skills-loader-circle----
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent; i ++){
        pointsMarked[i].classList.add('marked')
    }
    
})

// ------scroll reveal-----
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });

ScrollReveal().reveal('.main-text', { origin: 'top'});
ScrollReveal().reveal('.timeline, .portfolio-box, .contact, .btn', { origin: 'bottom'});
ScrollReveal().reveal('.home-content, .skill-left', { origin: 'left'});
ScrollReveal().reveal('.home-img , .skill-right', { origin: 'right'});



// ---------typed js-------
const typed = new Typed('.multiple-text',{
    strings: ['Web Developer', 'Software Engineer', 'Frontend Developer' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});