import { useEffect, useMemo, useRef, useState } from "react"

const texts = {
  brand: "Velvet",
  navHome: "Главная",
  navFeed: "Лента",
  navLikes: "Симпатии",
  navMessages: "Сообщения",
  navProfile: "Профиль",

  heroBadge: "Современные знакомства",
  heroTitle: "Знакомства в красивом формате",
  heroText:
    "Смотри анкеты, переключай фото, используй фильтры, ставь симпатии и общайся внутри сайта после взаимного интереса.",
  heroPrimary: "Смотреть анкеты",
  heroSecondary: "Перейти в сообщения",

  step1Title: "Быстрый старт",
  step1Text: "Открываешь сайт и сразу попадаешь в удобный интерфейс знакомств.",
  step2Title: "Умные фильтры",
  step2Text: "Выбираешь город, возраст, пол и интересы за пару секунд.",
  step3Title: "Общение внутри сайта",
  step3Text: "После взаимной симпатии появляется переписка прямо на сайте.",

  feedTitle: "Лента анкет",
  feedText: "Листай анкеты, переключай фото и находи интересных людей рядом.",
  likesTitle: "Мои симпатии",
  likesText: "Здесь хранятся анкеты, которые ты лайкнул.",
  messagesTitle: "Сообщения",
  messagesText: "После взаимной симпатии здесь появляется чат.",
  profileTitle: "Мой профиль",
  profileText: "Здесь позже будет полноценная анкета пользователя.",

  like: "❤️ Симпатия",
  next: "Дальше",
  clearLikes: "Очистить симпатии",
  noLikes: "Пока нет лайкнутых анкет",
  noLikesText: "Перейди в ленту и добавь несколько симпатий.",
  noProfiles: "Анкеты не найдены",
  noProfilesText: "Попробуй изменить фильтры.",
  noMessages: "Пока нет сообщений",
  noMessagesText: "Когда случится взаимная симпатия, здесь появится чат.",

  location: "Локация",
  distance: "Дальность",
  gender: "Пол",
  interest: "Интерес",
  ageFrom: "Возраст от",
  ageTo: "Возраст до",

  allLocations: "Все локации",
  allDistances: "Любая",
  allGenders: "Любой",
  allInterests: "Любой",
  female: "Девушки",
  male: "Мужчины",

  verified: "Проверено",
  online: "Онлайн",
  miles: "миль",

  profileName: "Имя",
  profileAge: "Возраст",
  profileCity: "Город",
  profileAbout: "О себе",
  profileInterests: "Интересы",
  editProfile: "Редактировать позже",

  mutualTitle: "Взаимная симпатия!",
  mutualText: "Теперь вы можете общаться в разделе «Сообщения».",
  openMessages: "Открыть сообщения",
  close: "Закрыть",

  photo1: "Фото 1",
  photo2: "Фото 2",
  send: "Отправить",
  writeMessage: "Написать сообщение...",
  selectChat: "Выбери чат слева, чтобы открыть переписку."
}

const profiles = [
  {
    id: 1,
    name: "Анна",
    age: 26,
    city: "Los Angeles",
    distance: 4,
    gender: "female",
    interests: ["Музыка", "Путешествия", "Кофе"],
    about: "Люблю красивые места, музыку и лёгкое общение.",
    photos: [
      "https://i.pravatar.cc/900?img=47",
      "https://i.pravatar.cc/900?img=48"
    ],
    verified: true,
    online: true,
    mutual: true
  },
  {
    id: 2,
    name: "София",
    age: 24,
    city: "Santa Monica",
    distance: 9,
    gender: "female",
    interests: ["Океан", "Фитнес", "Кино"],
    about: "Обожаю прогулки у океана и уютные вечера.",
    photos: [
      "https://i.pravatar.cc/900?img=49",
      "https://i.pravatar.cc/900?img=50"
    ],
    verified: true,
    online: false,
    mutual: false
  },
  {
    id: 3,
    name: "Эмма",
    age: 27,
    city: "Burbank",
    distance: 16,
    gender: "female",
    interests: ["Искусство", "Книги", "Юмор"],
    about: "Ценю искренность, юмор и интересные знакомства.",
    photos: [
      "https://i.pravatar.cc/900?img=51",
      "https://i.pravatar.cc/900?img=52"
    ],
    verified: false,
    online: true,
    mutual: true
  },
  {
    id: 4,
    name: "Луна",
    age: 25,
    city: "West Hollywood",
    distance: 7,
    gender: "female",
    interests: ["Стиль", "Еда", "Ночные прогулки"],
    about: "Люблю стиль, новые впечатления и спонтанность.",
    photos: [
      "https://i.pravatar.cc/900?img=53",
      "https://i.pravatar.cc/900?img=54"
    ],
    verified: true,
    online: true,
    mutual: false
  },
  {
    id: 5,
    name: "Даниэль",
    age: 29,
    city: "Los Angeles",
    distance: 6,
    gender: "male",
    interests: ["Спорт", "Авто", "Путешествия"],
    about: "Люблю активную жизнь, спорт и хорошие разговоры.",
    photos: [
      "https://i.pravatar.cc/900?img=12",
      "https://i.pravatar.cc/900?img=14"
    ],
    verified: true,
    online: false,
    mutual: true
  },
  {
    id: 6,
    name: "Крис",
    age: 31,
    city: "Santa Monica",
    distance: 12,
    gender: "male",
    interests: ["Океан", "Музыка", "Бизнес"],
    about: "Люблю океан, музыку и людей с хорошей энергией.",
    photos: [
      "https://i.pravatar.cc/900?img=15",
      "https://i.pravatar.cc/900?img=16"
    ],
    verified: false,
    online: true,
    mutual: false
  }
]

