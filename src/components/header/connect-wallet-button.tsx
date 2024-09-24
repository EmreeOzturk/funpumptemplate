"use client"

import { useState } from 'react'
import { Button } from '../ui/button'

const ConnectWalletButton = () => {
    // eslint-disable-next-line
    const [hasProfile, setHasProfile] = useState(false)
    return (
        <div className='flex items-center justify-center gap-2'>
            <Button className='px-4 py-2 text-white bg-primary-500 rounded-md bg-[#F06225]'>
                Connect Wallet
            </Button>
            {
                !hasProfile && (
                    <Button className='px-4 py-2 text-white bg-primary-500 rounded-md bg-[#F06225]'>
                        Profile
                    </Button>
                )

            }
        </div>
    )
}

export default ConnectWalletButton