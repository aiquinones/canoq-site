'use client'

import { useState } from 'react'
import { TypingAnimation } from '@/components/TypingAnimation'
import { ExternalLink } from '@/components/ExternalLink'
import { ExperienceItem } from '@/components/ExperienceItem'
import { LeftNav } from '@/components/LeftNav'
import { ExperienceDetail } from '@/components/ExperienceDetail'
import { styles } from '@/lib/styles'
import { experiences } from '@/lib/experiences'

export const SiteShell = () => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeExp = experiences.find((e) => e.id === activeId) ?? null

  return (
    <div className="flex min-h-screen">
      {/* Left nav — visible when an experience is selected */}
      <div
        className={`overflow-hidden transition-[width] duration-400 ease-in-out ${activeExp ? 'w-64' : 'w-0'}`}
      >
        {activeExp && (
          <LeftNav
            experiences={experiences}
            activeId={activeId!}
            onSelect={setActiveId}
            onBack={() => setActiveId(null)}
          />
        )}
      </div>

      {/* Main content */}
      <div
        className={`transition-all duration-400 ease-in-out ${
          activeExp
            ? 'flex-1'
            : 'flex-1 flex items-center justify-center'
        }`}
      >
        {activeExp ? (
          <ExperienceDetail experience={activeExp} />
        ) : (
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
                    onClick={() => setActiveId(exp.id)}
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
        )}
      </div>
    </div>
  )
}
