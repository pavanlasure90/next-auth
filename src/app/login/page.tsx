"use client"
import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (res.status === 401) {
                setError('Invalid credentials');
                setSuccess(''); 
                return;
            }

            if (res.ok) {
                setError('');
                setSuccess('Login successful'); 
                router.push('/userspage'); 
            } else {
                setError('Error logging in');
                setSuccess(''); 
            }
        } catch (error) {
            setError('Network error, please try again');
            setSuccess(''); 
            console.error(error);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="bg-[#757474] p-8 rounded shadow-md w-96">
                <h1 className="text-4xl text-center font-semibold mb-8 text-white">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border border-grey-300 rounded text-black px-3 py-2 mb-4 focus:outline-none focus:border-blue-400"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border border-grey-300 rounded text-black px-3 py-2 mb-4 focus:outline-none focus:border-blue-400"
                        required
                    />
                    {error && <p className="text-red-600 text-[16px] mb-4">{error}</p>}
                    {success && <p className="text-green-600 text-[16px] mb-4">{success}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                        Login
                    </button>
                </form>
                <div className="block text-center text-gray-500 mt-4">-OR-</div>
                <p className="block text-center text-white">Don't have an account yet?</p>
                <Link href="/register">
                    <span className="block text-center text-blue-500 hover:underline mt-2">Register</span>
                </Link>
            </div>
        </div>
    );
};

export default Login;
