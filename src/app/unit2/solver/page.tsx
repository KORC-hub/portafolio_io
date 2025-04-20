"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import TipCard from "@/components/cards/tipCard";
import Markdown from "@/components/contentComponents/Markdown";

export default function SlackVariables() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/text/unit2/solver.md");
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
      <TipCard>{"Hola"}</TipCard>
      <Image
        className="m-auto"
        src="/image/simplexAlgorithm/Tabla_1.png"
        width={1000}
        height={1000}
        alt="Tabla 1"
      />
    </div>
  );
}
