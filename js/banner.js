const texts = [
    "<i class='bi bi-check-circle-fill'></i> Bem-vindo à MAMMISGLASS - Transformando seu Ambiente com Vidro",
    "<i class='bi bi-check-circle-fill'></i> Exclusividade e Qualidade em Cada Projeto",
    "<i class='bi bi-check-circle-fill'></i> Seu Espaço com a Sofisticação do Vidro"
];

let currentIndex = 0;
const bannerText = document.querySelector('.banner-text p');

setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    bannerText.innerHTML = texts[currentIndex]; // Use innerHTML to render icons
}, 3000);

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // When scrolled more than 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.querySelector('.follow-mouse').addEventListener('mousemove', function(e) {
    const width = this.clientWidth;
    const height = this.clientHeight;
    const xAxis = (width / 2 - e.offsetX) / 10;
    const yAxis = (height / 2 - e.offsetY) / 10;

    this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.follow-mouse').addEventListener('mouseleave', function() {
    this.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

