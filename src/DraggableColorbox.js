import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from "./styles/DraggableColorboxStyles"

function DraggableColorbox(props) {
    const { classes, color } = props;
    return (
        <div className={classes.root}>
            {color}
        </div>
    )
}

export default withStyles(styles)(DraggableColorbox)
