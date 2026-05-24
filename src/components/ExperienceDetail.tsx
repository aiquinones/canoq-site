import { styles } from '@/lib/styles'
import type { Experience } from '@/lib/experiences'
import { PixelMap } from '@/components/PixelMap'

type Props = {
  experience: Experience
  experiences: Experience[]
  onSelect: (id: string) => void
}

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`

export const ExperienceDetail = ({ experience, experiences, onSelect }: Props) => (
  <div className={styles.detailRoot}>
    <div key={experience.id} className={`${styles.detailTextPane} animate-fade-up`}>
      <h2 className={styles.detailTitle}>{experience.title}</h2>
      <p className={styles.detailBody}>{LOREM}</p>
    </div>
    <div className={styles.detailMapWrapper}>
      <PixelMap experiences={experiences} activeId={experience.id} onSelect={onSelect} />
    </div>
  </div>
)
