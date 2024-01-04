import { THEMES } from '$lib/enums/GlobalEnums.js';
import type {
	BUTTON_BACKGROUND_THEMES,
	BUTTON_BORDER_THEMES,
	BUTTON_HOVER_BACKGROUND_THEMES,
	BUTTON_HOVER_BORDER_THEMES,
	BUTTON_HOVER_TEXT_THEMES,
	BUTTON_TEXT_THEMES
} from '$lib/enums/ButtonEnums.js';
import type { BUTTON_TYPES } from '$lib/types/button.types.js';
import type ComponentModelInterface from '$lib/interfaces/ComponentModelInterface.js';

export default class TanoshiButtonModel implements ComponentModelInterface {
	private _label: string = '';
	private _type: BUTTON_TYPES = 'button';
	private _backgroundTheme: THEMES | BUTTON_BACKGROUND_THEMES = THEMES.Transparent;
	private _borderTheme: THEMES | BUTTON_BORDER_THEMES = THEMES.Transparent;
	private _textTheme: THEMES | BUTTON_TEXT_THEMES = THEMES.White;
	private _hoverBackgroundTheme: THEMES | BUTTON_HOVER_BACKGROUND_THEMES = THEMES.Primary;
	private _hoverBorderTheme: THEMES | BUTTON_HOVER_BORDER_THEMES = THEMES.Primary;
	private _hoverTextTheme: THEMES | BUTTON_HOVER_TEXT_THEMES = THEMES.White;
	private _isDisabled: boolean = false;

	get label(): string {
		return this._label;
	}

	public setLabel(label: string): TanoshiButtonModel {
		this._label = label;

		return this;
	}

	get type(): BUTTON_TYPES {
		return this._type;
	}

	public setType(type: BUTTON_TYPES): TanoshiButtonModel {
		this._type = type;

		return this;
	}

	get backgroundTheme(): THEMES | BUTTON_BACKGROUND_THEMES {
		return this._backgroundTheme;
	}

	public setBackgroundTheme(
		backgroundTheme: THEMES | BUTTON_BACKGROUND_THEMES
	): TanoshiButtonModel {
		this._backgroundTheme = backgroundTheme;

		return this;
	}

	get borderTheme(): THEMES | BUTTON_BORDER_THEMES {
		return this._borderTheme;
	}

	public setBorderTheme(borderTheme: THEMES | BUTTON_BORDER_THEMES): TanoshiButtonModel {
		this._borderTheme = borderTheme;

		return this;
	}

	get textTheme(): THEMES | BUTTON_TEXT_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | BUTTON_TEXT_THEMES): TanoshiButtonModel {
		this._textTheme = textTheme;

		return this;
	}

	get hoverBackgroundTheme(): THEMES | BUTTON_HOVER_BACKGROUND_THEMES {
		return this._hoverBackgroundTheme;
	}

	public setHoverBackgroundTheme(
		hoverBackgroundTheme: THEMES | BUTTON_HOVER_BACKGROUND_THEMES
	): TanoshiButtonModel {
		this._hoverBackgroundTheme = hoverBackgroundTheme;

		return this;
	}

	get hoverBorderTheme(): THEMES | BUTTON_HOVER_BORDER_THEMES {
		return this._hoverBorderTheme;
	}

	public setHoverBorderTheme(
		hoverBorderTheme: THEMES | BUTTON_HOVER_BORDER_THEMES
	): TanoshiButtonModel {
		this._hoverBorderTheme = hoverBorderTheme;

		return this;
	}

	get hoverTextTheme(): THEMES | BUTTON_HOVER_TEXT_THEMES {
		return this._hoverTextTheme;
	}

	public setHoverTextTheme(hoverTextTheme: THEMES | BUTTON_HOVER_TEXT_THEMES): TanoshiButtonModel {
		this._hoverTextTheme = hoverTextTheme;

		return this;
	}

	get isDisabled(): boolean {
		return this._isDisabled;
	}

	public setIsDisabled(isDisabled: boolean): TanoshiButtonModel {
		this._isDisabled = isDisabled;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-button';

		classes += ` text-theme-${this._textTheme}`;
		classes += ` hover-text-theme-${this._hoverTextTheme}`;
		classes += ` bg-theme-${this._backgroundTheme}`;
		classes += ` hover-bg-theme-${this._hoverBackgroundTheme}`;
		classes += ` bd-theme-${this._borderTheme}`;
		classes += ` hover-bd-theme-${this._hoverBorderTheme}`;

		return classes;
	}
}
