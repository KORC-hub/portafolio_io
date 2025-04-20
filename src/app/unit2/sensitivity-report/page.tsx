"use client";
import { useState, useEffect } from "react";
import Markdown from "@/components/contentComponents/Markdown";

export default function SlackVariables() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/text/unit2/sensitivityReport.md");
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
      <Markdown>{markdownElements[1]}</Markdown>
      <Markdown>{markdownElements[2]}</Markdown>
      <Markdown>{markdownElements[3]}</Markdown>
      <Markdown>{markdownElements[4]}</Markdown>
    </div>
  );
}
