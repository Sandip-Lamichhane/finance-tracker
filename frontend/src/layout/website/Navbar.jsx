// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "About", path: "/about" },
        { name: "Support", path: "/support" },
    ];

    return (
        <nav className="bg-[#0b0f13] border-b border-white/[0.06] sticky top-0 z-50">
            <div className="flex items-center justify-between h-16 px-6">

                {/* Logo */}
                <a href="/" className="flex items-center gap-2 no-underline">
                    <div className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-[#2ddc7a] to-[#1ab85e] flex items-center justify-center text-white font-bold text-base shrink-0">
                        B
                    </div>
                    <span className="text-[15px] font-semibold tracking-tight">
                        <span className="text-white">Fino</span>
                        <span className="text-[#2ddc7a]">Track</span>
                    </span>
                </a>

                {/* Center Nav Links — desktop */}
                <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.path}
                                className="text-sm font-medium text-white/55 no-underline px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-white/90 hover:bg-white/[0.06]"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Auth Buttons — desktop */}
                <div className="hidden md:flex items-center gap-2">
                    <Link to='/login' className="text-sm font-medium text-white/75 bg-transparent border border-white/20 rounded-[9px] px-4 py-2 cursor-pointer transition-all duration-200 hover:border-white/50 hover:text-white">
                        Log in
                    </Link>
                    <button className="text-sm font-semibold text-[#0b0f13] bg-white rounded-[9px] px-4 py-2 cursor-pointer flex items-center gap-1.5 transition-all duration-200 hover:bg-[#e8fdf0] hover:-translate-y-px">
                        Get started <span>→</span>
                    </button>
                </div>

                {/* Hamburger — mobile */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-[22px] h-[2px] bg-white/70 rounded transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                    <span className={`block w-[22px] h-[2px] bg-white/70 rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-[22px] h-[2px] bg-white/70 rounded transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-[#0d1117] border-b border-white/[0.07] px-6 pb-5 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[15px] text-white/65 no-underline py-2.5 border-b border-white/[0.05] last:border-b-0"
                        >
                            {link}
                        </a>
                    ))}
                    <div className="flex gap-2.5 mt-3">
                        <button className="flex-1 text-sm font-medium text-white/75 bg-transparent border border-white/20 rounded-[9px] px-4 py-2 cursor-pointer">
                            Log in
                        </button>
                        <button className="flex-1 text-sm font-semibold text-[#0b0f13] bg-white rounded-[9px] px-4 py-2 cursor-pointer">
                            Get started →
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}