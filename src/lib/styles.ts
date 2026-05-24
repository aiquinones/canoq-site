export const styles = {
  sectionLabel: 'text-xs font-mono uppercase tracking-widest text-muted mb-6',
  heroHeader: 'text-8xl font-bold tracking-tighter mb-6 text-foreground',
  heroSubText: 'text-base leading-relaxed text-foreground/70 max-w-sm',
  experienceContainer: 'flex flex-col gap-5',
  externalLinkContainer: 'flex gap-8',

  // Nav
  navRoot: 'w-64 shrink-0 border-r border-foreground/10 px-8 py-12 flex flex-col gap-8',
  navBackButton: 'text-xl font-bold tracking-tight text-foreground hover:opacity-70 transition-opacity text-left',
  navItem: 'flex justify-between items-start w-full text-left cursor-pointer py-1 group',
  navItemTitle: 'font-medium text-foreground/50 group-hover:text-foreground transition-colors',
  navItemTitleActive: 'font-medium text-foreground',
  navItemTag: 'text-xs font-mono text-muted',

  // Detail
  detailRoot: 'flex-1 px-16 py-12',
  detailTitle: 'text-3xl font-bold tracking-tight text-foreground mb-8',
  detailBody: 'text-base leading-relaxed text-foreground/60 max-w-prose',
} as const
