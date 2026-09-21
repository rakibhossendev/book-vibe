'use client'

import { BookContext } from "@/app/context/BookContext"
import { BookDataType } from "@/app/TypeScript/BookData"
import { useContext, useState } from "react"

interface BookDataProps {
    bookData: BookDataType
}

export default function ReadButton({ bookData }: BookDataProps) {
    const { readBook, updateReadBook } = useContext(BookContext);
    const [readButtonStatus, updateStatus] = useState<boolean>(false);


    const handleReadButton = () => {
        updateReadBook([...readBook, bookData])
        updateStatus(!readButtonStatus);
    
    }

    console.log(readBook)
    
    return (
        <div>

            {readButtonStatus ?
                <h1 className="border-2 bg-green-50 px-4 py-2 font-bold rounded-lg text-black-500  cursor-not-allowed text-green-500 hover:shadow-md">
                    Added to Read List
                </h1>
                :

                <button onClick={handleReadButton} className="border-2 border-black-500 px-4 py-2 font-bold rounded-lg text-black-500 hover:bg-[#c6dfcb] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    Read
                </button>
            }

        </div>
    )
}