import { THEMES } from '$lib/enums/GlobalEnums.js';
import type {
	PILL_BACKGROUND_THEMES,
	PILL_BORDER_THEMES,
	PILL_TEXT_THEMES
} from '$lib/enums/PillEnums.js';
import type ComponentModelInterface from '$lib/interfaces/ComponentModelInterface.js';

export default class TanoshiPillModel implements ComponentModelInterface {
	private _backgroundTheme: THEMES | PILL_BACKGROUND_THEMES = THEMES.Primary;
	private _borderTheme: THEMES | PILL_BORDER_THEMES = THEMES.Transparent;
	private _textTheme: THEMES | PILL_TEXT_THEMES = THEMES.White;

	get backgroundTheme(): THEMES | PILL_BACKGROUND_THEMES {
		return this._backgroundTheme;
	}

	public setBackgroundTheme(backgroundTheme: THEMES | PILL_BACKGROUND_THEMES): TanoshiPillModel {
		this._backgroundTheme = backgroundTheme;

		return this;
	}

	get borderTheme(): THEMES | PILL_BORDER_THEMES {
		return this._borderTheme;
	}

	public setBorderTheme(borderTheme: THEMES | PILL_BORDER_THEMES): TanoshiPillModel {
		this._borderTheme = borderTheme;

		return this;
	}

	get textTheme(): THEMES | PILL_TEXT_THEMES {
		return this._textTheme;
	}

	public setTextTheme(textTheme: THEMES | PILL_TEXT_THEMES): TanoshiPillModel {
		this._textTheme = textTheme;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-pill';

		classes += ` text-theme-${this._textTheme}`;
		classes += ` bg-theme-${this._backgroundTheme}`;
		classes += ` bd-theme-${this._borderTheme}`;

		return classes;
	}
}
