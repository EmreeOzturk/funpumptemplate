"use client"
import Link from 'next/link'
import { motion, LayoutGroup } from 'framer-motion'
import { useState } from 'react'


const links = [
    { href: '/', label: 'Twitter' },
    { href: '/', label: 'Support' },
    { href: '/', label: 'Telegram' },
    { href: '/', label: 'How it works' },
]
const Links = () => {
    const [hoveredLink, setHoveredLink] = useState<number | null>(null)

    return (
        <LayoutGroup>
            <div className='flex items-center justify-center gap-2 relative'>
                <div className="flex items-center relative">
                    {links.map((link, index) =>
                    (
                        <div
                            key={link.label}
                            onMouseEnter={() => setHoveredLink(index)}
                            onMouseLeave={() => setHoveredLink(null)}
                            className='relative'
                        >
                            <Link
                                href={link.href}
                                className="px-3 py-2 block relative z-10 transition-colors duration-200 text-[#ffe7d4]"
                            >
                                {link.label}
                            </Link>
                            {
                                hoveredLink === index && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute top-0 left-0 w-full h-full bg-[#F06225] rounded-md"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )
                            }
                        </div>
                    )
                    )}
                </div>
            </div>
        </LayoutGroup>
    )
}

export default Links