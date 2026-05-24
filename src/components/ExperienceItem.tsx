type Props = {
  title: string
  subtitle: string
  tag: string
}

export const ExperienceItem = ({ title, subtitle, tag }: Props) => (
  <div className="flex justify-between items-start">
    <div>
      <p className="font-medium text-foreground">{title}</p>
      <p className="text-sm text-foreground/50">{subtitle}</p>
    </div>
    <p className="text-sm font-mono text-muted">{tag}</p>
  </div>
)
