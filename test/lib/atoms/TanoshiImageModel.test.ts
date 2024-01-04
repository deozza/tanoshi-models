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
