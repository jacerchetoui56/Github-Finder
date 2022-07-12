import React from 'react'

export default function Info(props) {
    const info = props.info;
    const exist = props.exist
    const Icon = props.icon;


    return (
        <div className="mb-2 last:mb-0 ">
            {exist ? (
                <>
                    <Icon className="inline-block text-gray-600 dark:text-slate-300 text-xl" />{" "}
                    <span className=" text-gray-600 dark:text-slate-300 font-mono ml-2 tracking-normal">
                        {info}
                    </span>
                </>
            ) : (
                <>
                    <Icon className="inline-block text-gray-400 dark:text-slate-500 text-xl" />{" "}
                    <span className=" text-gray-400 dark:text-slate-500 font-mono ml-2 tracking-normal">
                        Not Available
                    </span>
                </>
            )}
        </div>
    )
}
