export default function Login() {
  return (
    <section className="max-w-3xl mx-auto my-8 p-12 bg-white/85 backdrop-blur-md rounded-2xl shadow-lg text-center transition-transform hover:-translate-y-1 hover:shadow-2xl animate-fadeIn">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        Welcome to My App
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
        This App is my first React project — PRACTICING REACT 💻
      </p>

      <section className="bg-slate-800 text-white p-6 mt-12 rounded-xl text-center">
        <h2 className="text-2xl font-bold">Tailwind is working!</h2>
        <p className="text-cyan-400 mt-2">
          If you see color and spacing, it's working ✅
        </p>
      </section>
    </section>
  );
}
