import './index.css'
import ListItem, { type ListItemProps } from "@library/listItem";
import { useStore } from '@nanostores/react';
import { $filteredData, $searchTerm } from '@system/store/data.ts';

export type Props = {
    colors?: ListItemProps[]
}

export default function ColorList({ colors }: Props) {
    const searchTerm = useStore($searchTerm)
    const filteredData = useStore($filteredData)

    const resolvedColors = searchTerm ? filteredData : colors

    return (
        <section className="color-list">
            Colors: {resolvedColors?.length}
            <ul aria-label="List of Colors" role="group">
                {
                    resolvedColors?.length ?
                        (
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
                        ) :
                        (
                            <div className="noResults">
                                <h4>Sorry there are no results for your search. <br />
                                    Please tryy again!
                                </h4>
                            </div>
                        )

                }
            </ul>
        </section>
    )
}