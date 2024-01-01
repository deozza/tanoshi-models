import { describe } from 'node:test'
import { expect, test } from 'vitest'

import TanoshiInputModel from '../../../../src/lib/atoms/TanoshiInputModels/TanoshiInputModel';
import { THEMES } from '../../../../src/lib/enums/GlobalEnums';
import { INPUT_TEXT_THEMES, INPUT_BACKGROUND_THEMES, INPUT_BORDER_THEMES } from '../../../../src/lib/enums/InputEnums';

describe('TanoshiInputModel', () => {
    test('input id should not be empty at construct', () => {
        expect(() => {
            new TanoshiInputModel('', 'name');
        }).toThrow();
    })

    test('input name should not be empty at construct', () => {
        expect(() => {
            new TanoshiInputModel('id', '');
        }).toThrow();
    })

    test('input id should not be empty at setter', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        expect(() => {
            tanoshiInputModel.setId('');
        }).toThrow();
    })

    test('input name should not be empty at setter', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        expect(() => {
            tanoshiInputModel.setName('');
        }).toThrow();
    })

    test('default classes', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input text-theme-black bg-theme-white bd-theme-black');
    })

    test('set text theme', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        tanoshiInputModel
        .setTextTheme(THEMES.Primary);

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input text-theme-primary bg-theme-white bd-theme-black');
    })

    test('set custom text theme', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        tanoshiInputModel
        .setTextTheme(INPUT_TEXT_THEMES.Primary);

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input text-theme-input-text-primary bg-theme-white bd-theme-black');
    })

    test('set background theme', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        tanoshiInputModel
        .setBackgroundTheme(THEMES.Primary);

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input text-theme-black bg-theme-primary bd-theme-black');
    })

    test('set custom background theme', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        tanoshiInputModel
        .setBackgroundTheme(INPUT_BACKGROUND_THEMES.Primary);

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input text-theme-black bg-theme-input-bg-primary bd-theme-black');
    })

    test('set border theme', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        tanoshiInputModel
        .setBorderTheme(THEMES.Primary);

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input text-theme-black bg-theme-white bd-theme-primary');
    })

    test('set custom border theme', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        tanoshiInputModel
        .setBorderTheme(INPUT_BORDER_THEMES.Primary);

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input text-theme-black bg-theme-white bd-theme-input-bd-primary');
    })

    test('set visible to false', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        tanoshiInputModel
        .setIsVisible(false);

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input hidden');
    })

    test('set disabled to true', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        tanoshiInputModel
        .setIsDisabled(true);

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input text-theme-black bg-theme-white bd-theme-black disabled');
    })

    test('set error to true', () => {
        const tanoshiInputModel: TanoshiInputModel = new TanoshiInputModel('id', 'name');

        tanoshiInputModel
        .setError(true);

        expect(tanoshiInputModel.getClasses()).toEqual('tanoshi-input text-theme-black bg-theme-white bd-theme-black error');
    })
});