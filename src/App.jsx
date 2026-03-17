import React, { useEffect, useMemo, useRef, useState } from "react";

const translations = {
  ru: {
    brand: "Telegram Dating",

    navHome: "Главная",
    navSearch: "Поиск",
    navLikes: "Игра симпатии",
    navLikedYou: "Кому я понравился",
    navMessages: "Сообщения",
    navGuests: "Гости",
    navProfile: "Профиль",
    navSettings: "Настройки",
    navHelp: "Помощь",

    heroTitle: "Найди новые знакомства в Telegram",
    heroText:
      "Смотри анкеты, используй поиск по странам и городам, добавляй людей в избранное и общайся после взаимной симпатии.",
    heroPrimary: "Начать поиск",
    heroSecondary: "Открыть сообщения",

    homeCard1: "Быстрый старт",
    homeCard1Text: "Открывай приложение и сразу переходи к поиску и игре симпатии.",
    homeCard2: "Удобные фильтры",
    homeCard2Text: "Выбирай страну, город, единицы измерения и нужную дистанцию.",
    homeCard3: "Общение после мэтча",
    homeCard3Text: "После взаимной симпатии можно сразу начать диалог.",

    searchTitle: "Поиск",
    searchText: "Настрой фильтры и смотри подходящие анкеты.",
    likesTitle: "Игра симпатии",
    likesText: "Ставь лайки, добавляй в избранное и находи взаимные симпатии.",
    likedYouTitle: "Кому я понравился",
    likedYouText: "Здесь отображаются люди, которым понравилась твоя анкета.",
    messagesTitle: "Сообщения",
    messagesText: "Общайся после взаимной симпатии.",
    guestsTitle: "Гости",
    guestsText: "Здесь видно, кто заходил в твой профиль.",
    profileTitle: "Профиль",
    settingsTitle: "Настройки",
    helpTitle: "Помощь",
    helpText: "Ответы на частые вопросы и полезные подсказки.",

    searchMode: "Режим поиска",
    nearby: "Люди рядом",
    allPeople: "Все",
    country: "Страна",
    city: "Город",
    distance: "Дистанция",
    unit: "Единицы",
    miles: "мили",
    km: "км",
    locationAll: "Все локации",
    apply: "Применить",
    reset: "Сбросить",

    favorites: "Избранное",
    matches: "Взаимные симпатии",
    like: "Нравится",
    skip: "Пропустить",
    addFavorite: "В избранное",
    openChat: "Открыть чат",
    online: "Онлайн",
    offline: "Не в сети",
    send: "Отправить",
    messagePlaceholder: "Напиши сообщение...",
    noMessages: "Пока нет сообщений.",
    noFavorites: "Пока нет избранных.",
    noMatches: "Пока нет взаимных симпатий.",
    noLikedYou: "Пока никто не отметил твою анкету.",
    noGuests: "Пока гостей нет.",
    noProfiles: "Подходящие анкеты не найдены.",
    noProfilesText: "Попробуй изменить фильтры поиска.",
    emptyDeck: "Анкеты закончились",
    emptyDeckText: "Измени поиск или начни просмотр заново.",
    restartDeck: "Начать заново",

    profileAbout: "О себе",
    myProfileAge: "37 лет",
    editProfile: "Редактировать профиль",
    saveProfile: "Сохранить профиль",
    cancel: "Отмена",
    addPhoto: "Добавить фото",
    name: "Имя",
    age: "Возраст",
    bio: "Информация о себе",
    zodiac: "Знак зодиака",
    verified: "Верифицированная анкета",
    verifiedSelfie: "Селфи подтверждено",
    photos: "Фотографии",
    mainPhoto: "Главное фото",
    profileSaved: "Профиль сохранён",

    wallet: "Кошелек",
    dailyPrizes: "Ежедневные призы",
    likedByMe: "Кому я понравился",
    guestsMenu: "Гости",
    helpMenu: "Помощь",
    searchMenu: "Поиск",
    gameMenu: "Игра симпатии",

    mutualTitle: "Взаимная симпатия!",
    mutualText: "Теперь вы можете начать общение.",
    startChat: "Начать чат",
    continueSwipe: "Продолжить",

    help1: "Как работает поиск?",
    help1Text: "Ты выбираешь страну, город и дистанцию, после чего видишь подходящие анкеты.",
    help2: "Что такое взаимная симпатия?",
    help2Text: "Если вы понравились друг другу, автоматически открывается возможность переписки.",
    help3: "Можно ли редактировать профиль?",
    help3Text: "Да, в разделе профиля можно изменить имя, возраст, описание, знак зодиака и фото.",
  },
  en: {
    brand: "Telegram Dating",

    navHome: "Home",
    navSearch: "Search",
    navLikes: "Match Game",
    navLikedYou: "Liked You",
    navMessages: "Messages",
    navGuests: "Guests",
    navProfile: "Profile",
    navSettings: "Settings",
    navHelp: "Help",

    heroTitle: "Find new connections in Telegram",
    heroText:
      "Browse profiles, use country and city search, add favorites and chat after a mutual match.",
    heroPrimary: "Start search",
    heroSecondary: "Open messages",

    homeCard1: "Quick start",
    homeCard1Text: "Open the app and instantly jump into search and match game.",
    homeCard2: "Convenient filters",
    homeCard2Text: "Choose country, city, measurement units and distance.",
    homeCard3: "Chat after match",
    homeCard3Text: "After a mutual match you can start chatting right away.",

    searchTitle: "Search",
    searchText: "Set filters and browse matching profiles.",
    likesTitle: "Match Game",
    likesText: "Like profiles, add favorites and find mutual matches.",
    likedYouTitle: "Liked You",
    likedYouText: "People who liked your profile appear here.",
    messagesTitle: "Messages",
    messagesText: "Chat after a mutual match.",
    guestsTitle: "Guests",
    guestsText: "See who visited your profile.",
    profileTitle: "Profile",
    settingsTitle: "Settings",
    helpTitle: "Help",
    helpText: "Answers to common questions and useful tips.",

    searchMode: "Search mode",
    nearby: "Nearby",
    allPeople: "All",
    country: "Country",
    city: "City",
    distance: "Distance",
    unit: "Units",
    miles: "miles",
    km: "km",
    locationAll: "All locations",
    apply: "Apply",
    reset: "Reset",

    favorites: "Favorites",
    matches: "Matches",
    like: "Like",
    skip: "Skip",
    addFavorite: "Favorite",
    openChat: "Open chat",
    online: "Online",
    offline: "Offline",
    send: "Send",
    messagePlaceholder: "Write a message...",
    noMessages: "No messages yet.",
    noFavorites: "No favorites yet.",
    noMatches: "No matches yet.",
    noLikedYou: "Nobody liked your profile yet.",
    noGuests: "No guests yet.",
    noProfiles: "No matching profiles found.",
    noProfilesText: "Try changing your search filters.",
    emptyDeck: "No more profiles",
    emptyDeckText: "Change search filters or restart browsing.",
    restartDeck: "Start again",

    profileAbout: "About",
    myProfileAge: "37 years old",
    editProfile: "Edit profile",
    saveProfile: "Save profile",
    cancel: "Cancel",
    addPhoto: "Add photo",
    name: "Name",
    age: "Age",
    bio: "About yourself",
    zodiac: "Zodiac sign",
    verified: "Verified profile",
    verifiedSelfie: "Selfie confirmed",
    photos: "Photos",
    mainPhoto: "Main photo",
    profileSaved: "Profile saved",

    wallet: "Wallet",
    dailyPrizes: "Daily prizes",
    likedByMe: "Liked You",
    guestsMenu: "Guests",
    helpMenu: "Help",
    searchMenu: "Search",
    gameMenu: "Match Game",

    mutualTitle: "It's a match!",
    mutualText: "Now you can start chatting.",
    startChat: "Start chat",
    continueSwipe: "Continue",

    help1: "How does search work?",
    help1Text: "Choose country, city and distance, then view matching profiles.",
    help2: "What is a mutual match?",
    help2Text: "If you like each other, messaging becomes available automatically.",
    help3: "Can I edit my profile?",
    help3Text: "Yes, in the profile section you can change your name, age, bio, zodiac and photos.",
  },
};

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
    bio: "Люблю красивые места, музыку и лёгкое общение.",
    zodiac: "♎",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessages: [
      "Привет 😊 Рада взаимной симпатии.",
      "Как проходит твой день?",
    ],
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
    bio: "Люблю прогулки у океана, кофе и тёплые разговоры.",
    zodiac: "♌",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessages: ["Очень приятно 😊", "Ты больше любишь город или природу?"],
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
    bio: "Ценю юмор, активную жизнь и настоящие эмоции.",
    zodiac: "♐",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessages: ["Привет! Рад мэтчу.", "Чем любишь заниматься в свободное время?"],
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
    bio: "Люблю путешествия, спорт и хорошие разговоры без лишнего шума.",
    zodiac: "♒",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessages: ["Привет 👋", "Какой у тебя идеальный выходной?"],
  },
];

