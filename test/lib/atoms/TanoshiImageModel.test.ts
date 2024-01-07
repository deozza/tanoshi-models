import { describe } from 'node:test';
import { expect, test } from 'vitest';

import TanoshiImageModel from '../../../src/lib/atoms/TanoshiImageModel';

describe('TanoshiImageModel', () => {
	test('img src should not be empty at construct', () => {
		expect(() => {
			new TanoshiImageModel('', 'alt');
		}).toThrow();
	});

	test('img alt should not be empty at construct', () => {
		expect(() => {
			new TanoshiImageModel('src', '');
		}).toThrow();
	});

	test('img src should not be empty at setter', () => {
		const tanoshiImageModel: TanoshiImageModel = new TanoshiImageModel('src', 'alt');

		expect(() => {
			tanoshiImageModel.setSrc('');
		}).toThrow();
	});

	test('img alt should not be empty at setter', () => {
		const tanoshiImageModel: TanoshiImageModel = new TanoshiImageModel('src', 'alt');

		expect(() => {
			tanoshiImageModel.setAlt('');
		}).toThrow();
	});

	test('check setter return value', () => {
		const tanoshiImageModel: TanoshiImageModel = new TanoshiImageModel('src', 'alt');

		expect(tanoshiImageModel.setSrc('src')).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setAlt('alt')).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setWidth(200)).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setDesktopWidth('200px')).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setMobileWidth('200px')).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setHeight(200)).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setDesktopHeight('200px')).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setMobileHeight('200px')).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setLoadingMethod('lazy')).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setCursor('default')).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setHoverEffectClasses('')).instanceOf(TanoshiImageModel);
		expect(tanoshiImageModel.setFilterClasses('')).instanceOf(TanoshiImageModel);
	});

	test('default classes', () => {
		const tanoshiImageModel: TanoshiImageModel = new TanoshiImageModel('src', 'alt');

		expect(tanoshiImageModel.getClasses()).toEqual('tanoshi-image cursor-default');
	});

	test('set cursor', () => {
		const tanoshiImageModel: TanoshiImageModel = new TanoshiImageModel('src', 'alt');

		tanoshiImageModel.setCursor('pointer');

		expect(tanoshiImageModel.getClasses()).toEqual('tanoshi-image cursor-pointer');
	});

	test('set hover effect classes', () => {
		const tanoshiImageModel: TanoshiImageModel = new TanoshiImageModel('src', 'alt');

		tanoshiImageModel.setHoverEffectClasses('opacity-50');

		expect(tanoshiImageModel.getClasses()).toEqual('tanoshi-image cursor-default hover-opacity-50');
	});

	test('set filter classes', () => {
		const tanoshiImageModel: TanoshiImageModel = new TanoshiImageModel('src', 'alt');

		tanoshiImageModel.setFilterClasses('grayscale');

		expect(tanoshiImageModel.getClasses()).toEqual('tanoshi-image cursor-default filter-grayscale');
	});
});
