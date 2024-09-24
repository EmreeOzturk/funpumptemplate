import TradingInterface from "@/components/details/trade"

const CoinDetails = ({ params }: { params: { id: string } }) => {
    console.log(params.id)
    return (
        <div className="flex items-start justify-center w-full gap-4 h-screen ">
            <div className="flex flex-col items-center justify-center w-2/3 ">
                {/* chart will come here */}
            </div>
            <div className="flex flex-col items-center justify-center w-1/3  ">
                <div>
                    <TradingInterface
                        coinName="SOL"
                        coinImage="https://cryptologos.cc/logos/solana-sol-logo.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default CoinDetails