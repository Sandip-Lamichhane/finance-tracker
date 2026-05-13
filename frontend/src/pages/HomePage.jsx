
export default function HomePage() {
    return (
        <section className="relative bg-[#0a0e1a] overflow-hidden">

            {/* Background radial glow */}
            <div
                className="pointer-events-none absolute -top-52 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(74,222,128,0.07) 0%, transparent 65%)",
                }}
            />

            {/* Hero content */}
            <div
                className="relative z-10 max-w-[900px] mx-auto px-12 pt-28 pb-20 text-center"
                style={{ animation: "fadeUp 0.7s ease both" }}
            >

                {/* Badge */}
                <div className="inline-flex items-center gap-[7px] bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.35)] text-[#4ade80] text-[0.78rem] font-medium px-[14px] py-[5px] rounded-full mb-8 tracking-[0.04em]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#4ade80] animate-pulse" />
                    Now in development — MERN Stack
                </div>

                {/* Heading */}
                <h1
                    className="text-white font-extrabold leading-[1.08] tracking-[-2px] mb-[1.4rem] text-[3.8rem]"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    Track every rupee.{" "}
                    <br />
                    <em
                        className="not-italic"
                        style={{
                            background: "linear-gradient(90deg, #4ade80, #22d3ee)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Own your finances.
                    </em>
                </h1>

                {/* Subtext */}
                <p
                    className="text-[rgba(232,234,240,0.55)] text-[1.1rem] leading-[1.75] max-w-[560px] mx-auto mb-10 font-light"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    Log daily expenses in seconds, set budgets by category, and get
                    beautiful monthly reports — built for Nepal, designed for everyone.
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-[14px]">
                    <button
                        className="bg-[#4ade80] text-[#0a0e1a] font-semibold text-[0.95rem] px-8 py-[0.85rem] rounded-[10px] border-none cursor-pointer transition-all duration-[220ms] hover:bg-[#22d3ee] hover:-translate-y-0.5"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Start tracking free
                    </button>
                    <button
                        className="bg-transparent text-[#e8eaf0] text-[0.95rem] font-medium px-8 py-[0.85rem] rounded-[10px] border border-[rgba(255,255,255,0.18)] cursor-pointer transition-all duration-[220ms] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.35)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        See sample report
                    </button>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="border-t border-[rgba(255,255,255,0.07)] border-b border-b-[rgba(255,255,255,0.07)] flex justify-center">
                {[
                    { num: "₹", suffix: "", label: "Nepal-first design", numColor: "#4ade80", isPrefix: true, value: "First" },
                    { num: "5", suffix: "s", label: "To log an expense" },
                    { num: "#", suffix: "1", label: "Goal: personal finance", numColor: "#4ade80", isPrefix: true, value: "1" },
                    { num: "∞", suffix: "+", label: "Custom categories" },
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="flex-1 max-w-[200px] px-6 py-[1.8rem] text-center border-r border-[rgba(255,255,255,0.07)] last:border-r-0"
                    >
                        <div
                            className="text-white font-bold text-[1.9rem] mb-1"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            {stat.isPrefix ? (
                                <>
                                    <span className="text-[#4ade80]">{stat.num}</span>
                                    {" "}{stat.value}
                                </>
                            ) : (
                                <>
                                    {stat.num}
                                    <span className="text-[#4ade80]">{stat.suffix}</span>
                                </>
                            )}
                        </div>
                        <div className="text-[rgba(232,234,240,0.4)] text-[0.78rem] tracking-[0.04em] uppercase">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Keyframe injection */}
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}