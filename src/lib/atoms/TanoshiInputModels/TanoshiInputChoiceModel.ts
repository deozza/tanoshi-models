import type { HTMLInputTypeAttribute } from "svelte/elements";
import TanoshiInputModel from "./TanoshiInputModel.js";

export default class TanoshiInputChoiceModel extends TanoshiInputModel {
    private _type: HTMLInputTypeAttribute = 'radio';
    private _value: string;
	private _checked: boolean = false;

    constructor(id: string, name: string, value: string) {
        super(id, name);
		this._value = value;
	}

    get type(): HTMLInputTypeAttribute {
        return this._type;
    }

    set type(type: HTMLInputTypeAttribute) {
        this._type = type;
    }

    get value(): string{
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(checked: boolean) {
        this._checked = checked;
    }
}