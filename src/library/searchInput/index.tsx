import './index.css'
import { Search } from 'lucide-react';
import { $searchTerm, setSearchTerm } from '@system/store/data.ts';
import { useStore } from '@nanostores/react';
export default function SearchInput() {
    const searchTerm = useStore($searchTerm)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm)
    }

    console.log("searchTerm", searchTerm)



    return (
        <form className="search-input">
            <input 
                type="search" 
                placeholder='Search..' 
                id="colorsearch" 
                name="search" 
                autoComplete="off" 
                onChange={handleInputChange}
            />
            <button type="submit"><Search /></button>
        </form>
    )
}