import './css/style.css'
import BookList from './model/BookList'
import BookItem from './model/BookItem'
import BookTemplate from './template/BookTemplate'

const initApp = (): void => {
  const bookList = BookList.instance
  const template = BookTemplate.instance

  const bookEntryForm = document.getElementById("bookEntryForm") as HTMLFormElement

  bookEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault()

    const inputTitle = document.getElementById("newBookTitle") as HTMLInputElement
    const newEntryTitle: string = inputTitle.value.trim()
    if (!newEntryTitle.length) return

    const inputAuthor = document.getElementById("newBookAuthor") as HTMLInputElement
    const newEntryAuthor: string = inputAuthor.value.trim()
    if (!newEntryAuthor.length) return
    
    const bookId: number = bookList.list.length
     ? parseInt(bookList.list[bookList.list.length - 1].id) + 1
     : 1

     const newBook = new BookItem(bookId.toString(), newEntryTitle, newEntryAuthor)

     bookList.addItem(newBook)

     template.render(bookList)

     bookEntryForm.reset()
  })

  //const clearBooks = document.getElementById("clearBooksButton") as HTMLButtonElement

  //clearBooks.addEventListener('click', (): void => {
  //  bookList.clearList()
  //  template.clear()
  //})

  bookList.load()
  template.render(bookList)
}

document.addEventListener("DOMContentLoaded", initApp)