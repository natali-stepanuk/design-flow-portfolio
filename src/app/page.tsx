import portrait from "@/assets/portrait.png";
import { Button } from "@/components/Button/Button";
import { Logo } from "@/components/Logo/Logo";
import { Navigation } from "@/components/Navigation/Navigation";
import { Portrait } from "@/components/Portrait/Portrait";
import { WorkCard } from "@/components/WorkCard/WorkCard";

const menu = [
  { id: "cases", label: "Кейси", href: "#cases" },
  { id: "services", label: "Послуги", href: "#services" },
  { id: "about", label: "Про мене", href: "#about" },
  { id: "contacts", label: "Контакти", href: "#contacts" },
];

/*
  Обкладинки кейсів додаються пізніше: імпортуйте файл із src/assets
  і передайте його в `cover`. Адреси href зараз ведуть на секцію #cases,
  поки сторінок кейсів немає.
*/
const works = [
  {
    id: "alerio",
    title: "Alerio",
    description: "Мобільний застосунок для людей із харчовою алергією",
    href: "#cases",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Сайт нерухомості, інтерфейс ролі «Модератор»",
    href: "#cases",
  },
  {
    id: "prestige-time",
    title: "Prestige Time",
    description: "Інтернет-магазин годинників",
    href: "#cases",
  },
];

export default function Home() {
  return (
    <>
      <header id="top" className="mx-auto w-full max-w-page px-4 py-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-2">
            <Navigation items={menu} />
            <Button variant="secondary" href="#contacts">
              Написати
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-page px-4 md:px-8">
        <section className="grid items-center gap-8 py-8 lg:-mt-8 lg:grid-cols-2 lg:py-section">
          <div className="flex flex-col items-start gap-6">
            <p className="text-greeting text-accent-text">
              Привіт, я UX/UI дизайнерка
            </p>
            <h1 className="font-heading text-h1 md:text-h1-md lg:text-h1-lg">
              Створюю зручні цифрові продукти для людей і бізнесу
            </h1>
            <p className="max-w-3xl text-lead text-ink-muted">
              Допомагаю малому бізнесу та стартапам створювати й удосконалювати
              сайти та застосунки, щоб користувачам було простіше досягати
              своїх цілей, а бізнесу — ефективніше взаємодіяти з клієнтами.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" href="#cases">
                Дивитися кейси
              </Button>
              <Button size="lg" variant="secondary" href="#contacts">
                Написати
              </Button>
            </div>
          </div>

          <Portrait
            src={portrait}
            alt="Наталія Рашевська з ноутбуком"
            mirrored
            priority
          />
        </section>

        <section id="cases" className="flex flex-col gap-6 pb-8 md:pb-section">
          <h2 className="text-greeting text-ink">Мої проєкти</h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {works.map((work) => (
              <li key={work.id}>
                <WorkCard
                  title={work.title}
                  description={work.description}
                  href={work.href}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
