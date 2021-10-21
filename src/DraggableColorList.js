import React from 'react'
import DraggableColorbox from './DraggableColorbox';
import { SortableContainer } from "react-sortable-hoc"


const DraggableColorList = SortableContainer(({ colors, deleteColor, classes }) => {
    return (
        <div style={{height:"100%"}}>
            {colors.map((color, idx) => (
                <DraggableColorbox
                    index={idx}
                    key={color.name}
                    color={color.color}
                    name={color.name}
                    deleteColor={deleteColor}
                />
            ))}
        </div>
    );
});

export default DraggableColorList;