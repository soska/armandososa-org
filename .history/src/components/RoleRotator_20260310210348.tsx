import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
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
  const [currentRole, setCurrentRole] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);

      const timer = window.setInterval(() => {
        setCurrentRole((value) => (value + 1) % roles.length);
      }, 2500);

      return () => {
        window.clearInterval(timer);
      };


    }
  }, [ref.current]);
  // const [currentRole, setCurrentRole] = useState(0);


  return (
    <div className={styles.role} ref={ref} style={{ '--role-height': `${height}px`, '--current-role-index': currentRole } as React.CSSProperties}>
      <span className={styles.roles}>
        {roles.map((role) => (
          <span key={role}>{role}</span>
        ))}
      </span>
    </div>
  );
}

