document.addEventListener("DOMContentLoaded", () => {
    const mainButton = document.getElementById('sparkleButton');
    const gameModal = document.getElementById('gameModal');
    const closeGame = document.getElementById('closeGame');
    const gameTarget = document.getElementById('gameTarget');
    const rewardModal = document.getElementById('rewardModal');

    let gameLoopInterval;
    
    if(mainButton){
        mainButton.addEventListener('click', () => {
            gameModal.style.display = 'flex';
            moveTarget();
            clearInterval(gameLoopInterval);
            gameLoopInterval = setInterval(moveTarget, 450);
        });
    }

    if(closeGame){
        closeGame.addEventListener('click', () => {
            gameModal.style.display = 'none';
            clearInterval(gameLoopInterval);
        });
    }

    function moveTarget() {
        if(!gameTarget) return;
        const maxX = 100;
        const maxY = 100;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        gameTarget.style.left = randomX + "px";
        gameTarget.style.top = randomY + "px";
    }

    if(gameTarget){
        gameTarget.addEventListener('click', () => {
            clearInterval(gameLoopInterval);
            gameModal.style.display = 'none'; // Hides the game window instantly
            rewardModal.style.display = 'flex'; // Opens the reward window on the first click
        });
    }
});
