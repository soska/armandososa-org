import { useMemo } from 'react';

const baseRoles = ['Christian', 'Husband', 'Developer', 'Designer', 'Musician', 'Mexican'];

function shuffle(values: string[]): string[] {
  const result = [...values];
  let currentIndex = result.length;

  while (currentIndex) {
    const randomIndex = Math.floor(Math.random() * currentIndex--);
    [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
  }

  return result;
}

export default function RoleRotator() {
  const roles = useMemo(() => shuffle(baseRoles), []);
  // const [currentRole, setCurrentRole] = useState(0);

  // useEffect(() => {
  //   const timer = window.setInterval(() => {
  //     setCurrentRole((value) => (value + 1) % roles.length);
  //   }, 2500);

  //   return () => {
  //     window.clearInterval(timer);
  //   };
  // }, [roles.length]);

  return <span className="role">{roles.map((role) => <span key={role}>{role}</span>)}</span>;
}
