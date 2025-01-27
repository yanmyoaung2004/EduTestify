import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@inertiajs/react";

interface LoginCredentials {
    email: string;
    password: string;
}
const Login = () => {
    const [formData, setFormData] = useState<LoginCredentials>({
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
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
            <div className="flex p-3 max-w-lg mx-auto flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                    <div className="flex items-center justify-center">
                        <h2 className="pb-7 text-4xl font-semibold text-gray-700">
                            Login
                        </h2>
                    </div>
                    <form
                        className="flex flex-col gap-6"
                        onSubmit={handleSubmit}
                    >
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

                        <Button type="submit">Login</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5 justify-center items-center">
                        <span>Do not have an account?</span>
                        <Link href="/register" className="text-blue-500">
                            Sign Up
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

export default Login;
