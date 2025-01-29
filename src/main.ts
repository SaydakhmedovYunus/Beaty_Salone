// Открытие меню бургера
let openBurgerMenu: HTMLElement | null = document.getElementById('open-modal');
if (openBurgerMenu) {
    openBurgerMenu.addEventListener('click', openModal);
}

function openModal(): void {
    console.log('Я работаю');
    let modal: HTMLElement | null = document.getElementsByClassName('burger_menu_wrapper')[0] as HTMLElement;
    if (modal) {
        modal.classList.toggle('active');
    }
}

// Изменение темы
let changeTheme: HTMLElement | null = document.getElementById('changeTheme');
if (changeTheme) {
    changeTheme.addEventListener('click', changeThemeOfCite);
}

// Проверка сохранённой темы в localStorage при загрузке страницы
if (localStorage.getItem('theme') === 'night') {
    document.body.classList.add('night-mode');  // Применяем ночную тему при загрузке страницы
}

function changeThemeOfCite(): void {
    const body = document.body;
    body.classList.toggle('night-mode');  // Переключаем класс для ночной темы
    
    // Проверяем, есть ли класс night-mode, чтобы сохранить правильную тему
    if (body.classList.contains('night-mode')) {
        localStorage.setItem('theme', 'night');  // Сохраняем ночную тему
    } else {
        localStorage.setItem('theme', 'day');  // Сохраняем дневную тему
    }
}

// В случае с редиректом на страницу логина
// window.onload = function() {
//     window.location.href = './src/pages/LoginPage/LoginPage.html'; // Редирект на страницу логина
// };
