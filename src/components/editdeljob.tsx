// @ts-nocheck
'use client'
import { context } from '@/app/(group)/layout'
import Link from 'next/link'
import React, { useContext } from 'react'
import Alertdeljob from './alertcomponents/Alertdeljob'
import { Pencil } from "lucide-react"

function Editdeljob({ job }) {
  const { user } = useContext(context)

  if (!user || !job || user?.usercomp?.id !== job.comp_id) return null

  return (
    <div className="flex items-center gap-3 mt-3">
    
      <Link
        href={`/editjob?id=${job.id}`}
        className="flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 border border-blue-700 px-3 py-1.5 rounded-md transition duration-200 hover:bg-blue-50"
      >
        <Pencil size={16} /> Edit
      </Link>

     
      <Alertdeljob id={job.id} />
    </div>
  )
}

export default Editdeljob
