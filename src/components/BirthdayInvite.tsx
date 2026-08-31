import type { Party, PartyDetail } from '@/lib/birthday';
import { Marca31 } from '@/components/Marca31';
import styles from '@/app/birthday26/birthday.module.css';

type BirthdayInviteProps = {
  party: Party;
};

/** The invitation itself, laid out as a news bulletin. */
export const BirthdayInvite = ({ party }: BirthdayInviteProps) => (
  <div className={styles.page}>
    <main className={styles.transmision}>
      <TopRail channel={party.channel} />

      <div className={styles.hero}>
        <Marca31 />
        <p className={styles.bajoMarca}>{party.tagline}</p>
      </div>

      <div className={styles.banda}>
        <b>{party.bandLabel}</b>
        <i>{party.bandHeadline}</i>
      </div>

      <article className={styles.nota}>
        <h1 className={styles.titular}>{party.headline}</h1>
        <p className={styles.bajada}>{party.standfirst}</p>

        {party.body.slice(0, 2).map((paragraph) => (
          <p key={paragraph} className={styles.cuerpo}>
            {paragraph}
          </p>
        ))}

        <p className={styles.cita}>
          {party.quote}
          <small>{party.quoteAttribution}</small>
        </p>

        {party.body.slice(2).map((paragraph) => (
          <p key={paragraph} className={styles.cuerpo}>
            {paragraph}
          </p>
        ))}
      </article>

      <DetailsBoard title={party.detailsTitle} details={party.details} />

      <p className={styles.cierre}>{party.signoff}</p>

      <BottomRail channel={party.channel} note={party.footerNote} />
    </main>
  </div>
);

const TopRail = ({ channel }: { channel: string }) => (
  <p className={styles.riel}>
    <span className={styles.vivo}>
      <span className={styles.punto} />
      En vivo
    </span>
    <span className={styles.sep}>/</span>
    <span>{channel}</span>
    <span className={styles.flexible}>Boletín especial · No toque el dial</span>
  </p>
);

const BottomRail = ({ channel, note }: { channel: string; note: string }) => (
  <p className={`${styles.riel} ${styles.rielPie}`}>
    <span>{channel}</span>
    <span className={styles.sep}>/</span>
    <span className={styles.flexible}>{note}</span>
  </p>
);

const DetailsBoard = ({ title, details }: { title: string; details: PartyDetail[] }) => (
  <section className={styles.datos} aria-labelledby="datos-titulo">
    <h2 className={styles.datosTitulo} id="datos-titulo">
      {title}
    </h2>
    <dl className={styles.datosLista}>
      {details.map((detail) => (
        <div key={detail.label} className={styles.chy}>
          <dt>{detail.label}</dt>
          <dd>{detail.value}</dd>
        </div>
      ))}
    </dl>
  </section>
);
