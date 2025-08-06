// @ts-nocheck
'use client';

import { Send } from 'lucide-react';

function Applybtn({ id }) {
  async function handelapply() {
    const req = await fetch("http://localhost:3000/api/job/apply/" + id);
    const resp = await req.json();
    if (resp.success) {
      alert("Application submitted successfully!");
    } else {
      alert("Application failed. Please try again.");
    }
  }

  return (
    <button
      onClick={handelapply}
      className="flex items-center gap-1 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-200 transition duration-200 shadow-sm"
    >
      <Send size={16} className="text-blue-700" />
      Apply
    </button>
  );
}

export default Applybtn;
