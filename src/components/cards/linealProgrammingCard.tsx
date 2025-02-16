import Section from "../cardComponents/Section";
import SubSection from "../cardComponents/SubSection";
import Latex from "../contentComponents/Latex";
import { LinealProgrammingProblem } from "@/models/LinealProgrammingProblem";

type Props = {
    title: string;
    problem: LinealProgrammingProblem;
};

export default function Card({ title, problem }: Props) {
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

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full shadow-xl rounded-2xl p-10 outline-dashed">
                <div className="flex-col justify-around gap-11 items-center">
                    <div>
                        <h2 className="text-3xl">{title}</h2>
                        <p className="text-red-500 text-lg">{problem.tag}</p>
                    </div>
                    <Section
                        show={problem.question !== ""}
                        title="Pregunta"
                        textContent={problem.question}
                    ></Section>
                    <Section show={Object.entries.length !== 0} title="Planteamiento">
                        {Object.entries(problem.solution).map(([key, value]) => (
                            <SubSection
                                key={key}
                                title={
                                    key === "variable"
                                        ? "Variables"
                                        : key === "mainFunction"
                                        ? "Funcion objetivo"
                                        : key === "restrictions"
                                        ? "Restricciones"
                                        : key === "procedure"
                                        ? "Procedimiento"
                                        : key
                                }
                                show={value.length > 0}
                            >
                                <Latex content={value}></Latex>
                            </SubSection>
                        ))}
                    </Section>
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
