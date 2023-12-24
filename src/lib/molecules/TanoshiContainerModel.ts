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
	private _direction: DIRECTIONS;
	private _wrap: WRAPS = WRAPS.NoWrap;
	private _justifyContent: JUSTIFY_CONTENTS = JUSTIFY_CONTENTS.Start;
	private _alignItems: ALIGN_ITEMS = ALIGN_ITEMS.Start;
	private _alignContent: ALIGN_CONTENTS = ALIGN_CONTENTS.Start;

	constructor(direction: DIRECTIONS) {
		this._direction = direction;
	}

	get direction(): DIRECTIONS {
		return this._direction;
	}

	set direction(direction: DIRECTIONS) {
		this._direction = direction;
	}

	get backgroundTheme(): THEMES | BACKGROUND_THEMES {
		return this._backgroundTheme;
	}

	set backgroundTheme(backgroundTheme: THEMES | BACKGROUND_THEMES) {
		this._backgroundTheme = backgroundTheme;
	}

	get borderTheme(): THEMES | BORDER_THEMES {
		return this._borderTheme;
	}

	set borderTheme(borderTheme: THEMES | BORDER_THEMES) {
		this._borderTheme = borderTheme;
	}

	get wrap(): WRAPS {
		return this._wrap;
	}

	set wrap(wrap: WRAPS) {
		this._wrap = wrap;
	}

	get justifyContent(): JUSTIFY_CONTENTS {
		return this._justifyContent;
	}

	set justifyContent(justifyContent: JUSTIFY_CONTENTS) {
		this._justifyContent = justifyContent;
	}

	get alignItems(): ALIGN_ITEMS {
		return this._alignItems;
	}

	set alignItems(alignItems: ALIGN_ITEMS) {
		this._alignItems = alignItems;
	}

	get alignContent(): ALIGN_CONTENTS {
		return this._alignContent;
	}

	set alignContent(alignContent: ALIGN_CONTENTS) {
		if (this._wrap === WRAPS.NoWrap) {
			throw new Error('Cannot set alignContent when wrap is set to NoWrap');
		}

		this._alignContent = alignContent;
	}
}
