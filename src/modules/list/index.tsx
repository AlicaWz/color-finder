import ListItem, { type ListItemProps } from "../../library/listItem";
import './index.css'

export type Props = {
    colors?: ListItemProps[]
    count?: number;
}

export default function ColorList({ colors, count }: Props) {
    return (
        <section className="color-list">
            Colors: {count}
            {
                colors && colors.map((color: ListItemProps, index: number) => {
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
        </section>
    )
}