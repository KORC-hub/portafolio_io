import functionPlot from "function-plot";

type Props = {
    width: number;
    height: number;
};

export default function SubSection(props: Props) {
    const width = props.width;
    const height = props.height;
    functionPlot({
        target: "#plot",
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
    return (
        <div className="flex justify-center w-3/4 mx-auto my-10">
            <div id="plot"></div>
        </div>
    );
}
