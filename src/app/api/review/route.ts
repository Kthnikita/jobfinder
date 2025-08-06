
import { getusercookie } from "@/helper";
import prismaclient from "@/service/prisma";
import { connect } from "http2";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
  const body=await req.json();
  const curruser=await getusercookie();
  if(!curruser)return null;
  const obj={
    ...body,
    user_id:curruser.id
  }
  const resp=await prismaclient.review.create({
    data:obj
  })
  return NextResponse.json({
    success:true
  })
}

