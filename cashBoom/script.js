const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const mainImgContainer = document.querySelector('.main-img');
const mainContainer = document.querySelector('.main');
const mainContent = document.querySelector('.main-content');
const bombImg = document.querySelector('.bomb-img');


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu-active');
    header.classList.toggle('header-mobile-active');
})

// window.addEventListener('load', () => {
//     if (window.innerWidth < 744) {
//         mainContent.appendChild(bombImg);
//     }
// })

// window.addEventListener('resize', () => {
//     if (window.innerWidth < 744) {
//         // Проверяем, не добавлен ли bombImg
//         if (!mainContent.contains(bombImg)) {
//             mainContent.appendChild(bombImg);
//         }
//     } else {
//         // Проверяем, не возвращаем ли bombImg обратно, если он в mainContent
//         if (mainContent.contains(bombImg)) {
//             mainImgContainer.appendChild(bombImg); // Возвращаем bombImg на его оригинальное место
//         }
//     }
// });

window.addEventListener('load', () => {
    if (window.innerWidth < 744) {
        mainContent.appendChild(mainImgContainer);
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 744) {
        // Проверяем, не добавлен ли bombImg
        if (!mainContent.contains(mainImgContainer)) {
            mainContent.appendChild(mainImgContainer);
        }
    } else {
        // Проверяем, не возвращаем ли bombImg обратно, если он в mainContent
        if (mainContent.contains(mainImgContainer)) {
            mainContainer.appendChild(mainImgContainer); // Возвращаем bombImg на его оригинальное место
        }
    }
});