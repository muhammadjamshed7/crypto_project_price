import Navbar from './components/Navbar/Navbar.jsx'
import {Route,Routes} from 'react-router-dom'
import Home from './components/pages/Home/Home.jsx'
import Coin from './components/pages/Coin/Coin.jsx'
const App = () => {
  return (
    <div className="app">
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coin/:coinId" element={<Coin/>}/>
     </Routes>
    </div>
  )
}

export default App
