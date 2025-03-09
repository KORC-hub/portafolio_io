import dynamic from "next/dynamic";
import Section from "../cardComponents/Section";
import SubSection from "../cardComponents/SubSection";
import Latex from "../contentComponents/Latex";
import { LinealProgrammingProblem } from "@/models/LinealProgrammingProblem";

type Props = {
  title: string;
  problem: LinealProgrammingProblem;
};

export default function Card({ title, problem }: Props) {
  console.log(problem);
  if (!problem) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="w-full shadow-xl rounded-2xl p-10 outline-dashed">
          <div className="flex-col justify-around gap-11 items-center text-center">
            <div className="text-3xl">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  const DynamicPlot = dynamic(() => import("@/components/contentComponents/Plot"), {
    ssr: false,
  });

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full shadow-xl rounded-2xl p-10 outline-dashed">
        <div className="flex-col justify-around gap-11 items-center">
          <div>
            <p className="text-red-500 text-lg">{problem.tag}</p>
            <h2 className="text-3xl">{title}</h2>
          </div>
          <Section
            show={problem.question !== ""}
            title="Pregunta"
            textContent={problem.question}
          ></Section>
          <div className="truncate">
            <Section show={Object.entries.length !== 0} title="Planteamiento">
              {Object.entries(problem.approach).map(([key, value]) => (
                <SubSection
                  key={key}
                  title={
                    key === "variable"
                      ? "Variables"
                      : key === "mainFunction"
                      ? "Funcion objetivo"
                      : key === "restrictions"
                      ? "Restricciones"
                      : key
                  }
                  show={value.length > 0}
                >
                  <Latex content={value}></Latex>
                </SubSection>
              ))}
            </Section>
          </div>
          <div className="truncate">
            <Section show={Object.entries.length !== 0} title="Solucion">
              <SubSection title="Ecuaciones" show={problem.solution.ecuations.length > 0}>
                {problem.solution.ecuations.length > 0 && (
                  <DynamicPlot ecuations={problem.solution.ecuations} ydomain={100} xdomain={100} />
                )}
              </SubSection>
              <SubSection title="Evaluacion" show={problem.solution.procedure.length > 0}>
                <Latex content={problem.solution.procedure}></Latex>
              </SubSection>
            </Section>
          </div>
          <Section
            show={problem.result !== ""}
            title="Respuesta"
            textContent={problem.result}
          ></Section>
        </div>
      </div>
    </div>
  );
}
