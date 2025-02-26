"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";
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

    return (
        <div className="m-10">
            <div className="prose text-white max-w-full m-auto lg:w-4/5">
                <Markdown>{markdownContent}</Markdown>
            </div>
            <div className="mt-10">
                <Carousel problems={problemsArray}></Carousel>
            </div>
        </div>
    );
}
