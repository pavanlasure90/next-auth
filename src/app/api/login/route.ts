import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { email, password } = await request.json();

    await connect();

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        return new NextResponse("User not found", { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
        return new NextResponse("Invalid password", { status: 401 });
    }

    return new NextResponse("Login successful", { status: 200 });
};
