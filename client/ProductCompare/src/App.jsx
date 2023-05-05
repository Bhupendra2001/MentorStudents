//import './App.css'
import { Products } from './component/Products'
import CreateProduct from './component/CreateProduct'
import { UpdateProduct } from './component/UpdateProduct'
import {BrowserRouter as Router , Routes , Route, BrowserRouter} from 'react-router-dom'
import { ComparePage } from './component/ComparePage'
function App() {
 

  return (
   <Router>
   <Routes>
    <Route path='/' element={<Products/>} />
    <Route path='/create' element={<CreateProduct/>} />
    <Route path="/compare" element={<ComparePage/> } />
    <Route path="/update/:id" element={<UpdateProduct/>} />
   </Routes>
   </Router>
  )
}

export default App
