document.getElementById("ham").addEventListener('click', () => {
    document.querySelector(".nav-links").style.transform = "translateX(0%)";
    document.getElementById("ham").style.display = "none";
    document.getElementById("ham-close").style.display = "block";
    
})

document.getElementById("ham-close").addEventListener('click', () => {
    document.querySelector(".nav-links").style.transform = "translateX(100%)";
    document.getElementById("ham-close").style.display = "none";
    document.getElementById("ham").style.display = "initial";
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        document.querySelector(".nav-links").style.transform = "translateX(0%)";
        document.getElementById("ham").style.display = "none";
        document.getElementById("ham-close").style.display = "none";
    } else {
        document.querySelector(".nav-links").style.transform = "translateX(100%)";
        document.getElementById("ham").style.display = "initial";
        document.getElementById("ham-close").style.display = "none";
    }
});