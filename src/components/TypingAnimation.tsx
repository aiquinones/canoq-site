'use client'

import { useEffect, useState } from 'react'

const WORDS = ['software engineer', 'NLP researcher', 'builder', 'language nerd']

type Phase = 'typing' | 'pausing' | 'deleting'

export const TypingAnimation = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')

  const word = WORDS[wordIndex]

  useEffect(() => {
    if (phase === 'typing') {
      if (charIndex < word.length) {
        const t = setTimeout(() => setCharIndex(c => c + 1), 80)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('deleting'), 1800)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (charIndex > 0) {
        const t = setTimeout(() => setCharIndex(c => c - 1), 40)
        return () => clearTimeout(t)
      }
      setWordIndex(i => (i + 1) % WORDS.length)
      setPhase('typing')
    }
  }, [phase, charIndex, word])

  return (
    <span>
      {word.slice(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  )
}
