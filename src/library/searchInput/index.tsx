import './index.css';
import { setSearchTerm, $data, setFilteredData, $groups } from '@system/store/data.ts';
import { useStore } from '@nanostores/react';

export default function SearchInput() {
    const data = useStore($data);
    const selectedGroups = useStore($groups);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filteredItems = data.colors?.filter((color) => {
            const matchesSearch = color.name?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesGroup = selectedGroups.length
                ? selectedGroups.some((group) => color.group?.includes(group ?? ''))
                : true; // If no groups are selected, include all
            return matchesSearch && matchesGroup;
        });

        if (filteredItems) {
            setFilteredData(filteredItems);
        }
    }

    return (
        <form className="search-input">
            <input
                type="search"
                placeholder="Search.."
                id="colorsearch"
                name="search"
                autoComplete="off"
                onChange={handleInputChange}
            />
        </form>
    );
}