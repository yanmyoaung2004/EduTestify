import React from "react";
import { Home, BookOpen, FileText, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: BookOpen, label: "Practice", href: "/practice" },
    { icon: FileText, label: "Quizzes", href: "/quizzes" },
    { icon: FileText, label: "Exams", href: "/exams" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

const Sidebar = React.memo(() => {
    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-background border-r">
            <div className="flex h-16 items-center justify-center border-b">
                <h1 className="text-2xl font-bold">EduTestify</h1>
            </div>
            <nav className="space-y-1 p-4">
                {navItems.map((item) => (
                    <Link href={item.href} key={item.href}>
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                        >
                            <item.icon className="mr-2 h-5 w-5" />
                            {item.label}
                        </Button>
                    </Link>
                ))}
            </nav>
        </aside>
    );
});

export { Sidebar };
