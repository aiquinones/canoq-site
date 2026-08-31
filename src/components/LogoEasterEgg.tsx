'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from '@/app/birthday26/rumbling.module.css';

const CLICKS_NEEDED = 5;
const CLICK_WINDOW_MS = 5000;
const HOLD_MS = 2600;
const EXIT_MS = 420;

type Phase = 'hidden' | 'showing' | 'leaving';

type LogoEasterEggProps = {
  label: string;
  children: React.ReactNode;
};

/**
 * Five clicks on the logo inside five seconds and the painting drops in.
 *
 * The arrival and the shake live on two nested elements so they compose
 * instead of overwriting each other's transform — the painting is already
 * rumbling while it is still easing in.
 */
export const LogoEasterEgg = ({ label, children }: LogoEasterEggProps) => {
  const [phase, setPhase] = useState<Phase>('hidden');
  const clicks = useRef<number[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const handleClick = useCallback(() => {
    // Ignore clicks while it is on screen; it can be triggered again once gone.
    if (phase !== 'hidden') return;

    const now = Date.now();
    clicks.current = [...clicks.current, now].filter(
      (time) => now - time <= CLICK_WINDOW_MS,
    );

    if (clicks.current.length < CLICKS_NEEDED) return;

    clicks.current = [];
    setPhase('showing');
    timers.current.push(
      setTimeout(() => setPhase('leaving'), HOLD_MS),
      setTimeout(() => setPhase('hidden'), HOLD_MS + EXIT_MS),
    );
  }, [phase]);

  const leaving = phase === 'leaving';

  return (
    <div className={styles.hitboxHost}>
      {children}

      <button
        type="button"
        className={styles.hitbox}
        onClick={handleClick}
        aria-label={label}
      />

      {phase !== 'hidden' && (
        <div
          className={`${styles.overlay} ${leaving ? styles.overlayLeaving : ''}`}
          aria-hidden="true"
        >
          <div className={leaving ? styles.arrivalLeaving : styles.arrival}>
            <div className={styles.shake}>
              <Image
                className={styles.backdrop}
                src="/rumbling-tulio.jpeg"
                alt=""
                fill
                sizes="100vw"
                priority
              />
              <Image
                className={styles.painting}
                src="/rumbling-tulio.jpeg"
                alt=""
                fill
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
