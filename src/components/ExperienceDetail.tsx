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
          <MobileNavBtn direction="prev" exp={prevExp} onSelect={onSelect} />
          <MobileNavBtn direction="next" exp={nextExp} onSelect={onSelect} />
        </div>
      </div>
    </div>
    <div className={styles.detailMapWrapper}>
      <PixelMap experiences={experiences} activeId={experience.id} onSelect={onSelect} />
    </div>
  </div>
)

type NavBtnProps = {
  direction: 'prev' | 'next'
  exp: Experience | null
  onSelect: (id: string) => void
}

const MobileNavBtn = ({ direction, exp, onSelect }: NavBtnProps) => (
  <div className={`flex-1 ${direction === 'next' ? 'flex justify-end' : ''}`}>
    {exp && (
      <button className={styles.mobileExpNavBtn} onClick={() => onSelect(exp.id)}>
        {direction === 'prev' ? `← ${exp.title}` : `${exp.title} →`}
      </button>
    )}
  </div>
)
