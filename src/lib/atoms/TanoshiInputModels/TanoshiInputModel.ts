import { THEMES } from '$lib/enums/GlobalEnums.js';
import type {
	INPUT_BACKGROUND_THEMES,
	INPUT_BORDER_THEMES,
	INPUT_TEXT_THEMES
} from '$lib/enums/TextEnums.js';
import type { HTMLInputTypeAttribute } from 'svelte/elements';

export default class TanoshiInputModel {
	private _id: string;
	private _name: string;
	private _placeholder: string | null = null;
	private _isDisabled: boolean = false;
	private _isReadonly: boolean = false;
	private _isRequired: boolean = false;
	private _isVisible: boolean = true;
	private _error: boolean = false;
	private _errorMessage: string = '';
	private _backgroundTheme: THEMES | INPUT_BACKGROUND_THEMES = THEMES.Transparent;
	private _borderTheme: THEMES | INPUT_BORDER_THEMES = THEMES.Black;
	private _textTheme: THEMES | INPUT_TEXT_THEMES = THEMES.Black;

	constructor(id: string, name: string) {
		this._id = id;
		this._name = name;
	}

	get type(): HTMLInputTypeAttribute {
		return this.type;
	}

	public setType(type: HTMLInputTypeAttribute) {
		this.type = type;
	}

	get id(): string {
		return this._id;
	}

	public setId(id: string) {
		this._id = id;
	}

	get name(): string {
		return this._name;
	}

	public setName(name: string) {
		this._name = name;
	}

	get placeholder(): string | null {
		return this._placeholder;
	}

	public setPlaceholder(placeholder: string) {
		this._placeholder = placeholder;
	}

	get isDisabled(): boolean {
		return this._isDisabled;
	}

	public setIsDisabled(isDisabled: boolean) {
		this._isDisabled = isDisabled;
	}

	get isReadonly(): boolean {
		return this._isReadonly;
	}

	public setIsReadonly(isReadonly: boolean) {
		this._isReadonly = isReadonly;
	}

	get isRequired(): boolean {
		return this._isRequired;
	}

	public setIsRequired(isRequired: boolean) {
		this._isRequired = isRequired;
	}

	get isVisible(): boolean {
		return this._isVisible;
	}

	public setIsVisible(isVisible: boolean) {
		this._isVisible = isVisible;
	}

	get error(): boolean {
		return this._error;
	}

	public setError(error: boolean) {
		this._error = error;
	}

	get errorMessage(): string {
		return this._errorMessage;
	}

	public setErrorMessage(errorMessage: string) {
		this._errorMessage = errorMessage;
	}

	get backgroundTheme(): THEMES | INPUT_BACKGROUND_THEMES {
		return this._backgroundTheme;
	}

	public setBackgroundTheme(backgroundTheme: THEMES | INPUT_BACKGROUND_THEMES) {
		this._backgroundTheme = backgroundTheme;
	}

	get borderTheme(): THEMES | INPUT_BORDER_THEMES {
		return this._borderTheme;
	}

	public setBorderTheme(borderTheme: THEMES | INPUT_BORDER_THEMES) {
		this._borderTheme = borderTheme;
	}

	get textTheme(): THEMES | INPUT_TEXT_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | INPUT_TEXT_THEMES) {
		this._textTheme = textTheme;
	}
}
