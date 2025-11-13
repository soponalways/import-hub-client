import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-base-100 text-base-content min-h-screen py-12 px-4 md:px-10">
            <div className="text-center max-w-4xl mx-auto mb-14">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    About Our Import & Export Company
                </h1>
                <p className="text-base-content/70 text-lg">
                    Empowering global trade through trust, technology, and transparency.
                    We connect businesses worldwide to grow without borders.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                <div className="bg-base-200 rounded-xl shadow p-8 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-primary mb-3">Our Mission</h2>
                    <p className="text-base-content/80 leading-relaxed">
                        To simplify international trade by building a digital ecosystem where
                        exporters, importers, and logistics providers can connect, collaborate,
                        and grow with confidence.
                        We aim to make cross-border trading more efficient, transparent,
                        and accessible to businesses of all sizes.
                    </p>
                </div>

                <div className="bg-base-200 rounded-xl shadow p-8 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-primary mb-3">Our Vision</h2>
                    <p className="text-base-content/80 leading-relaxed">
                        To become the most trusted global platform for import-export management —
                        where innovation meets reliability.
                        We envision a world where distance is no longer a barrier to business success.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-center text-primary mb-8">
                    Our Core Values
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                        <p className="text-base-content/70">
                            We believe in honesty, transparency, and fairness in every trade
                            and partnership we build.
                        </p>
                    </div>
                    <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                        <p className="text-base-content/70">
                            We use modern technology to streamline export-import operations
                            and create smarter business solutions.
                        </p>
                    </div>
                    <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Customer Success</h3>
                        <p className="text-base-content/70">
                            Our customers’ growth defines our success — we ensure every trade
                            leads to progress.
                        </p>
                    </div>
                    <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                        <p className="text-base-content/70">
                            Connecting traders, manufacturers, and suppliers across continents
                            to unlock endless opportunities.
                        </p>
                    </div>
                    <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                        <p className="text-base-content/70">
                            Consistency in service, safety in process, and quality in products —
                            our promise to every client.
                        </p>
                    </div>
                    <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                        <p className="text-base-content/70">
                            Promoting eco-friendly trading and ethical sourcing for a better future.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-8">Meet Our Team</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition">
                        <img
                            src="https://i.ibb.co.com/9s1fK2T/ceo.jpg"
                            alt="CEO"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold">Rokeya Hasan</h3>
                        <p className="text-base-content/70 mb-2">Founder & CEO</p>
                        <p className="text-sm text-base-content/60">
                            Visionary entrepreneur leading global trade through digital transformation.
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition">
                        <img
                            src="https://i.ibb.co.com/jyR3fnY/director.jpg"
                            alt="Director"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold">Sopon Ahmed</h3>
                        <p className="text-base-content/70 mb-2">Technical Director</p>
                        <p className="text-sm text-base-content/60">
                            Full Stack Developer ensuring smooth platform performance and innovation.
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition">
                        <img
                            src="https://i.ibb.co.com/txzLkfq/manager.jpg"
                            alt="Manager"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold">Rahim Uddin</h3>
                        <p className="text-base-content/70 mb-2">Operations Manager</p>
                        <p className="text-sm text-base-content/60">
                            Managing import-export logistics and ensuring global delivery excellence.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center max-w-3xl mx-auto mt-10 border-t border-base-300 pt-6">
                <p className="text-base-content/70">
                    Together, we’re redefining international trade with integrity, technology, and purpose.
                    Join us in shaping the future of global commerce.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
