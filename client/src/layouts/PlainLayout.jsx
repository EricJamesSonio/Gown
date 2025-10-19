// src/layouts/PlainLayout.jsx
export default function PlainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-100 to-white text-slate-800 font-sans antialiased flex items-center justify-center">
      {children}
    </div>
  );
}
