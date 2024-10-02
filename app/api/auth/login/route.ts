import { NextRequest, NextResponse } from 'next/server';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { clientAuth, firestore } from '@/app/utils';
import { FirebaseError } from 'firebase/app';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
    }

    const credentials = await signInWithEmailAndPassword(clientAuth, email, password);
    const user = credentials.user;
    const idToken = await user.getIdToken();


    const snapshot = await firestore.collection('users')
      .where('userAuthenticationId', '==', user.uid)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userInfo = snapshot.docs[0];

    const userData = {
      id: userInfo.id,
      token: idToken,
      ...userInfo.data(),
    };

    return NextResponse.json(userData);
  } catch (error) {
    console.error('Error logging in user:', error);

    if (error instanceof FirebaseError) {
      if (error.code === 'auth/invalid-credential') {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
