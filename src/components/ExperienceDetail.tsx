import { styles } from '@/lib/styles'
import type { Experience } from '@/lib/experiences'
import { PixelMap } from '@/components/PixelMap'

type Props = {
  experience: Experience
  experiences: Experience[]
  onSelect: (id: string) => void
  prevExp: Experience | null
  nextExp: Experience | null
}

export const ExperienceDetail = ({ experience, experiences, onSelect, prevExp, nextExp }: Props) => (
  <div className={styles.detailRoot}>
    <div key={experience.id} className={`${styles.detailTextPane} animate-fade-up`}>
      <div className={styles.detailContent}>
        <h2 className={styles.detailTitle}>{experience.title}</h2>
        {experience.description.split('\n\n').map((para, i) => (
          <p key={i} className={styles.detailBody}>{para}</p>
        ))}
        <div className={styles.mobileExpNav}>
          {prevExp && (
            <button className={styles.mobileExpNavBtn} onClick={() => onSelect(prevExp.id)}>
              ← {prevExp.title}
            </button>
          )}
          {nextExp && (
            <button className={styles.mobileExpNavBtn} onClick={() => onSelect(nextExp.id)}>
              {nextExp.title} →
            </button>
          )}
        </div>
      </div>
    </div>
    <div className={styles.detailMapWrapper}>
      <PixelMap experiences={experiences} activeId={experience.id} onSelect={onSelect} />
    </div>
  </div>
)
