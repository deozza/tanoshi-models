import { describe } from 'node:test';
import { expect, test } from 'vitest';

import TanoshiLinkModel from '../../../src/lib/atoms/TanoshiLinkModel';
import { THEMES } from '../../../src/lib/enums/GlobalEnums';
import { LINK_TEXT_THEMES, LINK_HOVER_TEXT_THEMES } from '../../../src/lib/enums/LinkEnums';
import {
	FONT_SIZES,
	TEXT_ALIGNMENT,
	TEXT_DECORATIONS,
	TEXT_TRANSFORMS,
	FONT_WEIGHTS
} from '../../../src/lib/enums/TextEnums';

describe('TanoshiLinkModel', () => {
	test('default classes', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-black hover:text-theme-black font-size-md text-align-left font-weight-regular'
		);
	});

	test('set text theme', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		tanoshiLinkModel.setTextTheme(THEMES.Primary);

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-primary hover:text-theme-black font-size-md text-align-left font-weight-regular'
		);
	});

	test('set custom text theme', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		tanoshiLinkModel.setTextTheme(LINK_TEXT_THEMES.Primary);

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-link-text-primary hover:text-theme-black font-size-md text-align-left font-weight-regular'
		);
	});

	test('set hover text theme', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		tanoshiLinkModel.setHoverTextTheme(THEMES.Primary);

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-black hover:text-theme-primary font-size-md text-align-left font-weight-regular'
		);
	});

	test('set custom hover text theme', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		tanoshiLinkModel.setHoverTextTheme(LINK_HOVER_TEXT_THEMES.Primary);

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-black hover:text-theme-link-hover-text-primary font-size-md text-align-left font-weight-regular'
		);
	});

	test('set font size', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		tanoshiLinkModel.setFontSize(FONT_SIZES['6Xl']);

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-black hover:text-theme-black font-size-6xl text-align-left font-weight-regular'
		);
	});

	test('set text alignment', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		tanoshiLinkModel.setTextAlignment(TEXT_ALIGNMENT.Center);

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-black hover:text-theme-black font-size-md text-align-center font-weight-regular'
		);
	});

	test('set font weight', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		tanoshiLinkModel.setFontWeight(FONT_WEIGHTS.Bold);

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-black hover:text-theme-black font-size-md text-align-left font-weight-bold'
		);
	});

	test('set text transform', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		tanoshiLinkModel.setTextTransform(TEXT_TRANSFORMS.Capitalize);

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-black hover:text-theme-black font-size-md text-align-left font-weight-regular text-transform-capitalize'
		);
	});

	test('set text decoration', () => {
		const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel('/');

		tanoshiLinkModel.setTextDecoration(TEXT_DECORATIONS.Underline);

		expect(tanoshiLinkModel.getClasses()).toEqual(
			'tanoshi-link text-theme-black hover:text-theme-black font-size-md text-align-left font-weight-regular text-decoration-underline'
		);
	});
});
