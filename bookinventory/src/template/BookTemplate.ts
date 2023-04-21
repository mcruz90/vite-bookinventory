import BookList from "../model/BookList";

interface DOMList {
    table: HTMLTableElement,
    clear(): void,
    render(bookList: BookList): void;
}

export default class BookTemplate implements DOMList {


    table: HTMLTableElement

    static instance: BookTemplate = new BookTemplate()

    private constructor() {
        this.table = document.getElementById("bookTable") as HTMLTableElement
    }
        
    clear(): void {
        this.table.innerHTML = ''
    }

    render(bookList: BookList): void {
        this.clear()

        bookList.list.forEach(book => {

           
            const tr = this.table.insertRow()
            tr.className = "book"


            const tdTitle = tr.insertCell(0)
            tdTitle.textContent = book.title

            const tdAuthor = tr.insertCell(1)
            tdAuthor.textContent = book.author

            const tdButton = tr.insertCell(2)
            
            const buttonDelete = document.createElement("button") as HTMLButtonElement

            buttonDelete.className = 'button'
            buttonDelete.textContent = 'X'

            buttonDelete.addEventListener('click', () => {

                let result = confirm("Are you sure you want to delete this item?")
                
                if (result) {

                    bookList.removeItem(book.id)
                    this.render(bookList)
                }
            })

            tdButton.appendChild(buttonDelete);

           


        })
    }
}