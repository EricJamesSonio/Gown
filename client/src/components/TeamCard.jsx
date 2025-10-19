// src/components/TeamCard.jsx
import "../css/components/TeamCard.css";

export default function TeamCard({ name, role, image, description }) {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-photo" />
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      <p className="team-desc">{description}</p>
    </div>
  );
}
