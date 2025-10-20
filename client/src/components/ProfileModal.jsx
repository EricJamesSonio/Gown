// src/components/ProfileModal.jsx
import "../css/components/ProfileModal.css";

export default function ProfileModal({ isOpen, onClose, user }) {
  if (!isOpen) return null;

  const displayUser = user || {
    image: "https://via.placeholder.com/120",
    name: "N/A",
    id: "N/A",
    gmail: "N/A",
    contact: "N/A",
    address: "N/A",
  };

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div
        className="profile-modal"
        onClick={(e) => e.stopPropagation()} // prevent overlay click
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="profile-header">
          <img
            src={displayUser.image || "https://via.placeholder.com/120"}
            alt="Profile"
            className="profile-avatar"
          />
          <h2>{displayUser.name}</h2>
          <p className="profile-id">ID: {displayUser.id}</p>
        </div>

        <div className="profile-details">
          <p>
            <strong>Gmail:</strong> {displayUser.gmail}
          </p>
          <p>
            <strong>Contact:</strong> {displayUser.contact}
          </p>
          <p>
            <strong>Address:</strong> {displayUser.address}
          </p>
        </div>
      </div>
    </div>
  );
}
