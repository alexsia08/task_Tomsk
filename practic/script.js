// Данные новостей (в реальном проекте можно загружать из content.txt)
const newsData = [
  "Новые санкции против России вступят в силу на следующей неделе;2024-01-15;Политика;Европейский союз утвердил новый пакет санкций против российских компаний и физических лиц. Ожидается, что ограничения затронут ключевые секторы экономики...",
  "Российские спортсмены завоевали 5 золотых медалей на чемпионате мира;2024-01-14;Спорт;На проходящем в Катаре чемпионате мира по водным видам спорта российская сборная показала выдающиеся результаты. Спортсмены установили три новых рекорда...",
  "ЦБ РФ повысил ключевую ставку до 16% годовых;2024-01-13;Экономика;Центральный банк Российской Федерации на внеочередном заседании принял решение о повышении ключевой ставки на 2 процентных пункта. По словам главы ЦБ...",
  "Ученые создали искусственный интеллект, способный предсказывать землетрясения;2024-01-12;Технологии;Международная группа исследователей разработала систему искусственного интеллекта, которая с точностью 85% предсказывает подземные толчки...",
  "В Москве открылась крупнейшая выставка современного искусства;2024-01-11;Культура;В Третьяковской галерее начала работу масштабная выставка 'Искусство XXI века'. В экспозиции представлены работы более 200 современных художников...",
  "Криптовалютный рынок показал рекордный рост за последние два года;2024-01-10;Финансы;Основные криптовалюты продемонстрировали значительный рост на фоне позитивных новостей о регулировании цифровых активов в крупнейших экономиках мира...",
  "Минздрав утвердил новые правила диспансеризации населения;2024-01-09;Здоровье;С 1 марта 2024 года вступают в силу обновленные правила проведения профилактических медицинских осмотров. Изменения коснутся порядка обследований...",
  "Запущена новая орбитальная станция для изучения климата Земли;2024-01-08;Наука;Роскосмос успешно вывел на орбиту спутник 'Климат-М', предназначенный для мониторинга изменений климата. Аппарат оснащен уникальным оборудованием...",
  "Автопроизводители представили электрические автомобили с запасом хода 1000 км;2024-01-07;Авто;На международном автосалоне в Детройте ведущие автоконцерны показали новые модели электромобилей с революционными аккумуляторами...",
  "Цены на продукты питания вырастут в феврале;2024-01-06;Экономика;Аналитики прогнозируют рост цен на основные продукты питания в среднем на 5-7%. Наиболее значительно подорожают овощи и фрукты внесезонного производства...",
];

// Функция для загрузки и отображения новостей
function loadNews() {
  const newsContainer = document.getElementById("news-container");

  newsData.forEach((newsItem, index) => {
    const [title, date, category, preview] = newsItem.split(";");

    const newsCard = document.createElement("article");
    newsCard.className = "news-card";
    newsCard.innerHTML = `
            <h2>${title}</h2>
            <div class="news-meta">
                <span class="news-category">${category}</span>
                <span class="news-date">${formatDate(date)}</span>
            </div>
            <div class="news-preview" style="display: none;">
                ${preview}
            </div>
            <button class="read-more-btn" onclick="toggleNewsPreview(${index})">Читать далее</button>
        `;

    newsContainer.appendChild(newsCard);
  });
}

// Функция для форматирования даты
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("ru-RU", options);
}

// Функция для показа/скрытия анонса новости
function toggleNewsPreview(index) {
  const newsCards = document.querySelectorAll(".news-card");
  const currentCard = newsCards[index];
  const preview = currentCard.querySelector(".news-preview");
  const button = currentCard.querySelector(".read-more-btn");

  if (preview.style.display === "none" || !preview.style.display) {
    preview.style.display = "block";
    preview.style.animation = "fadeIn 0.5s ease-in";
    button.textContent = "Свернуть";
  } else {
    preview.style.display = "none";
    button.textContent = "Читать далее";
  }
}

// Добавляем CSS анимацию для плавного появления
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .news-preview {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Загружаем новости при загрузке страницы
document.addEventListener("DOMContentLoaded", loadNews);
