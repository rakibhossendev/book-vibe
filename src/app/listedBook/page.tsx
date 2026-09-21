'use client';

import { useContext, useState } from "react";

import { BookContext } from "@/app/context/BookContext";
import ListedCard from "../components/ListedBookCard/ListedCard";
import WishListCard from "../components/ListedBookCard/WishListCard";
import { BookDataType } from "../TypeScript/BookData";

export default function ReadBook() {
    const { readBook, wishList } = useContext(BookContext);
    const [toggle, updateToggle] = useState<boolean>(false);
    const [sortBy, updateSortBy] = useState<"rating" | "year" | "pages">("rating");

    const handleToggle = (showWishList: boolean): void => {
        updateToggle(showWishList);
    };

    const sortBooks = (data: BookDataType[]): BookDataType[] => {
        const sortedBook = [...data];

        if (sortBy === "rating") {
            sortedBook.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "pages") {
            sortedBook.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortBy === "year") {
            sortedBook.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBook;
    };

    const sortedBook = sortBooks(readBook);
    const sortWishList = sortBooks(wishList);

    return (
        <section className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm sm:px-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Books
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">
                                Manage your reading list and wishlist
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <span className="text-sm text-gray-500">
                                {toggle ? wishList.length : readBook.length} books
                            </span>

                            {/* Sort */}
                            <select
                                value={sortBy}
                                onChange={(e) =>
                                    updateSortBy(e.target.value as "rating" | "year" | "pages")
                                }
                                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-none transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-100"
                            >
                                <option value="rating">Rating</option>
                                <option value="year">Published Year</option>
                                <option value="pages">Number of Pages</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex w-full max-w-md rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm">
                        <button
                            onClick={() => handleToggle(false)}
                            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 sm:text-base ${!toggle ? "bg-gray-900 text-white shadow-sm" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`}
                        >
                            Read List
                        </button>
                        <button
                            onClick={() => handleToggle(true)}
                            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 sm:text-base ${toggle ? "bg-gray-900 text-white shadow-sm" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`}
                        >
                            Wish Lists
                        </button>
                    </div>
                </div>

                {/* Books */}
                <div className="grid grid-cols-1 gap-5">
                    {toggle ? (
                        sortWishList.length > 0 ? (
                            sortWishList.map((item) => (
                                <WishListCard key={item.bookId} data={item} />
                            ))
                        ) : (
                            <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white">
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        No books in wishlist
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Add books to your wishlist to see them here.
                                    </p>
                                </div>
                            </div>
                        )
                    ) : sortedBook.length > 0 ? (
                        sortedBook.map((item) => (
                            <ListedCard key={item.bookId} data={item} />
                        ))
                    ) : (
                        <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    No books in read list
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Books you mark as read will appear here.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}