// importação de dependências:
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <p className="font-reenie text-4xl">piblio</p>
    </Link>
  );
}