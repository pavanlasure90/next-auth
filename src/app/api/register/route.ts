import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { name, email, password } = await request.json();

    await connect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return new NextResponse("Email already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        name, 
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return new NextResponse("User is registered", { status: 200 });
    } catch (error) {
        console.log("error", error);

        return new NextResponse("Internal Server Error", {
            status: 500,
        });
    }
};
