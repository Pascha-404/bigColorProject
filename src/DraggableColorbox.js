import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from "./styles/DraggableColorboxStyles"

function DraggableColorbox(props) {
    const { classes, name } = props;
    return (
        <div className={classes.root}>
            {name}
        </div>
    )
}

export default withStyles(styles)(DraggableColorbox)
