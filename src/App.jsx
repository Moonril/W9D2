import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarCustom from './components/NavbarCustom'
import MyFooter from './components/MyFooter'
import AllTheBooks from './components/AllTheBooks'


function App() {

  return (
    <>
        <NavbarCustom tema="dark"/>

        <main className='flex-grow-1 bg-dark'>
          
          
          <AllTheBooks />

        </main>


        <MyFooter />
    </>
  )
}

export default App
