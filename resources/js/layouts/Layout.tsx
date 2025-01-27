import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import { Header } from "./Header";
import { Sidebar } from "@/components/Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    // const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <div className="flex flex-col ml-64">
                <Header />
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
