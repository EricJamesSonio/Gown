// src/pages/Profile.jsx
import "../css/Profile.css";

export default function Profile() {
  const user = {
    name: "Eric James",
    id: "USER12345",
    gmail: "eric.james@example.com",
    contact: "+63 912 345 6789",
    address: "Manila, Philippines",
    image: "../../profile/profile.jpg",
  };

  return (
    <section className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={user.image}
            alt="Profile"
            className="profile-avatar"
          />
          <h2>{user.name}</h2>
          <p className="profile-id">ID: {user.id}</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <span className="label">Gmail:</span>
            <span className="value">{user.gmail}</span>
          </div>
          <div className="detail-item">
            <span className="label">Contact:</span>
            <span className="value">{user.contact}</span>
          </div>
          <div className="detail-item">
            <span className="label">Address:</span>
            <span className="value">{user.address}</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn edit">Edit Profile</button>
          <button className="btn logout">Logout</button>
        </div>
      </div>
    </section>
  );
}
