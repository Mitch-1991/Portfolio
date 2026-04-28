import { education, experience } from "../data/portfolio";

export function Experience() {
  return (
    <section className="section-shell timeline-section" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">Ervaring</p>
        <h2 id="experience-title">Praktijkervaring die mijn code scherper maakt</h2>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-card" key={`${item.title}-${item.place}`}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </div>
            <span>{item.period}</span>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
      <div className="education-panel">
        <h3>Opleiding en groei</h3>
        <ul>
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
