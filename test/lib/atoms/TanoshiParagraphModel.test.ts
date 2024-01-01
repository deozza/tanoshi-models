import { describe } from 'node:test'
import { expect, test } from 'vitest'

import TanoshiParagraphModel from '../../../src/lib/atoms/TanoshiParagraphModel';
import { THEMES } from '../../../src/lib/enums/GlobalEnums';
import { PARAGRAPH_TEXT_THEMES } from '../../../src/lib/enums/ParagraphEnums';
import { FONT_SIZES, TEXT_ALIGNMENT, TEXT_DECORATIONS, TEXT_TRANSFORMS, FONT_WEIGHTS } from '../../../src/lib/enums/TextEnums';

describe('TanoshiParagraphModel', () => {
    test('default classes', () => {
        const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();

        expect(tanoshiParagraphModel.getClasses()).toEqual('tanoshi-paragraph text-theme-black font-size-md text-align-left font-weight-regular');
    })

    test('set text theme', () => {
        const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();
    
        tanoshiParagraphModel
        .setTextTheme(THEMES.Primary);
    
        expect(tanoshiParagraphModel.getClasses()).toEqual('tanoshi-paragraph text-theme-primary font-size-md text-align-left font-weight-regular');
    })

    test('set custom text theme', () => {
        const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();
    
        tanoshiParagraphModel
        .setTextTheme(PARAGRAPH_TEXT_THEMES.Primary);
    
        expect(tanoshiParagraphModel.getClasses()).toEqual('tanoshi-paragraph text-theme-paragraph-text-primary font-size-md text-align-left font-weight-regular');
    })

    test('set font size', () => {
        const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();
    
        tanoshiParagraphModel
        .setFontSize(FONT_SIZES['6Xl']);
    
        expect(tanoshiParagraphModel.getClasses()).toEqual('tanoshi-paragraph text-theme-black font-size-6xl text-align-left font-weight-regular');
    })

    test('set text alignment', () => {
        const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();
    
        tanoshiParagraphModel
        .setTextAlignment(TEXT_ALIGNMENT.Center);
    
        expect(tanoshiParagraphModel.getClasses()).toEqual('tanoshi-paragraph text-theme-black font-size-md text-align-center font-weight-regular');
    })

    test('set font weight', () => {
        const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();
    
        tanoshiParagraphModel
        .setFontWeight(FONT_WEIGHTS.Bold);
    
        expect(tanoshiParagraphModel.getClasses()).toEqual('tanoshi-paragraph text-theme-black font-size-md text-align-left font-weight-bold');
    })

    test('set text transform', () => {
        const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();
    
        tanoshiParagraphModel
        .setTextTransform(TEXT_TRANSFORMS.Capitalize);
    
        expect(tanoshiParagraphModel.getClasses()).toEqual('tanoshi-paragraph text-theme-black font-size-md text-align-left font-weight-regular text-transform-capitalize');
    })

    test('set text decoration', () => {
        const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel();
    
        tanoshiParagraphModel
        .setTextDecoration(TEXT_DECORATIONS.Underline);
    
        expect(tanoshiParagraphModel.getClasses()).toEqual('tanoshi-paragraph text-theme-black font-size-md text-align-left font-weight-regular text-decoration-underline');
    })

});