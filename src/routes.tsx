import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {ProductRegister} from './pages/ProductRegister/index'
import {DataList} from './pages/DataList/index'
import {EditRegister} from './pages/EditRegister/index'

export const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductRegister />} />
          <Route path="/list" element={<DataList />} />
          <Route path="/editregister/:id" element={<EditRegister />} />
          </Routes>  
      </BrowserRouter>
    )
} 