const starterMessages = {
  1: [
    { from: "them", text: "Привет 😊 Рада взаимной симпатии." },
    { from: "them", text: "Как проходит твой день?" }
  ],
  3: [
    { from: "them", text: "Привет! Похоже, у нас мэтч ✨" },
    { from: "them", text: "Любишь вечерние прогулки?" }
  ],
  5: [
    { from: "them", text: "Привет! Рад знакомству." },
    { from: "them", text: "Чем увлекаешься в свободное время?" }
  ]
}

const locationOptions = ["All", "Los Angeles", "Santa Monica", "Burbank", "West Hollywood"]
const distanceOptions = ["Any", 5, 10, 25, 50]
const interestOptions = [
  "Any",
  "Музыка",
  "Путешествия",
  "Кофе",
  "Океан",
  "Фитнес",
  "Кино",
  "Искусство",
  "Книги",
  "Юмор",
  "Стиль",
  "Еда",
  "Ночные прогулки",
  "Спорт",
  "Авто",
  "Бизнес"
]
const ageFromOptions = [18, 21, 25, 30, 35]
const ageToOptions = [25, 30, 35, 40, 50]

function getPageFromHash() {
  const hash = window.location.hash.replace("#", "")
  if (
    hash === "/лента" ||
    hash === "/симпатии" ||
    hash === "/сообщения" ||
    hash === "/профиль"
  ) {
    return hash
  }
  return "/"
}

function isMobileWidth() {
  return typeof window !== "undefined" ? window.innerWidth <= 768 : false
}

function NavLink({ href, label, currentPage, mobile = false }) {
  const active = currentPage === href
  return (
    <a
      href={`#${href}`}
      style={{
        textDecoration: "none",
        color: active ? "#fff" : "#25202a",
        background: active ? "linear-gradient(135deg, #ff4d8d, #ff7a59)" : "rgba(255,255,255,0.72)",
        padding: mobile ? "10px 14px" : "12px 18px",
        borderRadius: "999px",
        fontWeight: "700",
        fontSize: mobile ? "14px" : "15px",
        boxShadow: active ? "0 12px 28px rgba(255,98,122,0.22)" : "none",
        border: active ? "none" : "1px solid rgba(0,0,0,0.05)"
      }}
    >
      {label}
    </a>
  )
}

