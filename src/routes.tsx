import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {ProductRegister} from './pages/ProductRegister/index'
import {DataList} from './pages/DataList/index'

export const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductRegister />} />
          <Route path="/list" element={<DataList />} />
          </Routes>  
      </BrowserRouter>
    )
} 