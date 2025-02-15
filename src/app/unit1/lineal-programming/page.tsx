"use client";

import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";

interface Data {
    question: string;
    numberVariables: number;
    solution: {
        variables: string;
        mainFunction: string;
        restrictions: string;
        procedure: string;
    };
    result: string;
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
        <div className="my-10 mx-5">
            <div className="my-10">
                <h1 className="text-5xl">Programacion Lineal</h1>
            </div>
            <div>
                <h2 className="my-10 text-3xl">Resolucion de problemas</h2>
                <Carousel problems={problemsArray}></Carousel>
            </div>
        </div>
    );
}
