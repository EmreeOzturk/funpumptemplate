import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
/* eslint-disable @next/next/no-img-element */


interface KingOfHillCardProps {
    title: string;
    creator: string;
    creatorAvatar?: string;
    marketCap: string;
    replies: number;
    ticker: string;
    badge?: string;
    createdAt: number;
    coinAvatar?: string;
}

const KingOfHillCard: React.FC<KingOfHillCardProps> = (
    { title, creator, creatorAvatar, marketCap, replies, ticker, badge, createdAt, coinAvatar }
) => {
    const now = new Date().getTime();
    const timeDiff = now - createdAt;
    const timeDiffInDays = timeDiff / (1000 * 60 * 60 * 24);
    const timeDiffInHours = timeDiff / (1000 * 60 * 60);
    const timeDiffInMinutes = timeDiff / (1000 * 60);

    return (
        <Card className="w-full max-w-xl bg-gray-900 text-white border-gray-800
            hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer hover:saturate-200">
            <CardContent className="p-4 flex items-start space-x-4">
                <Avatar className="w-40 h-40 rounded">
                    <img src={coinAvatar} alt="Coin" className="object-cover" />
                </Avatar>
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                            <span className="text-blue-400">Created by</span>
                            <Avatar className="w-5 h-5">
                                <img src={creatorAvatar} alt="Creator" className="object-cover" />
                            </Avatar>
                            <span className="text-blue-400">
                                {creator}
                            </span>
                        </div>
                        <span className="text-gray-400 text-sm">
                            {
                                timeDiffInDays > 1
                                    ? `${Math.floor(timeDiffInDays)} days ago`
                                    : timeDiffInHours > 1
                                        ? `${Math.floor(timeDiffInHours)} hours ago`
                                        : `${Math.floor(timeDiffInMinutes)} minutes ago`
                            }
                        </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <span className="text-green-400">market cap: {marketCap}</span>
                        {
                            badge &&
                            <Badge variant="secondary" className="bg-transparent hover:bg-yellow-700 text-yellow-500">
                                👑
                            </Badge>
                        }
                    </div>
                    <div className="text-gray-400 mb-2">replies: {replies}</div>
                    <div className="text-xl font-bold">{title} <span className="text-gray-400 font-normal">[ticker: {ticker}]</span></div>
                </div>
            </CardContent>
        </Card>
    );
};

export default KingOfHillCard;