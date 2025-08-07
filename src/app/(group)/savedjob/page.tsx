//@ts-nocheck
'use client'
import React, { useContext } from 'react'

import Card from '@/components/card'
import { savecontext } from '@/components/theme'
function page() {
    const {save,setsave}=useContext(savecontext)
  return (
    <div>
      <h1 className='text-3xl font-bold text-blue-950 w-full flex justify-center mt-10'>Saved Jobs</h1>
      <Card jobs={save}/>
    </div>
  )
}

export default page
