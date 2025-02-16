"use client";

import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";
import { LinealProgrammingProblem } from "@/models/LinealProgrammingProblem";

export default function LinealProgramming() {
    const [problemsArray, setProblemsArray] = useState<LinealProgrammingProblem[]>([]);

    useEffect(() => {
        fetch(" /data/unit1/LinealProgrammingProblems.json")
            .then((response) => response.json())
            .then((data: { problems: LinealProgrammingProblem[] }) => {
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
