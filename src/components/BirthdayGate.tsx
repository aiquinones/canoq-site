'use client';

import { useEffect, useRef, useState } from 'react';
import { BirthdayInvite } from '@/components/BirthdayInvite';
import type { Party } from '@/lib/birthday';
import styles from '@/app/birthday26/gate.module.css';

type Phase = 'locked' | 'checking' | 'opening' | 'open';

const OPEN_ANIMATION_MS = 1250;

type BirthdayGateProps = {
  eyebrow: string;
  prompt: string;
  hint: string;
};

/**
 * Password gate for the invitation.
 *
 * The invitation is not in the page source — it comes back from the check
 * route with the accepted password. It mounts in the same commit that starts
 * the doors moving, so the panels slide off content that is already there and
 * the reveal reads as a curtain rather than a swap.
 */
export const BirthdayGate = ({ eyebrow, prompt, hint }: BirthdayGateProps) => {
  const [phase, setPhase] = useState<Phase>('locked');
  const [party, setParty] = useState<Party | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (phase !== 'opening') return;
    const timer = setTimeout(() => setPhase('open'), OPEN_ANIMATION_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (phase === 'checking' || !password.trim()) return;

    setPhase('checking');
    setError(null);

    const response = await fetch('/birthday26/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    }).catch(() => null);

    const payload = response?.ok ? await response.json().catch(() => null) : null;

    if (payload?.ok && payload.party) {
      setParty(payload.party as Party);
      setPhase('opening');
      return;
    }

    setPhase('locked');
    setError(
      response?.status === 500 ? 'Señal caída. Avisar a Cano.' : 'Clave incorrecta. Reintente.',
    );
    setPassword('');
    inputRef.current?.focus();
  };

  const isOpen = phase === 'open';

  return (
    <>
      {party && (
        <div aria-hidden={!isOpen} inert={!isOpen ? true : undefined}>
          <BirthdayInvite party={party} />
        </div>
      )}

      {!isOpen && (
        <div className={phase === 'opening' ? styles.opening : undefined}>
          <div className={styles.gate} aria-hidden="true">
            <div className={`${styles.panel} ${styles.panelLeft}`} />
            <div className={`${styles.panel} ${styles.panelRight}`} />
          </div>

          <div className={styles.console}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 className={styles.prompt}>{prompt}</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="clave">
                Clave de acceso
              </label>
              <input
                id="clave"
                ref={inputRef}
                className={styles.input}
                type="password"
                value={password}
                placeholder="clave"
                autoComplete="off"
                onChange={(event) => setPassword(event.target.value)}
              />
              <button className={styles.button} type="submit" disabled={phase === 'checking'}>
                {phase === 'checking' ? 'Verificando' : 'Entrar'}
              </button>
            </form>

            {error && (
              <p className={styles.error} role="alert">
                {error}
              </p>
            )}

            <p className={styles.hint}>{hint}</p>
          </div>
        </div>
      )}
    </>
  );
};
