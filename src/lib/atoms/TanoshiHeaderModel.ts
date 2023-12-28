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

export default class TanoshiHeaderModel {
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
}
