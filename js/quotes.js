// Скрипт для страницы цитат
document.addEventListener('DOMContentLoaded', function() {
    // Массив цитат Шекспира
    const quotes = [
    {
        text: "To be, or not to be: that is the question.",
        source: "Hamlet",
        category: "famous"
    },
    {
        text: "All the world's a stage, and all the men and women merely players.",
        source: "As You Like It",
        category: "life"
    },
    {
        text: "Love looks not with the eyes, but with the mind.",
        source: "A Midsummer Night’s Dream",
        category: "love"
    },
    {
        text: "What's in a name? That which we call a rose by any other name would smell as sweet.",
        source: "Romeo and Juliet",
        category: "wisdom"
    },
    {
        text: "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more.",
        source: "Macbeth",
        category: "life"
    },
    {
        text: "Words, words, words.",
        source: "Hamlet",
        category: "famous"
    },
    {
        text: "There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy.",
        source: "Hamlet",
        category: "wisdom"
    },
    {
        text: "Parting is such sweet sorrow.",
        source: "Romeo and Juliet",
        category: "love"
    },
    {
        text: "O, beware, my lord, of jealousy; it is the green-eyed monster which doth mock the meat it feeds on.",
        source: "Othello",
        category: "wisdom"
    },
    {
        text: "All that glisters is not gold.",
        source: "The Merchant of Venice",
        category: "famous"
    },
    {
        text: "Love is blind, and lovers cannot see the pretty follies that themselves commit.",
        source: "The Merchant of Venice",
        category: "love"
    },
    {
        text: "If music be the food of love, play on.",
        source: "Twelfth Night",
        category: "love"
    },
    {
        text: "For never was a story of more woe than this of Juliet and her Romeo.",
        source: "Romeo and Juliet",
        category: "love"
    },
    {
        text: "Doubt thou the stars are fire; doubt that the sun doth move; doubt truth to be a liar; but never doubt I love.",
        source: "Hamlet",
        category: "love"
    },
    {
        text: "We know what we are, but know not what we may be.",
        source: "Hamlet",
        category: "wisdom"
    }
];
    
    // Заполняем цитаты на странице
    function populateQuotes() {
        const quoteGrids = document.querySelectorAll('.quote-grid');
        
        quoteGrids.forEach(grid => {
            // Определяем категорию из ID родителя
            const categoryId = grid.parentElement.id;
            
            // Фильтруем цитаты по категории или берем все
            const filteredQuotes = categoryId === 'all' 
                ? quotes 
                : quotes.filter(quote => quote.category === categoryId);
            
            // Очищаем сетку
            grid.innerHTML = '';
            
            // Добавляем цитаты
            filteredQuotes.forEach(quote => {
                const quoteElement = document.createElement('div');
                quoteElement.className = 'quote-item';
                quoteElement.innerHTML = `
                    <p class="quote-text">${quote.text}</p>
                    <p class="quote-source">— ${quote.source}</p>
                `;
                grid.appendChild(quoteElement);
            });
        });
    }
    
    // Инициализируем цитаты
    populateQuotes();
    
    // Переключение между категориями цитат
    const categoryButtons = document.querySelectorAll('.quote-category-btn');
    const quoteCategories = document.querySelectorAll('.quote-category');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Получаем категорию из data-атрибута
            const category = this.getAttribute('data-category');
            
            // Скрываем все категории
            quoteCategories.forEach(cat => {
                cat.classList.remove('active');
            });
            
            // Показываем выбранную категорию
            const activeCategory = document.getElementById(category);
            if (activeCategory) {
                activeCategory.classList.add('active');
            }
        });
    });
    
    // Случайная цитата
    const randomQuoteElement = document.getElementById('randomQuote');
    const randomSourceElement = document.getElementById('randomSource');
    const randomButton = document.getElementById('randomButton');
    
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
    
    function displayRandomQuote() {
        const randomQuote = getRandomQuote();
        randomQuoteElement.textContent = randomQuote.text;
        randomSourceElement.textContent = `— ${randomQuote.source}`;
    }
    
    if (randomButton) {
        randomButton.addEventListener('click', displayRandomQuote);
        
        // Показываем случайную цитату при загрузке
        displayRandomQuote();
    }
    
    // Аккордеон для цитат по пьесам
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            item.classList.toggle('active');
        });
    });
    
    // Анимация для цитат
    const quoteItems = document.querySelectorAll('.quote-item');
    
    if (quoteItems.length > 0) {
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
        
        quoteItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    }
    
    // Интерактивность для цитат
    quoteItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
        
        item.addEventListener('click', function() {
            const text = this.querySelector('.quote-text').textContent;
            const source = this.querySelector('.quote-source').textContent;
            
            // Временно выделяем цитату
            this.style.backgroundColor = '#e8d4b9';
            setTimeout(() => {
                this.style.backgroundColor = '#f5e9d9';
            }, 300);
        });
    });
    
    // Анимация для крылатых выражений
    const phraseItems = document.querySelectorAll('.phrase-item');
    
    phraseItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
});
