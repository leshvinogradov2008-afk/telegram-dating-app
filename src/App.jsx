import { useState, useEffect } from "react"

const profiles = [
  { id: 1, name: "Sofia", age: 26, city: "Los Angeles" },
  { id: 2, name: "Emma", age: 29, city: "Santa Monica" },
  { id: 3, name: "Luna", age: 24, city: "Burbank" }
]

export default function App() {

  const [index, setIndex] = useState(0)

  useEffect(() => {

    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()
    }

  }, [])

  const profile = profiles[index]

  function like() {
    setIndex(index + 1)
  }

  function pass() {
    setIndex(index + 1)
  }

  if (!profile) {
    return (
      <div style={{ padding: 40 }}>
        <h2>No more profiles</h2>
      </div>
    )
  }

  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>

      <h1>Dating App</h1>

      <p>
        {tgUser
          ? `Hello ${tgUser.first_name}`
          : "Welcome"}
      </p>

      <div style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 20,
        marginTop: 20
      }}>

        <h2>{profile.name}, {profile.age}</h2>

        <p>{profile.city}</p>

      </div>

      <div style={{ marginTop: 20 }}>

        <button
          onClick={pass}
          style={{
            marginRight: 10,
            padding: 10
          }}
        >
          Pass
        </button>

        <button
          onClick={like}
          style={{
            padding: 10
          }}
        >
          Like
        </button>

      </div>

    </div>
  )
}
