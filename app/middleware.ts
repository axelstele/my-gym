// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyIdToken } from './utils';

export async function middleware(req: NextRequest) {
  console.log('heeeeeeeey')
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.redirect('/login');
  }

  try {
    await verifyIdToken(token);
    return NextResponse.next();
  } catch (error) {
    console.error('Invalid or expired token:', error);
    return NextResponse.redirect('/login');
  }
}