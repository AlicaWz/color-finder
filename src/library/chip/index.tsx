import { useStore } from '@nanostores/react';
import './index.css'
import { $data, $groups, setGroups, setFilteredData, $searchTerm} from '@system/store/data.ts';
import { useState } from 'react';
import { Check } from 'lucide-react';

export type ChipButtonProps = {
    groupName?: string;
}

export default function ChipButton({ groupName }: ChipButtonProps) {
    const [isActive, setIsActive] = useState(false);
    const data = useStore($data)
    const selectedGroups = useStore($groups);

    function getCorrectColor(group: string) {
        switch (group) {
            case "Aqua":
                return "var(--groups-aqua)";
            case "Blue":
                return "var(--groups-blue)";
            case "Brown":
                return "var(--groups-brown)";
            case "Cyan":
                return "var(--groups-cyan)";
            case "Gray":
                return "var(--groups-gray)";
            case "Green":
                return "var(--groups-green)";
            case "Orange":
                return "var(--groups-orange)";
            case "Pink":
                return "var(--groups-pink)";
            case "Purple":
                return "var(--groups-purple)";
            case "Red":
                return "var(--groups-red)";
            case "Yellow":
                return "var(--groups-yellow)";

            default:
                return "var(--groups-aqua)";
        }
    }

    function getCheckMark(group: string) {
        if (group === "Yellow" || group === "Pink" || group === "Cyan" || group === "Orange") {
            return "var(--med-grey)";
        }
        return "var(--white)";
    }

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setIsActive(e.target.checked)
    
        if (e.target.checked) {
            const updatedGroups = [...selectedGroups, value];
            setGroups(updatedGroups);
    
            const filteredItems = data.colors?.filter((color) => {
                const matchesSearch = color.name?.toLowerCase().includes($searchTerm.get().toLowerCase());
                const matchesGroup = updatedGroups.some((group) => color.group?.includes(group ?? ''));
                return matchesSearch && matchesGroup;
            });
    
            if (filteredItems) {
                setFilteredData(filteredItems);
            }
        } else {
            const updatedGroups = selectedGroups.filter((group) => group !== value);
            setGroups(updatedGroups);
    
            const filteredItems = data.colors?.filter((color) => {
                const matchesSearch = color.name?.toLowerCase().includes($searchTerm.get().toLowerCase());
                const matchesGroup = updatedGroups.length
                    ? updatedGroups.some((group) => color.group?.includes(group ?? ''))
                    : true;
                return matchesSearch && matchesGroup;
            });
     
            if (filteredItems) {
                setFilteredData(filteredItems);
            } else {
                setFilteredData(data.colors || []);
            }
        }
    };

    return (
        <div className={`chipbutton ${isActive ? 'active' : ''}`}>
            {isActive && <Check color={getCheckMark(groupName || '')} size={12} strokeWidth={3} />}
            <input type="checkbox" id="chipbutton" name="color" value={groupName} onChange={handleChecked} />
            {groupName && <div className="prev" style={{ background: getCorrectColor(groupName) }}></div>}
            <label>{groupName}</label>
        </div>
    )
}