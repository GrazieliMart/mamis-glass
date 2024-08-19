const image = document.querySelector('.image-3d');
        let isDragging = false;
        let startX, startY, currentX = 0, currentY = 0;
        
        image.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Impede o comportamento padrão de arrasto
            isDragging = true;
            startX = e.clientX - currentX;
            startY = e.clientY - currentY;
            image.style.cursor = 'grabbing';
            image.style.animation = 'none'; // Pausar a rotação contínua ao clicar
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
        
            currentX = e.clientX - startX;
            currentY = e.clientY - startY;
        
            // Atualiza a rotação baseada no movimento do mouse
            image.style.transform = `rotateY(${currentX / 5}deg) rotateX(${-currentY / 5}deg)`;
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                image.style.cursor = 'grab';
                image.style.animation = 'rotate360 5s infinite linear'; // Retomar a rotação contínua após soltar
            }
        });
        // Textos que serão alternados no título
const titles = [
    "MAMISGLASS I Especialista em Vidraçaria",
    "Transforme seu Ambiente com MAMISGLASS",
    "Vidros e Espelhos Exclusivos",
    "Projetos Personalizados com MAMISGLASS"
];

// Ícone Bootstrap que será exibido quando o usuário não estiver na aba
const icon = "👋"; // Exemplo: um ícone de alerta

let currentTitleIndex = 0;
const originalTitle = document.title;
let titleInterval;
let isUserActive = true;

function changeTitle() {
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    document.title = `${icon} ${titles[currentTitleIndex]}`;
}

function startTitleAnimation() {
    if (!isUserActive) {
        changeTitle();
        titleInterval = setInterval(changeTitle, 3000); // Muda a cada 3 segundos
    }
}

function stopTitleAnimation() {
    clearInterval(titleInterval);
    document.title = originalTitle;
}

// Detecta se o usuário não está na aba ativa
window.addEventListener('blur', function () {
    isUserActive = false;
    startTitleAnimation();
});

// Detecta se o usuário voltou à aba ativa
window.addEventListener('focus', function () {
    isUserActive = true;
    stopTitleAnimation();
    document.title = originalTitle; // Restaura o título original
});
