document.getElementById('shareArrow').addEventListener('click', function() {
  var icons = document.getElementById('socialIcons');
  if (icons.style.display === 'none' || icons.style.display === '') {
    icons.style.display = 'flex'; // Показываем иконки
  } else {
    icons.style.display = 'none'; // Скрываем иконки
  }
})

// const shareButton = document.getElementById('shareArrow');
// const icons = document.getElementById('socialIcons');
// const shareSection = document.querySelector('.share-button');

// shareButton.addEventListener('click', () => {
//     // Переключаем класс 'active' для раздела кнопки
//     shareSection.classList.toggle('active');
    
//     // Показываем или скрываем иконки
//     if (icons.style.display === 'none' || icons.style.display === '') {
//         icons.style.display = 'flex'; // Показываем иконки
//     } else {
//         icons.style.display = 'none'; // Скрываем иконки
//     }
// });