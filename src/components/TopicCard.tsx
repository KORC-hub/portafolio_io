import Link from "next/link";

type Props = {
    title: string;
    explain?: string;
    link: string;
};

export default function TopicCard({ title, explain, link }: Props) {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3 border-white border">
                <div>
                    <h4 className=" text-2xl leading-tight">{title}</h4>
                    <div className="my-4">
                        <p>{explain}</p>
                    </div>
                </div>
                <div>
                    <Link
                        className="mt-1 inline-flex items-center border-transparent underline hover:text-blue-500"
                        href={link}
                    >
                        Read More {">"}
                    </Link>
                </div>
            </div>
        </div>
    );
}
