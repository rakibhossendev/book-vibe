import { BookDataType } from "@/app/TypeScript/BookData";
import BookCard from "../components/Book/BookCard";
import HeroSection from "../components/Hero/Hero";
import { Suspense } from "react";

const bookDataPromise = async (): Promise<BookDataType[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/db.json`);
    const data = response.json()
    return data;
}

export default async function BookData() {
    const bookData = await bookDataPromise();
    console.log(bookData)


    return (
        <section className="container mx-auto">
            <HeroSection/>
            <h2 className="text-3xl text-center my-10 font-bold ">Books</h2>

            <Suspense fallback={<p>Loading Data...</p>}>
            <div className="grid grid-cols-3 gap-5">
                {bookData.map(book=> <BookCard key={book.bookId} bookData={book}></BookCard>)}
            </div>
            </Suspense>
        </section>
    )
}