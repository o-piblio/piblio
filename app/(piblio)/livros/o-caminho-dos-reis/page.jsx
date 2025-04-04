import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 pt-5">
        <div className="flex flex-col flex-shrink-0">
          <Image
            src="/capas/o-caminho-dos-reis.jpg"
            alt="O Caminho dos Reis"
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
              O Caminho dos Reis,
            </h1>
            <p className="text-lg">de Brandon Sanderson.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge>Fantasia</Badge>
              <Badge>Alta-fantasia</Badge>

            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Sinopse:</h3>
            <p className="text-base hyphens-auto text-justify">
              Roshar é um mundo de pedras e tempestades. Essas estranhas
              tormentas, de incrível poder, varrem o terreno rochoso com tanta
              frequência que terminaram moldando não apenas a ecologia, mas também
              a civilização. Animais que se escondem em conchas, árvores de galhos
              rígidos e uma vegetação que se retrai e se revela. As cidades só
              podem ser construídas onde a topografia oferece abrigo. Já se
              passaram séculos desde a queda das dez ordens conhecidas como os
              Cavaleiros Radiantes, mas suas Armaduras e Espadas Fractais
              permanecem: objetos místicos que transformam seres comuns em
              guerreiros praticamente invencíveis. Homens dão seus reinos em troca
              das Espadas Fractais. Guerras são travadas por elas, e são elas que
              garantem a vitória. Uma dessas guerras ocorre em uma paisagem
              inóspita conhecida como Planícies Quebradas. Lá, Kaladin, que
              abandonou seus estudos de medicina em troca de uma lança para
              proteger seu irmão mais novo, foi reduzido à escravidão. Agora, em
              meio a um conflito que parece não fazer sentido, no qual dez
              exércitos lutam isoladamente contra um único inimigo, Kaladin busca
              manter seus homens enquanto sonda os outros líderes. O Luminobre
              Dalinar Kholin comanda um dos exércitos. Assim como seu irmão, o
              falecido rei, ele é fascinado por um texto antigo chamado “O caminho
              dos reis”. As visões dos tempos antigos e dos Cavaleiros Radiantes o
              fazem duvidar até da própria sanidade. Do outro lado do oceano, a
              jovem Shallan, ainda inexperiente, procura realizar seu treinamento
              com a Luminosa Jasnah Kholin, a sobrinha herege de Dalinar. Embora
              aprecie o aprendizado, a motivação de Shallan não é tão nobre assim.
              Enquanto planeja um roubo um tanto ousado, a pesquisa que faz para
              Jasnah sugere segredos dos Cavaleiros Radiantes e a verdadeira causa
              da guerra. Após mais de dez anos de planejamento e construção deste
              universo único, “O caminho dos reis” é o fantástico capítulo de
              abertura de Os Relatos da Guerra das Tempestades, uma obra-prima de
              grande magnitude que continua a ser elaborada. Volte a dizer os
              antigos juramentos: Vida antes da morte. Força antes da fraqueza.
              Jornada antes do destino. E devolva aos homens os Fractais que
              outrora portaram. Os Cavaleiros Radiantes devem se erguer novamente.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t mt-8">

      </div>
    </>
  );
}
