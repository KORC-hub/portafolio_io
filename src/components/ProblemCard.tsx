import katex from "katex";
import "katex/dist/katex.min.css";

interface Data {
    index: number;
    problem: {
        question: string;
        numberVariables: number;
        solution: {
            variables: string;
            mainFunction: string;
            restrictions: string;
            procedure: string;
        };
        result: string;
    };
}

export default function Card({ index, problem }: Data) {
    if (!problem) {
        return (
            <div className="w-full flex justify-center items-center">
                <div className="w-full shadow-xl rounded-2xl p-10 outline-dashed">
                    <div className="flex-col justify-around gap-11 items-center text-center text-3xl">
                        Loading...
                    </div>
                </div>
            </div>
        );
    }

    const variables = katex.renderToString(problem.solution.variables, {
        throwOnError: false, // Evita errores si hay una sintaxis incorrecta
        displayMode: false, // Modo bloque
    });

    const mainFunction = katex.renderToString(problem.solution.mainFunction, {
        throwOnError: false, // Evita errores si hay una sintaxis incorrecta
        displayMode: false, // Modo bloque
    });
    const restrictions = katex.renderToString(problem.solution.restrictions, {
        throwOnError: false, // Evita errores si hay una sintaxis incorrecta
        displayMode: false, // Modo bloque
    });

    const procedure = katex.renderToString(problem.solution.procedure, {
        throwOnError: false, // Evita errores si hay una sintaxis incorrecta
        displayMode: false, // Modo bloque
    });

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full shadow-xl rounded-2xl p-10 outline-dashed">
                <div className="flex-col justify-around gap-11 items-center">
                    <h1 className="text-3xl">Problem {index}</h1>
                    <div className="p-4">
                        <h2 className="text-2xl mb-5">Pregunta:</h2>
                        <p className="text-lg mb-5 ml-5 question">{problem.question}</p>
                        <h2 className="text-2xl mb-5">Planteamiento:</h2>
                        <div className="ml-5 mb-5 text-lg">
                            <p className="mb-5 border-b border-gray-400">Variables: </p>
                            <p
                                className="ml-10"
                                dangerouslySetInnerHTML={{ __html: variables }}
                            ></p>
                        </div>
                        {problem.numberVariables > 1 ? (
                            <>
                                <div className="ml-5 mb-5 text-lg ">
                                    <p className="mb-5 border-b border-gray-400">Main function: </p>
                                    <p
                                        className="ml-10"
                                        dangerouslySetInnerHTML={{ __html: mainFunction }}
                                    ></p>
                                </div>
                                <div className="ml-5 mb-5 text-lg">
                                    <p className="mb-5 border-b border-gray-400">Restrictions: </p>
                                    <p
                                        className="ml-10"
                                        dangerouslySetInnerHTML={{ __html: restrictions }}
                                    ></p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="ml-5 mb-5 text-lg">
                                    <p className="mb-5 border-b border-gray-400">Procedimiento: </p>
                                    <p
                                        className="ml-10"
                                        dangerouslySetInnerHTML={{ __html: procedure }}
                                    ></p>
                                </div>
                                <div className="ml-5 mb-5 text-lg">
                                    <p className="mb-5 border-b border-gray-400">Resultado: </p>
                                    <p className="ml-10">{problem.result}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
