import { useEffect, useState } from 'react';
import styles from './RoleRotator.module.css';

const baseRoles = [
  'Christian',
  'Husband',
  'Developer',
  'Designer',
  'Musician',
  'Mexican',
  'Game Maker',
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
    <span className={styles.role}>
      {roles.map((role, i) => (
        <span
          key={role}
          className={styles.word}
          data-active={i === index}
          aria-hidden={i !== index}
        >
          {role}.
        </span>
      ))}
    </span>
  );
}
