import { Metadata } from "next";
import { LoginForm } from "./ui/LoginForm";

export const metadata: Metadata = {
    title: 'Sign In',
    description: "Login for the prescription system.",
};

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex justify-center items-center">
                <div className="w-[350px] h-[350px] p-10 rounded-md shadow-md backdrop-blur-2xl border-2 border-gray-300 fade-in">
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold dark:text-white">Sign In</h1>
                    </div>

                    <LoginForm />
                </div>
            </div>
            <video src={require('../../../../public/background.mp4')} autoPlay muted loop className="absolute top-0 -z-10 w-full h-full object-cover fade-in" />
        </main>
    );
}