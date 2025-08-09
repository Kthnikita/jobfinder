//@ts-nocheck
'use client';

import { Button, Dialog, Flex, Text } from '@radix-ui/themes';
import React, { useContext, useEffect, useState } from 'react';
import { Trash } from 'lucide-react';
import { context } from '@/app/(group)/layout';
import Application_del_btn from './Application_del_btn';
import { application, company, openings, user } from '../../generated/prisma';
function Viewapplicants({ job }) {
  const [applicants, setapplicants] = useState([]);
  const { user } = useContext(context);
  useEffect(() => {
    async function getapplicants() {
      const req = await fetch("/api/job/applicants/" + job.id);
      const resp = await req.json();
      if (resp.success) {
        setapplicants(resp.data);
      }
    }
    getapplicants();
  }, [job.id]); //doubt
if (!user || user?.usercomp?.id !== job.comp_id) return null
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="outline" color="blue">Applicants</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="500px">
          <Dialog.Title>Applicants</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            See who applied to this job.
          </Dialog.Description>

          <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar pr-2">
            {applicants.length > 0 ? (
              applicants.map((val:(application & user)) => (
                <div
                  key={val.id}
                  className="flex items-center justify-between px-3 py-2 border rounded-lg bg-gray-50 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm uppercase">
                      {val.user.name?.[0] || 'U'}
                    </div>
                    <Text className="text-sm font-medium text-gray-800">{val.user.name}</Text>
                  </div>
              
                   <Application_del_btn appid={val.id}/>
                </div>
              ))
            ) : (
              <Text size="2" color="gray" className="text-center">
                No applicants yet.
              </Text>
            )}
          </div>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}

export default Viewapplicants;
