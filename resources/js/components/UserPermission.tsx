import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function UserPermissionsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Amélie Laurent</CardTitle>
                <CardDescription>amelie@untitledui.com</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="permissions">Permissions</Label>
                    <Select>
                        <SelectTrigger id="permissions">
                            <SelectValue placeholder="Select a permission" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="super-admin">
                                Super admin - Can delete projects and teams.
                            </SelectItem>
                            <SelectItem value="admin">
                                Admin - Can change team settings and invite
                                users.
                            </SelectItem>
                            <SelectItem value="data-export">
                                Data export - Can download and export reports
                                and data.
                            </SelectItem>
                            <SelectItem value="data-import">
                                Data import - Can import reports and data.
                            </SelectItem>
                            <SelectItem value="account">
                                Account - Can import reports and data.
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="destructive">Delete user</Button>
                <div className="space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save changes</Button>
                </div>
            </CardFooter>
        </Card>
    );
}
