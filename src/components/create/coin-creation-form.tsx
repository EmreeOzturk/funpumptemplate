"use client";
import { useState } from 'react';
import { ArrowLeft, ChevronUp, ChevronDown } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { motion } from 'framer-motion';
import Link from 'next/link';
const CoinCreationForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" mx-auto p-6  max-w-2xl text-[#ffe7d4]">
      <Link href="/" className="mb-6 flex items-center">
        <ArrowLeft className="mr-2" />
        <span >Go back</span>
      </Link>

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">name</Label>
          <Input id="name" className="bg-gray-900 border-gray-500 text-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ticker">ticker</Label>
          <Input id="ticker" className="bg-gray-900 border-gray-500 text-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">description</Label>
          <Textarea id="description" className="bg-gray-900 border-gray-500 text-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">image</Label>
          <div className="flex items-center bg-gray-900 border border-gray-500 rounded p-2">
            <Button variant="secondary" className="mr-2">Dosya Seç</Button>
            <span className="text-gray-400">Dosya seçilmedi</span>
          </div>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="link" className="p-0 h-auto text-[#ffe7d4]">
              {isOpen ? 'Hide more options ' : 'Show more options '}
              {isOpen ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="space-y-4 mt-4">
            <motion.div className="space-y-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Label htmlFor="twitter">twitter link</Label>
              <Input id="twitter" placeholder="(optional)" className="bg-gray-900 border-gray-500 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="space-y-2">
              <Label htmlFor="telegram">telegram link</Label>
              <Input id="telegram" placeholder="(optional)" className="bg-gray-900 border-gray-500 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="space-y-2">
              <Label htmlFor="website">website</Label>
              <Input id="website" placeholder="(optional)" className="bg-gray-900 border-gray-500 text-white" />
            </motion.div>
          </CollapsibleContent>
        </Collapsible>
        <Button type="submit" className="w-full bg-[#F06225] hover:bg-[#f0622596]">
          Create coin
        </Button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-400">
        When your coin completes its bonding curve you receive 0.1 ETH
      </p>
    </div>
  );
};

export default CoinCreationForm;