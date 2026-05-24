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
          <pattern id="dot-pattern" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
            <rect x="2.5" y="2.5" width="5" height="5" fill="#d1d5db" />
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

        {experiences.map((exp) => (
          <PixelMapMarker
            key={exp.id}
            exp={exp}
            isActive={exp.id === activeId}
            isHovered={exp.id === hoveredId}
            onSelect={onSelect}
            onHover={setHoveredId}
          />
        ))}
      </ComposableMap>
    </div>
  )
}

type MarkerProps = {
  exp: Experience
  isActive: boolean
  isHovered: boolean
  onSelect: (id: string) => void
  onHover: (id: string | null) => void
}

const PixelMapMarker = ({ exp, isActive, isHovered, onSelect, onHover }: MarkerProps) => {
  const tooltipFlip = exp.location.lon > -85

  return (
    <Marker
      coordinates={[exp.location.lon, exp.location.lat]}
      onClick={() => onSelect(exp.id)}
      onMouseEnter={() => onHover(exp.id)}
      onMouseLeave={() => onHover(null)}
      style={{ default: { cursor: 'pointer' }, hover: { cursor: 'pointer' }, pressed: {} }}
    >
      {/* Radar ring */}
      <circle fill="rgba(220, 38, 38, 0.5)">
        <animate attributeName="r" from={isActive ? 8 : 6} to={isActive ? 24 : 20} dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Main pin */}
      <circle
        r={isActive ? 7 : 5}
        fill={isActive ? 'rgba(220, 38, 38, 0.95)' : 'rgba(220, 38, 38, 0.65)'}
      />

      {/* Tooltip */}
      {isHovered && (
        <g transform={tooltipFlip ? 'translate(-216, -48)' : 'translate(20, -48)'}>
          <rect width="200" height="68" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
          <text x="12" y="26" fontSize="18" fontWeight="600" fill="#111827" style={{ fontFamily: 'var(--font-geist-sans, system-ui)' }}>
            {exp.title}
          </text>
          <text x="12" y="50" fontSize="14" fill="#9ca3af" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
            {exp.tag}
          </text>
        </g>
      )}
    </Marker>
  )
}
