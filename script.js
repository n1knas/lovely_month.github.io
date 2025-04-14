document.addEventListener('DOMContentLoaded', function() {
    const bgContainer = document.querySelector('.hearts-flowers-bg');
    const types = ['heart', 'flower'];
    const heartSymbols = ['❤', '♥'];
    const flowerSymbols = ['🌷', '🌸', '🌹', '🌺', '🌼'];
    const letterClosed = document.getElementById('letterClosed');
    const letterOpened = document.getElementById('letterOpened');
    
    // Обработчик открытия письма
    letterClosed.addEventListener('click', function() {
        letterClosed.style.display = 'none';
        letterOpened.style.display = 'block';
    });
    
    function createFloatingElement() {
        const type = types[Math.floor(Math.random() * types.length)];
        const element = document.createElement('div');
        element.className = type;
        
        if (type === 'heart') {
            element.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            element.style.color = `hsl(${Math.random() * 20 + 340}, 90%, 65%)`;
        } else {
            element.innerHTML = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
            element.style.color = `hsl(${Math.random() * 30 + 330}, 90%, 65%)`;
        }
        
        // Размер
        const size = Math.random() * 25 + 20;
        element.style.fontSize = `${size}px`;
        
        // Начальная позиция
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = `${Math.random() * 100 + 100}vh`;
        
        // Длительность анимации (быстрее)
        const duration = Math.random() * 5 + 5;
        element.style.animationDuration = `${duration}s`;
        
        // Задержка анимации
        element.style.animationDelay = `${Math.random() * 2}s`;
        
        bgContainer.appendChild(element);
        
        // Удаляем элемент после завершения анимации
        setTimeout(() => {
            element.remove();
        }, duration * 1000);
    }
    
    // Создаем больше элементов сразу
    for (let i = 0; i < 30; i++) {
        createFloatingElement();
    }
    
    // Продолжаем создавать новые элементы (чаще)
    setInterval(createFloatingElement, 300);
});