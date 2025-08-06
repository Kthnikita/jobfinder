//@ts-nocheck
import prismaclient from "@/service/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
const cookie= cookies();
cookie.delete('token')
return NextResponse.json({
    success:true,
    msg:"token deleted"
})
}

export async function DELETE(req:NextRequest){
   const body=await req.json();
   const delacc=await prismaclient.user.delete({
    where:{
        id:body
    }
   })
   return NextResponse.json({
    success:true
   })
}