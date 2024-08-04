import React, { Component } from 'react';
import Styles from './inputField.module.scss';

class InputField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showSensitiveInfo: false,
			isValid: true,
		};
	}

	toggleVisibility = () => {
		this.setState({ showSensitiveInfo: !this.state.showSensitiveInfo });
	};

	validatePhoneNumber = (value) => {
		const mobilePattern = /^5\d{3}\s\d{4}$/;
		const landlinePattern = /^83\d{2}\s\d{3}$/;

		return mobilePattern.test(value) || landlinePattern.test(value);
	};

	validateYearOfPosting = (value) => {
		// Year should be exactly four digits
		return /^\d{4}$/.test(value);
	};

	formatPhoneNumber = (e) => {
		const input = e.target.value.replace(/\D/g, '');
		let formattedNumber = '';

		if (input.startsWith('5')) {
			if (input.length > 4) {
				formattedNumber = `${input.substring(0, 4)} ${input.substring(4, 8)}`;
			} else {
				formattedNumber = input;
			}
		} else if (input.startsWith('83')) {
			if (input.length > 5) {
				formattedNumber = `${input.substring(0, 4)} ${input.substring(4, 7)}`;
			} else {
				formattedNumber = input;
			}
		} else {
			formattedNumber = input;
		}

		e.target.value = formattedNumber.trim();
	};

	handleInputChange = (e) => {
		const { name, value } = e.target;

		if (this.props.isPhoneNumber) {
			const numericValue = value.replace(/\D/g, '');
			if ((numericValue.startsWith('5') && numericValue.length > 8) ||
				(numericValue.startsWith('83') && numericValue.length > 7)) {
				return;
			}

			this.formatPhoneNumber(e);
			const isValid = this.validatePhoneNumber(e.target.value);
			this.setState({ isValid });
		} else if (name === 'postingYear') {
			// Remove non-numeric characters
			let numericValue = value.replace(/\D/g, '');
			numericValue = numericValue.slice(0, 4);
			e.target.value = numericValue
			const isValid = this.validateYearOfPosting(numericValue) && numericValue.length <= 4;
			this.setState({ isValid });
			// Set the input value to numericValue, limited to 4 digits
		}

		if (this.props.onChange) {
			this.props.onChange(e);
		}
	};

	render() {
		const inputStyle = this.state.isValid ? {} : { border: '1px solid red' };

		return (
			<div className={`${Styles.inputContainer} ${this.props.className} ${this.props.formatText ? Styles.editableInputField : null}`}>
				{this.props.label && <label>{this.props.label} {(this.props.required && this.props.label) ? '*' : null}</label>}
				<div className={Styles.inputField}>
					{this.props.type === 'textarea' ? (
						<textarea
							ref={this.props.inputRef}
							type={this.props.sensitiveField && this.state.showSensitiveInfo ? 'text' : this.props.type}
							onChange={this.handleInputChange}
							required={this.props.required}
							// value={this.props.value}
							placeholder={this.props.placeholder}
							style={inputStyle}
						>
							{this.props.value}
						</textarea>
					) : (
						<input
							placeholder={this.props.placeholder}
							value={this.props.value}
							defaultValue={this.props.defaultValue}
							name={this.props.name}
							id={this.props.id}
							ref={this.props.inputRef}
							type={this.props.sensitiveField && this.state.showSensitiveInfo ? 'text' : this.props.type}
							onChange={this.handleInputChange}
							required={this.props.required}
							style={inputStyle}
						/>
					)}
				</div>
				
			</div>
		);
	}
}

export { InputField };
