// Находим все карусели на странице (их три)
const carousels = document.querySelectorAll('.carousel');

// Обрабатываем каждую карусель отдельно
carousels.forEach(function (carousel) {
  // Картинки только внутри этой карусели
  const imgs = carousel.querySelectorAll('img');

  // Кнопки только внутри этой карусели
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');

  // Индекс текущей картинки в этой карусели (0 — первая)
  let index = 0;

  // Показать картинку с номером n
  function show(n) {
    imgs[index].classList.remove('active');              // прячем текущую картинку
    index = (n + imgs.length) % imgs.length;             // новый индекс; по кругу: 2 -> 0, -1 -> 1
    imgs[index].classList.add('active');                 // показываем новую картинку
  }

  // Кнопка «Вперёд» — следующая картинка
  nextBtn.addEventListener('click', () => show(index + 1));

  // Кнопка «Назад» — предыдущая картинка
  prevBtn.addEventListener('click', () => show(index - 1));
});

// ===== Управление аудио: пауза/воспроизведение с того же места =====
const audio = document.getElementById('bg-audio');
const audioBtn = document.getElementById('audio-toggle');

if (audio && audioBtn) {
  audioBtn.addEventListener('click', function () {
    if (audio.paused) {
      audio.play();
      audioBtn.textContent = '⏸ Пауза';
    } else {
      audio.pause();
      audioBtn.textContent = '▶ Воспроизвести';
    }
  });

  // Если трек доиграл до конца — вернуть кнопку в исходное состояние
  audio.addEventListener('ended', function () {
    audioBtn.textContent = '▶ Воспроизвести';
  });
}