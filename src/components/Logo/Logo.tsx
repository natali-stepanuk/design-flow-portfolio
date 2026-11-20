/**
 * Логотип «Design Flow — UX/UI • Web Design», перенесений без змін із тренувального
 * портфоліо (`portfolio/index.html`, `portfolio/src/style.css`). Кольори беруться з
 * токенів `logo-*` та `accent`; форма, градієнти й анімація знака без змін.
 * Стилі лежать у `globals.css` під коментарем «Logo».
 */
export function Logo({ href = "#top" }: { href?: string }) {
  return (
    <a
      className="logo"
      href={href}
      aria-label="Design Flow — UX/UI • Web Design"
    >
      <svg className="logo__mark" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient
            id="logoGrad"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="70"
            y2="40"
            spreadMethod="reflect"
          >
            <stop offset="0" className="logo__stop--deep" />
            <stop offset="0.5" className="logo__stop--accent" />
            <stop offset="1" className="logo__stop--light" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="0 0; 140 80"
              dur="6s"
              repeatCount="indefinite"
            />
          </linearGradient>
          <linearGradient id="logoLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" className="logo__stop--leaf-light" />
            <stop offset="1" className="logo__stop--leaf-dark" />
          </linearGradient>
          <linearGradient id="logoSheen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" className="logo__stop--sheen" stopOpacity="0" />
            <stop offset="0.5" className="logo__stop--sheen" stopOpacity="0.85" />
            <stop offset="1" className="logo__stop--sheen" stopOpacity="0" />
          </linearGradient>
          <clipPath id="logoClip">
            <path d="M16 0H62C84 0 100 22 100 50C100 78 84 100 62 100H0Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#logoClip)">
          <rect width="100" height="100" fill="url(#logoGrad)" />
          <path
            d="M-2 104C6 70 40 44 100 38C62 50 40 76 34 104Z"
            className="logo__fill--leaf-light"
          />
          <path
            d="M34 104C40 76 62 50 100 38C102 72 92 104 62 104Z"
            fill="url(#logoLeaf)"
          />
          <rect
            x="-60"
            y="-20"
            width="26"
            height="150"
            fill="url(#logoSheen)"
            transform="rotate(20 50 50)"
          >
            <animate
              attributeName="x"
              values="-60;130;130"
              keyTimes="0;0.4;1"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>
      <span className="logo__divider" aria-hidden="true" />
      <span className="logo__text">
        <span className="logo__name">
          Design <span className="logo__flow">Flow</span>
        </span>
        <span className="logo__tag">
          UX/UI <i aria-hidden="true" /> Web Design
        </span>
      </span>
    </a>
  );
}
