
import { getusercookie } from "@/helper";
import prismaclient from "@/service/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const user=await getusercookie();
    if(!user)return null
 const body=await req.json();
const newcom={
    name:body.name,
     ownerid:user?.id,
  description:body.des,
  img_url:body.img
}
 const com=await prismaclient.company.create({
    data:newcom
 })
 
 return NextResponse.json({
   success:true
 })
}