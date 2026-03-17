import React, { useEffect, useMemo, useRef, useState } from "react";

const tr = {
  ru: {
    brand: "Telegram Dating",
    home: "Главная",
    search: "Поиск",
    messages: "Сообщения",
    profile: "Профиль",
    settings: "Настройки",
    name: "Имя",

    heroTitle: "Найди новые знакомства в Telegram",
    heroText:
      "Смотри анкеты в вертикальном формате, листай фото и информацию, используй удобный поиск и начинай общение только после взаимной симпатии.",
    heroPrimary: "Начать поиск",
    heroSecondary: "Открыть сообщения",

    card1: "Полный профиль",
    card1t: "Анкета открывается как отдельная вертикальная страница без наложения текста на фото.",
    card2: "Удобный поиск",
    card2t: "Фильтры по стране, городу, возрасту, полу и дистанции.",
    card3: "Выбор в любой момент",
    card3t: "Кнопки лайка и дизлайка закреплены внизу и доступны во время всей прокрутки.",

    searchTitle: "Поиск",
    filters: "Настройки поиска",
    mode: "Режим",
    nearby: "Люди рядом",
    all: "Все",
    country: "Страна",
    city: "Город",
    ageFrom: "Возраст от",
    ageTo: "Возраст до",
    gender: "Пол",
    unit: "Единицы",
    miles: "мили",
    km: "км",
    distance: "Дистанция",
    allLocations: "Все локации",
    men: "Мужчины",
    women: "Женщины",
    apply: "Применить",
    reset: "Сбросить",

    emptyDeck: "Анкеты закончились",
    emptyDeckText: "Измени фильтры поиска или начни просмотр заново.",
    restart: "Начать заново",

    online: "Онлайн",
    offline: "Не в сети",
    messagePlaceholder: "Напиши сообщение...",
    send: "Отправить",
    noMessages: "Пока нет взаимных симпатий.",
    openChat: "Открыть чат",

    msgMatches: "Мэтчи",
    msgLikedYou: "Кому я понравился",
    msgGuests: "Гости",
    noLikedYou: "Пока никто не отметил твою анкету.",
    noGuests: "Пока гостей нет.",

    profileTitle: "Профиль",
    about: "О себе",
    age: "Возраст",
    zodiac: "Знак зодиака",
    verified: "Верифицированная анкета",
    verifiedYes: "Селфи подтверждено",
    verifiedNo: "Нет",
    cityLabel: "Город",
    countryLabel: "Страна",
    editProfile: "Редактировать профиль",
    saveProfile: "Сохранить профиль",
    cancel: "Отмена",
    addPhoto: "Добавить фото",
    bio: "Информация о себе",
    photos: "Фотографии",
    profileSaved: "Профиль сохранён",

    settingsTitle: "Настройки",
    settingsText: "Управляй фильтрами поиска и параметрами профиля.",
    help: "Помощь",
    help1: "Как теперь работает просмотр анкет?",
    help1t:
      "Открывается сразу полный вертикальный профиль. Следующая анкета появляется только после лайка или дизлайка.",
    help2: "Как смотреть фото и информацию?",
    help2t:
      "Просто прокручивай анкету вверх и вниз. Фото и блоки информации идут отдельно друг за другом.",
    help3: "Когда можно написать человеку?",
    help3t: "Только после взаимной симпатии. Без мэтча чат недоступен.",

    mutualTitle: "Взаимная симпатия!",
    mutualText: "Теперь вы можете начать общение.",
    startChat: "Начать чат",
    continue: "Продолжить",

    years: "лет",
    photosCount: "фото",
    premium: "PREMIUM",

    location: "Местоположение",
    lookingFor: "Кого ищет",
    height: "Рост",
    relationship: "Семейное положение",
    interests: "Интересы",
    report: "Пожаловаться",
    block: "Заблокировать",
    profileBlocked: "Профиль заблокирован",
    profileReported: "Жалоба отправлена",
    chooseReason: "Выбери причину",
    spam: "Спам",
    fake: "Фейковая анкета",
    inappropriate: "Неподходящий контент",
    cancelAction: "Отмена",
    confirm: "Подтвердить",

    single: "Не женат / не замужем",
    divorced: "В разводе",
    relationshipOpen: "Открыт(а) к отношениям",
    casual: "Лёгкое общение",
    serious: "Серьёзные отношения",
    travelTogether: "Путешествия и общение",

    infoSection: "Информация",
    gallerySection: "Фотографии",
    nextAfterChoice: "Следующая анкета откроется после лайка или дизлайка",
  },
  en: {
    brand: "Telegram Dating",
    home: "Home",
    search: "Search",
    messages: "Messages",
    profile: "Profile",
    settings: "Settings",
    name: "Name",

    heroTitle: "Find new connections in Telegram",
    heroText:
      "Browse profiles in a vertical format, scroll photos and information, use smart search and start chatting only after a mutual match.",
    heroPrimary: "Start search",
    heroSecondary: "Open messages",

    card1: "Full profile",
    card1t: "Each profile opens as a full vertical page with no text covering the photos.",
    card2: "Smart search",
    card2t: "Filters by country, city, age, gender and distance.",
    card3: "Choose anytime",
    card3t: "Like and dislike buttons stay fixed at the bottom while you scroll.",

    searchTitle: "Search",
    filters: "Search settings",
    mode: "Mode",
    nearby: "Nearby",
    all: "All",
    country: "Country",
    city: "City",
    ageFrom: "Age from",
    ageTo: "Age to",
    gender: "Gender",
    unit: "Units",
    miles: "miles",
    km: "km",
    distance: "Distance",
    allLocations: "All locations",
    men: "Men",
    women: "Women",
    apply: "Apply",
    reset: "Reset",

    emptyDeck: "No more profiles",
    emptyDeckText: "Change your filters or start browsing again.",
    restart: "Start again",

    online: "Online",
    offline: "Offline",
    messagePlaceholder: "Write a message...",
    send: "Send",
    noMessages: "No mutual matches yet.",
    openChat: "Open chat",

    msgMatches: "Matches",
    msgLikedYou: "Liked you",
    msgGuests: "Guests",
    noLikedYou: "Nobody liked your profile yet.",
    noGuests: "No guests yet.",

    profileTitle: "Profile",
    about: "About",
    age: "Age",
    zodiac: "Zodiac",
    verified: "Verified profile",
    verifiedYes: "Selfie confirmed",
    verifiedNo: "No",
    cityLabel: "City",
    countryLabel: "Country",
    editProfile: "Edit profile",
    saveProfile: "Save profile",
    cancel: "Cancel",
    addPhoto: "Add photo",
    bio: "About yourself",
    photos: "Photos",
    profileSaved: "Profile saved",

    settingsTitle: "Settings",
    settingsText: "Manage search filters and profile preferences.",
    help: "Help",
    help1: "How does profile browsing work now?",
    help1t:
      "A full vertical profile opens immediately. The next profile appears only after a like or dislike.",
    help2: "How do I browse photos and information?",
    help2t: "Just scroll up and down. Photos and information blocks appear one after another.",
    help3: "When can I message someone?",
    help3t: "Only after a mutual match. No chat is available before that.",

    mutualTitle: "It's a match!",
    mutualText: "Now you can start chatting.",
    startChat: "Start chat",
    continue: "Continue",

    years: "years",
    photosCount: "photos",
    premium: "PREMIUM",

    location: "Location",
    lookingFor: "Looking for",
    height: "Height",
    relationship: "Relationship status",
    interests: "Interests",
    report: "Report",
    block: "Block",
    profileBlocked: "Profile blocked",
    profileReported: "Report sent",
    chooseReason: "Choose a reason",
    spam: "Spam",
    fake: "Fake profile",
    inappropriate: "Inappropriate content",
    cancelAction: "Cancel",
    confirm: "Confirm",

    single: "Single",
    divorced: "Divorced",
    relationshipOpen: "Open to relationship",
    casual: "Casual connection",
    serious: "Serious relationship",
    travelTogether: "Travel and connection",

    infoSection: "Information",
    gallerySection: "Photos",
    nextAfterChoice: "The next profile opens only after like or dislike",
  },
};

