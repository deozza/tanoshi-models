import type { BACKGROUND_THEMES, BORDER_THEMES, HOVER_BACKGROUND_THEMES, HOVER_BORDER_THEMES, HOVER_TEXT_THEMES, TEXT_THEMES } from "$lib/enums/ContainerEnums.js";
import { THEMES } from "$lib/enums/GlobalEnums.js";
import type { BUTTON_TYPES } from "$lib/types/button.types.js";

export default class TanoshiButtonModel {
    private _label: string = '';
    private _type: BUTTON_TYPES = 'button';
    private _backgroundTheme: THEMES|BACKGROUND_THEMES = THEMES.Primary;
    private _borderTheme: THEMES|BORDER_THEMES = THEMES.Primary;
    private _textTheme: THEMES|TEXT_THEMES = THEMES.White;
    private _hoverBackgroundTheme: THEMES|HOVER_BACKGROUND_THEMES = THEMES.Primary;
    private _hoverBorderTheme: THEMES|HOVER_BORDER_THEMES = THEMES.Primary;
    private _hoverTextTheme: THEMES|HOVER_TEXT_THEMES = THEMES.White;
    private _isDisabled: boolean = false;
    private _customClasses: string|null = null;

    get label(): string {
        return this._label;
    }

    set label(label: string) {
        this._label = label;
    }

    get type(): BUTTON_TYPES {
        return this._type;
    }

    set type(type: BUTTON_TYPES) {
        this._type = type;
    }

    get backgroundTheme(): THEMES|BACKGROUND_THEMES {
        return this._backgroundTheme;
    }

    set backgroundTheme(backgroundTheme: THEMES|BACKGROUND_THEMES) {
        this._backgroundTheme = backgroundTheme;
    }

    get borderTheme(): THEMES|BORDER_THEMES {
        return this._borderTheme;
    }

    set borderTheme(borderTheme: THEMES|BORDER_THEMES) {
        this._borderTheme = borderTheme;
    }

    get textTheme(): THEMES|TEXT_THEMES {
        return this._textTheme;
    }

    set textTheme(textTheme: THEMES|TEXT_THEMES) {
        this._textTheme = textTheme;
    }

    get hoverBackgroundTheme(): THEMES|HOVER_BACKGROUND_THEMES {
        return this._hoverBackgroundTheme;
    }

    set hoverBackgroundTheme(hoverBackgroundTheme: THEMES|HOVER_BACKGROUND_THEMES) {
        this._hoverBackgroundTheme = hoverBackgroundTheme;
    }

    get hoverBorderTheme(): THEMES|HOVER_BORDER_THEMES {
        return this._hoverBorderTheme;
    }

    set hoverBorderTheme(hoverBorderTheme: THEMES|HOVER_BORDER_THEMES) {
        this._hoverBorderTheme = hoverBorderTheme;
    }

    get hoverTextTheme(): THEMES|HOVER_TEXT_THEMES {
        return this._hoverTextTheme;
    }

    set hoverTextTheme(hoverTextTheme: THEMES|HOVER_TEXT_THEMES) {
        this._hoverTextTheme = hoverTextTheme;
    }

    get isDisabled(): boolean {
        return this._isDisabled;
    }

    set isDisabled(isDisabled: boolean) {
        this._isDisabled = isDisabled;
    }

    get customClasses(): string|null {
        return this._customClasses;
    }

    set customClasses(customClasses: string|null) {
        this._customClasses = customClasses;
    }

}