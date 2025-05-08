import './index.css'
//import { Copy } from 'lucide-react';

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

    // function CopyButton(color: string) {

    //     const handleCopy = (color) => {

    //     }
    //     return (
    //         <button
    //             onClick={handleCopy(color)}
    //         >
    //            <Copy />
    //         </button>
    //     )
    // }

    return (
        <li className="listitem" id={name} role="listitem">
            <span className="color-wrapper">
                <div className="prev" style={{background: `#${hex}`}}></div>
                <p className='name'>{name}</p>
            </span>
            <span className="hex"><p>#{hex}</p></span>
            <span className="rgb"><p> RGB: {rgb}</p></span>
            <p className="group">{group}</p>
        </li>
    )
}