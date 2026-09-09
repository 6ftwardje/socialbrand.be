"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  LockKeyhole,
  Mail,
} from "lucide-react";
import { unlockPlatform } from "./actions";
import styles from "./page.module.css";

type RequestStatus = "idle" | "submitting" | "delivered" | "queued" | "error";

type PlatformAccessClientProps = {
  configurationMissing: boolean;
  invalidPassword: boolean;
};

export default function PlatformAccessClient({
  configurationMissing,
  invalidPassword,
}: PlatformAccessClientProps) {
  const [requestOpen, setRequestOpen] = useState(false);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>("idle");
  const [requestError, setRequestError] = useState("");

  async function requestAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRequestStatus("submitting");
    setRequestError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/platform-access-request", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          website: formData.get("website"),
        }),
      });

      const result = await response.json() as { ok?: boolean; delivered?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Je aanvraag kon niet worden verstuurd.");
      }

      setRequestStatus(result.delivered ? "delivered" : "queued");
      form.reset();
    } catch (error) {
      setRequestError(error instanceof Error ? error.message : "Je aanvraag kon niet worden verstuurd.");
      setRequestStatus("error");
    }
  }

  return (
    <div className={`platform-access-page ${styles.page}`}>
      <div className={styles.background} aria-hidden>
        <div className={styles.scanLine} />
        <span className={styles.orbitOne} />
        <span className={styles.orbitTwo} />
      </div>

      <header className={styles.header}>
        <Link href="/" aria-label="Naar Office6">
          <Image src="/logos/office6-white.png" alt="Office6" width={590} height={104} priority />
        </Link>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <p className={styles.eyebrow}>Office6 Platforms · beperkte toegang</p>
          <h1>Niet alles wat we bouwen staat publiek.</h1>
          <p className={styles.lead}>Bekijk hoe we expertise vertalen naar een eigen leerplatform—van courseproductie en development tot lancering.</p>

        </section>

        <section className={styles.accessPanel} aria-labelledby="access-title">
          <div className={styles.accessContent}>
            <span className={styles.lockIcon}><LockKeyhole /></span>
            <p className={styles.panelEyebrow}>Access required</p>
            <h2 id="access-title">Voer je toegangscode in.</h2>
            <p>Je toegang blijft zeven dagen actief op dit toestel.</p>

            <form action={unlockPlatform} className={styles.codeForm}>
              <input type="text" name="username" value="office6-platforms" autoComplete="username" hidden readOnly />
              <label htmlFor="platform-password">Toegangscode</label>
              <div className={styles.codeField}>
                <input
                  id="platform-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  required
                  autoFocus
                  disabled={configurationMissing}
                  aria-describedby={invalidPassword || configurationMissing ? "platform-access-error" : undefined}
                />
                <button type="submit" disabled={configurationMissing} aria-label="Open platformpreview">
                  <ArrowRight />
                </button>
              </div>
              {invalidPassword && <p id="platform-access-error" className={styles.error} role="alert">Die code klopt niet. Probeer opnieuw.</p>}
              {configurationMissing && <p id="platform-access-error" className={styles.error} role="alert">De toegang is nog niet geconfigureerd. Neem contact op met Office6.</p>}
            </form>
          </div>

          <div className={styles.requestArea}>
            <button
              type="button"
              className={styles.requestToggle}
              aria-expanded={requestOpen}
              aria-controls="platform-access-request"
              onClick={() => setRequestOpen((open) => !open)}
            >
              <span><Mail /><span><strong>Geen code?</strong><small>Vraag toegang tot de private preview.</small></span></span>
              <ArrowRight className={requestOpen ? styles.requestArrowOpen : ""} />
            </button>

            <div id="platform-access-request" className={`${styles.requestReveal} ${requestOpen ? styles.requestRevealOpen : ""}`}>
              <div>
                {requestStatus === "delivered" || requestStatus === "queued" ? (
                  <div className={styles.requestSuccess} role="status">
                    <span><Check /></span>
                    <div>
                      <strong>{requestStatus === "delivered" ? "Code onderweg." : "Aanvraag ontvangen."}</strong>
                      <p>{requestStatus === "delivered" ? "Check je inbox. Je ontvangt de toegang normaal binnen enkele minuten." : "We bekijken je aanvraag en bezorgen de code persoonlijk via e-mail."}</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={requestAccess} className={styles.requestForm}>
                    <div className={styles.formGrid}>
                      <label><span>Naam</span><input name="name" type="text" autoComplete="name" required placeholder="Voor- en achternaam" /></label>
                      <label><span>Werkmail</span><input name="email" type="email" autoComplete="email" required placeholder="naam@bedrijf.be" /></label>
                    </div>
                    <label><span>Bedrijf <em>optioneel</em></span><input name="company" type="text" autoComplete="organization" placeholder="Naam van je bedrijf" /></label>
                    <label className={styles.honeypot} aria-hidden><span>Website</span><input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
                    <button type="submit" disabled={requestStatus === "submitting"}>
                      {requestStatus === "submitting" ? "Even versturen…" : "Stuur mij de code"}<ArrowRight />
                    </button>
                    {requestStatus === "error" && <p className={styles.error} role="alert">{requestError}</p>}
                    <small className={styles.privacy}>Alleen gebruikt voor deze aanvraag. Geen nieuwsbrief.</small>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Custom platforms · course production · growth</span>
        <a href="mailto:hello@office6.be">hello@office6.be</a>
      </footer>
    </div>
  );
}
