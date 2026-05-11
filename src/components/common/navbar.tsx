"use client";


const Navbar = () => {
    return (
        <nav className="w-full border-b border-white/10 backdrop-blur-md bg-black">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-semibold tracking-wide text-white">
                        Focus Nest
                    </h1>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
                    <button className="hover:text-white transition">
                        Home
                    </button>

                    <button className="hover:text-white transition">
                        Timer
                    </button>

                    <button className="hover:text-white transition">
                        Ambience
                    </button>

                    <button className="hover:text-white transition">
                        About
                    </button>
                </div>

                <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition">
                    Start Focusing
                </button>
            </div>
        </nav>
    );
};

export default Navbar;