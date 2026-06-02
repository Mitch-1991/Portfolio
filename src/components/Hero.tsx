import { profile } from "../data/portfolio";

const profileImageUrl = `${import.meta.env.BASE_URL}assets/profilePic.jpeg`;

export function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">Portfolio // .NET Developer & AI Automation</p>
        <h1 id="hero-title">Mitch Lenaerts</h1>
        <p className="hero__role">.NET Developer | AI Automatisering</p>
        <p className="hero__intro">
          Full Stack .NET Developer met hands-on ervaring in AI-automatisering via
          Claude API en n8n. Ik bouw slimme systemen die bedrijfsprocessen automatiseren
          en combineer dat met een achtergrond in operations en teamleiding.
        </p>
        <div className="hero__actions" aria-label="Belangrijke links">
          <a className="button button--primary" href={profile.trackerUrl} target="_blank" rel="noreferrer">
            Open Sollicitatietracker
          </a>
          <a className="button" href={profile.cvUrl} download>
            Download cv
          </a>
          <a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <aside className="terminal-card" aria-label="Profiel samenvatting">
        <img className="profile-photo" src={profileImageUrl} alt="Mitch Lenaerts" />
        <div className="terminal-card__bar">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-card__body">
          <p><span>$</span> who am I</p>
          <strong>{profile.name}</strong>
          <p><span>$</span> stack --focus</p>
          <code>C# .NET 9 Claude API n8n React</code>
          <p><span>$</span> strengths</p>
          <code>automatisering ownership planning rust</code>
        </div>
      </aside>
    </section>
  );
}
