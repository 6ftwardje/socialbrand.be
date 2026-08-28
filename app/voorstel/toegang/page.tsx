import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  isProposalAuthConfigured,
  isValidProposalAccessToken,
  PROPOSAL_AUTH_COOKIE,
} from "@/lib/proposal-auth";
import { unlockProposals } from "./actions";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Toegang tot voorstel | Office6",
  description: "Beveiligde toegang tot een vertrouwelijk Office6-voorstel.",
  robots: { index: false, follow: false, noarchive: true },
};

type AccessPageProps = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

function safeNextPath(value?: string) {
  if (!value?.startsWith("/voorstel/") || value.startsWith("/voorstel/toegang")) {
    return "/voorstel/huppa";
  }
  return value;
}

export default async function ProposalAccessPage({ searchParams }: AccessPageProps) {
  const params = await searchParams;
  const nextPath = safeNextPath(params.next);
  const token = (await cookies()).get(PROPOSAL_AUTH_COOKIE)?.value;

  if (await isValidProposalAccessToken(token)) {
    redirect(nextPath);
  }

  const configurationMissing = params.error === "config" || !isProposalAuthConfigured();
  const invalidPassword = params.error === "invalid";

  return (
    <div className={`proposal-access-page ${styles.page}`}>
      <div className={styles.art} aria-hidden>
        <span>6</span>
        <i />
      </div>

      <header className={styles.header}>
        <Link href="/" aria-label="Naar Office6">
          <Image
            src="/logos/office6-white.png"
            alt="Office6"
            width={590}
            height={104}
            priority
          />
        </Link>
        <p><LockKeyhole aria-hidden /> Beveiligde omgeving</p>
      </header>

      <main className={styles.content}>
        <p className={styles.eyebrow}>Vertrouwelijk voorstel</p>
        <h1>Dit voorstel is persoonlijk.</h1>
        <p className={styles.intro}>
          Voer het gedeelde wachtwoord in om de inhoud te bekijken. Je toegang blijft zeven dagen actief op dit toestel.
        </p>

        <form action={unlockProposals} className={styles.form}>
          <input type="hidden" name="next" value={nextPath} />
          <input type="text" name="username" value="office6" autoComplete="username" hidden readOnly />
          <label htmlFor="proposal-password">Wachtwoord</label>
          <div className={styles.fieldRow}>
            <input
              id="proposal-password"
              name="password"
              type="password"
              autoComplete="current-password"
              autoFocus
              required
              aria-describedby={invalidPassword || configurationMissing ? "access-error" : undefined}
            />
            <button type="submit" disabled={configurationMissing}>
              <span>Open voorstel</span>
              <ArrowRight aria-hidden />
            </button>
          </div>

          {invalidPassword && (
            <p id="access-error" className={styles.error} role="alert">
              Dat wachtwoord klopt niet. Probeer opnieuw.
            </p>
          )}
          {configurationMissing && (
            <p id="access-error" className={styles.error} role="alert">
              De toegang is nog niet geconfigureerd. Neem contact op met Office6.
            </p>
          )}
        </form>
      </main>

      <footer className={styles.footer}>
        <p>Enkel bestemd voor interne evaluatie.</p>
        <a href="mailto:hello@office6.be">hello@office6.be</a>
      </footer>
    </div>
  );
}
