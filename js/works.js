// Скрипт для страницы произведений
document.addEventListener('DOMContentLoaded', function() {
    // Переключение между категориями произведений
    const tabButtons = document.querySelectorAll('.tab-button');
    const categoryContents = document.querySelectorAll('.category-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Получаем категорию из data-атрибута
            const category = this.getAttribute('data-category');
            
            // Скрываем все категории
            categoryContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Показываем выбранную категорию
            const activeContent = document.getElementById(category);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
    
    // Интерактивность для карточек произведений
    const workCards = document.querySelectorAll('.work-card');
    
    workCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        });
    });
    
    // Анимация для статистики
    const statItems = document.querySelectorAll('.stat-item');
    
    if (statItems.length > 0) {
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
        }, { threshold: 0.5 });
        
        statItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    }
    
    // Эффект для примеров сонетов
    const sonnetExamples = document.querySelectorAll('.sonnet-example');
    
    sonnetExamples.forEach(example => {
        example.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Информация о Первом фолио
    const folioImage = document.querySelector('.folio-image img');
    if (folioImage) {
        folioImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        folioImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});