'use client'

import { useState } from 'react'
import { LeftNav } from '@/components/LeftNav'
import { ExperienceDetail } from '@/components/ExperienceDetail'
import { LandingPage } from '@/components/LandingPage'
import { experiences } from '@/lib/experiences'
import { styles } from '@/lib/styles'

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <rect y="3" width="20" height="2" rx="1" />
    <rect y="9" width="20" height="2" rx="1" />
    <rect y="15" width="20" height="2" rx="1" />
  </svg>
)

export const SiteShell = () => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const activeExp = experiences.find((e) => e.id === activeId) ?? null

  const handleSelect = (id: string) => {
    setActiveId(id)
    setMobileNavOpen(false)
  }

  const handleBack = () => {
    setActiveId(null)
    setMobileNavOpen(false)
  }

  return (
    <div className="flex min-h-screen">
      {/* Desktop left nav — hidden on mobile */}
      <div
        className={`hidden md:block md:overflow-hidden md:transition-[width] md:duration-300 md:ease-in-out ${activeExp ? 'md:w-64' : 'md:w-0'}`}
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

      {/* Mobile nav overlay */}
      {activeExp && (
        <>
          <div
            className={`${styles.mobileNavOverlay} ${mobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setMobileNavOpen(false)}
          />
          <div className={`${styles.mobileNavPanel} ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <LeftNav
              experiences={experiences}
              activeId={activeId!}
              onSelect={handleSelect}
              onBack={handleBack}
            />
          </div>
        </>
      )}

      {/* Main content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          activeExp ? 'flex-1' : 'flex-1 flex items-center justify-center'
        }`}
      >
        {activeExp ? (
          <>
            {/* Mobile top bar with hamburger */}
            <div className={styles.mobileTopBar}>
              <button
                className={styles.hamburgerButton}
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open navigation"
              >
                <HamburgerIcon />
              </button>
            </div>
            <ExperienceDetail experience={activeExp} experiences={experiences} onSelect={setActiveId} />
          </>
        ) : (
          <LandingPage onSelectExp={setActiveId} />
        )}
      </div>
    </div>
  )
}
