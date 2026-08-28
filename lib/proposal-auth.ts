const encoder = new TextEncoder();

export const PROPOSAL_AUTH_COOKIE = "office6_proposal_access";
export const PROPOSAL_AUTH_MAX_AGE = 60 * 60 * 24 * 7;

function bytesToHex(bytes: Uint8Array) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function hexToBytes(value: string) {
  if (!/^[a-f0-9]+$/i.test(value) || value.length % 2 !== 0) return null;

  const bytes = new Uint8Array(value.length / 2);
  for (let index = 0; index < value.length; index += 2) {
    bytes[index / 2] = Number.parseInt(value.slice(index, index + 2), 16);
  }
  return bytes;
}

function constantTimeEqual(left: Uint8Array, right: Uint8Array) {
  if (left.length !== right.length) return false;

  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left[index] ^ right[index];
  }
  return difference === 0;
}

async function sha256(value: string) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
}

async function sign(payload: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
}

export function isProposalAuthConfigured() {
  return Boolean(process.env.PROPOSAL_PASSWORD && process.env.PROPOSAL_SESSION_SECRET);
}

export async function isValidProposalPassword(candidate: string) {
  const expected = process.env.PROPOSAL_PASSWORD;
  if (!expected) return false;

  const [candidateHash, expectedHash] = await Promise.all([
    sha256(candidate),
    sha256(expected),
  ]);
  return constantTimeEqual(candidateHash, expectedHash);
}

export async function createProposalAccessToken() {
  const secret = process.env.PROPOSAL_SESSION_SECRET;
  if (!secret) throw new Error("PROPOSAL_SESSION_SECRET is niet ingesteld.");

  const expiresAt = Math.floor(Date.now() / 1000) + PROPOSAL_AUTH_MAX_AGE;
  const payload = `v1.${expiresAt}`;
  const signature = bytesToHex(await sign(payload, secret));
  return `${payload}.${signature}`;
}

export async function isValidProposalAccessToken(token?: string) {
  const secret = process.env.PROPOSAL_SESSION_SECRET;
  if (!secret || !token) return false;

  const [version, expiresAtValue, signatureValue, ...rest] = token.split(".");
  if (version !== "v1" || rest.length > 0 || !/^\d+$/.test(expiresAtValue)) return false;

  const expiresAt = Number(expiresAtValue);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Math.floor(Date.now() / 1000)) {
    return false;
  }

  const signature = hexToBytes(signatureValue);
  if (!signature) return false;

  const expected = await sign(`${version}.${expiresAtValue}`, secret);
  return constantTimeEqual(signature, expected);
}

