import { THEMES } from '$lib/enums/GlobalEnums.js';
import type {
	INPUT_BACKGROUND_THEMES,
	INPUT_BORDER_THEMES,
	INPUT_TEXT_THEMES
} from '$lib/enums/InputEnums.js';
import type ComponentModelInterface from '$lib/interfaces/ComponentModelInterface.js';

export default class TanoshiInputModel implements ComponentModelInterface {
	private _id: string;
	private _name: string;
	private _placeholder: string | null = null;
	private _isDisabled: boolean = false;
	private _isReadonly: boolean = false;
	private _isRequired: boolean = false;
	private _hidden: boolean = false;
	private _error: boolean = false;
	private _errorMessage: string = '';
	private _backgroundTheme: THEMES | INPUT_BACKGROUND_THEMES = THEMES.White;
	private _borderTheme: THEMES | INPUT_BORDER_THEMES = THEMES.Black;
	private _textTheme: THEMES | INPUT_TEXT_THEMES = THEMES.Black;

	constructor(id: string, name: string) {
		if (id === '') {
			throw new Error('Input id cannot be empty');
		}

		if (name === '') {
			throw new Error('Input name cannot be empty');
		}

		this._id = id;
		this._name = name;
	}

	get id(): string {
		return this._id;
	}

	public setId(id: string) {
		if (id === '') {
			throw new Error('Input id cannot be empty');
		}

		this._id = id;

		return this;
	}

	get name(): string {
		return this._name;
	}

	public setName(name: string) {
		if (name === '') {
			throw new Error('Input name cannot be empty');
		}

		this._name = name;

		return this;
	}

	get placeholder(): string | null {
		return this._placeholder;
	}

	public setPlaceholder(placeholder: string) {
		this._placeholder = placeholder;

		return this;
	}

	get isDisabled(): boolean {
		return this._isDisabled;
	}

	public setIsDisabled(isDisabled: boolean) {
		this._isDisabled = isDisabled;

		return this;
	}

	get isReadonly(): boolean {
		return this._isReadonly;
	}

	public setIsReadonly(isReadonly: boolean) {
		this._isReadonly = isReadonly;

		return this;
	}

	get isRequired(): boolean {
		return this._isRequired;
	}

	public setIsRequired(isRequired: boolean) {
		this._isRequired = isRequired;

		return this;
	}

	get hidden(): boolean {
		return this._hidden;
	}

	public setHidden(hidden: boolean) {
		this._hidden = hidden;

		return this;
	}

	get error(): boolean {
		return this._error;
	}

	public setError(error: boolean) {
		this._error = error;

		return this;
	}

	get errorMessage(): string {
		return this._errorMessage;
	}

	public setErrorMessage(errorMessage: string) {
		this._errorMessage = errorMessage;

		return this;
	}

	get backgroundTheme(): THEMES | INPUT_BACKGROUND_THEMES {
		return this._backgroundTheme;
	}

	public setBackgroundTheme(backgroundTheme: THEMES | INPUT_BACKGROUND_THEMES) {
		this._backgroundTheme = backgroundTheme;

		return this;
	}

	get borderTheme(): THEMES | INPUT_BORDER_THEMES {
		return this._borderTheme;
	}

	public setBorderTheme(borderTheme: THEMES | INPUT_BORDER_THEMES) {
		this._borderTheme = borderTheme;

		return this;
	}

	get textTheme(): THEMES | INPUT_TEXT_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | INPUT_TEXT_THEMES) {
		this._textTheme = textTheme;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-input';

		if (this._hidden === true) {
			classes += ' hidden';

			return classes;
		}

		classes += ` text-theme-${this._textTheme}`;
		classes += ` bg-theme-${this._backgroundTheme}`;
		classes += ` bd-theme-${this._borderTheme}`;

		if (this._isDisabled) {
			classes += ' disabled';
		}

		if (this._error) {
			classes += ' error';
		}

		return classes;
	}
}
