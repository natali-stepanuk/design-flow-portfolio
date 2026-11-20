import { useId } from "react";
import type { ButtonHTMLAttributes, MouseEvent } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "md" | "lg";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  /** Вигляд: `primary` — на кольорі accent, `secondary` — без заливки, з межею. */
  variant?: ButtonVariant;
  /** Розмір: `md` — звичайний, `lg` — великий. */
  size?: ButtonSize;
  /** Вимкнена кнопка. Лишається у фокусі (aria-disabled), але не спрацьовує на клік. */
  disabled?: boolean;
  /** Пояснення під вимкненою кнопкою, чому вона недоступна. Зв'язане через aria-describedby. */
  disabledReason?: string;
}

const base =
  "inline-flex items-center justify-center rounded-control border font-body text-button " +
  "cursor-pointer transition-colors " +
  "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus-ring " +
  "aria-disabled:cursor-not-allowed aria-disabled:border-line aria-disabled:bg-surface aria-disabled:text-ink-muted";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-accent-text bg-accent text-on-accent " +
    "not-aria-disabled:hover:bg-accent/80 not-aria-disabled:hover:underline",
  secondary:
    "border-ink-muted bg-transparent text-ink-muted " +
    "not-aria-disabled:hover:bg-surface not-aria-disabled:hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

/**
 * Кнопка дизайн-системи. Два варіанти (`primary`, `secondary`), два розміри (`md`, `lg`).
 * Вимкнена кнопка робиться через `aria-disabled`, тож її можна досягти клавіатурою,
 * а пояснення (`disabledReason`) читає скрінрідер.
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  disabledReason,
  type = "button",
  className = "",
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const reasonId = useId();
  const showReason = disabled && Boolean(disabledReason);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        {...rest}
        type={type}
        aria-disabled={disabled || undefined}
        aria-describedby={showReason ? reasonId : rest["aria-describedby"]}
        onClick={handleClick}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()}
      >
        {children}
      </button>
      {showReason ? (
        <p id={reasonId} className="font-body text-card-caption text-ink-muted">
          {disabledReason}
        </p>
      ) : null}
    </div>
  );
}
