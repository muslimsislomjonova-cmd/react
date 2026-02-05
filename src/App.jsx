function App() {
  return (
    <div>
      <header style={{ background: "#282c34", color: "white", padding: "20px" }}>
        <h1>Mening birinchi react saytim</h1>
        <p>1-page website</p>
      </header>
      
      <main style={{ padding: "20px" }}>
        <section>
          <h2>Biz haqimizda</h2>
          <p>
            bu sayt reactda qlngan br sahifali web sayt.
          </p>
          
        </section>

        <section>
          <h2>Xizmatlar</h2>
          <ul>
            <li>web dizayn</li>
           <li>frontend</li>
            <li>react loyihalar</li>
          </ul>
        </section>

        <section>
          <h2>Aloqa</h2>
          <p>Email: example@gmail.com</p>
        </section>
      </main>

      <footer style={{ background: "#eee", padding: "10px", textAlign: "center" }}>
        <p> 2026 mening saytim</p>
      </footer>
    </div>
  );
}

export default App;
