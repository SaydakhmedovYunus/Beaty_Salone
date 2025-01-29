let newsCardsData = [
    {
        imgSrc: 'https://images.pexels.com/photos/19247782/pexels-photo-19247782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Открытие нового офиса',
        description: 'Мы рады сообщить, что открываем новый офис в центре города. Присоединяйтесь к нам на церемонии открытия!',
    },
    {
        imgSrc: 'https://images.pexels.com/photos/19279791/pexels-photo-19279791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Скидки до 50% в январе!',
        description: 'Не пропустите нашу зимнюю распродажу! Скидки на все товары и услуги до 50%.',
    },
    {
        imgSrc: 'https://images.pexels.com/photos/19368409/pexels-photo-19368409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Вебинар по маркетингу',
        description: 'Запишитесь на наш бесплатный вебинар, чтобы узнать секреты успешного маркетинга в 2025 году.',
    },
    {
        imgSrc: 'https://images.pexels.com/photos/19368409/pexels-photo-19368409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Технические обновления на сайте',
        description: 'Наши специалисты завершили обновление функционала сайта. Теперь ваш опыт станет еще более удобным и быстрым!',
    },
    {
        imgSrc: 'https://images.pexels.com/photos/27098859/pexels-photo-27098859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Конкурс для подписчиков',
        description: 'Принимайте участие в нашем конкурсе! Победители получат эксклюзивные призы. Подробности на нашем сайте!',
    },
    {
        imgSrc: 'https://images.pexels.com/photos/19279791/pexels-photo-19279791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Весенний распродажный сезон',
        description: 'Готовьтесь к большому весеннему распродаже! Скидки на многие товары — до 70%! Не пропустите выгодные предложения.',
    },
];

let visibleNewsCards = 3;

function renderNews(data, limit) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Очищаем контейнер перед рендером
    data.slice(0, limit).forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        newsCard.innerHTML = `
            <img src="${news.imgSrc}" alt="${news.title}" />
            <h3>${news.title}</h3>
            <p>${news.description}</p>
        `;
        newsContainer.appendChild(newsCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderNews(newsCardsData, visibleNewsCards);

    // Реализуем кнопку "Посмотреть все события"
    const showMoreNewsButton = document.getElementById('view-all-news');
    showMoreNewsButton.addEventListener('click', () => {
        if (visibleNewsCards < newsCardsData.length) {
            visibleNewsCards += 3; // Увеличиваем количество отображаемых карточек
            renderNews(newsCardsData, visibleNewsCards); // Правильная функция для рендеринга новостей
        }

        if (visibleNewsCards >= newsCardsData.length) {
            showMoreNewsButton.style.display = 'none'; // Прячем кнопку, если все карточки отображены
        }
    });
});