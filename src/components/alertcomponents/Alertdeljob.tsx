// @ts-nocheck
'use client'
import { context } from '@/app/(group)/layout';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import React, { useContext } from 'react';
import { Trash } from "lucide-react";

function Alertdeljob({ id }) {
  async function handeljob() {
    const req = await fetch("http://localhost:3000/api/job", {
      method: "DELETE",
      body: JSON.stringify(id),
    });
    const resp = await req.json();
    if (resp.success) {
      alert("Job Deleted");
    } else {
      alert("Not Deleted");
    }
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          className="text-gray-500 hover:text-red-600 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
          title="Delete Job"
        >
          <Trash size={20} />
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Content
        maxWidth="450px"
        className="rounded-xl border border-gray-300 shadow-2xl bg-white p-6"
      >
        <AlertDialog.Title className="text-lg font-semibold text-gray-800">
          Delete Job
        </AlertDialog.Title>
        <AlertDialog.Description
          size="2"
          className="text-sm text-gray-600 mt-2"
        >
          Are you absolutely sure you want to delete this job? This action cannot be undone.
        </AlertDialog.Description>

        <Flex gap="3" mt="5" justify="end">
          <AlertDialog.Cancel asChild>
            <Button variant="soft" color="gray" className="px-4 py-1.5 rounded-md">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button
              variant="solid"
              color="red"
              className="px-4 py-1.5 rounded-md"
              onClick={handeljob}
            >
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

export default Alertdeljob;
