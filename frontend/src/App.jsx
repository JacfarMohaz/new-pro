import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sideNav'
import Home from './pages/Home'
import BookForm from './components/BookForm'
import BookTable from './components/Books'
import CustomerRegistrationForm from './components/customerRegiter'
import {ToastContainer} from 'react-toastify'
import CustomerTable from './components/CustomerTable'
import UpdateBookForm from './components/UpdataBook'
import CustomerUpdateForm from './components/CustomerUpdate'
import AddOrder from './components/AddOrder'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
     
      
      {/* <Route path='/' element={<CompliantForm/>}/> */}
      {/* Layout Route: Sidebar is the parent layout */}
      <Route path="/dash" element={<Sidebar />}>
        {/* Nested Route under /dash */}
        {/* <Route path="compliant"  /> */}
        <Route path='books' element={<BookTable/>}/>
        <Route path='/dash/addOrder' element={<AddOrder/>}/>
         <Route path='add-book' element={<BookForm/>}/>
        <Route path='customers' element={<CustomerTable/>}/>
      </Route>
      <Route path='/register' element={<CustomerRegistrationForm/>}/>
      <Route path='/update/book/:id' element={<UpdateBookForm/>}/>
      <Route path='/update/customer/:id' element={<CustomerUpdateForm/>}/>
     
    </Routes>
    <ToastContainer/>
    
    </>
  )
}

export default App
