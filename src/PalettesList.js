import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./PalettesList.css"

export class PalettesList extends Component {
    render() {
        const palettes = this.props.palettes.map(palette => (
            <Link to={`/palette/${palette.id}`} key={palette.id}>{palette.paletteName}</Link>
				));
        return (
            <div className="PalettesList">
                {palettes}
            </div>
        )
    }
}

export default PalettesList
