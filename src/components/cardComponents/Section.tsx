type Props = {
    show: boolean;
    title: string;
    textContent?: string;
    children?: React.ReactNode;
};

export default function Section(props: Props) {
    if (!props.show) {
        return <></>;
    }
    return (
        <div className="p-4">
            <h2 className="text-2xl mb-5">{props.title}:</h2>
            <p className="text-lg mb-5 ml-5">{props.textContent}</p>
            {props.children}
        </div>
    );
}
