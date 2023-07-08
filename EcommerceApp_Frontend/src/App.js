import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import EditProductsPage from './pages/EditProductsPage';
import AddCategoryPage from './pages/AddCategoryPage';
import AddProductsPage from './pages/AddProductsPage';
import EditCategoryPage from './pages/EditCategoryPage';
import Attributes from './pages/Attributes';
import DeleteCategory from './pages/DeleteCategory';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/editProducts/:productId/:categoryId" element={<EditProductsPage />} />
          <Route path="/addProducts" element={<AddProductsPage />} />
          <Route path="/editCategory/:categoryId" element={<EditCategoryPage />} />
          <Route path="/DeleteCategory/" element={<DeleteCategory />} />
          <Route path="AddProduct" element={<AddProductsPage/>}></Route>
          <Route path="/addCategory" element={<AddCategoryPage />} />
          <Route path="/editCategory" element={<EditCategoryPage/>}/>
          <Route path="/attributes/:productId" element={<Attributes />} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
