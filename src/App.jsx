import { useState } from "react"

const profiles = [
  { id: 1, name: "Anna", age: 26, city: "Los Angeles" },
  { id: 2, name: "Sofia", age: 24, city: "Santa Monica" },
  { id: 3, name: "Emma", age: 27, city: "Burbank" },
  { id: 4, name: "Luna", age: 25, city: "West Hollywood" }
]

export default function App() {
  const [index, setIndex] = useState(0)

  const nextProfile = () => {
    setIndex((prev) => (prev + 1) % profiles.length)
  }

  const currentProfile = profiles[index]

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f7eef2",
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
          background: "#fff"
        }}
      >
        <h1 style={{ margin: 0, color: "#e91e63", fontSize: "28px", fontWeight: "700" }}>
          Telegram Dating
        </h1>

        <a
          href="https://t.me/Date020888_bot"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#e91e63",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "700"
          }}
        >
          Начать
        </a>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px 80px" }}>
        <section style={{ textAlign: "center", padding: "80px 20px 40px" }}>
          <h2
            style={{
              fontSize: "64px",
              marginBottom: "20px",
              fontWeight: "800",
              lineHeight: "1.1"
            }}
          >
            Найди новые знакомства в Telegram
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#555",
              maxWidth: "760px",
              margin: "0 auto 30px",
              lineHeight: "1.4"
            }}
          >
            Удобная площадка для знакомств, общения и новых встреч. Переходи в
            Telegram и начинай общение уже сейчас.
          </p>

          <a
            href="https://t.me/Date020888_bot"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "#e91e63",
              color: "#fff",
              padding: "16px 34px",
              borderRadius: "16px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "700"
            }}
          >
            Перейти в Telegram
          </a>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
            marginTop: "40px"
          }}
        >
          <div style={{ background: "#fff", padding: "28px", borderRadius: "22px" }}>
            <h3 style={{ marginTop: 0, fontSize: "22px" }}>1. Быстрый старт</h3>
            <p>Нажимаешь кнопку и сразу переходишь в Telegram.</p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "22px" }}>
            <h3 style={{ marginTop: 0, fontSize: "22px" }}>2. Простая анкета</h3>
            <p>Заполняешь данные о себе без сложной регистрации.</p>
          </div>

          <div style={{ background: "#fff", padding: "28px", borderRadius: "22px" }}>
            <h3 style={{ marginTop: 0, fontSize: "22px" }}>3. Новые знакомства</h3>
            <p>Находишь интересных людей и начинаешь общение.</p>
          </div>
        </section>

        <section style={{ marginTop: "70px", textAlign: "center" }}>
          <h3 style={{ fontSize: "42px", marginBottom: "30px" }}>
            Популярные анкеты
          </h3>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "380px",
                background: "#fff",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
              }}
            >
              <div
                style={{
                  height: "340px",
                  background: "linear-gradient(135deg, #f8a5c2, #f78fb3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "100px",
                  color: "#fff"
                }}
              >
                👩
              </div>

              <div style={{ padding: "24px" }}>
                <h4 style={{ margin: "0 0 10px", fontSize: "30px" }}>
                  {currentProfile.name}, {currentProfile.age}
                </h4>

                <p style={{ margin: "0 0 22px", color: "#666", fontSize: "18px" }}>
                  {currentProfile.city}
                </p>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => alert(`You liked ${currentProfile.name}`)}
                    style={{
                      flex: 1,
                      background: "#e91e63",
                      color: "#fff",
                      border: "none",
                      padding: "14px",
                      borderRadius: "14px",
                      fontSize: "16px",
                      fontWeight: "700",
                      cursor: "pointer"
                    }}
                  >
                    ❤️ Like
                  </button>

                  <button
                    onClick={nextProfile}
                    style={{
                      flex: 1,
                      background: "#f3f3f3",
                      color: "#222",
                      border: "none",
                      padding: "14px",
                      borderRadius: "14px",
                      fontSize: "16px",
                      fontWeight: "700",
                      cursor: "pointer"
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
