import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      where: {
        products: {
          some: {
            status: "ACTIVE",
            stock: { gt: 0 },
            seller: { status: "ACTIVE" },
          },
        },
      },
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        slug: true,
        _count: {
          select: {
            products: {
              where: {
                status: "ACTIVE",
                stock: { gt: 0 },
                seller: { status: "ACTIVE" },
              },
            },
          },
        },
      },
    });

    return NextResponse.json({
      data: categories.map(({ _count, ...category }) => ({
        ...category,
        productCount: _count.products,
      })),
    });
  } catch {
    return NextResponse.json(
      { error: "Kategoriyalarni yuklashda server xatoligi yuz berdi." },
      { status: 500 },
    );
  }
}
