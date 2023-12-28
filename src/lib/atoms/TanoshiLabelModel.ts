import { THEMES } from '$lib/enums/GlobalEnums.js';
import {
	FONT_SIZES,
	FONT_WEIGHTS,
	TEXT_ALIGNMENT,
	TEXT_DECORATIONS,
	TEXT_TRANSFORMS
} from '$lib/enums/TextEnums.js';
import type { LABEL_THEMES } from '$lib/enums/LabelEnums.js';

export default class TanoshiLabelModel {
	private _content: string = '';
	private _forAttr: string;
	private _textTheme: THEMES | LABEL_THEMES = THEMES.Primary;
	private _fontSize: FONT_SIZES = FONT_SIZES.Md;
	private _fontWeight: FONT_WEIGHTS = FONT_WEIGHTS.Regular;
	private _textAlignment: TEXT_ALIGNMENT = TEXT_ALIGNMENT.Left;
	private _textTransform: TEXT_TRANSFORMS | null = null;
	private _textDecoration: TEXT_DECORATIONS | null = null;
	private _isVisibile: boolean = true;

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

	get textTheme(): THEMES | LABEL_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | LABEL_THEMES): TanoshiLabelModel {
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

	get isVisibile(): boolean {
		return this._isVisibile;
	}

	public setIsVisibile(isVisibile: boolean): TanoshiLabelModel {
		this._isVisibile = isVisibile;

		return this;
	}
}
