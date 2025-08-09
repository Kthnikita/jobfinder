//@ts-nocheck
'use client'
import React, { createContext, useState } from 'react'
import { Theme } from '@radix-ui/themes'
import Header from './Header';
export const savecontext=createContext();
function Themecontext({children}:{children:ReactNode}) {
    const[save,setsave]=useState([]);
  return (
    <div className=''>
      <Theme>
        <savecontext.Provider value={{save,setsave}}>
        {/* <Header/> */}
        {children}
       </savecontext.Provider>
      </Theme>
    </div>
  )
}

export default Themecontext
