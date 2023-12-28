import type { HTMLInputTypeAttribute } from 'svelte/elements';
import TanoshiInputModel from './TanoshiInputModel.js';

export default class TanoshiInputTextModel extends TanoshiInputModel {
	private _type: HTMLInputTypeAttribute = 'text';
	private _value: string | null = null;
	private _minLength: number | null = null;
	private _maxLength: number | null = null;

	get type(): HTMLInputTypeAttribute {
		return this._type;
	}

	public setType(type: HTMLInputTypeAttribute): TanoshiInputTextModel {
		this._type = type;

		return this;
	}

	get value(): string | null {
		return this._value;
	}

	public setValue(value: string | null): TanoshiInputTextModel {
		this._value = value;

		return this;
	}

	get minLength(): number | null {
		return this._minLength;
	}

	public setMinLength(minLength: number | null): TanoshiInputTextModel {
		this._minLength = minLength;

		return this;
	}

	get maxLength(): number | null {
		return this._maxLength;
	}

	public setMaxLength(maxLength: number | null): TanoshiInputTextModel {
		this._maxLength = maxLength;

		return this;
	}
}
