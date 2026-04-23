import { NextRequest, NextResponse } from 'next/server';
import productsData from '@/data/products.json';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
