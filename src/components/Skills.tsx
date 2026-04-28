import { skills } from "../data/portfolio";

export function Skills() {
  return (
    <section className="section-shell" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="eyebrow">Stack</p>
        <h2 id="skills-title">Technische focus</h2>
      </div>
      <ul className="skill-grid">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
