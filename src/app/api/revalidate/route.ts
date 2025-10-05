import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export const GET = (req: NextRequest) => {
  try {
    const searchParams: URLSearchParams = req.nextUrl.searchParams;
    const tag = searchParams.get('tag');

    if (!tag) {
      return NextResponse.json({ ok: false, error: "don't pass revalidate tag" }, { status: 400 });
    }

    revalidateTag(tag);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'internal server error', ok: false }, { status: 500 });
  }
};
