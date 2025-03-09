export interface LinealProgrammingProblem {
  question: string;
  tag: string;
  graphicDomain: number[];
  approach: {
    variables: string[];
    mainFunction: string[];
    restrictions: string[];
  };
  solution: {
    ecuations: string[];
    procedure: string[];
  };
  result: string;
}
