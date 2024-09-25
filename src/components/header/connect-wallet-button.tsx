"use client";

import { useEffect, useRef } from "react";
import {
    useConnectModal,
    useAccountModal,
    useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { emojiAvatarForAddress } from "@/lib/emojiAvatarForAddress";
import { Button } from "../ui/button";

const ConnectWalletButton = () => {
    const { isConnecting, address, isConnected, chain } = useAccount();
    const { color: backgroundColor, emoji } = emojiAvatarForAddress(address ?? "");

    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    const { disconnect } = useDisconnect();

    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    if (!isConnected) {
        return (
            <Button
                onClick={async () => {
                    // Disconnecting wallet first because sometimes when is connected but the user is not connected
                    if (isConnected) {
                        disconnect();
                    }
                    openConnectModal?.();
                }}
                disabled={isConnecting}
                className='px-4 py-2 text-white bg-primary-500 rounded-md bg-[#F06225]'
            >
                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
            </Button>
        );
    }

    if (isConnected && !chain) {
        return (
            <Button
                className='px-4 py-2 text-white bg-primary-500 rounded-md bg-[#eb30a3]'
                onClick={openChainModal}>
                Wrong network
            </Button>
        );
    }

    return (
        <div className=" flex items-center justify-between">
            <div
                className="flex justify-center items-center px-4 py-2 border border-neutral-700 bg-neutral-800/30 rounded-xl font-mono font-bold gap-x-2 cursor-pointer"
                onClick={async () => openAccountModal?.()}
            >
                <div
                    role="button"
                    tabIndex={1}
                    className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                    style={{
                        backgroundColor,
                        boxShadow: "0px 2px 2px 0px rgba(81, 98, 255, 0.20)",
                    }}
                >
                    {emoji}
                </div>
                <div className="text-white text-sm">
                    {address?.slice(0, 6)}...
                    {address?.slice(-4)}

                    <div className="text-xs text-neutral-500">
                        {chain?.name}
                    </div>
                </div>
            </div>
            {/* <Button
                className='px-4 py-2 text-white bg-primary-500 rounded-md bg-[#eb30a3]'
                onClick={openChainModal}>
                Switch Networks
            </Button> */}
        </div>
    );
};
export default ConnectWalletButton;
