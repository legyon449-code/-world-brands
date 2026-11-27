import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const querySchema = z.object({
  q: z.string().trim().max(100).optional(),
  category: z.string().trim().max(80).optional(),
  page: z.coerce.number().int().min(1).max(1000).default(1),
  limit: z.coerce.number().int().min(1).max(40).default(12),
});

export async function GET(request: NextRequest) {
  const parsed = querySchema.safeParse(
    Object.fromEntries(request.nextUrl.searchParams.entries()),
  );

  if (!parsed.success) {
    return NextResponse.json(
      { error: "So‘rov parametrlari noto‘g‘ri.", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { q, category, page, limit } = parsed.data;
  const where = {
    status: "ACTIVE" as const,
    stock: { gt: 0 },
    ...(category ? { category: { slug: category } } : {}),
    ...(q
      ? {
          OR: [
            { name: { contains: q, mode: "insensitive" as const } },
            { description: { contains: q, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  try {
    const [items, total] = await prisma.$transaction([
      prisma.product.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          name: true,
          slug: true,
          description: true,
          price: true,
          currency: true,
          stock: true,
          category: { select: { name: true, slug: true } },
          images: {
            orderBy: { position: "asc" },
            take: 1,
            select: { url: true, alt: true },
          },
          seller: { select: { storeName: true, status: true } },
        },
      }),
      prisma.product.count({ where }),
    ]);

    return NextResponse.json({
      data: items.map((item) => ({
        ...item,
        price: item.price.toString(),
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Mahsulotlarni yuklashda server xatoligi yuz berdi." },
      { status: 500 },
    );
  }
}
