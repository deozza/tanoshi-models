import { THEMES } from '$lib/enums/GlobalEnums.js';
import {
	FONT_SIZES,
	TEXT_ALIGNMENT,
	FONT_WEIGHTS,
	type TEXT_DECORATIONS,
	type TEXT_TRANSFORMS
} from '$lib/enums/TextEnums.js';
import type { LINK_HOVER_THEMES, LINK_THEMES } from '$lib/enums/LinkEnums.js';
import type { TARGET } from '$lib/types/link.types.js';
import type ComponentModelInterface from '$lib/interfaces/ComponentModelInterface.js';

export default class TanoshiLinkModel implements ComponentModelInterface {
	private _href: string;
	private _label: string = '';
	private _isDisabled: boolean = false;
	private _target: TARGET = '_self';
	private _textTheme: THEMES | LINK_THEMES = THEMES.Primary;
	private _hoverTextTheme: THEMES | LINK_HOVER_THEMES = THEMES.Primary;
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

	public setHref(href: string): TanoshiLinkModel {
		this._href = href;

		return this;
	}

	get label(): string {
		return this._label;
	}

	public setLabel(label: string): TanoshiLinkModel {
		this._label = label;

		return this;
	}

	get isDisabled(): boolean {
		return this._isDisabled;
	}

	public setIsDisabled(isDisabled: boolean): TanoshiLinkModel {
		this._isDisabled = isDisabled;

		return this;
	}

	get target(): TARGET {
		return this._target;
	}

	public setTarget(target: TARGET): TanoshiLinkModel {
		this._target = target;

		return this;
	}

	get textTheme(): THEMES | LINK_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | LINK_THEMES): TanoshiLinkModel {
		this._textTheme = textTheme;

		return this;
	}

	get hoverTextTheme(): THEMES | LINK_HOVER_THEMES {
		return this._hoverTextTheme;
	}

	public setHoverTextTheme(hoverTextTheme: THEMES | LINK_HOVER_THEMES): TanoshiLinkModel {
		this._hoverTextTheme = hoverTextTheme;

		return this;
	}

	get fontSize(): FONT_SIZES {
		return this._fontSize;
	}

	public setFontSize(fontSize: FONT_SIZES): TanoshiLinkModel {
		this._fontSize = fontSize;

		return this;
	}

	get fontWeight(): FONT_WEIGHTS {
		return this._fontWeight;
	}

	public setFontWeight(fontWeight: FONT_WEIGHTS): TanoshiLinkModel {
		this._fontWeight = fontWeight;

		return this;
	}

	get textAlignment(): TEXT_ALIGNMENT {
		return this._textAlignment;
	}

	public setTextAlignment(textAlignment: TEXT_ALIGNMENT): TanoshiLinkModel {
		this._textAlignment = textAlignment;

		return this;
	}

	get textTransform(): TEXT_TRANSFORMS | null {
		return this._textTransform;
	}

	public setTextTransform(textTransform: TEXT_TRANSFORMS | null): TanoshiLinkModel {
		this._textTransform = textTransform;

		return this;
	}

	get textDecoration(): TEXT_DECORATIONS | null {
		return this._textDecoration;
	}

	public setTextDecoration(textDecoration: TEXT_DECORATIONS | null): TanoshiLinkModel {
		this._textDecoration = textDecoration;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-link';

		classes += ` text-theme-${this._textTheme}`;
		classes += ` hover:text-theme-${this._hoverTextTheme}`;
		classes += ` font-size-${this._fontSize}`;
		classes += ` font-weight-${this._fontWeight}`;
		classes += ` text-align-${this._textAlignment}`;

		if (this._textTransform) {
			classes += ` text-transform-${this._textTransform}`;
		}

		if (this._textDecoration) {
			classes += ` text-decoration-${this._textDecoration}`;
		}

		return classes;
	}
}
