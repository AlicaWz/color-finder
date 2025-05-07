import ListItem, { type ListItemProps } from "../../library/listItem";

export type Props = {
    colors?: ListItemProps[]
}

export default function ColorList({ colors }: Props) {
    return (
        <section>
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