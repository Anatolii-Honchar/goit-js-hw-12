import SimpleLightbox from 'simplelightbox'; // Імпорт бібліотеки SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css'; // Імпорт стилів SimpleLightbox


// Ініціалізація SimpleLightbox для елементів галереї

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true, // Увімкнення підписів
  captionsData: 'alt', // Використання атрибуту alt для підписів
  captionDelay: 250, // Затримка перед показом підпису (в мілісекундах)
});

// DOM-елементи
const galleryContainer = document.querySelector('.gallery'); // Контейнер галереї
const loader = document.querySelector('.loader'); // Лоадер
const btnLoadMore = document.querySelector('.btn-load-more'); // Кнопка "Завантажити ще"
// Функція для створення та відображення галереї зображень
export function createGallery(images) {
  // Генеруємо HTML-розмітку для кожного зображення
  const markup = images
    .map(
      image =>
        `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img 
          class="gallery-image" 
          src="${image.webformatURL}" 
          alt="${image.tags}" 
        />
      </a>

      <div class="inf-container">
  <ul class="inf-list">
    <li class="inf-item">
      <h3>Likes</h3>
      <span>${image.likes}</span>
    </li>

     <li class="inf-item">
      <h3>Views</h3>
      <span>${image.views}</span>
    </li>

     <li class="inf-item">
      <h3>Comments</h3>
      <span>${image.comments}</span>
    </li>

     <li class="inf-item">
      <h3>Downloads</h3>
      <span>${image.downloads}</span>
    </li>

  </ul>
</div>
      </li>`
    )
    .join(''); // Об'єднуємо масив рядків в один суцільний рядок HTML

  // Додаємо згенеровану розмітку в кінець контейнера галереї
  galleryContainer.insertAdjacentHTML('beforeend', markup);

  // Оновлюємо SimpleLightbox, щоб врахувати нові елементи
  lightbox.refresh();
}

// Функція для очищення галереї
export function clearGallery() {
  galleryContainer.innerHTML = ''; // Очищаємо вміст контейнера галереї
};

// Функція для показу лоадера
export const showLoader = () => {
  // Видаляємо клас 'is-hidden', щоб показати лоадер
  loader.classList.remove('is-hidden');
};

// Функція для приховування лоадера
export const hideLoader = () => {
  // Додаємо клас 'is-hidden', щоб сховати лоадер
  loader.classList.add('is-hidden');
};

//Function visibilite btn load more
export const showBtnLoadMore = () => {
  btnLoadMore.classList.remove('is-hidden');
};
export const hideBtnLoadMore = () => {
  btnLoadMore.classList.add('is-hidden');
};
