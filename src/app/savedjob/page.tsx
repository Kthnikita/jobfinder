//@ts-nocheck
'use client'
import React, { useContext } from 'react'

import Card from '@/components/card'
import { savecontext } from '@/components/theme'
function page() {
    const {save,setsave}=useContext(savecontext)
  return (
    <div>
      <Card jobs={save}/>
    </div>
  )
}

export default page
