//@ts-nocheck
"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  CircleUserRound,
  House,
  FilePenLine,
  Trash,
} from "lucide-react";
import { context } from "@/app/(group)/layout";
import Alertdel from "./alertcomponents/Alertdel";
function Header() {
  const router = useRouter();
  const [job, setJob] = useState("");
  const [dialog, setDialog] = useState(false);
  const [sugg, setsugg] = useState([]);
  const { user, setuser } = useContext(context);
  function handleKey(e:any) {
    if (e.key === "Enter") {
      router.push(`/search?q=${job}`);
    }
  }
  useEffect(() => {
    async function getsugg() {
      const req = await fetch(
        "http://localhost:3000/api/search/suggestion?q=" + job
      );
      const resp = await req.json();
      if (resp.success) {
        setsugg(resp.data);
        console.log(resp.data);
      }
    }
    let x;
    if (job) {
      x = setTimeout(() => {
        getsugg();
      }, 1000);
    } else {
      setsugg([]);
    }
    return () => {
      if (x) {
        clearTimeout(x);
      }
    };
  }, [job]);
  async function haandellogout() {
    const req = await fetch("http://localhost:3000/api/userauth/logout", {
      method: "POST",
    });
    const resp = await req.json();
    if (resp.success) {
      setuser(null);
    }
  }

  return (
    <header className="bg-blue-950 w-full px-4 md:px-8 py-4 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          JobFinder
        </Link>
        <div className="flex items-center w-full md:w-auto gap-2 md:gap-4">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search jobs..."
              name="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              onKeyDown={handleKey}
              className="w-full md:w-[400px] h-10 px-4 rounded border border-gray-300 bg-transparent text-white placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Link
              href={`/search?q=${job}`}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
            >
              <Search />
            </Link>
            {sugg.length == 0 ? (
              <div></div>
            ) : (
              <div className="absolute top-12 w-[400px] h-[200px] bg-white shadow-md shadow-blue-700 flex flex-col rounded-md p-2">
                {sugg.map((val, ind) => {
                  return (
                    <div key={val.id} className="">
                      <p className="flex gap-1 text-gray-600 hover:text-blue-500 truncate">
                        <Search />
                        {val.title}
                      </p>
                      <hr className="text-gray-500 mt-2" />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {user ? (
            <div
              className="relative"
              onMouseEnter={() => setDialog(true)}
              onMouseLeave={() => setDialog(false)}
            >
              <CircleUserRound className="text-white hover:text-blue-500" />
              {dialog && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-black p-4 rounded-lg shadow-lg z-50">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="font-bold text-lg">{user.name}</h1>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1">
                      <Link
                        href={`/editprofile?id=${user.id}`}
                        className="text-gray-500 hover:text-blue-600 transition-colors bg-transparent border-none"
                      >
                        <FilePenLine size={20} />
                      </Link>
                      <Alertdel />
                    </div>
                  </div>
                  <hr className="my-2" />
                  {/* {user.role=="admin"&&<Link
                  href="/addjob"
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center mb-2"
                >
                  Add Job
                </Link>} */}
                  {user?.company && (
                    <Link
                      href="/addjob"
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center mb-2"
                    >
                      Post Jobs
                    </Link>
                  )}
                  {user.company && (
                    <Link
                      href={`/viewcompany/${user.company.id}`}
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center mb-2"
                    >
                      View company
                    </Link>
                  )}
                  {!user.company && (
                    <Link
                      href="/addcompany"
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center mb-2"
                    >
                      add company
                    </Link>
                  )}
                  <Link
                    href="/savedjob"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center mb-2"
                  >
                    Saved Jobs
                  </Link>
                    <Link
                    href="/appliedjob"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center mb-2"
                  >
                    Applied Jobs
                  </Link>
                  <button
                    className="block w-full text-left text-red-600 hover:underline text-sm"
                    onClick={haandellogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="h-10 w-18 bg-blue-400 text-white text-center p-2"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
