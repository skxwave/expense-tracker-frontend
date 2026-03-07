interface JwtPayload {
  exp?: number;
  [key: string]: unknown;
}

// JWT uses base64url (RFC 4648): '-' instead of '+', '_' instead of '/',
// and no padding. atob() requires standard base64 with padding.
function decodeBase64Url(base64url: string): string {
  const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, '=');
  return atob(padded);
}

export function isTokenValid(token: string | null): boolean {
  if (!token) return false;

  const parts = token.split('.');
  if (parts.length !== 3) return false;

  try {
    const payload: JwtPayload = JSON.parse(decodeBase64Url(parts[1]));
    if (!payload.exp) return false;
    // exp is in seconds, Date.now() is in milliseconds
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}
