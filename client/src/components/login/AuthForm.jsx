import "../../css/components/AuthForm.css";

export default function AuthForm({ isLogin }) {
  return (
    <form className="login-form">
      {!isLogin && (
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
      )}

      <div className="input-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
      </div>

      <button type="submit" className="submit-btn">
        {isLogin ? "Log In" : "Create Account"}
      </button>
    </form>
  );
}
