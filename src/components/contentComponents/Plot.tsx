import functionPlot from "function-plot";
import { useEffect, useRef, useState } from "react";

type Props = {
    width: number;
    height: number;
};

export default function SubSection(props: Props) {
    const width = props.width;
    const height = props.height;

    const plotRef = useRef<HTMLDivElement>(null);
    const [error, setError] = useState<string | null>("");

    useEffect(() => {
        if (plotRef.current) {
            try {
                functionPlot({
                    target: plotRef.current,
                    width,
                    height,
                    yAxis: { domain: [-1, 9] },
                    grid: false,
                    disableZoom: true,
                    data: [
                        {
                            color: "#93c5fd",
                            fn: "x^2",
                            derivative: {
                                fn: "2 * x",
                                updateOnMouseMove: true,
                            },
                        },
                    ],
                });
            } catch (e) {
                console.error("Error al renderizar la gráfica:", e);
                setError("Error al cargar el gráfico");
            }
        }
    }, [width, height]);
    if (error) {
        return (
            <div className="flex justify-center w-3/4 mx-auto my-10 p-10 border-2 border-white">
                {error}
            </div>
        );
    }
    return (
        <div className="flex justify-center w-3/4 mx-auto my-10">
            <div ref={plotRef}></div>
        </div>
    );
}
