// src/components/ProfileModal.jsx
import "../css/components/ProfileModal.css";

export default function ProfileModal({ isOpen, onClose, user }) {
  if (!isOpen) return null;

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
            src={user.image || "https://via.placeholder.com/120"}
            alt="Profile"
            className="profile-avatar"
          />
          <h2>{user.name}</h2>
          <p className="profile-id">ID: {user.id}</p>
        </div>

        <div className="profile-details">
          <p>
            <strong>Gmail:</strong> {user.gmail}
          </p>
          <p>
            <strong>Contact:</strong> {user.contact}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
        </div>
      </div>
    </div>
  );
}
