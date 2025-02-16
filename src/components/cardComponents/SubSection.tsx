type Props = {
    show: boolean;
    title: string;
    textContent?: string;
    children?: React.ReactNode;
};

export default function SubSection(props: Props) {
    if (!props.show) {
        return <></>;
    }
    return (
        <div className="ml-5 mb-5 text-lg">
            <p className="mb-5 border-b border-gray-400">{props.title}: </p>
            <p className="text-lg mb-5 ml-5">{props.textContent}</p>
            {props.children}
        </div>
    );
}
