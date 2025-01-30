import { AppSidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Header } from "@/layouts/Header";
import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4 ">
                        <div className="flex items-center gap-3">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 h-4"
                            />
                        </div>
                        <Header />
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
