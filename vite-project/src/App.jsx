import React from 'react'
import './App.css'
import ListDisplay from './components/List'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="HomePage">

<NavBar />
<Sidebar />
<ListDisplay />
<Footer />
      
    </div>
  )
}

export default App;
