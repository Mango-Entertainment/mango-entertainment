import prisma from "../../../prisma/prisma.db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
    const seriesSelection = await prisma.selection.findMany({
      where: { category: 'TV Series' },
      include: {
        RegularThumb: true,
      },
    })
    return NextResponse.json({seriesSelection})
}