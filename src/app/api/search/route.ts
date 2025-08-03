//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const q = searchParams.get("q") || "";
    const sal = parseInt(searchParams.get("sal") || "0");

    const resp = await prismaclient.job.findMany({
      where: {
        title: {
          contains: q,
          mode: "insensitive"
        },
        salary: {
          gte: sal
        }
      }
    });

    return NextResponse.json({ success: true, data: resp });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
