import styles from '@/app/birthday26/birthday.module.css';

/**
 * The "31 años" lockup, redrawn as vector paths.
 *
 * The numerals in the 31 minutos mark are custom lettering rather than a
 * typeface, so they are hand-built here: each glyph is one path painted twice —
 * a thick dark stroke with a thinner yellow stroke over the same path — which
 * produces the tube-with-an-inner-line look. The eyes are painted last so they
 * sit on top of the yellow line and read as beads threaded onto the tube.
 */
export const Marca31 = () => (
  <div className={styles.lockup}>
    <svg className={styles.marca} viewBox="27 4 297 204" role="img" aria-labelledby="marca31-title">
      <title id="marca31-title">31</title>
      <defs>
        <path
          id="tres"
          d="M 56 66 C 58 40 84 24 112 24 C 144 24 166 44 166 70 C 166 94 148 106 112 106 C 150 106 172 120 172 146 C 172 174 146 188 112 188 C 84 188 60 176 52 152"
        />
        <path id="uno" d="M 236 84 C 244 56 258 32 276 26 C 292 21 302 30 302 50 L 302 186" />
        <g id="ojo">
          <circle r="23" fill="#14110B" />
          <circle r="17" fill="#FFFFFF" />
          <circle r="8" fill="#14110B" />
        </g>
      </defs>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <use href="#tres" stroke="#14110B" strokeWidth="36" />
        <use href="#uno" stroke="#14110B" strokeWidth="36" />
        <use href="#tres" stroke="#FAD13E" strokeWidth="10" />
        <use href="#uno" stroke="#FAD13E" strokeWidth="10" />
      </g>

      <use href="#ojo" x="56" y="66" />
      <use href="#ojo" x="112" y="106" />
      <use href="#ojo" x="52" y="152" />
      <use href="#ojo" x="236" y="84" />
    </svg>

    <svg className={styles.wordmark} viewBox="0 0 297 70" role="img" aria-label="Años">
      <text x="2" y="62" textLength="291" lengthAdjust="spacing">
        AÑOS
      </text>
    </svg>
  </div>
);
