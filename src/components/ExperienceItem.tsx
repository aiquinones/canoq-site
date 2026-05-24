type Props = {
  title: string
  subtitle: string
  tag: string
  onClick?: () => void
}

export const ExperienceItem = ({ title, subtitle, tag, onClick }: Props) => (
  <button
    onClick={onClick}
    className="flex justify-between items-start w-full text-left group cursor-pointer"
  >
    <div>
      <p className="font-medium text-foreground group-hover:text-foreground/70 transition-colors">{title}</p>
      <p className="text-sm text-foreground/50">{subtitle}</p>
    </div>
    <p className="text-sm font-mono text-muted">{tag}</p>
  </button>
)