const countriesMap = {
  USA: [
    "Los Angeles",
    "New York",
    "Chicago",
    "Miami",
    "San Diego",
    "San Francisco",
    "Las Vegas",
    "Seattle",
    "Boston",
    "Houston",
  ],
  Canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  UK: ["London", "Manchester", "Birmingham", "Liverpool", "Edinburgh"],
  Germany: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
  France: ["Paris", "Lyon", "Marseille", "Nice", "Toulouse"],
  Spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga"],
  Italy: ["Rome", "Milan", "Naples", "Turin", "Florence"],
  Poland: ["Warsaw", "Krakow", "Gdansk", "Wroclaw", "Poznan"],
  Ukraine: ["Kyiv", "Lviv", "Odesa", "Dnipro", "Kharkiv"],
  Turkey: ["Istanbul", "Antalya", "Ankara", "Izmir", "Bursa"],
  UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
  Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Sapporo"],
  Russia: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan", "Sochi"],
};

const zodiacOptions = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

const initialProfiles = [
  {
    id: 1,
    name: "Anna",
    age: 26,
    gender: "female",
    city: "Los Angeles",
    country: "USA",
    distanceMi: 4,
    online: true,
    zodiac: "♎",
    verified: true,
    heightCm: 168,
    relationshipStatus: "single",
    lookingFor: "serious",
    bio: "Люблю красивую подачу, музыку, поездки, кофе и лёгкое, но настоящее общение. Нравятся внимательные люди с чувством юмора и вкусом к жизни.",
    bioEn:
      "I love beautiful aesthetics, music, trips, coffee and easy but real communication. I like attentive people with humor and taste for life.",
    interests: ["music", "travel", "coffee", "sunsets", "fashion"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Привет 😊 Рада взаимной симпатии.", "Как проходит твой день?"],
    starterMessagesEn: ["Hi 😊 Glad we matched.", "How is your day going?"],
  },
  {
    id: 2,
    name: "Sofia",
    age: 24,
    gender: "female",
    city: "Miami",
    country: "USA",
    distanceMi: 12,
    online: true,
    zodiac: "♌",
    verified: false,
    heightCm: 165,
    relationshipStatus: "relationshipOpen",
    lookingFor: "casual",
    bio: "Люблю океан, прогулки, красивые вечера и тёплые разговоры. Мне важно, чтобы рядом был живой, лёгкий и приятный человек.",
    bioEn:
      "I love the ocean, walks, beautiful evenings and warm conversations. It matters to me that the person next to me feels alive, easy and pleasant.",
    interests: ["ocean", "coffee", "night walks", "beach", "photos"],
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Очень приятно 😊", "Ты больше любишь город или природу?"],
    starterMessagesEn: ["Nice to meet you 😊", "Do you prefer the city or nature?"],
  },
  {
    id: 3,
    name: "Daniel",
    age: 29,
    gender: "male",
    city: "New York",
    country: "USA",
    distanceMi: 7,
    online: true,
    zodiac: "♐",
    verified: true,
    heightCm: 182,
    relationshipStatus: "single",
    lookingFor: "serious",
    bio: "Ценю юмор, спорт, хорошие фильмы и настоящие эмоции. Нравится уверенное общение без игр и лишней драмы.",
    bioEn:
      "I value humor, sports, good movies and real emotions. I like confident communication without games and unnecessary drama.",
    interests: ["sport", "movies", "humor", "fitness", "city life"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Привет! Рад мэтчу.", "Чем любишь заниматься в свободное время?"],
    starterMessagesEn: ["Hi! Glad we matched.", "What do you like doing in your free time?"],
  },
  {
    id: 4,
    name: "Michael",
    age: 31,
    gender: "male",
    city: "Chicago",
    country: "USA",
    distanceMi: 18,
    online: false,
    zodiac: "♒",
    verified: false,
    heightCm: 186,
    relationshipStatus: "divorced",
    lookingFor: "relationshipOpen",
    bio: "Люблю путешествия, спорт и спокойные разговоры. Ценю искренность, зрелость и людей, с которыми по-настоящему легко.",
    bioEn:
      "I love travel, sports and calm conversations. I value sincerity, maturity and people it is genuinely easy to be around.",
    interests: ["travel", "fitness", "weekends", "cars", "coffee"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Привет 👋", "Какой у тебя идеальный выходной?"],
    starterMessagesEn: ["Hi 👋", "What does your perfect weekend look like?"],
  },
  {
    id: 5,
    name: "Emily",
    age: 25,
    gender: "female",
    city: "Toronto",
    country: "Canada",
    distanceMi: 32,
    online: true,
    zodiac: "♉",
    verified: true,
    heightCm: 170,
    relationshipStatus: "single",
    lookingFor: "serious",
    bio: "Люблю уютные места, прогулки, музыку и красивые фотографии. Открываюсь людям, если чувствую хорошую энергетику.",
    bioEn:
      "I love cozy places, walks, music and beautiful photos. I open up to people when I feel good energy.",
    interests: ["music", "walks", "art", "coffee", "travel"],
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Привет ✨", "Что тебе ближе — спонтанность или план?"],
    starterMessagesEn: ["Hi ✨", "What do you prefer — spontaneity or planning?"],
  },
  {
    id: 6,
    name: "Lucas",
    age: 28,
    gender: "male",
    city: "Berlin",
    country: "Germany",
    distanceMi: 54,
    online: true,
    zodiac: "♏",
    verified: true,
    heightCm: 184,
    relationshipStatus: "single",
    lookingFor: "travelTogether",
    bio: "Люблю путешествия, музыку, спорт и стильные места. Ценю лёгкость в общении и яркую химию между людьми.",
    bioEn:
      "I love travel, music, sports and stylish places. I appreciate ease in conversation and strong chemistry between people.",
    interests: ["travel", "music", "style", "fitness", "night city"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Рад знакомству.", "Какой город тебе нравится больше всего?"],
    starterMessagesEn: ["Nice to meet you.", "What city do you like the most?"],
  },
  {
    id: 7,
    name: "Olivia",
    age: 27,
    gender: "female",
    city: "Barcelona",
    country: "Spain",
    distanceMi: 65,
    online: false,
    zodiac: "♊",
    verified: true,
    heightCm: 167,
    relationshipStatus: "relationshipOpen",
    lookingFor: "casual",
    bio: "Обожаю море, красивые вечера, танцы и вдохновляющих людей. Люблю, когда общение естественное и без напряжения.",
    bioEn:
      "I adore the sea, beautiful evenings, dancing and inspiring people. I love when conversation feels natural and relaxed.",
    interests: ["sea", "dance", "sunsets", "travel", "fashion"],
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Привет 💫", "Любишь спонтанные поездки?"],
    starterMessagesEn: ["Hi 💫", "Do you like spontaneous trips?"],
  },
  {
    id: 8,
    name: "Noah",
    age: 30,
    gender: "male",
    city: "London",
    country: "UK",
    distanceMi: 83,
    online: true,
    zodiac: "♑",
    verified: false,
    heightCm: 180,
    relationshipStatus: "single",
    lookingFor: "serious",
    bio: "Люблю спокойную уверенность, хорошие разговоры и красивую городскую атмосферу. Ценю ум, вкус и чувство юмора.",
    bioEn:
      "I like calm confidence, good conversations and beautiful city atmosphere. I appreciate intelligence, taste and humor.",
    interests: ["city", "books", "coffee", "cinema", "business"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Привет.", "Как ты обычно проводишь вечер?"],
    starterMessagesEn: ["Hi.", "How do you usually spend your evening?"],
  },
  {
    id: 9,
    name: "Mia",
    age: 23,
    gender: "female",
    city: "Milan",
    country: "Italy",
    distanceMi: 101,
    online: true,
    zodiac: "♍",
    verified: false,
    heightCm: 166,
    relationshipStatus: "single",
    lookingFor: "casual",
    bio: "Люблю стиль, путешествия, вкусную еду и лёгкое живое общение. Мне нравятся уверенные и внимательные люди.",
    bioEn:
      "I love style, travel, good food and easy lively conversation. I like confident and attentive people.",
    interests: ["style", "food", "travel", "photos", "shopping"],
    avatar: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Очень приятно 🌷", "Какой у тебя любимый город?"],
    starterMessagesEn: ["Nice to meet you 🌷", "What is your favorite city?"],
  },
  {
    id: 10,
    name: "Ethan",
    age: 27,
    gender: "male",
    city: "Moscow",
    country: "Russia",
    distanceMi: 123,
    online: false,
    zodiac: "♈",
    verified: true,
    heightCm: 183,
    relationshipStatus: "single",
    lookingFor: "serious",
    bio: "Люблю атмосферные места, искусство, поездки и интересные разговоры. Стараюсь жить со вкусом и без лишней суеты.",
    bioEn:
      "I love atmospheric places, art, trips and interesting conversations. I try to live with taste and without unnecessary rush.",
    interests: ["art", "travel", "music", "architecture", "coffee"],
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Привет, рад знакомству.", "Что тебя вдохновляет?"],
    starterMessagesEn: ["Hi, nice to meet you.", "What inspires you?"],
  },
];

function Badge() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "#3ea6ff",
        color: "#fff",
        fontSize: 12,
        fontWeight: 900,
        marginLeft: 6,
        flexShrink: 0,
      }}
    >
      ✓
    </span>
  );
}

function App() {
  const [lang, setLang] = useState("ru");
  const t = tr[lang];

  const [tab, setTab] = useState("home");
  const [profiles] = useState(initialProfiles);
  const [messageView, setMessageView] = useState("matches");
  const [matches, setMatches] = useState([1]);
  const [likedYouIds] = useState([2, 4, 7]);
  const [guestIds] = useState([3, 1, 8]);
  const [swipedIds, setSwipedIds] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [chatDraft, setChatDraft] = useState("");
  const [showMatch, setShowMatch] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState(null);
  const [savedProfileLabel, setSavedProfileLabel] = useState(false);
  const [likePulse, setLikePulse] = useState(false);
  const [skipPulse, setSkipPulse] = useState(false);
  const [actionNotice, setActionNotice] = useState("");
  const [reportModal, setReportModal] = useState({ open: false, profile: null, reason: "spam" });

  const profilePageRef = useRef(null);

  const [settings, setSettings] = useState({
    searchMode: "nearby",
    country: "All",
    city: "All",
    maxDistance: 5000,
    unit: "mi",
    ageFrom: 18,
    ageTo: 60,
    gender: "all",
  });

  const [draftSettings, setDraftSettings] = useState({
    searchMode: "nearby",
    country: "All",
    city: "All",
    maxDistance: 5000,
    unit: "mi",
    ageFrom: 18,
    ageTo: 60,
    gender: "all",
  });

  const [messages, setMessages] = useState({
    1: [
      { from: "them", text: "Привет 😊 Рада взаимной симпатии.", textEn: "Hi 😊 Glad we matched." },
      { from: "them", text: "Как проходит твой день?", textEn: "How is your day going?" },
    ],
  });

  const [myProfile, setMyProfile] = useState({
    name: "Aleksei",
    age: 37,
    city: "Los Angeles",
    country: "USA",
    zodiac: "♌",
    verified: true,
    bio: "Люблю живое общение, красивые места, музыку и интересные знакомства.",
    bioEn: "I love real conversations, beautiful places, music and interesting connections.",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    ],
  });

  const [editProfile, setEditProfile] = useState(false);
  const [profileDraft, setProfileDraft] = useState(myProfile);

  const countries = useMemo(() => ["All", ...Object.keys(countriesMap)], []);
  const cityOptions = useMemo(() => {
    if (draftSettings.country === "All") return ["All"];
    return ["All", ...(countriesMap[draftSettings.country] || [])];
  }, [draftSettings.country]);

  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      const distanceValue = settings.unit === "mi" ? p.distanceMi : Math.round(p.distanceMi * 1.60934);
      if (settings.searchMode === "nearby" && distanceValue > settings.maxDistance) return false;
      if (settings.country !== "All" && p.country !== settings.country) return false;
      if (settings.city !== "All" && p.city !== settings.city) return false;
      if (p.age < settings.ageFrom || p.age > settings.ageTo) return false;
      if (settings.gender !== "all" && p.gender !== settings.gender) return false;
      return true;
    });
  }, [profiles, settings]);

  const deckProfiles = useMemo(
    () => filteredProfiles.filter((p) => !swipedIds.includes(p.id)),
    [filteredProfiles, swipedIds]
  );

  const activeProfile = deckProfiles[0] || null;
  const selectedChatProfile = profiles.find((p) => p.id === selectedChatId) || null;

  useEffect(() => {
    if (profilePageRef.current) profilePageRef.current.scrollTop = 0;
  }, [activeProfile?.id]);

  useEffect(() => {
    if (matches.length && !matches.includes(selectedChatId)) setSelectedChatId(matches[0]);
  }, [matches, selectedChatId]);

  useEffect(() => {
    if (!actionNotice) return;
    const timer = setTimeout(() => setActionNotice(""), 1600);
    return () => clearTimeout(timer);
  }, [actionNotice]);

  const labelForRelationship = (value) => t[value] || value;
  const labelForLookingFor = (value) => t[value] || value;

  const ensureMessages = (profile) => {
    setMessages((prev) => {
      if (prev[profile.id]) return prev;
      return {
        ...prev,
        [profile.id]: (profile.starterMessagesRu || []).map((text, i) => ({
          from: "them",
          text,
          textEn: profile.starterMessagesEn?.[i] || text,
        })),
      };
    });
  };

  const markSwiped = (id) => {
    setSwipedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleLike = (profile) => {
    if (!profile) return;
    setLikePulse(true);
    setTimeout(() => setLikePulse(false), 260);

    const makeMatch = [1, 2, 3, 5].includes(profile.id);
    markSwiped(profile.id);

    if (makeMatch) {
      setMatches((prev) => (prev.includes(profile.id) ? prev : [...prev, profile.id]));
      ensureMessages(profile);
      setMatchedProfile(profile);
      setShowMatch(true);
      setSelectedChatId(profile.id);
      setMessageView("matches");
    }
  };

  const handleSkip = (profile) => {
    if (!profile) return;
    setSkipPulse(true);
    setTimeout(() => setSkipPulse(false), 260);
    markSwiped(profile.id);
  };

  const handleBlockProfile = (profile) => {
    if (!profile) return;
    setActionNotice(t.profileBlocked);
    markSwiped(profile.id);
  };

  const confirmReport = () => {
    if (!reportModal.profile) return;
    setActionNotice(t.profileReported);
    markSwiped(reportModal.profile.id);
    setReportModal({ open: false, profile: null, reason: "spam" });
  };

  const restartDeck = () => {
    setSwipedIds([]);
    if (profilePageRef.current) profilePageRef.current.scrollTop = 0;
  };

  const sendMessage = () => {
    if (!selectedChatId || !chatDraft.trim() || !matches.includes(selectedChatId)) return;
    setMessages((prev) => ({
      ...prev,
      [selectedChatId]: [
        ...(prev[selectedChatId] || []),
        { from: "me", text: chatDraft.trim(), textEn: chatDraft.trim() },
      ],
    }));
    setChatDraft("");
  };

  const applyFilters = () => {
    setSettings(draftSettings);
    setSwipedIds([]);
    setShowFilters(false);
  };

  const resetFilters = () => {
    const reset = {
      searchMode: "nearby",
      country: "All",
      city: "All",
      maxDistance: 5000,
      unit: "mi",
      ageFrom: 18,
      ageTo: 60,
      gender: "all",
    };
    setDraftSettings(reset);
    setSettings(reset);
    setSwipedIds([]);
  };

  const handleProfilePhotoUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const urls = files.map((f) => URL.createObjectURL(f));
    setProfileDraft((prev) => ({ ...prev, photos: [...prev.photos, ...urls] }));
  };

  const saveProfile = () => {
    setMyProfile(profileDraft);
    setEditProfile(false);
    setSavedProfileLabel(true);
    setTimeout(() => setSavedProfileLabel(false), 1400);
  };

  const openChatFromProfile = (id) => {
    if (!matches.includes(id)) return;
    setSelectedChatId(id);
    setMessageView("matches");
    setTab("messages");
  };

  const listProfiles =
    messageView === "matches"
      ? profiles.filter((p) => matches.includes(p.id))
      : messageView === "liked"
      ? profiles.filter((p) => likedYouIds.includes(p.id))
      : profiles.filter((p) => guestIds.includes(p.id));

  return (
    <div className="app-shell">
      <style>{`
        *{box-sizing:border-box}
        html,body,#root{
          margin:0;padding:0;min-height:100%;
          font-family:Inter,Arial,sans-serif;
          background:
            radial-gradient(circle at top left, rgba(255,105,145,.12), transparent 24%),
            radial-gradient(circle at top right, rgba(255,186,190,.14), transparent 28%),
            linear-gradient(180deg,#fff8fb 0%,#f8f5fb 100%);
          color:#231b2e
        }
        body{overflow-x:hidden}
        button,input,select,textarea{font-family:inherit}
        .app-shell{min-height:100vh}
        .page{max-width:1380px;margin:0 auto;padding:18px 16px 100px}
        .topbar,.panel{
          background:rgba(255,255,255,.84);
          backdrop-filter:blur(14px);
          box-shadow:0 12px 30px rgba(36,20,48,.06)
        }
        .topbar{
          display:flex;justify-content:space-between;align-items:center;gap:14px;
          padding:14px 18px;border-radius:24px;margin-bottom:18px;position:sticky;top:10px;z-index:50
        }
        .brand-wrap{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
        .brand{font-size:22px;font-weight:900;color:#ff5f8f}
        .lang-switch,.hero-actions,.filter-actions,.segmented,.mutual-actions{display:flex;gap:10px;flex-wrap:wrap}
        .chip-btn,.nav-btn,.primary-btn,.secondary-btn,.ghost-btn,.round-btn,.danger-btn{
          border:none;cursor:pointer;transition:.2s ease;font-weight:800
        }
        .chip-btn,.nav-btn{
          border-radius:999px;padding:10px 14px;background:#f1edf4;color:#2b2335
        }
        .chip-btn.active,.nav-btn.active,.primary-btn{
          background:linear-gradient(135deg,#ff5f8f,#ff8a6b);
          color:#fff;
          box-shadow:0 12px 22px rgba(255,95,143,.24)
        }
        .primary-btn,.secondary-btn,.ghost-btn,.danger-btn{
          border-radius:16px;
          padding:13px 18px;
          font-size:14px
        }
        .secondary-btn{background:#f3eef6;color:#2b2335}
        .ghost-btn{
          background:rgba(255,255,255,.16);
          color:#fff;
          border:1px solid rgba(255,255,255,.28)
        }
        .danger-btn{background:#fff0f3;color:#d63e68}
        .nav{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}
        .nav-btn{padding:12px 16px;font-size:14px}
        .mobile-tabs{display:none}
        .panel{border-radius:28px;padding:22px}
        .hero{display:grid;grid-template-columns:1.15fr .95fr;gap:20px;margin-bottom:22px}
        .hero-title,.section-title{
          margin:0 0 12px;font-size:clamp(34px,5vw,68px);line-height:.95;font-weight:900;letter-spacing:-1.6px
        }
        .hero-text,.section-subtitle,.muted{font-size:17px;line-height:1.55;color:#655a70}
        .hero-preview{
          min-height:520px;border-radius:32px;overflow:hidden;position:relative;
          box-shadow:0 24px 40px rgba(22,11,30,.12)
        }
        .hero-preview img,.profile-photo-grid img,.list-item img,.chat-item img,.profile-avatar img,.profile-photo{
          display:block;object-fit:cover
        }
        .hero-preview img{width:100%;height:100%}
        .preview-overlay{
          position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;
          padding:22px;color:#fff;background:linear-gradient(180deg,rgba(0,0,0,.06),rgba(0,0,0,.64))
        }
        .preview-name{margin:0 0 6px;font-size:clamp(28px,4vw,46px);font-weight:900}
        .preview-bio{margin:0;max-width:88%}
        .quick-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .quick-num{
          width:46px;height:46px;border-radius:16px;display:inline-flex;align-items:center;justify-content:center;
          background:linear-gradient(135deg,#ff5f8f,#ff8a6b);color:#fff;font-weight:900;margin-bottom:14px
        }
        .search-top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px}
        .search-wrap{display:grid;grid-template-columns:minmax(0,1fr);gap:16px}
        .deck-wrap{display:flex;justify-content:center;align-items:flex-start;min-height:78vh}

        .vertical-card{
          width:100%;
          max-width:520px;
          height:min(86vh,820px);
          border-radius:34px;
          overflow:hidden;
          position:relative;
          background:#f9f7fb;
          box-shadow:0 30px 60px rgba(25,10,38,.14);
          border:1px solid rgba(255,255,255,.5);
        }
        .vertical-scroll{
          position:absolute;inset:0;
          overflow-y:auto;
          padding-bottom:160px;
          scroll-behavior:smooth;
        }
        .vertical-scroll::-webkit-scrollbar{width:8px}
        .vertical-scroll::-webkit-scrollbar-thumb{background:rgba(120,100,140,.18);border-radius:999px}
        .profile-hero{
          position:relative;
          padding:14px 14px 0;
        }
        .top-sticky{
          position:sticky;
          top:0;
          z-index:7;
          padding:14px 14px 10px;
          background:linear-gradient(180deg, rgba(249,247,251,.95), rgba(249,247,251,.82));
          backdrop-filter:blur(14px);
          border-bottom:1px solid rgba(100,80,120,.08);
        }
        .top-sticky-inner{
          display:flex;align-items:flex-start;justify-content:space-between;gap:12px
        }
        .profile-main{
          min-width:0;
        }
        .profile-main-title{
          margin:0;
          font-size:28px;
          line-height:1;
          font-weight:900;
          display:flex;
          align-items:center;
          gap:6px;
          flex-wrap:wrap;
        }
        .profile-sub{
          margin:7px 0 0;
          color:#655a70;
          font-weight:800;
          font-size:14px;
        }
        .premium-tag{
          display:inline-flex;align-items:center;justify-content:center;
          padding:6px 10px;border-radius:999px;font-size:11px;font-weight:900;
          background:linear-gradient(135deg,#ff5f8f,#ff8a6b);color:#fff;
          white-space:nowrap;
        }
        .counter-pill{
          padding:9px 12px;border-radius:999px;background:#f2edf6;color:#4b3f58;font-size:12px;font-weight:900;white-space:nowrap
        }

        .section-card{
          margin:14px;
          background:#fff;
          border-radius:28px;
          overflow:hidden;
          box-shadow:0 14px 30px rgba(30,15,40,.08);
          border:1px solid rgba(100,80,120,.06);
        }
        .section-header{
          padding:16px 18px 0;
          font-size:13px;
          font-weight:900;
          letter-spacing:.08em;
          color:#8a7f95;
          text-transform:uppercase;
        }
        .photo-block{
          padding:14px;
        }
        .profile-photo{
          width:100%;
          height:380px;
          border-radius:24px;
          background:#f0edf3;
        }
        .photo-meta{
          display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:10px
        }
        .photo-count,.distance-chip{
          padding:8px 12px;border-radius:999px;background:#f4eef7;color:#4f445a;font-size:12px;font-weight:900
        }

        .info-grid{
          display:grid;
          gap:12px;
          padding:14px 18px 18px;
        }
        .info-item{
          display:flex;justify-content:space-between;gap:14px;
          padding:14px 0;border-bottom:1px solid rgba(100,80,120,.08)
        }
        .info-item:last-child{border-bottom:none}
        .info-label{font-weight:900;color:#3f344a}
        .info-value{color:#6a6076;text-align:right}
        .bio-text{
          padding:4px 18px 18px;
          color:#665b70;
          line-height:1.62;
          font-size:15px;
        }
        .chip-row{
          display:flex;gap:8px;flex-wrap:wrap;padding:0 18px 18px
        }
        .interest{
          padding:8px 12px;border-radius:999px;background:#f5eff7;
          font-size:13px;font-weight:800;color:#52475e
        }

        .danger-area{
          display:grid;
          gap:12px;
          padding:0 18px 20px;
        }

        .fixed-actions{
          position:absolute;
          left:14px;
          right:14px;
          bottom:14px;
          z-index:9;
          display:flex;
          justify-content:center;
          pointer-events:none;
        }
        .fixed-actions-inner{
          display:flex;gap:16px;padding:10px 12px;border-radius:999px;
          background:rgba(18,14,26,.58);backdrop-filter:blur(14px);
          border:1px solid rgba(255,255,255,.14);
          box-shadow:0 16px 30px rgba(18,9,26,.20);
          pointer-events:auto;
        }
        .round-btn{
          width:74px;height:74px;border-radius:26px;font-size:28px;
          box-shadow:0 16px 30px rgba(20,10,28,.14);
          transform:scale(1)
        }
        .round-btn.skip{background:linear-gradient(135deg,#eef0ff,#dfe5ff);color:#4f5acb}
        .round-btn.like{background:linear-gradient(135deg,#ff5f8f,#ff8a6b);color:#fff}
        .round-btn:hover{transform:translateY(-1px) scale(1.02)}
        .round-btn:active{transform:scale(.94)}
        .round-btn.pop{transform:scale(1.08);box-shadow:0 20px 36px rgba(255,95,143,.24)}

        .choice-note{
          margin:0 14px 14px;
          padding:13px 16px;
          border-radius:18px;
          background:#fff4f7;
          color:#8a5870;
          font-size:13px;
          font-weight:800;
          text-align:center;
        }

        .notice{
          position:fixed;
          top:20px;
          left:50%;
          transform:translateX(-50%);
          z-index:120;
          padding:12px 16px;
          border-radius:999px;
          background:#1f1727;
          color:#fff;
          font-size:14px;
          font-weight:900;
          box-shadow:0 12px 24px rgba(24,10,34,.22);
        }

        .empty{
          min-height:320px;display:flex;flex-direction:column;align-items:center;justify-content:center;
          text-align:center;color:#665b70;gap:10px
        }
        .messages-layout,.profile-layout,.settings-layout{display:grid;gap:16px}
        .messages-layout{grid-template-columns:220px minmax(0,1fr);min-height:620px}
        .profile-layout{grid-template-columns:320px minmax(0,1fr)}
        .settings-layout{grid-template-columns:360px minmax(0,1fr)}
        .list-grid{display:grid;gap:12px}
        .list-item,.chat-item{
          display:flex;align-items:center;gap:12px;padding:12px;border-radius:20px;background:#f8f5fa
        }
        .list-item img{width:58px;height:58px;border-radius:18px;flex-shrink:0}
        .chat-item{cursor:pointer}
        .chat-item.active{
          background:linear-gradient(135deg,rgba(255,95,143,.11),rgba(255,139,110,.11));
          border:1px solid rgba(255,95,143,.12)
        }
        .chat-item img{width:42px;height:42px;border-radius:50%;flex-shrink:0}
        .item-title{font-size:16px;font-weight:900;margin:0 0 2px;display:flex;align-items:center;flex-wrap:wrap}
        .item-sub{font-size:13px;color:#6a6076;margin:0}
        .message-panel{display:grid;grid-template-rows:auto 1fr auto;min-height:620px}
        .message-header{
          display:flex;align-items:center;gap:12px;padding-bottom:14px;border-bottom:1px solid rgba(100,80,120,.08)
        }
        .message-header img{width:56px;height:56px;border-radius:50%}
        .message-body{padding:18px 2px 18px 0;overflow:auto;display:flex;flex-direction:column;gap:12px}
        .bubble{max-width:78%;padding:13px 16px;border-radius:20px;font-size:15px;line-height:1.45}
        .bubble.them{align-self:flex-start;background:#f1edf4;color:#2b2235}
        .bubble.me{align-self:flex-end;background:linear-gradient(135deg,#ff5f8f,#ff8b6e);color:#fff}
        .message-input-row{
          display:flex;gap:10px;padding-top:14px;border-top:1px solid rgba(100,80,120,.08)
        }
        .message-input-row input,.field input,.field select,.field textarea{
          width:100%;border-radius:16px;border:1px solid rgba(95,80,110,.12);
          background:#fcfbfd;padding:14px 15px;font-size:15px;outline:none;font-family:inherit
        }
        .field{display:grid;gap:8px}
        .field label{font-size:14px;font-weight:800;color:#544a60}
        .field-group,.help-grid,.info-list{display:grid;gap:14px}
        .two-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
        .profile-avatar{text-align:center}
        .profile-avatar img{width:180px;height:180px;border-radius:50%;margin-bottom:14px}
        .profile-main-name{margin:0;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap}
        .profile-photo-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;margin-top:12px}
        .profile-photo-grid img{width:100%;height:170px;border-radius:18px}
        .info-row{
          display:flex;justify-content:space-between;gap:12px;padding:14px 0;border-bottom:1px solid rgba(100,80,120,.08)
        }
        .help-item{padding:18px;border-radius:20px;background:#faf7fc}
        .mutual-modal,.overlay-modal{
          position:fixed;inset:0;background:rgba(20,8,30,.45);display:flex;align-items:center;justify-content:center;
          padding:18px;z-index:100
        }
        .mutual-box,.modal-box{
          width:min(520px,100%);border-radius:30px;padding:28px;background:#fff;
          box-shadow:0 24px 50px rgba(25,10,35,.26)
        }
        .mutual-box{
          background:linear-gradient(135deg,#ff5f8f 0%,#ff8b6e 100%);
          color:#fff;text-align:center
        }
        .mutual-avatars{display:flex;justify-content:center;align-items:center;gap:14px;margin:16px 0 22px}
        .mutual-avatars img{
          width:94px;height:94px;border-radius:50%;object-fit:cover;border:4px solid rgba(255,255,255,.5)
        }
        .heart{font-size:34px}
        .modal-title{margin:0 0 14px;font-size:28px;font-weight:900}
        .modal-sub{margin:0 0 16px;color:#6a6076}
        .reason-list{display:grid;gap:10px;margin-bottom:18px}
        .reason-btn{
          padding:14px 16px;border-radius:18px;border:1px solid rgba(95,80,110,.12);
          background:#faf8fc;color:#2b2335;text-align:left;font-weight:800;cursor:pointer
        }
        .reason-btn.active{
          border-color:#ff7ca0;
          background:#fff1f5;
          color:#d94370;
        }
        .phone-bottom-nav{display:none}

        @media (max-width:1120px){
          .hero,.profile-layout,.settings-layout{grid-template-columns:1fr}
          .quick-grid{grid-template-columns:1fr}
        }
        @media (max-width:760px){
          .page{padding:12px 12px 98px}
          .topbar{position:static;flex-direction:column;align-items:flex-start;padding:14px}
          .nav{display:none}
          .mobile-tabs{
            display:flex;gap:10px;overflow:auto;padding:2px 2px 4px;margin-bottom:14px;scrollbar-width:none
          }
          .mobile-tabs::-webkit-scrollbar{display:none}
          .mobile-tabs .nav-btn{flex:0 0 auto}
          .panel{padding:18px;border-radius:24px}
          .hero{grid-template-columns:1fr}
          .messages-layout{grid-template-columns:110px minmax(0,1fr);gap:12px}
          .chat-item{
            flex-direction:column;align-items:center;text-align:center;padding:10px 6px;border-radius:18px;gap:8px
          }
          .chat-item img{width:38px;height:38px}
          .item-title{font-size:12px;justify-content:center}
          .item-sub{font-size:11px}
          .vertical-card{max-width:100%;height:min(84vh,760px);border-radius:28px}
          .profile-main-title{font-size:23px}
          .profile-photo{height:300px;border-radius:20px}
          .round-btn{width:68px;height:68px;border-radius:22px}
          .two-col{grid-template-columns:1fr}
          .phone-bottom-nav{
            position:fixed;left:10px;right:10px;bottom:10px;display:grid;grid-template-columns:repeat(5,1fr);
            gap:8px;padding:8px;border-radius:22px;background:rgba(255,255,255,.92);backdrop-filter:blur(14px);
            box-shadow:0 16px 34px rgba(29,14,40,.12);z-index:60
          }
          .phone-tab-btn{
            border:none;background:transparent;padding:9px 4px;border-radius:16px;font-size:11px;font-weight:900;
            color:#5b5066;line-height:1.15
          }
          .phone-tab-btn.active{background:linear-gradient(135deg,#ff5f8f,#ff8b6e);color:#fff}
        }
      `}</style>

      {actionNotice ? <div className="notice">{actionNotice}</div> : null}

      <div className="page">
        <header className="topbar">
          <div className="brand-wrap">
            <div className="brand">{t.brand}</div>
            <div className="lang-switch">
              <button className={`chip-btn ${lang === "ru" ? "active" : ""}`} onClick={() => setLang("ru")}>RU</button>
              <button className={`chip-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
            </div>
          </div>

          <nav className="nav">
            <button className={`nav-btn ${tab === "home" ? "active" : ""}`} onClick={() => setTab("home")}>{t.home}</button>
            <button className={`nav-btn ${tab === "search" ? "active" : ""}`} onClick={() => setTab("search")}>{t.search}</button>
            <button className={`nav-btn ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>{t.messages}</button>
            <button className={`nav-btn ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>{t.profile}</button>
            <button className={`nav-btn ${tab === "settings" ? "active" : ""}`} onClick={() => setTab("settings")}>{t.settings}</button>
          </nav>
        </header>

        <div className="mobile-tabs">
          <button className={`nav-btn ${tab === "home" ? "active" : ""}`} onClick={() => setTab("home")}>{t.home}</button>
          <button className={`nav-btn ${tab === "search" ? "active" : ""}`} onClick={() => setTab("search")}>{t.search}</button>
          <button className={`nav-btn ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>{t.messages}</button>
          <button className={`nav-btn ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>{t.profile}</button>
          <button className={`nav-btn ${tab === "settings" ? "active" : ""}`} onClick={() => setTab("settings")}>{t.settings}</button>
        </div>

        {tab === "home" && (
          <>
            <section className="hero">
              <div className="panel">
                <h1 className="hero-title">{t.heroTitle}</h1>
                <p className="hero-text">{t.heroText}</p>
                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => setTab("search")}>{t.heroPrimary}</button>
                  <button className="secondary-btn" onClick={() => setTab("messages")}>{t.heroSecondary}</button>
                </div>
              </div>

              <div className="hero-preview">
                <img src={profiles[0].photos[0]} alt={profiles[0].name} />
                <div className="preview-overlay">
                  <h2 className="preview-name">
                    {profiles[0].name}, {profiles[0].age} {profiles[0].zodiac}
                    {profiles[0].verified && <Badge />}
                  </h2>
                  <p className="preview-bio">{lang === "ru" ? profiles[0].bio : profiles[0].bioEn}</p>
                </div>
              </div>
            </section>

            <section className="quick-grid">
              <div className="panel"><div className="quick-num">1</div><h3>{t.card1}</h3><p className="muted">{t.card1t}</p></div>
              <div className="panel"><div className="quick-num">2</div><h3>{t.card2}</h3><p className="muted">{t.card2t}</p></div>
              <div className="panel"><div className="quick-num">3</div><h3>{t.card3}</h3><p className="muted">{t.card3t}</p></div>
            </section>
          </>
        )}

        {tab === "search" && (
          <>
            <h2 className="section-title">{t.searchTitle}</h2>
            <div className="search-top">
              <button className="secondary-btn" onClick={() => setShowFilters((v) => !v)}>
                ⚙️ {t.filters}
              </button>
              <div className="muted">{deckProfiles.length}</div>
            </div>

            {showFilters && (
              <section className="panel" style={{ marginBottom: 16 }}>
                <div className="field-group">
                  <div className="two-col">
                    <div className="field">
                      <label>{t.mode}</label>
                      <select value={draftSettings.searchMode} onChange={(e) => setDraftSettings((p) => ({ ...p, searchMode: e.target.value }))}>
                        <option value="nearby">{t.nearby}</option>
                        <option value="all">{t.all}</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>{t.gender}</label>
                      <select value={draftSettings.gender} onChange={(e) => setDraftSettings((p) => ({ ...p, gender: e.target.value }))}>
                        <option value="all">{t.all}</option>
                        <option value="male">{t.men}</option>
                        <option value="female">{t.women}</option>
                      </select>
                    </div>
                  </div>

                  <div className="two-col">
                    <div className="field">
                      <label>{t.country}</label>
                      <select
                        value={draftSettings.country}
                        onChange={(e) =>
                          setDraftSettings((p) => ({ ...p, country: e.target.value, city: "All" }))
                        }
                      >
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country === "All" ? t.allLocations : country}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="field">
                      <label>{t.city}</label>
                      <select value={draftSettings.city} onChange={(e) => setDraftSettings((p) => ({ ...p, city: e.target.value }))}>
                        {cityOptions.map((city) => (
                          <option key={city} value={city}>
                            {city === "All" ? t.allLocations : city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="two-col">
                    <div className="field">
                      <label>{t.ageFrom}</label>
                      <input type="number" value={draftSettings.ageFrom} onChange={(e) => setDraftSettings((p) => ({ ...p, ageFrom: Number(e.target.value || 18) }))} />
                    </div>
                    <div className="field">
                      <label>{t.ageTo}</label>
                      <input type="number" value={draftSettings.ageTo} onChange={(e) => setDraftSettings((p) => ({ ...p, ageTo: Number(e.target.value || 60) }))} />
                    </div>
                  </div>

                  <div className="two-col">
                    <div className="field">
                      <label>{t.unit}</label>
                      <select value={draftSettings.unit} onChange={(e) => setDraftSettings((p) => ({ ...p, unit: e.target.value }))}>
                        <option value="mi">{t.miles}</option>
                        <option value="km">{t.km}</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>{t.distance}</label>
                      <input type="range" min="1" max="5000" value={draftSettings.maxDistance} onChange={(e) => setDraftSettings((p) => ({ ...p, maxDistance: Number(e.target.value) }))} />
                      <div className="muted">{draftSettings.maxDistance} {draftSettings.unit === "mi" ? t.miles : t.km}</div>
                    </div>
                  </div>

                  <div className="filter-actions">
                    <button className="primary-btn" onClick={applyFilters}>{t.apply}</button>
                    <button className="secondary-btn" onClick={resetFilters}>{t.reset}</button>
                  </div>
                </div>
              </section>
            )}

            <section className="search-wrap">
              <div className="panel">
                {activeProfile ? (
                  <div className="deck-wrap">
                    <div className="vertical-card">
                      <div className="top-sticky">
                        <div className="top-sticky-inner">
                          <div className="profile-main">
                            <h3 className="profile-main-title">
                              {activeProfile.name}, {activeProfile.age} {activeProfile.zodiac}
                              {activeProfile.verified && <Badge />}
                            </h3>
                            <p className="profile-sub">
                              {activeProfile.city}, {activeProfile.country} • {activeProfile.online ? t.online : t.offline}
                            </p>
                          </div>
                          <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
                            <div className="premium-tag">{t.premium}</div>
                            <div className="counter-pill">{deckProfiles.length}</div>
                          </div>
                        </div>
                      </div>

                      <div ref={profilePageRef} className="vertical-scroll">
                        <div className="choice-note">{t.nextAfterChoice}</div>

                        {activeProfile.photos.map((photo, idx) => (
                          <div key={idx} className="section-card">
                            <div className="section-header">{t.gallerySection} {idx + 1}</div>
                            <div className="photo-block">
                              <img className="profile-photo" src={photo} alt={`${activeProfile.name}-${idx + 1}`} />
                              <div className="photo-meta">
                                <div className="photo-count">{idx + 1} / {activeProfile.photos.length} {t.photosCount}</div>
                                <div className="distance-chip">
                                  {settings.unit === "mi"
                                    ? `${activeProfile.distanceMi} ${t.miles}`
                                    : `${Math.round(activeProfile.distanceMi * 1.60934)} ${t.km}`}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="section-card">
                          <div className="section-header">{t.infoSection}</div>
                          <div className="info-grid">
                            <div className="info-item">
                              <div className="info-label">{t.location}</div>
                              <div className="info-value">{activeProfile.city}, {activeProfile.country}</div>
                            </div>
                            <div className="info-item">
                              <div className="info-label">{t.lookingFor}</div>
                              <div className="info-value">{labelForLookingFor(activeProfile.lookingFor)}</div>
                            </div>
                            <div className="info-item">
                              <div className="info-label">{t.height}</div>
                              <div className="info-value">{activeProfile.heightCm} cm</div>
                            </div>
                            <div className="info-item">
                              <div className="info-label">{t.relationship}</div>
                              <div className="info-value">{labelForRelationship(activeProfile.relationshipStatus)}</div>
                            </div>
                            <div className="info-item">
                              <div className="info-label">{t.age}</div>
                              <div className="info-value">{activeProfile.age}</div>
