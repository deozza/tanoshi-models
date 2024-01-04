import TanoshiInputModel from "./TanoshiInputModel.js";

export default class TanoshiInputOptionModel extends TanoshiInputModel{

    private _value: string | number | null = null;
    private _selected: boolean = false;
    private _disabled: boolean = false;

    get value(): string | number | null {
        return this._value;
    }

    public setValue(value: string | number | null): TanoshiInputOptionModel {
        this._value = value;

        return this;
    }

    get selected(): boolean {
        return this._selected;
    }

    public setSelected(selected: boolean): TanoshiInputOptionModel {
        this._selected = selected;

        return this;
    }

    get disabled(): boolean {
        return this._disabled;
    }

    public setDisabled(disabled: boolean): TanoshiInputOptionModel {
        this._disabled = disabled;

        return this;
    }
}