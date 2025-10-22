// src/pages/Profile.jsx
import { useUser } from "../context/UserContext";
import "../css/pages/Profile.css";

export default function Profile() {
  const { user, logout } = useUser();

  const displayUser = user || {
    image_url: "/default-profile.png",
    name: "N/A",
    id: "N/A",
    email: "N/A",
    contact_no: "N/A",
    address: {
      street: "N/A",
      city: "N/A",
      province: "N/A",
      country: "N/A",
    },
  };

  return (
    <section className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={displayUser.image_url || "/default-profile.png"}
            alt="Profile"
            className="profile-avatar"
          />
          <h2>{displayUser.name}</h2>
          <p className="profile-id">ID: {displayUser.id}</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <span className="label">Email:</span>
            <span className="value">{displayUser.email}</span>
          </div>
          <div className="detail-item">
            <span className="label">Contact:</span>
            <span className="value">{displayUser.contact_no}</span>
          </div>
          <div className="detail-item">
            <span className="label">Address:</span>
            <span className="value">
              {displayUser.address
                ? `${displayUser.address.street}, ${displayUser.address.city}, ${displayUser.address.province}, ${displayUser.address.country}`
                : "N/A"}
            </span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn edit" disabled={!user}>
            Edit Profile
          </button>
          <button
            className="btn logout"
            onClick={user ? logout : undefined}
            disabled={!user}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
