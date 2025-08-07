//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const q = searchParams.get("q") || "";
    const sal = parseInt(searchParams.get("sal"))||0;
    const page=parseInt(searchParams.get('page'))||1;
    const loc=searchParams.get("loc")||"";
    const et=searchParams.get('et')?.split(",")||[];
    const jt=searchParams.get('jt')?.split(",")||[];
    const resp = await prismaclient.openings.findMany({
      where: {
        OR:[
          {title:{
            contains:q,
            mode:"insensitive"
          }},
          {
            comp:{
              name:{
                contains:q,
                mode:"insensitive"
              }
            }
          }
        ],
        salary: {
          gte: sal
        },
        location: {
              contains: loc,
              mode: "insensitive",
            },
        // employement_type:et.length>0?{in:et}:{in: ["remote"]},
        // job_type:jt.length>0?{in:jt}:{in: ["remote", "huybrid"]},
      },
      include:{
        comp:true
      }
    });

    return NextResponse.json({ success: true, data: resp });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
