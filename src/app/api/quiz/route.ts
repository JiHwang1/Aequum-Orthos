import { NextRequest, NextResponse } from 'next/server';
import quizData from '@/data/quiz.json';
import { z } from 'zod';

const quizResponseSchema = z.object({
  arch_type: z.string(),
  pain_area: z.string()
});

export async function GET() {
  return NextResponse.json(quizData);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const parsedData = quizResponseSchema.parse(body);
    
    // Simple logic: return a recommendation
    const recommendation = {
      message: "Thank you for completing the quiz. Based on your answers, we recommend the 'Aequum Relief+' product.",
      productSlug: "relief-plus",
      answers: parsedData
    };

    return NextResponse.json(recommendation, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input', issues: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
