// importações de dependências:
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <p className="text-xl">404</p>
      <p>Essa página não existe.</p>
      <p>Verifique o endereço ou volte para a <Link href="/" className="underline">página inicial</Link>.</p>
    </main>
  );
}