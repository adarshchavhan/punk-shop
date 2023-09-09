import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Bears from './pages/Bears'
import {useSelector} from 'react-redux'
import Footer from './components/Footer'

const App = () => {
  const {isAuth} = useSelector(state => state.user);

  return (
    <Router>
      <Routes>
        <Route path='/bears' element={isAuth ? <Bears/> : <Navigate to='/login' />} />
        <Route path='/login' element={!isAuth ? <Login/> : <Navigate to='/bears'/>} />
        <Route path='*' element={isAuth ? <Navigate to='/bears'/> : <Navigate to='/login'/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App