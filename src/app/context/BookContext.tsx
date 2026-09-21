'use client'

import { useState,createContext,ReactNode, Dispatch, SetStateAction } from "react";
import { BookDataType } from "../TypeScript/BookData";


interface BookContextType{
    readBook: BookDataType[];
    updateReadBook: Dispatch<SetStateAction<BookDataType[]>>
    wishList: BookDataType[];
    updateWishList: Dispatch<SetStateAction<BookDataType[]>>;
}

export const BookContext = createContext<BookContextType>({
    readBook: [],
    updateReadBook: ()=> {},
    wishList: [],
    updateWishList: () => {},

});

export const BookContextProvider = ({children}:{children: ReactNode}) => {

    const [readBook,updateReadBook] = useState<BookDataType[]>([]);
    const [wishList,updateWishList] = useState<BookDataType[]>([]);
 

    const allContext: BookContextType = {
        readBook,
        updateReadBook,
        wishList,
        updateWishList
    }

    return (
        <BookContext.Provider value={allContext}>
            {children}
        </BookContext.Provider>
    )
    
}