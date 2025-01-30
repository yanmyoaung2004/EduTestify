import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function UserProfileCard() {
    const [isUpdating, setUpadating] = useState<boolean>(false);

    const clickUpdate = (): void => {
        setUpadating(!isUpdating);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setUpadating(!isUpdating);
    };

    return (
        <Card className="border-none bg-transparent">
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <div className="flex items-center justify-center">
                        <img
                            src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
                            alt="User profile"
                            className="w-24 h-24 rounded-full z-50"
                        />
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Add a hidden description for accessibility */}
                    <span id="dialog-description" className="sr-only">
                        Edit your user profile information.
                    </span>
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <div className="flex space-x-2 flex-col">
                            <Input
                                id="name"
                                placeholder="Name"
                                value={"Yan Myo Aung"}
                                readOnly={!isUpdating}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            placeholder="admin@gmail.com"
                            value={"admin@gmail.com"}
                            readOnly={!isUpdating}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="text"
                            placeholder="090000000"
                            readOnly={!isUpdating}
                            value={"0987654"}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    {!isUpdating && (
                        <Button className="w-16" onClick={clickUpdate}>
                            Edit
                        </Button>
                    )}
                    {isUpdating && (
                        <Button className="w-16" type="submit">
                            Update
                        </Button>
                    )}
                </CardFooter>
            </form>
        </Card>
    );
}
