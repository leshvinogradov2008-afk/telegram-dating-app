import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const defaultProfiles = [
  {
    id: 1,
    name: "Анна",
    age: 27,
    city: "Los Angeles",
    distance: "4 мили",
    zodiac: "Лев",
    verified: true,
    about:
      "Люблю прогулки, хорошие разговоры, путешествия и людей с чувством юмора.",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "София",
    age: 24,
    city: "West Hollywood",
    distance: "6 миль",
    zodiac: "Весы",
    verified: true,
    about:
      "Люблю уютные места, музыку, вечерние поездки и искреннее общение.",
    photos: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Юлия",
    age: 29,
    city: "Burbank",
    distance: "8 миль",
    zodiac: "Скорпион",
    verified: false,
    about:
      "Нравятся кино, активный отдых, вкусная еда и настоящая химия между людьми.",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Стелла",
    age: 26,
    city: "Santa Monica",
    distance: "11 миль",
    zodiac: "Близнецы",
    verified: true,
    about:
      "За спонтанные планы, честность, красивый стиль и легкость в общении.",
    photos: [
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

const defaultMyProfile = {
  name: "Алексей",
  age: 30,
  city: "Los Angeles",
  zodiac: "Козерог",
  verified: true,
  about:
    "Люблю живое общение, поездки по городу, хорошую музыку и интересных людей.",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  photos: [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
  ],
  email: "alexey@example.com",
};

const defaultChats = [
  {
    id: 1,
    name: "Favour Eve",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    verified: false,
    online: true,
    likedYou: true,
    yourTurn: false,
    lastMessage: "Был(а) недавно, создай пару прямо сейчас...",
    status: "доставлено",
    unread: 1,
  },
  {
    id: 2,
    name: "Sofia",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    verified: false,
    online: false,
    likedYou: false,
    yourTurn: false,
    lastMessage: "Ну ты же говоришь про себя так зна...",
    status: "прочитано",
    unread: 0,
  },
  {
    id: 3,
    name: "Antje",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    verified: false,
    online: false,
    likedYou: false,
    yourTurn: false,
    lastMessage: "Wow",
    status: "доставлено",
    unread: 0,
  },
  {
    id: 4,
    name: "Mia",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=600&auto=format&fit=crop",
    verified: false,
    online: false,
    likedYou: false,
    yourTurn: true,
    lastMessage: "Snapchat: josekaleans",
    status: "прочитано",
    unread: 0,
  },
  {
    id: 5,
    name: "Jane",
    avatar:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
    verified: false,
    online: false,
    likedYou: false,
    yourTurn: false,
    lastMessage: "Are you on WhatsApp or Telegram?",
    status: "доставлено",
    unread: 0,
  },
  {
    id: 6,
    name: "Sahar",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    verified: false,
    online: false,
    likedYou: false,
    yourTurn: false,
    lastMessage: "Hello",
    status: "прочитано",
    unread: 0,
  },
];

const helpItems = [
  {
    q: "Как поставить лайк анкете?",
    a: "Открой раздел «Свайпить» и нажми кнопку с сердцем. Также можно использовать свайп карточки вправо.",
  },
  {
    q: "Что значит взаимная симпатия?",
    a: "Если вы понравились друг другу, создаётся пара и открывается возможность переписки.",
  },
  {
    q: "Что означает «Твой ход»?",
    a: "Это значит, что собеседник уже написал или ждёт твоего ответа. Ты можешь открыть чат и продолжить общение.",
  },
  {
    q: "Как посмотреть, кто меня лайкнул?",
    a: "Открой раздел «Лайки» или посмотри верхний блок в разделе «Чат», где отображаются пользователи, поставившие лайк.",
  },
  {
    q: "Как изменить профиль?",
    a: "Перейди в «Профиль» и нажми «Редактировать профиль». Там можно изменить имя, возраст, город, знак зодиака и описание.",
  },
  {
    q: "Как добавить или удалить фото?",
    a: "В редактировании профиля можно указать ссылки на фотографии. Каждую ссылку пиши с новой строки.",
  },
  {
    q: "Как работает верификация анкеты?",
    a: "Верифицированные анкеты получают специальный значок. Это помогает другим пользователям понимать, что профиль подтверждён.",
  },
  {
    q: "Как включить или выключить уведомления?",
    a: "Открой «Настройки» и используй пункты уведомлений: в приложении, на телефон и на Email.",
  },
  {
    q: "Как изменить email или пароль?",
    a: "Это можно сделать в разделе «Настройки» через пункты «Изменить email» и «Изменить пароль».",
  },
  {
    q: "Почему я не вижу новые сообщения?",
    a: "Проверь подключение к интернету, фильтр сообщений и включены ли уведомления в приложении.",
  },
  {
    q: "Как пожаловаться на пользователя?",
    a: "В будущем это можно будет делать из чата или профиля пользователя через кнопку «Пожаловаться».",
  },
  {
    q: "Как заблокировать пользователя?",
    a: "Функцию блокировки можно добавить в профиль собеседника и в меню диалога.",
  },
  {
    q: "Как удалить аккаунт?",
    a: "Это действие обычно находится в настройках приложения. Для демо-версии можно добавить отдельную кнопку позже.",
  },
  {
    q: "Как восстановить доступ?",
    a: "Используй восстановление через email и обновление пароля в настройках.",
  },
];

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function VerifiedBadge() {
  return <span className="verified-badge">✓</span>;
}

function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "swipe", label: "Свайпить", icon: "🔥" },
    { key: "likes", label: "Лайки", icon: "💛" },
    { key: "chat", label: "Чат", icon: "💬" },
    { key: "profile", label: "Профиль", icon: "👤" },
  ];

  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="brand-logo">❤</div>
        <div>
          <div className="brand-title">Telegram Dating</div>
          <div className="brand-subtitle">знакомства и общение</div>
        </div>
      </div>

      <div className="topbar-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`topbar-tab pressable ${
              activeTab === tab.key ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </header>
  );
}

