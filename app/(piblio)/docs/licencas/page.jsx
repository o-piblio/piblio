"use client";

// importações de dependências:
import React, { useEffect } from "react";
import { useIndice } from "@/contexts/IndiceContext";

// importações de componentes:
import Licencas from "@/app/(piblio)/docs/_markdown/licencas.mdx";

export default function Page() {
  const { setIndice } = useIndice();
  const { setTitulo } = useIndice();

  useEffect(() => {
    setTitulo("Licenças e posição sobre direitos autorais");
  }, [setTitulo])

  useEffect(() => {
    setIndice([
      {
        topico: "Nossa posição contra as leis de copyright",
      },
      {
      topico: "Uso do nome",
      },
      {
        topico: "Licenças adotadas oficialmente pelo projeto",
        subtopicos: [
          {
            subtopico: "Licença de código-fonte",
          },
          {
            subtopico: "Licença de conteúdos originais",
          },
        ],
      },
      {
        topico: "Por que usamos licenças se somos anticopyright e pró-pirataria?"
      },
      {
        topico: "Considerações finais"
      }
    ]);
  }, [setIndice]);

  return <Licencas />;
}