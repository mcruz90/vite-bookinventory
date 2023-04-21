export interface Book {
    id: string,
    title: string,
    author: string
}

export default class BookItem implements Book {

    constructor(
        private _id: string = '',
        private _title: string = '',
        private _author: string = ''
    ) {}

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get author(): string {
        return this._author;
    }

    set author(author: string) {
        this._author = author;
    }

    


}