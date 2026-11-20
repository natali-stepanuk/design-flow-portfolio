"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "../Button/Button";

export interface NavigationItem {
  /** Унікальний ідентифікатор пункту, за ним визначається активний пункт. */
  id: string;
  /** Напис пункту. */
  label: string;
  /** Адреса, куди веде пункт. */
  href: string;
}

export interface NavigationProps {
  /** Пункти меню в порядку показу. */
  items: NavigationItem[];
  /** `id` активного пункту (поточної сторінки). Якщо не задано, активного пункту немає. */
  activeId?: string;
  /** Назва меню для скрінрідера. */
  label?: string;
  /** Напис на кнопці, що відкриває меню на вузькому екрані. */
  openLabel?: string;
  /** Напис на кнопці, коли меню відкрите. */
  closeLabel?: string;
}

const itemBase =
  "group relative block w-fit rounded-control px-4 py-4 font-body text-menu " +
  "transition-colors duration-200 hover:text-accent-text " +
  "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

const itemDefault = "text-ink-muted";
const itemActive = "text-accent-text";

/**
 * Крапка активного пункту: порожній елемент із товстою межею кольору accent.
 * Межа border-3 з обох боків дає коло близько 6 px, rounded-card (більший за
 * половину розміру) робить його круглим без довільних значень.
 */
const dot =
  "pointer-events-none absolute inset-x-0 bottom-2 mx-auto size-0 rounded-card border-3 border-accent " +
  "transition-opacity duration-200";

/**
 * Навігація сайту. На широкому екрані пункти стоять у рядок. На вузькому меню
 * згортається в кнопку; відкрите меню лежить поверх контенту (не зсуває сторінку)
 * і закривається клавішею Escape, кліком поза меню або вибором пункту.
 */
export function Navigation({
  items,
  activeId,
  label = "Головне меню",
  openLabel = "Меню",
  closeLabel = "Закрити",
}: NavigationProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.querySelector("button")?.focus();
      }
    };
    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  return (
    <nav ref={rootRef} aria-label={label} className="relative">
      <div ref={toggleRef} className="md:hidden">
        <Button
          variant="secondary"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? closeLabel : openLabel}
        </Button>
      </div>

      <ul
        id={listId}
        className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full z-10 mt-2 flex-col gap-2 rounded-card border border-border-interactive bg-canvas p-2 md:static md:mt-0 md:flex md:flex-row md:gap-2 md:border-0 md:bg-transparent md:p-0`}
      >
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`${itemBase} ${isActive ? itemActive : itemDefault}`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`${dot} ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
