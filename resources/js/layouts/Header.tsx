import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import { Notification } from "@/components/Notification";
import { ProfileDialog } from "@/Pages/Profile";

export function Header() {
    const { user } = usePage().props;
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
            <div className="flex items-center">
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-64 mr-4"
                />
                <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                </Button>
            </div>

            <div className="flex items-center space-x-4">
                <Notification />
                {user == null && (
                    <Link href="/login">
                        <Button>Login</Button>
                    </Link>
                )}

                {user != null && <ProfileDialog />}

                {/* <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Notification />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Notification</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider> */}
            </div>
        </header>
    );
}
