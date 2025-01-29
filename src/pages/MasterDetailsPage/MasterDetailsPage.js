const teamCardsData = [
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
    // Остальные мастера...
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const masterId = urlParams.get("id");
  
    if (!masterId) {
      document.body.innerHTML = "<h1>Мастер не найден</h1>";
      return;
    }
  
    const master = teamCardsData.find((item) => item.id === masterId);
  
    if (!master) {
      document.body.innerHTML = "<h1>Мастер не найден</h1>";
      return;
    }
  
    document.querySelector(".master_photo img").src = master.image;
    document.querySelector(".master_info h1").textContent = master.name;
    document.querySelector(".master_info p").textContent = `${master.name} - профессионал в области ${master.specialization}. Стаж: ${master.experience}.`;
    document.querySelector(".master_info ul").innerHTML = `
      <li>${master.specialization}</li>
      <li>Опыт работы: ${master.experience}</li>
      <li>Клиентоориентированность</li>
      <li>Высокий уровень сервиса</li>
    `;
  });