import type ComponentModelInterface from '$lib/interfaces/ComponentModelInterface.js';
import type { HOVER } from '$lib/types/cursor.types.js';
import type { LOADING_METHODS } from '$lib/types/image.types.js';

export default class TanoshiImageModel implements ComponentModelInterface {
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

		if(src === '') {
			throw new Error('Image src cannot be empty');
		}

		if(alt === '') {
			throw new Error('Image alt cannot be empty');
		}

		this._src = src;
		this._alt = alt;
	}

	get src(): string {
		return this._src;
	}

	public setSrc(src: string): TanoshiImageModel {
		if(src === '') {
			throw new Error('Image src cannot be empty');
		}
		
		this._src = src;

		return this;
	}

	get alt(): string {
		return this._alt;
	}

	public setAlt(alt: string): TanoshiImageModel {
		if(alt === '') {
			throw new Error('Image alt cannot be empty');
		}
		
		this._alt = alt;

		return this;
	}

	get width(): number {
		return this._width;
	}

	public setWidth(width: number): TanoshiImageModel {
		this._width = width;

		return this;
	}

	get desktopWidth(): string | null {

		if(this._desktopWidth === null) {
			return `${this._width}px`;
		}

		return this._desktopWidth;
	}

	public setDesktopWidth(desktopWidth: string | null): TanoshiImageModel {
		this._desktopWidth = desktopWidth;

		return this;
	}

	get mobileWidth(): string | null {
		if(this._mobileWidth === null) {
			return `${this._width}px`;
		}

		return this._mobileWidth;
	}

	public setMobileWidth(mobileWidth: string | null): TanoshiImageModel {
		this._mobileWidth = mobileWidth;

		return this;
	}

	get height(): number {
		return this._height;
	}

	public setHeight(height: number): TanoshiImageModel {
		this._height = height;

		return this;
	}

	get desktopHeight(): string | null {
		if(this._desktopHeight === null) {
			return `${this._height}px`;
		}

		return this._desktopHeight;
	}

	public setDesktopHeight(desktopHeight: string | null): TanoshiImageModel {
		this._desktopHeight = desktopHeight;

		return this;
	}

	get mobileHeight(): string | null {
		if(this._mobileHeight === null) {
			return `${this._height}px`;
		}

		return this._mobileHeight;
	}

	public setMobileHeight(mobileHeight: string | null): TanoshiImageModel {
		this._mobileHeight = mobileHeight;

		return this;
	}

	get loadingMethod(): LOADING_METHODS {
		return this._loadingMethod;
	}

	public setLoadingMethod(loadingMethod: LOADING_METHODS): TanoshiImageModel {
		this._loadingMethod = loadingMethod;

		return this;
	}

	get cursor(): HOVER {
		return this._cursor;
	}

	public setCursor(cursor: HOVER): TanoshiImageModel {
		this._cursor = cursor;

		return this;
	}

	get hoverEffectClasses(): string | null {
		return this._hoverEffectClasses;
	}

	public setHoverEffectClasses(hoverEffectClasses: string | null): TanoshiImageModel {
		this._hoverEffectClasses = hoverEffectClasses;

		return this;
	}

	get filterClasses(): string | null {
		return this._filterClasses;
	}

	public setFilterClasses(filterClasses: string | null): TanoshiImageModel {
		this._filterClasses = filterClasses;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-image';

		classes += ` cursor-${this._cursor}`;

		if(this._hoverEffectClasses !== null) {
			classes += ` hover:${this._hoverEffectClasses}`;
		}

		if(this._filterClasses !== null) {
			classes += ` filter-${this._filterClasses}`;
		}
		

		return classes;
	}
}
