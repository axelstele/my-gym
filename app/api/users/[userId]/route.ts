import { adminAuth, firestore } from "@/app/utils";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const { userId } = params;

    if (!userId) {
      return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
    }

    // Delete the user from Firebase Authentication
    await adminAuth.deleteUser(userId);

    // Delete the user from Firestore
    const userSnapshot = await firestore.collection('users')
      .where('userAuthenticationId', '==', userId)
      .get();

    if (userSnapshot.empty) {
      return NextResponse.json({ error: 'User not found in Firestore' }, { status: 404 });
    }

    // Delete all matching user documents in Firestore
    const batch = firestore.batch();
    userSnapshot.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const { userId } = params;

    // Parse the request body to get updated user data
    const { firstName, lastName, email, role } = await req.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Update the user in Firebase Authentication
    await adminAuth.updateUser(userId, {
      displayName: `${firstName} ${lastName}`,
      email,
    });

    // Return success response
    return NextResponse.json({ message: 'User updated successfully' });
  } catch (error) {
    return NextResponse.error();
  }
}