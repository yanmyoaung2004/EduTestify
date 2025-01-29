import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { User } from "lucide-react";
import { UserProfileCard } from "@/components/UserProfileCard";

export function ProfileDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <UserProfileCard />
                <DialogTitle />
            </DialogContent>
        </Dialog>
    );
}
