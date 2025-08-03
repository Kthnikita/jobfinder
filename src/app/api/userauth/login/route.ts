//@ts-nocheck
import { generateToken } from "@/service/jwt";
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
   const resp=await req.json();
   console.log(resp)
   const validuser=await prismaclient.user.findUnique({
      where:{
        email:resp.email
      }
   })
   const token=generateToken({id:validuser.id});
   if(validuser.password==resp.pass){
    const val=NextResponse.json({
        success:true,
        validuser
    })
    val.cookies.set('token',token);
    return val
   }

     return NextResponse.json({
    success:false,

   })
  
}