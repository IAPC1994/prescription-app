import { LoginForm } from "./ui/LoginForm";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-300 to-sky-100 dark:from-slate-800 dark:to-slate-900 dark:text-white">
            <div className="flex justify-center items-center">
                <div className="w-[350px] h-[350px] p-10 rounded-md shadow-md bg-white dark:bg-slate-500 fade-in">
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold dark:text-white">Sign In</h1>
                    </div>

                    <LoginForm />
                </div>
            </div>
        </main>
    );
}