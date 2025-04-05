import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { userId, friendId } = await request.json();

    const friendship = await prisma.friendTab.create({
      data: {
        userId: userId,
        friendId: friendId,
        state: 'PENDING'
      }
    });

    return NextResponse.json({ 
      message: '好友邀请已发送',
      friendship 
    });

  } catch (error) {
    console.error('发送好友邀请失败:', error);
    return NextResponse.json({ error: '发送好友邀请失败' }, { status: 500 });
  }
}