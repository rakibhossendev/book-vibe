'use client'

import { BookContext } from "@/app/context/BookContext"
import { BookDataType } from "@/app/TypeScript/BookData";
import { useContext, useState } from "react"

interface BookDataProps {
    data: BookDataType
}


export default function WishListButton({ data }: BookDataProps) {
    const { wishList, updateWishList } = useContext(BookContext);
    const [wishListStatus, updateWishListStatus] = useState<boolean>(false);

    const handleWishList = (): void => {
        updateWishList((prev) => [...prev, data]);
        updateWishListStatus(true);
    };

    console.log(wishList)
    return (
        <div>
            {
                wishListStatus ?

                    <h2 className="bg-[#cae6e9] text-black-500 px-4 py-2 font-bold rounded-lg  cursor-not-allowed  hover:shadow-md">Added To Wish List
                    </h2>
                    :
                    <button onClick={handleWishList} className="bg-[#59C6D2] text-white px-4 py-2 font-bold rounded-lg hover:bg-[#2d818a] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">              Wish List
                    </button>
            }
        </div>
    )
}