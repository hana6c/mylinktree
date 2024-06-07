document.addEventListener('DOMContentLoaded', () => {
    const flowerContainer = document.getElementById('flower-container');

    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDelay = Math.random() * 10 + 's';
        flowerContainer.appendChild(flower);
    }
});