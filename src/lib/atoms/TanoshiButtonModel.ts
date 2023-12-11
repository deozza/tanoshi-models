export default class TanoshiButtonModel {
    private _content: string;
    private _customClasses: string|null = null;

    constructor(content: string) {
        this._content = content;
    }

    get content(): string {
        return this._content;
    }

    set content(content: string) {
        if (content.length === 0) {
            throw new Error('Header content cannot be empty.');
        }
        this._content = content;
    }

    get customClasses(): string|null {
        return this._customClasses;
    }

    set customClasses(customClasses: string|null) {
        this._customClasses = customClasses;
    }

}