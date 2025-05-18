import { useState } from 'react';
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
    const [copiedType, setCopiedType] = useState<string | null>(null); 

    const handleCopy = (color: string, type: string) => {
        navigator.clipboard.writeText(color);
        setCopiedType(type); 

        setTimeout(() => {
            setCopiedType(null);
        }, 5000);
    };

    return (
        <li className="listitem" id={name} role="listitem">
            <span className="color-wrapper">
                <div className="prev" style={{ background: `#${hex}` }}></div>
                <p className="name">{name}</p>
            </span>
            <span className="button-wrapper">
                <button
                    className="hex"
                    onClick={() => handleCopy(hex ?? '', 'hex')}
                >
                    <p>#{hex}</p>
                    {copiedType === 'hex' && <div className="tooltip">Copied</div>}
                </button>
            </span>
            <span className="button-wrapper">
                <button
                    className="rgb"
                    onClick={() => handleCopy(rgb ?? '', 'rgb')}
                >
                    <p>RGB: {rgb}</p>
                    {copiedType === 'rgb' && <div className="tooltip">Copied</div>}
                </button>
            </span>
            <p className="group">{group}</p>
        </li>
    );
}