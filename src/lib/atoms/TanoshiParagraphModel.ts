import { THEMES } from '$lib/enums/GlobalEnums.js';
import {
	FONT_SIZES,
	FONT_WEIGHTS,
	TEXT_ALIGNMENT,
	TEXT_DECORATIONS,
	TEXT_TRANSFORMS
} from '$lib/enums/TextEnums.js';
import type { PARAGRAPH_THEMES } from '$lib/enums/ParagraphEnums.js';

export default class TanoshiParagraphModel {
	private _fontSize: FONT_SIZES = FONT_SIZES.Md;
	private _textAlignment: TEXT_ALIGNMENT = TEXT_ALIGNMENT.Left;
	private _fontWeight: FONT_WEIGHTS = FONT_WEIGHTS.Regular;
	private _textTransform: TEXT_TRANSFORMS | null = null;
	private _textDecoration: TEXT_DECORATIONS | null = null;
	private _textTheme: THEMES | PARAGRAPH_THEMES = THEMES.Black;

	get fontSize(): FONT_SIZES {
		return this._fontSize;
	}

	public setFontSize(fontSize: FONT_SIZES): TanoshiParagraphModel {
		this._fontSize = fontSize;

		return this;
	}

	get textAlignment(): TEXT_ALIGNMENT {
		return this._textAlignment;
	}

	public setTextAlignment(textAlignment: TEXT_ALIGNMENT): TanoshiParagraphModel {
		this._textAlignment = textAlignment;

		return this;
	}

	get fontWeight(): FONT_WEIGHTS {
		return this._fontWeight;
	}

	public setFontWeight(fontWeight: FONT_WEIGHTS): TanoshiParagraphModel {
		this._fontWeight = fontWeight;

		return this;
	}

	get textTransform(): TEXT_TRANSFORMS | null {
		return this._textTransform;
	}

	public setTextTransform(textTransform: TEXT_TRANSFORMS | null): TanoshiParagraphModel {
		this._textTransform = textTransform;

		return this;
	}

	get textDecoration(): TEXT_DECORATIONS | null {
		return this._textDecoration;
	}

	public setTextDecoration(textDecoration: TEXT_DECORATIONS | null): TanoshiParagraphModel {
		this._textDecoration = textDecoration;

		return this;
	}

	get textTheme(): THEMES | PARAGRAPH_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | PARAGRAPH_THEMES): TanoshiParagraphModel {
		this._textTheme = textTheme;

		return this;
	}
}
