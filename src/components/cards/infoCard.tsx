import { ReactNode } from "react";
import Markdown from "../contentComponents/Markdown";

interface Props {
  children: ReactNode;
}

export default function InfoCard({ children }: Props) {
  const isString = typeof children === "string";

  return (
    <div className="flex items-center bg-neutral-800 text-white p-4 my-5 rounded-md border-2 border-blue-400">
      <div>{isString ? <Markdown>{children}</Markdown> : children}</div>
    </div>
  );
}