function PhotoSwitcher({ activePhoto, setActivePhoto }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "16px",
        left: "16px",
        display: "flex",
        gap: "8px",
        zIndex: 3
      }}
    >
      {[0, 1].map((i) => (
        <button
          key={i}
          onClick={(e) => {
            e.stopPropagation()
            setActivePhoto(i)
          }}
          style={{
            border: "none",
            background: activePhoto === i ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)",
            color: "#1f1722",
            padding: "8px 12px",
            borderRadius: "999px",
            fontWeight: "800",
            cursor: "pointer",
            fontSize: "13px"
          }}
        >
          {i === 0 ? texts.photo1 : texts.photo2}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash())
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectedDistance, setSelectedDistance] = useState("Any")
  const [selectedGender, setSelectedGender] = useState("Any")
  const [selectedInterest, setSelectedInterest] = useState("Any")
  const [ageFrom, setAgeFrom] = useState(18)
  const [ageTo, setAgeTo] = useState(50)
  const [index, setIndex] = useState(0)
  const [likedIds, setLikedIds] = useState([])
  const [matchedIds, setMatchedIds] = useState([])
  const [chatMap, setChatMap] = useState({})
  const [selectedChatId, setSelectedChatId] = useState(null)
  const [messageInput, setMessageInput] = useState("")
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [animatingOut, setAnimatingOut] = useState(null)
  const [isMobile, setIsMobile] = useState(isMobileWidth())
  const [showMutualModal, setShowMutualModal] = useState(false)
  const [mutualProfile, setMutualProfile] = useState(null)
  const [activePhoto, setActivePhoto] = useState(0)

  const startXRef = useRef(0)
  const t = texts

  useEffect(() => {
    const handleHash = () => setPage(getPageFromHash())
    const handleResize = () => setIsMobile(isMobileWidth())

    window.addEventListener("hashchange", handleHash)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("hashchange", handleHash)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const locationMatch =
        selectedLocation === "All" || profile.city === selectedLocation

      const distanceMatch =
        selectedDistance === "Any" || profile.distance <= selectedDistance

      const genderMatch =
        selectedGender === "Any" || profile.gender === selectedGender

      const interestMatch =
        selectedInterest === "Any" || profile.interests.includes(selectedInterest)

      const ageMatch = profile.age >= ageFrom && profile.age <= ageTo

      return locationMatch && distanceMatch && genderMatch && interestMatch && ageMatch
    })
  }, [selectedLocation, selectedDistance, selectedGender, selectedInterest, ageFrom, ageTo])

  useEffect(() => {
    setIndex(0)
    setDragX(0)
    setIsDragging(false)
    setAnimatingOut(null)
    setActivePhoto(0)
  }, [selectedLocation, selectedDistance, selectedGender, selectedInterest, ageFrom, ageTo])

  const likedProfiles = useMemo(
    () => profiles.filter((profile) => likedIds.includes(profile.id)),
    [likedIds]
  )

  const matchedProfiles = useMemo(
    () => profiles.filter((profile) => matchedIds.includes(profile.id)),
    [matchedIds]
  )

  const currentProfile =
    filteredProfiles.length > 0
      ? filteredProfiles[index % filteredProfiles.length]
      : null

  const currentChatMessages = selectedChatId ? chatMap[selectedChatId] || [] : []

  const rotation = dragX / 18
  const likeOpacity = dragX > 0 ? Math.min(dragX / 140, 1) : 0
  const nopeOpacity = dragX < 0 ? Math.min(Math.abs(dragX) / 140, 1) : 0

  const cardTransform = useMemo(() => {
    if (animatingOut === "right") return "translateX(900px) rotate(22deg)"
    if (animatingOut === "left") return "translateX(-900px) rotate(-22deg)"
    return `translateX(${dragX}px) rotate(${rotation}deg)`
  }, [animatingOut, dragX, rotation])

  const nextProfile = () => {
    if (filteredProfiles.length === 0) return
    setIndex((prev) => (prev + 1) % filteredProfiles.length)
    setActivePhoto(0)
  }

  const addLike = (profile) => {
    setLikedIds((prev) => (prev.includes(profile.id) ? prev : [...prev, profile.id]))

    if (profile.mutual) {
      setMatchedIds((prev) => (prev.includes(profile.id) ? prev : [...prev, profile.id]))
      setChatMap((prev) => ({
        ...prev,
        [profile.id]: prev[profile.id] || starterMessages[profile.id] || []
      }))
      setSelectedChatId(profile.id)
      setMutualProfile(profile)
      setShowMutualModal(true)
    }
  }

  const animateOutAndNext = (direction) => {
    if (!currentProfile) return

    if (direction === "right") {
      addLike(currentProfile)
    }

    setAnimatingOut(direction)

    setTimeout(() => {
      nextProfile()
      setAnimatingOut(null)
      setDragX(0)
      setIsDragging(false)
    }, 260)
  }

  const handlePointerDown = (e) => {
    if (animatingOut || !currentProfile || isMobile) return
    setIsDragging(true)
    startXRef.current = e.clientX
  }

  const handlePointerMove = (e) => {
    if (!isDragging || animatingOut || !currentProfile || isMobile) return
    const delta = e.clientX - startXRef.current
    setDragX(delta)
  }

  const handlePointerUp = () => {
    if (!isDragging || animatingOut || !currentProfile || isMobile) return

    if (dragX > 120) {
      animateOutAndNext("right")
      return
    }

    if (dragX < -120) {
      animateOutAndNext("left")
      return
    }

    setIsDragging(false)
    setDragX(0)
  }

  const handleLike = () => {
    if (animatingOut || !currentProfile) return
    animateOutAndNext("right")
  }

  const handleNext = () => {
    if (animatingOut || !currentProfile) return
    animateOutAndNext("left")
  }

  const sendMessage = () => {
    if (!selectedChatId || !messageInput.trim()) return

    setChatMap((prev) => ({
      ...prev,
      [selectedChatId]: [
        ...(prev[selectedChatId] || []),
        { from: "me", text: messageInput.trim() }
      ]
    }))
    setMessageInput("")
  }

  const filterCardStyle = {
    background: "rgba(255,255,255,0.9)",
    padding: "16px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(26, 16, 34, 0.06)"
  }

  const selectStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #eee",
    fontSize: "15px",
    background: "#fff"
  }

  return (
    <div
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background:
          "radial-gradient(circle at top, rgba(255,132,161,0.18), transparent 28%), linear-gradient(180deg, #fff8fb 0%, #fff1f4 35%, #f7f5ff 100%)",
        minHeight: "100vh",
        color: "#211a24"
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.04)"
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: isMobile ? "14px 14px" : "18px 20px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "12px" : "18px",
            alignItems: isMobile ? "stretch" : "center",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              fontSize: isMobile ? "24px" : "28px",
              fontWeight: "900",
              letterSpacing: "-0.8px",
              background: "linear-gradient(135deg, #ff4d8d, #ff7a59)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {t.brand}
          </div>

          <nav
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-end"
            }}
          >
            <NavLink href="/" label={t.navHome} currentPage={page} mobile={isMobile} />
            <NavLink href="/лента" label={t.navFeed} currentPage={page} mobile={isMobile} />
            <NavLink href="/симпатии" label={t.navLikes} currentPage={page} mobile={isMobile} />
            <NavLink href="/сообщения" label={t.navMessages} currentPage={page} mobile={isMobile} />
            <NavLink href="/профиль" label={t.navProfile} currentPage={page} mobile={isMobile} />
          </nav>
        </div>
      </header>

      <main
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "20px 14px 60px" : "34px 20px 90px"
        }}
      >
        {page === "/" && (
          <>
            <section
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
                gap: "26px",
                alignItems: "center",
                paddingTop: isMobile ? "10px" : "20px"
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    fontWeight: "700",
                    fontSize: "14px",
                    marginBottom: "16px"
                  }}
                >
                  {t.heroBadge}
                </div>

                <h1
                  style={{
                    margin: "0 0 18px",
                    fontSize: isMobile ? "40px" : "72px",
                    lineHeight: "0.98",
                    letterSpacing: "-2px",
                    fontWeight: "900"
                  }}
                >
                  {t.heroTitle}
                </h1>

                <p
                  style={{
                    margin: "0 0 26px",
                    fontSize: isMobile ? "17px" : "21px",
                    lineHeight: "1.55",
                    color: "#5e5364",
                    maxWidth: "720px"
                  }}
                >
                  {t.heroText}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap"
                  }}
                >
                  <a
                    href="#/лента"
                    style={{
                      textDecoration: "none",
                      background: "linear-gradient(135deg, #ff4d8d, #ff7a59)",
                      color: "#fff",
                      padding: "16px 24px",
                      borderRadius: "18px",
                      fontWeight: "800",
                      boxShadow: "0 18px 38px rgba(255,105,130,0.22)"
                    }}
                  >
                    {t.heroPrimary}
                  </a>

                  <a
                    href="#/сообщения"
                    style={{
                      textDecoration: "none",
                      background: "rgba(255,255,255,0.82)",
                      color: "#241d29",
                      padding: "16px 24px",
                      borderRadius: "18px",
                      fontWeight: "800",
                      border: "1px solid rgba(0,0,0,0.05)"
                    }}
                  >
                    {t.heroSecondary}
                  </a>
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  minHeight: isMobile ? "420px" : "620px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: isMobile ? "82%" : "420px",
                    height: isMobile ? "360px" : "560px",
                    background: "rgba(255,255,255,0.48)",
                    borderRadius: "34px",
                    transform: "rotate(-8deg)",
                    boxShadow: "0 18px 40px rgba(26,16,34,0.05)"
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: isMobile ? "82%" : "420px",
                    height: isMobile ? "360px" : "560px",
                    background: "rgba(255,255,255,0.64)",
                    borderRadius: "34px",
                    transform: "rotate(7deg)",
                    boxShadow: "0 18px 40px rgba(26,16,34,0.07)"
                  }}
                />
                <div
                  style={{
                    width: isMobile ? "88%" : "430px",
                    background: "#fff",
                    borderRadius: "36px",
                    overflow: "hidden",
                    boxShadow: "0 30px 70px rgba(31,20,39,0.14)",
                    position: "relative"
                  }}
                >
                  <div style={{ position: "relative", height: isMobile ? "360px" : "520px" }}>
                    <PhotoSwitcher activePhoto={activePhoto} setActivePhoto={setActivePhoto} />
                    <img
                      src={profiles[0].photos[activePhoto]}
                      alt={profiles[0].name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.68), rgba(0,0,0,0.05) 48%, transparent)"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "22px",
                        right: "22px",
                        bottom: "22px",
                        color: "#fff"
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          padding: "8px 13px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.16)",
                          backdropFilter: "blur(8px)",
                          fontWeight: "700",
                          marginBottom: "12px"
                        }}
                      >
                        {profiles[0].city} • {profiles[0].distance} {t.miles}
                      </div>

                      <div
                        style={{
                          fontSize: isMobile ? "30px" : "42px",
                          fontWeight: "900",
                          lineHeight: "1",
                          marginBottom: "10px"
                        }}
                      >
                        {profiles[0].name}, {profiles[0].age}
                      </div>

                      <div
                        style={{
                          maxWidth: "330px",
                          lineHeight: "1.45",
                          color: "rgba(255,255,255,0.9)"
                        }}
                      >
                        {profiles[0].about}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: "18px 18px 20px" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <a
                        href="#/лента"
                        style={{
                          flex: 1,
                          textAlign: "center",
                          textDecoration: "none",
                          background: "linear-gradient(135deg, #ff4d8d, #ff7a59)",
                          color: "#fff",
                          padding: "14px",
                          borderRadius: "16px",
                          fontWeight: "800"
                        }}
                      >
                        {t.heroPrimary}
                      </a>
                      <a
                        href="#/профиль"
                        style={{
                          flex: 1,
                          textAlign: "center",
                          textDecoration: "none",
                          background: "#f4f2f6",
                          color: "#241d29",
                          padding: "14px",
                          borderRadius: "16px",
                          fontWeight: "800"
                        }}
                      >
                        {t.navProfile}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
                gap: "20px",
                marginTop: isMobile ? "26px" : "40px"
              }}
            >
              {[1, 2, 3].map((item) => {
                const title =
                  item === 1 ? t.step1Title : item === 2 ? t.step2Title : t.step3Title
                const text =
                  item === 1 ? t.step1Text : item === 2 ? t.step2Text : t.step3Text

                return (
                  <div
                    key={item}
                    style={{
                      background: "rgba(255,255,255,0.88)",
                      borderRadius: "26px",
                      padding: "26px",
                      boxShadow: "0 14px 34px rgba(26,16,34,0.05)"
                    }}
                  >
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "14px",
                        background: "linear-gradient(135deg, #ff4d8d, #ff7a59)",
                        color: "#fff",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px"
                      }}
                    >
                      {item}
                    </div>
                    <h3 style={{ marginTop: 0, fontSize: "24px" }}>{title}</h3>
                    <p style={{ marginBottom: 0, lineHeight: "1.55", color: "#5d5364" }}>
                      {text}
                    </p>
                  </div>
                )
              })}
            </section>
          </>
        )}

        {page === "/лента" && (
          <>
            <section style={{ marginBottom: "26px" }}>
              <h2
                style={{
                  fontSize: isMobile ? "36px" : "52px",
                  margin: "0 0 10px",
                  fontWeight: "900",
                  letterSpacing: "-1.5px"
                }}
              >
                {t.feedTitle}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#645a6a",
                  lineHeight: "1.55"
                }}
              >
                {t.feedText}
              </p>
            </section>

            <section
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
                gap: "16px",
                marginBottom: "26px"
              }}
            >
              <div style={filterCardStyle}>
                <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
                  {t.location}
                </div>
                <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} style={selectStyle}>
                  {locationOptions.map((location) => (
                    <option key={location} value={location}>
                      {location === "All" ? t.allLocations : location}
                    </option>
                  ))}
                </select>
              </div>

              <div style={filterCardStyle}>
                <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
                  {t.distance}
                </div>
                <select
                  value={selectedDistance}
                  onChange={(e) =>
                    setSelectedDistance(e.target.value === "Any" ? "Any" : Number(e.target.value))
                  }
                  style={selectStyle}
                >
                  {distanceOptions.map((distance) => (
                    <option key={distance} value={distance}>
                      {distance === "Any" ? t.allDistances : `${distance} ${t.miles}`}
                    </option>
                  ))}
                </select>
              </div>

              <div style={filterCardStyle}>
                <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
                  {t.gender}
                </div>
                <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)} style={selectStyle}>
                  <option value="Any">{t.allGenders}</option>
                  <option value="female">{t.female}</option>
                  <option value="male">{t.male}</option>
                </select>
              </div>

              <div style={filterCardStyle}>
                <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
                  {t.interest}
                </div>
                <select value={selectedInterest} onChange={(e) => setSelectedInterest(e.target.value)} style={selectStyle}>
                  {interestOptions.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest === "Any" ? t.allInterests : interest}
                    </option>
                  ))}
                </select>
              </div>

              <div style={filterCardStyle}>
                <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
                  {t.ageFrom}
                </div>
                <select value={ageFrom} onChange={(e) => setAgeFrom(Number(e.target.value))} style={selectStyle}>
                  {ageFromOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>

              <div style={filterCardStyle}>
                <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
                  {t.ageTo}
                </div>
                <select value={ageTo} onChange={(e) => setAgeTo(Number(e.target.value))} style={selectStyle}>
                  {ageToOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
            </section>

            {!currentProfile ? (
              <div
                style={{
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "28px",
                  padding: "40px 28px",
                  textAlign: "center",
                  boxShadow: "0 16px 40px rgba(26,16,34,0.06)"
                }}
              >
                <h3 style={{ marginTop: 0, fontSize: "32px" }}>{t.noProfiles}</h3>
                <p style={{ marginBottom: 0, color: "#63596a", fontSize: "18px" }}>
                  {t.noProfilesText}
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: isMobile ? "auto" : "760px",
                  paddingTop: "10px"
                }}
              >
                <div
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                  style={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {!isMobile && (
                    <div
                      style={{
                        position: "absolute",
                        width: "520px",
                        height: "720px",
                        borderRadius: "36px",
                        background: "rgba(255,255,255,0.5)",
                        transform: "scale(0.97)",
                        filter: "blur(2px)"
                      }}
                    />
                  )}

                  <div
                    onPointerDown={handlePointerDown}
                    style={{
                      width: isMobile ? "100%" : "520px",
                      maxWidth: "520px",
                      background: "#fff",
                      borderRadius: "36px",
                      overflow: "hidden",
                      boxShadow: "0 30px 70px rgba(31,20,39,0.14)",
                      transform: isMobile ? "none" : cardTransform,
                      transition: isDragging ? "none" : "transform 260ms ease",
                      cursor: isMobile ? "default" : isDragging ? "grabbing" : "grab",
                      userSelect: "none",
                      touchAction: "none",
                      position: "relative"
                    }}
                  >
                    <div style={{ position: "relative", height: isMobile ? "430px" : "560px" }}>
                      <PhotoSwitcher activePhoto={activePhoto} setActivePhoto={setActivePhoto} />
                      <img
                        src={currentProfile.photos[activePhoto]}
                        alt={currentProfile.name}
                        draggable="false"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block"
                        }}
                      />

                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.08) 46%, transparent)"
                        }}
                      />

                      {!isMobile && (
                        <>
                          <div
                            style={{
                              position: "absolute",
                              top: "24px",
                              left: "24px",
                              padding: "10px 16px",
                              borderRadius: "14px",
                              border: "3px solid #20c36a",
                              color: "#20c36a",
                              fontWeight: "900",
                              fontSize: "24px",
                              background: "rgba(255,255,255,0.94)",
                              opacity: likeOpacity,
                              transform: "rotate(-10deg)"
                            }}
                          >
                            LIKE
                          </div>

                          <div
                            style={{
                              position: "absolute",
                              top: "24px",
                              right: "24px",
                              padding: "10px 16px",
                              borderRadius: "14px",
                              border: "3px solid #ff5f7b",
                              color: "#ff5f7b",
                              fontWeight: "900",
                              fontSize: "24px",
                              background: "rgba(255,255,255,0.94)",
                              opacity: nopeOpacity,
                              transform: "rotate(10deg)"
                            }}
                          >
                            NEXT
                          </div>
                        </>
                      )}

                      <div
                        style={{
                          position: "absolute",
                          left: "24px",
                          right: "24px",
                          bottom: "24px",
                          color: "#fff"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            marginBottom: "14px"
                          }}
                        >
                          <span
                            style={{
                              background: "rgba(255,255,255,0.16)",
                              backdropFilter: "blur(8px)",
                              padding: "8px 14px",
                              borderRadius: "999px",
                              fontSize: "14px",
                              fontWeight: "700"
                            }}
                          >
                            {currentProfile.city} • {currentProfile.distance} {t.miles}
                          </span>

                          {currentProfile.verified && (
                            <span
                              style={{
                                background: "rgba(255,255,255,0.16)",
                                backdropFilter: "blur(8px)",
                                padding: "8px 14px",
                                borderRadius: "999px",
                                fontSize: "14px",
                                fontWeight: "700"
                              }}
                            >
                              ✓ {t.verified}
                            </span>
                          )}

                          {currentProfile.online && (
                            <span
                              style={{
                                background: "rgba(31,198,106,0.18)",
                                backdropFilter: "blur(8px)",
                                padding: "8px 14px",
                                borderRadius: "999px",
                                fontSize: "14px",
                                fontWeight: "700",
                                border: "1px solid rgba(31,198,106,0.32)"
                              }}
                            >
                              ● {t.online}
                            </span>
                          )}
                        </div>

                        <h3
                          style={{
                            margin: "0 0 10px",
                            fontSize: isMobile ? "34px" : "44px",
                            fontWeight: "900",
                            lineHeight: "1"
                          }}
                        >
                          {currentProfile.name}, {currentProfile.age}
                        </h3>

                        <p
                          style={{
                            margin: "0 0 12px",
                            fontSize: isMobile ? "16px" : "18px",
                            lineHeight: "1.5",
                            color: "rgba(255,255,255,0.92)",
                            maxWidth: "420px"
                          }}
                        >
                          {currentProfile.about}
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          {currentProfile.interests.map((interest) => (
                            <span
                              key={interest}
                              style={{
                                background: "rgba(255,255,255,0.14)",
                                border: "1px solid rgba(255,255,255,0.16)",
                                padding: "7px 12px",
                                borderRadius: "999px",
                                fontSize: "13px",
                                fontWeight: "700"
                              }}
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: "20px" }}>
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          flexDirection: isMobile ? "column" : "row"
                        }}
                      >
                        <button
                          onClick={handleLike}
                          style={{
                            flex: 1,
                            border: "none",
                            background: "linear-gradient(135deg, #ff4d8d, #ff7a59)",
                            color: "#fff",
                            padding: "16px",
                            borderRadius: "18px",
                            fontWeight: "900",
                            fontSize: "17px",
                            cursor: "pointer",
                            boxShadow: "0 16px 32px rgba(255,98,122,0.2)"
                          }}
                        >
                          {t.like}
                        </button>

                        <button
                          onClick={handleNext}
                          style={{
                            flex: 1,
                            border: "none",
                            background: "#f3f0f5",
                            color: "#231d28",
                            padding: "16px",
                            borderRadius: "18px",
                            fontWeight: "900",
                            fontSize: "17px",
                            cursor: "pointer"
                          }}
                        >
                          {t.next}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {page === "/симпатии" && (
          <>
            <section style={{ marginBottom: "22px" }}>
              <h2
                style={{
                  fontSize: isMobile ? "36px" : "52px",
                  margin: "0 0 10px",
                  fontWeight: "900",
                  letterSpacing: "-1.5px"
                }}
              >
                {t.likesTitle}
              </h2>
              <p
                style={{
                  margin: "0 0 18px",
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#645a6a",
                  lineHeight: "1.55"
                }}
              >
                {t.likesText}
              </p>

              {likedProfiles.length > 0 && (
                <button
                  onClick={() => setLikedIds([])}
                  style={{
                    border: "none",
                    background: "#1f1722",
                    color: "#fff",
                    padding: "12px 16px",
                    borderRadius: "14px",
                    fontWeight: "800",
                    cursor: "pointer"
                  }}
                >
                  {t.clearLikes}
                </button>
              )}
            </section>

            {likedProfiles.length === 0 ? (
              <div
                style={{
                  background: "rgba(255,255,255,0.88)",
                  borderRadius: "28px",
                  padding: "40px 28px",
                  textAlign: "center",
                  boxShadow: "0 16px 40px rgba(26,16,34,0.06)"
                }}
              >
                <h3 style={{ marginTop: 0, fontSize: "30px" }}>{t.noLikes}</h3>
                <p style={{ marginBottom: 0, color: "#63596a", fontSize: "18px" }}>
                  {t.noLikesText}
                </p>
              </div>
            ) : (
              <section
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
                  gap: "18px"
                }}
              >
                {likedProfiles.map((profile) => {
                  const [cardPhoto, setCardPhoto] = useState ? [0, () => {}] : [0, () => {}]
                  return (
                    <LikedCard key={profile.id} profile={profile} t={t} />
                  )
                })}
              </section>
            )}
          </>
        )}

        {page === "/сообщения" && (
          <>
            <section style={{ marginBottom: "22px" }}>
              <h2
                style={{
                  fontSize: isMobile ? "36px" : "52px",
                  margin: "0 0 10px",
                  fontWeight: "900",
                  letterSpacing: "-1.5px"
                }}
              >
                {t.messagesTitle}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#645a6a",
                  lineHeight: "1.55"
                }}
              >
                {t.messagesText}
              </p>
            </section>

            {matchedProfiles.length === 0 ? (
              <div
                style={{
                  background: "rgba(255,255,255,0.88)",
                  borderRadius: "28px",
                  padding: "40px 28px",
                  textAlign: "center",
                  boxShadow: "0 16px 40px rgba(26,16,34,0.06)"
                }}
              >
                <h3 style={{ marginTop: 0, fontSize: "30px" }}>{t.noMessages}</h3>
                <p style={{ marginBottom: 0, color: "#63596a", fontSize: "18px" }}>
                  {t.noMessagesText}
                </p>
              </div>
            ) : (
              <section
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "320px 1fr",
                  gap: "18px"
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "28px",
                    padding: "14px",
                    boxShadow: "0 20px 46px rgba(31,20,39,0.09)"
                  }}
                >
                  {matchedProfiles.map((profile) => (
                    <button
                      key={profile.id}
                      onClick={() => setSelectedChatId(profile.id)}
                      style={{
                        width: "100%",
                        border: "none",
                        background: selectedChatId === profile.id ? "#f6eef4" : "transparent",
                        padding: "12px",
                        borderRadius: "18px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        cursor: "pointer",
                        textAlign: "left",
                        marginBottom: "8px"
                      }}
                    >
                      <img
                        src={profile.photos[0]}
                        alt={profile.name}
                        style={{
                          width: "54px",
                          height: "54px",
                          borderRadius: "16px",
                          objectFit: "cover"
                        }}
                      />
                      <div>
                        <div style={{ fontWeight: "800", fontSize: "16px", color: "#1f1722" }}>
                          {profile.name}
                        </div>
                        <div style={{ fontSize: "13px", color: "#7b6f80" }}>
                          {profile.online ? "Онлайн" : profile.city}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div
                  style={{
                    background: "#fff",
                    borderRadius: "28px",
                    padding: "18px",
                    boxShadow: "0 20px 46px rgba(31,20,39,0.09)",
                    minHeight: "520px",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  {!selectedChatId ? (
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#746879",
                        fontSize: "18px",
                        textAlign: "center"
                      }}
                    >
                      {t.selectChat}
                    </div>
                  ) : (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          borderBottom: "1px solid #f0e9f0",
                          paddingBottom: "14px",
                          marginBottom: "14px"
                        }}
                      >
                        <img
                          src={profiles.find((p) => p.id === selectedChatId)?.photos[0]}
                          alt=""
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "16px",
                            objectFit: "cover"
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: "900", fontSize: "18px" }}>
                            {profiles.find((p) => p.id === selectedChatId)?.name}
                          </div>
                          <div style={{ color: "#7e7283", fontSize: "14px" }}>
                            {profiles.find((p) => p.id === selectedChatId)?.online ? "Онлайн" : "Не в сети"}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          paddingBottom: "14px"
                        }}
                      >
                        {currentChatMessages.map((msg, idx) => (
                          <div
                            key={idx}
                            style={{
                              maxWidth: "72%",
                              alignSelf: msg.from === "me" ? "flex-end" : "flex-start",
                              background: msg.from === "me"
                                ? "linear-gradient(135deg, #ff4d8d, #ff7a59)"
                                : "#f4f1f5",
                              color: msg.from === "me" ? "#fff" : "#241d29",
                              padding: "12px 14px",
                              borderRadius: "18px",
                              fontSize: "15px",
                              lineHeight: "1.45"
                            }}
                          >
                            {msg.text}
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          borderTop: "1px solid #f0e9f0",
                          paddingTop: "14px",
                          flexDirection: isMobile ? "column" : "row"
                        }}
                      >
                        <input
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          placeholder={t.writeMessage}
                          style={{
                            flex: 1,
                            padding: "14px 16px",
                            borderRadius: "16px",
                            border: "1px solid #ebe4eb",
                            fontSize: "15px",
                            outline: "none"
                          }}
                        />
                        <button
                          onClick={sendMessage}
                          style={{
                            border: "none",
                            background: "linear-gradient(135deg, #ff4d8d, #ff7a59)",
                            color: "#fff",
                            padding: "14px 18px",
                            borderRadius: "16px",
                            fontWeight: "900",
                            cursor: "pointer"
                          }}
                        >
                          {t.send}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </section>
            )}
          </>
        )}

        {page === "/профиль" && (
          <>
            <section style={{ marginBottom: "26px" }}>
              <h2
                style={{
                  fontSize: isMobile ? "36px" : "52px",
                  margin: "0 0 10px",
                  fontWeight: "900",
                  letterSpacing: "-1.5px"
                }}
              >
                {t.profileTitle}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#645a6a",
                  lineHeight: "1.55"
                }}
              >
                {t.profileText}
              </p>
            </section>

            <section
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "360px 1fr",
                gap: "20px"
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "30px",
                  overflow: "hidden",
                  boxShadow: "0 20px 46px rgba(31,20,39,0.09)"
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "#f5eff4" }}>
                  <img
                    src="https://i.pravatar.cc/900?img=67"
                    alt="Профиль 1"
                    style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
                  />
                  <img
                    src="https://i.pravatar.cc/900?img=68"
                    alt="Профиль 2"
                    style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "30px",
                  padding: isMobile ? "22px" : "28px",
                  boxShadow: "0 20px 46px rgba(31,20,39,0.07)"
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "16px"
                  }}
                >
                  <div style={filterCardStyle}>
                    <div style={{ fontSize: "13px", color: "#7a707f", marginBottom: "6px", fontWeight: "700" }}>
                      {t.profileName}
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "800" }}>Alex</div>
                  </div>

                  <div style={filterCardStyle}>
                    <div style={{ fontSize: "13px", color: "#7a707f", marginBottom: "6px", fontWeight: "700" }}>
                      {t.profileAge}
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "800" }}>30</div>
                  </div>

                  <div style={filterCardStyle}>
                    <div style={{ fontSize: "13px", color: "#7a707f", marginBottom: "6px", fontWeight: "700" }}>
                      {t.profileCity}
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "800" }}>Los Angeles</div>
                  </div>

                  <div style={filterCardStyle}>
                    <div style={{ fontSize: "13px", color: "#7a707f", marginBottom: "6px", fontWeight: "700" }}>
                      {t.verified}
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "800" }}>✓</div>
                  </div>
                </div>

                <div style={{ ...filterCardStyle, marginTop: "16px" }}>
                  <div style={{ fontSize: "13px", color: "#7a707f", marginBottom: "6px", fontWeight: "700" }}>
                    {t.profileAbout}
                  </div>
                  <div style={{ fontSize: "17px", lineHeight: "1.6", color: "#4f4555" }}>
                    Здесь позже будет настоящая страница профиля пользователя: фото, описание, интересы, анкета и настройки.
                  </div>
                </div>

                <div style={{ ...filterCardStyle, marginTop: "16px" }}>
                  <div style={{ fontSize: "13px", color: "#7a707f", marginBottom: "10px", fontWeight: "700" }}>
                    {t.profileInterests}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {["Музыка", "Путешествия", "Бизнес", "Стиль"].map((interest) => (
                      <span
                        key={interest}
                        style={{
                          background: "#f5f2f6",
                          padding: "8px 12px",
                          borderRadius: "999px",
                          fontSize: "13px",
                          fontWeight: "700"
                        }}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  style={{
                    marginTop: "18px",
                    border: "none",
                    background: "linear-gradient(135deg, #ff4d8d, #ff7a59)",
                    color: "#fff",
                    padding: "16px 22px",
                    borderRadius: "18px",
                    fontWeight: "900",
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow: "0 16px 32px rgba(255,98,122,0.2)"
                  }}
                >
                  {t.editProfile}
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      {showMutualModal && mutualProfile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20,16,26,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 50
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              background: "#fff",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 30px 70px rgba(31,20,39,0.22)"
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "#f4edf3" }}>
              <img
                src={mutualProfile.photos[0]}
                alt={mutualProfile.name}
                style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
              />
              <img
                src={mutualProfile.photos[1]}
                alt={mutualProfile.name}
                style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
              />
            </div>

            <div style={{ padding: "24px" }}>
              <h3 style={{ margin: "0 0 10px", fontSize: "32px", fontWeight: "900" }}>
                {t.mutualTitle}
              </h3>
              <p style={{ margin: "0 0 20px", color: "#62586a", lineHeight: "1.55", fontSize: "17px" }}>
                {mutualProfile.name} тоже проявил(а) к тебе интерес. {t.mutualText}
              </p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href="#/сообщения"
                  onClick={() => setShowMutualModal(false)}
                  style={{
                    textDecoration: "none",
                    background: "linear-gradient(135deg, #ff4d8d, #ff7a59)",
                    color: "#fff",
                    padding: "14px 18px",
                    borderRadius: "16px",
                    fontWeight: "900"
                  }}
                >
                  {t.openMessages}
                </a>

                <button
                  onClick={() => setShowMutualModal(false)}
                  style={{
                    border: "none",
                    background: "#f3eef4",
                    color: "#211a24",
                    padding: "14px 18px",
                    borderRadius: "16px",
                    fontWeight: "900",
                    cursor: "pointer"
                  }}
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function LikedCard({ profile, t }) {
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "28px",
        overflow: "hidden",
        boxShadow: "0 20px 46px rgba(31,20,39,0.09)"
      }}
    >
      <div style={{ position: "relative", height: "320px" }}>
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            display: "flex",
            gap: "8px",
            zIndex: 3
          }}
        >
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setPhotoIndex(i)}
              style={{
                border: "none",
                background: photoIndex === i ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)",
                color: "#1f1722",
                padding: "8px 12px",
                borderRadius: "999px",
                fontWeight: "800",
                cursor: "pointer",
                fontSize: "13px"
              }}
            >
              {i === 0 ? t.photo1 : t.photo2}
            </button>
          ))}
        </div>

        <img
          src={profile.photos[photoIndex]}
          alt={profile.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.62), rgba(0,0,0,0.04) 48%, transparent)"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "18px",
            right: "18px",
            bottom: "18px",
            color: "#fff"
          }}
        >
          <div style={{ fontSize: "30px", fontWeight: "900", lineHeight: "1" }}>
            {profile.name}, {profile.age}
          </div>
          <div style={{ marginTop: "8px", fontWeight: "700", color: "rgba(255,255,255,0.9)" }}>
            {profile.city} • {profile.distance} {t.miles}
          </div>
        </div>
      </div>

      <div style={{ padding: "18px" }}>
        <p style={{ marginTop: 0, color: "#5f5466", lineHeight: "1.5" }}>
          {profile.about}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {profile.interests.map((interest) => (
            <span
              key={interest}
              style={{
                background: "#f5f2f6",
                padding: "7px 12px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: "700"
              }}
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
