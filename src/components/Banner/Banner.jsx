import React from "react";
import { FaSearch, FaShippingFast, FaGlobe } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
    return (
        <section className="relative bg-[url('https://images.unsplash.com/photo-1520975914976-6b4d9d5f7b7b?q=80&w=1600&auto=format&fit=crop&sat=-100')] bg-cover bg-center">
            {/* overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/35 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28 lg:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left content */}
                    <div className="text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Connect. Trade. Grow.
                        </h1>
                        <p className="text-sm sm:text-base text-white/85 max-w-2xl mb-6">
                            ImportExport Co. helps businesses move products across borders with confidence —
                            secure logistics, verified suppliers, and transparent pricing. Discover quality
                            products from trusted origins worldwide.
                        </p>

                        {/* key points */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6">
                            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
                                <FaShippingFast className="text-xl text-white/90" />
                                <div>
                                    <div className="text-sm font-semibold">Fast Logistics</div>
                                    <div className="text-xs text-white/80">Reliable global shipping</div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
                                <FaGlobe className="text-xl text-white/90" />
                                <div>
                                    <div className="text-sm font-semibold">Global Reach</div>
                                    <div className="text-xs text-white/80">Trusted suppliers from top origins</div>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Link to="/all-products" className="btn btn-primary btn-lg">
                                Explore Products
                            </Link>
                            <Link to="/add-export" className="btn btn-outline btn-lg text-white">
                                Add Export
                            </Link>
                        </div>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-6 w-full max-w-md"
                            aria-label="Search products"
                        >
                            <label className="relative block">
                                <span className="sr-only">Search products</span>
                                <input
                                    type="text"
                                    placeholder="Search by product, origin country..."
                                    className="input input-bordered w-full pr-12 bg-white/90 text-black"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1/2 -translate-y-1/2 btn btn-primary btn-sm"
                                    aria-label="Search"
                                >
                                    <FaSearch />
                                </button>
                            </label>
                        </form>
                    </div>

                    {/* Right visual (image/card) */}
                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-sm bg-base-100 bg-opacity-90 rounded-2xl p-4 shadow-xl">
                            <img
                                src="https://i.ibb.co.com/fzkcjjyr/export5.jpg"
                                className="w-full h-44 object-cover rounded-lg mb-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-primary">Motor cycle parts</h3>
                                <p className="text-sm text-base-content/70">Origin: China</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm">
                                            <span className="font-semibold">$1000</span>
                                            <span className="text-xs text-base-content/60 ml-2"> • 100 qty</span>
                                        </p>
                                        <p className="text-xs text-yellow-400">⭐ 5.0</p>
                                    </div>
                                    <Link to="/productDetails/6915efd3d627e8089b383ff6" className="btn btn-sm btn-primary">
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* decorative bottom curve */}
            <svg
                className="absolute bottom-0 left-0 w-full text-white/5"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
            >
                <path d="M0,64 C360,0 1080,128 1440,48 L1440,80 L0,80 Z" fill="currentColor" />
            </svg>
        </section>
    );
};

export default Banner;
