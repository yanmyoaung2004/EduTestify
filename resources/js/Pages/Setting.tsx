import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Layout } from "@/layouts/Layout";
import { ModeToggle } from "@/components/ThemeModeToggler";

export default function SettingsPage() {
    const [twoFactor, setTwoFactor] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [profileVisibility, setProfileVisibility] = useState(true);

    return (
        <Layout>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold">Settings</h1>
                <Tabs defaultValue="account">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="appearance">Appearance</TabsTrigger>
                        <TabsTrigger value="notifications">
                            Notifications
                        </TabsTrigger>
                        <TabsTrigger value="connected">
                            Connected Accounts
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Settings</CardTitle>
                                <CardDescription>
                                    Manage your account settings and
                                    preferences.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        defaultValue="john.doe@example.com"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">
                                        New Password
                                    </Label>
                                    <Input id="password" type="password" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="two-factor"
                                        checked={twoFactor}
                                        onCheckedChange={setTwoFactor}
                                    />
                                    <Label htmlFor="two-factor">
                                        Enable Two-Factor Authentication
                                    </Label>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save Changes</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="appearance">
                        <Card>
                            <CardHeader>
                                <CardTitle>Appearance</CardTitle>
                                <CardDescription>
                                    Customize your app experience.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Label htmlFor="theme">Theme</Label>
                                    <ModeToggle />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Label htmlFor="font-size">Font Size</Label>
                                    <select id="font-size" className="ml-auto">
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </select>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="notifications">
                        <Card>
                            <CardHeader>
                                <CardTitle>Notifications & Privacy</CardTitle>
                                <CardDescription>
                                    Manage your notification preferences and
                                    privacy settings.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="email-notifications"
                                        checked={emailNotifications}
                                        onCheckedChange={setEmailNotifications}
                                    />
                                    <Label htmlFor="email-notifications">
                                        Receive Email Notifications
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="profile-visibility"
                                        checked={profileVisibility}
                                        onCheckedChange={setProfileVisibility}
                                    />
                                    <Label htmlFor="profile-visibility">
                                        Make Profile Public
                                    </Label>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="connected">
                        <Card>
                            <CardHeader>
                                <CardTitle>Connected Accounts</CardTitle>
                                <CardDescription>
                                    Manage your connected accounts and services.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-primary"
                                        >
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                        </svg>
                                        <div>
                                            <p className="font-medium">
                                                Google
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Connected
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="outline">
                                        Disconnect
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
                <Card className="border-destructive">
                    <CardHeader>
                        <CardTitle className="text-destructive">
                            Danger Zone
                        </CardTitle>
                        <CardDescription>
                            Irreversible and destructive actions
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive">
                                    Delete Account
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Are you absolutely sure?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete your account and
                                        remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction className="bg-destructive text-destructive-foreground">
                                        Delete Account
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
