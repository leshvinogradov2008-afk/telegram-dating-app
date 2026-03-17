import React, { useEffect, useMemo, useRef, useState } from "react";

const translations = {
  ru: {
    brand: "Telegram Dating",
    navHome: "Главная",
    navProfiles: "Анкеты",
    navLikes: "Симпатии",
    navMessages: "Сообщения",
    navProfile: "Профиль",
    navSettings: "Настройки",

    heroTitle: "Найди новые знакомства в Telegram",
    heroText:
      "Смотри анкеты, свайпай, добавляй в избранное, используй поиск по странам и городам и общайся после взаимной симпатии.",
    heroPrimary: "Смотреть анкеты",
    heroSecondary: "Открыть сообщения",

    quick1: "Быстрый старт",
    quick1Text: "Открываешь сайт и сразу смотришь анкеты.",
    quick2: "Удобный поиск",
    quick2Text: "Выбирай страны, города и дистанцию.",
    quick3: "Общение после мэтча",
    quick3Text: "После взаимной симпатии появляется чат.",

    profilesTitle: "Анкеты",
    profilesText: "Свайпай, открывай профиль и добавляй в избранное.",
    likesTitle: "Симпатии и избранное",
    likesText: "Здесь отображаются мэтчи и люди, которых ты отметил звездой.",
    messagesTitle: "Сообщения",
    messagesText: "После взаимной симпатии здесь появляется чат.",
    profileTitle: "Профиль",
    settingsTitle: "Настройки и поиск",

    nearby: "Люди рядом",
    allPeople: "Все",
    country: "Страна",
    city: "Город",
    distance: "Дистанция",
    unit: "Единицы",
    miles: "мили",
    km: "км",
    reset: "Сбросить",
    apply: "Применить",
    favorites: "Избранное",
    matches: "Взаимные симпатии",
    openChat: "Открыть чат",
    like: "Нравится",
    nope: "Пропустить",
    superLike: "В избранное",
    online: "Онлайн",
    send: "Отправить",
    messagePlaceholder: "Напиши сообщение...",
    noMessages: "Пока нет сообщений.",
    noFavorites: "Пока никто не добавлен в избранное.",
    noMatches: "Пока нет взаимных симпатий.",
    locationAll: "Все локации",
    addPhotoLater: "Можно добавить больше фото позже",
    profileAbout: "О себе",
    ageLabel: "Возраст",
    cityLabel: "Город",
    countryLabel: "Страна",
    searchMode: "Режим поиска",
    appearance: "Вид приложения",
    compactMode: "Компактный режим",
    softMotion: "Эффекты движения",
    darkCards: "Более контрастные карточки",
    phoneHint: "Сайт адаптирован под телефон и компьютер",
    mutualTitle: "Взаимная симпатия!",
    mutualText: "Теперь вы можете начать общение.",
    startChat: "Начать чат",
    continueSwipe: "Продолжить смотреть",
    emptyDeck: "Анкеты закончились",
    emptyDeckText: "Сбрось поиск или начни просмотр сначала.",
    restartDeck: "Начать заново",
    myProfileName: "Алекс",
    myProfileBio:
      "Люблю живое общение, красивые места, музыку и интересные знакомства.",
    saveSettings: "Сохранить настройки",
    settingsSaved: "Настройки сохранены",
    onePhoto: "1 фото",
    manyPhotos: "фото",
    starred: "В избранном",
  },
  en: {
    brand: "Telegram Dating",
    navHome: "Home",
    navProfiles: "Profiles",
    navLikes: "Likes",
    navMessages: "Messages",
    navProfile: "Profile",
    navSettings: "Settings",

    heroTitle: "Find new connections in Telegram",
    heroText:
      "Browse profiles, swipe, add favorites, use country and city search, and chat after a mutual match.",
    heroPrimary: "Browse profiles",
    heroSecondary: "Open messages",

    quick1: "Fast start",
    quick1Text: "Open the site and instantly browse profiles.",
    quick2: "Smart search",
    quick2Text: "Choose countries, cities and distance.",
    quick3: "Chat after match",
    quick3Text: "A chat appears after mutual interest.",

    profilesTitle: "Profiles",
    profilesText: "Swipe, open profiles and add favorites.",
    likesTitle: "Likes and Favorites",
    likesText: "This section shows matches and starred people.",
    messagesTitle: "Messages",
    messagesText: "Your chat appears here after a mutual match.",
    profileTitle: "Profile",
    settingsTitle: "Settings and search",

    nearby: "Nearby",
    allPeople: "All",
    country: "Country",
    city: "City",
    distance: "Distance",
    unit: "Units",
    miles: "miles",
    km: "km",
    reset: "Reset",
    apply: "Apply",
    favorites: "Favorites",
    matches: "Matches",
    openChat: "Open chat",
    like: "Like",
    nope: "Skip",
    superLike: "Favorite",
    online: "Online",
    send: "Send",
    messagePlaceholder: "Write a message...",
    noMessages: "No messages yet.",
    noFavorites: "No favorites yet.",
    noMatches: "No matches yet.",
    locationAll: "All locations",
    addPhotoLater: "More photos can be added later",
    profileAbout: "About",
    ageLabel: "Age",
    cityLabel: "City",
    countryLabel: "Country",
    searchMode: "Search mode",
    appearance: "App appearance",
    compactMode: "Compact mode",
    softMotion: "Motion effects",
    darkCards: "Higher contrast cards",
    phoneHint: "Optimized for phone and desktop",
    mutualTitle: "It's a match!",
    mutualText: "Now you can start chatting.",
    startChat: "Start chat",
    continueSwipe: "Keep browsing",
    emptyDeck: "No more profiles",
    emptyDeckText: "Reset search or start browsing again.",
    restartDeck: "Start again",
    myProfileName: "Alex",
    myProfileBio:
      "I like real conversations, beautiful places, music and interesting connections.",
    saveSettings: "Save settings",
    settingsSaved: "Settings saved",
    onePhoto: "1 photo",
    manyPhotos: "photos",
    starred: "Starred",
  },
};

