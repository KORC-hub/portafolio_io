"use client";

import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";
import { LinealProgrammingProblem } from "@/models/LinealProgrammingProblem";

export default function LinealProgramming() {
    const [problemsArray, setProblemsArray] = useState<LinealProgrammingProblem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(" /data/unit1/LinealProgrammingProblems.json");
                if (!response.ok) {
                    throw new Error("No se pudo cargar el archivo JSON");
                }
                const data: LinealProgrammingProblem[] = await response.json(); 
                setProblemsArray(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
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
