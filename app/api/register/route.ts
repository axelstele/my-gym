import { adminAuth } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    // Crea un nuevo usuario con Firebase Authentication
    const userRecord = await adminAuth.createUser({
      displayName: [firstName, lastName].join(' '),
      email,
      password,
    });

    return NextResponse.json({ uid: userRecord.uid, email: userRecord.email }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating new user:', error);
    return NextResponse.json({ message: 'Error creating new user', error: error.message }, { status: 500 });
  }
}
