// app/api/register/route.ts

import { auth } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Crea un nuevo usuario con Firebase Authentication
    const userRecord = await auth.createUser({
      email,
      password,
    });

    return NextResponse.json({ uid: userRecord.uid, email: userRecord.email }, { status: 201 });
  } catch (error) {
    console.error('Error creating new user:', error);
    return NextResponse.json({ message: 'Error creating new user', error: error.message }, { status: 500 });
  }
}
