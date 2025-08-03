import { cookies } from "next/headers";
import prismaclient from "./service/prisma";
import { NextResponse } from "next/server";
import { verifyToken } from "./service/jwt";

export async function getusercookie(){
  const usercookie=await cookies();
      const token=usercookie.get('token')?.value;
      if(!token)return null
      const data=verifyToken(token);
    
      const user=await prismaclient.user.findUnique({
        where:{
            id:data.id
        },
        omit:{
            password:true
        }
      })
      if(!user)return null;
      return user 
}