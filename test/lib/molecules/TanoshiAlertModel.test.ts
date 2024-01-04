import { describe } from 'node:test';
import { expect, test } from 'vitest';
import TanoshiAlertModel from '../../../src/lib/molecules/TanoshiAlertModel';
import TanoshiContainerModel from '../../../src/lib/molecules/TanoshiContainerModel';
import { DIRECTIONS } from '../../../src/lib/enums/ContainerEnums';

describe('TanoshiAlertModel', () => {
	test('default classes', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);
		const tanoshiAlertModel: TanoshiAlertModel = new TanoshiAlertModel(tanoshiContainerModel);

		expect(tanoshiAlertModel.getClasses()).toEqual('tanoshi-alert hidden');
	});

	test('should remove hidden', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);
		const tanoshiAlertModel: TanoshiAlertModel = new TanoshiAlertModel(tanoshiContainerModel);
		tanoshiAlertModel.setHidden(false);

		expect(tanoshiAlertModel.getClasses()).toEqual('tanoshi-alert');
	});
});
