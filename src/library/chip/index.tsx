import { useStore } from '@nanostores/react';
import './index.css'
import { $data, $groups, setGroups, setFilteredData} from '@system/store/data.ts';
import { useState } from 'react';
import { Check } from 'lucide-react';

export type ChipButtonProps = {
    groupName?: string;
}

export default function ChipButton({ groupName }: ChipButtonProps) {
    const [isActive, setIsActive] = useState(false);
    const data = useStore($data)
    const selectedGroups = useStore($groups);

    console.log("$selectedGroups", selectedGroups)

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
            // Add the selected group to the $groups store
            const updatedGroups = [...selectedGroups, value];
            setGroups(updatedGroups);
    
            // Filter data based on all selected groups
            const filteredItems = data.colors?.filter((color) =>
                updatedGroups.some((group) => color.group?.includes(group ?? ''))
            );
            if (filteredItems) {
                setFilteredData(filteredItems);
            }
        } else {
            // Remove the unselected group from the $groups store
            const updatedGroups = selectedGroups.filter((group) => group !== value);
            setGroups(updatedGroups);
    
            // Filter data based on the remaining selected groups
            const filteredItems = data.colors?.filter((color) =>
                updatedGroups.some((group) => color.group?.includes(group ?? ''))
            );
            if (filteredItems) {
                setFilteredData(filteredItems);
            } else {
                // If no groups are selected, reset to all data
                setFilteredData(data.colors || []);
            }
        }
    
        // if (e.target.checked) {
        //     setGroups([...selectedGroups.filter((group) => typeof group === "string"), value]);

        //     const filteredItems = data.colors?.filter((color) => color.group?.includes(value));
        //     if (filteredItems) {
        //         setFilteredData(filteredItems);
        //     }
        // } else {
        //     setGroups(selectedGroups.filter((group) => group !== value));
        // }
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