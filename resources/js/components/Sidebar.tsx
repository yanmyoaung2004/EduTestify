import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import { Home, BookOpen, FileText, User, Settings } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const items = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: BookOpen, label: "Practice", href: "/practice" },
    { icon: FileText, label: "Quizzes", href: "/quizzes" },
    { icon: FileText, label: "Tests", href: "/tests" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

const AppSidebar = React.memo(() => {
    const { url } = usePage();

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-2xl font-bold py-7 mb-1 text-black dark:text-white">
                        EduTestify
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                const isActive = url.startsWith(item.href);
                                return (
                                    <SidebarMenuItem key={item.label}>
                                        <SidebarMenuButton
                                            asChild
                                            className="h-10"
                                            isActive={isActive}
                                        >
                                            <Link href={item.href}>
                                                <Button
                                                    variant={"ghost"}
                                                    className={cn(
                                                        "w-full justify-start",
                                                        isActive &&
                                                            "bg-[--sidebar-active-bg] text-[--sidebar-active-fg] hover:bg-[--sidebar-active-bg] hover:text-[--sidebar-active-fg]"
                                                    )}
                                                >
                                                    <item.icon className="mr-1 h-5 w-5" />
                                                    {item.label}
                                                </Button>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
});

export { AppSidebar };
