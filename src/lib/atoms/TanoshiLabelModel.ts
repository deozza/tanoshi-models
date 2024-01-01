import { THEMES } from '$lib/enums/GlobalEnums.js';
import {
	FONT_SIZES,
	FONT_WEIGHTS,
	TEXT_ALIGNMENT,
	TEXT_DECORATIONS,
	TEXT_TRANSFORMS
} from '$lib/enums/TextEnums.js';
import type { LABEL_TEXT_THEMES } from '$lib/enums/LabelEnums.js';
import type ComponentModelInterface from '$lib/interfaces/ComponentModelInterface.js';

export default class TanoshiLabelModel implements ComponentModelInterface {
	private _content: string = '';
	private _forAttr: string;
	private _textTheme: THEMES | LABEL_TEXT_THEMES = THEMES.Primary;
	private _fontSize: FONT_SIZES = FONT_SIZES.Md;
	private _fontWeight: FONT_WEIGHTS = FONT_WEIGHTS.Regular;
	private _textAlignment: TEXT_ALIGNMENT = TEXT_ALIGNMENT.Left;
	private _textTransform: TEXT_TRANSFORMS | null = null;
	private _textDecoration: TEXT_DECORATIONS | null = null;
	private _isVisible: boolean = true;

	constructor(forAttr: string) {
		this._forAttr = forAttr;
	}

	get content(): string {
		return this._content;
	}

	public setContent(content: string): TanoshiLabelModel {
		this._content = content;

		return this;
	}

	get forAttr(): string {
		return this._forAttr;
	}

	public setForAttr(forAttr: string): TanoshiLabelModel {
		this._forAttr = forAttr;

		return this;
	}

	get textTheme(): THEMES | LABEL_TEXT_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | LABEL_TEXT_THEMES): TanoshiLabelModel {
		this._textTheme = textTheme;

		return this;
	}

	get fontSize(): FONT_SIZES {
		return this._fontSize;
	}

	public setFontSize(fontSize: FONT_SIZES): TanoshiLabelModel {
		this._fontSize = fontSize;

		return this;
	}

	get fontWeight(): FONT_WEIGHTS {
		return this._fontWeight;
	}

	public setFontWeight(fontWeight: FONT_WEIGHTS): TanoshiLabelModel {
		this._fontWeight = fontWeight;

		return this;
	}

	get textAlignment(): TEXT_ALIGNMENT {
		return this._textAlignment;
	}

	public setTextAlignment(textAlignment: TEXT_ALIGNMENT): TanoshiLabelModel {
		this._textAlignment = textAlignment;

		return this;
	}

	get textTransform(): TEXT_TRANSFORMS | null {
		return this._textTransform;
	}

	public setTextTransform(textTransform: TEXT_TRANSFORMS | null): TanoshiLabelModel {
		this._textTransform = textTransform;

		return this;
	}

	get textDecoration(): TEXT_DECORATIONS | null {
		return this._textDecoration;
	}

	public setTextDecoration(textDecoration: TEXT_DECORATIONS | null): TanoshiLabelModel {
		this._textDecoration = textDecoration;

		return this;
	}

	get isVisible(): boolean {
		return this._isVisible;
	}

	public setIsVisible(isVisible: boolean): TanoshiLabelModel {
		this._isVisible = isVisible;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-label';

		if (this._isVisible === false) {
			classes += ' hidden';

			return classes;
		}

		classes += ` text-theme-${this._textTheme}`;
		classes += ` font-size-${this._fontSize}`;
		classes += ` text-align-${this._textAlignment}`;
		classes += ` font-weight-${this._fontWeight}`;

		if (this._textTransform) {
			classes += ` text-transform-${this._textTransform}`;
		}

		if (this._textDecoration) {
			classes += ` text-decoration-${this._textDecoration}`;
		}

		return classes;
	}
}