function BottomNav({ activeTab, setActiveTab, likesCount }) {
  const items = [
    { key: "swipe", label: "Свайпить", icon: "🔥" },
    { key: "events", label: "События", icon: "🎟" },
    { key: "likes", label: "Лайки", icon: "💛", badge: likesCount },
    { key: "chat", label: "Чат", icon: "💬" },
    { key: "profile", label: "Профиль", icon: "👤" },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          key={item.key}
          className={`bottom-nav-item pressable ${
            activeTab === item.key ? "active" : ""
          }`}
          onClick={() => setActiveTab(item.key)}
        >
          <div className="bottom-nav-icon-wrap">
            <span className="bottom-nav-icon">{item.icon}</span>
            {item.badge ? <span className="bottom-nav-badge">{item.badge}</span> : null}
          </div>
          <span className="bottom-nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function SwipeCard({ profile, onLike, onDislike }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [likeBurst, setLikeBurst] = useState(false);
  const touchStartX = useRef(0);

  const photos = profile.photos?.length ? profile.photos : [profile.avatar];

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;

    if (diff > 40) nextPhoto();
    if (diff < -40) prevPhoto();
  };

  const handleLikeClick = () => {
    setLikeBurst(true);
    setTimeout(() => setLikeBurst(false), 650);
    onLike(profile);
  };

  return (
    <div className="swipe-card">
      <div
        className="swipe-card-photo-wrap"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={photos[photoIndex]}
          alt={profile.name}
          className="swipe-card-photo"
        />

        <div className="photo-progress">
          {photos.map((_, index) => (
            <span
              key={index}
              className={`photo-progress-line ${
                index === photoIndex ? "active" : ""
              }`}
            />
          ))}
        </div>

        <button className="photo-side-button left pressable" onClick={prevPhoto}>
          ‹
        </button>
        <button className="photo-side-button right pressable" onClick={nextPhoto}>
          ›
        </button>

        <div className="distance-pill">
          {profile.city} • {profile.distance}
        </div>

        {likeBurst && <div className="like-burst">LIKE</div>}
      </div>

      <div className="swipe-card-body">
        <div className="swipe-card-title-row">
          <h2>
            {profile.name}, {profile.age}
          </h2>
          <div className="meta-inline">
            {profile.verified ? <VerifiedBadge /> : null}
            <span className="zodiac-pill">{profile.zodiac}</span>
          </div>
        </div>
        <p className="swipe-card-about">{profile.about}</p>

        <div className="swipe-actions">
          <button className="action-btn dislike pressable" onClick={() => onDislike(profile)}>
            ✕
          </button>
          <button className="action-btn super pressable">★</button>
          <button className="action-btn like pressable" onClick={handleLikeClick}>
            ❤
          </button>
        </div>
      </div>
    </div>
  );
}

