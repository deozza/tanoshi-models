import type { HOVER } from '$lib/types/cursor.types.js';
import type { LOADING_METHODS } from '$lib/types/image.types.js';

export default class TanoshiImageModel {
	private _content: string;
	private _alt: string;
	private _width: number = 0;
	private _desktopWidth: string | null = null;
	private _mobileWidth: string | null = null;
	private _height: number = 0;
	private _desktopHeight: string | null = null;
	private _mobileHeight: string | null = null;
	private _loadingMethod: LOADING_METHODS = 'lazy';
	private _cursor: HOVER = 'default';
	private _hoverEffectClasses: string | null = null;
	private _filterClasses: string | null = null;

	constructor(content: string, alt: string) {
		this._content = content;
		this._alt = alt;
	}

	get content(): string {
		return this._content;
	}

	set content(content: string) {
		this._content = content;
	}

	get alt(): string {
		return this._alt;
	}

	set alt(alt: string) {
		this._alt = alt;
	}

	get width(): number {
		return this._width;
	}

	set width(width: number) {
		this._width = width;
	}

	get desktopWidth(): string | null {
		return this._desktopWidth;
	}

	set desktopWidth(desktopWidth: string | null) {
		this._desktopWidth = desktopWidth;
	}

	get mobileWidth(): string | null {
		return this._mobileWidth;
	}

	set mobileWidth(mobileWidth: string | null) {
		this._mobileWidth = mobileWidth;
	}

	get height(): number {
		return this._height;
	}

	set height(height: number) {
		this._height = height;
	}

	get desktopHeight(): string | null {
		return this._desktopHeight;
	}

	set desktopHeight(desktopHeight: string | null) {
		this._desktopHeight = desktopHeight;
	}

	get mobileHeight(): string | null {
		return this._mobileHeight;
	}

	set mobileHeight(mobileHeight: string | null) {
		this._mobileHeight = mobileHeight;
	}

	get loadingMethod(): LOADING_METHODS {
		return this._loadingMethod;
	}

	set loadingMethod(loadingMethod: LOADING_METHODS) {
		this._loadingMethod = loadingMethod;
	}

	get cursor(): HOVER {
		return this._cursor;
	}

	set cursor(cursor: HOVER) {
		this._cursor = cursor;
	}

	get hoverEffectClasses(): string | null {
		return this._hoverEffectClasses;
	}

	set hoverEffectClasses(hoverEffectClasses: string | null) {
		this._hoverEffectClasses = hoverEffectClasses;
	}

	get filterClasses(): string | null {
		return this._filterClasses;
	}

	set filterClasses(filterClasses: string | null) {
		this._filterClasses = filterClasses;
	}
}
