//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const body=await req.json();
    try{
        const upduser=await prismaclient.user.update({
        where:{
            id:body.id
        },
        data:body.data
    })
    return NextResponse.json({
        success:true,
        data:upduser
    })
    }
    catch(e){
        console.log(err);
       return NextResponse.json({
        success:false
        
    })
    }
    
}