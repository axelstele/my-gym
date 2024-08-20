import { NextRequest, NextResponse } from "next/server";
import { firestore } from '@/app/utils';

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'Plan ID is required' }, { status: 400 });
  }

  try {
    await firestore.collection('plans').doc(id).delete();
    return NextResponse.json({ message: 'Plan deleted successfully' });
  } catch (error) {
    return NextResponse.error();
  }
}