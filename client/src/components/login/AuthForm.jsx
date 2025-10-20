import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // ⬅️ import
import "../../css/components/AuthForm.css";

export default function AuthForm({ isLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useUser(); // ⬅️ access context login()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/users/login" : "/api/users/signup";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isLogin ? { email, password } : { name, email, password }
        ),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage(
        isLogin ? `Welcome back, ${data.user.name}` : "Account created!"
      );

      if (isLogin) {
        login(data.token); // ✅ update context + localStorage
        navigate("/products");
        window.location.reload(); // 🔥 instant app refresh
      } else {
        navigate("/products");
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {!isLogin && (
        <div className="input-group">
          <label>Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your full name"
          />
        </div>
      )}
      <div className="input-group">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="submit-btn">
        {isLogin ? "Log In" : "Create Account"}
      </button>
      {message && <p className="form-message">{message}</p>}
    </form>
  );
}
