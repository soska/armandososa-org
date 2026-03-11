import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import styles from './RoleRotator.module.css';

const baseRoles = [
  'Christian',
  'Husband',
  'Developer',
  'Designer',
  'Musician',
  'Mexican',
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
  const roles = useMemo(() => shuffle(baseRoles), []);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref.current]);
  // const [currentRole, setCurrentRole] = useState(0);

  // useEffect(() => {
  //   const timer = window.setInterval(() => {
  //     setCurrentRole((value) => (value + 1) % roles.length);
  //   }, 2500);

  //   return () => {
  //     window.clearInterval(timer);
  //   };
  // }, [roles.length]);

  return (
    <div className={styles.role} ref={ref} style={{ '--height': `${height}px` }}>
      <span className={styles.roles}>
        {roles.map((role) => (
          <span key={role}>{role}</span>
        ))}
      </span>
    </div>
  );
}

