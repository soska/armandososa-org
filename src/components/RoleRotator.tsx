import { useEffect, useState } from 'react';

const baseRoles = [
  'christian',
  'husband',
  'developer',
  'designer',
  'musician',
  'mexican',
  'game Maker',
];

function shuffle(values: string[]): string[] {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function RoleRotator() {
  // Start with the deterministic order so server-rendered and hydrated markup
  // match, then shuffle on the client after mount.
  const [roles, setRoles] = useState(baseRoles);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setRoles(shuffle(baseRoles));
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [roles.length]);

  return (
    // All roles share one grid cell, so the box auto-sizes to the widest /
    // tallest role — no JS height measurement needed.
    <span className="inline-grid text-inherit">
      {roles.map((role, i) => (
        <span
          key={role}
          data-active={i === index}
          aria-hidden={i !== index}
          className="translate-y-[0.2em] scale-95 opacity-0 blur-sm transition duration-500 ease-in-out [grid-area:1/1] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:blur-none motion-reduce:translate-y-0 motion-reduce:blur-none motion-reduce:transition-none"
        >
          {role}
        </span>
      ))}
    </span>
  );
}
