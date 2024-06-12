import User from '@/models/User';
import connect from '@/utils/db';
// import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const GET = async (request: any) => {
    // const { name, email, password } = await request.json();
    try {
        await connect();
        const allusers = await User.find();
        return NextResponse.json(allusers, { status: 200 });
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
