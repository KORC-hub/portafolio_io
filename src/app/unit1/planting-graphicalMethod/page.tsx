"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
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
                    fetch("/text/unit1/planting-graphicMethod.md"),
                ]);

                if (!ProblemsResponse.ok) throw new Error("No se pudo cargar los archivos JSON");

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

    const DynamicPlot = dynamic(() => import("@/components/contentComponents/Plot"), {
        ssr: false,
    });

    return (
        <>
            <Markdown>{markdownContent}</Markdown>
            <DynamicPlot width={800} height={400}></DynamicPlot>
            <Carousel problems={problemsArray} />
        </>
    );
}
