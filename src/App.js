import React from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Home } from './pages'
import { Billing, ConfirmOrder, PersonalInfo, Success } from './components'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact={true} path='/' element={<Home/>}>
            <Route  index path='/' element={<PersonalInfo/>}/>
            <Route  index path='/billing' element={<Billing/>}/>
            <Route  index path='/confirm' element={<ConfirmOrder/>}/>
       </Route>
        <Route  index path='/success' element={<Success/>}/>
    </Routes>
  </Router>
  )
}

export default App
