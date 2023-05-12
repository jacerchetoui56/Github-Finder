import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { MdLocationPin, MdApartment } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import Info from "./Info";
import axios from "axios";

export default function Main() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async (username) => {
    if (username?.split(" ")?.length > 1) {
      alert("username is not valid");
      setSearch("");
    } else {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setData(data);
        setIsError(false);
        setSearch("");
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData("jacerchetoui56");
  }, []);

  function submit(e) {
    console.log("submitting");
    e.preventDefault();
    fetchData(search);
    console.log("done, isError:", isError);
  }

  return (
    <main>
      <form onSubmit={submit}>
        <div className="flex dark:bg-primary-100 bg-slate-200 shadow-lg shadow-slate-300 dark:shadow-transparent justify-center items-center p-2 rounded-2xl">
          <FiSearch className="text-blue-500 text-lg lg:text-2xl mx-2 shrink-0" />
          <input
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="dark:text-slate-200 text-gray-600 bg-transparent border-none text-base lg:text-lg p-2 font-medium  tracking-wider font-mono flex-1 flex-shrink-[2] focus:outline-none overflow-ellipsis"
            type="text"
            placeholder="Search Github username"
          />
          <button
            className={`rounded-2xl font-medium px-5 py-3 text-sm md:text-base ${
              loading ? "bg-blue-500" : "bg-blue-600"
            } text-white tracking-wider text-center mr-2 md:mr-0 transition-all duration-300 ease-in-out`}
          >
            {loading ? "Loading" : "Search"}
          </button>
        </div>
      </form>
      <div className="mt-4 dark:bg-primary-100 bg-slate-200 p-4 md:p-8 rounded-2xl shadow-lg shadow-slate-300 dark:shadow-transparent">
        {isError ? (
          <h1 className="text-red-500 text-center font-mono">
            Github User Not Found
          </h1>
        ) : (
          <div>
            <div className="flex justify-start">
              <a href={data?.html_url}>
                <img
                  className="h-24 w-24 rounded-full"
                  src={data ? data.avatar_url : "images/avatar.gif"}
                  alt=""
                />
              </a>
              <div className="ml-8">
                <a href={data?.html_url} target={"blank"}>
                  <h2 className="text-xl dark:text-slate-100 text-black tracking-widest font-mono mb-[0.1rem]">
                    {data ? data.name : "Jacer Chetoui"}
                  </h2>
                  <h4 className="text-blue-600 text-base font-mono mb-3">
                    @{data ? data.login : "jacerchetoui56"}
                  </h4>
                </a>
                <h3 className="text-base dark:text-slate-300 text-gray-600 tracking-wide font-mono">
                  Joined {data ? data.created_at?.split("T")[0] : "25 Jan 2011"}
                </h3>
              </div>
            </div>
            <p className="mt-5 dark:text-gray-300 text-gray-600 font-medium font-mono tracking-tight">
              {data
                ? data.bio
                : "20 y.o Front-End developer. Software engineering student IssatSo."}
            </p>
            <div className="mt-5 flex justify-evenly p-4 rounded-2xl dark:bg-primary-200 bg-slate-300">
              <div>
                <h2 className="dark:text-slate-400 text-slate-500 text-center font-mono mb-1">
                  Repos
                </h2>
                <h6 className="dark:text-slate-100 text-black text-center  font-bold text-xl font-mono">
                  {data ? data.public_repos : "37"}
                </h6>
              </div>
              <div>
                <h2 className="dark:text-slate-400 text-slate-500 text-center font-mono mb-1">
                  Followers
                </h2>
                <h6 className="dark:text-slate-100 text-black text-center font-bold text-xl font-mono">
                  {data ? data.followers : "6"}
                </h6>
              </div>
              <div>
                <h2 className="dark:text-slate-400 text-slate-500 text-center font-mono mb-1">
                  Following
                </h2>
                <h6 className="dark:text-slate-100 text-black text-center font-bold text-xl font-mono">
                  {data ? data.following : "5"}
                </h6>
              </div>
            </div>
            <div className="mt-3  md:columns-2">
              <Info
                exist={data && data.location !== null ? true : false}
                icon={MdLocationPin}
                info={data?.location}
              />

              <Info
                exist={data && data.blog !== null ? true : false}
                icon={BsLink45Deg}
                info={data?.blog}
              />

              <Info
                exist={data && data.twitter_username !== null ? true : false}
                icon={AiOutlineTwitter}
                info={"@" + data?.twitter_username}
              />

              <Info
                exist={data && data.company !== null ? true : false}
                icon={MdApartment}
                info={data?.company}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
