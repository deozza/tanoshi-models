import type { BACKGROUND_THEMES, BORDER_THEMES, TEXT_THEMES } from '$lib/enums/ContainerEnums.js';
import { THEMES } from '$lib/enums/GlobalEnums.js';

export default class TanoshiPillModel {
	private _backgroundTheme: THEMES | BACKGROUND_THEMES = THEMES.Primary;
	private _borderTheme: THEMES | BORDER_THEMES = THEMES.Primary;
	private _textTheme: THEMES | TEXT_THEMES = THEMES.White;

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

	get textTheme(): THEMES | TEXT_THEMES {
		return this._textTheme;
	}

	set textTheme(textTheme: THEMES | TEXT_THEMES) {
		this._textTheme = textTheme;
	}
}
