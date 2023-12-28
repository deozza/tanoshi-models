import type { HTMLInputTypeAttribute } from 'svelte/elements';
import TanoshiInputModel from './TanoshiInputModel.js';

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

	public setType(type: HTMLInputTypeAttribute) {
		this._type = type;
	}

	get value(): string {
		return this._value;
	}

	public setValue(value: string) {
		this._value = value;
	}

	get checked(): boolean {
		return this._checked;
	}

	public setChecked(checked: boolean) {
		this._checked = checked;
	}
}
