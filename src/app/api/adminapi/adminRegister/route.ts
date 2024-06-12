import Admin from '@/models/Admin';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { name, email, password } = await request.json();

    await connect();

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
        return new NextResponse("Email already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newAdmin = new Admin({
        name, 
        email,
        password: hashedPassword,
    });

    try {
        await newAdmin.save();
        return new NextResponse("Admin is registered", { status: 200 });
    } catch (error) {
        console.log("error", error);

        return new NextResponse("Internal Server Error", {
            status: 500,
        });
    }
};