const countriesMap = {
  USA: ["Los Angeles", "Miami", "New York", "Chicago", "San Diego", "San Francisco"],
  Canada: ["Toronto", "Vancouver", "Montreal"],
  UK: ["London", "Manchester", "Birmingham"],
  Germany: ["Berlin", "Munich", "Hamburg"],
  France: ["Paris", "Lyon", "Marseille"],
  Spain: ["Madrid", "Barcelona", "Valencia"],
  Italy: ["Rome", "Milan", "Naples"],
  Poland: ["Warsaw", "Krakow", "Gdansk"],
  Ukraine: ["Kyiv", "Lviv", "Odesa"],
  Russia: ["Moscow", "Saint Petersburg", "Sochi"],
  Turkey: ["Istanbul", "Antalya", "Ankara"],
  UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
  Mexico: ["Mexico City", "Cancun", "Guadalajara"],
  Brazil: ["Sao Paulo", "Rio de Janeiro", "Brasilia"],
  Japan: ["Tokyo", "Osaka", "Kyoto"],
};

const zodiacOptions = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

function VerificationBadge() {
  return (
    <span
      title="Verified"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 22,
        height: 22,
        marginLeft: 8,
        borderRadius: "50%",
        background: "#3ea6ff",
        color: "#fff",
        fontSize: 13,
        fontWeight: 900,
        boxShadow: "0 6px 14px rgba(62,166,255,0.28)",
        flexShrink: 0,
      }}
    >
      ✓
    </span>
  );
}

