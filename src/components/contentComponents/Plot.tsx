import functionPlot from "function-plot";
import { useEffect, useRef, useState } from "react";

type Props = {
  ecuations: string[];
  ydomain: number;
  xdomain: number;
};

export default function Plot(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>("");
  const [dimensions, setDimensions] = useState({ width: 500, height: 400 });

  useEffect(() => {
    // Crear un observador para detectar cambios en el tamaño del contenedor
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width } = entry.contentRect;
          setDimensions({
            width: width,
            height: width * 0.5,
          });
        }
      });

      resizeObserver.observe(containerRef.current);

      // Limpieza del observador
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (plotRef.current) {
      try {
        functionPlot({
          target: plotRef.current,
          width: dimensions.width,
          height: dimensions.height,
          yAxis: { domain: [0, props.ydomain] },
          xAxis: { domain: [0, props.xdomain] },
          grid: false,
          disableZoom: false,
          data: props.ecuations.map((str) => ({ fn: str })),
        });
      } catch (e) {
        console.error("Error al renderizar la gráfica:", e);
        setError("Error al cargar el gráfico");
      } 
    }
  }, [dimensions, props.ecuations, props.ydomain, props.xdomain]);
  if (error) {
    return (
      <div className="flex justify-center w-3/4 mx-auto my-10 p-10 border-2 border-white">
        {error}
      </div>
    );
  }
  return (
    <div ref={containerRef} className="flex justify-center w-3/4 mx-auto my-10">
      <div ref={plotRef}></div>
    </div>
  );
}
