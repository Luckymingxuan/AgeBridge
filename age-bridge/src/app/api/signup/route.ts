import { prisma } from '@/lib/prisma';  // 这里的路径现在是正确的
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { username, password, phone, userType } = await request.json();
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        phone,
        userType: userType === 'young' ? 'YOUNG' : 'ELDER'
      }
    });

    return NextResponse.json({ message: '注册成功' });
  } catch (error) {
    return NextResponse.json({ error: '注册失败' }, { status: 500 });
  }
}