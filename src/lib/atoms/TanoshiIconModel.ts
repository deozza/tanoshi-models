import { THEMES } from '$lib/enums/GlobalEnums.js';
import type { ICON_THEMES } from '$lib/enums/IconEnums.js';

export default class TanoshiIconModel {
	private _content: string = '';
	private _height: number = 12;
	private _width: number = 12;
	private _theme: THEMES | ICON_THEMES = THEMES.White;

	constructor(content: string) {
		this._content = content;
	}

	get content(): string {
		return this._content;
	}

	public setContent(content: string): TanoshiIconModel {
		this._content = content;

		return this;
	}

	get height(): number {
		return this._height;
	}

	public setHeight(height: number): TanoshiIconModel {
		this._height = height;

		return this;
	}

	get width(): number {
		return this._width;
	}

	public setWidth(width: number): TanoshiIconModel {
		this._width = width;

		return this;
	}

	get theme(): THEMES | ICON_THEMES {
		return this._theme;
	}

	public setTheme(theme: THEMES | ICON_THEMES): TanoshiIconModel {
		this._theme = theme;

		return this;
	}
}
