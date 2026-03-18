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
    card1t:
      "Каждая анкета открывается как отдельная вертикальная страница без наложения текста на фото.",
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
    ageRange: "Возраст",
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
    close: "Закрыть",

    emptyDeck: "Анкеты закончились",
    emptyDeckText: "Измени фильтры поиска или начни просмотр заново.",
    restart: "Начать заново",

    online: "Онлайн",
    offline: "Не в сети",
    messagePlaceholder: "Напиши сообщение...",
    send: "Отправить",
    noMessages: "Пока нет взаимных симпатий.",
    openChat: "Открыть чат",
    openProfile: "Открыть профиль",
    backToMessages: "Назад к сообщениям",

    msgMatches: "Диалоги",
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
    blockedShort: "Заблокирован",
    reportedShort: "Отправлено",
    statusSingle: "Не женат / не замужем",
    statusDivorced: "В разводе",
    statusOpen: "Свободен(на)",
    statusComplicated: "Все сложно",

    footerHint: "Следующая анкета откроется только после лайка или дизлайка.",
    reportReason: "Жалоба отправлена. Профиль будет проверен.",
    blockReason: "Профиль скрыт из поиска.",

    yourTurn: "Твой ответ",
    backToChats: "Назад",
    delivered: "Доставлено",
    read: "Прочитано",
    sentNow: "Сейчас",
    typeDialog: "Выбери диалог",
    typeDialogText: "Открой любой диалог из списка, чтобы начать общение.",

    likeStamp: "ЛАЙК",
    skipStamp: "НЕТ",
    swipeHint: "Свайп вправо — лайк, влево — дизлайк",
    typing: "печатает...",
    profilePreviewTitle: "Профиль",
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
    card1t:
      "Each profile opens as a separate vertical page without text covering the photos.",
    card2: "Smart search",
    card2t: "Filters by country, city, age, gender and distance.",
    card3: "Choose anytime",
    card3t:
      "Like and dislike buttons stay fixed and visible during the whole profile view.",

    searchTitle: "Search",
    filters: "Search settings",
    mode: "Mode",
    nearby: "Nearby",
    all: "All",
    country: "Country",
    city: "City",
    ageFrom: "Age from",
    ageTo: "Age to",
    ageRange: "Age",
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
    close: "Close",

    emptyDeck: "No more profiles",
    emptyDeckText: "Change your filters or start browsing again.",
    restart: "Start again",

    online: "Online",
    offline: "Offline",
    messagePlaceholder: "Write a message...",
    send: "Send",
    noMessages: "No mutual matches yet.",
    openChat: "Open chat",
    openProfile: "Open profile",
    backToMessages: "Back to messages",

    msgMatches: "Dialogs",
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
    blockedShort: "Blocked",
    reportedShort: "Sent",
    statusSingle: "Single",
    statusDivorced: "Divorced",
    statusOpen: "Open to relationship",
    statusComplicated: "It's complicated",

    footerHint: "The next profile opens only after like or dislike.",
    reportReason: "Report sent. The profile will be reviewed.",
    blockReason: "The profile has been hidden from search.",

    yourTurn: "Your reply",
    backToChats: "Back",
    delivered: "Delivered",
    read: "Read",
    sentNow: "Now",
    typeDialog: "Choose a dialog",
    typeDialogText: "Open any dialog from the list to start chatting.",

    likeStamp: "LIKE",
    skipStamp: "NOPE",
    swipeHint: "Swipe right — like, left — dislike",
    typing: "typing...",
    profilePreviewTitle: "Profile",
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
    heightEn: `5'7"`,
    relationshipStatus: "statusSingle",
    bio: "Люблю красивые места, музыку, кофе, поездки и лёгкое общение. Ценю стиль, хорошую энергетику и людей, с которыми интересно и легко.",
    bioEn: "I love beautiful places, music, coffee, trips and easy conversations. I appreciate style, good energy and people who are interesting and easy to be around.",
    interests: ["music", "travel", "coffee", "sunsets", "fashion"],
    zodiac: "♎",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=90",
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
    heightEn: `5'6"`,
    relationshipStatus: "statusOpen",
    bio: "Люблю прогулки у океана, кофе, вечерние огни и тёплые разговоры. Мне нравятся красивые детали и лёгкая романтика.",
    bioEn: "I love ocean walks, coffee, city lights and warm conversations. I enjoy beautiful details and soft romance.",
    interests: ["ocean", "coffee", "night walks", "beach", "photos"],
    zodiac: "♌",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=90",
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
    heightEn: `6'0"`,
    relationshipStatus: "statusSingle",
    bio: "Ценю юмор, спорт, хорошие фильмы и настоящие эмоции. Люблю уверенное, живое общение и людей с характером.",
    bioEn: "I value humor, sports, good movies and real emotions. I like confident, genuine communication and people with character.",
    interests: ["sport", "movies", "humor", "fitness", "city life"],
    zodiac: "♐",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1400&q=90",
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
    heightEn: `6'1"`,
    relationshipStatus: "statusDivorced",
    bio: "Люблю путешествия, спорт и спокойные разговоры без лишнего шума. Ценю искренность, надёжность и хорошую атмосферу.",
    bioEn: "I love travel, sports and calm conversations without extra noise. I appreciate sincerity, reliability and a good atmosphere.",
    interests: ["travel", "fitness", "weekends", "cars", "coffee"],
    zodiac: "♒",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=90",
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
    heightEn: `5'6"`,
    relationshipStatus: "statusSingle",
    bio: "Люблю уютные места, прогулки, музыку и красивые фотографии. Легко иду на контакт, если чувствую хорошую энергию.",
    bioEn: "I love cozy places, walks, music and beautiful photos. I open up easily when I feel good energy.",
    interests: ["music", "walks", "art", "coffee", "travel"],
    zodiac: "♉",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=90",
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
    heightEn: `6'1"`,
    relationshipStatus: "statusOpen",
    bio: "Люблю путешествия, музыку, спорт и стильные места. Ценю лёгкость в общении и яркую химию между людьми.",
    bioEn: "I love travel, music, sports and stylish places. I appreciate ease in conversation and strong chemistry between people.",
    interests: ["travel", "music", "style", "fitness", "night city"],
    zodiac: "♏",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1400&q=90",
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
    heightEn: `5'8"`,
    relationshipStatus: "statusOpen",
    bio: "Обожаю море, красивые вечера, танцы и вдохновляющих людей. Люблю, когда общение естественное и без напряжения.",
    bioEn: "I adore the sea, beautiful evenings, dancing and inspiring people. I love when conversation feels natural and relaxed.",
    interests: ["sea", "dance", "sunsets", "travel", "fashion"],
    zodiac: "♊",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=90",
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
    heightEn: `5'11"`,
    relationshipStatus: "statusComplicated",
    bio: "Люблю спокойную уверенность, хорошие разговоры и красивую городскую атмосферу. Ценю ум, вкус и чувство юмора.",
    bioEn: "I like calm confidence, good conversations and beautiful city atmosphere. I appreciate intelligence, taste and humor.",
    interests: ["city", "books", "coffee", "cinema", "business"],
    zodiac: "♑",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=90",
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
    heightEn: `5'5"`,
    relationshipStatus: "statusSingle",
    bio: "Люблю стиль, путешествия, вкусную еду и лёгкое живое общение. Мне нравятся уверенные и внимательные люди.",
    bioEn: "I love style, travel, good food and easy lively conversation. I like confident and attentive people.",
    interests: ["style", "food", "travel", "photos", "shopping"],
    zodiac: "♍",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1400&q=90",
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
    heightEn: `6'0"`,
    relationshipStatus: "statusSingle",
    bio: "Люблю атмосферные места, искусство, поездки и интересные разговоры. Стараюсь жить со вкусом и без лишней суеты.",
    bioEn: "I love atmospheric places, art, trips and interesting conversations. I try to live with taste and without unnecessary rush.",
    interests: ["art", "travel", "wine", "architecture", "music"],
    zodiac: "♈",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=90",
    photos: [
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=90",
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
        background: "#31a8ff",
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

function formatTime(date = new Date()) {
  return new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getChecks(status) {
  if (status === "read") return "✓✓";
  if (status === "delivered") return "✓✓";
  return "✓";
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
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
  const [chatScreen, setChatScreen] = useState("list");
  const [swipeX, setSwipeX] = useState(0);
  const [swipeAnimating, setSwipeAnimating] = useState(false);
  const [matchBurst, setMatchBurst] = useState(false);
  const [viewedProfileId, setViewedProfileId] = useState(null);

  const touchStateRef = useRef({
    startX: 0,
    startY: 0,
    dragging: false,
    horizontal: false,
  });

  const defaultFilterState = {
    searchMode: "nearby",
    country: "All",
    city: "All",
    maxDistance: 5,
    unit: "mi",
    ageFrom: 18,
    ageTo: 60,
    gender: "all",
  };

  const [settings, setSettings] = useState(defaultFilterState);
  const [draftSettings, setDraftSettings] = useState(defaultFilterState);

  const [messages, setMessages] = useState({
    1: [
      {
        from: "them",
        text: "Привет 😊 Рада взаимной симпатии.",
        textEn: "Hi 😊 Glad we matched.",
        status: "read",
        time: "11:24",
      },
      {
        from: "them",
        text: "Как проходит твой день?",
        textEn: "How is your day going?",
        status: "read",
        time: "11:26",
      },
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
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=90",
    ],
  });

  const [editProfile, setEditProfile] = useState(false);
  const [profileDraft, setProfileDraft] = useState(myProfile);

  const profilePageRef = useRef(null);
  const messageBodyRef = useRef(null);
  const filterButtonRef = useRef(null);
  const filterRailRef = useRef(null);

  const countries = useMemo(() => ["All", ...Object.keys(countriesMap)], []);
  const cityOptions = useMemo(() => {
    if (draftSettings.country === "All") return ["All"];
    return ["All", ...(countriesMap[draftSettings.country] || [])];
  }, [draftSettings.country]);

  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      if (blockedIds.includes(p.id)) return false;
      const distanceValue =
        settings.unit === "mi" ? p.distanceMi : Math.round(p.distanceMi * 1.60934);
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
  const viewedProfile = profiles.find((p) => p.id === viewedProfileId) || null;
  const heroPreviewProfiles = profiles.slice(0, 4);

  useEffect(() => {
    if (currentDeckIndex >= filteredProfiles.length) {
      setCurrentDeckIndex(0);
    }
  }, [filteredProfiles.length, currentDeckIndex]);

  useEffect(() => {
    if (profilePageRef.current) {
      profilePageRef.current.scrollTop = 0;
    }
    setSwipeX(0);
    setSwipeAnimating(false);
  }, [activeProfile?.id, viewedProfile?.id]);

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

  useEffect(() => {
    if (messageBodyRef.current) {
      messageBodyRef.current.scrollTop = messageBodyRef.current.scrollHeight;
    }
  }, [selectedChatId, messages, chatScreen]);

  useEffect(() => {
    if (!showFilters) return;

    const handleClickOutside = (e) => {
      if (
        filterRailRef.current &&
        !filterRailRef.current.contains(e.target) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(e.target)
      ) {
        setShowFilters(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setShowFilters(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [showFilters]);

  const ensureMessages = (profile) => {
    setMessages((prev) => {
      if (prev[profile.id]) return prev;
      return {
        ...prev,
        [profile.id]: (profile.starterMessagesRu || []).map((text, i) => ({
          from: "them",
          text,
          textEn: profile.starterMessagesEn?.[i] || text,
          status: "read",
          time: formatTime(new Date(Date.now() - (i + 1) * 600000)),
        })),
      };
    });
  };

  const getLastMessage = (profileId) => {
    const list = messages[profileId] || [];
    return list[list.length - 1] || null;
  };

  const needsMyReply = (profileId) => {
    const list = messages[profileId] || [];
    if (!list.length) return false;
    return list[list.length - 1].from === "them";
  };

  const moveToNextProfile = () => {
    setCurrentDeckIndex((prev) => {
      if (!filteredProfiles.length) return 0;
      if (prev + 1 >= filteredProfiles.length) return 0;
      return prev + 1;
    });
  };

  const triggerSwipeOut = (direction, callback) => {
    setSwipeAnimating(true);
    setSwipeX(direction === "right" ? 900 : -900);
    setTimeout(() => {
      callback?.();
      setSwipeAnimating(false);
      setSwipeX(0);
    }, 230);
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
      setMatchBurst(true);
      setTimeout(() => setMatchBurst(false), 1200);
      setSelectedChatId(profile.id);
      setMessageView("matches");
      setChatScreen("chat");
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
    setSwipeX(0);
  };

  const applyFilters = () => {
    setSettings(draftSettings);
    setCurrentDeckIndex(0);
    setShowFilters(false);
  };

  const resetFilters = () => {
    setDraftSettings(defaultFilterState);
    setSettings(defaultFilterState);
    setCurrentDeckIndex(0);
  };

  const sendMessage = () => {
    if (!selectedChatId || !chatDraft.trim() || !matches.includes(selectedChatId)) return;

    const currentText = chatDraft.trim();
    const newMessage = {
      from: "me",
      text: currentText,
      textEn: currentText,
      status: "delivered",
      time: formatTime(),
    };

    setMessages((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMessage],
    }));

    setChatDraft("");

    setTimeout(() => {
      setMessages((prev) => {
        const list = [...(prev[selectedChatId] || [])];
        if (!list.length) return prev;
        const lastIndex = list.length - 1;
        if (list[lastIndex].from === "me" && list[lastIndex].text === currentText) {
          list[lastIndex] = { ...list[lastIndex], status: "read" };
        }
        return { ...prev, [selectedChatId]: list };
      });
    }, 1200);
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
    setChatScreen("chat");
  };

  const openProfilePreview = (id) => {
    if (!matches.includes(id)) return;
    setViewedProfileId(id);
    setTab("profilePreview");
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

  const relationshipLabel = (profile) =>
    t[profile.relationshipStatus] || profile.relationshipStatus;

  const listProfiles =
    messageView === "matches"
      ? profiles.filter((p) => matches.includes(p.id))
      : messageView === "liked"
      ? profiles.filter((p) => likedYouIds.includes(p.id))
      : profiles.filter((p) => guestIds.includes(p.id));

  const onTouchStartCard = (e) => {
    if (!activeProfile) return;
    const touch = e.touches[0];
    touchStateRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      dragging: true,
      horizontal: false,
    };
  };

  const onTouchMoveCard = (e) => {
    if (!touchStateRef.current.dragging) return;

    const touch = e.touches[0];
    const dx = touch.clientX - touchStateRef.current.startX;
    const dy = touch.clientY - touchStateRef.current.startY;

    if (!touchStateRef.current.horizontal) {
      if (Math.abs(dx) > 18 && Math.abs(dx) > Math.abs(dy) + 10) {
        touchStateRef.current.horizontal = true;
      } else {
        return;
      }
    }

    e.preventDefault();
    setSwipeX(dx);
  };

  const onTouchEndCard = () => {
    const dx = swipeX;
    touchStateRef.current.dragging = false;

    if (dx > 110 && activeProfile) {
      triggerSwipeOut("right", () => handleLike(activeProfile));
      return;
    }

    if (dx < -110 && activeProfile) {
      triggerSwipeOut("left", () => handleSkip(activeProfile));
      return;
    }

    setSwipeAnimating(true);
    setSwipeX(0);
    setTimeout(() => setSwipeAnimating(false), 180);
  };

  const handleDraftAgeMin = (value) => {
    const nextMin = clamp(Number(value), 18, draftSettings.ageTo - 1);
    setDraftSettings((prev) => ({ ...prev, ageFrom: nextMin }));
  };

  const handleDraftAgeMax = (value) => {
    const nextMax = clamp(Number(value), draftSettings.ageFrom + 1, 60);
    setDraftSettings((prev) => ({ ...prev, ageTo: nextMax }));
  };

  const ageRangeLeft = ((draftSettings.ageFrom - 18) / (60 - 18)) * 100;
  const ageRangeRight = ((draftSettings.ageTo - 18) / (60 - 18)) * 100;
  const distancePercent = ((draftSettings.maxDistance - 1) / (5000 - 1)) * 100;

  const swipeStamp = swipeX > 40 ? t.likeStamp : swipeX < -40 ? t.skipStamp : "";
  const swipeStampClass = swipeX > 40 ? "like" : swipeX < -40 ? "skip" : "";
  const cardTransform = `translateX(${swipeX}px) rotate(${swipeX / 18}deg)`;
  const cardStyle = {
    transform: cardTransform,
    transition: swipeAnimating ? "transform .22s ease, box-shadow .22s ease" : "none",
  };

  const renderProfileContent = (profile, options = {}) => {
    if (!profile) return null;

    const {
      interactive = false,
      previewOnly = false,
      scrollRef = null,
    } = options;

    return (
      <div ref={scrollRef} className="profile-page-scroll premium-scroll">
        <img className="profile-hero-photo" src={profile.photos[0]} alt={profile.name} />

        <div className="profile-header">
          <h3 className="profile-title">
            {profile.name}, {profile.age} {profile.zodiac}
            {profile.verified && <Badge />}
            {!previewOnly && <span className="premium-pill">{t.premium}</span>}
          </h3>
          <p className="profile-subtitle">
            {profile.city}, {profile.country} • {profile.online ? t.online : t.offline}
          </p>
        </div>

        <div className="profile-section">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-card-label">{t.location}</div>
              <div className="info-card-value">
                {profile.city}, {profile.country}
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-label">{t.lookingFor}</div>
              <div className="info-card-value">
                {lang === "ru" ? profile.lookingFor : profile.lookingForEn}
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-label">{t.height}</div>
              <div className="info-card-value">
                {lang === "ru" ? profile.height : profile.heightEn}
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-label">{t.relationshipStatus}</div>
              <div className="info-card-value">{relationshipLabel(profile)}</div>
            </div>
            <div className="info-card">
              <div className="info-card-label">{t.age}</div>
              <div className="info-card-value">
                {profile.age} {t.years}
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-label">{t.zodiac}</div>
              <div className="info-card-value">{profile.zodiac}</div>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h4 className="section-heading">{t.about}</h4>
          <div className="bio-box">{lang === "ru" ? profile.bio : profile.bioEn}</div>
        </div>

        <div className="profile-section">
          <h4 className="section-heading">{t.interests}</h4>
          <div className="chip-row">
            {profile.interests.map((it) => (
              <span className="interest" key={it}>
                {it}
              </span>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <div className="profile-photo-stack">
            {profile.photos.map((photo, i) => (
              <img key={i} src={photo} alt={`${profile.name}-${i + 1}`} />
            ))}
          </div>
        </div>

        {interactive && (
          <div className="profile-section">
            <div className="profile-footer-actions">
              <button className="danger-btn block" onClick={() => handleBlock(profile.id)}>
                {blockedIds.includes(profile.id) ? t.blocked : t.block}
              </button>

              <button className="danger-btn report" onClick={() => handleReport(profile.id)}>
                {reportedIds.includes(profile.id) ? t.reported : t.report}
              </button>
            </div>

            <div className="footer-hint">
              {t.footerHint} • {t.swipeHint}
            </div>
          </div>
        )}
      </div>
    );
  };

  const FilterContent = () => (
    <div className="filters-rail-grid">
      <div className="filter-card compact">
        <label>{t.mode}</label>
        <select
          value={draftSettings.searchMode}
          onChange={(e) =>
            setDraftSettings((p) => ({ ...p, searchMode: e.target.value }))
          }
        >
          <option value="nearby">{t.nearby}</option>
          <option value="all">{t.all}</option>
        </select>
      </div>

      <div className="filter-card compact">
        <label>{t.gender}</label>
        <select
          value={draftSettings.gender}
          onChange={(e) => setDraftSettings((p) => ({ ...p, gender: e.target.value }))}
        >
          <option value="all">{t.all}</option>
          <option value="male">{t.men}</option>
          <option value="female">{t.women}</option>
        </select>
      </div>

      <div className="filter-card compact">
        <label>{t.country}</label>
        <select
          value={draftSettings.country}
          onChange={(e) =>
            setDraftSettings((p) => ({
              ...p,
              country: e.target.value,
              city: "All",
            }))
          }
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country === "All" ? t.allLocations : country}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-card compact">
        <label>{t.city}</label>
        <select
          value={draftSettings.city}
          onChange={(e) => setDraftSettings((p) => ({ ...p, city: e.target.value }))}
        >
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city === "All" ? t.allLocations : city}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-card compact unit-card">
        <label>{t.unit}</label>
        <select
          value={draftSettings.unit}
          onChange={(e) => setDraftSettings((p) => ({ ...p, unit: e.target.value }))}
        >
          <option value="mi">{t.miles}</option>
          <option value="km">{t.km}</option>
        </select>
      </div>

      <div className="filter-card compact slim-range age-compact">
        <div className="range-title-row">
          <label>{t.ageRange}</label>
          <span className="range-value">
            {draftSettings.ageFrom} — {draftSettings.ageTo}
          </span>
        </div>

        <div className="dual-range compact-range">
          <div className="dual-range-track" />
          <div
            className="dual-range-active"
            style={{
              left: `${ageRangeLeft}%`,
              width: `${Math.max(ageRangeRight - ageRangeLeft, 2)}%`,
            }}
          />
          <input
            type="range"
            min="18"
            max="60"
            value={draftSettings.ageFrom}
            onChange={(e) => handleDraftAgeMin(e.target.value)}
          />
          <input
            type="range"
            min="18"
            max="60"
            value={draftSettings.ageTo}
            onChange={(e) => handleDraftAgeMax(e.target.value)}
          />
        </div>
      </div>

      <div className="filter-card compact slim-range distance-compact">
        <div className="range-title-row">
          <label>{t.distance}</label>
          <span className="range-value">
            {draftSettings.maxDistance} {draftSettings.unit === "mi" ? t.miles : t.km}
          </span>
        </div>

        <div className="single-range compact-range">
          <div className="single-range-track" />
          <div
            className="single-range-active"
            style={{ width: `${Math.max(distancePercent, 2)}%` }}
          />
          <input
            type="range"
            min="1"
            max="5000"
            value={draftSettings.maxDistance}
            onChange={(e) =>
              setDraftSettings((p) => ({
                ...p,
                maxDistance: Number(e.target.value),
              }))
            }
          />
        </div>
      </div>

      <div className="filters-actions compact-actions">
        <button className="secondary-btn" onClick={resetFilters}>
          {t.reset}
        </button>
        <button className="primary-btn" onClick={applyFilters}>
          {t.apply}
        </button>
      </div>
    </div>
  );

  return (
    <div className="app-shell">
      <style>{`
        *{box-sizing:border-box}
        html,body,#root{
          margin:0;padding:0;min-height:100%;
          font-family:Inter,Arial,sans-serif;
          background:
            radial-gradient(circle at top left, rgba(91,181,255,.10), transparent 25%),
            radial-gradient(circle at top right, rgba(255,126,166,.10), transparent 24%),
            linear-gradient(180deg,#f4f8fd 0%,#eef4fb 100%);
          color:#18222d;
          scroll-behavior:smooth;
        }
        body{
          overflow-x:hidden;
          overscroll-behavior-y:none;
          -webkit-font-smoothing:antialiased;
          text-rendering:optimizeLegibility;
        }
        button,input,select,textarea{font-family:inherit}
        .app-shell{min-height:100vh}
        .page{
          max-width:1380px;
          margin:0 auto;
          padding:18px 16px 110px;
          scroll-behavior:smooth;
        }
        .page,
        .panel,
        .profile-page-scroll,
        .message-body{
          scroll-behavior:smooth;
        }
        .premium-scroll{
          -webkit-overflow-scrolling:touch;
          overscroll-behavior:contain;
        }
        .topbar,.panel{
          background:rgba(255,255,255,.84);
          backdrop-filter:blur(16px);
          box-shadow:0 12px 30px rgba(27,40,52,.08)
        }
        .topbar{
          display:flex;justify-content:space-between;align-items:center;gap:14px;
          padding:14px 18px;border-radius:24px;margin-bottom:18px;position:static;z-index:90
        }
        .brand-wrap{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
        .brand{
          font-size:22px;
          font-weight:900;
          color:#2894f4;
          letter-spacing:-.03em;
        }
        .lang-switch,.hero-actions,.filter-actions,.segmented,.mutual-actions{
          display:flex;gap:10px;flex-wrap:wrap
        }
        .chip-btn,.nav-btn,.primary-btn,.secondary-btn,.ghost-btn,.action-btn,.back-btn,.glass-filter-btn{
          border:none;cursor:pointer;transition:.2s ease;font-weight:800
        }
        .chip-btn,.nav-btn{
          border-radius:999px;padding:10px 14px;background:#ebf2fa;color:#213546
        }
        .chip-btn.active,.nav-btn.active,.primary-btn{
          background:linear-gradient(135deg,#33a8ff,#1882eb);
          color:#fff;
          box-shadow:0 12px 22px rgba(38,144,243,.24)
        }
        .primary-btn,.secondary-btn,.ghost-btn,.back-btn{
          border-radius:16px;
          padding:13px 18px;
          font-size:14px
        }
        .secondary-btn{
          background:#edf4fb;color:#233747
        }
        .ghost-btn{
          background:rgba(255,255,255,.16);
          color:#fff;
          border:1px solid rgba(255,255,255,.28)
        }
        .back-btn{
          background:#edf4fb;
          color:#213546;
          display:inline-flex;
          align-items:center;
          gap:8px;
        }
        .nav{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}
        .nav-btn{padding:12px 16px;font-size:14px}
        .mobile-tabs{display:none !important}
        .panel{border-radius:28px;padding:22px}
        .hero{display:grid;grid-template-columns:1.02fr .98fr;gap:20px;margin-bottom:22px}
        .hero-title,.section-title{
          margin:0 0 12px;font-size:clamp(34px,5vw,68px);line-height:.95;font-weight:900;letter-spacing:-1.6px
        }
        .hero-text,.section-subtitle,.muted{font-size:17px;line-height:1.55;color:#5d7387}

        .hero-mini-grid{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:14px;
          min-height:520px;
        }
        .hero-mini-card{
          position:relative;
          overflow:hidden;
          border-radius:28px;
          min-height:250px;
          box-shadow:0 22px 38px rgba(25,44,64,.12);
          background:#fff;
        }
        .hero-mini-card img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }
        .hero-mini-overlay{
          position:absolute;
          inset:0;
          display:flex;
          flex-direction:column;
          justify-content:flex-end;
          padding:16px;
          color:#fff;
          background:linear-gradient(180deg,rgba(0,0,0,.02),rgba(6,22,38,.72));
        }
        .hero-mini-name{
          margin:0 0 4px;
          font-size:22px;
          line-height:1.05;
          font-weight:900;
          display:flex;
          align-items:center;
          flex-wrap:wrap;
          gap:4px;
        }
        .hero-mini-meta{
          margin:0 0 6px;
          font-size:12px;
          font-weight:800;
          color:rgba(255,255,255,.82);
          letter-spacing:.02em;
        }
        .hero-mini-bio{
          margin:0;
          font-size:13px;
          line-height:1.4;
          color:rgba(255,255,255,.92);
          display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }

        .quick-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .quick-num{
          width:46px;height:46px;border-radius:16px;display:inline-flex;align-items:center;justify-content:center;
          background:linear-gradient(135deg,#33a8ff,#1882eb);color:#fff;font-weight:900;margin-bottom:14px
        }

        .search-wrap{
          display:grid;
          grid-template-columns:minmax(0,1fr);
          gap:16px
        }
        .search-stage{
          width:100%;
          display:grid;
          gap:14px;
          align-items:start;
        }
        .search-head-area{
          display:grid;
          gap:10px;
          margin-bottom:8px;
        }
        .search-toolbar{
          position:relative;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
        }
        .search-toolbar-left{
          display:flex;
          align-items:center;
          gap:12px;
          min-width:0;
          flex-wrap:wrap;
        }
        .glass-filter-btn{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:12px 16px;
          border-radius:999px;
          font-size:15px;
          color:#173550;
          background:
            linear-gradient(180deg, rgba(255,255,255,.62), rgba(255,255,255,.28)),
            linear-gradient(135deg, rgba(72,170,255,.16), rgba(255,120,170,.10));
          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);
          border:1px solid rgba(255,255,255,.48);
          box-shadow:
            0 12px 28px rgba(31,76,122,.12),
            inset 0 1px 0 rgba(255,255,255,.65),
            inset 0 -1px 0 rgba(255,255,255,.14);
        }
        .glass-filter-btn:hover{
          transform:translateY(-2px);
          box-shadow:
            0 16px 34px rgba(31,76,122,.16),
            inset 0 1px 0 rgba(255,255,255,.72),
            inset 0 -1px 0 rgba(255,255,255,.16);
        }
        .glass-filter-btn.active{
          background:
            linear-gradient(180deg, rgba(255,255,255,.76), rgba(255,255,255,.40)),
            linear-gradient(135deg, rgba(72,170,255,.22), rgba(255,120,170,.16));
        }
        .search-counter{
          font-size:18px;
          font-weight:900;
          color:#627b91;
          min-width:26px;
          text-align:right;
        }

        .filters-inline-shell{
          position:relative;
          min-height:0;
        }
        .filters-rail{
          width:100%;
          border-radius:24px;
          padding:12px 14px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.82), rgba(255,255,255,.58)),
            linear-gradient(135deg, rgba(51,168,255,.08), rgba(255,126,166,.06));
          backdrop-filter:blur(22px);
          -webkit-backdrop-filter:blur(22px);
          border:1px solid rgba(255,255,255,.56);
          box-shadow:
            0 16px 38px rgba(18,46,74,.12),
            inset 0 1px 0 rgba(255,255,255,.72);
          animation:filterRailSlide .26s ease;
          transform-origin:left center;
        }
        .filters-rail-grid{
          display:grid;
          grid-template-columns:1.1fr 1fr 1.15fr 1.15fr .8fr 1.6fr 1.6fr auto;
          gap:10px;
          align-items:end;
        }
        .filter-card{
          min-width:0;
          padding:10px 12px;
          border-radius:18px;
          background:rgba(255,255,255,.72);
          border:1px solid rgba(138,181,216,.14);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.70);
        }
        .filter-card.compact{
          min-height:72px;
        }
        .filter-card label{
          display:block;
          margin-bottom:7px;
          font-size:10px;
          font-weight:900;
          color:#7c94a9;
          text-transform:uppercase;
          letter-spacing:.06em;
        }
        .filter-card select,
        .filter-card input[type="number"]{
          width:100%;
          border:none;
          outline:none;
          background:transparent;
          font-size:14px;
          font-weight:800;
          color:#18354f;
          padding:0;
          min-height:24px;
        }
        .slim-range{
          padding-top:10px;
          padding-bottom:10px;
        }
        .range-title-row{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:8px;
          margin-bottom:10px;
        }
        .range-title-row label{
          margin:0;
        }
        .range-value{
          font-size:13px;
          font-weight:900;
          color:#1a3854;
          white-space:nowrap;
        }
        .dual-range,
        .single-range{
          position:relative;
          height:24px;
          display:flex;
          align-items:center;
        }
        .compact-range{
          height:20px;
        }
        .dual-range-track,
        .single-range-track{
          position:absolute;
          left:0;
          right:0;
          height:6px;
          border-radius:999px;
          background:#dfeaf5;
        }
        .dual-range-active,
        .single-range-active{
          position:absolute;
          height:6px;
          border-radius:999px;
          background:linear-gradient(135deg,#33a8ff,#1882eb);
          transition:left .06s linear, width .06s linear;
        }
        .single-range-active{
          left:0;
        }
        .dual-range input[type="range"],
        .single-range input[type="range"]{
          position:absolute;
          inset:0;
          width:100%;
          margin:0;
          background:transparent;
          -webkit-appearance:none;
          appearance:none;
          pointer-events:none;
        }
        .dual-range input[type="range"]::-webkit-slider-thumb,
        .single-range input[type="range"]::-webkit-slider-thumb{
          -webkit-appearance:none;
          appearance:none;
          width:20px;
          height:20px;
          border-radius:50%;
          background:#fff;
          border:2px solid #2f9cff;
          box-shadow:0 4px 14px rgba(23,73,115,.16);
          pointer-events:auto;
          cursor:pointer;
          transition:transform .08s ease;
        }
        .dual-range input[type="range"]::-webkit-slider-thumb:active,
        .single-range input[type="range"]::-webkit-slider-thumb:active{
          transform:scale(1.06);
        }
        .dual-range input[type="range"]::-moz-range-thumb,
        .single-range input[type="range"]::-moz-range-thumb{
          width:20px;
          height:20px;
          border-radius:50%;
          background:#fff;
          border:2px solid #2f9cff;
          box-shadow:0 4px 14px rgba(23,73,115,.16);
          pointer-events:auto;
          cursor:pointer;
        }
        .dual-range input[type="range"]::-webkit-slider-runnable-track,
        .single-range input[type="range"]::-webkit-slider-runnable-track{
          height:6px;
          background:transparent;
        }
        .dual-range input[type="range"]::-moz-range-track,
        .single-range input[type="range"]::-moz-range-track{
          height:6px;
          background:transparent;
          border:none;
        }
        .compact-actions{
          display:flex;
          align-items:center;
          justify-content:flex-end;
          gap:8px;
          min-height:72px;
          padding-left:2px;
        }
        .compact-actions .primary-btn,
        .compact-actions .secondary-btn{
          padding:11px 16px;
          border-radius:14px;
          font-size:13px;
          white-space:nowrap;
        }

        .deck-wrap{
          display:flex;
          justify-content:center;
          align-items:flex-start;
          min-height:78vh
        }
        .search-card-stage{
          width:100%;
          max-width:560px;
          position:relative;
          padding-bottom:118px;
        }
        .profile-page-wrap{
          width:100%;
          height:min(84vh,820px);
          border-radius:34px;
          overflow:hidden;
          position:relative;
          background:#fff;
          box-shadow:0 30px 60px rgba(20,39,60,.18);
          touch-action:pan-y;
          user-select:none;
          will-change:transform;
        }
        .profile-page-wrap.is-dragging{
          box-shadow:0 38px 78px rgba(20,39,60,.24);
        }
        .profile-page-scroll{
          height:100%;
          overflow:auto;
          padding-bottom:44px;
          -ms-overflow-style:none;
          scrollbar-width:none;
          -webkit-overflow-scrolling:touch;
          overscroll-behavior:contain;
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
          color:#6b7d8f;
          font-size:14px;
          font-weight:800;
        }
        .premium-pill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:6px 10px;
          border-radius:999px;
          background:linear-gradient(135deg,#33a8ff,#1882eb);
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
          background:#f6faff;
          border-radius:20px;
          padding:14px;
          border:1px solid rgba(77,130,179,.08);
        }
        .info-card-label{
          font-size:12px;
          font-weight:900;
          color:#7c93a7;
          margin-bottom:8px;
          text-transform:uppercase;
          letter-spacing:.04em;
        }
        .info-card-value{
          font-size:15px;
          font-weight:800;
          color:#213546;
          line-height:1.4;
        }
        .section-heading{
          margin:0 0 12px;
          font-size:18px;
          font-weight:900;
        }
        .bio-box{
          background:#f6faff;
          border-radius:22px;
          padding:16px;
          color:#4f6578;
          line-height:1.6;
          border:1px solid rgba(77,130,179,.08);
        }
        .chip-row{display:flex;gap:8px;flex-wrap:wrap}
        .interest{
          padding:9px 12px;border-radius:999px;background:#edf5fd;
          font-size:13px;font-weight:800;color:#446176
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
          background:#fff1f4;
          color:#d84f76;
        }
        .danger-btn.block{
          background:#eef6ff;
          color:#2b77cc;
        }
        .danger-btn:hover{transform:translateY(-1px)}

        .swipe-badge{
          position:absolute;
          top:24px;
          z-index:50;
          padding:10px 16px;
          border-radius:16px;
          font-size:26px;
          font-weight:1000;
          letter-spacing:.08em;
          border:3px solid currentColor;
          backdrop-filter:blur(8px);
          -webkit-backdrop-filter:blur(8px);
          background:rgba(255,255,255,.18);
          pointer-events:none;
          transform:rotate(-10deg);
          opacity:0;
          transition:.15s ease;
        }
        .swipe-badge.like{
          right:20px;
          color:#ff4d6d;
          transform:rotate(10deg);
        }
        .swipe-badge.skip{
          left:20px;
          color:#3a8dff;
        }
        .swipe-badge.visible{
          opacity:1;
        }

        .search-floating-actions{
          position:absolute;
          left:0;
          right:0;
          bottom:max(10px, env(safe-area-inset-bottom));
          z-index:80;
          pointer-events:none;
          min-height:100px;
        }
        .desktop-action-btn{
          position:absolute;
          bottom:0;
          width:92px;
          height:92px;
          border-radius:50%;
          font-weight:900;
          pointer-events:auto;
          transform:scale(1);
          transition:transform .2s ease, box-shadow .2s ease;
          backdrop-filter:blur(24px);
          -webkit-backdrop-filter:blur(24px);
          border:1.5px solid rgba(255,255,255,.62);
          box-shadow:
            0 20px 38px rgba(20,39,60,.18),
            inset 0 1px 0 rgba(255,255,255,.56),
            inset 0 -1px 0 rgba(255,255,255,.08),
            0 0 0 4px rgba(255,255,255,.18);
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }
        .desktop-action-btn::before{
          content:"";
          position:absolute;
          top:10px;
          left:14px;
          right:14px;
          height:26px;
          border-radius:999px;
          background:linear-gradient(180deg, rgba(255,255,255,.56), rgba(255,255,255,.06));
          pointer-events:none;
        }
        .desktop-action-btn::after{
          content:"";
          position:absolute;
          inset:0;
          border-radius:inherit;
          background:radial-gradient(circle at 30% 25%, rgba(255,255,255,.30), transparent 42%);
          pointer-events:none;
        }
        .desktop-action-btn.skip{
          left:88px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.46), rgba(228,242,255,.16)),
            linear-gradient(135deg, rgba(58,141,255,.24), rgba(109,170,255,.14));
          color:#2f85ff;
          font-size:38px;
        }
        .desktop-action-btn.like{
          right:88px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.46), rgba(255,233,238,.16)),
            linear-gradient(135deg, rgba(255,84,114,.24), rgba(255,143,170,.14));
          color:#ff4f71;
          font-size:44px;
          line-height:1;
        }
        .desktop-action-btn:hover{
          transform:translateY(-4px) scale(1.04);
          box-shadow:
            0 24px 46px rgba(20,39,60,.22),
            inset 0 1px 0 rgba(255,255,255,.58),
            inset 0 -1px 0 rgba(255,255,255,.08),
            0 0 0 4px rgba(255,255,255,.22);
        }
        .desktop-action-btn:active{transform:scale(.94)}
        .desktop-action-btn.pop{transform:scale(1.10)}
        .action-icon-heart{
          font-size:46px;
          color:#ff4f71;
          filter:drop-shadow(0 2px 10px rgba(255,79,113,.22));
          transform:translateY(1px);
        }
        .action-icon-skip{
          font-size:38px;
          color:#2f85ff;
          filter:drop-shadow(0 2px 10px rgba(47,133,255,.20));
        }

        .footer-hint{
          margin-top:16px;
          font-size:12px;
          color:#7b91a3;
          text-align:center;
          font-weight:700;
        }
        .notice{
          position:fixed;
          top:20px;
          left:50%;
          transform:translateX(-50%);
          z-index:120;
          background:rgba(18,32,46,.94);
          color:#fff;
          padding:12px 16px;
          border-radius:999px;
          font-size:13px;
          font-weight:800;
          box-shadow:0 10px 26px rgba(18,32,46,.24);
        }
        .empty{
          min-height:320px;display:flex;flex-direction:column;align-items:center;justify-content:center;
          text-align:center;color:#587085;gap:10px
        }
        .messages-outer,.profile-layout,.settings-layout{display:grid;gap:16px}
        .messages-outer{grid-template-columns:minmax(0,1fr);min-height:620px}
        .profile-layout{grid-template-columns:320px minmax(0,1fr)}
        .settings-layout{grid-template-columns:360px minmax(0,1fr)}
        .list-grid{display:grid;gap:10px}
        .list-item,.chat-item{
          display:flex;align-items:center;gap:12px;padding:14px;border-radius:22px;background:#f8fbff
        }
        .list-item img{
          width:62px;
          height:62px;
          border-radius:18px;
          object-fit:cover;
          object-position:center;
          flex-shrink:0
        }
        .chat-item{
          cursor:pointer;
          align-items:flex-start;
          justify-content:space-between;
          transition:.18s ease;
          border:1px solid transparent;
          background:#f6fbff;
          padding:12px 14px;
        }
        .chat-item:hover{
          transform:translateY(-1px);
          background:#f1f8ff;
        }
        .chat-item.active{
          background:linear-gradient(135deg,rgba(51,168,255,.12),rgba(31,147,255,.08));
          border:1px solid rgba(51,168,255,.14)
        }
        .chat-item img{
          width:64px;
          height:64px;
          border-radius:18px;
          object-fit:cover;
          object-position:center;
          flex-shrink:0;
        }
        .chat-main{
          flex:1;
          min-width:0;
          display:flex;
          gap:12px;
          align-items:flex-start;
        }
        .avatar-wrap{
          position:relative;
          flex-shrink:0;
        }
        .avatar-status{
          position:absolute;
          right:2px;
          bottom:2px;
          width:13px;
          height:13px;
          border-radius:50%;
          background:#22c55e;
          border:2px solid #fff;
          box-shadow:0 0 0 2px rgba(255,255,255,.6);
        }
        .avatar-status.offline{
          background:#b8c4cf;
        }
        .chat-meta{
          min-width:0;
          flex:1;
        }
        .item-topline{
          display:flex;
          align-items:center;
          gap:8px;
          justify-content:space-between;
          margin-bottom:4px;
        }
        .item-title{
          font-size:16px;
          font-weight:900;
          margin:0;
          display:flex;
          align-items:center;
          flex-wrap:wrap;
          gap:0;
          min-width:0;
        }
        .item-sub{
          font-size:13px;
          color:#628096;
          margin:0;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
          display:flex;
          align-items:center;
          gap:8px;
        }
        .item-sub-text{
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        .chat-right{
          display:flex;
          flex-direction:column;
          align-items:flex-end;
          gap:8px;
          margin-left:10px;
          flex-shrink:0;
        }
        .time-mini{
          font-size:12px;
          color:#7e94a8;
          font-weight:800;
          white-space:nowrap;
        }
        .reply-badge{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:6px 10px;
          border-radius:999px;
          background:rgba(51,168,255,.12);
          color:#1882eb;
          font-size:11px;
          font-weight:900;
          white-space:nowrap;
        }
        .delivery-mini{
          font-size:11px;
          color:#8ea1b1;
          font-weight:800;
          white-space:nowrap;
        }
        .unread-dot{
          width:10px;
          height:10px;
          border-radius:50%;
          background:#1f9fff;
          flex-shrink:0;
          box-shadow:0 0 0 4px rgba(31,159,255,.10);
        }
        .dialog-icon{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          width:18px;
          height:18px;
          border-radius:50%;
          background:#e8f4ff;
          color:#1e92f0;
          font-size:11px;
          font-weight:900;
          flex-shrink:0;
          margin-right:6px;
        }
        .message-shell{
          display:grid;
          grid-template-rows:auto 1fr auto;
          min-height:620px;
        }
        .message-header{
          display:flex;
          align-items:center;
          gap:12px;
          padding-bottom:14px;
          border-bottom:1px solid rgba(82,131,176,.10)
        }
        .message-header img{
          width:68px;
          height:68px;
          border-radius:18px;
          object-fit:cover;
          object-position:center;
        }
        .message-header-line{
          display:flex;
          align-items:center;
          gap:8px;
          justify-content:space-between;
        }
        .message-header-actions{
          display:flex;
          gap:8px;
          flex-wrap:wrap;
          margin-top:8px;
        }
        .message-body{
          padding:18px 10px 18px 10px;
          overflow:auto;
          display:flex;
          flex-direction:column;
          gap:12px;
          background:
            radial-gradient(circle at 20% 20%, rgba(51,168,255,.06), transparent 18%),
            radial-gradient(circle at 80% 60%, rgba(51,168,255,.05), transparent 22%),
            linear-gradient(180deg,#eef6fd 0%, #edf5fc 100%);
          border-radius:22px;
          margin-top:12px;
          scroll-behavior:smooth;
          -webkit-overflow-scrolling:touch;
          overscroll-behavior:contain;
        }
        .message-row{
          display:flex;
          flex-direction:column;
          gap:4px;
        }
        .message-row.me{
          align-items:flex-end;
        }
        .message-row.them{
          align-items:flex-start;
        }
        .bubble{
          max-width:78%;
          padding:12px 14px 8px;
          border-radius:18px;
          font-size:15px;
          line-height:1.45;
          position:relative;
          box-shadow:0 4px 12px rgba(30,59,86,.06);
        }
        .bubble.them{
          align-self:flex-start;
          background:#fff;
          color:#1b2f40;
          border-top-left-radius:8px;
        }
        .bubble.me{
          align-self:flex-end;
          background:linear-gradient(135deg,#d8efff,#c8e8ff);
          color:#14334a;
          border-top-right-radius:8px;
        }
        .bubble-meta{
          margin-top:6px;
          display:flex;
          justify-content:flex-end;
          align-items:center;
          gap:6px;
          font-size:11px;
          color:#7390a7;
          font-weight:800;
        }
        .bubble-checks.read{
          color:#1f9fff;
        }
        .bubble-checks.delivered{
          color:#86a3b8;
        }
        .message-input-row{
          display:flex;
          gap:10px;
          padding-top:14px;
          border-top:1px solid rgba(82,131,176,.10)
        }
        .message-input-shell{
          display:flex;
          align-items:center;
          gap:10px;
          width:100%;
          background:#f3f9ff;
          border:1px solid rgba(82,131,176,.10);
          border-radius:20px;
          padding:8px 10px 8px 14px;
        }
        .chat-action-icon{
          width:34px;
          height:34px;
          border-radius:50%;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          background:#e8f4ff;
          color:#1f93f1;
          font-size:16px;
          flex-shrink:0;
        }
        .message-input-row input,.field input,.field select,.field textarea{
          width:100%;border-radius:16px;border:1px solid rgba(95,80,110,.12);
          background:#fcfbfd;padding:14px 15px;font-size:15px;outline:none;font-family:inherit
        }
        .message-input-shell input{
          border:none !important;
          background:transparent !important;
          padding:8px 0 !important;
        }
        .field{display:grid;gap:8px}
        .field label{font-size:14px;font-weight:800;color:#4b6479}
        .field-group,.help-grid,.info-list{display:grid;gap:14px}
        .two-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
        .profile-avatar{text-align:center}
        .profile-avatar img{width:180px;height:180px;border-radius:50%;margin-bottom:14px;object-fit:cover}
        .profile-main-name{margin:0;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap}
        .profile-photo-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;margin-top:12px}
        .profile-photo-grid img{width:100%;height:170px;border-radius:18px;object-fit:cover}
        .info-row{
          display:flex;justify-content:space-between;gap:12px;padding:14px 0;border-bottom:1px solid rgba(82,131,176,.10)
        }
        .help-item{padding:18px;border-radius:20px;background:#f7fbff}
        .mutual-modal{
          position:fixed;inset:0;background:rgba(7,20,33,.45);display:flex;align-items:center;justify-content:center;
          padding:18px;z-index:100
        }
        .mutual-box{
          width:min(520px,100%);border-radius:30px;padding:28px;background:linear-gradient(135deg,#33a8ff 0%,#1882eb 100%);
          color:#fff;box-shadow:0 24px 50px rgba(20,39,60,.32);text-align:center;position:relative;overflow:hidden;
          animation:matchPop .38s ease;
        }
        .mutual-box::before,
        .mutual-box::after{
          content:"";
          position:absolute;
          width:180px;
          height:180px;
          border-radius:50%;
          background:rgba(255,255,255,.10);
          filter:blur(4px);
        }
        .mutual-box::before{top:-60px;left:-40px}
        .mutual-box::after{bottom:-60px;right:-40px}
        .mutual-avatars{display:flex;justify-content:center;align-items:center;gap:14px;margin:16px 0 22px;position:relative;z-index:2}
        .mutual-avatars img{
          width:94px;height:94px;border-radius:50%;object-fit:cover;border:4px solid rgba(255,255,255,.5)
        }
        .heart{
          font-size:34px;
          animation:heartBeat 1.1s infinite ease-in-out;
        }
        .floating-hearts{
          position:absolute;
          inset:0;
          pointer-events:none;
          overflow:hidden;
        }
        .floating-hearts span{
          position:absolute;
          bottom:-10px;
          font-size:24px;
          opacity:0;
          animation:floatHeart 1.4s ease forwards;
        }
        .floating-hearts span:nth-child(1){left:16%;animation-delay:.02s}
        .floating-hearts span:nth-child(2){left:34%;animation-delay:.12s}
        .floating-hearts span:nth-child(3){left:50%;animation-delay:.20s}
        .floating-hearts span:nth-child(4){left:66%;animation-delay:.08s}
        .floating-hearts span:nth-child(5){left:82%;animation-delay:.18s}

        .phone-bottom-nav{display:none}

        @keyframes heartBeat{
          0%,100%{transform:scale(1)}
          35%{transform:scale(1.18)}
          70%{transform:scale(.96)}
        }
        @keyframes floatHeart{
          0%{transform:translateY(0) scale(.7);opacity:0}
          15%{opacity:1}
          100%{transform:translateY(-260px) scale(1.2);opacity:0}
        }
        @keyframes matchPop{
          0%{transform:scale(.82) translateY(18px);opacity:0}
          100%{transform:scale(1) translateY(0);opacity:1}
        }
        @keyframes filterRailSlide{
          0%{opacity:0;transform:translateX(-16px) scale(.985)}
          100%{opacity:1;transform:translateX(0) scale(1)}
        }

        @media (max-width:1280px){
          .filters-rail-grid{
            grid-template-columns:repeat(4,minmax(0,1fr));
          }
          .compact-actions{
            grid-column:span 4;
            justify-content:flex-end;
            min-height:auto;
          }
        }

        @media (max-width:1120px){
          .hero,.profile-layout,.settings-layout{grid-template-columns:1fr}
          .quick-grid{grid-template-columns:1fr}
          .hero-mini-grid{min-height:auto}
        }

        @media (max-width:980px){
          .desktop-action-btn.skip{left:72px}
          .desktop-action-btn.like{right:72px}
          .filters-rail-grid{
            grid-template-columns:repeat(3,minmax(0,1fr));
          }
          .compact-actions{
            grid-column:span 3;
          }
        }

        @media (max-width:760px){
          .page{padding:12px 12px 118px}
          .topbar{position:static;flex-direction:column;align-items:flex-start;padding:14px}
          .nav{display:none}
          .panel{padding:18px;border-radius:24px}
          .hero{grid-template-columns:1fr}
          .hero-mini-grid{
            grid-template-columns:repeat(2,minmax(0,1fr));
            gap:12px;
          }
          .hero-mini-card{
            min-height:200px;
            border-radius:22px;
          }
          .hero-mini-name{font-size:18px}
          .hero-mini-bio{font-size:12px}
          .profile-page-wrap{
            max-width:100%;
            height:min(82vh,760px);
            border-radius:28px
          }
          .profile-hero-photo,.profile-photo-stack img{height:350px}
          .profile-title{font-size:30px}
          .info-grid{grid-template-columns:1fr}

          .filters-rail{
            padding:12px;
            border-radius:22px;
          }
          .filters-rail-grid{
            grid-template-columns:1fr 1fr;
            gap:10px;
          }
          .compact-actions{
            grid-column:span 2;
            display:grid;
            grid-template-columns:1fr 1fr;
          }

          .search-card-stage{
            padding-bottom:110px;
          }
          .search-floating-actions{
            bottom:max(6px, env(safe-area-inset-bottom));
          }
          .desktop-action-btn{
            width:80px;
            height:80px;
          }
          .desktop-action-btn.skip{left:32px}
          .desktop-action-btn.like{right:32px}
          .action-icon-heart{font-size:40px}
          .action-icon-skip{font-size:32px}

          .two-col{grid-template-columns:1fr}
          .chat-item{
            padding:12px;
            border-radius:18px;
          }
          .chat-item img{
            width:56px;
            height:56px;
            border-radius:16px;
          }
          .message-header img{
            width:60px;
            height:60px;
            border-radius:16px;
          }
          .item-title{font-size:14px}
          .item-sub{font-size:12px}
          .reply-badge{font-size:10px;padding:5px 9px}
          .delivery-mini{font-size:10px}
          .time-mini{font-size:11px}

          .phone-bottom-nav{
            position:fixed;
            left:10px;
            right:10px;
            bottom:10px;
            display:grid;
            grid-template-columns:repeat(5,1fr);
            gap:8px;
            padding:9px;
            border-radius:24px;
            background:rgba(255,255,255,.94);
            backdrop-filter:blur(14px);
            box-shadow:0 16px 34px rgba(20,39,60,.12);
            z-index:80
          }
          .phone-tab-btn{
            border:none;
            background:transparent;
            padding:12px 4px;
            min-height:54px;
            border-radius:18px;
            font-size:12px;
            font-weight:900;
            color:#5b6e80;
            line-height:1.15
          }
          .phone-tab-btn.active{
            background:linear-gradient(135deg,#33a8ff,#1882eb);
            color:#fff
          }

          .message-input-row{flex-direction:column}
          .bubble{max-width:86%}
        }

        @media (max-width:520px){
          .filters-rail-grid{
            grid-template-columns:1fr;
          }
          .compact-actions{
            grid-column:span 1;
            grid-template-columns:1fr 1fr;
          }
          .search-toolbar{
            align-items:flex-start;
          }
          .search-counter{
            padding-top:8px;
          }
          .glass-filter-btn{
            font-size:14px;
            padding:11px 14px;
          }
        }
      `}</style>

      {notice && <div className="notice">{notice}</div>}

      <div className="page">
        <header className="topbar">
          <div className="brand-wrap">
            <div className="brand">{t.brand}</div>
            <div className="lang-switch">
              <button
                className={`chip-btn ${lang === "ru" ? "active" : ""}`}
                onClick={() => setLang("ru")}
              >
                RU
              </button>
              <button
                className={`chip-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
          </div>

          <nav className="nav">
            <button className={`nav-btn ${tab === "home" ? "active" : ""}`} onClick={() => setTab("home")}>
              {t.home}
            </button>
            <button className={`nav-btn ${tab === "search" ? "active" : ""}`} onClick={() => setTab("search")}>
              {t.search}
            </button>
            <button
              className={`nav-btn ${tab === "messages" ? "active" : ""}`}
              onClick={() => {
                setTab("messages");
                setChatScreen("list");
              }}
            >
              {t.messages}
            </button>
            <button className={`nav-btn ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>
              {t.profile}
            </button>
            <button
              className={`nav-btn ${tab === "settings" ? "active" : ""}`}
              onClick={() => setTab("settings")}
            >
              {t.settings}
            </button>
          </nav>
        </header>

        {tab === "home" && (
          <>
            <section className="hero">
              <div className="panel">
                <h1 className="hero-title">{t.heroTitle}</h1>
                <p className="hero-text">{t.heroText}</p>
                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => setTab("search")}>
                    {t.heroPrimary}
                  </button>
                  <button
                    className="secondary-btn"
                    onClick={() => {
                      setTab("messages");
                      setChatScreen("list");
                    }}
                  >
                    {t.heroSecondary}
                  </button>
                </div>
              </div>

              <div className="hero-mini-grid">
                {heroPreviewProfiles.map((profile) => (
                  <div className="hero-mini-card" key={profile.id}>
                    <img src={profile.photos[0]} alt={profile.name} />
                    <div className="hero-mini-overlay">
                      <h3 className="hero-mini-name">
                        {profile.name}, {profile.age} {profile.zodiac}
                        {profile.verified && <Badge />}
                      </h3>
                      <p className="hero-mini-meta">
                        {profile.city}, {profile.country}
                      </p>
                      <p className="hero-mini-bio">
                        {lang === "ru" ? profile.bio : profile.bioEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="quick-grid">
              <div className="panel">
                <div className="quick-num">1</div>
                <h3>{t.card1}</h3>
                <p className="muted">{t.card1t}</p>
              </div>
              <div className="panel">
                <div className="quick-num">2</div>
                <h3>{t.card2}</h3>
                <p className="muted">{t.card2t}</p>
              </div>
              <div className="panel">
                <div className="quick-num">3</div>
                <h3>{t.card3}</h3>
                <p className="muted">{t.card3t}</p>
              </div>
            </section>
          </>
        )}

        {tab === "search" && (
          <>
            <h2 className="section-title">{t.searchTitle}</h2>

            <section className="search-wrap">
              <div className="search-head-area">
                <div className="search-toolbar">
                  <div className="search-toolbar-left">
                    <button
                      ref={filterButtonRef}
                      className={`glass-filter-btn ${showFilters ? "active" : ""}`}
                      onClick={() => setShowFilters((prev) => !prev)}
                    >
                      ⚙️ {t.filters}
                    </button>
                  </div>

                  <div className="search-counter">{filteredProfiles.length}</div>
                </div>

                <div className="filters-inline-shell">
                  {showFilters && (
                    <div className="filters-rail" ref={filterRailRef}>
                      <FilterContent />
                    </div>
                  )}
                </div>
              </div>

              <div className="panel">
                {activeProfile ? (
                  <div className="search-stage">
                    <div className="deck-wrap">
                      <div className="search-card-stage">
                        <div
                          className={`profile-page-wrap ${Math.abs(swipeX) > 0 ? "is-dragging" : ""}`}
                          style={cardStyle}
                          onTouchStart={onTouchStartCard}
                          onTouchMove={onTouchMoveCard}
                          onTouchEnd={onTouchEndCard}
                        >
                          <div className={`swipe-badge like ${swipeStampClass === "like" ? "visible" : ""}`}>
                            {t.likeStamp}
                          </div>
                          <div className={`swipe-badge skip ${swipeStampClass === "skip" ? "visible" : ""}`}>
                            {t.skipStamp}
                          </div>

                          {renderProfileContent(activeProfile, {
                            interactive: true,
                            scrollRef: profilePageRef,
                          })}
                        </div>

                        <div className="search-floating-actions">
                          <button
                            className={`desktop-action-btn skip ${skipPulse ? "pop" : ""}`}
                            onClick={() => triggerSwipeOut("left", () => handleSkip(activeProfile))}
                            title="skip"
                          >
                            <span className="action-icon-skip">✕</span>
                          </button>

                          <button
                            className={`desktop-action-btn like ${likePulse ? "pop" : ""}`}
                            onClick={() => triggerSwipeOut("right", () => handleLike(activeProfile))}
                            title="like"
                          >
                            <span className="action-icon-heart">❤</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="empty">
                    <h3>{t.emptyDeck}</h3>
                    <p>{t.emptyDeckText}</p>
                    <button className="primary-btn" onClick={restartDeck}>
                      {t.restart}
                    </button>
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
              <button
                className={`chip-btn ${messageView === "matches" ? "active" : ""}`}
                onClick={() => {
                  setMessageView("matches");
                  setChatScreen("list");
                }}
              >
                {t.msgMatches}
              </button>
              <button
                className={`chip-btn ${messageView === "liked" ? "active" : ""}`}
                onClick={() => {
                  setMessageView("liked");
                  setChatScreen("list");
                }}
              >
                {t.msgLikedYou}
              </button>
              <button
                className={`chip-btn ${messageView === "guests" ? "active" : ""}`}
                onClick={() => {
                  setMessageView("guests");
                  setChatScreen("list");
                }}
              >
                {t.msgGuests}
              </button>
            </div>

            <section className="messages-outer">
              <div className="panel">
                {messageView === "matches" ? (
                  chatScreen === "list" ? (
                    listProfiles.length ? (
                      <div className="list-grid">
                        {listProfiles.map((profile) => {
                          const lastMsg = getLastMessage(profile.id);
                          const isActive = selectedChatId === profile.id;
                          const unread = needsMyReply(profile.id);

                          return (
                            <div
                              key={profile.id}
                              className={`chat-item ${isActive ? "active" : ""}`}
                              onClick={() => {
                                setSelectedChatId(profile.id);
                                setChatScreen("chat");
                              }}
                            >
                              <div className="chat-main">
                                <div className="avatar-wrap">
                                  <img src={profile.photos[0]} alt={profile.name} />
                                  <span className={`avatar-status ${profile.online ? "" : "offline"}`} />
                                </div>

                                <div className="chat-meta">
                                  <div className="item-topline">
                                    <div className="item-title">
                                      <span className="dialog-icon">💬</span>
                                      {profile.name}
                                      {profile.verified && <Badge />}
                                    </div>
                                  </div>

                                  <p className="item-sub">
                                    {unread && <span className="unread-dot" />}
                                    <span className="item-sub-text">
                                      {lastMsg
                                        ? lang === "ru"
                                          ? lastMsg.text
                                          : lastMsg.textEn || lastMsg.text
                                        : `${profile.city}, ${profile.country}`}
                                    </span>
                                  </p>
                                </div>
                              </div>

                              <div className="chat-right">
                                <span className="time-mini">{lastMsg?.time || "12:00"}</span>
                                {unread && <span className="reply-badge">{t.yourTurn}</span>}
                                {lastMsg?.from === "me" ? (
                                  <span className="delivery-mini">
                                    {lastMsg.status === "read" ? t.read : t.delivered}
                                  </span>
                                ) : (
                                  <span className="delivery-mini">
                                    {profile.online ? t.online : t.offline}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="empty">{t.noMessages}</div>
                    )
                  ) : selectedChatProfile && matches.includes(selectedChatProfile.id) ? (
                    <div className="message-shell">
                      <div>
                        <button className="back-btn" onClick={() => setChatScreen("list")}>
                          ← {t.backToChats}
                        </button>

                        <div className="message-header" style={{ marginTop: 14 }}>
                          <div className="avatar-wrap">
                            <img src={selectedChatProfile.photos[0]} alt={selectedChatProfile.name} />
                            <span className={`avatar-status ${selectedChatProfile.online ? "" : "offline"}`} />
                          </div>

                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div className="message-header-line">
                              <div className="item-title">
                                {selectedChatProfile.name}, {selectedChatProfile.age}{" "}
                                {selectedChatProfile.zodiac}
                                {selectedChatProfile.verified && <Badge />}
                              </div>
                            </div>
                            <p className="item-sub">
                              {selectedChatProfile.online ? t.online : t.offline} •{" "}
                              {selectedChatProfile.city}
                            </p>

                            <div className="message-header-actions">
                              <button
                                className="secondary-btn"
                                onClick={() => openProfilePreview(selectedChatProfile.id)}
                              >
                                {t.openProfile}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-body" ref={messageBodyRef}>
                        {(messages[selectedChatId] || []).map((msg, i) => (
                          <div key={i} className={`message-row ${msg.from}`}>
                            <div className={`bubble ${msg.from}`}>
                              {lang === "ru" ? msg.text : msg.textEn || msg.text}
                              <div className="bubble-meta">
                                <span>{msg.time || "12:00"}</span>
                                {msg.from === "me" && (
                                  <span className={`bubble-checks ${msg.status}`}>
                                    {getChecks(msg.status)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="message-input-row">
                        <div className="message-input-shell">
                          <span className="chat-action-icon">😊</span>
                          <input
                            value={chatDraft}
                            onChange={(e) => setChatDraft(e.target.value)}
                            placeholder={t.messagePlaceholder}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") sendMessage();
                            }}
                          />
                          <span className="chat-action-icon">📎</span>
                        </div>

                        <button className="primary-btn" onClick={sendMessage}>
                          {t.send}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="empty">{t.noMessages}</div>
                  )
                ) : chatScreen === "list" ? (
                  listProfiles.length ? (
                    <div className="list-grid">
                      {listProfiles.map((profile) => (
                        <div key={profile.id} className="list-item">
                          <div className="avatar-wrap">
                            <img src={profile.photos[0]} alt={profile.name} />
                            <span className={`avatar-status ${profile.online ? "" : "offline"}`} />
                          </div>

                          <div style={{ flex: 1 }}>
                            <div className="item-title">
                              <span className="dialog-icon">
                                {messageView === "liked" ? "♥" : "👁"}
                              </span>
                              {profile.name}, {profile.age} {profile.zodiac}
                              {profile.verified && <Badge />}
                            </div>
                            <p className="item-sub">
                              {profile.city}, {profile.country}
                            </p>
                          </div>
                          {matches.includes(profile.id) ? (
                            <button className="primary-btn" onClick={() => openChatFromProfile(profile.id)}>
                              {t.openChat}
                            </button>
                          ) : (
                            <button
                              className="secondary-btn"
                              disabled
                              style={{ opacity: 0.65, cursor: "default" }}
                            >
                              🔒
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty">
                      {messageView === "liked" ? t.noLikedYou : t.noGuests}
                    </div>
                  )
                ) : (
                  <div className="empty">
                    <h3>{t.typeDialog}</h3>
                    <p>{t.typeDialogText}</p>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {tab === "profilePreview" && viewedProfile && (
          <>
            <h2 className="section-title">{t.profilePreviewTitle}</h2>

            <div style={{ marginBottom: 16 }}>
              <button
                className="back-btn"
                onClick={() => {
                  setTab("messages");
                  setChatScreen("chat");
                }}
              >
                ← {t.backToMessages}
              </button>
            </div>

            <section className="search-wrap">
              <div className="panel">
                <div className="deck-wrap">
                  <div className="search-card-stage" style={{ paddingBottom: 0 }}>
                    <div className="profile-page-wrap" style={{ transform: "none" }}>
                      {renderProfileContent(viewedProfile, {
                        interactive: false,
                        previewOnly: true,
                        scrollRef: profilePageRef,
                      })}
                    </div>
                  </div>
                </div>
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
                  <div className="info-row">
                    <strong>{t.age}</strong>
                    <span>{myProfile.age}</span>
                  </div>
                  <div className="info-row">
                    <strong>{t.cityLabel}</strong>
                    <span>{myProfile.city}</span>
                  </div>
                  <div className="info-row">
                    <strong>{t.countryLabel}</strong>
                    <span>{myProfile.country}</span>
                  </div>
                  <div className="info-row">
                    <strong>{t.zodiac}</strong>
                    <span>{myProfile.zodiac}</span>
                  </div>
                  <div className="info-row">
                    <strong>{t.verified}</strong>
                    <span>{myProfile.verified ? t.verifiedYes : t.verifiedNo}</span>
                  </div>
                </div>

                <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {!editProfile ? (
                    <button className="primary-btn" onClick={() => setEditProfile(true)}>
                      {t.editProfile}
                    </button>
                  ) : (
                    <>
                      <button className="primary-btn" onClick={saveProfile}>
                        {t.saveProfile}
                      </button>
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
                      <input
                        value={profileDraft.name}
                        onChange={(e) =>
                          setProfileDraft((p) => ({ ...p, name: e.target.value }))
                        }
                      />
                    </div>
                    <div className="field">
                      <label>{t.age}</label>
                      <input
                        type="number"
                        value={profileDraft.age}
                        onChange={(e) =>
                          setProfileDraft((p) => ({ ...p, age: Number(e.target.value || 0) }))
                        }
                      />
                    </div>
                  </div>

                  <div className="two-col">
                    <div className="field">
                      <label>{t.cityLabel}</label>
                      <input
                        value={profileDraft.city}
                        onChange={(e) =>
                          setProfileDraft((p) => ({ ...p, city: e.target.value }))
                        }
                      />
                    </div>
                    <div className="field">
                      <label>{t.countryLabel}</label>
                      <input
                        value={profileDraft.country}
                        onChange={(e) =>
                          setProfileDraft((p) => ({ ...p, country: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  <div className="two-col">
                    <div className="field">
                      <label>{t.zodiac}</label>
                      <select
                        value={profileDraft.zodiac}
                        onChange={(e) =>
                          setProfileDraft((p) => ({ ...p, zodiac: e.target.value }))
                        }
                      >
                        {zodiacOptions.map((z) => (
                          <option key={z} value={z}>
                            {z}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="field">
                      <label>{t.verified}</label>
                      <select
                        value={profileDraft.verified ? "yes" : "no"}
                        onChange={(e) =>
                          setProfileDraft((p) => ({ ...p, verified: e.target.value === "yes" }))
                        }
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
                          lang === "ru"
                            ? { ...p, bio: e.target.value }
                            : { ...p, bioEn: e.target.value }
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
                    <select
                      value={draftSettings.searchMode}
                      onChange={(e) =>
                        setDraftSettings((p) => ({ ...p, searchMode: e.target.value }))
                      }
                    >
                      <option value="nearby">{t.nearby}</option>
                      <option value="all">{t.all}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.gender}</label>
                    <select
                      value={draftSettings.gender}
                      onChange={(e) => setDraftSettings((p) => ({ ...p, gender: e.target.value }))}
                    >
                      <option value="all">{t.all}</option>
                      <option value="male">{t.men}</option>
                      <option value="female">{t.women}</option>
                    </select>
                  </div>

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
                    <select
                      value={draftSettings.city}
                      onChange={(e) => setDraftSettings((p) => ({ ...p, city: e.target.value }))}
                    >
                      {cityOptions.map((city) => (
                        <option key={city} value={city}>
                          {city === "All" ? t.allLocations : city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.unit}</label>
                    <select
                      value={draftSettings.unit}
                      onChange={(e) => setDraftSettings((p) => ({ ...p, unit: e.target.value }))}
                    >
                      <option value="mi">{t.miles}</option>
                      <option value="km">{t.km}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.ageRange}</label>
                    <div className="muted">
                      {draftSettings.ageFrom} — {draftSettings.ageTo}
                    </div>
                  </div>

                  <div className="field">
                    <label>{t.distance}</label>
                    <div className="muted">
                      {draftSettings.maxDistance} {draftSettings.unit === "mi" ? t.miles : t.km}
                    </div>
                  </div>

                  <div className="filter-actions">
                    <button className="primary-btn" onClick={applyFilters}>
                      {t.apply}
                    </button>
                    <button className="secondary-btn" onClick={resetFilters}>
                      {t.reset}
                    </button>
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
        <button className={`phone-tab-btn ${tab === "home" ? "active" : ""}`} onClick={() => setTab("home")}>
          {t.home}
        </button>
        <button className={`phone-tab-btn ${tab === "search" ? "active" : ""}`} onClick={() => setTab("search")}>
          {t.search}
        </button>
        <button
          className={`phone-tab-btn ${tab === "messages" || tab === "profilePreview" ? "active" : ""}`}
          onClick={() => {
            setTab("messages");
            setChatScreen("list");
          }}
        >
          {t.messages}
        </button>
        <button className={`phone-tab-btn ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>
          {t.profile}
        </button>
        <button
          className={`phone-tab-btn ${tab === "settings" ? "active" : ""}`}
          onClick={() => setTab("settings")}
        >
          {t.settings}
        </button>
      </div>

      {showMatch && matchedProfile && (
        <div className="mutual-modal" onClick={() => setShowMatch(false)}>
          <div className="mutual-box" onClick={(e) => e.stopPropagation()}>
            {matchBurst && (
              <div className="floating-hearts">
                <span>💙</span>
                <span>✨</span>
                <span>💙</span>
                <span>✨</span>
                <span>💙</span>
              </div>
            )}

            <h2 style={{ marginTop: 0, fontSize: 36, position: "relative", zIndex: 2 }}>
              {t.mutualTitle}
            </h2>
            <p style={{ fontSize: 18, marginBottom: 0, position: "relative", zIndex: 2 }}>
              {t.mutualText}
            </p>

            <div className="mutual-avatars">
              <img src={myProfile.photos[0]} alt={myProfile.name} />
              <div className="heart">♥</div>
              <img src={matchedProfile.photos[0]} alt={matchedProfile.name} />
            </div>

            <div className="mutual-actions" style={{ justifyContent: "center", position: "relative", zIndex: 2 }}>
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
                  setChatScreen("chat");
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
