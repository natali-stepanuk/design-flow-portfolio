import { useId } from "react";
import type { InputHTMLAttributes } from "react";

export interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "aria-invalid"> {
  /** Підпис над полем. Обов'язковий: поле без підпису недоступне для скрінрідера. */
  label: string;
  /** Текст помилки. Якщо заданий, поле в стані помилки: межа danger, іконка й текст під полем. */
  error?: string;
  /** Вимкнене поле. */
  disabled?: boolean;
}

const input =
  "w-full rounded-control border bg-canvas px-4 py-3 font-body text-menu text-ink " +
  "transition-colors placeholder:text-ink-muted " +
  "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus-ring " +
  "disabled:cursor-not-allowed disabled:border-line disabled:bg-surface disabled:text-ink-muted " +
  "aria-invalid:border-danger " +
  "not-aria-invalid:border-ink-muted not-aria-invalid:not-disabled:hover:border-ink";

function ErrorIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.5v4" />
      <path d="M8 11.25v.01" />
    </svg>
  );
}

/**
 * Текстове поле форми з підписом над ним. Стани: default, hover, focus,
 * заповнене, помилка, disabled. Помилка зв'язана з полем через aria-describedby.
 */
export function FormField({
  label,
  error,
  disabled = false,
  type = "text",
  className = "",
  ...rest
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="font-body text-menu text-ink">
        {label}
      </label>
      <input
        {...rest}
        id={id}
        type={type}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : rest["aria-describedby"]}
        className={`${input} ${className}`.trim()}
      />
      {hasError ? (
        <p
          id={errorId}
          className="flex items-center gap-2 font-body text-card-caption text-danger"
        >
          <ErrorIcon />
          {error}
        </p>
      ) : null}
    </div>
  );
}
