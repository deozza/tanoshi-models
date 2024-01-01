import { THEMES } from '$lib/enums/GlobalEnums.js';
import {
	FONT_SIZES,
	FONT_WEIGHTS,
	HEADER_TAGS,
	TEXT_ALIGNMENT,
	TEXT_DECORATIONS,
	TEXT_TRANSFORMS
} from '$lib/enums/TextEnums.js';
import type { HEADER_THEMES } from '$lib/enums/HeaderEnums.js';
import type ComponentModelInterface from '$lib/interfaces/ComponentModelInterface.js';

export default class TanoshiHeaderModel implements ComponentModelInterface {
	private _tag: HEADER_TAGS = HEADER_TAGS.H1;
	private _fontSize: FONT_SIZES = FONT_SIZES['6Xl'];
	private _textAlignment: TEXT_ALIGNMENT = TEXT_ALIGNMENT.Left;
	private _fontWeight: FONT_WEIGHTS = FONT_WEIGHTS.Regular;
	private _textTransform: TEXT_TRANSFORMS | null = null;
	private _textDecoration: TEXT_DECORATIONS | null = null;
	private _textTheme: THEMES | HEADER_THEMES = THEMES.Black;

	get tag(): HEADER_TAGS {
		return this._tag;
	}

	public setTag(tag: HEADER_TAGS): TanoshiHeaderModel {
		this._tag = tag;

		return this;
	}

	get fontSize(): FONT_SIZES {
		return this._fontSize;
	}

	public setFontSize(fontSize: FONT_SIZES): TanoshiHeaderModel {
		this._fontSize = fontSize;

		return this;
	}

	get fontWeight(): FONT_WEIGHTS {
		return this._fontWeight;
	}

	public setFontWeight(fontWeight: FONT_WEIGHTS): TanoshiHeaderModel {
		this._fontWeight = fontWeight;

		return this;
	}

	get textAlignment(): TEXT_ALIGNMENT {
		return this._textAlignment;
	}

	public setTextAlignment(textAlignment: TEXT_ALIGNMENT): TanoshiHeaderModel {
		this._textAlignment = textAlignment;

		return this;
	}

	get textTransform(): TEXT_TRANSFORMS | null {
		return this._textTransform;
	}

	public setTextTransform(textTransform: TEXT_TRANSFORMS | null): TanoshiHeaderModel {
		this._textTransform = textTransform;

		return this;
	}

	get textDecoration(): TEXT_DECORATIONS | null {
		return this._textDecoration;
	}

	public setTextDecoration(textDecoration: TEXT_DECORATIONS | null): TanoshiHeaderModel {
		this._textDecoration = textDecoration;

		return this;
	}

	get textTheme(): THEMES | HEADER_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | HEADER_THEMES): TanoshiHeaderModel {
		this._textTheme = textTheme;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-header';

		classes += ` text-theme-${this._textTheme}`;
		classes += ` font-size-${this._fontSize}`;
		classes += ` text-align-${this._textAlignment}`;
		classes += ` font-weight-${this._fontWeight}`;

		if(this._textTransform !== null) {
			classes += ` text-transform-${this._textTransform}`;
		}

		if(this._textDecoration !== null) {
			classes += ` text-decoration-${this._textDecoration}`;
		}

		return classes;
	}
}
