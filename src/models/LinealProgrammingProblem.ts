export interface LinealProgrammingProblem {
    question: string;
    tag: string;
    solution: {
        variables: string[];
        mainFunction: string[];
        restrictions: string[];
        procedure: string[];
    };
    result: string;
}
