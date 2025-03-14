import MarkdownLibrary from "react-markdown";

type Props = {
  children?: string;
};

export default function Markdown(props: Props) {
  return (
    <div className="prose py-4 max-w-full">
      <MarkdownLibrary>{props.children}</MarkdownLibrary>
    </div>
  );
}
