"use client";

import { http, createStorage, cookieStorage } from "wagmi";
import { sepolia } from "wagmi/chains";
import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";

const projectId = "673c7838fc22f3b78d67fde062c1c993";

const supportedChains: Chain[] = [sepolia];

export const config = getDefaultConfig({
  appName: "WalletConnection",
  projectId,
  // eslint-disable-next-line
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce(
    (obj, chain) => ({ ...obj, [chain.id]: http() }),
    {}
  ),
});
