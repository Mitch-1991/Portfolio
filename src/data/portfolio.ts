const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Mitch Lenaerts",
  role: ".NET Developer | AI Automation",
  email: "lenaerts.mitch@gmail.com",
  github: "https://github.com/Mitch-1991",
  linkedin: "https://be.linkedin.com/in/mitch-lenaerts-343a1b15a",
  trackerUrl: "https://mitch-1991.github.io/Solicitatietracker2.0/",
  n8nLeadCaptureUrl: "https://github.com/Mitch-1991/n8n-ai-lead-capture",
  cvUrl: assetUrl("assets/mitch-lenaerts-cv.pdf"),
};

export const skills = [
  "C#",
  ".NET 9",
  "React",
  "TypeScript",
  "MVC",
  "Entity Framework",
  "Blazor",
  "Anthropic Claude API",
  "n8n",
  "Claude Code",
  "Cursor",
  "Docker",
  "Azure",
  "Scrum",
  "Microsoft Office",
];

export const experience = [
  {
    title: "Full stack developer C# .NET",
    place: "VDAB Campus",
    period: "Mei 2025 - Mrt 2026",
    summary:
      "Gerichte opleiding rond moderne .NET-ontwikkeling, frontend-denken en samenwerken in een Scrum-context.",
  },
  {
    title: "Teamleader customer service",
    place: "Katoennatie, Antwerpen",
    period: "2019 - 2024",
    summary:
      "Dossiers opvolgen, klanten begeleiden, douaneprocessen bewaken en als eerste aanspreekpunt meedenken bij IT-vragen in Navision.",
  },
  {
    title: "Customer service",
    place: "Products & Brands, Mechelen",
    period: "2024 - 2025",
    summary:
      "Bestellingen, leveringen en softwareprocessen overzichtelijker maken, inclusief heldere documentatie voor gebruikers.",
  },
  {
    title: "Klantverantwoordelijke",
    place: "Xerius, Antwerpen",
    period: "2018 - 2019",
    summary:
      "Prospectie, offertes en advies combineren met nauwkeurig luisteren naar wat zelfstandigen echt nodig hebben.",
  },
];

export const education = [
  "Bachelor Sociaal-cultureel werk, Encora HBO5 | 2016 - 2018",
  "Opleiding import & export, Portilog via Randstad | 2019",
  "Online cursussen: Learn TypeScript · Anthropic Academy: Claude 101 & Claude Code in Action · Docker Fundamentals · Azure Fundamentals",
];
