import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarCustom from './components/NavbarCustom'
import MyFooter from './components/MyFooter'
// import AllTheBooks from './components/AllTheBooks'
import Welcome from './components/Welcome'
import BookList from './components/BookList'
import libriFantasy from './books/fantasy.json'
import SingleBook from './components/SingleBook'


function App() {

  return (
    <>
        <NavbarCustom tema="dark"/>

        <main className='flex-grow-1 text-center p-3'>
          
          <Welcome />

          <SingleBook img={libriFantasy[7].img} title={libriFantasy[7].title} category={libriFantasy[7].category} price={libriFantasy[7].price} />

          <BookList arrayOfBooks={libriFantasy} />
          {/* <AllTheBooks /> */}

        </main>


        <MyFooter />
    </>
  )
}

export default App
