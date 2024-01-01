import { describe } from 'node:test';
import { expect, test } from 'vitest';
import TanoshiContainerModel from '../../../src/lib/molecules/TanoshiContainerModel';
import { THEMES } from '../../../src/lib/enums/GlobalEnums';
import {
	ALIGN_CONTENTS,
	ALIGN_ITEMS,
	CONTAINER_BACKGROUND_THEMES,
	DIRECTIONS,
	JUSTIFY_CONTENTS,
	WRAPS
} from '../../../src/lib/enums/ContainerEnums';

describe('TanoshiContainerModel', () => {
	test('default classes', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-transparent bd-theme-transparent desktop:direction-row mobile:direction-row no-wrap justify-content-start align-items-start align-content-start'
		);
	});

	test('set align-content with no-wrap should throw', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		expect(() => {
			tanoshiContainerModel.setAlignContent(ALIGN_CONTENTS.Center);
		}).toThrow();
	});

	test('set background theme', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setBackgroundTheme(THEMES.Primary);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-primary bd-theme-transparent desktop:direction-row mobile:direction-row no-wrap justify-content-start align-items-start align-content-start'
		);
	});

	test('set custom background theme', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setBackgroundTheme(CONTAINER_BACKGROUND_THEMES.Primary);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-container-bg-primary bd-theme-transparent desktop:direction-row mobile:direction-row no-wrap justify-content-start align-items-start align-content-start'
		);
	});

	test('set border theme', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setBorderTheme(THEMES.Primary);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-transparent bd-theme-primary desktop:direction-row mobile:direction-row no-wrap justify-content-start align-items-start align-content-start'
		);
	});

	test('set custom border theme', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setBorderTheme(CONTAINER_BACKGROUND_THEMES.Primary);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-transparent bd-theme-container-bg-primary desktop:direction-row mobile:direction-row no-wrap justify-content-start align-items-start align-content-start'
		);
	});

	test('set desktop direction', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setDesktopDirection(DIRECTIONS.Column);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-transparent bd-theme-transparent desktop:direction-column mobile:direction-row no-wrap justify-content-start align-items-start align-content-start'
		);
	});

	test('set mobile direction', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setMobileDirection(DIRECTIONS.Column);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-transparent bd-theme-transparent desktop:direction-row mobile:direction-column no-wrap justify-content-start align-items-start align-content-start'
		);
	});

	test('set wrap', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setWrap(WRAPS.WrapReverse);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-transparent bd-theme-transparent desktop:direction-row mobile:direction-row wrap-reverse justify-content-start align-items-start align-content-start'
		);
	});

	test('set justify-content', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setJustifyContent(JUSTIFY_CONTENTS.Center);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-transparent bd-theme-transparent desktop:direction-row mobile:direction-row no-wrap justify-content-center align-items-start align-content-start'
		);
	});

	test('set align-items', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setAlignItems(ALIGN_ITEMS.Center);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-transparent bd-theme-transparent desktop:direction-row mobile:direction-row no-wrap justify-content-start align-items-center align-content-start'
		);
	});

	test('set align-content', () => {
		const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
			DIRECTIONS.Row,
			DIRECTIONS.Row
		);

		tanoshiContainerModel.setWrap(WRAPS.Wrap).setAlignContent(ALIGN_CONTENTS.Center);

		expect(tanoshiContainerModel.getClasses()).toEqual(
			'tanoshi-container bg-theme-transparent bd-theme-transparent desktop:direction-row mobile:direction-row wrap justify-content-start align-items-start align-content-center'
		);
	});
});
