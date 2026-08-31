import { party } from '@/lib/birthday';

/**
 * Password check for the birthday invitation.
 *
 * The password lives in the BIRTHDAY_PASSWORD env var so it never enters this
 * (public) repo. Set it in Vercel → Settings → Environment Variables.
 *
 * The invitation copy is returned by this route rather than rendered into the
 * page, so the details do not reach the browser until the password is right —
 * otherwise the gate would only be hiding text that was already in the source.
 */
export const POST = async (request: Request): Promise<Response> => {
  const expected = process.env.BIRTHDAY_PASSWORD;

  if (!expected) {
    return Response.json({ ok: false, error: 'unconfigured' as const }, { status: 500 });
  }

  let password: unknown;
  try {
    ({ password } = await request.json());
  } catch {
    return Response.json({ ok: false, error: 'malformed' as const }, { status: 400 });
  }

  if (typeof password !== 'string') {
    return Response.json({ ok: false, error: 'malformed' as const }, { status: 400 });
  }

  if (password.trim().toLowerCase() !== expected.trim().toLowerCase()) {
    return Response.json({ ok: false }, { status: 401 });
  }

  return Response.json({ ok: true, party });
};
