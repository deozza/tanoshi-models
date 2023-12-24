import type { HTMLInputTypeAttribute } from "svelte/elements";
import TanoshiInputModel from "./TanoshiInputModel.js";

export default class TanoshiInputTextareaModel extends TanoshiInputModel {
    private _value: string|null = null;
    private _minLength: number | null = null;
	private _maxLength: number | null = null;
	private _rows: number = 3;
	private _cols: number = 50;


    get value(): string|null{
        return this._value;
    }

    set value(value: string|null) {
        this._value = value;
    }

    get minLength(): number|null {
        return this._minLength;
    }

    set minLength(minLength: number|null) {
        this._minLength = minLength;
    }

    get maxLength(): number|null {
        return this._maxLength;
    }

    set maxLength(maxLength: number|null) {
        this._maxLength = maxLength;
    }

    get rows(): number {
        return this._rows;
    }

    set rows(rows: number) {
        this._rows = rows;
    }

    get cols(): number {
        return this._cols;
    }

    set cols(cols: number) {
        this._cols = cols;
    }
}