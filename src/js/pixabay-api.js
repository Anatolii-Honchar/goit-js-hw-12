import axios from 'axios'; //

// Функція для отримання зображень з Pixabay за пошуковим запитом
export async function getImagesByQuery(query, page) {
  const API_KEY = '54395485-a9342e7e7dc9464708ec6ba9c'; // Персональний ключ API Pixabay
  const BASE_URL = 'https://pixabay.com/api/'; // Базовий URL API Pixabay

  const searchParams = {
    params: {
      key: API_KEY, // Ключ доступу (обов'язково)
      q: query, // Пошуковий запит
      image_type: 'photo', // Тип зображень - фото
      orientation: 'horizontal', // Орієнтація зображень - горизонтальна
      safesearch: true, // Безпечний пошук - увімкнено
      page: page, // Номер сторінки для пагінації
      per_page: 9, // Кількість зображень на сторінку
    },
  };

  // Виконуємо GET-запит до API Pixabay з вказаними параметрами пошуку
  const response = await axios.get(BASE_URL, searchParams);
  return response.data;
}
