"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TipCard from "@/components/cards/tipCard";
import Markdown from "@/components/contentComponents/Markdown";
import Latex from "@/components/contentComponents/Latex";

export default function SlackVariables() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/text/unit2/unit2.md");
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
      <TipCard>{markdownElements[1]}</TipCard>
      <Markdown>{markdownElements[2]}</Markdown>
      <Image
        className="m-auto"
        src="/image/SolverSolution/solver.png"
        width={500}
        height={500}
        alt="Tabla 1"
      />
      <Markdown>{markdownElements[3]}</Markdown>
      <div className="flex justify-between items-start gap-x-8">
        <div className="w-1/2 text-sm">
          <Markdown>{markdownElements[4]}</Markdown>
          <Latex
            content={["X_1 = \\text{cantidad de mesas}", "X_2 = \\text{canridad de sillas}"]}
          />
          <Markdown>{markdownElements[5]}</Markdown>
          <Latex content={["40X_1 + 18X_2 = Z_{max}"]} />
          <Markdown>{markdownElements[6]}</Markdown>
          <Latex
            content={[
              "16X_1 + 2X_2 \\le 640",
              "6X_1 + 3X_2 \\le 560",
              "X_1 \\le 80",
              "X_2 \\le 120",
              "X_1, X_2 \\ge 0",
            ]}
          />
        </div>
        <Image
          className="m-auto"
          src="/image/SolverSolution/excel.png"
          width={600}
          height={600}
          alt="Tabla 1"
        />
      </div>
      <Markdown>
        {"Si graficamos las restricciones podemos ver como influye cada una de estas."}
      </Markdown>
      <Image
        className="m-auto"
        src="/image/SolverSolution/grafico.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
      <Markdown>{markdownElements[7]}</Markdown>
      <Markdown>{markdownElements[8]}</Markdown>
      <Image
        className="m-auto mb-10"
        src="/image/SolverSolution/report.png"
        width={500}
        height={500}
        alt="Tabla 1"
      />
      <Image
        className="m-auto"
        src="/image/SolverSolution/sensitivityReport.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
      <Markdown>{markdownElements[9]}</Markdown>
      <div className="ml-10">
        <Markdown>{markdownElements[10]}</Markdown>
        <Image
          className="m-auto"
          src="/image/SolverSolution/graficoModificado.png"
          width={700}
          height={700}
          alt="Tabla 1"
        />
        <Markdown>{markdownElements[11]}</Markdown>
        <Image
          className="m-auto"
          src="/image/SolverSolution/graficoModificado2.png"
          width={700}
          height={700}
          alt="Tabla 1"
        />
      </div>
      <Markdown>{markdownElements[12]}</Markdown>
    </div>
  );
}
