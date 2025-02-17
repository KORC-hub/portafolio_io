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
                    fetch(" /data/unit1/LinealProgrammingProblems.json"),
                    fetch("/text/unit1/linealProgramming.md"),
                ]);

                if (!ProblemsResponse.ok) throw new Error("No se pudo cargar los archivos JSON");
                if (!markdownResponse.ok)
                    throw new Error("No se pudo cargar los archivos Markdown");

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
        <div className="my-10 mx-5">
            <div className="prose text-white max-w-full justify-center">
                <Markdown>{markdownContent}</Markdown>
            </div>
            <div>
                <h2 className="my-10 text-3xl">Resolucion de problemas</h2>
                <Carousel problems={problemsArray}></Carousel>
            </div>
        </div>
    );
}
