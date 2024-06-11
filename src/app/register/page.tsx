// "use client"
// import React, { useState } from 'react'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'

// const Register = () => {
//     const [error, setError] = useState('')
//     const router = useRouter()

//     const isValidEmail = (email: string) => {
//         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//         return emailRegex.test(email);
//     }

//     const handleSubmit = async (e: any) => {
//         e.preventDefault();
//         const email = e.target[0].value
//         const password = e.target[1].value

//         if (!isValidEmail(email)) {
//             setError("Email is invalid")
//             return
//         }
//         if (!password || password.length < 8) {
//             setError("Password is invalid")
//             return
//         }

//         try {
//             const res = await fetch('/api/register', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     email,
//                     password
//                 })
//             })
//             if (res.status === 400) {
//                 setError("This email is already registered")

//             }
//             if (res.status === 200) {
//                 setError("")
//                 router.push('/login');
//             }
//         } catch (error) {
//             setError("Error, Try again")
//             console.log(error)
//         }
//     }

//     return (
//         <div className='flex min-h-screen flex-col items-center justify-between p-24'>
//             <div className='bg-[#757474] p-8 rounded shadow-md w-96'>
//                 <h1 className='text-4xl text-center font-semibold mb-8 text-white'>Register</h1>
//                 <form onSubmit={handleSubmit}>
//                     <input type="email"
//                         className='w-full border border-grey-300 rounded text-black px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black'
//                         placeholder='Email'
//                         required
//                     />
//                     <input type="password"
//                         className='w-full border border-grey-300 rounded text-black px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black'
//                         placeholder='Password'
//                         required
//                     />
//                     {error && <p className='text-red-600 text-[16px] mb-4'>{error}</p>}
//                     <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Register</button>
//                 </form>
//                 <div className='block text-center text-gray-500 mt-4'>-OR-</div>
//                 <p className='block text-center text-white'>Already have an account?</p>
//                 <Link className='block text-center text-blue-500 hover:underline mt-2' href='/login'>
//                     Login
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default Register




"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
    const [error, setError] = useState('')
    const router = useRouter()

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }

    const isValidName = (name: string) => {
        return name && name.length > 0;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        if (!isValidName(name)) {
            setError("Name is invalid")
            return
        }
        if (!isValidEmail(email)) {
            setError("Email is invalid")
            return
        }
        if (!password || password.length < 8) {
            setError("Password is invalid")
            return
        }

        try {
            const res = await fetch('/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            })
            if (res.status === 400) {
                setError("This email is already registered")

            }
            if (res.status === 200) {
                setError("")
                router.push('/login');
            }
        } catch (error) {
            setError("Error, Try again")
            console.log(error)
        }
    }

    return (
        <div className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='bg-[#757474] p-8 rounded shadow-md w-96'>
                <h1 className='text-4xl text-center font-semibold mb-8 text-white'>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className='w-full border border-grey-300 rounded text-black px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black'
                        placeholder='Name'
                        required
                    />
                    <input type="email"
                        className='w-full border border-grey-300 rounded text-black px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black'
                        placeholder='Email'
                        required
                    />
                    <input type="password"
                        className='w-full border border-grey-300 rounded text-black px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black'
                        placeholder='Password'
                        required
                    />
                    {error && <p className='text-red-600 text-[16px] mb-4'>{error}</p>}
                    <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Register</button>
                </form>
                <div className='block text-center text-gray-500 mt-4'>-OR-</div>
                <p className='block text-center text-white'>Already have an account?</p>
                <Link className='block text-center text-blue-500 hover:underline mt-2' href='/login'>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Register
