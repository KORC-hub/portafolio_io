"use client";

import { useState, useEffect } from "react";
import TopicCard from "@/components/TopicCard";
import { Topic } from "@/models/Topic";
import Markdown from "react-markdown";

export default function Home() {
    const [topicsArray, setTopicsArray] = useState<Topic[]>([]);
    const [markdownContent, setMarkdownContent] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [topicsResponse, markdownResponse] = await Promise.all([
                    fetch("/data/homeTopics.json"),
                    fetch("/text/operationsResearch.md"),
                ]);

                if (!topicsResponse.ok) throw new Error("No se pudo cargar los archivos JSON");
                if (!markdownResponse.ok)
                    throw new Error("No se pudo cargar los archivos Markdown");

                const [topicsData, markdownText] = await Promise.all([
                    topicsResponse.json(), // Convertir JSON
                    markdownResponse.text(), // Convertir Markdown a texto
                ]);

                setTopicsArray(topicsData);
                setMarkdownContent(markdownText);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="mx-5">
            <div className="prose text-white max-w-2/3 items-center">
                <Markdown>{markdownContent}</Markdown>
            </div>
            <h2 className="text-4xl">Unidades:</h2>
            <section className="sm:my-5 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 px-6 border-white">
                {topicsArray.map((topic) => (
                    <TopicCard key={topic.id} title={topic.title} link={topic.link}></TopicCard>
                ))}
            </section>
        </div>
    );
}
