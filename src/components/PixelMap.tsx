'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import type { Experience } from '@/lib/experiences'
import { styles } from '@/lib/styles'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'

type Props = {
  experiences: Experience[]
  activeId: string
  onSelect: (id: string) => void
}

export const PixelMap = ({ experiences, activeId, onSelect }: Props) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className={styles.detailMapPane}>
      <ComposableMap
        width={400}
        height={600}
        style={{ width: '100%', height: '100%' }}
        projection="geoMercator"
        projectionConfig={{ center: [-90, 10], scale: 260 }}
      >
        <defs>
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="9"
            height="9"
            patternUnits="userSpaceOnUse"
          >
            <rect x="2" y="2" width="5" height="5" fill="#d1d5db" />
          </pattern>
        </defs>

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#dot-pattern)"
                stroke="none"
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none', fill: 'url(#dot-pattern)' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {experiences.map((exp) => {
          const isActive = exp.id === activeId
          const isHovered = exp.id === hoveredId
          // flip tooltip left for pins on the right half of the Americas
          const tooltipFlip = exp.location.lon > -85

          return (
            <Marker
              key={exp.id}
              coordinates={[exp.location.lon, exp.location.lat]}
              onClick={() => onSelect(exp.id)}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ default: { cursor: 'pointer' }, hover: { cursor: 'pointer' }, pressed: {} }}
            >
              {/* Outer glow ring */}
              <circle
                r={isActive ? 14 : 10}
                fill={isActive ? 'rgba(96, 165, 250, 0.25)' : 'rgba(147, 197, 253, 0.2)'}
              />
              {/* Main pin */}
              <circle
                r={isActive ? 7 : 5}
                fill={isActive ? 'rgba(96, 165, 250, 0.9)' : 'rgba(147, 197, 253, 0.7)'}
              />

              {isHovered && (
                <g transform={tooltipFlip ? 'translate(-216, -48)' : 'translate(20, -48)'}>
                  <rect
                    width="200"
                    height="68"
                    rx="6"
                    fill="white"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                  />
                  <text
                    x="12"
                    y="26"
                    fontSize="18"
                    fontWeight="600"
                    fill="#111827"
                    style={{ fontFamily: 'var(--font-geist-sans, system-ui)' }}
                  >
                    {exp.title}
                  </text>
                  <text
                    x="12"
                    y="50"
                    fontSize="14"
                    fill="#9ca3af"
                    style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    {exp.tag}
                  </text>
                </g>
              )}
            </Marker>
          )
        })}
      </ComposableMap>
    </div>
  )
}
