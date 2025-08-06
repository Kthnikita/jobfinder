//@ts-nocheck
"use client";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { FilePenLine } from "lucide-react";
import React, { FormEvent, useContext, useState } from "react";
import { context } from "@/app/(group)/layout";
function Editcomp({ id }) {
    const{user,setuser}=useContext(context)
    console.log('user',user);
    const comp=user?.company;
    const [company,setcompany]=useState(comp)
    console.log(company)
  const [name, setname] = useState<string>(company?.name);
  const [des, setdes] = useState<string>(company?.description);
  const [img, setimg] = useState(company?.img_url);
  const [loading, setloading] = useState(false);
  async function handelsubmit() {
    const obj = {
      name,
      des,
      img,
    };
    const request = await fetch("http://localhost:3000/api/company/updcomp", {
      method: "POST",
      body: JSON.stringify({
        id,
        ...obj,
      }),
    });
    const resp = await request.json();
    if (resp.success) {
      alert("editedd");
    }
  }
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="text-gray-500 hover:text-blue-600 transition-colors bg-transparent border-none">
            <FilePenLine size={20} />
          </button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Make changes to your company.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Name
              </Text>
              <TextField.Root
                placeholder="Enter name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Description
              </Text>
              <TextField.Root
                placeholder="Enter description"
                value={des}
                onChange={(e) => setdes(e.target.value)}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Image
              </Text>
              <TextField.Root
                placeholder="Enter image url"
                value={img}
                onChange={(e) => setimg(e.target.value)}
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button onClick={handelsubmit}>Save</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}

export default Editcomp;
