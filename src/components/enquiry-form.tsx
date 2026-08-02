"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Icon } from "@/components/icons";
import { Honeypot } from "@/components/form-fields";
import { buttonClass } from "@/components/ui";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Wraps any set of form fields with submit handling, inline validation
 * feedback and a success state. Fields are read straight from FormData,
 * so each page can compose whatever inputs it needs.
 */
export function EnquiryForm({
  kind,
  submitLabel,
  successTitle,
  successBody,
  consent,
  children,
}: {
  kind: "quote" | "contact" | "careers" | "interest";
  submitLabel: string;
  successTitle: string;
  successBody: string;
  /** Replaces the default privacy line under the submit button. */
  consent?: string;
  children: ReactNode;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    // Collapse repeated keys (checkbox groups) into one comma-separated value,
    // which Object.fromEntries would otherwise silently discard.
    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};
    for (const key of new Set(formData.keys())) {
      data[key] = formData
        .getAll(key)
        .map((value) => String(value).trim())
        .filter(Boolean)
        .join(", ");
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setError("We could not reach the server. Please check your connection or call us.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-card border border-brand-500/40 bg-white p-8 text-center shadow-lift"
      >
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-500/15 text-brand-600">
          <Icon name="check" className="size-7" strokeWidth={2.4} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink-900">{successTitle}</h3>
        <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-ink-900/65">
          {successBody}
        </p>
        <a href={site.phoneHref} className={buttonClass({ variant: "outline", className: "mt-6" })}>
          <Icon name="phone" className="size-4 text-brand-600" />
          Or call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-card border border-ink-900/10 bg-white p-6 shadow-lift sm:p-8"
    >
      <Honeypot />

      <div className="grid gap-5 sm:grid-cols-2">{children}</div>

      {error ? (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <Icon name="close" className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 border-t border-ink-900/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-xs leading-relaxed text-ink-900/50">
          {consent ?? (
            <>
              We use your details only to respond to this enquiry. Fields marked{" "}
              <span className="text-brand-600">*</span> are required.
            </>
          )}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className={buttonClass({ size: "lg", className: "shrink-0" })}
        >
          {status === "sending" ? (
            <>
              <span
                aria-hidden
                className="size-4 animate-spin rounded-full border-2 border-ink-950/25 border-t-ink-950"
              />
              Sending…
            </>
          ) : (
            <>
              {submitLabel}
              <Icon name="arrow" className="size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
