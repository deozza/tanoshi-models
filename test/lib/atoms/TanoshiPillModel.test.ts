import { describe } from 'node:test';
import { expect, test } from 'vitest';
import TanoshiPillModel from '../../../src/lib/atoms/TanoshiPillModel';
import { THEMES } from '../../../src/lib/enums/GlobalEnums';
import {
	PILL_BACKGROUND_THEMES,
	PILL_BORDER_THEMES,
	PILL_TEXT_THEMES
} from '../../../src/lib/enums/PillEnums';

describe('TanoshiPillModel', () => {
	test('check setter return value', () => {
		const tanoshiPillModel: TanoshiPillModel = new TanoshiPillModel();

		expect(tanoshiPillModel.setTextTheme(THEMES.Primary)).instanceOf(TanoshiPillModel);
		expect(tanoshiPillModel.setBackgroundTheme(THEMES.Primary)).instanceOf(TanoshiPillModel);
		expect(tanoshiPillModel.setBorderTheme(THEMES.Primary)).instanceOf(TanoshiPillModel);
	});

	test('default classes', () => {
		const tanoshiPillModel: TanoshiPillModel = new TanoshiPillModel();

		expect(tanoshiPillModel.getClasses()).toEqual(
			'tanoshi-pill text-theme-white bg-theme-primary bd-theme-transparent'
		);
	});

	test('set text theme', () => {
		const tanoshiPillModel: TanoshiPillModel = new TanoshiPillModel();

		tanoshiPillModel.setTextTheme(THEMES.Primary);

		expect(tanoshiPillModel.getClasses()).toEqual(
			'tanoshi-pill text-theme-primary bg-theme-primary bd-theme-transparent'
		);
	});

	test('set custom text theme', () => {
		const tanoshiPillModel: TanoshiPillModel = new TanoshiPillModel();

		tanoshiPillModel.setTextTheme(PILL_TEXT_THEMES.Primary);

		expect(tanoshiPillModel.getClasses()).toEqual(
			'tanoshi-pill text-theme-pill-text-primary bg-theme-primary bd-theme-transparent'
		);
	});

	test('set background theme', () => {
		const tanoshiPillModel: TanoshiPillModel = new TanoshiPillModel();

		tanoshiPillModel.setBackgroundTheme(THEMES.Primary);

		expect(tanoshiPillModel.getClasses()).toEqual(
			'tanoshi-pill text-theme-white bg-theme-primary bd-theme-transparent'
		);
	});

	test('set custom background theme', () => {
		const tanoshiPillModel: TanoshiPillModel = new TanoshiPillModel();

		tanoshiPillModel.setBackgroundTheme(PILL_BACKGROUND_THEMES.Primary);

		expect(tanoshiPillModel.getClasses()).toEqual(
			'tanoshi-pill text-theme-white bg-theme-pill-bg-primary bd-theme-transparent'
		);
	});

	test('set border theme', () => {
		const tanoshiPillModel: TanoshiPillModel = new TanoshiPillModel();

		tanoshiPillModel.setBorderTheme(THEMES.Primary);

		expect(tanoshiPillModel.getClasses()).toEqual(
			'tanoshi-pill text-theme-white bg-theme-primary bd-theme-primary'
		);
	});

	test('set custom border theme', () => {
		const tanoshiPillModel: TanoshiPillModel = new TanoshiPillModel();

		tanoshiPillModel.setBorderTheme(PILL_BORDER_THEMES.Primary);

		expect(tanoshiPillModel.getClasses()).toEqual(
			'tanoshi-pill text-theme-white bg-theme-primary bd-theme-pill-bd-primary'
		);
	});
});
