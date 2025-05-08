import './index.css'
import { Search } from 'lucide-react';

export default function SearchInput() {

    return (
        <form className="search-input">
            <input type="search" placeholder='Search..' name="search" autoComplete="off"/>
            <button type="submit"><Search /></button>
        </form>
    )
}