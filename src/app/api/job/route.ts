//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
   const resp=await req.json();
   const db=await prismaclient.openings.create({
      data:resp
   })
   return NextResponse.json({
    success:true,
    job:db
   })
}
export async function GET(req:NextRequest){
   const sp=req.nextUrl.searchParams;
   const page=sp.get('page')||1;
   const db=await prismaclient.openings.findMany({
      include:{
         comp:true
      },
      take:10,
      skip:(page-1)*10
   });
   return NextResponse.json({
      success:true,
      job:db
   })
}

export async function DELETE(req:NextRequest){
   const body= await req.json();
   try{
      const jobdel=await prismaclient.openings.delete({
      where:{
         id:body
      }
   })
    return NextResponse.json({
      success:true
   })
   }
   catch(e){
      console.log(e.message)
      return NextResponse.json({
      success:false
   })
   }
}