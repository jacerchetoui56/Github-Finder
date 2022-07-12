import React from 'react'
import {
    MdOutlineLightMode,
    MdDarkMode
} from 'react-icons/md'
export default function Header(props) {
    const toggleDark = props.handleDarkMode;
    const dark = props.dark
    return (
        <header className="flex justify-between my-6 items-center">
            <h1 className="dark:text-white text-gray-600 font-mono text-2xl font-bold">
                GitFinder
            </h1>
            <div
                onClick={toggleDark}
                className="flex items-center cursor-pointer"
            >
                <span className="uppercase tracking-widest font-mono dark:text-slate-300 text-gray-500 text-base">
                    {dark ? "Light" : "Dark"}
                </span>
                {dark ? (
                    <MdOutlineLightMode className="text-white text-lg inline-block ml-3" />
                ) : (
                    <MdDarkMode className="text-gray-700 text-lg inline-block ml-3" />
                )}
            </div>
        </header>
    )
}
