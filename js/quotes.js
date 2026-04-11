// Скрипт для страницы цитат
document.addEventListener('DOMContentLoaded', function() {
    // Массив цитат Шекспира
    const quotes = [
        {
            text: "Быть или не быть — вот в чем вопрос.",
            source: "Гамлет",
            category: "famous"
        },
        {
            text: "Весь мир — театр, а люди в нем — актеры.",
            source: "Как вам это понравится",
            category: "life"
        },
        {
            text: "Любовь бежит от тех, кто гонится за нею, а тем, кто прочь бежит, кидается на шею.",
            source: "Ромео и Джульетта",
            category: "love"
        },
        {
            text: "Что значит имя? Роза пахнет розой, хоть розой назови ее, хоть нет.",
            source: "Ромео и Джульетта",
            category: "wisdom"
        },
        {
            text: "Жизнь — это повесть, рассказанная дураком, полная шума и ярости, но лишенная смысла.",
            source: "Макбет",
            category: "life"
        },
        {
            text: "Слова, слова, слова.",
            source: "Гамлет",
            category: "famous"
        },
        {
            text: "Есть многое на свете, друг Горацио, что и не снилось нашим мудрецам.",
            source: "Гамлет",
            category: "wisdom"
        },
        {
            text: "Прощай, прощай! Разлука так сладка, что я скажу 'прощай' до вечера.",
            source: "Ромео и Джульетта",
            category: "love"
        },
        {
            text: "Остерегайтесь ревности, зеленоглазого чудовища, которое глумится над своей жертвой.",
            source: "Отелло",
            category: "wisdom"
        },
        {
            text: "Не всё то золото, что блестит.",
            source: "Венецианский купец",
            category: "famous"
        },
        {
            text: "Любовь слепа, и любовники не видят смешных шалостей, которые сами творят.",
            source: "Венецианский купец",
            category: "love"
        },
        {
            text: "Музыка — пища любви.",
            source: "Двенадцатая ночь",
            category: "love"
        },
        {
            text: "Нет повести печальнее на свете, чем повесть о Ромео и Джульетте.",
            source: "Ромео и Джульетта",
            category: "love"
        },
        {
            text: "Сомневайся в сиянии звезд, сомневайся в движении солнца, сомневайся в истине, но никогда не сомневайся в моей любви.",
            source: "Гамлет",
            category: "love"
        },
        {
            text: "Мы знаем, кто мы есть, но не знаем, кем мы можем быть.",
            source: "Гамлет",
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