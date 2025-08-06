//@ts-nocheck
'use client'

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { Trash } from "lucide-react";
import { useContext } from "react";
import { context } from "@/app/(group)/layout";
function Deletecomp({id,owner}) {
	const {user,setuser}=useContext(context)
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
	if(user?.id==owner){
		return (
    <div>
      <AlertDialog.Root>
	<AlertDialog.Trigger>
		<button
    className="text-gray-500 hover:text-red-600 transition-colors bg-transparent border-none"
  >
    <Trash size={20} />
  </button>
	</AlertDialog.Trigger>
	<AlertDialog.Content maxWidth="450px">
		<AlertDialog.Title>Revoke access</AlertDialog.Title>
		<AlertDialog.Description size="2">
			Are you sure? This application will no longer be accessible and any
			existing sessions will be expired.
		</AlertDialog.Description>

		<Flex gap="3" mt="4" justify="end">
			<AlertDialog.Cancel>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button variant="solid" color="red" onClick={handeldelete}>
					Delete
				</Button>
			</AlertDialog.Action>
		</Flex>
	</AlertDialog.Content>
</AlertDialog.Root>

    </div>
  )
	}
  
}

export default Deletecomp