const profilesData = [
  {
    id: 1,
    name: "Anna",
    age: 26,
    gender: "female",
    city: "Los Angeles",
    country: "USA",
    distanceMi: 12,
    online: true,
    bio: "Люблю красивые места, музыку и лёгкое общение.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
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
    distanceMi: 278,
    online: true,
    bio: "Люблю прогулки у океана, кофе и тёплые разговоры.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
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
    distanceMi: 120,
    online: true,
    bio: "Ценю юмор, активную жизнь и настоящие эмоции.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
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
    distanceMi: 320,
    online: false,
    bio: "Люблю путешествия, спорт и хорошие разговоры без лишнего шума.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessages: ["Привет 👋", "Какой у тебя идеальный выходной?"],
  },
];

const countriesMap = {
  USA: ["Los Angeles", "Miami", "New York", "Chicago"],
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

function App() {
  const [lang, setLang] = useState("ru");
  const t = translations[lang];

  const [tab, setTab] = useState("home");
  const [profiles, setProfiles] = useState(profilesData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([2]);
  const [likedIds, setLikedIds] = useState([1]);
  const [matches, setMatches] = useState([1]);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState(null);
  const [savedLabel, setSavedLabel] = useState(false);

  const [settings, setSettings] = useState({
    searchMode: "all",
    country: "All",
    city: "All",
    maxDistance: 500,
    unit: "mi",
    compactMode: false,
    softMotion: true,
    darkCards: false,
  });

  const [chatDraft, setChatDraft] = useState("");

  const [messages, setMessages] = useState({
    1: [
      { from: "them", text: "Привет 😊 Рада взаимной симпатии." },
      { from: "them", text: "Как проходит твой день?" },
    ],
  });

  const currentProfile = profiles[currentIndex] || null;
  const cardRef = useRef(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
    moved: false,
  });

  const countries = useMemo(() => ["All", ...Object.keys(countriesMap)], []);
  const cityOptions = useMemo(() => {
    if (settings.country === "All") return ["All"];
    return ["All", ...(countriesMap[settings.country] || [])];
  }, [settings.country]);

  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      const distanceValue =
        settings.unit === "mi" ? p.distanceMi : Math.round(p.distanceMi * 1.60934);

      if (settings.searchMode === "nearby" && distanceValue > settings.maxDistance) {
        return false;
      }

      if (settings.country !== "All" && p.country !== settings.country) return false;
      if (settings.city !== "All" && p.city !== settings.city) return false;

      return true;
    });
  }, [profiles, settings]);

  const visibleDeck = filteredProfiles.filter((p) => !likedIds.includes(p.id) || matches.includes(p.id));
  const activeDeckProfile = visibleDeck[currentIndex] || null;

  useEffect(() => {
    setCurrentIndex(0);
  }, [settings.searchMode, settings.country, settings.city, settings.maxDistance, settings.unit]);

  useEffect(() => {
    if (selectedChatId && !matches.includes(selectedChatId)) {
      const firstMatch = matches[0] || null;
      setSelectedChatId(firstMatch);
    }
  }, [matches, selectedChatId]);

  const selectedChatProfile = profiles.find((p) => p.id === selectedChatId) || null;

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const ensureMessages = (profile) => {
    setMessages((prev) => {
      if (prev[profile.id]) return prev;
      return {
        ...prev,
        [profile.id]: profile.starterMessages.map((text) => ({ from: "them", text })),
      };
    });
  };

  const handleLike = (profile) => {
    if (!profile) return;
    setLikedIds((prev) => (prev.includes(profile.id) ? prev : [...prev, profile.id]));

    const makeMatch = profile.id === 1 || profile.id === 3 || profile.id === 2;
    if (makeMatch) {
      setMatches((prev) => (prev.includes(profile.id) ? prev : [...prev, profile.id]));
      ensureMessages(profile);
      setMatchedProfile(profile);
      setShowMatch(true);
      setSelectedChatId(profile.id);
    }
    goNextCard();
  };

  const handleSkip = () => {
    goNextCard();
  };

  const goNextCard = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next >= visibleDeck.length ? prev + 1 : next;
    });
  };

  const restartDeck = () => {
    setCurrentIndex(0);
    setLikedIds([]);
  };

  const sendMessage = () => {
    if (!selectedChatId || !chatDraft.trim()) return;
    setMessages((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), { from: "me", text: chatDraft.trim() }],
    }));
    setChatDraft("");
  };

  const animateOut = (direction) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 0.35s ease, opacity 0.35s ease";
    el.style.transform = `translateX(${direction === "right" ? 420 : -420}px) rotate(${
      direction === "right" ? 16 : -16
    }deg)`;
    el.style.opacity = "0";
    setTimeout(() => {
      if (direction === "right" && activeDeckProfile) handleLike(activeDeckProfile);
      if (direction === "left") handleSkip();
      if (cardRef.current) {
        cardRef.current.style.transition = "none";
        cardRef.current.style.transform = "translateX(0px) translateY(0px) rotate(0deg)";
        cardRef.current.style.opacity = "1";
      }
    }, 320);
  };

  const pointerDown = (clientX, clientY) => {
    dragRef.current = {
      active: true,
      startX: clientX,
      startY: clientY,
      dx: 0,
      dy: 0,
      moved: false,
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

    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
      dragRef.current.moved = true;
    }

    if (Math.abs(dx) > Math.abs(dy)) {
      const rotate = dx / 18;
      cardRef.current.style.transform = `translateX(${dx}px) translateY(${Math.min(
        Math.max(dy, -20),
        20
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

  const onMouseDown = (e) => pointerDown(e.clientX, e.clientY);
  const onMouseMove = (e) => pointerMove(e.clientX, e.clientY);
  const onMouseUp = () => pointerUp();
  const onTouchStart = (e) => {
    const touch = e.touches[0];
    pointerDown(touch.clientX, touch.clientY);
  };
  const onTouchMove = (e) => {
    const touch = e.touches[0];
    pointerMove(touch.clientX, touch.clientY);
  };
  const onTouchEnd = () => pointerUp();

  const saveSettings = () => {
    setSavedLabel(true);
    setTimeout(() => setSavedLabel(false), 1600);
  };

  const sectionClass = settings.darkCards ? "panel panel-dark" : "panel";

  return (
    <div className={`app-shell ${settings.softMotion ? "soft-motion" : ""}`}>
      <style>{`
        * { box-sizing: border-box; }
        html, body, #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
          font-family: Inter, Arial, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(255,97,141,0.10), transparent 24%),
            radial-gradient(circle at top right, rgba(255,175,189,0.16), transparent 28%),
            linear-gradient(180deg, #fff8fb 0%, #f8f6fb 100%);
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
          width: 340px;
          height: 340px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.22;
          z-index: 0;
          pointer-events: none;
          animation: floatBlob 10s ease-in-out infinite;
        }
        .soft-motion::before {
          background: #ff8dad;
          top: -60px;
          left: -80px;
        }
        .soft-motion::after {
          background: #c9b8ff;
          right: -90px;
          top: 140px;
          animation-delay: -4s;
        }
        @keyframes floatBlob {
          0%,100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(24px) translateX(18px) scale(1.05); }
        }

        .page {
          max-width: 1360px;
          margin: 0 auto;
          padding: 20px 18px 36px;
          position: relative;
          z-index: 1;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 14px 18px;
          border-radius: 24px;
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(14px);
          box-shadow: 0 10px 30px rgba(36, 20, 48, 0.06);
          margin-bottom: 20px;
          position: sticky;
          top: 10px;
          z-index: 40;
        }

        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .brand {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #ff5f8f;
        }

        .lang-switch {
          display: flex;
          gap: 8px;
        }

        .chip-btn {
          border: none;
          border-radius: 999px;
          padding: 10px 14px;
          font-weight: 700;
          cursor: pointer;
          background: #f0edf3;
          color: #2a2331;
          transition: 0.2s ease;
        }

        .chip-btn.active {
          background: linear-gradient(135deg, #ff5f8f, #ff8a6b);
          color: white;
          box-shadow: 0 10px 20px rgba(255,95,143,0.22);
        }

        .nav {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav-btn {
          border: none;
          padding: 13px 20px;
          border-radius: 999px;
          background: #f5f3f7;
          color: #2b2235;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .nav-btn.active {
          color: white;
          background: linear-gradient(135deg, #ff5f8f, #ff8d6b);
          box-shadow: 0 12px 22px rgba(255,95,143,0.24);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 0.95fr;
          gap: 22px;
          align-items: stretch;
          margin-bottom: 24px;
        }

        .hero-left,
        .panel {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          border-radius: 28px;
          padding: 26px;
          box-shadow: 0 16px 34px rgba(36, 20, 48, 0.06);
        }

        .panel-dark {
          background: rgba(255,255,255,0.92);
          box-shadow: 0 20px 40px rgba(26, 10, 44, 0.10);
        }

        .hero-title {
          font-size: clamp(38px, 5vw, 74px);
          line-height: 0.95;
          letter-spacing: -2px;
          margin: 0 0 18px;
          font-weight: 900;
        }

        .hero-text {
          font-size: 18px;
          line-height: 1.6;
          color: #5c5168;
          max-width: 780px;
          margin-bottom: 22px;
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
          padding: 16px 24px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .primary-btn {
          color: white;
          background: linear-gradient(135deg, #ff5f8f, #ff8b6e);
          box-shadow: 0 14px 24px rgba(255,95,143,0.24);
        }

        .secondary-btn {
          background: #f2eef4;
          color: #2b2235;
        }

        .ghost-btn {
          background: rgba(255,255,255,0.75);
          color: #2b2235;
          border: 1px solid rgba(80,60,100,0.08);
        }

        .hero-right {
          display: flex;
          align-items: stretch;
        }

        .preview-card {
          width: 100%;
          min-height: 520px;
          border-radius: 34px;
          overflow: hidden;
          position: relative;
          background: #eee;
          box-shadow: 0 24px 40px rgba(22, 11, 30, 0.10);
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
          background: linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.62));
        }

        .preview-badge {
          align-self: flex-start;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.22);
          font-weight: 700;
          font-size: 14px;
          backdrop-filter: blur(10px);
          margin-bottom: 14px;
        }

        .preview-name {
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 900;
          margin: 0 0 6px;
        }

        .preview-bio {
          margin: 0;
          font-size: 18px;
          line-height: 1.45;
          max-width: 85%;
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
          background: rgba(255,255,255,0.90);
          color: #2b2235;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 10px;
        }

        .quick-box {
          min-height: 220px;
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
          font-size: clamp(30px, 4vw, 64px);
          font-weight: 900;
          letter-spacing: -1.6px;
        }

        .section-subtitle {
          margin: 0 0 24px;
          font-size: 18px;
          color: #665b70;
        }

        .profiles-layout,
        .messages-layout,
        .likes-layout,
        .settings-layout,
        .profile-layout {
          display: grid;
          gap: 18px;
        }

        .profiles-layout {
          grid-template-columns: 380px minmax(0, 1fr);
          align-items: start;
        }

        .settings-layout {
          grid-template-columns: 360px minmax(0, 1fr);
        }

        .likes-layout {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .messages-layout {
          grid-template-columns: 320px minmax(0, 1fr);
          min-height: 640px;
        }

        .profile-layout {
          grid-template-columns: 340px minmax(0, 1fr);
        }

        .settings-group {
          display: grid;
          gap: 14px;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        .field label {
          font-weight: 700;
          font-size: 14px;
          color: #544a60;
        }

        .field select,
        .field input {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(95, 80, 110, 0.12);
          background: #fcfbfd;
          padding: 14px 15px;
          font-size: 15px;
          outline: none;
        }

        .range-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          font-weight: 800;
        }

        .toggle-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(100, 80, 120, 0.08);
        }

        .toggle-row:last-child {
          border-bottom: none;
        }

        .toggle-row input {
          width: 22px;
          height: 22px;
        }

        .save-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(70, 199, 121, 0.12);
          color: #159552;
          padding: 10px 14px;
          border-radius: 999px;
          font-weight: 800;
          margin-top: 8px;
        }

        .deck-wrap {
          position: relative;
          min-height: 720px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .swipe-card {
          width: 100%;
          max-width: 520px;
          height: 720px;
          border-radius: 34px;
          overflow: hidden;
          background: #f0edf3;
          box-shadow: 0 30px 50px rgba(25, 10, 38, 0.14);
          position: relative;
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
        }

        .photo-count,
        .star-btn,
        .distance-pill {
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          color: white;
          border: none;
          border-radius: 999px;
          padding: 10px 14px;
          font-size: 14px;
          font-weight: 800;
        }

        .star-btn {
          cursor: pointer;
          font-size: 18px;
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .star-btn.active {
          background: linear-gradient(135deg, #ffd64d, #ffb300);
          color: #3a2800;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 22px;
          background: linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.64));
          color: white;
        }

        .profile-line {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
        }

        .profile-name {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          margin: 0;
          letter-spacing: -1px;
        }

        .profile-meta {
          font-size: 14px;
          opacity: 0.95;
          font-weight: 700;
          margin-bottom: 8px;
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
          box-shadow: 0 14px 28px rgba(20, 10, 28, 0.20);
        }

        .round-action.skip {
          background: rgba(255,255,255,0.90);
          color: #5d5168;
        }

        .round-action.like {
          background: linear-gradient(135deg, #ff5f8f, #ff8b6e);
          color: white;
        }

        .round-action.favorite {
          background: linear-gradient(135deg, #ffd54a, #ffb200);
          color: #3b2800;
        }

        .card-side-info {
          display: grid;
          gap: 14px;
        }

        .mini-profile-list,
        .match-list,
        .favorite-list {
          display: grid;
          gap: 12px;
        }

        .mini-profile-item,
        .chat-list-item,
        .favorite-item,
        .match-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 20px;
          background: rgba(248, 245, 250, 0.95);
          transition: 0.2s ease;
        }

        .mini-profile-item:hover,
        .chat-list-item:hover,
        .favorite-item:hover,
        .match-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 20px rgba(34, 19, 46, 0.06);
        }

        .mini-profile-item img,
        .chat-list-item img,
        .favorite-item img,
        .match-item img,
        .profile-avatar img {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .chat-list-item {
          cursor: pointer;
        }

        .chat-list-item.active {
          background: linear-gradient(135deg, rgba(255,95,143,0.12), rgba(255,139,110,0.12));
          border: 1px solid rgba(255,95,143,0.14);
        }

        .item-title {
          font-weight: 800;
          font-size: 18px;
          margin: 0 0 2px;
        }

        .item-sub {
          color: #685d73;
          font-size: 14px;
          margin: 0;
        }

        .empty-state {
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 10px;
          color: #655b70;
        }

        .message-panel {
          display: grid;
          grid-template-rows: auto 1fr auto;
          min-height: 640px;
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
          padding: 18px 4px 18px 0;
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

        .mutual-modal {
          position: fixed;
          inset: 0;
          background: rgba(20, 8, 30, 0.45);
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
          box-shadow: 0 24px 50px rgba(25, 10, 35, 0.26);
          text-align: center;
          transform: scale(1);
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

        .profile-page-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 18px;
        }

        .profile-avatar {
          text-align: center;
        }

        .profile-avatar img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          margin-bottom: 16px;
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

        .phone-bottom-nav {
          display: none;
        }

        @media (max-width: 1080px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .profiles-layout,
          .settings-layout,
          .messages-layout,
          .profile-layout,
          .profile-page-grid,
          .likes-layout {
            grid-template-columns: 1fr;
          }
          .quick-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .page {
            padding: 12px 12px 96px;
          }
          .topbar {
            position: static;
            border-radius: 22px;
            padding: 14px;
          }
          .nav {
            display: none;
          }
          .brand {
            font-size: 20px;
          }
          .hero-left, .panel {
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
          .profiles-layout {
            gap: 14px;
          }
          .deck-wrap {
            min-height: auto;
          }
          .swipe-card {
            max-width: 100%;
            width: 100%;
            height: min(78vh, 640px);
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
            width: 58px;
            height: 58px;
          }
          .messages-layout {
            min-height: auto;
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
          .phone-bottom-nav {
            position: fixed;
            left: 10px;
            right: 10px;
            bottom: 10px;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 8px;
            padding: 8px;
            border-radius: 22px;
            background: rgba(255,255,255,0.88);
            backdrop-filter: blur(14px);
            box-shadow: 0 16px 34px rgba(29, 14, 40, 0.12);
            z-index: 60;
          }
          .phone-tab-btn {
            border: none;
            background: transparent;
            padding: 10px 6px;
            border-radius: 16px;
            font-size: 11px;
            font-weight: 800;
            color: #5b5066;
            cursor: pointer;
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
            <button className={`nav-btn ${tab === "profiles" ? "active" : ""}`} onClick={() => setTab("profiles")}>
              {t.navProfiles}
            </button>
            <button className={`nav-btn ${tab === "likes" ? "active" : ""}`} onClick={() => setTab("likes")}>
              {t.navLikes}
            </button>
            <button className={`nav-btn ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>
              {t.navMessages}
            </button>
            <button className={`nav-btn ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>
              {t.navProfile}
            </button>
            <button className={`nav-btn ${tab === "settings" ? "active" : ""}`} onClick={() => setTab("settings")}>
              {t.navSettings}
            </button>
          </nav>
        </header>

        {tab === "home" && (
          <>
            <section className="hero">
              <div className="hero-left">
                <h1 className="hero-title">{t.heroTitle}</h1>
                <p className="hero-text">{t.heroText}</p>
                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => setTab("profiles")}>
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
                      {profiles[0].name}, {profiles[0].age}
                    </h2>
                    <p className="preview-bio">{profiles[0].bio}</p>
                    <div className="hero-mini-actions">
                      <button className="pink" onClick={() => setTab("profiles")}>
                        {t.heroPrimary}
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
              <div className={sectionClass + " quick-box"}>
                <div className="quick-num">1</div>
                <h3>{t.quick1}</h3>
                <p>{t.quick1Text}</p>
              </div>
              <div className={sectionClass + " quick-box"}>
                <div className="quick-num">2</div>
                <h3>{t.quick2}</h3>
                <p>{t.quick2Text}</p>
              </div>
              <div className={sectionClass + " quick-box"}>
                <div className="quick-num">3</div>
                <h3>{t.quick3}</h3>
                <p>{t.quick3Text}</p>
              </div>
            </section>
          </>
        )}

        {tab === "profiles" && (
          <>
            <h2 className="section-title">{t.profilesTitle}</h2>
            <p className="section-subtitle">{t.profilesText}</p>

            <section className="profiles-layout">
              <div className={sectionClass}>
                <h3 style={{ marginTop: 0 }}>{t.navSettings}</h3>
                <div className="settings-group">
                  <div className="field">
                    <label>{t.searchMode}</label>
                    <select
                      value={settings.searchMode}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, searchMode: e.target.value }))
                      }
                    >
                      <option value="nearby">{t.nearby}</option>
                      <option value="all">{t.allPeople}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.country}</label>
                    <select
                      value={settings.country}
                      onChange={(e) =>
                        setSettings((prev) => ({
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
                      value={settings.city}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, city: e.target.value }))
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
                      value={settings.unit}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, unit: e.target.value }))
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
                        {settings.maxDistance} {settings.unit === "mi" ? t.miles : t.km}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5000"
                      value={settings.maxDistance}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          maxDistance: Number(e.target.value),
                        }))
                      }
                    />
                  </div>

                  <div className="toggle-row">
                    <span>{t.compactMode}</span>
                    <input
                      type="checkbox"
                      checked={settings.compactMode}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          compactMode: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <div className="toggle-row">
                    <span>{t.softMotion}</span>
                    <input
                      type="checkbox"
                      checked={settings.softMotion}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          softMotion: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <div className="toggle-row">
                    <span>{t.darkCards}</span>
                    <input
                      type="checkbox"
                      checked={settings.darkCards}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          darkCards: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <button className="primary-btn" onClick={saveSettings}>
                    {t.apply}
                  </button>
                  <button
                    className="secondary-btn"
                    onClick={() =>
                      setSettings((prev) => ({
                        ...prev,
                        searchMode: "all",
                        country: "All",
                        city: "All",
                        maxDistance: 500,
                        unit: "mi",
                      }))
                    }
                  >
                    {t.reset}
                  </button>

                  {savedLabel && <div className="save-badge">{t.settingsSaved}</div>}
                </div>
              </div>

              <div className={sectionClass}>
                {activeDeckProfile ? (
                  <div className="deck-wrap">
                    <div
                      ref={cardRef}
                      className="swipe-card"
                      onMouseDown={onMouseDown}
                      onMouseMove={onMouseMove}
                      onMouseUp={onMouseUp}
                      onMouseLeave={onMouseUp}
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      <img
                        src={activeDeckProfile.photos[0]}
                        alt={activeDeckProfile.name}
                        draggable="false"
                      />

                      <div className="card-topbar">
                        <div className="photo-count">
                          {activeDeckProfile.photos.length}{" "}
                          {activeDeckProfile.photos.length === 1 ? t.onePhoto : t.manyPhotos}
                        </div>
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
                        <div className="profile-line">
                          <h3 className="profile-name">
                            {activeDeckProfile.name}, {activeDeckProfile.age}
                          </h3>
                        </div>
                        <div className="profile-meta">
                          {activeDeckProfile.city}, {activeDeckProfile.country} •{" "}
                          {activeDeckProfile.online ? t.online : "Offline"}
                        </div>
                        <p className="profile-bio">{activeDeckProfile.bio}</p>

                        <div className="card-action-row">
                          <button className="round-action skip" onClick={() => animateOut("left")}>
                            ✕
                          </button>
                          <button
                            className="round-action favorite"
                            onClick={() => toggleFavorite(activeDeckProfile.id)}
                          >
                            ★
                          </button>
                          <button className="round-action like" onClick={() => animateOut("right")}>
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

        {tab === "likes" && (
          <>
            <h2 className="section-title">{t.likesTitle}</h2>
            <p className="section-subtitle">{t.likesText}</p>

            <section className="likes-layout">
              <div className={sectionClass}>
                <h3 style={{ marginTop: 0 }}>{t.favorites}</h3>
                {favorites.length ? (
                  <div className="favorite-list">
                    {profiles
                      .filter((p) => favorites.includes(p.id))
                      .map((p) => (
                        <div className="favorite-item" key={p.id}>
                          <img src={p.avatar} alt={p.name} />
                          <div style={{ flex: 1 }}>
                            <div className="item-title">
                              {p.name}, {p.age}
                            </div>
                            <div className="item-sub">
                              {p.city}, {p.country}
                            </div>
                          </div>
                          <button className="chip-btn active" onClick={() => setTab("profiles")}>
                            ★
                          </button>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="empty-state">{t.noFavorites}</div>
                )}
              </div>

              <div className={sectionClass}>
                <h3 style={{ marginTop: 0 }}>{t.matches}</h3>
                {matches.length ? (
                  <div className="match-list">
                    {profiles
                      .filter((p) => matches.includes(p.id))
                      .map((p) => (
                        <div className="match-item" key={p.id}>
                          <img src={p.avatar} alt={p.name} />
                          <div style={{ flex: 1 }}>
                            <div className="item-title">
                              {p.name}, {p.age}
                            </div>
                            <div className="item-sub">
                              {p.city}, {p.country}
                            </div>
                          </div>
                          <button
                            className="primary-btn"
                            onClick={() => {
                              setSelectedChatId(p.id);
                              setTab("messages");
                            }}
                          >
                            {t.openChat}
                          </button>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="empty-state">{t.noMatches}</div>
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
              <div className={sectionClass}>
                {matches.length ? (
                  <div className="mini-profile-list">
                    {profiles
                      .filter((p) => matches.includes(p.id))
                      .map((p) => (
                        <div
                          key={p.id}
                          className={`chat-list-item ${selectedChatId === p.id ? "active" : ""}`}
                          onClick={() => setSelectedChatId(p.id)}
                        >
                          <img src={p.avatar} alt={p.name} />
                          <div>
                            <div className="item-title">{p.name}</div>
                            <div className="item-sub">{p.online ? t.online : "Offline"}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="empty-state">{t.noMessages}</div>
                )}
              </div>

              <div className={sectionClass}>
                {selectedChatProfile ? (
                  <div className="message-panel">
                    <div className="message-header">
                      <img src={selectedChatProfile.avatar} alt={selectedChatProfile.name} />
                      <div>
                        <div className="item-title">{selectedChatProfile.name}</div>
                        <div className="item-sub">
                          {selectedChatProfile.online ? t.online : "Offline"} •{" "}
                          {selectedChatProfile.city}
                        </div>
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

        {tab === "profile" && (
          <>
            <h2 className="section-title">{t.profileTitle}</h2>
            <p className="section-subtitle">{t.phoneHint}</p>

            <section className="profile-page-grid">
              <div className={sectionClass}>
                <div className="profile-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
                    alt={t.myProfileName}
                  />
                  <h3 style={{ margin: 0 }}>{t.myProfileName}</h3>
                  <p style={{ color: "#655b70" }}>{t.myProfileBio}</p>
                </div>
              </div>

              <div className={sectionClass}>
                <h3 style={{ marginTop: 0 }}>{t.profileAbout}</h3>
                <div className="stats-grid">
                  <div className="stat-box">
                    <div className="stat-num">{profiles.length}</div>
                    <div>{t.navProfiles}</div>
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
              </div>
            </section>
          </>
        )}

        {tab === "settings" && (
          <>
            <h2 className="section-title">{t.settingsTitle}</h2>
            <p className="section-subtitle">{t.phoneHint}</p>

            <section className="settings-layout">
              <div className={sectionClass}>
                <div className="settings-group">
                  <div className="field">
                    <label>{t.searchMode}</label>
                    <select
                      value={settings.searchMode}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, searchMode: e.target.value }))
                      }
                    >
                      <option value="nearby">{t.nearby}</option>
                      <option value="all">{t.allPeople}</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>{t.country}</label>
                    <select
                      value={settings.country}
                      onChange={(e) =>
                        setSettings((prev) => ({
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
                      value={settings.city}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, city: e.target.value }))
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
                      value={settings.unit}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, unit: e.target.value }))
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
                        {settings.maxDistance} {settings.unit === "mi" ? t.miles : t.km}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5000"
                      value={settings.maxDistance}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          maxDistance: Number(e.target.value),
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className={sectionClass}>
                <div className="settings-group">
                  <div className="toggle-row">
                    <span>{t.compactMode}</span>
                    <input
                      type="checkbox"
                      checked={settings.compactMode}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          compactMode: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <div className="toggle-row">
                    <span>{t.softMotion}</span>
                    <input
                      type="checkbox"
                      checked={settings.softMotion}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          softMotion: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <div className="toggle-row">
                    <span>{t.darkCards}</span>
                    <input
                      type="checkbox"
                      checked={settings.darkCards}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          darkCards: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <button className="primary-btn" onClick={saveSettings}>
                    {t.saveSettings}
                  </button>
                  {savedLabel && <div className="save-badge">{t.settingsSaved}</div>}
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      <div className="phone-bottom-nav">
        <button className={`phone-tab-btn ${tab === "home" ? "active" : ""}`} onClick={() => setTab("home")}>
          {t.navHome}
        </button>
        <button className={`phone-tab-btn ${tab === "profiles" ? "active" : ""}`} onClick={() => setTab("profiles")}>
          {t.navProfiles}
        </button>
        <button className={`phone-tab-btn ${tab === "likes" ? "active" : ""}`} onClick={() => setTab("likes")}>
          {t.navLikes}
        </button>
        <button className={`phone-tab-btn ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>
          {t.navMessages}
        </button>
        <button className={`phone-tab-btn ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>
          {t.navProfile}
        </button>
        <button className={`phone-tab-btn ${tab === "settings" ? "active" : ""}`} onClick={() => setTab("settings")}>
          {t.navSettings}
        </button>
      </div>

      {showMatch && matchedProfile && (
        <div className="mutual-modal" onClick={() => setShowMatch(false)}>
          <div className="mutual-box" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: 0, fontSize: 36 }}>{t.mutualTitle}</h2>
            <p style={{ fontSize: 18, marginBottom: 0 }}>{t.mutualText}</p>

            <div className="mutual-avatars">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
                alt="Me"
              />
              <div className="heart">♥</div>
              <img src={matchedProfile.avatar} alt={matchedProfile.name} />
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                className="secondary-btn"
                onClick={() => {
                  setShowMatch(false);
                  setTab("profiles");
                }}
              >
                {t.continueSwipe}
              </button>
              <button
                className="ghost-btn"
                onClick={() => {
                  setShowMatch(false);
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
