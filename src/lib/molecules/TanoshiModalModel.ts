import type TanoshiContainerModel from './TanoshiContainerModel.js';

export default class TanoshiModalModel {
	private _container: TanoshiContainerModel;
	private _hidden: boolean = true;

	constructor(container: TanoshiContainerModel) {
		this._container = container;
	}

	get container(): TanoshiContainerModel {
		return this._container;
	}

	public setContainer(container: TanoshiContainerModel): TanoshiModalModel {
		this._container = container;

		return this;
	}

	get hidden(): boolean {
		return this._hidden;
	}

	public setHidden(hidden: boolean): TanoshiModalModel {
		this._hidden = hidden;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-modal';

		if (this._hidden) {
			classes += ' hidden';
		}

		return classes;
	}
}
