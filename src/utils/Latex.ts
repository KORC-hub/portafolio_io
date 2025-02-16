import katex from "katex";
import "katex/dist/katex.min.css";

export function TextArrayToLatex(equations: string[]): string {
    const start = "\\begin{aligned} ";
    const content = equations.reduce(
        (current, next) => current + " & " + next + " \\\\ \\newline",
        ""
    );
    const end = " \\end{aligned}";

    const latexText = katex.renderToString(start + content + end, {
        throwOnError: false, // Evita errores si hay una sintaxis incorrecta
        displayMode: false, // Modo bloque
    });

    return latexText;
}
