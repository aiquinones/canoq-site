export type Experience = {
  id: string
  title: string
  subtitle: string
  tag: string
  location: { lat: number; lon: number }
}

export const experiences: Experience[] = [
  {
    id: 'microsoft',
    title: 'Microsoft',
    subtitle: 'Copilot · SharePoint & OneDrive',
    tag: 'current',
    location: { lat: 47.64, lon: -122.13 },
  },
  {
    id: 'puc',
    title: 'PUC',
    subtitle: 'BSc. Comp. Sci. · MSc. NLP',
    tag: 'education',
    location: { lat: -33.44, lon: -70.62 },
  },
]
