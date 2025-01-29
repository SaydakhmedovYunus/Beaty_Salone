

document.addEventListener("DOMContentLoaded", () => {
    // Массив с URL изображений
    const images = [
        "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3268732/pexels-photo-3268732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3065207/pexels-photo-3065207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    // Контейнер для галереи
    const galleryContainer = document.getElementById("gallery-container");

    // Функция для рендеринга изображений
    function renderGallery(images) {
        galleryContainer.innerHTML = ""; // Очистить контейнер
        images.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Работа салона красоты";
            galleryContainer.appendChild(img);
        });
    }

    // Вызов функции для отображения изображений
    renderGallery(images);
});

// Данные о членах команды
const teamMembers = [
    {
        name: "Анна Иванова",
        position: "Стилист",
        description: "Анна — эксперт в создании неповторимых образов. Её творчество и внимание к деталям сделали её одной из самых востребованных стилистов нашего салона.",
        image: "https://images.pexels.com/photos/1037913/pexels-photo-1037913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Екатерина Смирнова",
        position: "Мастер маникюра",
        description: "Екатерина специализируется на дизайне ногтей и уходе за руками. Её работы всегда привлекают внимание своей утончённостью и креативностью.",
        image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Ольга Петрова",
        position: "Косметолог",
        description: "Ольга помогает нашим клиентам ухаживать за кожей лица и тела, используя самые современные методы и продукты.",
        image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

// Функция для создания компонента команды
function createTeamComponent(containerId, members) {
    const container = document.getElementById(containerId);

    members.forEach(member => {
        // Создаем элемент для каждого члена команды
        const memberElement = document.createElement('div');
        memberElement.className = 'team-member';

        memberElement.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.position}</p>
            <p>${member.description}</p>
        `;

        container.appendChild(memberElement);
    });
}

// Инициализация компонента
createTeamComponent('team-component', teamMembers);



// Данные о статьях
const articlesData = [
    {
        title: "Как ухаживать за кожей зимой?",
        description: "Зима может быть суровой для вашей кожи. Узнайте, как правильно увлажнять и защищать её в холодное время года.",
        link: "../ReadMorePage/ReadMorePage.html",
        id:'article1'
    },
    {
        title: "Тренды маникюра 2025",
        description: "Какие цвета и дизайны будут популярны в новом году? Ознакомьтесь с последними модными направлениями.",
        link: "../ReadMorePage/ReadMorePage.html",
        id:'article2'
    },
    {
        title: "Секреты идеальной укладки",
        description: "Узнайте, как создать стильную прическу дома и какие продукты для этого лучше использовать.",
        link: "../ReadMorePage/ReadMorePage.html",
        id:'article3'
    }
];
const cardsPerPage = 3; // Количество карточек на странице
let currentPage = 1;

//Функция для отображения карточек на текущей странице

function renderArticle (data, page = 1) {
    const articleContainer = document.getElementById('article-component');
    articleContainer.innerHTML = ``;

    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const currentCards = data.slice(start, end);
    currentCards.forEach((article) => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('article');
        articleCard.innerHTML = `
        <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <button class='openArticleById' onclick="openArticleById('${article.id}')">Читать далее...</button>
        `;
        articleContainer.appendChild(articleCard);

    });
}

function createPagination (data) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ``; //Очищаем пагинацию

    const totalPages = Math.ceil(data.length / cardsPerPage);
    
    for(let i = 1; i <= totalPages; i++) {
        const button =document.createElement('button');
        button.classList.add('pagination-button');
        button.textContent = i;
        if( i === currentPage) button.classList.add('active');
        button.addEventListener('click', ()=> {
            currentPage = i;
            renderArticle(data, currentPage);
            updatePagination(totalPages);
        })
        paginationContainer.appendChild(button);
    }
}

function updatePagination(totalPages) {
    const buttons = document.querySelectorAll('.pagination-button');
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index + 1 === currentPage);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderArticle(articlesData, currentPage); //Рендерим карточки
    createPagination(articlesData); //Создаем пагинацию
})

function openArticleById(id) {
    window.location.href = `../ReadMorePage/ReadMorePage.html?id=${id}`;
    // alert(id)
}