window.addEventListener('DOMContentLoaded', () => {
    const floater = document.getElementById('birthday-floater');  
    setTimeout(() => {
        floater.style.opacity = '0';
    
    setTimeout(() => {
        floater.remove();
    }, 400);
}, 1000);
});