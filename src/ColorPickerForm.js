import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = { currentColor: '#3F51B5', colorName: '' };
		this.handleColorChange = this.handleColorChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		// custom rule will have name 'isNameUnique'
		ValidatorForm.addValidationRule('isNameUnique', value =>
			this.props.colors.every(color => color.name.toLowerCase() !== value.toLowerCase())
		);
		// custom rule will have name 'isColorUnique'
		ValidatorForm.addValidationRule('isColorUnique', value =>
			this.props.colors.every(color => color.color !== this.state.currentColor)
		);
	}

	handleColorChange(evt) {
		this.setState({ currentColor: evt.hex });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleSubmit() {
		this.props.addColor(this.state.currentColor, this.state.colorName);
		this.setState({ colorName: '' });
	}

	render() {
		const { currentColor, colorName } = this.state;
		const { classes, isPaletteFull } = this.props;
		return (
			<div className={classes.colorPicker}>
				<ChromePicker
					color={currentColor}
					onChange={this.handleColorChange}
					disableAlpha
					width='100%'
				/>

				<ValidatorForm onSubmit={this.handleSubmit}>
					<div className={classes.textfield}>
						<TextValidator
							label='Color Name'
							onChange={this.handleChange}
							name='colorName'
							value={colorName}
							validators={['required', 'isColorUnique', 'isNameUnique']}
							errorMessages={[
								'Name is required',
								'Color is already picked',
								'Name is already taken',
							]}
						/>
					</div>
					<Button
						variant='contained'
						color='primary'
						style={{ backgroundColor: currentColor }}
						type='submit'
						disabled={isPaletteFull ? true : false}>
						Add color
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
