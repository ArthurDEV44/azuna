import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, propertyType } = body

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message,
        propertyType
      }
    })

    return NextResponse.json(contact, { status: 201 })
  } catch (error) {
    console.error('Erreur lors de la création du contact:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création du contact' },
      { status: 500 }
    )
  }
}
