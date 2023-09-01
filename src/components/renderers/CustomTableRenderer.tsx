'use client'

import { Key } from "react";




function CustomTableRenderer({ data }: any) {
    const { content } = data;

    return (
        <div className='relative w-full rounded-md table-auto'>
            <table className="bg-zinc-50 gap-2">
                <thead>
                    <tr className='underline'>
                        {content[0].map((cell: null | undefined, cellIndex: Key | null | undefined) => (
                            <th key={cellIndex}>{cell}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {content.slice(1).map((row: any[], rowIndex: Key | null | undefined) => (
                        <tr className='odd:bg-white even:bg-slate-100' key={rowIndex}>

                            {row.map((cell: null | undefined, cellIndex: Key | null | undefined) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTableRenderer