import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Successs } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Successs />} />
      </Route>
    </Routes>
  )
}
