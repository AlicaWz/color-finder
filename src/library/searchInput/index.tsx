import './index.css'
import { setSearchTerm, $data, setFilteredData } from '@system/store/data.ts';
import { useStore } from '@nanostores/react';
export default function SearchInput() {
    const data = useStore($data)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm)

        const filteredItems = data.colors?.filter((color) =>
            color.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredItems) {
            setFilteredData(filteredItems);
        }
    }



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
        </form>
    )
}