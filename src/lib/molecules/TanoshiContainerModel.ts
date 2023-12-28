import {
	type DIRECTIONS,
	type BACKGROUND_THEMES,
	type BORDER_THEMES,
	WRAPS,
	JUSTIFY_CONTENTS,
	ALIGN_ITEMS,
	ALIGN_CONTENTS
} from '$lib/enums/ContainerEnums.js';
import { THEMES } from '$lib/enums/GlobalEnums.js';

export default class TanoshiContainerModel {
	private _backgroundTheme: THEMES | BACKGROUND_THEMES = THEMES.Transparent;
	private _borderTheme: THEMES | BORDER_THEMES = THEMES.Transparent;
	private _desktopDirection: DIRECTIONS;
	private _mobileDirection: DIRECTIONS;
	private _wrap: WRAPS = WRAPS.NoWrap;
	private _justifyContent: JUSTIFY_CONTENTS = JUSTIFY_CONTENTS.Start;
	private _alignItems: ALIGN_ITEMS = ALIGN_ITEMS.Start;
	private _alignContent: ALIGN_CONTENTS = ALIGN_CONTENTS.Start;

	constructor(desktopDirection: DIRECTIONS, mobileDirection: DIRECTIONS) {
		this._desktopDirection = desktopDirection;
		this._mobileDirection = mobileDirection;
	}

	get desktopDirection(): DIRECTIONS {
		return this._desktopDirection;
	}

	public setDesktopDirection(desktopDirection: DIRECTIONS) {
		this._desktopDirection = desktopDirection;
	}

	get mobileDirection(): DIRECTIONS {
		return this._mobileDirection;
	}

	public setMobileDirection(mobileDirection: DIRECTIONS) {
		this._mobileDirection = mobileDirection;
	}

	get backgroundTheme(): THEMES | BACKGROUND_THEMES {
		return this._backgroundTheme;
	}

	public setBackgroundTheme(backgroundTheme: THEMES | BACKGROUND_THEMES) {
		this._backgroundTheme = backgroundTheme;
	}

	get borderTheme(): THEMES | BORDER_THEMES {
		return this._borderTheme;
	}

	public setBorderTheme(borderTheme: THEMES | BORDER_THEMES) {
		this._borderTheme = borderTheme;
	}

	get wrap(): WRAPS {
		return this._wrap;
	}

	public setWrap(wrap: WRAPS) {
		this._wrap = wrap;
	}

	get justifyContent(): JUSTIFY_CONTENTS {
		return this._justifyContent;
	}

	public setJustifyContent(justifyContent: JUSTIFY_CONTENTS) {
		this._justifyContent = justifyContent;
	}

	get alignItems(): ALIGN_ITEMS {
		return this._alignItems;
	}

	public setAlignItems(alignItems: ALIGN_ITEMS) {
		this._alignItems = alignItems;
	}

	get alignContent(): ALIGN_CONTENTS {
		return this._alignContent;
	}

	public setAlignContent(alignContent: ALIGN_CONTENTS) {
		if (this._wrap === WRAPS.NoWrap) {
			throw new Error('Cannot public setalignContent when wrap is public setto NoWrap');
		}

		this._alignContent = alignContent;
	}
}
