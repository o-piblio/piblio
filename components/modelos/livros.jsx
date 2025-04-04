import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Livro({ livro }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 pt-5">
        <div className="flex flex-col flex-shrink-0">
          <Image
            src={`/capas/${livro.capa}`}
            alt={livro.titulo}
            width={320}
            height={480}
            className="border rounded-lg shadow-md"
            priority
          />
          <div className="flex flex-wrap gap-2 mt-4 max-w-[320px]">
            <Button variant="outline">ePub</Button>
            <Button variant="outline">PDF</Button>
            <Button variant="outline">MOBI</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 ml-2">
          <div>
            <h1 className="text-2xl font-bold leading-none align-top">
              {livro.titulo},
            </h1>
            <p className="text-lg">de {livro.autor}.</p>
            <div className="flex flex-wrap gap-2 mt-2">
             {
              livro.tags.map((tag) => (
               <Badge key={tag}>{tag}</Badge>
              ))
             }c
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Sinopse:</h3>
            <p className="text-base hyphens-auto text-justify">
              {livro.sinopse}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}