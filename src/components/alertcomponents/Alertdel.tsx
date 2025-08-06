//@ts-nocheck
'use client'
import { context } from '@/app/(group)/layout';
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React, { useContext } from 'react'
import {Trash} from "lucide-react";
function Alertdel() {
    const {user,setuser}=useContext(context);
    async function handelaccount(){
  const req=await fetch("http://localhost:3000/api/userauth/logout",{
    method:"DELETE",
    body:JSON.stringify(user.id)
  })
  const resp=await req.json();
  if(resp.success){
    alert("account Deleted")
    setuser(null)
  }
}
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
				<Button variant="solid" color="red" onClick={handelaccount}>
					Delete
				</Button>
			</AlertDialog.Action>
		</Flex>
	</AlertDialog.Content>
</AlertDialog.Root>

    </div>
  )
}

export default Alertdel
