import './index.css'
import ListItem, { type ListItemProps } from "@library/listItem";
import { useStore } from '@nanostores/react';
import { $filteredData, $searchTerm } from '@system/store/data.ts';

export type Props = {
    colors?: ListItemProps[]
    count?: number;
}

export default function ColorList({ colors, count }: Props) {
    const searchTerm = useStore($searchTerm)
    const filteredData = useStore($filteredData)

    const resolvedColors = searchTerm ? filteredData : colors
    
    return (
        <section className="color-list">
            Colors: {count}
            <ul aria-label="List of Colors" role="group">
                {
                    resolvedColors?.map((color: ListItemProps, index: number) => {
                        return (
                            <ListItem
                                key={index}
                                name={color.name}
                                hex={color.hex}
                                rgb={color.rgb}
                                group={color.group}
                            />
                        )
                    })

                }
            </ul>
        </section>
    )
}