import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-between p-5 items-center bg-slate-600 ' >
            <div>
                <Link href='/'>
                <li>Home</li>
                </Link>
            </div>
            <div className='flex gap-10'>
                <Link href='/login'>
                <li>Login</li>
                </Link>
                <Link href='/register'>
                <li>Register</li>
                </Link>
                <Link href='/'>
                <li>Logout</li>
                </Link>
            <div>
            </div>
            </div>
        </ul>
    </div>
  )
}

export default Navbar