let openBurgerMenu = document.getElementById('open-modal');
openBurgerMenu.addEventListener('click', openModal);

function openModal() {
    console.log('Я работаю');
    let modal = document.getElementsByClassName('burger_menu_wrapper')[0];
    modal.classList.toggle('active');
}

let changeTheme = document.getElementById('changeTheme');
changeTheme.addEventListener('click', changeThemeOfCite);

// Проверка сохранённой темы в localStorage при загрузке страницы
if (localStorage.getItem('theme') === 'night') {
    document.body.classList.add('night-mode');  // Применяем ночную тему при загрузке страницы
}

function changeThemeOfCite () {
    const body = document.body;
    body.classList.toggle('night-mode');  // Переключаем класс для ночной темы
    
    // Проверяем, есть ли класс night-mode, чтобы сохранить правильную тему
    if (body.classList.contains('night-mode')) {
        localStorage.setItem('theme', 'night');  // Сохраняем ночную тему
    } else {
        localStorage.setItem('theme', 'day');  // Сохраняем дневную тему
    }
}

//     window.onload = function() {
//     window.location.href = './src/pages/LoginPage/LoginPage.html'; // Редирект на страницу логина
// };