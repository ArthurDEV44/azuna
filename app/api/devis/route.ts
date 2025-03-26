import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { Status } from '@prisma/client';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, propertyType, propertySize, services, message } = body;

    const devis = await prisma.devis.create({
      data: {
        name,
        email,
        phone,
        propertyType,
        propertySize,
        services,
        message,
        status: Status.PENDING
      }
    });

    return NextResponse.json(devis, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création du devis:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du devis' },
      { status: 500 }
    );
  }
} 