
'use client'
import prismaclient from "@/service/prisma";
import { cookies } from "next/headers"
import Header from "@/components/Header";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Theme } from "@radix-ui/themes";
import { company, user } from "../../../generated/prisma";
export const context=createContext<{
  user?:user & {company:company} |null,
  setuser?:(value:user & {company:company})=>void
}>({});
function layout({children}:{children:ReactNode}) {
    // const cookie=await cookies();
    // const useremail=cookie.get('token')?.value;
    // const userrole=await prismaclient.user.findUnique({
    //     where:{
    //         email:useremail,
    //     }
    // })
    // const req=await fetch("http://localhost:3000/api/currentuser");
    // const resp=await req.json();
    // const userrole=resp.userdata;
    const [user,setuser]=useState<user&{company:company}|null>(null);
    useEffect(()=>{
      async function getuser(){
        const req=await fetch("http://localhost:3000/api/currentuser");
    const resp=await req.json();
    if(resp.success){
    setuser(resp.data);
    }
      }
      getuser();
    },[])

  return (
    <div>
     <Theme>
      <context.Provider value={{user,setuser}}>
       <Header/>
      {children}
     </context.Provider>
     </Theme>
    </div>
  )
}

export default layout
