import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { phone, password } = await request.json();

    // 通过手机号查找用户
    const user = await prisma.user.findUnique({
      where: {
        phone: phone
      }
    });

    if (!user) {
      return NextResponse.json({ error: '手机号或密码错误' }, { status: 401 });
    }

    // 验证密码
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: '手机号或密码错误' }, { status: 401 });
    }

    return NextResponse.json({
      message: '登录成功',
      userType: user.userType
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: '登录失败' }, { status: 500 });
  }
}