import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET → گرفتن همه پست‌ها
export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(posts);
}

// POST → ساخت پست جدید
export async function POST(req: Request) {
  const body = await req.json();

  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      body: body.body,
      userId: Number(body.userId),
    },
  });

  return NextResponse.json(newPost, { status: 201 });
}
