const articlesCardsData = [
    {
        title: "Как ухаживать за кожей зимой?",
        author: "Анна Иванова",
        date: "24 января 2025 г.",
        id: 'article1',
        content: [
            {
                heading: "Основные советы и рекомендации",
                paragraph: "Зима — это сложный период для кожи, когда холодный воздух и низкая влажность могут нанести серьёзный ущерб. Вот несколько советов, как сохранить вашу кожу увлажнённой и здоровой."
            },
            {
                heading: "1. Увлажнение — ключ к успеху",
                paragraph: "Используйте кремы с плотной текстурой, которые создают барьер на коже и предотвращают потерю влаги. Ищите средства с натуральными ингредиентами, такими как гиалуроновая кислота и масла.",
                image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                heading: "2. Избегайте горячей воды",
                paragraph: "Горячая вода может сушить кожу, поэтому принимайте тёплый душ вместо горячего. Также не забывайте наносить увлажняющий крем сразу после душа."
            },
            {
                heading: "3. Пейте больше воды",
                paragraph: "Не забывайте пить достаточное количество воды в течение дня. Это поможет увлажнить вашу кожу изнутри."
            }
        ]
    },
    {
        title: "Тренды маникюра 2025",
        author: "Екатерина Смирнова",
        date: "24 января 2025 г.",
        id: 'article2',
        content: [
            {
                heading: "Основные советы и рекомендации",
                paragraph: "Зима — это сложный период для кожи, когда холодный воздух и низкая влажность могут нанести серьёзный ущерб. Вот несколько советов, как сохранить вашу кожу увлажнённой и здоровой."
            },
            {
                heading: "1. Минимализм в маникюре",
                paragraph: "Нежные пастельные тона, геометрические узоры и акценты на одном или двух ногтях станут настоящим хитом этого года.",
                image: "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                heading: "2. Металлический блеск",
                paragraph: "Металлические покрытия будут в тренде в 2025 году. Они придают ногтям необыкновенный блеск и элегантность."
            },
            {
                heading: "3. Яркие неоновые оттенки",
                paragraph: "Неоновые цвета — это всегда привлекающее внимание решение. В этом году популярны яркие акценты на ногтях с использованием неоновых лаков."
            }
        ]
    },
    {
        title: "Секреты идеальной укладки",
        author: "Ольга Петрова",
        date: "24 января 2025 г.",
        id: 'article3',
        content: [
            {
                heading: "Основные советы и рекомендации",
                paragraph: "Зима — это сложный период для кожи, когда холодный воздух и низкая влажность могут нанести серьёзный ущерб. Вот несколько советов, как сохранить вашу кожу увлажнённой и здоровой."
            },
            {
                heading: "1. Используйте термозащиту",
                paragraph: "Перед использованием фена или утюжка всегда наносите средство с термозащитой, чтобы не повредить волосы.",
                image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                heading: "2. Правильная укладка феном",
                paragraph: "Используйте насадку на фен, чтобы создать идеальный объём. Начинайте укладку с корней, направляя воздух вниз по волосам."
            },
            {
                heading: "3. Закрепите результат",
                paragraph: "Не забывайте закрепить укладку лаком или муссом для волос, чтобы она держалась в течение всего дня."
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    // Если articleId не найден, выводим сообщение
    if (!articleId) {
        document.body.innerHTML = `<h1>Статья не найдена</h1>`;
        return;
    }

    // Ищем статью по id
    const article = articlesCardsData.find((item) => item.id === articleId);

    // Если статья не найдена
    if (!article) {
        document.body.innerHTML = `<h1>Статья не найдена</h1>`;
        return;
    }

    // Обновляем заголовок страницы
    document.querySelector('header h1').textContent = article.title;
    
    // Обновляем заголовок и мета-информацию статьи
    const articleHeader = document.querySelector('.article-header');
    articleHeader.querySelector('h2').textContent = article.content[0].heading;
    articleHeader.querySelector('.meta').textContent = `Автор: ${article.author} | ${article.date}`;

    // Очищаем предыдущий контент
    const articleContent = document.querySelector('.article-content');
    articleContent.innerHTML = '';

    // Обновляем контент статьи
    article.content.forEach((section) => {
        const sectionHeading = document.createElement('h3');
        sectionHeading.textContent = section.heading;
        articleContent.appendChild(sectionHeading);
        
        const sectionParagraph = document.createElement('p');
        sectionParagraph.textContent = section.paragraph;
        articleContent.appendChild(sectionParagraph);

        // Если есть изображение, добавляем его
        if (section.image) {
            const image = document.createElement('img');
            image.src = section.image;
            image.alt = section.heading;
            articleContent.appendChild(image);
        }
    });
});
