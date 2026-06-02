import { profile } from "../data/portfolio";

export function ProjectSpotlight() {
  return (
    <>
      <section className="section-shell project" aria-labelledby="project-title">
        <div className="project__content">
          <p className="eyebrow">Project spotlight</p>
          <h2 id="project-title">Sollicitatietracker</h2>
          <p>
            Een praktische applicatie om sollicitaties, statussen, gesprekken en volgende
            stappen bij te houden. Het project toont hoe ik dashboard-denken, workflow
            en frontend-interactie samenbreng in een tool die meteen bruikbaar is.
          </p>
          <div className="tag-row" aria-label="Gebruikte technologieen">
            <span>React</span>
            <span>TypeScript</span>
            <span>.NET API-denken</span>
            <span>Dashboard UX</span>
          </div>
          <a className="button button--primary" href={profile.trackerUrl} target="_blank" rel="noreferrer">
            Bekijk live app
          </a>
        </div>
        <div className="app-preview" aria-label="Preview van de Sollicitatietracker dashboard interface">
          <div className="app-preview__top">
            <strong>Dashboard</strong>
            <span>Sollicitaties</span>
          </div>
          <div className="metric-grid">
            <div><span>Lopend</span><strong>1</strong></div>
            <div><span>Gesprek</span><strong>1</strong></div>
            <div><span>Afgewezen</span><strong>1</strong></div>
            <div><span>Aanbod</span><strong>0</strong></div>
          </div>
          <div className="table-mock">
            <div><span>Bedrijf</span><span>Status</span><span>Datum</span></div>
            <div><strong>CollinsIt</strong><em>Afgewezen</em><span>2026-04-24</span></div>
            <div><strong>ItSolutions</strong><em>Verzonden</em><span>2026-04-16</span></div>
            <div><strong>Techcorp</strong><em>Gesprek</em><span>2026-04-28</span></div>
          </div>
        </div>
      </section>

      <section className="section-shell project project--full" aria-labelledby="project-n8n-title">
        <div className="project__content">
          <p className="eyebrow">Project spotlight</p>
          <h2 id="project-n8n-title">n8n AI Lead Capture</h2>
          <p>
            Een AI-automatisering workflow gebouwd met n8n, Claude API en webhook integratie.
            Vangt leads op, verwerkt ze via AI en stuurt ze door naar de juiste kanalen —
            zonder manuele tussenkomst.
          </p>
          <div className="tag-row" aria-label="Gebruikte technologieen">
            <span>n8n</span>
            <span>Claude API</span>
            <span>Webhook</span>
            <span>AI Automation</span>
          </div>
          <a className="button button--primary" href={profile.n8nLeadCaptureUrl} target="_blank" rel="noreferrer">
            Bekijk op GitHub
          </a>
        </div>
      </section>
    </>
  );
}
