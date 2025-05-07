import './index.css'

export type ListItemProps = {
    name?: string;
    hex?: string;
    rgb?: string;
    group?: string;
}
export default function ListItem({
    name,
    hex,
    rgb,
    group
}: ListItemProps) {

    return (
        <div className="listitem" id={name}>
            <span className="color-wrapper">
                <div className="colorprev"></div>
                <p className='colorname'>{name}</p>
            </span>
            <p>{hex}</p>
            <p>{rgb}</p>
            <p>{group}</p>
        </div>
    )
}