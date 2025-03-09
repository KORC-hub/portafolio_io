"use client";

import { useState, useEffect } from "react";
import Card from "./cards/linealProgrammingCard";
import { LinealProgrammingProblem } from "@/models/LinealProgrammingProblem";

type Props = {
  problems: LinealProgrammingProblem[];
};

export default function Carousel({ problems }: Props) {
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectProblem, setSelectProblem] = useState<LinealProgrammingProblem>(problems[0]);
  useEffect(() => {
    if (problems.length > 0) {
      setSelectProblem(problems[0]);
    }
  }, [problems]);

  const selectNewQuestion = (index: number, problems: LinealProgrammingProblem[], next = true) => {
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
    <div>
      <div className="flex xl:mx-10">
        <div className="invisible w-0 flex justify-center items-center xl:visible xl:w-auto">
          <button className=" h-full m-4 p-4 text-6xl hover:text-blue-400" onClick={previous}>
            {"<"}
          </button>
        </div>
        <Card title={`Problema ${selectIndex + 1}`} problem={selectProblem}></Card>
        <div className="invisible  w-0 flex justify-center items-cente xl:visible xl:w-auto">
          <button className=" h-full m-4 p-4 text-6xl hover:text-blue-400 " onClick={next}>
            {">"}
          </button>
        </div>
      </div>
      <div className="visible text-center xl:invisible">
        <button className="h-full m-4 p-4 text-6xl hover:text-blue-400" onClick={previous}>
          {"<"}
        </button>
        <button className="h-full m-4 p-4 text-6xl hover:text-blue-400" onClick={next}>
          {">"}
        </button>
      </div>
    </div>
  );
}
