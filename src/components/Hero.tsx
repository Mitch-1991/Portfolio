import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">Portfolio // beschikbaar voor junior .NET kansen</p>
        <h1 id="hero-title">Mitch Lenaerts</h1>
        <p className="hero__role">.NET developer met een full-stack blik</p>
        <p className="hero__intro">
          Ik bouw graag praktische software die overzicht brengt: duidelijke data,
          bruikbare interfaces en oplossingen die vertrekken vanuit echte werkprocessen.
          Mijn achtergrond in customer service en teamleiding helpt mij om verder te
          kijken dan code alleen.
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
        <div className="terminal-card__bar">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-card__body">
          <p><span>$</span> whoami</p>
          <strong>{profile.name}</strong>
          <p><span>$</span> stack --focus</p>
          <code>C# .NET 9 React TypeScript EF</code>
          <p><span>$</span> strengths</p>
          <code>planning klantinzicht ownership rust</code>
        </div>
      </aside>
    </section>
  );
}
