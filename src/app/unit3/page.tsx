"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import TipCard from "@/components/cards/tipCard";
import InfoCard from "@/components/cards/infoCard";
import Markdown from "@/components/contentComponents/Markdown";

export default function Unit3() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/text/unit3/unit3.md");
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
  console.log(markdownElements);

  return (
    <div className="mb-20">
      <Markdown>{markdownElements[0]}</Markdown>
      <TipCard>
        <Markdown>{markdownElements[1]}</Markdown>
        <Image
          className="m-auto"
          src="/image/modelos/example.png"
          width={500}
          height={500}
          alt="Tabla 1"
        />
      </TipCard>
      <Markdown>{markdownElements[2]}</Markdown>

      <Markdown>{markdownElements[3]}</Markdown>
      <Image
        className="m-auto"
        src="/image/modelos/modeloTransporte.png"
        width={750}
        height={750}
        alt="Tabla 1"
      />
      <Markdown>{markdownElements[4]}</Markdown>
      <Image
        className="m-auto"
        src="/image/modelos/transporteExample.png"
        width={750}
        height={750}
        alt="Tabla 1"
      />
      <Markdown>{markdownElements[5]}</Markdown>
      <Image
        className="m-auto"
        src="/image/modelos/transporteSolution.png"
        width={750}
        height={750}
        alt="Tabla 1"
      />
      <Markdown>{markdownElements[6]}</Markdown>
      <Markdown>{markdownElements[7]}</Markdown>
      <Image
        className="m-auto"
        src="/image/modelos/modeloAsignacion.png"
        width={750}
        height={750}
        alt="Tabla 1"
      />
      <Markdown>{markdownElements[8]}</Markdown>
      <Image
        className="m-auto"
        src="/image/modelos/asignacionSolution.png"
        width={750}
        height={750}
        alt="Tabla 1"
      />
      <Markdown>{markdownElements[9]}</Markdown>
      <Markdown>{markdownElements[10]}</Markdown>
      <Markdown>{markdownElements[11]}</Markdown>
      <div className="flex flex-col md:flex-row md:gap-8 gap-2 justify-center items-center">
        <div className="w-fit">
          <InfoCard>{markdownElements[13]}</InfoCard>
        </div>
        <InfoCard>{markdownElements[12]}</InfoCard>
      </div>
      <Markdown>{markdownElements[14]}</Markdown>
      <Markdown>{markdownElements[15]}</Markdown>
      
    </div>
  );
}
