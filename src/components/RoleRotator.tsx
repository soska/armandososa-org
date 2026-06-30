import { useLayoutEffect, useRef, useState } from 'react';
import styles from './RoleRotator.module.css';

const baseRoles = [
  'Christian',
  'Husband',
  'Developer',
  'Designer',
  'Musician',
  'Mexican',
  'Game Maker'
];

function shuffle(values: string[]): string[] {
  const result = [...values];
  let currentIndex = result.length;

  while (currentIndex) {
    const randomIndex = Math.floor(Math.random() * currentIndex--);
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex],
    ];
  }

  return result;
}

export default function RoleRotator() {
  const [roles, setRoles] = useState(baseRoles);
  const containerRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    setRoles(shuffle(baseRoles));
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const rolesEl = rolesRef.current;
    if (!container || !rolesEl) return;

    const roleHeight = container.clientHeight;
    let currentIndex = 0;

    const advance = () => {
      const nextIndex = (currentIndex + 1) % roles.length;

      rolesEl.animate(
        [
          { transform: `scale(1.0) translateY(${-currentIndex * roleHeight}px)`, filter: 'blur(0px)' },
          { transform: `scale(0.95) translateY(${-(currentIndex + 0.5) * roleHeight}px)`, filter: 'blur(8px)' },
          { transform: `scale(1.0) translateY(${-nextIndex * roleHeight}px)`, filter: 'blur(0px)' },
        ],
        {
          duration: 120,
          easing: 'ease-in-out',
          fill: 'forwards',
        },
      );

      currentIndex = nextIndex;
    };

    const timer = window.setInterval(advance, 6000);
    return () => window.clearInterval(timer);
  }, [roles]);

  return (
    <div className={styles.role} ref={containerRef}>
      <span className={styles.roles} ref={rolesRef}>
        {roles.map((role) => (
          <span key={role}>{role}{'.'}</span>
        ))}
      </span>
    </div>
  );
}
