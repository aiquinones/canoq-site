export const styles = {
  sectionLabel: 'text-xs font-mono uppercase tracking-widest text-muted mb-6',
  heroHeader: 'text-8xl font-bold tracking-tighter mb-6 text-foreground',
  heroSubText: 'text-base leading-relaxed text-foreground/70 max-w-sm',
  experienceContainer: 'flex flex-col gap-5',
  externalLinkContainer: 'flex gap-8',

  // Nav
  navRoot: 'w-64 shrink-0 border-r border-foreground/10 px-8 py-12 flex flex-col gap-8 h-full',
  navBackButton: 'text-xl font-bold tracking-tight text-foreground hover:opacity-70 transition-opacity text-left',
  navItem: 'flex justify-between items-start w-full text-left cursor-pointer py-1 group',
  navItemTitle: 'font-medium text-foreground/50 group-hover:text-foreground transition-colors',
  navItemTitleActive: 'font-medium text-foreground',
  navItemTag: 'text-xs font-mono text-muted',

  // Detail
  detailRoot: 'flex-1 flex overflow-hidden',
  detailTextPane: 'flex-[2] overflow-y-auto flex flex-col',
  detailContent: 'flex-1 flex flex-col justify-center px-8 md:px-16 py-12',
  detailMapPane: 'flex-[1] border-l border-foreground/10',
  detailMapWrapper: 'hidden md:flex flex-[1]',
  detailTitle: 'text-3xl font-bold tracking-tight text-foreground mb-8',
  detailBody: 'text-base leading-relaxed text-foreground/60 max-w-prose',

  // Mobile nav
  mobileTopBar: 'flex items-center px-6 py-4 border-b border-foreground/10 md:hidden',
  hamburgerButton: 'flex items-center justify-center text-foreground hover:opacity-70 transition-opacity',
  mobileNavOverlay: 'fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300',
  mobileNavPanel: 'fixed inset-y-0 left-0 z-50 bg-background transition-transform duration-300 ease-in-out md:hidden',

  // Mobile detail navigation
  mobileBackRow: 'px-6 pt-5 pb-1 md:hidden',
  mobileBackBtn: 'flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors',
  mobileExpNav: 'flex justify-between items-center px-6 py-6 md:hidden',
  mobileExpNavBtn: 'flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors border border-foreground/15 rounded-2xl px-4 py-2 hover:border-foreground/40',
} as const
