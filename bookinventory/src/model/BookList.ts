import BookItem from "./BookItem";

interface List {
    list: BookItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: BookItem): void,
    removeItem(id: string): void
}

export default class BookList implements List {

    static instance: BookList = new BookList()

    private constructor(private _list: BookItem[] = []){}

    get list(): BookItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myBookList")
        if (typeof storedList !== "string") return

        const parsedList: {
            _id: string,
            _title: string,
            _author: string }[]
         = JSON.parse(storedList)

         parsedList.forEach(itemObj => {
            const newBookItem = new BookItem(itemObj._id, itemObj._title, itemObj._author)
            BookList.instance.addItem(newBookItem)
         })
    }

    save(): void {
        localStorage.setItem("myBookList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: BookItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(book => book.id !== id)
        this.save()
    }

}