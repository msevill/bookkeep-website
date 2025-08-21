import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { postInquiryToStrapi } from '../../../utils/postInquiryToStrapi';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
     console.log(body)
    // Validate required fields
    const { name, email, phone, inquiry } = body;
    if (!name || !email || !phone || !inquiry) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
   
    const response = await postInquiryToStrapi({ name, email, phone, inquiry });
    const result = await response.json();
    return NextResponse.json(result, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit inquiry.' }, { status: 500 });
  }
}
