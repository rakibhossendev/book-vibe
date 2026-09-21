import { BookDataType } from "@/app/TypeScript/BookData"
import Image from "next/image";

interface WishListDataProps {
    data: BookDataType
}

export default function WishListCard({ data }: WishListDataProps) {


    return (
        <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Wishlist Badge */}
            <div className="absolute right-4 top-4 z-10">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                    Wishlist
                </span>
            </div>

            <div className="flex gap-4">

                {/* Book Cover */}
                <div className="relative h-44 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <div className="relative h-44 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">

                        <Image
                            src={data.image}
                            fill
                            alt={data.bookName}
                            className="rounded-xl object-cover shadow-sm"
                            unoptimized
                        />

                        {/* Rating */}
                        <div className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                            ⭐ {data.rating}
                        </div>
                    </div>
                    {/* Rating */}
                    <div className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        ⭐ {data.rating}
                    </div>
                </div>

                {/* Book Details */}
                <div className="flex min-w-0 flex-1 flex-col">

                    <div className="pr-16">
                        <h2 className="line-clamp-2 text-lg font-bold leading-tight text-gray-900">
                            {data.bookName}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            {data.author}
                        </p>
                    </div>

                    {/* Category */}
                    <div className="mt-3">
                        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                            {data.category}
                        </span>
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {data.tags.slice(0, 3).map((tag, index) => (
                            <span
                                key={index}
                                className="rounded-full border border-green-100 bg-green-50 px-2 py-1 text-[11px] font-medium text-green-700"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Meta */}
                    <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-4 text-xs text-gray-500">
                        <span>
                            📖 {data.totalPages} pages
                        </span>

                        <span>
                            📅 {data.yearOfPublishing}
                        </span>
                    </div>

                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

                <div className="text-xs text-gray-400">
                    Published by{" "}
                    <span className="font-medium text-gray-600">
                        {data.publisher}
                    </span>
                </div>

                <button
                    type="button"
                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-700 active:scale-95"
                >
                    Read
                </button>

            </div>
        </div>
    );
}