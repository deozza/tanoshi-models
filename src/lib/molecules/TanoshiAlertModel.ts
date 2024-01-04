import type TanoshiContainerModel from './TanoshiContainerModel.js';

export default class TanoshiAlertModel {
	private _container: TanoshiContainerModel;
	private _hidden: boolean = true;

	constructor(container: TanoshiContainerModel) {
		this._container = container;
	}

	get container(): TanoshiContainerModel {
		return this._container;
	}

	public setContainer(container: TanoshiContainerModel): TanoshiAlertModel {
		this._container = container;

		return this;
	}

	get hidden(): boolean {
		return this._hidden;
	}

	public setHidden(hidden: boolean): TanoshiAlertModel {
		this._hidden = hidden;

		return this;
	}

	public getClasses(): string {
		let classes: string = 'tanoshi-alert';

		if (this._hidden) {
			classes += ' hidden';
		}

		return classes;
	}
}
