import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, router } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

import {
    checkPasswordMatch,
    checkPasswordStrength,
    PasswordStatus,
} from "@/lib/services";
import { Toaster } from "@/components/ui/toaster";
import {
    handleFailureToast,
    handleSuccessToastWithLink,
    handleWarningToast,
} from "@/lib/toast";

interface LoginCredentials {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface RegisterProps {
    message: string;
    status: number;
    randomKey: string;
}
const Register = ({ message, status, randomKey }: RegisterProps) => {
    const [formData, setFormData] = useState<LoginCredentials>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        if (status !== 200) {
            handleFailureToast(message);
        }
        if (status === 201) {
            handleSuccessToastWithLink(message, "/login");
            setTimeout(() => {
                Inertia.visit("/login");
            }, 2500);
        }
    }, [message, randomKey]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkPasswordMatch(formData.password, formData.confirmPassword)) {
            // const status: PasswordStatus = checkPasswordStrength(
            //     formData.password
            // );
            // if (status === PasswordStatus.weak) {
            //     handleWarningToast("Your password is too weak!");
            //     return;
            // }
            router.post(`register`, {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.confirmPassword,
            });
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
        <div className="mt-20">
            <Toaster />
            <div className="flex p-3 max-w-lg mx-auto flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                    <div className="flex items-center justify-center">
                        <h2 className="pb-7 text-4xl font-semibold text-gray-700">
                            Register
                        </h2>
                    </div>
                    <form
                        className="flex flex-col gap-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="Your name">Your Name</Label>
                            <Input
                                required
                                type="text"
                                placeholder="Name"
                                id="name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="Your email">Your Email</Label>
                            <Input
                                required
                                type="email"
                                placeholder="Email"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="Your password">Your Password</Label>
                            <Input
                                required
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
                                required
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
