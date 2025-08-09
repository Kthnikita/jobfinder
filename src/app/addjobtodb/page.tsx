//@ts-nocheck
"use server";
import prismaclient from "@/service/prisma";
import data from "@/content/data";

export default async function Page() {
  async function addJob() {
    "use server"; 

    const result = data.map((val) => ({
     title: val.job_title,
  description: val.job_description,
  location: val.job_location,
  salary: val.job_min_salary,
  employement_type: val.job_employment_type,
  job_type: val.job_type,
    }));
console.log(result);
    try {
      await prismaclient.openings.createMany({ data });
    } catch (error) {
      console.error("Job insert failed:", error);
      throw new Error("Job insert failed");
    }
  }

  return (
    <form action={addJob}>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Jobs
      </button>
    </form>
  );
}
