"use client";

import { useState, useEffect } from "react";
import TopicCard from "@/components/TopicCard";
import { Topic } from "@/models/Topic";

export default function Home() {
    const [topicsArray, setTopicsArray] = useState<Topic[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(" /data/homeTopics.json");
                if (!response.ok) {
                    throw new Error("No se pudo cargar el archivo JSON");
                }
                const data: Topic[] = await response.json();
                setTopicsArray(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="mx-5">
            <h1 className="my-10 text-5xl">Bienvenido</h1>
            <h2 className="text-3xl">Unidades:</h2>
            <section className="sm:my-5 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 px-6">
                {topicsArray.map((topic) => (
                    <TopicCard key={topic.id} title={topic.title} link={topic.link}></TopicCard>
                ))}
            </section>
        </div>
    );
}
