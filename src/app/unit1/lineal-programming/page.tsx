"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Markdown from "@/components/contentComponents/Markdown";
import Carousel from "@/components/Carousel";
import { LinealProgrammingProblem } from "@/models/LinealProgrammingProblem";

export default function LinealProgramming() {
  const [problemsArray, setProblemsArray] = useState<LinealProgrammingProblem[]>([]);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ProblemsResponse, markdownResponse] = await Promise.all([
          fetch(" /data/unit1/graphicMethod.json"),
          fetch("/text/unit1/linealProgramming.md"),
        ]);

        if (!ProblemsResponse.ok) throw new Error("No se pudo cargar los archivos JSON");
        if (!markdownResponse.ok) throw new Error("No se pudo cargar los archivos Markdown");

        const [listProblems, markdownText]: [LinealProgrammingProblem[], string] =
          await Promise.all([
            ProblemsResponse.json(), // Convertir JSON
            markdownResponse.text(), // Convertir Markdown a texto
          ]);

        setProblemsArray(listProblems);
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const markdownElements = markdownContent.split("---");

  // this solution is bullshit, I need to find a better way to do this, but I don't have time
  return (
    <>
      <Markdown>{markdownElements[0]}</Markdown>
      <Image
        className="m-auto"
        src="/image/graphicSolution.webp"
        width={700}
        height={700}
        alt="Tabla 1"
      />
      <Markdown>{markdownElements[1]}</Markdown>
      <Carousel problems={problemsArray} />
    </>
  );
}
