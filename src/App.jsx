import { useMemo, useRef, useState } from "react"

const TELEGRAM_LINK = "https://t.me/Date020888_bot"

const profiles = [
  {
    id: 1,
    name: "Anna",
    age: 26,
    city: "Los Angeles",
    about: "Люблю красивые места, музыку и лёгкое общение.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Sofia",
    age: 24,
    city: "Santa Monica",
    about: "Обожаю прогулки у океана и уютные вечера.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 3,
    name: "Emma",
    age: 27,
    city: "Burbank",
    about: "Ценю искренность, юмор и интересные знакомства.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Luna",
    age: 25,
    city: "West Hollywood",
    about: "Люблю стиль, новые впечатления и спонтанность.",
    photo: "https://randomuser.me/api/portraits/women/33.jpg"
  }
]

export default function App() {
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [animatingOut, setAnimatingOut] = useState(null)

  const startXRef = useRef(0)

  const currentProfile = profiles[index]

  const rotation = dragX / 18
  const likeOpacity = dragX > 0 ? Math.min(dragX / 140, 1) : 0
  const nopeOpacity = dragX < 0 ? Math.min(Math.abs(dragX) / 140, 1) : 0

  const cardTransform = useMemo(() => {
    if (animatingOut === "right") {
      return "translateX(900px) rotate(24deg)"
    }
    if (animatingOut === "left") {
      return "translateX(-900px) rotate(-24deg)"
    }
    return `translateX(${dragX}px) rotate(${rotation}deg)`
  }, [animatingOut, dragX, rotation])

  const nextProfile = () => {
    setIndex((prev) => (prev + 1) % profiles.length)
  }

  const animateOutAndNext = (direction) => {
    setAnimatingOut(direction)

    setTimeout(() => {
      nextProfile()
      setAnimatingOut(null)
      setDragX(0)
      setIsDragging(false)
    }, 260)
  }

  const handlePointerDown = (e) => {
    if (animatingOut) return
    setIsDragging(true)
    startXRef.current = e.clientX
  }

  const handlePointerMove = (e) => {
    if (!isDragging || animatingOut) return
    const delta = e.clientX - startXRef.current
    setDragX(delta)
  }

  const handlePointerUp = () => {
    if (!isDragging || animatingOut) return

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
    if (animatingOut) return
    animateOutAndNext("right")
  }

  const handleNext = () => {
    if (animatingOut) return
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
          Telegram Dating
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
          Начать
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
            Найди новые знакомства в Telegram
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
            Удобная площадка для знакомств, общения и новых встреч.
            Переходи в Telegram и начинай общение уже сейчас.
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
            Перейти в Telegram
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
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>1. Быстрый старт</h3>
            <p style={{ marginBottom: 0, lineHeight: "1.5", color: "#555" }}>
              Нажимаешь кнопку и сразу переходишь в Telegram.
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
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>2. Простая анкета</h3>
            <p style={{ marginBottom: 0, lineHeight: "1.5", color: "#555" }}>
              Заполняешь данные о себе без сложной регистрации.
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
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>3. Новые знакомства</h3>
            <p style={{ marginBottom: 0, lineHeight: "1.5", color: "#555" }}>
              Находишь интересных людей и начинаешь общение.
            </p>
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
            Популярные анкеты
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
            Потяни карточку мышкой влево или вправо. Или используй кнопки ниже.
          </p>

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
                      {currentProfile.city}
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
                      {currentProfile.about}
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
                      ❤️ Like
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
                      Next
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
                    Open Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
