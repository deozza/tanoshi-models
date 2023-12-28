import type { HOVER } from '$lib/types/cursor.types.js';
import type { LOADING_METHODS } from '$lib/types/image.types.js';

export default class TanoshiImageModel {
	private _src: string;
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

	constructor(src: string, alt: string) {
		this._src = src;
		this._alt = alt;
	}

	get src(): string {
		return this._src;
	}

	public setSrc(src: string) {
		this._src = src;
	}

	get alt(): string {
		return this._alt;
	}

	public setAlt(alt: string) {
		this._alt = alt;
	}

	get width(): number {
		return this._width;
	}

	public setWidth(width: number) {
		this._width = width;
	}

	get desktopWidth(): string | null {
		return this._desktopWidth;
	}

	public setDesktopWidth(desktopWidth: string | null) {
		this._desktopWidth = desktopWidth;
	}

	get mobileWidth(): string | null {
		return this._mobileWidth;
	}

	public setMobileWidth(mobileWidth: string | null) {
		this._mobileWidth = mobileWidth;
	}

	get height(): number {
		return this._height;
	}

	public setHeight(height: number) {
		this._height = height;
	}

	get desktopHeight(): string | null {
		return this._desktopHeight;
	}

	public setDesktopHeight(desktopHeight: string | null) {
		this._desktopHeight = desktopHeight;
	}

	get mobileHeight(): string | null {
		return this._mobileHeight;
	}

	public setMobileHeight(mobileHeight: string | null) {
		this._mobileHeight = mobileHeight;
	}

	get loadingMethod(): LOADING_METHODS {
		return this._loadingMethod;
	}

	public setLoadingMethod(loadingMethod: LOADING_METHODS) {
		this._loadingMethod = loadingMethod;
	}

	get cursor(): HOVER {
		return this._cursor;
	}

	public setCursor(cursor: HOVER) {
		this._cursor = cursor;
	}

	get hoverEffectClasses(): string | null {
		return this._hoverEffectClasses;
	}

	public setHoverEffectClasses(hoverEffectClasses: string | null) {
		this._hoverEffectClasses = hoverEffectClasses;
	}

	get filterClasses(): string | null {
		return this._filterClasses;
	}

	public setFilterClasses(filterClasses: string | null) {
		this._filterClasses = filterClasses;
	}
}
