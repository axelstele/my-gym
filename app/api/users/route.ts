import { firestore } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/app/utils';

type User = {
  id: string;
  name: string;
  email: string;
}

export async function GET(req: NextRequest) {
  try {
    // Obtener el rol de la query string
    const role = req.nextUrl.searchParams.get('role');

    // Verificar que se haya proporcionado un rol
    if (!role) {
      return NextResponse.json({ error: 'Role is required' }, { status: 400 });
    }

    // Obtener usuarios con el rol proporcionado
    const snapshot = await firestore.collection('users')
      .where('role', '==', role)
      .get();

    const users: User[] = [];

    // Recorrer los documentos y obtener la información de autenticación
    for (const item of snapshot.docs) {
      const authUserData = await adminAuth.getUser(item.data().userAuthenticationId);

      users.push({
        id: item.data().userAuthenticationId,
        name: authUserData.displayName!,
        email: authUserData.email!,
      });
    }

    // Devolver los usuarios filtrados por rol
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
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
      password: `${firstName.toLowerCase()}!123`
    });

    await adminAuth.generateEmailVerificationLink(email);

    // Add the user to Firestore
    const newUserRef = await firestore.collection('users').add({
      userAuthenticationId: userRecord.uid,
      role,
    });

    // Return success response
    return NextResponse.json({ id: newUserRef.id, message: 'User created successfully' });
  } catch (error) {
    return NextResponse.error();
  }
}