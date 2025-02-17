import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div class="container-fluid">

        <Header/>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            {/* <Route exact path='/view' element={<Table />}></Route>
            <Route exact path='/login' element={<LoginPage />}></Route>
            <Route exact path='/create' element={<CreateNew />}></Route>
            <Route exact path='/create/dynamic' element={<DynamicDB />}></Route>
            <Route exact path='/create/static' element={<StaticDB />}></Route>
            <Route exact path='*' element={<PageNotFound />}></Route>
            <Route exact path='/update/:id' element={<Update />}></Route> */}
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  )
}

export default App




