import { BookDataType } from "@/app/TypeScript/BookData"
import Image from "next/image"

interface BooksDataProps {
    data: BookDataType
}

export default function ListedCard({ data }: BooksDataProps) {



    return (
        <div className="group flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:p-5">
            {/* Book Image */}
            <div className="flex shrink-0 justify-center sm:w-36">
                <Image
                    src={data.image}
                    width={150}
                    height={200}
                    alt={data.bookName}
                    className="h-52 w-36 rounded-xl object-cover shadow-sm"
                    unoptimized
                />
            </div>

            {/* Book Information */}
            <div className="flex min-w-0 flex-1 flex-col">

                <div>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {data.bookName}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        by <span className="font-medium text-gray-700">{data.author}</span>
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {data.tags.map((item, indx) => (
                        <span
                            key={indx}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Book Metadata */}
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3">
                    <div>
                        <span className="text-gray-400">Year</span>
                        <p className="font-medium text-gray-800">
                            {data.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <span className="text-gray-400">Rating</span>
                        <p className="font-medium text-gray-800">
                            ⭐ {data.rating}
                        </p>
                    </div>

                    <div>
                        <span className="text-gray-400">Category</span>
                        <p className="font-medium text-gray-800">
                            {data.category}
                        </p>
                    </div>

                    <div>
                        <span className="text-gray-400">Pages</span>
                        <p className="font-medium text-gray-800">
                            {data.totalPages}
                        </p>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <span className="text-gray-400">Publisher</span>
                        <p className="truncate font-medium text-gray-800">
                            {data.publisher}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-5">
                    <button
                        type="button"
                        className="w-full rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Wish List
                    </button>
                </div>

            </div>
        </div>
    )

}

