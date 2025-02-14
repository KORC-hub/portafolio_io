"use client";

import { useState, useEffect } from "react";
import Card from "./ProblemCard";

interface Data {
    question: string;
    solution: {
        mainFunction: string;
        restrictions: string;
    };
}

export default function Carousel({ problems }: { problems: Data[] }) {
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectProblem, setSelectProblem] = useState<Data>(problems[0]);

    useEffect(() => {
        if (problems.length > 0) {
            setSelectProblem(problems[0]);
        }
    }, [problems]);

    const selectNewQuestion = (index: number, problems: Data[], next = true) => {
        const condition = next ? selectIndex < problems.length - 1 : selectIndex > 0;
        const nextIndex = next
            ? condition
                ? selectIndex + 1
                : 0
            : condition
            ? selectIndex - 1
            : problems.length - 1;
        setSelectProblem(problems[nextIndex]);
        setSelectIndex(nextIndex);
    };

    const previous = () => {
        selectNewQuestion(selectIndex, problems, false);
    };

    const next = () => {
        selectNewQuestion(selectIndex, problems);
    };

    return (
        <div className="flex mx-10">
            <div className="flex justify-center items-center hover:text-blue-400">
                <button className="m-4 p-4 text-6xl" onClick={previous}>
                    {"<"}
                </button>
            </div>
            <Card index={selectIndex + 1} problem={selectProblem}></Card>
            <div className="flex justify-center items-center hover:text-blue-400">
                <button className="m-4 p-4 text-6xl" onClick={next}>
                    {">"}
                </button>
            </div>
        </div>
    );
}
