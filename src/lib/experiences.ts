export type Experience = {
  id: string
  title: string
  subtitle: string
  tag: string
  location: { lat: number; lon: number }
  description: string
}

export const experiences: Experience[] = [
  {
    id: 'microsoft',
    title: 'Microsoft',
    subtitle: 'Copilot · SharePoint & OneDrive',
    tag: 'current',
    location: { lat: 47.64, lon: -122.13 },
    description: `I've been working at Microsoft for close to 5 years.

    I started working on the OneDrive Web Front End, where I learned about the importance of Engineering Excellence on products used by millions.

    After the rise in popularity of LLM models, I started working on the integration of Copilot in OneDrive and SharePoint, shipping the capabilities of getting QnA on specific files, or base on content scoped to a specific context.
    
    We've iterated a lot, and ended with a fully agentic product that can do much more than QnA, including fully managing your site, and creating new files based on previous ones. 
`,
  },
  {
    id: 'puc',
    title: 'PUC',
    subtitle: 'BSc. Comp. Sci.\nMSc. NLP',
    tag: 'education',
    location: { lat: -33.44, lon: -70.62 },
    description: `My Engineering studies are a bit complicated :) I Majored as a Mathematical Engineering with a Minor in Programming. But my Engineer Title is in Computer Science.
    
    During my last semester, as I took more advance courses, I started to enjoy studying the "bleeding edge" a lot.
    I got to read \`Attention Is All You Need\` in 2018, and loved the idea of compare competing ideas that could better simulate  semantic comprehension.
    All this made me opt for taking my Masters with PUC's AI Lab.

    There was an interesting paper from Kevin Clark et al regarding the syntactic pattern seen in BERT's attention heads, and I decided to work on +1ing the work, but doing it in the Spanish version of the model BETO.`,
  },
]
