"use client";

import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";

interface Data {
    question: string;
    solution: {
        mainFunction: string;
        restrictions: string;
    };
}

export default function LinealProgramming() {
    const [problemsArray, setProblemsArray] = useState<Data[]>([]);

    useEffect(() => {
        fetch(" /data/LinealProgrammingProblems.json")
            .then((response) => response.json())
            .then((data: { problems: Data[] }) => {
                setProblemsArray(data.problems);
            })
            .catch((error) => console.error("Error cargando JSON:", error));
    }, []);

    return (
        <div>
            <Carousel problems={problemsArray}></Carousel>
        </div>
    );
}
