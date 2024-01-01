import {
	type DIRECTIONS,
	type CONTAINER_BACKGROUND_THEMES,
	type CONTAINER_BORDER_THEMES,
	WRAPS,
	JUSTIFY_CONTENTS,
	ALIGN_ITEMS,
	ALIGN_CONTENTS
} from '$lib/enums/ContainerEnums.js';
import { THEMES } from '$lib/enums/GlobalEnums.js';
import type ComponentModelInterface from '$lib/interfaces/ComponentModelInterface.js';

export default class TanoshiContainerModel implements ComponentModelInterface {
	private _backgroundTheme: THEMES | CONTAINER_BACKGROUND_THEMES = THEMES.Transparent;
	private _borderTheme: THEMES | CONTAINER_BORDER_THEMES = THEMES.Transparent;
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

	public setDesktopDirection(desktopDirection: DIRECTIONS): TanoshiContainerModel {
		this._desktopDirection = desktopDirection;

		return this;
	}

	get mobileDirection(): DIRECTIONS {
		return this._mobileDirection;
	}

	public setMobileDirection(mobileDirection: DIRECTIONS): TanoshiContainerModel {
		this._mobileDirection = mobileDirection;

		return this;
	}

	get backgroundTheme(): THEMES | CONTAINER_BACKGROUND_THEMES {
		return this._backgroundTheme;
	}

	public setBackgroundTheme(
		backgroundTheme: THEMES | CONTAINER_BACKGROUND_THEMES
	): TanoshiContainerModel {
		this._backgroundTheme = backgroundTheme;

		return this;
	}

	get borderTheme(): THEMES | CONTAINER_BORDER_THEMES {
		return this._borderTheme;
	}

	public setBorderTheme(borderTheme: THEMES | CONTAINER_BORDER_THEMES): TanoshiContainerModel {
		this._borderTheme = borderTheme;

		return this;
	}

	get wrap(): WRAPS {
		return this._wrap;
	}

	public setWrap(wrap: WRAPS): TanoshiContainerModel {
		this._wrap = wrap;

		return this;
	}

	get justifyContent(): JUSTIFY_CONTENTS {
		return this._justifyContent;
	}

	public setJustifyContent(justifyContent: JUSTIFY_CONTENTS): TanoshiContainerModel {
		this._justifyContent = justifyContent;

		return this;
	}

	get alignItems(): ALIGN_ITEMS {
		return this._alignItems;
	}

	public setAlignItems(alignItems: ALIGN_ITEMS): TanoshiContainerModel {
		this._alignItems = alignItems;

		return this;
	}

	get alignContent(): ALIGN_CONTENTS {
		return this._alignContent;
	}

	public setAlignContent(alignContent: ALIGN_CONTENTS): TanoshiContainerModel {
		if (this._wrap === WRAPS.NoWrap) {
			throw new Error('Cannot public setalignContent when wrap is public setto NoWrap');
		}

		this._alignContent = alignContent;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-container';

		classes += ` bg-theme-${this._backgroundTheme}`;
		classes += ` bd-theme-${this._borderTheme}`;
		classes += ` desktop:direction-${this._desktopDirection}`;
		classes += ` mobile:direction-${this._mobileDirection}`;
		classes += ` ${this._wrap}`;
		classes += ` justify-content-${this._justifyContent}`;
		classes += ` align-items-${this._alignItems}`;
		classes += ` align-content-${this._alignContent}`;

		return classes;
	}
}
