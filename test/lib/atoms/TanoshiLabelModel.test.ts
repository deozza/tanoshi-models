import { describe } from 'node:test'
import { expect, test } from 'vitest'

import TanoshiLabelModel from '../../../src/lib/atoms/TanoshiLabelModel';
import { THEMES } from '../../../src/lib/enums/GlobalEnums';
import { FONT_SIZES, TEXT_ALIGNMENT, TEXT_DECORATIONS, TEXT_TRANSFORMS, FONT_WEIGHTS } from '../../../src/lib/enums/TextEnums';
import { LABEL_TEXT_THEMES } from '../../../src/lib/enums/LabelEnums';


describe('TanoshiLabelModel', () => {
    test('default classes', () => {
        const tanoshiLabelModel: TanoshiLabelModel = new TanoshiLabelModel('text');

        expect(tanoshiLabelModel.getClasses()).toEqual('tanoshi-label text-theme-primary font-size-md text-align-left font-weight-regular');
    })

    test('set text theme', () => {
        const tanoshiLabelModel: TanoshiLabelModel = new TanoshiLabelModel('text');
    
        tanoshiLabelModel
        .setTextTheme(THEMES.Primary);
    
        expect(tanoshiLabelModel.getClasses()).toEqual('tanoshi-label text-theme-primary font-size-md text-align-left font-weight-regular');
    })

    test('set custom text theme', () => {
        const tanoshiLabelModel: TanoshiLabelModel = new TanoshiLabelModel('text');
    
        tanoshiLabelModel
        .setTextTheme(LABEL_TEXT_THEMES.Primary);
    
        expect(tanoshiLabelModel.getClasses()).toEqual('tanoshi-label text-theme-label-text-primary font-size-md text-align-left font-weight-regular');
    })

    test('set font size', () => {
        const tanoshiLabelModel: TanoshiLabelModel = new TanoshiLabelModel('text');
    
        tanoshiLabelModel
        .setFontSize(FONT_SIZES['6Xl']);
    
        expect(tanoshiLabelModel.getClasses()).toEqual('tanoshi-label text-theme-primary font-size-6xl text-align-left font-weight-regular');
    })

    test('set text alignment', () => {
        const tanoshiLabelModel: TanoshiLabelModel = new TanoshiLabelModel('text');
    
        tanoshiLabelModel
        .setTextAlignment(TEXT_ALIGNMENT.Center);
    
        expect(tanoshiLabelModel.getClasses()).toEqual('tanoshi-label text-theme-primary font-size-md text-align-center font-weight-regular');
    })

    test('set font weight', () => {
        const tanoshiLabelModel: TanoshiLabelModel = new TanoshiLabelModel('text');
    
        tanoshiLabelModel
        .setFontWeight(FONT_WEIGHTS.Bold);
    
        expect(tanoshiLabelModel.getClasses()).toEqual('tanoshi-label text-theme-primary font-size-md text-align-left font-weight-bold');
    })

    test('set text transform', () => {
        const tanoshiLabelModel: TanoshiLabelModel = new TanoshiLabelModel('text');
    
        tanoshiLabelModel
        .setTextTransform(TEXT_TRANSFORMS.Capitalize);
    
        expect(tanoshiLabelModel.getClasses()).toEqual('tanoshi-label text-theme-primary font-size-md text-align-left font-weight-regular text-transform-capitalize');
    })

    test('set text decoration', () => {
        const tanoshiLabelModel: TanoshiLabelModel = new TanoshiLabelModel('text');
    
        tanoshiLabelModel
        .setTextDecoration(TEXT_DECORATIONS.Underline);
    
        expect(tanoshiLabelModel.getClasses()).toEqual('tanoshi-label text-theme-primary font-size-md text-align-left font-weight-regular text-decoration-underline');
    })

    test('set is visible', () => {
        const tanoshiLabelModel: TanoshiLabelModel = new TanoshiLabelModel('text');
    
        tanoshiLabelModel
        .setIsVisible(false);
    
        expect(tanoshiLabelModel.getClasses()).toEqual('tanoshi-label hidden');
    })

});