import { describe } from 'node:test';
import { expect, test } from 'vitest';

import TanoshiHeaderModel from '../../../src/lib/atoms/TanoshiHeaderModel';
import { THEMES } from '../../../src/lib/enums/GlobalEnums';
import { HEADER_TEXT_THEMES } from '../../../src/lib/enums/HeaderEnums';
import {
	FONT_SIZES,
	TEXT_ALIGNMENT,
	TEXT_DECORATIONS,
	TEXT_TRANSFORMS,
	FONT_WEIGHTS,
	HEADER_TAGS
} from '../../../src/lib/enums/TextEnums';

describe('TanoshiHeaderModel', () => {
	test('check setter return value', () => {
		const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel();

		expect(tanoshiHeaderModel.setTextTheme(THEMES.Primary)).instanceOf(TanoshiHeaderModel);
		expect(tanoshiHeaderModel.setFontSize(FONT_SIZES['3Xl'])).instanceOf(TanoshiHeaderModel);
		expect(tanoshiHeaderModel.setTextAlignment(TEXT_ALIGNMENT.Center)).instanceOf(
			TanoshiHeaderModel
		);
		expect(tanoshiHeaderModel.setFontWeight(FONT_WEIGHTS.Bold)).instanceOf(TanoshiHeaderModel);
		expect(tanoshiHeaderModel.setTextTransform(TEXT_TRANSFORMS.Capitalize)).instanceOf(
			TanoshiHeaderModel
		);
		expect(tanoshiHeaderModel.setTextDecoration(TEXT_DECORATIONS.Underline)).instanceOf(
			TanoshiHeaderModel
		);
		expect(tanoshiHeaderModel.setTag(HEADER_TAGS.H1)).instanceOf(TanoshiHeaderModel);
	});

	test('default classes', () => {
		const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel();

		expect(tanoshiHeaderModel.getClasses()).toEqual(
			'tanoshi-header text-theme-black font-size-6xl text-align-left font-weight-regular'
		);
	});

	test('set text theme', () => {
		const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel();

		tanoshiHeaderModel.setTextTheme(THEMES.Primary);

		expect(tanoshiHeaderModel.getClasses()).toEqual(
			'tanoshi-header text-theme-primary font-size-6xl text-align-left font-weight-regular'
		);
	});

	test('set custom text theme', () => {
		const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel();

		tanoshiHeaderModel.setTextTheme(HEADER_TEXT_THEMES.Primary);

		expect(tanoshiHeaderModel.getClasses()).toEqual(
			'tanoshi-header text-theme-header-text-primary font-size-6xl text-align-left font-weight-regular'
		);
	});

	test('set font size', () => {
		const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel();

		tanoshiHeaderModel.setFontSize(FONT_SIZES['3Xl']);

		expect(tanoshiHeaderModel.getClasses()).toEqual(
			'tanoshi-header text-theme-black font-size-3xl text-align-left font-weight-regular'
		);
	});

	test('set text alignment', () => {
		const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel();

		tanoshiHeaderModel.setTextAlignment(TEXT_ALIGNMENT.Center);

		expect(tanoshiHeaderModel.getClasses()).toEqual(
			'tanoshi-header text-theme-black font-size-6xl text-align-center font-weight-regular'
		);
	});

	test('set font weight', () => {
		const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel();

		tanoshiHeaderModel.setFontWeight(FONT_WEIGHTS.Bold);

		expect(tanoshiHeaderModel.getClasses()).toEqual(
			'tanoshi-header text-theme-black font-size-6xl text-align-left font-weight-bold'
		);
	});

	test('set text transform', () => {
		const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel();

		tanoshiHeaderModel.setTextTransform(TEXT_TRANSFORMS.Capitalize);

		expect(tanoshiHeaderModel.getClasses()).toEqual(
			'tanoshi-header text-theme-black font-size-6xl text-align-left font-weight-regular text-transform-capitalize'
		);
	});

	test('set text decoration', () => {
		const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel();

		tanoshiHeaderModel.setTextDecoration(TEXT_DECORATIONS.Underline);

		expect(tanoshiHeaderModel.getClasses()).toEqual(
			'tanoshi-header text-theme-black font-size-6xl text-align-left font-weight-regular text-decoration-underline'
		);
	});
});
