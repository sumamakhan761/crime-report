import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

export async function PATCH(
  request: Request,
  { params }: { params: { reportId: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await request.json();
    const report = await prisma.report.update({
      where: { id: params.reportId },
      data: { status },
    });

    return NextResponse.json(report);
  } catch (error) {
    console.error("Error updating report:", error);
    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}
