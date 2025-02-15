import TopicCard from "@/components/TopicCard";

export default function Home() {
    return (
        <div className="mx-5">
            <h1 className="my-10 text-5xl">Bienvenido</h1>
            <h2 className="text-3xl">Unidades:</h2>
            <section className="sm:my-5 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 px-6">
                <TopicCard title="Unidad 1" explain="" link="/unit1"></TopicCard>
                <TopicCard title="Unidad 2" explain="" link="/unit2"></TopicCard>
                <TopicCard title="Unidad 3" explain="" link="/unit3"></TopicCard>
            </section>
        </div>
    );
}
