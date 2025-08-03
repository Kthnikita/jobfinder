//@ts-nocheck
import { generateToken } from "@/service/jwt";
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
   const resp=await req.json();
   const newuser=await prismaclient.user.create({
      data:resp
   })
   const token=generateToken({id:newuser.id})
   const resl= NextResponse.json({
    success:true,
    data:newuser
   })
   resl.cookies.set('token',token)
   return resl;
}