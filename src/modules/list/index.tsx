import './index.css'
import ListItem, { type ListItemProps } from "@library/listItem";
import { useStore } from '@nanostores/react';
import { $filteredData, $searchTerm, $groups } from '@system/store/data.ts';
import { useState } from 'react';

export type Props = {
    colors?: ListItemProps[]
}

export default function ColorList({ colors }: Props) {
    const [activeView, setActiveView] = useState<string>('list');

    const searchTerm = useStore($searchTerm)
    const groups = useStore($groups)
    const filteredData = useStore($filteredData)

    const resolvedColors = (searchTerm || groups.length) || searchTerm && groups.length ? filteredData : colors

    // TO-DO: Add Logic
    // const ViewSwitch: React.FC = () => {
    
    //     const handleViewChange = (newView: string) => {
    //         setActiveView(newView);
    //     };
    
    //     return (
    //         <div className="view-switch">
    //             <button
    //                 className={`list ${activeView === 'list' ? 'active' : ''}`}
    //                 onClick={() => handleViewChange('list')}
    //             >
    //                 List
    //             </button>
    //             <button
    //                 className={`card ${activeView === 'card' ? 'active' : ''}`}
    //                 onClick={() => handleViewChange('card')}
    //             >
    //                 Card
    //             </button>
    //         </div>
    //     );
    // };

    return (
        <section className="color-list">
            <div className="nav-wrapper">
                <p>Colors: {resolvedColors?.length}</p>
                {/* <ViewSwitch /> */}
            </div>
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
                                        activeView={activeView}
                                    />
                                )
                            })
                        ) :
                        (
                            <div className="noResults">
                                <h4>Sorry there are no results for your search. <br />
                                    Please try again!
                                </h4>
                            </div>
                        )

                }
            </ul>
        </section>
    )
}