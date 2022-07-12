
import { BsLink45Deg } from 'react-icons/bs';
import { MdOutlineLightMode, MdDarkMode, MdLocationPin, MdApartment } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

function App() {
  return (
    <div className="mx-auto max-w-screen md:max-w-lg">
      <header className="flex justify-between my-6 items-center">
        <h1 className="text-white font-mono text-2xl font-bold">GitFinder</h1>
        <div className='flex items-center cursor-pointer'>
          <span className="uppercase tracking-widest font-mono text-slate-300 text-base">Light</span>
          <MdOutlineLightMode className='text-white text-lg inline-block ml-3' />
        </div>
      </header>
      <main>
        <form>
          <div className="flex bg-primary-100 justify-between items-center p-2 rounded-2xl">
            <FiSearch className='text-blue-500 text-2xl mx-2 shrink-0' />
            <input
              className="text-slate-200 bg-transparent border-none text-lg p-2 font-medium 
            tracking-wider font-mono flex-1 flex-shrink-[2] focus:outline-none overflow-ellipsis"
              type="text"
              placeholder="Search Github username" />
            <button className="rounded-2xl font-medium px-5 py-3 text-base bg-blue-600
            text-white tracking-wide text-center">Search</button>
          </div>
        </form>
        <div className="mt-4 bg-primary-100 p-6 md:p-8 rounded-2xl">
          <div className="flex justify-start">
            <img className="h-24 w-24 rounded-full" src="images/avatar.gif" alt="" />
            <div className="ml-8">
              <h2 className="text-xl text-slate-100 tracking-widest font-mono mb-[0.1rem]">Jacer Chetoui</h2>
              <h4 className="text-blue-600 text-base font-mono mb-3">@jacerchetoui56</h4>
              <h3 className="text-base text-slate-300 tracking-wide font-mono">Joined 25 Jan 2011</h3>
            </div>
          </div>
          <p className="mt-5 text-gray-300 font-medium font-mono tracking-tight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita facere exercitationem in quis id vitae, sed sunt! Fugit, eum recusandae.</p>
          <div className="mt-5 flex justify-evenly p-4 rounded-2xl bg-primary-200">
            <div>
              <h2 className="text-slate-400 text-center font-mono mb-1">Repos</h2>
              <h6 className="text-slate-100 text-center  font-bold text-xl font-mono">8</h6>
            </div>
            <div>
              <h2 className="text-slate-400 text-center font-mono mb-1">Followers</h2>
              <h6 className="text-slate-100 text-center font-bold text-xl font-mono">3241</h6>
            </div>
            <div>
              <h2 className="text-slate-400 text-center font-mono mb-1">Following</h2>
              <h6 className="text-slate-100 text-center font-bold text-xl font-mono">100</h6>
            </div>
          </div>
          <div className="mt-3 md:grid md:grid-cols-2">
            <div className="mb-2 last:mb-0 ">
              <MdLocationPin className='inline-block text-slate-100 text-lg' /> <span className="text-slate-100 font-mono ml-2 tracking-normal">Kebili</span>
            </div>
            <div className="mb-2 last:mb-0 ">
              <BsLink45Deg className='inline-block text-slate-100 text-lg' /> <span className="text-slate-100 font-mono ml-2 tracking-normal">jacerchetoui.me</span>
            </div>
            <div className="mb-2 last:mb-0 ">
              <AiOutlineTwitter className='inline-block text-slate-100 text-lg' /> <span className="text-slate-100 font-mono ml-2 tracking-normal">@chetoui_jacer</span>
            </div>
            <div className="mb-2 last:mb-0 ">
              <MdApartment className='inline-block text-slate-100 text-lg' /> <span className="text-slate-100 font-mono ml-2 tracking-normal">@Google</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
