import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, router } from "@inertiajs/react";
import {
    checkPasswordMatch,
    checkPasswordStrength,
    PasswordStatus,
} from "@/lib/services";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { CheckCheck, Info } from "lucide-react";

interface LoginCredentials {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const [formData, setFormData] = useState<LoginCredentials>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (checkPasswordMatch(formData.password, formData.confirmPassword)) {
            const status: PasswordStatus = checkPasswordStrength(
                formData.password
            );
            if (status === PasswordStatus.weak) {
                console.log("Password is weak");
                return;
            }
            router.post(
                `register`,
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.password,
                },
                {
                    onSuccess: () => {
                        toast({
                            title: "Register",
                            color: "primary",
                            description: "You have registered successfully!",
                        });
                    },
                    onError: () => {
                        console.log("error");
                        toast({
                            variant: "destructive",
                            title: "Register",
                            description: "Registeration Failed!",
                        });
                    },
                }
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value.trim(),
        }));
    };

    const handleTestToast = () => {
        toast({
            description: (
                <div className="flex items-center gap-2 text-slate-800">
                    <CheckCheck className="w-5 h-5 " />
                    <span>This is a test notification</span>
                </div>
            ),
            duration: 3000,
            style: {
                backgroundColor: "#b6f8c4",
            },
        });
    };

    return (
        <div className="mt-20">
            <Toaster />
            <div className="flex p-3 max-w-lg mx-auto flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                    <div className="flex items-center justify-center">
                        <h2 className="pb-7 text-4xl font-semibold text-gray-700">
                            Register
                        </h2>
                        <Button onClick={handleTestToast}>Test Toast</Button>
                    </div>
                    <form
                        className="flex flex-col gap-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="Your name">Your Name</Label>
                            <Input
                                type="text"
                                placeholder="Name"
                                id="name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="Your email">Your Email</Label>
                            <Input
                                type="email"
                                placeholder="Email"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="Your password">Your Password</Label>
                            <Input
                                type="password"
                                placeholder="Password"
                                id="password"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="Your password">
                                Your Confirm Password
                            </Label>
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                id="confirmPassword"
                                onChange={handleChange}
                            />
                        </div>

                        <Button type="submit">Register</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5 justify-center items-center">
                        <span>Do not have an account?</span>
                        <Link href="/login" className="text-blue-500">
                            Sign In
                        </Link>
                    </div>
                    <div className="flex justify-center items-center text-sm mt-3">
                        <Link href="/forgot-password" className="text-blue-500">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
