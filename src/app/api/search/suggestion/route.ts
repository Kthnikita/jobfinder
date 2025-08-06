//@ts-nocheck
import prismaclient from "@/service/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
 const searchParams=req.nextUrl.searchParams;
 const q=searchParams.get('q');
 const sugg=await prismaclient.openings.findMany({
    where:{
        title:{
            contains:q,
            mode:"insensitive"
        }
      
    },
    take:5,
    select:{
        id:true,
        title:true
    }
 })
 return NextResponse.json({
    success:true,
    data:sugg
 })
}