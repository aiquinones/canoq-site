type Props = {
  href: string
  label: string
}

export const ExternalLink = ({ href, label }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm font-mono text-foreground/60 hover:text-foreground transition-colors"
  >
    {label} ↗
  </a>
)
