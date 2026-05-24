import { styles } from '@/lib/styles'
import type { Experience } from '@/lib/experiences'

type Props = {
  experiences: Experience[]
  activeId: string
  onSelect: (id: string) => void
  onBack: () => void
}

export const LeftNav = ({ experiences, activeId, onSelect, onBack }: Props) => (
  <nav className={styles.navRoot}>
    <button onClick={onBack} className={styles.navBackButton}>
      Cano Q
    </button>

    <div>
      <p className={styles.sectionLabel}>Experience</p>
      <div className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <button key={exp.id} onClick={() => onSelect(exp.id)} className={styles.navItem}>
            <div>
              <p className={activeId === exp.id ? styles.navItemTitleActive : styles.navItemTitle}>
                {exp.title}
              </p>
              <p className="text-xs text-foreground/40">{exp.subtitle}</p>
            </div>
            <p className={styles.navItemTag}>{exp.tag}</p>
          </button>
        ))}
      </div>
    </div>
  </nav>
)
