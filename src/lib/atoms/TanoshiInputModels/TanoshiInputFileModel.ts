import TanoshiInputModel from './TanoshiInputModel.js';

export default class TanoshiInputFileModel extends TanoshiInputModel {
	private _value: FileList | null = null;
	private _multiple: boolean = false;
	private _accept: string | null = null;

	get value(): FileList | null {
		return this._value;
	}

	public setValue(value: FileList | null): TanoshiInputFileModel {
		this._value = value;

		return this;
	}

	get multiple(): boolean {
		return this._multiple;
	}

	public setMultiple(multiple: boolean): TanoshiInputFileModel {
		this._multiple = multiple;

		return this;
	}

	get accept(): string | null {
		return this._accept;
	}

	public setAccept(accept: string | null): TanoshiInputFileModel {
		this._accept = accept;

		return this;
	}
}
