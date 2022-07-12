import { BsLink45Deg } from "react-icons/bs";
import {
  MdOutlineLightMode,
  MdDarkMode,
  MdLocationPin,
  MdApartment,
} from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setData(data);
    setSearch("");
  };

  useEffect(() => {
    try {
      fetchData('jacerchetoui56')
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div
      className={`body w-[100%] h-screen ${darkMode ? "bg-primary-200" : ""
        } p-6`}
    >
      <div
        className={`mx-auto max-w-screen md:max-w-lg ${darkMode ? "dark" : ""}`}
      >
        <header className="flex justify-between my-6 items-center">
          <h1 className="dark:text-white text-gray-600 font-mono text-2xl font-bold">
            GitFinder
          </h1>
          <div
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="flex items-center cursor-pointer"
          >
            <span className="uppercase tracking-widest font-mono dark:text-slate-300 text-gray-500 text-base">
              {darkMode ? "Light" : "Dark"}
            </span>
            {darkMode ? (
              <MdOutlineLightMode className="text-white text-lg inline-block ml-3" />
            ) : (
              <MdDarkMode className="text-gray-700 text-lg inline-block ml-3" />
            )}
          </div>
        </header>
        <main>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              try {
                fetchData(search)
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <div className="flex dark:bg-primary-100 bg-slate-200 shadow-lg shadow-slate-300 dark:shadow-transparent justify-between items-center p-2 rounded-2xl">
              <FiSearch className="text-blue-500 text-2xl mx-2 shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="dark:text-slate-200 text-gray-600 bg-transparent border-none text-lg p-2 font-medium 
            tracking-wider font-mono flex-1 flex-shrink-[2] focus:outline-none overflow-ellipsis"
                type="text"
                placeholder="Search Github username"
              />
              <button
                className="rounded-2xl font-medium px-5 py-3 text-base bg-blue-600
            text-white tracking-wide text-center"
              >
                Search
              </button>
            </div>
          </form>
          <div className="mt-4 dark:bg-primary-100 bg-slate-200 p-6 md:p-8 rounded-2xl shadow-lg shadow-slate-300 dark:shadow-transparent">
            <div className="flex justify-start">
              <img
                className="h-24 w-24 rounded-full"
                src={data ? data.avatar_url : "images/avatar.gif"}
                alt=""
              />
              <div className="ml-8">
                <h2 className="text-xl dark:text-slate-100 text-black tracking-widest font-mono mb-[0.1rem]">
                  {data ? data.name : "Jacer Chetoui"}
                </h2>
                <h4 className="text-blue-600 text-base font-mono mb-3">
                  @{data ? data.login : "jacerchetoui56"}
                </h4>
                <h3 className="text-base dark:text-slate-300 text-gray-600 tracking-wide font-mono">
                  Joined {data ? data.created_at.split("T")[0] : "25 Jan 2011"}
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
            <div className="mt-3 md:grid md:grid-cols-2">
              <div className="mb-2 last:mb-0 ">
                {data && data.location ? (
                  <>
                    <MdLocationPin className="inline-block text-gray-600 dark:text-slate-300 text-xl" />{" "}
                    <span className=" text-gray-600 dark:text-slate-300 font-mono ml-2 tracking-normal">
                      {data.location}
                    </span>
                  </>
                ) : (
                  <>
                    <MdApartment className="inline-block text-gray-400 dark:text-slate-500 text-xl" />{" "}
                    <span className=" text-gray-400 dark:text-slate-500 font-mono ml-2 tracking-normal">
                      Not Available
                    </span>
                  </>
                )}
              </div>

              <div className="mb-2 last:mb-0 ">
                {data && data.location ? (
                  <>
                    <BsLink45Deg className="inline-block text-gray-600 dark:text-slate-300 text-xl" />{" "}
                    <span className=" text-gray-600 dark:text-slate-300 font-mono ml-2 tracking-normal">
                      {data.blog}
                    </span>
                  </>
                ) : (
                  <>
                    <MdApartment className="inline-block text-gray-400 dark:text-slate-500 text-xl" />{" "}
                    <span className=" text-gray-400 dark:text-slate-500 font-mono ml-2 tracking-normal">
                      Not Available
                    </span>
                  </>
                )}
              </div>
              <div className="mb-2 last:mb-0 ">
                {data && data.location ? (
                  <>
                    <AiOutlineTwitter className="inline-block text-gray-600 dark:text-slate-300 text-xl" />{" "}
                    <span className=" text-gray-600 dark:text-slate-300 font-mono ml-2 tracking-normal">
                      @{data.twitter_username}
                    </span>
                  </>
                ) : (
                  <>
                    <MdApartment className="inline-block text-gray-400 dark:text-slate-500 text-xl" />{" "}
                    <span className=" text-gray-400 dark:text-slate-500 font-mono ml-2 tracking-normal">
                      Not Available
                    </span>
                  </>
                )}
              </div>
              <div className="mb-2 last:mb-0 ">
                {data && data.company ? (
                  <>
                    <MdApartment className="inline-block text-gray-600 dark:text-slate-300 text-xl" />{" "}
                    <span className=" text-gray-600 dark:text-slate-300 font-mono ml-2 tracking-normal">
                      {data.company}
                    </span>
                  </>
                ) : (
                  <>
                    <MdApartment className="inline-block text-gray-400 dark:text-slate-500 text-xl" />{" "}
                    <span className=" text-gray-400 dark:text-slate-500 font-mono ml-2 tracking-normal">
                      Not Available
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
