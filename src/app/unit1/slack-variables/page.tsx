"use client";

import { useState, useEffect } from "react";
import TipCard from "@/components/cards/tipCard";

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
      <TipCard>{markdownElements[0]}</TipCard>
      <TipCard>{markdownElements[1]}</TipCard>
      <TipCard>{markdownElements[2]}</TipCard>
      <TipCard>{markdownElements[3]}</TipCard>
      <TipCard>{markdownElements[4]}</TipCard>
      <TipCard>{markdownElements[5]}</TipCard>
      <TipCard>{markdownElements[6]}</TipCard>
    </>
  );
}
