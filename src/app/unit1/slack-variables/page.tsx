"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import TipCard from "@/components/cards/tipCard";
import Latex from "@/components/contentComponents/Latex";
import Markdown from "@/components/contentComponents/Markdown";

export default function SlackVariables() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/text/unit1/simplexSteps.md");
        if (!response.ok) {
          throw new Error("No se pudo cargar los archivos Markdown");
        }
        const markdownText: string = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const markdownElements = markdownContent.split("---");

  return (
    <div className="mb-20">
      <Markdown>{markdownElements[0]}</Markdown>
      <Markdown>{"## Funcion objetivo: Minimizar"}</Markdown>
      <div className="m-2">
        <Latex content={["Z = 3X_1 + 8X2_2"]} />
      </div>
      <Markdown>{"## Restricciones"}</Markdown>
      <div className="m-2">
        <Latex content={["X_1 + 4X_2 \\ge 3.5", "X_1 + 2X_2 \\ge 2.5", "X_1, X_2 \\ge 0"]} />
      </div>
      <TipCard>{markdownElements[1]}</TipCard>
      <div className="mx-2 mt-10">
        <Latex
          content={[
            "X_1 + 4X_2 - S_3 + A_4 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ = 3.5",
            "X_1 + 2X_2 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ - S_5 + A_6 = 2.5",
          ]}
        />
      </div>
      <TipCard>{markdownElements[2]}</TipCard>
      <div className="mx-2 mt-10">
        <Latex content={["Z = 3X_1 + 8X_2 +  0S_3 + MA_4 + 0S_5 + MA_6"]} />
      </div>
      <TipCard>{markdownElements[3]}</TipCard>
      <Image
        className="m-auto"
        src="/image/simplexAlgorithm/Tabla_1.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
      <Markdown>
        En la tabla anterior están los datos de la función objetivo y las restricciones, en la
        siguiente tabla se calcula **Zj** y **el criterio simplex**
      </Markdown>
      <Image
        className="m-auto"
        src="/image/simplexAlgorithm/Tabla_2.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
      <TipCard>{markdownElements[4]}</TipCard>
      <Image
        className="m-auto"
        src="/image/simplexAlgorithm/Tabla_3.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
      <TipCard>{markdownElements[5]}</TipCard>
      <Image
        className="m-auto"
        src="/image/simplexAlgorithm/Tabla_4.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
      <Markdown>
        En la anterior tabla se muestra el **elemento pivote** resaltado en amarillo
      </Markdown>
      <TipCard>{markdownElements[6]}</TipCard>
      <Image
        className="m-auto"
        src="/image/simplexAlgorithm/Tabla_5.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
      <TipCard>{markdownElements[7]}</TipCard>
      <Markdown>
        Como se puede observar en la tabla del paso anterior, el **criterio simplex** no se cumple
        todavía dado que sigue teniendo números negativos. Así que realizamos los pasos 4 y 5 de
        nuevo:
      </Markdown>
      <Image
        className="m-auto"
        src="/image/simplexAlgorithm/Tabla_6.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
      <Markdown>
        y realizando el paso 6, se obtiene la siguiente tabla, donde se puede observar que el
        **criterio simplex** se cumple
      </Markdown>
      <Image
        className="m-auto"
        src="/image/simplexAlgorithm/Tabla_7.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
      <Markdown>
        Al cumplirse el **criterio simplex** obtenemos la solucion, las variables basicas que
        quedaron y su respectivo valor en la columna de recursos junto con Z que seria la ganancia
        final:
      </Markdown>
      <Latex content={["X_1 = 1.5", "X_2 = 0.5", "Z = 8.5"]} />
    </div>
  );
}
