import { THEMES } from '$lib/enums/GlobalEnums.js';
import {
	FONT_SIZES,
	TEXT_ALIGNMENT,
	FONT_WEIGHTS,
	type HOVER_LINK_THEMES,
	type LINK_THEMES,
	type TEXT_DECORATIONS,
	type TEXT_TRANSFORMS
} from '$lib/enums/TextEnums.js';
import type { TARGET } from '$lib/types/link.types.js';

export default class TanoshiLinkModel {
	private _href: string;
	private _label: string = '';
	private _isDisabled: boolean = false;
	private _target: TARGET = '_self';
	private _textTheme: THEMES | LINK_THEMES = THEMES.Primary;
	private _hoverTextTheme: THEMES | HOVER_LINK_THEMES = THEMES.Primary;
	private _fontSize: FONT_SIZES = FONT_SIZES.Md;
	private _textAlignment: TEXT_ALIGNMENT = TEXT_ALIGNMENT.Left;
	private _fontWeight: FONT_WEIGHTS = FONT_WEIGHTS.Regular;
	private _textTransform: TEXT_TRANSFORMS | null = null;
	private _textDecoration: TEXT_DECORATIONS | null = null;

	constructor(href: string) {
		this._href = href;
	}

	get href(): string {
		return this._href;
	}

	public setHref(href: string) {
		this._href = href;
	}

	get label(): string {
		return this._label;
	}

	public setLabel(label: string) {
		this._label = label;
	}

	get isDisabled(): boolean {
		return this._isDisabled;
	}

	public setIsDisabled(isDisabled: boolean) {
		this._isDisabled = isDisabled;
	}

	get target(): TARGET {
		return this._target;
	}

	public setTarget(target: TARGET) {
		this._target = target;
	}

	get textTheme(): THEMES | LINK_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | LINK_THEMES) {
		this._textTheme = textTheme;
	}

	get hoverTextTheme(): THEMES | HOVER_LINK_THEMES {
		return this._hoverTextTheme;
	}

	public setHoverTextTheme(hoverTextTheme: THEMES | HOVER_LINK_THEMES) {
		this._hoverTextTheme = hoverTextTheme;
	}

	get fontSize(): FONT_SIZES {
		return this._fontSize;
	}

	public setFontSize(fontSize: FONT_SIZES) {
		this._fontSize = fontSize;
	}

	get fontWeight(): FONT_WEIGHTS {
		return this._fontWeight;
	}

	public setFontWeight(fontWeight: FONT_WEIGHTS) {
		this._fontWeight = fontWeight;
	}

	get textAlignment(): TEXT_ALIGNMENT {
		return this._textAlignment;
	}

	public setTextAlignment(textAlignment: TEXT_ALIGNMENT) {
		this._textAlignment = textAlignment;
	}

	get textTransform(): TEXT_TRANSFORMS | null {
		return this._textTransform;
	}

	public setTextTransform(textTransform: TEXT_TRANSFORMS | null) {
		this._textTransform = textTransform;
	}

	get textDecoration(): TEXT_DECORATIONS | null {
		return this._textDecoration;
	}

	public setTextDecoration(textDecoration: TEXT_DECORATIONS | null) {
		this._textDecoration = textDecoration;
	}
}
