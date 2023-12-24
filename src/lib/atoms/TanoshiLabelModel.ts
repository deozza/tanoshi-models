import { THEMES } from "$lib/enums/GlobalEnums.js";
import { FONT_SIZES, FONT_WEIGHTS, LABEL_THEMES, TEXT_ALIGNMENT, TEXT_DECORATIONS, TEXT_TRANSFORMS } from "$lib/enums/TextEnums.js";

export default class TanoshiLabelModel {
    private _content: string = '';
    private _forAttr: string;
    private _textTheme: THEMES|LABEL_THEMES = THEMES.Primary;
    private _fontSize: FONT_SIZES = FONT_SIZES.Md;
    private _fontWeight: FONT_WEIGHTS = FONT_WEIGHTS.Regular;
    private _textAlignment: TEXT_ALIGNMENT = TEXT_ALIGNMENT.Left;
    private _textTransform: TEXT_TRANSFORMS|null = null;
    private _textDecoration: TEXT_DECORATIONS|null = null;
    private _isVisibile: boolean = true;

    constructor(forAttr: string) {
        this._forAttr = forAttr;
    }

    get content(): string {
        return this._content;
    }

    set content(content: string) {
        this._content = content;
    }

    get forAttr(): string {
        return this._forAttr;
    }

    set forAttr(forAttr: string) {
        this._forAttr = forAttr;
    }

    get textTheme(): THEMES|LABEL_THEMES {
        return this._textTheme;
    }

    set textTheme(textTheme: THEMES|LABEL_THEMES) {
        this._textTheme = textTheme;
    }

    get fontSize(): FONT_SIZES {
        return this._fontSize;
    }

    set fontSize(fontSize: FONT_SIZES) {
        this._fontSize = fontSize;
    }

    get fontWeight(): FONT_WEIGHTS {
        return this._fontWeight;
    }

    set fontWeight(fontWeight: FONT_WEIGHTS) {
        this._fontWeight = fontWeight;
    }

    get textAlignment(): TEXT_ALIGNMENT {
        return this._textAlignment;
    }

    set textAlignment(textAlignment: TEXT_ALIGNMENT) {
        this._textAlignment = textAlignment;
    }

    get textTransform(): TEXT_TRANSFORMS|null {
        return this._textTransform;
    }

    set textTransform(textTransform: TEXT_TRANSFORMS|null) {
        this._textTransform = textTransform;
    }

    get textDecoration(): TEXT_DECORATIONS|null {
        return this._textDecoration;
    }

    set textDecoration(textDecoration: TEXT_DECORATIONS|null) {
        this._textDecoration = textDecoration;
    }

    get isVisibile(): boolean {
        return this._isVisibile;
    }

    set isVisibile(isVisibile: boolean) {
        this._isVisibile = isVisibile;
    }
}