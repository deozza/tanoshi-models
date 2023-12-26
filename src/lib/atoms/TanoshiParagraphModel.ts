import { THEMES } from '$lib/enums/GlobalEnums.js';
import {
	FONT_SIZES,
	FONT_WEIGHTS,
	PARAGRAPH_THEMES,
	TEXT_ALIGNMENT,
	TEXT_DECORATIONS,
	TEXT_TRANSFORMS
} from '$lib/enums/TextEnums.js';

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

	set fontSize(fontSize: FONT_SIZES) {
		this._fontSize = fontSize;
	}

	get textAlignment(): TEXT_ALIGNMENT {
		return this._textAlignment;
	}

	set textAlignment(textAlignment: TEXT_ALIGNMENT) {
		this._textAlignment = textAlignment;
	}

	get fontWeight(): FONT_WEIGHTS {
		return this._fontWeight;
	}

	set fontWeight(fontWeight: FONT_WEIGHTS) {
		this._fontWeight = fontWeight;
	}

	get textTransform(): TEXT_TRANSFORMS | null {
		return this._textTransform;
	}

	set textTransform(textTransform: TEXT_TRANSFORMS | null) {
		this._textTransform = textTransform;
	}

	get textDecoration(): TEXT_DECORATIONS | null {
		return this._textDecoration;
	}

	set textDecoration(textDecoration: TEXT_DECORATIONS | null) {
		this._textDecoration = textDecoration;
	}

	get textTheme(): THEMES | PARAGRAPH_THEMES {
		return this._textTheme;
	}

	set textTheme(textTheme: THEMES | PARAGRAPH_THEMES) {
		this._textTheme = textTheme;
	}
}
