import TanoshiInputModel from './TanoshiInputModel.js';

export default class TanoshiInputNumberModel extends TanoshiInputModel {
	private _value: number | null = null;
	private _min: number | null = null;
	private _max: number | null = null;

	get value(): number | null {
		return this._value;
	}

	public setValue(value: number | null): TanoshiInputNumberModel {
		this._value = value;

		return this;
	}

	get min(): number | null {
		return this._min;
	}

	public setMin(min: number | null): TanoshiInputNumberModel {
		this._min = min;

		return this;
	}

	get max(): number | null {
		return this._max;
	}

	public setMax(max: number | null): TanoshiInputNumberModel {
		this._max = max;

		return this;
	}
}
