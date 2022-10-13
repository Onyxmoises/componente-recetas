import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, Title} from './Recetas'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Receta} from './Receta'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Receta' element={<Receta/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
