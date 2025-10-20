import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  // 🔁 Sync user when token changes
  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Invalid token");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.warn("Profile fetch error:", err.message);
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      }
    };

    fetchProfile();
  }, [token]);

  // ✅ login/logout update context instantly (no reload)
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
