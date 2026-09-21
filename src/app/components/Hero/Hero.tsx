import HeroImage from "@/assets/hero_img.jpg"
import Image from "next/image"

export default function HeroSection() {


    return (
        <section className="mx-auto mt-6 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-gray-200 bg-[#f8f4f4] px-6 py-8 shadow-sm sm:px-10 sm:py-10 md:grid-cols-2 md:gap-10 md:px-12 lg:px-16 lg:py-14">

                {/* Content */}
                <div className="max-w-xl">
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700 sm:text-sm">
                        Discover Your Next Book
                    </span>

                    <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Books to freshen up your bookshelf
                    </h1>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                        Explore your favorite books, discover new stories,
                        and build a collection worth reading.
                    </p>

                    <button
                        type="button"
                        className="mt-6 rounded-xl bg-[#23BE0A] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#106403] hover:shadow-md active:translate-y-0 sm:px-6 sm:text-base"
                    >
                        View The Lists
                    </button>
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl">
                        <Image
                            src={HeroImage}
                            width={400}
                            height={600}
                            alt="Hero Section book image"
                            className="h-auto w-full rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
    
}