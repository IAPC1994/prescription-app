'use client';

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoInformationOutline, IoLogInOutline } from "react-icons/io5";
import { ILogin } from "@/interfaces";
import { useRouter } from "next/navigation";

export const LoginForm = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<ILogin>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<ILogin> = async (data) => {
        console.log({ data });

        if (false) {
            setErrorMessage('Credentials error');
            return;
        }

        router.push('/');
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                className="px-5 py-2 border bg-gray-200 rounded mb-5 text-gray-500"
                {...register('email', { required: true })}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="px-5 py-2 border bg-gray-200 rounded mb-5 text-gray-500"
                {...register('password', { required: true })}
            />
            {
                (errorMessage) && (
                    <span className="text-red-500 flex items-center"><IoInformationOutline className=" mr-2 h-5 w-5 border border-red-500 rounded-full text-red-500" /> {errorMessage} </span>
                )
            }
            <div className="flex justify-center mt-5">
                <button
                    type="submit"
                    className="btn-primary"
                >
                    <IoLogInOutline size={20} className="mr-2" />
                    Login
                </button>
            </div>
        </form>
    )
}
