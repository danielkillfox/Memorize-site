// Находим все карусели на странице (их шесть)
const carousels = document.querySelectorAll('.carousel');

// Обрабатываем каждую карусель отдельно, чтобы они не влияли друг на друга
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
    // Прячем текущую картинку: убираем класс active
    imgs[index].classList.remove('active');
    // Новый индекс; по кругу: 2 -> 0, -1 -> 1 (остаток от деления)
    index = (n + imgs.length) % imgs.length;
    // Показываем новую картинку: добавляем класс active
    imgs[index].classList.add('active');
  }

  // Кнопка «Вперёд» — следующая картинка
  nextBtn.addEventListener('click', () => show(index + 1));

  // Кнопка «Назад» — предыдущая картинка
  prevBtn.addEventListener('click', () => show(index - 1));
});

// ===== Управление аудио: пауза/воспроизведение с того же места =====
// Находим элементы по id, заданным в HTML
const audio = document.getElementById('bg-audio');
const audioBtn = document.getElementById('audio-toggle');

// Проверяем, что оба элемента существуют (защита от ошибок)
if (audio && audioBtn) {
  // По клику на кнопку переключаем состояние
  audioBtn.addEventListener('click', function () {
    if (audio.paused) {
      // Если на паузе — запускаем воспроизведение с текущего места (currentTime не сбрасывается)
      audio.play();
      // Меняем текст кнопки на «Пауза»
      audioBtn.textContent = '⏸ Пауза';
    } else {
      // Если играет — ставим на паузу (currentTime сохраняется)
      audio.pause();
      // Меняем текст кнопки обратно
      audioBtn.textContent = '▶ Воспроизвести';
    }
  });

  // Если трек доиграл до конца — возвращаем кнопку в исходное состояние
  audio.addEventListener('ended', function () {
    audioBtn.textContent = '▶ Воспроизвести';
  });
}