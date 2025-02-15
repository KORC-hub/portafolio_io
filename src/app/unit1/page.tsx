"use client";

import TopicCard from "@/components/TopicCard";
export default function Unit1() {
    return (
        <>
            <section className="sm:my-5 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 px-6">
                <TopicCard
                    title="Programacion Linear"
                    explain=""
                    link="unit1/lineal-programming"
                ></TopicCard>
            </section>
        </>
    );
}
