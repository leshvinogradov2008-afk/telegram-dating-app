import { useEffect, useMemo, useRef, useState } from "react"

const TELEGRAM_LINK = "https://t.me/Date020888_bot"

const translations = {
  ru: {
    brand: "Telegram Dating",
    start: "Начать",
    heroTitle: "Найди новые знакомства в Telegram",
    heroText:
      "Удобная площадка для знакомств, общения и новых встреч. Смотри анкеты, используй фильтры и переходи в Telegram для общения.",
    heroButton: "Перейти в Telegram",
    step1Title: "1. Быстрый старт",
    step1Text: "Открываешь сайт и сразу смотришь анкеты.",
    step2Title: "2. Удобные фильтры",
    step2Text: "Выбираешь локацию, возраст, интересы и другие параметры.",
    step3Title: "3. Новые знакомства",
    step3Text: "Находишь интересных людей и переходишь в Telegram.",
    sectionTitle: "Популярные анкеты",
    sectionText: "Потяни карточку мышкой влево или вправо. Или используй кнопки ниже.",
    like: "❤️ Нравится",
    next: "Дальше",
    openTelegram: "Open Telegram",
    location: "Локация",
    distance: "Дальность",
    allLocations: "Все локации",
    allDistances: "Любая",
    emptyTitle: "Анкеты не найдены",
    emptyText: "Попробуй изменить фильтры и выбрать более широкий диапазон.",
    miles: "миль",
    language: "Язык",
    gender: "Пол",
    allGenders: "Любой",
    female: "Девушки",
    male: "Мужчины",
    interest: "Интересы",
    allInterests: "Любые",
    ageFrom: "Возраст от",
    ageTo: "Возраст до",
    cityDistance: "Локация",
    verified: "Проверено",
    online: "Онлайн"
  },
  en: {
    brand: "Telegram Dating",
    start: "Start",
    heroTitle: "Find new connections on Telegram",
    heroText:
      "A simple place for dating, chatting, and meeting new people. Browse profiles, use filters, and move to Telegram to connect.",
    heroButton: "Open Telegram",
    step1Title: "1. Fast start",
    step1Text: "Open the site and browse profiles right away.",
    step2Title: "2. Smart filters",
    step2Text: "Choose location, age, interests, and other preferences.",
    step3Title: "3. New matches",
    step3Text: "Meet interesting people and continue in Telegram.",
    sectionTitle: "Popular profiles",
    sectionText: "Drag the card left or right with your mouse, or use the buttons below.",
    like: "❤️ Like",
    next: "Next",
    openTelegram: "Open Telegram",
    location: "Location",
    distance: "Distance",
    allLocations: "All locations",
    allDistances: "Any",
    emptyTitle: "No profiles found",
    emptyText: "Try changing the filters and selecting a wider range.",
    miles: "miles",
    language: "Language",
    gender: "Gender",
    allGenders: "Any",
    female: "Women",
    male: "Men",
    interest: "Interests",
    allInterests: "Any",
    ageFrom: "Age from",
    ageTo: "Age to",
    cityDistance: "Location",
    verified: "Verified",
    online: "Online"
  }
}

const profiles = [
  {
    id: 1,
    name: "Anna",
    age: 26,
    city: "Los Angeles",
    distance: 4,
    gender: "female",
    interests: ["Music", "Travel", "Coffee"],
    aboutRu: "Люблю красивые места, музыку и лёгкое общение.",
    aboutEn: "I love beautiful places, music, and easygoing conversation.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    verified: true,
    online: true
  },
  {
    id: 2,
    name: "Sofia",
    age: 24,
    city: "Santa Monica",
    distance: 9,
    gender: "female",
    interests: ["Ocean", "Fitness", "Cinema"],
    aboutRu: "Обожаю прогулки у океана и уютные вечера.",
    aboutEn: "I love ocean walks and cozy evenings.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    verified: true,
    online: false
  },
  {
    id: 3,
    name: "Emma",
    age: 27,
    city: "Burbank",
    distance: 16,
    gender: "female",
    interests: ["Art", "Humor", "Books"],
    aboutRu: "Ценю искренность, юмор и интересные знакомства.",
    aboutEn: "I value sincerity, humor, and meaningful connections.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    verified: false,
    online: true
  },
  {
    id: 4,
    name: "Luna",
    age: 25,
    city: "West Hollywood",
    distance: 7,
    gender: "female",
    interests: ["Style", "Night Walks", "Food"],
    aboutRu: "Люблю стиль, новые впечатления и спонтанность.",
    aboutEn: "I love style, new experiences, and spontaneity.",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    verified: true,
    online: true
  },
  {
    id: 5,
    name: "Daniel",
    age: 29,
    city: "Los Angeles",
    distance: 6,
    gender: "male",
    interests: ["Gym", "Cars", "Travel"],
    aboutRu: "Люблю активную жизнь, спорт и хорошие разговоры.",
    aboutEn: "I enjoy an active lifestyle, fitness, and good conversations.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
    online: false
  },
  {
    id: 6,
    name: "Chris",
    age: 31,
    city: "Santa Monica",
    distance: 12,
    gender: "male",
    interests: ["Ocean", "Music", "Business"],
    aboutRu: "Люблю океан, музыку и людей с хорошей энергией.",
    aboutEn: "I love the ocean, music, and people with good energy.",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    verified: false,
    online: true
  }
]

