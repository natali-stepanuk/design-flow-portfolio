import Image from "next/image";
import type { StaticImageData } from "next/image";

export interface WorkCardProps {
  /** Назва роботи. */
  title: string;
  /** Короткий опис роботи, один-два речення. */
  description: string;
  /** Обкладинка: картинка, імпортована з теки `assets`. Без неї показується порожня підкладка. */
  cover?: StaticImageData;
  /** Опис обкладинки для скрінрідера. Порожній рядок, якщо картинка суто декоративна. */
  coverAlt?: string;
  /** Адреса сторінки роботи. Уся картка є посиланням. */
  href: string;
}

/**
 * Картка роботи: обкладинка, назва й короткий опис. Уся картка — одне посилання.
 * Стани: default, hover (світліша підкладка й підкреслена назва), focus з клавіатури (контур).
 */
export function WorkCard({
  title,
  description,
  cover,
  coverAlt = "",
  href,
}: WorkCardProps) {
  return (
    <a
      href={href}
      className={
        "group flex flex-col overflow-hidden rounded-card bg-surface font-body text-ink " +
        "transition-colors hover:bg-card-1 " +
        "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
      }
    >
      <div className="relative aspect-cover w-full bg-card-inner-1">
        {cover ? (
          <Image
            src={cover}
            alt={coverAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-card-title group-hover:underline">{title}</h3>
        <p className="text-card-caption text-ink-muted">{description}</p>
      </div>
    </a>
  );
}
