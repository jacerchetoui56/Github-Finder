
function App() {
  return (
    <div className="m-4 mx-auto max-w-xl">
      <header className="flex justify-between my-6 items-center">
        <h1 className="text-white font-mono text-2xl font-bold">GitFinder</h1>
        <div >
          <span className="uppercase tracking-wide font-medium text-white text-base">Light</span>
          {/* icons (dark and light) */}
        </div>
      </header>
      <main>
        <div className="flex bg-primary-100 justify-between p-2 rounded-lg">
          {/* search icon */}
          <input
            className="text-slate-200 bg-transparent border-none text-lg p-2 font-medium 
            tracking-wider font-mono flex-1 focus:outline-none"
            type="text"
            placeholder="Search Github username" />
          <button className="rounded-lg font-medium px-4 py-2 text-sm bg-blue-600 text-white tracking-wide text-center">Search</button>
        </div>


      </main>
    </div>
  );
}

export default App;