const locationOptions = ["All", "Los Angeles", "Santa Monica", "Burbank", "West Hollywood"]
const distanceOptions = ["Any", 5, 10, 25, 50]
const interestOptions = ["Any", "Music", "Travel", "Coffee", "Ocean", "Fitness", "Cinema", "Art", "Humor", "Books", "Style", "Night Walks", "Food", "Gym", "Cars", "Business"]
const ageFromOptions = [18, 21, 25, 30, 35]
const ageToOptions = [25, 30, 35, 40, 50]

const isMobileWidth = () =>
  typeof window !== "undefined" ? window.innerWidth <= 768 : false

export default function App() {
  const [language, setLanguage] = useState("ru")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectedDistance, setSelectedDistance] = useState("Any")
  const [selectedGender, setSelectedGender] = useState("Any")
  const [selectedInterest, setSelectedInterest] = useState("Any")
  const [ageFrom, setAgeFrom] = useState(18)
  const [ageTo, setAgeTo] = useState(50)
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [animatingOut, setAnimatingOut] = useState(null)
  const [isMobile, setIsMobile] = useState(isMobileWidth())

  const startXRef = useRef(0)
  const t = translations[language]

  useEffect(() => {
    const handleResize = () => setIsMobile(isMobileWidth())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
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
  }, [selectedLocation, selectedDistance, selectedGender, selectedInterest, ageFrom, ageTo])

  const currentProfile =
    filteredProfiles.length > 0
      ? filteredProfiles[index % filteredProfiles.length]
      : null

  const rotation = dragX / 18
  const likeOpacity = dragX > 0 ? Math.min(dragX / 140, 1) : 0
  const nopeOpacity = dragX < 0 ? Math.min(Math.abs(dragX) / 140, 1) : 0

  const cardTransform = useMemo(() => {
    if (animatingOut === "right") return "translateX(900px) rotate(24deg)"
    if (animatingOut === "left") return "translateX(-900px) rotate(-24deg)"
    return `translateX(${dragX}px) rotate(${rotation}deg)`
  }, [animatingOut, dragX, rotation])

  const nextProfile = () => {
    if (filteredProfiles.length === 0) return
    setIndex((prev) => (prev + 1) % filteredProfiles.length)
  }

  const animateOutAndNext = (direction) => {
    if (!currentProfile) return
    setAnimatingOut(direction)

    setTimeout(() => {
      nextProfile()
      setAnimatingOut(null)
      setDragX(0)
      setIsDragging(false)
    }, 260)
  }

  const handlePointerDown = (e) => {
    if (animatingOut || !currentProfile) return
    setIsDragging(true)
    startXRef.current = e.clientX
  }

  const handlePointerMove = (e) => {
    if (!isDragging || animatingOut || !currentProfile) return
    const delta = e.clientX - startXRef.current
    setDragX(delta)
  }

  const handlePointerUp = () => {
    if (!isDragging || animatingOut || !currentProfile) return

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

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(180deg, #f9eef4 0%, #f7f3f6 50%, #f3f0f4 100%)",
        minHeight: "100vh",
        color: "#222"
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "16px 18px" : "20px 40px",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 2px 18px rgba(0,0,0,0.04)",
          position: "sticky",
          top: 0,
          zIndex: 10
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#e91e63",
            fontSize: isMobile ? "24px" : "30px",
            fontWeight: "800",
            letterSpacing: "-0.6px"
          }}
        >
          {t.brand}
        </h1>

        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "linear-gradient(135deg, #ff2e78, #e91e63)",
            color: "#fff",
            padding: isMobile ? "10px 14px" : "12px 24px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: isMobile ? "14px" : "16px",
            boxShadow: "0 10px 24px rgba(233,30,99,0.25)"
          }}
        >
          {t.start}
        </a>
      </header>

      <main
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "20px 14px 60px" : "40px 20px 90px"
        }}
      >
        <section style={{ textAlign: "center", padding: isMobile ? "34px 10px 20px" : "70px 20px 30px" }}>
          <h2
            style={{
              fontSize: isMobile ? "38px" : "64px",
              marginBottom: "18px",
              fontWeight: "800",
              lineHeight: "1.05",
              letterSpacing: isMobile ? "-0.8px" : "-1.5px"
            }}
          >
            {t.heroTitle}
          </h2>

          <p
            style={{
              fontSize: isMobile ? "17px" : "21px",
              color: "#5b5560",
              maxWidth: "820px",
              margin: "0 auto 28px",
              lineHeight: "1.5"
            }}
          >
            {t.heroText}
          </p>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #ff2e78, #e91e63)",
              color: "#fff",
              padding: isMobile ? "14px 24px" : "16px 34px",
              borderRadius: "16px",
              textDecoration: "none",
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "700",
              boxShadow: "0 14px 30px rgba(233,30,99,0.22)"
            }}
          >
            {t.heroButton}
          </a>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: "22px",
            marginTop: "30px"
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.92)",
              padding: "28px",
              borderRadius: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>{t.step1Title}</h3>
            <p style={{ marginBottom: 0, lineHeight: "1.5", color: "#555" }}>
              {t.step1Text}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.92)",
              padding: "28px",
              borderRadius: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>{t.step2Title}</h3>
            <p style={{ marginBottom: 0, lineHeight: "1.5", color: "#555" }}>
              {t.step2Text}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.92)",
              padding: "28px",
              borderRadius: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>{t.step3Title}</h3>
            <p style={{ marginBottom: 0, lineHeight: "1.5", color: "#555" }}>
              {t.step3Text}
            </p>
          </div>
        </section>

        <section
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: "16px"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "16px",
              borderRadius: "18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
              {t.language}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => setLanguage("ru")}
                style={{
                  flex: 1,
                  background: language === "ru" ? "#e91e63" : "#f3f3f7",
                  color: language === "ru" ? "#fff" : "#222",
                  border: "none",
                  padding: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "700"
                }}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage("en")}
                style={{
                  flex: 1,
                  background: language === "en" ? "#e91e63" : "#f3f3f7",
                  color: language === "en" ? "#fff" : "#222",
                  border: "none",
                  padding: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "700"
                }}
              >
                EN
              </button>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "16px",
              borderRadius: "18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
              {t.location}
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #eee",
                fontSize: "15px"
              }}
            >
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location === "All" ? t.allLocations : location}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "16px",
              borderRadius: "18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
              {t.distance}
            </div>
            <select
              value={selectedDistance}
              onChange={(e) =>
                setSelectedDistance(e.target.value === "Any" ? "Any" : Number(e.target.value))
              }
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #eee",
                fontSize: "15px"
              }}
            >
              {distanceOptions.map((distance) => (
                <option key={distance} value={distance}>
                  {distance === "Any" ? t.allDistances : `${distance} ${t.miles}`}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "16px",
              borderRadius: "18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
              {t.gender}
            </div>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #eee",
                fontSize: "15px"
              }}
            >
              <option value="Any">{t.allGenders}</option>
              <option value="female">{t.female}</option>
              <option value="male">{t.male}</option>
            </select>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "16px",
              borderRadius: "18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
              {t.interest}
            </div>
            <select
              value={selectedInterest}
              onChange={(e) => setSelectedInterest(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #eee",
                fontSize: "15px"
              }}
            >
              {interestOptions.map((interest) => (
                <option key={interest} value={interest}>
                  {interest === "Any" ? t.allInterests : interest}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "16px",
              borderRadius: "18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px"
            }}
          >
            <div>
              <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
                {t.ageFrom}
              </div>
              <select
                value={ageFrom}
                onChange={(e) => setAgeFrom(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid #eee",
                  fontSize: "15px"
                }}
              >
                {ageFromOptions.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px", fontWeight: "700" }}>
                {t.ageTo}
              </div>
              <select
                value={ageTo}
                onChange={(e) => setAgeTo(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid #eee",
                  fontSize: "15px"
                }}
              >
                {ageToOptions.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section style={{ marginTop: "78px", textAlign: "center" }}>
          <h3
            style={{
              fontSize: isMobile ? "34px" : "48px",
              marginBottom: "14px",
              fontWeight: "800",
              letterSpacing: "-1px"
            }}
          >
            {t.sectionTitle}
          </h3>

          <p
            style={{
              margin: "0 auto 34px",
              maxWidth: "680px",
              color: "#6a6470",
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: "1.5"
            }}
          >
            {t.sectionText}
          </p>

          {!currentProfile ? (
            <div
              style={{
                maxWidth: "560px",
                margin: "0 auto",
                background: "#fff",
                borderRadius: "28px",
                padding: "40px 28px",
                boxShadow: "0 18px 45px rgba(0,0,0,0.06)"
              }}
            >
              <h4 style={{ fontSize: "30px", marginTop: 0, marginBottom: "10px" }}>
                {t.emptyTitle}
              </h4>
              <p style={{ color: "#666", marginBottom: 0, fontSize: "18px", lineHeight: "1.5" }}>
                {t.emptyText}
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: isMobile ? "auto" : "760px",
                padding: "20px 0"
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
                      borderRadius: "34px",
                      background: "rgba(255,255,255,0.55)",
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
                    borderRadius: "34px",
                    overflow: "hidden",
                    boxShadow: "0 24px 70px rgba(0,0,0,0.12)",
                    transform: isMobile ? "none" : cardTransform,
                    transition: isDragging
                      ? "none"
                      : "transform 260ms ease, box-shadow 260ms ease",
                    cursor: isDragging ? "grabbing" : "grab",
                    userSelect: "none",
                    touchAction: "none",
                    position: "relative"
                  }}
                >
                  <div style={{ position: "relative", height: isMobile ? "420px" : "560px", overflow: "hidden" }}>
                    <img
                      src={currentProfile.photo}
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
                          "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.10) 45%, rgba(0,0,0,0) 72%)"
                      }}
                    />

                    {!isMobile && (
                      <>
                        <div
                          style={{
                            position: "absolute",
                            top: "24px",
                            left: "24px",
                            padding: "10px 18px",
                            borderRadius: "14px",
                            border: "3px solid #20c36a",
                            color: "#20c36a",
                            fontWeight: "800",
                            fontSize: "24px",
                            background: "rgba(255,255,255,0.92)",
                            opacity: likeOpacity,
                            transform: "rotate(-12deg)",
                            transition: "opacity 120ms ease"
                          }}
                        >
                          LIKE
                        </div>

                        <div
                          style={{
                            position: "absolute",
                            top: "24px",
                            right: "24px",
                            padding: "10px 18px",
                            borderRadius: "14px",
                            border: "3px solid #ff4d6d",
                            color: "#ff4d6d",
                            fontWeight: "800",
                            fontSize: "24px",
                            background: "rgba(255,255,255,0.92)",
                            opacity: nopeOpacity,
                            transform: "rotate(12deg)",
                            transition: "opacity 120ms ease"
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
                        color: "#fff",
                        textAlign: "left"
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
                        <div
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
                        </div>

                        {currentProfile.verified && (
                          <div
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
                          </div>
                        )}

                        {currentProfile.online && (
                          <div
                            style={{
                              background: "rgba(32,195,106,0.18)",
                              border: "1px solid rgba(32,195,106,0.35)",
                              backdropFilter: "blur(8px)",
                              padding: "8px 14px",
                              borderRadius: "999px",
                              fontSize: "14px",
                              fontWeight: "700"
                            }}
                          >
                            ● {t.online}
                          </div>
                        )}
                      </div>

                      <h4
                        style={{
                          margin: "0 0 10px",
                          fontSize: isMobile ? "34px" : "42px",
                          lineHeight: "1",
                          fontWeight: "800",
                          letterSpacing: "-1px"
                        }}
                      >
                        {currentProfile.name}, {currentProfile.age}
                      </h4>

                      <p
                        style={{
                          margin: "0 0 12px",
                          fontSize: isMobile ? "16px" : "18px",
                          lineHeight: "1.45",
                          color: "rgba(255,255,255,0.92)",
                          maxWidth: "420px"
                        }}
                      >
                        {language === "ru" ? currentProfile.aboutRu : currentProfile.aboutEn}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px"
                        }}
                      >
                        {currentProfile.interests.map((interest) => (
                          <span
                            key={interest}
                            style={{
                              background: "rgba(255,255,255,0.14)",
                              border: "1px solid rgba(255,255,255,0.15)",
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

                  <div style={{ padding: "22px 22px 24px" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        marginBottom: "12px",
                        flexDirection: isMobile ? "column" : "row"
                      }}
                    >
                      <button
                        onClick={handleLike}
                        style={{
                          flex: 1,
                          background: "linear-gradient(135deg, #ff2e78, #e91e63)",
                          color: "#fff",
                          border: "none",
                          padding: "16px",
                          borderRadius: "16px",
                          fontSize: "17px",
                          fontWeight: "800",
                          cursor: "pointer",
                          boxShadow: "0 12px 26px rgba(233,30,99,0.20)"
                        }}
                      >
                        {t.like}
                      </button>

                      <button
                        onClick={handleNext}
                        style={{
                          flex: 1,
                          background: "#f4f4f7",
                          color: "#222",
                          border: "none",
                          padding: "16px",
                          borderRadius: "16px",
                          fontSize: "17px",
                          fontWeight: "800",
                          cursor: "pointer"
                        }}
                      >
                        {t.next}
                      </button>
                    </div>

                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                        textAlign: "center",
                        background: "#111",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "16px",
                        borderRadius: "16px",
                        fontSize: "17px",
                        fontWeight: "800"
                      }}
                    >
                      {t.openTelegram}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
