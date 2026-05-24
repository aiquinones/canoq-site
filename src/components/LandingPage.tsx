import { TypingAnimation } from '@/components/TypingAnimation'
import { ExternalLink } from '@/components/ExternalLink'
import { ExperienceItem } from '@/components/ExperienceItem'
import { styles } from '@/lib/styles'
import { experiences } from '@/lib/experiences'

type Props = {
  onSelectExp: (id: string) => void
}

export const LandingPage = ({ onSelectExp }: Props) => (
  <main className="px-8 py-24 max-w-2xl w-full flex flex-col gap-20">
    {/* Hero */}
    <section>
      <h1 className={styles.heroHeader}>Cano Q</h1>
      <p className="text-xl font-mono text-muted mb-10">
        <TypingAnimation words={['software engineer', 'NLP researcher', 'builder']} />
      </p>
      <p className={styles.heroSubText}>
        Engineer at Microsoft working on Copilot for SharePoint & OneDrive.
        Masters in NLP from PUC — syntactic patterns in Spanish BERT.
      </p>
    </section>

    {/* Work */}
    <section>
      <p className={styles.sectionLabel}>Experience</p>
      <div className={styles.experienceContainer}>
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            title={exp.title}
            subtitle={exp.subtitle}
            tag={exp.tag}
            onClick={() => onSelectExp(exp.id)}
          />
        ))}
      </div>
    </section>

    {/* Links */}
    <section>
      <p className={styles.sectionLabel}>Links</p>
      <div className={styles.externalLinkContainer}>
        <ExternalLink href="https://github.com/aiquinones" label="GitHub" />
        <ExternalLink href="https://www.linkedin.com/in/aiquinones/" label="LinkedIn" />
        <ExternalLink href="https://www.instagram.com/canoq" label="Instagram" />
        <ExternalLink href="https://x.com/itscanoq" label="X" />
      </div>
    </section>
  </main>
)
