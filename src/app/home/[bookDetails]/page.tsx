
import ReadButton from "@/app/components/Book/ReadButton";
import WishListButton from "@/app/components/Book/WishListButton";
import { BookDataType } from "@/app/TypeScript/BookData";
import Image from "next/image";


export default async function BookDetailsPage({ params, }: { params: Promise<{ bookDetails: string }> }) {
    const { bookDetails } = await params;
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/db.json`
    );
    const data: BookDataType[] = await response.json();

    const filteredBook = data.find(book => book.bookId === Number(bookDetails));

    if (!filteredBook) {
        return <p>Data Not Found</p>
    }

    return (

        <section className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-base-100 shadow-xl rounded-2xl p-4 md:p-5 border border-base-200 max-w-4xl mx-auto">
                <div className="flex justify-center items-center bg-[#f8f4f4] rounded-xl p-3">
                    <Image
                        className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        src={filteredBook.image}
                        width={220}
                        height={280}
                        alt={`${filteredBook.bookName} Photo`}
                        unoptimized
                    />

                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {filteredBook.bookName}
                    </h2>
                    <p className="text-sm my-1 text-gray-500">
                        By : {filteredBook.author}
                    </p>
                    <hr className="my-1" />
                    <p className="my-1 font-medium">
                        {filteredBook.category}
                    </p>
                    <hr className="my-1" />
                    <p className="text-sm my-1 leading-5 text-gray-600">
                        <span className="font-bold text-base-content">Review: </span>
                        {filteredBook.review}
                    </p>

                    <div className="my-2">
                        <span className="font-bold mr-2">Tag</span>
                        {filteredBook.tags.map((tag, indx) => <p key={indx} className="inline-block mr-1 mb-1 px-2.5 py-1 rounded-full text-sm bg-[#eaf7e8] text-[#23BE0A]">{tag}</p>)}
                    </div>

                    <hr className="my-1" />
                    <div className="space-y-1 my-2">
                        <p><span className="font-bold">Number of Page:</span> {filteredBook.totalPages}</p>
                        <p><span className="font-bold">Publisher:</span> {filteredBook.publisher}</p>
                        <p><span className="font-bold">Years of Publish:</span> {filteredBook.yearOfPublishing}</p>
                        <p><span className="font-bold">Rating:</span> {filteredBook.rating}</p>
                    </div>



                    <div className="flex flex-wrap gap-2 mt-2">
                        <ReadButton bookData={filteredBook}></ReadButton>
                        <WishListButton data={filteredBook}></WishListButton>
                    </div>


                </div>

            </div>

        </section>
    )
}