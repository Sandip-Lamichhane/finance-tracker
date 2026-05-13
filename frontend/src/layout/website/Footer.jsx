export default function Footer() {
    const footerLinks = [
        { name: "Features", Path: "/features"},
        { name: "About", Path: "/about"},
        { name: "Support", Path: "/support"},
    ];

    return (
        <footer className="bg-[#0b0f13] border-t border-white/[0.06] px-6 py-[18px] flex flex-wrap items-center justify-between gap-3 sm:gap-0">

            {/* Brand */}
            <a href="/" className="flex items-center gap-2 no-underline">
                <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-[#2ddc7a] to-[#1ab85e] flex items-center justify-center text-white font-bold text-[13px] shrink-0">
                    B
                </div>
                <span className="text-[13.5px] font-semibold">
                    <span className="text-white">Fino</span>
                    <span className="text-[#2ddc7a]">Track</span>
                </span>
            </a>

            {/* Nav Links */}
            <ul className="flex items-center gap-5 list-none m-0 p-0">
                {footerLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.Path}
                            className="text-[13px] text-white/40 no-underline transition-colors duration-200 hover:text-white/75"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Copyright */}
            <p className="text-xs text-white/25 whitespace-nowrap m-0">
                © 2025 FinoTrack. Built with MERN Stack
            </p>
        </footer>
    );
}