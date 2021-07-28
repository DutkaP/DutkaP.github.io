import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Categories as Products} from './pages/Products'
import {Navbar} from './components/Navbar'
import {AddCategory as AddProduct} from './pages/AddProduct'
import { EditCategory as EditProduct } from './pages/EditProduct'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
     <Switch>
      <Route path={'/'} exact component={Products}/>
      <Route path={'/addcategory'} exact component={AddProduct}/>
      <Route path={'/editcategory/:id'} exact component={EditProduct}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;