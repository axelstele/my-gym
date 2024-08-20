import { firestore } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

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


export async function POST(req: NextRequest) {
  try {
    // Parse the request body to get the plan data
    const { name, price, type } = await req.json();

    // Validate the data
    if (!name || !price || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Add the plan to Firestore
    const newPlanRef = await firestore.collection('plans').add({
      name,
      price,
      type,
    });

    // Return success response
    return NextResponse.json({ id: newPlanRef.id, message: 'Plan created successfully' });
  } catch (error) {
    return NextResponse.error();
  }
}
