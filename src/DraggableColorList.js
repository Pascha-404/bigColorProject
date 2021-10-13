import React from 'react'
import DraggableColorbox from './DraggableColorbox';
import { SortableContainer } from "react-sortable-hoc"
import { withStyles } from '@material-ui/styles';

const styles = {
    list: {
        width: "100%",
        height: "100%"
    }
}

const DraggableColorList = SortableContainer(({ colors, deleteColor, classes }) => {
    return (
        <div className={classes.list}>
            {colors.map((color, idx) => (
                <DraggableColorbox
                    idx={idx}
                    key={idx}
                    color={color.color}
                    name={color.name}
                    deleteColor={deleteColor}
                />
            ))}
        </div>
    );
});

export default withStyles(styles)(DraggableColorList);