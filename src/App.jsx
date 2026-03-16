export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fff7fb', minHeight: '100vh', color: '#222' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h1 style={{ margin: 0, color: '#e91e63' }}>Telegram Dating</h1>
        <a
          href="https://t.me/Date020888_bot"
          style={{ background: '#e91e63', color: '#fff', padding: '10px 18px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Начать
        </a>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        <section style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>
            Найди новые знакомства в Telegram
          </h2>
          <p style={{ fontSize: '20px', color: '#555', maxWidth: '700px', margin: '0 auto 30px' }}>
            Удобная площадка для знакомств, общения и новых встреч. 
Переходи в Telegram и начинай общение уже сейчас.
          </p>
          <a
            href="https://t.me/Date020888_bot"
            style={{ display: 'inline-block', background: '#e91e63', color: '#fff', padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}
          >
            Перейти в Telegram
          </a>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '50px' }}>
          <div style={{ background: '#fff', padding: '25px', borderRadius: '18px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
            <h3>1. Быстрый старт</h3>
            <p>Нажимаешь кнопку и сразу переходишь в Telegram.</p>
          </div>

          <div style={{ background: '#fff', padding: '25px', borderRadius: '18px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
            <h3>2. Простая анкета</h3>
            <p>Заполняешь данные о себе без сложной регистрации.</p>
          </div>

          <div style={{ background: '#fff', padding: '25px', borderRadius: '18px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
            <h3>3. Новые знакомства</h3>
            <p>Находишь интересных людей и начинаешь общение.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
