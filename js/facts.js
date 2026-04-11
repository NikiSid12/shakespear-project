// Скрипт для страницы интересных фактов
document.addEventListener('DOMContentLoaded', function() {
    // Переключение между категориями фактов
    const factTabs = document.querySelectorAll('.fact-tab');
    const factCategories = document.querySelectorAll('.fact-category');
    
    factTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Убираем активный класс у всех вкладок
            factTabs.forEach(t => t.classList.remove('active'));
            
            // Добавляем активный класс текущей вкладке
            this.classList.add('active');
            
            // Получаем категорию из data-атрибута
            const category = this.getAttribute('data-category');
            
            // Скрываем все категории
            factCategories.forEach(cat => {
                cat.classList.remove('active');
            });
            
            // Показываем выбранную категорию
            const activeCategory = document.getElementById(category);
            if (activeCategory) {
                activeCategory.classList.add('active');
            }
        });
    });
    
    // Анимация для карточек фактов
    const factCards = document.querySelectorAll('.fact-card');
    
    if (factCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        factCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    }
    
    // Интерактивность для карточек фактов
    factCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.fact-icon');
            if (icon) {
                icon.style.transform = 'rotate(15deg) scale(1.1)';
                icon.style.backgroundColor = '#a0522d';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.fact-icon');
            if (icon) {
                icon.style.transform = 'rotate(0) scale(1)';
                icon.style.backgroundColor = '#8b4513';
            }
        });
    });
    
    // Анимация счетчиков
    const counterItems = document.querySelectorAll('.counter-item');
    
    if (counterItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    }
    
    // Эффект пульсации для счетчиков
    counterItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});