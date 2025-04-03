"use client"

// importações de dependências::
import Link from "next/link";

// importação de componentes: 
import { Logo } from "./logo";


const Ir = ({ destino, texto }) => {
  return (
    <a href={destino} target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">{texto}</a>
  )
}

export function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <ul className="flex flex-wrap items-centertext-base font-medium sm:mb-0 text-muted-foreground">
            <li>
              <Ir destino="https://github.com/o-piblio/piblio/blob/principal/LICENSE" texto="Licença" />
            </li>
            <li>
              <Ir destino="mailto:o-piblio@proton.me" texto="Contato" />
            </li>
            <li>
              <Ir destino="" texto="Valores" />
            </li>
          </ul>
        </div>

      </div>
        <hr className=" border-mborder " />
        <span className="block sm:text-center font-averia text-muted-foreground my-6">
          © {ano} <Link href="/" className="hover:underline ">Piblio</Link>. Conhecimento e cultura, livres, para todos.
        </span>
    </footer>
  );
};