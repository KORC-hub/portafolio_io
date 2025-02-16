"use client";

import { useState, useEffect } from "react";
import TopicCard from "@/components/TopicCard";
import { Topic } from "@/models/Topic";

export default function Unit1() {
    const [topicsArray, setTopicsArray] = useState<Topic[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(" /data/unit1/unit1Topics.json");
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
        <>
            <section className="sm:my-5 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 px-6">
                {topicsArray.map((topic) => (
                    <TopicCard
                        key={topic.id}
                        title={topic.title}
                        explain={topic.explain}
                        link={topic.link}
                    ></TopicCard>
                ))}
            </section>
        </>
    );
}
