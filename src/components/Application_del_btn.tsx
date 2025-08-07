//@ts-nocheck
'use client'

import { Trash } from "lucide-react";
import { useState } from "react";

function Application_del_btn({appid}) {
    const [application,setapplicants]=useState();
    async function handeldelete(){
    const req=await fetch("http://localhost:3000/api/job/applicants/"+appid,{method:"DELETE"})
    const resp=await req.json();
    if(resp.success){
      alert("successfully deleted")
    //   setapplicants(applicants.filter((val)=>val.id!==appid))
    }
    else{
        alert("failed");
    }
  }
  return (
    <div>
       <button
                      className="text-red-500 hover:text-red-700 transition"
                      title="Withdraw application"
                      onClick={handeldelete}
                    >
                       <Trash size={18} />
                    </button>
    </div>
  )
}

export default Application_del_btn
