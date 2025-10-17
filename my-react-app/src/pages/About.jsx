// src/pages/About.jsx
import TeamCard from "../components/TeamCard";
import "../css/pages/About.css";

export default function About() {
  const team = [
    {
      name: "Eric James",
      role: "Lead Developer",
      image: "/profile/profile.jpg",
      description:
        "Responsible for building the core system, managing architecture, and implementing logic for the expert system modules.",
    },
    {
      name: "Rj Diaz",
      role: "Project Manager",
      image: "/profile/profile.jpg",
      description:
        "Oversees project progress, manages team coordination, and ensures timely delivery of all components and modules.",
    },
    {
      name: "Jay Entileso",
      role: "System Administrator",
      image: "/profile/profile.jpg",
      description:
        "Manages the deployment environment, system maintenance, and ensures reliable system performance and uptime.",
    },
  ];

  return (
    <section className="about-page">
      <div className="about-header">
        <h1>About Our Team</h1>
        <p>
          We are a dedicated group of developers and managers working together to
          deliver a powerful, intelligent expert system.
        </p>
      </div>

      <div className="team-container">
        {team.map((member, i) => (
          <TeamCard
            key={i}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
}
