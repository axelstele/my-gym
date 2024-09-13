import { firestore } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/app/utils';

type User = {
  id: string;
  name: string;
  email: string;
}

export async function GET() {
  try {
    const snapshot = await firestore.collection('users')
      .where('role', '==', 'basic')
      .get();

    const users: User[] = [];

    for (const item of snapshot.docs) {
      const authUserData = await adminAuth.getUser(item.data().userAuthenticationId);

      users.push({
        id: item.data().userAuthenticationId,
        name: authUserData.displayName!,
        email: authUserData.email!,
      })
    }

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body to get the user data
    const { firstName, lastName, email, role } = await req.json();

    // Validate the data
    if (!firstName || !lastName || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Crea un nuevo usuario con Firebase Authentication
    const userRecord = await adminAuth.createUser({
      displayName: [firstName, lastName].join(' '),
      email,
      password: `${firstName}!123` 
    });

    // Add the user to Firestore
    const newUserRef = await firestore.collection('users').add({
      userAuthenticationId: userRecord.uid,
      role: 'basic',
    });

    // Return success response
    return NextResponse.json({ id: newUserRef.id, message: 'User created successfully' });
  } catch (error) {
    return NextResponse.error();
  }
}
