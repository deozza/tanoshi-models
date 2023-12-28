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

	public setType(type: HTMLInputTypeAttribute): TanoshiInputChoiceModel {
		this._type = type;

		return this;
	}

	get value(): string {
		return this._value;
	}

	public setValue(value: string): TanoshiInputChoiceModel {
		this._value = value;

		return this;
	}

	get checked(): boolean {
		return this._checked;
	}

	public setChecked(checked: boolean): TanoshiInputChoiceModel {
		this._checked = checked;

		return this;
	}
}
