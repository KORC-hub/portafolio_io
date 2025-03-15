import Markdown from "../contentComponents/Markdown";

type Props = {
  children?: string;
};

export default function TipCard(props: Props) {
  return (
    <div className="flex items-center bg-neutral-800 text-white p-4 my-5 rounded-md border-l-4 border-blue-400">
      <div>
        <Markdown>{props.children}</Markdown>
      </div>
    </div>
  );
}
