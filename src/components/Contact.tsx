import { profile } from "../data/portfolio";

export function Contact() {
  return (
    <section className="section-shell contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Laten we iets werkends bouwen.</h2>
        <p>
          Zoek je iemand die technisch wil groeien, helder communiceert en processen
          begrijpt vanuit de gebruiker? Dan hoor ik graag van je.
        </p>
      </div>
      <div className="contact__links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
