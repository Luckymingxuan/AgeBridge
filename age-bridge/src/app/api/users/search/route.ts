import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const phone = searchParams.get('phone');

  if (!phone) {
    return NextResponse.json({ error: '请输入手机号' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { phone },
      select: {
        id: true,
        username: true,
        phone: true,
        userType: true,
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: '搜索失败' }, { status: 500 });
  }
}