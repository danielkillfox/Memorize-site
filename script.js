// Все картинки карусели
const imgs = document.querySelectorAll('.carousel img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// Индекс текущей картинки
let i = 0;

// Показать картинку с номером n
function show(n) {
  imgs[i].classList.remove('active');   // прячем текущую
  i = (n + imgs.length) % imgs.length;  // новый индекс, по кругу: 3 -> 0, -1 -> 2
  imgs[i].classList.add('active');      // показываем новую
}

// Кнопки
next.onclick = () => show(i + 1);
prev.onclick = () => show(i - 1);
