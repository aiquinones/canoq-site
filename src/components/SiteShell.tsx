'use client'

import { useState } from 'react'
import { LeftNav } from '@/components/LeftNav'
import { ExperienceDetail } from '@/components/ExperienceDetail'
import { LandingPage } from '@/components/LandingPage'
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
          <LandingPage onSelectExp={setActiveId} />
        )}
      </div>
    </div>
  )
}
