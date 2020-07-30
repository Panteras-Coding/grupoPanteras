let closedNav = true;
let hamburger = document.getElementById("hamburger")

function openNav() {
    hamburger.classList.toggle("change");
    if (closedNav){
        document.getElementById("myNav").style.width = "70%";
        closedNav = false
    } else if (!closedNav){
        document.getElementById("myNav").style.width = "0%";
        closedNav = true
    }
}

let openedOverlay = false;

function openMember(n) {
    if (openedOverlay){
        document.getElementById("overlay").style.display = "none";
        document.getElementById("overlayCard").style.display = "none";
        openedOverlay = false
    } else if (!openedOverlay){
        document.getElementById("overlay").style.display = "block";
        document.getElementById("overlayCard").style.display = "block";
        openedOverlay = true
    }
    let members = document.getElementsByClassName('members');
    for (let i = 0; i < members.length; i++) {
        members[i].style.display = "none";
    }
    members[n].style.display = "block";
}

function showMember(n) {
    let members = document.getElementById('members');
    for (let i = 0; i < members.length; i++) {
        members[i].style.display = "none";
    }
    members[n].style.display = "block";
}

//Typing Animation

const TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

if(vw < 700){
    document.getElementById('gif').src = "./Assets/Coding(Móvil).gif"
}

//Image Carrousel

function openProject(n) {
    let projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    if(vw < 700){
        projects[n].style.display = "flex";
        projects[n].style.flexDirection = "column";
    } else {
        projects[n].style.display = "flex";
        projects[n].style.flexDirection = "row";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}