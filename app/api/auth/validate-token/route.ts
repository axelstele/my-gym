import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, firestore } from '@/app/utils';

export async function POST(req: NextRequest) {
  try {
    // Recibe el token desde el cuerpo de la solicitud
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json({ error: 'Missing token' }, { status: 400 });
    }

    const decodedToken = await adminAuth.verifyIdToken(token);
    const userUid = decodedToken.uid;

    const snapshot = await firestore.collection('users')
      .where('userAuthenticationId', '==', userUid)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userInfo = snapshot.docs[0];

    const idToken = token;

    const userData = {
      id: userInfo.id,
      token: idToken,
      ...userInfo.data(),
    };

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error('Error verifying token or fetching user data:', error);

    // if (error instanceof FirebaseError) {
    //   if (error.code === 'auth/invalid-token') {
    //     return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    //   }
    // }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
