import Markdown from "react-markdown";

export default function MarkdownWithStyle({ content }: { content: string }) {
    return (
        <>
            <Markdown
                components={{
                    h1(props) {
                        const { ...rest } = props;
                        return <h1 className="text-5xl my-5" {...rest} />;
                    },
                    h2(props) {
                        const { ...rest } = props;
                        return <h2 className="text-3xl my-5 border-b" {...rest} />;
                    },
                    h3(props) {
                        const { ...rest } = props;
                        return <h3 className="text-xl my-5" {...rest} />;
                    },
                    p(props) {
                        const { ...rest } = props;
                        return <p className="ml-5 my-5" {...rest} />;
                    },
                    strong(props) {
                        const { ...rest } = props;
                        return <strong className="text-green-700" {...rest} />;
                    },
                    li(props) {
                        const { ...rest } = props;
                        return (
                            <li
                                style={{
                                    display: "block",
                                    listStyleType: "decimal",
                                    paddingInlineStart: "40px",
                                }}
                                {...rest}
                            />
                        );
                    },
                }}
            >
                {content}
            </Markdown>
        </>
    );
}
