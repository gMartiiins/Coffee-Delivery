import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { PedidoConfirmado } from './pages/PedidoConfirmado'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
          <Route path="/Coffee-Delivery/" element={<Home/>}></Route> 
          <Route path="/Coffee-Delivery/Cart" element={<Cart/>}></Route>
          <Route path="/Coffee-Delivery/PedidoConfirmado" element={<PedidoConfirmado/>}></Route> 
      </Route>
         
    </Routes>
  )
}
