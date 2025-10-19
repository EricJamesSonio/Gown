import Navbar from "../controls/Navbar";

export default function PageLayout({ children, className = "", showNavbar = true }) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-rose-100 text-slate-800 font-sans antialiased transition-all ${className}`}
    >
      {showNavbar && <Navbar />}
      <main className="pt-20 min-h-screen">{children}</main>
    </div>
  );
}
