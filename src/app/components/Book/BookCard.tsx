import { BookDataType } from "@/app/TypeScript/BookData"
import Image from "next/image";
import Link from "next/link";

interface BookDataTypeProps {
  bookData: BookDataType;
}

export default function BookCard({ bookData }: BookDataTypeProps) {


  return (
    <Link
      className="group block w-full max-w-xs mx-auto cursor-pointer"
      href={`/home/${bookData.bookId}`}
    >
      <div className="card w-full overflow-hidden border border-base-200 bg-base-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg">

        {/* Book Cover */}
        <figure className="overflow-hidden bg-[#f8f4f4] px-5 pt-6 pb-5">
          <Image
            className="h-52 w-36 rounded-lg object-cover shadow-sm transition-transform duration-500 ease-out group-hover:scale-105 sm:h-56 sm:w-40"
            src={bookData.image}
            width={160}
            height={224}
            alt={bookData.bookName}
            unoptimized
          />
        </figure>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 px-5 pt-4">
          {bookData.tags.map((tagName, indx) => (
            <span
              key={indx}
              className="rounded-full bg-[#eaf7e8] px-2.5 py-1 text-xs font-medium text-[#23be0a] transition-colors duration-200 group-hover:bg-[#dff3dc]"
            >
              {tagName}
            </span>
          ))}
        </div>

        {/* Book Details */}
        <div className="card-body gap-2 px-5 py-4">

          <h2 className="line-clamp-2 text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-primary">
            {bookData.bookName}
          </h2>

          <p className="truncate text-sm text-base-content/65">
            By {bookData.author}
          </p>

          <div className="my-1 border-t border-dashed border-base-300" />

          <div className="flex items-center justify-between gap-3 text-xs text-base-content/70">
            <span className="truncate rounded-md bg-base-200 px-2 py-1 font-medium">
              {bookData.category}
            </span>

            <span className="flex shrink-0 items-center gap-1 font-semibold text-warning">
              <span>★</span>
              {bookData.rating}
            </span>
          </div>

        </div>
      </div>
    </Link>
  );

}