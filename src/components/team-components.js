let teamCardsData = [
  {
    image: "https://images.pexels.com/photos/27098860/pexels-photo-27098860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Анна Петрова",
    specialization: "Косметолог",
    experience: "3 года",
    id: "anna",
  },

  {
    image: "https://images.pexels.com/photos/6464789/pexels-photo-6464789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Мария Иванова",
    specialization: "Парикмахер-стилист",
    experience: "5 лет",
    id: "maria",
  },
  {
    image: "https://images.pexels.com/photos/18102595/pexels-photo-18102595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Юлия Белова",
    specialization: "Парикмахер-стилист",
    experience: "5 лет",
    id: "yulia",
  },
  {
    image: "https://images.pexels.com/photos/22669601/pexels-photo-22669601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ольга Смирнова",
    specialization: "Маникюр",
    experience: "4 года",
    id: "olga",
  },
  {
    image: "https://images.pexels.com/photos/21563060/pexels-photo-21563060/free-photo-of-xv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Елена Васильева",
    specialization: "Массажист",
    experience: "7 лет",
    id: "elena",
  },
  {
    image: "https://images.pexels.com/photos/27616681/pexels-photo-27616681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Марина Федорова",
    specialization: "Маникюр",
    experience: "2 года",
    id: "marina",
  },
  {
    image: "https://images.pexels.com/photos/14868689/pexels-photo-14868689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Светлана Кузнецова",
    specialization: "Парикмахер",
    experience: "8 лет",
    id: "svetlana",
  },
  {
    image: "https://images.pexels.com/photos/28268134/pexels-photo-28268134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Татьяна Андреева",
    specialization: "Косметолог",
    experience: "6 лет",
    id: "tatyana",
  },
  {
    image: "https://images.pexels.com/photos/28461403/pexels-photo-28461403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Мария Воробьева",
    specialization: "Массажист",
    experience: "9 лет",
    id: "maria1",
  },
  {
    image: "https://images.pexels.com/photos/9953613/pexels-photo-9953613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Инна Власова",
    specialization: "Косметолог",
    experience: "4 года",
    id: "inna",
  },
  {
    image: "https://images.pexels.com/photos/16156274/pexels-photo-16156274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Анастасия Петрова",
    specialization: "Парикмахер",
    experience: "3 года",
    id: "anastasia",
  },
  {
    image: "https://images.pexels.com/photos/13206751/pexels-photo-13206751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ирина Гусева",
    specialization: "Маникюр",
    experience: "2 года",
    id: "irina",
  },
  {
    image: "https://images.pexels.com/photos/27098860/pexels-photo-27098860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Людмила Соколова",
    specialization: "Массажист",
    experience: "10 лет",
    id: "lyudmila",
  },
  {
    image: "https://images.pexels.com/photos/5684465/pexels-photo-5684465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Наталья Григорьева",
    specialization: "Маникюр",
    experience: "6 лет",
    id: "natalia",
  },
  {
    image: "https://images.pexels.com/photos/9953616/pexels-photo-9953616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Людмила Соколова",
    specialization: "Массажист",
    experience: "10 лет",
    id: "lyudmila",
  },

  {
    image: "https://images.pexels.com/photos/27098859/pexels-photo-27098859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ирина Лебедева",
    specialization: "Парикмахер",
    experience: "5 лет",
    id: "irina2",
  },
  
  // Остальные данные...
];

const cardsPerPage = 8; // Количество карточек на странице
let currentPage = 1;

// Функция для отображения карточек на текущей странице
function renderTeam(data, page = 1) {
  const teamContainer = document.getElementById("team-container");
  teamContainer.innerHTML = ""; // Очищаем контейнер

  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const currentCards = data.slice(start, end);

  currentCards.forEach((team) => {
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    teamCard.innerHTML = `
      <img src="${team.image}" alt="${team.name}">
      <h3>${team.name}</h3>
      <p>${team.specialization}</p>
      <p>${team.experience}</p>
      <div class="team-card-buttons">
        <button onclick="openMasterDetails('${team.id}')">Подробнее</button>
        <button onclick="bookAppointment('${team.id}')">Записаться</button>
      </div>
    `;
    teamContainer.appendChild(teamCard);
  });
}

// Функция для создания пагинации
function createPagination(data) {
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = ""; // Очищаем пагинацию

  const totalPages = Math.ceil(data.length / cardsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.classList.add("pagination-button");
    button.textContent = i;
    if (i === currentPage) button.classList.add("active");
    button.addEventListener("click", () => {
      currentPage = i;
      renderTeam(data, currentPage);
      updatePagination(totalPages);
    });
    paginationContainer.appendChild(button);
  }
}

// Функция для обновления активной кнопки пагинации
function updatePagination(totalPages) {
  const buttons = document.querySelectorAll(".pagination-button");
  buttons.forEach((button, index) => {
    button.classList.toggle("active", index + 1 === currentPage);
  });
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  renderTeam(teamCardsData, currentPage); // Рендерим карточки
  createPagination(teamCardsData); // Создаем пагинацию
});

// Пример функций для кнопок "Подробнее" и "Записаться"
function openMasterDetails(id) {
  window.location.href = `../pages/ManicurePage/ManicurePage.html?id=${id}`;
  // alert(id);
  
}
function bookAppointment(id) {
  alert(`Записаться к мастеру с ID: ${id}`);
}
