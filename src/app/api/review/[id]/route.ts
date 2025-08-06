//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}){
    const id=params.id;
    console.log(id);
    const resp=await prismaclient.review.findMany({
        where:{
            company_id:id
        },
        include:{
            user:true
        }
    })
    return NextResponse.json({
        success:true,
        allreview:resp
    })
}