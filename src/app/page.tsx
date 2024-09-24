import CoinCardList from "@/components/main/coin-card-list";
import KingOfHillCard from "@/components/main/king-of-hill-card";
import SearchBar from "@/components/main/search-bar";
import { StartCoinButton } from "@/components/main/start-new-coin";
import { Rye } from "next/font/google"

const rye = Rye({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
})
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full  pt-6">
      <StartCoinButton />
      <p className={`text-4xl ${rye.className} text-white pt-12 pb-4 `} >
        king of the hill
      </p>
      <KingOfHillCard
        title="TESTCOIN"
        creator="5UscB1"
        coinAvatar="https://i.pravatar.cc/300"
        marketCap="1.2K"
        replies={123}
        ticker="TST"
        createdAt={new Date().getTime() - 1000 * 60 * 60 * 24}
        badge="👑"
        creatorAvatar="data:image/jpeg;base64,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"
      />
      <SearchBar />
      <CoinCardList />
    </div >
  );
}
