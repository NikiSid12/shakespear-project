// Скрипт для главной страницы
document.addEventListener('DOMContentLoaded', function() {
    // Анимация для элементов на главной странице
    const statCards = document.querySelectorAll('.stat-card');
    const pageLinks = document.querySelectorAll('.page-link');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Добавляем задержку для анимации
    function animateElements(elements, delay) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 50);
            }, index * delay);
        });
    }
    
    // Запускаем анимации
    if (statCards.length > 0) {
        animateElements(statCards, 100);
    }
    
    if (pageLinks.length > 0) {
        animateElements(pageLinks, 150);
    }
    
    if (timelineItems.length > 0) {
        animateElements(timelineItems, 200);
    }
    
    // Интерактивность для карточек статистики
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Интерактивность для ссылок на страницы
    pageLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.link-icon');
            icon.style.transform = 'rotate(15deg) scale(1.1)';
            icon.style.backgroundColor = '#a0522d';
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.link-icon');
            icon.style.transform = 'rotate(0) scale(1)';
            icon.style.backgroundColor = '#8b4513';
        });
    });
    
    // Эффект "печатающегося текста" для подзаголовка
    const subtitle = document.querySelector('.welcome-subtitle p');
    if (subtitle) {
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
    }
    
    // Показываем дату последнего обновления в футере
    const lastUpdated = document.querySelector('.footer-bottom');
    if (lastUpdated) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = today.toLocaleDateString('ru-RU', options);
        
        const updateElement = document.createElement('p');
        updateElement.textContent = `Последнее обновление: ${dateString}`;
        updateElement.style.fontSize = '0.8rem';
        updateElement.style.color = '#e8d4b9';
        updateElement.style.marginTop = '10px';
        
        lastUpdated.appendChild(updateElement);
    }
});