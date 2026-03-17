import React, { useEffect, useMemo, useRef, useState } from "react";

const tr = {
  ru: {
    brand: "Telegram Dating",
    home: "Главная",
    search: "Поиск",
    messages: "Сообщения",
    profile: "Профиль",
    settings: "Настройки",

    heroTitle: "Найди новые знакомства в Telegram",
    heroText:
      "Смотри анкеты, листай фото, используй удобный поиск и начинай общение только после взаимной симпатии.",
    heroPrimary: "Начать поиск",
    heroSecondary: "Открыть сообщения",

    card1: "Быстрый старт",
    card1t: "Открывай приложение и сразу переходи к просмотру анкет.",
    card2: "Удобный поиск",
    card2t: "Фильтры по стране, городу, возрасту, полу и дистанции.",
    card3: "Чат после мэтча",
    card3t: "Написать можно только после взаимной симпатии.",

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
    next: "Дальше",

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
    help1: "Как работает поиск?",
    help1t: "Выбирай фильтры, затем листай анкеты свайпом вправо, влево или вверх.",
    help2: "Когда можно написать человеку?",
    help2t: "Только после взаимной симпатии. Без мэтча чат недоступен.",
    help3: "Как смотреть фото?",
    help3t: "Нажми на левую или правую часть фото, чтобы переключать снимки.",

    mutualTitle: "Взаимная симпатия!",
    mutualText: "Теперь вы можете начать общение.",
    startChat: "Начать чат",
    continue: "Продолжить",

    years: "лет",
    photosCount: "фото",
  },
  en: {
    brand: "Telegram Dating",
    home: "Home",
    search: "Search",
    messages: "Messages",
    profile: "Profile",
    settings: "Settings",

    heroTitle: "Find new connections in Telegram",
    heroText:
      "Browse profiles, swipe through photos, use smart search and start chatting only after a mutual match.",
    heroPrimary: "Start search",
    heroSecondary: "Open messages",

    card1: "Quick start",
    card1t: "Open the app and start browsing profiles right away.",
    card2: "Smart search",
    card2t: "Filters by country, city, age, gender and distance.",
    card3: "Chat after match",
    card3t: "You can message only after a mutual match.",

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
    next: "Next",

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
    help1: "How does search work?",
    help1t: "Choose filters, then swipe profiles right, left or up.",
    help2: "When can I message someone?",
    help2t: "Only after a mutual match. No chat is available before that.",
    help3: "How do I browse photos?",
    help3t: "Tap the left or right side of the photo to switch images.",

    mutualTitle: "It's a match!",
    mutualText: "Now you can start chatting.",
    startChat: "Start chat",
    continue: "Continue",

    years: "years",
    photosCount: "photos",
  },
};

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
  Turkey: ["Istanbul", "Antalya", "Ankara"],
  UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
  Japan: ["Tokyo", "Osaka", "Kyoto"],
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
    bio: "Люблю красивые места, музыку, кофе, поездки и лёгкое общение.",
    bioEn: "I love beautiful places, music, coffee, trips and easy conversations.",
    interests: ["music", "travel", "coffee"],
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
    bio: "Люблю прогулки у океана, кофе, вечерние огни и тёплые разговоры.",
    bioEn: "I love ocean walks, coffee, city lights and warm conversations.",
    interests: ["ocean", "coffee", "night walks"],
    zodiac: "♌",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
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
    bio: "Ценю юмор, спорт, хорошие фильмы и настоящие эмоции.",
    bioEn: "I value humor, sports, good movies and real emotions.",
    interests: ["sport", "movies", "humor"],
    zodiac: "♐",
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
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
    bio: "Люблю путешествия, спорт и спокойные разговоры без лишнего шума.",
    bioEn: "I love travel, sports and calm conversations without extra noise.",
    interests: ["travel", "fitness", "weekends"],
    zodiac: "♒",
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    ],
    starterMessagesRu: ["Привет 👋", "Какой у тебя идеальный выходной?"],
    starterMessagesEn: ["Hi 👋", "What does your perfect weekend look like?"],
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
  const [likedYouIds] = useState([2, 4]);
  const [guestIds] = useState([3, 1]);
  const [swipedIds, setSwipedIds] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [chatDraft, setChatDraft] = useState("");
  const [showMatch, setShowMatch] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState(null);
  const [savedProfileLabel, setSavedProfileLabel] = useState(false);
  const [cardPhotoIndex, setCardPhotoIndex] = useState(0);

  const [settings, setSettings] = useState({
    searchMode: "nearby",
    country: "All",
    city: "All",
    maxDistance: 5,
    unit: "mi",
    ageFrom: 18,
    ageTo: 60,
    gender: "all",
  });

  const [draftSettings, setDraftSettings] = useState({
    searchMode: "nearby",
    country: "All",
    city: "All",
    maxDistance: 5,
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

  const cardRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, dx: 0, dy: 0 });

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
    if (!activeProfile) setCardPhotoIndex(0);
  }, [activeProfile]);

  useEffect(() => {
    if (activeProfile) setCardPhotoIndex(0);
  }, [activeProfile?.id]);

  useEffect(() => {
    if (matches.length && !matches.includes(selectedChatId)) setSelectedChatId(matches[0]);
  }, [matches, selectedChatId]);

  const ensureMessages = (profile) => {
    setMessages((prev) => {
      if (prev[profile.id]) return prev;
      return {
        ...prev,
        [profile.id]: (lang === "ru" ? profile.starterMessagesRu : profile.starterMessagesEn).map((text) => ({
          from: "them",
          text,
          textEn: text,
        })),
      };
    });
  };

  const markSwiped = (id) => {
    setSwipedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleLike = (profile) => {
    if (!profile) return;
    const makeMatch = [1, 2, 3].includes(profile.id);
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
    markSwiped(profile.id);
  };

  const restartDeck = () => setSwipedIds([]);

  const animateOut = (direction) => {
    const el = cardRef.current;
    if (!el || !activeProfile) return;

    const up = direction === "up";
    el.style.transition = "transform .34s ease, opacity .34s ease";
    el.style.transform = up
      ? "translateY(-420px) scale(.96)"
      : `translateX(${direction === "right" ? 460 : -460}px) rotate(${direction === "right" ? 16 : -16}deg)`;
    el.style.opacity = "0";

    setTimeout(() => {
      if (direction === "right") handleLike(activeProfile);
      else handleSkip(activeProfile);

      if (cardRef.current) {
        cardRef.current.style.transition = "none";
        cardRef.current.style.transform = "translate(0,0) rotate(0deg)";
        cardRef.current.style.opacity = "1";
      }
    }, 300);
  };

  const pointerDown = (x, y) => {
    dragRef.current = { active: true, startX: x, startY: y, dx: 0, dy: 0 };
    if (cardRef.current) cardRef.current.style.transition = "none";
  };

  const pointerMove = (x, y) => {
    if (!dragRef.current.active || !cardRef.current) return;
    const dx = x - dragRef.current.startX;
    const dy = y - dragRef.current.startY;
    dragRef.current.dx = dx;
    dragRef.current.dy = dy;

    if (Math.abs(dy) > Math.abs(dx) && dy < 0) {
      cardRef.current.style.transform = `translateY(${dy}px) scale(${Math.max(0.94, 1 + dy / 1800)})`;
    } else {
      cardRef.current.style.transform = `translateX(${dx}px) translateY(${Math.max(-18, Math.min(18, dy))}px) rotate(${dx / 18}deg)`;
    }
  };

  const pointerUp = () => {
    if (!dragRef.current.active || !cardRef.current) return;
    const { dx, dy } = dragRef.current;
    dragRef.current.active = false;

    if (dx > 110) return animateOut("right");
    if (dx < -110) return animateOut("left");
    if (dy < -120) return animateOut("up");

    cardRef.current.style.transition = "transform .22s ease";
    cardRef.current.style.transform = "translate(0,0) rotate(0deg)";
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
      maxDistance: 5,
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
        html,body,#root{margin:0;padding:0;min-height:100%;font-family:Inter,Arial,sans-serif;background:
        radial-gradient(circle at top left, rgba(255,105,145,.12), transparent 24%),
        radial-gradient(circle at top right, rgba(255,186,190,.14), transparent 28%),
        linear-gradient(180deg,#fff8fb 0%,#f8f5fb 100%);color:#231b2e}
        body{overflow-x:hidden}
        .page{max-width:1380px;margin:0 auto;padding:18px 16px 100px}
        .topbar,.panel{background:rgba(255,255,255,.84);backdrop-filter:blur(14px);box-shadow:0 12px 30px rgba(36,20,48,.06)}
        .topbar{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:14px 18px;border-radius:24px;margin-bottom:18px;position:sticky;top:10px;z-index:50}
        .brand-wrap{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
        .brand{font-size:22px;font-weight:900;color:#ff5f8f}
        .lang-switch,.hero-actions,.filter-actions,.segmented,.mutual-actions{display:flex;gap:10px;flex-wrap:wrap}
        .chip-btn,.nav-btn,.primary-btn,.secondary-btn,.ghost-btn,.round-btn{border:none;cursor:pointer;transition:.2s ease;font-weight:800}
        .chip-btn,.nav-btn{border-radius:999px;padding:10px 14px;background:#f1edf4;color:#2b2335}
        .chip-btn.active,.nav-btn.active,.primary-btn{background:linear-gradient(135deg,#ff5f8f,#ff8a6b);color:#fff;box-shadow:0 12px 22px rgba(255,95,143,.24)}
        .nav{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}
        .nav-btn{padding:12px 16px;font-size:14px}
        .mobile-tabs{display:none}
        .panel{border-radius:28px;padding:22px}
        .hero{display:grid;grid-template-columns:1.15fr .95fr;gap:20px;margin-bottom:22px}
        .hero-title,.section-title{margin:0 0 12px;font-size:clamp(34px,5vw,68px);line-height:.95;font-weight:900;letter-spacing:-1.6px}
        .hero-text,.section-subtitle,.muted{font-size:17px;line-height:1.55;color:#655a70}
        .hero-preview{min-height:520px;border-radius:32px;overflow:hidden;position:relative;box-shadow:0 24px 40px rgba(22,11,30,.12)}
        .hero-preview img,.profile-photo-grid img,.swipe-card img,.list-item img,.chat-item img,.profile-avatar img{display:block;object-fit:cover}
        .hero-preview img{width:100%;height:100%}
        .preview-overlay{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:22px;color:#fff;background:linear-gradient(180deg,rgba(0,0,0,.06),rgba(0,0,0,.64))}
        .preview-name{margin:0 0 6px;font-size:clamp(28px,4vw,46px);font-weight:900}
        .preview-bio{margin:0;max-width:88%}
        .quick-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .quick-num{width:46px;height:46px;border-radius:16px;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#ff5f8f,#ff8a6b);color:#fff;font-weight:900;margin-bottom:14px}
        .search-top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px}
        .search-wrap{display:grid;grid-template-columns:minmax(0,1fr);gap:16px}
        .deck-wrap{display:flex;justify-content:center;align-items:flex-start;min-height:78vh}
        .swipe-card{width:100%;max-width:460px;height:min(82vh,760px);border-radius:30px;overflow:hidden;position:relative;background:#ece8ef;box-shadow:0 28px 50px rgba(25,10,38,.14);touch-action:none;user-select:none;cursor:grab}
        .swipe-card:active{cursor:grabbing}
        .swipe-card img{width:100%;height:100%}
        .photo-tap{position:absolute;top:0;bottom:0;width:50%;z-index:3}
        .photo-tap.left{left:0}
        .photo-tap.right{right:0}
        .photo-bars{position:absolute;top:14px;left:14px;right:14px;display:flex;gap:6px;z-index:4}
        .photo-bar{height:4px;flex:1;border-radius:999px;background:rgba(255,255,255,.35);overflow:hidden}
        .photo-bar > span{display:block;height:100%;background:#fff}
        .top-pills{position:absolute;top:26px;left:16px;right:16px;display:flex;justify-content:space-between;align-items:center;gap:10px;z-index:4}
        .pill{padding:8px 12px;border-radius:999px;background:rgba(255,255,255,.18);color:#fff;backdrop-filter:blur(12px);font-size:13px;font-weight:900}
        .card-bottom{position:absolute;left:0;right:0;bottom:0;padding:18px;background:linear-gradient(180deg,rgba(0,0,0,.02),rgba(0,0,0,.42) 22%, rgba(255,255,255,.96) 23%, #fff 100%);z-index:4}
        .card-name{margin:0 0 6px;font-size:32px;font-weight:900;display:flex;align-items:center;flex-wrap:wrap;color:#231b2e}
        .card-meta{margin:0 0 8px;color:#5d5268;font-weight:800}
        .chip-row{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}
        .interest{padding:8px 12px;border-radius:999px;background:#f5f1f8;font-size:13px;font-weight:800;color:#52475e}
        .card-bio{margin:0;color:#665b70;line-height:1.5}
        .card-actions{display:flex;justify-content:space-between;gap:12px;margin-top:16px}
        .round-btn{width:62px;height:62px;border-radius:50%;font-size:22px;box-shadow:0 14px 28px rgba(20,10,28,.18)}
        .round-btn.skip{background:#f3eef6;color:#61556c}
        .round-btn.like{background:linear-gradient(135deg,#ff5f8f,#ff8a6b);color:#fff}
        .round-btn.next{background:linear-gradient(135deg,#8f91ff,#6fbcff);color:#fff}
        .empty{min-height:320px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#665b70;gap:10px}
        .messages-layout,.profile-layout,.settings-layout{display:grid;gap:16px}
        .messages-layout{grid-template-columns:220px minmax(0,1fr);min-height:620px}
        .profile-layout{grid-template-columns:320px minmax(0,1fr)}
        .settings-layout{grid-template-columns:360px minmax(0,1fr)}
        .list-grid{display:grid;gap:12px}
        .list-item,.chat-item{display:flex;align-items:center;gap:12px;padding:12px;border-radius:20px;background:#f8f5fa}
        .list-item img{width:58px;height:58px;border-radius:18px;flex-shrink:0}
        .chat-item{cursor:pointer}
        .chat-item.active{background:linear-gradient(135deg,rgba(255,95,143,.11),rgba(255,139,110,.11));border:1px solid rgba(255,95,143,.12)}
        .chat-item img{width:42px;height:42px;border-radius:50%;flex-shrink:0}
        .item-title{font-size:16px;font-weight:900;margin:0 0 2px;display:flex;align-items:center;flex-wrap:wrap}
        .item-sub{font-size:13px;color:#6a6076;margin:0}
        .message-panel{display:grid;grid-template-rows:auto 1fr auto;min-height:620px}
        .message-header{display:flex;align-items:center;gap:12px;padding-bottom:14px;border-bottom:1px solid rgba(100,80,120,.08)}
        .message-header img{width:56px;height:56px;border-radius:50%}
        .message-body{padding:18px 2px 18px 0;overflow:auto;display:flex;flex-direction:column;gap:12px}
        .bubble{max-width:78%;padding:13px 16px;border-radius:20px;font-size:15px;line-height:1.45}
        .bubble.them{align-self:flex-start;background:#f1edf4;color:#2b2235}
        .bubble.me{align-self:flex-end;background:linear-gradient(135deg,#ff5f8f,#ff8b6e);color:#fff}
        .message-input-row{display:flex;gap:10px;padding-top:14px;border-top:1px solid rgba(100,80,120,.08)}
        .message-input-row input,.field input,.field select,.field textarea{width:100%;border-radius:16px;border:1px solid rgba(95,80,110,.12);background:#fcfbfd;padding:14px 15px;font-size:15px;outline:none;font-family:inherit}
        .field{display:grid;gap:8px}
        .field label{font-size:14px;font-weight:800;color:#544a60}
        .field-group,.help-grid,.info-list{display:grid;gap:14px}
        .two-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
        .profile-avatar{text-align:center}
        .profile-avatar img{width:180px;height:180px;border-radius:50%;margin-bottom:14px}
        .profile-main-name{margin:0;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap}
        .profile-photo-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;margin-top:12px}
        .profile-photo-grid img{width:100%;height:170px;border-radius:18px}
        .info-row{display:flex;justify-content:space-between;gap:12px;padding:14px 0;border-bottom:1px solid rgba(100,80,120,.08)}
        .help-item{padding:18px;border-radius:20px;background:#faf7fc}
        .mutual-modal{position:fixed;inset:0;background:rgba(20,8,30,.45);display:flex;align-items:center;justify-content:center;padding:18px;z-index:100}
        .mutual-box{width:min(520px,100%);border-radius:30px;padding:28px;background:linear-gradient(135deg,#ff5f8f 0%,#ff8b6e 100%);color:#fff;box-shadow:0 24px 50px rgba(25,10,35,.26);text-align:center}
        .mutual-avatars{display:flex;justify-content:center;align-items:center;gap:14px;margin:16px 0 22px}
        .mutual-avatars img{width:94px;height:94px;border-radius:50%;object-fit:cover;border:4px solid rgba(255,255,255,.5)}
        .heart{font-size:34px}
        .phone-bottom-nav{display:none}
        @media (max-width:1120px){.hero,.profile-layout,.settings-layout{grid-template-columns:1fr}.quick-grid{grid-template-columns:1fr}}
        @media (max-width:760px){
          .page{padding:12px 12px 98px}
          .topbar{position:static;flex-direction:column;align-items:flex-start;padding:14px}
          .nav{display:none}
          .mobile-tabs{display:flex;gap:10px;overflow:auto;padding:2px 2px 4px;margin-bottom:14px;scrollbar-width:none}
          .mobile-tabs::-webkit-scrollbar{display:none}
          .mobile-tabs .nav-btn{flex:0 0 auto}
          .panel{padding:18px;border-radius:24px}
          .hero{grid-template-columns:1fr}
          .messages-layout{grid-template-columns:110px minmax(0,1fr);gap:12px}
          .chat-item{flex-direction:column;align-items:center;text-align:center;padding:10px 6px;border-radius:18px;gap:8px}
          .chat-item img{width:38px;height:38px}
          .item-title{font-size:12px;justify-content:center}
          .item-sub{font-size:11px}
          .swipe-card{max-width:100%;height:min(78vh,690px);border-radius:26px}
          .card-name{font-size:28px}
          .card-actions{justify-content:center}
          .round-btn{width:56px;height:56px}
          .two-col{grid-template-columns:1fr}
          .phone-bottom-nav{position:fixed;left:10px;right:10px;bottom:10px;display:grid;grid-template-columns:repeat(5,1fr);gap:8px;padding:8px;border-radius:22px;background:rgba(255,255,255,.92);backdrop-filter:blur(14px);box-shadow:0 16px 34px rgba(29,14,40,.12);z-index:60}
          .phone-tab-btn{border:none;background:transparent;padding:9px 4px;border-radius:16px;font-size:11px;font-weight:900;color:#5b5066;line-height:1.15}
          .phone-tab-btn.active{background:linear-gradient(135deg,#ff5f8f,#ff8b6e);color:#fff}
        }
      `}</style>

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
                      <img src={activeProfile.photos[cardPhotoIndex]} alt={activeProfile.name} />
                      <button
                        className="photo-tap left"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCardPhotoIndex((v) => (v === 0 ? activeProfile.photos.length - 1 : v - 1));
                        }}
                      />
                      <button
                        className="photo-tap right"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCardPhotoIndex((v) => (v + 1) % activeProfile.photos.length);
                        }}
                      />

                      <div className="photo-bars">
                        {activeProfile.photos.map((_, i) => (
                          <div key={i} className="photo-bar">
                            <span style={{ width: i <= cardPhotoIndex ? "100%" : "0%" }} />
                          </div>
                        ))}
                      </div>

                      <div className="top-pills">
                        <div className="pill">{activeProfile.photos.length} {t.photosCount}</div>
                        <div className="pill">
                          {settings.unit === "mi"
                            ? `${activeProfile.distanceMi} ${t.miles}`
                            : `${Math.round(activeProfile.distanceMi * 1.60934)} ${t.km}`}
                        </div>
                      </div>

                      <div className="card-bottom">
                        <h3 className="card-name">
                          {activeProfile.name}, {activeProfile.age} {activeProfile.zodiac}
                          {activeProfile.verified && <Badge />}
                        </h3>
                        <p className="card-meta">
                          {activeProfile.city}, {activeProfile.country} • {activeProfile.online ? t.online : t.offline}
                        </p>

                        <div className="chip-row">
                          {activeProfile.interests.map((it) => (
                            <span className="interest" key={it}>{it}</span>
                          ))}
                        </div>

                        <p className="card-bio">{lang === "ru" ? activeProfile.bio : activeProfile.bioEn}</p>

                        <div className="card-actions">
                          <button className="round-btn skip" onClick={() => animateOut("left")} title="skip">✕</button>
                          <button className="round-btn next" onClick={() => animateOut("up")} title="next">↑</button>
                          <button className="round-btn like" onClick={() => animateOut("right")} title="like">♥</button>
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
