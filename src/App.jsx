import { useEffect, useMemo, useRef, useState } from "react"

const TELEGRAM_LINK = "https://t.me/Date020888_bot"

const translations = {
  ru: {
    brand: "Telegram Dating",
    start: "Начать",
    heroTitle: "Найди новые знакомства в Telegram",
    heroText:
      "Удобная площадка для знакомств, общения и новых встреч. Переходи в Telegram и начинай общение уже сейчас.",
    heroButton: "Перейти в Telegram",
    step1Title: "1. Быстрый старт",
    step1Text: "Нажимаешь кнопку и сразу переходишь в Telegram.",
    step2Title: "2. Простая анкета",
    step2Text: "Заполняешь данные о себе без сложной регистрации.",
    step3Title: "3. Новые знакомства",
    step3Text: "Находишь интересных людей и начинаешь общение.",
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
    emptyText: "Попробуй изменить локацию или выбрать большую дальность.",
    cityLabel: "Город",
    miles: "миль",
    age: "лет",
    language: "Язык"
  },
  en: {
    brand: "Telegram Dating",
    start: "Start",
    heroTitle: "Find new connections on Telegram",
    heroText:
      "A simple place for dating, chatting, and meeting new people. Open Telegram and start connecting right away.",
    heroButton: "Open Telegram",
    step1Title: "1. Fast start",
    step1Text: "Tap the button and go straight to Telegram.",
    step2Title: "2. Easy profile",
    step2Text: "Fill out your details without a complicated sign-up.",
    step3Title: "3. New matches",
    step3Text: "Meet interesting people and start chatting.",
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
    emptyText: "Try changing the location or selecting a larger distance.",
    cityLabel: "City",
    miles: "miles",
    age: "years old",
    language: "Language"
  }
}

const profiles = [
  {
    id: 1,
    name: "Anna",
    age: 26,
    city: "Los Angeles",
    distance: 4,
    aboutRu: "Люблю красивые места, музыку и лёгкое общение.",
    aboutEn: "I love beautiful places, music, and easygoing conversation.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Sofia",
    age: 24,
    city: "Santa Monica",
    distance: 9,
    aboutRu: "Обожаю прогулки у океана и уютные вечера.",
    aboutEn: "I love ocean walks and cozy evenings.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 3,
    name: "Emma",
    age: 27,
    city: "Burbank",
    distance: 16,
    aboutRu: "Ценю искренность, юмор и интересные знакомства.",
    aboutEn: "I value sincerity, humor, and meaningful connections.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Luna",
    age: 25,
    city: "West Hollywood",
    distance: 7,
    aboutRu: "Люблю стиль, новые впечатления и спонтанность.",
    aboutEn: "I love style, new experiences, and spontaneity.",
    photo: "https://randomuser.me/api/portraits/women/33.jpg"
  }
]

const locationOptions = ["All", "Los Angeles", "Santa Monica", "Burbank", "West Hollywood"]
const distanceOptions = ["Any", 5, 10, 25, 50]

export default function App() {
  const [language, setLanguage] = useState("ru")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectedDistance, setSelectedDistance] = useState("Any")
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [animatingOut, setAnimatingOut] = useState(null)

  const startXRef = useRef(0)
  const t = translations[language]

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const locationMatch =
        selectedLocation === "All" || profile.city === selectedLocation

      const distanceMatch =
        selectedDistance === "Any" || profile.distance <= selectedDistance

      return locationMatch && distanceMatch
    })
  }, [selectedLocation, selectedDistance])

  useEffect(() => {
    setIndex(0)
    setDragX(0)
    setIsDragging(false)
    setAnimatingOut(null)
  }, [selectedLocation, selectedDistance])

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
        background: "linear-gradient(180deg, #f8eef3 0%, #f7f2f5 100%)",
        minHeight: "100vh",
        color: "#222"
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          position: "sticky",
          top: 0,
          zIndex: 10
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#e91e63",
            fontSize: "30px",
            fontWeight: "800",
            letterSpacing: "-0.5px"
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
            padding: "12px 24px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "700",
            boxShadow: "0 10px 24px rgba(233,30,99,0.25)"
          }}
        >
          {t.start}
        </a>
      </header>

      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 20px 90px" }}>
        <section style={{ textAlign: "center", padding: "70px 20px 30px" }}>
          <h2
            style={{
              fontSize: "64px",
              marginBottom: "18px",
              fontWeight: "800",
              lineHeight: "1.05",
              letterSpacing: "-1.5px"
            }}
          >
            {t.heroTitle}
          </h2>

          <p
            style={{
              fontSize: "21px",
              color: "#5b5560",
              maxWidth: "820px",
              margin: "0 auto 28px",
              lineHeight: "1.45"
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
              padding: "16px 34px",
              borderRadius: "16px",
              textDecoration: "none",
              fontSize: "18px",
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
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "22px",
            marginTop: "34px"
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
            marginTop: "42px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "16px",
              borderRadius: "18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              minWidth: "220px"
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
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              minWidth: "220px"
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
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              minWidth: "220px"
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
        </section>

        <section style={{ marginTop: "78px", textAlign: "center" }}>
          <h3
            style={{
              fontSize: "48px",
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
              fontSize: "18px",
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
                minHeight: "760px",
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

                <div
                  onPointerDown={handlePointerDown}
                  style={{
                    width: "520px",
                    background: "#fff",
                    borderRadius: "34px",
                    overflow: "hidden",
                    boxShadow: "0 24px 70px rgba(0,0,0,0.12)",
                    transform: cardTransform,
                    transition: isDragging
                      ? "none"
                      : "transform 260ms ease, box-shadow 260ms ease",
                    cursor: isDragging ? "grabbing" : "grab",
                    userSelect: "none",
                    touchAction: "none",
                    position: "relative"
                  }}
                >
                  <div style={{ position: "relative", height: "560px", overflow: "hidden" }}>
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
                          "linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0) 70%)"
                      }}
                    />

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

                    <div
                      style={{
                        position: "absolute",
                        left: "28px",
                        right: "28px",
                        bottom: "26px",
                        color: "#fff",
                        textAlign: "left"
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          background: "rgba(255,255,255,0.16)",
                          backdropFilter: "blur(8px)",
                          padding: "8px 14px",
                          borderRadius: "999px",
                          fontSize: "14px",
                          fontWeight: "700",
                          marginBottom: "14px"
                        }}
                      >
                        {currentProfile.city} • {currentProfile.distance} {t.miles}
                      </div>

                      <h4
                        style={{
                          margin: "0 0 10px",
                          fontSize: "42px",
                          lineHeight: "1",
                          fontWeight: "800",
                          letterSpacing: "-1px"
                        }}
                      >
                        {currentProfile.name}, {currentProfile.age}
                      </h4>

                      <p
                        style={{
                          margin: 0,
                          fontSize: "18px",
                          lineHeight: "1.45",
                          color: "rgba(255,255,255,0.92)",
                          maxWidth: "420px"
                        }}
                      >
                        {language === "ru" ? currentProfile.aboutRu : currentProfile.aboutEn}
                      </p>
                    </div>
                  </div>

                  <div style={{ padding: "22px 22px 24px" }}>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
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
