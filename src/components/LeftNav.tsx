import Image from 'next/image'
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
    <button onClick={onBack} className={`${styles.navBackButton} flex items-center justify-between w-full`}>
      Cano Q
      <Image
        src="/profile.jpg"
        alt="Cano Q"
        width={32}
        height={32}
        className="rounded-full object-cover shrink-0"
        style={{ width: 32, height: 32, objectPosition: 'center 65%' }}
      />
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
              <p className="text-xs text-foreground/40 whitespace-pre-line">{exp.subtitle}</p>
            </div>
            <p className={styles.navItemTag}>{exp.tag}</p>
          </button>
        ))}
      </div>
    </div>
  </nav>
)
