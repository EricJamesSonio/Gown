// src/pages/Profile.jsx
import { useUser } from "../context/UserContext";
import "../css/pages/Profile.css";

export default function Profile() {
  const { user, logout } = useUser();

  if (!user) return <p>Loading profile...</p>;

  return (
    <section className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={user.image_url || "/default-profile.png"}
            alt="Profile"
            className="profile-avatar"
          />
          <h2>{user.name}</h2>
          <p className="profile-id">ID: {user.id}</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <span className="label">Email:</span>
            <span className="value">{user.email}</span>
          </div>
          <div className="detail-item">
            <span className="label">Contact:</span>
            <span className="value">{user.contact_no}</span>
          </div>
          <div className="detail-item">
            <span className="label">Address:</span>
            <span className="value">
              {user.address
                ? `${user.address.street}, ${user.address.city}, ${user.address.province}, ${user.address.country}`
                : "N/A"}
            </span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn edit">Edit Profile</button>
          <button className="btn logout" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
