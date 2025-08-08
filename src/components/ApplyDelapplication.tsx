//@ts-nocheck
'use client'
import React, { useEffect, useState } from 'react'
import Application_del_btn from './Application_del_btn'
import Applybtn from './applybtn'
function ApplyDelapplication({id,data}) {
  const[userapplication,setuserapplication]=useState(false);
useEffect(() => {
    if (data) {
      setuserapplication(true);
    } else {
      setuserapplication(false);
    }
  }, [data]);
//   if(data){
//   setuserapplication(true)} why?
  return (
    <div>
      {!userapplication && <Applybtn id={id} setuserapplication={setuserapplication}/>}
      {userapplication &&  <Application_del_btn appid={data?.id} setuserapplication={setuserapplication}/>}
    </div>
  )
}

export default ApplyDelapplication
