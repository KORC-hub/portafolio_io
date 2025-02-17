import { TextArrayToLatex } from "@/utils/Latex";

type Props = {
    content: string[];
};

export default function SubSection(props: Props) {
    const content = TextArrayToLatex(props.content);
    return <p className="ml-10" dangerouslySetInnerHTML={{ __html: content }}></p>;
}
