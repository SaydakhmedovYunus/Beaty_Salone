let featureCardsData = [
    {
        imgSrc:'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Профессионализм',
        description:'Наши мастера имеют большой опыт работы и постоянно повышают квалификацию.',
    },
    {
        imgSrc:'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:'Комфорт',
        description:'Уютная атмосфера, современное оборудование и дружественный коллектив.',
    },
    {
        imgSrc:'https://images.pexels.com/photos/1151440/pexels-photo-1151440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Удобное время',
        description:'Мы работаем для вашего удобства с раннего утра до позднего вечера.',
    },
    {
        imgSrc: 'https://images.pexels.com/photos/12194713/pexels-photo-12194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Качество',
        description: 'Мы используем только высококачественные материалы и инструменты.',
    },
    {
        imgSrc: 'https://images.pexels.com/photos/3933170/pexels-photo-3933170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Доступность',
        description: 'Цены, которые подойдут каждому клиенту.',
    },
    {
        imgSrc: 'https://images.pexels.com/photos/321321/pexels-photo-321321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Надёжность',
        description: 'Мы гарантируем качество и долговечность наших услуг и продукции.',
    }
];

let visibleCards = 3;

function renderFeatures (data, limit) {

    const featuresContainer = document.getElementById('features-container');
    featuresContainer.innerHTML = ``; // Изначальное состояние контейнера пустое
    data.slice(0, limit).forEach(feature => {
        const card = document.createElement('div');
        card.classList.add('feature-card');
        card.innerHTML = `
            <img src="${feature.imgSrc}" alt="Professional" />
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `
        featuresContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', ()=> {
    renderFeatures(featureCardsData, visibleCards);

    const showMoreButton = document.getElementById('show-more');
    showMoreButton.addEventListener('click', () => {
        if(visibleCards < featureCardsData.length) {
            visibleCards += 3; //Увеличиваю количество отображаемых карточек
            renderFeatures(featureCardsData, visibleCards);
        }

        if(visibleCards >= featureCardsData.length) {
            showMoreButton.style.display = 'none';
        }
    });
});