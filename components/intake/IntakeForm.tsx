"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
  initialIntakeData,
  FORMSPREE_INTAKE_ENDPOINT,
  TOTAL_FORM_STEPS,
  brandTypeOptions,
  marketingPartnersOptions,
  teamSizeOptions,
  revenueRangeOptions,
  type IntakeData,
} from "@/lib/intake-types";
import { isStepValid, getStepValidationMessage } from "@/lib/intake-validation";
import ProgressBar from "./ProgressBar";
import StepContainer from "./StepContainer";
import TextField from "./TextField";
import ChipMultiSelect from "./ChipMultiSelect";
import RadioCardGroup from "./RadioCardGroup";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function IntakeForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<IntakeData>(initialIntakeData);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [attemptedNext, setAttemptedNext] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  const canGoNext = isStepValid(step, data);
  const isLastStep = step === TOTAL_FORM_STEPS;
  const progressPercent = step === 1 ? 0 : (step / TOTAL_FORM_STEPS) * 100;
  const validationMessage =
    attemptedNext && !canGoNext ? getStepValidationMessage(step, data) : null;

  const goNext = useCallback(() => {
    if (!isStepValid(step, data)) {
      setAttemptedNext(true);
      return;
    }
    setAttemptedNext(false);
    if (isLastStep) {
      handleSubmit();
      return;
    }
    setStep((s) => s + 1);
  }, [step, data, isLastStep]);

  const goBack = useCallback(() => {
    setAttemptedNext(false);
    if (step > 1) setStep((s) => s - 1);
  }, [step]);

  async function handleSubmit() {
    setSubmitStatus("submitting");
    try {
      const payload = {
        ...data,
        meta: {
          submittedAt: new Date().toISOString(),
          source: "website_intake",
        },
      };
      const res = await fetch(FORMSPREE_INTAKE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  }

  useEffect(() => {
    const container = stepRef.current;
    if (!container) return;
    const input = container.querySelector<HTMLElement>("input:not([disabled])");
    const firstFocusable = container.querySelector<HTMLElement>(
      "button, [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex=\"-1\"])"
    );
    (input ?? firstFocusable)?.focus();
  }, [step]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      goNext();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      goBack();
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-12">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
            Dankjewel — we nemen binnen 24 uur contact op.
          </h1>
          <p className="mt-4 text-[var(--foreground-muted)]">
            We hebben je antwoorden ontvangen en nemen zo snel mogelijk contact met je op.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex min-h-[100dvh] flex-col overflow-y-auto"
      onKeyDown={onKeyDown}
      role="form"
      aria-label="Intake formulier"
    >
      <div className="shrink-0 px-6 pt-6 md:pt-8">
        <div className="mx-auto flex max-w-xl items-center">
          <Link
            href="/"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] focus:outline-none focus:underline shrink-0"
          >
            ← Terug naar home
          </Link>
          <div className="flex-1 flex justify-center min-w-0">
            <ProgressBar percentage={progressPercent} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-6 md:py-8">
        <div ref={stepRef} className="w-full max-w-xl">
          <StepContainer stepIndex={step}>
            <button
              type="button"
              onClick={goBack}
              className="mb-6 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] focus:outline-none focus:underline disabled:pointer-events-none disabled:opacity-40"
              disabled={step === 1}
              aria-label="Vorige vraag"
            >
              ← Terug
            </button>

            {step === 1 && (
              <>
                <h2 className="text-xl font-bold text-[var(--foreground)] md:text-2xl">
                  Naam
                </h2>
                <div className="mt-6">
                  <TextField
                    id="intake-fullName"
                    label="Volledige naam"
                    type="text"
                    placeholder="Je volledige naam"
                    value={data.fullName}
                    onChange={(v) => setData((d) => ({ ...d, fullName: v }))}
                    required
                    autoFocus
                    autoComplete="name"
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-bold text-[var(--foreground)] md:text-2xl">
                  E-mail
                </h2>
                <div className="mt-6">
                  <TextField
                    id="intake-email"
                    label="E-mailadres"
                    type="email"
                    placeholder="jouw@email.be"
                    value={data.email}
                    onChange={(v) => setData((d) => ({ ...d, email: v }))}
                    required
                    autoFocus
                    autoComplete="email"
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-xl font-bold text-[var(--foreground)] md:text-2xl">
                  Telefoon
                </h2>
                <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                  Optioneel
                </p>
                <div className="mt-6">
                  <TextField
                    id="intake-phone"
                    label="Telefoonnummer"
                    type="tel"
                    placeholder="+32 ..."
                    value={data.phone}
                    onChange={(v) => setData((d) => ({ ...d, phone: v }))}
                    autoFocus
                    autoComplete="tel"
                  />
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="text-xl font-bold text-[var(--foreground)] md:text-2xl">
                  Wat is je brand?
                </h2>
                <div className="mt-6">
                  <ChipMultiSelect
                    id="intake-brandType"
                    label="Kies één of meer"
                    options={brandTypeOptions}
                    value={data.brandType}
                    onChange={(v) => setData((d) => ({ ...d, brandType: v }))}
                    otherValue={data.brandTypeOther}
                    onOtherChange={(v) =>
                      setData((d) => ({ ...d, brandTypeOther: v }))
                    }
                    otherPlaceholder="Specifieer"
                    autoFocus
                  />
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <h2 className="text-xl font-bold text-[var(--foreground)] md:text-2xl">
                  Heb je al marketingpartners?
                </h2>
                <div className="mt-6">
                  <ChipMultiSelect
                    id="intake-marketingPartners"
                    label="Kies één of meer"
                    options={marketingPartnersOptions}
                    value={data.marketingPartners}
                    onChange={(v) =>
                      setData((d) => ({ ...d, marketingPartners: v }))
                    }
                    otherValue={data.marketingPartnersOther}
                    onOtherChange={(v) =>
                      setData((d) => ({ ...d, marketingPartnersOther: v }))
                    }
                    otherPlaceholder="Specifieer"
                    autoFocus
                  />
                </div>
              </>
            )}

            {step === 6 && (
              <>
                <h2 className="text-xl font-bold text-[var(--foreground)] md:text-2xl">
                  Teamgrootte
                </h2>
                <div className="mt-6">
                  <RadioCardGroup
                    id="intake-teamSize"
                    name="teamSize"
                    label="Kies één optie"
                    options={teamSizeOptions}
                    value={data.teamSize}
                    onChange={(v) => setData((d) => ({ ...d, teamSize: v }))}
                    otherValue={data.teamSizeOther}
                    onOtherChange={(v) =>
                      setData((d) => ({ ...d, teamSizeOther: v }))
                    }
                    otherPlaceholder="Specifieer"
                    autoFocus
                  />
                </div>
              </>
            )}

            {step === 7 && (
              <>
                <h2 className="text-xl font-bold text-[var(--foreground)] md:text-2xl">
                  Jaaromzet
                </h2>
                <div className="mt-6">
                  <RadioCardGroup
                    id="intake-revenueRange"
                    name="revenueRange"
                    label="Kies één optie"
                    options={revenueRangeOptions}
                    value={data.revenueRange}
                    onChange={(v) =>
                      setData((d) => ({ ...d, revenueRange: v }))
                    }
                    otherValue={data.revenueOther}
                    onOtherChange={(v) =>
                      setData((d) => ({ ...d, revenueOther: v }))
                    }
                    otherPlaceholder="Specifieer"
                    autoFocus
                  />
                </div>
              </>
            )}
          </StepContainer>
        </div>
      </div>

      <div className="shrink-0 border-t border-zinc-800/60 px-6 py-5 bg-[var(--background)]">
        <div className="mx-auto max-w-xl flex flex-col items-end gap-1">
          {validationMessage && (
            <p className="w-full text-sm text-amber-400/90" role="alert">
              {validationMessage}
            </p>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goNext();
            }}
            disabled={submitStatus === "submitting"}
            className="w-full rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto cursor-pointer"
          >
            {submitStatus === "submitting"
              ? "Versturen…"
              : isLastStep
                ? "Versturen"
                : "Volgende"}
          </button>
          <p className="text-xs text-[var(--foreground-muted)]">
            Enter ↵ om verder te gaan
          </p>
        </div>
        {submitStatus === "error" && (
          <p className="mt-3 text-sm text-zinc-400" role="alert">
            Er ging iets mis. Probeer opnieuw.
          </p>
        )}
      </div>
    </div>
  );
}
