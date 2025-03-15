"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import TipCard from "@/components/cards/tipCard";
import Latex from "@/components/contentComponents/Latex";
import Markdown from "@/components/contentComponents/Markdown";
import table from "../../../../public/image/Tabla_1.png";

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
    <>
      <Markdown>{"## Funcion objetivo: Minimizar"}</Markdown>
      <div className="m-2">
        <Latex content={["Z = 3X_1 + 8X2_2"]} />
      </div>
      <Markdown>{"## Restricciones"}</Markdown>
      <div className="m-2">
        <Latex content={["X_1 + 4X_2 \\ge 3.5", "X_1 + 2X_2 \\ge 2.5", "X_1, X_2 \\ge 0"]} />
      </div>
      <TipCard>{markdownElements[0]}</TipCard>
      <div className="mx-2 mt-10">
        <Latex
          content={[
            "X_1 + 4X_2 - S_3 + A_4 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ = 3.5",
            "X_1 + 2X_2 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ - S_5 + A_6 = 2.5",
          ]}
        />
      </div>
      <TipCard>{markdownElements[1]}</TipCard>
      <div className="mx-2 mt-10">
        <Latex content={["Z = 3X_1 + 8X_2 +  0S_3 + MA_4 + 0S_5 + MA_6"]} />
      </div>
      <TipCard>{markdownElements[2]}</TipCard>
      <Image className="m-auto" src={table} alt="Tabla 1" />
      <TipCard>{markdownElements[3]}</TipCard>
      <TipCard>{markdownElements[4]}</TipCard>
      <TipCard>{markdownElements[5]}</TipCard>
      <TipCard>{markdownElements[6]}</TipCard>
    </>
  );
}
