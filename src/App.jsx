import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import applyjo from './pages/applyjo.jsx'
import Applications from './pages/Applications.jsx'
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element = {<Home/>}/>
       <Route path='/apply-job' element = {<applyjo/>}/>
        <Route path='/applications' element = {<Applications/>}/>
      </Routes>
    </div>
  )
}

export default App
