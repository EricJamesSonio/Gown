import { useState } from "react";
import AuthForm from "../components/login/AuthForm";
import "../css/pages/Login.css";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page">
      <div className="login-modal">
        <h1 className="login-header">Welcome to My App</h1>
        <p className="login-subtext">
          {isLogin
            ? "Log in to access your dashboard and continue your journey."
            : "Create an account to start exploring awesome features!"}
        </p>

        <div className="login-toggle">
          <button
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button
            className={`toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <AuthForm isLogin={isLogin} />

        <p className="login-footer">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign up here</span>.
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Log in here</span>.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
