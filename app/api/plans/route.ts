import { firestore } from '@/app/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const snapshot = await firestore.collection('plans').get();
    const plans = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(plans);
  } catch (error) {
    return NextResponse.error();
  }
}
