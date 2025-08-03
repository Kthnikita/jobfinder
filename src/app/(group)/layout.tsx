//@ts-nocheck
'use client'
import prismaclient from "@/service/prisma";
import { cookies } from "next/headers"
import Header from "@/components/Header";
import { createContext, useEffect, useState } from "react";
export const context=createContext();
function layout({children}) {
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
    const [user,setuser]=useState(null);
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
     <context.Provider value={{user,setuser}}>
       <Header/>
      {children}
     </context.Provider>
    </div>
  )
}

export default layout
