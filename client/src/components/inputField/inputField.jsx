import { Component } from 'react';
import Styles from './inputField.module.scss';

class InputField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showSensitiveInfo: false,
			editorValue: [
				{
					type: 'paragraph',
					children: [{ text: '' }]
				}]
		};
	}

	toggleVisibility() {
		this.setState({ showSensitiveInfo: !this.state.showSensitiveInfo });
	}

	formatPhoneNumber(e) {
		if (e.nativeEvent.inputType !== 'deleteContentBackward') {
			const phoneNumber = e.target.value.replace(/\D/g, '');

			e.target.value = `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6, 10)}`;
		}
	}

	inputChange(e) {
		if (this.props.onChange) {
			this.props.onChange(e);
		}

		if (this.props.isPhoneNumber) {
			this.formatPhoneNumber(e);
		}
	}

	setEditorValue(value) {
		this.setState({ editorValue: value });
	}

	render() {
		return (
			<div className={`${Styles.inputContainer} ${this.props.className} ${this.props.formatText ? Styles.editableInputField : null}`}>
				{
					this.props.label
					&& <label>{this.props.label} {(this.props.required && this.props.label) ? '*' : null}</label>
				}
				<div className={Styles.inputField}>
					{
						this.props.type === 'textarea'
							? <textarea
								ref={this.props.inputRef}
								type={this.props.sensitiveField && this.state.showSensitiveInfo ? 'text' : this.props.type}
								onChange={(e) => { this.inputChange(e); }}
								required={this.props.required} />
							: <input
								placeholder={this.props.placeholder}
								value={this.props.value}
								defaultValue={this.props.defaultValue}
								name={this.props.name}
								id={this.props.id}
								ref={this.props.inputRef}
								type={this.props.sensitiveField && this.state.showSensitiveInfo ? 'text' : this.props.type}
								onChange={(e) => { this.inputChange(e); }}
								required={this.props.required} />
					}
				</div>
			</div>
		);
	}
}

export { InputField };
