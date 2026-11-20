import Image from "next/image";
import type { StaticImageData } from "next/image";

export interface PortraitProps {
  /** Фото з прозорим фоном, імпортоване з теки `assets`. */
  src: StaticImageData;
  /** Опис фото для скрінрідера. */
  alt: string;
  /** Віддзеркалити фото по горизонталі (сам файл не змінюється). */
  mirrored?: boolean;
  /** Пріоритетне завантаження: `true` для фото на першому екрані. */
  priority?: boolean;
}

/**
 * Портрет на першому екрані: фото з прозорим фоном лежить прямо на `canvas`, без
 * картки, підкладки, рамки й тіні. Нижній край плавно розчиняється у фон
 * (стилі `.portrait` у `globals.css`, межі задають токени `--portrait-fade-from`
 * і `--container-portrait`).
 */
export function Portrait({
  src,
  alt,
  mirrored = false,
  priority = false,
}: PortraitProps) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      sizes="(min-width: 1024px) 45vw, 100vw"
      className={`portrait mx-auto h-auto w-full max-w-portrait lg:mr-0 lg:ml-auto ${mirrored ? "-scale-x-100" : ""}`.trim()}
    />
  );
}
