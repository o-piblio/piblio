"use client";

// importações de dependências:
import React, { useEffect } from "react";
import { useIndice } from "@/contexts/IndiceContext";

// importações de componentes:
import Contribuir from "@/app/(markdowns)/contribuir.mdx";

export default function Page() {
  const { setIndice } = useIndice();

  useEffect(() => {
    setIndice([
      {
        topico: "Como contribuir?",
        item: [
          { subtopico: "Ajude no desenvolvimento." },
          { subtopico: "Envie livros" },
          { subtopico: "Contribua financeiramente" },
          { subtopico: "Semei via Torrent" },
        ],
      },
    ]);
  }, [setIndice]);

  return <Contribuir />;
}
