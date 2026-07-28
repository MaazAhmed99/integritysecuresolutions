import type { ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import type { InputHTMLAttributes } from "react";

const control =
  "w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-900/35 hover:border-ink-900/30 focus:border-gold-500 focus:outline-none focus:ring-4 focus:ring-gold-500/15 disabled:opacity-60";

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-900">
      {children}
      {required ? (
        <span aria-hidden className="ml-0.5 text-gold-600">
          *
        </span>
      ) : null}
    </label>
  );
}

export function Field({
  id,
  label,
  hint,
  className = "",
  required,
  ...rest
}: { id: string; label: string; hint?: string; className?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input id={id} name={id} required={required} className={control} {...rest} />
      {hint ? <p className="mt-1.5 text-xs text-ink-900/50">{hint}</p> : null}
    </div>
  );
}

export function TextArea({
  id,
  label,
  hint,
  className = "",
  required,
  ...rest
}: { id: string; label: string; hint?: string; className?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <textarea id={id} name={id} required={required} rows={5} className={control} {...rest} />
      {hint ? <p className="mt-1.5 text-xs text-ink-900/50">{hint}</p> : null}
    </div>
  );
}

export function Select({
  id,
  label,
  options,
  className = "",
  required,
  placeholder = "Please choose…",
  ...rest
}: {
  id: string;
  label: string;
  options: readonly string[];
  className?: string;
  placeholder?: string;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <select id={id} name={id} required={required} defaultValue="" className={control} {...rest}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/** Off-screen field that only bots fill in. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
