import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./сomponets/Header/Header"
import Footer from "./сomponets/Footer/Footer"
import Content from "./сomponets/Content/Content"
import Delivery from "./сomponets/Delivery/Delivery"
import './App.scss'
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/delivery' element={<Delivery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App
