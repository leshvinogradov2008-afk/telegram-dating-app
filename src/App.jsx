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
      "Смотри полный профиль в вертикальном формате, листай фото и информацию, используй удобный поиск и общайся только после взаимной симпатии.",
    heroPrimary: "Начать поиск",
    heroSecondary: "Открыть сообщения",

    card1: "Полный профиль",
    card1t: "Каждая анкета открывается как отдельная вертикальная страница без наложения текста на фото.",
    card2: "Удобный поиск",
    card2t: "Фильтры по стране, городу, возрасту, полу и дистанции.",
    card3: "Выбор в любой момент",
    card3t: "Кнопки лайка и дизлайка закреплены внизу на протяжении всей анкеты.",

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
    help1: "Как работает просмотр анкеты?",
    help1t:
      "Профиль открывается как вертикальная страница. Листай вниз, чтобы смотреть фото и информацию. Следующая анкета появляется только после лайка или дизлайка.",
    help2: "Когда можно написать человеку?",
    help2t: "Только после взаимной симпатии. Без мэтча чат недоступен.",
    help3: "Что можно увидеть в анкете?",
    help3t:
      "Местоположение, кого ищет человек, рост, семейное положение, возраст, знак зодиака, увлечения и фото в развернутом виде.",

    mutualTitle: "Взаимная симпатия!",
    mutualText: "Теперь вы можете начать общение.",
    startChat: "Начать чат",
    continue: "Продолжить",

    years: "лет",
    photosCount: "фото",
    premium: "PREMIUM",

    lookingFor: "Кого ищет",
    location: "Местоположение",
    height: "Рост",
    relationshipStatus: "Семейное положение",
    interests: "Интересы",
    report: "Пожаловаться",
    block: "Заблокировать",
    blocked: "Профиль заблокирован",
    reported: "Жалоба отправлена",
    statusSingle: "Не женат / не замужем",
    statusDivorced: "В разводе",
    statusOpen: "Свободен(на)",
    statusComplicated: "Все сложно",

    footerHint: "Следующая анкета откроется только после лайка или дизлайка.",
    reportReason: "Жалоба отправлена. Профиль будет проверен.",
    blockReason: "Профиль скрыт из поиска.",
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
      "Browse a full vertical profile, scroll through photos and information, use smart search and chat only after a mutual match.",
    heroPrimary: "Start search",
    heroSecondary: "Open messages",

    card1: "Full profile",
    card1t: "Each profile opens as a separate vertical page without text covering the photos.",
    card2: "Smart search",
    card2t: "Filters by country, city, age, gender and distance.",
    card3: "Choose anytime",
    card3t: "Like and dislike buttons stay fixed at the bottom during the whole profile view.",

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
    help1: "How does profile browsing work?",
    help1t:
      "A profile opens as a vertical page. Scroll down to view photos and information. The next profile appears only after like or dislike.",
    help2: "When can I message someone?",
    help2t: "Only after a mutual match. No chat is available before that.",
    help3: "What can I see in a profile?",
    help3t:
      "Location, who the person is looking for, height, relationship status, age, zodiac sign, interests, and photos in a full expanded view.",

    mutualTitle: "It's a match!",
    mutualText: "Now you can start chatting.",
    startChat: "Start chat",
    continue: "Continue",

    years: "years",
    photosCount: "photos",
    premium: "PREMIUM",

    lookingFor: "Looking for",
    location: "Location",
    height: "Height",
    relationshipStatus: "Relationship status",
    interests: "Interests",
    report: "Report",
    block: "Block",
    blocked: "Profile blocked",
    reported: "Report sent",
    statusSingle: "Single",
    statusDivorced: "Divorced",
    statusOpen: "Open to relationship",
    statusComplicated: "It's complicated",

    footerHint: "The next profile opens only after like or dislike.",
    reportReason: "Report sent. The profile will be reviewed.",
    blockReason: "The profile has been hidden from search.",
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
  ],
  Russia: [
    "Moscow",
    "Saint Petersburg",
    "Novosibirsk",
    "Yekaterinburg",
    "Kazan",
    "Nizhny Novgorod",
    "Sochi",
    "Krasnodar",
    "Rostov-on-Don",
    "Samara",
  ],
  Canada: ["Toronto", "Vancouver", "Montreal", "Calgary"],
  UK: ["London", "Manchester", "Birmingham", "Liverpool"],
  Germany: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
  France: ["Paris", "Lyon", "Marseille", "Nice"],
  Spain: ["Madrid", "Barcelona", "Valencia", "Seville"],
  Italy: ["Rome", "Milan", "Naples", "Florence"],
  Poland: ["Warsaw", "Krakow", "Gdansk", "Wroclaw"],
  Ukraine: ["Kyiv", "Lviv", "Odesa", "Dnipro"],
  Turkey: ["Istanbul", "Antalya", "Ankara", "Izmir"],
  UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
  Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
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
    lookingFor: "Серьёзные отношения",
    lookingForEn: "Serious relationship",
    height: "170 см",
    heightEn: "5'7\"",
    relationshipStatus: "statusSingle",
    bio: "Люблю красивые места, музыку, кофе, поездки и лёгкое общение. Ценю стиль, хорошую энергетику и людей, с которыми интересно и легко.",
    bioEn: "I love beautiful places, music, coffee, trips and easy conversations. I appreciate style, good energy and people who are interesting and easy to be around.",
    interests: ["music", "travel", "coffee", "sunsets", "fashion"],
    zodiac: "♎",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
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
    lookingFor: "Общение и встречи",
    lookingForEn: "Dating and chemistry",
    height: "168 см",
    heightEn: "5'6\"",
    relationshipStatus: "statusOpen",
    bio: "Люблю прогулки у океана, кофе, вечерние огни и тёплые разговоры. Мне нравятся красивые детали и лёгкая романтика.",
    bioEn: "I love ocean walks, coffee, city lights and warm conversations. I enjoy beautiful details and soft romance.",
    interests: ["ocean", "coffee", "night walks", "beach", "photos"],
    zodiac: "♌",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
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
    lookingFor: "Серьёзные отношения",
    lookingForEn: "Serious relationship",
    height: "183 см",
    heightEn: "6'0\"",
    relationshipStatus: "statusSingle",
    bio: "Ценю юмор, спорт, хорошие фильмы и настоящие эмоции. Люблю уверенное, живое общение и людей с характером.",
    bioEn: "I value humor, sports, good movies and real emotions. I like confident, genuine communication and people with character.",
    interests: ["sport", "movies", "humor", "fitness", "city life"],
    zodiac: "♐",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
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
    lookingFor: "Общение и свидания",
    lookingForEn: "Dating and connection",
    height: "186 см",
    heightEn: "6'1\"",
    relationshipStatus: "statusDivorced",
    bio: "Люблю путешествия, спорт и спокойные разговоры без лишнего шума. Ценю искренность, надёжность и хорошую атмосферу.",
    bioEn: "I love travel, sports and calm conversations without extra noise. I appreciate sincerity, reliability and a good atmosphere.",
    interests: ["travel", "fitness", "weekends", "cars", "coffee"],
    zodiac: "♒",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
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
    lookingFor: "Серьёзные отношения",
    lookingForEn: "Serious relationship",
    height: "167 см",
    heightEn: "5'6\"",
    relationshipStatus: "statusSingle",
    bio: "Люблю уютные места, прогулки, музыку и красивые фотографии. Легко иду на контакт, если чувствую хорошую энергию.",
    bioEn: "I love cozy places, walks, music and beautiful photos. I open up easily when I feel good energy.",
    interests: ["music", "walks", "art", "coffee", "travel"],
    zodiac: "♉",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
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
    lookingFor: "Лёгкое знакомство",
    lookingForEn: "Casual dating",
    height: "185 см",
    heightEn: "6'1\"",
    relationshipStatus: "statusOpen",
    bio: "Люблю путешествия, музыку, спорт и стильные места. Ценю лёгкость в общении и яркую химию между людьми.",
    bioEn: "I love travel, music, sports and stylish places. I appreciate ease in conversation and strong chemistry between people.",
    interests: ["travel", "music", "style", "fitness", "night city"],
    zodiac: "♏",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
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
    lookingFor: "Общение и химия",
    lookingForEn: "Chemistry and connection",
    height: "172 см",
    heightEn: "5'8\"",
    relationshipStatus: "statusOpen",
    bio: "Обожаю море, красивые вечера, танцы и вдохновляющих людей. Люблю, когда общение естественное и без напряжения.",
    bioEn: "I adore the sea, beautiful evenings, dancing and inspiring people. I love when conversation feels natural and relaxed.",
    interests: ["sea", "dance", "sunsets", "travel", "fashion"],
    zodiac: "♊",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
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
    lookingFor: "Серьёзные отношения",
    lookingForEn: "Serious relationship",
    height: "181 см",
    heightEn: "5'11\"",
    relationshipStatus: "statusComplicated",
    bio: "Люблю спокойную уверенность, хорошие разговоры и красивую городскую атмосферу. Ценю ум, вкус и чувство юмора.",
    bioEn: "I like calm confidence, good conversations and beautiful city atmosphere. I appreciate intelligence, taste and humor.",
    interests: ["city", "books", "coffee", "cinema", "business"],
    zodiac: "♑",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
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
    lookingFor: "Красивое знакомство",
    lookingForEn: "Meaningful dating",
    height: "166 см",
    heightEn: "5'5\"",
    relationshipStatus: "statusSingle",
    bio: "Люблю стиль, путешествия, вкусную еду и лёгкое живое общение. Мне нравятся уверенные и внимательные люди.",
    bioEn: "I love style, travel, good food and easy lively conversation. I like confident and attentive people.",
    interests: ["style", "food", "travel", "photos", "shopping"],
    zodiac: "♍",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
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
    city: "Paris",
    country: "France",
    distanceMi: 123,
    online: false,
    lookingFor: "Серьёзные отношения",
    lookingForEn: "Serious relationship",
    height: "184 см",
    heightEn: "6'0\"",
    relationshipStatus: "statusSingle",
    bio: "Люблю атмосферные места, искусство, поездки и интересные разговоры. Стараюсь жить со вкусом и без лишней суеты.",
    bioEn: "I love atmospheric places, art, trips and interesting conversations. I try to live with taste and without unnecessary rush.",
    interests: ["art", "travel", "wine", "architecture", "music"],
    zodiac: "♈",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
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
  const [showFilters, setShowFilters] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [chatDraft, setChatDraft] = useState("");
  const [showMatch, setShowMatch] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState(null);
  const [savedProfileLabel, setSavedProfileLabel] = useState(false);
  const [likePulse, setLikePulse] = useState(false);
  const [skipPulse, setSkipPulse] = useState(false);
  const [notice, setNotice] = useState("");
  const [blockedIds, setBlockedIds] = useState([]);
  const [reportedIds, setReportedIds] = useState([]);
  const [currentDeckIndex, setCurrentDeckIndex] = useState(0);

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

  const profilePageRef = useRef(null);

  const countries = useMemo(() => ["All", ...Object.keys(countriesMap)], []);
  const cityOptions = useMemo(() => {
    if (draftSettings.country === "All") return ["All"];
    return ["All", ...(countriesMap[draftSettings.country] || [])];
  }, [draftSettings.country]);

  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      if (blockedIds.includes(p.id)) return false;
      const distanceValue = settings.unit === "mi" ? p.distanceMi : Math.round(p.distanceMi * 1.60934);
      if (settings.searchMode === "nearby" && distanceValue > settings.maxDistance) return false;
      if (settings.country !== "All" && p.country !== settings.country) return false;
      if (settings.city !== "All" && p.city !== settings.city) return false;
      if (p.age < settings.ageFrom || p.age > settings.ageTo) return false;
      if (settings.gender !== "all" && p.gender !== settings.gender) return false;
      return true;
    });
  }, [profiles, settings, blockedIds]);

  const activeProfile = filteredProfiles[currentDeckIndex] || null;
  const selectedChatProfile = profiles.find((p) => p.id === selectedChatId) || null;

  useEffect(() => {
    if (currentDeckIndex >= filteredProfiles.length) {
      setCurrentDeckIndex(0);
    }
  }, [filteredProfiles.length, currentDeckIndex]);

  useEffect(() => {
    if (profilePageRef.current) {
      profilePageRef.current.scrollTop = 0;
    }
  }, [activeProfile?.id]);

  useEffect(() => {
    if (matches.length && !matches.includes(selectedChatId)) {
      setSelectedChatId(matches[0]);
    }
  }, [matches, selectedChatId]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 1800);
    return () => clearTimeout(timer);
  }, [notice]);

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

  const moveToNextProfile = () => {
    setCurrentDeckIndex((prev) => {
      if (!filteredProfiles.length) return 0;
      if (prev + 1 >= filteredProfiles.length) return 0;
      return prev + 1;
    });
  };

  const handleLike = (profile) => {
    if (!profile) return;
    setLikePulse(true);
    setTimeout(() => setLikePulse(false), 260);

    const makeMatch = [1, 2, 3, 5].includes(profile.id);

    if (makeMatch) {
      setMatches((prev) => (prev.includes(profile.id) ? prev : [...prev, profile.id]));
      ensureMessages(profile);
      setMatchedProfile(profile);
      setShowMatch(true);
      setSelectedChatId(profile.id);
      setMessageView("matches");
    }

    moveToNextProfile();
  };

  const handleSkip = () => {
    setSkipPulse(true);
    setTimeout(() => setSkipPulse(false), 260);
    moveToNextProfile();
  };

  const restartDeck = () => {
    setCurrentDeckIndex(0);
    if (profilePageRef.current) profilePageRef.current.scrollTop = 0;
  };

  const applyFilters = () => {
    setSettings(draftSettings);
    setCurrentDeckIndex(0);
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
    setCurrentDeckIndex(0);
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

  const handleBlock = (id) => {
    setBlockedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setNotice(t.blockReason);
    if (activeProfile?.id === id) {
      moveToNextProfile();
    }
  };

  const handleReport = (id) => {
    setReportedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setNotice(t.reportReason);
  };

  const relationshipLabel = (profile) => t[profile.relationshipStatus] || profile.relationshipStatus;

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
        .page{max-width:1380px;margin:0 auto;padding:18px 16px 110px}
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
        .lang-switch,.hero-actions,.filter-actions,.segmented,.mutual-actions{
          display:flex;gap:10px;flex-wrap:wrap
        }
        .chip-btn,.nav-btn,.primary-btn,.secondary-btn,.ghost-btn,.action-btn{
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
        .primary-btn,.secondary-btn,.ghost-btn{
          border-radius:16px;
          padding:13px 18px;
          font-size:14px
        }
        .secondary-btn{
          background:#f3eef6;color:#2b2335
        }
        .ghost-btn{
          background:rgba(255,255,255,.16);
          color:#fff;
          border:1px solid rgba(255,255,255,.28)
        }
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
        .hero-preview img,.profile-photo-grid img,.list-item img,.chat-item img,.profile-avatar img{
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
        .profile-page-wrap{
          width:100%;
          max-width:560px;
          height:min(84vh,820px);
          border-radius:34px;
          overflow:hidden;
          position:relative;
          background:#fff;
          box-shadow:0 30px 60px rgba(25,10,38,.14);
        }
        .profile-page-scroll{
          height:100%;
          overflow:auto;
          padding-bottom:120px;
          -ms-overflow-style:none;
          scrollbar-width:none;
        }
        .profile-page-scroll::-webkit-scrollbar{display:none}
        .profile-hero-photo{
          width:100%;
          height:420px;
          object-fit:cover;
          display:block;
        }
        .profile-header{
          padding:18px 18px 10px;
          background:#fff;
        }
        .profile-title{
          margin:0;
          font-size:34px;
          line-height:1;
          font-weight:900;
          display:flex;
          align-items:center;
          flex-wrap:wrap;
          gap:6px;
        }
        .profile-subtitle{
          margin:10px 0 0;
          color:#6a6076;
          font-size:14px;
          font-weight:800;
        }
        .premium-pill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:6px 10px;
          border-radius:999px;
          background:linear-gradient(135deg,#ff5f8f,#ff8a6b);
          color:#fff;
          font-size:11px;
          font-weight:900;
          margin-left:4px;
        }
        .profile-section{
          padding:0 18px 18px;
        }
        .info-grid{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:12px;
        }
        .info-card{
          background:#faf7fc;
          border-radius:20px;
          padding:14px;
          border:1px solid rgba(100,80,120,.06);
        }
        .info-card-label{
          font-size:12px;
          font-weight:900;
          color:#8d8299;
          margin-bottom:8px;
          text-transform:uppercase;
          letter-spacing:.04em;
        }
        .info-card-value{
          font-size:15px;
          font-weight:800;
          color:#2b2235;
          line-height:1.4;
        }
        .section-heading{
          margin:0 0 12px;
          font-size:18px;
          font-weight:900;
        }
        .bio-box{
          background:#faf7fc;
          border-radius:22px;
          padding:16px;
          color:#62576d;
          line-height:1.6;
          border:1px solid rgba(100,80,120,.06);
        }
        .chip-row{display:flex;gap:8px;flex-wrap:wrap}
        .interest{
          padding:9px 12px;border-radius:999px;background:#f5eff7;
          font-size:13px;font-weight:800;color:#52475e
        }
        .profile-photo-stack{
          display:grid;
          gap:14px;
        }
        .profile-photo-stack img{
          width:100%;
          height:420px;
          display:block;
          object-fit:cover;
          border-radius:24px;
        }
        .profile-footer-actions{
          display:grid;
          gap:10px;
        }
        .danger-btn{
          border:none;
          padding:14px 16px;
          border-radius:18px;
          font-size:14px;
          font-weight:900;
          cursor:pointer;
          transition:.2s ease;
        }
        .danger-btn.report{
          background:#fff2f4;
          color:#d64568;
        }
        .danger-btn.block{
          background:#eef2ff;
          color:#4c5fc7;
        }
        .danger-btn:hover{transform:translateY(-1px)}
        .fixed-action-bar{
          position:absolute;
          left:16px;
          right:16px;
          bottom:16px;
          z-index:10;
          display:flex;
          justify-content:center;
          pointer-events:none;
        }
        .fixed-action-inner{
          display:flex;
          gap:16px;
          padding:10px 12px;
          border-radius:999px;
          background:rgba(18,14,26,.62);
          backdrop-filter:blur(14px);
          border:1px solid rgba(255,255,255,.14);
          box-shadow:0 16px 30px rgba(18,9,26,.20);
          pointer-events:auto;
        }
        .action-btn{
          width:76px;height:76px;border-radius:26px;font-size:28px;
          box-shadow:0 16px 30px rgba(20,10,28,.14);
          transform:scale(1);
        }
        .action-btn.skip{
          background:linear-gradient(135deg,#eef0ff,#dfe5ff);
          color:#4f5acb
        }
        .action-btn.like{
          background:linear-gradient(135deg,#ff5f8f,#ff8a6b);
          color:#fff
        }
        .action-btn:hover{transform:translateY(-1px) scale(1.02)}
        .action-btn:active{transform:scale(.94)}
        .action-btn.pop{transform:scale(1.08)}
        .footer-hint{
          margin-top:16px;
          font-size:12px;
          color:#8a7f96;
          text-align:center;
          font-weight:700;
        }
        .notice{
          position:fixed;
          top:20px;
          left:50%;
          transform:translateX(-50%);
          z-index:120;
          background:rgba(27,20,35,.92);
          color:#fff;
          padding:12px 16px;
          border-radius:999px;
          font-size:13px;
          font-weight:800;
          box-shadow:0 10px 26px rgba(22,10,30,.24);
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
        .mutual-modal{
          position:fixed;inset:0;background:rgba(20,8,30,.45);display:flex;align-items:center;justify-content:center;
          padding:18px;z-index:100
        }
        .mutual-box{
          width:min(520px,100%);border-radius:30px;padding:28px;background:linear-gradient(135deg,#ff5f8f 0%,#ff8b6e 100%);
          color:#fff;box-shadow:0 24px 50px rgba(25,10,35,.26);text-align:center
        }
        .mutual-avatars{display:flex;justify-content:center;align-items:center;gap:14px;margin:16px 0 22px}
        .mutual-avatars img{
          width:94px;height:94px;border-radius:50%;object-fit:cover;border:4px solid rgba(255,255,255,.5)
        }
        .heart{font-size:34px}
        .phone-bottom-nav{display:none}

        @media (max-width:1120px){
          .hero,.profile-layout,.settings-layout{grid-template-columns:1fr}
          .quick-grid{grid-template-columns:1fr}
        }
        @media (max-width:760px){
          .page{padding:12px 12px 104px}
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
          .profile-page-wrap{max-width:100%;height:min(82vh,760px);border-radius:28px}
          .profile-hero-photo,.profile-photo-stack img{height:350px}
          .profile-title{font-size:30px}
          .info-grid{grid-template-columns:1fr}
          .action-btn{width:70px;height:70px;border-radius:22px}
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

      {notice && <div className="notice">{notice}</div>}

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
              <div className="muted">{filteredProfiles.length}</div>
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
                        onChange={(e) => setDraftSettings((p) => ({ ...p, country: e.target.value, city: "All" }))}
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
                    <div className="profile-page-wrap">
                      <div ref={profilePageRef} className="profile-page-scroll">
                        <img className="profile-hero-photo" src={activeProfile.photos[0]} alt={activeProfile.name} />

                        <div className="profile-header">
                          <h3 className="profile-title">
                            {activeProfile.name}, {activeProfile.age} {activeProfile.zodiac}
                            {activeProfile.verified && <Badge />}
                            <span className="premium-pill">{t.premium}</span>
                          </h3>
                          <p className="profile-subtitle">
                            {activeProfile.city}, {activeProfile.country} • {activeProfile.online ? t.online : t.offline}
                          </p>
                        </div>

                        <div className="profile-section">
                          <div className="info-grid">
                            <div className="info-card">
                              <div className="info-card-label">{t.location}</div>
                              <div className="info-card-value">{activeProfile.city}, {activeProfile.country}</div>
                            </div>
                            <div className="info-card">
                              <div className="info-card-label">{t.lookingFor}</div>
                              <div className="info-card-value">{lang === "ru" ? activeProfile.lookingFor : activeProfile.lookingForEn}</div>
                            </div>
                            <div className="info-card">
                              <div className="info-card-label">{t.height}</div>
                              <div className="info-card-value">{lang === "ru" ? activeProfile.height : activeProfile.heightEn}</div>
                            </div>
                            <div className="info-card">
                              <div className="info-card-label">{t.relationshipStatus}</div>
                              <div className="info-card-value">{relationshipLabel(activeProfile)}</div>
                            </div>
                            <div className="info-card">
                              <div className="info-card-label">{t.age}</div>
                              <div className="info-card-value">{activeProfile.age} {t.years}</div>
                            </div>
                            <div className="info-card">
                              <div className="info-card-label">{t.zodiac}</div>
                              <div className="info-card-value">{activeProfile.zodiac}</div>
                            </div>
                          </div>
                        </div>

                        <div className="profile-section">
                          <h4 className="section-heading">{t.about}</h4>
                          <div className="bio-box">
                            {lang === "ru" ? activeProfile.bio : activeProfile.bioEn}
                          </div>
                        </div>

                        <div className="profile-section">
                          <h4 className="section-heading">{t.interests}</h4>
                          <div className="chip-row">
                            {activeProfile.interests.map((it) => (
                              <span className="interest" key={it}>{it}</span>
                            ))}
                          </div>
                        </div>

                        <div className="profile-section">
                          <div className="profile-photo-stack">
                            {activeProfile.photos.map((photo, i) => (
                              <img key={i} src={photo} alt={`${activeProfile.name}-${i + 1}`} />
                            ))}
                          </div>
                        </div>

                        <div className="profile-section">
                          <div className="profile-footer-actions">
                            <button
                              className="danger-btn block"
                              onClick={() => handleBlock(activeProfile.id)}
                            >
                              {blockedIds.includes(activeProfile.id) ? t.blocked : t.block}
                            </button>

                            <button
                              className="danger-btn report"
                              onClick={() => handleReport(activeProfile.id)}
                            >
                              {reportedIds.includes(activeProfile.id) ? t.reported : t.report}
                            </button>
                          </div>

                          <div className="footer-hint">{t.footerHint}</div>
                        </div>
                      </div>

                      <div className="fixed-action-bar">
                        <div className="fixed-action-inner">
                          <button
                            className={`action-btn skip ${skipPulse ? "pop" : ""}`}
                            onClick={() => handleSkip(activeProfile)}
                            title="skip"
                          >
                            ✕
                          </button>
                          <button
                            className={`action-btn like ${likePulse ? "pop" : ""}`}
                            onClick={() => handleLike(activeProfile)}
                            title="like"
                          >
                            ♥
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="empty">
                    <h3>{t.emptyDeck}</h3>
                    <p>{t.emptyDeckText}</p>
                    <button className="primary-btn" onClick={restartDeck}>{t.restart}</button>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {tab === "messages" && (
          <>
            <h2 className="section-title">{t.messages}</h2>

            <div className="segmented" style={{ marginBottom: 14 }}>
              <button className={`chip-btn ${messageView === "matches" ? "active" : ""}`} onClick={() => setMessageView("matches")}>{t.msgMatches}</button>
              <button className={`chip-btn ${messageView === "liked" ? "active" : ""}`} onClick={() => setMessageView("liked")}>{t.msgLikedYou}</button>
              <button className={`chip-btn ${messageView === "guests" ? "active" : ""}`} onClick={() => setMessageView("guests")}>{t.msgGuests}</button>
            </div>

            <section className="messages-layout">
              <div className="panel">
                {listProfiles.length ? (
                  <div className="list-grid">
                    {listProfiles.map((profile) => (
                      <div
                        key={profile.id}
                        className={`chat-item ${selectedChatId === profile.id && messageView === "matches" ? "active" : ""}`}
                        onClick={() => {
                          if (messageView !== "matches" && !matches.includes(profile.id)) return;
                          setSelectedChatId(profile.id);
                        }}
                      >
                        <img src={profile.avatar} alt={profile.name} />
                        <div>
                          <div className="item-title">
                            {profile.name}
                            {profile.verified && <Badge />}
                          </div>
                          <p className="item-sub">
                            {messageView === "matches"
                              ? profile.online ? t.online : t.offline
                              : `${profile.city}, ${profile.country}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty">
                    {messageView === "matches"
                      ? t.noMessages
                      : messageView === "liked"
                      ? t.noLikedYou
                      : t.noGuests}
                  </div>
                )}
              </div>

              <div className="panel">
                {messageView === "matches" ? (
                  selectedChatProfile && matches.includes(selectedChatProfile.id) ? (
                    <div className="message-panel">
                      <div className="message-header">
                        <img src={selectedChatProfile.avatar} alt={selectedChatProfile.name} />
                        <div>
                          <div className="item-title">
                            {selectedChatProfile.name}, {selectedChatProfile.age} {selectedChatProfile.zodiac}
                            {selectedChatProfile.verified && <Badge />}
                          </div>
                          <p className="item-sub">
                            {selectedChatProfile.online ? t.online : t.offline} • {selectedChatProfile.city}
                          </p>
                        </div>
                      </div>

                      <div className="message-body">
                        {(messages[selectedChatId] || []).map((msg, i) => (
                          <div key={i} className={`bubble ${msg.from}`}>
                            {lang === "ru" ? msg.text : msg.textEn || msg.text}
                          </div>
                        ))}
                      </div>

                      <div className="message-input-row">
                        <input
                          value={chatDraft}
                          onChange={(e) => setChatDraft(e.target.value)}
                          placeholder={t.messagePlaceholder}
                        />
                        <button className="primary-btn" onClick={sendMessage}>{t.send}</button>
                      </div>
                    </div>
                  ) : (
                    <div className="empty">{t.noMessages}</div>
                  )
                ) : (
                  <div className="list-grid">
                    {listProfiles.map((profile) => (
                      <div key={profile.id} className="list-item">
                        <img src={profile.avatar} alt={profile.name} />
                        <div style={{ flex: 1 }}>
                          <div className="item-title">
                            {profile.name}, {profile.age} {profile.zodiac}
                            {profile.verified && <Badge />}
                          </div>
                          <p className="item-sub">{profile.city}, {profile.country}</p>
                        </div>
                        {matches.includes(profile.id) ? (
                          <button className="primary-btn" onClick={() => openChatFromProfile(profile.id)}>
                            {t.openChat}
                          </button>
                        ) : (
                          <button className="secondary-btn" disabled style={{ opacity: 0.65, cursor: "default" }}>
                            🔒
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {tab === "profile" && (
          <>
            <h2 className="section-title">{t.profileTitle}</h2>

            <section className="profile-layout">
              <div className="panel">
                <div className="profile-avatar">
                  <img src={myProfile.photos[0]} alt={myProfile.name} />
                  <h3 className="profile-main-name">
                    {myProfile.name}
                    {myProfile.verified && <Badge />}
                  </h3>
                  <p className="muted" style={{ margin: "8px 0 10px" }}>
                    {myProfile.age} • {myProfile.zodiac}
                  </p>
                  <p className="muted" style={{ marginBottom: 0 }}>
                    {lang === "ru" ? myProfile.bio : myProfile.bioEn}
                  </p>
                </div>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>{t.about}</h3>

                <div className="info-list">
                  <div className="info-row"><strong>{t.age}</strong><span>{myProfile.age}</span></div>
                  <div className="info-row"><strong>{t.cityLabel}</strong><span>{myProfile.city}</span></div>
                  <div className="info-row"><strong>{t.countryLabel}</strong><span>{myProfile.country}</span></div>
                  <div className="info-row"><strong>{t.zodiac}</strong><span>{myProfile.zodiac}</span></div>
                  <div className="info-row"><strong>{t.verified}</strong><span>{myProfile.verified ? t.verifiedYes : t.verifiedNo}</span></div>
                </div>

                <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {!editProfile ? (
                    <button className="primary-btn" onClick={() => setEditProfile(true)}>{t.editProfile}</button>
                  ) : (
                    <>
                      <button className="primary-btn" onClick={saveProfile}>{t.saveProfile}</button>
                      <button
                        className="secondary-btn"
                        onClick={() => {
                          setProfileDraft(myProfile);
                          setEditProfile(false);
                        }}
                      >
                        {t.cancel}
                      </button>
                    </>
                  )}

                  {savedProfileLabel && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "10px 14px",
                        borderRadius: 999,
                        background: "rgba(70,199,121,0.12)",
                        color: "#169453",
                        fontWeight: 800,
                      }}
                    >
                      {t.profileSaved}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {editProfile && (
              <section className="panel" style={{ marginTop: 18 }}>
                <h3 style={{ marginTop: 0 }}>{t.editProfile}</h3>

                <div className="field-group">
                  <div className="two-col">
                    <div className="field">
                      <label>{t.name}</label>
                      <input value={profileDraft.name} onChange={(e) => setProfileDraft((p) => ({ ...p, name: e.target.value }))} />
                    </div>
                    <div className="field">
                      <label>{t.age}</label>
                      <input type="number" value={profileDraft.age} onChange={(e) => setProfileDraft((p) => ({ ...p, age: Number(e.target.value || 0) }))} />
                    </div>
                  </div>

                  <div className="two-col">
                    <div className="field">
                      <label>{t.cityLabel}</label>
                      <input value={profileDraft.city} onChange={(e) => setProfileDraft((p) => ({ ...p, city: e.target.value }))} />
                    </div>
                    <div className="field">
                      <label>{t.countryLabel}</label>
                      <input value={profileDraft.country} onChange={(e) => setProfileDraft((p) => ({ ...p, country: e.target.value }))} />
                    </div>
                  </div>

                  <div className="two-col">
                    <div className="field">
                      <label>{t.zodiac}</label>
                      <select value={profileDraft.zodiac} onChange={(e) => setProfileDraft((p) => ({ ...p, zodiac: e.target.value }))}>
                        {zodiacOptions.map((z) => <option key={z} value={z}>{z}</option>)}
                      </select>
                    </div>
                    <div className="field">
                      <label>{t.verified}</label>
                      <select
                        value={profileDraft.verified ? "yes" : "no"}
                        onChange={(e) => setProfileDraft((p) => ({ ...p, verified: e.target.value === "yes" }))}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label>{t.bio}</label>
                    <textarea
                      rows="4"
                      value={lang === "ru" ? profileDraft.bio : profileDraft.bioEn}
                      onChange={(e) =>
                        setProfileDraft((p) =>
                          lang === "ru" ? { ...p, bio: e.target.value } : { ...p, bioEn: e.target.value }
                        )
                      }
                    />
                  </div>

                  <div className="field">
                    <label>{t.addPhoto}</label>
                    <input type="file" accept="image/*" multiple onChange={handleProfilePhotoUpload} />
                  </div>
                </div>

                <h4 style={{ marginBottom: 10 }}>{t.photos}</h4>
                <div className="profile-photo-grid">
                  {profileDraft.photos.map((photo, i) => (
                    <img key={i} src={photo} alt={`profile-${i}`} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {tab === "settings" && (
          <>
            <h2 className="section-title">{t.settingsTitle}</h2>
            <p className="section-subtitle">{t.settingsText}</p>

            <section className="settings-layout">
              <div className="panel">
                <div className="field-group">
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

                  <div className="field">
                    <label>{t.country}</label>
                    <select value={draftSettings.country} onChange={(e) => setDraftSettings((p) => ({ ...p, country: e.target.value, city: "All" }))}>
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

                  <div className="filter-actions">
                    <button className="primary-btn" onClick={applyFilters}>{t.apply}</button>
                    <button className="secondary-btn" onClick={resetFilters}>{t.reset}</button>
                  </div>
                </div>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>{t.help}</h3>
                <div className="help-grid">
                  <div className="help-item">
                    <h3 style={{ marginTop: 0 }}>{t.help1}</h3>
                    <p style={{ marginBottom: 0 }}>{t.help1t}</p>
                  </div>
                  <div className="help-item">
                    <h3 style={{ marginTop: 0 }}>{t.help2}</h3>
                    <p style={{ marginBottom: 0 }}>{t.help2t}</p>
                  </div>
                  <div className="help-item">
                    <h3 style={{ marginTop: 0 }}>{t.help3}</h3>
                    <p style={{ marginBottom: 0 }}>{t.help3t}</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      <div className="phone-bottom-nav">
        <button className={`phone-tab-btn ${tab === "home" ? "active" : ""}`} onClick={() => setTab("home")}>{t.home}</button>
        <button className={`phone-tab-btn ${tab === "search" ? "active" : ""}`} onClick={() => setTab("search")}>{t.search}</button>
        <button className={`phone-tab-btn ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>{t.messages}</button>
        <button className={`phone-tab-btn ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>{t.profile}</button>
        <button className={`phone-tab-btn ${tab === "settings" ? "active" : ""}`} onClick={() => setTab("settings")}>{t.settings}</button>
      </div>

      {showMatch && matchedProfile && (
        <div className="mutual-modal" onClick={() => setShowMatch(false)}>
          <div className="mutual-box" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: 0, fontSize: 36 }}>{t.mutualTitle}</h2>
            <p style={{ fontSize: 18, marginBottom: 0 }}>{t.mutualText}</p>

            <div className="mutual-avatars">
              <img src={myProfile.photos[0]} alt={myProfile.name} />
              <div className="heart">♥</div>
              <img src={matchedProfile.avatar} alt={matchedProfile.name} />
            </div>

            <div className="mutual-actions" style={{ justifyContent: "center" }}>
              <button
                className="secondary-btn"
                onClick={() => {
                  setShowMatch(false);
                  setTab("search");
                }}
              >
                {t.continue}
              </button>
              <button
                className="ghost-btn"
                onClick={() => {
                  setShowMatch(false);
                  ensureMessages(matchedProfile);
                  setSelectedChatId(matchedProfile.id);
                  setTab("messages");
                  setMessageView("matches");
                }}
              >
                {t.startChat}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
