// @ts-nocheck
'use client';
import Link from "next/link";
import { useContext } from "react";
import { savecontext } from "./theme";
import { context } from "@/app/(group)/layout";
import Editdeljob from "./editdeljob";
import Applybtn from "./applybtn";
import Viewapplicants from "./viewapplicants";
import {
  Briefcase,
  MapPin,
  IndianRupee,
  Bookmark,
  BookmarkCheck,
  Eye,
} from "lucide-react";

function Card({ jobs }: { jobs: any }) {
  const { save, setsave } = useContext(savecontext);
  const { user } = useContext(context);

  function handleSave(item: any) {
    const exists = save.find((e: any) => e.id === item.id);
    if (exists) {
      setsave(save.filter((e: any) => e.id !== item.id));
    } else {
      setsave((prev: any) => [...prev, item]);
    }
  }

  return (
    <div className="flex flex-wrap gap-8 justify-center mt-12 px-6 ">
      {jobs?.map((val: any, ind: number) => (
        <div
          key={val.id}
          className="w-[340px] flex flex-col justify-between rounded-2xl bg-[#f9fafb] border border-gray-300 shadow hover:shadow-lg h-[340px] p-6 "
        >
          <div>
  
            <h2 className="font-semibold text-xl text-gray-800 flex items-center gap-2 mb-3">
              <Briefcase size={20} className="text-blue-700" />
              {val.title}
            </h2>
            <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
              <MapPin size={16} className="text-gray-400" />
              {val.location}
            </p>
            <div className="text-sm text-gray-700 space-y-2 mb-4">
              <p>
                <span className="font-medium text-gray-600">Type:</span>{" "}
                {val.job_type}
              </p>
              <p>
                <span className="font-medium text-gray-600">Employment:</span>{" "}
                {val.employement_type}
              </p>
              <p className="flex items-center gap-1">
                <IndianRupee size={16} className="text-gray-600" />
                <span>{val.salary.toLocaleString()}</span>
              </p>
              <div className="pt-1">
                
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-3 mb-3">
              {val.description}
            </p>
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
              Company: {val?.comp?.name}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-5 justify-between">
            <Link href={`/jobdetail/${val.id}`}>
              <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm shadow-sm transition duration-200">
                <Eye size={16} /> View
              </button>
            </Link>

            
             
            
              {user?<button
                onClick={() => handleSave(val)}
                className={`flex items-center gap-1 px-4 py-1.5 rounded-md text-sm shadow-sm transition duration-200 ${
                  save.find((e) => e.id === val.id)
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {save.find((e) => e.id === val.id) ? (
                  <>
                    <BookmarkCheck size={16} /> Unsave
                  </>
                ) : (
                  <>
                    <Bookmark size={16} /> Save
                  </>
                )}
              </button> :<Link href="login">
              <button
                className={`flex items-center gap-1 px-4 py-1.5 rounded-md text-sm shadow-sm transition duration-200`}
              >
    
                  <>
                    <Bookmark size={16} /> Save
                  </>
                
              </button> 
              </Link> }

            
            {/* <Applybtn id={val.id} /> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
