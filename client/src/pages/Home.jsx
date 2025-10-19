import "../css/pages/Home.css";

export default function Home() {
  return (
    <section className="home-page">
      <div className="home-card">
        <h2>Welcome to My App</h2>
        <p>
          This App is my first React project — PRACTICING REACT 💻
        </p>

        <section className="home-inner-box">
          <h3>Tailwind is working!</h3>
          <p>If you see color and spacing, it's working ✅</p>
        </section>
      </div>
    </section>
  );
}
