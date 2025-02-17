"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const JetBrains = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    weight: "100",
});

const navLinks = [
    { name: "Unidad 1", href: "/unit1" },
    { name: "Unidad 2", href: "/unit2" },
    { name: "Unidad 3", href: "/unit3" },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    return (
        <html lang="es" className={`${JetBrains.className}`}>
            <body>
                <nav className="py-3 px-4 flex items-center justify-between mb-10 border-b-2 border-black dark:border-white">
                    <Link className="text-xl tracking-tight" href="/">
                        Blog - Kevin Rogers
                    </Link>
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                (pathname.startsWith(link.href) && link.href !== "/");
                            return (
                                <Link
                                    className={`"font-medium ${
                                        isActive
                                            ? "text-black dark:text-white underline"
                                            : "text-gray-600"
                                    } dark:hover:text-white hover:text-black transition duration-150 ease-in-out" `}
                                    href={link.href}
                                    key={link.name}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
