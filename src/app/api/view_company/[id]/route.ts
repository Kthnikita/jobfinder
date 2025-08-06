
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";
type typeparam=Promise<{
  id:string
}>
export async function GET(req:NextRequest,{params}:{params:typeparam}){
const awaitparam=await params
    const id=awaitparam.id;
  const company=await prismaclient.company.findUnique({
    where:{
        id
    },
    include:{
      owner:true,
      jobs:true
    }
  })
  // const owner=await prismaclient.user.findUnique({
  //   where:{
  //       id:company?.ownerid
  //   }
  // })
  // const detail={
  //   ...company,
  //   ...owner
  // }
  return NextResponse.json({
    success:true,
    data:company
  })
}

export async function DELETE(req:NextRequest,{params}:{params:typeparam}){
  const awaitparam=await params
    const id=awaitparam.id;
  const resp=await prismaclient.company.delete({
    where:{
      id
    }
  })
  if(!resp){
    return NextResponse.json({
      success:false
    })
  }
  else{
    return NextResponse.json({
      success:true,
      data:resp
    })
  }
}