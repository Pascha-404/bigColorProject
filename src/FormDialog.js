import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class FormDialog extends Component {
	constructor(props) {
		super(props);
		this.state = { dialogState: "form", paletteName: '' };
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.showEmojiPicker = this.showEmojiPicker.bind(this);
		this.savePalette = this.savePalette.bind(this);

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

	showEmojiPicker(evt) {
		this.setState({dialogState: "emoji"})
	}

	savePalette(emojiObj) {
		this.props.savePalette(this.state.paletteName, emojiObj.native)
	}

	render() {
		const { dialogState, paletteName } = this.state;

		return (
			<div>
				<Dialog
					open={dialogState === 'form'}
					onClose={this.handleClose}
					aria-labelledby='form-dialog-title'>
					<DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
					<ValidatorForm onSubmit={this.showEmojiPicker}>
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

				<Dialog
					open={dialogState === 'emoji'}
					onClose={this.handleClose}
					aria-labelledby='form-dialog-title'>
					<DialogTitle id='form-dialog-title'>Choose a Emoji To Save</DialogTitle>
					<DialogContent>
						<Picker set='apple' title='Emoji Picker' onSelect={this.savePalette} />
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

export default FormDialog;
