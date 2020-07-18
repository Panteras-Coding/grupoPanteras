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
