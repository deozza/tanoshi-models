import { describe } from 'node:test';
import { expect, test } from 'vitest';
import TanoshiModalModel from '../../../src/lib/molecules/TanoshiModalModel';
import TanoshiContainerModel from '../../../src/lib/molecules/TanoshiContainerModel';
import { DIRECTIONS } from '../../../src/lib/enums/ContainerEnums';

describe('TanoshiModalModel', () => {
	test('check setter return value', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);
		const tanoshiModalModel: TanoshiModalModel = new TanoshiModalModel(tanoshiContainerModel);

		expect(tanoshiModalModel.setHidden(true)).instanceOf(TanoshiModalModel);
		expect(tanoshiModalModel.setContainer(tanoshiContainerModel)).instanceOf(TanoshiModalModel);
	});

	test('default classes', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);
		const tanoshiAlertModel: TanoshiModalModel = new TanoshiModalModel(tanoshiContainerModel);

		expect(tanoshiAlertModel.getClasses()).toEqual('tanoshi-modal hidden');
	});

	test('should remove hidden', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);
		const tanoshiAlertModel: TanoshiModalModel = new TanoshiModalModel(tanoshiContainerModel);
		tanoshiAlertModel.setHidden(false);

		expect(tanoshiAlertModel.getClasses()).toEqual('tanoshi-modal');
	});
});
