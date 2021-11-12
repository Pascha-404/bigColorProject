import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class FormDialog extends Component {
	constructor(props) {
		super(props);
		this.state = { open: true, paletteName: '' };
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		// custom rule will have name 'isPaletteNameUnique'
		ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
			this.props.palettes.every(
				palette =>
					palette.paletteName.toLowerCase() !== this.state.paletteName.toLowerCase()
			)
		);
	}

	handleClose() {
		this.props.hideForm();
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSubmit(evt) {
		this.props.handleSubmit(this.state.paletteName);
	}

	render() {
		const { open, paletteName } = this.state;

		return (
			<div>
				<Dialog open={open} onClose={this.handleClose}>
					<DialogTitle>Choose a Palette Name</DialogTitle>
					<ValidatorForm onSubmit={this.handleSubmit}>
						<DialogContent>
							<DialogContentText>
								Enter a name for your new palette. It must be unique!
							</DialogContentText>

							<TextValidator
								autoFocus
								margin='dense'
								fullWidth
								label='Palette Name'
								value={paletteName}
								onChange={this.handleChange}
								name='paletteName'
								validators={['required', 'isPaletteNameUnique']}
								errorMessages={[
									'Palette Name is required',
									'Palette Name is already taken',
								]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose}>Cancel</Button>
							<Button type='submit'>Save Palette</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default FormDialog;
