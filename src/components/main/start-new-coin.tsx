"use client";
import { motion } from "framer-motion";
import Link from "next/link";


export const StartCoinButton = () => {
    return (
        <Link
            href="/create"
            className="text-white font-medium px-6 py-4 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10">start a new coin</span>
            <motion.div
                initial={{ left: 0 }}
                animate={{ left: "-300%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 4,
                    ease: "linear",
                }}
                className="bg-[linear-gradient(to_right,#F06225,#e614dc,#e65e14,#F06225,#e6e614)] absolute z-0 inset-0 w-[400%]"
            ></motion.div>
        </Link>
    );
};