import { THEMES } from "$lib/enums/GlobalEnums.js";
import type { INPUT_BACKGROUND_THEMES, INPUT_BORDER_THEMES, INPUT_TEXT_THEMES } from "$lib/enums/TextEnums.js";
import type { HTMLInputTypeAttribute } from "svelte/elements";

export default class TanoshiInputModel {
    private _id: string;
    private _name: string;
    private _placeholder: string|null = null;
    private _isDisabled: boolean = false;
    private _isReadonly: boolean = false;
    private _isRequired: boolean = false;
    private _isVisible: boolean = true;
    private _error: boolean = false;
	private _errorMessage: string = '';
    private _backgroundTheme: THEMES|INPUT_BACKGROUND_THEMES = THEMES.Transparent
    private _borderTheme: THEMES|INPUT_BORDER_THEMES = THEMES.Black;
    private _textTheme: THEMES|INPUT_TEXT_THEMES = THEMES.Black;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    get type(): HTMLInputTypeAttribute {
        return this.type;
    }

    set type(type: HTMLInputTypeAttribute) {
        this.type = type;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get placeholder(): string|null {
        return this._placeholder;
    }

    set placeholder(placeholder: string) {
        this._placeholder = placeholder;
    }

    get isDisabled(): boolean {
        return this._isDisabled;
    }

    set isDisabled(isDisabled: boolean) {
        this._isDisabled = isDisabled;
    }

    get isReadonly(): boolean {
        return this._isReadonly;
    }

    set isReadonly(isReadonly: boolean) {
        this._isReadonly = isReadonly;
    }

    get isRequired(): boolean {
        return this._isRequired;
    }

    set isRequired(isRequired: boolean) {
        this._isRequired = isRequired;
    }

    get isVisible(): boolean {
        return this._isVisible;
    }

    set isVisible(isVisible: boolean) {
        this._isVisible = isVisible;
    }

    get error(): boolean {
        return this._error;
    }

    set error(error: boolean) {
        this._error = error;
    }

    get errorMessage(): string {
        return this._errorMessage;
    }

    set errorMessage(errorMessage: string) {
        this._errorMessage = errorMessage;
    }

    get backgroundTheme(): THEMES|INPUT_BACKGROUND_THEMES {
        return this._backgroundTheme;
    }

    set backgroundTheme(backgroundTheme: THEMES|INPUT_BACKGROUND_THEMES) {
        this._backgroundTheme = backgroundTheme;
    }

    get borderTheme(): THEMES|INPUT_BORDER_THEMES {
        return this._borderTheme;
    }

    set borderTheme(borderTheme: THEMES|INPUT_BORDER_THEMES) {
        this._borderTheme = borderTheme;
    }

    get textTheme(): THEMES|INPUT_TEXT_THEMES {
        return this._textTheme;
    }

    set textTheme(textTheme: THEMES|INPUT_TEXT_THEMES) {
        this._textTheme = textTheme;
    }
}