function App() {
  const [lang, setLang] = useState("ru");
  const t = translations[lang];

  const [tab, setTab] = useState("home");
  const [profiles] = useState(initialProfiles);

  const [favorites, setFavorites] = useState([2]);
  const [likedIds, setLikedIds] = useState([1]);
  const [matches, setMatches] = useState([1]);
  const [likedYouIds] = useState([2, 4]);
  const [guestsIds] = useState([3, 1]);

  const [settings, setSettings] = useState({
    searchMode: "nearby",
    country: "All",
    city: "All",
    maxDistance: 5,
    unit: "mi",
  });

  const [draftSettings, setDraftSettings] = useState({
    searchMode: "nearby",
    country: "All",
    city: "All",
    maxDistance: 5,
    unit: "mi",
  });

  const [selectedChatId, setSelectedChatId] = useState(1);
  const [chatDraft, setChatDraft] = useState("");
  const [messages, setMessages] = useState({
    1: [
      { from: "them", text: "Привет 😊 Рада взаимной симпатии." },
      { from: "them", text: "Как проходит твой день?" },
    ],
  });

  const [swipedIds, setSwipedIds] = useState([]);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState(null);
  const [savedProfileLabel, setSavedProfileLabel] = useState(false);

  const [myProfile, setMyProfile] = useState({
    name: "Aleksei",
    age: 37,
    city: "Лос-Анджелес",
    country: "США",
    zodiac: "♌",
    verified: true,
    bio: "Люблю живое общение, красивые места, музыку и интересные знакомства.",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    ],
  });

  const [editProfile, setEditProfile] = useState(false);
  const [profileDraft, setProfileDraft] = useState({
    name: "Aleksei",
    age: 37,
    city: "Лос-Анджелес",
    country: "США",
    zodiac: "♌",
    verified: true,
    bio: "Люблю живое общение, красивые места, музыку и интересные знакомства.",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    ],
  });

  const cardRef = useRef(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
  });

  const countries = useMemo(() => ["All", ...Object.keys(countriesMap)], []);
  const cityOptions = useMemo(() => {
    if (draftSettings.country === "All") return ["All"];
    return ["All", ...(countriesMap[draftSettings.country] || [])];
  }, [draftSettings.country]);

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const distanceValue =
        settings.unit === "mi"
          ? profile.distanceMi
          : Math.round(profile.distanceMi * 1.60934);

      if (settings.searchMode === "nearby" && distanceValue > settings.maxDistance) {
        return false;
      }

      if (settings.country !== "All" && profile.country !== settings.country) return false;
      if (settings.city !== "All" && profile.city !== settings.city) return false;

      return true;
    });
  }, [profiles, settings]);

  const deckProfiles = useMemo(() => {
    return filteredProfiles.filter((profile) => !swipedIds.includes(profile.id));
  }, [filteredProfiles, swipedIds]);

  const activeDeckProfile = deckProfiles[0] || null;

  const selectedChatProfile =
    profiles.find((profile) => profile.id === selectedChatId) || null;

  useEffect(() => {
    if (matches.length && !matches.includes(selectedChatId)) {
      setSelectedChatId(matches[0]);
    }
  }, [matches, selectedChatId]);

  const ensureMessages = (profile) => {
    setMessages((prev) => {
      if (prev[profile.id]) return prev;
      return {
        ...prev,
        [profile.id]: profile.starterMessages.map((text) => ({ from: "them", text })),
      };
    });
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const markSwiped = (id) => {
    setSwipedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleLike = (profile) => {
    if (!profile) return;

    setLikedIds((prev) => (prev.includes(profile.id) ? prev : [...prev, profile.id]));
    markSwiped(profile.id);

    const makeMatch = [1, 2, 3].includes(profile.id);
    if (makeMatch) {
      setMatches((prev) => (prev.includes(profile.id) ? prev : [...prev, profile.id]));
      ensureMessages(profile);
      setMatchedProfile(profile);
      setShowMatch(true);
      setSelectedChatId(profile.id);
    }
  };

  const handleSkip = (profile) => {
    if (!profile) return;
    markSwiped(profile.id);
  };

  const restartDeck = () => {
    setSwipedIds([]);
  };

  const animateOut = (direction) => {
    const el = cardRef.current;
    if (!el || !activeDeckProfile) return;

    el.style.transition = "transform 0.34s ease, opacity 0.34s ease";
    el.style.transform = `translateX(${direction === "right" ? 460 : -460}px) rotate(${
      direction === "right" ? 16 : -16
    }deg)`;
    el.style.opacity = "0";

    setTimeout(() => {
      if (direction === "right") {
        handleLike(activeDeckProfile);
      } else {
        handleSkip(activeDeckProfile);
      }

      if (cardRef.current) {
        cardRef.current.style.transition = "none";
        cardRef.current.style.transform = "translateX(0px) translateY(0px) rotate(0deg)";
        cardRef.current.style.opacity = "1";
      }
    }, 300);
  };

  const pointerDown = (clientX, clientY) => {
    dragRef.current = {
      active: true,
      startX: clientX,
      startY: clientY,
      dx: 0,
      dy: 0,
    };
    if (cardRef.current) {
      cardRef.current.style.transition = "none";
    }
  };

  const pointerMove = (clientX, clientY) => {
    if (!dragRef.current.active || !cardRef.current) return;

    const dx = clientX - dragRef.current.startX;
    const dy = clientY - dragRef.current.startY;
    dragRef.current.dx = dx;
    dragRef.current.dy = dy;

    if (Math.abs(dx) > Math.abs(dy)) {
      const rotate = dx / 18;
      cardRef.current.style.transform = `translateX(${dx}px) translateY(${Math.max(
        -20,
        Math.min(20, dy)
      )}px) rotate(${rotate}deg)`;
    }
  };

  const pointerUp = () => {
    if (!dragRef.current.active || !cardRef.current) return;

    const { dx } = dragRef.current;
    dragRef.current.active = false;

    if (dx > 110) {
      animateOut("right");
      return;
    }

    if (dx < -110) {
      animateOut("left");
      return;
    }

    cardRef.current.style.transition = "transform 0.22s ease";
    cardRef.current.style.transform = "translateX(0px) translateY(0px) rotate(0deg)";
  };

  const sendMessage = () => {
    if (!selectedChatId || !chatDraft.trim()) return;

    setMessages((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), { from: "me", text: chatDraft.trim() }],
    }));
    setChatDraft("");
  };

  const handleApplySettings = () => {
    setSettings(draftSettings);
    setSwipedIds([]);
    setTab("search");
  };

  const handleResetSettings = () => {
    const resetValues = {
      searchMode: "nearby",
      country: "All",
      city: "All",
      maxDistance: 5,
      unit: "mi",
    };
    setDraftSettings(resetValues);
    setSettings(resetValues);
    setSwipedIds([]);
  };

  const handleProfilePhotoUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const objectUrls = files.map((file) => URL.createObjectURL(file));
    setProfileDraft((prev) => ({
      ...prev,
      photos: [...prev.photos, ...objectUrls],
    }));
  };

  const saveProfile = () => {
    setMyProfile(profileDraft);
    setEditProfile(false);
    setSavedProfileLabel(true);
    setTimeout(() => setSavedProfileLabel(false), 1500);
  };

  const openChatFromProfile = (id) => {
    setSelectedChatId(id);
    setTab("messages");
  };

  const renderProfileMeta = (profile) => (
    <>
      <span>
        {profile.city}, {profile.country}
      </span>
      <span> • </span>
      <span>{profile.online ? t.online : t.offline}</span>
    </>
  );

  return (
    <div className="app-shell soft-motion">
      <style>{`
        * { box-sizing: border-box; }

        html, body, #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
          font-family: Inter, Arial, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(255, 105, 145, 0.12), transparent 24%),
            radial-gradient(circle at top right, rgba(255, 186, 190, 0.14), transparent 28%),
            linear-gradient(180deg, #fff8fb 0%, #f8f5fb 100%);
          color: #231b2e;
        }

        body {
          overflow-x: hidden;
        }

        .app-shell {
          min-height: 100vh;
          position: relative;
        }

        .soft-motion::before,
        .soft-motion::after {
          content: "";
          position: fixed;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          filter: blur(60px);
          z-index: 0;
          pointer-events: none;
          opacity: 0.2;
          animation: floatBlob 11s ease-in-out infinite;
        }

        .soft-motion::before {
          background: #ff8fb0;
          left: -80px;
          top: -80px;
        }

        .soft-motion::after {
          background: #c9b7ff;
          right: -90px;
          top: 120px;
          animation-delay: -4s;
        }

        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(18px, 24px) scale(1.05); }
        }

        .page {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px 18px 110px;
          position: relative;
          z-index: 1;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 24px;
          background: rgba(255,255,255,0.84);
          backdrop-filter: blur(14px);
          box-shadow: 0 10px 30px rgba(36,20,48,0.06);
          margin-bottom: 18px;
          position: sticky;
          top: 10px;
          z-index: 50;
        }

        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          min-width: 0;
        }

        .brand {
          font-size: 22px;
          font-weight: 900;
          color: #ff5f8f;
          letter-spacing: -0.5px;
          white-space: nowrap;
        }

        .lang-switch {
          display: flex;
          gap: 8px;
        }

        .chip-btn {
          border: none;
          border-radius: 999px;
          padding: 10px 14px;
          background: #f1edf4;
          color: #2b2335;
          cursor: pointer;
          font-weight: 800;
          transition: 0.2s ease;
          white-space: nowrap;
        }

        .chip-btn.active {
          background: linear-gradient(135deg, #ff5f8f, #ff8a6b);
          color: white;
          box-shadow: 0 10px 20px rgba(255,95,143,0.24);
        }

        .nav {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav-btn {
          border: none;
          padding: 13px 18px;
          border-radius: 999px;
          background: #f5f3f7;
          color: #2b2235;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: 0.2s ease;
          white-space: nowrap;
        }

        .nav-btn.active {
          background: linear-gradient(135deg, #ff5f8f, #ff8d6b);
          color: white;
          box-shadow: 0 12px 22px rgba(255,95,143,0.24);
        }

        .mobile-scroll-tabs {
          display: none;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 22px;
          align-items: stretch;
          margin-bottom: 24px;
        }

        .hero-left,
        .panel {
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(12px);
          border-radius: 28px;
          padding: 26px;
          box-shadow: 0 16px 34px rgba(36,20,48,0.06);
        }

        .hero-title {
          font-size: clamp(38px, 5vw, 72px);
          line-height: 0.95;
          letter-spacing: -2px;
          font-weight: 900;
          margin: 0 0 18px;
        }

        .hero-text,
        .section-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: #655a70;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn,
        .ghost-btn {
          border: none;
          border-radius: 18px;
          padding: 15px 22px;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .primary-btn {
          background: linear-gradient(135deg, #ff5f8f, #ff8b6e);
          color: white;
          box-shadow: 0 14px 24px rgba(255,95,143,0.24);
        }

        .secondary-btn {
          background: #f1edf4;
          color: #2a2331;
        }

        .ghost-btn {
          background: rgba(255,255,255,0.78);
          color: #2a2331;
          border: 1px solid rgba(80,60,100,0.1);
        }

        .hero-right {
          display: flex;
        }

        .preview-card {
          width: 100%;
          min-height: 520px;
          border-radius: 34px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 24px 40px rgba(22,11,30,0.12);
          background: #ece8ef;
        }

        .preview-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .preview-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          color: white;
          background: linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.64));
        }

        .preview-badge {
          align-self: flex-start;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          font-weight: 800;
          margin-bottom: 14px;
        }

        .preview-name {
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 900;
          margin: 0 0 6px;
        }

        .preview-bio {
          margin: 0;
          max-width: 88%;
          font-size: 18px;
          line-height: 1.45;
        }

        .hero-mini-actions {
          display: flex;
          gap: 10px;
          margin-top: 16px;
        }

        .hero-mini-actions button {
          flex: 1;
          border: none;
          border-radius: 18px;
          padding: 14px 16px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .hero-mini-actions .pink {
          background: linear-gradient(135deg, #ff5f8f, #ff8b6e);
          color: white;
        }

        .hero-mini-actions .light {
          background: rgba(255,255,255,0.92);
          color: #2b2235;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .quick-box {
          min-height: 210px;
        }

        .quick-num {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff5f8f, #ff8b6e);
          color: white;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .section-title {
          margin: 0 0 8px;
          font-size: clamp(30px, 4vw, 62px);
          font-weight: 900;
          letter-spacing: -1.6px;
        }

        .section-subtitle {
          margin: 0 0 22px;
        }

        .search-layout,
        .likes-layout,
        .messages-layout,
        .profile-layout,
        .settings-layout,
        .two-column-grid {
          display: grid;
          gap: 18px;
        }

        .search-layout,
        .settings-layout {
          grid-template-columns: 360px minmax(0, 1fr);
        }

        .likes-layout {
          grid-template-columns: 390px minmax(0, 1fr);
        }

        .messages-layout {
          grid-template-columns: 220px minmax(0, 1fr);
          min-height: 620px;
        }

        .profile-layout {
          grid-template-columns: 340px minmax(0, 1fr);
        }

        .two-column-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .settings-group,
        .field-group {
          display: grid;
          gap: 14px;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        .field label {
          font-size: 14px;
          font-weight: 800;
          color: #544a60;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(95, 80, 110, 0.12);
          background: #fcfbfd;
          padding: 14px 15px;
          font-size: 15px;
          outline: none;
          font-family: inherit;
        }

        .field textarea {
          resize: vertical;
          min-height: 120px;
        }

        .range-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 900;
        }

        .range-note {
          color: #6a6076;
          font-size: 14px;
        }

        .filter-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 4px;
        }

        .deck-wrap {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 720px;
        }

        .swipe-card {
          width: 100%;
          max-width: 530px;
          height: 720px;
          border-radius: 34px;
          overflow: hidden;
          position: relative;
          background: #ece8ef;
          box-shadow: 0 30px 50px rgba(25,10,38,0.14);
          user-select: none;
          touch-action: pan-y;
          cursor: grab;
        }

        .swipe-card:active {
          cursor: grabbing;
        }

        .swipe-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }

        .card-topbar {
          position: absolute;
          top: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 3;
          gap: 10px;
        }

        .photo-count,
        .distance-pill,
        .star-btn {
          background: rgba(255,255,255,0.2);
          color: white;
          border-radius: 999px;
          backdrop-filter: blur(10px);
          font-weight: 900;
          padding: 10px 14px;
          border: none;
        }

        .star-btn {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
        }

        .star-btn.active {
          background: linear-gradient(135deg, #ffd64d, #ffb300);
          color: #3b2800;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 22px;
          background: linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.66));
          color: white;
        }

        .profile-name {
          margin: 0 0 8px;
          font-size: clamp(30px, 4vw, 42px);
          font-weight: 900;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .profile-meta {
          margin: 0 0 10px;
          font-size: 14px;
          font-weight: 800;
          opacity: 0.95;
        }

        .profile-bio {
          margin: 0 0 16px;
          font-size: 16px;
          line-height: 1.5;
          max-width: 90%;
        }

        .card-action-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .round-action {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          font-size: 22px;
          font-weight: 900;
          box-shadow: 0 14px 28px rgba(20,10,28,0.2);
        }

        .round-action.skip {
          background: rgba(255,255,255,0.92);
          color: #5d5168;
        }

        .round-action.favorite {
          background: linear-gradient(135deg, #ffd54a, #ffb200);
          color: #3b2800;
        }

        .round-action.like {
          background: linear-gradient(135deg, #ff5f8f, #ff8b6e);
          color: white;
        }

        .empty-state {
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          color: #665b70;
          gap: 10px;
        }

        .list-grid {
          display: grid;
          gap: 12px;
        }

        .list-item,
        .chat-list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 20px;
          background: rgba(248,245,250,0.96);
          transition: 0.2s ease;
        }

        .list-item:hover,
        .chat-list-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 20px rgba(34,19,46,0.06);
        }

        .list-item img {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .chat-list-item {
          cursor: pointer;
        }

        .chat-list-item.active {
          background: linear-gradient(135deg, rgba(255,95,143,0.11), rgba(255,139,110,0.11));
          border: 1px solid rgba(255,95,143,0.12);
        }

        .chat-list-item img {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .item-title {
          font-size: 17px;
          font-weight: 900;
          margin: 0 0 2px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .item-sub {
          color: #6a6076;
          font-size: 14px;
          margin: 0;
        }

        .message-panel {
          display: grid;
          grid-template-rows: auto 1fr auto;
          min-height: 620px;
        }

        .message-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(100,80,120,0.08);
        }

        .message-header img {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
        }

        .message-body {
          padding: 18px 2px 18px 0;
          overflow: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bubble {
          max-width: 78%;
          padding: 13px 16px;
          border-radius: 20px;
          font-size: 16px;
          line-height: 1.45;
        }

        .bubble.them {
          align-self: flex-start;
          background: #f1edf4;
          color: #2b2235;
        }

        .bubble.me {
          align-self: flex-end;
          background: linear-gradient(135deg, #ff5f8f, #ff8b6e);
          color: white;
        }

        .message-input-row {
          display: flex;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid rgba(100,80,120,0.08);
        }

        .message-input-row input {
          flex: 1;
          border-radius: 16px;
          border: 1px solid rgba(95,80,110,0.12);
          padding: 14px 15px;
          font-size: 15px;
          outline: none;
          background: #fcfbfd;
        }

        .profile-page-grid {
          display: grid;
          grid-template-columns: 340px minmax(0, 1fr);
          gap: 18px;
        }

        .profile-avatar {
          text-align: center;
        }

        .profile-avatar img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 16px;
        }

        .profile-age-line {
          margin: 8px 0 10px;
          font-weight: 800;
          color: #3b3147;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 18px;
        }

        .stat-box {
          border-radius: 20px;
          background: #faf7fc;
          padding: 18px;
          text-align: center;
        }

        .stat-num {
          font-size: 28px;
          font-weight: 900;
          margin-bottom: 4px;
        }

        .profile-photos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 12px;
          margin-top: 12px;
        }

        .profile-photos-grid img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 18px;
        }

        .menu-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .menu-card-btn {
          border: none;
          background: #faf7fc;
          border-radius: 18px;
          padding: 16px;
          text-align: left;
          cursor: pointer;
          font-weight: 800;
          color: #2b2235;
        }

        .menu-card-btn span {
          display: block;
          margin-top: 4px;
          color: #6b6177;
          font-weight: 600;
          font-size: 14px;
        }

        .info-list {
          display: grid;
          gap: 12px;
          margin-top: 16px;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(100,80,120,0.08);
        }

        .help-grid {
          display: grid;
          gap: 14px;
        }

        .help-item {
          padding: 18px;
          border-radius: 20px;
          background: #faf7fc;
        }

        .mutual-modal {
          position: fixed;
          inset: 0;
          background: rgba(20,8,30,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          z-index: 100;
          animation: fadeIn 0.22s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .mutual-box {
          width: min(520px, 100%);
          border-radius: 30px;
          padding: 28px;
          background:
            radial-gradient(circle at top center, rgba(255,255,255,0.18), transparent 35%),
            linear-gradient(135deg, #ff5f8f 0%, #ff8b6e 100%);
          color: white;
          box-shadow: 0 24px 50px rgba(25,10,35,0.26);
          text-align: center;
          animation: popIn 0.26s ease;
        }

        @keyframes popIn {
          from { transform: scale(0.92) translateY(18px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .mutual-avatars {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          margin: 16px 0 22px;
        }

        .mutual-avatars img {
          width: 94px;
          height: 94px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(255,255,255,0.5);
          box-shadow: 0 16px 30px rgba(0,0,0,0.16);
        }

        .heart {
          font-size: 34px;
          animation: pulseHeart 1.1s ease-in-out infinite;
        }

        @keyframes pulseHeart {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }

        .phone-bottom-nav {
          display: none;
        }

        @media (max-width: 1120px) {
          .hero,
          .search-layout,
          .likes-layout,
          .settings-layout,
          .profile-page-grid,
          .two-column-grid {
            grid-template-columns: 1fr;
          }

          .messages-layout {
            grid-template-columns: 180px minmax(0, 1fr);
          }

          .quick-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .page {
            padding: 12px 12px 108px;
          }

          .topbar {
            position: static;
            border-radius: 22px;
            padding: 14px;
            align-items: flex-start;
            flex-direction: column;
          }

          .nav {
            display: none;
          }

          .mobile-scroll-tabs {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding: 2px 2px 4px;
            margin-bottom: 14px;
            scrollbar-width: none;
          }

          .mobile-scroll-tabs::-webkit-scrollbar {
            display: none;
          }

          .mobile-scroll-tabs .nav-btn {
            flex: 0 0 auto;
          }

          .hero-left,
          .panel {
            border-radius: 24px;
            padding: 18px;
          }

          .hero-title,
          .section-title {
            letter-spacing: -1.2px;
          }

          .hero-text,
          .section-subtitle {
            font-size: 16px;
          }

          .preview-card {
            min-height: 440px;
            border-radius: 28px;
          }

          .preview-name {
            font-size: 34px;
          }

          .messages-layout {
            grid-template-columns: 112px minmax(0, 1fr);
            gap: 12px;
          }

          .chat-list-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 10px 6px;
            border-radius: 18px;
            gap: 8px;
          }

          .chat-list-item img {
            width: 38px;
            height: 38px;
          }

          .chat-list-item .item-title {
            font-size: 12px;
            justify-content: center;
          }

          .chat-list-item .item-sub {
            font-size: 11px;
          }

          .message-header img {
            width: 52px;
            height: 52px;
          }

          .message-panel {
            min-height: 72vh;
          }

          .message-body {
            max-height: 46vh;
          }

          .bubble {
            max-width: 88%;
            font-size: 15px;
          }

          .swipe-card {
            max-width: 100%;
            width: 100%;
            height: min(76vh, 640px);
            border-radius: 28px;
          }

          .card-overlay {
            padding: 18px;
          }

          .profile-name {
            font-size: 32px;
          }

          .profile-bio {
            max-width: 100%;
            font-size: 15px;
          }

          .round-action {
            width: 56px;
            height: 56px;
          }

          .menu-cards {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .phone-bottom-nav {
            position: fixed;
            left: 10px;
            right: 10px;
            bottom: 10px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            padding: 8px;
            border-radius: 22px;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(14px);
            box-shadow: 0 16px 34px rgba(29,14,40,0.12);
            z-index: 60;
          }

          .phone-tab-btn {
            border: none;
            background: transparent;
            padding: 9px 4px;
            border-radius: 16px;
            font-size: 11px;
            font-weight: 900;
            color: #5b5066;
            cursor: pointer;
            line-height: 1.15;
          }

          .phone-tab-btn.active {
            background: linear-gradient(135deg, #ff5f8f, #ff8b6e);
            color: white;
          }
        }
      `}</style>

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
              {t.navHome}
            </button>
            <button className={`nav-btn ${tab === "search" ? "active" : ""}`} onClick={() => setTab("search")}>
              {t.navSearch}
            </button>
            <button className={`nav-btn ${tab === "likes" ? "active" : ""}`} onClick={() => setTab("likes")}>
              {t.navLikes}
            </button>
            <button className={`nav-btn ${tab === "likedYou" ? "active" : ""}`} onClick={() => setTab("likedYou")}>
              {t.navLikedYou}
            </button>
            <button className={`nav-btn ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>
              {t.navMessages}
            </button>
            <button className={`nav-btn ${tab === "guests" ? "active" : ""}`} onClick={() => setTab("guests")}>
              {t.navGuests}
            </button>
            <button className={`nav-btn ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>
              {t.navProfile}
            </button>
            <button className={`nav-btn ${tab === "settings" ? "active" : ""}`} onClick={() => setTab("settings")}>
              {t.navSettings}
            </button>
            <button className={`nav-btn ${tab === "help" ? "active" : ""}`} onClick={() => setTab("help")}>
              {t.navHelp}
            </button>
          </nav>
        </header>

        <div className="mobile-scroll-tabs">
          <button className={`nav-btn ${tab === "home" ? "active" : ""}`} onClick={() => setTab("home")}>
            {t.navHome}
          </button>
          <button className={`nav-btn ${tab === "search" ? "active" : ""}`} onClick={() => setTab("search")}>
            {t.navSearch}
          </button>
          <button className={`nav-btn ${tab === "likes" ? "active" : ""}`} onClick={() => setTab("likes")}>
            {t.navLikes}
          </button>
          <button className={`nav-btn ${tab === "likedYou" ? "active" : ""}`} onClick={() => setTab("likedYou")}>
            {t.navLikedYou}
          </button>
          <button className={`nav-btn ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>
            {t.navMessages}
          </button>
          <button className={`nav-btn ${tab === "guests" ? "active" : ""}`} onClick={() => setTab("guests")}>
            {t.navGuests}
          </button>
          <button className={`nav-btn ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>
            {t.navProfile}
          </button>
          <button className={`nav-btn ${tab === "settings" ? "active" : ""}`} onClick={() => setTab("settings")}>
            {t.navSettings}
          </button>
          <button className={`nav-btn ${tab === "help" ? "active" : ""}`} onClick={() => setTab("help")}>
            {t.navHelp}
          </button>
        </div>

        {tab === "home" && (
          <>
            <section className="hero">
              <div className="hero-left">
                <h1 className="hero-title">{t.heroTitle}</h1>
                <p className="hero-text">{t.heroText}</p>
                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => setTab("search")}>
                    {t.heroPrimary}
                  </button>
                  <button className="secondary-btn" onClick={() => setTab("messages")}>
                    {t.heroSecondary}
                  </button>
                </div>
              </div>

              <div className="hero-right">
                <div className="preview-card">
                  <img src={profiles[0].photos[0]} alt={profiles[0].name} />
                  <div className="preview-overlay">
                    <div className="preview-badge">
                      {profiles[0].city} • {profiles[0].distanceMi} {t.miles}
                    </div>
                    <h2 className="preview-name">
                      {profiles[0].name}, {profiles[0].age} {profiles[0].zodiac}
                      {profiles[0].verified && <VerificationBadge />}
                    </h2>
                    <p className="preview-bio">{profiles[0].bio}</p>
                    <div className="hero-mini-actions">
                      <button className="pink" onClick={() => setTab("likes")}>
                        {t.navLikes}
                      </button>
                      <button className="light" onClick={() => setTab("profile")}>
                        {t.navProfile}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="quick-grid">
              <div className="panel quick-box">
                <div className="quick-num">1</div>
                <h3>{t.homeCard1}</h3>
                <p>{t.homeCard1Text}</p>
              </div>
              <div className="panel quick-box">
                <div className="quick-num">2</div>
                <h3>{t.homeCard2}</h3>
                <p>{t.homeCard2Text}</p>
              </div>
              <div className="panel quick-box">
                <div className="quick-num">3</div>
                <h3>{t.homeCard3}</h3>
                <p>{t.homeCard3Text}</p>
              </div>
            </section>
          </>
        )}

        {tab === "search" && (
          <>
            <h2 className="section-title">{t.searchTitle}</h2>
            <p className="section-subtitle">{t.searchText}</p>

            <section className="search-layout">
              <div className="panel">
                <div className="settings-group">
                  <div className="field">
                    <label>{t.searchMode}</label>
                    <select
                      value={draftSettings.searchMode}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({ ...prev, searchMode: e.target.value }))
                      }
                    >
                      <option value="nearby">{t.nearby}</option>
                      <option value="all">{t.allPeople}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.country}</label>
                    <select
                      value={draftSettings.country}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({
                          ...prev,
                          country: e.target.value,
                          city: "All",
                        }))
                      }
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country === "All" ? t.locationAll : country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.city}</label>
                    <select
                      value={draftSettings.city}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({ ...prev, city: e.target.value }))
                      }
                    >
                      {cityOptions.map((city) => (
                        <option key={city} value={city}>
                          {city === "All" ? t.locationAll : city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.unit}</label>
                    <select
                      value={draftSettings.unit}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({ ...prev, unit: e.target.value }))
                      }
                    >
                      <option value="mi">{t.miles}</option>
                      <option value="km">{t.km}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.distance}</label>
                    <div className="range-row">
                      <span>
                        {draftSettings.maxDistance}{" "}
                        {draftSettings.unit === "mi" ? t.miles : t.km}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5000"
                      value={draftSettings.maxDistance}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({
                          ...prev,
                          maxDistance: Number(e.target.value),
                        }))
                      }
                    />
                    <div className="range-note">1 — 5000</div>
                  </div>

                  <div className="filter-actions">
                    <button className="primary-btn" onClick={handleApplySettings}>
                      {t.apply}
                    </button>
                    <button className="secondary-btn" onClick={handleResetSettings}>
                      {t.reset}
                    </button>
                  </div>
                </div>
              </div>

              <div className="panel">
                {filteredProfiles.length ? (
                  <div className="list-grid">
                    {filteredProfiles.map((profile) => (
                      <div key={profile.id} className="list-item">
                        <img src={profile.avatar} alt={profile.name} />
                        <div style={{ flex: 1 }}>
                          <div className="item-title">
                            {profile.name}, {profile.age} {profile.zodiac}
                            {profile.verified && <VerificationBadge />}
                          </div>
                          <p className="item-sub">
                            {profile.city}, {profile.country} •{" "}
                            {settings.unit === "mi"
                              ? `${profile.distanceMi} ${t.miles}`
                              : `${Math.round(profile.distanceMi * 1.60934)} ${t.km}`}
                          </p>
                        </div>
                        <button className="chip-btn" onClick={() => toggleFavorite(profile.id)}>
                          {favorites.includes(profile.id) ? "★" : "☆"}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-state">
                    <h3>{t.noProfiles}</h3>
                    <p>{t.noProfilesText}</p>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {tab === "likes" && (
          <>
            <h2 className="section-title">{t.likesTitle}</h2>
            <p className="section-subtitle">{t.likesText}</p>

            <section className="likes-layout">
              <div className="panel">
                <div className="settings-group">
                  <div className="field">
                    <label>{t.searchMode}</label>
                    <select
                      value={draftSettings.searchMode}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({ ...prev, searchMode: e.target.value }))
                      }
                    >
                      <option value="nearby">{t.nearby}</option>
                      <option value="all">{t.allPeople}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.country}</label>
                    <select
                      value={draftSettings.country}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({
                          ...prev,
                          country: e.target.value,
                          city: "All",
                        }))
                      }
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country === "All" ? t.locationAll : country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.city}</label>
                    <select
                      value={draftSettings.city}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({ ...prev, city: e.target.value }))
                      }
                    >
                      {cityOptions.map((city) => (
                        <option key={city} value={city}>
                          {city === "All" ? t.locationAll : city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.unit}</label>
                    <select
                      value={draftSettings.unit}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({ ...prev, unit: e.target.value }))
                      }
                    >
                      <option value="mi">{t.miles}</option>
                      <option value="km">{t.km}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.distance}</label>
                    <div className="range-row">
                      <span>
                        {draftSettings.maxDistance}{" "}
                        {draftSettings.unit === "mi" ? t.miles : t.km}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5000"
                      value={draftSettings.maxDistance}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({
                          ...prev,
                          maxDistance: Number(e.target.value),
                        }))
                      }
                    />
                  </div>

                  <div className="filter-actions">
                    <button className="primary-btn" onClick={handleApplySettings}>
                      {t.apply}
                    </button>
                    <button className="secondary-btn" onClick={handleResetSettings}>
                      {t.reset}
                    </button>
                  </div>
                </div>
              </div>

              <div className="panel">
                {activeDeckProfile ? (
                  <div className="deck-wrap">
                    <div
                      ref={cardRef}
                      className="swipe-card"
                      onMouseDown={(e) => pointerDown(e.clientX, e.clientY)}
                      onMouseMove={(e) => pointerMove(e.clientX, e.clientY)}
                      onMouseUp={pointerUp}
                      onMouseLeave={pointerUp}
                      onTouchStart={(e) => {
                        const touch = e.touches[0];
                        pointerDown(touch.clientX, touch.clientY);
                      }}
                      onTouchMove={(e) => {
                        const touch = e.touches[0];
                        pointerMove(touch.clientX, touch.clientY);
                      }}
                      onTouchEnd={pointerUp}
                    >
                      <img src={activeDeckProfile.photos[0]} alt={activeDeckProfile.name} />

                      <div className="card-topbar">
                        <div className="photo-count">{activeDeckProfile.photos.length} фото</div>
                        <div className="distance-pill">
                          {settings.unit === "mi"
                            ? `${activeDeckProfile.distanceMi} ${t.miles}`
                            : `${Math.round(activeDeckProfile.distanceMi * 1.60934)} ${t.km}`}
                        </div>
                        <button
                          className={`star-btn ${
                            favorites.includes(activeDeckProfile.id) ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(activeDeckProfile.id);
                          }}
                        >
                          ★
                        </button>
                      </div>

                      <div className="card-overlay">
                        <h3 className="profile-name">
                          {activeDeckProfile.name}, {activeDeckProfile.age} {activeDeckProfile.zodiac}
                          {activeDeckProfile.verified && <VerificationBadge />}
                        </h3>
                        <p className="profile-meta">{renderProfileMeta(activeDeckProfile)}</p>
                        <p className="profile-bio">{activeDeckProfile.bio}</p>

                        <div className="card-action-row">
                          <button
                            className="round-action skip"
                            onClick={() => animateOut("left")}
                            title={t.skip}
                          >
                            ✕
                          </button>
                          <button
                            className="round-action favorite"
                            onClick={() => toggleFavorite(activeDeckProfile.id)}
                            title={t.addFavorite}
                          >
                            ★
                          </button>
                          <button
                            className="round-action like"
                            onClick={() => animateOut("right")}
                            title={t.like}
                          >
                            ♥
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="empty-state">
                    <h3>{t.emptyDeck}</h3>
                    <p>{t.emptyDeckText}</p>
                    <button className="primary-btn" onClick={restartDeck}>
                      {t.restartDeck}
                    </button>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {tab === "likedYou" && (
          <>
            <h2 className="section-title">{t.likedYouTitle}</h2>
            <p className="section-subtitle">{t.likedYouText}</p>

            <section className="two-column-grid">
              <div className="panel">
                {likedYouIds.length ? (
                  <div className="list-grid">
                    {profiles
                      .filter((profile) => likedYouIds.includes(profile.id))
                      .map((profile) => (
                        <div key={profile.id} className="list-item">
                          <img src={profile.avatar} alt={profile.name} />
                          <div style={{ flex: 1 }}>
                            <div className="item-title">
                              {profile.name}, {profile.age} {profile.zodiac}
                              {profile.verified && <VerificationBadge />}
                            </div>
                            <p className="item-sub">
                              {profile.city}, {profile.country}
                            </p>
                          </div>
                          <button
                            className="primary-btn"
                            onClick={() => {
                              ensureMessages(profile);
                              setSelectedChatId(profile.id);
                              setTab("messages");
                            }}
                          >
                            {t.openChat}
                          </button>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="empty-state">{t.noLikedYou}</div>
                )}
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>{t.favorites}</h3>
                {favorites.length ? (
                  <div className="list-grid">
                    {profiles
                      .filter((profile) => favorites.includes(profile.id))
                      .map((profile) => (
                        <div key={profile.id} className="list-item">
                          <img src={profile.avatar} alt={profile.name} />
                          <div style={{ flex: 1 }}>
                            <div className="item-title">
                              {profile.name}, {profile.age} {profile.zodiac}
                              {profile.verified && <VerificationBadge />}
                            </div>
                            <p className="item-sub">
                              {profile.city}, {profile.country}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="empty-state">{t.noFavorites}</div>
                )}
              </div>
            </section>
          </>
        )}

        {tab === "messages" && (
          <>
            <h2 className="section-title">{t.messagesTitle}</h2>
            <p className="section-subtitle">{t.messagesText}</p>

            <section className="messages-layout">
              <div className="panel">
                {matches.length ? (
                  <div className="list-grid">
                    {profiles
                      .filter((profile) => matches.includes(profile.id))
                      .map((profile) => (
                        <div
                          key={profile.id}
                          className={`chat-list-item ${selectedChatId === profile.id ? "active" : ""}`}
                          onClick={() => setSelectedChatId(profile.id)}
                        >
                          <img src={profile.avatar} alt={profile.name} />
                          <div>
                            <div className="item-title">
                              {profile.name}
                              {profile.verified && <VerificationBadge />}
                            </div>
                            <p className="item-sub">{profile.online ? t.online : t.offline}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="empty-state">{t.noMessages}</div>
                )}
              </div>

              <div className="panel">
                {selectedChatProfile ? (
                  <div className="message-panel">
                    <div className="message-header">
                      <img src={selectedChatProfile.avatar} alt={selectedChatProfile.name} />
                      <div>
                        <div className="item-title">
                          {selectedChatProfile.name}, {selectedChatProfile.age}{" "}
                          {selectedChatProfile.zodiac}
                          {selectedChatProfile.verified && <VerificationBadge />}
                        </div>
                        <p className="item-sub">
                          {selectedChatProfile.online ? t.online : t.offline} •{" "}
                          {selectedChatProfile.city}
                        </p>
                      </div>
                    </div>

                    <div className="message-body">
                      {(messages[selectedChatId] || []).map((msg, index) => (
                        <div key={index} className={`bubble ${msg.from}`}>
                          {msg.text}
                        </div>
                      ))}
                    </div>

                    <div className="message-input-row">
                      <input
                        value={chatDraft}
                        onChange={(e) => setChatDraft(e.target.value)}
                        placeholder={t.messagePlaceholder}
                      />
                      <button className="primary-btn" onClick={sendMessage}>
                        {t.send}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="empty-state">{t.noMessages}</div>
                )}
              </div>
            </section>
          </>
        )}

        {tab === "guests" && (
          <>
            <h2 className="section-title">{t.guestsTitle}</h2>
            <p className="section-subtitle">{t.guestsText}</p>

            <section className="panel">
              {guestsIds.length ? (
                <div className="list-grid">
                  {profiles
                    .filter((profile) => guestsIds.includes(profile.id))
                    .map((profile) => (
                      <div key={profile.id} className="list-item">
                        <img src={profile.avatar} alt={profile.name} />
                        <div style={{ flex: 1 }}>
                          <div className="item-title">
                            {profile.name}, {profile.age} {profile.zodiac}
                            {profile.verified && <VerificationBadge />}
                          </div>
                          <p className="item-sub">
                            {profile.city}, {profile.country}
                          </p>
                        </div>
                        <button
                          className="secondary-btn"
                          onClick={() => openChatFromProfile(profile.id)}
                        >
                          {t.openChat}
                        </button>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="empty-state">{t.noGuests}</div>
              )}
            </section>
          </>
        )}

        {tab === "profile" && (
          <>
            <h2 className="section-title">{t.profileTitle}</h2>

            <section className="profile-page-grid">
              <div className="panel">
                <div className="profile-avatar">
                  <img src={myProfile.photos[0]} alt={myProfile.name} />
                  <h3
                    style={{
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      flexWrap: "wrap",
                    }}
                  >
                    {myProfile.name}
                    {myProfile.verified && <VerificationBadge />}
                  </h3>
                  <p className="profile-age-line">
                    {myProfile.age} • {myProfile.zodiac}
                  </p>
                  <p style={{ color: "#655b70", marginBottom: 0 }}>{myProfile.bio}</p>
                </div>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>{t.profileAbout}</h3>

                <div className="stats-grid">
                  <div className="stat-box">
                    <div className="stat-num">{profiles.length}</div>
                    <div>{t.navSearch}</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">{favorites.length}</div>
                    <div>{t.favorites}</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">{matches.length}</div>
                    <div>{t.matches}</div>
                  </div>
                </div>

                <div className="info-list">
                  <div className="info-row">
                    <strong>{t.age}</strong>
                    <span>{myProfile.age}</span>
                  </div>
                  <div className="info-row">
                    <strong>{t.city}</strong>
                    <span>{myProfile.city}</span>
                  </div>
                  <div className="info-row">
                    <strong>{t.country}</strong>
                    <span>{myProfile.country}</span>
                  </div>
                  <div className="info-row">
                    <strong>{t.zodiac}</strong>
                    <span>{myProfile.zodiac}</span>
                  </div>
                  <div className="info-row">
                    <strong>{t.verified}</strong>
                    <span>{myProfile.verified ? t.verifiedSelfie : "—"}</span>
                  </div>
                </div>

                <div className="menu-cards">
                  <button className="menu-card-btn" onClick={() => setTab("search")}>
                    {t.searchMenu}
                    <span>{t.searchText}</span>
                  </button>
                  <button className="menu-card-btn" onClick={() => setTab("likes")}>
                    {t.gameMenu}
                    <span>{t.likesText}</span>
                  </button>
                  <button className="menu-card-btn" onClick={() => setTab("likedYou")}>
                    {t.likedByMe}
                    <span>{t.likedYouText}</span>
                  </button>
                  <button className="menu-card-btn" onClick={() => setTab("guests")}>
                    {t.guestsMenu}
                    <span>{t.guestsText}</span>
                  </button>
                  <button className="menu-card-btn" onClick={() => setTab("settings")}>
                    {t.navSettings}
                    <span>{t.searchText}</span>
                  </button>
                  <button className="menu-card-btn" onClick={() => setTab("help")}>
                    {t.helpMenu}
                    <span>{t.helpText}</span>
                  </button>
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
                  <div className="two-column-grid">
                    <div className="field">
                      <label>{t.name}</label>
                      <input
                        value={profileDraft.name}
                        onChange={(e) =>
                          setProfileDraft((prev) => ({ ...prev, name: e.target.value }))
                        }
                      />
                    </div>

                    <div className="field">
                      <label>{t.age}</label>
                      <input
                        type="number"
                        value={profileDraft.age}
                        onChange={(e) =>
                          setProfileDraft((prev) => ({
                            ...prev,
                            age: Number(e.target.value || 0),
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="two-column-grid">
                    <div className="field">
                      <label>{t.city}</label>
                      <input
                        value={profileDraft.city}
                        onChange={(e) =>
                          setProfileDraft((prev) => ({ ...prev, city: e.target.value }))
                        }
                      />
                    </div>

                    <div className="field">
                      <label>{t.country}</label>
                      <input
                        value={profileDraft.country}
                        onChange={(e) =>
                          setProfileDraft((prev) => ({ ...prev, country: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  <div className="two-column-grid">
                    <div className="field">
                      <label>{t.zodiac}</label>
                      <select
                        value={profileDraft.zodiac}
                        onChange={(e) =>
                          setProfileDraft((prev) => ({ ...prev, zodiac: e.target.value }))
                        }
                      >
                        {zodiacOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="field">
                      <label>{t.verified}</label>
                      <select
                        value={profileDraft.verified ? "yes" : "no"}
                        onChange={(e) =>
                          setProfileDraft((prev) => ({
                            ...prev,
                            verified: e.target.value === "yes",
                          }))
                        }
                      >
                        <option value="yes">Да</option>
                        <option value="no">Нет</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label>{t.bio}</label>
                    <textarea
                      value={profileDraft.bio}
                      onChange={(e) =>
                        setProfileDraft((prev) => ({ ...prev, bio: e.target.value }))
                      }
                    />
                  </div>

                  <div className="field">
                    <label>{t.addPhoto}</label>
                    <input type="file" accept="image/*" multiple onChange={handleProfilePhotoUpload} />
                  </div>
                </div>

                <h4 style={{ marginBottom: 10 }}>{t.photos}</h4>
                <div className="profile-photos-grid">
                  {profileDraft.photos.map((photo, index) => (
                    <div key={index}>
                      <img src={photo} alt={`Profile ${index + 1}`} />
                      {index === 0 && (
                        <div
                          style={{
                            marginTop: 8,
                            fontSize: 13,
                            fontWeight: 800,
                            color: "#6b6177",
                          }}
                        >
                          {t.mainPhoto}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {tab === "settings" && (
          <>
            <h2 className="section-title">{t.settingsTitle}</h2>
            <p className="section-subtitle">{t.searchText}</p>

            <section className="settings-layout">
              <div className="panel">
                <div className="settings-group">
                  <div className="field">
                    <label>{t.searchMode}</label>
                    <select
                      value={draftSettings.searchMode}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({ ...prev, searchMode: e.target.value }))
                      }
                    >
                      <option value="nearby">{t.nearby}</option>
                      <option value="all">{t.allPeople}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.country}</label>
                    <select
                      value={draftSettings.country}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({
                          ...prev,
                          country: e.target.value,
                          city: "All",
                        }))
                      }
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country === "All" ? t.locationAll : country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.city}</label>
                    <select
                      value={draftSettings.city}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({ ...prev, city: e.target.value }))
                      }
                    >
                      {cityOptions.map((city) => (
                        <option key={city} value={city}>
                          {city === "All" ? t.locationAll : city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.unit}</label>
                    <select
                      value={draftSettings.unit}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({ ...prev, unit: e.target.value }))
                      }
                    >
                      <option value="mi">{t.miles}</option>
                      <option value="km">{t.km}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.distance}</label>
                    <div className="range-row">
                      <span>
                        {draftSettings.maxDistance}{" "}
                        {draftSettings.unit === "mi" ? t.miles : t.km}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5000"
                      value={draftSettings.maxDistance}
                      onChange={(e) =>
                        setDraftSettings((prev) => ({
                          ...prev,
                          maxDistance: Number(e.target.value),
                        }))
                      }
                    />
                  </div>

                  <div className="filter-actions">
                    <button className="primary-btn" onClick={handleApplySettings}>
                      {t.apply}
                    </button>
                    <button className="secondary-btn" onClick={handleResetSettings}>
                      {t.reset}
                    </button>
                  </div>
                </div>
              </div>

              <div className="panel">
                <h3 style={{ marginTop: 0 }}>{t.searchText}</h3>
                <div className="info-list">
                  <div className="info-row">
                    <strong>{t.searchMode}</strong>
                    <span>
                      {settings.searchMode === "nearby" ? t.nearby : t.allPeople}
                    </span>
                  </div>
                  <div className="info-row">
                    <strong>{t.country}</strong>
                    <span>
                      {settings.country === "All" ? t.locationAll : settings.country}
                    </span>
                  </div>
                  <div className="info-row">
                    <strong>{t.city}</strong>
                    <span>{settings.city === "All" ? t.locationAll : settings.city}</span>
                  </div>
                  <div className="info-row">
                    <strong>{t.distance}</strong>
                    <span>
                      {settings.maxDistance} {settings.unit === "mi" ? t.miles : t.km}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {tab === "help" && (
          <>
            <h2 className="section-title">{t.helpTitle}</h2>
            <p className="section-subtitle">{t.helpText}</p>

            <section className="panel">
              <div className="help-grid">
                <div className="help-item">
                  <h3 style={{ marginTop: 0 }}>{t.help1}</h3>
                  <p style={{ marginBottom: 0 }}>{t.help1Text}</p>
                </div>
                <div className="help-item">
                  <h3 style={{ marginTop: 0 }}>{t.help2}</h3>
                  <p style={{ marginBottom: 0 }}>{t.help2Text}</p>
                </div>
                <div className="help-item">
                  <h3 style={{ marginTop: 0 }}>{t.help3}</h3>
                  <p style={{ marginBottom: 0 }}>{t.help3Text}</p>
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      <div className="phone-bottom-nav">
        <button
          className={`phone-tab-btn ${tab === "search" ? "active" : ""}`}
          onClick={() => setTab("search")}
        >
          Поиск
        </button>
        <button
          className={`phone-tab-btn ${tab === "likes" ? "active" : ""}`}
          onClick={() => setTab("likes")}
        >
          Игра
        </button>
        <button
          className={`phone-tab-btn ${tab === "messages" ? "active" : ""}`}
          onClick={() => setTab("messages")}
        >
          Чаты
        </button>
        <button
          className={`phone-tab-btn ${tab === "guests" ? "active" : ""}`}
          onClick={() => setTab("guests")}
        >
          Гости
        </button>
        <button
          className={`phone-tab-btn ${tab === "profile" ? "active" : ""}`}
          onClick={() => setTab("profile")}
        >
          Профиль
        </button>
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

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                className="secondary-btn"
                onClick={() => {
                  setShowMatch(false);
                  setTab("likes");
                }}
              >
                {t.continueSwipe}
              </button>
              <button
                className="ghost-btn"
                onClick={() => {
                  setShowMatch(false);
                  ensureMessages(matchedProfile);
                  setSelectedChatId(matchedProfile.id);
                  setTab("messages");
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
