import { Temporal } from 'temporal-polyfill/full'
import { connectDatabase, db } from "./db.ts";

const profiles = [
  {
    name: "Alice", description: "This is Alice",
    links: [{ content: "https://alice.example.com", type: 'LINKEDIN' as const }],
    skills: ["JavaScript", "TypeScript"],
    projects: [{ name: "Scriptorium", link: null }], 
    workplaces: [ { name: "Tech Corp", role: "Software Engineer", from: Temporal.PlainDate.from("2020-01-01"), to: Temporal.PlainDate.from("2023-01-01"), achievements: "Led development of new features" } ]
  },
  {
    name: "Bob", description: "This is Bob",
    links: [{ content: "https://bob.example.com", type: 'LINKEDIN' as const }],
    skills: ["Python", "Django"], 
    projects: [{ name: "ML Hub", link: "https://mlhub.example.com" }], 
    workplaces: [ { name: "Smart Corp", role: "Team Lead", from: Temporal.PlainDate.from("2020-05-01"), to: null, achievements: "Successful Mentoring" } ]

  },
  {
    name: "Carol", description: "This is Carol",
    links: [{ content: "https://carol.example.com", type: 'LINKEDIN' as const }],
    skills: ["Java", "Spring"],
    projects: [{ name: "Awesome ERP", link: "https://awesome-erp.example.com" }], 
    workplaces: [ { name: "Awesome Corp", role: "Senior Software Engineer", from: Temporal.PlainDate.from("2021-01-01"), to: null, achievements: "Deep domain knowledge" } ]

  },
];

let pendingSeed: Promise<void> | undefined;
async function runSeed(): Promise<void> {
  await connectDatabase();
  for (const item of profiles) {

    await db.orm.public.Profile.create({
      name: item.name,
      description: item.description,
      links: (p) =>
        p.create(item.links.map(link => ({
          content: link.content,
          type: link.type,
        }))),
      skills: (p) =>
        p.create(item.skills.map(skill => ({
          content: skill
        }))),
      projects: (p) =>
        p.create(item.projects.map(project => ({
          name: project.name,
          link: project.link,
        }))),
      workplaces: (p) =>
        p.create(item.workplaces.map(workplace => ({
          name: workplace.name,
          role: workplace.role,
          from: workplace.from,
          to: workplace.to,
          achievements: workplace.achievements,
        }))),
    });
  }
}


  pendingSeed ??= runSeed().catch((error: unknown) => {
    pendingSeed = undefined;
    throw error;
  });
