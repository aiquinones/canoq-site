export type PartyDetail = {
  label: string;
  value: string;
};

export type Party = {
  channel: string;
  tagline: string;
  bandLabel: string;
  bandHeadline: string;
  headline: string;
  standfirst: string;
  body: string[];
  quote: string;
  quoteAttribution: string;
  detailsTitle: string;
  details: PartyDetail[];
  signoff: string;
  footerNote: string;
};

/**
 * Source of truth for the invitation. Edit the copy here, never in the
 * components — the components only know how to lay it out.
 */
export const party: Party = {
  channel: 'Señal 31',
  tagline: 'El noticiero de un solo tema',
  bandLabel: 'Nota exclusiva',
  bandHeadline: 'Última hora desde el lugar de los hechos',
  headline: 'Ciudadano completa 31 vueltas al sol y pide testigos',
  standfirst:
    'El hecho está programado. Habrá torta, sillas insuficientes y un parlante prestado. Nuestro equipo ya se encuentra en el sitio, comiendo.',
  body: [
    'Buenas noches. Interrumpimos la programación habitual —que tampoco venía muy entretenida— para confirmar una noticia que veníamos anticipando desde hace exactamente doce meses: Cano cumple 31 años, y esta vez piensa hacerlo delante de gente.',
    'Nuestro corresponsal llegó temprano al domicilio y constató lo siguiente: una mesa más chica de lo prudente, hielo comprado con un optimismo que la evidencia no respalda, y un parlante que pertenece a un vecino que todavía no lo sabe. La torta existe. El número exacto de velas permanece bajo revisión del departamento de prensa, que pidió no adelantar cifras.',
    'Consultados los vecinos, ninguno quiso referirse al tema, aunque tres de ellos preguntaron a qué hora empezaba. Se descarta por ahora la presencia de payasos. Se confirma, en cambio, que alguien va a poner esa canción y que nadie va a poder impedirlo.',
    'Se solicita su presencia en el lugar de los hechos. Los datos operativos aparecen a continuación, en pantalla, como corresponde a una nota de esta magnitud.',
  ],
  quote: '«Vengan nomás, yo veo cómo lo resuelvo»',
  quoteAttribution: 'Declaración del homenajeado, minutos antes de volver a lo suyo',
  detailsTitle: 'Datos de la nota',
  details: [
    { label: 'Fecha', value: 'Viernes 11 de septiembre' },
    { label: 'Hora', value: '7:00 PM' },
    { label: 'Lugar', value: 'Casa de Cano' },
    { label: 'Tenida y encargos', value: 'Jeans day' },
  ],
  signoff:
    'Informó el departamento de prensa de Señal 31 desde el lugar de los hechos. Volvemos a estudios.',
  footerNote: 'Esta nota se autodestruye cuando se acaba la torta',
};
