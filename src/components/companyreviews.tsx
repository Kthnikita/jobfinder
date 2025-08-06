//@ts-nocheck
'use client'
import { Box, Tabs, Text } from '@radix-ui/themes';
import { Briefcase, Clock, IndianRupee, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import Applybtn from './applybtn';
function Companyreviews({ company, compreview }) {
  const [content, setContent] = useState('');

  async function handelreview() {
    if (!content.trim()) return;

    const obj = {
      content,
      company_id: company.id,
    };

    await fetch("http://localhost:3000/api/review", {
      method: "POST",
      body: JSON.stringify(obj),
    });

    setContent(''); 
  }

  return (
    <Tabs.Root defaultValue="reviews" className="w-full">
      <Tabs.List className="border-b border-gray-200 mb-4 flex gap-4">
        <Tabs.Trigger
          value="reviews"
          className="py-2 px-4 text-gray-700 hover:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
        >
          Reviews
        </Tabs.Trigger>
        <Tabs.Trigger
          value="jobs"
          className="py-2 px-4 text-gray-700 hover:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
        >
          Listed Jobs
        </Tabs.Trigger>
      </Tabs.List>

      <Box>
        <Tabs.Content value="reviews">
          <div className="mb-4">
            <textarea
              type="text"
              placeholder="Write a review..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 text-sm mb-2"
            />
            <button
              onClick={handelreview}
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
            >
              Submit
            </button>
          </div>

          <div className="space-y-3 max-h-60 overflow-y-auto px-1 custom-scrollbar">
  {compreview?.length > 0 ? (
    compreview.map((val) => (
      <div
        key={val.id}
        className="border border-gray-200 p-4 rounded-lg shadow-md bg-white flex gap-3 items-start"
      >
        <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-semibold text-sm">
          {val?.user?.name?.[0] || "U"}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">{val?.user?.name || "Anonymous"}</h3>
            
          </div>
          <p className="mt-1 text-gray-700 italic">“{val.content}”</p>

        </div>
      </div>
    ))
  ) : (
    <p className="text-sm text-gray-500 text-center">No reviews yet.</p>
  )}
</div>

        </Tabs.Content>

     <Tabs.Content value="jobs">
  <div className="space-y-4">
    {company.jobs && company.jobs.length > 0 ? (
      company.jobs.map((job) => (
        <div
          key={job.id}
          className="relative border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition duration-200"
        >
          
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                <Briefcase size={18} className="text-blue-800" />
                {job.title}
              </h3>

              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {job.description}
              </p>
            </div>
            <div className='flex justify-end'><Applybtn id={job.id}/></div>
          </div>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-700">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-gray-500" />
              {job.location || "Not specified"}
            </span>
            <span className="flex items-center gap-1">
              <IndianRupee size={14} className="text-gray-500" />
              {job.salary?.toLocaleString() || "N/A"}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-gray-500" />
              {job.employement_type || "N/A"}
            </span>
          </div>
        </div>
      ))
    ) : (
      <Text size="2" color="gray" className="text-center">
        No jobs listed yet.
      </Text>
    )}
  </div>
</Tabs.Content>


      </Box>
    </Tabs.Root>
  );
}

export default Companyreviews;
