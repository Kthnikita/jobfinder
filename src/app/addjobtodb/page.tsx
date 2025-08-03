//@ts-nocheck
"use server";
import prismaclient from "@/service/prisma";
import data from "@/content/data";

export default async function Page() {
  async function addJob() {
    "use server"; 

    const result = data.map((val) => ({
     title: val.job_title || "Untitled",
  description: val.job_description || "No description",
  location: val.job_location || "Unknown",
  salary: Number.parseInt(val.job_salary) || 300000,
  employement_type: "FULLTIME",
  job_type: "on-site",
    }));
console.log(result);
    try {
      await prismaclient.job.createMany({ data: result });
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
