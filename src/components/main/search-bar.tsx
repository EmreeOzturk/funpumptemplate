import { Input } from "../ui/input"
import { Button } from "../ui/button"
const SearchBar = () => {
    return (
        <div className="flex items-center justify-center w-2/3 gap-4 mt-16">
            <Input placeholder="Search for a coin" className="w-full h-12  text-white placeholder:text-white" />
            <Button className="h-12 text-white bg-primary-500 rounded-md bg-[#F06225]">
                Search
            </Button>
        </div>
    )
}

export default SearchBar