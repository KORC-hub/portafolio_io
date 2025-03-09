import MarkdownLibrary from "react-markdown";

type Props = {
  children?: string;
};

export default function Markdown(props: Props) {
  return (
    <div className="prose   px-10 max-w-full m-auto my-12 lg:w-4/5">
      <MarkdownLibrary>{props.children}</MarkdownLibrary>
    </div>
  );
}
