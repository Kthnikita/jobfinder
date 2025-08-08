// @ts-nocheck
'use client';

import { context } from '@/app/(group)/layout';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

function Applybtn({ id ,setuserapplication}) {
const {user}=useContext(context);
  async function handelapply() {
    const req = await fetch("http://localhost:3000/api/job/apply/" + id);
    const resp = await req.json();
    if (resp.success) {
      alert("Application submitted successfully!");
      setuserapplication(true);
    } else {
      alert("Application failed. Please try again.");
    }
  }
  return (
    <>
    {user?<button
      onClick={handelapply}
      className="flex items-center gap-1 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-200 transition duration-200 shadow-sm"
    >
      <Send size={16} className="text-blue-700" />
      Apply
    </button>:<Link href="/login"><button
      className="flex items-center gap-1 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-200 transition duration-200 shadow-sm"
    >
      <Send size={16} className="text-blue-700" />
      Apply
    </button></Link>}
    </>
  );
}

export default Applybtn;
