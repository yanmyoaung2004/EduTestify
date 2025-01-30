import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, router } from "@inertiajs/react";
import {
    handleFailureToast,
    handleSuccessToast,
    handleSuccessToastWithLink,
    handleWarningToast,
} from "@/utils/Toast";
import {
    checkPasswordMatch,
    checkPasswordStrength,
    PasswordStatus,
} from "@/utils/services";

type RegisterCredentials = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export function RegisterForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [formData, setFormData] = useState<RegisterCredentials>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkPasswordMatch(formData.password, formData.confirmPassword)) {
            const status: PasswordStatus = checkPasswordStrength(
                formData.password
            );
            if (status === PasswordStatus.weak) {
                handleWarningToast("Your password is too weak!");
                return;
            }
            router.post(
                `register`,
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.confirmPassword,
                },
                {
                    onSuccess: ({ props }) => {
                        handleSuccessToastWithLink(
                            props.message as string,
                            "/login"
                        );
                        setFormData({
                            name: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                        });
                        setTimeout(() => {
                            router.visit("/login");
                        }, 2500);
                    },
                    onError: (error) => {
                        handleFailureToast(error.message);
                    },
                }
            );
        } else {
            handleWarningToast("Password does not match!");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value.trim(),
        }));
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>
                        Register with your Apple or Google account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6">
                            <div className="flex flex-col gap-4">
                                <Button variant="outline" className="w-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Login with Google
                                </Button>
                            </div>
                            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Your Name</Label>
                                    <Input
                                        value={formData.name}
                                        required
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        value={formData.email}
                                        required
                                        id="email"
                                        type="email"
                                        placeholder="example@example.com"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        value={formData.password}
                                        id="password"
                                        type="password"
                                        required
                                        autoComplete=""
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">
                                        Confirm Password
                                    </Label>
                                    <Input
                                        value={formData.confirmPassword}
                                        id="confirmPassword"
                                        autoComplete=""
                                        type="password"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Register
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Already had an account?{" "}
                                <Link
                                    href="/login"
                                    className="underline underline-offset-4"
                                >
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
