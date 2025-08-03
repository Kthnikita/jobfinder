//@ts-nocheck
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