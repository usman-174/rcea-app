import React, { useState } from 'react';
import Styles from './inputField.module.scss';

const InputField = (props) => {
	const { erros, setErrors } = props;
	const [showSensitiveInfo, setShowSensitiveInfo] = useState(false);
	const [isValid, setIsValid] = useState(true);

	const toggleVisibility = () => {
		setShowSensitiveInfo(!showSensitiveInfo);
	};

	const validatePhoneNumber = (value) => {
		const mobilePattern = /^5\d{3}\s\d{4}$/;
		const landlinePattern = /^83\d{2}\s\d{3}$/;
		return mobilePattern.test(value) || landlinePattern.test(value);
	};

	const validateYearOfPosting = (value) => {
		return /^\d{4}$/.test(value);
	};

	const formatPhoneNumber = (e) => {
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

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (props.isPhoneNumber) {
			const numericValue = value.replace(/\D/g, '');
			if (
				(numericValue.startsWith('5') && numericValue.length > 8) ||
				(numericValue.startsWith('83') && numericValue.length > 7)
			) {
				return;
			}

			formatPhoneNumber(e);
			const valid = validatePhoneNumber(e.target.value);
			setIsValid(valid);
			setErrors({ ...erros, [name]: valid ? '' : 'Invalid phone number' });
		} else if (name === 'postingYear') {
			let numericValue = value.replace(/\D/g, '');
			numericValue = numericValue.slice(0, 4);
			e.target.value = numericValue;
			const valid = validateYearOfPosting(numericValue) && numericValue.length <= 4;
			setIsValid(valid);
			setErrors({ ...erros, [name]: valid ? '' : 'Invalid year' });
		}

		if (props.onChange) {
			props.onChange(e);
		}
	};

	const inputStyle = isValid ? {} : { border: '1px solid red' };

	return (
		<div className={`${Styles.inputContainer} ${props.className} ${props.formatText ? Styles.editableInputField : ''}`}>
			{props.label && (
				<label>
					{props.label} {props.required && props.label ? '*' : null}
				</label>
			)}
			<div className={Styles.inputField}>
				{props.type === 'textarea' ? (
					<textarea
						ref={props.inputRef}
						type={props.sensitiveField && showSensitiveInfo ? 'text' : props.type}
						onChange={handleInputChange}
						required={props.required}
						placeholder={props.placeholder}
						style={inputStyle}
					>
						{props.value}
					</textarea>
				) : (
					<input
						placeholder={props.placeholder}
						value={props.value}
						name={props.name}
						id={props.id}
						ref={props.inputRef}
						type={props.sensitiveField && showSensitiveInfo ? 'text' : props.type}
						onChange={handleInputChange}
						required={props.required}
						style={inputStyle}
					/>
				)}
			</div>
		</div>
	);
};

export { InputField };
