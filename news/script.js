// Dark mode toggle
function toggleDarkMode() {
  var body = document.querySelector('body');
  body.classList.toggle('dark-mode');
}

// Dark mode button event listener
var darkModeButton = document.querySelector('#dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);



// another script for articals

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})
