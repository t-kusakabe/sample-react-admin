import { NextResponse } from 'next/server';

import { db } from '@/db/db';
import { users, userSchema } from '@/db/schema';

export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json(allUsers);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = userSchema.parse(body);
    await db.insert(users).values(validated);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: `Invalid input ${error}` }, { status: 400 });
  }
}