function SwipeScreen({ profiles, setProfiles, setLikesReceived, setChats, setMatchesCount }) {
  const currentProfile = profiles[0];

  const handleLike = (profile) => {
    setLikesReceived((prev) => {
      const exists = prev.some((item) => item.id === profile.id);
      if (exists) return prev;
      return [
        {
          id: profile.id,
          name: profile.name,
          avatar: profile.photos?.[0],
          verified: profile.verified,
        },
        ...prev,
      ];
    });

    setChats((prev) => {
      const exists = prev.some((chat) => chat.name === profile.name);
      if (exists) return prev;
      return [
        {
          id: Date.now(),
          name: profile.name,
          avatar: profile.photos?.[0],
          verified: profile.verified,
          online: true,
          likedYou: true,
          yourTurn: true,
          lastMessage: "Вы создали пару. Напиши первым.",
          status: "доставлено",
          unread: 0,
        },
        ...prev,
      ];
    });

    setMatchesCount((prev) => prev + 1);
    setProfiles((prev) => [...prev.slice(1), prev[0]]);
  };

  const handleDislike = () => {
    setProfiles((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <section className="page page-swipe">
      <div className="page-head">
        <h1>Свайпить</h1>
        <p>Смотри анкеты, листай фото свайпом и ставь лайки.</p>
      </div>

      {currentProfile ? (
        <div className="swipe-screen-wrap">
          <SwipeCard
            profile={currentProfile}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        </div>
      ) : (
        <div className="empty-box">Анкеты скоро появятся.</div>
      )}
    </section>
  );
}

function LikesScreen({ likesReceived }) {
  return (
    <section className="page">
      <div className="page-head">
        <h1>Лайки</h1>
        <p>Список пользователей, которым понравилась твоя анкета.</p>
      </div>

      <div className="likes-grid">
        {likesReceived.map((item) => (
          <div key={item.id} className="like-card">
            <img src={item.avatar} alt={item.name} className="like-card-img" />
            <div className="like-card-info">
              <div className="like-card-name-row">
                <strong>{item.name}</strong>
                {item.verified ? <VerifiedBadge /> : null}
              </div>
              <span className="liked-badge">Лайкнул(а) тебя</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChatScreen({ chats, likesReceived, matchesCount }) {
  return (
    <section className="page chat-page">
      <div className="chat-header-block">
        <div>
          <h1>Чат</h1>
          <p>Новые пары и сообщения</p>
        </div>
        <div className="chat-toggle-panel">
          <button className="pressable">🛡</button>
          <button className="pressable">🔔</button>
        </div>
      </div>

      <div className="pairs-strip">
        <div className="pair-card likes-card">
          <div className="likes-counter">{matchesCount}</div>
          <div className="likes-card-bottom">
            <span>💛</span>
            <strong>лайков</strong>
          </div>
        </div>

        {likesReceived.slice(0, 4).map((item) => (
          <div key={item.id} className="pair-card">
            <img src={item.avatar} alt={item.name} className="pair-photo" />
            <div className="pair-name-row">
              <span>{item.name}</span>
              {item.verified ? <VerifiedBadge /> : null}
            </div>
          </div>
        ))}
      </div>

      <div className="messages-list">
        <h2>Сообщения</h2>

        {chats.map((chat) => (
          <div key={chat.id} className="chat-row pressable">
            <div className="chat-avatar-wrap">
              <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
              {chat.online ? <span className="online-dot" /> : null}
            </div>

            <div className="chat-main">
              <div className="chat-name-row">
                <div className="chat-name-left">
                  <strong>{chat.name}</strong>
                  {chat.verified ? <VerifiedBadge /> : null}
                  {chat.likedYou ? (
                    <span className="mini-liked-badge">Лайкнул(а) тебя</span>
                  ) : null}
                </div>

                <div className="chat-right-meta">
                  {chat.yourTurn ? <span className="your-turn-badge">Твой ход</span> : null}
                </div>
              </div>

              <div className="chat-message-row">
                <span className="chat-last-message">{chat.lastMessage}</span>
                <span className="chat-status">
                  {chat.status === "прочитано" ? "✓✓ Прочитано" : "✓ Доставлено"}
                </span>
              </div>
            </div>

            {chat.unread > 0 ? <span className="unread-badge">{chat.unread}</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function SettingsScreen() {
  const items = [
    "Фильтр сообщений",
    "Уведомления на телефон",
    "Уведомления в приложении",
    "Уведомления на Email",
    "Изменить email",
    "Изменить пароль",
    "Информация об анкете",
    "Настройки приложения",
    "Помощь",
    "Выход",
  ];

  return (
    <section className="settings-screen">
      <div className="settings-title">Настройки</div>
      <div className="settings-list">
        {items.map((item) => (
          <button key={item} className="settings-item pressable">
            <span>{item}</span>
            <span className="settings-arrow">›</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function HelpScreen() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="settings-screen">
      <div className="settings-title">Помощь</div>
      <div className="faq-list">
        {helpItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button
                className="faq-question pressable"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.q}</span>
                <span className="faq-arrow">{isOpen ? "⌄" : "›"}</span>
              </button>
              {isOpen ? <div className="faq-answer">{item.a}</div> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProfileScreen({ myProfile, setMyProfile, setActiveSubPage }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(myProfile);

  useEffect(() => {
    setDraft(myProfile);
  }, [myProfile]);

  const saveProfile = () => {
    const normalizedPhotos =
      typeof draft.photos === "string"
        ? draft.photos
            .split("\n")
            .map((item) => item.trim())
            .filter(Boolean)
        : draft.photos;

    setMyProfile({
      ...draft,
      photos: normalizedPhotos,
      avatar: normalizedPhotos?.[0] || draft.avatar,
    });
    setEditing(false);
  };

  const photosText = Array.isArray(draft.photos) ? draft.photos.join("\n") : "";

  return (
    <section className="page">
      <div className="profile-top-card">
        <img src={myProfile.avatar} alt={myProfile.name} className="profile-avatar" />
        <div className="profile-main-info">
          <div className="profile-name-row">
            <h1>
              {myProfile.name}, {myProfile.age}
            </h1>
            {myProfile.verified ? <VerifiedBadge /> : null}
          </div>
          <div className="profile-meta-row">
            <span>{myProfile.city}</span>
            <span className="zodiac-pill">{myProfile.zodiac}</span>
          </div>
          <p>{myProfile.about}</p>
        </div>
      </div>

      <div className="profile-actions-grid">
        <button className="profile-mini-card pressable" onClick={() => setEditing(true)}>
          <span className="mini-card-title">Редактировать профиль</span>
          <span className="mini-card-sub">Имя, возраст, город, фото, о себе</span>
        </button>

        <button className="profile-mini-card pressable" onClick={() => setActiveSubPage("settings")}>
          <span className="mini-card-title">Настройки</span>
          <span className="mini-card-sub">Email, пароль, уведомления</span>
        </button>

        <button className="profile-mini-card pressable" onClick={() => setActiveSubPage("help")}>
          <span className="mini-card-title">Помощь</span>
          <span className="mini-card-sub">Вопросы и ответы по приложению</span>
        </button>

        <button className="profile-mini-card pressable">
          <span className="mini-card-title">Верификация</span>
          <span className="mini-card-sub">
            {myProfile.verified ? "Анкета подтверждена" : "Подтвердить анкету"}
          </span>
        </button>
      </div>

      <div className="profile-gallery">
        {(myProfile.photos || []).map((photo, idx) => (
          <img key={idx} src={photo} alt={`Фото ${idx + 1}`} className="profile-gallery-img" />
        ))}
      </div>

      {editing ? (
        <div className="modal-backdrop" onClick={() => setEditing(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>Редактировать профиль</h2>

            <div className="form-grid">
              <label>
                <span>Имя</span>
                <input
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                />
              </label>

              <label>
                <span>Возраст</span>
                <input
                  type="number"
                  value={draft.age}
                  onChange={(e) => setDraft({ ...draft, age: Number(e.target.value) })}
                />
              </label>

              <label>
                <span>Город</span>
                <input
                  value={draft.city}
                  onChange={(e) => setDraft({ ...draft, city: e.target.value })}
                />
              </label>

              <label>
                <span>Знак зодиака</span>
                <input
                  value={draft.zodiac}
                  onChange={(e) => setDraft({ ...draft, zodiac: e.target.value })}
                />
              </label>

              <label className="full">
                <span>Email</span>
                <input
                  value={draft.email}
                  onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                />
              </label>

              <label className="full">
                <span>О себе</span>
                <textarea
                  rows="4"
                  value={draft.about}
                  onChange={(e) => setDraft({ ...draft, about: e.target.value })}
                />
              </label>

              <label className="full">
                <span>Фото профиля и галерея — по одной ссылке с новой строки</span>
                <textarea
                  rows="6"
                  value={photosText}
                  onChange={(e) => setDraft({ ...draft, photos: e.target.value })}
                />
              </label>
            </div>

            <div className="modal-actions">
              <button className="secondary-btn pressable" onClick={() => setEditing(false)}>
                Отмена
              </button>
              <button className="primary-btn pressable" onClick={saveProfile}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function EventsScreen() {
  const items = [
    {
      title: "Новые пары",
      text: "Пользователи, с которыми у тебя взаимная симпатия.",
    },
    {
      title: "Гости",
      text: "Кто заходил в твой профиль за последнее время.",
    },
    {
      title: "Популярность анкеты",
      text: "Сколько просмотров и лайков получила анкета.",
    },
  ];

  return (
    <section className="page">
      <div className="page-head">
        <h1>События</h1>
        <p>Активность, гости, новые пары и просмотры профиля.</p>
      </div>

      <div className="events-grid">
        {items.map((item) => (
          <div key={item.title} className="event-card">
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("swipe");
  const [activeSubPage, setActiveSubPage] = useState("");
  const [profiles, setProfiles] = useLocalStorage("dating_profiles", defaultProfiles);
  const [myProfile, setMyProfile] = useLocalStorage("dating_my_profile", defaultMyProfile);
  const [likesReceived, setLikesReceived] = useLocalStorage("dating_likes_received", [
    {
      id: 101,
      name: "Stella",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
      verified: true,
    },
    {
      id: 102,
      name: "Yulia",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
      verified: false,
    },
    {
      id: 103,
      name: "Judith",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
      verified: false,
    },
  ]);
  const [matchesCount, setMatchesCount] = useLocalStorage("dating_matches_count", 34);
  const [chats, setChats] = useLocalStorage("dating_chats", defaultChats);

  useEffect(() => {
    if (activeTab !== "profile") {
      setActiveSubPage("");
    }
  }, [activeTab]);

  const content = useMemo(() => {
    if (activeTab === "swipe") {
      return (
        <SwipeScreen
          profiles={profiles}
          setProfiles={setProfiles}
          setLikesReceived={setLikesReceived}
          setChats={setChats}
          setMatchesCount={setMatchesCount}
        />
      );
    }

    if (activeTab === "likes") {
      return <LikesScreen likesReceived={likesReceived} />;
    }

    if (activeTab === "chat") {
      return (
        <ChatScreen
          chats={chats}
          likesReceived={likesReceived}
          matchesCount={matchesCount}
        />
      );
    }

    if (activeTab === "events") {
      return <EventsScreen />;
    }

    if (activeTab === "profile") {
      if (activeSubPage === "settings") return <SettingsScreen />;
      if (activeSubPage === "help") return <HelpScreen />;
      return (
        <ProfileScreen
          myProfile={myProfile}
          setMyProfile={setMyProfile}
          setActiveSubPage={setActiveSubPage}
        />
      );
    }

    return <EventsScreen />;
  }, [
    activeTab,
    activeSubPage,
    profiles,
    setProfiles,
    likesReceived,
    chats,
    matchesCount,
    myProfile,
    setMyProfile,
    setLikesReceived,
    setChats,
    setMatchesCount,
  ]);

  return (
    <div className="app-shell">
      <div className="app-frame">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="app-content">{content}</main>
        <BottomNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          likesCount={matchesCount}
        />
      </div>
    </div>
  );
}
