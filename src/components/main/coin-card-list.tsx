const dummyData = [
  {
    title: "ShibeMoon",
    creator: "Fluffy123",
    coinAvatar: "https://i.pravatar.cc/300?img=1",
    marketCap: "5.7M",
    replies: 420,
    ticker: "SHM",
    createdAt: new Date().getTime() - 1000 * 60 * 60 * 48, // 2 days ago
    badge: "🌕",
    creatorAvatar: "https://i.pravatar.cc/300?img=2",
    description: "ShibeMoon to the moon! A meme coin powered by the cuteness of dogs and stars."
  },
  {
    title: "DankPepe",
    creator: "MemeMaster5000",
    coinAvatar: "https://i.pravatar.cc/300?img=3",
    marketCap: "2.1M",
    replies: 666,
    ticker: "DNK",
    createdAt: new Date().getTime() - 1000 * 60 * 60 * 24 * 5, // 5 days ago
    badge: "🔥",
    creatorAvatar: "https://i.pravatar.cc/300?img=4",
    description: "DankPepe is the ultimate meme currency for sharing rare Pepes and dank memes."
  },
  {
    title: "CatCoin",
    creator: "Whiskers99",
    coinAvatar: "https://i.pravatar.cc/300?img=5",
    marketCap: "890K",
    replies: 120,
    ticker: "MEOW",
    createdAt: new Date().getTime() - 1000 * 60 * 60 * 24 * 10, // 10 days ago
    badge: "🐾",
    creatorAvatar: "https://i.pravatar.cc/300?img=6",
    description: "CatCoin, the most purr-fect currency for all feline lovers. Invest in whiskers!"
  },
  {
    title: "BurritoBucks",
    creator: "SpicyTaco",
    coinAvatar: "https://i.pravatar.cc/300?img=7",
    marketCap: "999K",
    replies: 150,
    ticker: "BRR",
    createdAt: new Date().getTime() - 1000 * 60 * 60 * 24, // 1 day ago
    badge: "🌯",
    creatorAvatar: "https://i.pravatar.cc/300?img=8",
    description: "BurritoBucks: Wrapping up flavor and fortune in one spicy crypto. Crunch into it!"
  },
  {
    title: "FrogoCoin",
    creator: "ToadKing",
    coinAvatar: "https://i.pravatar.cc/300?img=9",
    marketCap: "3.2M",
    replies: 333,
    ticker: "FROG",
    createdAt: new Date().getTime() - 1000 * 60 * 60 * 12, // 12 hours ago
    badge: "🐸",
    creatorAvatar: "https://i.pravatar.cc/300?img=10",
    description: "FrogoCoin is leaping over competition. Buy now or croak later!"
  },

];

import CoinCard from "./coin-card";
const CoinCardList = () => {
  return (
    <div className="flex items-start justify-center gap-4 flex-wrap w-full mt-16 ">
      {
        dummyData.map((coin, index) => (
          <CoinCard
            key={index}
            title={coin.title}
            creator={coin.creator}
            coinAvatar={coin.coinAvatar}
            marketCap={coin.marketCap}
            replies={coin.replies}
            ticker={coin.ticker}
            createdAt={coin.createdAt}
            badge={coin.badge}
            creatorAvatar={coin.creatorAvatar}
            description={coin.description}
          />
        ))
      }
    </div>
  )
}

export default CoinCardList