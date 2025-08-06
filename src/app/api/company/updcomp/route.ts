
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const body=await req.json();
    const newcom={
    name:body.name,
     ownerid:body.id,
  description:body.des,
  img_url:body.img
}
    try{
        const updcomp=await prismaclient.company.update({
        where:{
            ownerid:body.id
        },
        data:newcom
    })
    return NextResponse.json({
        success:true,
        data:updcomp
    })
    }
    catch(e:any){
        console.log(e)
          return NextResponse.json({
        success:false
    })

    }
}