# <img src='./public/E-Pharmacy.png' alt='React+Vite'>

---

### Dashboard for Medical Store

Цей проєкт є веб-додатком для сторінки
[Dashboard](https://admin-dashboard-seven-roan.vercel.app), яка відображає
інформацію про доходи, витрати та інші статистичні дані медичного магазину.
Проєкт складається з фронтенду, реалізованого на React з використанням Vite, та
[бекенду](https://github.com/IhorZolot/BackAdmDashboard.git), реалізованого на
Node.js з використанням Express.js.

---

### Зміст

1. [Dashboard for Medical Store](#dashboard-for-Medical-Store)
2. [Встановлення](#встановлення)
3. [Використання](#використання)
4. [Техноголії](#техноголії)
5. [Функціонал](#функціонал)
6. [Технології](#технології)
7. [Фронтенд](#фронтенд)
8. [Бекенд](#бекенд)
9. [Хуки](#хуки)

---

### Встановлення

#### Встановлення фронтенду

1. Клонування репозиторію:
   ```
   git clone https://github.com/IhorZolot/AdminDashboard.git
   ```
2. Перейти у відповідну папку:

```
cd AdminDashboard
```

3. Встановити залежності використовуючи менеджер пакетів npm:

```
npm install
```

##### Встановлення бекенду

4. Клонування репозиторію:
   ```
   git clone https://github.com/IhorZolot/BackAdmDashboard.git
   ```
5. Перейти у відповідну папку:

```
cd BackAdmDashboard
```

6. Встановити залежності використовуючи менеджер пакетів npm:

```
npm install
```

---

#### Використання

1. Запуск фронтенд проекту:

```
npm run dev
```

2. Запуск бекенд проекту:

```
npm run start
```

---

#### Функціонал

##### Фронтенд

- Головна сторінка (Dashboard): Відображення основної статистики: Доходи,
  Витрати, Загальна кількість продажів, Кількість активних клієнтів Список
  останніх транзакцій: Таблиця з останніми транзакціями, включаючи деталі кожної
  транзакції.
- Інтерфейс для пошуку за відповідною категорією, Форма додавання та редагування
  продукту.
- Валідація вводу: Перевірка правильності даних перед відправкою на сервер.

##### Бекенд

1. Аутентифікація та авторизація:

- Механізми аутентифікації: Вхід в систему з використанням JWT-токенів.
- Захист маршрутів: Доступ до певних маршрутів лише для авторизованих
  користувачів.

2. API ендпоінти:

- Маршрути для роботи з продуктами: Отримання списку продуктів. Додавання нового
  продукту. Редагування існуючого продукту. Видалення продукту.
- Маршрути для роботи зі статистикою: Отримання загальної статистики. Отримання
  статистики за певний період.

3. Обробка запитів:

- Валідація даних: Валідація вхідних даних за допомогою Joi.
- Обробка помилок: Відповідь з відповідним повідомленням при некоректних даних
  або помилках на сервері.
- Робота з базою даних: Зберігання та отримання даних про продукти, транзакції
  та статистику з MongoDB.

---

#### Технології

Цей проект був створений за допомогою [Vite](https://vitejs.dev/) +
[React](https://reactjs.org/). Проект використовує такі технології та
інструменти. Розташований на платформі [GitHub](https://github.com/)

##### Фронтенд

| Технологія        | Опис                                                                    |
| ----------------- | ----------------------------------------------------------------------- |
| React             | JavaScript-бібліотека для створення інтерфейсів користувача             |
| @reduxjs/toolkit  | Hабір інструментів для роботи з Redux                                   |
| axios             | Бібліотека для виконання HTTP-запитів з браузера або Node.js            |
| clsx              | Утиліта для умовного поєднання класів CSS                               |
| date-fns          | Бібліотека для роботи з датами у JavaScript                             |
| formik            | Бібліотека для роботи з формами у React                                 |
| modern-normalize  | Скидання стилів для сучасних браузерів                                  |
| react             | JavaScript-бібліотека для створення користувацьких інтерфейсів          |
| react-dom         | Бібліотека для роботи з DOM у React                                     |
| react-redux       | Офіційна бібліотека для інтеграції Redux з React                        |
| react-responsive  | Бібліотека для створення адаптивних компонентів у React                 |
| react-router-dom  | Бібліотека для навігації між сторінками в React-додатку                 |
| react-select      | Бібліотека для створення селектів у React                               |
| react-spinners    | Бібліотека для спінерів у React                                         |
| react-toastify    | Бібліотека для сповіщень у React                                        |
| redux-persist     | Бібліотека для збереження стану Redux у localStorage або sessionStorage |
| sass              | Препроцесор CSS для розширення можливостей стилів                       |
| simplebar         | Бібліотека для кастомних смуг прокрутки                                 |
| simplebar-react   | React-обгортка для SimpleBar                                            |
| styled-components | Бібліотека для створення компонентів за допомогою CSS у JavaScript      |
| yup               | Бібліотека для валідації схем JavaScript                                |

##### Бекенд

| Технологія   | Опис                                                                                 |
| ------------ | ------------------------------------------------------------------------------------ |
| bcryptjs     | Бібліотека для хешування паролів                                                     |
| commander    | Бібліотека для створення командного рядка у Node.js                                  |
| cors         | Пакет для налаштування CORS (Cross-Origin Resource Sharing)                          |
| dotenv       | Бібліотека для завантаження змінних середовища з .env файлу                          |
| express      | Популярний веб-фреймворк для Node.js                                                 |
| joi          | Бібліотека для валідації схем JavaScript                                             |
| jsonwebtoken | Бібліотека для створення та перевірки JSON Web Tokens (JWT)                          |
| mongoose     | ORM для роботи з MongoDB у Node.js                                                   |
| morgan       | HTTP request logger middleware для Node.js                                           |
| multer       | Middleware для обробки multipart/form-data, використовується для завантаження файлів |
| nanoid       | Генератор унікальних рядків ідентифікаторів                                          |
| yargs        | Інструмент для парсингу аргументів командного рядка у Node.js                        |

#### Список звстосовиних хуків

| Хук           | Опис                                                                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| useState      | Дозволяє створювати змінні стану і оновлювати їх при зміні введення користувача або інших подій                                                       |
| useSelector   | Дозволяє отримувати дані з сховища Redux в компоненті                                                                                                 |
| useDispatch   | Дозволяє відправляти дії Redux з компонента                                                                                                           |
| useNavigate   | Дозволяє програмно переходити на інші сторінки в додатку з використанням React Router                                                                 |
| useMediaQuery | Дозволяє отримувати інформацію про розміри екрану і стан медіа-запитів                                                                                |
| useLocation   | Дозволяє отримувати інформацію про поточний URL-адресу, включаючи шлях, пошуковий рядок і стан, що корисно для визначення місця знаходження в додатку |
| useEffect     | Дозволяє виконати побічний ефект при кожному рендері компонента, що дозволяє взаємодіяти з зовнішнім світом і оновлювати стан компонента              |

## [<img src="./public/logo.svg" width="20" alt="React"> <span style='color: green'>E-Pharmacy</span>](https://admin-dashboard-seven-roan.vercel.app)

[Ihor Zolotoverkh](www.linkedin.com/in/ihor-zolotoverkh)
