import TanoshiInputModel from './TanoshiInputModel.js';

export default class TanoshiInputNumberModel extends TanoshiInputModel {
	private _value: number | null = null;
	private _min: number | null = null;
	private _max: number | null = null;

	get value(): number | null {
		return this._value;
	}

	set value(value: number | null) {
		this._value = value;
	}

	get min(): number | null {
		return this._min;
	}

	set min(min: number | null) {
		this._min = min;
	}

	get max(): number | null {
		return this._max;
	}

	set max(max: number | null) {
		this._max = max;
	}
}
