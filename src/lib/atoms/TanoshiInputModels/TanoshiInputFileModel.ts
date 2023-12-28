import TanoshiInputModel from './TanoshiInputModel.js';

export default class TanoshiInputFileModel extends TanoshiInputModel {
	private _value: FileList | null = null;
	private _multiple: boolean = false;
	private _accept: string | null = null;

	get value(): FileList | null {
		return this._value;
	}

	public setValue(value: FileList | null) {
		this._value = value;
	}

	get multiple(): boolean {
		return this._multiple;
	}

	public setMultiple(multiple: boolean) {
		this._multiple = multiple;
	}

	get accept(): string | null {
		return this._accept;
	}

	public setAccept(accept: string | null) {
		this._accept = accept;
	}
}
