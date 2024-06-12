// api/adminlogin.ts

import Admin from '@/models/Admin'
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { email, password } = await request.json();

    await connect();

    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
        return new NextResponse("Admin not found", { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, existingAdmin.password);

    if (!passwordMatch) {
        return new NextResponse("Invalid password", { status: 401 });
    }

    return new NextResponse("Login successful", { status: 200 });
};
