//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}){
  const id=params.id;
  const company=await prismaclient.company.findUnique({
    where:{
        ownerid:id
    },
    include:{
      owner:true
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

export async function DELETE(req:NextRequest,{params}){
  const id=params.id;
  const resp=await prismaclient.company.delete({
    where:{
      ownerid:id
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