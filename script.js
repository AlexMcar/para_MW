document.getElementById("yes").addEventListener("click", function() {
    alert('Sabia que você não resistiria! Hahahaha ❤️\n\nMais informações:\nLocal: Cukos\nDia e horário: Topa ser na terça? 😊\n\nVou fazer valer a pena.');
});

const noButton = document.getElementById("no");
let posX = noButton.offsetLeft;
let posY = noButton.offsetTop;
const moveDistance = 90; // 9 cm em pixels aproximadamente

noButton.addEventListener("mouseover", () => {
    const directions = [
        { x: moveDistance, y: 0 }, // Direita
        { x: -moveDistance, y: 0 }, // Esquerda
        { x: 0, y: moveDistance }, // Baixo
        { x: 0, y: -moveDistance } // Cima
    ];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    
    posX = Math.min(Math.max(posX + randomDirection.x, 0), window.innerWidth - noButton.offsetWidth - 20);
    posY = Math.min(Math.max(posY + randomDirection.y, 0), window.innerHeight - noButton.offsetHeight - 20);
    
    noButton.style.left = `${posX}px`;
    noButton.style.top = `${posY}px`;
});
