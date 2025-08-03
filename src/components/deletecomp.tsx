//@ts-nocheck
'use client'
function Deletecomp({id}) {
    async function handeldelete() {
        const req=await fetch("http://localhost:3000/api/view_company/"+id,{
          method:"DELETE"
        })
        const resp=await req.json();
        if(resp.success){
          alert("deleted");
        }
        else{
          alert("nooo");
        }
    }
  return (
    <div>
      <button onClick={handeldelete}>Delete</button>
    </div>
  )
}

export default Deletecomp
