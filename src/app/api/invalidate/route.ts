import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  if (
    request.headers.get('x-wagou-bypass-token') !==
    process.env.MICROCMS_BYPASS_TOKEN
  ) {
    return NextResponse.json({ message: 'Invalid bypass token' }, {
      status: 401,
    });
  }

  revalidatePath('/');
  revalidatePath('/news');
  revalidatePath('/news/');
  revalidatePath('/news/[id]', 'page');

  return NextResponse.json({ revalidated: true });
}
