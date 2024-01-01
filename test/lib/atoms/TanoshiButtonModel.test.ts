import { describe } from 'node:test'
import { expect, test } from 'vitest'
import TanoshiButtonModel from '../../../src/lib/atoms/TanoshiButtonModel';
import { THEMES } from '../../../src/lib/enums/GlobalEnums';
import { BUTTON_TEXT_THEMES, BUTTON_BACKGROUND_THEMES, BUTTON_BORDER_THEMES, BUTTON_HOVER_TEXT_THEMES, BUTTON_HOVER_BACKGROUND_THEMES, BUTTON_HOVER_BORDER_THEMES } from '../../../src/lib/enums/ButtonEnums';

describe('TanoshiButtonModel', () => {
    test('default classes', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();

        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-white bg-theme-transparent hover:bg-theme-primary bd-theme-transparent hover:bd-theme-primary');
    })

    test('set text theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();
    
        tanoshiButtonModel
        .setTextTheme(THEMES.Primary);
    
        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-primary hover:text-theme-white bg-theme-transparent hover:bg-theme-primary bd-theme-transparent hover:bd-theme-primary');
    })

    test('set custom text theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();
    
        tanoshiButtonModel
        .setTextTheme(BUTTON_TEXT_THEMES.Primary);
    
        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-button-text-primary hover:text-theme-white bg-theme-transparent hover:bg-theme-primary bd-theme-transparent hover:bd-theme-primary');
    })

    test('set hover text theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();
    
        tanoshiButtonModel
        .setHoverTextTheme(THEMES.Secondary);
    
        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-secondary bg-theme-transparent hover:bg-theme-primary bd-theme-transparent hover:bd-theme-primary');
    })

    test('set custom hover text theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();
    
        tanoshiButtonModel
        .setHoverTextTheme(BUTTON_HOVER_TEXT_THEMES.Secondary);
    
        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-button-hover-text-secondary bg-theme-transparent hover:bg-theme-primary bd-theme-transparent hover:bd-theme-primary');
    })

    test('set background theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();
    
        tanoshiButtonModel
        .setBackgroundTheme(THEMES.Secondary);
    
        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-white bg-theme-secondary hover:bg-theme-primary bd-theme-transparent hover:bd-theme-primary');
    })

    test('set custom background theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();
    
        tanoshiButtonModel
        .setBackgroundTheme(BUTTON_BACKGROUND_THEMES.Secondary);
    
        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-white bg-theme-button-bg-secondary hover:bg-theme-primary bd-theme-transparent hover:bd-theme-primary');
    })
    
    test('set hover background theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();

        tanoshiButtonModel
        .setHoverBackgroundTheme(THEMES.Secondary);

        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-white bg-theme-transparent hover:bg-theme-secondary bd-theme-transparent hover:bd-theme-primary');
    })
    
    test('set custom hover background theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();

        tanoshiButtonModel
        .setHoverBackgroundTheme(BUTTON_HOVER_BACKGROUND_THEMES.Secondary);

        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-white bg-theme-transparent hover:bg-theme-button-hover-bg-secondary bd-theme-transparent hover:bd-theme-primary');
    })

    test('set border theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();
    
        tanoshiButtonModel
        .setBorderTheme(THEMES.Primary);

        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-white bg-theme-transparent hover:bg-theme-primary bd-theme-primary hover:bd-theme-primary');
    })

    test('set custom border theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();
    
        tanoshiButtonModel
        .setBorderTheme(BUTTON_BORDER_THEMES.Primary);
    
        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-white bg-theme-transparent hover:bg-theme-primary bd-theme-button-bd-primary hover:bd-theme-primary');
    })

    test('set border theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();

        tanoshiButtonModel
        .setHoverBorderTheme(THEMES.Secondary);

        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-white bg-theme-transparent hover:bg-theme-primary bd-theme-transparent hover:bd-theme-secondary');
    })

    test('set border theme', () => {
        const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel();

        tanoshiButtonModel
        .setHoverBorderTheme(BUTTON_HOVER_BORDER_THEMES.Secondary);

        expect(tanoshiButtonModel.getClasses()).toEqual('tanoshi-button text-theme-white hover:text-theme-white bg-theme-transparent hover:bg-theme-primary bd-theme-transparent hover:bd-theme-button-hover-bd-secondary');
    })
});