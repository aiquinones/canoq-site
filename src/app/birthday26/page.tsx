import { BirthdayGate } from '@/components/BirthdayGate';

/**
 * The invitation is not rendered here — it arrives from /birthday26/check once
 * the password is accepted, so nothing about the party is in the page source.
 */
const Birthday26 = () => (
  <BirthdayGate
    eyebrow="Señal 31 · Acceso restringido"
    prompt="Esta transmisión es privada"
    hint="La clave viene en la invitación"
  />
);

export default Birthday26;
