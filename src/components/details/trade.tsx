/* eslint-disable @next/next/no-img-element */
"use client";
import { SetStateAction, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";

interface TradingInterfaceProps {
    coinName: string;
    coinImage: string;
}
const TradingInterface: React.FC<TradingInterfaceProps> = ({ coinName, coinImage }) => {
    const [mode, setMode] = useState('buy');
    const [amount, setAmount] = useState('0.0');
    const [coin, setCoin] = useState('SOL');

    const handleModeChange = (newMode: SetStateAction<string>) => {
        setMode(newMode);
    };

    const handleAmountChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setAmount(e.target.value);
    };

    const handleReset = () => {
        setAmount('0.0');
    };

    const handleQuickAmount = (value: string | number) => {
        if (coin === 'SOL') {
            setAmount(value.toString());
        } else {
            setAmount((parseFloat(value as string) * 100).toString());
        }
    };

    const handleCoinSwitch = () => {
        setCoin(coin === 'SOL' ? 'CIA' : 'SOL');
        setAmount('0.0');
    };

    return (
        <div className="w-full p-4 bg-gray-900 rounded-lg">
            <div className="flex space-x-2 mb-4">
                <Button
                    className={`flex-1 ${mode === 'buy' ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                    onClick={() => handleModeChange('buy')}
                >
                    Buy
                </Button>
                <Button
                    className={`flex-1 ${mode === 'sell' ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                    onClick={() => handleModeChange('sell')}
                >
                    Sell
                </Button>
            </div>

            <div className="flex justify-between mb-4">
                <Button variant="outline" size="sm" onClick={handleCoinSwitch}>
                    switch to {coin === 'SOL' ? 'CIA' : 'SOL'}
                </Button>
                <Button variant="outline" size="sm">
                    Set max slippage
                </Button>
            </div>

            <div className="relative mb-4">
                <Input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full pr-16 bg-gray-800 text-white"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-400">{coin}</span>
                    <Avatar className="w-6 h-6 ml-2">
                        <img src={coinImage} alt={coinName} className="rounded-full" />
                    </Avatar>
                </div>
            </div>

            <div className="flex space-x-2 mb-4">
                <Button variant="outline" size="sm" onClick={handleReset}>
                    reset
                </Button>
                {coin === 'SOL' ? (
                    <>
                        <Button variant="outline" size="sm" onClick={() => handleQuickAmount(1)}>1 SOL</Button>
                        <Button variant="outline" size="sm" onClick={() => handleQuickAmount(5)}>5 SOL</Button>
                        <Button variant="outline" size="sm" onClick={() => handleQuickAmount(10)}>10 SOL</Button>
                    </>
                ) : (
                    <>
                        <Button variant="outline" size="sm" onClick={() => handleQuickAmount(0.25)}>25%</Button>
                        <Button variant="outline" size="sm" onClick={() => handleQuickAmount(0.5)}>50%</Button>
                        <Button variant="outline" size="sm" onClick={() => handleQuickAmount(0.75)}>75%</Button>
                        <Button variant="outline" size="sm" onClick={() => handleQuickAmount(1)}>100%</Button>
                    </>
                )}
            </div>

            <Button className="w-full bg-green-500 hover:bg-green-600">
                place trade
            </Button>
        </div>
    );
};

export default TradingInterface;

// Usage example:
// <TradingInterface coinName="Solana" coinImage="/path/to/solana-image.png" />